---
title: HTML のガイドライン
slug: MDN/Guidelines/Code_guidelines/HTML
tags:
  - Code
  - Guide
  - Guidelines
  - HTML
  - MDN Meta
translation_of: MDN/Guidelines/Code_guidelines/HTML
---
{{MDNSidebar}}

以下のガイドラインでは、MDN のコードの例で HTML をどのように記述するのかを学習します。

## 目次

- [文書型宣言とメタデータ](#文書型宣言とメタデータ)

  - [文書型宣言](#文書型宣言)
  - [文書の言語](#文書の言語)
  - [文書の文字セット](#文書の文字セット)
  - [ビューポートメタタグ](#ビューポートメタタグ)

- [一般的なマークアップコーディングスタイル](#一般的なマークアップコーディングスタイル)

  - [小文字を使う](#小文字を使う)
  - [末尾のスラッシュ](#末尾のスラッシュ)
  - [属性を引用符で囲む](#属性を引用符で囲む)
  - [二重引用符を使う](#二重引用符を使う)
  - [論理属性](#論理属性)
  - [クラスと ID の名前](#クラスと_id_の名前)
  - [実体参照](#実体参照)

## 文書型宣言とメタデータ

> **Note:** この部分のガイドラインは、完全な HTML 文書を表示する必要がある場合にのみ適用されます。ほとんどの場合、このようなことをする必要はありません。 [EmbedLiveSample マクロ](/ja/docs/MDN/Structures/Code_examples#traditional_live_samples)を使用する場合は、 HTML スニペットを入れるだけで、表示する際、自動的に完全な HTML 文書に挿入されます。

### 文書型宣言

HTML5 の文書型宣言を使ってください。短く、覚えやすく、後方互換性があります。

```html example-good
<!DOCTYPE html>
```

### 文書の言語

{{htmlelement("html")}} 要素に {{htmlattrxref('lang')}} 属性を使い、文書の言語を設定してください。

```html example-good
<html lang="ja">
```

これは、アクセシビリティや検索エンジンに有利で、コンテンツのローカライズにも役立ち、ベストプラクティスを使用するよう人々に注意を促すものです。

### 文書の文字セット

また文書の文字セットを以下のように定義してください。

```html example-good
<meta charset="utf-8">
```

UTF-8 を使用しない特別な理由がない限り、 UTF-8 を使用してください。さらに、 HTML の {{HTMLElement("head")}} ブロックの中（最初の 1 キロバイト以内）で、できるだけ早く文字セットを設定した方がいいでしょう。これは、かなり[厄介な Internet Explorer のセキュリティ脆弱性](https://docs.microsoft.com/en-US/troubleshoot/developer/browsers/development-website/wrong-character-set-for-html-page)に対して保護されるからです。

### ビューポートメタタグ

最後に、常にビューポートメタタグを HTML の {{HTMLElement("head")}} に追加して、この例がモバイル端末で動作する可能性を高めておく必要があります。文書には少なくとも次のものを入れてください。これは、必要に応じて後で修正することができます。

```html example-good
<meta name="viewport" content="width=device-width">
```

詳しくは [viewport メタタグを使用してモバイルブラウザーでのレイアウトを制御する](/ja/docs/Web/HTML/Viewport_meta_tag)をご覧ください。

## 一般的なマークアップコーディングスタイル

### 小文字を使う

すべての要素の名前と属性の名前/値に小文字を使ってください、綺麗に見えますし、マークアップをより早く書くことができます。

良い例:

```html example-good
<p class="nice">This looks nice and neat</p>
```

良くない例:

```html example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

### 末尾のスラッシュ

空要素に XHTML スタイルの末尾のスラッシュを含めないでください、不要ですし、実行速度を遅くします。注意しないと古いブラウザーを中断させます（思い返してみると、 Netscape 4 から問題とはなっていませんが）。

こちらは良い例:

```html example-good
<input type="text">
<hr>
```

スラッシュは必要ありません。

```html example-bad
<input type="text" />
<hr />
```

### 属性を引用符で囲む

すべての属性の値は二重引用符で囲まなければなりません。 HTML5 でクオートの省略が許されるようになり、広まっていますが、取り入れるとマークアップが綺麗になり読みやすくなります。例えば、こちらは良い例です。

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border">
```

次の例と比べてください。

```html example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

上記の例では、 `alt` 属性は複数の属性として解釈されます。なぜなら、 "A circular globe icon" が 1 つの属性値であることを示す引用符が存在しないからです。

### 二重引用符を使う

HTML には単一引用符でなく、二重引用符を使ってください。

```html example-good
<p class="important">Yes</p>
```

```html example-bad
<p class='important'>Nope</p>
```

### 論理属性

論理属性は完全な形で書かないでください。設定するには属性の名前だけ書いてください。例えば、このように書きます。

```html example-good
required
```

これだけで完全に理解され、正常に動作します。次のように値を含めて書く長い形式にも対応していますが、必要ありません。

```html example-bad
required="required"
```

### クラスと ID の名前

意味のあるクラス/ID 名を使い、複数の単語はハイフンで分割してください。キャメルケース (camelCase) は使わないでください。

良い例:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

悪い例:

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

### 実体参照

実体参照を必要以上に使わないでください。可能であれば、リテラル文字を使いましょう（角括弧や引用符のような記号は、エスケープが必要です）。

以下の例のように書くことができます。

```html example-good
<p>© 2018 Me</p>
```

以下のようにも書けますが、

```html example-bad
<p>&copy; 2018 Me</p>
```

UTF-8 文字セットで記述する限りは問題ありません。

## MDN での良い HTML の例

優良で、簡潔で、有意義な HTML のスニペットを [HTML リファレンス](/ja/docs/Web/HTML/Reference)の先頭で見つけることができます — 対話形式の例は一般的にこれらのガイドラインに従って書かれていますが、ガイドラインが新規に書かれる前に大部分が書かれているので、いくつかの箇所は異なっているのに気をつけてください。
