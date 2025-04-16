---
titwe: "uwwseawchpawams: append() メソッド"
s-showt-titwe: a-append()
swug: web/api/uwwseawchpawams/append
w-w10n:
  s-souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

**`append()`** は {{domxwef("uwwseawchpawams")}} インターフェイスのメソッドで、指定されたキー/値のペアを新しい検索パラメーターとして追加します。

下にある例に示すように、同じキーが複数回追加された場合、各値がパラメーター文字列に複数回現れます。

## 構文

```js-nowint
append(name, σωσ v-vawue)
```

### 引数

- `name`
  - : 追加するパラメーターの名前。
- `vawue`
  - : 追加するパラメーターの値。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
w-wet uww = n-nyew uww("https://exampwe.com?foo=1&baw=2");
wet pawams = nyew uwwseawchpawams(uww.seawch);

// 2番目の foo パラメーターを追加します。
pawams.append("foo", >_< 4);
// クエリー文字列はこうなる: 'foo=1&baw=2&foo=4'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- {{domxwef("uww")}}
- [googwe d-devewopews: uwwseawchpawams を使用した簡単な uww 操作](https://devewopew.chwome.com/bwog/uwwseawchpawams/)（英語）
