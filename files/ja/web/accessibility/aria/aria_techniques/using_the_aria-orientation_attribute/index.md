---
title: aria-orientation 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute
tags:
  - ARIA
  - Accessibility
  - Attribute
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute
---
[aria-orientation](https://www.w3.org/TR/wai-aria/#aria-orientation) 属性は、要素が水平方向か垂直方向かを示すために使用されます。

### 値

語彙

| vertical                | 要素は垂直方向です。             |
| ----------------------- | -------------------------------- |
| horizontal              | 要素は水平方向です。             |
| undefined（デフォルト） | 要素の方向は不明または曖昧です。 |

### ユーザーエージェントと支援技術への影響

> **Note:** **注**: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1:

下のスニペットは、垂直方向に向けられた単純なスライダを示しています。

```html
<a href="#" id="handle_zoomSlider"
        role="slider"
        aria-orientation="vertical"
        aria-valuemin="0"
        aria-valuemax="17"
        aria-valuenow="14" >
    <span>11</span>
</a>
```

### 注

### ARIA ロールで使用

- scrollbar
- listbox
- combobox
- menu
- tree
- separator
- [slider](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role "Using the slider role")
- tablist
- toolbar

### 関連する ARIA 技術

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-orientation の WAI-ARIA 仕様](https://www.w3.org/TR/wai-aria/#aria-orientation)（英語）
