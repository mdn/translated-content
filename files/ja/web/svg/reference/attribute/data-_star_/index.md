---
title: data-*
slug: Web/SVG/Reference/Attribute/data-*
l10n:
  sourceCommit: 9ac8d4f4ed0eb2f329e605329afeb51754c7fa79
---

**`data-*`** は SVG の属性で、カスタムデータ属性と呼ばれます。通常はスクリプトで使用するために、標準属性では共有できない情報を SVG マークアップと生成される DOM の間で共有できます。カスタムデータは、各属性が属する要素の {{domxref("SVGElement")}} インターフェイスの {{domxref("SVGElement.dataset")}} プロパティから利用できます。

`*` には、[XML の名前の規則](https://www.w3.org/TR/xml/#NT-Name)<sup>(英語)</sup>で許可されている任意の文字を使用できますが、次の制約があります。

- `xml` で始めることはできません。
- セミコロン (`;`, `U+003B`) は使用できません。
- 大文字の `A` から `Z` までの文字は使用できません。

> [!NOTE]
> {{domxref("SVGElement.dataset")}} プロパティは {{domxref("DOMStringMap")}} であり、`data-test-value` 属性は `SVGElement.dataset.testValue` から利用できます。ハイフン (`-`, `U+002D`) は取り除かれ、その次の文字が大文字に変換されるため、{{Glossary("camel_case", "キャメルケース")}}形式になります。

この属性は、すべての SVG 要素で使用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGElement")}}
- スクリプトからこれらの属性にアクセスするために使用する {{domxref("SVGElement.dataset")}} プロパティ
- [データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)
