---
title: Document.exitFullscreen()
slug: Web/API/Document/exitFullscreen
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{ApiRef("Fullscreen API")}}

{{domxref("Document")}} の **`exitFullscreen()`** メソッドは、この文書で現在全画面モードで表示されている要素が全画面モードを抜け、画面を以前の状態に戻すことを要求します。これはふつう、以前の {{domxref("Element.requestFullscreen()")}} の呼び出しの効果を取り消します。

## 構文

```js-nolint
exitFullscreen()
```

### 引数

なし。

### 返値

{{Glossary("user agent", "ユーザーエージェント")}}が全画面モードから完全に抜けたら解決される {{jsxref("Promise")}} です。全画面モードから抜けようとしてエラーが発生したら、プロミスの `catch()` ハンドラーが呼び出されます。

## 例

この例ではマウスボタンで中をクリックするたびに、現在の文書が全画面表示になったり戻ったりします。

```js
document.onclick = (event) => {
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen();
  }
};
```

> **メモ:** もっと完全な例については、[`Element.requestFullscreen()` の例](/ja/docs/Web/API/Element/requestFullscreen#%E4%BE%8B)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }} および {{cssxref("::backdrop")}}
- {{HTMLElement("iframe")}} の [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen) 属性
