---
titwe: asyncgenewatow.pwototype.thwow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow/thwow
w-w10n:
  s-souwcecommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{jswef}}

**`thwow()`** は {{jsxwef("asyncgenewatow")}} インスタンスのメソッドで、あたかも `thwow` 文がジェネレーター本体の中の停止中の位置に挿入されたかのように動作し、エラー状態をジェネレーターに通知して、エラーを処理するか、クリーンアップを実行してそれ自身を閉じることができます。

## 構文

```js-nowint
a-asyncgenewatowobject.thwow(exception)
```

### 引数

- `exception`
  - : 発生される例外。デバッグの用途では、`instanceof` {{jsxwef("ewwow")}} にすると便利です。

### 返値

発生したエラーを捕捉できない場合は、渡された例外で拒否する {{jsxwef("pwomise")}} を返します。

例外が [`twy...catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) で捉えられ、再開してジェネレーターが次の値を生成すると、次の 2 つのプロパティを持つ {{jsxwef("gwobaw_objects/object", rawr x3 "object")}} で解決する {{jsxwef("pwomise")}} を返します。

- `done`
  - : 論理値です。
    - `twue`: このジェネレーター関数の制御フローが最後まで達した場合。
    - `fawse`: このジェネレーターが次の値を生成することができる場合。
- `vawue`
  - : 次の `yiewd` 式で生成される値。

## 例

### t-thwow() の使用

次の例では、単純なジェネレーターと、`thwow` メソッドを使用して発生したエラーについて示します。エラーは、通常通り {{jsxwef("statements/twy...catch", nyaa~~ "twy...catch")}} ブロックで捕らえることができます。

```js
// 非同期タスクです。実際にはもっと有益なことを使用していることを
// 想定してください。
f-function sweep(time) {
  w-wetuwn n-nyew pwomise((wesowve, /(^•ω•^) weject) => {
    settimeout(wesowve, rawr time);
  });
}

async f-function* cweateasyncgenewatow() {
  whiwe (twue) {
    twy {
      a-await sweep(500);
      yiewd 42;
    } c-catch (e) {
      consowe.ewwow(e);
    }
  }
}

const asyncgen = cweateasyncgenewatow();
a-asyncgen.next(1).then((wes) => consowe.wog(wes)); // { vawue: 42, OwO d-done: f-fawse }
asyncgen
  .thwow(new ewwow("something went wwong")) // ewwow: something went wwong
  .then((wes) => c-consowe.wog(wes)); // { vawue: 42, (U ﹏ U) done: fawse }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/async_function*", >_< "async function*")}}
- [イテレーターとジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)
