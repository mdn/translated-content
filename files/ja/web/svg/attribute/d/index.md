---
title: d
slug: Web/SVG/Attribute/d
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

**`d`** 属性は描かれるパスを定義します。

パスの定義は[パスコマンド](#パスコマンド)のリストで、各コマンドはコマンド文字とコマンドへの引数を示す数値から構成されます。コマンドの詳細は以下になります。

この属性を使用できるのは、SVG 要素のうち [`<path>`](#path), [`<glyph>`](#glyph), [`<missing-glyph>`](#missing-glyph) です。

`d` はプレゼンテーション属性のため、[CSS プロパティとして使用](#css_%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%A8%E3%81%97%E3%81%A6_d_%E3%82%92%E4%BD%BF%E7%94%A8)することもできます。

## 例

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

{{SVGElement('path')}} 要素に対しては、`d` 属性は、描かれるパスを定義するパスコマンドの並びを含む文字列です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong><a href="/ja/docs/Web/CSS/string">&#x3C;string></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## glyph

> [!WARNING]
> SVG2 において、{{SVGElement('glyph')}} は非推奨であり、用いるべきではありません。

{{SVGElement('glyph')}} 要素に対しては、`d` 属性はグリフのアウトライン形状を定義するパスコマンドの並びを含む文字列です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong><a href="/ja/docs/Web/CSS/string">&#x3C;string></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 原点 (座標`0`, `0`) は通常、コンテキストの _左上の角_ です。しかし、{{SVGElement("glyph")}} 要素は、それ自身の原点を文字ボックスの _左下_ に持ちます。

## missing-glyph

> [!WARNING]
> SVG2 において、{{SVGElement('missing-glyph')}} は非推奨であり、用いるべきではありません。

{{SVGElement('missing-glyph')}} 要素に対しては、`d` 属性は、グリフのアウトライン形状を定義するパスコマンドの並びを含んだ文字列です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong><a href="/ja/docs/Web/CSS/string">&#x3C;string></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## CSS プロパティとして d を使用

`d` はプレゼンテーション属性であるため、CSS を使用して変更することもできます。
このプロパティは、[path()](/ja/docs/Web/CSS/basic-shape/path) または `none` のいずれかをとります。

以下の例は、要素の上にマウスを置くと新しいパスを適用する方法を示しています。
新しいパスは古いパスと同じですが、ハートを横切る線が追加されます。

```css
html,
body,
svg {
  height: 100%;
}

/* このパスはホバー時に表示されます*/
#svg_css_ex1:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
}
```

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z
       " />
</svg>
```

{{EmbedLiveSample('Using d as a CSS Property', '100%', 200)}}

## パスコマンド

パスコマンドは、描かれるパスの定義を指定します。各コマンドは、コマンド文字とコマンド引数を示す数値で構成されます。

SVG では、6 種類のパスコマンドを定義しており、全部で 20 個のコマンドがあります。

- [MoveTo](#moveto_パスコマンド): `M`, `m`
- [LineTo](#lineto_パスコマンド): `L`, `l`, `H`, `h`, `V`, `v`
- [3 次ベジェ曲線](#3_次ベジェ曲線): `C`, `c`, `S`, `s`
- [2 次ベジェ曲線](#2_次ベジェ曲線): `Q`, `q`, `T`, `t`
- [楕円円弧曲線](#楕円円弧曲線): `A`, `a`
- [ClosePath](#closepath): `Z`, `z`

> [!NOTE]
> コマンドは、大文字小文字を区別します。大文字のコマンドは絶対座標を指定し、これに対して小文字のコマンドは現在位置からの相対座標を指定します。

コマンドへの引数として負値を指定することは常に可能です。

- 負の角度は反時計回りとなります。
- _絶対値_ での負の _x_ と _y_ の値は反転座標と解釈されます。
- _相対値_ での負の _x_ の値は左へ移動、相対値での負の _y_ の値は上方向へ移動します。

### MoveTo パスコマンド

_MoveTo_ での指定は、筆記用具を持ち上げ他の位置で下ろす動作と考えられます。言い換えると、_現在位置_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) の移動です。_P<sub>o</sub>_ と新しい _現在位置_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}) との間には線は描かれません。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">引数</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">M</th>
      <td>
        (<code><var>x</var></code
        >, <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          <em>現在位置</em> を座標
          <code><var>x</var></code
          >,<code><var>y</var></code
          > へ移動します。後続する任意数の座標の組は暗黙的に絶対座標での LineTo(<code>L</code>) コマンドと解釈されます(<em
            >以下を参照</em
          >)。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>n</sub></var> = {<code
            ><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">m</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          <em>現在位置</em> を、最後に把握されたパス位置から X 軸方向に <code><var>dx</var></code>、Y 軸方向に <code><var>dy</var></code> だけずらします。後続する任意数の座標の組は暗黙的に相対座標での LineTo(<code>l</code>) コマンドとして解釈されます(<em>以下を参照</em>)。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>n</sub></var> = {<var
            >x<sub>o</sub></var
          >
          + <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
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

_LineTo_ は、_現在位置_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) から _終了点_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}) への直線を指定された引数に基づいて描きます。_終了点_ (_P<sub>n</sub>_) は、次のコマンドでの _現在位置_ (_P<sub>o</sub>′_) となります。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">引数</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td>(<code><var>x</var></code>, <code><var>y</var></code>)+</td>
      <td>
        <p>
          <em>現在位置</em> から <code><var>x</var></code>,<code><var>y</var></code> で指定される <em>終了点</em> へ直線を描きます。後続する任意の数の座標の組は、暗黙的に絶対座標での LineTo (<code>L</code>) コマンドと解釈されます。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">l</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          <em>現在位置</em> から、<em>現在位置</em> を X 軸方向に <code><var>dx</var></code>、Y 軸方向に <code><var>dy</var></code> だけ移動した <em>終了点</em> への直線を描きます。後続する任意数の座標の組は、暗黙的に相対座標での LineTo (<code>l</code>) コマンドと解釈されます（<em>以下を参照</em>）。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">H</th>
      <td>
        <code><var>x</var></code
        >+
      </td>
      <td>
        <p>
          <em>現在位置</em>から、引数 <code><var>x</var></code> と<em>現在位置</em>の <code><var>y</var></code> 座標で指定される<em>終了点</em>までの水平線を描きます。後続する任意数の値は、暗黙的に絶対座標での水平線用の LineTo (<code>H</code>) コマンドと解釈されます。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">h</th>
      <td>
        <code><var>dx</var></code
        >+
      </td>
      <td>
        <p>
          現在位置から、X 軸方向へ <em>現在位置</em>から <code><var>dx</var></code> だけ移動し、<em>現在位置</em>の <code><var>y</var></code> 座標の位置まで移動した終了点までの水平線を描きます。後続する任意数の値は、暗黙的に相対座標での水平線用の LineTo (<code>h</code>) コマンドと解釈されます。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">V</th>
      <td>
        <code><var>y</var></code
        >+
      </td>
      <td>
        <p>
          <em>現在位置</em>から、引数 <code><var>y</var></code> と<em>現在位置</em>の <code><var>x</var></code> 座標で指定される<em>終了点</em>までの垂直線を描きます。後続する任意数の値は、暗黙的に絶対座標での垂直線用の LineTo (<code>V</code>) コマンドと解釈されます。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">v</th>
      <td>
        <code><var>dy</var></code
        >+
      </td>
      <td>
        <p>
          <em>現在位置</em>から、<em>現在位置</em>からの Y 軸方向へ <code><var>dy</var></code> だけ移動し、<em>現在位置</em>の <code><var>x</var></code> 座標で指定される<em>終了点</em>までの垂直線を描きます。後続する任意数の値は、暗黙的に相対座標での垂直線用の LineTo (<code>v</code>) コマンドと解釈されます。
        </p>
        <p>
          <strong>式:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
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
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 絶対座標での LineTo コマンド -->
  <path
    fill="none"
    stroke="red"
    d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- 相対座標での LineTo コマンド -->
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

### 3 次ベジェ曲線

_3 次[ベジェ曲線](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A)_ は 4 点で定義される滑らかな曲線です。

- 開始点 (現在位置)
  - : (_P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_})
- 終了点
  - : (_P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_})
- 開始制御点
  - : (_P<sub>cs</sub>_ = {_x<sub>cs</sub>_, _y<sub>cs</sub>_})
    (曲線の開始点付近の曲率を制御します)
- 終端制御点
  - : (_P<sub>ce</sub>_ = {_x<sub>ce</sub>_, _y<sub>ce</sub>_})
    (曲線の終了点付近の曲率を制御します)

描画後に、_終了点_ (_P<sub>n</sub>_) は、次のコマンドに対する _現在位置_ (_P<sub>o</sub>′_) となります。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">引数</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          開始点から <code><var>x</var></code>,<code><var>y</var></code> で指定した終了点までの 3 次ベジェ曲線を描画します。開始制御点は <code><var>x1</var></code>,<code><var>y1</var></code> で指定し、終端制御点は <code><var>x2</var></code>,<code><var>y2</var></code> で指定します。それに続く座標対の 3 つ組は、暗黙的な絶対 3 次ベジェ曲線 (<code>C</code>) コマンドの引数として解釈されます。
        </p>
        <dl>
          <dt>式:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<code><var>x2</var></code
            >, <code><var>y2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">c</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          <em>開始点</em
          >から、<em>開始点</em>からの X 軸方向に <code><var>dx</var></code>, Y 軸方向に <code><var>dy</var></code> だけ移動した<em>終了点</em>までの 3 次ベジェ曲線を描きます。<em>開始制御点</em>は、<em>開始点</em>（曲線の開始点）を X 軸方向に <code><var>dx1</var></code>, Y 軸方向に <code><var>dy1</var></code> だけ移動した点です。<em>終端制御点</em>は<em>現在位置</em>（曲線の開始点）を、X 軸方向に <code><var>dx2</var></code>, Y 軸方向に <code><var>dy2</var></code> だけ移動した点です。後続する任意数の 3 つ組の座標は、暗黙的に相対座標での 3 次ベジェ曲線 (<code>c</code>) コマンドと解釈されます。
        </p>
        <dl>
          <dt>式:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx2</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">S</th>
      <td>
        (<code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <em>開始点</em
        >から、<code><var>x</var></code>,<code><var>y</var></code> で指定される<em>終了点</em>までの滑らかな 3 次ベジェ曲線を描きます。<em>終端制御点</em>は、<code>x2</code>,<code>y2</code> で指定されます。<em>開始制御点</em>は、直前の曲線コマンドの<em>終端制御点</em>が鏡映されます。もし直前のコマンドが 3 次ベジェ曲線でない場合は、<em>開始制御点</em>は曲線の開始点(<em>現在座標</em>)と同一となります。後続する任意数の座標の組は、暗黙的に絶対座標での滑らかな 3 次ベジェ曲線 (<code>S</code>) コマンドへの引数と解釈されます。
      </td>
    </tr>
    <tr>
      <th scope="row">s</th>
      <td>
        (<code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <em>開始点</em>から、<em>現在位置</em>からのX 軸方向への <code><var>dx</var></code>, Y 軸方向への <code><var>dy</var></code> だけ移動した<em>終了点</em>までの滑らかな 3 次ベジェ曲線を描きます。<em>終端制御点</em>は、<em>現在位置</em>(曲線の開始点)をX 軸方向への <code><var>dx2</var></code> と Y 軸方向への <code><var>dy2</var></code> だけ移動した点です。<em>開始制御点</em>は、直前の曲線コマンドの<em>終了点</em>が鏡映されます。もし直前のコマンドが 3 次ベジェ曲線でない場合は、<em>開始制御点</em>は曲線の開始点（<em>現在座標</em>）と同一となります。後続する任意数の座標の組は、暗黙的に相対座標での滑らかな 3 次ベジェ曲線 (<code>s</code>) コマンドと解釈されます。
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
  <!-- 絶対座標での 3 次ベジェ曲線 -->
  <path
    fill="none"
    stroke="red"
    d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- 相対座標での 3 次ベジェ曲線 -->
  <path
    fill="none"
    stroke="red"
    d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- 曲線の頂点と制御点の明示 -->
  <g id="ControlPoints">
    <!-- 1つ目の 3 次コマンドへの制御点 -->
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
  <use href="#ControlPoints" x="100" />
</svg>
```

{{EmbedLiveSample('Cubic_Bézier_Curve', '100%', 200)}}

### 2 次ベジェ曲線

_2 次[ベジェ曲線](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A)_ は 3 点で定義される滑らかな曲線です。

- 開始点（現在位置）
  - : _P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_}
- 終了点
  - : _P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_}
- 制御点
  - : _P<sub>c</sub>_ = {_x<sub>c</sub>_, _y<sub>c</sub>_}
    (曲率を制御します)

描画後に、終了点 (_P<sub>n</sub>_) ガ次のコマンドに対する現在位置 (_P<sub>o</sub>′_)となります。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">引数</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">Q</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          <em>開始点</em>から <code><var>x</var></code>,<code><var>y</var></code> で指定される<em>終了点</em>までの 2 次ベジェ曲線を描きます。<em>制御点</em>は<code><var>x1</var></code>,<code><var>y1</var></code>で指定されます。後続する任意数の座標の組は、暗黙的に絶対座標での 2 次ベジェ曲線 (<code>Q</code>) コマンドへの引数と解釈されます。
        </p>
        <dl>
          <dt><strong>式:</strong></dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">q</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          <em>開始点</em>から、<em>開始点</em>からのX 軸方向に <code><var>dx</var></code>, Y 軸方向に <code><var>dy</var></code> だけ移動した<em>終了点</em>までの 2 次ベジェ曲線を描きます。<em>制御点</em>は、<em>開始点</em>（曲線の開始点）から X 軸方向に <code><var>dx1</var></code>, Y 軸方向に <code><var>dy1</var></code> だけ移動した点です。後続する任意数の座標は、暗黙的に相対座標での 2 次ベジェ曲線 (<code>q</code>) コマンドへの引数と解釈されます。
        </p>
        <dl>
          <dt>式:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">T</th>
      <td>
        (<code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          <em>開始点</em>から <code><var>x</var></code>,<code><var>y</var></code> で指定される<em>終了点</em>までの滑らかな 2 次ベジェ曲線を描きます。<em>制御点</em>は、直前の曲線コマンドの <em>制御点</em>が反映されます。もし直前のコマンドが 2 次ベジェ曲線でない場合は、<em>制御点</em>は曲線の開始点（<em>現在座標</em>）と同一となります。後続する任意数の座標の組は、暗黙的に絶対座標での滑らかな 2 次ベジェ曲線 (<code>T</code>) コマンドへの引数と解釈されます。
        </p>
        <dl>
          <dt>式:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">t</th>
      <td>
        (<code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          <em>現在位置</em>から、<em>現在位置</em>から X 軸方向へ <code><var>dx</var></code>, Y 軸方向へ の<code><var>dy</var></code> だけ移動した<em>終了点</em>までの滑らかな 2 次ベジェ曲線を描きます。<em>制御点</em>は、直前の曲線コマンドの<em>制御点</em>が反映されます。もし直前のコマンドが 2 次ベジェ曲線でない場合は、<em>制御点</em>は曲線の開始点 (<em>現在座標</em>)と同一となります。後続する任意数の座標の組は、暗黙的に相対座標での滑らかな 2 次ベジェ曲線 (<code>t</code>) コマンドへの引数と解釈されます。
        </p>
        <dl>
          <dt>式:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >}
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
  <!-- 暗黙的な繰り返しによる 2 次ベジェ曲線 -->
  <path
    fill="none"
    stroke="red"
    d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" />

  <!-- 曲線の頂点と制御点の明示 -->
  <g>
    <polyline
      points="10,50 25,25 40,50"
      stroke="rgb(0 0 0 / 20%)"
      fill="none" />
    <circle cx="25" cy="25" r="1.5" />

    <!-- 曲線上の頂点 -->
    <circle cx="10" cy="50" r="1.5" />
    <circle cx="40" cy="50" r="1.5" />

    <g id="SmoothQuadraticDown">
      <polyline
        points="40,50 55,75 70,50"
        stroke="rgb(0 0 0 / 20%)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
      <circle cx="70" cy="50" r="1.5" />
    </g>

    <g id="SmoothQuadraticUp">
      <polyline
        points="70,50 85,25 100,50"
        stroke="rgb(0 0 0 / 20%)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
      <circle cx="100" cy="50" r="1.5" />
    </g>

    <use href="#SmoothQuadraticDown" x="60" />
    <use href="#SmoothQuadraticUp" x="60" />
    <use href="#SmoothQuadraticDown" x="120" />
  </g>
</svg>
```

{{EmbedLiveSample('Quadratic_Bézier_Curve', '100%', 200)}}

### 楕円円弧曲線

_楕円円弧曲線_ は楕円の一部として定義される曲線です。ベジェ曲線よりも楕円円弧曲線を用いるほうが、高度な正則曲線の描画が容易になることが多くあります。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">引数</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>x</var></code>
        <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          現在位置から <code><var>x</var></code>,<code><var>y</var></code> 座標へ円弧を描きます。楕円の中心はコマンドへの他の引数に基づいて自動的に決定されます。
        </p>
        <ul>
          <li>
            <code>rx</code> と <code>ry</code> は楕円の半径です。
          </li>
          <li>
            <code><var>angle</var></code> は X 軸に対する楕円の角度（度単位）です。
          </li>
          <li>
            <code><var>large-arc-flag</var></code> と <code><var>sweep-flag</var></code> は、他の引数によって描画可能な 4 つの可能な円弧のうち、どの円弧を描くかを選択可能にします。
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> では大きい円弧 (<code>1</code>)
                を描くか、小さい円弧 (<code>0</code>) を描くかを選択し,
              </li>
              <li>
                <code><var>sweep-flag</var></code> では時計回りの円弧 (<code>1</code>) を描くか、反時計周りの円弧 (<code>0</code>) を描くかを選択します。
              </li>
            </ul>
          </li>
        </ul>
        座標 <code><var>x</var></code>,<code><var>y</var></code> は、次のコマンドに対する新しい現在位置となります。すべての後続する引数の組は、暗黙的に絶対座標での円弧曲線 (<code>A</code>) コマンドに対するものと解釈されます。
      </td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>dx</var></code>
        <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          現在位置から、現在位置から X 軸方向へ <code><var>dx</var></code>、Y 軸方向への <code><var>dy</var></code> だけ移動した点へ円弧を描きます。楕円の中心はコマンドへの他の引数に基づいて自動的に決定されます。
        </p>
        <ul>
          <li>
            <code>rx</code>と<code>ry</code>は楕円の半径です
          </li>
          <li>
            <code><var>angle</var></code> は X 軸に対する楕円の角度（度単位）です
          </li>
          <li>
            <code><var>large-arc-flag</var></code> と <code><var>sweep-flag</var></code> は、他の引数によって描画可能な 4 つの可能な円弧のうち、どの円弧を描くかを選択可能にします。
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> では大きい円弧 (<code>1</code>) を描くか、小さい円弧 (<code>0</code>) を描くかを選択し,
              </li>
              <li>
                <code><var>sweep-flag</var></code>では時計回りの円弧 (<code>1</code>) を描くか、反時計周りの円弧 (<code>0</code>) を描くかを選択します。
              </li>
            </ul>
          </li>
        </ul>
        次のコマンドの現在位置を、X および Y 座標で表される位置を <code><var>dx</var></code> と <code><var>dy</var></code> だけずらした座標にします。それ以降のすべての引数の組は、暗黙的に相対座標での円弧曲線 (<code>a</code>) コマンドに対するものと解釈されます。
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

_ClosePath_ は、_現在位置_ からパスの開始点までの直線描画を指定します。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">コマンド</th>
      <th scope="col">引数</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <th scope="row">Z, z</th>
      <td></td>
      <td>
        パスの最終位置とその初期位置とを接続することで、現在のサブパスを閉じます。もし、2 つの点が異なる座標の場合は、2 点間に直線が描かれます。
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** _ClosePath_ によって生じる形状は、他のコマンドを用いて初期位置へ線を描いて閉じた場合とは異なる場合があります。これは、描線の終端が互いに接続されるためです（{{SVGAttr('stroke-linejoin')}} 設定）を参照のこと。 単に同じ座標に配置されるわけではありません。

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
  初期位置と異なる終了点による
  パスで描かれる開いた形状
  -->
  <path
    stroke="red"
    d="M 5,1
           l -4,8 8,0" />

  <!--
  初期位置と一致する終了点による
  パスで描かれる開いた形状
  -->
  <path
    stroke="red"
    d="M 15,1
           l -4,8 8,0 -4,-8" />

  <!--
  初期位置と異なる終了点による
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
