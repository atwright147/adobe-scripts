/// <reference types="types-for-adobe/Photoshop/2015.5"/>

// #target 'photoshop-160.064'
// #targetengine 'transient'

app.displayDialogs = DialogModes.NO;

const allLayers = app.activeDocument.layers;

// hide all layers
for (var i = 0; i < allLayers.length; i++) {
    app.activeDocument.layers[i].visible = false;
}

// create masks
for (var i = 0; i < allLayers.length; i++) {
    var layerName = app.activeDocument.layers[i].name;

    if (/Matte/.test(layerName)) {
        try {
            app.activeDocument.layers[i].visible = true;

            var doc = app.activeDocument;
            var channelRef = doc.channels.getByName("Red");
            doc.selection.load(channelRef, SelectionType.REPLACE);
            $.writeln(doc.selection.bounds);

            var selAlpha = app.activeDocument.channels.add();
            app.activeDocument.selection.store(selAlpha);
            app.activeDocument.selection.deselect();
            selAlpha.name = layerName;

            app.activeDocument.layers[i].visible = false;
        } catch (err) {
            // do nothing
        }
    }
}

// show all layers
for (var i = 0; i < allLayers.length; i++) {
    app.activeDocument.layers[i].visible = true;
}
