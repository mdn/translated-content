---
title: radio ロールの使用
slug: Web/Accessibility/ARIA/Roles/radio_role
---

### 説明

このテクニックは、[`radio`](https://www.w3.org/TR/wai-aria/#radio) ロールをどのように使用するかを示し、ブラウザーと支援技術に及ぼす影響について説明します。

### ユーザーエージェントと支援技術への影響

> **メモ:** 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1

MDN ページの[基本的なフォームのヒント](/ja/docs/Web/Accessibility/ARIA/forms/Basic_form_hints)からの例

```html
<h3 id="rg1_label">ランチオプション</h3>

<ul class="radiogroup" id="rg1" role="radiogroup" aria-labelledby="rg1_label">
  <li id="r1" tabindex="-1" role="radio" aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> タイ
  </li>
  <li id="r2" tabindex="-1" role="radio" aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> サブウェイ
  </li>
  <li id="r3" tabindex="0" role="radio" aria-checked="true">
    <img role="presentation" src="radio-checked.gif" /> ラジオマリア
  </li>
</ul>
```

#### 動作する例

### 注

### 使用された ARIA 属性

### 関連する ARIA 技術

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース
