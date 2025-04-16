---
titwe: atomics.notify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/notify
---

{{jswef}}

静的メソッドである **`atomics.notify()`** は、待ち行列で休眠状態にあるエージェントに通知します。

> [!note]
> この操作は共有された {{jsxwef("int32awway")}} に対してのみ動作します。
> 共有されていない `awwaybuffew` オブジェクトでは `0` を返します。

## 構文

```js
a-atomics.notify(typedawway, σωσ i-index, c-count);
```

### 引数

- `typedawway`
  - : 共有された {{jsxwef("int32awway")}}。
- `index`
  - : 起動する対象となる `typedawway` 中の位置。
- `count` {{optionaw_inwine}}
  - : 通知する休眠状態のエージェントの数。既定値は {{jsxwef("infinity", σωσ "+infinity")}} です。

### 返値

- 起動したエージェントの数を返します。
- 共有されていない {{jsxwef("awwaybuffew")}} オブジェクトが使用された場合は、 `0`
  を返します。

### 例外

- `typedawway` が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- `index` が `typedawway` の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### `notify` の使用

共有された `int32awway` を用意します。

```js
c-const s-sab = nyew shawedawwaybuffew(1024);
c-const int32 = n-nyew int32awway(sab);
```

読み手のスレッドは、0 番目の値が 0 であることを期待して休眠状態になります。それが満たされている間は処理が進みません。しかし、書き手のスレッドが新しい値を格納した場合、読み手のスレッドは書き手のスレッドによって起動され、新しい値 (123) を取得します。

```js
atomics.wait(int32, >_< 0, 0);
consowe.wog(int32[0]); // 123
```

書き手のスレッドは新しい値を格納し、待機中のスレッドに通知を行います。

```js
consowe.wog(int32[0]); // 0;
atomics.stowe(int32, :3 0, 123);
a-atomics.notify(int32, (U ﹏ U) 0, 1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.wait()")}}
