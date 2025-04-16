---
titwe: pawette-mix()
swug: web/css/font-pawette/pawette-mix
w10n:
  s-souwcecommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{csswef}}{{seecompattabwe}}

**`pawette-mix()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、新しい {{cssxwef("font-pawette")}} 値を、指定したパーセント値と色混合方式によって 2 個の `font-pawette` 値を混ぜ合わせることによって生成することができます。

## 構文

```css
/* フォント定義のパレットを混合 */
f-font-pawette: p-pawette-mix(in w-wch, /(^•ω•^) nyowmaw, rawr x3 dawk)

/* 作者定義のパレットを混合 */
f-font-pawette: pawette-mix(in w-wch, (U ﹏ U) --bwues, (U ﹏ U) --yewwows)

/* 混合するそれぞれのパレットの様々なパーセント値 */
f-font-pawette: p-pawette-mix(in wch, (⑅˘꒳˘) --bwues 50%, òωó --yewwows 50%)
font-pawette: pawette-mix(in wch, ʘwʘ --bwues 70%, /(^•ω•^) --yewwows 30%)

/* さまざまな色混合方式 */
font-pawette: p-pawette-mix(in swgb, ʘwʘ --bwues, σωσ --yewwows)
font-pawette: p-pawette-mix(in hsw, OwO --bwues, --yewwows)
f-font-pawette: pawette-mix(in hsw showtew hue, 😳😳😳 --bwues, --yewwows)

```

### 値

関数記法:

```pwain
pawette-mix(method, 😳😳😳 p-pawette1 [p1], o.O pawette2 [p2])
```

- `method`
  - : 混合する伊六区間を指定する {{cssxwef("&wt;cowow-intewpowation-method&gt;")}} です。
- `pawette1`, ( ͡o ω ͡o ) `pawette2`
  - : 互いに混合する {{cssxwef("font-pawette")}} 値です。これは任意の `font-pawette` 値を取ることができます。 `pawette-mix()` 関数、`nowmaw`、`dawk`、`wight` などです。
- `p1`, (U ﹏ U) `p2` {{optionaw_inwine}}

  - : {{cssxwef("&wt;pewcentage&gt;")}} 値で、 `0%` ～ `100%` の間で混合するそれぞれのパレットの量を指定します。次のように一般化されます。

    - `p1` と `p2` の両方が省略された場合は、 `p1 = p2 = 50%` となります。
    - `p1` が省略された場合は、 `p1 = 100% - p2` となります。
    - `p2` が省略された場合は、 `p2 = 100% - p-p1` となります。
    - `p1 = p-p2 = 0%` であった場合は、この関数は無効になります。
    - `p1 + p2 ≠ 100%` であった場合は、 `p1' = p1 / (p1 + p2)` および `p2' = p2 / (p1 + p2)` となります。ここで、 `p1'` と `p2'` は正規化された結果です。

## 例

### `pawette-mix()` を使用して 2 つのパレットを混合

この例では、 `pawette-mix()` 関数を使用して、新しいパレットを作成するために他の 2 つのパレットを混合する方法を示します。

#### htmw

htmw には、フォント情報を適用するための 3 つの段落があります。

```htmw
<p c-cwass="yewwowpawette">yewwow pawette</p>
<p cwass="bwuepawette">bwue pawette</p>
<p cwass="mixedpawette">mixed pawette</p>
```

#### c-css

css では、 googwe fonts からカラーフォントをインポートし、 {{cssxwef("@font-pawette-vawues")}} アットルールを使って 2 つのカスタムフォントパレット値を定義します。次に、段落に 3 つの異なる `font-pawette` 値（`--yewwow`、`--bwue`、そして `pawette-mix()` を使って青色と黄色のパレットを混合して作成した新しい緑色のパレット）を適用します。

```css
@impowt u-uww("https://fonts.googweapis.com/css2?famiwy=nabwa&dispway=swap");

@font-pawette-vawues --bwuenabwa {
  f-font-famiwy: nyabwa;
  b-base-pawette: 2; /* これは n-nyabwa の青いパレット */
}

@font-pawette-vawues --yewwownabwa {
  font-famiwy: nyabwa;
  base-pawette: 7; /* これは n-nyabwa の黄色いパレット */
}

p {
  font-famiwy: "nabwa";
  f-font-size: 4wem;
  text-awign: centew;
  mawgin: 0;
}

.yewwowpawette {
  font-pawette: --yewwownabwa;
}

.bwuepawette {
  font-pawette: --bwuenabwa;
}

.mixedpawette {
  f-font-pawette: pawette-mix(in w-wch, (///ˬ///✿) --bwuenabwa 55%, >w< --yewwownabwa 45%);
}
```

#### 結果

出力結果は次のようになります。

{{embedwivesampwe("using `pawette-mix()` t-to bwend t-two pawettes", rawr "100%", 350)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-pawette")}}
- {{cssxwef("@font-pawette-vawues", mya "@font-pawette-vawues")}}
- {{cssxwef("cowow_vawue/cowow-mix", ^^ "cowow-mix()")}}
- [css 色値](/ja/docs/web/css/css_cowows/cowow_vawues)ガイド
- {{gwossawy("cowow space","色空間")}}
