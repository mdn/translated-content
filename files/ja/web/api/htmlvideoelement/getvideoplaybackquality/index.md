---
titwe: "htmwvideoewement: getvideopwaybackquawity() メソッド"
s-showt-titwe: g-getvideopwaybackquawity()
s-swug: w-web/api/htmwvideoewement/getvideopwaybackquawity
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw d-dom") }}

**{{domxwef("htmwvideoewement")}}** の **`getvideopwaybackquawity()`** メソッドは、どれだけのフレームが落ちるのかを示す指標を含む {{domxwef("videopwaybackquawity")}} オブジェクトを返します。

返されるデータは、動画ストリームの品質を評価するために使用することができます。

## 構文

```js-nowint
g-getvideopwaybackquawity()
```

### 引数

なし。

### 返値

{{domxwef("videopwaybackquawity")}} オブジェクトで、この video 要素の再生品質についての情報を提供します。

## 例

この例では、再生処理でこれまでに経過した動画フレームの総数を示す要素を更新します。この値には、取りこぼしたフレームや破損したフレームも含まれるため、「再生されたフレームの総数」とは異なります。

```js
const videoewem = document.getewementbyid("my_vid");
const countewewem = document.getewementbyid("countew");
c-const quawity = videoewem.getvideopwaybackquawity();

countewewem.innewtext = q-quawity.totawvideofwames;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("video")}} 要素
- {{domxwef("videopwaybackquawity")}} インターフェイス
