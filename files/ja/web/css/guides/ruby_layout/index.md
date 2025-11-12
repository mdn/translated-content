---
title: CSS ルビレイアウト
slug: Web/CSS/Guides/Ruby_layout
original_slug: Web/CSS/CSS_ruby_layout
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**CSS ルビレイアウト** (CSS Ruby Layout) モジュールは、ルビ表記の表示に関するレンダリングモデルや整形の制御を提供します。ルビ表記は行間の表記の一種で、ベーステキストに沿った短いテキストで構成されます。これらはふつう東アジアの文書で、発音を示したり、短い説明を提供したりするために使用されます。

## リファレンス

### プロパティ

- {{cssxref("ruby-align")}}
- {{cssxref("ruby-position")}}

> [!NOTE]
> CSS ルビレイアウトモジュールは、 `ruby-merge` と `ruby-overhang` の 2 つのプロパティを導入していますが、まだどのブラウザーにも実装されていません。

### display 値

CSS ルビレイアウトモジュールは、以下の値を {{cssxref("display")}} プロパティに追加しています。

- `ruby`
- `ruby-base`
- `ruby-text`
- `ruby-base-container`
- `ruby-text-container`

### 用語集とキーワード

- {{Glossary("ruby", "ルビ")}}

## 関連概念

- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
  - {{cssxref("display")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
- [CSS テキスト装飾](/ja/docs/Web/CSS/Guides/Text_decoration)モジュール
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-emphasis-position")}}
  - {{cssxref("text-emphasis-style")}}
  - {{cssxref("text-emphasis")}} shorthand
- [HTML 要素](/ja/docs/Web/HTML/Reference/Elements)
  - {{HTMLElement("rb")}}
  - {{HTMLElement("rp")}}
  - {{HTMLElement("rt")}}
  - {{HTMLElement("rtc")}}
  - {{HTMLElement("ruby")}}

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("direction")}}
- {{cssxref("unicode-bidi")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref(":lang()")}}
- HTML の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性
