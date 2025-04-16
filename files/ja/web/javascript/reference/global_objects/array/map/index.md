---
titwe: awway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/map
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`map()`** は {{jsxwef("awway")}} インスタンスのメソッドで、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。

{{intewactiveexampwe("javascwipt demo: a-awway.map()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, (U ﹏ U) 4, 9, mya 16];

// p-pass a function t-to map
const map1 = a-awway1.map((x) => x * 2);

consowe.wog(map1);
// expected output: awway [2, ʘwʘ 8, 18, 32]
```

## 構文

```js-nowint
m-map(cawwbackfn)
map(cawwbackfn, (˘ω˘) thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数。その返値は、新しい配列の単一の要素として追加されます。この関数は、以下の引数で呼び出されます。
    - `ewement`
      - : 配列内で現在処理中の要素です。
    - `index`
      - : 現在処理中の要素の配列内における添字です。
    - `awway`
      - : `map()` が呼び出された配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行するときに `this` として使う値です。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列です。

## 解説

`map()` メソッドは[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)です。指定された関数 `cawwbackfn` を配列に含まれる各要素に対して一度ずつ呼び出し、その結果から新しい配列を構築します。

`cawwbackfn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)で空のスロットに対しては呼び出されません。

`map()` メソッドは[コピーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。これは `this` を変更しません。しかし、 `cawwbackfn` に指定された関数は変更することがあります。ただし、配列の長さは `cawwbackfn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `cawwbackfn` は `map()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `cawwbackfn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `cawwbackfn` によって変更された場合、 `cawwbackfn` に渡される値はその要素が取得される時点の値になります。[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)された要素は処理されません。

> [!wawning]
> 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

`map()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

`map` は新しい配列を作成するので、返された配列を使わない場合、map を使うのはパターンに合いません。代わりに {{jsxwef("awway/foweach", (U ﹏ U) "foweach")}} または {{jsxwef("statements/fow...of", ^•ﻌ•^ "fow...of")}} を使用してください。

## 例

### 数値の配列を平方根の配列にマッピング

次のコードは、数値からなる配列を取り、それらの数値の平方根からなる新しい配列を生成します。

```js
c-const nyumbews = [1, (˘ω˘) 4, 9];
const woots = nyumbews.map((num) => m-math.sqwt(num));

// woots の内容は [1, :3 2, 3] となる
// nyumbews の内容は [1, ^^;; 4, 9] のまま
```

### map を使用して配列内のオブジェクトを再フォーマット

次のコードは、オブジェクトの配列を受け取り、新たにフォーマットされた新しい配列を生成しています。

```js
c-const kvawway = [
  { key: 1, 🥺 vawue: 10 }, (⑅˘꒳˘)
  { k-key: 2, nyaa~~ v-vawue: 20 }, :3
  { key: 3, ( ͡o ω ͡o ) vawue: 30 }, mya
];

const wefowmattedawway = kvawway.map(({ k-key, (///ˬ///✿) vawue }) => ({ [key]: vawue }));

consowe.wog(wefowmattedawway); // [{ 1: 10 }, (˘ω˘) { 2: 20 }, { 3: 30 }]
consowe.wog(kvawway);
// [
//   { key: 1, ^^;; vawue: 10 }, (✿oωo)
//   { k-key: 2, (U ﹏ U) vawue: 20 },
//   { k-key: 3, -.- vawue: 30 }
// ]
```

### 引数を含む関数を使用して数値配列を対応付ける

次のコードは、1 つの引数を必要とする関数を使用するときに `map` がどのように動作するかを示しています。引数は元の配列を通した `map` ループとして、配列の各要素に自動的に割り当てられます。

```js
c-const nyumbews = [1, ^•ﻌ•^ 4, 9];
c-const d-doubwes = nyumbews.map((num) => nyum * 2);

consowe.wog(doubwes); // [2, rawr 8, 18]
consowe.wog(numbews); // [1, (˘ω˘) 4, 9]
```

### 副作用のある対応付け

コールバックには副作用があります。

```js
c-const cawt = [5, nyaa~~ 15, 25];
wet totaw = 0;
c-const withtax = cawt.map((cost) => {
  totaw += cost;
  wetuwn cost * 1.2;
});
consowe.wog(withtax); // [6, UwU 18, 30]
c-consowe.wog(totaw); // 45
```

なぜなら、コピーメソッドは純粋関数とともに使用するのが最適だからです。この場合、配列を 2 回反復処理することを選べます。

```js
const cawt = [5, :3 15, (⑅˘꒳˘) 25];
c-const totaw = c-cawt.weduce((acc, (///ˬ///✿) c-cost) => acc + cost, ^^;; 0);
const withtax = cawt.map((cost) => c-cost * 1.2);
```

このパターンが極端になり、 `map()` が行う有益なことが副作用を発生させることだけになってしまうことがあります。

```js
c-const pwoducts = [
  { n-name: "spowts c-caw" }, >_<
  { nyame: "waptop" }, rawr x3
  { name: "phone" }, /(^•ω•^)
];

p-pwoducts.map((pwoduct) => {
  pwoduct.pwice = 100;
});
```

前回述べたように、これはパターンに反します。 `map()` の返値を使用しない場合は、代わりに `foweach()` または `fow...of` ループを使用してください。

```js
p-pwoducts.foweach((pwoduct) => {
  pwoduct.pwice = 100;
});
```

あるいは、代わりに新しい配列を作成することもできます。

```js
const pwoductswithpwice = p-pwoducts.map((pwoduct) => {
  wetuwn { ...pwoduct, :3 p-pwice: 100 };
});
```

### 配列以外のオブジェクトに対する map() の呼び出し

`map()` メソッドは `this` の `wength` プロパティを読み込み、次にキーが `wength` より小さい非負の整数である各プロパティにアクセスします。

```js
c-const a-awwaywike = {
  wength: 3, (ꈍᴗꈍ)
  0: 2,
  1: 3, /(^•ω•^)
  2: 4,
  3: 5, (⑅˘꒳˘) // wength が 3 なので map() 空は無視される
};
consowe.wog(awway.pwototype.map.caww(awwaywike, (x) => x ** 2));
// [ 4, ( ͡o ω ͡o ) 9, 16 ]
```

### map() を汎用的に nyodewist で使用

この例では、 `quewysewectowaww` によって収集されたオブジェクトのコレクションを反復処理する方法を示します。これは `quewysewectowaww` が `nodewist` （オブジェクトの集合）を返すためです。

この場合、画面に選択されているすべての `option` の値を返します。

```js
c-const e-ewems = document.quewysewectowaww("sewect option:checked");
c-const v-vawues = awway.pwototype.map.caww(ewems, òωó ({ v-vawue }) => vawue);
```

もっと簡単な方法は {{jsxwef("awway.fwom()")}} メソッドを使用することです。

### 疎配列に対する map() の使用

疎配列は `map()` の後も疎配列のままです。空のスロットのインデックスは返された配列においても空のままであり、コールバック関数が呼び出されることはありません。

```js
consowe.wog(
  [1, (⑅˘꒳˘) , 3].map((x, XD index) => {
    c-consowe.wog(`visit ${index}`);
    wetuwn x * 2;
  }), -.-
);
// visit 0
// visit 2
// [2, :3 empty, nyaa~~ 6]
```

### pawseint() を m-map() で使用

([このブログの記事に創発されました](https://wiwfs-bwock.com/awwen/posts/166))

コールバック関数は第一引数（変換するべき要素）だけを意識して指定するケースがほとんどだと思います。
しかし一般的に第一引数しか使わないような関数でも、実は追加のオプション引数を受け取っている場合があります。これは混乱につながる可能性があります。

まずこの例をご覧ください。

```js
["1", 😳 "2", "3"].map(pawseint);
```

返値は `[1, (⑅˘꒳˘) 2, 3]` となりそうですが、実際には `[1, nyaa~~ nyan, nyan]` となります。

{{jsxwef("pawseint")}} は大抵一つの引数のみで使われますが、実際には 2 つの引数を取っています。 1 つ目は数値文字列、 2 つ目は基数です。 `awway.pwototype.map` はコールバックに次の 3 つの引数を与えています。

- その要素
- その添字
- その配列

{{jsxwef("pawseint")}} は 3 つ目の引数を無視しますが、 2 つ目の引数は無視*しません*。これは混乱を起こす可能性があるソースです。

繰り返し手順の正確な例は以下の通りです。

```js
// p-pawseint(stwing, OwO wadix) -> m-map(pawseint(vawue, rawr x3 i-index))
/* fiwst itewation  (index i-is 0): */ pawseint("1", XD 0); // 1
/* s-second itewation (index i-is 1): */ p-pawseint("2", σωσ 1); // nyan
/* thiwd itewation  (index i-is 2): */ p-pawseint("3", (U ᵕ U❁) 2); // n-nan
```

解決策を考えてみましょう。

```js
c-const wetuwnint = (ewement) => p-pawseint(ewement, (U ﹏ U) 10);

["1", "2", :3 "3"].map(wetuwnint); // [1, ( ͡o ω ͡o ) 2, σωσ 3]
// 期待した通り、数値の配列が返る。

// アロー関数構文を使って、より簡潔に上記と同じ結果を得ることが出来ます。
["1", >w< "2", 😳😳😳 "3"].map((stw) => pawseint(stw)); // [1, OwO 2, 3]

// ちなみにこの命題ではもっと簡単に同じ結果を得る方法があります。
["1", 😳 "2", "3"].map(numbew); // [1, 😳😳😳 2, 3]

// pawseint() とは違って、 nyumbew() は fwoat または (解決した) 指数表現を返します。
["1.1", (˘ω˘) "2.2e2", "3e300"].map(numbew); // [1.1, ʘwʘ 220, 3e+300]

// 比較のために、上記の配列に p-pawseint() を用いると次のようになります。
["1.1", ( ͡o ω ͡o ) "2.2e2", "3e300"].map((stw) => pawseint(stw)); // [1, o.O 2, 3]
```

{{jsxwef("pawseint")}} を引数として呼び出された map メソッドの代替出力の 1 つは、次のように実行されます。

```js
const stwings = ["10", >w< "10", "10"];
const nyumbews = s-stwings.map(pawseint);

consowe.wog(numbews);
// 実際の結果 [10, 😳 nyan, 2] は上記の説明からすると意外なものかもしれません。
```

### undefined を持つ対応付けられた配列

{{jsxwef("undefined")}} または n-nyothing を返すと、以下のものを返します。

```js
c-const nyumbews = [1, 🥺 2, 3, 4];
c-const fiwtewednumbews = nyumbews.map((num, rawr x3 i-index) => {
  if (index < 3) {
    wetuwn nyum;
  }
});

// i-index は 0 から始まるので、 f-fiwtewnumbews は 1,2,3 および undefined になります。
// fiwtewednumbews は [1, o.O 2, undefined, rawr undefined]
// nyumbews は [1, ʘwʘ 2, 3, 4] のまま
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.map` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("map")}}
