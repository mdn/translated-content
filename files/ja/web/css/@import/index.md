---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{CSSRef}}

**`@import`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、スタイルルールを他の有効なスタイルシートからインポートするために使用します。
`@import` ルールはスタイルシートの最上位で、他のアットルール（[@charset](/ja/docs/Web/CSS/@charset) や [@layer](/ja/docs/Web/CSS/@layer)）やスタイル宣言の前に定義する必要があり、そうしなければ無視されます。

## 構文

```css
@import url;
@import url layer;
@import url layer(layer-name);
@import url layer(layer-name) supports(supports-condition);
@import url layer(layer-name) supports(supports-condition) list-of-media-queries;
@import url layer(layer-name) list-of-media-queries;
@import url supports(supports-condition);
@import url supports(supports-condition) list-of-media-queries;
@import url list-of-media-queries;
```

内容は次の通りです。

- _url_
  - : インポートするリソースの位置を表す {{CSSxRef("&lt;string&gt;")}}、`<url>`、{{CSSxRef("url")}} のいずれかです。 URL は絶対パスでも相対パスでも構いません。
- _list-of-media-queries_
  - : [メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)のカンマ区切りのリストで、リンクした URL で定義された CSS ルールを適用するためのメディアに依存した条件を指定します。ブラウザーが対応していないメディアクエリーの場合、リンクされたリソースは読み込まれません。
- _layer-name_
  - : リンクされたリソースのコンテンツがインポートされる[カスケードレイヤー](/ja/docs/Web/CSS/@layer)の名前です。
- _supports-condition_ {{experimental_inline}}
  - : このスタイルシートをインポートするために、ブラウザーが対応している必要がある特性を示します。
    ブラウザーが _supports-condition_ で指定された条件に適合しない場合、リンクされたスタイルシートを取得しないことがあり、他にもパスを通してダウンロードしても読み込むことはできません。
    `supports()` の構文は {{CSSxRef("@supports")}} で記述されているものとほぼ同じですので、より完全なリファレンスはそちらのトピックを参照してください。

## 解説

ルールのインポートは、 {{CSSxRef("@charset")}} ルールと [`@layer`](/ja/docs/Web/CSS/@layer) 文を作成するレイヤーを除き、他のすべての種類のルールよりも前に来る必要があります。

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* それ以外のスタイル */
@import url("my-imported-styles.css");
```

`@import` アットルールはスタイル設定の後に宣言されており、不正であるため無視されます。

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

`@import` ルールは[入れ子になる文](/ja/docs/Web/CSS/Syntax#入れ子の文)ではありません。従って、[条件付きアットルールグループ](/ja/docs/Web/CSS/At-rule#条件付きグループルール)の中で使うことはできません。

{{glossary("user agent", "ユーザーエージェント")}}は未知のメディア種別のリソースを受け取ることを拒否することができるので、特定のメディアに依存した `@import` ルールを指定することができます。これらの条件付きインポートは、 URL の後でカンマ区切りの[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)で指定します。メディアクエリーがないと、インポートは無条件で行われます。メディアに `all` を指定しても同じ効果になります。

同様に、ユーザーエージェントは `@import` アットルールで `supports()` 関数を使用して、具体的な特性の集合に対応している（または対応していない）場合のみリソースを取得することができます。
これにより、作者は最近導入された CSS 特性の利点を活かしつつ、古いバージョンのブラウザーに対して優雅なフォールバックを提供することができます。
なお、 `@import` アットルールの `supports()` 関数の条件は、 JavaScript で {{domxref("CSSImportRule.supportsText")}} を用いて取得することができます。

`@import` ルールにより、リンクされたリソースからルールをインポートして[カスケードレイヤー](/ja/docs/Web/CSS/@layer)を作成することもできます。ルールは既存のカスケードレイヤーにインポートすることもできます。そのために `@import` とともに `layer` キーワードまたは `layer()` 関数を使用します。インポートされたスタイルシートのスタイルルールの宣言は、インポートされた時点でスタイルシートに文字どおり書き込まれたかのようにカスケードに作用します。

## 形式文法

{{csssyntax}}

## 例

### CSS ルールをインポート

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

上の 2 つの例では、 _url_ を `<string>` として指定する方法と `url()` 関数として指定する方法を示しています。

### 条件付きで CSS ルールをインポート

```css
@import url("fineprint.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

上記の例の `@import` ルールは、リンクされた CSS ルールが適用される前に成立する必要があるメディア依存の条件を示しています。たとえば、最後の `@import` ルールは、横向きの画面の場合のみ `landscape.css` スタイルシートを読み込ませます。

### 機能に対応していることを条件とした CSS ルールのインポート

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports(not (display: grid) and (display: flex))
  screen and (max-width: 400px);
```

上記の `@import` ルールは、`display: grid` が対応している場合はグリッドを使用するレイアウトをインポートし、そうでない場合は `display: flex` を使用する CSS をインポートする方法を示しています。
`supports()` 文は 1 つしか置くことができませんが、`not`、`and`、`or` を使った特性チェックは、調べる条件を括弧でくくればいくつでも組み合わせることができます。
括弧を使用して優先順位を示すこともできます。
なお、もし単一の宣言しかない場合は、括弧でくくる必要はありません。これは上の最初の例で示されています。

上記の例では、単純な宣言構文を使って対応条件を示しています。
`supports()` で CSS 関数を指定することもでき、対応していてユーザーエージェントで評価できる場合は `true` と評価されます。
例えば、下記のコードでは、[子結合子](/ja/docs/Web/CSS/Child_combinator) (`selector()`) と `font-tech()` 関数の両方を条件とする `@import` を表示しています。

```css
@import url("whatever.css")
supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### カスケードレイヤーへのCSSルールのインポート

```css
@import "theme.css" layer(utilities);
```

上の例では、 `utilities` という名前のカスケードレイヤーが作成され、インポートされたスタイルシート `theme` のルールを保持するために使用されます。

```css
@import url(headings.css) layer(default);
@import url(links.css) layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

上の例では、 `headings.css` と `links.css` のスタイルシートのルールは、 `audio[controls]` ルールと同じレイヤー内でカスケードされます。

```css
@import "theme.css" layer();
@import "style.css" layer;
```

この例は、2 つの別個の無名カスケードレイヤーを作成し、それぞれにリンク先のルールをインポートする例です。名前なしで宣言されたカスケードレイヤーは、無名カスケードレイヤーです。名前のないカスケードレイヤーは、作成された時点で確定されます。スタイルを並べ替えたり追加したりする意味を提供せず、外部から参照することはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
