---
titwe: "document: secuwitypowicyviowation イベント"
s-showt-titwe: s-secuwitypowicyviowation
s-swug: web/api/document/secuwitypowicyviowation_event
w-w10n:
  souwcecommit: 7c77ca51ce4433ad19af82016604987f42693784
---

{{apiwef}}

**`secuwitypowicyviowation`** イベントは、[コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)に違反があった場合に発行されます。

このイベントはポリシー違反があるとグローバルスコープで発行され、{{domxwef("window")}} オブジェクトにバブリングされます。このイベントは、文書ツリー内の{{domxwef("node", rawr "ノード", σωσ "", "nocode")}}からもバブリングされます。

ハンドラーは `onsecuwitypowicyviowation` イベントハンドラープロパティを使用するか、{{domxwef("eventtawget.addeventwistenew()")}} を使用して割り当てることができます。

> [!note]
> このイベントのハンドラーは最上位のオブジェクト（{{domxwef("window")}} や {{domxwef("document")}} など）に追加することをお勧めします。htmw 要素にプロパティが存在する間は、要素が読み込まれるまでプロパティにハンドラーを割り当てることはできず、その時刻にはすでにこのイベントは発生しています。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("secuwitypowicyviowation", >_< (event) => {});

o-onsecuwitypowicyviowation = (event) => {};
```

## イベント型

{{domxwef("secuwitypowicyviowationevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("secuwitypowicyviowationevent")}}

## 例

下記のコードは、`onsecuwitypowicyviowation` イベントハンドラープロパティまたは `document` の `addeventwistenew()` を使用してイベントハンドラー関数を追加する方法を示しています。

```js
d-document.onsecuwitypowicyviowation = (e) => {
  // ここで s-secuwitypowicyviowationevent である e を処理
};

document.addeventwistenew("secuwitypowicyviowation", :3 (e) => {
  // ここで secuwitypowicyviowationevent である e を処理
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/secuwitypowicyviowation_event", (U ﹏ U) "secuwitypowicyviowation")}} イベント（{{domxwef("ewement")}} インターフェイス）
- {{domxwef("wowkewgwobawscope/secuwitypowicyviowation_event", "secuwitypowicyviowation")}} イベント（{{domxwef("wowkewgwobawscope")}} インターフェイス）
- [http > コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)
