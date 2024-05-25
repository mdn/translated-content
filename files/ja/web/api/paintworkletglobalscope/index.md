---
title: PaintWorkletGlobalScope
slug: Web/API/PaintWorkletGlobalScope
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

**`PaintWorkletGlobalScope`** は [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API) のインターフェイスで、描画{{domxref("Worklet", "ワークレット")}}内で利用できるグローバルオブジェクトを表します。

## プライバシーの考慮点

訪問したリンクが漏洩するのを避けるため、現在 Chrome ベースのブラウザーでは、[`href`](/ja/docs/Web/HTML/Element/a#href) 属性を持つ {{HTMLElement("a")}} 要素、およびそのような要素の子要素に対してこの機能は無効になっています。詳細は以下を参照してください。

- The CSS Painting API [Privacy Considerations section](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations)
- The CSS Painting API spec issue ["CSS Paint API leaks browsing history"](https://github.com/w3c/css-houdini-drafts/issues/791)

## インスタンスプロパティ

_このインターフェイスには {{domxref('WorkletGlobalScope')}} から継承したプロパティがあります。_

- {{domxref('PaintWorkletGlobalScope.devicePixelRatio')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の端末の物理ピクセルと論理ピクセルの比率を返します。

## インスタンスメソッド

_このインターフェイスには {{domxref('WorkletGlobalScope')}} から継承したメソッドがあります。_

- {{domxref('PaintWorkletGlobalScope.registerPaint()')}} {{Experimental_Inline}}
  - : CSS プロパティがファイルを指定する場合に、プログラムで画像を生成するクラスを登録します。

## 例

次の 3 つの例は、描画ワークレットを作成し、読み込ませ、使用することを示しています。

### 描画ワークレットの作成

以下にワークレットモジュールの例を示します。これは別個の js ファイルにする必要があります。`registerPaint()` は描画ワークレットを参照せずに呼び出されることに注意してください。

```js
class CheckerboardPainter {
  paint(ctx, geom, properties) {
    // ここでのグローバルオブジェクトは PaintWorkletGlobalScope です。
    // メソッドとプロパティは、グローバル機能として直接アクセスするか、
    // self を使用して接頭辞を付けてアクセスすることができます。
    const dpr = self.devicePixelRatio;

    // 通常のキャンバスのように `ctx` を使用します。
    const colors = ["red", "green", "blue"];
    const size = 32;
    for (let y = 0; y < geom.height / size; y++) {
      for (let x = 0; x < geom.width / size; x++) {
        const color = colors[(x + y) % colors.length];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x * size, y * size, size, size);
        ctx.fill();
      }
    }
  }
}

// 固有の名前でクラスを登録します。
registerPaint("checkerboard", CheckerboardPainter);
```

### 描画ワークレットの読み込み

次の例は、機能検出によって上記のワークレットを js ファイルから読み込み、実行することを示しています。

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

### 描画ワークレットの使用

この例では、スタイルシートで描画 `Worklet` を使用する方法を示します。`CSS.paintWorklet` が対応していない場合に代替方法を提供する最も簡単な方法も記載しています。

```html
<style>
  textarea {
    background-image: url(checkerboard);
    background-image: paint(checkerboard);
  }
</style>
<textarea></textarea>
```

{{cssxref('@supports')}} アットルールを使用することもできます。

```css
@supports (background: paint(id)) {
  background-image: paint(checkerboard);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
