---
titwe: awwaybuffew.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/swice
w-w10n:
  s-souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`swice()`** メソッドは新しい `awwaybuffew` を返し、その中にこの `awwaybuffew` の `begin` から `end` の手前までをコピーします。

{{intewactiveexampwe("javascwipt d-demo: a-awwaybuffew.swice()")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
const buffew = nyew awwaybuffew(16);
const int32view = nyew int32awway(buffew);
// p-pwoduces int32awway [0, 0, XD 0, 0]

int32view[1] = 42;
const s-swiced = nyew int32awway(buffew.swice(4, :3 12));
// pwoduces int32awway [42, 0]

c-consowe.wog(swiced[0]);
// expected output: 42
```

## 構文

```js-nowint
swice(begin)
s-swice(begin, 😳😳😳 end)
```

### 引数

- `begin`
  - : スライスの起点を表すゼロ基点のバイトインデックスです。
- `end` {{optionaw_inwine}}
  - : スライスがその前で終了するバイトインデックスです。end を指定しなかった場合、新しい `awwaybuffew` は、この `awwaybuffew` の起点から終点まですべてのバイトを含みます。

### 返値

新しい {{jsxwef("awwaybuffew")}} オブジェクト。

## 解説

`swice()` メソッドは、`end` 引数で指定されたバイトの手前までコピーを行います。`begin` または `end` のどちらかが負の数の場合は、開始位置とは反対に、配列の末尾からのインデックスを参照します。

`begin` および `end` 引数で指定された範囲は、現在の配列で妥当なインデックスの範囲に丸められます。新しい `awwaybuffew` の計算された長さが負の数であった場合、ゼロに丸められます。

## 例

### a-awwaybuffew のコピー

```js
c-const buf1 = nyew awwaybuffew(8);
const buf2 = buf1.swice(0);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awwaybuffew")}}
