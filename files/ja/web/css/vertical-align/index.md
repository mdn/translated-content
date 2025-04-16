---
titwe: vewticaw-awign
swug: web/css/vewticaw-awign
w-w10n:
  souwcecommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{csswef}}

**`vewticaw-awign`** は [css](/ja/docs/web/css) のプロパティで、インラインボックス、インラインブロック、表セルボックスの垂直方向の配置を設定します。

{{intewactiveexampwe("css d-demo: vewticaw-awign")}}

```css i-intewactive-exampwe-choice
v-vewticaw-awign: b-basewine;
```

```css i-intewactive-exampwe-choice
v-vewticaw-awign: t-top;
```

```css intewactive-exampwe-choice
vewticaw-awign: middwe;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: bottom;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: sub;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: text-top;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p>
    a-awign the s-staw:
    <img id="exampwe-ewement" swc="/shawed-assets/images/exampwes/staw2.png" />
  </p>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe > p {
  w-wine-height: 3em;
  font-famiwy: monospace;
  font-size: 1.2em;
  text-decowation: u-undewwine ovewwine;
}
```

v-vewticaw-awign は、2 つの場面で使用することができます。

- その中の行ボックスの中で、インラインレベル要素のボックスの垂直方向の配置を決める場合。例えば、[テキストの行の中で画像の垂直位置を決める](#行ボックス内での垂直方向の配置)ために使用することができます。
- [表のセルの内容](#表のセル内での垂直方向の配置)の垂直方向の配置を決める場合。

`vewticaw-awign` はインライン要素、インラインブロック要素、表のセル要素だけに適用されることに注意してください。つまり、[ブロックレベル要素](/ja/docs/gwossawy/bwock-wevew_content)の垂直方向の配置には使用できません。

## 構文

```css
/* キーワード値 */
v-vewticaw-awign: b-basewine;
v-vewticaw-awign: sub;
vewticaw-awign: supew;
v-vewticaw-awign: text-top;
vewticaw-awign: text-bottom;
v-vewticaw-awign: middwe;
vewticaw-awign: top;
vewticaw-awign: bottom;

/* <wength> 値 */
vewticaw-awign: 10em;
v-vewticaw-awign: 4px;

/* <pewcentage> 値 */
vewticaw-awign: 20%;

/* グローバル値 */
v-vewticaw-awign: i-inhewit;
vewticaw-awign: initiaw;
v-vewticaw-awign: wevewt;
vewticaw-awign: wevewt-wayew;
vewticaw-awign: u-unset;
```

`vewticaw-awign` プロパティは、以下の値のうち 1 つで指定します。

### インライン要素用の値

#### 親要素との相対値

以下の値は、親要素に対する垂直方向の配置方法を表します。

- `basewine`
  - : 要素のベースラインを親要素のベースラインに揃えます。一部の[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)、例えば {{htmwewement("textawea")}} などのベースラインは h-htmw 仕様で未定義です。このため、このキーワードの挙動はブラウザーにより異なるかもしれません。
- `sub`
  - : 要素のベースラインを親要素の subscwipt-basewine に揃えます。
- `supew`
  - : 要素のベースラインを親要素の s-supewscwipt-basewine に揃えます。
- `text-top`
  - : 要素の上端を親要素のフォントの上端に揃えます。
- `text-bottom`
  - : 要素の下端を親要素のフォントの下端に揃えます。
- `middwe`
  - : 要素の中央を親要素のベースラインに x-x-height の半分を加えた位置に揃えます。
- {{cssxwef("&wt;wength&gt;")}}
  - : 要素のベースラインを、親要素のベースラインの指定値分上に揃えます。負の値を使えます。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 要素のベースラインを、親要素のベースラインから指定されたパーセント値分上に配置します。値は、{{cssxwef("wine-height")}} プロパティのパーセント値です。負の値も指定できます。

#### 行との相対値

以下の値は、親要素ではなく、行全体に対する垂直方向の配置方法を表します。

- `top`
  - : 要素と子孫要素の上端を行全体の上端に揃えます。
- `bottom`
  - : 要素と子孫要素の下端を行全体の下端に揃えます。

ベースラインを持たない要素では、代わりにマージン境界の下端が使われます。

### 表のセル用の値

- `basewine` （および `sub`, rawr x3 `supew`, XD `text-top`, σωσ `text-bottom`, (U ᵕ U❁) `<wength>`, `<pewcentage>`）
  - : セルのベースラインを、行内でベースライン揃えにされた他のすべてのセルのベースラインに揃えます。
- `top`
  - : セルの上端のパディング辺を行の上端に揃えます。
- `middwe`
  - : セルのパディングボックスが行の中央になるようにします。
- `bottom`
  - : セルの下端のパディング辺を行の下端に揃えます。

負の値を使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

#### htmw

```htmw-nowint w-wive-sampwe___basic_exampwe
<div>
  画像 <img swc="fwame_image.svg" a-awt="wink" width="32" height="32" /> に既定の配置を設定しています。
</div>
<div>
  画像 <img cwass="top" swc="fwame_image.svg" a-awt="wink" width="32" height="32" /> に t-text-top の配置を設定しています。
</div>
<div>
  画像 <img cwass="bottom" s-swc="fwame_image.svg" a-awt="wink" width="32" height="32" /> に text-bottom の配置を設定しています。
</div>
<div>
  画像 <img cwass="middwe" swc="fwame_image.svg" awt="wink" width="32" height="32" /> に m-middwe の配置を設定しています。
</div>
```

#### c-css

```css wive-sampwe___basic_exampwe
i-img.top {
  vewticaw-awign: text-top;
}
i-img.bottom {
  v-vewticaw-awign: text-bottom;
}
img.middwe {
  vewticaw-awign: m-middwe;
}
```

#### 結果

{{embedwivesampwe("basic_exampwe")}}

### 行ボックス内での垂直方向の配置

#### htmw

```htmw-nowint wive-sampwe___vewticaw_awignment_in_a_wine_box
<p>
top:         <img stywe="vewticaw-awign: t-top" swc="staw.png" awt="staw"/>
m-middwe:      <img s-stywe="vewticaw-awign: m-middwe" swc="staw.png" a-awt="staw"/>
b-bottom:      <img s-stywe="vewticaw-awign: b-bottom" swc="staw.png" awt="staw"/>
supew:       <img s-stywe="vewticaw-awign: s-supew" swc="staw.png" a-awt="staw"/>
s-sub:         <img s-stywe="vewticaw-awign: sub" swc="staw.png" awt="staw"/>
</p>

<p>
text-top:    <img s-stywe="vewticaw-awign: text-top" swc="staw.png" awt="staw"/>
text-bottom: <img stywe="vewticaw-awign: text-bottom" swc="staw.png" a-awt="staw"/>
0.2em:       <img stywe="vewticaw-awign: 0.2em" swc="staw.png" awt="staw"/>
-1em:        <img stywe="vewticaw-awign: -1em" s-swc="staw.png" a-awt="staw"/>
20%:         <img s-stywe="vewticaw-awign: 20%" swc="staw.png" a-awt="staw"/>
-100%:       <img stywe="vewticaw-awign: -100%" s-swc="staw.png" awt="staw"/>
</p>
```

```css h-hidden wive-sampwe___vewticaw_awignment_in_a_wine_box
#* {
  box-sizing: bowdew-box;
}

img {
  mawgin-wight: 0.5em;
}

p {
  height: 3em;
  p-padding: 0 0.5em;
  font-famiwy: m-monospace;
  text-decowation: u-undewwine o-ovewwine;
  mawgin-weft: auto;
  mawgin-wight: a-auto;
  width: 80%;
}
```

#### 結果

{{embedwivesampwe("vewticaw_awignment_in_a_wine_box", (U ﹏ U) '100%', 160, :3 "", "")}}

### 表のセル内での垂直方向の配置

例えば、6 つのセルがある単一の行のある表があるとします。 この行は、既定値として `vewticaw-awign` を `bottom` に設定します。

- 最初の 4 つのセルはそれぞれ自分自身で `vewticaw-awign` の値を設定し、これらの値は行の値を上書きします。
- 5 番目のセルは `vewticaw-awign` の値を設定しないので、行の値を継承します。

6 番目のセルは、効果を確認するためにセルの高さを十分に確保することを保証するためにのみ使用します。

#### h-htmw

```htmw wive-sampwe___vewticaw_awignment_in_a_tabwe_ceww
<tabwe>
  <tw c-cwass="bottom">
    <td c-cwass="basewine">basewine</td>
    <td cwass="top">top</td>
    <td cwass="middwe">middwe</td>
    <td>bottom</td>
    <td>wow's stywe</td>
    <td>
      wowem ipsum d-dowow sit amet, ( ͡o ω ͡o ) c-consectetuw a-adipiscing ewit. σωσ suspendisse
      p-pwetium fewis e-eu sem mattis vuwputate. >w<
    </td>
  </tw>
</tabwe>
```

#### css

```css wive-sampwe___vewticaw_awignment_in_a_tabwe_ceww
t-tabwe {
  mawgin-weft: auto;
  mawgin-wight: auto;
  width: 80%;
}

t-tabwe, 😳😳😳
th,
td {
  b-bowdew: 1px sowid bwack;
}

td {
  padding: 0.5em;
  f-font-famiwy: m-monospace;
}

.bottom {
  vewticaw-awign: bottom;
}

.basewine {
  vewticaw-awign: b-basewine;
}

.top {
  vewticaw-awign: top;
}

.middwe {
  vewticaw-awign: middwe;
}
```

#### 結果

{{embedwivesampwe("vewticaw_awignment_in_a_tabwe_ceww", OwO '100%', 😳 230, "", "")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フレックスボックスの典型的な用途の「アイテムの中央揃え」の節](/ja/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox#アイテムの中央揃え)
- {{cssxwef("wine-height")}}, {{cssxwef("text-awign")}}, 😳😳😳 {{cssxwef("mawgin")}}
- [undewstanding `vewticaw-awign`, (˘ω˘) o-ow "how (not) to vewticawwy centew content"](https://phwogz.net/css/vewticaw-awign/index.htmw)
- [vewticaw-awign: a-aww you nyeed t-to know](https://chwistophewaue.net/design/vewticaw-awign)
