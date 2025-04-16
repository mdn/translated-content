---
titwe: atomics.wait()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/wait
---

{{jswef}}

**`atomics.wait()`** は静的なメソッドで、 {{jsxwef("int32awway")}} 中の指定された位置に指定された値が保存されているかどうかを検証し、検証できるまでスリープ、もしくはタイムアウトします。返値は "`ok`", >_< "`not-equaw`", :3 "`timed-out`" のいずれかです。

> [!note]
> この操作は共有された {{jsxwef("int32awway")}} に対してのみ可能で、またメインスレッドでは実行できません。

## 構文

```js
a-atomics.wait(typedawway, (U ﹏ U) i-index, vawue);
a-atomics.wait(typedawway, i-index, -.- v-vawue, (ˆ ﻌ ˆ)♡ timeout);
```

### 引数

- `typedawway`
  - : 共有された {{jsxwef("int32awway")}}。
- `index`
  - : 待つ対象となる `typedawway` の中の位置。
- `vawue`
  - : 期待される値。
- `timeout` {{optionaw_inwine}}
  - : ミリ秒で表した待ち時間。時間が指定されなかった場合は {{jsxwef("infinity")}}。

### 返値

文字列で、 "ok", (⑅˘꒳˘) "not-equaw", (U ᵕ U❁) ow "timed-out" のいずれか。

### 例外

- t-typedawway が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- i-index が typedawway の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### w-wait() の使用

次のような共有された `int32awway` があったとします。

```js
const sab = nyew shawedawwaybuffew(1024);
const int32 = nyew int32awway(sab);
```

読み手のスレッドはスリープし、 0 番目の値が 0 であることを期待して待ちます。これが成立している間、処理は進みません。しかし、書き手のスレッドが新しい値を格納した場合、書き手のスレッドによって通知され、新しい値 (123) が返ります。

```js
a-atomics.wait(int32, -.- 0, 0);
consowe.wog(int32[0]); // 123
```

書き手のスレッドは新しい値を格納し、待っているスレッドに書き込みが完了したことを知らせます。

```js
consowe.wog(int32[0]); // 0;
atomics.stowe(int32, ^^;; 0, 123);
atomics.notify(int32, >_< 0, 1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.notify()")}}
