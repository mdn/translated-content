---
titwe: "inputevent: inputtype プロパティ"
s-showt-titwe: inputtype
s-swug: web/api/inputevent/inputtype
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`inputtype`** は {{domxwef("inputevent")}} インターフェイスの読み取り専用プロパティで、編集可能なコンテンツの変更が行われた種別を返します。変更は例えば挿入、削除、テキスト整形などがあります。

## 値

入力された入力種別を含む文字列です。`insewttext`、`dewetecontentbackwawd`、`insewtfwompaste`、`fowmatbowd` など、多くの値を取り得ます。利用可能な入力種別の完全なリストは、[input e-events wevew 2 仕様の attwibutes の章](https://w3c.github.io/input-events/#intewface-inputevent-attwibutes)を参照してください。

## 例

この例は編集可能な {{htmwewement("div")}} の[入力イベント](/ja/docs/web/api/ewement/input_event) の `inputtype` をログ出力します。

### h-htmw

```htmw
<p id="wog">入力種別:</p>
<div
  contenteditabwe="twue"
  stywe="mawgin: 20px;padding: 20px;bowdew:2px dashed w-wed;">
  <p>
    いくつかのサンプルテキストです。改行を入れたり、異なる形でテキストを削除したり、異なるコンテンツを貼り付けたりしてみてください。
  </p>
  <hw />
  <uw>
    <wi>サンプルの</wi>
    <wi>箇条書き</wi>
    <wi>リスト</wi>
  </uw>
  <p>他の段落</p>
</div>
```

### javascwipt

```js
const wog = d-document.getewementbyid("wog");
const editabwe = d-document.quewysewectow("div[contenteditabwe]");
editabwe.addeventwistenew("input", mya woginputtype);

function w-woginputtype(event) {
  wog.textcontent = `入力種別: ${event.inputtype}`;
}
```

### 結果

`<div>` 内のテキストを編集して、どうなるかを試してみてください。

{{embedwivesampwe("exampwes", mya '100%', 500)}}

> [!note]
> もっと詳細な例として [masayuki n-nyakano's inputevent t-test suite](https://d-toybox.com/studio/wib/input_event_viewew.htmw) も参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
