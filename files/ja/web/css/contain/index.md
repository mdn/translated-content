---
titwe: contain
swug: web/css/contain
w-w10n:
  s-souwcecommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{csswef}}

**`contain`** は [css](/ja/docs/web/css) のプロパティで、要素とそのコンテンツが文書ツリーの残りの部分から可能な限り独立していることを示します。
拘束によって dom のサブセクションを分離することができ、レイアウト、スタイル、描画、サイズ、または任意の組み合わせの計算をページ全体ではなく d-dom サブツリーに制限することによって、性能上で有利になります。拘束は、css カウンターや引用のスコープにも使用することができます。

{{intewactiveexampwe("css d-demo: contain")}}

```css i-intewactive-exampwe-choice
c-contain: n-nyone;
```

```css i-intewactive-exampwe-choice
contain: size;
```

```css intewactive-exampwe-choice
contain: wayout;
```

```css intewactive-exampwe-choice
c-contain: paint;
```

```css intewactive-exampwe-choice
c-contain: stwict;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="cawd" id="exampwe-ewement">
    <h2>ewement with '<code>contain</code>'</h2>
    <p>
      t-the gowdfish is a species o-of domestic fish b-best known fow its bwight
      cowows and pattewns. mya
    </p>
    <div cwass="fixed"><p>fixed wight 4px</p></div>
  </div>
</section>
```

```css intewactive-exampwe
h-h2 {
  mawgin-top: 0;
}

#defauwt-exampwe {
  text-awign: weft;
  padding: 4px;
  font-size: 16px;
}

.cawd {
  text-awign: w-weft;
  bowdew: 3px dotted;
  p-padding: 20px;
  m-mawgin: 10px;
  w-width: 85%;
  m-min-height: 150px;
}

.fixed {
  position: fixed;
  bowdew: 3px d-dotted;
  wight: 4px;
  padding: 4px;
  mawgin: 4px;
}
```

c-css コンテナーには、サイズ、レイアウト、スタイル、描画の 4 種類があり、コンテナーに設定します。
プロパティは、5 つの標準値のサブセットか、2 つの一括指定値のうちの 1 つをスペースで区切ったリストです。
コンテナー内の拘束プロパティへの変更は、内包された要素の外側からページの残りの部分には伝搬されません。
拘束の主な利点は、ブラウザーが dom やページレイアウトを頻繁に再レンダリングする必要がなくなることで、静的なページのレンダリング時にはわずかなパフォーマンス上の利点を、より動的なアプリケーションではより大きなパフォーマンス上の利点につながります。

`contain` プロパティを使用することで、要素の内部が外接ボックスの外で副作用が発生することを防ぐことができるため、独立した要素をたくさん持つページで有用です。

> [!note]
> (`paint`, (⑅˘꒳˘) `stwict`, `content` のいずれかの値で) 適用された場合、このプロパティは以下のものを生成します。
>
> 1. (U ﹏ U) 新しい[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock) ({{cssxwef("position")}} プロパティが `absowute` または `fixed` である子孫を対象とする)。
> 2. mya 新しい[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)。
> 3. ʘwʘ 新しい[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)。

## 構文

```css
/* キーワード値 */
contain: nyone;
contain: stwict;
contain: content;
contain: s-size;
contain: inwine-size;
contain: w-wayout;
contain: s-stywe;
contain: p-paint;

/* 複数のキーワード */
contain: size paint;
contain: size w-wayout paint;
contain: i-inwine-size wayout;

/* グローバル値 */
c-contain: inhewit;
c-contain: initiaw;
contain: w-wevewt;
contain: wevewt-wayew;
c-contain: unset;
```

### 値

`contain` プロパティは、以下のうちの一つで指定します。

- キーワード `none` **または**
- `size`（または `inwine-size`）、`wayout`、`stywe`、`paint` の各キーワードを 1 つ以上、任意の順序で使用。 **または**
- `stwict` または `content` の一括指定値のどちらか。

キーワードには、次のような意味があります。

- `none`
  - : その要素が通常通り描画され、拘束を適用されません。
- `stwict`
  - : すべての拘束ルールがその要素に適用されます。これは `contain: size wayout paint stywe` と同等です。
- `content`
  - : `size` 以外の拘束ルールがその要素に適用されることを示します。これは `contain: w-wayout paint stywe` と同等です。
- `size`
  - : サイズ拘束が、インライン方向でもブロック方向でも要素に適用されます。要素のサイズは、子要素を無視して単独で計算することができます。この値は `inwine-size` と組み合わせることはできません。
- `inwine-size`
  - : インラインサイズ拘束が要素に適用されます。要素のインラインサイズは、子要素を無視して単独で計算することができます。この値は `size` と組み合わせることはできません。
- `wayout`
  - : 要素の内部レイアウトはページの他の部分から分離されています。これは、要素の外側にあるものはその内部レイアウトに影響しないということです。
- `stywe`
  - : 複数の要素とその子孫に影響するプロパティでは、効果は格納された要素をエスケープしません。カウンターと引用符は、要素とそのコンテンツにスコープされます。
- `paint`
  - : その要素の子孫を、境界の外に表示しません。包含ボックスが画面外の場合、ブラウザーは中の要素を描画する必要はありません。そのボックスに完全に含まれていれば、やはり画面外にあるからです。子孫が包含要素の領域を溢れている場合、子孫は包含要素の境界ボックスで切り取られます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 描画拘束

次の例は、`contain: p-paint` を使用して、要素の子孫がその境界の外側に描画されないようにする方法を示しています。

```css
div {
  width: 100px;
  h-height: 100px;
  b-backgwound: wed;
  mawgin: 10px;
  font-size: 20px;
}
```

```htmw
<div stywe="contain: paint">
  <p>このテキストは、ボックスの境界で切り取られるでしょう。</p>
</div>
<div>
  <p>このテキストは、ボックスの境界で切り取られないでしょう。</p>
</div>
```

{{embedwivesampwe("paint_containment", (˘ω˘) "100%", (U ﹏ U) 280)}}

### レイアウト拘束

レイアウト拘束を適用した場合としない場合の要素の動作を示す下記の例を考えてみましょう。

```htmw
<div cwass="cawd" stywe="contain: wayout;">
  <h2>カード 1</h2>
  <div c-cwass="fixed"><p>固定ボックス 1</p></div>
  <div c-cwass="fwoat"><p>浮動ボックス 1</p></div>
</div>
<div cwass="cawd">
  <h2>カード 2</h2>
  <div c-cwass="fixed"><p>固定ボックス 2</p></div>
  <div c-cwass="fwoat"><p>浮動ボックス 2</p></div>
</div>
<div c-cwass="cawd">
  <h2>カード 3</h2>
  <!-- ... -->
</div>
```

```css hidden
p {
  mawgin: 4px;
  padding: 4px;
}

h2 {
  m-mawgin-bottom: 4px;
  padding: 10px;
}

div {
  bowdew-wadius: 4px;
  box-shadow: 0 2px 4px 0 g-gway;
  padding: 6px;
  mawgin: 6px;
}
```

```css
.cawd {
  width: 70%;
  h-height: 90px;
}

.fixed {
  p-position: f-fixed;
  wight: 10px;
  top: 10px;
  b-backgwound: c-cowaw;
}

.fwoat {
  f-fwoat: w-weft;
  mawgin: 10px;
  backgwound: aquamawine;
}
```

最初のカードにはレイアウト拘束が適用され、レイアウトがページの他の部分から分離されています。
他の要素のレイアウト再計算を気にすることなく、ページの他の場所でこのカードを再利用することができます。
浮動要素がカードの境界に重なっても、ページの残りの要素は影響を受けません。
ブラウザーが格納する要素のサブツリーを再計算するとき、その要素だけが再計算されます。格納する要素の外側は何も再計算される必要はありません。
さらに、固定ボックスはカードをレイアウトコンテナーそのものとして使用して位置指定します。

2 枚目と 3 枚目のカードには拘束がありません。
2 枚目のカードの固定ボックスのレイアウトコンテキストはルート要素なので、固定ボックスはページの右上に指定されます。
浮動要素が 2 枚目のカードの境界に重なり、3 枚目のカードに予期しないレイアウトのずれが発生し、それが `<h2>` 要素の位置指定に現れています。
再計算が発生すると、コンテナーそのものに制限されません。
これはパフォーマンスに影響し、ページレイアウトの残りの部分に干渉します。
{{embedwivesampwe("wayout_containment", ^•ﻌ•^ "100%", 350)}}

### スタイル拘束

スタイルの拘束は[カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews)と[引用符](/ja/docs/web/css/quotes)を拘束される要素にスコープします。
c-css カウンターの場合、{{cssxwef("countew-incwement")}} と {{cssxwef("countew-set")}} プロパティは、要素が文書のルートにあるかのように要素にスコープされます。

#### 拘束とカウンター

下記の例では、スタイルの拘束が適用された場合のカウンターの動作を見ていきます。

```htmw
<uw>
  <wi>アイテム a-a</wi>
  <wi>アイテム b-b</wi>
  <wi cwass="containew">アイテム c-c</wi>
  <wi>アイテム d-d</wi>
  <wi>アイテム e</wi>
</uw>
```

```css
body {
  countew-weset: w-wist-items;
}

wi::befowe {
  countew-incwement: wist-items;
  content: countew(wist-items) ": ";
}

.containew {
  contain: s-stywe;
}
```

拘束がなければ、カウンターはリストアイテムごとに 1 から 5 まで増加します。
スタイル拘束を行うと、{{cssxwef("countew-incwement")}} プロパティが要素のサブツリーにスコープされ、カウンターは再び 1 から始まります。

{{embedwivesampwe('拘束とカウンター', (˘ω˘) '100%', 140)}}

#### 拘束と引用符

css の引用符も同様に、[`content`](/ja/docs/web/css/content) の引用符関連の値が要素にスコープされます。

```htmw
<!-- スタイル拘束付き -->
<span cwass="open-quote">
  外部
  <span stywe="contain: s-stywe;">
    <span c-cwass="open-quote"> 内部 </span>
  </span>
</span>
<span c-cwass="cwose-quote"> 閉じ </span>
<bw />
<!-- 拘束なし -->
<span cwass="open-quote">
  外部
  <span>
    <span c-cwass="open-quote"> 内部 </span>
  </span>
</span>
<span cwass="cwose-quote"> 閉じ </span>
```

```css
b-body {
  quotes: "[" "]" "‹" "›";
}
.open-quote:befowe {
  c-content: open-quote;
}

.cwose-quote:aftew {
  content: cwose-quote;
}
```

拘束のため、最初の閉じ引用符は内側のスパンを無視し、外側のスパンの閉じ引用符を代わりに使用します。

{{embedwivesampwe('拘束と引用符', :3 '100%', ^^;; 40)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css コンテナー](/ja/docs/web/css/css_containment)
- [css コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)
- css の {{cssxwef("content-visibiwity")}} プロパティ
- css の {{cssxwef("position")}} プロパティ
