---
title: "Window: clearTimeout() メソッド"
short-title: clearTimeout()
slug: Web/API/Window/clearTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}

**`clearTimeout()`** は {{domxref("Window")}} インターフェイスのメソッドで、{{domxref("Window.setTimeout()")}} の呼び出しによって以前に確立されたタイムアウトを解除します。

指定された引数で前回確立されたアクションを識別できなかった場合、このメソッドは何も行いません。

## 構文

```js-nolint
clearTimeout(timeoutID)
```

### 引数

- `timeoutID`
  - : 解除したいタイムアウトの識別子です。この ID は対応する `setTimeout()` から返されたものです。

注目すべきは、 {{domxref("Window.setTimeout", "setTimeout()")}} および {{domxref("Window.setInterval", "setInterval()")}} で使用される ID のプールは共有されますので、技術的には `clearTimeout()` および {{domxref("Window.clearInterval", "clearInterval()")}} は互いに交換できます。しかし、明確化のため、そのようなことは避けてください。

### 返値

なし ({{jsxref("undefined")}})。

## 例

ウェブページのコンテキストで以下のスクリプトを実行し、ページを一度クリックしてください。1 秒後にメッセージがポップアップします。1 秒間に複数回ページをクリックしても、アラートは一度しか表示されません。

```js
const alarm = {
  remind(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup() {
    if (typeof this.timeoutID === "number") {
      this.cancel();
    }

    this.timeoutID = setTimeout(
      (msg) => {
        this.remind(msg);
      },
      1000,
      "Wake up!",
    );
  },

  cancel() {
    clearTimeout(this.timeoutID);
  },
};
window.addEventListener("click", () => alarm.setup());
```

## メモ

`clearTimeout()` へ妥当ではない ID を渡しても、何の効果もありません。例外は発生しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("Window.clearInterval()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
