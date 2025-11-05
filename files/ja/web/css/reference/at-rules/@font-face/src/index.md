---
title: src
slug: Web/CSS/Reference/At-rules/@font-face/src
original_slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`src`** は CSS の {{cssxref("@font-face")}} アットルールの記述子で、フォントデータを含むリソースを指定します。 `@font-face` ルールを有効にするためには必要です。

## 構文

```css
/* <url> 値 */
src: url("https://somewebsite.com/path/to/font.woff"); /* 絶対 URL */
src: url("path/to/font.woff"); /* 引用符付きの URL */
src: url("path/to/svgFont.svg#example"); /* フラグメントで識別するフォント */

/* <font-face-name> 値 */
src: local(font); /* 引用符なしの名前 */
src: local(some font); /* 空白が入った名前 */
src: local("font"); /* 引用符付きの名前 */
src: local("some font"); /* 引用符付きの空白を含む */

/* <tech(<font-tech>)> 値 */
src: url("path/to/fontCOLRv1.otf") tech(color-COLRv1);
src: url("path/to/fontCOLR-svg.otf") tech(color-SVG);

/* <format(<font-format>)> 値 */
src: url("path/to/font.woff") format("woff");
src: url("path/to/font.otf") format("opentype");

/* 複数のリソース */
src:
  url("path/to/font.woff") format("woff"),
  url("path/to/font.otf") format("opentype");

/* フォントの形式と技術のついた複数のリソース */
src:
  url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
  url("trickster-outline.otf") format(opentype);
```

### 値

- `url()`
  - : {{cssxref("url_value", "&lt;url&gt;")}} で構成される外部参照を指定し、その後にオプションで `format()` と `tech()` 成分値を使用して、URL で参照するリソースの書式とフォント技術を指定します。 `format()` と `tech()` の部分は、既知の[フォント形式](#フォント形式)とフォント技術の文字列をカンマで区切ったリストです。ユーザーエージェントがフォント技術や形式に対応していない場合は、フォントリソースのダウンロードをスキップします。形式や技術のヒントが与えられない場合、フォントリソースは常にダウンロードされます。

- `format()`
  - : `url()` の値に続くオプション宣言で、ユーザーエージェントにフォント形式のヒントを提供します。
    この値に対応していない、または不正な値が指定された場合、ブラウザーはリソースをダウンロードせず、帯域幅を節約できる可能性があります。
    省略した場合、ブラウザーはリソースをダウンロードしてから形式を検出します。
    [定義済みキーワード](#形式文法)のリストにない後方互換性のためのフォントソースを含める場合は、形式文字列を引用符で囲んでください。取り得る値は下記[フォント形式](#フォント形式)の節で説明しています。
- `tech()`
  - : オプション宣言で `url()` の値に続き、ユーザーエージェントにフォント技術のヒントを提供します。
    `tech()` の値には、[フォント技術](#フォント技術)で説明するキーワードのいずれかを指定します。
- `local(<font-face-name>)`
  - : ユーザーの端末で利用できるフォントの名前を指定します。フォント名を引用符で囲むことはオプションです。

    > [!NOTE]
    > OpenType と TrueType フォントの場合、 `<font-face-name>` は、ローカルで利用できるフォントの名前表の中の PostScript 名か完全なフォント名のどちらかと照合するために用いられます。どちらの名前を使用するかはプラットフォームやフォントによって異なりますので、プラットフォーム間で適切に照合するためには、どちらの名前も含める必要があります。指定されたフォント名に対するプラットフォームの置換は使用してはいけません。

    > [!NOTE]
    > ローカルで利用できるフォントは、ユーザーの端末にプリインストールされている場合もあれば、ユーザーが積極的にインストールした場合もあります。
    >
    > プリインストールされたフォントの組み合わせは具体的な端末のすべてのユーザーにとって同じである可能性が高いですが、ユーザーがインストールしたフォントの組み合わせはそうではありません。したがって、ユーザーがインストールしたフォントの組み合わせを探ることで、ウェブサイトは端末の{{glossary("fingerprinting", "フィンガープリント")}}を作成することができ、ウェブサイトがウェブ全体でユーザーを追跡することができます。
    >
    > これを防ぐために、ユーザーエージェントは `local()` を使用した、ユーザーがインストールしたフォントを無視する可能性があります。

- `<font-face-name>`
  - : ローカルにインストールされているフォントフェイスの完全な名前または PostScript 名を `local()` の部分値を使って指定します。
    名前はオプションで、引用符で囲むこともできます。フォントフェイス名は[大文字小文字を区別しません](https://drafts.csswg.org/css-fonts-3/#font-family-casing)。

> [!NOTE]
> {{domxref("Local Font Access API", "ローカルフォントアクセス API", "", "nocode")}} を使用することで、ユーザーがローカルにインストールしたフォントデータにアクセスすることができます。これは、名前、スタイル設定、ファミリーなどの高水準の詳細と、基盤となるフォントファイルの生のバイトを含みます。

## 解説

値は、外部参照またはローカルにインストールされたフォントフェイス名を、カンマで区切った優先度付きリストで、それぞれのリソースは `url()` または `local()` で指定します。
フォントが必要になった時、{{glossary("user agent", "ユーザーエージェント")}}はリスト上の参照を走査し、アクティブ化に成功した最初のものを使用します。無効なデータを持ったフォントや見つからないローカルのフォントは無視され、ユーザーエージェントはリスト上の次のフォントを読み込みます。

複数の `src` 記述子が設定されている場合、リソースを読み込むことができる最後の宣言ルールのみが適用されます。
最後の `src` 記述子がリソースを読み込むことができ、かつ `local()` フォントを含んでいない場合、ブラウザーは外部フォントファイルをダウンロードし、端末に利用できるフォントがあってもローカルバージョンを無視します。

> [!NOTE]
> ブラウザーが不正とみなす記述子内の値は無視されます。
> ブラウザーによっては、不正な項目が 1 つでもあると、記述子全体を無視します。
> これは代替の設計に影響するかもしれません。
> 詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

CSS のその他の URL と同様に、相対 URL を使用することができ、この場合は `@font-face` 規則を含むスタイルシートの位置からの相対になります。 SVG フォントの場合、 URL は SVG フォント定義を含む文書内の要素を指します。要素への参照が省略された場合は、参照は最初に定義されたフォントを含みます。同様に、複数のフォントを持つフォントコンテナー形式では、 `@font-face` 規則で指定された一つだけを読み込みます。読み込むフォントを示すためにはフラグメント識別子を使用します。コンテナー形式がフラグメントで識別する方法を持たない場合は、 1 から始まるインデックス（例えば "font-collection#1" が最初のフォント、 "font-collection#2" が 2 番目のフォント、など）が使用されます。

フォントファイルが複数のフォントのコンテナーである場合には、下記に示すように、使用するサブフォントを示すフラグメント識別子が含まれます。

```css
/* WhichFont はフォントファイル内のフォントの PostScript 名 */
src: url(collection.otc#WhichFont);
/* WhichFont は SVG フォントファイル内のフォントの要素 id */
src: url(fonts.svg#WhichFont);
```

### フォント形式

次の表は、有効なフォントキーワードと、それに対応するフォント形式を示しています。CSS内でフォント形式がブラウザーの対応しているかどうかを調べるには、 {{cssxref("@supports", "@supports")}} ルールを使用します。

| キーワード          | フォント形式           | 一般的な拡張子 |
| ------------------- | ---------------------- | -------------- |
| `collection`        | OpenType コレクション  | .otc, .ttc     |
| `embedded-opentype` | 埋め込み OpenType      | .eot           |
| `opentype`          | OpenType               | .otf, .ttf     |
| `svg`               | SVG フォント（非推奨） | .svg, .svgz    |
| `truetype`          | TrueType               | .ttf           |
| `woff`              | WOFF 1.0               | .woff          |
| `woff2`             | WOFF 2.0               | .woff2         |

> [!NOTE]
>
> - `format(svg)` は [SVG フォント](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts)を表し、 `tech(color-SVG)` は [SVG 表を持つ OpenType フォント](https://learn.microsoft.com/typography/opentype/spec/svg)（OpenType-SVG 色フォントとも呼ばれる）を表し、これらは完全に異なります。
> - `opentype` 値 と `truetype` 値は、フォントファイルが 3 次ベジェ曲線（CFF/CFF2 表内）を用いているか、 2 次ベジェ曲線（字体テーブル内）を用いているかにかかわらず等価です。

古い正規化されていない `format()` の値には、次のような構文があります。後方互換性のために引用符で囲まれた文字列として指定されます。

| 古い構文                        | 等価な構文                          |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### フォント技術

次の表は、 `tech()` 記述子に有効な値と、それに対応するフォント技術を示したものです。 CSS 内でフォント技術にブラウザーの対応しているかどうかを調べるには、 {{cssxref("@supports", "@supports")}} アットルールを使用します。

| キーワード          | 記述子                                                                                                       |
| :------------------ | :----------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | 色ビットマップデータ表                                                                                       |
| `color-colrv0`      | COLR version 0 表による複数色の字体                                                                          |
| `color-colrv1`      | COLR version 1 表による複数色の字体                                                                          |
| `color-sbix`        | 標準ビットマップグラフィック表                                                                               |
| `color-svg`         | SVG 複数色表                                                                                                 |
| `features-aat`      | TrueType の `morx` および `kerx` 表                                                                          |
| `features-graphite` | グラファイト機能、いわゆる `Silf`, `Glat`, `Gloc`, `Feat`, and `Sill` 表                                     |
| `features-opentype` | OpenType `GSUB` および `GPOS` 表                                                                             |
| `incremental`       | インクリメンタルフォント読み込み                                                                             |
| `palettes`          | フォントパレット `font-palette` ということを意味し、フォントの多くの色パレットから一つを選択することができる |
| `variations`        | TrueType および OpenType フォントのフォント変化形で、フォントの軸、太さ、字形などを制御します。              |

## 公式定義

{{cssinfo}}

## 形式文法

```plain
<url> [ format( <font-format> ) ]? [ tech( <font-tech># ) ]?  |
local( <family-name> )

<font-format> = [ <string> | collection | embedded-opentype | opentype | svg | truetype | woff | woff2 ]

<font-tech> = [ <font-features-tech> | <color-font-tech> | variations | palettes | incremental-patch | incremental-range | incremental-auto ]

<font-features-tech> = [ features-opentype | features-aat | features-graphite ]

<color-font-tech> = [ color-COLRv0 | color-COLRv1 | color-SVG | color-sbix | color-CBDT ]
```

## 例

### url() と local() を使用したフォントリソースの指定

下記の例は、同じフォントファミリーの 2つのフォントフェイスを定義する方法を示しています。 `font-family` は `MainText` という名前にしています。最初のフォントフェイスは通常のフォントで、 2 つ目は同じフォントファミリーの太字バージョンです。

```css
/* 通常のフォントフェイスの定義 */
@font-face {
  font-family: MainText;
  src:
    local(Futura-Medium),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.otf") format("opentype");
}

/* 同じフォントファミリーで太字のフォントフェイス */
@font-face {
  font-family: MainText;
  src:
    local(Gill Sans Bold) /* 完全なフォント名 */,
    local(GillSans-Bold) /* postscript 名 */,
    url("GillSansBold.woff") format("woff"),
    url("GillSansBold.otf") format("opentype"),
    url("GillSansBold.svg#MyFontBold"); /* id による SVG フォントフラグメントの参照 */
  font-weight: bold;
}

/* 通常フォントフェイスの使用 */
p {
  font-family: MainText;
}

/* Font-family は継承されるが、太字フォントが使用される */
p.bold {
  font-weight: bold;
}
```

### tech() と format() の値を用いたフォントリソースの指定

次の例は、 `tech()` と `format()` の値を使用してフォントリソースを指定する方法を示しています。
`color-colv1` 技術と `opentype` 形式を用いるフォントを `tech()` と `format()` の値で指定しています。
ユーザーエージェントが対応していれば色フォントが有効になり、代替フォントとして `opentype` の色なしフォントが指定されます。

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
    url("trickster-outline.otf") format(opentype);
}

/* フォントフェイスの使用 */
p {
  font-family: "Trickster";
}
```

### 古いブラウザー向けの代替の指定

ブラウザーは、フォントの使用可能なソースを列挙した単一の `src` 記述子を持つ `@font-face` を使用します。
ブラウザーは読み込むことができる最初のリソースを使用しますので、アイテムは使用する環境設定の順に指定します。

一般的に、これはローカルファイルがリモートファイルより先に現れ、 `format()` や `tech()` の制約があるリソースは、制約を持っていないリソースより先に現れるべきであるということを意味しています（そうでなければ、制約の少ないバージョンが常に選択されることになります）。
例を示します。

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

上記の `tech()` に対応していないブラウザーは、最初の項目を無視し、 2 つ目のリソースを読み込むようにしてください。

ブラウザーによっては、[不正なアイテムを無視](#ブラウザーの互換性)せず、値が不正な場合は `src` 記述子全体が失敗するものがあります。
このブラウザーに作業する場合、代替として複数の `src` 記述子を指定することができます。
複数の `src` 記述子は逆順に試行されるので、末尾にはすべてのアイテムを含む通常の記述子を持っていることに注意してください。

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src: url("MgOpenModernaBold.otf") format(opentype);
  src: url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental);
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

### ユーザーエージェントがフォントに対応しているかの調査

次の例は、 {{cssxref("@supports")}} ルールを使ってユーザーエージェントがフォント技術に対応しているかどうかを調べる方法を示しています。
`@supports` 内の CSS ブロックは、ユーザーエージェントが `color-COLRv1` 技術に対応している場合に適用されます。

```css
@supports font-tech(color-COLRv1) {
  @font-face {
    font-family: "Trickster";
    src: url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1);
  }

  .colored_text {
    font-family: "Trickster";
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face", "@font-face")}}
- {{cssxref("@supports", "@supports")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
