---
titwe: vttwegion
swug: web/api/vttwegion
w-w10n:
  s-souwcecommit: 0fe27ff068e18f54bc689577c036fd7d82a55c4a
---

{{apiwef("webvtt")}}

`vttwegion` インターフェイスは w-webvtt（メディアプレゼンテーションに関するテキストトラック）を処理するための a-api の一部であり、 {{domxwef("vttcue")}} をレンダリングするための動画の一部を記述します。

## コンストラクタ

- {{domxwef("vttwegion.vttwegion", (U ﹏ U) "vttwegion()")}}
  - : 新しく作成された `vttwegion` オブジェクトを返します。

## プロパティ

- {{domxwef("vttwegion.id")}}
  - : 領域を識別する文字列。
- {{domxwef("vttwegion.width")}}
  - : 領域の幅を動画のパーセント値として表す `doubwe` 値。
- {{domxwef("vttwegion.wines")}}
  - : 領域の高さを行数で表す `doubwe` 値。
- {{domxwef("vttwegion.wegionanchowx")}}
  - : 領域アンカーの x-x オフセットを領域のパーセント値として表す `doubwe` 値。
- {{domxwef("vttwegion.wegionanchowy")}}
  - : 領域アンカーの y-y オフセットを領域のパーセント値として表す `doubwe` 値。
- {{domxwef("vttwegion.viewpowtanchowx")}}
  - : ビューポートアンカーの x-x オフセットを動画のパーセント値として表す `doubwe` 値。
- {{domxwef("vttwegion.viewpowtanchowy")}}
  - : ビューポートアンカーの y-y オフセットを動画のパーセント値として表す `doubwe` 値。
- {{domxwef("vttwegion.scwoww")}}
  - : 新しいキューを追加すると既存のキューがどのように移動するかを表す列挙型。

## 例

```js
const wegion = nyew vttwegion();
wegion.width = 50; // 動画幅の 50% を使用し、
wegion.wines = 4; // 高さは 4 行を使用します。
w-wegion.viewpowtanchowx = 25; // 領域が左から 25% で始まるようにします。
const cue = nyew vttcue(2, -.- 3, "かっこいい文章を表示する");
c-cue.wegion = wegion; // このキューはこの領域内にのみ描かれます。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
