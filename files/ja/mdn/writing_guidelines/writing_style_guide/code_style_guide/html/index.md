---
title: HTML ガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
tags:
  - Code
  - Guide
  - Guidelines
  - HTML
  - MDN Meta
translation_of: MDN/Guidelines/Code_guidelines/HTML
original_slug: MDN/Guidelines/Code_guidelines/HTML
---
{{MDNSidebar}}{{IncludeSubnav("/ja/docs/MDN")}}

以下のガイドラインでは、MDN のコードの例で HTML をどのように記述するのかを学習します。

## この記事について

- [文書型宣言とメタデータ](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Doctype_and_metadata)

  - [Doctype](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Doctype)
  - [文書の言語](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Document_language)
  - [文書の文字セット](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Document_characterset)
  - [ビューポートメタタグ](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Viewport_meta_tag)

- [一般的なマークアップコーディングスタイル](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#General_markup_coding_style)

  - [小文字を使う](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Use_lowercase)
  - [末尾のスラッシュ](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Trailing_slashes)
  - [属性の引用](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Quoting_attributes)
  - [ダブルクォートを使う](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Use_double_quotes)
  - [真偽属性](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Boolean_attributes)
  - [クラス と ID の名前](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Class_and_ID_names)
  - [実体参照](/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML#Entity_references)

## Doctype とメタデータ

> **Note:** **注記**: このセクションにあるガイドラインは完全な HTML 文書として見せなければならない時だけ適用してください。多くの場合、このようにする必要がありません; スニペット(HTML の断片)で通常は機能を説明するのに十分間に合います。[EmbedLiveSample macro](/ja/docs/MDN/Contribute/Structures/Code_examples#Traditional_live_samples) を使うと、スニペットを取り込みます; 表示される際に自動で完全な HTML 文書に挿入されます。

### Doctype

HTML5 の Doctype を使わなくてはなりません。短く、覚えやすく、後方互換性があります:

```html example-good
<!DOCTYPE html>
```

### 文書の言語

{{htmlelement("html")}} 要素に {{htmlattrxref('lang')}} 属性を使って文書の言語を設定します:

```html example-good
<html lang="ja">
```

これはアクセシビリティと検索エンジンにとって良いことで、コンテンツのローカライズに役立ち、最良の慣習を使うべきと気づかせます。

### 文書の文字セット

また文書の文字セットを以下のように定義しなければなりません:

```html example-good
<meta charset="utf-8">
```

UTF-8 を使用しないというとても明白な理由がない限りは使用するべきです; 文書でどんな言語が使われていても必要とする文字を余裕を持って扱えます。加えて、常にできるだけ早く、HTML の {{HTMLElement("head")}} ブロック (先頭の 1 キロバイト内) に文字セットを特定するべきです、かなり [不快な Internet Explorer のセキュリティ脆弱性](http://support.microsoft.com/kb/928847) から守ってくれるからです。

### ビューポートメタタグ

最後に、HTML {{HTMLElement("head")}} にはビューポートメタタグを追加しなければなりません、例を示してモバイル端末でより良く動作するきっかけとなります。文書に少なくとも以下の内容を含めておき、必要になったら後ほど変更できます:

```html example-good
<meta name="viewport" content="width=device-width">
```

より詳しくは [モバイルブラウザーでのレイアウトを制御するために meta タグの viewport を使う](/ja/docs/Mobile/Viewport_meta_tag) をご覧ください。

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

空要素に XHTML スタイルの末尾のスラッシュを含めないでください、不要ですし実行速度を遅くします。注意しないと古いブラウザーを中断させます (思い返してみると、Netscape 4 から問題とはなっていませんが)。

こちらは良い例:

```html example-good
<input type="text">
<hr>
```

スラッシュは必要ありません:

```html example-bad
<input type="text" />
<hr />
```

### 属性を引用符で囲む

すべての属性の値はダブルクォートで囲わなければなりません。HTML5 でクオートの省略が許されるようになり、広まっていますが、取り入れるとマークアップが綺麗になり読みやすくなります。例えば、こちらは良い例です:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border">
```

次の例と比べてください。

```html example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

こちらは問題も引き起こします — 上記の例では `alt` 属性の部分が複数の属性と解釈されて実行が中断するでしょう、"A circular globe icon" が 1 つの属性の値であると特定するクォートがないためです。

### ダブルクォートを使う

HTML にはシングルクォートでなく、ダブルクォートを使います:

```html example-good
<p class="important">Yes</p>
```

```html example-bad
<p class='important'>Nope</p>
```

### 真偽属性

真偽属性は完全な形で書かないでください; 設定するには属性の名前だけ書きます。例えば、このように書きます:

```html example-good
required
```

これだけで完全に理解され、うまく動作します。値を含めて書く長い形式、

```html example-bad
required="required"
```

もサポートされるものの必須ではありません。

### クラス名と ID 名

意味のあるクラス/ID 名を使い、複数の単語はハイフンで分割します。キャメルケース (camelCase) は使いません。

良い:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

悪い:

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

### 実体参照

実体参照を必要以上に使わない — リテラル文字を可能であれば使いましょう (角括弧や引用符のような記号は、まだエスケープが必要です) 。

単純に書ける例

```html example-good
<p>© 2018 Me</p>
```

以下のようにも書けますが、

```html example-bad
<p>&copy; 2018 Me</p>
```

UTF-8 文字セットで記述する限りは問題ありません。

## MDN での良い HTML の例

優良で、簡潔で、有意義な HTML のスニペットを [HTML リファレンス](/ja/docs/Web/HTML/Reference) の先頭で見つけることができます — 対話形式の例は一般的にこれらのガイドラインに従って書かれていますが、ガイドラインが新規に書かれる前に大部分が書かれているので、いくつかの箇所は異なっているのに気をつけてください。
