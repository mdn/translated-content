---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

**`MediaTrackConstraints`** 辞書は、一連のメディア機能と、それぞれが取り得る値を記述するために使用されます。

制約辞書を {{domxref("MediaStreamTrack")}} インターフェイスの {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} メソッドに渡すことで、スクリプトはトラックに対して正確に一致する（必須の）値や範囲、または優先する値や値の範囲のセットを設定できます。

最後に要求されたカスタム制約のセットは、{{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} を呼び出すことで取得できます。

この型のオブジェクトは、次のメソッドにも渡せます。

- カメラやマイクなどのハードウェアから要求するメディアストリームの制約を指定する {{domxref("MediaDevices.getUserMedia()")}} メソッド。

- 画面またはウィンドウのキャプチャで取得するメディアストリームの制約を指定する {{domxref("MediaDevices.getDisplayMedia()")}} メソッド。

## 制約

以下の型は、プロパティに対する制約を指定するために使用されます。
これらを使用すると、そのうちどれか 1 つがパラメーターの値となる `exact` 値を 1 つ以上指定したり、可能であれば使用される `ideal` 値のセットを指定したりできます。
また、単一の値（または値の配列）を指定することもでき、ユーザーエージェントは、より厳しい制約がすべて適用された後に、その値にできる限り一致させます。

制約の仕組みについて詳しく知りたい場合は、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)を参照してください。

> [!NOTE]
> `min` および `exact` 値は、{{domxref("MediaDevices.getDisplayMedia()")}} の呼び出しで使用する制約では許可されておらず、`TypeError` が発生します。
> ただし、これらは {{domxref("MediaStreamTrack.applyConstraints()")}} の呼び出しで使用する制約では許可されています。

### ConstrainBoolean

`ConstrainBoolean` 制約型は、値が論理値であるプロパティの制約を指定するために使用されます。
その値には論理値 (`true` または `false`)、または次のプロパティを含むオブジェクトを設定できます。

- `exact`
  - : プロパティの値でなければならない論理値です。
    プロパティをこの値に設定できない場合、一致に失敗します。
- `ideal`
  - : プロパティの理想的な値を指定する論理値です。
    可能であればこの値が使用されますが、不可能な場合、ユーザーエージェントは最も近い値を使用します。

### ConstrainBooleanOrDOMString

`ConstrainBooleanOrDOMString` 制約型は、値が論理値または文字列であるプロパティの制約を指定するために使用されます。
値には [`ConstrainBoolean`](#constrainboolean) と [`ConstrainDOMString`](#constraindomstring) の節で指定されているものを設定できます。

### ConstrainDouble

`ConstrainDouble` 制約型は、値が倍精度浮動小数点数であるプロパティの制約を指定するために使用されます。
その値には数値、または次のプロパティを含むオブジェクトを設定できます。

- `max`
  - : プロパティの値として許容できる最大値を指定する十進数です。
    値をこの値以下にできない場合、一致に失敗します。
- `min`
  - : プロパティの値として許容できる最小値を指定する十進数です。
    値をこの値以上にできない場合、一致に失敗します。
- `exact`
  - : プロパティが許容されるために持つ必要がある、特定の必須値を指定する十進数です。
- `ideal`
  - : プロパティの理想的な値を指定する十進数です。
    可能であればこの値が使用されますが、不可能な場合、ユーザーエージェントは最も近い値を使用します。

### ConstrainDOMString

`ConstrainDOMString` 制約型は、値が文字列であるプロパティの制約を指定するために使用されます。
その値には文字列、文字列の配列、または次のプロパティを含むオブジェクトを設定できます。

- `exact`
  - : プロパティの値でなければならない文字列、またはそのうち 1 つがプロパティの値でなければならない文字列の配列です。
    プロパティを一覧の値のいずれかに設定できない場合、一致に失敗します。
- `ideal`
  - : プロパティの理想的な値を指定する文字列またはその配列です。
    可能であれば一覧の値のいずれかが使用されますが、不可能な場合、ユーザーエージェントは最も近い値を使用します。

### ConstrainULong

`ConstrainULong` 制約型は、値が整数であるプロパティの制約を指定するために使用されます。
その値には数値、または次のプロパティを含むオブジェクトを設定できます。

- `max`
  - : プロパティの値として許容できる最大値を指定する整数です。
    値をこの値以下にできない場合、一致に失敗します。
- `min`
  - : プロパティの値として許容できる最小値を指定する整数です。
    値をこの値以上にできない場合、一致に失敗します。
- `exact`
  - : プロパティが受け入れる必要がある、要求された特定の値を指定する整数です。
- `ideal`
  - : プロパティの理想的な値を指定する整数です。
    可能であればこの値が使用されますが、不可能な場合、ユーザーエージェントは最も近い値を使用します。

## インスタンスプロパティ

以下のプロパティのうち、いくつかの組み合わせがオブジェクトに存在しますが、必ずしもすべてではありません。
これは、特定のブラウザーがそのプロパティに対応していないか、そのプロパティが該当しないためです。
たとえば、{{Glossary("RTP")}} は WebRTC 接続のネゴシエーション中にこれらの値の一部を提供しません。
そのため、{{domxref("RTCPeerConnection")}} に関連付けられたトラックには、{{domxref("MediaTrackConstraints.facingMode", "facingMode")}} や {{domxref("MediaTrackConstraints.groupId", "groupId")}} などの特定の値が含まれません。

### すべてのメディアトラックのインスタンスプロパティ

- {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}
  - : 受け入れ可能または要求される機器 ID、または機器 ID の配列を指定する [`ConstrainDOMString`](#constraindomstring) オブジェクト。
- {{domxref("MediaTrackConstraints.groupId", "groupId")}}
  - : 受け入れ可能または要求されるグループ ID、またはグループ ID の配列を指定する [`ConstrainDOMString`](#constraindomstring) オブジェクト。

### 音声トラックのインスタンスプロパティ

- {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}
  - : 自動ゲインコントロールを希望または要求するかを指定する [`ConstrainBoolean`](#constrainboolean) オブジェクト。
- {{domxref("MediaTrackConstraints.channelCount", "channelCount")}}
  - : 受け入れ可能または要求されるチャンネル数、またはチャンネル数の範囲を指定する [`ConstrainULong`](#constrainulong)。
- {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}
  - : エコーキャンセリングを希望または要求するか、また対応している場合はその種類を指定する [`ConstrainBooleanOrDOMString`](#constrainbooleanordomstring) オブジェクト。
- {{domxref("MediaTrackConstraints.latency", "latency")}}
  - : 受け入れ可能または要求される遅延、または遅延の範囲を指定する [`ConstrainDouble`](#constraindouble)。
- {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}
  - : ノイズ抑制を希望または要求するかを指定する [`ConstrainBoolean`](#constrainboolean) オブジェクト。
- {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}
  - : 受け入れ可能または要求されるサンプリングレート、またはサンプリングレートの範囲を指定する [`ConstrainULong`](#constrainulong)。
- {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}
  - : 受け入れ可能または要求されるサンプルサイズ、またはサンプルサイズの範囲を指定する [`ConstrainULong`](#constrainulong)。
- {{domxref("MediaTrackConstraints.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 受け入れ可能または要求される音量、または音量の範囲を指定する [`ConstrainDouble`](#constraindouble)。

### 画像トラックのインスタンスプロパティ

- `whiteBalanceMode`
  - : 文字列 ({{jsxref("String")}}) で、`"none"`、`"manual"`、`"single-shot"`、`"continuous"` のいずれかを指定します。
- `exposureMode`
  - : 文字列 ({{jsxref("String")}}) で、`"none"`、`"manual"`、`"single-shot"`、`"continuous"` のいずれかを指定します。
- `focusMode`
  - : 文字列 ({{jsxref("String")}}) で、`"none"`、`"manual"`、`"single-shot"`、`"continuous"` のいずれかを指定します。
- `pointsOfInterest`
  - : センサー上の 1 つ以上の関心点のピクセル座標です。
    これは { x:_値_, y:_値_ } の形式のオブジェクト、またはそのようなオブジェクトの配列で、_値_ は倍精度整数です。
- `exposureCompensation`
  - : ±3 までの F 値調整を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `colorTemperature`
  - : 希望する色温度をケルビンで指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `iso`
  - : 希望する ISO 設定を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `brightness`
  - : 希望する明るさ設定を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `contrast`
  - : 明暗の差の度合いを指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `saturation`
  - : 色の強さの度合いを指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `sharpness`
  - : エッジの強さを指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `focusDistance`
  - : フォーカスされたオブジェクトまでの距離を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `zoom`
  - : 希望する焦点距離を指定する [`ConstrainDouble`](#constraindouble)（倍精度整数）。
- `torch`
  - : トラックがアクティブである限りフィルライトを連続して点灯させ続けるかどうかを定義する論理値。

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
- `resizeMode`
  - : ユーザーエージェントが動画トラックの解像度とフレームレートを導き出すために使用できるモード、またはモードの配列を指定する [`ConstrainDOMString`](#constraindomstring) オブジェクトです。
    許可される値は次のとおりです。
    - `crop-and-scale`
      - : ユーザーエージェントは、ハードウェア/OS からの生の出力を切り抜いたり、解像度を縮小したりフレームレートを低下させたりして、ほかの制約を満たすことができます。
        この制約により、制約で指定した形式にハードウェアがネイティブに対応していない場合でも、開発者は解像度を下げた動画を取得できます。
    - `none`
      - : ユーザーエージェントは、基盤となるハードウェア（カメラやそのドライバーなど）または OS が提供する解像度を使用します。

    `resizeMode` が指定されていない場合、ブラウザーは、指定された制約と許可された 2 つの値の両方を考慮する[適合距離](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance)に基づいて解像度を選択します。

### 共有画面トラックのインスタンスプロパティ

これらの制約は、画面共有用のストリームを取得するために {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} に渡されるオブジェクトの `video` プロパティに適用されます。

- {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}
  - : ユーザーが選択できる表示面の種類を指定する [`ConstrainDOMString`](#constraindomstring) です。
    以下の文字列のいずれか 1 つ、または複数のソース表示面を許可するリストを指定できます。
    - `browser`
      - : ストリームには、ユーザーが選択した単一のブラウザータブの内容が含まれます。
    - `monitor`
      - : ストリームの動画トラックには、ユーザーの 1 つ以上の画面全体の内容が含まれます。
    - `window`
      - : ストリームには、ユーザーが共有用に選択した単一のウィンドウが含まれます。

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}
  - : ディスプレイ領域に直接対応しないソース表示面をユーザーが選択できるようにするかどうかを示す、単一の論理値または論理値のセットを含む [`ConstrainBoolean`](#constrainboolean) 値です。
    これには、手前にあるほかのウィンドウに隠されたウィンドウの内容をキャプチャできるようにするウィンドウのバッキングバッファや、ウィンドウ内で全体を表示するためにスクロールが必要な大きな文書を含むバッファなどがあります。

- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} {{Experimental_Inline}}
  - : 制約可能プロパティ [`suppressLocalAudioPlayback`](/ja/docs/Web/API/MediaStreamTrack/getSettings#suppresslocalaudioplayback) の値に適用する要求または必須の制約を記述する [`ConstrainBoolean`](#constrainboolean) 値です。
    このプロパティは、タブがキャプチャされたときにタブ内で再生される音声がユーザーのローカルスピーカーから引き続き再生されるかどうかを制御します。

- {{domxref("MediaTrackConstraints.restrictOwnAudio", "restrictOwnAudio")}} {{Experimental_Inline}}
  - : 制約可能プロパティ [`restrictOwnAudio`](/ja/docs/Web/API/MediaStreamTrack/getSettings#restrictownaudio) の値に適用する要求または必須の制約を指定する [`ConstrainBoolean`](#constrainboolean) 値です。
    このプロパティは、キャプチャ元のタブに由来するシステム音声を画面キャプチャから除外するかどうかを制御します。

## 仕様書

{{Specifications}}

## 関連情報

- [メディアキャプチャとストリーム API (メディアストリーム)](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)
- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
