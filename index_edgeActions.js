/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         var counter = sym.getVariable("Counter");
         sym.setVariable("Counter", ++counter);
         sym.$("Counter").html(counter);
         sym.play(2);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BaseButton}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if(sym.getVariable("isPlaying")) {
         	sym.$("ButtonText").html('START');
         	sym.setVariable("isPlaying", false);
         	sym.stop();
         }
         else {
         	sym.$("ButtonText").html('PAUSE');
         	sym.setVariable("isPlaying", true);
         	sym.play();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.setVariable("isPlaying", false);
         sym.setVariable("Counter", 0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-12290032");