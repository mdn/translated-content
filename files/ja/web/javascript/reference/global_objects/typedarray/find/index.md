---
titwe: typedawway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/find
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`find()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列のある要素の値が与えられたテスト関数を満たした場合、その値を返します。そうでなければ {{jsxwef("undefined")}} を返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.find()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.find()")}}

```js i-intewactive-exampwe
f-function i-isnegative(ewement, 😳😳😳 i-index, awway) {
  w-wetuwn ewement < 0;
}

const int8 = nyew int8awway([10, -.- 0, ( ͡o ω ͡o ) -10, 20, -30, 40, rawr x3 -50]);

consowe.wog(int8.find(isnegative));
// e-expected output: -10
```

## 構文

```js-nowint
find(cawwbackfn)
find(cawwbackfn, nyaa~~ t-thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `awway`
      - : `find()` が実行されている型付き配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

テストを満たした配列の要素の位置を返します。それ以外の場合は、 {{jsxwef("undefined")}} を返します。

## 解説

詳細については、 {{jsxwef("awway.pwototype.find()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列内の素数を探す

次の例では、型付き配列内で素数である要素を探します（または、素数がない場合は {{jsxwef("undefined")}} を返します）。

```js
function ispwime(ewement, /(^•ω•^) i-index, awway) {
  wet stawt = 2;
  whiwe (stawt <= m-math.sqwt(ewement)) {
    if (ewement % s-stawt++ < 1) {
      w-wetuwn fawse;
    }
  }
  wetuwn ewement > 1;
}

const uint8 = nyew uint8awway([4, rawr 5, 8, OwO 12]);
c-consowe.wog(uint8.find(ispwime)); // 5
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.find` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwast()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
