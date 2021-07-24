$(document).ready(function () {   

    if (!localStorage.stationid)
        localStorage.stationid = 10;
        if (!localStorage.param0)
        localStorage.param0 = "batterylevel";
    if (!localStorage.param1)
        localStorage.param1 = "temperature";
    if (!localStorage.param2)
        localStorage.param2 = "ph";
    if (!localStorage.param3)
        localStorage.param3 = "oxygendissolved";
    if (!localStorage.param4)
        localStorage.param4 = "electricalconductivity";
    if (!localStorage.param5)
        localStorage.param5 = "bga";
    if (!localStorage.param6)
        localStorage.param6 = "turbidity";

    $("#lb_param1").html(nameMapping[localStorage.param1]);
    $("#lb_param2").html(nameMapping[localStorage.param2]);
    $("#lb_param3").html(nameMapping[localStorage.param3]);
    $("#lb_param4").html(nameMapping[localStorage.param4]);
    $("#lb_param5").html(nameMapping[localStorage.param5]);
    $("#lb_param6").html(nameMapping[localStorage.param6]);

    document.getElementById("span_resetall").addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    },false);
    

    document.getElementById("a_param0").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param0;
    },false);

    document.getElementById("a_param1").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param1;
    },false);

    document.getElementById("a_param2").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param2;
    },false);

    document.getElementById("a_param3").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param3;
    },false);

    document.getElementById("a_param4").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param4;
    },false);

    document.getElementById("a_param5").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param5;
    },false);

    document.getElementById("a_param6").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param6;
    },false);
    
    updateBatteryDisplay(0.5);

    updateTelemetry();
    // $(".spincontainer").css("cssText", "display: none;");            
    // $(".batterycontainer").css("cssText", "display:block;");
    // $(".telemetrycontainer").css("cssText", "display:block;");
    // $(".lastlogcontainer").css("cssText", "display:block;");

});

function updateTelemetry(){
    var url ="https://europe-west3-vaquita-technologies.cloudfunctions.net/veberodpilottelemetry?stationid="+ localStorage.stationid + "&maxlimit=1";    
    $.ajax({url:url,
        success:function(data,status,xhr){

            $(".spincontainer").css("cssText", "display: block;");            
            $(".batterycontainer").css("cssText", "display:none;");
            $(".telemetrycontainer").css("cssText", "display:none;");
            $(".lastlogcontainer").css("cssText", "display:none;");

            $('#sp_statid').html("Station ID <span class='stationidcontainer badge teal black-text'>"+localStorage.stationid+"</span>");

            var res = JSON.parse(data);
            if(res.length==0){
                alert("No data available");
                $(".spincontainer").css("cssText", "display: none;");
                return;
            }                   
            var d = new Date(res[0].LoggedAt);                     
            $('#valLL').html(d.toLocaleString());
            
            $('#val_param1').html(GetTelemetryValue(res[0],localStorage.param1));
            $('#val_param2').html(GetTelemetryValue(res[0],localStorage.param2));
            $('#val_param3').html(GetTelemetryValue(res[0],localStorage.param3));
            $('#val_param4').html(GetTelemetryValue(res[0],localStorage.param4));
            $('#val_param5').html(GetTelemetryValue(res[0],localStorage.param5));
            $('#val_param6').html(GetTelemetryValue(res[0],localStorage.param6));            

            
            var blevel =res[0].BatteryLevel;
            updateBatteryDisplay(blevel.toFixed(2));
            
            $(".spincontainer").css("cssText", "display: none;");            
            $(".batterycontainer").css("cssText", "display:block;");
            $(".telemetrycontainer").css("cssText", "display:block;");
            $(".lastlogcontainer").css("cssText", "display:block;");

        },
        error:function(jqXhr, textStatus, errorMessage){
            alert('Cannot access server!')
        }
    });
}
function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return newDate;
}