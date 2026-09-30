---
title: decoding
slug: Web/SVG/Reference/Attribute/decoding
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

`decoding` 属性は、{{SVGElement("image")}} 要素で有効であり、ブラウザーに対して、他のコンテンツのレンダリングと画像のデコードを、より「適切」に見える単一の表示段階で同時に実行すべきか (`sync`)、それとも他のコンテンツをまずレンダリング・表示し、その後で画像をデコードして表示すべきか (`async`) というヒントを提供します。実際には、`async` を指定すると、次の描画処理は画像をデコードするのを待たずに実行されます。

`decoding` を静的な `<image>` 要素に対して使用しても、多くの場合、目立った効果を実感するのは難しいです。これらの要素は、画像ファイルが（ネットワークまたはキャッシュから）取得される間、最初は空の画像としてレンダリングされ、その後はいずれにせよ個別に処理されるため、コンテンツの更新の「同期」があまり目立たなくなるからです。しかし、デコード中に現れるレンダリングのブロックは、その時間はごくわずかであることが多いものの、肉眼では確認しにくくても、測定することは可能です。

異なる `decoding` 型を用いると、JavaScript で DOM に`<image>` 要素を動的に挿入する際に、より顕著な違いが生じる場合があります。詳細については、{{domxref("SVGImageElement.decoding")}}を参照してください。

取りうる値は次の通りです。

- `sync`
  - : 他のコンテンツのレンダリングと並行して画像を同期的にデコードし、すべてをまとめて表示します。
- `async`
  - : 他のコンテンツのレンダリングと表示が完了した後、画像を非同期でデコードします。
- `auto`
  - : デコードモードの指定は行われません。ブラウザーがユーザーにとって最適なモードを自動的に決定します。これがデフォルト値です。

## 例

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image
    href="https://example.com/mdn_logo_dark.png"
    height="200"
    width="200"
    decoding="async" />
</svg>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVGImageElement: decoding プロパティ](/ja/docs/Web/API/SVGImageElement/decoding)
- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) - tunetheweb.com (2023)
