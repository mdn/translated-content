---
title: "MediaDevices: selectAudioOutput() メソッド"
short-title: selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

**`selectAudioOutput()`** は {{domxref("MediaDevices")}} インターフェイスのメソッドで、ユーザーに特定の音声出力機器、例えばスピーカーやヘッドフォンを選択するよう尋ねます。ユーザーが機器を選択すると、そのメソッドはユーザーに選択した機器を音声出力シンクとして使用するその権限を付与します。

選んだ後、その機器が利用できる場合は、{{domxref("MediaDevices.enumerateDevices()")}}を使用して列挙し、{{domxref("HTMLMediaElement.setSinkId()")}}を使用して音声出力シンクとして設定することができます。

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

      - : 以前に公開された/許可された単一の機器の ID を 表す文字列です。
        設定しない場合は、利用できるオーディオ出力機器がすべて表示されます。

        このオプションは、同じ機器を将来のセッションで既定で使用できるように、機器 ID を保存したいというアプリケーションのためのものです。
        同じ機器に対して新しいIDが返される場合があることに注意してください。また、永続的な ID は、それが `selectAudioOutput()` で正常に渡された後でなければ、{{domxref("HTMLMediaElement.setSinkId","setSinkId()")}} で使用することができません。

        > [!NOTE]
        > ユーザーエージェントは、指定された NULL ではない ID が以前のセッションで `selectAudioOutput()` によってユーザーに公開されていた場合、ユーザーへのプロンプトをスキップすることを選択することができます。
        > この場合、ユーザーエージェントは単にこの機器 ID で解決するか、同じ機器の新しい ID が変更されている場合は、それを使用することができます。
        > 以前指定した機器にその権限が与えられていたものの、その後取り消された場合、ユーザーエージェントは許可された機器をすべて表示し、指定された ID を持つ端末をハイライト表示することがあります。

### 返値

{{ jsxref("Promise") }}で、 {{domxref("MediaDeviceInfo")}} オブジェクトで履行されます。このオブジェクトは、ユーザーが選択した音声出力機器を記述します。

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

権限の状態は、[権限 API](/ja/docs/Web/API/Permissions_API) の {{domxref("Permissions.query", "navigator.permissions.query()")}} メソッドで、 `speaker-selection` 権限の権限記述子を使用することで、確認することができます。

## 例

こちらは、ボタンクリックにより起動される関数の中で `selectAudioOutput()` を使用する例です。
これは、選択された{{domxref("MediaDeviceInfo.deviceId", "機器 ID", "", "nocode")}} とラベル（もしあれば）またはエラーメッセージを出力しています。

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

- {{domxref("HTMLMediaElement.setSinkId()")}}
- {{domxref("HTMLMediaElement.sinkId")}}
- [WebRTC](/ja/docs/Web/API/WebRTC_API) - この API の紹介ページ
