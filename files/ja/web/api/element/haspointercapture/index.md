---
title: Element.hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
---

{{APIRef("DOM")}}

{{domxref("Element")}} インターフェイスの **`hasPointerCapture()`** メソッドは、それを呼び出した要素が、与えられたポインタ ID によって識別されるポインタに対するポインタキャプチャを持つかどうかを示します。

## 構文

```
targetElement.hasPointerCapture(pointerId);
```

### パラメーター

- `pointerId`
  - : {{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 戻り値

{{jsxref("Boolean")}} の値 — 要素がポインタキャプチャを持っている場合は `true`、持っていない場合は `false` です。

## 例

```html
<html>
  <script>
    function downHandler(ev) {
      const el = document.getElementById("target");
      // 要素 'target' はそれ以上のイベントを受信/キャプチャします
      el.setPointerCapture(ev.pointerId);

      /* ... */

      // 要素にまだポインタキャプチャがあるかどうかを確認します
      let pointerCap = el.hasPointerCapture(ev.pointerId);
      if(pointerCap) {
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

## 仕様

| 仕様                                                                                                                 | 状態                                     | コメント |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-element-haspointercapture', 'hasPointerCapture()')}} | {{Spec2('Pointer Events 2')}} |          |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Element.setPointerCapture()")}}
- {{ domxref("Element.releasePointerCapture()")}}
- {{ domxref("Pointer_events","Pointer Events") }}
