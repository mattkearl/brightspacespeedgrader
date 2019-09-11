window.onload = myFunction;
function myFunction() {

var str = window.location.href;

    
if (str.substr(0,70) == "https://learn.snhu.edu/d2l/lms/dropbox/admin/mark/folder_user_mark.d2l") {
    $(function(){
            $('#z_z').css("display", "none");
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

    
//Assignment Rubric Page
else if (str.substr(0,60) == "https://learn.snhu.edu/d2l/common/dialogs/nonModal/blank.d2l") {
        $(function(){
        setTimeout(function(){
            var iFrameDOM = $("iframe").contents(); //Load iFrame contents

            // Add feedback button at top
            iFrameDOM.find(".dco_c").prepend( "<textarea id='feedbackfield' style='width: 400px; height:100px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); float:left;'></textarea><div id='feedbacksubmit' style='display:block; border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:150px; margin-left: 410px;'>Import into Rubric</div>");
            //Style Font size and add form fields 
            iFrameDOM.find("html").css("font-size", "14px"); // change total font size
            
            //Label the table to access later.
            var s1 = iFrameDOM.find(".dco_c d2l-rubric")[0].shadowRoot;
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

            
            
            //Imports Text to Feedback Forms
            // Click on the Submit Feedback and it parses the text and submits it in each feedback form
            iFrameDOM.find("#feedbacksubmit").on("click", function(){

                var lines = iFrameDOM.find("#feedbackfield").val().split('\n'); //break out textarea to array of feedback items
                var sections = $(table).find(".col1"); // Find each row in col1


                sections.each(function (index) {
                    setTimeout(function () {
                        var i = index + 1;
                        $(table).find(".row" + i + " d2l-button-subtle").click();

                        setTimeout(function () {
                            var fb1 = $(table).find("d2l-tbody #feedback" + index + " d2l-rubric-feedback")[0].shadowRoot;
                            var fb2 = $(fb1).find("d2l-input-textarea")[0].shadowRoot;
                            var textarea = $(fb2).find("textarea").val(lines[index]);
                        }, 300);
                    }, 500*index);
                });
            });

        }, 1000);
        });
} // End if statement









//Discussion Rubric
 else if (str.substr(0,30) == "https://learn.snhu.edu/d2l/le/") {
    $(function(){
    setTimeout(function(){
        var iFrameDOM = $("iframe").contents(); //Load iFrame contents

        // Add feedback button at top
        iFrameDOM.find(".dco_c .dco .first-rubric ").prepend( "<textarea id='feedbackfield' style='width: 400px; height:100px; box-sizing: border-box;  border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; background-color:rgb(249,250,251);color:rgb(86,90,92); float:left;'></textarea><div id='feedbacksubmit' style='display:block; border:#d3d9e3 1px solid; padding:5px; margin-bottom:5px; font-weight:bold;text-align:center;cursor:pointer; background-color:rgb(249,250,251);color:rgb(86,90,92); width:150px; margin-left: 410px;'>Import into Rubric</div><div style='clear:both;'></div>");

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



        //Imports Text to Feedback Forms
        // Click on the Submit Feedback and it parses the text and submits it in each feedback form
        iFrameDOM.find("#feedbacksubmit").on("click", function(){

            var lines = iFrameDOM.find("#feedbackfield").val().split('\n'); //break out textarea to array of feedback items
            var sections = $(table).find(".col1"); // Find each row in col1


            sections.each(function (index) {
                setTimeout(function () {
                    var i = index + 1;
                    $(table).find(".row" + i + " d2l-button-subtle").click();

                    setTimeout(function () {
                        var fb1 = $(table).find("d2l-tbody #feedback" + index + " d2l-rubric-feedback")[0].shadowRoot;
                        var fb2 = $(fb1).find("d2l-input-textarea")[0].shadowRoot;
                        var textarea = $(fb2).find("textarea").val(lines[index]);
                    }, 200);
                }, 800*index);
            });
        });





    }, 1000);
    });
}





















//end jQuery
}
























