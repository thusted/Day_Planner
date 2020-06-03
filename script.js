$(document).ready(function() {
    const currentDate = moment().format("dddd, MMMM Do");

    //Get the current day and display it on the top of the page
    $("#currentDay").text(currentDate);

    //Saving tasks to localStorage
    $("#9amBtn").click(function(e){
        let nineAmTask = $("#9amTask").val();
        localStorage.setItem("9amTask", JSON.stringify(nineAmTask));
    });

    $("#10amBtn").click(function(e){
        let tenAmTask = $("#10amTask").val();
        localStorage.setItem("10amTask", JSON.stringify(tenAmTask));
    });

    $("#11amBtn").click(function(e){
        let elevenAmTask = $("#11amTask").val();
        localStorage.setItem("11amTask", JSON.stringify(elevenAmTask));
    });

    $("#12pmBtn").click(function(e){
        let twelvePmTask = $("#12pmTask").val();
        localStorage.setItem("12pmTask", JSON.stringify(twelvePmTask));
    });

    $("#1pmBtn").click(function(e){
        let onePmTask = $("#1pmTask").val();
        localStorage.setItem("1pmTask", JSON.stringify(onePmTask));
    });

    $("#2pmBtn").click(function(e){
        let twelvePmTask = $("#2pmTask").val();
        localStorage.setItem("2pmTask", JSON.stringify(twelvePmTask));
    });

    $("#3pmBtn").click(function(e){
        let threePmTask = $("#3pmTask").val();
        localStorage.setItem("3pmTask", JSON.stringify(threePmTask));
    });

    $("#4pmBtn").click(function(e){
        let fourPmTask = $("#4pmTask").val();
        localStorage.setItem("4pmTask", JSON.stringify(fourPmTask));
    });

    $("#5pmBtn").click(function(e){
        let fivePmTask = $("#5pmTask").val();
        localStorage.setItem("5pmTask", JSON.stringify(fivePmTask));
    });

    //Retrieve tasks from local storage and display them in their respective text fields
    function getTasks() {
        let nineAMTask = JSON.parse(localStorage.getItem("9amTask"));
        let tenAMTask = JSON.parse(localStorage.getItem("10amTask"));
        let elevenAMTask = JSON.parse(localStorage.getItem("11amTask"));
        let twelvePMTask = JSON.parse(localStorage.getItem("12pmTask"));
        let onePMTask = JSON.parse(localStorage.getItem("1pmTask"));
        var twoPMTask = JSON.parse(localStorage.getItem("2pmTask"));
        var threePMTask = JSON.parse(localStorage.getItem("3pmTask"));
        var fourPMTask = JSON.parse(localStorage.getItem("4pmTask"));
        var fivePMTask = JSON.parse(localStorage.getItem("5pmTask"));

        $("#9amTask").val(nineAMTask);
        $("#10amTask").val(tenAMTask);
        $("#11amTask").val(elevenAMTask);
        $("#12pmTask").val(twelvePMTask);
        $("#1pmTask").val(onePMTask);
        $("#2pmTask").val(twoPMTask);
        $("#3pmTask").val(threePMTask);
        $("#4pmTask").val(fourPMTask);
        $("#5pmTask").val(fivePMTask);
    };
    
    //Updating the planner (classes and colors) based on current hour
    $(".time-block").each(function() {
        let time;
        let afterNoon;
        let currentHour = moment().hour();

        hour = $(this).children(".hour");
        hour = hour.text();
        time = hour.substring(0,2);
        time = parseInt(time);
        afterNoon = hour.substring(6,8);

        if (afterNoon==="PM" && time != 12) {
            time += 12;
        };

        if(time < currentHour){
            $(this).addClass("past");
        };

        if(time === currentHour) {
            $(this).addClass("present");
        };

        if(time > currentHour) {
            $(this).addClass("future");
        };
    });
    
    getTasks();
});