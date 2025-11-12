---
title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
original_slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 511208efe18c7a042bad9859dc797e944a1c16ed
---

**`<basic-shape>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}、{{cssxref("offset-path")}} の各プロパティで使用されるシェイプを表します。

{{InteractiveExample("CSS デモ: &lt;basic-shape&gt;")}}

```css interactive-example-choice
clip-path: inset(22% 12% 15px 35px);
```

```css interactive-example-choice
clip-path: circle(6rem at 12rem 8rem);
```

```css interactive-example-choice
clip-path: ellipse(115px 55px at 50% 40%);
```

```css interactive-example-choice
clip-path: polygon(
  50% 2.4%,
  34.5% 33.8%,
  0% 38.8%,
  25% 63.1%,
  19.1% 97.6%,
  50% 81.3%,
  80.9% 97.6%,
  75% 63.1%,
  100% 38.8%,
  65.5% 33.8%
);
```

```css interactive-example-choice
clip-path: path("M 50,245 A 160,160 0,0,1 360,120 z");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 構文

`<basic-shape>` データ型は、以下に挙げた基本シェイプ関数のうちの一つで定義します。

シェイプを作成するときは、 `<basic-shape>` の値を使用するそれぞれのプロパティで参照ボックスを定義します。シェイプの座標系は参照ボックスの左上隅が原点で、X 座標が右方向、Y 座標が下方向になります。パーセント値で表現された長さはすべて、参照ボックスの寸法を使用して算出されます。

既定の参照ボックスは `margin-box` であり、`shape-outside: circle(50%)` を使用して円を生成すると下記のようになります。形状はマージンボックスを参照して定義されています。

![Firefox DevTools の Shape Inspector で円を検査している図。ボックスモデルのさまざまな部分が強調表示されています。](shapes-reference-box.png)

### シェイプ関数

以下のシェイプに対応しています。`<basic-shape>` 値はすべて関数表記であり、[値定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)で定義されます。

- `{{cssxref("basic-shape/inset","inset()")}}`
  - : 内部の長方形を定義します。

    ```css
    inset( <length-percentage>{1,4} [ round <`border-radius`> ]? )
    ```

    最初の 4 つの引数が与えられたときは、参照ボックス内部のそれぞれ上、右、下、左からみた、内部の矩形における各辺の位置を定義するオフセットを表します。これらの引数は {{cssxref("margin")}} 一括指定の構文に従い、1 つ、2 つ、3 つ、4 つの値で全四辺を設定することができます。

    オプションの `round <'border-radius'>` 引数は、内部の矩形の角の丸みを、 CSS の [`border-radius`](/ja/docs/Web/CSS/Reference/Properties/border-radius) 一括指定プロパティと同じ構文を使用して定義します。

    内部の矩形で 2 つの距離の組み合わせが、その軸の長さを超えていた場合（たとえば左右の距離がそれぞれ 75% に設定された場合など）は、何も領域を囲まないシェイプを定義します。この仕様書によれば、これは空の浮動領域を生成します。

- `{{cssxref("basic-shape/rect","rect()")}}`
  - : 参照ボックスの上端と左端から指定した距離を用いて矩形を定義します。

    ```css
    rect( [ <length-percentage> | auto ]{4} [ round <`border-radius`> ]? )
    ```

    矩形を作成するためには 4 つの値を指定します。 4 つの値はそれぞれ `<length>` か `<percentage>` かキーワード `auto` です。 `rect()` 関数を使用する場合、矩形の幅と高さは定義しません。矩形の寸法は、参照ボックスのサイズとオフセット値に依存します。

    オプションの `round <'border-radius'>` 引数は、内部の矩形の角の丸みを、 CSS の [`border-radius`](/ja/docs/Web/CSS/Reference/Properties/border-radius) 一括指定プロパティと同じ構文を使用して定義します。

- `{{cssxref("basic-shape/xywh","xywh()")}}`
  - : 参照ボックスの上端と左端からの指定された距離と、指定された矩形の幅と高さを用いて矩形を定義します。

    ```css
    xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <`border-radius`> ]? )
    ```

    オプションの `round <'border-radius'>` 引数は、内部の矩形の角の丸みを、 [`border-radius`](/ja/docs/Web/CSS/Reference/Properties/border-radius) 一括指定の構文を使用して定義します。

- `{{cssxref("basic-shape/circle","circle()")}}`
  - : 半径と位置を使用して円を定義します。

    ```css
    circle( <shape-radius>? [ at <position> ]? )
    ```

    引数 `<shape-radius>` は _r_、つまり円の半径を表します。負の数は無効です。ここでパーセント値を指定すると、参照ボックスの幅と高さを使用して `sqrt(width^2+height^2)/sqrt(2)` としての割合になります。

    引数 {{cssxref("&lt;position&gt;")}} は円の中心を定義します。省略時は既定で中央になります。

- `{{cssxref("basic-shape/ellipse","ellipse()")}}`
  - : 2 つの半径と位置を使用して楕円を定義します。

    ```css
    ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
    ```

    引数 `<shape-radius>` は、rx と ry、つまり楕円の横半径と縦半径を、この順で表します。どちらの半径も負の値は無効です。ここでパーセント値を指定すると、参照ボックスの幅 (rx 値の場合) と高さ (ry 値の場合) に対する割合になります。

    引数 position は楕円の中心を定義します。省略時は既定で中央になります。

- `{{cssxref("basic-shape/polygon","polygon()")}}`
  - : SVG の {{SVGAttr("fill-rule")}} と一連の頂点を使用して多角形を定義します。

    ```css
    polygon( <fill-rule>? [ <shape-arg> <shape-arg> ]# )
    ```

    `<fill-rule>` は多角形の内部を決めるために使用される塗りつぶし規則 ({{SVGAttr("fill-rule")}}) を表します。指定可能な値は `nonzero` と `evenodd` です。省略時の既定値は `nonzero` です。

    リスト内にある引数の組は、 _xi_ および _yi_ すなわち多角形の i 番目の頂点の X 座標と Y 座標を表します。

- `{{cssxref("path","path()")}}`
  - : SVG の {{SVGAttr("fill-rule")}} と SVG の[パス定義](/ja/docs/Web/SVG/Reference/Attribute/d)を使用してシェイプを定義します。

    ```css
    path( [ <fill-rule>, ]? <string> )
    ```

    省略可能な `<fill-rule>` は多角形の内部を決めるために使用される塗りつぶし規則 ({{SVGAttr("fill-rule")}}) を表します。指定可能な値は `nonzero` と `evenodd` です。省略時の既定値は `nonzero` です。

    必須の \<string> は、引用符で囲まれた [SVG パス](/ja/docs/Web/SVG/Reference/Attribute/d)です。

上記で定義されていない引数は、以下のように定義されています。

```css
<shape-arg> = <length> | <percentage>
<shape-radius> = <length> | <percentage> | closest-side | farthest-side
```

円や楕円の半径を定義します。省略時の既定値は `closest-side` です。

`closest-side` はシェイプの中心から参照ボックスの最も近い辺までの距離を使用します。円の場合、これはあらゆる方向で最も近い辺です。楕円の場合、その軸で最も近い辺です。

`farthest-side` はシェイプの中心から参照ボックスの最も遠い辺までの距離を使用します。円の場合、これはあらゆる方向で最も遠い辺です。楕円の場合、その軸で最も遠い辺です。

## 解説

### 基本シェイプの計算値

`<basic-shape>` 関数の中の値は、以下の例外を除けば、規定通りに計算されます。

- 省略された値は既定値として含められ計算されます。
- {{cssxref("&lt;position&gt;")}} 値が `circle()` または `ellipse()` で使用されると、それぞれを絶対的な長さやパーセント値で指定し、左上を原点とした (水平と垂直) オフセットの組として計算されます。
- [`<border-radius>`](/ja/docs/Web/CSS/Reference/Properties/border-radius) が `inset()` で使用されると、全 8 つの {{cssxref("length")}} またはパーセント値のリストとして展開され計算されます。

### 基本シェイプの補間

ある `<basic-shape>` と他のものの間でアニメーションが行われるとき、以下の規則が適用されます。シェイプ関数の中の値は単なるリストとして{{Glossary("interpolation", "補間")}}が行われます。リストの値は可能であれば {{cssxref("&lt;length&gt;")}}、 {{cssxref("&lt;percentage&gt;")}}、 {{cssxref("calc", "calc()")}} として補間されます。リストの値がこれらの型以外で同じであれば、それらの値は補間が行われます。

- どちらのシェイプも同じ参照ボックスを使う必要があります。
- 両方のシェイプが同じ型で、型が `ellipse()` または `circle()` で、半径に `closest-side` または `farthest-side` のキーワードが使われていない場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `inset()` の場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `polygon()` で、両方の多角形が同じ数の角を持っており、同じ `<fill-rule>` を使用している場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `path()` の場合、両方の文字列が同じ数でパスデータコマンドの型が同じ順序であれば、実数でそれぞれのパスデータコマンドが補間されます。
- それ以外の場合は補間が行われません。

## 例

### アニメーションする多角形

この例では、[@keyframes](/ja/docs/Web/CSS/Reference/At-rules/@keyframes) アットルールを使用して、2 つの多角形の間でクリップパスをアニメーションします。なお、どちらの多角形も同じ数の角を持つことが、この種のアニメーションが動作するために必要です。

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### 結果

{{EmbedLiveSample('Animated_polygon','340', '340')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
- [CSS シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS シェイプのパスを編集する — Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
