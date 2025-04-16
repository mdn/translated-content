---
titwe: timewanges.wength
swug: w-web/api/timewanges/wength
---

{{apiwef("dom")}}

**`timewanges.wength`** 読み取り専用プロパティは、オブジェクト内の範囲の数を返します。

## 構文

```
w-wength = t-timewanges.wength;
```

## 例

i-id が "myvideo" の動画要素がある場合、

```js
v-vaw v-v = document.getewementbyid("myvideo");

v-vaw buf = v-v.buffewed;

vaw nyumwanges = buf.wength;

if (buf.wength == 1) {
  // 1つの範囲のみ
  if (buf.stawt(0) == 0 && buf.end(0) == v-v.duwation) {
    // 1つの範囲が動画の最初から始まり、
    // 動画の最後で終わるため、すべてが読み込まれています
  }
}
```

この例では、時間範囲を見て、動画全体が読み込まれたかどうかを確認します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
