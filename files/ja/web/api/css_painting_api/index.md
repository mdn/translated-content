---
title: CSS 描画 API
slug: Web/API/CSS_Painting_API
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{DefaultAPISidebar("CSS Painting API")}}{{SeeCompatTable}}

CSS 描画 API（[CSS Houdini](/ja/docs/Web/API/Houdini_APIs) API の傘の一部）を使用すると、開発者は要素の背景、境界線、またはコンテンツに直接描画できる JavaScript 関数を記述できます。

## 概念と使用方法

基本的に、CSS 描画 API には、開発者が CSS の {{cssxref('&lt;image&gt;')}} の関数である {{cssxref('image/paint', 'paint()')}} のためのカスタム値を作成できる機能が含まれています。 次に、これらの値を {{cssxref("background-image")}} などのプロパティに適用して、要素に複雑なカスタム背景を設定できます。

例えば、次のようにです。

```css
aside {
  background-image: paint(my-painted-image);
}
```

この API はワークレット ({{domxref('worklet')}}) を定義します。 これは、計算されたスタイルの変更に応じて画像をプログラムで生成するために使用できます。 これの使用方法の詳細については、[CSS 描画 API の使用](/ja/docs/Web/API/CSS_Painting_API/Guide)を参照してください。

## インターフェイス

- {{domxref('PaintWorkletGlobalScope')}}
  - : 描画ワークレットのグローバル実行コンテキスト。
- {{domxref('PaintRenderingContext2D')}}
  - : CSS 描画 API のレンダリングコンテキストで、ビットマップに描画するためのものです。
- {{domxref('PaintSize')}}
  - : 出力ビットマップの幅と高さの読み取り専用の値を返します。

## 例

次の例では、背景画像が 3 つの異なる色と 3 つの幅で回転するアイテムのリストを生成します。
[対応ブラウザー](#ブラウザーの互換性)では、下図のような表示になります。

![背景画像の幅と色は独自のプロパティに基づいて変化します。](Guide/boxbg.png)

このことを実現するために、2 つのカスタム CSS プロパティ、`--box-color` と `--width-subtractor` を定義します。

### 描画ワークレット

このワークレットは、描画ワークレット ({{domxref('worklet')}}) を定義する外部 JavaScript ファイル（この例では `boxbg.js` と名付けました）です。
ワークレットを使用すると、要素の CSS プロパティ（およびカスタムプロパティ）にアクセスできます。

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }
    /*
      要素に対して定義されたカスタムプロパティ
      （または 'height' などの通常のプロパティ）を
      取得し、それらを配列として返す。
    */
    static get inputProperties() {
      return ["--box-color", "--width-subtractor"];
    }

    paint(ctx, size, props) {
      /*
        ctx -> 描画コンテキスト
        size -> paintSize: 幅と高さ
        props -> properties: get() メソッド
      */
      ctx.fillStyle = props.get("--box-color");
      ctx.fillRect(
        0,
        size.height / 3,
        size.width * 0.4 - props.get("--width-subtractor"),
        size.height * 0.6,
      );
    }
  },
);
```

`registerPaint()` クラス内の `inputProperties()` メソッドを使用して、`boxbg` が適用された要素に設定された 2 つのカスタムプロパティの値を取得し、それらを `paint()` 関数内で使用しました。`inputProperties()` メソッドは、カスタムプロパティだけでなく、要素に影響を与えるすべてのプロパティを返すことができます。

### 描画ワークレットの使用

#### HTML

```html live-sample___example-boxbg
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item N</li>
</ul>
```

#### CSS

CSS では、`--box-color` と `--width-subtractor` のカスタムプロパティを定義します。

```css live-sample___example-boxbg
body {
  font: 1.2em / 1.2 sans-serif;
}
li {
  background-image: paint(boxbg);
  --box-color: hsl(55 90% 60%);
}

li:nth-of-type(3n) {
  --box-color: hsl(155 90% 60%);
  --width-subtractor: 20;
}

li:nth-of-type(3n + 1) {
  --box-color: hsl(255 90% 60%);
  --width-subtractor: 40;
}
```

#### JavaScript

描画ワークレットの設定とロジックは外部スクリプト内にあります。
ワークレットを登録するには、メインスクリプトから {{domxref('Worklet.addModule', 'addModule()')}} を呼び出す必要があります。

```js live-sample___example-boxbg
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js",
);
```

この例では、ワークレットは `https://mdn.github.io/` でホストされていますが、ワークレットは同様に相対リソースである可能性があります。

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### 結果

ワークレットのスクリプトを直接操作することはできませんが、開発ツールでカスタムプロパティの値を変更することで、背景画像の色や幅を変更できます。

{{EmbedLiveSample("example-boxbg", "", "300px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 描画 API の使用](/ja/docs/Web/API/CSS_Painting_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
