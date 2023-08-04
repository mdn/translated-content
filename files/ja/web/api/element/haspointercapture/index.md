---
title: "Element: hasPointerCapture() メソッド"
short-title: hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`hasPointerCapture()`** は {{domxref("Element")}} インターフェイスのメソッドで、それを呼び出した要素が、指定されたポインター ID によって識別されるポインターに対するポインターキャプチャを持つかどうかを示します。

## 構文

```js-nolint
hasPointerCapture(pointerId)
```

### 引数

- `pointerId`
  - : {{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 返値

論理値です。要素がポインターキャプチャを持っている場合は `true`、持っていない場合は `false` です。

## 例

```html
<html lang="ja">
  <script>
    function downHandler(ev) {
      const el = document.getElementById("target");
      // 要素 'target' はそれ以上のイベントを受信/キャプチャします
      el.setPointerCapture(ev.pointerId);

      // …

      // 要素にまだポインタキャプチャがあるかどうかを確認します
      let pointerCap = el.hasPointerCapture(ev.pointerId);
      if (pointerCap) {
        // まだポインタキャプチャがあります
      } else {
        // おっと、ポインタキャプチャを失いました！
      }
    }

    function init() {
      const el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">この要素をポインタでタッチします。</div>
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
- {{ domxref("Pointer_events","Pointer Events") }}
