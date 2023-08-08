---
title: "MediaDevices: selectAudioOutput() メソッド"
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("WebRTC")}} {{SeeCompatTable}}

{{domxref("MediaDevices")}} の **`selectAudioOutput()`** は、ユーザーに特定の音声出力機器、例えばスピーカーやヘッドフォンを選択するよう尋ねます。
成功すると、返される {{jsxref("Promise")}} は選択された機器を記述した {{domxref("MediaDeviceInfo")}} で解決されます。

## 構文

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### 引数

- `options` {{Optional_Inline}}

  - : ユーザーへの問い合わせで提供される機器を構成するオブジェクトです。

    - `deviceId` {{Optional_Inline}}

      - : プロンプトに表示する（唯一の）機器の ID を表す文字列（既定値は ""）。

        > **メモ:** ユーザーエージェントは、指定された NULL ではない ID が以前のセッションで `selectAudioOutput()` によってユーザーに公開されていた場合、ユーザーへのプロンプトをスキップすることを選択することができます。
        > この場合、ユーザーエージェントは単にこの機器 ID で解決するか、同じ機器の新しい ID が変更されている場合は、それを使用することができます。
        >
        > これは、永続化された機器 ID を使用したいアプリケーションのためのものです。
        > この ID は {{domxref("HTMLMediaElement.setSinkId", "setSinkId()")}} で動作する前に `selectAudioOutput()` で正常に渡されなければなりません。

### 返値

{{ jsxref("Promise") }}で、プロミスが履行されると {{domxref("MediaDeviceInfo")}} オブジェクトを受け取ります。
このオブジェクトは、ユーザーが選択した音声出力デバイスを記述します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 現在のページに [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)が与えられていない場合、またはユーザーが機器を選択せずに選択プロンプトを閉じた場合に返されます。
- `NotFoundError` {{domxref("DOMException")}}
  - : 利用可能な音声出力機器がない場合に返されます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{Glossary("transient activation", "一時的な有効化")}}が発生していない場合に返されます（何らかの UI イベントから起動する必要があります）。

## セキュリティ要件

API へのアクセスは、以下の制約を受けることになります。

- このメソッドは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)で呼び出す必要があります。
- [一時的なユーザーによる有効化](/ja/docs/Web/Security/User_activation)が必要です。
  この機能が機能するためには、ユーザーがページや UI 要素を操作する必要があります。
- アクセスは HTTP の [`speaker-selection`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/midi) [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)で制限される可能性があります。
- ユーザーエージェント固有の仕組みにより、ユーザーが明示的に音声出力装置の使用許可を与えるか、または以前に許可を与えている必要があります。
  権限ポリシーによってアクセスが拒否された場合、ユーザー権限によって許可されることはないことに注意してください。

権限の状態は、[権限 API](/ja/docs/Web/API/Permissions_API) の [`navigator.permissions.query()`](/ja/docs/Web/API/Permissions/query) メソッドで、 `speaker-selection` 権限の権限記述子を使用することで、確認することができます。

## 例

こちらは、ボタンクリックにより起動される関数の中で `selectAudioOutput()` を使用する例です。
これは、選択された[デバイス ID](/ja/docs/Web/API/MediaDeviceInfo/deviceId) とラベル（もしあれば）またはエラーメッセージを出力しています。

```js
document.querySelector("#myButton").addEventListener("click", () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() not supported.");
    return;
  }

  // 選択した機器やエラーをプロンプト表示しログ出力する
  navigator.mediaDevices
    .selectAudioOutput()
    .then((device) => {
      console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
});
```

出力を選択すると、このような結果が出るかもしれません。

```bash
audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API) - この API の紹介ページ
