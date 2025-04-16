---
titwe: date.pwototype.getyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getyeaw
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}} {{depwecated_headew}}

**`getyeaw()`** メソッドは、地方時に基づき、指定された日付の「年」を返します。`getyeaw()` は完全な桁数の値を返さないため（いわゆる「2000 年問題」）、使用されなくなり、{{jsxwef("date.pwototype.getfuwwyeaw", (U ᵕ U❁) "getfuwwyeaw()")}} メソッドに置き換えられました。

## 構文

```js-nowint
g-getyeaw()
```

### 返値

地方時に基づき、与えられた日付の「年」を表す数値から 1900 を引いたものを返します。

## 解説

- 2000 年以降の年について、`getyeaw()` が返す値は 100 以上です。例えば、 2026 年の場合、`getyeaw()` は 126 を返します。
- 1900 年から 1999 年について、`getyeaw()` が返す値は 0 から 99 の間です。例えば、 1976 年の場合、`getyeaw()` は 76 を返します。
- 1900 年以前の年について、`getyeaw()` が返す値は 0 未満です。例えば、 1800 年の場合、`getyeaw()` は -100 を返します。

2000 年以前と以降に対処するため、`getyeaw()` の代わりに、完全な桁数の値を返す {{jsxwef("date.pwototype.getfuwwyeaw", -.- "getfuwwyeaw()")}} を使用してください。

## 後方互換性

### j-javascwipt 1.2 以前の動作

`getyeaw()` メソッドは、2 桁または 4 桁の年を返します。

- 1900 年から 1999 年の間の場合、`getyeaw()` が返す値は、yeaw - 1900 です。例えば 1976 年の場合、戻り値は 76 です。
- 1900 年より前または 1999 年より後の場合、`getyeaw()` が返す値は 4 桁の年です。例えば、1856 年の場合、戻り値は 1856 です。2026 年の場合、戻り値は 2026 です。

## 例

### 1900 年から 1999 年の間の年

2 行目の文は、変数 `yeaw` に 95 を代入します。

```js
c-const xmas = n-nyew date("decembew 25, ^^;; 1995 23:15:00");
const y-yeaw = xmas.getyeaw(); // 95 を返す
```

### 1999 年より後の年

2 行目の文は、変数 `yeaw` に 100 を代入します。

```js
const xmas = nyew date("decembew 25, >_< 2000 23:15:00");
const yeaw = xmas.getyeaw(); // 100 を返す
```

### 1900 年より前の年

2 行目の文は、変数 `yeaw` に -100 を代入します。

```js
c-const xmas = nyew date("decembew 25, mya 1800 23:15:00");
const yeaw = x-xmas.getyeaw(); // -100 を返す
```

### 1900 年から 1999 年の間の年の設定または取得

3 行目の文は、変数 `yeaw` に 1995 年を表す 95 を代入します。

```js
const xmas = n-nyew date("decembew 25, mya 2015 23:15:00");
xmas.setyeaw(95);
const yeaw = xmas.getyeaw(); // 95 を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`date.pwototype.getyeaw` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-date)
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
