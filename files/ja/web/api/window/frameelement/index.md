---
title: window.frameElement
slug: Web/API/Window/frameElement
---

{{ ApiRef }}

（{{HTMLElement("iframe")}} や {{HTMLElement("object")}} のような）ウィンドウが埋め込まれた要素を返します。要素がトップレベルであるか異なるスクリプト生成元をもつ文書に埋め込まれるかのいずれかの場合は、 `null` を返します。

## 構文

```
frameEl = window.frameElement;
```

- `frameEl` は、ウィンドウが埋め込まれた要素です。ウィンドウが別の文書に埋め込まれていない場合、または埋め込まれている文書が異なる生成元を持つ（例えば異なるドメインから設置されている）場合、これは `null` になります。

> **メモ:** このプロパティの名前にもかかわらず、これは{{HTMLElement("object")}}、{{HTMLElement("iframe")}}、または [\<embed>](/ja/docs/Web/HTML/Element/embed)を含むすべての埋め込みポイント内に埋め込まれた文書の役に立ちます。

## 例

```js
var frameEl = window.frameElement;
// 埋め込みの場合、要素の URL が 'http://mozilla.org/' に変わります。
if (frameEl) {
  frameEl.src = 'http://mozilla.org/';
}
```

## 仕様

| 仕様                                                                                             | 状態                             | コメント   |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{ SpecName('HTML WHATWG', '#dom-frameelement', 'Window.frameElement') }} | {{ Spec2('WebRTC 1.0') }} | 初期の仕様 |

## ブラウザー互換性

{{Compat("api.Window.frameElement")}}

## 関連項目

- {{domxref("window.frames")}} は、現在のウィンドウの直接のサブフレームを一覧する、配列のようなオブジェクトを返します。
- {{domxref("window.parent")}} は、子ウィンドウの`frameElement`を含むウィンドウである、親ウィンドウを返します。
