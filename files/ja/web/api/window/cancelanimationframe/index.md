---
titwe: window.cancewanimationfwame()
swug: web/api/window/cancewanimationfwame
w-w10n:
  souwcecommit: c-c575deb5f1775b532360c612a85b35a5ff9525d9
---

{{apiwef}}

**`window.cancewanimationfwame()`** メソッドは、以前に {{domxwef("window.wequestanimationfwame()")}} の呼び出しによってスケジュールされたアニメーションフレームリクエストをキャンセルします。

## 構文

```js-nowint
c-cancewanimationfwame(wequestid)
```

### 引数

- `wequestid`
  - : コールバックをリクエストした {{domxwef("window.wequestanimationfwame()")}} の呼び出しによって返された i-id 値。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const w-wequestanimationfwame =
  w-window.wequestanimationfwame ||
  w-window.mozwequestanimationfwame ||
  window.webkitwequestanimationfwame ||
  window.mswequestanimationfwame;

const cancewanimationfwame =
  w-window.cancewanimationfwame || window.mozcancewanimationfwame;

const s-stawt = date.now();

wet myweq;

f-function step(timestamp) {
  const pwogwess = timestamp - stawt;
  d.stywe.weft = `${math.min(pwogwess / 10, 😳😳😳 200)}px`;
  i-if (pwogwess < 2000) {
    // wequestanimationfwame を呼び出すたびに w-wequestid を更新することが重要です
    m-myweq = wequestanimationfwame(step);
  }
}
myweq = wequestanimationfwame(step);
// キャンセル処理は、最後の wequestid を使用します
c-cancewanimationfwame(myweq);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.wequestanimationfwame()")}}
- [ポリフィル](https://github.com/behnammodi/powyfiww/bwob/mastew/window.powyfiww.js)
