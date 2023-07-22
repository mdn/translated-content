---
title: "HTMLVideoElement: videoHeight property"
short-title: videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLVideoElement")}} インターフェイスの **`videoHeight`** プロパティは読み取り専用で、動画の[内在的な高さ](#内在的な幅と高さについて)を CSS ピクセル単位で示します。
単純に言えば、これはメディアの自然なサイズでの高さです。

## 値

動画の内在的な高さを CSS のピクセル数で示す整数値。
要素の {{domxref("HTMLMediaElement.readyState", "readyState")}} が `HTMLMediaElement.HAVE_NOTHING` の場合、このプロパティの値は 0 です。これは、動画やポスターのフレームサイズ情報がまだ利用できないためです。

### 内在的な幅と高さについて

{{Glossary("user agent", "ユーザーエージェント")}}は、この要素のメディアの内在的な幅と高さを、このメディアの幅と高さの生のピクセル数から計算し始め、以下のような要素を考慮します。

- このメディアのアスペクト比。
- メディアのクリーンアパーチャ（対象とする縦横比に一致する、メディアを中心とした長方形）。
- 対象とする機器の解像度。
- そのメディア形式が要求する他の要素。

要素がレンダリング動画ではなくポスターフレームを表示している場合、ポスターフレームの内在サイズが `<video>` 要素のサイズとみなされます。

メディアの内在サイズが変更された時点で、要素の {{domxref("HTMLMediaElement.readyState", "readyState")}} が `HAVE_NOTHING` でない場合、{{domxref("HTMLMediaElement.resize", "resize")}} イベントが `<video>` 要素に送られます。
これは、要素がポスターフレームの表示から動画コンテンツの表示に切り替わるときや、表示される動画トラックが変わるときに発生します。

## 例

この例では、{{domxref("HTMLVideoElement.resize", "resize")}} イベントのハンドラーを作成し、{{HTMLElement("video")}} 要素のサイズをそのコンテンツの内在サイズに一致するように変更します。

```js
let v = document.getElementById("myVideo");

v.addEventListener(
  "resize",
  (ev) => {
    let w = v.videoWidth;
    let h = v.videoHeight;

    if (w && h) {
      v.style.width = w;
      v.style.height = h;
    }
  },
  false,
);
```

これは `videoWidth` と `videoHeight` の両方が 0 でない場合にのみ変更を適用することに注意してください。
これにより、寸法についてまだ利用できる真の情報がない場合に、無意味な変更が適用されるのを避けることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
