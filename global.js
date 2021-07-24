const nameMapping = {
    "temperature": "Temperature",
    "ph": "pH",
    "oxygendissolved": "Oxygen Dissolved",
    "electricalconductivity": "Electric Conductivity",
    "bga": "Blue Green Algae",
    "turbidity": "Turbidity",
    "current": "Current",
    "batterylevel": "Battery Level"
}
const telemetryMapping = {
    "temperature": "Temperature",
    "ph": "pH",
    "oxygendissolved": "OxygenDissolved",
    "electricalconductivity": "ElectricalConductivity",
    "bga": "DissolvedSolidsTotal",
    "turbidity": "Turbidity",
    "current": "DissolvedSolidsTotal",
    "batterylevel": "BatteryLevel"
}
const telemetryColorMapping = {
    "temperature": '#66a3ff',
    "ph": "orange",
    "oxygendissolved": "green",
    "electricalconductivity": "red",
    "bga": "white",
    "turbidity": "teal",
    "current": "white",
    "batterylevel": "yellow"
}


function GetTelemetryValue(res, param) {
    switch (param) {
        case "temperature":
            return res.Temperature.toFixed(2);
            break;
        case "ph":
            return res.pH.toFixed(2);
            break;
        case "oxygendissolved":
            return res.OxygenDissolved.toFixed(2);
            break;
        case "electricalconductivity":
            return res.ElectricalConductivity.toFixed(2);
            break;
        case "bga":
            return res.DissolvedSolidsTotal.toFixed(2);
            break;
        case "turbidity":
            return res.Turbidity.toFixed(2);
            break;
        case "current":
            return res.DissolvedSolidsTotal.toFixed(2);
            break;
        case "batterylevel":
            return res.BatteryLevel.toFixed(2);
            break;
    }

}
