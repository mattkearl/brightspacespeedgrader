window.onload = myFunction;
function myFunction() {

var str = window.location.href;

    
//Assignment Rubric Page
if (str.substr(0,60) == "https://learn.snhu.edu/d2l/common/dialogs/nonModal/blank.d2l") {
   //$("iframe.ddial_c_frame").on("load", function () {
        //$(function(){
    
        $(function(){
        setTimeout(function(){

            
            
            
           
            // Dig down through the various shadows to get to where we want to be
            
            var columns = document.querySelector('iframe').contentDocument.
                querySelector('.dco_c d2l-rubric').shadowRoot.
                querySelector("d2l-rubric-criteria-groups").shadowRoot.
                querySelector("d2l-rubric-criteria-group").shadowRoot.
                querySelectorAll("d2l-th"), i;

            for (i = 0; i < columns.length; ++i) {
              columns[i].addEventListener("click", selectColumn);
            }
            
            
            function selectColumn {
              alert(Date());
            }
            
            
            
            var iFrameDOM = $("iframe").contents(); //Load iFrame contents
            
            
            //alert (iFrameDOM.find(".dco_c").text());
            
            //var s2 = $(s1).find("d2l-rubric-criteria-groups").shadowRoot;
            
          
            //find("d2l-rubric-criteria-groups").append("Test");
            
        
            
            
            //var shadow2 = $(shadow1).find("d2l-rubric-criteria-groups").shadowRoot;
            //var shadow3 = $(shadow2).find("d2l-rubric-criteria-group").shadowRoot;
            //var shadow4 = $(shadow3).find("d2l-table").shadowRoot;
            //var shadow5 = $(shadow4).find("d2l-thead").shadowRoot;
            //var shadow6 = $(shadow5).find("d2l-th").prepend("NewTest");;
            //alert (shadow6);
            

            // Get URLs from link elements.
            //const urls = links.map((obj, el) => el.href);
            
            //document.querySelector('core-scaffold::shadow .someclass')
            
            //Style Font size and add form fields 
            iFrameDOM.find("html").css("font-size", "14px"); // change total font size
            
            iFrameDOM.find(".dco_c").prepend( "<textarea id='feedbackfield' style='width: 400px; height:100px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); float:left;'></textarea><div id='feedbacksubmit' style='display:block; border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:150px; margin-left: 410px;'>Import into Rubric</div>"); // Add feedback button at top
            
            //iFrameDOM.find("d2l-th").prepend("Test");
            
            
            //This allows the user to click on a category and select the sub-categories
            iFrameDOM.find(".d2l-button-subtle-content").on("click", function(){
                //iFrameDOM.find(".m-criterion__levels label:nth-child(1) .m-criterion__content").click(); // click Exemplary on all categories
                alert("working");
            });
            
        }, 2000);   
        });
        //});
    //});
} // End if statement




//end jQuery
}