---
title: HTMLAnchorElement.hash
slug: Web/API/HTMLAnchorElement/hash
original_slug: Web/API/HTMLHyperlinkElementUtils/hash
---

{{ APIRef("HTML DOM") }}

**`HTMLAnchorElement.hash`** プロパティは、`'#'` の後に URL のフラグメント識別子が続く文字列を返します。

フラグメントは[パーセントデコード](/ja/docs/Glossary/percent-encoding)されません。 URL にフラグメント識別子がない場合、このプロパティには空の文字列 `""` が含まれます。

## 値

文字列です。

## 例

### アンカーリンクからハッシュを取得

この HTML があったとします。

```html
<a id="myAnchor" href="/en-US/docs/HTMLAnchorElement#Examples">Examples</a>
```

このようにすると、アンカーのハッシュを取得することができます。

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // returns '#Examples'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
