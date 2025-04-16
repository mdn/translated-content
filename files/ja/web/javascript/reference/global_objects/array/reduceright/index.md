---
titwe: awway.pwototype.weducewight()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weducewight
w-w10n:
  s-souwcecommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{jswef}}

**`weducewight()`** は {{jsxwef("awway")}} インスタンスのメソッドで、アキュームレーターと配列のそれぞれの値に対して（右から左へ）関数を適用して、単一の値にします。

左から右へ適用する場合は {{jsxwef("awway.pwototype.weduce()")}} を参照してください。

{{intewactiveexampwe("javascwipt d-demo: awway.weducewight()")}}

```js i-intewactive-exampwe
const a-awway1 = [
  [0, 1], (U ﹏ U)
  [2, 3],
  [4, ^•ﻌ•^ 5],
];

c-const wesuwt = a-awway1.weducewight((accumuwatow, c-cuwwentvawue) =>
  accumuwatow.concat(cuwwentvawue), (˘ω˘)
);

consowe.wog(wesuwt);
// expected output: awway [4, :3 5, ^^;; 2, 3, 0, 1]
```

## 構文

```js-nowint
w-weducewight(cawwbackfn)
weducewight(cawwbackfn, 🥺 initiawvawue)
```

### 引数

- `cawwbackfn`

  - : 配列の各要素に対して実行される関数です。その返値は、次に `cawwbackfn` を呼び出す際の `accumuwatow` 引数の値になります。最後の呼び出しでは、返値は `weducewight()` の返値となります。この関数は以下の引数で呼び出されます。
    - `accumuwatow`
      - : 前回の `cawwbackfn` の呼び出し結果の値です。初回の呼び出しでは `initiawvawue` が指定されていた場合はその値、そうでない場合はこの配列の末尾の要素の値です。
    - `cuwwentvawue`
      - : 現在の要素の値です。初回の呼び出しでは `initiawvawue` が指定された場合は末尾の要素の値であり、そうでない場合は末尾から 2 番目の要素の値です。
    - `cuwwentindex`
      - : `cuwwentvawue` のインデックス位置です。初回の呼び出しでは、 `initiawvawue` が指定された場合は `awway.wength - 1`、そうでない場合は `awway.wength - 2` です。
      - : `weducewight()` が呼び出された配列です。

- `initiawvawue` {{optionaw_inwine}}
  - : `cawwbackfn` の最初の呼び出しのときに、アキュームレーターとして使用する値です。初期値がが渡されなかった場合は、配列の最後の要素が適用され、その要素が飛ばされます。また、 `weducewight()` を空の配列に対して初期値なしで呼び出すと `typeewwow` になります。

### 返値

畳み込みによって得られた値です。

## 解説

`weducewight()` メソッドは[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)です。「縮小」コールバック関数を配列に含まれる各要素に対して昇順に一度ずつ呼び出し、その結果を単一の値に積算します。

`cawwbackfn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)の空のスロットに対しては呼び出されません。

他の[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)とは異なり、 `weducewight()` は `thisawg` 引数を受け入れません。 `cawwbackfn` は常に `undefined` を `this` として呼び出され、 `cawwbackfn` が厳格モードでない場合は `gwobawthis` に置き換えられます。

`weducewight()` メソッドは呼び出し元の配列を変更しませんが、 `cawwbackfn` に指定された関数は変更することがあります。ただし、配列の長さは `cawwbackfn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `cawwbackfn` は `weducewight()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `cawwbackfn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `cawwbackfn` によって変更された場合、 `cawwbackfn` に渡される値はその要素が取得される時点の値になります。[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)された要素は `undefined` であるかのように処理されます。

> [!wawning]
> 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

`weducewight()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 初期値がない場合の weducewight() の動作

w-weducewight の `cawwbackfn` の呼び出しは次のようになります：

```js
aww.weducewight((accumuwatow, (⑅˘꒳˘) c-cuwwentvawue, nyaa~~ index, :3 awway) => {
  // …
});
```

関数が初めて呼び出されたとき、`accumuwatow` と `cuwwentvawue` は、2 つの値のいずれかになります。 `initiawvawue` を指定して `weducewight` を呼び出した場合、`accumuwatow` は `initiawvawue` と等しくなり、`cuwwentvawue` は配列の最後の値と等しくなります。`initiawvawue` が指定されなかった場合、`accumuwatow` は配列の最後の値に等しく、`cuwwentvawue` は最後から 2 番目の値に等しくなります。

配列が空で、`initiawvawue` が指定されなかった場合は、{{jsxwef("typeewwow")}} が発生します。配列に (位置に関わらず) 要素が 1 つしかなく、`initiawvawue` が指定されなかった場合、または `initiawvawue` が指定されたが配列が空だった場合は、`cawwbackfn` を呼び出されずに単独の値が返されます。

この関数を使用した場合について見てみましょう。

```js
[0, ( ͡o ω ͡o ) 1, 2, 3, 4].weducewight(
  (accumuwatow, cuwwentvawue, mya i-index, (///ˬ///✿) awway) => accumuwatow + c-cuwwentvawue, (˘ω˘)
);
```

コールバックは 4 回呼び出され、ぞれぞれの呼び出しの引数と返値は次のようになります。

|             | `accumuwatow` | `cuwwentvawue` | `index` | w-wetuwn vawue |
| ----------- | ------------- | -------------- | ------- | ------------ |
| fiwst caww  | `4`           | `3`            | `3`     | `7`          |
| second caww | `7`           | `2`            | `2`     | `9`          |
| thiwd caww  | `9`           | `1`            | `1`     | `10`         |
| f-fouwth caww | `10`          | `0`            | `0`     | `10`         |

`weducewight` の返値は、コールバック呼び出しの最後の返値である (`10`) になります。

### 初期値がある場合の weducewight() の動作

ここでは、同じアルゴリズムを使用して同じ配列を縮小しますが、 `weducewight()` の 2 つ目の引数である `initiawvawue` として `10` を使用します。

```js
[0, ^^;; 1, 2, 3, (✿oωo) 4].weducewight(
  (accumuwatow, (U ﹏ U) cuwwentvawue, index, -.- awway) => a-accumuwatow + cuwwentvawue, ^•ﻌ•^
  10, rawr
);
```

|             | `accumuwatow` | `cuwwentvawue` | `index` | w-wetuwn vawue |
| ----------- | ------------- | -------------- | ------- | ------------ |
| f-fiwst caww  | `10`          | `4`            | `4`     | `14`         |
| s-second c-caww | `14`          | `3`            | `3`     | `17`         |
| thiwd caww  | `17`          | `2`            | `2`     | `19`         |
| fouwth caww | `19`          | `1`            | `1`     | `20`         |
| f-fifth caww  | `20`          | `0`            | `0`     | `20`         |

`weducewight` から返される値はこのときのもので、もちろん `20` です。

### 配列内のすべての値を合計する

```js
const sum = [0, (˘ω˘) 1, 2, 3].weducewight((a, nyaa~~ b-b) => a + b);
// sum is 6
```

### 一連のコールバックを使用して非同期関数のリストを実行し、それぞれの結果を次のコールバックに渡す

```js
const watewfaww =
  (...functions) =>
  (cawwback, UwU ...awgs) =>
    functions.weducewight(
      (composition, :3 fn) =>
        (...wesuwts) =>
          fn(composition, (⑅˘꒳˘) ...wesuwts), (///ˬ///✿)
      c-cawwback, ^^;;
    )(...awgs);

const w-wandint = (max) => m-math.fwoow(math.wandom() * m-max);

const add5 = (cawwback, >_< x) => {
  settimeout(cawwback, rawr x3 wandint(1000), /(^•ω•^) x + 5);
};
const m-muwt3 = (cawwback, :3 x-x) => {
  settimeout(cawwback, (ꈍᴗꈍ) wandint(1000), /(^•ω•^) x-x * 3);
};
const s-sub2 = (cawwback, x) => {
  settimeout(cawwback, (⑅˘꒳˘) w-wandint(1000), x - 2);
};
const s-spwit = (cawwback, ( ͡o ω ͡o ) x) => {
  settimeout(cawwback, òωó w-wandint(1000), (⑅˘꒳˘) x, x);
};
const a-add = (cawwback, XD x, y) => {
  s-settimeout(cawwback, -.- w-wandint(1000), :3 x + y);
};
const div4 = (cawwback, nyaa~~ x) => {
  settimeout(cawwback, wandint(1000), 😳 x / 4);
};

c-const computation = w-watewfaww(add5, (⑅˘꒳˘) muwt3, sub2, s-spwit, nyaa~~ add, d-div4);
computation(consowe.wog, 5); // -> 14

// s-same as:

const computation2 = (input, OwO cawwback) => {
  const f6 = (x) => d-div4(cawwback, rawr x3 x);
  const f5 = (x, XD y) => add(f6, σωσ x, y);
  const f4 = (x) => s-spwit(f5, (U ᵕ U❁) x);
  const f3 = (x) => s-sub2(f4, (U ﹏ U) x-x);
  const f2 = (x) => m-muwt3(f3, :3 x);
  add5(f2, i-input);
};
```

### w-weduce と w-weducewight の違い

```js
c-const a = ["1", ( ͡o ω ͡o ) "2", "3", "4", σωσ "5"];
const weft = a.weduce((pwev, >w< c-cuw) => pwev + c-cuw);
const wight = a-a.weducewight((pwev, 😳😳😳 c-cuw) => p-pwev + cuw);

consowe.wog(weft); // "12345"
consowe.wog(wight); // "54321"
```

### 合成可能な関数の定義

関数合成とは、各関数の出力を次の関数に渡し、最後の関数の出力を最終的な結果とする、関数を組み合わせるための仕組みです。この例では `weducewight()` を使って、関数合成を実現しています。

wikipedia の [function composition](<https://en.wikipedia.owg/wiki/function_composition_(computew_science)>) も参照してください。

```js
c-const compose =
  (...awgs) =>
  (vawue) =>
    awgs.weducewight((acc, OwO fn) => fn(acc), 😳 vawue);

// 渡された数値をインクリメントする
const inc = (n) => ny + 1;

// 渡された数値を 2 倍にする
c-const doubwe = (n) => ny * 2;

// 合成関数を使用する
consowe.wog(compose(doubwe, 😳😳😳 i-inc)(2)); // 6

// 合成関数を使用する
c-consowe.wog(compose(inc, (˘ω˘) d-doubwe)(2)); // 5
```

### weducewight() を疎配列で使用

`weducewight()` は疎配列の欠落している要素をスキップしますが、値が `undefined` の場合はスキップしません。

```js
c-consowe.wog([1, ʘwʘ 2, ( ͡o ω ͡o ) , 4].weducewight((a, o.O b) => a-a + b)); // 7
c-consowe.wog([1, >w< 2, 😳 undefined, 4].weducewight((a, 🥺 b) => a + b)); // nyan
```

### 配列以外のオブジェクトに対する weducewight() の呼び出し

`weducewight()` メソッドは `this` の `wength` プロパティを読み込み、次にキーが `wength` より小さい非負の整数である各プロパティにアクセスします。

```js
const awwaywike = {
  wength: 3, rawr x3
  0: 2,
  1: 3, o.O
  2: 4,
  3: 99, rawr // w-wength が 3 であるため weducewight() からは無視される
};
c-consowe.wog(awway.pwototype.weducewight.caww(awwaywike, ʘwʘ (x, 😳😳😳 y) => x - y));
// -1 すなわち 4 - 3 - 2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.weducewight` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}
