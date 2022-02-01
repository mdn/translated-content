---
title: CSS ボックスモデル
slug: Web/CSS/CSS_Box_Model
tags:
  - CSS
  - CSS ボックスモデル
  - ガイド
  - 概要
  - リファレンス
translation_of: Web/CSS/CSS_Box_Model
---
{{CSSRef}}

**CSS ボックスモデル**は CSS のモジュールの一つで、要素に対して作成され、パディングやマージンを含む長方形のボックス定義します。[視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)によって配置されます。

## ボックスモデル

CSS のボックスは、テキスト、画像、その他の HTML 要素が表示されるコンテンツ領域で構成されています。この領域は、パディング、境界、マージンによって、1 つ以上の辺で囲まれることがあります。ボックスモデルは、これらの要素がどのように連携して CSS で表示されるボックスを作成するかを説明します。詳しくは、[CSS ボックスモデル入門](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)をご覧ください。

### ボックスの辺のキーワード

ボックスモデルの仕様書では、ボックスの各部分の辺を参照する一連のキーワードが定義されています。これらは、{{cssxref("box-sizing")}} プロパティの値など、CSS のキーワード値としても使用され、ボックスモデルがどのように寸法を計算するかを制御します。

- `content-box`
  - : そのボックスのコンテンツ領域の辺です。
- `padding-box`
  - : そのボックスのパディングの辺です。その方向にパディングがなかった場合は、 `content-box` と同じになります。
- `border-box`
  - : そのボックスの境界の辺です。その方向に境界がなかった場合は、 `padding-box` と同じになります。
- `margin-box`
  - : そのボックスのマージンの辺です。その方向にマージンがなかった場合は、 `border-box` と同じになります。
- `stroke-box`
  - : SVG では、ストロークの囲みボックスを指します。 CSS では `content-box` として扱われます。
- `view-box`
  - : SVG では、最も近い SVG ビューポート要素の原点ボックスを指します。これはその要素の {{svgattr("viewBox")}} 属性によって確立された初期の SVG ユーザー座標系の幅と高さを持つ長方形です。CSS では `border-box` として扱われます。

## リファレンス

### プロパティ

> **Note:** 本仕様では、物理的なパディングとマージンのプロパティを定義しています。テキストの方向に関係するフローに関連したプロパティは、[論理的プロパティと値](/ja/docs/Web/CSS/CSS_Logical_Properties)で定義されています。

#### ボックスのマージンを制御するプロパティ

マージンは、ボックスの境界を囲み、ボックス同士の間隔を確保するものです。

- {{CSSxRef("margin")}}
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}} {{Experimental_Inline}}

#### ボックスのパディングを制御するプロパティ

パディングは、ボックスの境界の縁と内容物の縁の間に挿入されます。

- {{CSSxRef("padding")}}
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}

#### その他のプロパティ

ボックスモデルに関連するプロパティは他にもあり、それらは別の場所で定義されています。

- [境界](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders)
  - : 境界のプロパティは、境界の太さ、描画スタイル、色を指定します。
- [オーバーフロー](/ja/docs/Web/CSS/overflow)
  - : 内容物が多すぎてボックスに入りきらない場合に起こることを制御します。

## ガイド

- [CSS ボックスモデルの紹介](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - : CSS の基礎的概念の 1 つである、ボックスモデルを解説します。このモデルは CSS が要素とそのコンテンツ領域、パディング領域、境界領域、マージン領域をどのように配置するかを定義しています。
- [マージンの相殺の理解](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - : 2 つの隣接するマージンが 1 つに相殺されることがあります。この記事ではいつなぜそれが発生し、どのように制御するかを説明します。
- [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - : 視覚整形モデルを説明します。

## 仕様書

| 仕様書                             | 状態                  | 備考                 |
| ---------------------------------- | --------------------- | -------------------- |
| {{SpecName("CSS3 Box")}}           | {{Spec2("CSS3 Box")}} | `margin-trim` を追加 |
| {{SpecName("CSS2.1", "box.html")}} | {{Spec2("CSS2.1")}}   |                      |
| {{SpecName("CSS1")}}               | {{Spec2("CSS1")}}     | 初回定義             |
