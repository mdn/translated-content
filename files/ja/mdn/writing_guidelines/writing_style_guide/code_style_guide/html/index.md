---
title: HTML のコード例を整形するためのガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
---

{{MDNSidebar}}

以下のガイドラインでは、MDN Web Docs のコードの例で HTML をどのように記述するのかを扱います。

## HTML コード例のための全般的なガイドライン

> **メモ:** この章のガイドラインは、完全に HTML 文書を表示する必要がある場合にのみ適用されます。通常、機能を示すにはスニペットで十分です。 [EmbedLiveSample マクロ](/ja/docs/MDN/Structures/Code_examples#traditional_live_samples)を使用している場合、 HTML スニペットを載せるだけで、表示時に自動的に完全な HTML 文書の中に挿入されます。

### 文書型宣言

HTML5 の文書型宣言を使ってください。短く、覚えやすく、後方互換性があります。

```html example-good
<!doctype html>
```

### 文書の言語

{{htmlelement("html")}} 要素に [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) 属性を使い、文書の言語を設定してください。

```html example-good
<html lang="ja"></html>
```

これは、アクセシビリティや検索エンジンに有利で、コンテンツのローカライズにも役立ち、ベストプラクティスを使用するよう人々に注意を促すものです。

### 文書の文字セット

また文書の文字セットを以下のように定義してください。

```html example-good
<meta charset="utf-8" />
```

UTF-8 を使用しない特別な理由がない限り、 UTF-8 を使用してください。さらに、 HTML の {{HTMLElement("head")}} ブロックの中（最初の 1 キロバイト以内）で、できるだけ早く文字セットを設定した方がいいでしょう。これは、かなり[厄介な Internet Explorer のセキュリティ脆弱性](https://docs.microsoft.com/en-US/troubleshoot/developer/browsers/development-website/wrong-character-set-for-html-page)に対して保護されるからです。

### ビューポートメタタグ

最後に、常にビューポートメタタグを HTML の {{HTMLElement("head")}} に追加して、この例がモバイル端末で動作する可能性を高めておく必要があります。文書には少なくとも次のものを入れてください。これは、必要に応じて後で修正することができます。

```html example-good
<meta name="viewport" content="width=device-width" />
```

詳しくは [viewport メタタグを使用してモバイルブラウザーでのレイアウトを制御する](/ja/docs/Web/HTML/Viewport_meta_tag)をご覧ください。

## 属性

すべての属性の値は二重引用符で囲まなければなりません。 HTML5 でクオートの省略が許されるようになり、広まっていますが、取り入れるとマークアップが綺麗になり読みやすくなります。例えば、こちらは良い例です。

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

次の例と比べてください。

```html example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

上記の例では、 `alt` 属性は複数の属性として解釈されます。なぜなら、 "A circular globe icon" が 1 つの属性値であることを示す引用符が存在しないからです。

### 論理属性

論理属性は完全な形で書かないでください。設定するには属性の名前だけ書いてください。例えば、このように書きます。

```html example-good
required
```

これだけで完全に理解され、正常に動作します。次のように値を含めて書く長い形式にも対応していますが、必要ありません。

```html example-bad
required="required"
```

### 小文字を使う

すべての要素の名前と属性の名前/値に小文字を使ってください、綺麗に見えますし、マークアップをより早く書くことができます。

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

### クラスと ID の名前

意味のあるクラス/ID 名を使い、複数の単語はハイフンで分割してください。キャメルケース (camelCase) は使わないでください。

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

### 二重引用符を使う

HTML には単一引用符でなく、二重引用符を使ってください。

```html example-good
<p class="important">Yes</p>
```

```html-nolint example-bad
<p class='important'>Nope</p>
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

## HTML 要素

MDN Web Docs では、HTML 要素について書くためのいくつかのルールがあります。これらのルールに従うことで、要素やその構成要素について一貫した記述ができ、また、詳細な文書化への正しいリンクが確保されます。

- **要素名**: [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) マクロを使用すると、その要素の MDN Web Docs ページへのリンクを作成します。例えば、`{HTMLElement("title")}}` と書くと "{{HTMLElement("title")}}" が生成されます。
  リンクを作成しない場合は、**名前を山括弧で囲み**、「インラインコード」スタイル（例：`<title>`）を使用してください。
- **属性名**: 「インラインコード」スタイルを使用して、属性名を `code font` で表示します。
  さらに、その属性が何をするものであるかの説明と関連して言及されるとき、またはページで初めて使用されるときは、 **`bold face`** で記述してください。
- **属性値**: 属性値に「インラインコード」スタイルを使用して `<code>` を適用し、コードサンプルの構文で必要な場合を除き、文字列の値を引用符で囲まないでください。例: 「`<input>` 要素の `type` 属性に `email` または `tel` を設定したとき ...」とします。
