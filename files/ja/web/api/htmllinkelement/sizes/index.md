---
title: "HTMLLinkElement: sizes プロパティ"
short-title: sizes
slug: Web/API/HTMLLinkElement/sizes
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

**`sizes`** は {{domxref("HTMLLinkElement")}} インターフェイスの読み取り専用プロパティで、リソースに含まれる視覚メディア用アイコンのサイズを定義します。このプロパティは、{{HTMLElement("link")}} 要素の [`sizes`](/ja/docs/Web/HTML/Reference/Elements/link#sizes) 属性を反映します。この属性には空白で区切られたサイズのリストを指定し、各サイズは `<幅 (ピクセル単位)>x<高さ (ピクセル単位)>` またはキーワード `any` の形式です。

このプロパティが関係するのは、{{domxref("HTMLLinkElement.rel", "rel")}} が `icon` または `apple-touch-icon` のような標準外の種類である場合に限られます。

## 値

{{domxref("DOMTokenList")}} オブジェクトです。

`sizes` プロパティ自体は、`DOMTokenList` オブジェクトを置き換えられないという意味で読み取り専用ですが、`sizes` プロパティに直接代入することはできます。これは、その {{domxref("DOMTokenList/value", "value")}} プロパティに代入するのと同じです。また、{{domxref("DOMTokenList/add", "add()")}}、{{domxref("DOMTokenList/remove", "remove()")}}、{{domxref("DOMTokenList/replace", "replace()")}}、{{domxref("DOMTokenList/toggle", "toggle()")}} メソッドを使って、`DOMTokenList` オブジェクトを変更することもできます。

## 例

```html
<link rel="icon" sizes="72x72 114x114" href="smallish.ico" />
```

```js
const link = document.querySelector("[rel=icon],[rel=apple-touch-icon]");
console.dir(link.sizes); /* 出力結果:
  DOMTokenList [ "72x72", "114x114" ]
    0: "72x72"
    1: "114x114"
    length: 2
    value: "72x72 114x114"
  */
console.log(link.sizes.value); // 出力結果: '72x72 114x114'
console.log(link.sizes.length); // 出力結果: 2
console.log(link.sizes[0]); // 出力結果: '72x72'
console.log(link.sizes[1]); // 出力結果: '114x114'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.rel")}}
- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLLinkElement.type")}}
- {{domxref("HTMLLinkElement.href")}}
- {{HTMLElement("link")}}
- [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性
