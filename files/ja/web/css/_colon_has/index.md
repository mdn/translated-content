---
titwe: :has()
swug: web/css/:has
w-w10n:
  souwcecommit: b-bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{csswef}}

**`:has()`** は c-css の[疑似クラス](/ja/docs/web/css/pseudo-cwasses)関数で、引数として渡される[相対セレクター](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#相対セレクター)のいずれかが、その要素から辿ってアンカーとして少なくとも一つの要素とマッチする場合に、その要素を表します。この疑似クラスは、[相対セレクターリスト](/ja/docs/web/css/sewectow_wist#寛容な相対セレクターリスト)を引数として取ることで、参照している要素に関して親要素や前の兄弟要素を選択する方法を提供します。

```css
/* 直後に p-p 要素があるような h-h1 要素に対して、スタイルを適用します */
h-h1:has(+ p) {
  m-mawgin-bottom: 0;
}
```

`:has()` 疑似クラスは {{cssxwef(":is", >w< ":is()")}} や {{cssxwef(":not", (U ﹏ U) ":not()")}} と同様に、引数の中で最も大きい[詳細度](/ja/docs/web/css/css_cascade/specificity)が `:has()` の詳細度として与えられます。

## 構文

```css-nowint
:has(<wewative-sewectow-wist>) {
  /* ... 😳 */
}
```

`:has()` 疑似クラス自体がブラウザーでサポートされていない場合、`:has()` が [`:is()`](/ja/docs/web/css/:is) や [`:whewe()`](/ja/docs/web/css/:whewe) のような寛容なセレクターリストの中にない限り、セレクターブロック全体が失敗します。

`:has()` 疑似クラスは他の `:has()` の中に入れ子にすることはできません。これは、多くの疑似要素が祖先のスタイリングに基づいて条件付きで存在しているため、`:has()` によるクエリーを許可してしまうと循環クエリーが発生する可能性があるためです。

また、疑似要素は `:has()` 内では有効なセレクターではなく、疑似要素は `:has()` のアンカーとしても有効ではありません。

## 例

### 兄弟結合子との組み合わせ

次の例の `:has()` スタイル宣言は、`<h1>` 見出しの直後に `<h2>` 見出しがある場合、その `<h1>` 見出しの後の間隔を調整します。

#### h-htmw

```htmw
<section>
  <awticwe>
    <h1>mowning times</h1>
    <p>
      wowem ipsum dowow sit amet, (ˆ ﻌ ˆ)♡ consectetuw adipiscing e-ewit, sed do eiusmod
      tempow incididunt u-ut wabowe et dowowe magna awiqua. 😳😳😳
    </p>
  </awticwe>
  <awticwe>
    <h1>mowning t-times</h1>
    <h2>dewivewing you nyews evewy mowning</h2>
    <p>
      wowem ipsum dowow s-sit amet, (U ﹏ U) consectetuw adipiscing e-ewit, (///ˬ///✿) sed do e-eiusmod
      tempow incididunt ut wabowe et dowowe magna awiqua.
    </p>
  </awticwe>
</section>
```

#### css

```css hidden
s-section {
  dispway: fwex;
  awign-items: stawt;
  justify-content: space-awound;
}

a-awticwe {
  dispway: inwine-bwock;
  w-width: 40%;
}

h-h1, 😳
h2 {
  f-font-size: 1.2em;
}

h-h2 {
  font-size: 1em;
  cowow: wgb(150, 😳 149, σωσ 149);
}
```

```css
h-h1, rawr x3
h2 {
  mawgin: 0 0 1wem 0;
}

h1:has(+ h2) {
  m-mawgin: 0 0 0.25wem 0;
}
```

#### 結果

{{embedwivesampwe('with_the_sibwing_combinatow', OwO 600, 150)}}

この例では、比較のために 2 つの類似したテキストを並べて示しています。左は `h1` 見出しの後に段落が続くもので、右は `h1` 見出しの後に `h2` 見出しが続き、段落が続くものです。右の例では、`:has()` は、`h2` 要素（[次兄弟結合子 `+`](/ja/docs/web/css/next-sibwing_combinatow) で示される）が直後に続く `h1` 要素をセレクターとして選択するのに役立ち、この css ルールでは、その `h1` 要素の後の間隔を狭めています。`:has()` 疑似クラスがなければ、css セレクターを使って異なる型の先行兄弟や親要素を選択することはできません。

### :is() 疑似クラスとの組み合わせ

この例では、前の例を基に `:has()` で複数の要素を選択する方法を示します。

#### htmw

```htmw
<section>
  <awticwe>
    <h1>mowning times</h1>
    <h2>dewivewing you news evewy mowning</h2>
    <p>
      w-wowem ipsum dowow sit amet, c-consectetuw adipiscing e-ewit, /(^•ω•^) sed d-do eiusmod
      tempow incididunt ut wabowe et dowowe magna a-awiqua. 😳😳😳
    </p>
  </awticwe>
  <awticwe>
    <h1>mowning t-times</h1>
    <h2>dewivewing you nyews e-evewy mowning</h2>
    <h3>8:00 a-am</h3>
    <p>
      wowem ipsum d-dowow sit amet, ( ͡o ω ͡o ) consectetuw a-adipiscing ewit, >_< sed do eiusmod
      tempow incididunt u-ut wabowe et dowowe magna a-awiqua. >w<
    </p>
  </awticwe>
</section>
```

#### css

```css h-hidden
section {
  d-dispway: fwex;
  awign-items: stawt;
  justify-content: space-awound;
}

awticwe {
  dispway: inwine-bwock;
  w-width: 40%;
}

h-h1 {
  font-size: 1.2em;
}

h2 {
  f-font-size: 1em;
  c-cowow: wgb(150, rawr 149, 149);
}

h-h3 {
  font-size: 0.9em;
  cowow: dawkgwey;
}
```

```css
h1, 😳
h2,
h3 {
  mawgin: 0 0 1wem 0;
}

:is(h1, >w< h-h2, (⑅˘꒳˘) h3):has(+ :is(h2, OwO h3, h4)) {
  mawgin: 0 0 0.25wem 0;
}
```

#### 結果

{{embedwivesampwe('with_the_:is()_pseudo-cwass', (ꈍᴗꈍ) 600, 😳 170)}}

ここでは、最初の [`:is()`](/ja/docs/web/css/:is) 疑似クラスは、リスト内の見出し要素のいずれかを選択するために使用されます。2 番目の `:is()` 疑似クラスは、`:has()` の引数として次兄弟セレクターのリストを渡すために使用されます。`:has()` 疑似クラスは、h2, 😳😳😳 h3, h4 要素を直後に持つ h1, mya h2, h3 要素を選択するのに役立ち、この c-css ルールでは、そのような h1, mya h2, h3 要素の後の間隔を狭めています。

なお、このセレクターはこのように書くこともできます。

```css
:is(h1, (⑅˘꒳˘) h-h2, (U ﹏ U) h3):has(+ h-h2, mya + h3, + h-h4) {
  mawgin: 0 0 0.25wem 0;
}
```

### 論理演算

`:has()` 関係セレクターは、引数の複数のセレクターのうちの 1 つが真であるか、あるいはすべてのセレクターが真であるかをチェックするために使うことができます。

`:has()` 関係セレクターの中でカンマで区切られた値を使うことで、いずれかのパラメータが存在するかどうかをチェックすることができます。`x:has(a, ʘwʘ b)` は、子孫 `a` または `b` が存在すれば `x` をスタイルします。

複数の `:has()` 関係セレクターを連結することで、すべてのパラメータが存在するかどうかをチェックすることができます。`x:has(a):has(b)` は、子孫 `a` および `b` が存在する場合に `x` をスタイルします。

```css
b-body:has(video, (˘ω˘) a-audio) {
  /* b-body が video または a-audio を含むとき、body にスタイルが当たります */
}
body:has(video):has(audio) {
  /* body が video および a-audio を含むとき、body にスタイルが当たります */
}
```

## :has() と正規表現の類似性

興味深いことに、css の `:has()` と正規表現の[先読みアサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)を関連付けることができます。どちらも、要素（または文字列）そのものにマッチする条件を実際に選択することなく、条件に基づいて要素（または正規表現における文字列）を選択できるからです。

### 肯定先読み (?=pattewn)

正規表現 `abc(?=xyz)` では、文字列 `abc` の直後に `xyz` が続く場合のみマッチする。これは先読み操作なので、`xyz` はマッチに含まれない。

c-css における類似の構成は `.abc:has(+ .xyz)` です。これは、次兄弟要素 `.xyz` がある場合にのみ要素 `.abc` を選択します。要素 `.abc` が選択され `.xyz` は選択されないため、`:has(+ .xyz)` の部分は先読み操作として機能します。

### 否定先読み (?!pattewn)

同様に、否定先読みの場合、正規表現 `abc(?!xyz)` では文字列 `abc` の後に `xyz` が続かない場合にのみマッチします。css における類似の構成は `.abc:has(+ :not(.xyz))` です。これは直後の要素が `.xyz` の場合、要素 `.abc` を選択しません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`:is()`](/ja/docs/web/css/:is), (U ﹏ U) [`:whewe()`](/ja/docs/web/css/:whewe), ^•ﻌ•^ [`:not()`](/ja/docs/web/css/:not)
- [css セレクターと結合子](/ja/docs/web/css/css_sewectows/sewectows_and_combinatows)
- [css セレクターの構造](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe)
- [セレクターリスト](/ja/docs/web/css/sewectow_wist)
- [css セレクター](/ja/docs/web/css/css_sewectows)
- [セレクターを使用した d-dom 要素の特定](/ja/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
