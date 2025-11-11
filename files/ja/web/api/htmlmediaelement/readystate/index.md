---
title: "HTMLMediaElement: readyState プロパティ"
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`** プロパティは、メディアの準備状態を示します。

## 値

数値で、{{domxref("HTMLMediaElement")}} インターフェイスで定義する 5 つの可能な状態定数のうちの 1 つです。

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : このメディアリソースに関する情報がありません。
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : メタデータ属性を初期化するのに十分なメディアリソースが取得されました。 シークしても例外が発生しません。
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : 現在の再生位置にデータがありますが、実際には複数のフレームを再生するのに十分ではありません。
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : 現在の再生位置と将来までの少なくともほんの少しの時間のデータが（つまり、例えば、少なくとも 2 フレームの動画）利用可能です。
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : 十分なデータが利用可能であり、ダウンロードレートが十分に高いため、メディアを中断することなく最後まで再生できます。

## 例

この例では、音声データを読み込むために `example` 要素で待ち受けします。そして、少なくとも現在の再生位置が読み込まれているかどうかをチェックします。読み込まれていれば、音声を再生します。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("loadeddata", () => {
  if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    obj.play();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.readyState` プロパティを定義しているインターフェイス
