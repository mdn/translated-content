---
title: リンク
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: dc57f9007e4cf2dec26f945d7773a68ffe60348f
---

SVG では、3 種類のリンクをすることができます。

- SVG 内からリンクを設定し、新しいリソースに移動する。
- `<img>` や他の要素、あるいは CSS を通じて表示させるために、SVG リソース、またはその中の名前付きビューを参照する。
- 現在の SVG 内で再利用するために、SVG 要素を参照する。その要素は、同じ SVG 内または外部の SVG で定義されているものでもよい。

このガイドでは、これら 3 つすべてを扱います。

## SVG 文書からの外部リンク

SVG の {{svgelement("a")}} 要素は、HTML の {{htmlelement("a")}} 要素と同様に、ハイパーリンクを作成します。SVG ではこれはコンテナーであるため、単一の図形、テキスト文字列、あるいは {{svgelement("g")}} グループ全体をこの要素で囲むことができ、囲まれたグラフィック全体がクリック可能になります。

宛先は {{svgattr("href")}} 属性に指定します。

```html
<a href="https://example.com/">
  <circle cx="50" cy="50" r="40" />
</a>
```

古いコードでは、出力先として {{svgattr("xlink:href")}} が使用されている場合があります。この属性は非推奨です。代わりに、通常の `href` を使用してください。

SVG の `<a>` 要素も、HTML の `<a>` 要素と同様に、{{svgattr("download")}}、`hreflang`、`ping`、`referrerpolicy`、`rel`、`type` の各属性を受け付けます。これらの属性に対する対応は HTML 版に比べて遅れており、属性ごとに異なるため、これらを利用する前に、`<a>` に関する[ブラウザーの互換性表](/ja/docs/Web/SVG/Reference/Element/a#ブラウザーの互換性)を調べてください。

HTML とは異なり、SVG ではリンクにデフォルトの外観が設定されていません。リンクされた図形やテキスト文字列は、リンクされていないものと全く同じように見えます。リンクが識別しやすく、フォーカス状態が明確にわかるよう、CSS を使用してリンクの状態を独自にスタイル設定してください。

### リンクされた図形とテキスト

この例では、円とテキストラベルをリンクし、CSS を使用して両方にホバー状態とフォーカス状態を設定しています。

```html
<svg
  viewBox="0 0 220 100"
  width="220"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com/">
    <title>円要素</title>
    <circle cx="50" cy="50" r="40" />
  </a>

  <a href="https://example.com/">
    <text x="110" y="56">テキストリンク</text>
  </a>
</svg>
```

図形には支援技術が使用するテキストを持たないため、`<a>` 内に {{svgelement("title")}} 要素を配置して、円形のリンクにアクセシブル名を付けます。

下記の CSS では、両方のリンクにデフォルトの塗りつぶし色を指定し、ホバー時およびキーボードフォーカス時にその色を変更しています。{{cssxref("outline")}} により、フォーカス時に色以外の 2 つ目となるインジケーターが表示され、{{cssxref("fill")}} による変更により、SVG 要素で `outline` がレンダリングされない場合でも、フォーカス状態が視認できるようになります。

```css
a circle,
a text {
  fill: steelblue;
}

a text {
  text-decoration: underline;
}

a:hover circle,
a:focus-visible circle,
a:hover text,
a:focus-visible text {
  fill: crimson;
}

a:focus-visible {
  outline: 2px solid black;
  outline-offset: 2px;
}
```

両方のリンクにポインターをかざすか、<kbd>Tab</kbd> を押してキーボードフォーカスを移動するかしてみてください。

{{EmbedLiveSample("Linked_shape_and_text", "100%", 130)}}

### リンクの `target` ウィンドウの設定

{{svgattr("target")}} 属性は、リンク先の文書がどの閲覧コンテキストで開かれるかを指定します。指定できる値は、`_self`（デフォルト）、`_blank`、`_parent`、`_top` です。

これは、SVG が {{htmlelement("object")}}、{{htmlelement("iframe")}}、{{htmlelement("embed")}} を使用して HTML ページに埋め込まれている場合に特に重要です。このような SVG は独自の閲覧コンテキストを持つ独立した文書であるため、デフォルトでリンク先のページがその埋め込みフレームの内部に読み込まれます。通常、フレームのサイズはグラフィックに合わせて設定されており、幅がわずか数ピクセルしかない場合もあるため、新しいページはスクロールされ、切り取られ、使用不能な状態になってしまいます。代わりに `target="_top"` を追加して、ページ全体を置き換えるようにしてください。

`page1.html` の中では、

```html
<p>これは SVG のボタンです:</p>
<object width="100" height="50" type="image/svg+xml" data="button.svg"></object>
```

`button.svg` の中では、

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
  <a href="page2.html" target="_top">
    <title>ページ 2 へ移動</title>
    <rect width="100" height="50" fill="steelblue" />
    <text x="50" y="30" fill="white" text-anchor="middle">ページ 2</text>
  </a>
</svg>
```

`target="_parent"` を使用すると、直接包含する文書のみが置き換えられます。これは、SVG が複数のフレームで入れ子になっている場合、`_top` とは動作が異なります。

> [!NOTE]
> リンクは、SVG が文書として表示されている間（HTML 内でインラインとして、あるいは `<object>`、`<iframe>`、`<embed>` で埋め込まれている場合）にのみ有効です。SVG が{{htmlelement("img")}}、SVG の {{svgelement("image")}} 要素、{{cssxref("background-image")}} などの CSS プロパティを使用するなどして画像として使用されている場合、SVG は安全で非対話的なモードでレンダリングされます。つまり、リンクは有効化できず、スクリプトも実行されません。[画像としての SVG](/ja/docs/Web/SVG/Guides/SVG_as_an_image) を参照してください。

## SVG 文書内へのリンク

SVG の URL にフラグメント識別子を追加することで、リンクや埋め込み要素が、グラフィックのどの部分を表示させるかを選択できるようになります。これにより、ファイルを編集したり、複数のコピーを用意したりすることなく、SVG の切り取りやズームインを行うことができます。

### `<view>` による名前付きビュー

{{svgelement("view")}} 要素は、「名前付きビュー」を定義します。これは、`id` 属性によって参照できる SVG の一部です。この要素は {{svgattr("viewBox")}} 属性を受け付け、オプションで {{svgattr("preserveAspectRatio")}} 属性も受け付けます。これらは、ビューの {{svgattr("id")}} が URL のフラグメントとして使用される場合、ルート要素である {{svgelement("svg")}} 要素の属性を上書きします。

`shapes.svg` の中では、

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <view id="first" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="second" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view
    id="third"
    viewBox="200 0 100 100"
    preserveAspectRatio="xMidYMid meet" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

`shapes.svg#third` を参照すると、青い円のみが表示されるようになりました。

```html
<img src="shapes.svg" width="300" height="100" alt="3 つの円" />
<img src="shapes.svg#third" width="100" height="100" alt="青い円" />
```

このコード片は、SVG ファイルを指す `<a href>` や `<iframe>`、CSS の {{cssxref("url_function", "url()")}} といった参照を含め、ファイルの URL が現れるあらゆる場所で動作します。

### URL 内で `svgView()` をつけて定義されたビュー

SVG ファイルを編集できずに `<view>` 要素を追加できない場合は、`svgView()` 構文を使用して、`viewBox()` および（必要に応じて）`preserveAspectRatio()` を引数として渡すことで、フラグメント内で直接ビューを指定することができます。

```plain
shapes.svg#svgView(viewBox(200,0,100,100))
shapes.svg#svgView(viewBox(200,0,100,100);preserveAspectRatio(xMidYMid))
```

このようなフラグメントは、ファイルの URL が指す場所ならどこでも使用できます。以下の 2 つはどちらも、ファイル内で `<view>` を宣言することなく、同じ `shapes.svg` から青い円の部分を切り出しています。

```html
<img
  src="shapes.svg#svgView(viewBox(200,0,100,100))"
  width="100"
  height="100"
  alt="A blue circle" />
```

```css
.blue-circle {
  width: 100px;
  height: 100px;
  background-image: url("shapes.svg#svgView(viewBox(200,0,100,100))");
}
```

CSS 内で URL を引用する場合: 引用符で囲まれていない {{cssxref("url_function", "url()")}} では、`svgView()` に括弧が含まれている必要があります。

ファイルを制御する際は、名前付きの `<view>` を使用することをお勧めします。これにより、ビューの定義がグラフィックとともに保持され、そのビューを指しているすべての URL を更新することなく変更が可能になります。

## 文書内のコンテンツの参照

3 つ目のリンクの種類は内部リンクです。SVG 要素は、同じ文書内または外部の文書にある他の要素を、ID を指定して指します。

- {{svgelement("use")}} は、別の場所で定義された要素を `<use href="#icon" />` のようにして描画します。参照先は `<use href="icons.svg#search" />` のように外部でもよく、これが SVG スプライトパターンの基本となっています。
- グラデーション、パターン、フィルター、マスク、クリップパスは、CSS の {{cssxref("url_function", "url()")}} 関数を使用して、プレゼンテーション属性または CSS から `fill="url(#gradient)"`, `filter="url(#blur)"`, `clip-path: url(#clip-shape)` のように参照されます。
- {{svgelement("textPath")}} は、`href` で参照されるパスに沿ってテキストを配置し、{{svgelement("mpath")}} も同様にそのモーションパスを取ります。

文書外を参照する際には、いくつかの制限が適用されます。

- 外部参照は、参照元の文書と[同一オリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy)でなければなりません。オリジンを越える参照を有効にする方法はありません。
- 外部ファイルを指定する `<use>` は広く対応していますが、`data:` URL を指す `<use>` は対応していません。かつて対応していたブラウザーも、現在は対応を打ち切っています。`<use>` に関する詳細は、[ブラウザーの互換性表](/ja/docs/Web/SVG/Reference/Element/use#ブラウザーの互換性)を参照してください。
- 外部ファイルをフラグメントなしで指定して、そのルート要素を取り込む方法は、すべての環境で対応していません。常に、対象の要素を指定するフラグメント識別子を指定してください。
- CSS の {{cssxref("filter")}}、{{cssxref("mask")}}、{{cssxref("clip-path")}} プロパティから外部 SVG を参照する機能は、SVG 属性ほど広く対応していません。使用する予定の機能については、互換性表を調べてください。

## 関連情報

- SVG {{svgelement("a")}}, {{svgelement("use")}}, {{svgelement("view")}} 要素
- SVG {{svgattr("href")}} および {{svgattr("target")}} 属性
- HTML {{htmlelement("a")}} 要素
- [画像としての SVG](/ja/docs/Web/SVG/Guides/SVG_as_an_image)
- [SVG と CSS](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
