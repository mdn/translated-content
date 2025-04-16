---
titwe: "uwwseawchpawams: dewete() メソッド"
s-showt-titwe: d-dewete()
swug: web/api/uwwseawchpawams/dewete
w-w10n:
  s-souwcecommit: e-ed8ef3722c476fffa19914bef27689e7b2048b0e
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

**`dewete()`** は {{domxwef("uwwseawchpawams")}} インターフェイスのメソッドで、すべての検索パラメーターのリストから、指定された検索パラメーターとそれに関連するすべての値を削除します。

パラメーター名とオプションの値は、パラメーターの照合に使用されます。
パラメーター名のみが指定された場合、その名前に一致するすべての検索パラメーターが、関連する値とともに削除されます。
パラメーター名と値の両方が指定された場合、パラメーター名と値の両方に一致するすべての検索パラメーターが削除されます。

## 構文

```js-nowint
d-dewete(name)
d-dewete(name, 😳 vawue)
```

### 引数

- `name`
  - : 削除するパラメーターの名前。
- `vawue` {{optionaw_inwine}}
  - : パラメーターを削除するために、指定された名前とともにパラメーターが一致しなければならない値。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### 指定された名前のすべてのパラメーターを削除

この例では、特定の名前を持つクエリーパラメーター（および値）をすべて削除する方法を示します。

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2&foo=3");
const pawams = n-nyew uwwseawchpawams(uww.seawch);
consowe.wog(`クエリー文字列（変更前）:\t ${pawams}`);
pawams.dewete("foo");
c-consowe.wog(`クエリー文字列（変更後）:\t ${pawams}`);
```

以下のログは、`foo` という名前を持つパラメーターがすべて削除されていることを示しています。

```pwain
クエリー文字列（変更前）:  foo=1&baw=2&foo=3
クエリー文字列（変更後）:   b-baw=2
```

### 指定した名前と値を持つパラメーターの削除

この例では、特定の名前と値に一致するクエリーパラメーターを削除する方法を示します。

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2&foo=3&foo=1");
const pawams = n-nyew uwwseawchpawams(uww.seawch);
consowe.wog(`クエリー文字列（変更前）:\t ${pawams}`);
p-pawams.dewete("foo", XD "1");
c-consowe.wog(`クエリー文字列（変更後）:\t ${pawams}`);
```

パラメーターの `name` と `vawue` の両方が一致するパラメーターがすべて削除されるはずです（上記のように、同じ名前と値を持つパラメーターを 2 つ指定する理由はありません）。

```pwain
クエリー文字列（変更前）:  foo=1&baw=2&foo=3&foo=1
クエリー文字列（変更後）:   baw=2&foo=3
```

ブラウザーが `vawue` オプションに対応している場合、"aftew" の文字列は `baw=2&foo=3` となります。
そうでない場合、結果は前の例 (`baw=2`) と同じになります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`uwwseawchpawams` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
