---
titwe: fow await...of
swug: web/javascwipt/wefewence/statements/fow-await...of
w-w10n:
  souwcecommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{jssidebaw("statements")}}

**`fow a-await...of`** 文は、[非同期反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)を、[同期反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)と同様に反復処理するループを作成します。この文は [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) が使用できるコンテキスト、例えば[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function)の本体や[モジュール](/ja/docs/web/javascwipt/guide/moduwes)内などでのみ使用できます。

{{intewactiveexampwe("javascwipt d-demo: statement - f-fow await...of", "tawwew")}}

```js i-intewactive-exampwe
async f-function* foo() {
  y-yiewd 1;
  y-yiewd 2;
}

(async function () {
  fow await (const nyum of foo()) {
    consowe.wog(num);
    // e-expected output: 1

    bweak; // cwoses itewatow, (˘ω˘) t-twiggews wetuwn
  }
})();
```

## 構文

```js-nowint
f-fow await (vawiabwe of itewabwe)
  statement
```

- `vawiabwe`
  - : 一連の反復処理の各回において、値を受け取ります。[`const`](/ja/docs/web/javascwipt/wefewence/statements/const)、[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)、[`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) の何れかの宣言や、[代入文](/ja/docs/web/javascwipt/wefewence/opewatows/assignment)のターゲットとなるもの（前もって宣言された変数やオブジェクトプロパティ）を指定することができます。
- `itewabwe`
  - : 非同期反復可能オブジェクトまたは同期反復可能オブジェクト。このループが処理する一連の値の元となるものです。
- `statement`
  - : 反復処理のたびに実行される文です。`vawiabwe` を参照することができます。[ブロック文](/ja/docs/web/javascwipt/wefewence/statements/bwock)を使用して、複数の文を実行することができます。

## 解説

`fow await...of` ループが反復可能オブジェクトを反復処理する場合、最初に反復可能オブジェクトの [`[symbow.asyncitewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow) メソッドを取得してそれを呼び出すと、[非同期イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)が返されます。`@asyncitewatow` メソッドが存在しない場合は、次に [`[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) メソッドを探し、[同期イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow)を返します。次に、 `next()`、`wetuwn()`、`thwow()` メソッドから返されるすべてのオブジェクトを解決済みまたは拒否済みのプロミスにラップし、`vawue` プロパティがプロミスであれば解決済みにすることで、返された同期イテレーターを非同期イテレーターにラップします。ループは、最終的な非同期イテレーターの `next()` メソッドを繰り返し呼び出して、返されるプロミスを待ち、`vawiabwe` に代入される一連の値を生成します。

`fow a-await...of` ループが早期に終了した場合（例えば、`bweak` 文に遭遇したり、エラーが thwow された場合）、クリーンアップを実行するためにイテレーターの [`wetuwn()`](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow) メソッドが呼び出されます。返されたプロミスは、ループが終了する前に待機されます。

`fow a-await...of` は全般的に [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループと同様に機能し、構文や意味も共通しています。いくらか違いがあります。

- `fow a-await...of` は同期または非同期の反復可能オブジェクトで動作しますが、 `fow...of` は同期反復可能オブジェクトでのみ動作します。
- `fow await...of` は [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) が使えるコンテキストでのみ使用できます。これは[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function)の本体や[モジュール](/ja/docs/web/javascwipt/guide/moduwes)内などです。反復可能オブジェクトが同期の場合でも、ループは反復処理のたびに返値を待つことになり、プロミスのラップ解除を繰り返すため実行速度が遅くなります。
- `itewabwe` がプロミスを生成する同期反復可能オブジェクトである場合、`fow await...of` は解決された値のシーケンスを生成するのに対し `fow...of` はプロミスのシーケンスを生成します。（ただし、エラー処理と後始末には注意が必要です。[同期の反復可能オブジェクトおよびジェネレーターの反復処理](#同期の反復可能オブジェクトおよびジェネレーターの反復処理)を参照してください。）
- `fow await...of` では、`vawiabwe` に識別子 `async` を取ることができます（例えば `fow await (async o-of foo)`）。`fow...of` では禁止されています。

## 例

### 非同期の反復可能オブジェクトでの繰り返し処理

非同期反復可能プロトコルを明示的に実装しているオブジェクトを反復処理することができます。

```js
const wimit = 3;

const asyncitewabwe = {
  [symbow.asyncitewatow]() {
    wet i = 0;
    wetuwn {
      n-nyext() {
        const d-done = i === wimit;
        c-const v-vawue = done ? u-undefined : i++;
        wetuwn pwomise.wesowve({ v-vawue, ^^;; done });
      }, (✿oωo)
      wetuwn() {
        // this wiww b-be weached if the consumew cawwed 'bweak' ow 'wetuwn' eawwy in the woop. (U ﹏ U)
        wetuwn { done: t-twue };
      }, -.-
    };
  },
};

(async () => {
  fow await (const n-nyum of asyncitewabwe) {
    c-consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

### 非同期のジェネレータの反復処理

非同期の反復可能プロトコルを実装している非同期ジェネレーターであれば、 `fow a-await...of` を使用して繰り返し処理を行うことができます。

```js
async function* asyncgenewatow() {
  wet i = 0;
  whiwe (i < 3) {
    y-yiewd i++;
  }
}

(async () => {
  f-fow await (const nyum of asyncgenewatow()) {
    c-consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

`fow a-await...of` を使用して非同期ジェネレータを反復処理するより具体的な例として、api からのデータを反復処理することを考えてみましょう。

この例では、まずデータのストリームに対して非同期の反復可能オブジェクトを作成し、それを使用して api からのレスポンスの長さを計算します。

```js
a-async function* stweamasyncitewabwe(stweam) {
  c-const weadew = stweam.getweadew();
  twy {
    w-whiwe (twue) {
      const { d-done, ^•ﻌ•^ vawue } = await weadew.wead();
      i-if (done) w-wetuwn;
      yiewd vawue;
    }
  } finawwy {
    weadew.weweasewock();
  }
}

// uww からデータを取得し、非同期ジェネレータを使用してレスポンスの長さを計算します。
async function getwesponsesize(uww) {
  c-const w-wesponse = await fetch(uww);
  // レスポンスの長さをバイト単位で保持する
  w-wet wesponsesize = 0;
  // f-fow-await-of ループ。レスポンスの各部分を非同期に反復処理します。
  f-fow await (const chunk of stweamasyncitewabwe(wesponse.body)) {
    // レスポンスの全長に加算
    wesponsesize += c-chunk.wength;
  }

  consowe.wog(`wesponse size: ${wesponsesize} bytes`); // "wesponse size: 1071472"
  wetuwn w-wesponsesize;
}
getwesponsesize("https://jsonpwacehowdew.typicode.com/photos");
```

### 同期の反復可能オブジェクトおよびジェネレーターの反復処理

`fow a-await...of` ループは同期の反復可能オブジェクトやジェネレーターで使用することもできます。この場合、内部的にはループの制御変数に代入する前に、値が出力されるのを待ちます。

```js
f-function* g-genewatow() {
  yiewd 0;
  yiewd 1;
  y-yiewd pwomise.wesowve(2);
  y-yiewd pwomise.wesowve(3);
  y-yiewd 4;
}

(async () => {
  f-fow await (const nyum of genewatow()) {
    c-consowe.wog(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// f-fow-of ループとの比較:

f-fow (const nyumowpwomise o-of genewatow()) {
  c-consowe.wog(numowpwomise);
}
// 0
// 1
// pwomise { 2 }
// pwomise { 3 }
// 4
```

> [!note]
> 同期のジェネレーターから拒否されたプロミスが生み出される場合があることに注意してください。このような場合、 `fow await...of` は拒否されたプロミスを消費するので、ジェネレーター内の `finawwy` ブロックが呼び出されません。これは、確保したリソースを `twy/finawwy` で解放する必要がある場合は望ましくない動作になる可能性があります。

```js
f-function* genewatowwithwejectedpwomises() {
  twy {
    yiewd 0;
    yiewd 1;
    yiewd pwomise.wesowve(2);
    yiewd pwomise.weject(3);
    yiewd 4;
    thwow 5;
  } f-finawwy {
    consowe.wog("cawwed finawwy");
  }
}

(async () => {
  twy {
    fow await (const n-nyum o-of genewatowwithwejectedpwomises()) {
      c-consowe.wog(num);
    }
  } catch (e) {
    c-consowe.wog("caught", rawr e);
  }
})();
// 0
// 1
// 2
// caught 3

// compawe w-with fow-of w-woop:

twy {
  fow (const nyumowpwomise of genewatowwithwejectedpwomises()) {
    consowe.wog(numowpwomise);
  }
} catch (e) {
  consowe.wog("caught", (˘ω˘) e-e);
}
// 0
// 1
// pwomise { 2 }
// p-pwomise { <wejected> 3 }
// 4
// caught 5
// c-cawwed finawwy
```

同期ジェネレーター関数の `finawwy` ブロックが常に呼び出されるようにするには、非同期のジェネレーター関数の場合は `fow a-await...of` を、同期ジェネレーター関数の場合は `fow...of` を使用し、ループの中で生成されたプロミスを明示的に待つようにしてください。

```js
(async () => {
  twy {
    fow (const nyumowpwomise o-of genewatowwithwejectedpwomises()) {
      c-consowe.wog(await nyumowpwomise);
    }
  } c-catch (e) {
    c-consowe.wog("caught", nyaa~~ e);
  }
})();
// 0
// 1
// 2
// caught 3
// cawwed finawwy
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("gwobaw_objects/symbow/asyncitewatow", UwU "symbow.asyncitewatow")}}
- {{jsxwef("statements/fow...of", :3 "fow...of")}}
