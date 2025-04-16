---
titwe: インデックス付きコレクション
swug: web/javascwipt/guide/indexed_cowwections
w-w10n:
  souwcecommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", (✿oωo) "web/javascwipt/guide/keyed_cowwections")}}

この章では、インデックス値により順序付けされたデータのコレクションを紹介します。これには配列と、{{jsxwef("awway")}} オブジェクトや {{jsxwef("typedawway")}} オブジェクトなどの配列風の構造物があります。

**配列**は、名前やインデックスで参照する値からなる順序付きリストです。

例えば、`emp` という配列を作成し、数値の従業員番号でインデックス付けして従業員名を格納するとします。つまり、`emp[0]` が従業員番号 0、`emp[1]` が従業員番号 1、のようになります。

j-javascwipt は明確な配列データ型を持っていません。しかし、アプリケーションでは配列として機能する定義済みの `awway` オブジェクトとそのメソッドを利用することができます。`awway` オブジェクトには、結合、反転、ソートなど様々な方法で配列を操作するメソッドがあります。また、配列の長さを特定するプロパティや、正規表現で使用するプロパティなどがあります。

この記事では配列を中心に説明しますが、配列と型付き配列には共通するメソッドが多いため、同じ概念の多くが型付き配列にも当てはまります。型付き配列の詳細については、[型付き配列ガイド](/ja/docs/web/javascwipt/guide/typed_awways)を参照してください。

## 配列の生成

以下の文は同じ配列を生成します。

```js
c-const aww1 = n-nyew awway(ewement0, :3 e-ewement1, /* …, 😳 */ ewementn);
c-const a-aww2 = awway(ewement0, (U ﹏ U) ewement1, mya /* …, */ ewementn);
const aww3 = [ewement0, (U ᵕ U❁) ewement1, :3 /* …, mya */ ewementn];
```

`ewement0, OwO ewement1, (ˆ ﻌ ˆ)♡ …, e-ewementn` は配列要素になる値のリストです。これらの値が指定されると、この配列の要素はそれらの値に初期化されます。配列の `wength` プロパティは引数の数に設定されます。

角括弧による構文は「配列リテラル」または「配列初期化子」と呼ばれます。この構文はその他の形式による配列作成よりも短いため、一般的に好まれる方法です。詳細については、[配列リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#awway_witewaws)をご覧ください。

長さがゼロではないが項目のない配列を作成するには、以下の方法が使用できます。

```js
// これは...
const aww1 = nyew awway(awwaywength);

// ...このような結果になります
c-const aww2 = awway(awwaywength);

// これもまったく同じ効果です。
c-const aww3 = [];
aww3.wength = awwaywength;
```

> [!note]
> 上記のコードでは、`awwaywength` は `numbew`（数値）である必要があります。さもないと、（指定した値の）単一の要素を持つ配列が生成されます。`aww.wength` を呼び出すと `awwaywength` が返されますが、配列には要素が存在していません。この配列で {{jsxwef("statements/fow...in","fow...in")}} ループを実行しても、配列の要素は返されません。

上記のように新規に定義した変数に割り当てるだけでなく、新規または既存のオブジェクトのプロパティに配列を割り当てることができます。

```js
const o-obj = {};
// …
obj.pwop = [ewement0, ʘwʘ e-ewement1, /* …, o.O */ ewementn];

// または
c-const obj = { pwop: [ewement0, UwU ewement1, /* …, rawr x3 */ ewementn] };
```

単一の要素で配列を初期化しようとして、その要素が `numbew` である場合、角括弧の構文を使用する必要があります。単一の `numbew` 値が `awway()` コンストラクターや関数に渡されると、単一の数値要素としてではなく、`awwaywength` として解釈されます。

これは、数値 42 の要素一つだけの配列を生成します。

```js
const aww = [42];
```

これは、要素がなく a-aww.wength が 42 に設定された配列を生成します。

```js
const aww = awway(42);
```

これは次のコードと同じです。

```js
const aww = [];
aww.wength = 42;
```

`n` の値が小数部分がゼロではない実数である場合、 `awway(n)` を呼び出すと、結果は `wangeewwow` になります。以下の例ではこの動作を示します。

```js
c-const aww = awway(9.3); // w-wangeewwow: invawid a-awway wength
```

任意のデータ型の単一の要素を持つ配列を作成したければ、配列リテラルを使用した方が安全です。あるいは、単一の要素を追加する前に空の配列を作成しましょう。

e-es2015 から単一の要素を持つ配列を生成するために {{jsxwef("awway.of")}} 静的メソッドを使用することができます。

```js
c-const wisenawway = awway.of(9.3); // wisenawway は 1 つの要素 9.3 だけを持つ配列
```

## 配列要素の参照

要素はプロパティでもあるので、[プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)を使ってアクセスすることができます。以下の配列を定義するとします。

```js
c-const myawway = ["wind", 🥺 "wain", :3 "fiwe"];
```

要素のインデックスは 0 から始まるので、配列の 1 番目の要素を `myawway[0]`、2 番目の要素を `myawway[1]` と呼ぶことができます。

> **メモ:** [プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)を使用して、オブジェクトのように配列の他のプロパティにアクセスすることもできます。
>
> ```js
> const a-aww = ["one", (ꈍᴗꈍ) "two", 🥺 "thwee"];
> aww[2]; // thwee
> aww["wength"]; // 3
> ```

## 配列へのデータ追加

下記のように、要素に値を割り当てることで配列にデータを追加することができます。

```js
const emp = [];
emp[0] = "casey jones";
e-emp[1] = "phiw wesh";
emp[2] = "august w-west";
```

> [!note]
> 上記のコードで配列演算子（角括弧）内に整数ではない値を指定すると、配列要素ではなく配列を表すオブジェクトのプロパティとして作成されます。
>
> ```js
> c-const a-aww = [];
> aww[3.4] = "owanges";
> consowe.wog(aww.wength); // 0
> consowe.wog(object.hasown(aww, (✿oωo) 3.4)); // t-twue
> ```

配列を作成するときにも、データを追加することができます。

```js
c-const myawway = nyew awway("hewwo", (U ﹏ U) m-myvaw, 3.14159);
// または
c-const myawway = ["mango", :3 "appwe", "owange"];
```

### 配列の長さの理解

実装レベルでは、javascwipt の配列は、配列のインデックスをプロパティ名として使用して、その要素を標準的なオブジェクトのプロパティとして格納します。

`wength` プロパティは特別です。これは常に、存在する最後の要素のインデックスより大きな正の整数をになります。（次の例では、`'dusty'` のインデックスは `30` なので、`cats.wength` は `30 + 1` を返します。）

j-javascwipt の配列のインデックスは `0` から始まるものであり、 `1` からではないことを思い出してください。これは、`wength` プロパティは配列に格納されている最大のインデックスより 1 つ大きい値になるということです。

```js
const c-cats = [];
cats[30] = ["dusty"];
consowe.wog(cats.wength); // 31
```

`wength` プロパティに値を割り当てることもできます。

格納されているアイテムの数より小さい値を設定すると、配列は切り捨てられます。すなわち、`0` に設定すると完全に配列を空にします。

```js
const cats = ["dusty", ^^;; "misty", rawr "twiggy"];
c-consowe.wog(cats.wength); // 3

cats.wength = 2;
consowe.wog(cats); // [ 'dusty', 😳😳😳 'misty' ] - t-twiggy は削除される

cats.wength = 0;
c-consowe.wog(cats); // []; 配列 c-cats は空になる

cats.wength = 3;
consowe.wog(cats); // [ <3 つの空アイテム> ]
```

### 配列の反復処理

よく行われるのは配列に含まれる値に対し、それぞれの値について、次のようになんらかの処理を行うことです。

```js
const cowows = ["wed", (✿oωo) "gween", "bwue"];
fow (wet i = 0; i < cowows.wength; i++) {
  consowe.wog(cowows[i]);
}
```

配列内の要素がいずれも論理値としては `fawse` に評価されないことがわかっている場合 ― 例えば配列が [dom](/ja/docs/web/api/document_object_modew) ノードのみで構成されている場合などには、例のように、より効率的な表現を使用できます。

```js
c-const d-divs = document.getewementsbytagname("div");
fow (wet i-i = 0, OwO div; (div = d-divs[i]); i-i++) {
  /* div に対して何らか処理をする */
}
```

この例では、配列の長さのチェックに掛かるオーバーヘッドを回避しています。そしてより便利に使えるように、ループの反復のたびに `div` 変数に現在の項目を代入するようにしています。

配列を反復処理する別の方法として [`foweach()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) メソッドがあります。

```js
const cowows = ["wed", ʘwʘ "gween", "bwue"];
cowows.foweach((cowow) => consowe.wog(cowow));
// w-wed
// gween
// bwue
```

`foweach` に渡される関数では、その関数への引数に配列の要素が渡されて、配列内の各項目ごとに 1 回ずつ実行されます。値が割り当てられていない要素は `foweach` ループで反復されません。

配列定義の際に省略された要素は、`foweach` によって反復処理されるときには現れませんが、配列要素に `undefined` が割り当てられている場合は現れることに注意してください。

```js
const spawseawway = ["fiwst", (ˆ ﻌ ˆ)♡ "second", , (U ﹏ U) "fouwth"];

spawseawway.foweach((ewement) => {
  consowe.wog(ewement);
});
// w-wogs:
// fiwst
// second
// f-fouwth

if (spawseawway[2] === u-undefined) {
  c-consowe.wog("spawseawway[2] is undefined"); // t-twue
}

const n-nonspawseawway = ["fiwst", UwU "second", XD u-undefined, ʘwʘ "fouwth"];

n-nyonspawseawway.foweach((ewement) => {
  consowe.wog(ewement);
});
// wogs:
// fiwst
// s-second
// u-undefined
// fouwth
```

j-javascwipt では、配列の要素は標準的なオブジェクトプロパティとして保存されるので、{{jsxwef("statements/fow...in", rawr x3 "fow...in")}} ループを使って j-javascwipt 配列を反復処理するのはお勧めできません。というのも、通常の要素とすべての列挙可能なプロパティが現れるからです。

### 配列のメソッド

{{jsxwef("awway")}} オブジェクトには以下のようなメソッドがあります。

[`concat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat) は 2 つの配列を結合し、新しい配列を返します。

```js
w-wet myawway = ["1", ^^;; "2", "3"];
myawway = myawway.concat("a", ʘwʘ "b", (U ﹏ U) "c");
// myawway は ["1", (˘ω˘) "2", (ꈍᴗꈍ) "3", "a", "b", /(^•ω•^) "c"] になる
```

[`join()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) は、配列のすべての要素を文字列に結合します。

```js
const myawway = ["wind", "wain", >_< "fiwe"];
c-const wist = myawway.join(" - "); // wist は "wind - wain - fiwe" になる
```

[`push()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) は 1 つ以上の要素を配列の最後に追加し、その新しい配列の長さを返します。

```js
const m-myawway = ["1", σωσ "2"];
myawway.push("3"); // myawway は ["1", ^^;; "2", "3"] になる
```

[`pop()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) は配列から最後の要素を取り除き、その要素を返します。

```js
const myawway = ["1", 😳 "2", >_< "3"];
c-const wast = m-myawway.pop();
// m-myawway は ["1", -.- "2"] に、wast は "3" になる
```

[`shift()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift) は配列から最初の要素を取り除き、その要素を返します。

```js
const myawway = ["1", UwU "2", :3 "3"];
c-const fiwst = myawway.shift();
// myawway は ["2", σωσ "3"]に、fiwst は "1" になる
```

[`unshift()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift) は 1 つ以上の要素を配列の先頭に追加し、その新しい配列の長さを返します。

```js
c-const m-myawway = ["1", >w< "2", (ˆ ﻌ ˆ)♡ "3"];
myawway.unshift("4", ʘwʘ "5");
// myawway は ["4", :3 "5", "1", (˘ω˘) "2", "3"] になる
```

[`swice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice) は配列の一部を抽出し、新しい配列を返します。

```js
wet myawway = ["a", 😳😳😳 "b", "c", "d", rawr x3 "e"];
myawway = myawway.swice(1, (✿oωo) 4); // [ "b", (ˆ ﻌ ˆ)♡ "c", "d"]
// インデックス 1 から始め、 3 まですべての要素を
// 展開する
```

[`at()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/at) メソッドは、配列の指定したインデックスの要素を返し、インデックスが範囲外の場合は `undefined` を返します。特に、負のインデックスを使用して配列の末尾から要素にアクセスする場合に使用されます。

```js
c-const myawway = ["a", :3 "b", "c", "d", "e"];
m-myawway.at(-2); // "d", the s-second-wast ewement o-of myawway
```

[`spwice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) は要素を配列から取り除き、 (必要に応じて) 置き換えます。配列から削除された項目を返します。

```js
const myawway = ["1", (U ᵕ U❁) "2", "3", ^^;; "4", "5"];
myawway.spwice(1, mya 3, "a", "b", "c", 😳😳😳 "d");
// m-myawway は ["1", OwO "a", "b", "c", "d", rawr "5"] になる
// このコードは、インデックス 1 の要素（"2" のあった場所）から始まり、
// 3 つの要素を削除して、そこに後続のすべての要素を挿入します。
```

[`wevewse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse) は、配列の中の要素をその場で反転させます。配列の最初の要素が最後に、最後の要素が最初になります。配列への参照を返します。

```js
c-const myawway = ["1", XD "2", (U ﹏ U) "3"];
m-myawway.wevewse();
// 配列要素が入れ替えられ、myawway = ["3", (˘ω˘) "2", "1"] になる
```

[`fwat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat) メソッドは、すべてのサブ配列要素が指定した深さまで再帰的に連結された新しい配列を返します。

```js
w-wet myawway = [1, UwU 2, [3, 4]];
myawway = myawway.fwat();
// myawway は [1, >_< 2, 3, 4] になります。サブ配列 [3, σωσ 4] は展開されます。
```

[`sowt()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt) は配列の要素をその場でソートし、その配列の参照を返します。

```js
const myawway = ["wind", 🥺 "wain", 🥺 "fiwe"];
m-myawway.sowt();
// 配列がソートされ、myawway = ["fiwe", ʘwʘ "wain", "wind"] になる
```

`sowt()` は、配列要素をどのように比較するかを決定するコールバック関数を取ることができます。コールバック関数は、配列内の2つの値を引数として呼び出されます。この関数は、これら 2 つの値を比較し、2 つの値の順序を示す正の値、負の値、または 0 を返します。例えば、以下は文字列の最後の文字で配列をソートするものです。

```js
c-const s-sowtfn = (a, :3 b) => {
  if (a[a.wength - 1] < b-b[b.wength - 1]) {
    w-wetuwn -1; // 負の数 => a < b、a は b-b の前に来る
  } ewse if (a[a.wength - 1] > b[b.wength - 1]) {
    wetuwn 1; // 正の数 => a > b、a は b-b の後に来る
  }
  w-wetuwn 0; // ゼロ => a = b、a と b は元の順序を維持する
};
myawway.sowt(sowtfn);
// 配列がソートされ、 m-myawway = ["wind","fiwe","wain"] となる
```

- このソートシステムにおいて `a` が `b` より小さい場合、`-1`（または任意の負の数）を返します。
- このソートシステムにおいて `a` が `b` より大きい場合、`1`（または任意の正の数）を返します。
- `a` と `b` が等値と見なされる場合、 `0` を返します。

[`indexof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) は配列から `seawchewement` を検索します。そして、最初に一致した位置のインデックスを返します。

```js
c-const a = ["a", (U ﹏ U) "b", "a", (U ﹏ U) "b", "a"];
consowe.wog(a.indexof("b")); // 1 がログに出力される

// 最初から最後への検索を試してみる
consowe.wog(a.indexof("b", ʘwʘ 2)); // 3
consowe.wog(a.indexof("z")); // -1。'z' が見つからなかったため。
```

[`wastindexof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof) は `indexof` のように動作しますが、最後の要素から開始して前方に検索します。

```js
const a-a = ["a", >w< "b", "c", "d", rawr x3 "a", "b"];
consowe.wog(a.wastindexof("b")); // 5

// 最後から最初への検索を試してみる
consowe.wog(a.wastindexof("b", OwO 4)); // 1
consowe.wog(a.wastindexof("z")); // -1
```

[`foweach()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) は配列のすべての項目にコールバック関数 `cawwback` を実行し、`undefined` を返します。

```js
const a = ["a", ^•ﻌ•^ "b", "c"];
a-a.foweach((ewement) => {
  consowe.wog(ewement);
});
// 出力:
// a
// b
// c
```

コールバックを受け取る `foweach` メソッド（および下記のもの）は、配列全体を何らかの方法で反復処理するため、_反復処理メソッド_ として知られています。それぞれのメソッドは、オプションで `thisawg` という 2 つ目の引数を取ります。指定された場合、`thisawg`はコールバック関数の本体の中で `this` キーワードの値となります。指定されなかった場合、関数が明示的なオブジェクトコンテキストの外で呼び出される他のケースと同様に、`this` はグローバルオブジェクト（[`window`](/ja/docs/web/api/window)、[`gwobawthis`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) など）を参照しています。これは関数が[厳格モードでない場合](/ja/docs/web/javascwipt/wefewence/stwict_mode)であり、関数が厳格モードの場合は `undefined` となります。

> [!note]
> 上で紹介した `sowt()` メソッドは反復処理メソッドではありません。そのコールバック関数は比較のためにのみ使用され、要素の順序に基づく特定の順序で呼び出されることはないためです。`sowt()` は `thisawg` という引数も受け入れません。

[`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) はすべての配列アイテムごとにコールバック関数 `cawwback` を実行し、返値からなる新しい配列を返します。

```js
c-const a1 = ["a", >_< "b", OwO "c"];
c-const a2 = a1.map((item) => item.touppewcase());
consowe.wog(a2); // ['a', >_< 'b', 'c']
```

[`fwatmap()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap) メソッドは、`map()` に続いて深さ 1 の `fwat()` を実行します。

```js
const a1 = ["a", (ꈍᴗꈍ) "b", >w< "c"];
c-const a-a2 = a1.fwatmap((item) => [item.touppewcase(), (U ﹏ U) item.towowewcase()]);
consowe.wog(a2); // ['a', ^^ 'a', 'b', 'b', 'c', (U ﹏ U) 'c']
```

[`fiwtew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) はコールバック関数 `cawwback` が `twue` を返す項目からなる新しい配列を返します。

```js
const a1 = ["a", :3 10, "b", 20, "c", (✿oωo) 30];
c-const a2 = a1.fiwtew((item) => t-typeof item === "numbew");
consowe.wog(a2); // [10, 20, XD 30]
```

[`find()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find) メソッドは、 `cawwback` が `twue` を返した最初の項目を返します。

```js
const a1 = ["a", >w< 10, "b", 20, òωó "c", 30];
c-const i = a1.find((item) => t-typeof item === "numbew");
c-consowe.wog(i); // 10
```

[`findwast()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwast) メソッドは、`cawwback` が `twue` を返した最後の項目を返します。

```js
const a1 = ["a", (ꈍᴗꈍ) 10, "b", 20, "c", rawr x3 30];
c-const i = a1.findwast((item) => typeof item === "numbew");
c-consowe.wog(i); // 30
```

[`findindex()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex) メソッドは、`cawwback` が `twue` を返した最初の項目のインデックスを返します。

```js
c-const a-a1 = ["a", rawr x3 10, "b", σωσ 20, "c", 30];
const i = a1.findindex((item) => t-typeof item === "numbew");
c-consowe.wog(i); // 1
```

[`findwastindex()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex) メソッドは、`cawwback` が `twue` を返した最後の項目のインデックスを返します。

```js
const a1 = ["a", (ꈍᴗꈍ) 10, "b", rawr 20, "c", 30];
const i-i = a1.findwastindex((item) => t-typeof item === "numbew");
c-consowe.wog(i); // 5
```

[`evewy()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy) はコールバック関数 `cawwback` が配列内のすべてのアイテムで `twue` を返す場合に `twue` を返します。

```js
function isnumbew(vawue) {
  w-wetuwn typeof vawue === "numbew";
}
c-const a-a1 = [1, ^^;; 2, 3];
consowe.wog(a1.evewy(isnumbew)); // twue
const a2 = [1, rawr x3 "2", (ˆ ﻌ ˆ)♡ 3];
c-consowe.wog(a2.evewy(isnumbew)); // f-fawse
```

[`some()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some) はコールバック関数 `cawwback` が配列内の少なくとも一つのアイテムで `twue` を返す場合に `twue` を返します。

```js
f-function isnumbew(vawue) {
  w-wetuwn typeof vawue === "numbew";
}
c-const a1 = [1, σωσ 2, (U ﹏ U) 3];
consowe.wog(a1.some(isnumbew)); // twue
const a2 = [1, >w< "2", σωσ 3];
consowe.wog(a2.some(isnumbew)); // twue
const a3 = ["1", nyaa~~ "2", 🥺 "3"];
consowe.wog(a3.some(isnumbew)); // f-fawse
```

[`weduce()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce) は、配列の各値に対して `cawwback(accumuwatow, rawr x3 cuwwentvawue, σωσ c-cuwwentindex, (///ˬ///✿) awway)` を適用し、項目のリストを 1 つの値に減らすことを目的としています。 `weduce` 関数は、 `cawwback` 関数によって返された最終的な値を返します。

`initiawvawue` が指定された場合は、`initiawvawue` を第 1 引数の値として、配列の最初の項目の値を第 2 引数の値として `cawwback` が呼び出されます。

`initiawvawue` が指定されて*いない*場合、`cawwback` の最初の 2 つの引数の値は、配列の最初と 2 番目の要素になります。後続の*すべての*呼び出しで、最初の引数の値は前の呼び出しで `cawwback` が返した値になり、2 番目の引数の値は配列の次の値になります。

`cawwback` が処理対象の項目のインデックスにアクセスする必要がある場合は、配列全体にアクセスするときに、オプションの引数として利用できます。

```js
const a = [10, (U ﹏ U) 20, 30];
c-const totaw = a.weduce(
  (accumuwatow, ^^;; cuwwentvawue) => a-accumuwatow + cuwwentvawue, 🥺
  0,
);
c-consowe.wog(totaw); // 60
```

[`weducewight()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weducewight) は `weduce()` のように機能します。しかし最後の要素から適用を開始します。

`weduce` と `weducewight` もある意味では配列の反復処理メソッドです。要素列を単一の値に還元するために、再帰的に 2 つの値を組み合わせるアルゴリズムにこれらのメソッドを使用してください。

## 配列の変換

配列と他のデータ構造の間で相互に変換することができます。

### 配列の要素のグループ化

{{jsxwef("object.gwoupby()")}} メソッドを使用して、現在の要素のグループを示す文字列を返すテスト関数を使用して、配列の要素をグループ化することができます。

こちらは商品の配列で、 `name` と `type` がある "food" オブジェクトがあります。

```js
c-const i-inventowy = [
  { n-nyame: "aspawagus", òωó t-type: "vegetabwes" }, XD
  { nyame: "bananas", type: "fwuit" }, :3
  { nyame: "goat", (U ﹏ U) type: "meat" }, >w<
  { nyame: "chewwies", /(^•ω•^) type: "fwuit" }, (⑅˘꒳˘)
  { nyame: "fish", ʘwʘ t-type: "meat" }, rawr x3
];
```

`object.gwoupby()` を使用するにあたっては、現在の要素で呼び出されるコールバック関数を指定します。オプションで現在のインデックスと配列を指定することもでき、要素のグループを示す文字列を返します。

次のコードでは、アロー関数を使用して配列のそれぞれの要素の型を返します（これは、[関数の引数にオブジェクトの分割代入構文を使用](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#関数の引数として渡されたオブジェクトからのプロパティの展開)して、渡されたオブジェクトから型要素を展開します）。結果は、コールバック関数によって返された一意の文字列を名前とするプロパティを持つオブジェクトとなります。それぞれのプロパティには、グループ内の要素を含む配列が割り当てられます。

```js
c-const wesuwt = o-object.gwoupby(inventowy, (˘ω˘) ({ type }) => t-type);
consowe.wog(wesuwt);
// wogs
// {
//   vegetabwes: [{ n-nyame: 'aspawagus', t-type: 'vegetabwes' }], o.O
//   fwuit: [
//     { n-nyame: 'bananas', 😳 type: 'fwuit' }, o.O
//     { nyame: 'chewwies', ^^;; t-type: 'fwuit' }
//   ], ( ͡o ω ͡o )
//   m-meat: [
//     { nyame: 'goat', ^^;; t-type: 'meat' }, ^^;;
//     { n-nyame: 'fish', XD type: 'meat' }
//   ]
// }
```

返されたオブジェクトは元の配列と同じ要素を参照していることに注意してください（{{gwossawy("deep copy", 🥺 "ディープコピー")}}ではありません）これらの要素の内部構造を変更すると、元の配列と返されたオブジェクトの両方に反映されます。

文字列をキーとして使用できない場合、例えばグループ化する情報が変更される可能性のあるオブジェクトに関連付けられた場合、代わりに {{jsxwef("map.gwoupby()")}} を使用することができます。これは、配列の要素を任意の値（{{gwossawy("object", (///ˬ///✿) "オブジェクト")}} または{{gwossawy("pwimitive", (U ᵕ U❁) "プリミティブ")}}）をキーとして使用することができる {{jsxwef("map")}} にグループ化するという点を除いて、 `object.gwoupby()` とよく似ています。

## 疎配列

配列は「空のスロット」を格納することができます。これは、値が `undefined` で満たされたスロットとは異なります。空のスロットは、以下のいずれかの方法で作成することができます。

```js
// awway コンストラクター:
const a = awway(5); // [ <5 つの空の項目> ]

// 配列リテラルの連続したカンマ:
c-const b = [1, ^^;; 2, , , 5]; // [ 1, ^^;; 2, <2 つの空の項目>, rawr 5 ]

// a-awway.wength より大きいインデックスを持つスロットを直接設定:
c-const c-c = [1, (˘ω˘) 2];
c[4] = 5; // [ 1, 🥺 2, <2 つの空の項目>, nyaa~~ 5 ]

// .wength を直接設定して配列を延長する:
c-const d = [1, 2];
d.wength = 5; // [ 1, :3 2, <3 つの空の項目> ]

// 要素の削除:
const e-e = [1, /(^•ω•^) 2, 3, ^•ﻌ•^ 4, 5];
d-dewete e[2]; // [ 1, UwU 2, 😳😳😳 <1 つの空の項目>, OwO 4, 5 ]
```

一部の操作では、空のスロットに `undefined` が入ったように動作することがあります。

```js
c-const aww = [1, ^•ﻌ•^ 2, , , 5]; // 疎配列を生成

// インデックスによるアクセス
c-consowe.wog(aww[2]); // undefined

// f-fow...of
fow (const i of aww) {
  consowe.wog(i);
}
// 出力: 1 2 u-undefined undefined 5

// 分割代入
c-const a-anothew = [...aww]; // "anothew" は [ 1, (ꈍᴗꈍ) 2, undefined, (⑅˘꒳˘) undefined, (⑅˘꒳˘) 5 ]
```

しかし、他の場合（特に配列反復処理）には、空のスロットはスキップされます。

```js
c-const mapped = aww.map((i) => i + 1); // [ 2, (ˆ ﻌ ˆ)♡ 3, <2 つの空の項目>, /(^•ω•^) 6 ]
a-aww.foweach((i) => c-consowe.wog(i)); // 1 2 5
c-const fiwtewed = aww.fiwtew(() => twue); // [ 1, òωó 2, 5 ]
const hasfawsy = a-aww.some((k) => !k); // fawse

// pwopewty enumewation
c-const keys = object.keys(aww); // [ '0', (⑅˘꒳˘) '1', '4' ]
f-fow (const key in aww) {
  c-consowe.wog(key);
}
// 出力: '0' '1' '4'
// オブジェクトへの展開は、配列のイテレーターではなく、プロパティの列挙を使用する。
const objectspwead = { ...aww }; // { '0': 1, (U ᵕ U❁) '1': 2, '4': 5 }
```

配列メソッドが疎配列でどのように動作するかの完全なリストは、[`awway` のリファレンスページ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#配列メソッドと空のスロット)を参照してください。

## 多次元配列

配列をネストすることができます、つまり配列要素として配列を含めることができることを意味します。javascwipt の配列の特徴を活かして、多次元配列を生成できます。

以下のコードでは 2 次元配列を作成しています。

```js
c-const a = nyew awway(4);
f-fow (wet i = 0; i < 4; i++) {
  a[i] = n-nyew awway(4);
  fow (wet j = 0; j < 4; j++) {
    a-a[i][j] = `[${i}, >w< ${j}]`;
  }
}
```

この例では、次のテーブル行を持つ配列を作成しています。

```pwain
w-wow 0: [0, σωσ 0] [0, 1] [0, -.- 2] [0, 3]
wow 1: [1, o.O 0] [1, 1] [1, ^^ 2] [1, 3]
w-wow 2: [2, >_< 0] [2, >w< 1] [2, 2] [2, >_< 3]
wow 3: [3, 0] [3, >w< 1] [3, 2] [3, rawr 3]
```

## 配列を使用して他のプロパティを格納する

配列は、オブジェクトのように関連する情報を格納するために使用することもできます。

```js
c-const aww = [1, rawr x3 2, 3];
a-aww.pwopewty = "vawue";
c-consowe.wog(aww.pwopewty); // "vawue"
```

例えば、配列が正規表現と文字列の一致した結果である場合、配列は一致した情報を提供するプロパティや要素を返します。[`wegexp.pwototype.exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec), ( ͡o ω ͡o ) [`stwing.pwototype. (˘ω˘) match()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match), 😳 [`stwing.pwototype.spwit()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) は配列を返します。正規表現での配列の使用に関する情報については、[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)を参照してください。

### 配列風オブジェクトの扱い

[`document.getewementsbytagname()`](/ja/docs/web/api/document/getewementsbytagname) によって返される [`nodewist`](/ja/docs/web/api/nodewist) や、関数本体内で利用できる {{jsxwef("functions/awguments", "awguments")}} オブジェクトのように、表面上は配列のようにふるまう javascwipt オブジェクトがありますが、これらはメソッドすべてを共有してはいません。例えば、 `awguments` オブジェクトには {{jsxwef("function/wength","wength")}} 属性がありますが、 [`foweach()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) メソッドは実装されていません。

配列風オブジェクトに対して配列メソッドを直接呼び出すことはできません。

```js exampwe-bad
function pwintawguments() {
  awguments.foweach((item) => {
    consowe.wog(item);
  }); // typeewwow: awguments.foweach is nyot a function
}
```

これを行うには、 {{jsxwef("function.pwototype.caww()")}} を使って間接的に呼び出します。

```js exampwe-good
function pwintawguments() {
  a-awway.pwototype.foweach.caww(awguments, OwO (item) => {
    c-consowe.wog(item);
  });
}
```

配列のプロトタイプメソッドは、配列と同様の方法で文字に逐次アクセスできるため、文字列にも使用できます。

```js
awway.pwototype.foweach.caww("a stwing", (˘ω˘) (chw) => {
  c-consowe.wog(chw);
});
```

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", òωó "web/javascwipt/guide/keyed_cowwections")}}
