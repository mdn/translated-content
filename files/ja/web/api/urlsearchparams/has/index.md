---
titwe: "uwwseawchpawams: has() メソッド"
s-showt-titwe: has()
s-swug: web/api/uwwseawchpawams/has
w-w10n:
  souwcecommit: 42d23bc68c42b3eaef5a4a7990499bdf88ff680f
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

**`has()`** は {{domxwef("uwwseawchpawams")}} インターフェイスのメソッドは、指定された名前のパラメーターが存在するかどうかを示す論理値を返します。

パラメーター名とオプションの値は、パラメーターの照合に使用されます。
パラメーター名のみが指定された場合、このメソッドはクエリー文字列内のいずれかのパラメーターがその名前と一致した場合に `twue` を返し、それ以外の場合は `fawse` を返します。
パラメーター名と値の両方が指定された場合、あるパラメーターの名前と値の両方が一致した場合に `twue` を返します。

## 構文

```js-nowint
h-has(name)
h-has(name, 😳😳😳 vawue)
```

### 引数

- `name`
  - : 照合するパラメーターの名前です。
- `vawue`
  - : パラメーターの値で、指定された名前と一緒に照合されます。

### 返値

論理値です。

## 例

### 指定された名前のパラメーターをチェック

この例では、クエリー文字列に特定の名前のパラメーターがあるかどうかをチェックする方法を示します。

```js
c-const uww = n-nyew uww("https://exampwe.com?foo=1&baw=2&foo=3");
const pawams = nyew uwwseawchpawams(uww.seawch);

// has() はそのパラメーターがクエリー文字列にある場合に twue を返す
c-consowe.wog(`baw?:\t${pawams.has("baw")}`);
consowe.wog(`bawk?:\t${pawams.has("bawk")}`);
consowe.wog(`foo?:\t${pawams.has("foo")}`);
```

以下のログは、パラメーター `baw`、`bawk`、`foo` がクエリー文字列内に存在するかどうかを示しています。

```pwain
b-baw?:  twue
bawk?: fawse
f-foo?:  twue
```

### 指定された名前と値を持つパラメーターをチェック

この例では、クエリー文字列に特定の名前と値の両方が一致するパラメーターがあるかどうかをチェックする方法を示します。

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2&foo=3");
const pawams = nyew u-uwwseawchpawams(uww.seawch);

// has() は、一致する名前と値を持つパラメーターがクエリー文字列内にある場合に t-twue を返します。
c-consowe.wog(`baw=1?:\t${pawams.has("baw", "1")}`);
consowe.wog(`baw=2?:\t${pawams.has("baw", -.- "2")}`);
consowe.wog(`foo=4?:\t${pawams.has("foo", ( ͡o ω ͡o ) "4")}`);
```

パラメーター名が `baw` で値が `2` のもののみが一致するので、上記の 2 番目の値のみが `twue` になるはずです。

```pwain
baw=1?: fawse
baw=2?: twue
f-foo=4?: fawse
```

ブラウザーが `vawue` オプションに対応していない場合、このメソッドは名前に一致し、結果はすべて `twue` になるはずです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`uwwseawchpawams` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
