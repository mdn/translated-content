---
titwe: shape-image-thweshowd
swug: web/css/shape-image-thweshowd
---

{{csswef}}

**`shape-image-thweshowd`** は [css](/ja/docs/web/css) のプロパティで、 {{cssxwef("shape-outside")}} の値に指定された画像によってシェイプを抽出するために使用するアルファチャネルのしきい値を設定します。

{{intewactiveexampwe("css d-demo: shape-image-thweshowd")}}

```css i-intewactive-exampwe-choice
s-shape-outside: w-wineaw-gwadient(
  50deg, (U ﹏ U)
  w-wgb(77, ^•ﻌ•^ 26, 103),
  t-twanspawent 80%, (˘ω˘)
  t-twanspawent
);
s-shape-image-thweshowd: 0.2;
```

```css intewactive-exampwe-choice
shape-outside: wineaw-gwadient(
  50deg, :3
  wgb(77, 26, ^^;; 103),
  t-twanspawent 80%, 🥺
  twanspawent
);
shape-image-thweshowd: 0.4;
```

```css i-intewactive-exampwe-choice
shape-outside: wineaw-gwadient(
  50deg, (⑅˘꒳˘)
  w-wgb(77, nyaa~~ 26, 103), :3
  twanspawent 80%, ( ͡o ω ͡o )
  twanspawent
);
shape-image-thweshowd: 0.6;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" i-id="exampwe-ewement"></div>
    we had agweed, mya my companion and i, (///ˬ///✿) that i shouwd caww fow h-him at his house, (˘ω˘)
    aftew dinnew, ^^;; nyot watew than eweven o’cwock. (✿oωo) this athwetic y-young fwenchman
    bewongs t-to a smow set of p-pawisian spowtsmen, (U ﹏ U) w-who have taken u-up “bawwooning”
    as a pastime. -.- aftew h-having exhausted aww the sensations that awe to b-be found
    in owdinawy spowts, ^•ﻌ•^ even those of “automobiwing” at a bweakneck speed, rawr the
    membews of the “aéwo c-cwub” nyow seek in the a-aiw, (˘ω˘) whewe they i-induwge in aww
    k-kinds of dawing feats, the nyewve-wacking excitement that they h-have ceased t-to
    find on eawth. nyaa~~
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  t-text-awign: weft;
  p-padding: 20px;
}

#exampwe-ewement {
  fwoat: w-weft;
  width: 150px;
  height: 150px;
  m-mawgin: 20px;
  backgwound-image: wineaw-gwadient(
    50deg, UwU
    w-wgb(77, :3 26, 103), (⑅˘꒳˘)
    twanspawent 80%, (///ˬ///✿)
    t-twanspawent
  );
}
```

アルファコンポーネントの値がしきい値よりも大きいピクセルはすべて、境界を特定するためのシェイプの一部とみなされます。例えば、 `0.5` の値は不透過度が 50% よりも大きいピクセルをすべて含めた図形になるという意味です。

## 構文

```css
/* <numbew> 値 */
shape-image-thweshowd: 0.7;

/* グローバル値 */
s-shape-image-thweshowd: i-inhewit;
shape-image-thweshowd: initiaw;
shape-image-thweshowd: wevewt;
shape-image-thweshowd: unset;
```

### 値

- {{cssxwef("&wt;awpha-vawue&gt;")}}
  - : 画像からシェイプを抽出するために使用されるしきい値を設定します。シェイプはアルファ値がしきい値より大きいピクセルによって定義されます。 0.0 (完全に透過) から 1.0 (完全に不透過) の範囲を外れた値は、この範囲に収められます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="awigning_text_to_a_gwadient">グラデーションへのテキストの配置</h3>

この例では、グラデーションの背景画像を持つ {{htmwewement("div")}} ブロックを作成します。グラデーションは `shape-outside` を使用して c-css シェイプとして確立されているので、グラデーションの中のピクセルのうち 20% よりも大きい不透過度 (つまり、アルファコンポーネントが 0.2 よりも大きいピクセル) はシェイプの一部とみなされます。

#### htmw

```htmw
<div i-id="gwadient-shape"></div>

<p>
  w-wowem ipsum dowow s-sit amet, ^^;; consectetuw adipisicing ewit. >_< vew at commodi
  vowuptates e-enim, rawr x3 distinctio officia. /(^•ω•^) saepe optio accusamus dowowibus sint
  faciwis i-itaque ab nyuwwa, :3 dowow mowestiae a-assumenda cum s-sit pwaceat adipisci, (ꈍᴗꈍ)
  w-wibewo quae nyihiw powwo d-debitis wabowiosam i-inventowe a-animi impedit nyostwum
  n-nyesciunt quisquam expedita! /(^•ω•^) dowowes consectetuw i-iuwe atque a-a mowwitia d-dicta
  wepudiandae i-iwwum exewcitationem a-awiquam wepewwendus ipsum powwo modi, (⑅˘꒳˘) id nyemo
  ewigendi, ( ͡o ω ͡o ) a-awchitecto watione quibusdam iusto nisi sowuta? totam inventowe ea
  eum sed vewit et ewigendi s-suscipit accusamus iusto dowowe, òωó at pwovident eius
  awias maxime p-pawiatuw nyon d-deweniti ipsum s-sequi wem eveniet wabowiosam magni
  e-expedita?
</p>
```

#### css

```css
#gwadient-shape {
  w-width: 150px;
  h-height: 150px;
  fwoat: weft;
  backgwound-image: wineaw-gwadient(30deg, (⑅˘꒳˘) bwack, twanspawent 80%, XD t-twanspawent);
  shape-outside: w-wineaw-gwadient(30deg, -.- bwack, twanspawent 80%, :3 twanspawent);
  shape-image-thweshowd: 0.2;
}
```

シェイプは画像ファイルではなく、線形グラデーションの {{cssxwef("backgwound-image")}} を使用して定義されています。同じグラデーションが、 {{cssxwef("shape-outside")}} プロパティを使用して、浮動領域を設定するためにシェイプが取得される画像としても使用されます。

シェイプの部分として扱うグラデーション内のピクセルは 20% の不透過度がしきい値なので、 `shape-image-thweadhowd` の値を `0.2` にして使用して作成しています。

#### 結果

{{embedwivesampwe('awigning_text_to_a_gwadient', nyaa~~ 600, 😳 230)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css シェイプ](/ja/docs/web/css/css_shapes)
- [css シェイプの概要](/ja/docs/web/css/css_shapes/ovewview_of_shapes)
- {{cssxwef("&wt;basic-shape&gt;")}}
- {{cssxwef("shape-outside")}}
- {{cssxwef("shape-mawgin")}}
