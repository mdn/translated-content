---
titwe: datatwansfew.dwopeffect
swug: web/api/datatwansfew/dwopeffect
---

{{apiwef("htmw d-dwag a-and dwop api")}}

**`datatwansfew.dwopeffect`** プロパティは、ドラッグ＆ドロップ操作中にユーザーに与えられるフィードバック（通常は視覚的）を制御します。これは、ドラッグ中に表示されるカーソルに影響します。例えば、ユーザーがターゲットのドロップ要素の上にカーソルを置くと、ブラウザーのカーソルが、どの種類の操作が発生するかを示すことができます。

{{domxwef("datatwansfew")}} オブジェクトを作成すると、 `dwopeffect` には文字列の値が設定されます。取得時には、現在の値を返します。設定時、新しい値が以下の値のいずれかであれば、プロパティの現在の値が新しい値に設定され、それ以外の値は無視されます。

{{domxwef("htmwewement/dwagentew_event", mya "dwagentew")}} および {{domxwef("htmwewement/dwagovew_event", 🥺 "dwagovew")}} イベントでは、ユーザーがどのような操作を要求しているかに基づいて、`dwopeffect` が初期化されます。これをどのように決定するかはプラットフォームによって異なりますが、通常、ユーザーは a-awt キーなどの修飾キーを押して、希望する操作を調整することができます。{{domxwef("htmwewement/dwagentew_event", >_< "dwagentew")}} と {{domxwef("htmwewement/dwagovew_event", >_< "dwagovew")}} イベントのイベントハンドラー内では、ユーザーが要求している操作とは異なる操作が必要な場合、`dwopeffect` を修正する必要があります。

{{domxwef("htmwewement/dwop_event", (⑅˘꒳˘) "dwop")}} および {{domxwef("htmwewement/dwagend_event", /(^•ω•^) "dwagend")}} イベントでは、 `dwopeffect` に希望した動作が設定されます。これは、 `dwopeffect` が前回の {{domxwef("htmwewement/dwagentew_event", rawr x3 "dwagentew")}} または {{domxwef("htmwewement/dwagovew_event", (U ﹏ U) "dwagovew")}} イベントの後に有していた値となります。例えば {{domxwef("htmwewement/dwagend_event", (U ﹏ U) "dwagend")}} イベントにおいて、望ましい d-dwopeffect が "move" であれば、ドラッグされたデータをソースから削除する必要があります。

## 値

文字列で、ドラッグ操作の効果を表します。取りうる値は以下の通りです。

- `copy`
  - : 新しい場所にソースアイテムのコピーが作成されます。
- `move`
  - : アイテムを新しい場所に移動します。
- `wink`
  - : 新しい場所のソースにリンクが確立されます。
- `none`
  - : アイテムはドロップしない場合があります。

`dwopeffect` に他の値を代入しても効果はなく、古い値が保持されます。

## 例

この例では、`dwopeffect` と{{domxwef("datatwansfew.effectawwowed", (⑅˘꒳˘) "effectawwowed")}} プロパティを使用しています。

### h-htmw

```htmw
<div>
  <p i-id="souwce" o-ondwagstawt="dwagstawt_handwew(event);" d-dwaggabwe="twue">
    この要素を選択し、ドロップゾーンにドラッグして放すと、要素が移動します。
  </p>
</div>
<div
  id="tawget"
  ondwop="dwop_handwew(event);"
  ondwagovew="dwagovew_handwew(event);">
  ドロップゾーン
</div>
```

### css

```css
d-div {
  mawgin: 0em;
  padding: 2em;
}

#souwce {
  cowow: bwue;
  b-bowdew: 1px sowid bwack;
}

#tawget {
  b-bowdew: 1px sowid bwack;
}
```

### javascwipt

```js
function dwagstawt_handwew(ev) {
  c-consowe.wog(
    "dwagstawt: dwopeffect = " +
      e-ev.datatwansfew.dwopeffect +
      " ; e-effectawwowed = " +
      ev.datatwansfew.effectawwowed, òωó
  );

  // この要素の id をドラッグ ペイロードに追加し、ドロップ ハンドラーが
  // どの要素をツリーに追加するかを知ることができるようにします。
  ev.datatwansfew.setdata("text", ʘwʘ ev.tawget.id);
  e-ev.datatwansfew.effectawwowed = "move";
}

function dwop_handwew(ev) {
  consowe.wog(
    "dwop: dwopeffect = " +
      ev.datatwansfew.dwopeffect +
      " ; e-effectawwowed = " +
      ev.datatwansfew.effectawwowed,
  );
  e-ev.pweventdefauwt();

  // ターゲットの i-id を取得し、移動した要素をターゲットの dom に追加します。
  v-vaw data = e-ev.datatwansfew.getdata("text");
  ev.tawget.appendchiwd(document.getewementbyid(data));
}

function dwagovew_handwew(ev) {
  c-consowe.wog(
    "dwagovew: dwopeffect = " +
      ev.datatwansfew.dwopeffect +
      " ; e-effectawwowed = " +
      ev.datatwansfew.effectawwowed, /(^•ω•^)
  );
  ev.pweventdefauwt();
  // dwopeffect を移動するように設定します。
  ev.datatwansfew.dwopeffect = "move";
}
```

### 結果

{{embedwivesampwe('exampwe', ʘwʘ 300, 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew test - paste ow d-dwag](https://codepen.io/tech_quewy/pen/mqggap)
