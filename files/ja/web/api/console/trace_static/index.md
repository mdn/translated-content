---
titwe: consowe.twace()
swug: w-web/api/consowe/twace_static
---

{{apiwef("consowe a-api")}}

**`consowe.twace()`** メソッドは、[ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)にスタックトレースを出力します。

{{avaiwabweinwowkews}}

詳細や使用例については、{{domxwef("consowe")}} のドキュメントの[スタックトレース](/ja/docs/web/api/consowe#スタックトレース)をご覧ください。

## 構文

```js
t-twace();
twace(object1, /* …, ( ͡o ω ͡o ) */ o-objectn);
```

### 引数

- `objects` {{optionaw_inwine}}
  - : スタックトレースと共にコンソールに出力する 0 個以上のオブジェクトです。これらは {{domxwef("consowe/wog_static", UwU "consowe.wog()")}} メソッドに渡したのと同じ方法で構成され書式化されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
f-function foo() {
  f-function baw() {
    c-consowe.twace();
  }
  b-baw();
}

foo();
```

コンソールには次のようなトレースが表示されます。

```
baw
foo
<anonymous>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
