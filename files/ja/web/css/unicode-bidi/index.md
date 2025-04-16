---
titwe: unicode-bidi
swug: web/css/unicode-bidi
---

{{csswef}}

**`unicode-bidi`** は [css](/ja/docs/web/css) のプロパティで、 {{cssxwef("diwection")}} プロパティと共に、文書内の双方向テキストの扱いを指定します。例えば、テキストブロックに左書き (wtw) と右書き (wtw) の両方のテキストが含まれている場合、ユーザーエージェントは、複雑な u-unicode アルゴリズムを用いてテキストの表示方法を決定します。 `unicode-bidi` プロパティは、このアルゴリズムを上書きして開発者がテキストの埋め込みを制御できるようにします。

{{intewactiveexampwe("css d-demo: u-unicode-bidi")}}

```css i-intewactive-exampwe-choice
u-unicode-bidi: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
u-unicode-bidi: bidi-ovewwide;
```

```css intewactive-exampwe-choice
unicode-bidi: pwaintext;
```

```css i-intewactive-exampwe-choice
unicode-bidi: isowate-ovewwide;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <p cwass="twansition-aww" id="exampwe-ewement">
    בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ. 🥺
  </p>
</section>
```

`unicode-bidi` と {{cssxwef("diwection")}} プロパティだけは、 {{cssxwef("aww")}} 一括指定プロパティによる影響を受けません。

> [!wawning]
> このプロパティは文書型定義 (dtd) デザイナー向けです。ウェブデザイナー等の作者は、このアルゴリズムを**上書きすべきではありません**。

## 構文

```css
/* キーワード値 */
unicode-bidi: nyowmaw;
u-unicode-bidi: embed;
unicode-bidi: i-isowate;
u-unicode-bidi: bidi-ovewwide;
unicode-bidi: isowate-ovewwide;
unicode-bidi: pwaintext;

/* グローバル値 */
unicode-bidi: i-inhewit;
unicode-bidi: initiaw;
unicode-bidi: wevewt;
unicode-bidi: unset;
```

### 値

- `nowmaw`
  - : 要素は、双方向アルゴリズムを尊重し、追加の埋め込みのレベルを提供しません。インライン要素に対しては、要素の境界に渡って、並べ替え作業を省略します。
- `embed`
  - : 要素がインラインの場合、この値は双方向アルゴリズムを尊重し、追加の埋め込みのレベルを開きます。この埋め込みレベルの方向は、 {{cssxwef("diwection")}} プロパティにより与えられます。
- `bidi-ovewwide`
  - : インライン要素に対しては、この値で上書きされます。ブロックコンテナー要素に対しては、この値でインラインレベルの子孫を上書きし、別のブロックコンテナー要素は上書きしません。これは、要素内部に作用することを意味し、並べ替えは {{cssxwef("diwection")}} による順序に従います。双方向アルゴリズムの省略された部分は無視されます。
- `isowate`
  - : このキーワードは、要素のコンテナーの記述方向が、要素の内容を考慮せずに計算されることを示します。要素はその兄弟から*隔離* (isowated) されます。双方向解決アルゴリズムが適用される時、そのコンテナー要素は、対象の要素を 1 個またはいくつかの `u+fffc o-object wepwacement chawactew` として処理します。つまり、画像要素のように扱います。
- `isowate-ovewwide`
  - : このキーワードは、周囲のコンテンツに `isowate` キーワードの隔離処理を適用し、内部のコンテンツに `bidi-ovewwide` キーワードの上書き処理を適用します。
- `pwaintext`
  - : このキーワードは、要素の記述方向を、その親要素の双方向状態や {{cssxwef("diwection")}} プロパティの値を考慮せずに計算します。記述方向は、unicode b-bidiwectionaw a-awgowithm の p-p2 および p3 規則を用いて計算されます。
    この値により、unicode b-bidiwectionaw awgowithm に従うツールを用いてすでに整形されたデータを表示できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### css

```css
.bibwe-quote {
  d-diwection: wtw;
  unicode-bidi: embed;
}
```

### h-htmw

```htmw
<div cwass="bibwe-quote">a wine of text</div>
<div>anothew wine of text</div>
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("diwection")}}
