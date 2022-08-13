---
title: aria-valuemin 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute
tags:
  - ARIA
  - Accessibility
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute
---
[`aria-valuemin`](http://www.w3.org/TR/wai-aria/#aria-valuemin) 属性は、スライダー、スピンボタン、プログレスバーなどの範囲ウィジェットに許容される最小値を定義するために使用されます。 [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute) が既知の最大値と最小値を持つ場合、作成者は [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute) と `aria-valuemin` のプロパティを提供する**べき**です（SHOULD）。 `aria-valuemin` の値は `aria-valuemax` の値以下で**なければならない**（MUST）。

`aria-valuemin` は、[スライダー](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)、[スクロールバー](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_scrollbar_role)、[スピンボタン](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_spinbutton_role)のロールの**必須**属性です。

### 値

数値の文字列表現

### ユーザーエージェントと支援技術への影響

`aria-valuemin` が `aria-valuemax` の値以下でない場合、これは支援技術によって処理されるエラー条件を生成します。

> **Note:** **注**: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1:

下のスニペットは、最小値が 1 の単純なスライダーを示しています。

```html
<div role="slider" aria-valuenow="4" aria-valuemin="1" aria-valuemax="10">
```

### 注

### ARIA ロールで使用

- [progressbar](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role "Using_the_progressbar_role")
- scrollbar
- [slider](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role "Using the slider role")
- spinbutton

### 関連する ARIA 技術

- [aria-valuemax](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute "Using_the_aria-valuemax_attribute")
- [aria-valuenow](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute "Using the aria-valuenow attribute")
- [aria-valuetext](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute "Using the aria-valuetext attribute")

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-valuemin の WAI-ARIA 仕様](http://www.w3.org/TR/wai-aria/#aria-valuemin)（英語）
