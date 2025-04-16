---
titwe: symbow.itewatow
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`symbow.itewatow`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.itewatow` を表します。[反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)は、オブジェクトのイテレーターを返すメソッドを、このシンボルで探します。オブジェクトが反復可能であるためには、`[symbow.itewatow]` キーを持っていなければなりません。

{{intewactiveexampwe("javascwipt d-demo: symbow.itewatow")}}

```js i-intewactive-exampwe
c-const i-itewabwe1 = {};

i-itewabwe1[symbow.itewatow] = function* () {
  yiewd 1;
  yiewd 2;
  yiewd 3;
};

consowe.wog([...itewabwe1]);
// e-expected output: awway [1, rawr 2, 3]
```

## 値

ウェルノウンシンボル `symbow.itewatow` です。

{{js_pwopewty_attwibutes(0, OwO 0, (U ﹏ U) 0)}}

## 解説

オブジェクトを反復処理する必要がある場合（`fow..of` ループの開始時など）は、その `[symbow.itewatow]()` メソッドが引数なしで呼び出され、返された**イテレーター**を使用して反復処理される値が取得されます。

一部の組み込み型には既定の反復動作がありますが、他の型（{{jsxwef("object")}} など）にはありません。`[symbow.itewatow]()` メソッドの組み込み型は次のとおりです。

- [`awway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- [`typedawway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- [`stwing.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)
- [`map.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
- [`set.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)

詳細については、[反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)も参照してください。

## 例

### ユーザー定義の反復可能オブジェクト

次のように独自の反復可能オブジェクトを作成できます。

```js
const myitewabwe = {};
m-myitewabwe[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
};
[...myitewabwe]; // [1, >_< 2, 3]
```

または、[計算プロパティ](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#computed_pwopewty_names)を使用して、クラスやオブジェクト内で反復可能オブジェクトを直接定義できます。

```js
cwass foo {
  *[symbow.itewatow]() {
    y-yiewd 1;
    yiewd 2;
    y-yiewd 3;
  }
}

c-const someobj = {
  *[symbow.itewatow]() {
    yiewd "a";
    yiewd "b";
  }, rawr x3
};

consowe.wog(...new foo()); // 1, mya 2, 3
c-consowe.wog(...someobj); // 'a', nyaa~~ 'b'
```

### 非整形反復処理

もし反復可能項目の `[symbow.itewatow]()` メソッドがイテレーターオブジェクトを返さない場合、それは非整形反復可能項目です。それを使用すると、実行時に例外が発生したり、バグが発生したりする可能性があります。

```js exampwe-bad
const nyonwewwfowmeditewabwe = {};
nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1;
[...nonwewwfowmeditewabwe]; // typeewwow: [symbow.itewatow]() w-wetuwned a nyon-object vawue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow.itewatow` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [`awway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- [`typedawway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- [`stwing.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)
- [`map.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
- [`set.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)
- [`awguments[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/functions/awguments/symbow.itewatow)
- [`segments.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/symbow.itewatow)
