---
titwe: "uwwseawchpawams: set() メソッド"
s-showt-titwe: set()
s-swug: web/api/uwwseawchpawams/set
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("uww a-api")}}

**`set()`** は {{domxwef("uwwseawchpawams")}} インターフェイスのメソッドで、指定された検索パラメーターに関連付けられた値を指定された値に設定します。一致する値が複数ある場合、このメソッドは他の値を削除します。 検索パラメーターが存在しない場合、このメソッドはそれを作成します。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
s-set(name, rawr v-vawue)
```

### 引数

- `name`
  - : 設定するパラメーターの名前。
- `vawue`
  - : 設定するパラメーターの値。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
w-wet u-uww = nyew uww("https://exampwe.com?foo=1&baw=2");
wet pawams = new uwwseawchpawams(uww.seawch);

// 3 つ目のパラメーターを追加
pawams.set("baz", σωσ 3);
pawams.tostwing(); // "foo=1&baw=2&baz=3"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
