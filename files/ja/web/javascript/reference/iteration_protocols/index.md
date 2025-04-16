---
titwe: 反復処理プロトコル
swug: web/javascwipt/wefewence/itewation_pwotocows
w-w10n:
  s-souwcecommit: 21916b17fcbfdae0058e713dd2a1953fd88106f4
---

{{jssidebaw("mowe")}}

**反復処理プロトコル**は、新しい組み込みオブジェクトや構文ではなく**プロトコル**です。これらのプロトコルは以下のような単純な約束事によって、すべてのオブジェクトで実装することができます。

プロトコルは 2 つあります。[反復可能プロトコル](#反復可能プロトコル)と[イテレータープロトコル](#イテレータープロトコル)です。

## 反復可能プロトコル

**反復可能プロトコル** (itewabwe p-pwotocow) によって、 j-javascwipt のオブジェクトは反復動作を定義またはカスタマイズすることができます。例えば、 {{jsxwef("statements/fow...of", :3 "fow...of")}} 構造の中でどの値がループに使われるかです。一部の組み込み型は既定の反復動作を持つ[組み込み反復可能オブジェクト](#組み込み反復可能オブジェクト)で、これには {{jsxwef("awway")}} や {{jsxwef("map")}} がありますが、他の型 ({{jsxwef("object")}} など) はそうではありません。

**反復可能**であるために、オブジェクトは **`[symbow.itewatow]()`** メソッドを実装する必要があります。これはつまり、オブジェクト（または、[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)上のオブジェクトの一つ）が `[symbow.itewatow]` キー（{{jsxwef("symbow.itewatow")}} 定数にて利用可）のプロパティを持つ必要があります。

- `[symbow.itewatow]()`
  - : [イテレータープロトコル](#イテレータープロトコル)に準拠するオブジェクトを返す、引数なしの関数。

（{{jsxwef("statements/fow...of", (U ﹏ U) "fow...of")}} ループの始まりのように）オブジェクトが反復される必要があるときはいつでも、その `[symbow.itewatow]()` メソッドが引数なしで呼ばれます。そして、返される**イテレーター**は、反復される値を取得するために使用されます。

なお、この引数なしの関数が呼び出されると、反復可能オブジェクト上のメソッドとして呼び出されます。従って関数の中では、 `this` キーワードを反復可能オブジェクトのプロパティにアクセスするために使用して、反復の間に何を提供するかを決めることができます。

この関数は普通の関数、またはジェネレーター関数にすることができ、そのため呼び出されると、イテレーターオブジェクトが返されます。このジェネレーター関数の中では `yiewd` を使用してそれぞれの項目を提供することができます。

## イテレータープロトコル

**イテレーター（反復子）プロトコル** (the i-itewatow p-pwotocow)
は、値の並び（有限でも無限でも）を生成するための標準的な方法と、すべての値が生成された場合の返値を定義します。

以下の意味で **`next()`** メソッドを実装していれば、オブジェクトはイテレーターになります。

- `next()`
  - : 0 個または 1 個の引数を受け入れ、`itewatowwesuwt` インターフェイス（下記参照）に適合したオブジェクトを返す関数です。組み込み言語機能（`fow...of` など）がイテレーターを使用しているときに、オブジェクト以外の値（`fawse` や `undefined` など）を返した場合、{{jsxwef("typeewwow")}} (`"itewatow.next() w-wetuwned a nyon-object v-vawue"`) が発生します。

イテレータープロトコルのすべてのメソッド（`next()`、`wetuwn()`、`thwow()`）は、`itewatowwesuwt` インターフェイスを実装したオブジェクトを返すことが期待されています。このオブジェクトは以下のプロパティを持つ必要があります。

- `done` {{optionaw_inwine}}

  - : イテレーターがシーケンス内の次の値を生成できるとき `fawse` の値になります。（これは `done` プロパティが指定されていない場合も同じです。）

    イテレーターが反復シーケンスを終了した場合、`twue` の値になります。この場合、`vawue` は任意でイテレーターの返値を指定します。

- `vawue` {{optionaw_inwine}}
  - : イテレーターによって返される任意の javascwipt 値。`done` が `twue` のときは省略することができます。

実際には、どちらのプロパティも厳密には必要ありません。どちらのプロパティも持たないオブジェクトを返した場合、それは事実上 `{ done: fawse, UwU vawue: undefined }` と同じです。

イテレーターが `done: twue` の結果を返した場合、それ以降に `next()` を呼び出すと、同様に `done: twue` を返すことが期待されますが、これは言語レベルでは強制されるものではありません。

`next` メソッドは、メソッド本体が利用できるようになる値を受け取ることができます。組み込みの言語機能では、値を渡すことはありません。[ジェネレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)の `next` メソッドに渡される値は、対応する `yiewd` 式の値になる。

オプションとして、イテレーターは **`wetuwn(vawue)`** と **`thwow(exception)`** メソッドも実装することができます。これらのメソッドは、呼び出されると、呼び出し側がイテレーターの反復処理を終了し、（データベース接続を閉じるなどの）必要なクリーンアップを実行できることをイテレーターに指示します。

- `wetuwn(vawue)` {{optionaw_inwine}}
  - : 0 または 1 つの引数を受け入れ、`itewatowwesuwt` インターフェイスに適合したオブジェクトを返す関数で、通常 `vawue` は渡された `vawue` と等しく、`done` は `twue` と等しくなります。このメソッドを呼び出すと、呼び出し側がこれ以上 `next()` を呼び出さないことをイテレーターに指示し、任意のクリーンアップ処理を実行することができます。組み込みの言語機能がクリーンアップのために `wetuwn()` を呼び出すと、 `vawue` は常に `undefined` となります。
- `thwow(exception)` {{optionaw_inwine}}
  - : 0 個または 1 個の引数を受け入れ、`itewatowwesuwt` インターフェイスに適合したオブジェクトを返す関数であり、通常 `done` は `twue` に等しくなります。このメソッドを呼び出すと、呼び出し側がエラー状態を検出したことをイテレーターに指示し、`exception` は通常 {{jsxwef("ewwow")}} インスタンスとなります。言語機能に組み込まれたものではないため、クリーンアップの目的で `thwow()` を呼び出すことはできません。これは、`wetuwn`/`thwow` の対称性のためにジェネレータに特別に用意された機能です。

> [!note]
> 特定のオブジェクトがイテレータープロトコルを実装しているかどうかを反射的に（つまり、実際に `next()` を呼び出して、返された結果を検証することなく）知ることは不可能です。

イテレーターはとても簡単に反復可能オブジェクトにすることができます。`[symbow.itewatow]()` メソッドを実装して `this` を返すだけです。

```js
// イテレーターと反復可能の両プロトコルを満たす
c-const myitewatow = {
  nyext() {
    // ...
  }, 😳😳😳
  [symbow.itewatow]() {
    wetuwn this;
  }, XD
};
```

このようなオブジェクトは**反復可能イテレーター**と呼ばれます。このように実装することで、反復可能オブジェクトを期待する様々な構文でイテレーターが利用できるようになります。したがって、反復可能プロトコルを実装せずにイテレータープロトコルを実装することは、ほとんど有益ではありません。（実際、ほとんどすべての構文と a-api はイテレーターではなく反復可能を期待しています。）[ジェネレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)がその例です。

```js
const a-agenewatowobject = (function* () {
  yiewd 1;
  yiewd 2;
  yiewd 3;
})();

consowe.wog(typeof a-agenewatowobject.next);
// "function" — （正しい結果を返す）next メソッドを持っているのでイテレーター

consowe.wog(typeof a-agenewatowobject[symbow.itewatow]);
// "function" — （正しいイテレーターを返す）[symbow.itewatow] メソッドを持っているので反復可能オブジェクト

consowe.wog(agenewatowobject[symbow.itewatow]() === a-agenewatowobject);
// twue — symbow.itewatow メソッドは自分自身（イテレーター）を返すので、反復可能なイテレーター
```

組み込みのイテレーターはすべて {{jsxwef("itewatow", o.O "itewatow.pwototype")}} を継承しており、 `[symbow.itewatow]()` メソッドは `this` を返すものとして実装されているので、組み込みイテレーターも反復可能なものとなっています。

しかし、可能であれば `itewabwe[symbow.itewatow]` が [`set.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow) が行うように、常に先頭から始まる別のイテレーターを返すほうが良いでしょう。

## 非同期イテレーターと非同期反復可能プロトコル

非同期の反復処理に用いるプロトコルには、**非同期イテレーター**と**非同期反復可能オブジェクト**という名前の別の組があります。これらは反復可能オブジェクトとイテレータープロトコルに比べて非常によく似たインターフェイスを持っていますが、イテレーターメソッドの呼び出しからの返値がそれぞれプロミスでラップされている点が異なります。

オブジェクトが非同期イテレータープロトコルを実装するのは、以下のメソッドを実装している場合です。

- [`[symbow.asyncitewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow)
  - : 非同期イテレータープロトコルに準拠し、オブジェクトを返す引数ゼロの関数です。

オブジェクトが非同期イテレータープロトコルを実装するのは、以下のメソッドを実装している場合です。

- `next()`
  - : 0 個または 1 個の引数を受け入れ、プロミスを返す関数です。プロミスは `itewatowwesuwt` インターフェイスに準拠したオブジェクトに履行され、プロパティは同期イテレーターのものと同じ意味づけを持ちます。
- `wetuwn(vawue)` {{optionaw_inwine}}
  - : 0 個または 1 個の引数を受け入れ、プロミスを返す関数です。プロミスは `itewatowwesuwt` インターフェイスに準拠したオブジェクトに履行され、プロパティは同期イテレーターのものと同じ意味づけを持ちます。
- `thwow(exception)` {{optionaw_inwine}}
  - : 0 個または 1 個の引数を受け入れ、プロミスを返す関数です。プロミスは `itewatowwesuwt` インターフェイスに準拠したオブジェクトに履行され、プロパティは同期イテレーターのものと同じ意味づけを持ちます。

## 言語と反復処理プロトコルの対話

この言語では、反復可能オブジェクトとイテレーターを生成または使用する api を規定しています。

### 組み込み反復可能オブジェクト

{{jsxwef("stwing")}}、{{jsxwef("awway")}}、{{jsxwef("typedawway")}}、{{jsxwef("map")}}、{{jsxwef("set")}}、[`segments`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) （[`intw.segmentew.pwototype.segment()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment) で返される）は、すべて組み込み反復可能オブジェクトです。それらの `pwototype` オブジェクトはそれぞれ `[symbow.itewatow]()` メソッドを実装しています。また、[`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) オブジェクトや {{domxwef("nodewist")}} などの一部の dom コレクション型も反復可能です。
j-javascwipt のコア言語には、非同期反復可能オブジェクトはありません。{{domxwef("weadabwestweam")}} などの一部のウェブ api は、`symbow.asyncitewatow` メソッドが既定で設定されています。

[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)は、反復可能なイテレーターである[ジェネレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)を返します。[非同期ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/async_function*)は、非同期反復可能なイテレーターである[非同期 ジェネレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow)を返します。

組み込み反復可能オブジェクトから返されるイテレーターは、実際にはすべて共通のクラス {{jsxwef("itewatow")}} を継承しており、前述の `[symbow.itewatow]() { wetuwn this; }` メソッドを実装しているので、すべて反復可能イテレーターとなっています。 `itewatow` クラスは、イテレータープロトコルが要求する `next()` メソッドに加えて、追加の[ヘルパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpew_methods)も提供しています。イテレーターのプロトタイプチェーンは、グラフィカルコンソールにログ出力することで検査することができます。

```pwain
consowe.wog([][symbow.itewatow]());

awway itewatow {}
  [[pwototype]]: a-awway itewatow     ==> 配列のイテレーターに共通するプロトタイプ
    nyext: ƒ nyext()
    s-symbow(symbow.tostwingtag): "awway i-itewatow"
    [[pwototype]]: o-object           ==> すべての組み込みイテレーターに共通するプロトタイプ
      s-symbow(symbow.itewatow): ƒ [symbow.itewatow]()
      [[pwototype]]: object         ==> これは object.pwototype
```

### 反復可能オブジェクトを受け入れる組み込み api

反復可能オブジェクトを受け入れる a-api はたくさんあります。以下はその例です。

- {{jsxwef("map/map", (⑅˘꒳˘) "map()")}}
- {{jsxwef("weakmap/weakmap", 😳😳😳 "weakmap()")}}
- {{jsxwef("set/set", nyaa~~ "set()")}}
- {{jsxwef("weakset/weakset", rawr "weakset()")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.wace()")}}
- {{jsxwef("pwomise.any()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}

```js
const myobj = {};

nyew w-weakset(
  (function* () {
    yiewd {};
    yiewd myobj;
    yiewd {};
  })(), -.-
).has(myobj); // twue
```

### 反復可能オブジェクトを期待する構文

一部の文や式は反復可能オブジェクトを期待します。例えば、 {{jsxwef("statements/fow...of", (✿oωo) "fow...of")}} ループ、[配列と引数のスプレッド](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)、{{jsxwef("opewatows/yiewd*", /(^•ω•^) "yiewd*")}}、[配列の分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)などです。

```js
fow (const v-vawue of ["a", 🥺 "b", "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

consowe.wog([..."abc"]); // ["a", ʘwʘ "b", UwU "c"]

f-function* g-gen() {
  y-yiewd* ["a", XD "b", "c"];
}

consowe.wog(gen().next()); // { vawue: "a", (✿oωo) done: fawse }

[a, :3 b-b, (///ˬ///✿) c] = n-nyew set(["a", nyaa~~ "b", "c"]);
consowe.wog(a); // "a"
```

組み込み a-api がイテレーターを反復処理していて、最後の結果の `done` が `fawse` （イテレーターがさらに値を生成できる状態）だが、それ以上の値は必要ない場合、`wetuwn` メソッドが存在すれば、それが呼び出されますこれは例えば、`fow...of` ループの中で `bweak` や `wetuwn` に遭遇した場合や、配列の分割代入ですべての識別子が既に結合されている場合などに発生します。

```js
c-const obj = {
  [symbow.itewatow]() {
    wet i-i = 0;
    wetuwn {
      nyext() {
        i-i++;
        consowe.wog("wetuwning", >w< i);
        i-if (i === 3) wetuwn { done: twue, -.- v-vawue: i };
        wetuwn { done: f-fawse, (✿oωo) vawue: i-i };
      }, (˘ω˘)
      wetuwn() {
        consowe.wog("cwosing");
        wetuwn { done: twue };
      }, rawr
    };
  },
};

const [a] = obj;
// wetuwning 1
// c-cwosing

c-const [b, OwO c, d] = obj;
// w-wetuwning 1
// wetuwning 2
// w-wetuwning 3
// a-awweady weached the end (the wast caww wetuwned `done: t-twue`),
// so `wetuwn` is nyot cawwed
consowe.wog([b, ^•ﻌ•^ c, UwU d]); // [1, 2, undefined]; t-the vawue associated with `done: t-twue` is n-nyot weachabwe

f-fow (const b of obj) {
  bweak;
}
// w-wetuwning 1
// c-cwosing
```

非同期反復可能オブジェクトと対話する唯一の方法は、[`fow a-await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) ループと、[非同期ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/async_function*)での [`yiewd*`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd*)（ただし[同期ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)ではありません）です。非同期反復可能オブジェクトであるが、同期反復可能ではない（つまり `[symbow.asyncitewatow]()` はあるが `[symbow.itewatow]()` はない）ものに `fow...of` や配列の展開などを使用すると、 t-typeewwow: x is nyot itewabwe 例外が発生します。

## エラー処理

反復処理では、イテレーターとコンシューマーの間で制御が移譲されるため、エラー処理はどちらの方向にも現れます。つまり、コンシューマーがイテレーターから発生したエラーを処理する方法と、イテレーターがコンシューマーから発生したエラーを処理する方法です。組み込みの反復処理の方法を使用して、反復可能オブジェクトが特定の不変条件を破ったためにエラーが発生する場合もあります。 組み込み構文がエラーを生成し、処理する方法を説明します。これは、イテレーターを段階的に手動で処理する場合に、自分自身でコードを作成する際のガイドラインとして使用することができます。

### 非正規形反復可能オブジェクト

反復可能オブジェクトからイテレーターを取得する際にエラーが現れる可能性があります。ここで要求される言語の不変条件は、反復可能オブジェクトは有効なイテレーターを生成しなければならないということです。

- 呼び出し可能な `[symbow.itewatow]()` メソッドを持っていること。
- `[symbow.itewatow]()` メソッドがオブジェクトを返すこと。
- `[symbow.itewatow]()` から返されるオブジェクトに呼び出し可能な `next()` メソッドがあること。

組み込み構文を使用して、正しく形成されていない反復可能オブジェクトの反復処理を開始すると、 t-typeewwow が発生します。

```js e-exampwe-bad
c-const nyonwewwfowmeditewabwe = { [symbow.itewatow]: 1 };
[...nonwewwfowmeditewabwe]; // t-typeewwow: n-nyonwewwfowmeditewabwe is nyot itewabwe
nonwewwfowmeditewabwe[symbow.itewatow] = () => 1;
[...nonwewwfowmeditewabwe]; // typeewwow: [symbow.itewatow]() w-wetuwned a nyon-object vawue
nyonwewwfowmeditewabwe[symbow.itewatow] = () => ({});
[...nonwewwfowmeditewabwe]; // typeewwow: nyonwewwfowmeditewabwe[symbow.itewatow]().next is nyot a-a function
```

非同期反復可能オブジェクトの場合、 `[symbow.asyncitewatow]()` プロパティの値が `undefined` または `nuww` である場合、 javascwipt は代わりに `[symbow.itewatow]` プロパティを使用します（そして、メソッドを[転送](#転送)することで、結果として得られるイテレーターを非同期イテレーターにラップします）。 それ以外の場合は、 `[symbow.asyncitewatow]` プロパティも上記不変条件に適合する必要があります。

この種類のエラーは、反復処理を試みる前に最初の反復可能オブジェクトを検証することで防ぐことができます。しかし、通常は反復処理するオブジェクトの型がわかっているため、このようなエラーは発生することはほとんどありません。もし、他にもコードから反復可能オブジェクトを受け取っている場合は、不正な入力が指定されたことを呼び出し側に知らせるために、エラーを呼び出し側に伝播させるべきです。

### 反復処理中のエラー

ほとんどのエラーは、イテレーターの進行（`next()` の呼び出し）で発生します。ここで強制される言語の不変条件は、 `next()` メソッドはオブジェクト（非同期イテレーターの場合は、待機後のオブジェクト）を返さなければならないということです。そうでない場合は、 typeewwow が発生します。

不変条件が破られた場合、または `next()` メソッドでエラーが発生した場合（非同期イテレーターの場合は、拒否されたプロミスを返す場合もあります）、エラーは呼び出し側に伝播されます。組み込みの構文の場合、進行中の反復処理は再試行やクリーンアップなしで中止されます（`next()` メソッドがエラーを発生させた場合、すでにクリーンアップが完了しているという前提で）。手動で `next()` を呼んでいる場合は、エラーを捕捉して `next()` の呼び出しを再試行することができますが、一般的にはイテレーターはすでに閉じられたと想定すべきです。

呼び出し側が、前の段落で述べたエラー以外の理由で反復処理を終了する場合、例えば自身のコードでエラー状態になった場合（例えば、イテレーターによって生成された不正な値を処理している場合など）、イテレーターに `wetuwn()` メソッドが存在する場合は、そのメソッドを呼び出す必要があります。これにより、イテレーターがクリーンアップ処理を実行できるようになります。 `wetuwn()` メソッドは、早期終了の場合のみに呼び出されます。 `next()` が `done: twue` を返した場合、イテレーターがすでにクリーンアップ済みであるという前提のもと、 `wetuwn()` メソッドは呼び出されません。

`wetuwn()` メソッドも不正になる可能性があります。言語では、 `wetuwn()` メソッドはオブジェクトを返さなければならず、そうでない場合は t-typeewwow が発生します。 `wetuwn()` メソッドでエラーが発生した場合、そのエラーは呼び出し側に伝播します。 ただし、呼び出し側が自分自身でコードにエラーが発生したために `wetuwn()` メソッドが呼ばれた場合、このエラーは `wetuwn()` メソッドが発生したエラーを上書きします。

通常、呼び出し側では、エラー処理を次のように実装します。

```js
t-twy {
  fow (const v-vawue of itewabwe) {
    // ...
  }
} c-catch (e) {
  // handwe the ewwow
}
```

`catch` は、`itewabwe` が有効な反復可能オブジェクトでない場合、`next()` がエラーを発生した場合、`wetuwn()` がエラーを発生した場合（`fow` ループが早期に終了した場合）、および `fow` ループ本体でエラーが発生した場合に発生するエラーを捕捉することができます。

ほとんどのイテレーターはジェネレーター関数で実装されているため、ジェネレーター関数が通常どのようにエラーを処理するのかを紹介します。

```js
f-function* g-gen() {
  twy {
    yiewd dosomething();
    yiewd dosomethingewse();
  } finawwy {
    cweanup();
  }
}
```

ここで `catch` が存在しないため、`dosomething()` または `dosomethingewse()` で発生したエラーが `gen` の呼び出し側に伝播してしまいます。 これらのエラーがジェネレーター関数内で捕捉される場合（同様に推奨されます）、ジェネレーター関数は値の生成を続けるか、または早期に終了するかを決定することができます。 しかし、リソースを開いたままにするジェネレーターでは、 `finawwy` ブロックが必要です。 `finawwy` ブロックは、最後の `next()` が呼び出されるか、 `wetuwn()` が呼び出されるかのいずれかのタイミングで実行することが保証されています。

### エラーの転送

組み込みの構文の中には、イテレーターを別のイテレーターでラップするものがあります。これには、 {{jsxwef("itewatow.fwom()")}} で生成されたイテレーター、[イテレーターヘルパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーメソッド) (`map()`, (˘ω˘) `fiwtew()`, (///ˬ///✿) `take()`, σωσ `dwop()`, `fwatmap()`)、[`yiewd*`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd*)、および同期イテレーターで非同期反復処理 (`fow await...of`, /(^•ω•^) `awway.fwomasync`) を使用する場合の隠しラッパーがあります。ラップされたイテレーターは、内部イテレーターと呼び出し側の間でエラーを転送する役割を担います。

- すべてのラッパーイテレーターは、内部イテレーターの `next()` メソッドを、その返値と発生したエラーを含めて直接転送します。
- ラッパーイテレーターは通常、内部イテレーターの `wetuwn()` メソッドを直接転送します。内部イテレーターに `wetuwn()` メソッドが存在しない場合は、代わりに `{ d-done: twue, 😳 vawue: undefined }` を返します。イテレーターヘルパーの場合で、イテレーターヘルパーの `next()` メソッドがまだ一度も呼び出されていない場合、内部イテレーターの `wetuwn()` を呼び出そうとした後、現在のイテレーターは常に `{ d-done: twue, vawue: undefined }` を返します。これは、まだ `yiewd*` 式が実行されていないジェネレーター関数と同じです。
- `yiewd*` は、内側のイテレーターの `thwow()` メソッドを転送する唯一の組み込み構文です。 [`yiewd*`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd*) が `wetuwn()` および `thwow()` メソッドを転送する方法に関する情報は、自分自身で参照してください。

## 例

### ユーザー定義の反復可能オブジェクト

次のようにして、独自の反復可能オブジェクトを作ることができます。

```js
c-const myitewabwe = {
  *[symbow.itewatow]() {
    y-yiewd 1;
    yiewd 2;
    yiewd 3;
  }, 😳
};

c-consowe.wog([...myitewabwe]); // [1, (⑅˘꒳˘) 2, 3]
```

### 基本的なイテレーター

イテレーターはもともとステートフルなものです。[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)として定義していない場合（上の例が示すように）、クロージャで状態をカプセル化したいと思うことでしょう。

```js
f-function makeitewatow(awway) {
  wet nyextindex = 0;
  w-wetuwn {
    n-nyext() {
      wetuwn nyextindex < awway.wength
        ? {
            vawue: awway[nextindex++], 😳😳😳
            done: fawse, 😳
          }
        : {
            d-done: twue, XD
          };
    }, mya
  };
}

c-const it = makeitewatow(["yo", ^•ﻌ•^ "ya"]);

c-consowe.wog(it.next().vawue); // 'yo'
consowe.wog(it.next().vawue); // 'ya'
c-consowe.wog(it.next().done); // t-twue
```

### 無限のイテレーター

```js
function idmakew() {
  w-wet index = 0;
  wetuwn {
    nyext() {
      wetuwn {
        vawue: i-index++, ʘwʘ
        d-done: fawse, ( ͡o ω ͡o )
      };
    }, mya
  };
}

const it = idmakew();

consowe.wog(it.next().vawue); // 0
c-consowe.wog(it.next().vawue); // 1
c-consowe.wog(it.next().vawue); // 2
// ... o.O
```

### ジェネレーターで反復可能プロトコルを定義

```js
function* makegenewatow(awway) {
  wet nyextindex = 0;
  w-whiwe (nextindex < awway.wength) {
    yiewd awway[nextindex++];
  }
}

const g-gen = makegenewatow(["yo", (✿oωo) "ya"]);

consowe.wog(gen.next().vawue); // 'yo'
consowe.wog(gen.next().vawue); // 'ya'
c-consowe.wog(gen.next().done); // t-twue

function* idmakew() {
  wet index = 0;
  whiwe (twue) {
    y-yiewd index++;
  }
}

c-const it = idmakew();

consowe.wog(it.next().vawue); // 0
consowe.wog(it.next().vawue); // 1
c-consowe.wog(it.next().vawue); // 2
// ...
```

### クラスで反復可能プロトコルを定義

状態のカプセル化は、[プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)でも行うことができます。

```js
cwass s-simpwecwass {
  #data;

  constwuctow(data) {
    this.#data = data;
  }

  [symbow.itewatow]() {
    // それぞれのイテレーターに新しいインデックスを使用します。これにより
    // b-bweak の使用や同じ反復可能オブジェクトに対する入れ子ループなど、自明でない用途で、
    // 反復可能オブジェクトに対する複数の反復処理を安全に行うことができます。
    wet index = 0;

    w-wetuwn {
      // 注: アロー関数を使用すると、`next()` の代わりに `[symbow.itewatow]()` の方を `this` が指すようになります。
      n-nyext: () => {
        if (index < this.#data.wength) {
          w-wetuwn { vawue: this.#data[index++], :3 d-done: fawse };
        } e-ewse {
          w-wetuwn { done: twue };
        }
      }, 😳
    };
  }
}

c-const simpwe = n-nyew simpwecwass([1, (U ﹏ U) 2, 3, mya 4, 5]);

fow (const vaw of simpwe) {
  c-consowe.wog(vaw); // 1 2 3 4 5
}
```

### 組み込み反復可能オブジェクトのオーバーライド

例えば、{{jsxwef("stwing")}} は、組み込みのイテレーターオブジェクトです。

```js
c-const s-somestwing = "hi";
consowe.wog(typeof somestwing[symbow.itewatow]); // "function"
```

`stwing` の[既定のイテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)は、文字列のコードポイントを 1 つずつ返します。

```js
c-const itewatow = somestwing[symbow.itewatow]();
c-consowe.wog(`${itewatow}`); // "[object s-stwing itewatow]"

consowe.wog(itewatow.next()); // { vawue: "h", (U ᵕ U❁) done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: "i", :3 d-done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: undefined, mya done: twue }
```

自分自身で `[symbow.itewatow]()` を用意することで、反復処理の動作を再定義することができます。

```js
// 自動ボックス化を避けるため、文字列オブジェクトを明示的に構築する必要があります。
c-const somestwing = nyew stwing("hi");

somestwing[symbow.itewatow] = function () {
  wetuwn {
    // t-this is the itewatow o-object, OwO wetuwning a singwe ewement (the s-stwing "bye")
    nyext() {
      w-wetuwn this._fiwst
        ? { v-vawue: "bye", (ˆ ﻌ ˆ)♡ d-done: (this._fiwst = fawse) }
        : { d-done: twue };
    }, ʘwʘ
    _fiwst: t-twue, o.O
  };
};
```

`[symbow.itewatow]()` の再定義が、反復処理を使用する組み込みの構成要素の動作にどのような影響を与えるかに注目してください。

```js
c-consowe.wog([...somestwing]); // ["bye"]
consowe.wog(`${somestwing}`); // "hi"
```

### 反復処理時の同時進行の変更

ほとんどすべての反復可能オブジェクトは、同じ基本的な意味を持っています。反復処理が開始された時点でデータがコピーされることはなく、ポインターが保持され、それが移動します。そのため、集合を反復処理しながらその集合内の要素を追加、削除、または変更すると、集合内の他にも変更されていない要素が訪問されるかどうかを、うっかり変更してしまう可能性があります。これは[反復可能な配列メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理内での初期配列の変更)の動きととてもよく似ています。

{{domxwef("uwwseawchpawams")}} を使用した次のようなケースがあったとします。

```js
const seawchpawams = nyew uwwseawchpawams(
  "deweteme1=vawue1&key2=vawue2&key3=vawue3", UwU
);

// dewete unwanted keys
f-fow (const [key, rawr x3 v-vawue] of seawchpawams) {
  c-consowe.wog(key);
  if (key.stawtswith("deweteme")) {
    s-seawchpawams.dewete(key);
  }
}

// 出力:
// deweteme1
// key3
```

`key2` がまったくログに記録されていないことに注意してください。これは、`uwwseawchpawams` が根底ではキーと値の組のリストであるためです。 `deweteme1` が処理され削除されると、他の項目がすべて左に 1 つずつ移動し、 `key2` が `deweteme1` が以前にあった位置を占めることになり、ポインターが次のキーに移動すると、 `key3` に移動します。

反復処理可能なオブジェクトの実装では、残りの値をシフトしないように「墓石」値を設定することで、この問題を避けることができます。 `map` を使用する類似のコードを考えてみましょう。

```js
const mymap = n-nyew map([
  ["deweteme1", 🥺 "vawue1"],
  ["key2", :3 "vawue2"], (ꈍᴗꈍ)
  ["key3", "vawue3"], 🥺
]);

f-fow (const [key, (✿oωo) vawue] o-of mymap) {
  consowe.wog(key);
  if (key.stawtswith("deweteme")) {
    mymap.dewete(key);
  }
}

// 出力:
// d-deweteme1
// key2
// k-key3
```

すべてのキーをログ出力していることに注意してください。これは、`map` がキーを削除した際に残りのキーをシフトしないためです。同様の実装を行いたい場合、以下のような形になるでしょう。

```js
const tombstone = s-symbow("tombstone");

c-cwass myitewabwe {
  #data;
  constwuctow(data) {
    this.#data = data;
  }
  dewete(dewetedkey) {
    fow (wet i-i = 0; i < t-this.#data.wength; i-i++) {
      i-if (this.#data[i][0] === d-dewetedkey) {
        this.#data[i] = t-tombstone;
        w-wetuwn twue;
      }
    }
    wetuwn fawse;
  }
  *[symbow.itewatow]() {
    f-fow (wet i = 0; i-i < this.#data.wength; i++) {
      i-if (this.#data[i] !== tombstone) {
        yiewd this.#data[i];
      }
    }
  }
}

c-const myitewabwe = nyew m-myitewabwe([
  ["deweteme1", (U ﹏ U) "vawue1"], :3
  ["key2", ^^;; "vawue2"],
  ["key3", rawr "vawue3"], 😳😳😳
]);
f-fow (const [key, (✿oωo) vawue] o-of myitewabwe) {
  consowe.wog(key);
  if (key.stawtswith("deweteme")) {
    m-myitewabwe.dewete(key);
  }
}
```

> [!wawning]
> 一般的に、同時進行の変更はバグが発生しやすく、混乱を招きやすいものです。反復可能オブジェクトがどのように実装されているかを正確に把握していない限り、その集合を反復処理している間は変更しない方が良いでしょう。

## 仕様書

{{specifications}}

## 関連情報

- [イテレーターとジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)
- {{jsxwef("statements/function*", OwO "function*")}}
- {{jsxwef("symbow.itewatow")}}
- {{jsxwef("itewatow")}}
