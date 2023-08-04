---
title: <math>
slug: Web/MathML/Element/math
---

{{MathMLRef}}

MathML における最上位の要素は `<math>` です。有効な MathML のインスタンスはすべて `<math>` タグに囲まれています。加えて、 `<math>` 要素を入れ子状に配置してはなりませんが、中にその他の子要素をいくつでも持つことができます。

## 属性

以下に示す属性に加え、 `<math>` 要素は {{ MathMLElement("mstyle") }} 要素のすべての属性を受け入れます。

- class, id, style
  - : [スタイルシート](/ja/docs/CSS)と一緒に使用するために提供されます。
- dir
  - : 数式全体の書字方向。値として `ltr` (左書き) と `rtl` (右書き) が指定可能です。
- href
  - : 指定された URI へのハイパーリンクの設定に使用されます。
- mathbackground
  - : 背景色。 `#rgb`, `#rrggbb`, [HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)が使用できます。
- mathcolor
  - : 文字色。 `#rgb`, `#rrggbb`, [HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)が使用できます。
- display

  - : この列挙属性は、囲まれた MathML マークアップをレンダリングする方法を指定します。これは、次のいずれかの値を持つことができます。

    - `block` は、この要素が現在のテキストの区間の外に、テキストの意味を変えることなく任意の場所に配置することができるブロックとして表示されることを意味します。
    - `inline` は、この要素が現在のテキストの区間の内側に表示され、そのテキストの意味を変えることなくその区間の外に移動することができないことを意味します。

    存在しない場合、既定値は `inline` です。

- mode {{deprecated_inline}}
  - : 非推奨であり、 [display 属性](/ja/docs/MathML/Element/math#attr-display)で置き換えられました。
    取りうる値は `display` (これは `display="block"` と同じ効果を持ちます) および `inline` です。
- overflow
  - : 許可された幅に収まらないほど長い場合に、式がどのように動作するかを指定します。
    取りうる値は `linebreak` (既定値), `scroll`, `elide`, `truncate`, `scale` です。

## 例

### HTML5 表記

```html
<!doctype html>
<html>
  <head>
    <title>MathML in HTML5</title>
  </head>
  <body>
    <math>
      <mrow>
        <mrow>
          <msup>
            <mi>a</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
        </mrow>
        <mo>=</mo>
        <msup>
          <mi>c</mi>
          <mn>2</mn>
        </msup>
      </mrow>
    </math>
  </body>
</html>
```

### XHTML 表記

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>MathML in XHTML</title>
</head>
<body>

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

</body>
</html>
```

**メモ**: MathML をもつ XHTML 文書は `application/xhtml+xml` として配信しなければなりません。これは、ローカルファイルに `.xhtml` 拡張子を追加することで、簡単に達成できます。 Apache サーバーの場合は、 [`.htaccess` ファイルを設定する](http://httpd.apache.org/docs/2.4/mod/mod_mime.html#addtype)ことで拡張子を正しい MIME タイプに対応付けることができます。 XML 文書で MathML を表記するので、整形式の XML 文書を必ず記述してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("mathml.elements.math")}}

## Firefox 固有のメモ

Firefox 7 では、最上位の math 要素がすべての MathML 属性を受け入れる対応を導入しました (すなわち {{ MathMLElement("mstyle") }} 要素と同じ動作)。しかし、 `displaystyle` 属性が含まれておらず、 Firefox 8 で[追加されました](https://bugzilla.mozilla.org/show_bug.cgi?id=669719)。

テキストの代替 (`alttext`) または `altimg`, `altimg-width`, `altimg-height`, `altimg-valign` の各属性を使用する代替画像の参照は、現在は Firefox に実装されていません。

## 関連情報

- HTML の最上位要素: {{ HTMLElement("html") }}
- SVG の最上位要素: {{ SVGElement("svg") }}
- [MathML ブラウザーテスト](http://eyeasme.com/Joe/MathML/MathML_browser_test.html)
