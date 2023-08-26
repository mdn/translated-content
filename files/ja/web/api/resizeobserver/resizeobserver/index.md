---
title: ResizeObserver()
slug: Web/API/ResizeObserver/ResizeObserver
---

{{APIRef("Resize Observer API")}}

**`ResizeObserver`** コンストラクターは新しい {{domxref("ResizeObserver")}} オブジェクトを作成し、これを {{domxref('Element')}} のコンテンツまたは境界ボックス、または {{domxref('SVGElement')}} のバウンディングボックスに対する変更を報告するために使用することができます。

## 構文

```js
new ResizeObserver(callback);
```

### 引数

- `callback`

  - : 監視中のものに寸法の変更が発生するたびに呼び出される関数です。この関数は 2 つの引数で呼び出されます。

    - `entries`
      - : {{domxref('ResizeObserverEntry')}} オブジェクトの配列で、それぞれの変更の後で要素の新しい寸法にアクセスするために使用することができます。
    - `observer`
      - : `ResizeObserver` 自身への参照で、必要に応じてコールバック内から確実にアクセスできます。これは、たとえば特定の条件に達したときにオブザーバーを自動的に監視解除するために使用できますが、必要ない場合は省略することができます。

    コールバックは一般に、次のパターンに従います。

    ```js
    function(entries, observer) {
      for (let entry of entries) {
        // 各項目に何かをする
        // 場合によってはオブザーバー自体に何かをする
      }
    }
    ```

## 例

次のスニペットは [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([ソースを表示](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)) の例から取ったものです。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + "rem";
      } else {
        // legacy path
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize.inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize.inlineSize / 600) + "rem";
      }
    } else {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentRect.width / 200) + "rem";
      pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + "rem";
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
