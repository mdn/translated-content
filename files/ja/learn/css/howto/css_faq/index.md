---
title: CSS の一般的な質問
slug: Learn/CSS/Howto/CSS_FAQ
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

この記事には、 CSS に関するいくつかのよくある質問 (FAQ) とその解答があります。ウェブ開発者になるための道で役に立つかもしれません。

## なぜ CSS が妥当なのに正しくレンダリングされないのか？

ブラウザーは `DOCTYPE` 宣言を使用して、文書の表示にウェブ標準とより互換性があるモードを使用するか、あるいは古いブラウザーのバグに互換性があるモードを使用するかを選択します。正しく新しい `DOCTYPE` 宣言を HTML の先頭で使用すると、ブラウザーの標準への準拠度が向上します。

現代のブラウザーは、2 つの主要なレンダリングモードを備えています。

- 後方互換モード (_Quirks Mode_): 古いウェブページが制作者の意図したとおりにレンダリングされるようにして、古いブラウザーが用いていた非標準のレンダリングルールに従います。 `DOCTYPE` 宣言が不完全、不正確、あるいは存在しない、または 2001 年より前に一般的であった既知の `DOCTYPE` 宣言である文書は、後方互換モードでレンダリングされます。
- 標準モード (_Standards Mode_): ブラウザーは W3C 標準へ厳密に従おうとします。新しい HTML ページは標準に準拠したブラウザー向けに設計されていると考えられるため、新しい `DOCTYPE` 宣言を持つページは標準でレンダリングされます。

Gecko ベースのブラウザーには、いくつかの小さな調整のみを行う第 3 のモードである _[Almost Standards Mode](/ja/docs/Mozilla/Gecko_Almost_Standards_Mode)_ があります。

標準の `DOCTYPE` 宣言では、標準モードが起動します。

```html
<!doctype html>
```

すべて使用可能な場合は、上記の doctype を使用してください。他にも、標準モードやほぼ標準モードを起動する有効な古い doctype があります。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## なぜ CSS が妥当なのにまったくレンダリングされないのか?

以下のような可能性があります。

- CSS ファイルへのパスが間違っている。
- 適用されるためには、 CSS スタイルシートを MIME タイプ `text/css` で提供しなければなりません。ウェブサーバがこのタイプで提供していない場合、スタイルシートは適用されません。

## `id` と `class` の違いは

HTML の要素は、 `id` 属性と `class` 属性の片方または両方を持つことができます。 `id` 属性は要素に適用する名前を割り当てます。妥当なマークアップでは、ある名前を持つ要素はひとつだけです。 `class` 属性は要素にクラス名を割り当てます。一つのクラス名を、ページ内の多数の要素で使用できます。 CSS は特定の `id` または `class` 名に対してスタイルを設定できます。

- ページ内のたくさんのブロックや要素にスタイルのルールを適用したい場合や、スタイルを適用したい要素が 1 つしかないものの、後で追加したい場合は、 class 指定によるスタイルを使用してください。
- 適用されるスタイルのルールを 1 つの特定のブロックや要素に限定する必要がある場合は、 id 指定によるスタイルを使用してください。このスタイルは特定の id を持った特定の要素にのみ使用されます。

一般的にはできるだけ class を使用し、 id は特定の用途で絶対的に必要な場合（ラベルとフォーム要素を接続したり、スタイルをつける要素が意味的に独自の場合など）に限り使用することが推奨されます。

- class を使用するとスタイルの用途が広げられるようになり、現在は特定のルールセットのスタイルを 1 つの要素にしか適用しなくても、後から追加したくなる可能性があります
- class を使用すると、複数の要素のスタイルを設定できるため、id セレクターを使用する複数のルールで同じスタイル設定情報を書き出す必要がなくなり、より短いスタイルシートを作成できます。より短いスタイルシートはより高性能です
- class セレクターは id セレクターよりも[詳細度](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#詳細度)が低いため、必要に応じてオーバーライドする方が簡単です

> **メモ:** 詳しくは[セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)もご覧ください。

## プロパティを既定値に戻すには

当初 CSS には "default" キーワードがなく、プロパティの既定値を戻す唯一の方法は、そのプロパティを明示的に宣言し直すことでした。

```css
/* 見出しの既定の色は黒 */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

これは CSS 2 で変わり、[initial](/ja/docs/Web/CSS/initial) キーワードが CSS プロパティの正当な値になりました。これはプロパティを既定値にリセットします。この既定値は、当該プロパティの CSS 仕様で定義されています。

```css
/* 見出しの既定の色は黒 */
h1 {
  color: red;
}
h1 {
  color: initial;
}
```

## スタイルを他のスタイルから派生させるには

CSS では、あるスタイルが他の表現で定義されることを許可していません。ただし、ひとつの要素に複数のクラスを割り当てることで、同様の効果を得られます。また、複数の場所で再利用できるスタイル情報を 1 ヶ所で定義する方法として、 [CSS 変数](/ja/docs/Web/CSS/Using_CSS_custom_properties) が導入されました。

## ひとつの要素に複数のクラスを割り当てる方法は?

HTML の要素は `class` 属性に空白区切りでクラスを並べることで、複数のクラスを割り当てることができます。

```html
<style>
  .news {
    background: black;
    color: white;
  }
  .today {
    font-weight: bold;
  }
</style>

<div class="news today">Content of today's news goes here.</div>
```

同じプロパティが双方のルール内で宣言されている場合は、その競合がまずは詳細度によって、そして CSS 宣言の順序に従って解決されます。`class` 属性内のクラスの順序は関係がありません。

## なぜスタイルルールは正しく動作しないのか

構文が正しいスタイルルールが、ある状況下で適用されないことがあります。この種類の問題をデバッグするために、インスペクターの _CSS ペイン_ の[ルールビュー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)を使用することができますが、スタイルが無視される事例でもっとも頻発するものは以下のものです。

### HTML 要素の階層

CSS スタイルを HTML 要素に適用する方法は、要素の階層にも依存します。CSS ルールの詳細度や優先度にかかわらず、子孫に適用されたルールは親のスタイルをオーバーライドすることを覚えておくことが重要です。

```css
.news {
  color: black;
}
.corpName {
  font-weight: bold;
  color: red;
}
```

```html
<!-- ニュース項目は黒色ですが、社名は赤色かつ太字です -->
<div class="news">
  (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on
  Thursday…
</div>
```

複雑な HTML 階層でルールが無視されているように見える場合は、異なるスタイルが設定された別の要素の内部にその要素がないかを確認してください。

### 明示的に再定義されたスタイルルール

CSS スタイルシートでは、順序**こそが**重要です。あるルールを定義した後に同じルールを再定義した場合は、最後の定義が使用されます。

```css
#stockTicker {
  font-weight: bold;
}
.stockSymbol {
  color: red;
}
/*  other rules             */
/*  other rules             */
/*  other rules             */
.stockSymbol {
  font-weight: normal;
}
```

```html
<!-- ほとんどのテキストは太字ですが、"GE" は赤色で太字ではありません -->
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0…</div>
```

このような誤りを避けるには、あるセレクターに対するルールは 1 回だけ定義するようにして、セレクターに所属するすべてのルールをグループ化してください。

### 一括指定プロパティの使用

一括指定プロパティを使用したスタイルルールの定義は、構文がとてもコンパクトになることからよいことです。一部の属性だけを持つ一括指定プロパティの使用は可能かつ正当ですが、宣言していない属性は自動的に既定値へリセットされることを覚えておくべきです。すなわち、単独の属性に対する以前のルールは暗黙的にオーバーライドされます。

```css
#stockTicker {
  font-size: 12px;
  font-family: Verdana;
  font-weight: bold;
}
.stockSymbol {
  font: 14px Arial;
  color: red;
}
```

```html
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0…</div>
```

前の例では別の要素に属するルールで問題が発生していますが、同一の要素でも問題が起こりえます。これは、ルールの順序**こそが**重要であるためです。

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight is now set to normal */
}
```

### `*` セレクターの使用

ワイルドカードセレクター `*` はすべての要素を参照するものであり、特に注意して使用しなければなりません。

```css
body * {
  font-weight: normal;
}
#stockTicker {
  font: 12px Verdana;
}
.corpName {
  font-weight: bold;
}
.stockUp {
  color: red;
}
```

```html
<div id="section">
  NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0…
</div>
```

この例では、`body *` セレクターで body 要素内の全要素に対してルールを適用しており、それは .stockUp クラスも含むすべての階層レベルです。よって .corpName クラスに適用した `font-weight: bold;` は、body 内の全要素に適用した `font-weight: normal;` にオーバーライドされます。

特にセレクターの最初の要素として使用しない場合に、\* セレクターは遅いセレクターであるため使用は最小限にするべきです。このような使い方はできるだけ避けるべきです。

### CSS の詳細度

ある要素に複数のルールを適用すると、スタイルの[詳細度](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#詳細度)に従ってルールが選ばれます。インラインスタイル（HTML の `style` 属性）が最上位の詳細度で他のあらゆるセレクターを上書きし、次に ID セレクター、それからクラスセレクター、要素名セレクターの順となります。よって、以下の {{htmlelement("div")}} の文字色は赤になります。

```css
div {
  color: black;
}
#orange {
  color: orange;
}
.green {
  color: green;
}
```

```html
<div id="orange" class="green" style="color: red;">This is red</div>
```

セレクターが複数の範囲を持つ場合、ルールはより複雑になります。セレクターの詳細度がどのように算出されるかについて、詳しくは[CSS 詳細度のドキュメント](/ja/docs/Web/CSS/Specificity)でご覧いただけます。

## -moz-\*、-ms-\*、-webkit-\*、-o-\*、-khtml-\* プロパティは何をするのか

これらのプロパティは*接頭辞付きプロパティ*と呼ばれ、CSS 標準を拡張したものです。これらは正規の名前空間を乱すことなく実験的で非標準の機能を使用するために用いられ、標準仕様が拡張したときに機能の不整合が発生することを防ぎます。

このようなプロパティを本番のウェブサイトで使用することは推奨されません。これらはすでに巨大なウェブ互換性の混乱を作り出しています。例えば、多くの開発者は、接頭辞のないプロパティがすべてのブラウザーで完全に対応している場合にのみ、接頭辞のある `-webkit-` プロパティを使用しています。これは、そのプロパティに頼っているデザインが、webkit ベースのブラウザー以外で動作する可能性があるにもかかわらず、動作しないことを意味します。この問題は、ウェブ互換性を向上させるために、他にもウェブブラウザーが `-webkit-` 接頭辞付きエイリアスを実装するように働きかけ、[Compatibility Living Standard](https://compat.spec.whatwg.org/) で規定されるほど大きな問題となりました。

ブラウザーは、新しい実験的機能を実装するために CSS 接頭辞を使用することはなくなりました。その代わり、新しい機能を設定可能な実験的フラグでテストしたり、ブラウザーの Nightly バージョンやそれに類するものだけでテストするようになっています。

もし作業する際に接頭辞を使用する必要がある場合は、接頭辞のあるバージョンを先に書き、その後に接頭辞のない標準バージョンを書いてください。こうすることで、対応している場合、標準版が接頭辞を自動的に上書きします。例えば次のようになります。

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> **メモ:** 接頭辞付きプロパティの処理の詳細については、[クロスブラウザーテスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing)モジュールの[一般的な HTML および CSS の問題の処理 - CSS 接頭辞の処理](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes)を参照してください。

> **メモ:** ブラウザー接頭辞付き CSS プロパティの一覧は、[Mozilla CSS 拡張](/ja/docs/Web/CSS/Mozilla_Extensions), [Microsoft CSS 拡張](/ja/docs/Web/CSS/Microsoft_Extensions), [WebKit CSS 拡張](/ja/docs/Web/CSS/WebKit_Extensions) を参照してください。

## z-index は位置指定へどのように関係するのか?

z-index プロパティは、要素を積み重ねる順序を指定します。

z-index/stack の順序が高い要素は、常に z-index/stack の順序が低い要素の前に表示されます。z-index は指定された位置 (`position:absolute`、`position:relative`、または `position:fixed`) を持つ要素に対してのみ機能します。

> **メモ:** 詳細については、[位置指定](/ja/docs/Learn/CSS/CSS_layout/Positioning)の学習の記事、特に [z-index の紹介](/ja/docs/Learn/CSS/CSS_layout/Positioning#z-index_の紹介)の節を参照してください。
