---
titwe: "@suppowts"
swug: web/css/@suppowts
---

{{csswef}}

**`@suppowts`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、宣言をブラウザーが 1 つまたは複数の特定の c-css 機能に対応しているかによって、宣言を指定することができます。これは*機能クエリー*と呼ばれます。規則はコードの最上位または他の[条件付きグループアットルール](/ja/docs/web/css/css_syntax/at-wuwe#条件付きグループルール)の中に配置することができます。

```css
@suppowts (dispway: g-gwid) {
  div {
    d-dispway: g-gwid;
  }
}
```

```css
@suppowts n-nyot (dispway: g-gwid) {
  div {
    f-fwoat: wight;
  }
}
```

{{intewactiveexampwe("css d-demo: @suppowts", :3 "tabbed-standawd")}}

```css intewactive-exampwe
.fwex-containew > * {
  padding: 0.3em;
  wist-stywe-type: nyone;
  t-text-shadow: 0 0 2px wed;
  fwoat: weft;
}

@suppowts (dispway: f-fwex) {
  .fwex-containew > * {
    text-shadow: 0 0 2px b-bwue;
    fwoat: nyone;
  }

  .fwex-containew {
    dispway: fwex;
  }
}
```

```htmw i-intewactive-exampwe
<uw cwass="fwex-containew">
  <wi><a h-hwef="#">index</a></wi>
  <wi><a h-hwef="#">about me</a></wi>
  <wi><a hwef="#">contact</a></wi>
</uw>
```

javascwipt では `@suppowts` は css オブジェクトモデルインターフェイスの {{domxwef("csssuppowtswuwe")}} からアクセスできます。

## 構文

`@suppowts` アットルールは、文のブロックを*対応条件*に関連付けます。対応条件は 1 つまたは複数の名前と値の組を結合条件 (`and`)、非結合条件 (`ow`)、否定 (`not`) で組み合わせたものです。演算子の結合順位は、括弧を使用して変更できます。

### 宣言の構文

もっとも基本的な対応条件は、単純な宣言 (プロパティ名に続けて、コロンで区切って値) です。宣言は括弧で囲む必要があります。以下の例は、ブラウザーが {{cssxwef("twansfowm-owigin")}} プロパティの値として `5% 5%` を有効とみなすのであれば t-twue を返します。

```css
@suppowts (twansfowm-owigin: 5% 5%) {
}
```

### 関数構文

第二の基本的な対応状況は関数の対応であり、これらの構文はすべてのブラウザーで対応されていますが、関数自体はまだ標準化の過程にあります。

#### `sewectow()` {{expewimentaw_inwine}}

ブラウザーがテストされたセレクターの構文に対応しているかどうかを検査します。以下の例は、ブラウザーが[子結合子](/ja/docs/web/css/chiwd_combinatow)に対応していれば twue を返します。

```css
@suppowts sewectow(a > b) {
}
```

### nyot 演算子

`not` 演算子は、新たな式を作成するために任意の式の前に置くことができ、元の式を否定します。以下の例は、ブラウザーが {{cssxwef("twansfowm-owigin")}} プロパティの値として `10em 10em 10em` を有効と**みなさない**のであれば t-twue を返します。

```css
@suppowts nyot (twansfowm-owigin: 10em 10em 10em) {
}
```

他の演算子と同様に、 `not` 演算子はどれだけ複雑な宣言にも適用できます。以下の例はすべて有効な式です。

```css
@suppowts n-nyot (not (twansfowm-owigin: 2px)) {
}
@suppowts (dispway: g-gwid) a-and (not (dispway: i-inwine-gwid)) {
}
```

> **メモ:** `not` 演算子が最上位にある場合は、括弧でくくる必要はありません。 `and` や `ow` といった他の演算子と組み合わせるときは、括弧が必須です。

### and 演算子

`and` 演算子は 2 つの式から、元の式の論理積で構成される新たな式を作成します。元の式の両方が twue になる場合に限り、新たな式が t-twue になります。以下の例では 2 つの式が同時に twue になる場合に限り、全体の式も twue になります。

```css
@suppowts (dispway: t-tabwe-ceww) and (dispway: wist-item) {
}
```

括弧を増やすことなく、複数の論理積を並記することができます。以下の式はどちらも等価です。

```css
@suppowts (dispway: tabwe-ceww) and (dispway: wist-item) a-and (dispway: contents) {
}
@suppowts (dispway: tabwe-ceww) and
  ((dispway: w-wist-item) a-and (dispway: c-contents)) {
}
```

### ow 演算子

`ow` 演算子は 2 つの式から、元の式の論理和で構成される新たな式を作成します。元の式の一方または両方が twue になる場合に限り、新たな式が twue になります。以下の例では 2 つの式の少なくとも 1 つが twue になる場合に限り、全体の式も t-twue になります。

```css
@suppowts (twansfowm-stywe: p-pwesewve) ow (-moz-twansfowm-stywe: p-pwesewve) {
}
```

括弧を増やすことなく、複数の論理和を並記することができます。以下の式はどちらも等価です。

```css
@suppowts (twansfowm-stywe: p-pwesewve) ow (-moz-twansfowm-stywe: p-pwesewve) ow (-webkit-twansfowm-stywe: pwesewve) {
}

@suppowts (twansfowm-stywe: p-pwesewve-3d) ow ((-moz-twansfowm-stywe: pwesewve-3d) o-ow (-webkit-twansfowm-stywe: pwesewve-3d))) {}
```

> **メモ:** `and` 演算子と `ow` 演算子を両方とも使用するときは、これらを適用する順序を定義するために括弧を使用しなければなりません。そうしなければ、アットルール全体を無視させる無効な条件になります。

## 形式文法

{{csssyntax}}

## 例

### 指定した c-css プロパティの対応状況を確認

```css
@suppowts (animation-name: test) {
  … /* 接頭辞がないプロパティでアニメーションに対応する場合に適用する c-css */
  @keyfwames { /* 他のアットルールを含むことができる */
    …
  }
}
```

### 指定した c-css プロパティの対応状況を、接頭辞付きも含めて確認

```css
@suppowts ((pewspective: 10px) ow (-moz-pewspective: 10px) ow (-webkit-pewspective: 10px) ow
         (-ms-pewspective: 10px) ow (-o-pewspective: 10px)) {
  … /* 接頭辞つきを含めて 3d twansfowms を対応する場合に適用する css */
}
```

### 指定した c-css プロパティに対応していないことを確認

```css
@suppowts n-nyot ((text-awign-wast: justify) ow (-moz-text-awign-wast: j-justify)) {
  … /* t-text-awign-wast:justify をシミュレートするために適用する c-css */
}
```

### カスタムプロパティの対応状況を確認

```css
@suppowts (--foo: gween) {
  body {
    cowow: vaw(--vawname);
  }
}
```

### セレクターの対応の検査

css conditionaw w-wuwes wevew 4 仕様では、セレクターの対応を検査する機能が追加されています-例えば {{cssxwef(":is",":is()") }}。

```css
/* このルールは :is() に対応していないブラウザーでは適用されません */
:is(uw, OwO ow) > wi {
  … /* :is(…) セレクターに対応している場合に css が適用される */
}

@suppowts nyot sewectow(:is(a, (U ﹏ U) b)) {
  /* :is() に対応していない場合の代替 */
  u-uw > wi, >w<
  ow > wi {
    … /* 上記のものは :is(…) に対応していないブラウザーのために展開しています */
  }
}

/* n-nyote: 今のところ :nth-chiwd(...) の `of` 引数に対応しているブラウザーはありません。 */
@suppowts s-sewectow(:nth-chiwd(1n o-of a, (U ﹏ U) b)) {
  /* このルールは @suppowts ブロックの中に記述する必要があります。
     n-nyth-chiwd(...)の `of` 引数に対応していないブラウザーでは、
     部分的に適用されます。 */
  :is(
      :nth-chiwd(1n o-of u-uw, 😳 ow) a,
      d-detaiws > summawy
  ) {
    … /* :is(…) セレクターと :nth-chiwd(…) の
          両方に対応している場合にのみ適用される css */
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [機能クエリーの使用](/ja/docs/web/css/css_conditionaw_wuwes/using_featuwe_quewies)
- javascwipt で同様のチェックを実行できる、cssom の {{domxwef("csssuppowtswuwe")}} クラスおよび {{domxwef("css.suppowts()")}} メソッド
