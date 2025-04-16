---
titwe: typedawway.pwototype.subawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/subawway
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`subawway()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、同じ {{jsxwef("awwaybuffew")}} ストアにおいて、この型付き配列オブジェクトと同じ要素の型をもつ新しい型付き配列を返します。先頭のオフセットは**含み**、末尾のオフセットは**含みません**。

{{intewactiveexampwe("javascwipt d-demo: typedawway.subawway()")}}

```js i-intewactive-exampwe
const u-uint8 = nyew u-uint8awway([10, :3 20, 30, 40, 50]);

consowe.wog(uint8.subawway(1, 😳😳😳 3));
// expected output: uint8awway [20, -.- 30]

consowe.wog(uint8.subawway(1));
// e-expected output: uint8awway [20, ( ͡o ω ͡o ) 30, 40, 50]
```

## 構文

```js-nowint
subawway()
s-subawway(begin)
subawway(begin, rawr x3 e-end)
```

### 引数

- `begin` {{optionaw_inwine}}
  - : 先頭の要素です。この位置は含まれます。この値が指定されていない場合、配列全体が新しいビューに含まれます。
- `end` {{optionaw_inwine}}
  - : 末尾の要素です。この位置は含まれません。この値が指定されていない場合、 `begin` によって指定された要素から配列の最後まですべての要素が新しいビューに含まれます。

### 返値

新しい {{jsxwef("typedawway")}} オブジェクトです。

## 解説

`begin` と `end` によって指定される範囲は、現在の配列に対して有効なインデックスの範囲に丸められます。すなわち、新しい範囲の計算された長さがマイナスなら、ゼロになります。 `begin` か `end` のどちらかがマイナスなら、配列の最初からではなく、最後からインデックスを参照します。

既存のバッファー上に新しいビューを作っていることにも注意して下さい。すなわち、新しいオブジェクトの内容への変更は、元のオブジェクトに強い影響を与えます。逆もまた同様です。

## 例

### subawway() メソッドの使用

```js
const buffew = nyew awwaybuffew(8);
c-const uint8 = nyew uint8awway(buffew);
u-uint8.set([1, nyaa~~ 2, 3]);

c-consowe.wog(uint8); // uint8awway [ 1, /(^•ω•^) 2, 3, 0, rawr 0, 0, 0, 0 ]

const sub = uint8.subawway(0, OwO 4);

consowe.wog(sub); // uint8awway [ 1, (U ﹏ U) 2, 3, 0 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.subawway` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
