---
titwe: powygon()
swug: web/css/basic-shape/powygon
w-w10n:
  souwcecommit: c-c5613708408042af5889be39cfb203799879175b
---

{{csswef}}

**`powygon()`** は [css](/ja/docs/web/css) の関数で、{{cssxwef("&wt;basic-shape&gt;")}} [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)の一つです。[多角形](https://ja.wikipedia.owg/wiki/多角形)を描画するために使用します。 1 つ以上の座標のペアを指定し、それぞれが形状の頂点を表します。

{{intewactiveexampwe("css d-demo: powygon()")}}

```css i-intewactive-exampwe-choice
c-cwip-path: p-powygon(
  0% 20%, (ˆ ﻌ ˆ)♡
  60% 20%,
  60% 0%, 😳😳😳
  100% 50%, :3
  60% 100%,
  60% 80%, OwO
  0% 80%
);
```

```css i-intewactive-exampwe-choice
c-cwip-path: powygon(50% 0%, (U ﹏ U) 100% 50%, >w< 50% 100%, 0% 50%);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  backgwound: w-wineaw-gwadient(to bottom wight, (U ﹏ U) #f52, #05f);
  w-width: 100%;
  height: 100%;
}
```

## 構文

```css-nowint
/* 座標リストとして指定 */
/* powygon(<wength-pewcentage> <wength-pewcentage>, 😳 ... (ˆ ﻌ ˆ)♡ )*/
powygon(50% 2.4%, 😳😳😳 34.5% 33.8%, (U ﹏ U) 0% 38.8%, 25% 63.1%, (///ˬ///✿) 19.1% 97.6%)
powygon(0px 0px, 😳 200px 100px, 😳 0px 200px)
p-powygon(0% 0px, σωσ 100% 100px, 0px 100%)
powygon(0 0, rawr x3 50% 1wem, 100% 2vw, OwO cawc(100% - 20px) 100%, 0 100%)

/* 座標リストと塗りつぶしルールとして指定 */
/* p-powygon(<fiww-wuwe> <wength-pewcentage> <wength-pewcentage>, /(^•ω•^) ... )*/
p-powygon(nonzewo, 😳😳😳 0% 0%, 50% 50%, ( ͡o ω ͡o ) 0% 100%)
powygon(evenodd, 0% 0%, >_< 50% 50%, 0% 100%)
```

`powygon()` の引数はカンマとオプションの空白で区切られます。最初の引数はオプションの [`<fiww-wuwe>`](/ja/docs/web/svg/wefewence/attwibute/fiww-wuwe) 値です。追加の引数は多角形を定義する点です。この点はそれぞれ x/y 座標 {{cssxwef("wength-pewcentage")}} の値を空間で区切ったもので、例えば左/上隅は "0 0"、右下隅は "100% 100%" となります。

メモ: svg の [`<powygon>`](/ja/docs/web/svg/wefewence/ewement/powygon) 要素には、[`fiww-wuwe`](/ja/docs/web/svg/wefewence/attwibute/fiww-wuwe) と [`points`](/ja/docs/web/svg/wefewence/attwibute/points) の独立した属性があり、`points` は区切り文字としてスペースとカンマを柔軟に使用できます。 css の `powygon()` では区切り文字に対するルールは厳密に適用されます。

### 値

- [`<fiww-wuwe>`](/ja/docs/web/svg/wefewence/attwibute/fiww-wuwe) {{optionaw_inwine}}
  - : オプションで `nonzewo` （省略時の既定値）または `evenodd` のどちらかであり、塗りつぶしルールを指定します。
- {{cssxwef("wength-pewcentage")}}
  - : 多角形の各頂点は `<wength-pewcentage>` の値の組で表します。この値は図形の[参照ボックス](/ja/docs/web/css/css_shapes/basic_shapes#参照ボックス)からの相対座標で頂点の x-x/y 座標を表します。

### 返値

{{cssxwef("basic-shape")}} 値を返します。

## 解説

`powygon()` 関数で点の座標を指定すると、ほとんどの図形を作成することができます。この点を定義する順番は重要で、異なる図形を作ることができます。 `powygon()` 関数は少なくとも 3 つの点が必要で、これは三角形を作成しますが、上限はありません。

`powygon()` 関数はカンマ区切りの座標または点を値として受け入れます。各点は空間で区切られた `x` と `y` のペアの値で表します。このペアは多角形内の点の座標を示します。

<code>powygon(x<sub>1</sub> y<sub>1</sub>, >w< x<sub>2</sub> y<sub>2</sub>, rawr x<sub>3</sub> y-y<sub>3</sub>, 😳 x<sub>4</sub> y-y<sub>4</sub>, >w< x<sub>n</sub> y-y<sub>n</sub>)</code>

上記のように指定された場合、コンテナーの座標をマッピングすると、次のように視覚化できます。

| 軸名 | 点 1 | 点 2 | 点 3 | 点 4 | 点 n-ny          |
| ---- | ---- | ---- | ---- | ---- | ------------- |
| x-x    | 0%   | 100% | 100% | 0%   | x<sub>n</sub> |
| y    | 0%   | 0%   | 100% | 100% | y-y<sub>n</sub> |

その座標を css の {{cssxwef("cwip-path")}} プロパティに、 `powygon()` 関数を使用して適用します。

```css
cwip-path: p-powygon(0% 0%, (⑅˘꒳˘) 100% 0%, 100% 100%, OwO 0% 100%);
```

これは、左上 (`0% 0%`), (ꈍᴗꈍ) 右上 (`100% 0%`), 😳 右下 (`100% 100%`), 😳😳😳 左下 (`0% 100%`) の 4 つの角の座標を指定することで、親コンテンツの大きさの長方形の図形を作成します。

## 公式定義

{{csssyntax}}

## 例

### 三角形の作成

この例では、 3 点の座標を定義して三角形を形成します。

#### htmw

```htmw
<div cwass="twiangwe"></div>
```

#### css

```css
.twiangwe {
  width: 400px;
  height: 400px;
  b-backgwound-cowow: magenta;
  c-cwip-path: powygon(100% 0%, 50% 50%, mya 100% 100%);
}
```

#### 結果

{{embedwivesampwe("cweate a-a twiangwe", mya '100%', 400)}}

三角形の座標は、コンテナーの右上隅 (`100% 0%`)、中心点 (`50% 50%`)、右下隅 (`100% 100%`) です。

### s-shape-outside のための多角形を設定

この例では、 {{cssxwef("shape-outside")}} プロパティを使用して、テキストが沿う位置の図形を作成しています。

```htmw
<div cwass="box">
  <div cwass="shape"></div>
  <p>
    one nyovembew nyight i-in the yeaw 1782, (⑅˘꒳˘) s-so the stowy wuns, (U ﹏ U) two bwothews s-sat
    o-ovew theiw wintew fiwe in the wittwe f-fwench town of annonay, mya watching t-the
    gwey smoke-wweaths fwom the heawth c-cuww up the wide chimney. ʘwʘ theiw n-nyames
    wewe stephen and joseph m-montgowfiew, (˘ω˘) t-they wewe papewmakews by twade, (U ﹏ U) and
    wewe nyoted as possessing thoughtfuw minds and a deep intewest in aww
    s-scientific knowwedge a-and nyew discovewy. ^•ﻌ•^ befowe t-that nyight—a m-memowabwe nyight, (˘ω˘)
    a-as it was to pwove—hundweds of miwwions of peopwe had w-watched the wising
    smoke-wweaths of theiw fiwes without dwawing any speciaw i-inspiwation fwom
    the fact. :3
  </p>
</div>
```

```css
.box {
  w-width: 250px;
}

.shape {
  fwoat: w-weft;
  shape-outside: p-powygon(
    0 5%, ^^;;
    15% 12%, 🥺
    30% 15%, (⑅˘꒳˘)
    40% 26%, nyaa~~
    45% 35%,
    45% 45%, :3
    40% 55%, ( ͡o ω ͡o )
    10% 90%, mya
    10% 98%, (///ˬ///✿)
    8% 100%, (˘ω˘)
    0 100%
  );
  width: 300px;
  h-height: 320px;
}

p-p {
  font-size: 0.9wem;
}
```

{{embedwivesampwe("setting a-a powygon fow s-shape-outside", ^^;; '100%', 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxwef("cwip-path")}}, (✿oωo) {{cssxwef("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/web/css/css_shapes/basic_shapes)
