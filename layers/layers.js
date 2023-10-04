ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Shiiii_1 = new ol.format.GeoJSON();
var features_Shiiii_1 = format_Shiiii_1.readFeatures(json_Shiiii_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shiiii_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shiiii_1.addFeatures(features_Shiiii_1);cluster_Shiiii_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Shiiii_1
});
var lyr_Shiiii_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Shiiii_1, 
                style: style_Shiiii_1,
                interactive: true,
                title: '<img src="styles/legend/Shiiii_1.png" /> Shiiii'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Shiiii_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Shiiii_1];
lyr_Shiiii_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Kwikwi_TYPE': 'Kwikwi_TYPE', });
lyr_Shiiii_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Kwikwi_TYPE': 'TextEdit', });
lyr_Shiiii_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'header label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Kwikwi_TYPE': 'no label', });
lyr_Shiiii_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});