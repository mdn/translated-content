---
title: Screen.orientation
slug: Web/API/Screen/orientation
---

{{APIRef("Screen Orientation API")}}

**`orientation`** は {{DOMxRef("Screen")}} インターフェイスの読み取り専用プロパティで、現在の画面の向きを返します。

## 値

画面の向きを表す {{DOMxRef("ScreenOrientation")}} のインスタンスです。

なお、古い接頭辞付きのものは文字列で {{DOMxRef("ScreenOrientation.type")}} と同等のものを返していました。

## 例

```js
var orientation =
  (screen.orientation || {}).type ||
  screen.mozOrientation ||
  screen.msOrientation;

if (orientation === "landscape-primary") {
  console.log("良い感じですね。");
} else if (orientation === "landscape-secondary") {
  console.log("うーん…。画面が上下逆です！");
} else if (
  orientation === "portrait-secondary" ||
  orientation === "portrait-primary"
) {
  console.log("うーん…。スクリーンを横向きにした方がいいですよ");
} else if (orientation === undefined) {
  console.log("このブラウザーは画面方向 API に対応していません :(");
}
```

## 仕様書

仕様書の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("ScreenOrientation")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} イベント
- [画面の方向の制御](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
