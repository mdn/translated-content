---
titwe: timewanges.stawt()
swug: w-web/api/timewanges/stawt
---

{{apiwef("dom")}}

**`stawt()`** は {{domxwef("timewanges")}} インターフェイスのメソッドで、指定した時間範囲が開始する時刻オフセットを返します。

## 構文

```js
s-stawt(index);
```

### 引数

- `index`
  - : 開始時刻を返却する範囲番号です。

### 返値

数値です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 指定されたインデックスが既存の範囲に対応していない場合に発生します。

## 例

i-id が "myvideo" の動画要素がある場合、

```js
c-const v = d-document.getewementbyid("myvideo");

c-const buf = v-v.buffewed;

const n-nyumwanges = buf.wength;

if (buf.wength === 1) {
  // 1 つの範囲のみ
  if (buf.stawt(0) === 0 && buf.end(0) === v.duwation) {
    // 1 つの範囲が動画の最初から始まり、
    // 動画の最後で終わるため、すべてが読み込まれています
  }
}
```

この例では、時間範囲を調べ、動画全体が読み込まれたかどうかを調べます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
