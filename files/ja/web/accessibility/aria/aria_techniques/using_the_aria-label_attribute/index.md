---
title: aria-label 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
tags:
  - ARIA
  - Accessibility
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
---
[`aria-label`](https://www.w3.org/TR/wai-aria/#aria-label) 属性は、現在の要素にラベル付けする文字列を定義するために使用されます。 これはテキストラベルが画面に表示されない場合に使用します。 要素にラベル付けする目に見えるテキストがある場合は、代わりに [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) を使用します。

この属性は、一般的な HTML 要素で使用できます。 ARIA の `role` が割り当てられている要素に限定されるものではありません。

### 値

文字列

### ユーザーエージェントと支援技術への影響

> **Note:** **注**: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

## 例

#### 例 1: 閉じるボタン

以下の例では、ボタンは典型的な \[閉じる] ボタンのようにスタイルされており、中央に X があります。 ボタンの目的がダイアログを閉じることであることを示すものは何もないので、`aria-label` 属性は、支援技術によりラベル付けするために使用されます。

    <button aria-label="閉じる" onclick="myDialog.close()">X</button>

#### 動作する例

### 注

- ラベルの最も一般的なアクセシビリティ API のマッピングは、アクセス可能な名前プロパティです。
- `aria-label` 宣言を含む属性は、ほとんどの自動翻訳サービスでは無視されます。

### ARIA ロールによって使用される

ベースマークアップのすべての要素

### 関連する ARIA 技術

- [aria-labelledby 属性の使用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-label の WAI-ARIA 仕様](https://www.w3.org/TR/wai-aria/#aria-label)（英語）
