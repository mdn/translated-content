---
title: aria-valuenow 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute
tags:
  - ARIA
  - Accessibility
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute
---
[aria-valuenow](http://www.w3.org/TR/wai-aria/#aria-valuenow) 属性は、スライダー、スピンボタン、プログレスバーなどの範囲ウィジェットの現在の値を定義するために使用されます。 現在の値がわからない場合は、`aria-valuenow` 属性を設定しないでください。 `aria-valuenow` に既知の最小値と最大値がある場合、作成者は [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute) 属性と [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute) 属性を設定するべきです。

レンダリングされた値を数値として正確に表現できない場合、作成者は [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute) 属性を `aria-valuenow` と組み合わせて使用して、範囲の現在の値の使いやすい表現を提供する**べき**です（SHOULD）。 たとえば、スライダーのレンダリング値が`小`、`中`、`大`の場合があります。 この場合、`aria-valuenow` の値は 1 〜 3 の範囲で値空間内の各値の位置を示しますが、`aria-valuetext` は、`小`、`中`、`大`のいずれかの文字列になります。

`aria-valuenow` は[スライダー](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)、[スクロールバー](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_scrollbar_role)、[スピンボタン](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_spinbutton_role)のロールの**必須**属性です。

### 値

数値の文字列表現

### ユーザーエージェントと支援技術への影響

[プログレスバー](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)と[スクロールバー](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_scrollbar_role)のロールを持つ要素の場合、支援技術は、[`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute) から [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute) までの範囲の位置として計算された実際の値をパーセンテージとしてレンダリングする**べき**です（SHOULD）。

[スライダー](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)と[スピンボタン](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_spinbutton_role)のロールを持つ要素の場合、支援技術は実際の値をユーザーにレンダリングする**べき**です（SHOULD）。

> **Note:** **注**: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1:

下のスニペットは、現在の値が 4 の単純なスライダーを示しています。

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
- [aria-valuemin](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute "Using_the_aria-valuemin_attribute")
- [aria-valuetext](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute "Using the aria-valuetext attribute")

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-valuenow の WAI-ARIA 仕様](http://www.w3.org/TR/wai-aria/#aria-valuenow)（英語）
