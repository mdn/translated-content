---
title: "CommandEvent: source プロパティ"
short-title: source
slug: Web/API/CommandEvent/source
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{APIRef("Invoker Commands API")}}

**`source`** は {{domxref("CommandEvent")}} インターフェイスの読み取り専用プロパティで、指定されたコマンドを呼び出したコントロールを表す {{domxref("EventTarget")}} を返します。

## 値

{{domxref("EventTarget")}} オブジェクトです。通常は {{domxref("HTMLButtonElement")}} です。

## 例

以下の簡単な例では、CommandEvent が発生した際にボタン要素に一時的なクラスを追加するイベントリスナーを設定しています。

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theButton = event.source;

    theButton.classList.add("just-pressed");

    setTimeout(() => {
      theButton.classList.remove("just-pressed");
    }, 1000);
  },
  { capture: true },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Invoker Commands API", "呼び出しコマンド API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
