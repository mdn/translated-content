---
title: "MediaQueryListEvent: matches プロパティ"
short-title: matches
slug: Web/API/MediaQueryListEvent/matches
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

**`matches`** は {{DOMxRef("MediaQueryListEvent")}} インターフェイスの読み取り専用プロパティで、論理値です。 `true` ならば {{DOMxRef("document")}} が現在メディアクエリーリストに一致していることを表し、 `false` はそうでないことを表します。

## 値

論理値です。 `true` ならば {{DOMxRef("document")}} が現在メディアクエリーリストに一致していることを表し、 `false` はそうでないことを表します。

## 例

```js
const para = document.querySelector("p"); // This is the UI element where to display the text
const mql = window.matchMedia("(max-width: 600px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // The viewport is 600 pixels wide or less
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    // The viewport is more than 600 pixels wide
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
});
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
