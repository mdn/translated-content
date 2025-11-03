---
title: "CommandEvent: command プロパティ"
short-title: command
slug: Web/API/CommandEvent/command
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Invoker Commands API")}}

**`command`** は {{domxref("CommandEvent")}} インターフェイスの読み取り専用プロパティで、イベントが発信された時点での {{domxref("HTMLButtonElement.command", "command")}} プロパティの値を含む文字列を返します。

## 値

文字列です。

## 例

次の簡単な例では、"show-modal" コマンドを監視するイベントリスナーを設定しています。

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theAction = event.command;

    if (theAction === "show-modal") {
      console.log("モーダルダイアログを表示");
    }
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
