---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

**`MediaTrackConstraints`** 辞書は、一連の能力とそれぞれが取り得る値や値の範囲を記述するために使用されます。この制約辞書は {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} に渡され、スクリプトがトラックに対して正確な（要求された）値や範囲、または希望する値や値の範囲のセットを指定できるようにします。また、最後に要求されたカスタム制約のセットは、{{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} を呼び出すことで取得できます。

## 制約

以下の型は、プロパティに対する制約を指定するために使用されます。これらを使用すると、そのうちどれか 1 つがパラメーターの値として使用されるべき `exact` 値を 1 つ以上指定できます。あるいは、可能であれば使用されるべき `ideal` 値のセットを指定することもできます。さらに、単一の値（または値の配列）を指定することもでき、ユーザーエージェントは、より厳しい制約がすべて適用された後に、その値を満たすよう最善を尽くします。

制約の仕組みについて詳しく知りたい場合は、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)を参照してください。

> [!NOTE]
> `min` および `exact` 値は、{{domxref("MediaDevices.getDisplayMedia()")}} 呼び出しで使用される制約では許可されておらず、`TypeError` が発生します。ただし、これらは {{domxref("MediaStreamTrack.applyConstraints()")}} 呼び出しで使用される制約では許可されています。

### ConstrainBoolean

`ConstrainBoolean` 制約型は真偽値を持つプロパティの制約を指定するために使用されます。その値は真偽値 (`true` または `false`) または次のプロパティを含むオブジェクトを設定できます。

- `exact`
  - : プロパティの値となるべき真偽値です。プロパティをこの値に設定できない場合、制約に失敗します。
- `ideal`
  - : プロパティの理想的な値を指定する真偽値です。可能であればこの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

### ConstrainDouble

`ConstrainDouble` 制約型は倍精度浮動小数点数の値を持つプロパティの制約を指定するために使用されます。その値は数値または次のプロパティを含むオブジェクトを設定できます。

- `max`
  - : プロパティの値として許容できる最大の値を指定する数値です。値がこの値以下にならない場合、制約に失敗します。
- `min`
  - : プロパティの値として許容できる最小の値を指定する数値です。値がこの値以上にならない場合、制約に失敗します。
- `exact`
  - : プロパティが受け入れる必要がある、要求された特定の値を指定する十進数です。
- `ideal`
  - : プロパティの理想的な値を指定する十進数です。可能であればこの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

### ConstrainDOMString

`ConstrainDOMString` 制約型は文字列の値を持つプロパティの制約を指定するために使用されます。その値は文字列、文字列の配列、または次のプロパティを含むオブジェクトを設定できます。

- `exact`
  - : 文字列またはそのうちひとつがプロパティの値となるべき文字列の配列です。プロパティをこれらの値のいずれかに設定できない場合、制約に失敗します。
- `ideal`
  - : プロパティの理想的な値を指定する文字列またはその配列です。可能であればこれらの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

### ConstrainULong

`ConstrainULong` 制約型は整数の値を持つプロパティの制約を指定するために使用されます。その値は数値または次のプロパティを含むオブジェクトを設定できます。

- `max`
  - : プロパティの値として許容できる最大の値を指定する整数です。値がこの値以下にならない場合、制約に失敗します。
- `min`
  - : プロパティの値として許容できる最小の値を指定する整数です。値がこの値以上にならない場合、制約に失敗します。
- `exact`
  - : プロパティが受け入れる必要がある、要求された特定の値を指定する整数です。
- `ideal`
  - : プロパティの理想的な値を指定する整数です。可能であればこの値が使用されますが、不可能な場合はユーザーエージェントは最も近い値を使用します。

## インスタンスプロパティ

以下のプロパティのうち、いくつかの組み合わせがオブジェクトに存在しますが、必ずしもすべてではありません。これは、特定のブラウザーがそのプロパティをサポートしていない場合や、該当しない場合があるためです。たとえば、{{Glossary("RTP")}} は WebRTC 接続のネゴシエーション中にこれらの値の一部を提供しないため、{{domxref("RTCPeerConnection")}} に関連付けられたトラックには、{{domxref("MediaTrackConstraints.facingMode", "facingMode")}} や {{domxref("MediaTrackConstraints.groupId", "groupId")}} などの特定の値が含まれません。

### すべてのメディアトラックのインスタンスプロパティ

- {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}
  - : 受け入れ可能または要求されるデバイス ID、またはデバイス ID の配列を指定する [`ConstrainDOMString`](#constraindomstring) オブジェクト。
- {{domxref("MediaTrackConstraints.groupId", "groupId")}}
  - : 受け入れ可能または要求されるグループ ID、またはグループ ID の配列を指定する [`ConstrainDOMString`](#constraindomstring) オブジェクト。

### 音声トラックのインスタンスプロパティ

- {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}
  - : 自動ゲインコントロールを希望または要求するかを指定する [`ConstrainBoolean`](#constrainboolean) オブジェクト。
- {{domxref("MediaTrackConstraints.channelCount", "channelCount")}}
  - : 受け入れ可能または要求されるチャンネル数、またはチャンネル数の範囲を指定する [`ConstrainULong`](#constrainulong)。
- {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}
  - : エコーキャンセリングを希望または要求するかを指定する [`ConstrainBoolean`](#constrainboolean) オブジェクト。
- {{domxref("MediaTrackConstraints.latency", "latency")}}
  - : 受け入れ可能または要求される遅延、または遅延の範囲を指定する [`ConstrainDouble`](#constraindouble)。
- {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}
  - : ノイズ抑制を希望または要求するかを指定する [`ConstrainBoolean`](#constrainboolean) オブジェクト。
- {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}
  - : 受け入れ可能または要求されるサンプルレート、またはサンプルレートの範囲を指定する [`ConstrainULong`](#constrainulong)。
- {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}
  - : 受け入れ可能または要求されるサンプルサイズ、またはサンプルサイズの範囲を指定する [`ConstrainULong`](#constrainulong)。
- {{domxref("MediaTrackConstraints.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 受け入れ可能または要求される音量、または音量の範囲を指定する [`ConstrainDouble`](#constraindouble)。

### 画像トラックのインスタンスプロパティ

- whiteBalanceMode
  - : `"none"`、`"manual"`、`"single-shot"`、`"continuous"` のいずれかを指定する {{jsxref("String")}}。
- exposureMode
  - : `"none"`、`"manual"`、`"single-shot"`、`"continuous"` のいずれかを指定する {{jsxref("String")}}。
- focusMode
  - : `"none"`、`"manual"`、`"single-shot"`、`"continuous"` のいずれかを指定する {{jsxref("String")}}。
- pointsOfInterest
  - : センサー上の 1 つ以上の関心点のピクセル座標。これは { x:_値_, y:_値_ } の形式のオブジェクト、またはそのようなオブジェクトの配列で、_値_ は倍精度整数です。
- exposureCompensation
  - : ±3 までの F 値調整を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- colorTemperature
  - : 希望する色温度をケルビンで指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- iso
  - : 希望する ISO 設定を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- brightness
  - : 希望する明るさ設定を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- contrast
  - : 明暗の差の度合いを指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- saturation
  - : 色の強さの度合いを指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- sharpness
  - : エッジの強さを指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- focusDistance
  - : フォーカスされたオブジェクトまでの距離を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- zoom
  - : 希望する焦点距離を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- torch
  - : トラックがアクティブである限りフィルライトを連続して点灯させ続けるかどうかを定義する真偽値。

### 動画トラックのインスタンスプロパティ

- {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}}
  - : 受け入れ可能または要求される動画の{{glossary("Aspect_ratio", "アスペクト比")}}、またはアスペクト比の範囲を指定する [`ConstrainDouble`](#constraindouble)。
- {{domxref("MediaTrackConstraints.facingMode", "facingMode")}}
  - : 受け入れ可能または要求される向き、または向きの配列を指定する [`ConstrainDOMString`](#constraindomstring) オブジェクト。
- {{domxref("MediaTrackConstraints.frameRate", "frameRate")}}
  - : 受け入れ可能または要求されるフレームレート、またはフレームレートの範囲を指定する [`ConstrainDouble`](#constraindouble)。
- {{domxref("MediaTrackConstraints.height", "height")}}
  - : 受け入れ可能または要求される動画の高さ、または高さの範囲を指定する [`ConstrainULong`](#constrainulong)。
- {{domxref("MediaTrackConstraints.width", "width")}}
  - : 受け入れ可能または要求される動画の幅、または幅の範囲を指定する [`ConstrainULong`](#constrainulong)。
- resizeMode
  - : ユーザーエージェントが動画トラックの解像度を導き出すために使用できるモード、またはモードの配列を指定する [`ConstrainDOMString`](#constraindomstring) オブジェクト。許可される値は `none` と `crop-and-scale` です。`none` はユーザーエージェントがカメラ、そのドライバー、または OS によって提供される解像度を使用することを意味します。`crop-and-scale` は、解像度に影響する他の制約を満たすために、ユーザーエージェントがカメラ出力の切り抜きとダウンスケーリングを使用できることを意味します。

### 共有画面トラックのインスタンスプロパティ

これらの制約は、画面共有用のストリームを取得するために {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} に渡されるオブジェクトの `video` プロパティに適用されます。

- {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}
  - : ユーザーが選択可能な表示面の種類を指定する [`ConstrainDOMString`](#constraindomstring)。以下の文字列のいずれか 1 つ、または複数のソース表示面を許可するリストを指定できます。
    - `browser`
      - : ストリームには、ユーザーが選択した単一のブラウザータブの内容が含まれます。
    - `monitor`
      - : ストリームの動画トラックには、ユーザーの 1 つ以上の画面全体の内容が含まれます。
    - `window`
      - : ストリームには、ユーザーが共有用に選択した単一のウィンドウが含まれます。

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}
  - : ディスプレイ領域に直接対応しないソース表面の選択を許可するかどうかを示す単一の真偽値、またはそのセットを含む [`ConstrainBoolean`](#constrainboolean) 値。これには、他のウィンドウに隠されたウィンドウの内容をキャプチャできるようにするウィンドウのバッキングバッファや、ウィンドウ内で全体を表示するためにスクロールが必要な大きなドキュメントを含むバッファが含まれる場合があります。

- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} {{Experimental_Inline}}
  - : 制約可能プロパティ {{domxref("MediaTrackSettings.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} の値に課される要求または必須の制約を記述する [`ConstrainBoolean`](#constrainboolean) 値。このプロパティは、タブがキャプチャされたときにタブ内で再生される音声がユーザーのローカルスピーカーから引き続き再生されるかどうかを制御します。

## 仕様書

{{Specifications}}

## 関連情報

- [メディアキャプチャとストリーム API (メディアストリーム)](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)
- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
