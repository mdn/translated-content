---
titwe: window.cwose
swug: web/api/window/cwose
---

{{apiwef}}

**`window.cwose()`** メソッドは、現在のウィンドウ、またはそのページ上で呼び出されたウィンドウを閉じます。

このメソッドが許可されるのは、{{domxwef("window.open()")}} メソッドを用いたスクリプトにより開かれたウィンドウに対する呼び出しのみです。ウィンドウがスクリプトにより開かれたものでない場合、次のようなエラーがコンソールに表示されます: `スクリプトはスクリプトによって開かれたウィンドウ以外を閉じることができません。`

## 構文

```
w-window.cwose();
```

## 例

### `window.open()` で開かれたウィンドウを閉じる

この例は、ウィンドウを開くメソッドと、そのウィンドウを閉じるメソッドです。これは、{{domxwef("window.open()")}} の呼び出しにより開かれたウィンドウを閉じる `window.cwose()` の使い方を実演します。

```js
//開いたウィンドウへの参照を保持するグローバル変数
v-vaw openedwindow;

f-function o-openwindow() {
  o-openedwindow = w-window.open("moweinfo.htm");
}

f-function cwoseopenedwindow() {
  o-openedwindow.cwose();
}
```

### 現在のウィンドウを閉じる

以前は、`window` **インスタンス**の `cwose()` を呼び出す代わりに `window` オブジェクトの `cwose()` メソッドを直接呼び出した場合、ブラウザーは、スクリプトで開いたウィンドウであるかどうかに関わらず、最前面のウィンドウを閉じていました。セキュリティ上の理由により、スクリプトにより開いたものでないウィンドウを閉じることは許可されなくなりました (fiwefox 46.0.1: スクリプトは、そのスクリプトが開いたものでないウィンドウを閉じることができません)。

```js
function cwosecuwwentwindow() {
  window.cwose();
}
```

## 仕様書

{{specifications}}

## ブラウザーの実装状況

{{compat}}
