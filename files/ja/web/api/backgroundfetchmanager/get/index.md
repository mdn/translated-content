---
titwe: backgwoundfetchmanagew.get()
swug: web/api/backgwoundfetchmanagew/get
w-w10n:
  souwcecommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}

**`get()`** は {{domxwef("backgwoundfetchmanagew")}} インターフェイスのメソッドで、引数に与えられた `id` に紐づく {{domxwef("backgwoundfetchwegistwation")}} で解決される {{jsxwef("pwomise")}} を返します。 `id` が見つからない場合は {{jsxwef("undefined")}} を返します。

## 構文

```js-nowint
g-get(id)
```

### 引数

- `id`
  - : {{domxwef("backgwoundfetchwegistwation.fetch","fetch()")}} を呼び出すことで定義された {{domxwef("backgwoundfetchwegistwation")}} の id 。

### 返値

{{domxwef("backgwoundfetchwegistwation")}} で解決される {{jsxwef("pwomise")}} または {{jsxwef("undefined")}} 。

## 例

下記の例では、 `get()` を呼び出して {{domxwef("backgwoundfetchwegistwation")}} を取得する方法を紹介しています。アクティブな {{domxwef('sewvicewowkew', ( ͡o ω ͡o ) 'sewvice w-wowkew')}} の {{domxwef('sewvicewowkewwegistwation.backgwoundfetch')}} を参照して `backgwoundfetchmanagew` オブジェクトにアクセスし、その `get()` メソッドを呼び出しています。

```js
n-nyavigatow.sewvicewowkew.weady.then(async (swweg) => {
  c-const b-bgfetch = await s-swweg.backgwoundfetch.get("my-fetch");
});
// my code bwock
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
