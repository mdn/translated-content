---
title: Texts
slug: Web/SVG/Tutorial/Texts
---

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}

SVG でのテキストについて説明するにあたり、これをほとんど別物である 2 つのトピックに区別しなければなりません。ひとつは画像内へのテキストの収容と表示、もう一つは SVG フォントです。後者はこのチュートリアルの後のセクションで説明することにして、ここでは一つ目の部分 "SVG 画像へのテキスト入力" に集中します。

## 基礎

[導入時の例示](/ja/docs/Web/SVG/Tutorial/Getting_Started)で見たとおり、`text` 要素を用いて SVG ドキュメントに任意のテキストを入れることができます。

```xml
<text x="10" y="10">Hello World!</text>
```

`x` および `y` 属性で、ビューポートのどこにテキストを表示するかを指定します。`text-anchor` 属性は start、middle、end、inherit の値を持つことができ、`x` および `y` 属性で指定した点からどちらの方向にテキストを流すかを指定できます。

図形の要素と同様に、テキストも `fill` 属性による着色と、`stroke` 属性によるストロークの付加ができます。またどちらもグラデーションやパターンを参照することができ、SVG の単純な色つきテキストを CSS 2.1 に比べて非常に強力にします。

## フォントプロパティの設定

テキストにおいて重要なことは、どのフォントで表示するかです。SVG はフォントを選択可能にするための属性のセットを用意しており、その多くは CSS で対応するプロパティに似ています。以下の各プロパティを、属性としてまたは CSS 宣言を通して設定できます: `font-family`, `font-style`, `font-weight`, `font-variant`, `font-stretch`, `font-size`, `font-size-adjust`, `kerning`, `letter-spacing`, `word-spacing` および `text-decoration`

## 他のテキスト関連要素

### tspan

この要素は、長いテキストの一部分をマークアップするために用います。`text` 要素または他の `tspan` 要素の子要素にしなければなりません。典型的な用途は、文中の単語 1 つを赤色の太字にすることです。

```xml
<text>
  <tspan font-weight="bold" fill="red">This is bold and red</tspan>
</text>
```

tspan 要素は以下のカスタム属性を持ちます:

**x**
包含しているテキストの新たな絶対 X 座標を設定します。これはテキストのデフォルトの現在位置を上書きします。またこの属性は数値のリストを含むことができ、その値は一つずつ、tspan 要素内の各文字に適用されます。

**dx**
テキストの描画開始位置を、既定の現在位置から水平方向に移動させるオフセットの値です。こちらも各文字に適用される値のリストを持つことができ、 従って次第にオフセットは累積していきます。

これらと同様に、垂直方向の移動量を示す **y** 属性や **dy** 属性もあります。

**rotate**
すべての文字を指定した角度分回します。数値のリストを指定すると、それぞれの文字が指定した値の分だけ回転し、残った文字は直前の文字に指定された値に従って回転します。

**textLength**
文字列の長さを意図的に指定する、ややわかりにくい属性です。これは、レンダリングエンジンが判断した文字列の長さとこの属性で指定した値が一致しない場合に、レンダリングエンジンにグリフの位置を微調整させられることを意味します。

#### tref

`tref` 要素ではすでに定義しているテキストを参照でき、効率的にその文字列をコピーします。内容物のテキストを引用する要素を指し示すために `xlink:href` 属性を用いることができます。また引用元とは別に、スタイルの設定や外見の変更を行うことができます。

```xml
<text id="example">This is an example text.</text>

<text>
    <tref xlink:href="#example" />
</text>
```

#### textPath

この要素は `xlink:href` 属性を通して任意のパスを取り出し、そのパスに沿って囲むように文字を並べます。

```xml
<path id="my_path" d="M 20,20 C 40,40 80,40 100,20" />
<text>
  <textPath xlink:href="#my_path">This text follows a curve.</textPath>
</text>
```

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}
