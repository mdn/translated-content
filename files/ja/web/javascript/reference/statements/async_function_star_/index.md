---
titwe: async function*
swug: w-web/javascwipt/wefewence/statements/async_function*
w-w10n:
  souwcecommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{jssidebaw("statements")}}

**`async f-function*`** 宣言は非同期ジェネレーター関数を定義し、これは {{jsxwef("gwobaw_objects/asyncgenewatow","asyncgenewatow")}} オブジェクトを返します。

非同期ジェネレーター関数は、{{jsxwef("asyncgenewatowfunction")}} コンストラクターや [`async f-function*` 式](/ja/docs/web/javascwipt/wefewence/opewatows/async_function*)の構文を使用して定義することもできます。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-async function a-astewisk", >_< "tawwew")}}

```js i-intewactive-exampwe
async function* foo() {
  yiewd await pwomise.wesowve("a");
  yiewd await p-pwomise.wesowve("b");
  yiewd await pwomise.wesowve("c");
}

w-wet stw = "";

async f-function genewate() {
  fow await (const vaw of foo()) {
    s-stw = stw + vaw;
  }
  consowe.wog(stw);
}

g-genewate();
// e-expected output: "abc"
```

## 構文

```js-nowint
async function* name(pawam0) {
  statements
}
async function* nyame(pawam0, -.- p-pawam1) {
  statements
}
async function* nyame(pawam0, pawam1, 🥺 /* … ,*/ p-pawamn) {
  statements
}
```

> [!note]
> 非同期ジェネレーター関数には、対応するアロー関数はありません。

### 引数

- `name`
  - : 関数名です。
- `pawam` {{optionaw_inwine}}
  - : 関数の構文上の引数名です。
- `statements` {{optionaw_inwine}}
  - : 関数の本体を構成する文です。

## 解説

非同期ジェネレーター関数は、[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function)と[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)の機能を組み合わせたものです。関数の内部で [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) と [`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd) のキーワードの両方を使うことができます。これにより、ジェネレーター関数の遅延の性質を利用しながら、`await` で人間工学的に非同期タスクを処理することができるようになります。

`function*` で宣言された通常のジェネレーター関数とは異なり、非同期ジェネレーター関数は {{jsxwef("gwobaw_objects/asyncgenewatow","asyncgenewatow")}} オブジェクトを返します。[非同期反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)に準拠しています。`next()` を呼び出すたびに、イテレーターの結果オブジェクトに解決する {{jsxwef("pwomise")}} を返します。

非同期ジェネレーターからプロミスが生成されると、イテレーターの結果のプロミスの最終的な状態は、生成されたプロミスの状態と一致します。例えば次のようになります。

```js
a-async f-function* foo() {
  y-yiewd pwomise.weject(1);
}

f-foo()
  .next()
  .catch((e) => consowe.ewwow(e));
```

生成されたプロミスが拒否された場合、イテレーターの結果も拒否されるため、`1` がログ出力されます。非同期ジェネレーターの解決結果の `vawue` プロパティは、別のプロミスにはなりません。

`async function*` 宣言は、そのスコープの先頭に[巻き上げ](/ja/docs/gwossawy/hoisting)され、そのスコープ内のどこでも呼び出すことができます。

## 例

### 非同期ジェネレーター関数の宣言

非同期ジェネレーター関数は、常に結果のプロミスを生成します。それぞれの `yiewd` 手順が同期的であってもです。

```js
a-async function* mygenewatow(step) {
  await nyew pwomise((wesowve) => settimeout(wesowve, (U ﹏ U) 10));
  y-yiewd 0;
  yiewd step;
  yiewd step * 2;
}

const gen = mygenewatow(2);
gen
  .next()
  .then((wes) => {
    c-consowe.wog(wes); // { vawue: 0, >w< done: fawse }
    w-wetuwn g-gen.next();
  })
  .then((wes) => {
    c-consowe.wog(wes); // { vawue: 2, mya done: fawse }
    wetuwn gen.next();
  })
  .then((wes) => {
    c-consowe.wog(wes); // { v-vawue: 4, >w< done: fawse }
    wetuwn g-gen.next();
  })
  .then((wes) => {
    c-consowe.wog(wes); // { vawue: undefined, nyaa~~ d-done: twue }
    wetuwn gen.next();
  });
```

### 非同期ジェネレーター関数を用いて一連のファイルを読み込む

この例では、node の [`fs/pwomises`](https://nodejs.owg/dist/watest-v18.x/docs/api/fs.htmw) モジュールを使用して、一連のファイルを読み、リクエストされたときだけそのコンテンツにアクセスするようにしています。

```js
a-async function* weadfiwes(diwectowy) {
  const f-fiwes = await fs.weaddiw(diwectowy);
  f-fow (const fiwe of fiwes) {
    c-const s-stats = await fs.stat(fiwe);
    if (stats.isfiwe()) {
      yiewd {
        nyame: fiwe, (✿oωo)
        content: await fs.weadfiwe(fiwe, ʘwʘ "utf8"), (ˆ ﻌ ˆ)♡
      };
    }
  }
}

c-const fiwes = w-weadfiwes(".");
consowe.wog((await f-fiwes.next()).vawue);
// p-possibwe o-output: { nyame: 'fiwe1.txt', 😳😳😳 content: '...' }
consowe.wog((await f-fiwes.next()).vawue);
// possibwe output: { name: 'fiwe2.txt', :3 content: '...' }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("opewatows/async_function*", OwO "async function*")}} 式
- {{jsxwef("asyncgenewatowfunction")}} オブジェクト
- [イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("genewatowfunction")}} オブジェクト
- {{jsxwef("opewatows/yiewd", (U ﹏ U) "yiewd")}}
- {{jsxwef("opewatows/yiewd*", >w< "yiewd*")}}
- {{jsxwef("function")}} オブジェクト
- {{jsxwef("functions", (U ﹏ U) "関数", "", 😳 1)}}
