// sample Titanium app.js app to test that things are working,
// this assumes your hardware supports BLE and it's switched on.
// you can use checkAvailability() to see if it's supported, but
// we don't do that here just because we're lazy.

var TiBeacons = null;

if (Ti.Platform.name == "android") {
	TiBeacons = require('com.liferay.beacons');
} else if (Ti.Platform.name == "iPhone OS") {
	TiBeacons = require('org.beuckman.tibeacons');
} else {
	console.log("beacons not supported on " + Ti.Platform.name);
}
// make a window with buttons to start and stop monitoring
var window = Titanium.UI.createWindow({
    title:'iBeacon Test',
    backgroundColor:'#fff'
});

var b1 = Titanium.UI.createButton({
    title: "Start Ranging"
});

var stop = Titanium.UI.createButton({
    title: "Stop Ranging"
});

var beaconRangesCallback = function(e) {
	var beacon = e.beacons[0];
	var label = l11;
	var text;
	for (i = 0; i < e.beacons.length; i++)
	{
	beacon = e.beacons[i];	
	
	switch (beacon.minor)
	{
		case '1903':
			label = l1;
			text = 'gelo 1903';
			break;
		case '1904':
			label = l2;		
			text = 'gelo 1904';
			break;
		case '27484':
			label = l3;
			text = 'estimote purple';
			break;
		case '57920':
			label = l4;
			text = 'estimote blue';
			break;
		case '37863':
			label = l5;
			text = 'estimote green';
			break;
		case '41895':
			label = l6;
			text = 'V69S';
			break;
		case '19526':
			label = l7;
			text = 'Hf8r';
			break;
		case '65158':
			label = l8;
			text = 'tDdN';
			break;
		case '47732':
			label = l9;
			text = 'aVEf';
			break;
		case '34361':
			label = l10;
			text = 'Hnj8';
	}
	label.setText(text + " " + beacon.proximity + " " + beacon.accuracy + " " + beacon.rssi);	
	}
	l11.setText(e.beacons.length);
};

b1.addEventListener('click', function(e) {
	// add the listener for beacon region monitoring
    TiBeacons.addEventListener("beaconRanges", beaconRangesCallback);
    
    // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for GeLo beacon 1',
      uuid: '11E44F09-4EC4-407E-9203-CF57A50FBCE0',
      major: 0,
      minor: 1903
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for GeLo beacon 2',
      uuid: '11e44f09-4ec4-407e-9203-cf57a50fbce0',
      major: 0,
      minor: 1904
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Estimote purple',
      uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
      major: 51352,
      minor: 27484
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Estimote blue',
      uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
      major: 40424,
      minor: 57920
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Estimote green',
      uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
      major: 14608,
      minor: 37863
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt V69S',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      major: 20318,
      minor: 41895
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt Hf8r',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      major: 12114,
      minor: 19526
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt tDdN',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      major: 35451,
      minor: 65158
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt aVEf',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      major: 10058,
      minor: 47732
    });
 
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt Hnj8',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      major: 32949,
      minor: 34361
    });
    
}); 
    
stop.addEventListener('click', function(e) {
    // stop everything
    TiBeacons.stopRangingForAllBeacons();
    TiBeacons.stopRangingForBeacons();
    TiBeacons.removeEventListener("beaconRanges", beaconProximityCallback);
    
    l11.setText("stopped");
});

var l0 = Ti.UI.createLabel({text: "Beacon info:"});
var l1 = Ti.UI.createLabel({});
var l2 = Ti.UI.createLabel({});
var l3 = Ti.UI.createLabel({});
var l4 = Ti.UI.createLabel({});
var l5 = Ti.UI.createLabel({});
var l6 = Ti.UI.createLabel({});
var l7 = Ti.UI.createLabel({});
var l8 = Ti.UI.createLabel({});
var l9 = Ti.UI.createLabel({});
var l10 = Ti.UI.createLabel({});
var l11 = Ti.UI.createLabel({});


var win = Ti.UI.createScrollView();

win.setLayout('vertical');

win.add(l0);
win.add(l1);
win.add(l2);
win.add(l3);
win.add(l4);
win.add(l5);
win.add(l6);
win.add(l7);
win.add(l8);
win.add(l9);
win.add(l10);
win.add(l11);



win.add(b1);
win.add(stop);


window.add(win);

window.open();
