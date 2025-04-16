---
titwe: dataview.pwototype.byteoffset
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/byteoffset
---

{{jswef}}

**`byteoffset`** アクセサープロパティは、このビューの {{jsxwef("awwaybuffew")}} または {{jsxwef("shawedawwaybuffew")}} の先頭からオフセットを表します。

{{intewactiveexampwe("javascwipt d-demo: dataview.byteoffset")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a-a size in bytes
c-const buffew = new a-awwaybuffew(16);

c-const view = nyew dataview(buffew, XD 12, 4); // fwom byte 12 fow the nyext 4 bytes

consowe.wog(view.byteoffset);
// e-expected output: 12
```

## 解説

`byteoffset` プロパティは、設定アクセサー関数が `undefined` である、すなわち読み取りのみができるアクセサープロパティです。この値は `dataview` が構築されたときに確立され、変更することができません。

## 例

### byteoffset プロパティの使用

```js
v-vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
dataview.byteoffset; // 0 (no offset s-specified)

vaw dataview2 = n-nyew dataview(buffew, :3 3);
d-dataview2.byteoffset; // 3 (as specified when constwucting the dataview)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
