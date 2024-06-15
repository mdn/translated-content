---
title: "PaintWorkletGlobalScope: registerPaint() メソッド"
short-title: registerPaint()
slug: Web/API/PaintWorkletGlobalScope/registerPaint
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

**`registerPaint()`** は {{domxref("PaintWorkletGlobalScope")}} インターフェイスのメソッドで、CSS プロパティがファイルを指定している場合に、プログラムで画像を生成するクラスを登録します。

## 構文

```js-nolint
registerPaint(name, classRef)
```

### 引数

- `name`
  - : 登録するワークレットクラスの名前です。
- `classRef`
  - : ワークレットを実装するクラスへの参照です。

## 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : 引数のいずれかが不正な場合、または見つからない場合に発生します。
- `InvalidModificationError` {{domxref("DOMException")}}
  - : 指定した名前のワークレットが既に存在する場合に発生します。

## 例

以下は、ワークレットモジュールの例を登録することを示しています。これは別個の js ファイルにする必要があります。`registerPaint()` は `PaintWorkletGlobalScope` を参照せずに呼び出されていることに注意してください。ファイル自体は `CSS.paintWorklet.addModule()` （PaintWorkletの親クラス{{domxref('Worklet.addModule()')}}で文書化）を通して読み込まれます。

```js
/* checkboardWorklet.js */

class CheckerboardPainter {
  paint(ctx, geom, properties) {
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

描画ワークレットを使用する最初の段階は、上記のように `registerPaint()` 関数を使用して描画ワークレットを定義することです。これを使用するには、`CSS.paintWorklet.addModule()` メソッドで登録します。

```html
<script>
  CSS.paintWorklet.addModule("checkboardWorklet.js");
</script>
```

そうすると、`{{cssxref('image/paint', 'paint()')}}` という CSS 関数を、`{{cssxref('&lt;image&gt;')}}` の値が有益な場所であればどこでも CSS の中で使用することができます。

```css
li {
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
