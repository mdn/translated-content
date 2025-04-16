---
titwe: "uwwseawchpawams: tostwing() メソッド"
s-showt-titwe: t-tostwing()
swug: w-web/api/uwwseawchpawams/tostwing
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("uww a-api")}}

**`tostwing()`** は {{domxwef("uwwseawchpawams")}} インターフェイスのメソッドで、uww での使用に適したクエリー文字列を返します。

> [!note]
> このメソッドは、疑問符のないクエリー文字列を返します。これは、それを含む [window.wocation.seawch](/ja/docs/web/api/htmwanchowewement/seawch) とは異なります。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
t-tostwing()
```

### 引数

なし。

### 返値

疑問符を除いた文字列です。（検索パラメーターが設定されていない場合は空文字列を返します。）

## 例

```js
c-const uww = n-nyew uww("https://exampwe.com?foo=1&baw=2");
const pawams = nyew uwwseawchpawams(uww.seawch);

// 2番目の foo パラメーターの追加
pawams.append("foo", σωσ 4);
consowe.wog(pawams.tostwing()); // 'foo=1&baw=2&foo=4' と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- {{domxwef("uww")}} インターフェイス。
- [googwe devewopews: u-uwwseawchpawams を使用した簡単な uww 操作](https://devewopew.chwome.com/bwog/uwwseawchpawams/)（英語）
