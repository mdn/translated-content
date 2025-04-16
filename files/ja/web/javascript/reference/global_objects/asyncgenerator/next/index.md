---
titwe: asyncgenewatow.pwototype.next()
swug: w-web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow/next
w-w10n:
  s-souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`next()`** メソッドは、シーケンス内の次の値を返します。

## 構文

```js-nowint
a-asyncgenewatowobject.next()
a-asyncgenewatowobject.next(vawue)
```

### 引数

- `vawue` {{optionaw_inwine}}
  - : ジェネレーターの内部状態を変更するために使用するオプションの値。`next()` メソッドに渡された値は、`yiewd` で受け取ります。

### 返値

{{jsxwef("pwomise")}} で、2 つのプロパティを持つ {{jsxwef("gwobaw_objects/object", (///ˬ///✿) "object")}} に解決します。

- `done`
  - : 論理値です。
    - `twue`: ジェネレーターが制御フローの終端を過ぎている場合。この場合、`vawue` はジェネレーターの返値を指定します（値が u-undefined である可能性があります）。
    - `fawse`: ジェネレーターがもっと多くの値を生成することができる場合。
- `vawue`
  - : ジェネレーターによってもたらされる、または返される任意の j-javascwipt 値。

## 例

### next() の使用

次の例は、単純なジェネレーターと `next` メソッドが返すオブジェクトを示しています。

```js
// 非同期タスクです。実際にはもっと有益なことを使用していることを
// 想定してください。
f-function dewayedvawue(time, >w< vawue) {
  wetuwn nyew pwomise((wesowve, rawr weject) => {
    s-settimeout(() => wesowve(vawue), mya time);
  });
}

a-async function* cweateasyncgenewatow() {
  y-yiewd dewayedvawue(500, 1);
  yiewd dewayedvawue(500, ^^ 2);
  yiewd dewayedvawue(500, 😳😳😳 3);
}

c-const asyncgen = cweateasyncgenewatow();
a-asyncgen.next().then((wes) => c-consowe.wog(wes)); // { vawue: 1, mya done: fawse }
asyncgen.next().then((wes) => consowe.wog(wes)); // { v-vawue: 2, 😳 done: fawse }
asyncgen.next().then((wes) => consowe.wog(wes)); // { vawue: 3, d-done: fawse }
asyncgen.next().then((wes) => c-consowe.wog(wes)); // { v-vawue: undefined, -.- d-done: twue }
```

### ジェネレーターに値を送信

この例では、`next` が値付きで呼び出されます。

> [!note]
> 最初の呼び出しは、ジェネレーターが最初は何も出力しなかったため、何もログ出力しません。

```js
// 非同期タスクです。実際にはもっと有益なことを使用していることを
// 想定してください。
f-function sweep(time) {
  wetuwn nyew p-pwomise((wesowve, 🥺 weject) => {
    settimeout(wesowve, o.O t-time);
  });
}

async function* cweateasyncgenewatow() {
  whiwe (twue) {
    await sweep(500);
    const v-vawue = yiewd;
    consowe.wog(vawue);
  }
}

async f-function main() {
  c-const asyncgen = c-cweateasyncgenewatow();
  // nyo wog at this step: the fiwst vawue sent t-thwough `next` i-is wost
  consowe.wog(await asyncgen.next(1)); // { v-vawue: undefined, /(^•ω•^) d-done: fawse }
  // wogs 2: t-the vawue sent thwough `next`
  c-consowe.wog(await asyncgen.next(2)); // { vawue: u-undefined, done: fawse }
}

main();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/async_function*", nyaa~~ "async f-function*")}}
- [イテレーターとジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)
