window.onload = myFunction;

var loadtime = localStorage.getItem("loadtime");
var rubrictime = localStorage.getItem("rubrictime");

if (loadtime) {}
else {
    loadtime = 2500;
    localStorage.setItem("loadtime", loadtime);
}

if (rubrictime) {}
else {
    rubrictime = 200;
    localStorage.setItem("rubrictime", rubrictime);
}

function myFunction() {
var str = window.location.href;





if (str.substr(0,70) == "https://learn.snhu.edu/d2l/lms/dropbox/admin/mark/folder_user_mark.d2l") {
    $(function(){
            $('#z_z').css("display", "none");
            $('hr.D2LSeparator').css("display", "none");
            $('.d2l-typography').css("font-size", ".75rem");
            //This function will wait till TINYMCE is loaded, then go grab the name and display it in the form box if it is emtpy.
            setTimeout(function () {
                //var name = $("#z_h div div div label span.ds_b").text().split(" ")[0] + ", <br>";
                var name = $(".dco_c .d_tl label strong").text().split(" ")[0];
                var iFrameDOM = $("#feedback iframe").contents();
                //if (iFrameDOM.find("body").text().length <= 0) {
                //    iFrameDOM.find("p").prepend(name);
                //}
                //Look to see if their name exists in it already. If not, then add it to the top.
                if (iFrameDOM.find("body").text().indexOf(name) >= 0) {
                         //doesn't add the name if it is already there.
                    }

                else {
                        //adds the name to the top before your comments.
                        iFrameDOM.find("p:first-of-type").prepend(name + ", <br>");
                       }
            }, 300);
        });

}


//Assignment Rubric Page
else if (str.substr(0,60) == "https://learn.snhu.edu/d2l/common/dialogs/nonModal/blank.d2l") {
    $(function(){
    setTimeout(function(){
        var iFrameDOM = $("iframe").contents(); //Load iFrame contents

        // Add feedback button at top
        iFrameDOM.find(".dco_c").prepend( "<div id='fixedbox' style='position:fixed; top:10px; right:30px; z-index:10000;background-color: rgba(255,255,255,0.5);'><textarea id='feedbackfield' style='width: 400px; height:60px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); float:left;'></textarea><div id='grademe' style='display: block; border: #d3d9e3 1px solid; padding: 5px 10px; font-weight: bold; text-align: center; cursor: pointer; background-color: rgb(249,250,251); color: rgb(86,90,92); margin-left: 410px; width:50px;'>Grade</div><div id='feedbacksubmit' style='display:block; border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:60px; margin-left: 410px;'>Import</div><!--<h6 style='color:#5d6061; margin-left:410px; font-size:10px;'>If you feel I've earned a 'thank you' for the Speed Grader,<br><a target='blank' style='font-weight:bold;color:#006fbf;' href='https://paypal.me/mkearl'>Please Donate $5</a>. Not supported by SNHU</h6>--></div>");

        //Move the close button
        $("#d2l_body").find(".d2l-button").css({"position":"fixed",
                                                              "top":"65px",
                                                              "right":"18px"
                                                              });


        //Style Font size and add form fields
        iFrameDOM.find("html").css("font-size", "14px"); // change total font size

        //Label the table to access later.
        var s1 = iFrameDOM.find(".dco_c d2l-rubric")[0].shadowRoot;
        var s2 = $(s1).find("div d2l-rubric-criteria-groups")[0].shadowRoot;
        var table_top = $(s2).find("d2l-rubric-criteria-group")[0].shadowRoot;
        var table = $(table_top).find("d2l-table");


        // Label every cell in the tbody with a row# and col#
        var rows = $(table).find("d2l-tbody d2l-tr"); // start looking for all rows in body of table.


        $.each(rows, function(index_r) {
            var i_r = index_r + 1;
            var cols = $(table).find("d2l-tbody d2l-tr:nth-of-type(" + i_r + ") d2l-td"); // start looking for all columns in body of table.
            $.each(cols, function(index_c) {
                var i_c = index_c + 1;
                var row = $(table).find("d2l-tbody d2l-tr:nth-of-type(" + i_r + ") d2l-td:nth-of-type(" + i_c + ")").addClass("row" + i_r + " col" + i_c);
            });
        });

        //Assign the event handler click to each column to be clicked on, then execute the click on the sub areas.
        $.each($(table).find("d2l-th"), function(i) {
            $(table).find("d2l-th:nth-of-type(" + i + ")").on("click", function(){
                var new_i = i + 1;
                $(table).find(".col" + new_i).click();
            });
        });

        //Grade everything 100% if clicking the grade button
        iFrameDOM.find("#grademe").on("click", function(){
                $(table).find(".col2").click();
        });


        /*trying to speed this up
        $(table).find("d2l-th:nth-of-type(1)").on("click", function(){
            $(table).find(".col2").click();
        });*/




        //Imports Text to Feedback Forms
        // Click on the Submit Feedback and it parses the text and submits it in each feedback form
        iFrameDOM.find("#feedbacksubmit").on("click", function(){

            var lines = iFrameDOM.find("#feedbackfield").val().split('\n'); //break out textarea to array of feedback items
            var sections = $(table).find(".col1"); // Find each row in col1. Each section is essentially the add feedback section.

            function checksections (sections) {
                //look inside sections for indicator it is complete
                // return those that are not filled out
                //return array of missing ones
                var missing = [];
                var index = 0;
                while (index < sections.length) {
                    if (!$(table).find("d2l-tbody #feedback" + index).length) {
                        missing.push(index);
                    }
                    else {
                        $(".d2l-button").css("background-color","green");
                    }
                    index++;
                }
                return missing;
            }


            function setFeedback(sectionarray) {
                var timer = 0;
                var iteration = 0;
                for (let index of sectionarray) {
                   setTimeout(function () {
                        var i = index + 1;
                        $(table).find(".row" + i + " d2l-button-subtle").click();
                        setTimeout(function () {
                            /*var fb1 = $(table).find("d2l-tbody #feedback" + index + " d2l-rubric-feedback")[0].shadowRoot;
                            var dummyInput = $(fb1).find("d2l-input-textarea")[0];
                            var fb2 = dummyInput.shadowRoot;
                            var textarea = $(fb2).find("textarea").val(lines[index]);
                            dummyInput.dispatchEvent(new Event('input'));
                            if (iteration == sectionarray.length) {
                                setFeedback(checksections(sections));
                            } // check to see if there are missed sections*/ // this is the old code. Keeping it just in case for now.


                            var fb1 = $(table).find("d2l-tbody #feedback" + index + " d2l-rubric-feedback")[0].shadowRoot;
                            var feedbackBox = $(fb1).find("d2l-input-textarea")[0]; //Identify Feedback Box
                            var fb2 = feedbackBox.shadowRoot;
                            var TextAreaBox = $(fb2).find("textarea").val(lines[index]); //Identify the textarea box
                            var dummyinput = $(fb2).find("textarea")[0]; //Identify text Box
                            dummyinput.dispatchEvent(new Event('input')); // mimic text entered in the textbox
                            feedbackBox.dispatchEvent(new Event('input')); // mimic text entered in the backback box. We need both of these.
                            if (iteration == sectionarray.length) { setFeedback(checksections(sections));} // check to see if there are missed sections



                        }, 1);
                    iteration++;
                    }, rubrictime*timer); //how fast it runs through items on rubric
                    timer++;
                }
            }


            var preload = [];
            var index = 0;
            while (index < sections.length) {
                preload.push(index);
                index++;
            }
            setFeedback(preload); // run the function to set the numbers.

        });
    }, loadtime); //wait 2 seconds until iframe loads
    });
} // End if statement




//Add the name to an individual discussion page
    else if (str.substr(36,21) == "/discussions/threads/") {

    $(function(){

        //This function will wait till TINYMCE is loaded, then go grab the name and display it in the form box if it is emtpy.

        $("#replyThreadTopButton").on("click", function(){

            setTimeout(function () {
                // Get the name from the student and select the first name
                var name = $("div.vui-emphasis").text().split(' posted')[0].split(" ")[0];

                // Look in the frame
                var iFrameDOM = $("iframe").contents();

                //Look to see if their name exists in it already. If not, then add it to the top.
                if (iFrameDOM.find("body").text().indexOf(name) >= 0) {
                         //doesn't add the name if it is already there.
                    }

                else {
                        //adds the name to the top before your comments.
                        iFrameDOM.find("p:first-of-type").prepend(name + ", <br>");
                       }
            }, 1000);

        });

    });

} // End if statement









//Discussion Rubric
 else if (str.substr(0,30) == "https://learn.snhu.edu/d2l/le/") {
    $(function(){
    setTimeout(function(){
        var iFrameDOM = $("iframe").contents(); //Load iFrame contents

        // Add feedback button at top
        iFrameDOM.find(".dco_c .dco .first-rubric ").prepend( "<textarea id='feedbackfield' style='width: 310px; height: 80px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); position:fixed; z-index:10000; top:10px; margin-left:325px;'></textarea><div id='feedbacksubmit' style='display: block; border: #d3d9e3 1px solid; padding: 5px 10px; font-weight: bold; text-align: center; cursor: pointer; background-color: rgb(249,250,251); color: rgb(86,90,92); margin-left: 250px; position: fixed; top: 55px; z-index: 10000;'>Import</div><div id='grademe' style='display: block; border: #d3d9e3 1px solid; padding: 5px 10px; font-weight: bold; text-align: center; cursor: pointer; background-color: rgb(249,250,251); color: rgb(86,90,92); margin-left: 250px; position: fixed; top: 10px; z-index: 10000;'>Grade</div><!--<h6 style='color:#5d6061; margin-left:410px; font-size:10px;'>If you feel I've earned a 'thank you' for the Speed Grader,<br><a target='blank' style='font-weight:bold;color:#006fbf;' href='https://paypal.me/mkearl'>Please Donate $5</a>. Not supported by SNHU</h6>--><div style='clear:both;'></div>");

        iFrameDOM.find("html").css("font-size", "14px"); // change total font size


        //Label the table to access later.
        var s1 = iFrameDOM.find(".dco_c .dco .first-rubric d2l-rubric")[0].shadowRoot;
        var s2 = $(s1).find("d2l-rubric-criteria-groups")[0].shadowRoot;
        var table = $(s2).find("d2l-rubric-criteria-group")[0].shadowRoot;

        // Label every cell in the tbody with a row# and col#
        var rows = $(table).find("d2l-tbody d2l-tr"); // start looking for all rows in body of table.

        $.each(rows, function(index_r) {
            var i_r = index_r + 1;
            var cols = $(table).find("d2l-tbody d2l-tr:nth-of-type(" + i_r + ") d2l-td"); // start looking for all columns in body of table.
            $.each(cols, function(index_c) {
                var i_c = index_c + 1;
                var row = $(table).find("d2l-tbody d2l-tr:nth-of-type(" + i_r + ") d2l-td:nth-of-type(" + i_c + ")").addClass("row" + i_r + " col" + i_c);
            });
        });

        //Assign the event handler click to each column to be clicked on, then execute the click on the sub areas.
        $.each($(table).find("d2l-th"), function(i) {
            $(table).find("d2l-th:nth-of-type(" + i + ")").on("click", function(){
                var new_i = i + 1;
                $(table).find(".col" + new_i).click();
            });
        });

        //Grade everything 100% if clicking the grade button
        iFrameDOM.find("#grademe").on("click", function(){

                $(table).find(".col2").click();

        });



        //Imports Text to Feedback Forms
        // Click on the Submit Feedback and it parses the text and submits it in each feedback form
        iFrameDOM.find("#feedbacksubmit").on("click", function(){

            var lines = iFrameDOM.find("#feedbackfield").val().split('\n'); //break out textarea to array of feedback items
            var sections = $(table).find(".col1"); // Find each row in col1

            function checksections (sections) {
                //look inside sections for indicator it is complete
                // return those that are not filled out
                //return array of missing ones
                var missing = [];
                var index = 0;
                while (index < sections.length) {
                    if (!$(table).find("d2l-tbody #feedback" + index).length) {
                        missing.push(index);
                    }
                    else {
                        $(".d2l-button").css("background-color","green");
                    }
                    index++;
                }
                return missing;
            }


            function setFeedback(sectionarray) {
                var timer = 0;
                var iteration = 0;
                for (let index of sectionarray) {
                   setTimeout(function () {
                        var i = index + 1;
                        $(table).find(".row" + i + " d2l-button-subtle").click();
                        setTimeout(function () {
                            var fb1 = $(table).find("d2l-tbody #feedback" + index + " d2l-rubric-feedback")[0].shadowRoot;
                            var feedbackBox = $(fb1).find("d2l-input-textarea")[0]; //Identify Feedback Box
                            var fb2 = feedbackBox.shadowRoot;
                            var TextAreaBox = $(fb2).find("textarea").val(lines[index]); //Identify the textarea box
                            var dummyinput = $(fb2).find("textarea")[0]; //Identify text Box
                            dummyinput.dispatchEvent(new Event('input')); // mimic text entered in the textbox
                            feedbackBox.dispatchEvent(new Event('input')); // mimic text entered in the backback box. We need both of these.
                            if (iteration == sectionarray.length) { setFeedback(checksections(sections));} // check to see if there are missed sections

                        }, 1);
                    iteration++;
                    }, rubrictime*timer);
                    timer++;
                }
            }
            var preload = [];
            var index = 0;
            while (index < sections.length) {
                preload.push(index);
                index++;
            }
            setFeedback(preload); // run the function to set the numbers.

        });

    }, loadtime);
    });
}









//end jQuery
}
























