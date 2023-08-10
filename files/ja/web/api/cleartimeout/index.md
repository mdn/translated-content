---
title: clearTimeout()
slug: Web/API/clearTimeout
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("HTML DOM")}}

グローバルの **`clearTimeout()`** メソッドは、 {{domxref("setTimeout()")}} の呼び出しによって以前に確立されたタイムアウトを解除します。

指定された引数で前回確立されたアクションを識別できなかった場合、このメソッドは何も行いません。

## 構文

```js-nolint
clearTimeout(timeoutID)
```

### 引数

- `timeoutID`
  - : 解除したいタイムアウトの識別子です。この ID は対応する `setTimeout()` から返されたものです。

注目すべきは、 {{domxref("setTimeout()")}} および {{domxref("setInterval()")}} で使用される ID のプールは共有されますので、技術的には `clearTimeout()` および {{domxref("clearInterval()")}} は互いに交換できます。しかし、明確化のため、そのようなことは避けてください。

### 返値

なし ({{jsxref("undefined")}})。

## 例

ウェブページのコンテキストで以下のスクリプトを実行し、ページを一度クリックしてください。１秒後にメッセージがポップアップします。１秒間に複数回ページをクリックしても、アラートは一度しか表示されません。

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

- {{domxref("setTimeout()")}}
- {{domxref("setInterval()")}}
- {{domxref("clearInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
