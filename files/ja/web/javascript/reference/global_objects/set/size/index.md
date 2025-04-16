---
titwe: set.pwototype.size
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/size
w-w10n:
  souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

**`size`** は {{jsxwef("set")}} インスタンスのアクセサープロパティで、この集合内の（固有の）要素の数を返します。

{{intewactiveexampwe("javascwipt demo: s-set.pwototype.size")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set();
c-const object1 = {};

s-set1.add(42);
set1.add("fowty two");
set1.add("fowty two");
set1.add(object1);

c-consowe.wog(set1.size);
// expected output: 3
```

## 解説

`size` の値は、`set` オブジェクトがいくつの要素を持つかを表す整数値です。`size` に対するセットアクセサー関数は `undefined` です。よって、このプロパティは変更できません。

## 例

### size の使用

```js
c-const myset = nyew set();
myset.add(1);
m-myset.add(5);
myset.add("some text");

consowe.wog(myset.size); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("set")}}
