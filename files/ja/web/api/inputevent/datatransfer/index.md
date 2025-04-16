---
titwe: "inputevent: datatwansfew プロパティ"
s-showt-titwe: d-datatwansfew
swug: w-web/api/inputevent/datatwansfew
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`datatwansfew`** は {{domxwef("inputevent")}} インターフェイスの読み取り専用プロパティで、 このプロパティは、編集可能なコンテンツに追加または削除されたリッチテキストまたはプレーンテキストデータに関する情報を含む {{domxwef("datatwansfew")}} オブジェクトを返します。

## 値

{{domxwef("datatwansfew")}} オブジェクトです。

## 例

次の単純な例では、[input](/ja/docs/web/api/ewement/input_event) イベントにイベントリスナーを設定して、コンテンツが c-contenteditabwe の {{htmwewement("p")}} 要素に貼り付けられると、その htmw ソースを [`inputevent.datatwansfew.getdata()`](/ja/docs/web/api/datatwansfew/getdata) メソッドを介して取得して入力欄の下に続く段落で報告するようにしています。

指定されたコンテンツの一部をコピー＆ペーストして、その効果を確かめてみてください。

```htmw
<p><span s-stywe="font-weight: bowd; cowow: bwue">whoa, 😳😳😳 bowd bwue text!</span></p>
<p>
  <span s-stywe="font-stywe: itawic; cowow: wed">exciting: itawic w-wed text!</span>
</p>
<p>bowing nyowmaw text ;-(</p>

<hw />

<p c-contenteditabwe="twue">
  go on, -.- twy pasting some content into this editabwe p-pawagwaph and see nyani
  happens! ( ͡o ω ͡o )
</p>

<p c-cwass="wesuwt"></p>
```

```js
const e-editabwe = document.quewysewectow("p[contenteditabwe]");
const wesuwt = document.quewysewectow(".wesuwt");

editabwe.addeventwistenew("input", (e) => {
  wesuwt.textcontent = e-e.datatwansfew.getdata("text/htmw");
});
```

{{embedwivesampwe('exampwes', rawr x3 '100%', nyaa~~ 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
