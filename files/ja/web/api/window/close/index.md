---
title: window.close
slug: Web/API/Window/close
---

{{APIRef}}

**`Window.close()`** メソッドは、現在のウィンドウ、またはそのページ上で呼び出されたウィンドウを閉じます。

このメソッドが許可されるのは、{{domxref("window.open()")}} メソッドを用いたスクリプトにより開かれたウィンドウに対する呼び出しのみです。ウィンドウがスクリプトにより開かれたものでない場合、次のようなエラーがコンソールに表示されます: `スクリプトはスクリプトによって開かれたウィンドウ以外を閉じることができません。`

## 構文

```
window.close();
```

## 例

### `window.open()` で開かれたウィンドウを閉じる

この例は、ウィンドウを開くメソッドと、そのウィンドウを閉じるメソッドです。これは、{{domxref("window.open()")}} の呼び出しにより開かれたウィンドウを閉じる `Window.close()` の使い方を実演します。

```js
//開いたウィンドウへの参照を保持するグローバル変数
var openedWindow;

function openWindow() {
  openedWindow = window.open("moreinfo.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

### 現在のウィンドウを閉じる

以前は、`window` **インスタンス**の `close()` を呼び出す代わりに `window` オブジェクトの `close()` メソッドを直接呼び出した場合、ブラウザーは、スクリプトで開いたウィンドウであるかどうかに関わらず、最前面のウィンドウを閉じていました。セキュリティ上の理由により、スクリプトにより開いたものでないウィンドウを閉じることは許可されなくなりました (Firefox 46.0.1: スクリプトは、そのスクリプトが開いたものでないウィンドウを閉じることができません)。

```js
function closeCurrentWindow() {
  window.close();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの実装状況

{{Compat}}
