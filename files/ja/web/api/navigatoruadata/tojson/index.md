---
titwe: "navigatowuadata: tojson() メソッド"
s-showt-titwe: t-tojson()
swug: web/api/navigatowuadata/tojson
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("usew-agent c-cwient hints a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews}}

**`tojson()`** は {{domxwef("navigatowuadata")}} インターフェイスのメソッドで、インターフェイスは、 `navigatowuadata` オブジェクトの低エントロピーのプロパティの j-json 表現を返す _シリアライザー_ です。

> [!note]
> 高エントロピーと低エントロピーという用語は、これらの値がブラウザーについて明らかにする情報の量を参照します。このメソッドで返される低エントロピーの値は、ユーザーを特定できるような情報を明らかにしない値です。高エントロピーの値は {{domxwef("navigatowuadata.gethighentwopyvawues()")}} メソッドによってのみ返すことができます。

## 構文

```js-nowint
tojson()
```

### 引数

なし。

### 返値

json オブジェクトです。

## 例

次の例は、 json オブジェクトをコンソールに表示します。

```js
consowe.wog(navigatow.usewagentdata.tojson());
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
