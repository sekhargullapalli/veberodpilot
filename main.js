$(document).ready(function () {
    //renderBattery(0.5);
    updateBatteryDisplay(0.5);
    updateTelemetry();

});

function renderBattery(bat_level){   
    var level = bat_level * 100;
    var batteryLevel = jQuery('.battery .battery-level');
    batteryLevel.css('width', level + '%');
    batteryLevel.text(level + '%');
    if (level > 50) {
        batteryLevel.addClass('high');
    } else if (level >= 25) {
        batteryLevel.addClass('medium');
    } else {
        batteryLevel.addClass('low');
    }
}

function updateTelemetry(){
    var url ='https://europe-west3-vaquita-technologies.cloudfunctions.net/veberodpilottelemetry?stationid=10&maxlimit=1';
    $.ajax({url:url,
        success:function(data,status,xhr){
            var res = JSON.parse(data);
            var d = new Date(res[0].LoggedAt);         
            $('#valLL').html(d.toLocaleString());
            $('#valT').html(res[0].Temperature.toFixed(2));
            $('#valPH').html(res[0].pH.toFixed(2));
            $('#valO2').html(res[0].OxygenDissolved.toFixed(2));
            $('#valLAM').html(res[0].ElectricalConductivity.toFixed(2));
            $('#valBGA').html(res[0].DissolvedSolidsTotal.toFixed(2));
            $('#valTUR').html(res[0].Turbidity.toFixed(2));
            var blevel =res[0].BatteryLevel;
            updateBatteryDisplay(blevel.toFixed(2));
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