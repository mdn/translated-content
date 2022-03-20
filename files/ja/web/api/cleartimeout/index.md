---
title: clearTimeout()
slug: Web/API/clearTimeout
tags:
  - API
  - HTML DOM
  - メソッド
  - リファレンス
  - clearTimeout
browser-compat: api.clearTimeout
translation_of: Web/API/clearTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/clearTimeout
---
{{APIRef("HTML DOM")}}

グローバルの **`clearTimeout()`** メソッドは、 {{domxref("setTimeout()")}} の呼び出しによって以前に確立されたタイムアウトを解除します。

## 構文

```js
clearTimeout(timeoutID)
```

### 引数

- `timeoutID`
  - : 解除したいタイムアウトの識別子です。この ID は対応する `setTimeout()` から返されたものです。

注目すべきは、 {{domxref("setTimeout()")}} および {{domxref("setInterval()")}} で使用される ID のプールは共有されますので、技術的には `clearTimeout()` および {{domxref("clearInterval()")}} は互いに交換できます。しかし、明確化のため、そのようなことは避けてください。

## 例

ウェブページのコンテキストで以下のスクリプトを実行し、ページを一度クリックしてください。１秒後にメッセージがポップアップします。１秒間に複数回ページをクリックしても、アラートは一度しか表示されません。

```js
const alarm = {
  remind: function(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup: function() {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }

    this.timeoutID = setTimeout(function(msg) {
      this.remind(msg);
    }.bind(this), 1000, 'Wake up!');
  },

  cancel: function() {
    clearTimeout(this.timeoutID);
  }
};
window.addEventListener('click', () => alarm.setup() );
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
- [_Daemons_ 管理](/ja/docs/JavaScript/Timers/Daemons)
