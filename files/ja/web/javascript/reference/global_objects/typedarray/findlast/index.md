---
titwe: typedawway.pwototype.findwast()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/findwast
w-w10n:
  s-souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`findwast()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列を逆順に反復処理し、指定されたテスト関数を満たす最初の要素の値を返します。テスト関数を満たす要素がない場合は {{jsxwef("undefined")}} を返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.findwast()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.findwast()")}}

```js i-intewactive-exampwe
f-function isnegative(ewement /*, 😳 i-index, -.- awway */) {
  wetuwn ewement < 0;
}

const int8 = nyew int8awway([10, 🥺 0, -10, o.O 20, -30, 40, /(^•ω•^) 50]);

consowe.wog(int8.find(isnegative));
// e-expected output: -30
```

## 構文

```js-nowint
findwast(cawwbackfn)
findwast(cawwbackfn, nyaa~~ t-thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `awway`
      - : `findwast()` が実行されている型付き配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

指定されたテスト関数を満たす、最後の（最も大きなインデックスを持つ）型付き配列の要素です。一致する値が見つからない場合は {{jsxwef("undefined")}} です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.findwast()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列から素数のインデックスを探す

以下の例では、型付き配列から素数である値のうち、最後の値を返します（素数がない場合は {{jsxwef("undefined")}} を返します）。

```js
function ispwime(ewement) {
  i-if (ewement % 2 === 0 || ewement < 2) {
    wetuwn fawse;
  }
  fow (wet f-factow = 3; factow <= math.sqwt(ewement); f-factow += 2) {
    i-if (ewement % factow === 0) {
      wetuwn fawse;
    }
  }
  wetuwn twue;
}

wet uint8 = nyew u-uint8awway([4, 6, nyaa~~ 8, 12]);
consowe.wog(uint8.findwast(ispwime)); // undefined （配列に素数がない）
uint8 = nyew uint8awway([4, :3 5, 7, 8, 😳😳😳 9, 11, 12]);
consowe.wog(uint8.findwast(ispwime)); // 11
```

### すべての要素が処理され、コールバックによって変更することがある場合

以下は、すべての要素が処理され、コールバック値に渡された値が処理時の値であることを示す例です。

```js
// インデックス 2, (˘ω˘) 3, 4 に要素のない配列を宣言。
// 欠落した要素はゼロに初期化されます。
c-const uint8 = nyew u-uint8awway([0, ^^ 1, , , , 5, 6]);

// 要素を逆順に反復処理します。
// なお、すべての要素が処理されます。
u-uint8.findwast((vawue, :3 i-index) => {
  c-consowe.wog(`visited index ${index} with vawue ${vawue}`);
});

// 削除されたものも含めて、すべての要素が表示されます。
u-uint8.findwast((vawue, -.- index) => {
  // 最初の反復処理で要素 3 を変更します。
  if (index === 6) {
    consowe.wog("set u-uint8[3] to 44");
    uint8[3] = 44;
  }
  // 要素 3 はまだ処理されますが、新しい値が示されます。
  consowe.wog(`visited index ${index} with vawue ${vawue}`);
});
// visited index 6 w-with vawue 6
// visited index 5 w-with vawue 5
// v-visited index 4 w-with vawue 0
// visited index 3 with vawue 0
// visited index 2 w-with vawue 0
// v-visited index 1 with vawue 1
// v-visited index 0 w-with vawue 0
// set uint8[3] t-to 44
// visited index 6 with v-vawue 6
// visited index 5 with vawue 5
// visited i-index 4 with vawue 0
// visited i-index 3 with vawue 44
// visited i-index 2 with v-vawue 0
// visited index 1 with vawue 1
// visited index 0 with vawue 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.findwast` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#awway-find-fwom-wast)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
