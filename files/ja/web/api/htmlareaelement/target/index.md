---
title: "HTMLAreaElement: target プロパティ"
short-title: target
slug: Web/API/HTMLAreaElement/target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

**`target`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、リンクされたリソースを表示する場所を示す文字列です。

これは {{HTMLElement("area")}} 要素の [`target`](/ja/docs/Web/HTML/Reference/Elements/area#target) 属性を反映します。

## 値

ターゲットを表す文字列。次の値を取り得ます。

- {{HTMLElement("frame")}} の名前。
- [特定の値によるキーワード](/ja/docs/Web/HTML/Reference/Elements/area#target)、`_blank`、`_self`、`_parent`、`_top` のいずれか。

## 例

```html
<map name="image-map">
  <area href="www.example.com" target="_top" alt="left" />
</map>
```

```js
const areaElement = document.getElementsByName("image-map")[0].areas[0];
console.log(areaElement.target); // Output: "_top"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLBaseElement.target")}} プロパティ
- {{domxref("HTMLFormElement.target")}} プロパティ
- {{domxref("HTMLAnchorElement.target")}} プロパティ
