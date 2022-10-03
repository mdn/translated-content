---
title: CSS の一般的な質問
slug: Learn/CSS/Howto/CSS_FAQ
original_slug: Web/CSS/Common_CSS_Questions
---

この記事には、 CSS に関するいくつかのよくある質問（FAQ）とその解答が見つかり、ウェブ開発者になるための道で役に立つでしょう。

## なぜ CSS が妥当なのに正しくレンダリングされないのか？

ブラウザーは `DOCTYPE` 宣言を使用して、文書の表示ににウェブ標準とより互換性があるモードを使用するか、あるいは古いブラウザーのバグに互換性があるモードを使用するかを選択します。正しく新しい `DOCTYPE` 宣言を HTML の先頭で使用すると、ブラウザーの標準への準拠度が向上します。

現代のブラウザーは、2 つの主要なレンダリングモードを備えています。

- _Quirks Mode_: 後方互換モードとも呼ばれます。古いウェブページが制作者の意図したとおりにレンダリングされるようにして、古いブラウザーが用いていた非標準のレンダリング規則に従います。 `DOCTYPE` 宣言が不完全、不正確、あるいは存在しない、または 2001 年より前に一般的であった既知の `DOCTYPE` 宣言であるドキュメントは、 Quirks Mode でレンダリングされます。
- _Standards Mode_: ブラウザーは W3C 標準へ厳密に従おうとします。新しい HTML ページは標準に準拠したブラウザー向けに設計されていると考えられるため、新しい `DOCTYPE` 宣言を持つページは Standards Mode でレンダリングされます。

Gecko ベースのブラウザーには、いくつかの小さな調整のみを行う第 3 のモードであります*[Almost Standards Mode](/ja/docs/Gecko's*"Almost*Standards"\_Mode "Gecko's*\"Almost*Standards\"\_Mode")* があります。

以下は Standards Mode または Almost Standards Mode になる `DOCTYPE` 宣言で、もっとも一般的に使用されるものの一覧です:

```
<!DOCTYPE html> /* これは HTML5 の doctype です。HTML5 パーサーを使用する新しいブラウザーでは、
                   この doctype が推奨されます */

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

可能な限り、 HTML5 の doctype を使用するべきです。

## なぜ CSS が妥当なのにまったくレンダリングされないのか?

以下のような可能性があります。

- CSS ファイルへのパスが間違っている。
- 適用されるためには、 CSS スタイルシートを MIME タイプ `text/css` で提供しなければなりません。ウェブサーバがこのタイプで提供していない場合、スタイルシートは適用されません。

## `id` と `class` の違いは何か?

HTML の要素は、 `id` 属性と `class` 属性の片方または両方を持つことができます。 `id` 属性は要素に適用する名前を割り当てます。妥当なマークアップでは、ある名前を持つ要素はひとつだけです。 `class` 属性は要素にクラス名を割り当てます。一つのクラス名を、ページ内の多数の要素で使用できます。 CSS は特定の `id` または `class` 名に対してスタイルを設定できます。

- ページ内のたくさんのブロックや要素にスタイルのルールを適用したい場合や、スタイルを適用したい要素が 1 つしかないものの、後で追加したい場合は、 class 指定によるスタイルを使用してください。
- 適用されるスタイルのルールを 1 つの特定のブロックや要素に限定する必要がある場合は、 id 指定によるスタイルを使用してください。このスタイルは特定の id を持った特定の要素にのみ使用されます。

一般的にはできるだけ class を使用し、 id は特定の用途で絶対的に必要な場合（ラベルとフォーム要素を接続したり、スタイルをつける要素が意味的に独自の場合など）に限り使用することが推奨されます。

- class を使用するとスタイルの用途が広げられるようになり、現在は特定のルールセットのスタイルを 1 つの要素にしか適用しなくても、後から追加したくなる可能性があります
- class を使用すると、複数の要素のスタイルを設定できるため、id セレクタを使用する複数のルールで同じスタイル設定情報を書き出す必要がなくなり、より短いスタイルシートを作成できます。より短いスタイルシートはより高性能です
- class セレクタは id セレクタよりも特異性が低いため、必要に応じてオーバーライドする方が簡単です

> **メモ:** 詳しくは [Selectors](/ja/docs/Learn/CSS/Introduction_to_CSS/Selectors) もご覧ください。

## プロパティの既定値に戻すにはどうすればよいのか?

当初 CSS には "default" キーワードがなく、プロパティの既定値を戻す唯一の方法は、そのプロパティを明示的に宣言し直すことでした。

```css
/* 見出しの既定の色は黒 */
h1 { color: red; }
h1 { color: black; }
```

これは CSS 2 で変わり、[initial](/ja/docs/CSS/initial) キーワードが CSS プロパティの正当な値になりました。これはプロパティを既定値にリセットします。この既定値は、当該プロパティの CSS 仕様で定義されています。

```css
/* 見出しの既定の色は黒 */
h1 { color: red; }
h1 { color: initial; }
```

## スタイルを他のスタイルから派生させるにはどうすればよいか?

CSS では、あるスタイルが他の表現で定義されることを許可していません ([Working Group のスタンスに関する、Eric Meyer 氏のコメント](http://archivist.incutio.com/viewlist/css-discuss/2685)をご覧ください)。ただし、ひとつの要素に複数のクラスを割り当てることで、同様の効果を得られます。また、複数の場所で再利用できるスタイル情報を 1 ヶ所で定義する方法として、 [CSS 変数](/ja/docs/Web/CSS/Using_CSS_variables) が導入されました。

## ひとつの要素に複数のクラスを割り当てる方法は?

HTML の要素は `class` 属性に空白区切りでクラスを並べることで、複数のクラスを割り当てることができます。

```
<style type="text/css">
.news { background: black; color: white; }
.today { font-weight: bold; }
</style>

<div class="news today">
... content of today's news ...
</div>
```

同じプロパティが双方の規則内で宣言されている場合は、その競合がまずは詳細度によって、そして CSS 宣言の順序に従って解決されます。`class` 属性内のクラスの順序は関係がありません。

## なぜ私のスタイル規則は正しく動作しないのか?

構文が正しいスタイル規則が、ある状況下で適用されないことがあります。この種類の問題をデバッグするために [DOM Inspector](/ja/docs/DOM_Inspector) の _CSS Style Rules_ ビューを活用できますが、スタイルが無視される事例でもっとも頻発するものは以下のとおりです。

### HTML 要素の階層

CSS スタイルを HTML 要素に適用する方法は、要素の階層にも依存します。CSS 規則の詳細度や優先度にかかわらず、子孫に適用された規則は親のスタイルをオーバーライドすることを覚えておくことが重要です。

```
.news { color: black; }
.corpName { font-weight: bold; color: red; }

<!-- ニュース項目は黒色ですが、社名は赤色かつ太字です -->
<div class="news">
   (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on Thursday...
</div>
```

複雑な HTML 階層で規則が無視されているように見える場合は、異なるスタイルが設定された別の要素の内部にその要素がないかを確認してください。

### 明示的に再定義されたスタイル規則

CSS スタイルシートでは、順序**こそが**重要です。ある規則を定義した後に同じ規則を再定義した場合は、最後の定義が使用されます。

```
#stockTicker { font-weight: bold; }
.stockSymbol { color: red; }
/*  他の規則             */
/*  他の規則             */
/*  他の規則             */
.stockSymbol { font-weight: normal; }

<!-- ほとんどのテキストは太字ですが、"GE" は赤色で太字ではありません -->
<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

このような誤りを避けるには、あるセレクタに対する規則は 1 回だけ定義するようにして、セレクタに所属するすべての規則をグループ化してください。

### ショートハンドプロパティの使用

ショートハンドプロパティを使用したスタイル規則の定義は、構文がとてもコンパクトになることからよいことです。一部の属性だけを持つショートハンドプロパティの使用は可能かつ正当ですが、宣言していない属性は自動的に既定値へリセットされることを覚えておくべきです。すなわち、単独の属性に対する以前の規則は暗黙的にオーバーライドされます。

```
#stockTicker { font-size: 12px; font-family: Verdana; font-weight: bold; }
.stockSymbol { font: 14px Arial; color: red; }

<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

前の例では別の要素に属する規則で問題が発生していますが、同一の要素でも問題が起こりえます。これは、規則の順序**こそが**重要であるためです。

```
#stockTicker {
   font-weight: bold;
   font: 12px Verdana;  /* font-weight is now set to normal */
}
```

### `*` セレクタの使用

ワイルドカードセレクタ `*` はすべての要素を参照するものであり、特に注意して使用しなければなりません。

```
body * { font-weight: normal; }
#stockTicker { font: 12px Verdana; }
.corpName { font-weight: bold; }
.stockUp { color: red; }

<div id="section">
   NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0 ...
</div>
```

この例では、`body *` セレクタで body 要素内の全要素に対して規則を適用しており、それは .stockUp クラスも含むすべての階層レベルです。よって .corpName クラスに適用した `font-weight: bold;` は、body 内の全要素に適用した `font-weight: normal;` にオーバーライドされます。

特にセレクタの最初の要素として使用しない場合に、\* セレクタは遅いセレクタであるため使用は最小限にするべきです。このような使い方はできるだけ避けるべきです。

### CSS の詳細度

ある要素に複数の規則を適用すると、スタイルの[詳細さ](/ja/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Specificity)に従って規則が選ばれます。インラインスタイル（HTML の `style` 属性）が最上位の詳細さで他のあらゆるセレクタを上書きし、次に ID セレクタ、それからクラスセレクタ、要素名セレクタの順となります。よって、以下の {{htmlelement("div")}} の文字色は赤になります。

```
div { color: black; }
#orange { color: orange; }
.green { color: green; }

<div id="orange" class="green" style="color: red;">This is red</div>
```

セレクタが複数の範囲を持つ場合、規則はより複雑になります。セレクタの詳細度がどのように算出されるかについて、詳しくは [CSS 2.1 Specification chapter 6.4.3](http://www.w3.org/TR/CSS21/cascade.html#specificity) でご覧いただけます。

## -moz-\*、-ms-\*、-webkit-\*、-o-\*、-khtml-\* プロパティは何をするものか?

これらのプロパティは*接頭辞付きプロパティ*と呼ばれ、CSS 標準を拡張したものです。これらは正規の名前空間を乱すことなく実験的で非標準の機能を使用するために用いられ、標準仕様が拡張したときに機能の不整合が発生することを防ぎます。

本番 Web サイトでこのようなプロパティを使用することはお勧めできません。これらのプロパティは既に Web との互換性に大きな問題を引き起こしています。たとえば、接頭辞のないバージョンがすべてのブラウザーでサポートされている場合に、接頭辞のないバージョンがプロパティの `-webkit-` 接頭辞バージョンのみを使用するということは、Webkit ベースでないブラウザーではそのプロパティに依存する機能が完全に不要になるということです。この問題はひどく悪くなったため、Compatibility Living Standard で指定されているように、Web の互換性を向上させるために他のブラウザーが `-webkit-` プレフィックスエイリアスを実装し始めました。

実際のところ、ほとんどのブラウザーは実験的機能を実装するときに CSS プレフィックスを使用せず、代わりに Nightly ブラウザーバージョンなどでのみそれらの機能を実装しています。

作業でプレフィックスを使用する必要がある場合は、最初にプレフィックス付きのバージョンを使用するようにコードを書くことをお勧めします。ただし、サポートされている場合はプレフィックス付きのバージョンを自動的に上書きできます。 例えば：

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

> **メモ:** 接頭辞付きプロパティの処理の詳細については、[クロスブラウザーテスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing)モジュールの[一般的な HTML および CSS の問題の処理 - CSS プレフィックスの処理](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Handling_CSS_prefixes)を参照してください。

> **メモ:** Mozilla をプレフィックスとする CSS プロパティの詳細については、[CSS の Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)ページを参照してください。

## z-index は位置指定へどのように関係するのか?

z-index プロパティは、要素を積み重ねる順序を指定します。

z-index/stack の順序が高い要素は、常に z-index/stack の順序が低い要素の前に表示されます。z-index は指定された位置 (`position:absolute`、`position:relative`、または `position:fixed`) を持つ要素に対してのみ機能します。

> **メモ:** 詳細については、[ポジショニング](/ja/docs/Learn/CSS/CSS_layout/Positioning)学習の記事、特に [z-index の紹介](/ja/docs/Learn/CSS/CSS_layout/Positioning#Introducing_z-index)セクションを参照してください。
