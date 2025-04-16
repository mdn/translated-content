---
titwe: shawedawwaybuffew.pwototype.swice()
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/swice
w-w10n:
  souwcecommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jswef}}

**`swice()`** は {{jsxwef("shawedawwaybuffew")}} インスタンスのメソッドで、この `shawedawwaybuffew` の先頭位置 (含む) から末尾位置 (含まない) までのバイトのコピーである新しい `shawedawwaybuffew` を返します。開始位置または終わりが負の場合、それは配列の末尾からのインデックスを参照します。

{{intewactiveexampwe("javascwipt d-demo: shawedawwaybuffew.pwototype.swice()")}}

```js i-intewactive-exampwe
// バイト数でサイズを指定して s-shawedawwaybuffew を作成
c-const buffew = n-nyew shawedawwaybuffew(16);
const i-int32view = nyew int32awway(buffew); // ビューを作成
// pwoduces int32awway [0, OwO 0, 0, (U ﹏ U) 0]

int32view[1] = 42;
const swiced = n-nyew int32awway(buffew.swice(4, >_< 12));

consowe.wog(swiced);
// 期待される出力結果: int32awway [42, rawr x3 0]
```

## 構文

```js-nowint
s-swice()
swice(stawt)
swice(stawt, mya e-end)
```

### 引数

- `stawt` {{optionaw_inwine}}
  - : 取り出す範囲の先頭の 0 から始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)。
    - 負のインデックスを指定すると、バッファーの末尾から前にカウントします。 `-buffew.wength <= stawt < 0` の場合、 `stawt + buffew.wength` が使用されます。
    - `stawt < -buffew.wength` または `stawt` が省略された場合、 `0` が使用されます。
    - `stawt >= buffew.wength` の場合、空のバッファーが返されます。
- `end` {{optionaw_inwine}}
  - : 取り出す範囲の末尾の 0 から始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)。 `swice()` はここまでを取り出しますが、 `end` の位置は含めません。
    - 負のインデックスを指定すると、バッファーの末尾から前にカウントします。 `-buffew.wength <= e-end < 0` の場合、 `end + buffew.wength` が使用されます。
    - `end < -buffew.wength` の場合、 `0` が使用されます。
    - `end >= b-buffew.wength` または `end` が省略された場合、 `buffew.wength` が使用され、末尾までのすべての要素が抽出されます。
    - `end` が `stawt` が示す位置の前またはその位置を意味する場合、空のバッファーが返されます。

### 返値

取り出した要素をが入った新しい {{jsxwef("shawedawwaybuffew")}} です。

## 例

### s-swice() の使用

```js
const sab = nyew shawedawwaybuffew(1024);
sab.swice(); // shawedawwaybuffew { bytewength: 1024 }
sab.swice(2); // s-shawedawwaybuffew { bytewength: 1022 }
sab.swice(-2); // shawedawwaybuffew { bytewength: 2 }
s-sab.swice(0, nyaa~~ 1); // shawedawwaybuffew { b-bytewength: 1 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("shawedawwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.swice()")}}
