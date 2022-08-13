---
title: aria-valuetext 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute
tags:
  - ARIA
  - Accessibility
  - Attribute
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute
---
[`aria-valuetext`](http://www.w3.org/TR/wai-aria/#aria-valuetext) 属性は、プログレスバー、スピンボタン、スライダーなどの範囲ウィジェットの [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute) に対する人間が読める代替テキストを定義するために使用されます。

作成者は、レンダリングされた値を数値として正確に表現できない場合にのみ、`aria-valuetext` 属性を設定する**べき**です（SHOULD）。 たとえば、スライダーのレンダリング値が`小`、`中`、`大`の場合があります。 この場合、`aria-valuenow` の値は 1 〜 3 の範囲で値空間内の各値の位置を示しますが、`aria-valuetext` は、`小`、`中`、`大`のいずれかの文字列になります。

### 値

数値の文字列表現

### ユーザーエージェントと支援技術への影響

`aria-valuetext` 属性がない場合、支援技術は現在の値の [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute) 属性のみに依存します。 `aria-valuetext` が指定されている場合、支援技術は `aria-valuenow` の値の代わりにその値をレンダリングする**べき**です（SHOULD）。

> **Note:** **注**: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1:

下のスニペットは、曜日を選択するための簡単なスライダーを示しています。 スライダーの値は数値で、`aria-valuetext` 属性を使用してその日の名前を指定します。 アプリケーションは、`aria-valuenow` に応じてプログラムで `aria-valuetext` を更新します。

```html
<div role="slider" aria-valuenow="1"
	aria-valuemin="1" aria-valuemax="7"
	aria-valuetext="日曜日">
```

#### 動作する例

### 注

### ARIA ロールで使用

- [progressbar](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)
- scrollbar
- [slider](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)
- spinbutton

### 関連する ARIA 技術

- [aria-valuenow](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute)

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-valuetext の WAI-ARIA 仕様](http://www.w3.org/TR/wai-aria/#aria-valuetext)（英語）
