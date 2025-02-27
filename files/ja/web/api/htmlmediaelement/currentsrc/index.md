---
title: "HTMLMediaElement: currentSrc プロパティ"
short-title: currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.currentSrc`** プロパティには、選択されたメディアリソースの絶対 URL が入っています。この選択は、例えば、ウェブサーバーがユーザーのディスプレイの解像度に基づいてメディアファイルを選択した場合に発生する可能性があります。 `networkState` プロパティが `EMPTY` の場合、値は空の文字列です。

## 値

選択されたメディアソースの絶対 URL を含む文字列です。 `networkState` が `EMPTY` の場合、これは空の文字列になります。 それ以外の場合は、メディア要素内に含まれる {{domxref("HTMLSourceElement")}} によってリストされたリソースのいずれか、{{HTMLElement("source")}} 要素が指定されていない場合は値または `src` になります。

## 例

```js
const obj = document.createElement("video");
console.log(obj.currentSrc); // ""
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.currentSrc` プロパティを定義しているインターフェイス
