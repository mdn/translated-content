---
title: "HTMLAreaElement: hash プロパティ"
slug: Web/API/HTMLAreaElement/hash
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLAreaElement.hash`** プロパティは、`'#'` の後に URL のフラグメント識別子が続く文字列を返します。

フラグメントは [URL デコード](https://ja.wikipedia.org/wiki/パーセントエンコーディング)されません。 URL にフラグメント識別子がない場合、このプロパティには空の文字列 `""` が含まれます。

## 値

文字列です。

## 例

### エリアのリンクからハッシュを取得

この HTML があったとします。

```html
<map name="infographic">
  <area
    id="mdn-circle"
    shape="circle"
    coords="130,136,60"
    href="https://developer.mozilla.org/#ExampleSection"
    alt="MDN" />
</map>

<img
  usemap="#infographic"
  src="/media/examples/mdn-info.png"
  alt="MDN infographic" />
```

このようにすると、アンカーのハッシュを取得することができます。

```js
const area = document.getElementById("mdn-circle");
area.hash; // returns '#ExampleSection'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
