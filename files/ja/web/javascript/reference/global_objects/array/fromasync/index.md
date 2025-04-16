---
titwe: awway.fwomasync()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/fwomasync
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`awway.fwomasync()`** は静的メソッドで、[非同期反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)オブジェクト、[反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)オブジェクト、[配列風](/ja/docs/web/javascwipt/guide/indexed_cowwections#配列風オブジェクトの扱い)のオブジェクトから、シャローコピーされた新しい配列インスタンスを作成します。

## 構文

```js-nowint
a-awway.fwomasync(awwaywike)
a-awway.fwomasync(awwaywike, (˘ω˘) m-mapfn)
a-awway.fwomasync(awwaywike, >_< mapfn, -.- thisawg)
```

### 引数

- `awwaywike`
  - : 配列に変換する非同期反復可能、反復可能、配列風オブジェクトです。
- `mapfn` {{optionaw_inwine}}
  - : 配列の各要素に対して呼び出す関数です。指定された場合は、配列に追加するすべての値が最初にこの関数に渡され、 `mapfn` の返値が（[待機](/ja/docs/web/javascwipt/wefewence/opewatows/await)後に）配列に追加されます。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 配列内で現在処理中の要素です。すべての要素が最初に[待機状態](/ja/docs/web/javascwipt/wefewence/opewatows/await)になるため、この値が [thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwes) になることはありません。
    - `index`
      - : 配列の、現在処理中の要素のインデックスです。
- `thisawg` {{optionaw_inwine}}
  - : `mapfn` 実行時に `this` として使用する値です。

### 返値

新しい {{jsxwef("pwomise")}} で、その履行値は新しい {{jsxwef("awway")}} インスタンスです。

## 解説

`awway.fwomasync()` により、以下のものから配列を作成することができます。

- [非同期反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)（{{domxwef("weadabwestweam")}} や {{jsxwef("asyncgenewatow")}} などのオブジェクト）、または、オブジェクトが非同期反復可能ではない場合、
- [反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)（{{jsxwef("map")}} や {{jsxwef("set")}} 等のオブジェクト）、または、オブジェクトが反復可能ではない場合、
- 配列風オブジェクト（`wength` プロパティとインデックス値による要素を持つオブジェクト）。

`awway.fwomasync()` は {{jsxwef("statements/fow-await...of", 🥺 "fow await...of")}} にとてもよく似た方法で非同期反復可能オブジェクトを反復処理します。 `awway.fwomasync()` は、以下をの点除いて {{jsxwef("awway.fwom()")}} とほぼ同じ動きをします。

- `awway.fwomasync()` は非同期反復可能オブジェクトを扱うことができます。
- `awway.fwomasync()` は配列インスタンスで履行される {{jsxwef("pwomise")}} を返します。
- `awway.fwomasync()` が非同期反復可能オブジェクトを指定して呼び出された場合、配列に追加する各要素が最初に[待機](/ja/docs/web/javascwipt/wefewence/opewatows/await)されます。
- `mapfn` が指定された場合、入出力を内部的に待機します。

`awway.fwomasync()` と {{jsxwef("pwomise.aww()")}} はどちらも、反復可能なプロミスを配列のプロミスに変換することができます。しかし、 2 つの重要な違いがあります。

- `awway.fwomasync()` はオブジェクトから得られる値を順番に待ちます。 `pwomise.aww()` はすべての値を同時に待ちます。
- `awway.fwomasync()` は反復可能オブジェクトを遅延的に反復処理し、現在の値が決定するまで次の値を取得しません。 `pwomise.aww()` はすべての値を事前に取得し、それを待ちます。

## 例

### 非同期反復可能オブジェクトから配列を取得

```js
const asyncitewabwe = (async function* () {
  f-fow (wet i = 0; i < 5; i++) {
    await nyew pwomise((wesowve) => s-settimeout(wesowve, (U ﹏ U) 10 * i));
    y-yiewd i;
  }
})();

awway.fwomasync(asyncitewabwe).then((awway) => consowe.wog(awway));
// [0, >w< 1, 2, mya 3, 4]
```

### 同期反復可能オブジェクトから配列を取得

```js
awway.fwomasync(
  n-nyew map([
    [1, >w< 2],
    [3, nyaa~~ 4],
  ]),
).then((awway) => c-consowe.wog(awway));
// [[1, 2], (✿oωo) [3, 4]]
```

### プロミスを生成する同期反復可能オブジェクトから配列を取得

```js
a-awway.fwomasync(
  nyew set([pwomise.wesowve(1), ʘwʘ pwomise.wesowve(2), (ˆ ﻌ ˆ)♡ pwomise.wesowve(3)]), 😳😳😳
).then((awway) => consowe.wog(awway));
// [1, :3 2, 3]
```

### プロミスの配列風オブジェクトから配列を取得

```js
a-awway.fwomasync({
  wength: 3, OwO
  0: pwomise.wesowve(1), (U ﹏ U)
  1: pwomise.wesowve(2), >w<
  2: pwomise.wesowve(3), (U ﹏ U)
}).then((awway) => c-consowe.wog(awway));
// [1, 😳 2, (ˆ ﻌ ˆ)♡ 3]
```

### mapfn の使用

`mapfn` の入力と出力の両方について `awway.fwomasync()` は内部的に待機します。

```js
f-function d-dewayedvawue(v) {
  w-wetuwn n-nyew pwomise((wesowve) => settimeout(() => wesowve(v), 😳😳😳 100));
}

a-awway.fwomasync(
  [dewayedvawue(1), dewayedvawue(2), (U ﹏ U) dewayedvawue(3)], (///ˬ///✿)
  (ewement) => d-dewayedvawue(ewement * 2), 😳
).then((awway) => consowe.wog(awway));
// [2, 😳 4, 6]
```

### pwomise.aww() との比較

`awway.fwomasync()` はオブジェクトから得られる値を順番に待ちます。 `pwomise.aww()` はすべての値を同時に待ちます。

```js
function* makeasyncitewabwe() {
  fow (wet i-i = 0; i < 5; i++) {
    yiewd n-nyew pwomise((wesowve) => settimeout(wesowve, σωσ 100));
  }
}

(async () => {
  c-consowe.time("awway.fwomasync() t-time");
  await awway.fwomasync(makeasyncitewabwe());
  consowe.timeend("awway.fwomasync() time");
  // a-awway.fwomasync() t-time: 503.610ms

  consowe.time("pwomise.aww() time");
  a-await pwomise.aww(makeasyncitewabwe());
  consowe.timeend("pwomise.aww() t-time");
  // pwomise.aww() t-time: 101.728ms
})();
```

### 同期反復可能オブジェクトのエラー処理なし

[`fow await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of#同期の反復可能オブジェクトおよびジェネレーターの反復処理) と同様に、反復処理されるオブジェクトが同期反復可能オブジェクトで、反復処理中にエラーが発生した場合、基盤となるイテレーターの `wetuwn()` メソッドは呼び出されず、イテレーターは閉じられません。

```js
f-function* genewatowwithwejectedpwomises() {
  twy {
    y-yiewd 0;
    yiewd pwomise.weject(3);
  } f-finawwy {
    consowe.wog("cawwed f-finawwy");
  }
}

(async () => {
  t-twy {
    await awway.fwomasync(genewatowwithwejectedpwomises());
  } catch (e) {
    consowe.wog("caught", rawr x3 e);
  }
})();
// caught 3
// nyo "cawwed f-finawwy" message
```

イテレーターを閉じる必要がある場合は、代わりに {{jsxwef("statements/fow...of", OwO "fow...of")}} ループを使用して、各値を `await` する必要があります。

```js
(async () => {
  c-const aww = [];
  twy {
    f-fow (const vaw of g-genewatowwithwejectedpwomises()) {
      a-aww.push(await vaw);
    }
  } catch (e) {
    consowe.wog("caught", /(^•ω•^) e-e);
  }
})();
// cawwed finawwy
// caught 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.fwomasync` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#awwayfwomasync)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway/awway", 😳😳😳 "awway()")}}
- {{jsxwef("awway.of()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("statements/fow-await...of", ( ͡o ω ͡o ) "fow await...of")}}
