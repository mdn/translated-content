---
title: "Element: hasPointerCapture() メソッド"
short-title: hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
l10n:
  sourceCommit: f70edbb6584d2df5ad4842ecf2170b3cbddc6cf6
---

{{APIRef("DOM")}}

**`hasPointerCapture()`** は {{domxref("Element")}} インターフェイスのメソッドで、それを呼び出した要素が、指定されたポインター ID によって識別されるポインターに対する[ポインターキャプチャ](/ja/docs/Web/API/Pointer_events#ポインターキャプチャ)を持つかどうかを示します。

## 構文

```js-nolint
hasPointerCapture(pointerId)
```

### 引数

- `pointerId`
  - : {{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 返値

論理値です。 指定されたポインター ID で識別されるポインターのポインターキャプチャが要素にある場合は `true`、ない場合は `false` を返します。

## 例

```html
<html lang="ja">
  <script>
    function downHandler(ev) {
      const el = document.getElementById("target");
      // 要素 'target' はそれ以上のイベントを受信/キャプチャします
      el.setPointerCapture(ev.pointerId);

      // …

      // 要素にまだポインターキャプチャがあるかどうかを確認します
      let pointerCap = el.hasPointerCapture(ev.pointerId);
      if (pointerCap) {
        // まだポインターキャプチャがあります
      } else {
        // おっと、ポインターキャプチャを失いました！
      }
    }

    function init() {
      const el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">この要素をポインターでタッチします。</div>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Element.setPointerCapture()")}}
- {{ domxref("Element.releasePointerCapture()")}}
- {{ domxref("Pointer_events","ポインターイベント", "", 1) }}
