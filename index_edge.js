/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'BaseButton',
            type:'rect',
            rect:['220px','244px','110px','27px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[1,"rgb(184, 105, 105)","none"]
         },
         {
            id:'ButtonText',
            type:'text',
            rect:['258px','252px','auto','auto','auto','auto'],
            text:"START",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',10,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'edgeanimateicon',
            type:'image',
            rect:['184px','34px','184px','184px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edgeanimateicon.png",'0px','0px']
         },
         {
            id:'Counter',
            type:'text',
            rect:['276','120','auto','auto','auto','auto'],
            text:"0",
            align:"center",
            font:['Arial Black, Gadget, sans-serif',10,"rgba(255,255,255,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_ButtonText}": [
            ["style", "top", '252.02px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '258px'],
            ["style", "font-size", '10px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_edgeanimateicon}": [
            ["style", "top", '34px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '184px']
         ],
         "${_BaseButton}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "top", '244.02px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "border-color", 'rgba(184,105,105,1.00)'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '220px']
         ],
         "${_Counter}": [
            ["style", "top", '224px'],
            ["style", "left", '234px'],
            ["style", "font-size", '10px'],
            ["color", "color", 'rgba(17,16,73,1.00)'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '84px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid34", tween: [ "style", "${_Counter}", "font-size", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "transform", "${_edgeanimateicon}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid51", tween: [ "transform", "${_edgeanimateicon}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
            { id: "eid46", tween: [ "transform", "${_edgeanimateicon}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid47", tween: [ "transform", "${_edgeanimateicon}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
            { id: "eid41", tween: [ "style", "${_Counter}", "width", '84px', { fromValue: '84px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-12290032");
