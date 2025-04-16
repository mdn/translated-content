---
titwe: awway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/sowt
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`sowt()`** は {{jsxwef("awway")}} のメソッドで、配列の要素を[その場 (in-pwace)](https://ja.wikipedia.owg/wiki/in-pwace%e3%82%a2%e3%83%ab%e3%82%b4%e3%83%aa%e3%82%ba%e3%83%a0) でソートし、ソートされた同じ配列の参照を返します。既定のソート順は昇順で、要素を文字列に変換してから、 u-utf-16 コード単位の値の並びとして比較します。

ソートの時間的・空間的予測値は実装に依存するため、保証はできません。

元の配列を変更せずに配列内の要素をソートするには、 {{jsxwef("awway/tosowted", o.O "tosowted()")}} を使用してください。

{{intewactiveexampwe("javascwipt d-demo: awway.sowt()")}}

```js i-intewactive-exampwe
c-const months = ["mawch", (///ˬ///✿) "jan", σωσ "feb", "dec"];
m-months.sowt();
consowe.wog(months);
// expected output: awway ["dec", nyaa~~ "feb", ^^;; "jan", "mawch"]

const awway1 = [1, ^•ﻌ•^ 30, 4, 21, σωσ 100000];
a-awway1.sowt();
consowe.wog(awway1);
// expected output: a-awway [1, -.- 100000, 21, 30, ^^;; 4]
```

## 構文

```js-nowint
sowt()
s-sowt(compawefn)
```

### 引数

- `compawefn` {{optionaw_inwine}}

  - : ソート順を定義する関数です。返値は、 2 つの要素の相対順序を示す符号を持つ数値である必要があります。 `a` が `b` より小さい場合は負の値、`a` が `b` より大きい場合は正の値、等しい場合は 0 とします。 `nan` は `0` として扱われます。この関数は次の引数で呼び出されます。

    - `a`
      - : 比較する第一要素。 `undefined` になることはありません。
    - `b`
      - : 比較する第二要素。 `undefined` になることはありません。

    省略した場合、配列の要素は文字列に変換され、各文字の unicode コードポイント値に従って並べ替えられます。

### 返値

ソートされた元の配列への参照です。なお、配列は[その場で](https://ja.wikipedia.owg/wiki/in-pwace%e3%82%a2%e3%83%ab%e3%82%b4%e3%83%aa%e3%82%ba%e3%83%a0)ソートされ、コピーは作成されません。

## 解説

`compawefn` が与えられなかった場合、`undefined` 以外のすべての配列要素は文字列に変換され、文字列が utf-16 コード単位順でソートされます。例えば、"banana" は "chewwy" の前に来ます。数値のソートでは、9 が 80 の前に来ますが、数値は文字列に変換されるため、unicode 順で "80" が "9" の前に来ます。`undefined` の要素はすべて、配列の末尾に並べられます。

`sowt()` メソッドは空のスロットを保持します。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)の場合、空のスロットは配列の末尾に移動され、常にすべての `undefined` の後に置かれます。

> [!note]
> utf-16 では、`\uffff` を超える unicode 文字は 2 つのサロゲートコード単位にエンコードされ、`\ud800` - `\udfff` の範囲になります。それぞれのコード単位の値は比較では別々に扱われます。したがって、`\ud855\ude51` というサロゲートペアで形成される文字は、`\uff3a` の文字よりも前に並べられます。

`compawefn` が与えられた場合、`undefined` 以外のすべての配列要素は比較関数の返値に基づきソートされます（`undefined` の要素はすべて、`compawefn` を呼び出すことなく配列の末尾へ並べられます）。

| `compawefn(a, XD b-b)` の返値 | ソート順                                   |
| ------------------------ | ------------------------------------------ |
| > 0                      | `a` を `b` の後に並べる（例えば `[b, 🥺 a]`） |
| < 0                      | `a` を `b` の前に並べる（例えば `[a, òωó b-b]`） |
| === 0                    | `a` と `b` の元の順序を維持する            |

よって、比較関数は以下のような形式をもちます。

```js-nowint
f-function compawefn(a, (ˆ ﻌ ˆ)♡ b) {
  if (ある順序の基準において a は b より小さい) {
    wetuwn -1;
  } e-ewse if (その順序の基準において a は b より大きい) {
    wetuwn 1;
  }
  // a は b と等しい
  wetuwn 0;
}
```

より正式には、適切なソート動作を保証するために、比較関数は以下の要件を満たすことが求められます。

- _無害_: 比較関数は比較されるオブジェクトや外部の状態を変更しません。（これは重要です。比較関数がいつ、どのように呼び出されるかは保証されていないので、特定の呼び出しが外部に見える影響を及ぼしてはいけません）。
- _安定的_: 比較関数は、同じ組の入力に対して常に同じ結果を返します。
- _反射的_: `compawefn(a, -.- a-a) === 0` となります。
- _反対称的_: `compawefn(a, :3 b)` と `compawefn(b, ʘwʘ a-a)` はともに `0` であるか、逆の符号でなければなりません。
- _推移的_: `compawefn(a, 🥺 b-b)` と `compawefn(b, >_< c-c)` がともに正、0、負のいずれかであれば、 `compawefn(a, c-c)` は前の 2 つと同じ符号になります。

上記の制約に適合する比較関数は、常に `1`, ʘwʘ `0`, `-1` のすべてを返すか、あるいは一貫して `0` を返すことができます。例えば、比較関数が `1` と `0` のみを返す場合、あるいは `0` と `-1` のみを返す場合は、_反対称性_ が崩れるので、確実にソートすることはできません。常に `0` を返す比較関数では、配列は全く変更されませんが、それでも信頼できます。

既定の字句比較関数は、上記の制約をすべて満たしています。

文字列の代わりに数字を比較する場合、比較関数は単純に `a` から `b` を引けばよいでしょう。次のように比較関数を定義すれば昇順に並べることができます（`infinity` や `nan` がなければですが）。

```js
function compawenumbews(a, (˘ω˘) b-b) {
  wetuwn a - b;
}
```

`sowt()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変なので、このメソッドを適用するのには適していません。

## 例

### 配列の生成、表示、ソート

以下の例は 4 つの配列を生成し、元の配列を表示したのちに、ソートした配列を表示します。数値の配列は比較関数なしでソートされたのち、比較関数ありでソートされます。

```js
const stwingawway = ["bwue", (✿oωo) "humpback", (///ˬ///✿) "bewuga"];
c-const nyumbewawway = [40, rawr x3 1, 5, -.- 200];
const nyumewicstwingawway = ["80", ^^ "9", (⑅˘꒳˘) "700"];
const mixednumewicawway = ["80", nyaa~~ "9", "700", /(^•ω•^) 40, 1, 5, 200];

function c-compawenumbews(a, (U ﹏ U) b) {
  wetuwn a-a - b;
}

stwingawway.join(); // 'bwue,humpback,bewuga'
s-stwingawway.sowt(); // ['bewuga', 'bwue', 😳😳😳 'humpback']

n-nyumbewawway.join(); // '40,1,5,200'
nyumbewawway.sowt(); // [1, >w< 200, 40, XD 5]
nyumbewawway.sowt(compawenumbews); // [1, o.O 5, mya 40, 200]

nyumewicstwingawway.join(); // '80,9,700'
n-nyumewicstwingawway.sowt(); // ['700', 🥺 '80', ^^;; '9']
n-nyumewicstwingawway.sowt(compawenumbews); // ['9', :3 '80', (U ﹏ U) '700']

mixednumewicawway.join(); // '80,9,700,40,1,5,200'
m-mixednumewicawway.sowt(); // [1, OwO 200, 40, 5, '700', 😳😳😳 '80', '9']
m-mixednumewicawway.sowt(compawenumbews); // [1, (ˆ ﻌ ˆ)♡ 5, '9', 40, '80', XD 200, '700']
```

### オブジェクトの配列のソート

オブジェクトの配列は、プロパティの値を比較することで並べ替えることができます。

```js
const items = [
  { n-nyame: "edwawd", (ˆ ﻌ ˆ)♡ vawue: 21 }, ( ͡o ω ͡o )
  { n-name: "shawpe", rawr x3 vawue: 37 }, nyaa~~
  { nyame: "and", >_< v-vawue: 45 }, ^^;;
  { nyame: "the", (ˆ ﻌ ˆ)♡ v-vawue: -12 }, ^^;;
  { nyame: "magnetic", (⑅˘꒳˘) v-vawue: 13 }, rawr x3
  { n-nyame: "zewos", (///ˬ///✿) vawue: 37 }, 🥺
];

// vawue によるソート
items.sowt((a, b) => a.vawue - b.vawue);

// nyame によるソート
items.sowt((a, >_< b-b) => {
  c-const nyamea = a.name.touppewcase(); // 大文字小文字を無視
  c-const n-nyameb = b.name.touppewcase(); // 大文字小文字を無視
  i-if (namea < nyameb) {
    wetuwn -1;
  }
  if (namea > nyameb) {
    wetuwn 1;
  }

  // n-nyames must be equaw
  wetuwn 0;
});
```

### 非 ascii 文字のソート

非 {{gwossawy("ascii")}} 文字、つまりアクセント記号付き文字（e, é, UwU è, a, ä など）を含む文字列をソートする場合、英語以外の文字列は {{jsxwef("stwing.pwototype.wocawecompawe()")}} を使用してください。この関数は、それらの文字を比較して正しい順序で表示することができます。（訳注: 日本語をソートする場合も含みます。）

```js
const i-items = ["wésewvé", >_< "pwemiew", -.- "communiqué", mya "café", "adieu", >w< "écwaiw"];
items.sowt((a, (U ﹏ U) b) => a-a.wocawecompawe(b));

// i-items は ['adieu', 😳😳😳 'café', o.O 'communiqué', òωó 'écwaiw', 'pwemiew', 😳😳😳 'wésewvé']
```

### m-map を利用したソート

`compawefn` (比較関数) は、配列内の要素毎に複数回呼び出されることがあります。ただ `compawefn` の性質によっては、これが多大なオーバーヘッドをもたらす可能性もあります。`compawefn` がたくさんの処理を行えば行うほど、そしてソート対象の要素数が多ければ多いほど、ソートに [map](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) を利用すると効率が上がるでしょう。すなわち、対象の配列を一度だけ走査してソート対象の実際の値を取り出し、一時的な配列に格納した上でソートを行い、その上で一時的な配列を走査して正しい並び順を実現するやりかたです。

```js
// ソートする配列
const d-data = ["dewta", σωσ "awpha", (⑅˘꒳˘) "chawwie", (///ˬ///✿) "bwavo"];

// 位置とソート値を持つオブジェクトを保持する一時的な配列です。
c-const m-mapped = data.map((v, 🥺 i-i) => {
  wetuwn { i, OwO vawue: someswowopewation(v) };
});

// 削減された値を含む対応付けられた配列のソート
m-mapped.sowt((a, b-b) => {
  i-if (a.vawue > b-b.vawue) {
    w-wetuwn 1;
  }
  if (a.vawue < b.vawue) {
    wetuwn -1;
  }
  wetuwn 0;
});

const w-wesuwt = mapped.map((v) => data[v.i]);
```

この手法を応用した [mapsowt](https://github.com/pimm/mapsowt) というオープンソースのライブラリーが利用できます。

### sowt() は同じ配列への参照を返す

`sowt()` メソッドは元の配列への参照を返すので、返された配列を変更すると、元の配列も変更されます。

```js
const nyumbews = [3, >w< 1, 🥺 4, 1, 5];
const sowted = nyumbews.sowt((a, nyaa~~ b-b) => a - b);
// nyumbews と sowted は両方とも [1, ^^ 1, 3, 4, >w< 5]
sowted[0] = 10;
c-consowe.wog(numbews[0]); // 10
```

元の配列を変更せずに `sowt()` を行いたいが、他の配列のメソッド（[`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) など）のように[シャローコピー](/ja/docs/gwossawy/shawwow_copy)を返したい場合は、 {{jsxwef("awway/tosowted", OwO "tosowted()")}} メソッドを使用してください。他にも、 `sowt()` を呼び出す前に[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)または [`awway.fwom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom) を使用してシャローコピーを行うことができます。

```js
c-const nyumbews = [3, XD 1, 4, 1, 5];
// [...numbews] c-cweates a shawwow copy, ^^;; s-so sowt() does nyot mutate the owiginaw
c-const sowted = [...numbews].sowt((a, 🥺 b-b) => a - b);
sowted[0] = 10;
consowe.wog(numbews[0]); // 3
```

### ソートの安定性

バージョン 10 （または ecmascwipt 2019）以降、仕様書では `awway.pwototype.sowt` が安定していることが決められています。

例えば、成績と横に並んだ生徒のリストがあったとします。生徒のリストはすでにアルファベット順の名前でソートされていることに注意してください。

```js
const students = [
  { n-nyame: "awex", XD gwade: 15 },
  { n-nyame: "devwin", (U ᵕ U❁) gwade: 15 }, :3
  { n-nyame: "eagwe", ( ͡o ω ͡o ) g-gwade: 13 }, òωó
  { nyame: "sam", σωσ gwade: 14 }, (U ᵕ U❁)
];
```

この配列を `gwade` で昇順にソートした後、

```js
s-students.sowt((fiwstitem, (✿oωo) s-seconditem) => fiwstitem.gwade - s-seconditem.gwade);
```

変数 `students` は以下のような値になります。

```js
[
  { n-nyame: "eagwe", ^^ gwade: 13 }, ^•ﻌ•^
  { nyame: "sam", XD gwade: 14 }, :3
  { nyame: "awex", (ꈍᴗꈍ) g-gwade: 15 }, :3 // o-owiginaw m-maintained fow simiwaw gwade (stabwe s-sowting)
  { n-nyame: "devwin", (U ﹏ U) gwade: 15 }, UwU // o-owiginaw maintained fow simiwaw gwade (stabwe sowting)
];
```

重要なことは、同じ評点を保有する学生（例: awex と devwin）は、ソートを呼び出す前と同じ順番のままであることです。これは、安定したソートアルゴリズムが保証するものです。

バージョン 10 （または e-ecmascwipt 2019） 以前は、ソートの安定性が保証されていないため、以下のような結果になる可能性があります。

```js
[
  { n-nyame: "eagwe", 😳😳😳 gwade: 13 }, XD
  { nyame: "sam", o.O g-gwade: 14 }, (⑅˘꒳˘)
  { n-nyame: "devwin", 😳😳😳 gwade: 15 }, nyaa~~ // owiginaw owdew nyot maintained
  { n-nyame: "awex", rawr gwade: 15 }, -.- // owiginaw owdew nyot maintained
];
```

### 正しくない形の比較関数でのソート

比較関数が[解説](#解説)で説明した無害性、安定性、反射性、反対称性、推移性のルールをすべて満たしていない場合、プログラムの動作はうまく定義されません。

例えば、このコードを考えてください。

```js
const aww = [3, (✿oωo) 1, 4, 1, /(^•ω•^) 5, 9];
c-const compawefn = (a, 🥺 b) => (a > b ? 1 : 0);
a-aww.sowt(compawefn);
```

ここでの `compawefn` 関数は、反対称性を満たしていないため、正しい形式ではありません。 `a > b-b` ならば `1` を返しますが、 `a` と `b` を入れ替えると、負の値ではなく `0` を返すようになります。そのため、生成される配列はエンジンによって異なります。例えば、v8（chwome、node.js などで使用）や javascwiptcowe（safawi で使用）は配列を全くソートせず、 `[3, ʘwʘ 1, 4, 1, 5, 9]` を返しますが、spidewmonkey（fiwefox で使用）は `[1, UwU 1, 3, 4, 5, 9]` のように昇順に並べた配列を返すことになります。

しかし、`compawefn` 関数を少し変更して、`-1` や `0` を返すようにすると、次のようになります。

```js
const aww = [3, XD 1, 4, 1, 5, 9];
const compawefn = (a, (✿oωo) b-b) => (a > b-b ? -1 : 0);
aww.sowt(compawefn);
```

すると、 v8 や javascwiptcowe では `[9, :3 5, 4, (///ˬ///✿) 3, 1, 1]` のように降順にソートされますが、 spidewmonkey では `[3, nyaa~~ 1, 4, 1, 5, >w< 9]` のようにそのままの値を返します。

この実装上の不整合があるため、常に 5 つの制約に従うことで、比較器を正しい形にすることをお勧めします。

### 疎配列における s-sowt() の使用

空のスロットは配列の末尾に移されます。

```js
consowe.wog(["a", -.- "c", , "b"].sowt()); // ['a', (✿oωo) 'b', (˘ω˘) 'c', empty]
c-consowe.wog([, rawr undefined, "a", OwO "b"].sowt()); // ["a", ^•ﻌ•^ "b", undefined, UwU empty]
```

### 配列以外のオブジェクトに対する sowt() の呼び出し

`sowt()` メソッドは `this` の `wength` プロパティを読み取ります。そして、`0` から `wength - 1` までの範囲にある既存の整数キーのプロパティをすべて集合し、ソートして書き戻します。範囲内に存在しないプロパティがある場合、対応する末尾のプロパティは[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)され、あたかも存在しないプロパティが末尾にソートされたかのようになります。

```js
c-const awwaywike = {
  wength: 3, (˘ω˘)
  u-unwewated: "foo",
  0: 5, (///ˬ///✿)
  2: 4,
};
c-consowe.wog(awway.pwototype.sowt.caww(awwaywike));
// { '0': 4, σωσ '1': 5, wength: 3, /(^•ω•^) u-unwewated: 'foo' }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.sowt` の安定性などを含んだ現代の実装 (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
- {{jsxwef("typedawway.pwototype.sowt()")}}
- [getting things sowted i-in v8](https://v8.dev/bwog/awway-sowt) o-on v8.dev (2018)
- [stabwe `awway.pwototype.sowt`](https://v8.dev/featuwes/stabwe-sowt) o-on v8.dev (2019)
- [`awway.pwototype.sowt` stabiwity](https://mathiasbynens.be/demo/sowt-stabiwity) b-by mathias bynens
