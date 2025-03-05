---
title: "MediaStreamTrack: applyConstraints() メソッド"
short-title: applyConstraints()
slug: Web/API/MediaStreamTrack/applyConstraints
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

**`applyConstraints()`** は {{domxref("MediaStreamTrack")}} インターフェイスのメソッドで、トラックに一連の制約を適用します。これらの制約により、ウェブサイトやアプリは、フレームレート、サイズ、エコーキャンセルなど、トラックの制約可能なプロパティに対して、理想的な値や受け入れられる範囲を設定することができます。

制約を使用することで、メディアが特定のガイドラインを満たすように保証することができます。
例えば、高密度の動画を推奨しますが、ネットワークに負担をかけないようにデータレートを低く保つためにフレームレートを少し低くする必要があるかもしれません。
また、理想的なサイズや受け入れられるサイズ、またはその範囲を指定することもできます。
推奨する制約を適用する方法の詳細については、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)の[制約の適用](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#制約の適用)を参照してください。

## 構文

```js-nolint
applyConstraints()
applyConstraints(constraints)
```

### 引数

- `constraints` {{optional_inline}}
  - : トラックの制約可能プロパティに適用する制約を列挙した {{domxref("MediaTrackConstraints")}} です。既存の制約は指定した新しい値で置き換えられ、含まれない制約可能プロパティは既定の制約に戻されます。
    この引数を除外すると、現在設定されているカスタム制約はすべてクリアされます。
    このオブジェクトは、プロミス ({{jsxref("Promise")}}) が解決するために適用しなければならない制約の基本設定を表します。
    このオブジェクトは追加の `MediaTrackConstraints` オブジェクトの配列を含む高度なプロパティを格納することができます。

### 返値

制約が正常に適用されたときに解決するプロミス ({{jsxref("Promise")}})。制約が適用できない場合、プロミス {{domxref("OverconstrainedError")}} で拒否されます。これは、{{domxref("DOMException")}} に追加引数として `OverconstrainedError` という名前を設定したもので、制約に合うものがなかったことを示します。
これは、指定する制約が厳しすぎて、トラックを構成しようとしたときに一致するものが見つからなかった場合に発生する可能性があります。

## 例

次の例では、基本的な制約と高度な制約を設定する方法を示します。
これは、ページまたはウェブアプリの幅が 640 ～ 1280 の間、高さが 480 ～ 720の間である必要があることを指定します。高度なプロパティではさらに、画像サイズは 1920 x 1280 が推奨され、利用できない場合は 1.333 のアスペクト比を指定します。なお、これらの制約は、仕様が「バックオフ戦略」と呼んでいるものも参照しています。

```js
const constraints = {
  width: { min: 640, ideal: 1280 },
  height: { min: 480, ideal: 720 },
  advanced: [{ width: 1920, height: 1280 }, { aspectRatio: 1.333 }],
};

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  const track = mediaStream.getVideoTracks()[0];
  track
    .applyConstraints(constraints)
    .then(() => {
      // 画像キャプチャ API を使用するなど、トラックで何かを行う
    })
    .catch((e) => {
      // 利用できる端末では制約を満たすことができない
    });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 画像キャプチャ API](/ja/docs/Web/API/MediaStream_Image_Capture_API)
