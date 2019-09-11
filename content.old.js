window.onload = myFunction;
function myFunction() {

var str = window.location.href;

//Assignment Grading Page 
if (str.substr(0,70) == "https://learn.snhu.edu/d2l/lms/dropbox/admin/mark/folder_user_mark.d2l") {
    $(function(){
            //$('#z_bq').css("position", "relative");
            //$('#dsl_pmv').css("position", "absolute");
            //$('#dsl_pmv').css("top", "0px");
            //$('#z_dg').css("right", "0px");
            $('#z_z').css("display", "none");
            ///$('#z_bc').css("display", "none");
            $('hr.D2LSeparator').css("display", "none");
            $('.d2l-typography').css("font-size", ".75rem");
        
        
            //This function will wait till TINYMCE is loaded, then go grab the name and display it in the form box if it is emtpy.
            setTimeout(function () {
                var name = $("#z_h div div div label span.ds_b").text().split(" ")[0] + ", <br>";
                var iFrameDOM = $("#feedback iframe").contents();                
                if (iFrameDOM.find("body").text().length <= 0) {
                    iFrameDOM.find("p").prepend(name);
                }  
            }, 300);    
        
            
        });

}
        
    
//Normal Assignment Rubric Grading Sheet

else if (str.substr(0,60) == "https://learn.snhu.edu/d2l/common/dialogs/nonModal/blank.d2l") {
    $("iframe.ddial_c_frame").on("load", function () {

        $(function(){
            var iFrameDOM = $("iframe").contents();

            iFrameDOM.find("html").css("font-size", "14px"); // change total font size
            iFrameDOM.find("table>tbody>tr:first-of-type>th").css("cursor", "pointer"); // change cursor to pointer when over criteria option
            iFrameDOM.find(".d2l-typography .d2l-body-compact").css("line-height", "0.6rem"); // change line height
            iFrameDOM.find("div.dco>div.dco_c>div.dco>div.dco_c").css({
                                        "position" : "absolute",
                                        "margin-top" : "10px;",
                                        "left" : "15px"
                                        }); // change location of edit buttons
            
            
            

            // Add feedback button at top

            iFrameDOM.find(".d2l-grid-container").prepend( "<div id='feedbacksubmit' style='display:block; border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:150px; margin-left: 410px;'>Import into Rubric</div>");
            
            // Add the box to leave overall feedback at top
            iFrameDOM.find(".d2l-grid-container").prepend( "<div id='grademe' style='border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:150px; margin-left: 410px;'>Overall Feedback</div>" );
            
            // Add feedback field at top
            iFrameDOM.find(".d2l-grid-container").prepend( "<textarea id='feedbackfield' style='width: 400px; height:100px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); float:left;'></textarea>");
            
            //.inner-wrapper   this was the old class that it used to identify where to put the buttons.
            
            // Click on the Submit Feedback and it parses the text and submits it in each feedback form
            iFrameDOM.find("#feedbacksubmit").on("click", function(){
                var lines = iFrameDOM.find("#feedbackfield").val().split('\n'); //break out textarea to array of feedback items
                var buttons2click = iFrameDOM.find(".dco_c .di_l .di_s_icon d2l-icon"); //access the iframe for use

                //apply unique id to each feedback button id = feedback#
                buttons2click.each(function (index) {
                    $(this).attr('id', 'feedback'+ index);
                });
                

                
                //Look through each rubric item, click on the edit icon, then import the feedback item, and hit save.
                 for (var i = 0; i < buttons2click.length-4; i++) {
                   
                    (function (i) {
                        setTimeout(function () {
                            iFrameDOM.find("#feedback"+i).click(); // Click each link

                            //$("div.d2l-dragdrop-draggable ~ div.ddial_c>iframe").on("load", function () {
                                
                            setTimeout(function(){
                                $("div.d2l-dragdrop-draggable ~ div.ddial_c>iframe").contents().find("iframe").contents().find("body>p").html(lines[i]);
                                
                                $("div.ddial_o div.ddial_o2 div.ddial_i table.d2l-dialog-buttons tbody tr td button.d2l-button[primary]").click();
                                
                            }, 2000);
                            //});
                                                                                    
                            
                        }, 2500*i);
                    })(i);
                
                };
                

            });  

            // Click on the Overall Feedback and it clicks on the last edit button
            iFrameDOM.find("#grademe").on("click", function(){
                iFrameDOM.find("tr[last-row] td:last-of-type span").click(); // open the overall comments box
            });
            
            iFrameDOM.find("table>tbody>tr:first-of-type>th").hover(function(){
              $(this).css("background-color", "#f0f5ff");
              }, function(){
              $(this).css("background-color", "#f9fbff");
            }); // This will change the background color of the columns to indicate you can click on them.
            
            
            
            // Click the top column and select all items under it.
            iFrameDOM.find("table>tbody>tr:first-of-type>th").each(function(index) { 
                $(this).on("click", function(){

                   iFrameDOM.find("tr td:nth-of-type(" + index + "):not(tr[last-row] td:first-of-type)").click(); // clicks on all radio buttons of that criteria.
                });
            });

        });

    });
}



// Discussion Rubric Auto Grader
else if (str.substr(0,30) == "https://learn.snhu.edu/d2l/le/") {

      $(function(){



        setTimeout(function(){
        var iFrameDOM = $("iframe").contents();

        iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(2)").on("click", function(){
            iFrameDOM.find(".m-criterion__levels label:nth-child(1) .m-criterion__content").click(); // click 100% on all categories
        });
        iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(3)").on("click", function(){
            iFrameDOM.find(".m-criterion__levels label:nth-child(2) .m-criterion__content").click(); // click 100% on all categories
        });
        iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(4)").on("click", function(){
            iFrameDOM.find(".m-criterion__levels label:nth-child(3) .m-criterion__content").click(); // click 100% on all categories
        });
        iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(5)").on("click", function(){
            iFrameDOM.find(".m-criterion__levels label:nth-child(4) .m-criterion__content").click(); // click 100% on all categories
        });







        //iFrameDOM.find("html").css("font-size", "14px"); // change total font size


        // Add feedback button at top
        iFrameDOM.find(".d2l-evaluation-header-image").before( "<textarea id='feedbackfield' style='width:230px; height:90px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); float:left;' placeholder='Add feedback line by line for each rubric line'></textarea><div id='feedbacksubmit' style='display:block; border:#d3d9e3 1px solid; padding:5px; margin: 1px 0 0 0; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:120px;float:left;'>Import into Rubric</div>");

        // Click on the Submit Feedback and it parses the text and submits it in each feedback form
        iFrameDOM.find("#feedbacksubmit").on("click", function(){

        //iFrameDOM.find(".m-criteriaGroup__header>div").on("click", function(){

            var lines = iFrameDOM.find("#feedbackfield").val().split('\n'); //break out textarea to array of feedback items
            var sections = iFrameDOM.find(".m-criterion--container"); //access the iframe for use



            //apply unique id to each feedback button id = feedback#
            sections.each(function (index) {
                //$(this).find(".m-criterion__feedbackLink").attr('id', 'feedback'+ index);
                //iFrameDOM.find("#feedback"+index).click();
                //$(this).find(".m-feedback__editable").attr('id', 'feedbackbox'+ index);



                $(this).attr('id', 'feedback'+ index); // tag each row of the rubric with an identifier

                setTimeout(function () {

                    iFrameDOM.find("#feedback" + index + " .m-criterion__feedbackLink").click();
                        setTimeout(function () {
                            iFrameDOM.find("#feedback" + index + " .m-feedback__editable div.m-htmlBlock p").text(lines[index]);
                        }, 300);
                }, 500*index);
             });





         });
    


    }, 1000);
    });
    
    
}





    
// Discussion Board Assessment
 else if (str.substr(0,69) == "https://learn.snhu.edu/d2l/lms/grades/admin/enter/grade_item_edit.d2l") {




    /*

     $(function(){
          $('.d2l-table .d2l-table-cell-last a').click(function () { 
              setTimeout(function(){
                    $('.d2l-dialog').css({
                                        "height" : "calc(100vh - 75px)"
                                        }); // set height and width of dialog bog that pops up.

                    var iFrameDOM = $("iframe").contents();

                    // Add feedback button at top
                    iFrameDOM.find("section.m-rubric analytic-rubric h2").after( "<div id='feedbacksubmit' style='display:block; border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:150px; margin-left: 410px;'>Import into Rubric</div><div style='clear:both';");

                    // Add feedback field at top
                    iFrameDOM.find("section.m-rubric analytic-rubric h2").after("<textarea id='feedbackfield' style='width: 400px; height:100px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); float:left;'></textarea>");

                    // Click on the Submit Feedback and it parses the text and submits it in each feedback form
                    iFrameDOM.find("#feedbacksubmit").on("click", function(){
                        var lines = iFrameDOM.find("#feedbackfield").val().split('\n'); //break out textarea to array of feedback items
                        var sections = iFrameDOM.find(".m-criterion--container"); //access the iframe for use



                        //apply unique id to each feedback button id = feedback#
                        sections.each(function (index) {
                            $(this).find(".m-criterion__feedbackLink").attr('id', 'feedback'+ index);
                            iFrameDOM.find("#feedback"+index).click();
                            $(this).find(".m-feedback__editable").attr('id', 'feedbackbox'+ index);

                            setTimeout(function () {
                                if (index==0) {
                                    alert("Please be patient, this one take a bit longer.");
                                    iFrameDOM.find("#feedbackbox"+index).click(); // Click each link

                                }
                                else {
                                    iFrameDOM.find("#feedbackbox"+index).click(); // Click each link
                                }


                                setTimeout(function(){
                                    iFrameDOM.find("#feedbackbox"+index).find("p").text(lines[index]);

                                }, 2000);

                                iFrameDOM.find("#feedbackbox" + index + " + .m-feedback__linkContainer div").click();

                            }, 3000*index);
                         });

                    });






                    iFrameDOM.find(".m-rubricApp .m-rubric__name").css("font-size", "14px"); // change html font size


                    iFrameDOM.find("html").css("font-size", "14px"); // change html font size
                    iFrameDOM.find(".m-rubricApp .m-criterion__description").css({
                                                                                "font-size" : "8px",
                                                                                "line-height" : "8px"
                                                                                });
                    iFrameDOM.find(".m-rubricApp .m-overallScore__description").css({
                                                                                "font-size" : "8px",
                                                                                "line-height" : "8px"
                                                                                });




                    iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(2)").on("click", function(){
                        iFrameDOM.find(".m-criterion__levels label:nth-child(1) .m-criterion__content").click(); // click 100% on all categories
                    });
                    iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(3)").on("click", function(){
                        iFrameDOM.find(".m-criterion__levels label:nth-child(2) .m-criterion__content").click(); // click 100% on all categories
                    });
                    iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(4)").on("click", function(){
                        iFrameDOM.find(".m-criterion__levels label:nth-child(3) .m-criterion__content").click(); // click 100% on all categories
                    });
                    iFrameDOM.find(".m-criteriaGroup__header>div:nth-child(5)").on("click", function(){
                        iFrameDOM.find(".m-criterion__levels label:nth-child(4) .m-criterion__content").click(); // click 100% on all categories
                    });







              }, 3000);
           });





        });

    */


} //last else if



}