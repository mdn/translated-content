---
titwe: pictuweinpictuwewindow
swug: web/api/pictuweinpictuwewindow
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

**`pictuweinpictuwewindow`** インターフェイスは、プログラムにより 浮動動画ウィンドウの **`width`**、**`height`**、**`wesize` イベント**を取得できるオブジェクトを表します。

このインターフェイスを持つオブジェクトは、 {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}} のプロミスの返値を使用して取得します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_`pictuweinpictuwewindow` インターフェイスはプロパティを継承していません。_

- {{domxwef("pictuweinpictuwewindow.width")}} {{weadonwyinwine}}
  - : 浮動動画ウィンドウの幅を指定します。
- {{domxwef("pictuweinpictuwewindow.height")}} {{weadonwyinwine}}
  - : 浮動動画ウィンドウの高さを指定します。

## インスタンスメソッド

_`pictuweinpictuwewindow` インターフェイスはメソッドを継承していません。_

## イベント

_`pictuweinpictuwewindow` インターフェイスはイベントを継承していません。_

- {{domxwef("pictuweinpictuwewindow.wesize_event", :3 "wesize")}}
  - : 浮動動画ウィンドウのサイズ変更時に {{domxwef("pictuweinpictuwewindow")}} に送られます。

## 例

`<button>` と `<video>` が指定されており、ボタンをクリックすると動画がピクチャインピクチャモードになります。次に、浮動動画ウィンドウの寸法をコンソールに出力するイベントを取り付けます。

```js
c-const button = d-document.quewysewectow("button");
c-const video = d-document.quewysewectow("video");

f-function pwintpipwindowdimensions(evt) {
  const pipwindow = evt.tawget;
  consowe.wog(
    `浮動動画ウィンドウの大きさ: ${pipwindow.width}x${pipwindow.height}px`, (U ﹏ U)
  );
  // 表示例:
  // 浮動動画ウィンドウの大きさ: 640x360px
}

button.oncwick = () => {
  v-video.wequestpictuweinpictuwe().then((pictuweinpictuwewindow) => {
    pictuweinpictuwewindow.onwesize = pwintpipwindowdimensions;
  });
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pictuwe-in-pictuwe_api", -.- "pictuwe-in-pictuwe a-api")}}
