---
title: "MediaQueryList: removeListener() メソッド"
short-title: removeListener()
slug: Web/API/MediaQueryList/removeListener
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

**`removeListener()`** は {{DOMxRef("MediaQueryList")}} インターフェイスのメソッドで、 `MediaQueryListener` からリスナーを除去します。

古いブラウザーでは、 `MediaQueryList` はまだ {{DOMxRef("EventTarget")}} を継承していなかったため、このメソッドは {{DOMxRef("EventTarget.removeEventListener()")}} の別名として提供されました。対応する必要があるブラウザーで利用できる場合は、 `removeListener()` の代わりに `removeEventListener()` を使用してください。

## 構文

```js-nolint
removeListener(func)
```

### 引数

- `func`
  - : 除去したいコールバック関数を表す関数または関数への参照。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const paragraph = document.querySelector("p");
const mediaQueryList = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    paragraph.textContent = "This is a narrow screen — 600px wide or less.";
    document.body.style.backgroundColor = "pink";
  } else {
    /* the viewport is more than 600 pixels wide */
    paragraph.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "aquamarine";
  }
}

mediaQueryList.addListener(screenTest);

// Later on, when it is no longer needed
mediaQueryList.removeListener(screenTest);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
