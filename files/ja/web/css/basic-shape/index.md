---
title: <basic-shape>
slug: Web/CSS/basic-shape
---

{{CSSRef}}

**`<basic-shape>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}、{{cssxref("offset-path")}} の各プロパティで使用されるシェイプを表します。

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## 構文

`<basic-shape>` データ型は、以下に挙げた基本シェイプ関数のうちの一つで定義します。

シェイプを作成するときは、 `<basic-shape>` の値を使用するそれぞれのプロパティで参照ボックスを定義します。シェイプの座標系は参照ボックスの左上隅が原点で、X 座標が右方向、Y 座標が下方向になります。パーセント値で表現された長さはすべて、参照ボックスの寸法を使用して算出されます。

既定の参照ボックスは `margin-box` であり、`shape-outside: circle(50%)` を使用して円を生成すると下記のようになります。形状はマージンボックスを参照して定義されています。

![Firefox DevTools の Shape Inspector で円を検査している図。ボックスモデルのさまざまな部分が強調表示されています。](shapes-reference-box.png)

### シェイプ関数

以下のシェイプに対応しています。`<basic-shape>` 値はすべて関数表記であり、[値定義構文](/ja/docs/Web/CSS/Value_definition_syntax)で定義されます。

- `{{cssxref("basic-shape/inset()","inset()")}}`

  - : 内部の長方形を定義します。

    ```css
    inset( <shape-arg>{1,4} [round <border-radius>]? )
    ```

    最初の 4 つの引数が与えられたときは、参照ボックス内部のそれぞれ上、右、下、左からみた、内部の矩形における各辺の位置を定義するオフセットを表します。これらの引数は margin 一括指定の構文に従い、1 つ、2 つ、4 つの値で全四辺を設定することができます。

    任意の [`<border-radius>`](/ja/docs/Web/CSS/border-radius) の引数は省略可能で、 border-radius 一括指定の構文を使用して、内部の矩形の角の丸みを定義します。

    内部の矩形で 2 つの距離の組み合わせが、その軸の長さを超えていた場合 (たとえば左右の距離がそれぞれ 75% に設定された場合など) は、何も領域を囲まないシェイプを定義します。この仕様書によれば、これは空の浮動領域を生成します。

- `{{cssxref("basic-shape/circle()","circle()")}}`

  - : 半径と位置を使用して円を定義します。

    ```css
    circle( [<shape-radius>]? [at <position>]? )
    ```

    引数 `<shape-radius>` は _r_、つまり円の半径を表します。負の数は無効です。ここでパーセント値を指定すると、参照ボックスの幅と高さを使用して `sqrt(width^2+height^2)/sqrt(2)` としての割合になります。

    引数 {{cssxref("&lt;position&gt;")}} は円の中心を定義します。省略時は既定で中央になります。

- `{{cssxref("basic-shape/ellipse()","ellipse()")}}`

  - : 2 つの半径と位置を使用して楕円を定義します。

    ```css
    ellipse( [<shape-radius>{2}]? [at <position>]? )
    ```

    引数 `<shape-radius>` は、rx と ry、つまり楕円の横半径と縦半径を、この順で表します。どちらの半径も負の値は無効です。ここでパーセント値を指定すると、参照ボックスの幅 (rx 値の場合) と高さ (ry 値の場合) に対する割合になります。

    引数 position は楕円の中心を定義します。省略時は既定で中央になります。

- `{{cssxref("basic-shape/polygon()","polygon()")}}`

  - : SVG の {{SVGAttr("fill-rule")}} と一連の頂点を使用して多角形を定義します。

    ```css
    polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
    ```

    `<fill-rule>` は多角形の内部を決めるために使用される塗りつぶし規則 ({{SVGAttr("fill-rule")}}) を表します。指定可能な値は `nonzero` と `evenodd` です。省略時の既定値は `nonzero` です。

    リスト内にある引数の組は、 _xi_ および _yi_ すなわち多角形の i 番目の頂点の X 座標と Y 座標を表します。

- `path()`

  - : SVG の {{SVGAttr("fill-rule")}} と SVG の[パス定義](/ja/docs/Web/SVG/Attribute/d)を使用してシェイプを定義します。

    ```css
    path( [<fill-rule>,]? <string>)
    ```

    省略可能な `<fill-rule>` は多角形の内部を決めるために使用される塗りつぶし規則 ({{SVGAttr("fill-rule")}}) を表します。指定可能な値は `nonzero` と `evenodd` です。省略時の既定値は `nonzero` です。

    必須の \<string> は、引用符で囲まれた [SVG パス](/ja/docs/Web/SVG/Attribute/d)です。

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
- [`<border-radius>`](/ja/docs/Web/CSS/border-radius) が `inset()` で使用されると、全 8 つの {{cssxref("length")}} またはパーセント値のリストとして展開され計算されます。

### 基本シェイプの補間

ある `<basic-shape>` と他のものの間でアニメーションが行われるとき、以下の規則が適用されます。シェイプ関数の中の値は単なるリストとして補間が行われます。リストの値は可能であれば {{cssxref("&lt;length&gt;")}}、 {{cssxref("&lt;percentage&gt;")}}、 {{cssxref("calc()")}} として補間されます。リストの値がこれらの型以外で同じであれば、それらの値は補間が行われます。

- どちらのシェイプも同じ参照ボックスを使う必要があります。
- 両方のシェイプが同じ型で、型が `ellipse()` または `circle()` で、半径に `closest-side` または `farthest-side` のキーワードが使われていない場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `inset()` の場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `polygon()` で、両方の多角形が同じ数の角を持っており、同じ `<fill-rule>` を使用している場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `path()` の場合、両方の文字列が同じ数でパスデータコマンドの型が同じ順序であれば、実数でそれぞれのパスデータコマンドが補間されます。
- それ以外の場合は補間が行われません。

## 例

<h3 id="Animated_polygon">アニメーションする多角形</h3>

この例では、[@keyframes](/ja/docs/Web/CSS/@keyframes) アットルールを使用して、2 つの多角形の間でクリップパスをアニメーションします。なお、どちらの多角形も同じ数の角を持つことが、この種のアニメーションが動作するために必要です。

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
- [CSS シェイプのパスを編集する — Firefox 開発者ツール](/ja/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes)
- [CSS シェイプの概要](/ja/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
