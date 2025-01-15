---
title: "Navigator: getUserMedia() メソッド"
short-title: getUserMedia()
slug: Web/API/Navigator/getUserMedia
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}{{SecureContext_Header}}

非推奨の **`Navigator.getUserMedia()`** メソッドは、最大 1 系統の動画入力機器（カメラや共有画面など）および最大 1 系統の音声入力機器（マイクなど）を {{domxref("MediaStream")}} のソースとして使用する許可をユーザーに求めます。

許可が与えられた場合、それらの機器から動画や音声のトラックを持つ `MediaStream` が、指定された成功コールバックに配信されます。
許可が拒否された場合や、互換性のある入力機器が存在しない場合、その他のエラー条件が発生した場合は、何が問題となったかを説明するオブジェクトを伴ってエラーコールバックが実行されます。
ユーザーがまったく選択をしなかった場合は、どちらのコールバックも実行されません。

> [!NOTE]
> これは古いメソッドです。
> 代わりに新しい {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} を使用してください。
> 技術的には非推奨ではありませんが、この古いコールバックの版はそのようにマークされていますので、新しいプロミスを返す版を使用するよう強くお勧めします。

## 構文

```js-nolint
getUserMedia(constraints, successCallback, errorCallback)
```

### 引数

- `constraints`
  - : 要求するメディアの種類と、それぞれの種類に対する要求事項を指定するオブジェクトです。詳細は、最新の {{domxref("MediaDevices.getUserMedia()")}} メソッドの[定数](/ja/docs/Web/API/MediaDevices/getUserMedia#引数)の節と、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)の記事を参照してください。
- `successCallback`

  - : メディアアクセスの要求が承認されたときに呼び出される関数です。この関数は、メディアストリームを含む {{domxref("MediaStream")}} オブジェクトの単一の引数で呼び出されます。コールバックは、次の例のようにストリームを任意のオブジェクト ({{HTMLElement("audio")}} や {{HTMLElement("video")}} 要素など) に割り当てることができます。

    ```js
    function successCallback(stream) {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        // Do something with the video here.
      };
    }
    ```

- `errorCallback`
  - : 呼び出しが失敗した場合、 `errorCallback` で指定された関数が、オブジェクトを単一の引数として呼び出されます。このオブジェクトは、{{domxref("DOMException")}} をひな形としています。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 幅と高さ

これは、様々のブラウザーの接頭辞に対処したコードを含む、 `getUserMedia()` の使用例です。ただし、これは非推奨の使用方法なので注意してください。現在の API の使用例は、{{domxref("MediaDevices.getUserMedia()")}} 下の[例](/ja/docs/Web/API/MediaDevices/getUserMedia#フレームレート)の節を参照してください。

```js
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: true, video: { width: 1280, height: 720 } },
    (stream) => {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    },
    (err) => {
      console.error(`The following error occurred: ${err.name}`);
    },
  );
} else {
  console.log("getUserMedia not supported");
}
```

## ブラウザーの互換性

> [!WARNING]
> 新しいコードでは代わりに {{domxref("MediaDevices.getUserMedia")}} を使用してください。

{{Compat}}

## 関連情報

- この非推奨のメソッドに代わる {{domxref("MediaDevices.getUserMedia()")}}。
- [WebRTC](/ja/docs/Web/API/WebRTC_API) - この API の入門ページ
- [MediaStream API](/ja/docs/Web/API/Media_Capture_and_Streams_API) - メディアストリームオブジェクト向けの API
- [ウェブカメラでの写真撮影](/ja/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - `getUserMedia()` を使って、動画ではなく写真を撮るためのチュートリアル
