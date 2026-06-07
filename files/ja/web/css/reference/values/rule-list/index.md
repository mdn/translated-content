---
title: CSS `<rule-list>` データ型
short-title: <rule-list>
slug: Web/CSS/Reference/Values/rule-list
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

**`<rule-list>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、**0 個以上の CSS ルール**の並びを表します。これは、スタイルシートの最上位や、`@media` や `@supports` などのグループ化アットルール内など、CSS 内で複数のルールが現れる場所を定義するために使用されます。

`<rule-list>` は直接記述されるものではありません。ブロックやスタイルシート内のルールを CSS パーサーがどのように収集し、解釈するかを説明するものです。

## 構文

`<rule-list>` は、**0個以上**の要素の並びとして定義されます。

- **スタイルルール** （例: `p { color: red; }`）
- **修飾アットルール** （例: `@media (width < 600px) { ... }`）
- **無視される文** （パーサーで処理される構文解析エラーで、パーサーが自動的にスキップするもの）

すべてのホワイトスペース、コメント、および無効または構文エラーのある構文は、CSS パーサーのルールに従って処理されます。

## 解説

`<rule-list>` データ型は、CSS 仕様において「ルールのリスト」が含まれている箇所であれば、どこにでも現れます。

例えば次のようなものがあります。

- スタイルシートの**最上位**。
- **グループ化アットルール**、例えば `@media`、`@custom-media`、`@supports`、`@layer`、`@container` の中。
- **入れ子セレクター** （CSS 入れ子）の中。

作成者は明示的に `<rule-list>` と記述することはできませんが、CSS が入れ子構造をどのように解釈するか、無効なルールがどのように除外されるか、そして条件付きブロック内でカスケードがどのように形成されるかを理解する上で、これを把握することは極めて重要です。

## 例

### スタイルシート内の `<rule-list>`

このスタイルシートは、2 つのスタイルルールと 1 つのアットルールを含む `<rule-list>` として扱われます。

```css
p {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

@media (width < 600px) {
  body {
    background: lightgray;
  }
}
```

### `@media` アットルール内の `<rule-list>`

`@media` アットルール内に含まれるブロックは、1 つ以上のスタイルルールを含む `<rule-list>` です。次の例には、2 つのスタイルルールが含まれています。

```css
@media (prefers-color-scheme: dark) {
  main {
    background: black;
    color: white;
  }

  a {
    color: skyblue;
  }
}
```

### `<rule-list>` 内の無効なルール

不正なトークンの並び（`!invalid-rule`）は、パーサーによって無視されます。残りのルールは、有効な `<rule-list>` を形成しています。

```plain
body {
  color: black;
}

!invalid-rule

@supports (display: grid) {
  section {
    display: grid;
  }
}
```

## 仕様書

{{Specifications}}

## 関連情報

- CSS {{cssxref("@supports")}} アットルール
- CSS {{cssxref("@media")}} アットルール
- CSS {{cssxref("@custom-media")}} アットルール
