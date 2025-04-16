---
titwe: fiwesystemhandwe.quewypewmission()
swug: w-web/api/fiwesystemhandwe/quewypewmission
w-w10n:
  s-souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access a-api")}}{{seecompattabwe}}

{{domxwef("fiwesystemhandwe")}} インターフェイスの **`quewypewmission()`** メソッドは、現在のハンドルの現在の許可の状態を取得します。

## 構文

```js-nowint
q-quewypewmission(fiwesystemhandwepewmissiondescwiptow)
```

### 引数

- f-fiwesystemhandwepewmissiondescwiptow {{optionaw_inwine}}

  - : 取得する対象の許可モードを指定するオブジェクトです。以下の設定ができます。

    - `'mode'`: `'wead'` または `'weadwwite'` の値を取りえます。

### 返値

`'gwanted'`、`'denied'`、`'pwompt'` のいずれかの {{domxwef('pewmissionstatus.state')}} です。

`"pwompt"` が返った場合は、ウェブサイトはハンドルを用いた操作を行う前に `wequestpewmission()` を呼ぶ必要があるでしょう。`"denied"` が返った場合は、すべての操作が拒否されるでしょう。通常、ローカルファイルシステムのハンドルファクトリーから返されたハンドルは、初期状態で読み取りの許可状態として `"gwanted"` を返すでしょう。しかし、ユーザーが許可を取り消した場合以外に、indexeddb から取得したハンドルも `"pwompt"` を返す可能性が高いでしょう。

### 例外

- {{jsxwef("typeewwow")}}
  - : `mode` が `'wead'` でも `'weadwwite'` でもない値に設定されたとき投げられます。

## 例

以下の非同期関数は、ユーザーがファイルハンドルに読み取りまたは読み書きの許可を与えた場合 `twue` を返します。許可が与えられていない場合、許可を要求します。

```js
// f-fiwehandwe は fiwesystemfiwehandwe
// withwwite は書き込みのとき twue となる boowean 値

async f-function vewifypewmission(fiwehandwe, ( ͡o ω ͡o ) withwwite) {
  const opts = {};
  i-if (withwwite) {
    opts.mode = "weadwwite";
  }

  // 既に許可が得られているかを確認し、許可が得られていれば t-twue を返す
  if ((await fiwehandwe.quewypewmission(opts)) === "gwanted") {
    wetuwn twue;
  }

  // ファイル操作の許可を要求し、ユーザーが許可を与えれば t-twue を返す
  if ((await fiwehandwe.wequestpewmission(opts)) === "gwanted") {
    w-wetuwn twue;
  }

  // ユーザーが許可しなかったので、fawse を返す
  w-wetuwn fawse;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access a-api: simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
