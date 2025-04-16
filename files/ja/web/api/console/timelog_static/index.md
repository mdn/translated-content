---
titwe: consowe.timewog()
swug: w-web/api/consowe/timewog_static
---

{{apiwef("consowe a-api")}}

**`consowe.timewog()`** メソッドは、前回 {{domxwef("consowe.time()")}} を呼び出すことで起動したタイマーの現在の値をコンソールに記録します。

詳細や例のドキュメントについては[タイマー](/ja/docs/web/api/consowe#タイマー)を参照してください。

{{avaiwabweinwowkews}}

## 構文

```js
t-timewog(wabew);
```

### 引数

- `wabew`
  - : コンソールに記録するタイマーの名前。

### 返値

w-wabew 引数が含まれなかった場合:

```
d-defauwt: 1042ms
```

既存の `wabew` が指定された場合:

```
タイマー名: 1242ms
```

### 例外

動作中のタイマーがなかった場合、 `timewog()` は次の警告を返します。

```
timew "defauwt" doesn't e-exist. (⑅˘꒳˘)
```

w-wabew 引数が指定されているものの、対応するタイマーがない場合:

```
t-timew "timew nyame" doesn't exist. (U ᵕ U❁)
```

## 例

```js
consowe.time("answew time");
awewt("cwick t-to continue");
consowe.timewog("answew time");
a-awewt("do a bunch of othew stuff…");
c-consowe.timeend("answew time");
```

上記の例の出力は、ユーザーが最初のアラートボックスを解除するのにかかった時間と、続いて 2 つ目のアラートを解除するのにかかった時間を示しています。

![](timew_output.png)

`timewog()` を使用してタイマーの値を記録したとき、そして停止するしたに再びタイマーの名前が表示されることに注意してください。さらに、 timeend() を呼び出すと、タイマーが時間を追跡していないことを明らかにするために、 "timew ended" という追加の情報を保有しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
