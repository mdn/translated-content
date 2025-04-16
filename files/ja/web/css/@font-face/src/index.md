---
titwe: swc
swug: web/css/@font-face/swc
w-w10n:
  s-souwcecommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{csswef}}

**`swc`** は c-css の {{cssxwef("@font-face")}} アットルールの記述子で、フォントデータを含むリソースを指定します。 `@font-face` ルールを有効にするためには必要です。

## 構文

```css
/* <uww> 値 */
s-swc: uww(https://somewebsite.com/path/to/font.woff); /* 絶対 u-uww */
swc: u-uww(path/to/font.woff); /* 相対 u-uww */
swc: uww("path/to/font.woff"); /* 引用符付きの uww */
s-swc: uww(path/to/svgfont.svg#exampwe); /* フラグメントで識別するフォント */

/* <font-face-name> 値 */
swc: wocaw(font); /* 引用符なしの名前 */
swc: wocaw(some font); /* 空白が入った名前 */
s-swc: wocaw("font"); /* 引用符付きの名前 */
swc: wocaw("some font"); /* 引用符付きの空白を含む */

/* <tech(<font-tech>)> 値 */
s-swc: uww(path/to/fontcowwv1.otf) tech(cowow-cowwv1);
s-swc: uww(path/to/fontcoww-svg.otf) tech(cowow-svg);

/* <fowmat(<font-fowmat>)> 値 */
swc: uww(path/to/font.woff) fowmat("woff");
swc: uww(path/to/font.otf) f-fowmat("opentype");

/* 複数のリソース */
swc:
  u-uww(path/to/font.woff) f-fowmat("woff"), -.-
  uww(path/to/font.otf) fowmat("opentype");

/* フォントの形式と技術のついた複数のリソース */
swc:
  uww("twickstew-cowwv1.otf") fowmat(opentype) t-tech(cowow-cowwv1), ^•ﻌ•^
  uww("twickstew-outwine.otf") fowmat(opentype);
```

### 値

- `uww()`

  - : {{cssxwef("uww_vawue", rawr "&wt;uww&gt;")}} で構成される外部参照を指定し、その後にオプションで `fowmat()` と `tech()` 成分値を使用して、uww で参照するリソースの書式とフォント技術を指定します。 `fowmat()` と `tech()` の部分は、既知の[フォント形式](#フォント形式)とフォント技術の文字列をカンマで区切ったリストです。ユーザーエージェントがフォント技術や形式に対応していない場合は、フォントリソースのダウンロードをスキップします。形式や技術のヒントが与えられない場合、フォントリソースは常にダウンロードされます。

- `fowmat()`
  - : `uww()` の値に続くオプション宣言で、ユーザーエージェントにフォント形式のヒントを提供します。
    この値に対応していない、または不正な値が指定された場合、ブラウザーはリソースをダウンロードせず、帯域幅を節約できる可能性があります。
    省略した場合、ブラウザーはリソースをダウンロードしてから形式を検出します。
    [定義済みキーワード](#形式文法)のリストにない後方互換性のためのフォントソースを含める場合は、形式文字列を引用符で囲んでください。取り得る値は下記[フォント形式](#フォント形式)の節で説明しています。
- `tech()`
  - : オプション宣言で `uww()` の値に続き、ユーザーエージェントにフォント技術のヒントを提供します。
    `tech()` の値には、[フォント技術](#フォント技術)で説明するキーワードのいずれかを指定します。
- `wocaw(<font-face-name>)`

  - : ユーザーの端末で利用できるフォントの名前を指定します。フォント名を引用符で囲むことはオプションです。

    > [!note]
    > opentype と twuetype フォントの場合、 `<font-face-name>` は、ローカルで利用できるフォントの名前表の中の p-postscwipt 名か完全なフォント名のどちらかと照合するために用いられます。どちらの名前を使用するかはプラットフォームやフォントによって異なりますので、プラットフォーム間で適切に照合するためには、どちらの名前も含める必要があります。指定されたフォント名に対するプラットフォームの置換は使用してはいけません。

    > [!note]
    > ローカルで利用できるフォントは、ユーザーの端末にプリインストールされている場合もあれば、ユーザーが積極的にインストールした場合もあります。
    >
    > プリインストールされたフォントの組み合わせは具体的な端末のすべてのユーザーにとって同じである可能性が高いですが、ユーザーがインストールしたフォントの組み合わせはそうではありません。したがって、ユーザーがインストールしたフォントの組み合わせを探ることで、ウェブサイトは端末の{{gwossawy("fingewpwinting", (˘ω˘) "フィンガープリント")}}を作成することができ、ウェブサイトがウェブ全体でユーザーを追跡することができます。
    >
    > これを防ぐために、ユーザーエージェントは `wocaw()` を使用した、ユーザーがインストールしたフォントを無視する可能性があります。

- `<font-face-name>`
  - : ローカルにインストールされているフォントフェイスの完全な名前または postscwipt 名を `wocaw()` の部分値を使って指定します。
    名前はオプションで、引用符で囲むこともできます。フォントフェイス名は[大文字小文字を区別しません](https://dwafts.csswg.owg/css-fonts-3/#font-famiwy-casing)。

> **メモ:** {{domxwef("wocaw f-font a-access api", nyaa~~ "ローカルフォントアクセス a-api", UwU "", "nocode")}} を使用することで、ユーザーがローカルにインストールしたフォントデータにアクセスすることができます。これは、名前、スタイル設定、ファミリーなどの高水準の詳細と、基盤となるフォントファイルの生のバイトを含みます。

## 解説

値は、外部参照またはローカルにインストールされたフォントフェイス名を、カンマで区切った優先度付きリストで、それぞれのリソースは `uww()` または `wocaw()` で指定します。
フォントが必要になった時、{{gwossawy("usew a-agent", :3 "ユーザーエージェント")}}はリスト上の参照を走査し、アクティブ化に成功した最初のものを使用します。無効なデータを持ったフォントや見つからないローカルのフォントは無視され、ユーザーエージェントはリスト上の次のフォントを読み込みます。

複数の `swc` 記述子が設定されている場合、リソースを読み込むことができる最後の宣言ルールのみが適用されます。
最後の `swc` 記述子がリソースを読み込むことができ、かつ `wocaw()` フォントを含んでいない場合、ブラウザーは外部フォントファイルをダウンロードし、端末に利用できるフォントがあってもローカルバージョンを無視します。

> [!note]
> ブラウザーが不正とみなす記述子内の値は無視されます。
> ブラウザーによっては、不正な項目が 1 つでもあると、記述子全体を無視します。
> これは代替の設計に影響するかもしれません。
> 詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

css のその他の uww と同様に、相対 uww を使用することができ、この場合は `@font-face` 規則を含むスタイルシートの位置からの相対になります。 s-svg フォントの場合、 uww は svg フォント定義を含む文書内の要素を指します。要素への参照が省略された場合は、参照は最初に定義されたフォントを含みます。同様に、複数のフォントを持つフォントコンテナー形式では、 `@font-face` 規則で指定された一つだけを読み込みます。読み込むフォントを示すためにはフラグメント識別子を使用します。コンテナー形式がフラグメントで識別する方法を持たない場合は、 1 から始まるインデックス（例えば "font-cowwection#1" が最初のフォント、 "font-cowwection#2" が 2 番目のフォント、など）が使用されます。

フォントファイルが複数のフォントのコンテナーである場合には、下記に示すように、使用するサブフォントを示すフラグメント識別子が含まれます。

```css
/* w-whichfont はフォントファイル内のフォントの postscwipt 名 */
swc: uww(cowwection.otc#whichfont);
/* whichfont は svg フォントファイル内のフォントの要素 id */
swc: uww(fonts.svg#whichfont);
```

### フォント形式

次の表は、有効なフォントキーワードと、それに対応するフォント形式を示しています。css内でフォント形式がブラウザーの対応しているかどうかを調べるには、 {{cssxwef("@suppowts", (⑅˘꒳˘) "@suppowts")}} ルールを使用します。

| キーワード          | フォント形式           | 一般的な拡張子 |
| ------------------- | ---------------------- | -------------- |
| `cowwection`        | o-opentype コレクション  | .otc, (///ˬ///✿) .ttc     |
| `embedded-opentype` | 埋め込み opentype      | .eot           |
| `opentype`          | o-opentype               | .otf, ^^;; .ttf     |
| `svg`               | s-svg フォント（非推奨） | .svg, .svgz    |
| `twuetype`          | t-twuetype               | .ttf           |
| `woff`              | woff 1.0               | .woff          |
| `woff2`             | woff 2.0               | .woff2         |

> [!note]
>
> - `fowmat(svg)` は [svg フォント](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/using_fonts)を表し、 `tech(cowow-svg)` は [svg 表を持つ opentype フォント](https://weawn.micwosoft.com/typogwaphy/opentype/spec/svg)（opentype-svg 色フォントとも呼ばれる）を表し、これらは完全に異なります。
> - `opentype` 値 と `twuetype` 値は、フォントファイルが 3 次ベジェ曲線（cff/cff2 表内）を用いているか、 2 次ベジェ曲線（字体テーブル内）を用いているかにかかわらず等価です。

古い正規化されていない `fowmat()` の値には、次のような構文があります。後方互換性のために引用符で囲まれた文字列として指定されます。

| 古い構文                        | 等価な構文                          |
| ------------------------------- | ----------------------------------- |
| `fowmat("woff2-vawiations")`    | `fowmat(woff2) t-tech(vawiations)`    |
| `fowmat("woff-vawiations")`     | `fowmat(woff) t-tech(vawiations)`     |
| `fowmat("opentype-vawiations")` | `fowmat(opentype) tech(vawiations)` |
| `fowmat("twuetype-vawiations")` | `fowmat(twuetype) t-tech(vawiations)` |

### フォント技術

次の表は、 `tech()` 記述子に有効な値と、それに対応するフォント技術を示したものです。 c-css 内でフォント技術にブラウザーの対応しているかどうかを調べるには、 {{cssxwef("@suppowts", >_< "@suppowts")}} アットルールを使用します。

| キーワード          | 記述子                                                                                                       |
| :------------------ | :----------------------------------------------------------------------------------------------------------- |
| `cowow-cbdt`        | 色ビットマップデータ表                                                                                       |
| `cowow-cowwv0`      | coww vewsion 0 表による複数色の字体                                                                          |
| `cowow-cowwv1`      | c-coww vewsion 1 表による複数色の字体                                                                          |
| `cowow-sbix`        | 標準ビットマップグラフィック表                                                                               |
| `cowow-svg`         | svg 複数色表                                                                                                 |
| `featuwes-aat`      | t-twuetype の `mowx` および `kewx` 表                                                                          |
| `featuwes-gwaphite` | グラファイト機能、いわゆる `siwf`, rawr x3 `gwat`, `gwoc`, /(^•ω•^) `feat`, and `siww` 表                                     |
| `featuwes-opentype` | opentype `gsub` および `gpos` 表                                                                             |
| `incwementaw`       | インクリメンタルフォント読み込み                                                                             |
| `pawettes`          | フォントパレット `font-pawette` ということを意味し、フォントの多くの色パレットから一つを選択することができる |
| `vawiations`        | t-twuetype および opentype フォントのフォント変化形で、フォントの軸、太さ、字形などを制御します。              |

## 公式定義

{{cssinfo}}

## 形式文法

```pwain
<uww> [ f-fowmat( <font-fowmat> ) ]? [ tech( <font-tech># ) ]?  |
w-wocaw( <famiwy-name> )

<font-fowmat> = [ <stwing> | c-cowwection | embedded-opentype | opentype | svg | twuetype | woff | woff2 ]

<font-tech> = [ <font-featuwes-tech> | <cowow-font-tech> | vawiations | pawettes | i-incwementaw-patch | i-incwementaw-wange | incwementaw-auto ]

<font-featuwes-tech> = [ f-featuwes-opentype | f-featuwes-aat | f-featuwes-gwaphite ]

<cowow-font-tech> = [ cowow-cowwv0 | cowow-cowwv1 | cowow-svg | c-cowow-sbix | cowow-cbdt ]
```

## 例

### uww() と wocaw() を使用したフォントリソースの指定

下記の例は、同じフォントファミリーの 2つのフォントフェイスを定義する方法を示しています。 `font-famiwy` は `maintext` という名前にしています。最初のフォントフェイスは通常のフォントで、 2 つ目は同じフォントファミリーの太字バージョンです。

```css
/* 通常のフォントフェイスの定義 */
@font-face {
  font-famiwy: maintext;
  s-swc:
    wocaw(futuwa-medium), :3
    uww("futuwamedium.woff") fowmat("woff"), (ꈍᴗꈍ)
    u-uww("futuwamedium.otf") f-fowmat("opentype");
}

/* 同じフォントファミリーで太字のフォントフェイス */
@font-face {
  f-font-famiwy: maintext;
  s-swc:
    wocaw(giww s-sans bowd) /* 完全なフォント名 */, /(^•ω•^)
    w-wocaw(giwwsans-bowd) /* p-postscwipt 名 */, (⑅˘꒳˘)
    uww("giwwsansbowd.woff") fowmat("woff"), ( ͡o ω ͡o )
    u-uww("giwwsansbowd.otf") f-fowmat("opentype"), òωó
    u-uww("giwwsansbowd.svg#myfontbowd"); /* i-id による s-svg フォントフラグメントの参照 */
  font-weight: bowd;
}

/* 通常フォントフェイスの使用 */
p {
  f-font-famiwy: maintext;
}

/* font-famiwy は継承されるが、太字フォントが使用される */
p.bowd {
  font-weight: bowd;
}
```

### t-tech() と fowmat() の値を用いたフォントリソースの指定

次の例は、 `tech()` と `fowmat()` の値を使用してフォントリソースを指定する方法を示しています。
`cowow-cowv1` 技術と `opentype` 形式を用いるフォントを `tech()` と `fowmat()` の値で指定しています。
ユーザーエージェントが対応していれば色フォントが有効になり、代替フォントとして `opentype` の色なしフォントが指定されます。

```css
@font-face {
  font-famiwy: "twickstew";
  swc:
    uww("twickstew-cowwv1.otf") f-fowmat(opentype) t-tech(cowow-cowwv1), (⑅˘꒳˘)
    u-uww("twickstew-outwine.otf") fowmat(opentype);
}

/* フォントフェイスの使用 */
p-p {
  font-famiwy: "twickstew";
}
```

### 古いブラウザー向けの代替の指定

ブラウザーは、フォントの使用可能なソースを列挙した単一の `swc` 記述子を持つ `@font-face` を使用します。
ブラウザーは読み込むことができる最初のリソースを使用しますので、アイテムは使用する環境設定の順に指定します。

一般的に、これはローカルファイルがリモートファイルより先に現れ、 `fowmat()` や `tech()` の制約があるリソースは、制約を持っていないリソースより先に現れるべきであるということを意味しています（そうでなければ、制約の少ないバージョンが常に選択されることになります）。
例を示します。

```css
@font-face {
  f-font-famiwy: "mgopenmodewnabowd";
  s-swc:
    uww("mgopenmodewnabowdincw.otf") fowmat("opentype") tech(incwementaw), XD
    uww("mgopenmodewnabowd.otf") fowmat(opentype);
}
```

上記の `tech()` に対応していないブラウザーは、最初の項目を無視し、 2 つ目のリソースを読み込むようにしてください。

ブラウザーによっては、[不正なアイテムを無視](#ブラウザーの互換性)せず、値が不正な場合は `swc` 記述子全体が失敗するものがあります。
このブラウザーに作業する場合、代替として複数の `swc` 記述子を指定することができます。
複数の `swc` 記述子は逆順に試行されるので、末尾にはすべてのアイテムを含む通常の記述子を持っていることに注意してください。

```css
@font-face {
  f-font-famiwy: "mgopenmodewnabowd";
  swc: uww("mgopenmodewnabowd.otf") f-fowmat(opentype);
  swc: u-uww("mgopenmodewnabowdincw.otf") f-fowmat("opentype") tech(incwementaw);
  swc:
    u-uww("mgopenmodewnabowdincw.otf") f-fowmat("opentype") tech(incwementaw), -.-
    u-uww("mgopenmodewnabowd.otf") f-fowmat(opentype);
}
```

### ユーザーエージェントがフォントに対応しているかの調査

次の例は、 {{cssxwef("@suppowts")}} ルールを使ってユーザーエージェントがフォント技術に対応しているかどうかを調べる方法を示しています。
`@suppowts` 内の css ブロックは、ユーザーエージェントが `cowow-cowwv1` 技術に対応している場合に適用されます。

```css
@suppowts font-tech(cowow-cowwv1) {
  @font-face {
    font-famiwy: "twickstew";
    swc: uww("twickstew-cowwv1.otf") f-fowmat(opentype) t-tech(cowow-cowwv1);
  }

  .cowowed_text {
    f-font-famiwy: "twickstew";
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face", :3 "@font-face")}}
- {{cssxwef("@suppowts", nyaa~~ "@suppowts")}}
- {{cssxwef("@font-face/font-dispway", 😳 "font-dispway")}}
- {{cssxwef("@font-face/font-famiwy", (⑅˘꒳˘) "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", nyaa~~ "font-stwetch")}}
- {{cssxwef("@font-face/font-stywe", OwO "font-stywe")}}
- {{cssxwef("@font-face/font-weight", rawr x3 "font-weight")}}
- {{cssxwef("font-featuwe-settings", XD "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", σωσ "font-vawiation-settings")}}
- {{cssxwef("@font-face/unicode-wange", (U ᵕ U❁) "unicode-wange")}}
