---
title: ResizeObserver.observe()
slug: Web/API/ResizeObserver/observe
---

{{APIRef("Resize Observer API")}}

**`observe()`** は {{domxref("ResizeObserver")}} インターフェイスのメソッドで、指定された {{domxref('Element')}} または {{domxref('SVGElement')}} の監視を開始します。

## 構文

```js
observe(target);
observe(target, options);
```

### 引数

- `target`
  - : 監視する {{domxref('Element')}} または {{domxref('SVGElement')}} への参照。
- `options` {{optional_inline}}

  - : 監視のオプションを設定することができるオプションオブジェクトです。現在、設定可能なオプションは 1 つだけです。

    - `box`

      - : オブザーバーがどのボックスモデルの変更を観察するかを設定します。設定可能な値は以下の通りです。

        - `content-box` (既定値)
          - : CSS　で定義されたコンテンツ領域のサイズ。
        - `border-box`
          - : CSS で定義されたボックス境界領域のサイズ。
        - `device-pixel-content-box`
          - : CSS で定義されたコンテンツ領域の大きさ。デバイスピクセル単位で、要素またはその祖先に対して CSS 変換を適用する前の値。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

なし。

## 例

次のスニペットは [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([ソースを表示](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)) の例から取ったものです。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // クロームが標準外の配列を使用しているかどうかのチェック
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + "rem";
      } else {
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

オプションオブジェクトを使った `observe()` の呼び出しは、次のようになります。

```js
resizeObserver.observe(divElem, { box: "border-box" });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
