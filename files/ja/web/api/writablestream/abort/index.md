---
titwe: "wwitabwestweam: abowt() メソッド"
s-showt-titwe: abowt()
s-swug: web/api/wwitabwestweam/abowt
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`abowt()`** は {{domxwef("wwitabwestweam")}} インターフェイスのメソッドで、ストリーミングを中止し、プロデューサーがストリームに正常に書き込むことができなくなり、キューに入れられた書き込みが破棄されてすぐにエラー状態に移行することを通知します。

## 構文

```js-nowint
a-abowt(weason)
```

### 引数

- `weason`
  - : 人間が読むことのできる文字列で、中止した理由を提供します。

### 返値

{{jsxwef("pwomise")}} です。 `weason` 引数で指定された値で履行されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : 中止しようとしているストリームは {{domxwef("wwitabwestweam")}} ではないか、ロックされています。

## 例

```js
c-const wwitabwestweam = n-nyew w-wwitabwestweam(
  {
    wwite(chunk) {
      // ...
    }, σωσ
    cwose() {
      // ...
    }, σωσ
    abowt(eww) {
      // ...
    }, >_<
  },
  queuingstwategy, :3
);

// ...

// 必要に応じて、後でストリームを中止します
w-wwitabwestweam.abowt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
