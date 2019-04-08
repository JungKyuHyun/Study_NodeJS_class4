<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    //출력 미리보기
function fnPrintPreview() {
     
    var top = "";
    var left = "";
    var height = "";
    var width = "";
     
    var agent = navigator.userAgent.toLowerCase(); 
     
    if (agent.indexOf("chrome") != -1) {
         
        top = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
        left = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
         
        top = top + 160;
        height = window.innerHeight;
        height = height -110;
        width = window.innerWidth;
         
    }else{
         
        top = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
        left = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
        //var height = window.outerHeight;
        //var width = window.outerWidth;
         
        top = top + 110;
        height = window.innerHeight;
        height = height -110;
        width = window.innerWidth;
         
    }
     
    jQuery('#top').val(top);
    jQuery('#left').val(left);
    jQuery('#height').val(height);
    jQuery('#width').val(width);   
     
    console.log(document.printPreviewForm.top.value);
    console.log(document.printPreviewForm.left.value);
    console.log(document.printPreviewForm.height.value);
    console.log(document.printPreviewForm.width.value);
     
    jQuery.ajax({
        url:'/nor/map/mapmain/captureScreen.do',
        data:jQuery("#printPreviewForm").serialize(),
        type: 'POST',
        dataType:"json",
        beforeSend:function(){
             
        },
        success:function(data){
            try{
                //운영서버 반영시 확인해야 함!!
                //var imageSrc = data.imageSrc.replace("C:/eGovFrameDev-3.0.0-32bit/workspace/NOR/src/main/webapp/", "/nor/");
                 
                var strUrl = window.location.protocol + "//" + window.location.host;
                strUrl += "/nor/map/mapmain/selectPrintSpatialAnalysisView.do?";
                strUrl += "&imageSrc=" + data.imageSrc;
                strUrl += "&imagePrintSrc=" + data.imagePrintSrc;
                 
                if (gn_winPrintPreview_spatialAnalysis == null){
                    gn_winPrintPreview_spatialAnalysis = window.open(strUrl, "PrintSpatialAnalysisView", "titlebar=yes, toolbar=no, scrollbars=yes, resizable=yes, top=0, left=0, width=815, height=800");
                }else{
                    gn_winPrintPreview_spatialAnalysis.location = strUrl;
                }                  
                 
                //gn_winPrintPreview_spatialAnalysis.focus();
                 
            }catch(e){
                alert(e);
            }          
        },
        error:function(e){
            if(e.responseText.indexOf("해당 기능에 대한 권한이 없습니다.") > -1){
                //alert(e.responseText);
                alert("해당 기능에 대한 권한이 없습니다.");
            }else{
                alert(e.responseText);
            }
        }
    });
     
}


출처: https://jinmanp.tistory.com/entry/dd [개발자노트]
</body>
</html>