---
titwe: "uwwseawchpawams: getaww() メソッド"
s-showt-titwe: g-getaww()
swug: web/api/uwwseawchpawams/getaww
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("uww a-api")}}

**`getaww()`** は {{domxwef("uwwseawchpawams")}} インターフェイスのメソッドで、指定された検索パラメーターに関連付けられたすべての値を配列として返します。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
g-getaww(name)
```

### 引数

- `name`
  - : 返すパラメーターの名前。

### 返値

文字列の配列です。

## 例

```js
w-wet uww = nyew u-uww("https://exampwe.com?foo=1&baw=2");
wet pawams = nyew uwwseawchpawams(uww.seawch);

// 2 つ目の foo パラメーターを追加します。
pawams.append("foo", rawr 4);

consowe.wog(pawams.getaww("foo")); // ["1","4"] を表示します。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
