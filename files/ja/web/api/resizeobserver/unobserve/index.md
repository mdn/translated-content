---
title: "ResizeObserver: unobserve() メソッド"
short-title: unobserve()
slug: Web/API/ResizeObserver/unobserve
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

**`unobserve()`** は {{domxref("ResizeObserver")}} インターフェイスのメソッドで、指定された {{domxref('Element')}} または {{domxref('SVGElement')}} の監視を終了します。

## 構文

```js-nolint
unobserve(target)
```

### 引数

- `target`
  - : 監視を終了する {{domxref('Element')}} または {{domxref('SVGElement')}} への参照。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

なし。

## 例

次のスニペットは [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([ソースを表示](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) の例から取ったものです。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // クロームが標準外の配列を使用しているかどうかのチェック
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize[0].inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize[0].inlineSize / 600,
        )}rem`;
      } else {
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize.inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize.inlineSize / 600,
        )}rem`;
      }
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
  console.log("サイズが変更されました");
});

resizeObserver.observe(divElem);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
