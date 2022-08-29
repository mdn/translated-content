---
title: MediaDevices.getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
tags:
  - API
  - Audio
  - キャプチャ
  - メディア
  - メディアキャプチャとストリーム API
  - メディアストリーム API
  - MediaDevices
  - メソッド
  - 写真
  - リファレンス
  - 動画
  - WebRTC
  - getusermedia
browser-compat: api.MediaDevices.getUserMedia
translation_of: Web/API/MediaDevices/getUserMedia
---
{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

{{domxref("MediaDevices")}}**`.getUserMedia()`** メソッドは、要求された種類のメディアを含むトラックを持つ {{domxref("MediaStream")}} を生成するメディア入力を使用する許可をユーザーに求めます。

このストリームには、例えば、動画トラック（カメラ、ビデオ録画機器、画面共有サービスなどのような、ハードウェアまたは仮想ビデオソースによって生み出されるもの）、音声トラック（同様に、マイク、A/D 変換器などの物理的または仮想オーディオソースによって生み出されるもの）、その他の可能な種別を含めることができます。

これは {{domxref("MediaStream")}} オブジェクトに解決する {{jsxref("Promise")}} を返します。ユーザーが拒否した場合や、一致するメディアが利用できない場合、プロミスはそれぞれ `NotAllowedError` または `NotFoundError` の {{domxref("DOMException")}} で拒否されます。

> **Note:** ユーザーが選択する必要が全くなく、リクエストを単純に無視できる場合、返却された Promise が解決または拒否の*どちらにもならない*可能性があります。

一般的に、 {{domxref("MediaDevices")}} のシングルトンオブジェクトは以下のように、 {{domxref("navigator.mediaDevices")}} を使用してアクセスします。

```js
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch(err) {
    /* エラーを処理 */
  }
}
```

同様に、生のプロミスを直接使用すると、コードは次のようになります。

```js
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* ストリームを使用 */
})
.catch(function(err) {
  /* エラーを処理 */
});
```

> **Note:** 現在の文書が安全に読み込まれなかった場合は、 `navigator.mediaDevices` は `undefined` になり、 `getUserMedia()` を使用することはできません。[セキュリティ](#セキュリティ)の節に、この件やその他の `getUserMedia()` の使用に関するセキュリティ問題の詳細があります。

## 構文

```js
getUserMedia(constraints)
```

### 引数

- `constraints`

  - : オブジェクトで、それぞれの種類のために何らかの要件に沿って要求するメディアの種類を指定します。

    `constraints` 引数は 2 つのメンバー `video` および `audio` を持ち、要求されたメディアの種類を記述します。どちらか、または両方を指定する必要があります。ブラウザーが指定された条件に合う指定された種類を持つすべてのメディアトラックを発見できない場合、返却されたプロミスは `NotFoundError` の {{domxref("DOMException")}} で拒否されます。

    次の例は特定の要件なしに音声と動画の両方を要求します。

    ```js
    { audio: true, video: true }
    ```

    メディアの種類に `true` が指定された場合、結果のストリームはそのタイプのトラックが中にある<em>必要</em>があります。何らかの理由で含めることができない場合、 `getUserMedia()` の呼び出しはエラーが返ります。

    ユーザーのカメラやマイクについての情報は、プライバシー上の理由からアクセスできませんが、アプリケーションは追加の制約を使用することで、カメラやマイクの能力を必要に応じて要求することができます。次の例は、 1280x720 のカメラ解像度の設定を表しています。

    ```js
    {
      audio: true,
      video: { width: 1280, height: 720 }
    }
    ```

    ブラウザーはこれに忠実であろうとしますが、正確に一致するものが使用できない場合や、ユーザーがこれをオーバーライドした場合は、異なる解像度を返すことがあります。

    機能を*必要*とするには、 `min`, `max`, `exact` (つまり `min == max`) の各キーワードが使用してください。次の例は 1280x720 の最小解像度を要求します。

    ```js
    {
      audio: true,
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      }
    }
    ```

    この解像度以上のカメラがない場合、返却されたプロミスは `OverconstrainedError` として拒否され、ユーザーには通知されません。

    動作に違いが発生する理由は、 `min`, `max`, `exact` の各キーワードが本質的に必須であるためです。それに対して `ideal` と呼ばれるプレーンな値とキーワードはそうではありません。より充実したサンプルを示します。

    ```js
    {
      audio: true,
      video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 720, max: 1080 }
      }
    }
    ```

    `ideal` の値は、使用された場合は重みをもち、つまりブラウザーは ideal の値からみた[最適距離](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance)が最小になるような設定 (および、複数ある場合はカメラ) を見つけようとすることを意味します。

    プレインの値は本質的に ideal ですので、これは上記の解像度の例を以下のように書くこともできることを意味します。

    ```js
    {
      audio: true,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }
    ```

    すべての constraint が数字とは限りません。例えば、次の例はリアカメラよりもフロントカメラを (利用できるなら) を選好します。

    ```js
    { audio: true, video: { facingMode: "user" } }
    ```

    リアカメラが<em>必要</em>であれば、次のようにします。

    ```js
    { audio: true, video: { facingMode: { exact: "environment" } } }
    ```

    他の数値以外の制約として、 `deviceId` の制約があります。 `deviceId` が {{domxref("mediaDevices.enumerateDevices()")}} から分かっているのであれば、これを使用して特定の機器を要求することができます。

    ```js
    { video: { deviceId: myPreferredCameraDeviceId } }
    ```

    上記のものは要求されたカメラを返しますが、特定したカメラが利用できない場合は別なカメラを返します。また、特定のカメラが<em>必要</em>なのであれば、以下のようにすることができます。

    ```js
    { video: { deviceId: { exact: myExactCameraOrBustDeviceId } } }
    ```

### 返値

要求されたメディアが正しく取得できたときに {{domxref("MediaStream")}} を受け取るハンドラーを示す {{jsxref("Promise")}} を返します。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : ユーザーとオペレーティングシステムの両方がハードウェア機器へのアクセスを許可し、`NotReadableError` {{domxref("DOMException")}} を引き起こすようなハードウェアの問題は発生していませんが、機器を使用できない何らかの問題が発生した場合に発生します。
- `NotAllowedError`  {{domxref("DOMException")}}
  - : 要求されたソース機器の 1 つ以上が現時点で使用できない場合に発生します。これは、閲覧コンテキストが安全でない場合（つまり、ページが HTTPS ではなく HTTP を使って読み込まれた場合）に発生します。また、ユーザーが現在の閲覧インスタンスに機器へのアクセスを許可しないように指定している場合、ユーザーが現在のセッションへのアクセスを拒否している場合、またはユーザーがユーザーメディア機器へのすべてのアクセスをグローバルに拒否している場合にも発生します。[機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)によるメディア権限の管理に対応しているブラウザーでは、機能ポリシーが入力ソースへのアクセスを許可するように設定されていない場合、このエラーが返されます。

    > **Note:** 古いバージョンの仕様では、この代わりに `SecurityError` を使っていました。 `SecurityError` は新しい意味を持つようになりました。
- `NotFoundError`  {{domxref("DOMException")}}
  - : constraint で指定された機能を満たすメディアトラックの種類が見つからない場合に発生します。
- `NotReadableError`  {{domxref("DOMException")}}
  - : ユーザーが一致する機器の使用を許可したにもかかわらず、オペレーティングシステム、ブラウザー、またウェブページレベルでハードウェアエラーが発生し、機器にアクセスできない場合に発生します。
- `OverconstrainedError`  {{domxref("DOMException")}}
  - : 指定された制約の結果、要求された条件を満たす機器の候補がない場合に発生します。このエラーは `OverconstrainedError` 型のオブジェクトで、満たすことが不可能だった制約の名前を文字列値として持つ `constraint` プロパティと、問題を説明する人間が読める文字列を含む `message` プロパティを持っています。

    > **Note:** このエラーは、ユーザーが下位機器の使用許可をまだ与えていない場合でも発生するため、フィンガープリントの表面として使用される可能性があります。
- `SecurityError`  {{domxref("DOMException")}}
  - : `getUserMedia()`が呼び出された {{domxref("Document")}} において、ユーザーメディアの対応が無効な場合に発生します。ユーザーメディアの対応が有効になったり無効になったりする仕組みは、個々のユーザーエージェントに任されています。
- {{jsxref("TypeError")}}
  - : 指定された制約のリストが空であるか、すべての制約が `false` に設定されている場合に発生します。これは、安全でないコンテキストで `getUserMedia()` を呼び出そうとした場合にも発生します。これは、{{domxref("navigator.mediaDevices")}} は安全でないコンテキストでは `undefined` であるからです。

## プライバシーとセキュリティ

プライバシーに関わる重要な API として、 `getUserMedia()` の仕様は、ブラウザーが満たすべきプライバシーとセキュリティに関する広範な要件を規定しています。

`getUserMedia()` は強力な機能ですが、[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ使用できます。安全なコンテキストでは `navigator.mediaDevices` は `undefined` で、 `getUserMedia()` にアクセスすることができなくなります。安全なコンテキストとは、簡単に言うと、 HTTPS や `file:///` URL スキームを使って読み込まれたページ、あるいは `localhost` から読み込まれたページのことです。

さらに、ユーザーの音声と動画の入力にアクセスするためには、常にユーザーの許可が必要です。有効なオリジンにおけるウィンドウの最上位の文書コンテキストのみが、 `getUserMedia()` を用いて権限をリクエストすることができます。ただし、最上位のコンテキストが該当する {{HTMLElement("iframe")}} に[機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)を用いてその権限を明示的に許可した場合は例外です。そうでなければ、ユーザーは入力機器を使用する許可を求められることすらありません。

これらの要件や規則、コードが実行されているコンテキストにそれらがどのように反映されるか、そしてブラウザーがユーザーのプライバシーとセキュリティ問題をどのように管理するかについての詳細は、続きをお読みください。

### ユーザーのプライバシー

プライバシーに関わる API として、`getUserMedia()` はユーザーへの通知と許可管理に関するとても具体的な要件に仕様で拘束されています。まず、`getUserMedia()`は、ウェブカメラやマイクのような入力を集めるメディアを開く前に、常にユーザーの許可を得なければなりません。ブラウザーはドメインごとに一度だけ許可機能を提供するかもしれませんが、少なくとも最初の一回は許可を求めなければなりませんし、ユーザが継続的な権限を選択する場合は、具体的に許可しなければなりません。

同様に重要なのは、通知に関する規則です。ブラウザーは、カメラやマイクが使用されていることを示すインジケーターを、ハードウェアのインジケーター以上に表示することが義務付けられています。また、入力用機器の使用が許可されていることを示すインジケーターを、たとえその機器が現在アクティブに記録していない場合でも表示しなければなりません。

例えば Firefox では、 URL バーに点滅する赤いアイコンが表示され、録画が進行中であることを示しています。権限が設定されているが、現在録画が行われていない場合は、アイコンがグレーになります。機器の物理的なライトは、現在録画がアクティブになっているかどうかを示すために使用されます。カメラをミュートしている場合（いわゆる「フェイスミュート」）、カメラのアクティビティライトが消灯し、ミュート終了後にカメラの使用を再開する許可を破棄せずに、カメラがアクティブに録画していないことを示します。

### セキュリティ

{{Glossary("user agent", "ユーザーエージェント")}}のセキュリティ管理と制御が原因で、 `getUserMedia()` がセキュリティ関連のエラーを返す可能性はいくつかあります。

> **Note:** `getUserMedia()` のセキュリティモデルはまだいくらか流動的です。元々設計されていたセキュリティの仕組みは機能ポリシーに置き換えられつつあるため、様々なブラウザが異なる仕組みを用いて、異なるレベルのセキュリティサポートを提供しています。コードができるだけ広い範囲で互換性があることを確認するために、さまざまな機器やブラウザーで慎重にテストする必要があります。

#### 機能ポリシー

[機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)は {{Glossary("HTTP")}} のセキュリティ管理機能で、ブラウザーへの導入が進んでおり、多くのブラウザーがある程度対応しています（Firefox のように、既定で有効のものばかりとは限りませんが）。 `getUserMedia()` は、機能ポリシーの使用を必要とするメソッドの一つであり、コードはこれに対処するために準備される必要があります。
例えば、`getUserMedia()` を利用する {{HTMLElement("iframe")}} には {{htmlattrxref("allow", "iframe")}} 属性が必要になるかもしれませんし、 `getUserMedia()` を利用するページでは最終的に {{HTTPHeader("Feature-Policy")}} ヘッダーの提供が必要になるはずです。

`getUserMedia()` に適用される権限は `camera` と `microphone` の 2 つです。

例えば、 HTTP ヘッダーにこの行があると、文書と同じオリジンから読み込まれる埋め込み {{HTMLElement("iframe")}} 要素がカメラを使用できるようになります。

```
Feature-Policy: camera 'self'
```

これは、現在のオリジンと特定のオリジン https\://developer.mozilla.org のマイクへのアクセスを要求します。

```
Feature-Policy: microphone 'self' https://developer.mozilla.org
```

もし `getUserMedia()` を `<iframe>` 内で使っているなら、そのフレームだけの許可を求めることができ、これはより一般的な許可を求めるよりも明らかに安全です。ここでは、カメラとマイクの両方を使用する機能が必要であることを示しています。

```html
<iframe src="https://mycode.example.net/etc" allow="camera;microphone">
</iframe>
```

仕組みについて学ぶには、[機能ポリシーの使い方](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)のガイドを読んでください。

#### 暗号化ベースのセキュリティ

`getUserMedia()` メソッドは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)においてのみ利用可能です。安全なコンテキストとは、ブラウザーが HTTPS/TLS を使って安全に読み込まれた文書を含んでいると合理的に確信できるもので、安全でないコンテキストにさらされることは限定されています。文書が安全なコンテキストで読み込まれなかった場合、 {{domxref("navigator.mediaDevices")}} プロパティは `undefined` となり、 `getUserMedia()` へのアクセスが不可能になります。

この状態で `getUserMedia()` にアクセスしようとすると {{jsxref("TypeError")}} が発生します。

#### 文書ソースセキュリティ

`getUserMedia()` は、予期せず使用された場合やセキュリティが慎重に管理されていない場合には、明らかにセキュリティ上の問題があるため、安全なコンテキストでのみ使用することができます。次に `getUserMedia()` を呼び出そうとするような、安全でない方法で文書を読み込む方法はいくつもあります。以下は `getUserMedia()` を呼び出すことが許されない状況の例です。

- サンドボックス化された {{HTMLElement("iframe")}} 要素に読み込まれた文書は、 `<iframe>` の {{htmlattrxref("sandbox", "iframe")}} 属性が `allow-same-origin` に設定されていなければ `getUserMedia()` を呼び出すことができません。
- オリジンを持たない `data://` や `blob://` の URL を使って読み込まれた文書（例えば、これらの URL のいずれかがユーザーによってアドレスバー入力された場合）は、 `getUserMedia()` を呼び出すことができません。 JavaScript のコードから読み込まれたこれらの種類の URL は、スクリプトの権限を継承します。
- その他、 {{htmlattrxref("srcdoc", "iframe")}} 属性でフレームの内容を指定している場合など、オリジンが存在しない場合。

## 例

### 幅と高さ

この例ではカメラの解像度の設定を与えて、結果の {{domxref("MediaStream")}} オブジェクトを video 要素に割り当てます。

```js
// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
```

### 古いブラウザーでの新しい API の使用

古いブラウザーに対処するためのポリフィルで `navigator.mediaDevices.getUserMedia()` を使用する例です。このポリフィルは、制約の構文におけるレガシーの違いを修正しないので、制約がブラウザー間でうまく機能しないことを意味することに注意してください。代わりに、制約を処理する [adapter.js](https://github.com/webrtc/adapter) のポリフィルを使用することをお勧めします。

```js
// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {

    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
.then(function(stream) {
  var video = document.querySelector('video');
  // Older browsers may not have srcObject
  if ("srcObject" in video) {
    video.srcObject = stream;
  } else {
    // Avoid using this in new browsers, as it is going away.
    video.src = window.URL.createObjectURL(stream);
  }
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
```

### フレームレート

帯域幅に制限のある WebRTC 通信のようなケースでは、低フレームレートが望ましいかもしれません。

```js
var constraints = { video: { frameRate: { ideal: 10, max: 15 } } };
```

### フロントカメラとバックカメラ

携帯電話での例です。

```js
var front = false;
document.getElementById('flip-button').onclick = function() { front = !front; };

var constraints = { video: { facingMode: (front? "user" : "environment") } };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- より古い {{domxref("navigator.getUserMedia()")}} API
- {{domxref("mediaDevices.enumerateDevices()")}}:利用可能なメディア機器を列挙
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- [メディアキャプチャとストリーム API （メディアストリーム）](/ja/docs/Web/API/Media_Streams_API)
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API): 画面の内容を {{domxref("MediaStream")}} としてキャプチャ
- {{domxref("mediaDevices.getDisplayMedia()")}}: 画面の内容を含むストリームの取得
- [ウェブカメラでの写真撮影](/ja/docs/Web/API/WebRTC_API/Taking_still_photos): 動画ではなく静止画を撮るために `getUserMedia()` を使用するチュートリアル
