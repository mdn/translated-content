---
title: Audio Output Devices API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: d458c221e219591afaa91beafd544d5eb40e790b
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

**Audio Output Devices API** により、ウェブアプリケーションがユーザーに音声の再生に用いる出力デバイスを選択させることができます。

## 概念と使用法

オペレーティングシステムには、ユーザーが音声をスピーカーから再生するか、Bluetooth ヘッドセットから再生するか、もしくは他の音声出力デバイスから再生するかを選ぶことができる機能があるものが多いです。
この API は、ウェブページ内でアプリケーションが同様の機能を提供することを可能にします。

権限ポリシーで許可されている場合でも、ユーザーは一部の出力デバイスから音声を再生するべきではない場所に居る可能性があるので、特定の音声出力デバイスへのアクセスには明示的なユーザーの許可が必要です。

この API は、ドキュメントの [`Permissions-Policy`](/ja/docs/Web/HTTP/Headers/Permissions-Policy) HTTP ヘッダーの [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) ディレクティブによって許可されている場合、ユーザーが希望する音声出力デバイスを選択できるようにする [`MediaDevices.selectAudioOutput()`](/ja/docs/Web/API/MediaDevices/selectAudioOutput) メソッドを提供します。
これにより選択されたデバイスはユーザーの許可が得られるので、[`MediaDevices.enumerateDevices()`](/ja/docs/Web/API/MediaDevices/enumerateDevices) により列挙したり、[`HTMLMediaElement.setSinkId()`](/ja/docs/Web/API/HTMLMediaElement/setSinkId) により音声出力デバイスとして設定したりできるようになります。

音声デバイスは、自由に接続したり切断したりできます。
このような変化に対応したいアプリケーションは、[`devicechange` イベント](/ja/docs/Web/API/MediaDevices/devicechange_event)を監視し、[`enumerateDevices()`](/ja/docs/Web/API/MediaDevices/enumerateDevices) を用いて `sinkId` が返されたデバイスに含まれているかを判定できます。
これにより、たとえば、再生を停止したり再開したりできます。

## インターフェイス

### インターフェイスの拡張

Audio Output Devices API は以下の API を拡張し、以下の機能を追加します。

#### MediaDevices

- [`MediaDevices.selectAudioOutput()`](/ja/docs/Web/API/MediaDevices/selectAudioOutput)
  - : このメソッドは、ユーザーに特定の音声出力デバイス、たとえばスピーカーやヘッドセットを選択させます。
    デバイスを選択すると、そのデバイスを使用するユーザーの許可が得られ、ID を含むそのデバイスの情報を返します。

#### HTMLMediaElement

- [`HTMLMediaElement.setSinkId()`](/ja/docs/Web/API/HTMLMediaElement/setSinkId)
  - : このメソッドは、出力用の音声デバイスの ID を設定し、許可が得られていればそのデバイスを使用するようにします。
- [`HTMLMediaElement.sinkId`](/ja/docs/Web/API/HTMLMediaElement/sinkId)
  - : このプロパティは出力に使用されている音声デバイスの一意な ID を返します。デフォルトのユーザーエージェントデバイスが使用されている場合は空文字列を返します。

## セキュリティの要件

この API へのアクセスは、以下の制限を受けます。

- 全てのメソッドやプロパティは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ呼びだせます。

- [`MediaDevices.selectAudioOutput()`](/ja/docs/Web/API/MediaDevices/selectAudioOutput) はユーザーから選択されたデバイスを音声の出力先として使用する許可を得ます。

  - アクセスは HTTP の[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)の [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) により制限される可能性があります。
  - [ユーザーによる一時的な有効化](/ja/docs/Web/Security/User_activation)が必要です。
    このメソッドを呼び出すには、ユーザーがページまたは UI 要素を操作する必要があります。

- [`HTMLMediaElement.setSinkId()`](/ja/docs/Web/API/HTMLMediaElement/setSinkId) は許可された ID を音声の出力先として設定します。

  - アクセスは HTTP の[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)の [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) により制限される可能性があります。
  - デフォルト以外のデバイス ID を設定するにはユーザーの許可が必要です。
    - この許可は、`MediaDevices.selectAudioOutput()` によって開くプロンプトで選択することで得られます。
    - ユーザーが [`MediaDevices.getUserMedia()`](/ja/docs/Web/API/MediaDevices/getUserMedia) により既に同じグループのメディア入力デバイスを使用することを許可している場合、出力デバイスを使用する許可が暗黙的に得られます。

許可の状態は、[Permissions API](/ja/docs/Web/API/Permissions_API) の [`navigator.permissions.query()`](/ja/docs/Web/API/Permissions/query) に `speaker-selection` 権限を含む `permissionDescriptor` を渡すことで取得できます。

## 例

これは、ボタンのクリックにより呼び出される関数の中で `selectAudioOutput()` を用い、選択されたデバイスを音声の出力先に設定する例です。

このコードは、まず `selectAudioOutput()` に対応しているかを確認します。対応している場合、それを用いて出力先を選択し、[デバイス ID](/ja/docs/Web/API/MediaDeviceInfo/deviceId) を返します。
そして、音声をデフォルトの出力先を用いて再生し、`setSinkId()` を呼び出して出力先を選択されたデバイスに切り替えます。

```js
document.querySelector("#myButton").addEventListener("click", async () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() に未対応か、安全なコンテキストではありません。");
    return;
  }

  // デバイスを選択するためのプロンプトを表示する
  const audioDevice = await navigator.mediaDevices.selectAudioOutput();

  // audio 要素を作成し、デフォルトのデバイスで音声の再生を開始する
  const audio = document.createElement("audio");
  audio.src = "https://example.com/audio.mp3";
  audio.play();

  // 出力先を選択された音声出力デバイスに切り替える
  audio.setSinkId(audioDevice.deviceId);
});
```

出力の詳細を記録すると、たとえば以下の出力が得られます。

```js
console.log(
  `${audioDevice.kind}: ${audioDevice.label} id = ${audioDevice.deviceId}`,
);
// audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
