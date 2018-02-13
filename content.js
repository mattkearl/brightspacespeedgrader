window.onload = myFunction;
function myFunction() {
   
    var str = window.location.href;

//Main Grading Page  
    if (str.substr(0,70) == "https://learn.snhu.edu/d2l/lms/dropbox/admin/mark/folder_user_mark.d2l") {
        $(function(){
                //$('#z_w').css("position", "relative"); 
                //$('#z_dg').css("position", "absolute");
                //$('#z_dg').css("top", "0px");
                //$('#z_dg').css("right", "0px");
                $('#z_z').css("display", "none");
                $('#z_bc').css("display", "none");   
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
                iFrameDOM.find(".d2l-typography .d2l-body-compact").css("line-height", "0.6rem"); // change line height
                iFrameDOM.find("tr td:first-of-type:not(tr[last-row] td:first-of-type)").click(); // click first td of all tr not last
                iFrameDOM.find("tr[last-row] td:last-of-type span").click(); // open the comments box

                //css("background-color","red");
            });

        }, 2000);
    }
    
   
}
