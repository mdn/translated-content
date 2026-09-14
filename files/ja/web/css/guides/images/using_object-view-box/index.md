---
title: CSS の object-view-box プロパティの使用
short-title: object-view-box の使用
slug: Web/CSS/Guides/Images/Using_object-view-box
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

{{cssxref("object-view-box")}} プロパティを使用すると{{glossary("replaced elements", "置換要素")}}内でビューボックスを定義でき、置換コンテンツの特定部分のみを表示することができます。表示される要素の部分は、コンテンツの内在的な{{glossary("aspect ratio", "アスペクト比")}}を維持したまま、拡大したり、縮小したり、元のサイズで表示したりすることができますこのガイドでは、このプロパティを類似の {{cssxref("object-fit")}} プロパティと比較しながら検証し、要素の拡大・縮小やパン操作を通じてその機能を探ります。

## 内在サイズ、外因サイズ、`object-fit`

すべての置換要素には、{{glossary("extrinsic size", "外因サイズ")}}と{{glossary("intrinsic size", "内在サイズ")}}の 2 つのサイズがあります。

外因サイズは、ボックスモデルと視覚整形モデルに基づいてコンテンツが描画される HTML 要素の寸法です。[ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)と[視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)は、コンテンツ、HTML 属性、要素とその祖先要素に適用された CSS、ビューポートサイズに基づいて、要素の描画サイズを決定します。

内在サイズはコンテンツ自体の実際のサイズであり、スタイルが適用されずレイアウト制約がない状態での要素のサイズのことです。内在サイズと外因サイズは必ずしも同じである必要はありませんが、一般低に、置換要素の内在{{glossary("aspect ratio", "アスペクト比")}}を維持することが重要です。

## `object-view-box` と `object-fit` の比較

CSS には、数多くのサイズ設定プロパティがあります。置換要素のサイズ設定に関しては、[`object-fit`](/ja/docs/Web/CSS/Reference/Properties/object-fit) プロパティを使用することで、定義されたボックス内で置換要素がどのように描画されるかをある程度制御することができます。例えば、次の画面ショットでは、1200 x 400 の画像が {{htmlelement("img")}} 要素で表示されています。`<img>` 要素のサイズは 400 x 200 に設定されています。画像コンテンツは `object-fit: none;` 宣言を使用して配置されています。

![外因サイズと内在サイズを示す画像。はるかに大きい 1200 × 400 の画像の中心部の 400 × 200 が、画像を表示させる要素のサイズである 400 × 200 のビューボックス内に表示されています。](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)
`object-view-box` プロパティは `object-fit` プロパティよりも柔軟性が高く、より多くのことを行うことができます。例えば、画像の切り抜き、ズーム、パン操作に使用することができます。このプロパティは表示領域（ビューボックス）を設定し、コンテンツのどの部分を表示させるか、および外因サイズ内にどのように収めるかを定義します。ビューボックスの値は、コンテンツの固有領域に対する位置関係を持つ矩形を含みますが、ビューボックスの物理サイズは、外因サイズと等しいままです。ビューボックスはコンテンツ内で表示される領域をマークし、その後、そのコンテンツ領域が HTML 要素に収まるよう外因寸法に一致するよう変換されます。

次の画像では、同じヒョウの写真を 400 × 150 ピクセルの画像要素に配置しています。ただし今回は、`object-view-box` プロパティを使用して、ヒョウの目が示されている部分のみを切り取っています。

![ヒョウの画像に object-view-box を使用して、雅俗を縮小せずに 400px × 150px のビューボックスを表示しています。](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

この場合、`<img>` 要素のサイズと、`object-view-box` プロパティで定義するビューボックスのサイズが同じ（つまり 400 × 150 ピクセル）であるため、両者のアスペクト比は同一となり、置換要素は変倍されたり歪められたりすることはありません。

同じ{{glossary("aspect ratio", "アスペクト比")}}を維持することで、画像の歪みを防ぎます。 `object-view-box` をつけて、外因サイズとビューボックスサイズが異なる状態で様々な画像操作が可能であり、変倍する際に置換要素が歪むことがありません。

## ズームインとズームアウト

ビューボックスのサイズ（置換要素の表示領域）を縮小すると、ズームイン効果が強まります。これは、小さなコンテンツが HTML 要素のサイズに合わせて引き伸ばされるためです。逆にサイズを縮小すると、ズームアウト効果が生じます。

この例では、`object-view-box` プロパティを使用して、サイズが固定された HTML 要素内で置換要素の一部を拡大・縮小表示させるための方法を示しています。この場合、非常に大きな画像内のヒョウの目が、ズーム効果の焦点として機能します。

### HTML

{{htmlelement("img")}} 要素と [`range`](/ja/docs/Web/HTML/Reference/Elements/input/range) 型の {{htmlelement("input")}} 要素、それに関連付けた {{htmlelement("label")}} を配置しています。元のヒョウの画像の自然寸法、または内在サイズは幅 `1244px`、高さ `416px` であり、{{glossary("aspect ratio", "アスペクト比")}} は `3:1` です。

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">ズームイン: </label>
  <input type="range" id="box-size" min="115" max="380" value="150" />
</p>
<output></output>
```

### CSS

カスタムプロパティ `--box-size` を定義しています。これは {{cssxref("basic-shape/xywh", "xywh()")}} 関数で幅と高さとして使用されており、 `1:1` のアスペクト比で正方形のビューボックスを作成します。ビューボックスのオフセットこの点（ズーム効果における焦点位置）は、`x` 座標が `500px`、`y` 座標が `30px` に設定する（すなわち、これがヒョウの右目の左上角である）状態で、ズーム効果における焦点位置を表現しています。

```css hidden
input {
  width: 350px;
}

output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

@supports not (object-view-box: none) {
  body::before {
    content: "このブラウザーは 'object-view-box' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
img {
  width: 350px;
  height: 350px;
  border: 2px solid red;

  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

### JavaScript

スライダーにイベントリスナーを追加し、ユーザーが操作した際にカスタムプロパティ `--box-size` の値を更新します。スライダーが右に移動される際のズームイン効果を高めるため、ビューボックスサイズを縮小するとズームイン効果が強まる特性を利用し、スライダーの値を `500px` から引き算して反転させます。

```js
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");
const output = document.querySelector("output");

function update() {
  const size = 500 - zoom.value;
  img.style.setProperty("--box-size", `${size}px`);
  output.innerText = `object-view-box: xywh(500px 30px ${size}px ${size}px);`;
}

zoom.addEventListener("input", update);
update();
```

### 結果

{{ EmbedLiveSample("Zooming in and out", "", 480) }}

スライダーを右に移動すると拡大効果が強まり、左に移動すると縮小するよう作用します。スライダーはビューボックスのサイズのみに影響し、ビューボックスの原点となるx値とy値は一定のままです。`<img>` 要素のサイズも変わりません。

## 画像のパン操作

ビューボックスウィンドウの座標（`xywh()` 関数の `x` および `y` 要素）を変更しつつ、可視領域のサイズを一定に保つことで、パン効果を生み出すことができます。例えば、ビューボックスのサイズを一定に保ち、水平方向の位置（`x` 引数）のみを変更することで、水平方向のパン効果を作成できます。

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="position">左オフセット: </label>
  <input type="range" id="position" min="0" max="900" value="450" />
</p>
<output></output>
```

```css hidden
input {
  width: 350px;
}

@supports not (object-view-box: none) {
  body::before {
    content: "このブラウザーは 'object-view-box' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

img {
  width: 350px;
  height: 350px;

  --x-position: 0;
  object-view-box: xywh(var(--x-position) 30px 350px 350px);
}
```

```js hidden
const img = document.querySelector("img");
const position = document.getElementById("position");
const output = document.querySelector("output");

function update() {
  img.style.setProperty("--x-position", `${position.value}px`);
  output.innerText = `xywh(${position.value}px 30px 350px 350px);`;
}

position.addEventListener("input", update);
update();
```

{{ EmbedLiveSample("Panning effect", "", 450) }}

スライダーを移動してください。`xywh()` 関数の `x`値を増減させると、パン効果が生まれることに注目してください。

## 関連情報

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
