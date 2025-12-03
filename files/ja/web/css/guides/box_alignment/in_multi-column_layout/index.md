---
title: 段組みレイアウトでのボックス配置
slug: Web/CSS/Guides/Box_alignment/In_multi-column_layout
original_slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

[ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)仕様書では、さまざまなレイアウト方式で配置がどのように働くかを詳述しています。このページでは、[段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)のコンテキストにおいてボックス配置がどのように働くかを探ります。このページとしての目的は、段組みレイアウトとボックス配置として定められた事柄を詳述するためのものですので、ボックス配置の様々なレイアウト方式の間で共通の機能について詳述した、主となる[ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)ページを合わせてお読みください。

段組みレイアウトでは、配置コンテナーは段組みコンテナーのコンテンツボックスです。配置対象物は段ボックスです。段組みレイアウトに適用するプロパティは以下に説明する通りです。

> [!NOTE]
> 段組みレイアウトはボックス配置仕様書に先立つものです。そしてここに挙げたプロパティは、段組みレイアウトのために設定されたものであっても、ブラウザーが対応していないことがあります。

## align-content と justify-content

{{cssxref("align-content")}} プロパティはブロック軸に、 {{cssxref("justify-content")}} はインライン軸に適用されます。段に追加された空間は配分に使用され、段間のすき間に追加されるため、段間は {{cssxref("column-gap")}} プロパティで指定された寸法よりも大きくなることがあります。

`justify-content` に `normal` または `stretch` 以外の値を使用すると、 {{cssxref("column-width")}} が指定された段組みコンテナーに表示し、残りの余白は justify-content の値によって配分されます。

## column-gap

段組みレイアウト仕様書の早期の版では、 {{cssxref("column-gap")}} プロパティが定義されていましたが、ボックス配置では他のレイアウト方式の gap プロパティと統合されました。他のレイアウト方式では、 column-gap の初期値を 0 として扱うのに対し、段組みレイアウトでは、一般に段間にすき間がないようにすることはないでしょうから、 1em として扱うようになっています。

## リファレンス

### CSS プロパティ

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("column-gap")}}

### 用語集の項目

- [配置対象物](/ja/docs/Glossary/Alignment_Subject)
- [配置コンテナー](/ja/docs/Glossary/Alignment_Container)
- [代替配置](/ja/docs/Glossary/Fallback_Alignment)
