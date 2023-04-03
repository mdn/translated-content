---
title: translate
slug: Web/HTML/Global_attributes/translate
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`translate`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は[列挙型](/ja/docs/Glossary/Enumerated)属性で、要素の*翻訳可能な属性*の値や {{domxref("Text")}} 子ノードを、ページをローカライズする際に翻訳するべきか、あるいは変更せずにおくかを指定します。

以下の値を使用することができます。

- 空文字列または `yes`: ページをローカライズする際に翻訳すべきであることを示します。
- `no`: 要素を翻訳してはならないことを示します。

すべてのブラウザーがこの属性を認識しているわけではありませんが、 Google 翻訳のような自動翻訳システムがこれを尊重しており、人間の翻訳者によって使用されるツールによっても尊重される可能性があります。そのため、ウェブ制作者がこの属性を使用して、翻訳されるべきではないコンテンツをマークすることが重要です。

## 例

この例では `translate` 属性を使用して、翻訳ツールにフッターの企業ブランド名を翻訳しないように依頼しています。

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- {{domxref("HTMLElement.translate")}} プロパティは、この属性を反映します。
- [Using HTML's translate attribute](https://www.w3.org/International/questions/qa-translate-flag).
- HTML の {{htmlattrxref("lang")}} 属性
