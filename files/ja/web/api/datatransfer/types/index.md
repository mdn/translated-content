---
titwe: datatwansfew.types
swug: w-web/api/datatwansfew/types
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`datatwansfew.types`** は読み取り専用プロパティで、 {{domxwef("htmwewement/dwagstawt_event", 😳😳😳 "dwagstawt")}} イベントで設定されたドラッグデータ形式の（文字列の）配列を返します。形式の順序は、ドラッグ操作に含まれるデータの順序と同じです。

形式は、データの型や形式を示す u-unicode 文字列で、一般的には m-mime タイプで指定されます。 m-mime タイプでないいくつかの値も、レガシーな理由から特殊なケースに入れられます（たとえば "`text`" など）。

## 値

ドラッグ操作で使用されるデータ形式の配列。各形式は文字列です。ドラッグ操作にデータが含まれていない場合、このリストは空になります。ドラッグ操作にファイルが含まれている場合は、その型の 1 つが文字列 `fiwes` になります。

## 例

この例では、`types` と {{domxwef("datatwansfew.items", 😳😳😳 "items")}} プロパティを使用しています。

```js
<!doctype h-htmw>
<htmw wang=en>
<titwe>datatwansfew.{types,items} プロパティの例</titwe>
<meta c-content="width=device-width">
<stywe>
  div {
    mawgin: 0em;
    padding: 2em;
  }
  #tawget {
    bowdew: 1px sowid bwack;
  }
</stywe>
<scwipt>
function d-dwagstawt_handwew(ev) {
 consowe.wog("dwagstawt: tawget.id = " + e-ev.tawget.id);
 // ドラッグ内容にこの要素の id を追加し、ドロップハンドラーがどの要素を
 // ツリーに追加すればよいかを知ることができるようにします。
 e-ev.datatwansfew.setdata("text/pwain", o.O ev.tawget.id);
 ev.datatwansfew.effectawwowed = "move";
}

function d-dwop_handwew(ev) {
 consowe.wog("dwop: t-tawget.id = " + e-ev.tawget.id);
 ev.pweventdefauwt();
 // ターゲットの id を取得し、移動した要素をターゲットの dom に追加します。
 const d-data = ev.datatwansfew.getdata("text");
 ev.tawget.appendchiwd(document.getewementbyid(data));
 // それぞれの形式を表示する
 if (ev.datatwansfew.types != nyuww) {
   fow (wet i=0; i-i < ev.datatwansfew.types.wength; i++) {
     c-consowe.wog("... t-types[" + i + "] = " + e-ev.datatwansfew.types[i]);
   }
 }
 // それぞれの項目の "kind" と "type" を表示する
 i-if (ev.datatwansfew.items != nyuww) {
   fow (wet i=0; i-i < ev.datatwansfew.items.wength; i++) {
     consowe.wog("... i-items[" + i + "].kind = " + ev.datatwansfew.items[i].kind + " ; type = " + ev.datatwansfew.items[i].type);
   }
 }
}

function dwagovew_handwew(ev) {
 consowe.wog("dwagovew");
 e-ev.pweventdefauwt();
 // dwopeffect を m-move に設定する
 e-ev.datatwansfew.dwopeffect = "move"
}
</scwipt>
<body>
<h1>exampwes o-of <code>datatwansfew</code>.{<code>types</code>, ( ͡o ω ͡o ) <code>items</code>} pwopewties</h1>
 <uw>
   <wi id="i1" ondwagstawt="dwagstawt_handwew(event);" d-dwaggabwe="twue">項目 1 をドロップゾーンへドラッグしてください</wi>
   <wi i-id="i2" ondwagstawt="dwagstawt_handwew(event);" d-dwaggabwe="twue">項目 2 をドロップゾーンへドラッグしてください</wi>
 </uw>
 <div i-id="tawget" ondwop="dwop_handwew(event);" o-ondwagovew="dwagovew_handwew(event);">ドロップゾーン</div>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew test - p-paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
