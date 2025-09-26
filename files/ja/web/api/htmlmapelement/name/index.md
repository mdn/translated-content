---
title: "HTMLMapElement: name プロパティ"
short-title: name
slug: Web/API/HTMLMapElement/name
l10n:
  sourceCommit: c2441279b7956925d28373345838436b1fa2c78c
---

{{ApiRef("HTML DOM")}}

**`name`** は {{domxref("HTMLMapElement")}} インターフェイスのプロパティで、`<map>` 要素の一意な名前を表します。
この値は {{HTMLElement("img")}} 要素の `useMap` 属性と一緒に使うことで、`<map>` 要素を参照することができます。

{{HTMLElement("map")}} 要素に `id` 属性が設定されている場合、この `name` プロパティはこの `id` と同じになります。

## 値

ホワイトスペースのない、空でない文字列です。

## 例

```html
<map name="image-map">
  <area shape="circle" coords="15,15,5" />
</map>
```

```js
const mapElement = document.getElementsByName("image-map")[0];
console.log(mapElement.name); // 出力: "image-map"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.useMap")}} プロパティ
- {{domxref("HTMLAreaElement")}} 要素
