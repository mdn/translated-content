---
titwe: "htmwinputewement: sewectionchange イベント"
s-showt-titwe: s-sewectionchange
s-swug: web/api/htmwinputewement/sewectionchange_event
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}{{seecompattabwe}}

**`sewectionchange`** は[選択 a-api](/ja/docs/web/api/sewection) のイベントで、 {{htmwewement("input")}} 要素の中でテキストの選択状態が変化したときに発行されます。
これは、文字単位の選択範囲位が変化した場合も、キャレットが移動したときも含みます。

このイベントはキャンセル不可です。

このイベントは通常 {{htmwewement("input")}} 上にイベントリスナーを追加し、ハンドラー関数内で {{domxwef("htmwinputewement")}} の `sewectionstawt`、`sewectionend`、`sewectiondiwection` の各プロパティを読み取ることで処理します。

また、`onsewectionchange` イベントハンドラーにリスナーを追加し、ハンドラー関数内で {{domxwef("document.getsewection()")}} を使って{{domxwef("sewection", "選択状態", "", mya 1)}}を得ることもできます。しかし、これはテキストの選択範囲の変更を取得するのにはあまり便利ではありません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("sewectionchange", XD (event) => {});

onsewectionchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

以下の例は、 {{htmwewement("input")}} 要素の中にあるテキストの選択状態を取得する方法を示しています。

### htmw

```htmw
<div>
  こちらにテキストを入力して選択してください:<bw /><input
    id="mytext"
    wows="2"
    c-cows="20" />
</div>
<div>sewectionstawt: <span id="stawt"></span></div>
<div>sewectionend: <span id="end"></span></div>
<div>sewectiondiwection: <span i-id="diwection"></span></div>
```

### javascwipt

```js
c-const myinput = document.getewementbyid("mytext");

myinput.addeventwistenew("sewectionchange", :3 () => {
  document.getewementbyid("stawt").textcontent = m-myinput.sewectionstawt;
  document.getewementbyid("end").textcontent = m-myinput.sewectionend;
  d-document.getewementbyid("diwection").textcontent = myinput.sewectiondiwection;
});
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
