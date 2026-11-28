---
title: 権限 API の使用
slug: Web/API/Permissions_API/Using_the_Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}

この記事では、[権限 API](/ja/docs/Web/API/Permissions_API) を使用するための基本的なガイドを提供します。この API は、現在のコンテキストに関連付けられた API 権限の状態をプログラムから照会する方法を提供します。

## 権限を求めるのは大変

ウェブ上の権限は必要悪ですが、開発者にとって扱うのが楽しいものではありません。

従来は、様々な API が独自の権限を一貫性のない方法で扱ってきました。例えば、[通知 API](/ja/docs/Web/API/Notifications_API) は権限状態を確認したり権限を要求したりする独自のメソッドを提供していましたが、[位置情報 API](/ja/docs/Web/API/Geolocation_API) にはありませんでした。

[権限 API](/ja/docs/Web/API/Permissions_API) は、権限を扱う際に一貫した方法を提供し、開発者がより良いユーザーエクスペリエンスを実装できるようにします。
具体的には、開発者は {{domxref("Permissions.query()")}} を使用して、現在のコンテキストで特定の API を使用する権限が付与されているか、拒否されているか、またはプロンプトを介したユーザーの個別の許可が必要かを確認できます。
メインスレッドでの権限の照会は[広く対応](/ja/docs/Web/API/Permissions_API#api.navigator.permissions)しており、また、[ワーカー](/ja/docs/Web/API/Permissions_API#api.workernavigator.permissions)でも対応しています（ただし、例外もあります）。

[クリップボード API](/ja/docs/Web/API/Clipboard_API)、[通知 API](/ja/docs/Web/API/Notifications_API)、[プッシュ通知 API](/ja/docs/Web/API/Push_API)、[ウェブ MIDI API](/ja/docs/Web/API/Web_MIDI_API) など、多くの API で権限の照会が可能になりました。権限に対応している API の一覧は [API 概要](/ja/docs/Web/API/Permissions_API#権限_api_で照会できる_api) にあります。また、ブラウザーの対応状況は[互換性表](/ja/docs/Web/API/Permissions_API#api.permissions)で確認できます。

{{domxref("Permissions")}} には、他にも API の権限をリクエストしたり、その権限を取り消したりするメソッドがありますが、これらは非推奨（標準外、または広く対応していない）です。

## 簡単な例

この記事では、Location Finder という簡単なデモを用意しました。位置情報を使用してユーザーの現在地を照会し、Google マップに表示します。

![英国 Greenfield の地図を表示したスクリーンショット。](location-finder-with-permissions-api.png)

[サンプルをライブで実行する](https://chrisdavidmills.github.io/location-finder-permissions-api/)か、[GitHub でソースコードを見る](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)ことができます。コードの大部分は単純で特に目立ったものではありません。以下では権限 API 関連のコードを見ていきます。他の部分を調べたい場合は、コードを自分で確認してください。

### 権限 API へのアクセス

グローバルな {{domxref("Permissions")}} オブジェクトにアクセスするため、{{domxref("Navigator.permissions")}} プロパティがブラウザーに追加されました。現在、このオブジェクトには {{domxref("Permissions.query()")}} しか含まれていませんが、将来的には権限の照会、要求、取り消しのためのメソッドも含まれる予定です。詳細は以下を参照してください。

### 権限の状態の照会

この例では、Permissions の機能は `handlePermission()` という 1 つの関数で処理されます。この関数は、{{domxref("Permissions.query()")}} を使用して権限状態を照会します。プロミスが解決されたときに返される {{domxref("PermissionStatus")}} オブジェクトの {{domxref("PermissionStatus.state", "state")}} プロパティの値に応じて、次のように動作が異なります。

- `"granted"`（付与）
  - : "Enable Geolocation" ボタンは非表示です。Geolocation がすでに有効な場合、このボタンは必要ありません。
- `"prompt"`（プロンプト）
  - : ユーザーに Geolocation の権限を求めるプロンプトが表示されるため、"Enable Geolocation" ボタンは非表示になります。{{domxref("Geolocation.getCurrentPosition()")}} 関数を実行すると、ユーザーに権限を求めるプロンプトが表示されます。権限が付与された場合は `revealPosition()` 関数が実行され（地図が表示されます）、拒否された場合は `positionDenied()` 関数が実行され（"Enable Geolocation" ボタンが表示され）ます。
- `"denied"`（拒否）
  - : "Enable Geolocation" ボタンを表示します（ページの初回読み込み時に、このオリジンの権限状態がすでに拒否に設定されている場合も、このコードを実行する必要があります）。

```js
function handlePermission() {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
      report(result.state);
      geoBtn.style.display = "none";
    } else if (result.state === "prompt") {
      report(result.state);
      geoBtn.style.display = "none";
      navigator.geolocation.getCurrentPosition(
        revealPosition,
        positionDenied,
        geoSettings,
      );
    } else if (result.state === "denied") {
      report(result.state);
      geoBtn.style.display = "inline";
    }
    result.addEventListener("change", () => {
      report(result.state);
    });
  });
}

function report(state) {
  console.log(`Permission ${state}`);
}

handlePermission();
```

### 権限記述子

{{domxref("Permissions.query()")}} メソッドは、対象の API 名を含む `PermissionDescriptor` 辞書を引数として取ります。一部の API は、デフォルトの `PermissionDescriptor` を継承し、追加情報を含む複雑な `PermissionDescriptor` を持ちます。例えば、`PushPermissionDescriptor` には、[`userVisibleOnly`](/ja/docs/Web/API/PushManager/subscribe#parameters) を `true` または `false` に設定する論理値も含める必要があります。

### 権限の状態の変更への対応

上記のコードでは、{{domxref("PermissionStatus")}} オブジェクトに {{domxref("PermissionStatus.change_event", "change")}} イベントのリスナーを登録しています。これにより、対象の API の権限状態が変化したときに対応できます。現時点では、状態の変化を報告しているだけです。
