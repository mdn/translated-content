---
title: "HTMLAreaElement: hash プロパティ"
short-title: hash
slug: Web/API/HTMLAreaElement/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ APIRef("HTML DOM") }}

**`hash`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、この `<area>` 要素の `href` における、 `"#"` に続くフラグメント識別子の文字列を返します。 URL にフラグメント識別子がない場合、このプロパティには空の文字列 `""` が入ります。

詳しくは {{domxref("URL.hash")}} を参照してください。

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
area.hash; // '#ExampleSection'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
