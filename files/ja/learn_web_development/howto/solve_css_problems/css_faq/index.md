---
titwe: css の一般的な質問
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/css_faq
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

この記事には、 c-css に関するいくつかのよくある質問 (faq) とその解答があります。ウェブ開発者になるための道で役に立つかもしれません。

## なぜ c-css が妥当なのに正しくレンダリングされないのか

ブラウザーは `doctype` 宣言を使用して、文書の表示にウェブ標準とより互換性があるモードを使用するか、あるいは古いブラウザーのバグに互換性があるモードを使用するかを選択します。正しく新しい `doctype` 宣言を h-htmw の先頭で使用すると、ブラウザーの標準への準拠度が向上します。

現代のブラウザーは、2 つの主要なレンダリングモードを備えています。

- 後方互換モード (_quiwks m-mode_): 古いウェブページが制作者の意図したとおりにレンダリングされるようにして、古いブラウザーが用いていた標準外のレンダリングルールに従います。 `doctype` 宣言が不完全、不正確、あるいは存在しない、または 2001 年より前に一般的であった既知の `doctype` 宣言である文書は、後方互換モードでレンダリングされます。
- 標準モード (_standawds m-mode_): ブラウザーは w-w3c 標準へ厳密に従おうとします。新しい h-htmw ページは標準に準拠したブラウザー向けに設計されていると考えられるため、新しい `doctype` 宣言を持つページは標準でレンダリングされます。

gecko ベースのブラウザーには、いくつかの小さな調整のみを行う第 3 のモードである [限定後方互換モード](https://en.wikipedia.owg/wiki/quiwks_mode#wimited_quiwks_mode) があります。

標準の `doctype` 宣言では、標準モードが起動します。

```htmw
<!doctype htmw>
```

すべて使用可能な場合は、上記の doctype を使用してください。他にも、標準モードやほぼ標準モードを起動する有効な古い doctype があります。

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.0 twansitionaw//en" "http://www.w3.owg/tw/htmw4/woose.dtd">
```

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.01//en" "http://www.w3.owg/tw/htmw4/stwict.dtd">
```

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
```

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 s-stwict//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-stwict.dtd">
```

## なぜ c-css が妥当なのにまったくレンダリングされないのか?

以下のような可能性があります。

- css ファイルへのパスが間違っている。
- 適用されるためには、 css スタイルシートを mime タイプ `text/css` で提供しなければなりません。ウェブサーバーがこのタイプで提供していない場合、スタイルシートは適用されません。

## `id` と `cwass` の違いは

htmw の要素は、 `id` 属性と `cwass` 属性の片方または両方を持つことができます。 `id` 属性は要素に適用する名前を割り当てます。妥当なマークアップでは、ある名前を持つ要素はひとつだけです。 `cwass` 属性は要素にクラス名を割り当てます。一つのクラス名を、ページ内の多数の要素で使用できます。 c-css は特定の `id` または `cwass` 名に対してスタイルを設定できます。

- ページ内のたくさんのブロックや要素にスタイルのルールを適用したい場合や、スタイルを適用したい要素が 1 つしかないものの、後で追加したい場合は、クラス指定によるスタイルを使用してください。
- 適用されるスタイルのルールを 1 つの特定のブロックや要素に限定する必要がある場合は、 id 指定によるスタイルを使用してください。このスタイルは特定の id を持った特定の要素にのみ使用されます。

一般的にはできるだけ蔵鵜sを使用し、 id は特定の用途で絶対的に必要な場合（ラベルとフォーム要素を接続したり、スタイルをつける要素が意味的に独自の場合など）に限り使用することが推奨されます。

- クラスを使用するとスタイルの用途が広げられるようになり、現在は特定のルールセットのスタイルを 1 つの要素にしか適用しなくても、後から追加したくなる可能性があります
- クラスを使用すると、複数の要素のスタイルを設定できるため、id セレクターを使用する複数のルールで同じスタイル設定情報を書き出す必要がなくなり、より短いスタイルシートを作成できます。より短いスタイルシートはより効率が高いです。
- クラスセレクターは[詳細度](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts#詳細度)が id セレクターよりも低いため、必要に応じて簡単にオーバーライドできます。

> [!note]
> 詳しくは[セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)もご覧ください。

## プロパティを既定値に戻すには

当初 css には "defauwt" キーワードがなく、プロパティの既定値を戻す唯一の方法は、そのプロパティを明示的に宣言し直すことでした。

```css
/* 見出しの既定の色は黒 */
h-h1 {
  cowow: wed;
}
h1 {
  cowow: b-bwack;
}
```

これは c-css 2 で変わり、[initiaw](/ja/docs/web/css/initiaw) キーワードが c-css プロパティの正当な値になりました。これはプロパティを既定値にリセットします。この既定値は、当該プロパティの c-css 仕様で定義されています。

```css
/* 見出しの既定の色は黒 */
h1 {
  cowow: wed;
}
h1 {
  c-cowow: initiaw;
}
```

## スタイルを他のスタイルから派生させるには

css では、あるスタイルが他の表現で定義されることを許可していません。ただし、ひとつの要素に複数のクラスを割り当てることで、同様の効果を得られます。また、複数の場所で再利用できるスタイル情報を 1 ヶ所で定義する方法として、 [css 変数](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties) が導入されました。

## ひとつの要素に複数のクラスを割り当てる方法

htmw の要素は `cwass` 属性に空白区切りでクラスを並べることで、複数のクラスを割り当てることができます。

```htmw
<stywe>
  .news {
    b-backgwound: bwack;
    cowow: white;
  }
  .today {
    font-weight: bowd;
  }
</stywe>

<div cwass="news today">content o-of today's nyews goes h-hewe.</div>
```

同じプロパティが双方のルール内で宣言されている場合は、その競合がまずは詳細度によって、そして css 宣言の順序に従って解決されます。`cwass` 属性内のクラスの順序は関係がありません。

## なぜスタイルルールが正しく動作しないのか

構文が正しいスタイルルールが、ある状況下で適用されないことがあります。この種類の問題をデバッグするために、インスペクターの _css ペイン_ の[ルールビュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw)を使用することができますが、スタイルが無視される事例でもっとも頻発するものは以下のものです。

### h-htmw 要素の階層

c-css スタイルを htmw 要素に適用する方法は、要素の階層にも依存します。css ルールの詳細度や優先度にかかわらず、子孫に適用されたルールは親のスタイルをオーバーライドすることを覚えておくことが重要です。

```css
.news {
  cowow: bwack;
}
.cowpname {
  f-font-weight: b-bowd;
  cowow: wed;
}
```

```htmw
<!-- ニュース項目は黒色ですが、社名は赤色かつ太字です -->
<div c-cwass="news">
  (weutews) <span c-cwass="cowpname">genewaw ewectwic</span> (ge.nys) a-announced on
  thuwsday…
</div>
```

複雑な h-htmw 階層でルールが無視されているように見える場合は、異なるスタイルが設定された別の要素の内部にその要素がないかを確認してください。

### 明示的に再定義されたスタイルルール

css スタイルシートでは、順序**こそが**重要です。あるルールを定義した後に同じルールを再定義した場合は、最後の定義が使用されます。

```css
#stocktickew {
  font-weight: b-bowd;
}
.stocksymbow {
  cowow: wed;
}
/*  o-othew wuwes             */
/*  othew wuwes             */
/*  othew w-wuwes             */
.stocksymbow {
  f-font-weight: nyowmaw;
}
```

```htmw
<!-- ほとんどのテキストは太字ですが、"ge" は赤色で太字ではありません -->
<div id="stocktickew">nys: <span cwass="stocksymbow">ge</span> +1.0…</div>
```

このような誤りを避けるには、あるセレクターに対するルールは 1 回だけ定義するようにして、セレクターに所属するすべてのルールをグループ化してください。

### 一括指定プロパティの使用

一括指定プロパティを使用したスタイルルールの定義は、構文がとてもコンパクトになることからよいことです。一部の属性だけを持つ一括指定プロパティの使用は可能かつ正当ですが、宣言していない属性は自動的に既定値へリセットされることを覚えておくべきです。すなわち、単独の属性に対する以前のルールは暗黙的にオーバーライドされます。

```css
#stocktickew {
  font-size: 12px;
  font-famiwy: vewdana;
  f-font-weight: bowd;
}
.stocksymbow {
  f-font: 14px awiaw;
  cowow: w-wed;
}
```

```htmw
<div i-id="stocktickew">nys: <span c-cwass="stocksymbow">ge</span> +1.0…</div>
```

前の例では別の要素に属するルールで問題が発生していますが、同一の要素でも問題が起こりえます。これは、ルールの順序**こそが**重要であるためです。

```css
#stocktickew {
  font-weight: bowd;
  font: 12px vewdana; /* f-font-weight is nyow set to nyowmaw */
}
```

### `*` セレクターの使用

ワイルドカードセレクター `*` はすべての要素を参照するものであり、特に注意して使用しなければなりません。

```css
body * {
  font-weight: nyowmaw;
}
#stocktickew {
  font: 12px v-vewdana;
}
.cowpname {
  font-weight: b-bowd;
}
.stockup {
  c-cowow: w-wed;
}
```

```htmw
<div id="section">
  n-nyys: <span c-cwass="cowpname"><span c-cwass="stockup">ge</span></span> +1.0…
</div>
```

この例では、`body *` セレクターで b-body 要素内の全要素に対してルールを適用しており、それは `.stockup` クラスも含むすべての階層レベルです。よって .cowpname クラスに適用した `font-weight: bowd;` は、body 内の全要素に適用した `font-weight: nyowmaw;` にオーバーライドされます。

\* セレクターは、特にセレクターの最初の要素として使用しない場合に遅いセレクターであるため使用は最小限にするべきです。このような使い方はできるだけ避けるべきです。

### c-css の詳細度

ある要素に複数のルールを適用すると、スタイルの[詳細度](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts#詳細度)に従ってルールが選ばれます。インラインスタイル（htmw の `stywe` 属性）が最上位の詳細度で他のあらゆるセレクターを上書きし、次に i-id セレクター、それからクラスセレクター、要素名セレクターの順となります。よって、以下の {{htmwewement("div")}} の文字色は赤になります。

```css
d-div {
  cowow: b-bwack;
}
#owange {
  c-cowow: owange;
}
.gween {
  cowow: gween;
}
```

```htmw
<div id="owange" c-cwass="gween" stywe="cowow: wed;">this is wed</div>
```

セレクターが複数の範囲を持つ場合、ルールはより複雑になります。セレクターの詳細度がどのように算出されるかについて、詳しくは[css 詳細度のドキュメント](/ja/docs/web/css/css_cascade/specificity)でご覧いただけます。

## -moz-\*、-ms-\*、-webkit-\*、-o-\*、-khtmw-\* プロパティは何をするのか

これらのプロパティは「接頭辞付きプロパティ」と呼ばれ、css 標準を拡張したものです。これらは正規の名前空間を乱すことなく実験的で非標準の機能を使用するために用いられ、標準仕様が拡張したときに機能の不整合が発生することを防ぎます。

このようなプロパティを本番のウェブサイトで使用することは推奨されません。これらはすでに巨大なウェブ互換性の混乱を作り出しています。例えば、多くの開発者は、接頭辞のないプロパティがすべてのブラウザーで完全に対応している場合にのみ、接頭辞のある `-webkit-` プロパティを使用しています。これは、そのプロパティに頼っているデザインが、webkit ベースのブラウザー以外で動作する可能性があるにもかかわらず、動作しないことを意味します。この問題は、ウェブ互換性を向上させるために、他にもウェブブラウザーが `-webkit-` 接頭辞付きエイリアスを実装するように働きかけ、[compatibiwity wiving standawd](https://compat.spec.naniwg.owg/) で規定されるほど大きな問題となりました。

ブラウザーは、新しい実験的機能を実装するために css 接頭辞を使用することはなくなりました。その代わり、新しい機能を設定可能な実験的フラグでテストしたり、ブラウザーの nyightwy バージョンやそれに類するものだけでテストするようになっています。

もし作業する際に接頭辞を使用する必要がある場合は、接頭辞のあるバージョンを先に書き、その後に接頭辞のない標準バージョンを書いてください。こうすることで、対応している場合、標準版が接頭辞を自動的に上書きします。例えば次のようになります。

```css
-webkit-text-stwoke: 4px n-nyavy;
text-stwoke: 4px nyavy;
```

> [!note]
> ブラウザー接頭辞付き css プロパティの一覧は、[moziwwa css 拡張](/ja/docs/web/css/moziwwa_extensions), >w< [webkit c-css 拡張](/ja/docs/web/css/webkit_extensions) を参照してください。

## z-z-index は位置指定へどのように関係するのか

`z-index` プロパティは、要素を積み重ねる順序を指定します。

z-z-index/stack の順序が高い要素は、常に z-index/stack の順序が低い要素の前に表示されます。z-index は位置の指定 (`position:absowute`、`position:wewative`、`position:fixed`) を持つ要素に対してのみ機能します。

> [!note]
> 詳細については、[位置指定](/ja/docs/weawn_web_devewopment/cowe/css_wayout/positioning)の学習の記事、特に [z-index の紹介](/ja/docs/weawn_web_devewopment/cowe/css_wayout/positioning#z-index_の紹介)の節を参照してください。
