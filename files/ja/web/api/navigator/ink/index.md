---
title: "Navigator: ink プロパティ"
short-title: ink
slug: Web/API/Navigator/ink
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SeeCompatTable}}{{APIRef("Ink API")}}

**`ink`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、現在の文書の {{domxref("Ink")}} オブジェクトを取得します。これは[インク API](/en-US/docs/Web/API/Ink_API) の機能へのアクセスを提供します。

## 値

{{domxref('Ink')}} オブジェクトです。

## 例

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  //...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
