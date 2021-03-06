// Copyright 2002-2007.  Adobe Systems, Incorporated.  All rights reserved.
// Make the Red and Blue channels the active channels,

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// in case we double clicked the file
app.bringToFront();

// debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
$.level = 1;
// debugger; // launch debugger on next line

// on localized builds we pull the $$$/Strings from a .dat file, see documentation for more details
$.localize = true;
var strChannelRed = localize("$$$/ColorModes/RGB/ChannelName/Red=Red");
var strChannelGreen = localize("$$$/ColorModes/RGB/ChannelName/Green=Green");
var strChannelBlue = localize("$$$/ColorModes/RGB/ChannelName/Blue=Blue");

if (!app.documents.length > 0) {    // open sample file if no document is opened.
    var strSamplesFolderDirectory = localize( "$$$/LocalizedFilenames.xml/SourceDirectoryName/id/Extras/[LOCALE]/[LOCALE]_Samples/value=Samples" );
    var strSampleFileNameLayerComps = localize ("$$$/LocalizedFilenames.xml/SourceFileName/id/Extras/[LOCALE]/[LOCALE]_Samples/Layer_Comps.psd/value=Layer Comps.psd");
    var fileName = app.path.toString() + "/" + strSamplesFolderDirectory + "/" + strSampleFileNameLayerComps;
    var docRef = open( File(fileName) );
}

docRef = app.activeDocument;
theChannels = new Array(docRef.channels[strChannelRed], docRef.channels[strChannelGreen], docRef.channels[strChannelBlue]);
docRef.activeChannels = theChannels;
