---
title: aria-describedby 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
tags:
  - ARIA
  - Accessibility
  - Attribute
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
---
### 説明

[`aria-describedby`](https://www.w3.org/TR/wai-aria/#aria-describedby) 属性は、オブジェクトを説明する要素の ID を示すために使用されます。これは、ウィジェットまたはグループとそれらを記述するテキストの間の関係を確立するために使用されます。これは、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) と非常によく似ています。 ラベルはオブジェクトの本質を表し、説明はユーザーが必要とする可能性のある詳細を提供します。

`aria-describedby` 属性はフォーム要素にのみ使用されるものではありません。 静的テキストをウィジェット、要素のグループ、ペイン、見出しを持つ領域、定義等々に関連付けるためにも使用されます。 以下の[例](#examples)のセクションでは、これらの場合に属性を使用する方法の詳細について説明します。

この属性は、一般的な HTML フォーム要素で使用できます。 ARIA の `role` が割り当てられている要素に限定されるものではありません。

### 値

スペースで区切られた要素の ID のリスト

### ユーザーエージェントと支援技術への影響

> **Note:** **注:** 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: アプリケーションのランドマークの説明

以下の例では、導入の段落でカレンダーアプリケーションについて説明します。 `aria-describedby` は、段落をアプリケーションのコンテナに関連付けるために使用されます。

```html
<div role="application" aria-labelledby="calendar" aria-describedby="info">
    <h1 id="calendar">カレンダー</h1>
    <p id="info">
        このカレンダーには、ボストンレッドソックスのゲームの予定が表示されます。
    </p>
    <div role="grid">
        ...
    </div>
</div>
```

#### 例 2: 閉じるボタン

以下の例では、ダイアログの \[閉じる] ボタンとして機能するリンクが、ドキュメントの別の場所で説明されています。 `aria-describedby` 属性は、説明をリンクに関連付けるために使用されます。

```html
<button aria-label="Close" aria-describedby="descriptionClose"
    onclick="myDialog.close()">X</button>

...

<div id="descriptionClose">このウィンドウを閉じると、入力された情報は破棄され、
メインページに戻ります</div>
```

### 注

- `aria-describedby` 属性は、外部リソースの記述を参照するようには設計されていません。 ID であるため、同じ DOM ドキュメント内の要素を参照する必要があります。

### ARIA ロールによって使用される

ベースマークアップのすべての要素

### 関連する ARIA 技術

- [aria-labelledby 属性の使用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-describedby の WAI-ARIA 仕様](https://www.w3.org/TR/wai-aria/#aria-describedby)（英語）
