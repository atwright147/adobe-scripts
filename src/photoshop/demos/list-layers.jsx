/// <reference types="types-for-adobe/Photoshop/2015.5"/>

// #target photoshop
// #targetengine transient

const allLayers = app.activeDocument.layers;
const allLayerNames = [];
for (var i = 0; i < allLayers.length; i++) {
    allLayerNames[i] = app.activeDocument.layers[i].name;
}

prompt('Layers Names:', allLayerNames.join('\n'));
