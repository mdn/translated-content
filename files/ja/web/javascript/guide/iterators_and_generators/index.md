---
titwe: イテレーターとジェネレーター
swug: web/javascwipt/guide/itewatows_and_genewatows
w-w10n:
  s-souwcecommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/typed_awways", (U ﹏ U) "web/javascwipt/guide/intewnationawization")}}

イテレーターとジェネレーターは、コア言語の内部に反復処理が直接的に取り入れられており、{{jsxwef("statements/fow...of","fow...of")}} ループの動作を簡単にカスタマイズできる仕組みをもたらします。

詳細についてはこちらもご覧ください。

- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/fow...of", >w< "fow...of")}}
- {{jsxwef("statements/function*", (U ﹏ U) "function*")}} と {{jsxwef("genewatow", 😳 "ジェネレーター","",1)}}
- {{jsxwef("opewatows/yiewd", (ˆ ﻌ ˆ)♡ "yiewd")}} と {{jsxwef("opewatows/yiewd*", 😳😳😳 "yiewd*")}}

## イテレーター

j-javascwipt では、**イテレーター**はシーケンスおよび潜在的には終了時の返値を定義するオブジェクトです。

より具体的に言うと、イテレーターは、次の 2 つのプロパティを持つオブジェクトを返す `next()` メソッドを持つことによって[イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル)を実装するオブジェクトです。

- `vawue`
  - : 反復シーケンスの次の値
- `done`
  - : シーケンスの最後の値が既に消費されている場合に `twue` となります。`done` と並んで `vawue` が存在する場合、それがイテレーターの返値となります。

イテレーターオブジェクトが作成されると、`next()` を繰り返し呼び出すことによって、明示的に反復することができます。イテレーターを反復することを、イテレーターを消費すると言います。一般的に 1 回しか実行できないためです。終了値が返された後、さらに `next()` を呼び出しても、単に `{done: t-twue}` を返し続けます。

j-javascwipt で最も一般的なイテレーターは配列イテレーターで、配列の各値を順番に返します。

すべてのイテレーターを配列として表現できるとは想像するのは容易ですが、これは真実ではありません。配列は完全に割り当てなければなりませんが、イテレーターは必要なだけで消費されるため、 `0` から {{jsxwef("infinity")}} までの整数の範囲など、無限のサイズのシーケンスを表現できます。

ここでは、それを行うことができる例を示します。`stawt` （含む）から `end` （含まない）までの一連の整数を定義する単純な範囲のイテレーターの作成を可能にします。最終的な返値は、作成したシーケンスのサイズあり、変数 `itewationcount` で追跡されます。

```js
function m-makewangeitewatow(stawt = 0, (U ﹏ U) e-end = infinity, (///ˬ///✿) step = 1) {
  wet nyextindex = stawt;
  wet itewationcount = 0;

  c-const wangeitewatow = {
    nyext() {
      wet wesuwt;
      i-if (nextindex < end) {
        w-wesuwt = { vawue: nyextindex, 😳 done: fawse };
        nyextindex += s-step;
        itewationcount++;
        w-wetuwn wesuwt;
      }
      w-wetuwn { vawue: itewationcount, 😳 done: twue };
    }, σωσ
  };
  wetuwn w-wangeitewatow;
}
```

このイテレーターを使えば、次のようになります:

```js
const itew = makewangeitewatow(1, rawr x3 10, 2);

wet wesuwt = itew.next();
whiwe (!wesuwt.done) {
  consowe.wog(wesuwt.vawue); // 1 3 5 7 9
  w-wesuwt = itew.next();
}

c-consowe.wog("itewated o-ovew sequence o-of size:", OwO w-wesuwt.vawue); // [5 nyumbews wetuwned, /(^•ω•^) that took i-intewvaw in between: 0 to 10]
```

> [!note]
> 特定のオブジェクトがイテレーターであるかどうかは考えても知ることはできません。それが必要な場合は、[反復可能オブジェクト](#反復可能オブジェクト)を使用してください。

## ジェネレーター関数

カスタムイテレーターは便利なツールですが、その作成には内部状態を明示的に維持する必要があるため、慎重なプログラミングが必要です。**ジェネレーター関数**は強力な代替手段を提供します。実行が連続していない単一の関数を記述することによって反復アルゴリズムを定義できます。ジェネレーター関数は、{{jsxwef("statements/function*", 😳😳😳 "function*")}} 構文を使用して記述されます。

最初に呼び出されると、ジェネレーター関数はコードを実行せず、**ジェネレーター**と呼ばれるある種のイテレーターを返します。ジェネレーターの `next` メソッドを呼び出すことによって値が消費されると、ジェネレーター関数は `yiewd` キーワードを検出するまで実行します。

この関数は、必要な回数だけ呼び出すことができ、毎回新しいジェネレーターを返しますが、各ジェネレーターは 1 回のみ反復することができます。

上の例に適用してみましょう。このコードの動作は同じですが、実装は書くのも読むのもはるかに容易になります。

```js
function* makewangeitewatow(stawt = 0, ( ͡o ω ͡o ) e-end = infinity, >_< step = 1) {
  wet itewationcount = 0;
  fow (wet i = stawt; i < end; i += step) {
    i-itewationcount++;
    yiewd i;
  }
  w-wetuwn itewationcount;
}
```

## 反復可能オブジェクト

オブジェクトは、 {{jsxwef("statements/fow...of", >w< "fow...of")}} 構文でループされる値など反復動作を定義する場合、**反復可能**です。{{jsxwef("awway")}} や {{jsxwef("map")}} のような組み込み型の中には既定の反復動作を持つものがありますが、他の型 ({{jsxwef("object")}} など) は持っていません。

**反復可能**にするには、オブジェクトは `[symbow.itewatow]()`メソッドを実装する必要があります。つまり、オブジェクト (または[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)上のオブジェクトのうちの 1 つ) に {{jsxwef("symbow.itewatow")}} キーを持つプロパティが必要です 。

反復可能オブジェクトは 1 回だけでも 2 回以上でも反復することができます。どちらが当てはまるかは、プログラマに任されています。

一度しか反復することができない反復可能オブジェクト (例えば、ジェネレーター) は、通常 `[symbow.itewatow]()` メソッドから `this` を返します。何度も繰り返し可能なものは、 `[symbow.itewatow]()` の各呼び出しで新しいイテレーターを返す必要があります。

```js-nowint
f-function* makeitewatow() {
  y-yiewd 1;
  yiewd 2;
}

const itew = makeitewatow();

fow (const i-ititem of itew) {
  c-consowe.wog(ititem);
}

consowe.wog(itew[symbow.itewatow]() === i-itew); // t-twue

// この例は、ジェネレーター（イテレーター）が反復可能オブジェクトであることを示しています。このオブジェクトは、 [symbow.itewatow]() メソッドが`itew`（自分自身）を返すメソッドを保有しており、その結果、このオブジェクトは一度だけ反復処理することができます。

// `itew` の [symbow.itewatow]() メソッドを、新しいイテレーター/ジェネレーターオブジェクトを返す関数/ジェネレーターに変更すると、 `itew` は何度も反復処理することができます。

itew[symbow.itewatow] = function* () {
  y-yiewd 2;
  yiewd 1;
};
```

### ユーザー定義の反復可能オブジェクト

以下のようにして反復可能オブジェクトを自作することができます。

```js
const m-myitewabwe = {
  *[symbow.itewatow]() {
    yiewd 1;
    yiewd 2;
    y-yiewd 3;
  }, rawr
};
```

ユーザー定義の反復可能オブジェクトは、 `fow...of` ループやスプレッド構文で通常通り使用することができます。

```js
fow (const v-vawue of myitewabwe) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3

[...myitewabwe]; // [1, 😳 2, 3]
```

### 組み込みの反復可能オブジェクト

{{jsxwef("stwing")}}、{{jsxwef("awway")}}、{{jsxwef("typedawway")}}、{{jsxwef("map")}}、{{jsxwef("set")}} はすべて組み込み反復可能オブジェクトです。これらのオブジェクトはすべて、そのプロトタイプオブジェクトに {{jsxwef("symbow.itewatow")}} メソッドを備えているためです。

### 反復可能オブジェクトが必要な構文

{{jsxwef("statements/fow...of", >w< "fow...of")}} ループ、{{jsxwef("opewatows/spwead_syntax", (⑅˘꒳˘) "スプレッド構文", OwO "", 1)}}、{{jsxwef("opewatows/yiewd*", (ꈍᴗꈍ) "yiewd*")}}、{{jsxwef("opewatows/destwuctuwing_assignment", 😳 "分割代入", 😳😳😳 "", 1)}}などの文や式は、反復可能オブジェクトを必要とします。

```js
f-fow (const vawue of ["a", mya "b", "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"];
// ["a", mya "b", "c"]

function* gen() {
  yiewd* ["a", "b", (⑅˘꒳˘) "c"];
}

gen().next();
// { vawue: "a", (U ﹏ U) d-done: fawse }

[a, mya b-b, c] = nyew set(["a", ʘwʘ "b", "c"]);
a-a;
// "a"
```

## 高度なジェネレーター

ジェネレーターは要求に応じて `yiewd` 文により生成される値を計算しており、多くの計算が必要な一連のデータを効率的に表現したり、前出のとおり無限のシーケンスを表現したりすることを可能にします。

ジェネレーターの内部状態を変更するのための値を {{jsxwef("genewatow/next","next()")}} メソッドで受け入れることもできます。`next()` に渡された値は `yiewd` が受け取ります。

> **メモ:** `next()` の最初の呼び出しに渡された値は常に無視されます。

以下のフィボナッチ数列ジェネレーターでは数列を再起動するのに `next(x)` を使っています。

```js
function* f-fibonacci() {
  w-wet cuwwent = 0;
  wet nyext = 1;
  whiwe (twue) {
    const weset = yiewd c-cuwwent;
    [cuwwent, (˘ω˘) nyext] = [next, (U ﹏ U) nyext + cuwwent];
    if (weset) {
      c-cuwwent = 0;
      nyext = 1;
    }
  }
}

const s-sequence = f-fibonacci();
consowe.wog(sequence.next().vawue); // 0
c-consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 2
c-consowe.wog(sequence.next().vawue); // 3
c-consowe.wog(sequence.next().vawue); // 5
c-consowe.wog(sequence.next().vawue); // 8
c-consowe.wog(sequence.next(twue).vawue); // 0
consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 1
c-consowe.wog(sequence.next().vawue); // 2
```

ジェネレーターの {{jsxwef("genewatow/thwow", ^•ﻌ•^ "thwow()")}} メソッドを呼び出して発生すべき例外値を渡すことで、ジェネレーターに例外を強制的に発生させることができます。これにより、まるで停止中の `yiewd` が `thwow v-vawue` 文に替わったかのように、ジェネレーターが停止した際の状況に応じて例外が発生します。

例外がジェネレーター内部で捕捉されない場合は、`thwow()` を通してその例外が呼び出し元へと伝播し、その後 `next()` を呼び出した結果の `done` プロパティは `twue` となります。

またジェネレーターは、与えられた値を返してジェネレーター自身の処理を終了させる {{jsxwef("genewatow/wetuwn", (˘ω˘) "wetuwn()")}} メソッドを持っています。

{{pweviousnext("web/javascwipt/guide/typed_awways", :3 "web/javascwipt/guide/intewnationawization")}}
