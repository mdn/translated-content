---
title: テキスト
slug: Web/SVG/Tutorials/SVG_from_scratch/Texts
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Patterns", "Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations") }}

SVG でのテキストについて説明するにあたり、これをほとんど別物である 2 つのトピックに区別しなければなりません。ひとつは画像内へのテキストの収容と表示、もう一つは SVG フォントです。後者はこのチュートリアルの後のセクションで説明することにして、ここでは一つ目の部分「SVG 画像へのテキストの導入」に集中します。

## 基礎

[最初の例](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started)で見たとおり、`text` 要素を用いて SVG 文書に任意のテキストを入れることができます。

```xml
<text x="10" y="10">Hello World!</text>
```

`x` および `y` 属性で、ビューポートのどこにテキストを表示するかを指定します。 {{SVGAttr("text-anchor")}} 属性は `"start"`, `"middle"`, `"end"`, `"inherit"` のいずれかの値を持つことができ、この点からテキストを流す方向を決めます。 {{SVGAttr("dominant-baseline")}} 属性で垂直方向の配置を決めます。

図形の要素と同様に、テキストも `fill` 属性による着色と、`stroke` 属性によるストロークの付加ができます。またどちらもグラデーションやパターンを参照することができ、SVG の単純な色つきテキストを CSS 2.1 に比べて非常に強力にします。

## フォントプロパティの設定

テキストにおいて重要なことは、どのフォントで表示するかです。 SVG はフォントを選択可能にするための一連の属性を用意しており、その多くは CSS で対応するプロパティに似ています。属性としてまたは CSS 宣言を通して設定できるのは、{{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}}, {{SVGAttr("text-decoration")}} の各プロパティです。

## 他のテキスト関連要素

### tspan

この要素は、長いテキストの一部分をマークアップするために用います。`text` 要素または他の `tspan` 要素の子要素にしなければなりません。よくある用途は、文中の単語 1 つを赤色の太字にすることです。

```html-nolint
<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
  <text>
    これは<tspan font-weight="bold" fill="red">太字で赤字</tspan>です
  </text>

  <style>
    <![CDATA[
      text {
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('tspan', '100%', 100) }}

tspan 要素には、以下のカスタム属性があります。

- `x`
  - : 包含しているテキストの新たな絶対 `x` 座標を設定します。これはテキストの既定の現在位置を上書きします。またこの属性は数値のリストを含むことができ、その値は一つずつ、 `tspan` 要素内の各文字に適用されます。
- `dx`
  - : テキストの描画開始位置を、既定の現在位置から水平方向に移動させるオフセット `dx` の値です。こちらも各文字に適用される値のリストを持つことができ、 従って次第にオフセットは累積していきます。

    これらと同様に、垂直方向の移動量を示す **`y`** 属性や **`dy`** 属性もあります。

- `rotate`
  - : すべての文字を指定した角度分回転させます。数値のリストを指定すると、それぞれの文字が指定した値の分だけ回転し、残った文字は直前の文字に指定された値に従って回転します。
- `textLength`
  - : 文字列の長さの計算値を与えます。これは少し分かりにくい属性ですが、レンダリングエンジンが自分自身で測定したテキストの長さがここで指定されたものと一致しない場合に、グリフの位置を微調整できるようにすることを意味しています。

### textPath

この要素は `href` 属性を通して任意のパスを取り出し、そのパスに沿って囲むように文字を並べます。

```html
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" />
  <text>
    <textPath xmlns:xlink="http://www.w3.org/1999/xlink" href="#my_path">
      曲がるよ
    </textPath>
  </text>

  <style>
    <![CDATA[
      text {
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('textPath', '100%', 100) }}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Patterns", "Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations") }}
