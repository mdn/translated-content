---
title: EyeDropper
slug: Web/API/EyeDropper
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

**`EyeDropper`** インターフェイスは、ユーザーが開いて画面から色を選択できるスポイトツールのインスタンスを表します。

## コンストラクター

- {{DOMxRef("EyeDropper.EyeDropper", "EyeDropper()")}} {{Experimental_Inline}}
  - : 新しい `EyeDropper` のインスタンスを返します。

## インスタンスメソッド

_`EyeDropper` インターフェイスは、メソッドを継承しません。_

- {{DOMxRef("EyeDropper.open()")}} {{Experimental_Inline}}
  - : 選択された色へのアクセスを提供するオブジェクトで解決する {{jsxref("Promise")}} を返します。

## 例

### スポイトツールを開いて色を取得する

この例では、スポイトツールを開き、ユーザーが画面からピクセルを選択するか <kbd>Escape</kbd> を押してスポイトモードをキャンセルするのを待つ方法を示します。

#### HTML

```html
<button id="start-button">スポイトを開く</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "このブラウザーは EyeDropper API に対応していません";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });
});
```

#### 結果

{{EmbedLiveSample("Opening the eyedropper tool and sampling a color")}}

### スポイトツールを終了する

この例では、スポイトモードはユーザーが色を選択したり <kbd>Escape</kbd> を押したりする前に終了させることもできることを示します。

#### HTML

```html
<button id="start-button">スポイトを開く</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "このブラウザーは EyeDropper API に対応していません";
    return;
  }

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });

  setTimeout(() => {
    abortController.abort();
  }, 2000);
});
```

#### 結果

{{EmbedLiveSample("Aborting the eyedropper mode")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
