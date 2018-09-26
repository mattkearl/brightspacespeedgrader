window.onload = myFunction;
function myFunction() {

    var str = window.location.href;

//Main Grading Page
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
            });

    }

//Rubric Grading Sheet
    else if (str.substr(0,60) == "https://learn.snhu.edu/d2l/common/dialogs/nonModal/blank.d2l") {
        setTimeout(function(){
            //window.moveTo(0,0);
            window.resizeTo(750, 1000);
            //window.focus();

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

                iFrameDOM.find("table").prepend( "<div id='grademe' style='border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92);'>Overall Feedback</div>" );// Add the box to leave overall feedback at top

                iFrameDOM.find("#grademe").on("click", function(){
                    iFrameDOM.find("tr[last-row] td:last-of-type span").click(); // open the overall comments box
                });

                iFrameDOM.find("table>tbody>tr:first-of-type>th").each(function(index) {
                    $(this).on("click", function(){

                       iFrameDOM.find("tr td:nth-of-type(" + index + "):not(tr[last-row] td:first-of-type)").click(); // clicks on all radio buttons of that criteria.
                    });
                });


               //iFrameDOM.find("tr[last-row] td:last-of-type span").click(); // open the comments box


            });

        }, 1000);
    }

// Discussion Board Assessment
    
 
     else if (str.substr(0,69) == "https://learn.snhu.edu/d2l/lms/grades/admin/enter/grade_item_edit.d2l") {
     
    //else if (str.substr(0,30) == "https://learn.snhu.edu/d2l/le/") {

         $(function(){
              $('.d2l-table .d2l-table-cell-last a').click(function () { 
                  setTimeout(function(){
                        $('.d2l-dialog').css({
                                            "height" : "calc(100vh - 75px)"
                                            }); // set height and width of dialog bog that pops up.
                      
                        var iFrameDOM = $("iframe").contents();
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
                            
                         
                      
                      
                      
                      
                      
                  }, 2500);
               });
              
             
             
               
               
            });
         
        
                
                
            
    } //last else if

    

}
