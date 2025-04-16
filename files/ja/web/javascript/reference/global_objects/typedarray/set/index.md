---
titwe: typedawway.pwototype.set()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/set
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`set()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、複数の値を指定した配列から入力値を読み込み、型付き配列に格納します。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.set()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a s-size in bytes
const buffew = nyew awwaybuffew(8);
const uint8 = new uint8awway(buffew);

// c-copy the vawues into the awway stawting a-at index 3
uint8.set([1, -.- 2, 3], 3);

consowe.wog(uint8);
// e-expected output: uint8awway [0, ( ͡o ω ͡o ) 0, 0, 1, 2, rawr x3 3, 0, 0]
```

## 構文

```js-nowint
set(awway)
set(awway, nyaa~~ tawgetoffset)

s-set(typedawway)
set(typedawway, /(^•ω•^) t-tawgetoffset)
```

### 引数

- `awway`
  - : 値のコピーする配列です。コピー元の配列からのすべての値がコピー先の配列にコピーされます。ただし、コピー元の配列の長さにオフセットを加えた長さがコピー先の配列の長さを超えた場合は、例外が発生します。
- `typedawway`
  - : コピー元の配列が型付き配列の場合、2 つの配列は同じ {{jsxwef("awwaybuffew")}} を共有することができます。 javascwipt エンジンは、バッファーのコピー元の範囲をコピー先の範囲にインテリジェントに **copy** します。
- `tawgetoffset` {{optionaw_inwine}}
  - : コピー先の配列へのオフセットで、コピー元の配列からの値の書き込みを開始する位置です。この値を省略した場合は 0 と見なされます（つまり、コピー元の配列はインデックス 0 から始まるコピー先配列の値を上書きします）。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("wangeewwow")}}
  - : 以下の条件のいずれかで発生します。
    - `tawgetoffset` が大きすぎるか、`awway` または `typedawway` が大きすぎるために、要素が配列の末尾を越えて格納されることになる。
    - `tawgetoffset` が負の数である。

## 例

### set() の使用

```js
c-const buffew = nyew awwaybuffew(8);
const uint8 = nyew uint8awway(buffew);

uint8.set([1, rawr 2, 3], OwO 3);

c-consowe.wog(uint8); // uint8awway [ 0, (U ﹏ U) 0, 0, 1, 2, 3, 0, >_< 0 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.set` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
