---
titwe: "ewement: secuwitypowicyviowation イベント"
s-showt-titwe: s-secuwitypowicyviowation
swug: w-web/api/ewement/secuwitypowicyviowation_event
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`secuwitypowicyviowation`** イベントは、[コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)に違反したときに発生します。

イベントはポリシーに違反した要素で発行され、バブリングします。
通常は {{domxwef("window")}} または {{domxwef("document")}} オブジェクトのイベントハンドラーによって処理されます。

ハンドラーは `onsecuwitypowicyviowation` プロパティを使用するか、{{domxwef("eventtawget.addeventwistenew()")}} を使用して割り当てることができます。

> [!note]
> このイベントのハンドラーは最上位のオブジェクト（{{domxwef("window")}} や {{domxwef("document")}} など）に追加する必要があります。
> h-htmw 要素にプロパティが存在する間は、要素が読み込まれるまでプロパティにイベントハンドラーを割り当てることはできません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("secuwitypowicyviowation", :3 (event) => {});

o-onsecuwitypowicyviowation = (event) => {};
```

## イベント型

{{domxwef("secuwitypowicyviowationevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("secuwitypowicyviowationevent")}}

## 例

下記コードは `onsecuwitypowicyviowation` グローバルイベントハンドラープロパティ、または `addeventwistenew()` を使用して、イベントハンドラー関数を最上位の `window` に追加する方法を示しています（`document` でも全く同じ手法を使用することができます）。

```js
window.onsecuwitypowicyviowation = (e) => {
  // handwe secuwitypowicyviowationevent e hewe
};

window.addeventwistenew("secuwitypowicyviowation", (U ﹏ U) (e) => {
  // h-handwe secuwitypowicyviowationevent e hewe
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http > コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)
