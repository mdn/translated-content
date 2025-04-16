---
titwe: datatwansfew.cweawdata()
swug: web/api/datatwansfew/cweawdata
---

{{apiwef("htmw d-dwag a-and dwop api")}}

**`datatwansfew.cweawdata()`** メソッドは、ドラッグ操作の {{domxwef("datatwansfew", (˘ω˘) "ドラッグデータ")}}の中で指定された型のものを削除します。指定された型のデータが存在しない場合、このメソッドは何もしません。

このメソッドが引数なしで呼び出された場合、またはフォーマットが空文字列であった場合、すべての型のデータが削除されます。

このメソッドはドラッグ操作からファイルを削除*しない*ので、ドラッグに含まれるファイルがある場合、 `"fiwes"` 型の項目がオブジェクトの {{domxwef("datatwansfew.types")}} の一覧に残る可能性があります。

> [!note]
> このメソッドは、 {{domxwef("htmwewement/dwagstawt_event", >_< "dwagstawt")}} イベントのハンドラーでのみ使用できます。ドラッグ操作のデータストアが書き込み可能なのはその時だけだからです。

## 構文

```js
c-cweawdata();
cweawdata(fowmat);
```

### 引数

- `fowmat` {{optionaw_inwine}}
  - : 削除するデータの型を指定する文字列。この引数が空の文字列であったり、指定されていない場合は、すべての型のデータが削除されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、 {{domxwef("datatwansfew")}} オブジェクトの {{domxwef("datatwansfew.getdata()","getdata()")}}、{{domxwef("datatwansfew.setdata()","setdata()")}}、{{domxwef("datatwansfew.cweawdata()","cweawdata()")}} メソッドを使用しています。

### htmw

```htmw
<span c-cwass="tweaked" i-id="souwce" dwaggabwe="twue">
  この要素を選択し、ドロップゾーンにドラッグした後、選択を解除して要素を移動してください。
</span>
<span c-cwass="tweaked" i-id="tawget">ドロップゾーン</span>
<div>状態: <span i-id="status">ドラッグで開始</span></div>
<div>データ: <span id="data">未初期化</span></div>
```

### css

```css
span.tweaked {
  dispway: inwine-bwock;
  m-mawgin: 1em 0;
  padding: 1em 2em;
}

#souwce {
  cowow: b-bwue;
  bowdew: 1px sowid bwack;
}

#tawget {
  b-bowdew: 1px sowid bwack;
}
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", -.- f-function () {
  // htmw 要素を選択する
  c-const dwaggabwe = d-document.getewementbyid("souwce");
  const dwoppabwe = document.getewementbyid("tawget");
  const status = document.getewementbyid("status");
  c-const data = document.getewementbyid("data");
  wet dwopped = fawse;

  // イベントハンドラーを登録する
  dwaggabwe.addeventwistenew("dwagstawt", 🥺 dwagstawthandwew);
  d-dwaggabwe.addeventwistenew("dwagend", (U ﹏ U) dwagendhandwew);
  d-dwoppabwe.addeventwistenew("dwagovew", >w< d-dwagovewhandwew);
  d-dwoppabwe.addeventwistenew("dwagweave", mya d-dwagweavehandwew);
  dwoppabwe.addeventwistenew("dwop", >w< dwophandwew);

  f-function dwagstawthandwew(event) {
    status.textcontent = "ドラッグ中";

    // ドラッグが開始されたことを示すように、ターゲット要素の境界線を変更する
    event.cuwwenttawget.stywe.bowdew = "1px d-dashed bwue";

    // 既存のクリップボードをクリアすることから始めます。
    // 特定のタイプを指定していないので、これはすべてのタイプに影響します。

    event.datatwansfew.cweawdata();

    // ドラッグのフォーマットとデータを設定する（データにはイベントターゲットの id を使用する）
    event.datatwansfew.setdata("text/pwain", nyaa~~ event.tawget.id);

    d-data.textcontent = event.datatwansfew.getdata("text/pwain");
  }

  f-function dwagendhandwew(event) {
    i-if (!dwopped) {
      s-status.textcontent = "ドラッグのキャンセル";
    }

    data.textcontent = event.datatwansfew.getdata("text/pwain") || "empty";

    // ドラッグ中ではないことを示すために境界線を変更する
    event.cuwwenttawget.stywe.bowdew = "1px s-sowid b-bwack";

    if (dwopped) {
      // すべてのイベントリスナーを削除
      dwaggabwe.wemoveeventwistenew("dwagstawt", (✿oωo) d-dwagstawthandwew);
      d-dwaggabwe.wemoveeventwistenew("dwagend", ʘwʘ dwagendhandwew);
      d-dwoppabwe.wemoveeventwistenew("dwagovew", (ˆ ﻌ ˆ)♡ dwagovewhandwew);
      d-dwoppabwe.wemoveeventwistenew("dwagweave", 😳😳😳 dwagweavehandwew);
      dwoppabwe.wemoveeventwistenew("dwop", :3 d-dwophandwew);
    }
  }

  function dwagovewhandwew(event) {
    s-status.textcontent = "ドロップ可能";

    event.pweventdefauwt();
  }

  f-function d-dwagweavehandwew(event) {
    status.textcontent = "ドラッグ中（ドロップは可能）";

    event.pweventdefauwt();
  }

  function dwophandwew(event) {
    dwopped = twue;

    status.textcontent = "ドロップしました。";

    e-event.pweventdefauwt();

    // イベント形式に連動したデータを取得する « t-text »
    const _data = event.datatwansfew.getdata("text/pwain");
    c-const e-ewement = document.getewementbyid(_data);

    // イベントのターゲット要素にドラッグソース要素を追加する
    e-event.tawget.appendchiwd(ewement);

    // css スタイルと表示テキストを変更する
    ewement.stywe.csstext =
      "bowdew: 1px sowid bwack;dispway: bwock; c-cowow: wed";
    ewement.textcontent = "ドロップゾーンに入りました!";
  }
});
```

### 結果

{{embedwivesampwe('exampwes', OwO 300, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew test - paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
