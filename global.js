const nameMapping = {
    "temperature": "Temperature",
    "ph": "pH",
    "oxygendissolved": "Oxygen Dissolved",
    "electricconductivity": "Electric Conductivity",
    "bga": "Blue Green Algae",
    "trubidity": "Turbidity",
    "current": "Current",
    "batterylevel": "Battery Level"
}
const telemetryMapping = {
    "temperature": "Temperature",
    "ph": "pH",
    "oxygendissolved": "OxygenDissolved",
    "electricconductivity": "ElectricalConductivity",
    "bga": "DissolvedSolidsTotal",
    "trubidity": "Trubidity",
    "current": "DissolvedSolidsTotal",
    "batterylevel": "BatteryLevel"
}

function GetTelemetryValue(res, param) {
    console.log(res);
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
        case "electricconductivity":
            return res.ElectricalConductivity.toFixed(2);
            break;
        case "bga":
            return res.DissolvedSolidsTotal.toFixed(2);
            break;
        case "trubidity":
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
