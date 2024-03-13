---
title: "HTMLAnchorElement: hash プロパティ"
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLAnchorElement.hash`** プロパティは、`'#'` の後に URL のフラグメント識別子が続く文字列を返します。

フラグメントは [URL デコード](https://ja.wikipedia.org/wiki/パーセントエンコーディング)されません。 URL にフラグメント識別子がない場合、このプロパティには空の文字列 `""` が含まれます。

## 値

文字列です。

## 例

### アンカーリンクからハッシュを取得

この HTML があったとします。

```html
<a id="myAnchor" href="/ja/docs/HTMLAnchorElement#例">例</a>
```

このようにすると、アンカーのハッシュを取得することができます。

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // returns '#例'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
