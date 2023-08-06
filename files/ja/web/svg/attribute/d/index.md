---
title: d
slug: Web/SVG/Attribute/d
---

{{SVGRef}}

**`d`** 属性は描かれるパスを定義します。

パスの定義は[パスコマンド](#Path_commands)のリストで、各コマンドはコマンド文字とコマンドへのパラメータを示す数値から構成されます。コマンドの詳細は以下になります。

３つの要素がこの属性を有します： {{SVGElement("path")}}, {{SVGElement("glyph")}}, {{SVGElement("missing-glyph")}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', '100%', 200)}}

## path

{{SVGElement('path')}}要素に対しては、`d`属性は、描かれるパスを定義するパスコマンドの並びを含む文字列です。

| 値                 | **[\<string>](/ja/docs/Web/SVG/Content_type#String)** |
| ------------------ | ----------------------------------------------------- |
| 初期値             | _none_                                                |
| アニメーション可否 | Yes                                                   |

## glyph

> **警告:** SVG2 において、{{SVGElement('glyph')}}は非推奨であり、用いるべきではありません。

{{SVGElement('glyph')}}要素に対しては、`d`属性はグリフのアウトライン形状を定義するパスコマンドの並びを含む文字列です。

| 値                 | **[\<string>](/ja/docs/Web/SVG/Content_type#String)** |
| ------------------ | ----------------------------------------------------- |
| 初期値             | _none_                                                |
| アニメーション可否 | Yes                                                   |

> **メモ:** 原点(座標`0`,`0`)は通常、コンテキストの*左上の角*です。しかし、{{SVGElement("glyph")}}要素は、それ自身の原点を文字ボックスの*左下*に持ちます。

## missing-glyph

> **警告:** SVG2 において、{{SVGElement('missing-glyph')}}は非推奨であり、用いるべきではありません。

{{SVGElement('missing-glyph')}}要素に対しては、`d`属性は、グリフのアウトライン形状を定義するパスコマンドの並びを含んだ文字列です。

| 値                 | **[\<string>](/ja/docs/Web/SVG/Content_type#String)** |
| ------------------ | ----------------------------------------------------- |
| 初期値             | _none_                                                |
| アニメーション可否 | Yes                                                   |

## パスコマンド

パスコマンドは、描かれるパスの定義を指定します。各コマンドは、コマンド文字とコマンドパラメータを示す数値で構成されます。

SVG では、6 つのタイプのパスコマンドを定義しており、全部で 20 個のコマンドがあります:

- MoveTo: `M`, `m`
- LineTo: `L`, `l`, `H`, `h`, `V`, `v`
- 3 次ベジエ曲線: `C`, `c`, `S`, `s`
- 2 次ベジエ曲線: `Q`, `q`, `T`, `t`
- 楕円円弧曲線: `A`, `a`
- ClosePath: `Z`, `z`

> **メモ:** **ノート:**コマンドは*ケースセンシティブ（大小文字の区別あり）*です. 大文字のコマンドは絶対座標を指定し、これに対して小文字のコマンドは現在位置からの相対座標を指定します。

コマンドへの引数として負値を指定することは常に可能です:

- 負の角度は反時計回りとなります;
- *絶対値*での負の*x*と*y*の値は反転座標と解釈されます;
- *相対値*での負の*x*の値は左へ移動,相対値での負の*y*の値は上方向へ移動します。

### MoveTo パスコマンド

*MoveTo*での指定は、筆記用具を持ち上げ他の位置で下ろす動作と考えられます―言い換えると、_現在位置_ (Po; {xo, yo})の移動です。Po と新しい*現在位置* (Pn; {xn, yn})との間には線は描かれません。

| コマンド | パラメータ    | 説明                                                                                                                                                                                                                                          |
| -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M        | (`x`, `y`)+   | *現在位置*を座標`x`,`y`へ移動します。後続する任意個の座標の組は暗黙的に絶対座標での LineTo(`L`)コマンドと解釈されます(_以下を参照_)。**形式:** Pn = {`x`, `y`}                                                                                |
| m        | (`dx`, `dy`)+ | *現在位置*を最後に把握されたパス位置からの`dx`を x 軸方向、`dy`を y 軸に沿った並進として移動します。後続する任意個の座標の組は暗黙的に相対座標での LineTo(`l`)コマンドとして解釈されます(_以下を参照_)。**形式:** Pn = {xo + `dx`, yo + `dy`} |

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 50,50 h 10
       m-20,10 h 10
       m-20,10 h 10
       m-20,10 h 10" />
</svg>
```

{{EmbedLiveSample('MoveTo_path_commands', '100%', 200)}}

### LineTo パスコマンド

*LineTo*は、_現在位置_ (Po; {xo, yo})から*終端位置* (Pn; {xn, yn})への直線を指定されたパラメータに基づいて描きます。_終端位置_(Pn)は、次のコマンドでの*現在位置* (Po′)となります。

| コマンド | パラメータ    | 説明                                                                                                                                                                                                                                                     |
| -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L        | (`x`, `y`)+   | *現在位置*から`x`,`y`で指定される*終端位置*へ直線を描きます。後続する任意個の座標の組は暗黙的に絶対座標での LineTo (`L`) コマンドと解釈されます。**形式:** Po′ = Pn = {`x`, `y`}                                                                         |
| l        | (`dx`, `dy`)+ | *現在位置*から、*現在位置*に対する x-軸方向に`dx`、y-軸方向に`dy`で表される*終端位置*への直線を描きます。後続する任意個の座標の組は、暗黙的に相対座標での LineTo (`l`) コマンドと解釈されます(_以下を参照_)。**形式:** Po′ = Pn = {xo + `dx`, yo + `dy`} |
| H        | `x`+          | *現在位置*から、パラメータ`x`と*現在位置の\_y 座標で指定される*終端座標\_までの水平線を描きます。後続する任意個の値は、暗黙的に絶対座標での水平線用の LineTo (`H`)コマンドと解釈されます。**形式:** Po′ = Pn = {`x`, yo}                                 |
| h        | `dx`+         | *現在位置*から、*現在位置*からの x-軸方向への`dx`の並進と*現在位置の\_y 座標で指定される*終端位置\_までの水平線を描きます。後続する任意個の値は、暗黙的に相対座標での水平線用の LineTo (`h`)コマンドと解釈されます。**形式:** Po′ = Pn = {xo + `dx`, yo} |
| V        | `y`+          | *現在位置*から、パラメータ`y`と*現在位置の\_x 座標で指定される*終端座標\_までの垂直線を描きます。後続する任意個の値は、暗黙的に絶対座標での垂直線用の LineTo (`V`)コマンドと解釈されます。**形式:** Po′ = Pn = {xo, `y`}                                 |
| v        | `dy`+         | *現在位置*から、*現在位置*からの y-軸方向への`dx`の並進と*現在位置の\_x 座標で指定される*終端位置\_までの垂直線を描きます。後続する任意個の値は、暗黙的に相対座標での垂直線用の LineTo (`v`)コマンドと解釈されます。**形式:** Po′ = Pn = {xo, yo + `dy`} |

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 絶対座標でのLineToコマンド -->
  <path
    fill="none"
    stroke="red"
    d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- 相対座標でのLineToコマンド -->
  <path
    fill="none"
    stroke="red"
    d="M 110,10
           l 80,80
           v -80
           h -40" />
</svg>
```

{{EmbedLiveSample('LineTo_path_commands', '100%', 200)}}

### 3 次ベジエ曲線

_3 次[ベジエ曲線](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A)_ は 4 点で定義される滑らかな曲線です:

- _開始位置 (現在位置)_
  - : (Po = {xo, yo})
- _終端位置_
  - : (Pn = {xn, yn})
- _開始制御点_
  - : (Pcs = {xcs, ycs})
    (曲線の開始点近くの曲率を制御します)
- _終端制御点_
  - : (Pce = {xce, yce})
    (曲線の終端近くの曲率を制御します)

描画後に、_終端位置_(Pn)は、次のコマンドに対する*現在位置* (Po′)となります。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">パラメータ</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>
        (<code>x1</code>,<code>y1</code>, <code>x2</code>,<code>y2</code>,
        <code>x</code>,<code>y</code>)+
      </td>
      <td>
        <p>
          <em>開始位置</em
          >から、<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの3次ベジエ曲線を描きます。<em>開始制御点</em>は<code>x1</code>,<code>y1</code>で指定され、<em>終端制御点</em>は<code>x2</code>,<code>y2</code>で指定されます。後続する任意個の3つ組の座標は、暗黙的な絶対座標での3次ベジエ曲線(<code>C</code>)コマンドへのパラメータと解釈されます。
        </p>
        <dl>
          <dt>形式:</dt>
          <dd>
            P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, <code>y</code>}
            ;<br />P<sub>cs</sub> = {<code>x1</code>, <code>y1</code>} ;<br />P<sub
              >ce</sub
            >
            = {<code>x2</code>, <code>y2</code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">c</th>
      <td>
        (<code>dx1</code>,<code>dy1</code>, <code>dx2</code>,<code>dy2</code>,
        <code>dx</code>,<code>dy</code>)+
      </td>
      <td>
        <p>
          <em>開始位置</em
          >から、<em>開始位置</em>からのx-軸方向に<code>dx</code>,y-軸方向に<code>dy</code>とした並進となる<em>終端位置</em>までの3次ベジエ曲線を描きます。<em>開始制御点</em>は、<em
            >開始点</em
          >
          (曲線の開始位置)をx-軸方向に<code>dx1</code>,y-軸方向に<code>dy1</code>と並進した点です。<em>終端制御点</em>は<em
            >現在位置</em
          >
          (曲線の開始位置)を、x-軸方向に<code>dx2</code>,y-軸方向に<code>dy2</code>と並進した点です。後続する任意個の3つ組の座標は、暗黙的に相対座標での3次ベジエ曲線
          (<code>c</code>) コマンドと解釈されます。
        </p>
        <dl>
          <dt>形式:</dt>
          <dd>
            P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>,
            y<sub>o</sub> + <code>dy</code>} ;<br />P<sub>cs</sub> = {x<sub
              >o</sub
            >
            + <code>dx1</code>, y<sub>o</sub> + <code>dy1</code>} ;<br />P<sub
              >ce</sub
            >
            = {x<sub>o</sub> + <code>dx2</code>, y<sub>o</sub> +
            <code>dy2</code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">S</th>
      <td>(<code>x2</code>,<code>y2</code>, <code>x</code>,<code>y</code>)+</td>
      <td>
        <em>開始位置</em
        >から、<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの滑らかな3次ベジエ曲線を描きます。<em>終端制御点</em>は、<code>x2</code>,<code>y2</code>で指定されます。<em>開始制御点</em>は、直前の曲線コマンドの<em>終端制御点</em>が鏡映されます。もし直前のコマンドが3次ベジエ曲線でない場合は、<em>開始制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に絶対座標での滑らかな3次ベジエ曲線(<code>S</code>)コマンドへのパラメータと解釈されます。
      </td>
    </tr>
    <tr>
      <th scope="row">s</th>
      <td>
        (<code>dx2</code>,<code>dy2</code>, <code>dx</code>,<code>dy</code>)+
      </td>
      <td>
        <em>開始位置</em
        >から、<em>現在位置</em>からのx-軸方向への<code>dx</code>,y-軸方向への<code>dy</code>への並進で表される<em>終端位置</em>までの滑らかな3次ベジエ曲線を描きます。<em>終端制御点</em>は、<em>現在位置</em>(曲線の開始点)をx-軸方向への<code>dx2</code>とy-軸方向への<code>dy2</code>だけ並進させた点です。<em>開始制御点</em>は、直前の曲線コマンドの<em>終端位置</em>が鏡映されます。もし直前のコマンドが3次ベジエ曲線でない場合は、<em>開始制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に相対座標での滑らかな3次ベジエ曲線
        (<code>s</code>) コマンドと解釈されます。
      </td>
    </tr>
  </tbody>
</table>

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- 絶対座標での3次ベジエ曲線 -->
  <path
    fill="none"
    stroke="red"
    d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- 相対座標での3次ベジエ曲線 -->
  <path
    fill="none"
    stroke="red"
    d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- 曲線の頂点と制御点の明示 -->
  <g id="ControlPoints">
    <!-- 1つ目の3次コマンドへの制御点 -->
    <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
    <circle cx="30" cy="90" r="1.5" />

    <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
    <circle cx="25" cy="10" r="1.5" />

    <!-- 2つめの円滑化制御点 (1つ目は暗黙的) -->
    <line
      x1="50"
      y1="10"
      x2="75"
      y2="10"
      stroke="lightgrey"
      stroke-dasharray="2" />
    <circle cx="75" cy="10" r="1.5" fill="lightgrey" />

    <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
    <circle cx="70" cy="90" r="1.5" />

    <!-- 曲線上の頂点 -->
    <circle cx="10" cy="90" r="1.5" />
    <circle cx="50" cy="10" r="1.5" />
    <circle cx="90" cy="90" r="1.5" />
  </g>
  <use xlink:href="#ControlPoints" x="100" />
</svg>
```

{{EmbedLiveSample('Cubic_Bezier_Curve', '100%', 200)}}

### 2 次ベジエ曲線

_2 次[ベジエ曲線](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A)_ は 3 点で定義される滑らかな曲線です:

- _開始座標(現在位置)_
  - : Po = {xo, yo}
- _終端座標_
  - : Pn = {xn, yn}
- _制御点_
  - : Pc = {xc, yc}
    (曲率を制御します)

描画後に、_終端位置_(Pn)は、次のコマンドに対する*現在位置*(Po′)となります。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">パラメータ</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">Q</th>
      <td>(<code>x1</code>,<code>y1</code>, <code>x</code>,<code>y</code>)+</td>
      <td>
        <p>
          <em>開始位置</em
          >から<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの2次ベジエ曲線を描きます。<em>制御点</em>は<code>x1</code>,<code>y1</code>で指定されます。後続する任意個の座標の組は、暗黙的に絶対座標での4次ベジエ曲線
          (<code>Q</code>) コマンドへのパラメータと解釈されます。
        </p>
        <dl>
          <dt><strong>形式:</strong></dt>
          <dd>
            P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, <code>y</code>}
            ;<br />P<sub>c</sub> = {<code>x1</code>, <code>y1</code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">q</th>
      <td>
        (<code>dx1</code>,<code>dy1</code>, <code>dx</code>,<code>dy</code>)+
      </td>
      <td>
        <p>
          <em>開始位置</em
          >から、<em>開始位置</em>からのx-軸方向に<code>dx</code>,y-軸方向に<code>dy</code>とした並進となる<em>終端位置</em>までの2次ベジエ曲線を描きます。<em>制御点</em>は、<em
            >開始点</em
          >
          (曲線の開始位置)をx-軸方向に<code>dx1</code>,y-軸方向に<code>dy1</code>と並進した点です。後続する任意個の座標は、暗黙的に相対座標での2次ベジエ曲線
          (<code>q</code>) コマンドへのパラメータと解釈されます。
        </p>
        <dl>
          <dt>形式:</dt>
          <dd>
            P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>,
            y<sub>o</sub> + <code>dy</code>} ;<br />P<sub>c</sub> = {x<sub
              >o</sub
            >
            + <code>dx1</code>, y<sub>o</sub> + <code>dy1</code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">T</th>
      <td>(<code>x</code>,<code>y</code>)+</td>
      <td>
        <p>
          <em>開始位置</em
          >から<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの滑らかな2次ベジエ曲線を描きます。<em>制御点</em>は、直前の曲線コマンドの<em>終端制御点</em>が反映されます。もし直前のコマンドが2次ベジエ曲線でない場合は、<em>制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に絶対座標での滑らかな2次ベジエ曲線(<code>T</code>)コマンドへのパラメータと解釈されます。
        </p>
        <dl>
          <dt>形式:</dt>
          <dd>
            P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, <code>y</code>}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">t</th>
      <td>(<code>dx</code>,<code>dy</code>)+</td>
      <td>
        <p>
          <em>開始位置</em
          >から、<em>現在位置</em>からのx-軸方向への<code>dx</code>,y-軸方向への<code>dy</code>への並進で表される<em>終端位置</em>までの滑らかな3次ベジエ曲線を描きます。<em>制御点</em>は、直前の曲線コマンドの<em>制御点</em>が反映されます。もし直前のコマンドが2次ベジエ曲線でない場合は、<em>制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に相対座標での滑らかな2次ベジエ曲線
          (<code>t</code>) コマンドへのパラメータと解釈されます。
        </p>
        <dl>
          <dt>形式:</dt>
          <dd>
            P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>,
            y<sub>o</sub> + <code>dy</code>}
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- 暗黙的な繰り返しによる2次ベジエ曲線 -->
  <path
    fill="none"
    stroke="red"
    d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" />

  <!-- 曲線の頂点と制御点の明示 -->
  <g>
    <polyline points="10,50 25,25 40,50" stroke="rgba(0,0,0,.2)" fill="none" />
    <circle cx="25" cy="25" r="1.5" />

    <!-- 曲線上の頂点 -->
    <circle cx="10" cy="50" r="1.5" />
    <circle cx="40" cy="50" r="1.5" />

    <g id="SmoothQuadraticDown">
      <polyline
        points="40,50 55,75 70,50"
        stroke="rgba(0,0,0,.2)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
      <circle cx="70" cy="50" r="1.5" />
    </g>

    <g id="SmoothQuadraticUp">
      <polyline
        points="70,50 85,25 100,50"
        stroke="rgba(0,0,0,.2)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
      <circle cx="100" cy="50" r="1.5" />
    </g>

    <use xlink:href="#SmoothQuadraticDown" x="60" />
    <use xlink:href="#SmoothQuadraticUp" x="60" />
    <use xlink:href="#SmoothQuadraticDown" x="120" />
  </g>
</svg>
```

{{EmbedLiveSample('Quadratic_Bezier_Curve', '100%', 200)}}

### 楕円円弧曲線

*楕円円弧曲線*は楕円の一部として定義される曲線です。ベジエ曲線よりも楕円円弧曲線を用いるほうが、高度な正則曲線の描画が容易になることが多くあります。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">パラメータ</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>
        (<code>rx</code> <code>ry</code> <code>角度</code>
        <code>大円弧フラグ</code> <code>掃引フラグ</code> <code>x</code>
        <code>y</code>)+
      </td>
      <td>
        <p>
          現在位置から<code>x</code>,<code>y</code>座標へ円弧を描きます。楕円の中心はコマンドへの他のパラメータに基づいて自動的に決定されます。:
        </p>
        <ul>
          <li><code>rx</code>と<code>ry</code>は楕円の半径です;</li>
          <li><code>角度</code>はx-軸に対する楕円の角度（度単位）です;</li>
          <li>
            <code>大円弧フラグ</code
            >と<code>掃引フラグ</code>は、他のパラメータによって描画可能な4つの可能な円弧のうち、どの円弧を描くかを選択可能にします。
            <ul>
              <li>
                <code>大円弧フラグ</code>では大きい円弧 (<strong>1</strong>)
                を描くか、小さい円弧 (<strong>0</strong>) を描くかを選択し,
              </li>
              <li>
                <code>掃引フラグ</code>では時計回りの円弧 (<strong>1</strong>)
                を描くか、反時計周りの円弧 (<strong>0</strong>)
                を描くかを選択します。
              </li>
            </ul>
          </li>
        </ul>
        座標 <code>x</code>,<code>y</code>
        は、次のコマンドに対する新しい現在位置となります。すべての後続するパラメータの組は、暗黙的に絶対座標での円弧曲線
        (<code>A</code>) コマンドに対するものと解釈されます。
      </td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>
        (<code>rx</code> <code>ry</code> <code>角度</code>
        <code>大円弧フラグflag</code> <code>掃引フラグ</code> <code>dx</code>
        <code>dy</code>)+
      </td>
      <td>
        <p>
          現在位置から、現在位置からのx-軸方向への<code>dx</code>とy-軸方向への<code>dy</code>への並進で指定される点へ円弧を描きます。楕円の中心はコマンドへの他のパラメータに基づいて自動的に決定されます。:
        </p>
        <ul>
          <li><code>rx</code>と<code>ry</code>は楕円の半径です;</li>
          <li><code>角度</code>はx-軸に対する楕円の角度（度単位）です;</li>
          <li>
            <code>大円弧フラグ</code
            >と<code>掃引フラグ</code>は、他のパラメータによって描画可能な4つの可能な円弧のうち、どの円弧を描くかを選択可能にします。
            <ul>
              <li>
                <code>大円弧フラグ</code>では大きい円弧 (<strong>1</strong>)
                を描くか、小さい円弧 (<strong>0</strong>) を描くかを選択し,
              </li>
              <li>
                <code>掃引フラグ</code>では時計回りの円弧 (<strong>1</strong>)
                を描くか、反時計周りの円弧 (<strong>0</strong>)
                を描くかを選択します。
              </li>
            </ul>
          </li>
        </ul>
        <code>dx</code
        >と<code>dy</code>で並進された座標<code>X</code>,<code>Y</code>は、次のコマンドに対する新しい現在位置となります。すべての後続するパラメータの組は、暗黙的に相対座標での円弧曲線
        (<code>a</code>) コマンドに対するものと解釈されます。
      </td>
    </tr>
  </tbody>
</table>

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <!-- 円弧への２つのフラグの効果により各円弧が描画される -->
  <path
    fill="none"
    stroke="red"
    d="M 6,10
           A 6 4 10 1 0 14,10" />

  <path
    fill="none"
    stroke="lime"
    d="M 6,10
           A 6 4 10 1 1 14,10" />

  <path
    fill="none"
    stroke="purple"
    d="M 6,10
           A 6 4 10 0 1 14,10" />

  <path
    fill="none"
    stroke="pink"
    d="M 6,10
           A 6 4 10 0 0 14,10" />
</svg>
```

{{EmbedLiveSample('Elliptical_Arc_Curve', '100%', 200)}}

### ClosePath

*ClosePath*は、*現在位置*からパスの開始位置までの直線描画を指定します。

| コマンド | パラメータ | 説明                                                                                                                                     |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Z, z     |            | パスの最終位置とその初期位置とを接続することで、現在のサブパスを閉じます。もし、2 つの点が異なる座標の場合は、2 点間に直線が描かれます。 |

> **メモ:** *ClosePath*によって生じる形状は、他のコマンドを用いて初期位置へ線を描いて閉じた場合とは異なる場合があります。これは、描線の終端が互いに接続されるためです ({{SVGAttr('stroke-linejoin')}} 設定)を参照のこと。 単に同じ座標に配置されるわけではありません。

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 30 11" xmlns="http://www.w3.org/2000/svg">
  <!--
  初期位置と異なる終端位置による
  パスで描かれる開いた形状
  -->
  <path
    stroke="red"
    d="M 5,1
           l -4,8 8,0" />

  <!--
  初期位置と一致する終端位置による
  パスで描かれる開いた形状
  -->
  <path
    stroke="red"
    d="M 15,1
           l -4,8 8,0 -4,-8" />

  <!--
  初期位置と異なる終端位置による
  パスで描かれる閉じた形状
  -->
  <path
    stroke="red"
    d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```

{{EmbedLiveSample('ClosePath', '100%', 200)}}

## 仕様

{{Specifications}}
