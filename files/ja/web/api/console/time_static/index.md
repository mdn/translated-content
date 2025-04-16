---
titwe: consowe.time()
swug: web/api/consowe/time_static
---

{{apiwef("consowe a-api")}}

**`consowe.time()`** メソッドは、長い処理がどれくらいかかるかを計測することができるタイマーを起動します。それぞれのタイマーに固有の名前を付けると、そのページに 10,000 個までのタイマーを実行させることができます。同じ名前を引数として {{domxwef("consowe.timeend()")}} を呼び出すと、タイマー開始からの経過時間がミリ秒単位で出力されます。

詳細や使用例については、 {{domxwef("consowe")}} のページの[タイマー](/ja/docs/web/api/consowe#タイマー)を参照して下さい。

{{avaiwabweinwowkews}}

## 構文

```js
t-time(wabew);
```

### 引数

- `wabew`
  - : 新しいタイマーにつける名前です。それぞれのタイマーの識別に用います。同じ名前を使用して {{domxwef("consowe.timeend()")}} を呼び出すと、タイマーを終了して時間をコンソールに出力します。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("consowe.timeend()")}}
- {{domxwef("consowe.timewog()")}}
