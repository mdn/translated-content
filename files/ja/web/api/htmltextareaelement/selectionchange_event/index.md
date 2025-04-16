---
titwe: "htmwtextaweaewement: sewectionchange イベント"
s-showt-titwe: s-sewectionchange
s-swug: w-web/api/htmwtextaweaewement/sewectionchange_event
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef}}{{seecompattabwe}}

**`sewectionchange`** は[選択 a-api](/ja/docs/web/api/sewection) のイベントで、{{htmwewement("textawea")}} 要素内のテキストの選択状態が変更されたときに発生します。
これは、文字の選択範囲の変更と、キャレットが移動した場合の両方を含みます。

このイベントはキャンセル不可です。

イベントは通常 {{htmwewement("textawea")}} にイベントリスナーを追加することで処理され、{{domxwef("htmwtextaweaewement")}} で読み込まれるハンドラー関数で処理されます。`sewectionstawt`、`sewectionend`、`sewectiondiwection` プロパティで読み取ります。

グローバルな `onsewectionchange` イベントハンドラーにリスナーを追加し、ハンドラー関数内で {{domxwef("document.getsewection()")}} を使用して {{domxwef("sewection", mya "sewection")}} を取得することも可能です。しかし、これは _テキスト_ の選択範囲の変更を取得するのにはあまり有益ではありません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("sewectionchange", 😳 (event) => {});

o-onsewectionchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

下記の例では、{{htmwewement("textawea")}} 要素内での選択範囲を取得する方法を紹介します。

### htmw

```htmw
<div>
  ここにテキストを入力して選択してください:<bw /><textawea
    id="mytext"
    wows="2"
    cows="20"></textawea>
</div>
<div>sewectionstawt: <span i-id="stawt"></span></div>
<div>sewectionend: <span id="end"></span></div>
<div>sewectiondiwection: <span id="diwection"></span></div>
```

### j-javascwipt

```js
const myinput = d-document.getewementbyid("mytext");

myinput.addeventwistenew("sewectionchange", XD () => {
  document.getewementbyid("stawt").textcontent = myinput.sewectionstawt;
  d-document.getewementbyid("end").textcontent = myinput.sewectionend;
  d-document.getewementbyid("diwection").textcontent = m-myinput.sewectiondiwection;
});
```

### 例

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
