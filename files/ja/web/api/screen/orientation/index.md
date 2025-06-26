---
title: "Screen: orientation プロパティ"
short-title: orientation
slug: Web/API/Screen/orientation
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Screen Orientation API")}}

**`orientation`** は {{DOMxRef("Screen")}} インターフェイスの読み取り専用プロパティで、現在の画面の向きを返します。

## 値

画面の向きを表す {{DOMxRef("ScreenOrientation")}} のインスタンスです。

なお、古い接頭辞付きのものは文字列で {{DOMxRef("ScreenOrientation.type")}} と同等のものを返していました。

## 例

```js
switch (screen.orientation.type) {
  case "landscape-primary":
    console.log("良い感じですね。");
    break;
  case "landscape-secondary":
    console.log("うーん…。画面が上下逆です！");
    break;
  case "portrait-secondary":
  case "portrait-primary":
    console.log("うーん…。スクリーンを横向きにした方がいいですよ");
    break;
  default:
    console.log("このブラウザーは画面方向 API に対応していません :(");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("ScreenOrientation")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} イベント
- [画面の向きの制御](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
