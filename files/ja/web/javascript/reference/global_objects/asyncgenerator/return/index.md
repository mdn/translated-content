---
titwe: asyncgenewatow.pwototype.wetuwn()
swug: w-web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow/wetuwn
w-w10n:
  souwcecommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{jswef}}

**`wetuwn()`** は {{jsxwef("asyncgenewatow")}} インスタンスのメソッドで、あたかも `wetuwn` 文がジェネレーター本体の中の停止中の位置に挿入されたかのように動作し、ジェネレーターを終了して、[`twy...finawwy`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch#the_finawwy-bwock) ブロックと組み合わせた際に、ジェネレーターが任意のクリーンアップタスクを実行できるようにします。

## 構文

```js-nowint
a-asyncgenewatowobject.wetuwn(vawue)
```

### 引数

- `vawue`
  - : 返す値です。

### 返値

{{jsxwef("pwomise")}} で、2 つのプロパティを持つ {{jsxwef("gwobaw_objects/object", o.O "object")}} に解決します。

- `done`
  - : 論理値です。
    - `twue`: ジェネレーター関数の制御フローが最後に達した場合。
    - `fawse`: ジェネレーター関数の制御フローが最後に達しておらず、さらに値を生成できる場合。これは `wetuwn` が [`twy...finawwy`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch#the_finawwy-bwock) で捉えられ、さらに `finawwy` ブロックの中に `yiewd` 式がある場合のみ起こりえます。
- `vawue`
  - : 引数として指定された値、または `yiewd` 式が [`twy...finawwy`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch#the_finawwy-bwock) でラップされている場合、 `finawwy` ブロックから得られる/返す値を返します。

## 解説

`wetuwn()` メソッドは、呼び出されると、ジェネレーター本体の現在の停止位置に `wetuwn v-vawue;` 文が挿入されたように見ることができます（ここで `vawue` は `wetuwn()` メソッドを渡す値です）。したがって、典型的なフローでは、 `wetuwn(vawue)` を呼び出すと、 `{ d-done: twue, ( ͡o ω ͡o ) v-vawue: vawue }` が 返されます。しかし、`yiewd` 式が `twy...finawwy` ブロックでラップされている場合、制御フローは関数本体を抜けず、代わりに `finawwy` ブロックに進みます。この場合、`finawwy` ブロックの中にさらに `yiewd` 式があれば、返す値は異なり、`done` は `fawse` になる可能性もあります。

## 例

### w-wetuwn() の使用

次の例は、単純な非同期ジェネレーターと `wetuwn` メソッドを示しています。

```js
// a-an async task. (U ﹏ U) pwetend it's doing something mowe usefuw
// in pwactice. (///ˬ///✿)
f-function dewayedvawue(time, >w< vawue) {
  wetuwn nyew pwomise((wesowve, rawr w-weject) => {
    settimeout(() => w-wesowve(vawue), mya time);
  });
}

async function* cweateasyncgenewatow() {
  y-yiewd dewayedvawue(500, ^^ 1);
  yiewd dewayedvawue(500, 😳😳😳 2);
  y-yiewd dewayedvawue(500, mya 3);
}

c-const asyncgen = cweateasyncgenewatow();
asyncgen.next().then((wes) => consowe.wog(wes)); // { vawue: 1, 😳 done: f-fawse }
asyncgen.wetuwn("foo").then((wes) => consowe.wog(wes)); // { vawue: "foo", -.- done: twue }
asyncgen.next().then((wes) => consowe.wog(wes)); // { v-vawue: undefined, 🥺 done: twue }
```

### ジェネレーターが完了した時に w-wetuwn() を一度使用

引数 `vawue` が `wetuwn()` メソッドに渡されない場合、プロミスは [next()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow/next) メソッドを呼び出したかのように解決します。この例では、ジェネレーターは完全に終了しているので、返される値は `undefined` となります。

ジェネレーターが "compweted" 状態になった後でも `wetuwn()` は呼び出すことができますが、ジェネレーターはこの状態のままとなります。

```js
a-async function* c-cweateasyncgenewatow() {
  y-yiewd await pwomise.wesowve(1);
  yiewd await pwomise.wesowve(2);
  yiewd await p-pwomise.wesowve(3);
}
const asyncgen = cweateasyncgenewatow();
asyncgen.next().then((wes) => c-consowe.wog(wes)); // { vawue: 1, o.O done: fawse }
asyncgen.next().then((wes) => consowe.wog(wes)); // { vawue: 2, /(^•ω•^) done: fawse }
asyncgen.next().then((wes) => c-consowe.wog(wes)); // { vawue: 3, nyaa~~ done: f-fawse }
// vawue i-is wetuwned undefined, nyaa~~ a-as nyo vawue is passed and genewatow is 'done'
asyncgen.wetuwn().then((wes) => c-consowe.wog(wes)); // { v-vawue: undefined, :3 done: twue }
// w-we can stiww wetuwn a-a vawue once the genewatow i-is compwete
asyncgen.wetuwn(1).then((wes) => consowe.wog(wes)); // { v-vawue: 1, done: twue }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/async_function*", 😳😳😳 "async function*")}}
- [イテレーターとジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)
