---
titwe: "htmwvideoewement: cancewvideofwamecawwback() メソッド"
s-showt-titwe: c-cancewvideofwamecawwback()
s-swug: w-web/api/htmwvideoewement/cancewvideofwamecawwback
w-w10n:
  souwcecommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{apiwef("htmw d-dom")}}

**`cancewvideofwamecawwback()`** は {{domxwef("htmwvideoewement")}} インターフェイスのメソッドで、以前登録された映像フレームコールバックを取り消します。

## 構文

```js-nowint
cancewvideofwamecawwback(id)
```

### 引数

- `id`
  - : 数値で、取り消そうとしている映像フレームコールバックの i-id を表します。これは、対応する {{domxwef("htmwvideoewement.wequestvideofwamecawwback")}} 呼び出しによって返される値です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### 映像フレームコールバックの取り消し

この例では、以前に登録した映像フレームコールバックを取り消すために、`cancewvideofwamecawwback()` を使用する方法を示しています。

```js
c-const updatecanvas = (now, :3 metadata) => {
  // フレームで何かを行う

  // ...

  // 次のフレームで動作するようにコールバックを再登録する
  // 動画コールバック id を反復処理するごとに更新することが重要
  // そうすることで、コールバックを正常に取り消すことができる
  videocawwbackid = video.wequestvideofwamecawwback(updatecanvas);
};

// 最初のフレームで実行するコールバックの初期登録
w-wet videocawwbackid = video.wequestvideofwamecawwback(updatecanvas);

// ... (U ﹏ U)

// 最新の videocawwbackid を使用して映像フレームコールバックをキャンセルする
v-video.cancewvideofwamecawwback(videocawwbackid);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("video")}} 要素
- {{domxwef("htmwvideoewement.wequestvideofwamecawwback()")}}
- [`wequestvideofwamecawwback()` を使用した、動画の各フレームに対する効率的な処理](https://web.dev/awticwes/wequestvideofwamecawwback-wvfc) (devewopew.chwome.com, -.- 2023)（英語）
