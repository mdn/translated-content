---
title: "Window: frameElement プロパティ"
short-title: frameElement
slug: Web/API/Window/frameElement
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{ApiRef}}

**`Window.frameElement`** プロパティは、（{{HTMLElement("iframe")}} や {{HTMLElement("object")}} のような）ウィンドウが埋め込まれた要素を返します。

> [!NOTE]
> このプロパティの名前にもかかわらず、これは{{HTMLElement("object")}}、{{HTMLElement("iframe")}}、または [\<embed>](/ja/docs/Web/HTML/Reference/Elements/embed)を含むすべての埋め込みポイント内に埋め込まれた文書の役に立ちます。

## 値

ウィンドウが埋め込まれている要素。ウィンドウが別の文書に埋め込まれていない場合、または埋め込まれている文書の{{glossary("origin", "オリジン")}}が異なる場合、値は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になります。

## 例

```js
const frameEl = window.frameElement;
// 埋め込みの場合、要素の URL が 'http://mozilla.org/' に変わります。
if (frameEl) {
  frameEl.src = "https://mozilla.org/";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.frames")}} は、現在のウィンドウの直接のサブフレームを一覧する、配列のようなオブジェクトを返します。
- {{domxref("window.parent")}} は、子ウィンドウの`frameElement`を含むウィンドウである、親ウィンドウを返します。
