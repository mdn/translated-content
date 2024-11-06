---
title: 権限 API の使用
slug: Web/API/Permissions_API/Using_the_Permissions_API
l10n:
  sourceCommit: 805d398f95c9d1ad8769e65d56bbfe2a31205021
---

{{DefaultAPISidebar("Permissions API")}}

この記事では、W3C の[権限 API](/ja/docs/Web/API/Permissions_API) を使用するための基本的なガイドを提供します。 これは、現在のコンテキストに起因する API の利用許可の状態を照会するためのプログラムによる方法を提供します。

## 権限を求めるのは大変

ウェブ上の権限は必要悪であり、そしてそれらは開発者として対処するのはそれほど面白くありませんが、それに立ち向かいましょう。

従来は、様々な API が独自の権限を一貫性のない方法で扱ってきました。例えば、[通知 API](/ja/docs/Web/API/Notifications_API) は権限の状態の明示的なチェックと権限の要求を許可しますが、[位置情報 API](/ja/docs/Web/API/Geolocation) はできません。

[権限 API](/ja/docs/Web/API/Permissions_API) は、権限に関する限り、開発者がより良いユーザーエクスペリエンスを実装できるようにするためのツールを提供します。
具体的には、開発者は {{domxref("Permissions.query()")}} を使用して、現在のコンテキストで具体的な API を使用する権限が許可されているか、拒否されているか、またはプロンプトを介して特定のユーザー権限が要求されているかを調べることができます。
メインスレッドでの権限の照会は[広く対応](/ja/docs/Web/API/Permissions_API#api.navigator.permissions)しており、また、[ワーカー](/ja/docs/Web/API/Permissions_API#api.workernavigator.permissions)でも対応しています（ただし、例外もあります）。

[クリップボード API](/ja/docs/Web/API/Clipboard_API)、[通知 API](/ja/docs/Web/API/Notifications_API)、[プッシュ通知 API](/ja/docs/Web/API/Push_API)、[ウェブ MIDI API](/ja/docs/Web/API/Web_MIDI_API) など、多くの API で権限の照会が可能になりました。権限が利用できる多くの API の一覧は、[API 概要](/ja/docs/Web/API/Permissions_API#権限_api_が使える_api)で示されています。また、ブラウザーの対応については、[こちらの互換性表](/ja/docs/Web/API/Permissions_API#api.permissions)で分かります。

{{domxref("Permissions")}} には、他にも API の権限をリクエストしたり、その権限を取り消したりするメソッドがありますが、これらは非推奨（標準外、または広く対応していない）です。

## 簡単な例

この記事では、Location Finder という簡単なデモをまとめました。位置情報を使用してユーザーの現在地を照会し、それをグーグルマップに表示します。

![英国 Greenfield の地図を表示したスクリーンショット。](location-finder-with-permissions-api.png)

[サンプルをライブで実行する](https://chrisdavidmills.github.io/location-finder-permissions-api/)か、[Github でソースコードを見る](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)ことができます。 コードの大部分は単純で目立たないものです。 以下では権限 API 関連のコードを見ていきますので、他の部分を調べたい場合はコードを自分で確認してください。

### 権限 API へのアクセス

グローバルな {{domxref("Permissions")}} オブジェクトへのアクセスを許可するために、{{domxref("Navigator.permissions")}} プロパティがブラウザーに追加されました。 現在、このオブジェクトには {{domxref("Permissions.query()")}} しか含まれていませんが、最終的には権限の照会、要求、および取り消しのためのメソッドが含まれます。 下記参照。

### 権限の状態の照会

この例では、Permissions の機能は `handlePermission()` という 1 つの関数によって処理されます。 これは、{{domxref("Permissions.query()")}} を使用して権限の状態を照会することから始まります。 Promise が解決されたときに返される {{domxref("PermissionStatus")}} オブジェクトの {{domxref("PermissionStatus.state", "state")}} プロパティの値に応じて、次のように反応は異なります。

- `"granted"`（付与）
  - : \[Geolocation を有効にする（Enable Geolocation）] ボタンは非表示です。 これは、Geolocation がすでにアクティブになっている場合は必要ないためです。
- `"prompt"`（プロンプト）
  - : \[Geolocation を有効にする] ボタンは非表示です。 これは、ユーザーに Geolocation の権限を付与するように求めるプロンプトが表示される場合は必要ないためです。 {{domxref("Geolocation.getCurrentPosition()")}} 関数を実行し、ユーザーに権限を求めるプロンプトを表示します。 それは、権限が付与されている場合、`revealPosition()` 関数を実行し（地図を表示します）、権限が拒否されている場合、`positionDenied()` 関数を実行します（\[Geolocation を有効にする] ボタンを表示します）。
- `"denied"`（拒否）
  - : \[Geolocation を有効にする] ボタンを表示します（ページが最初に読み込まれたときに、権限の状態がこのオリジンに対して既に拒否に設定されている場合も、このコードにくる必要があります）。

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

{{domxref("Permissions.query()")}} メソッドは引数として `PermissionDescriptor` 辞書を取ります — これは関心のある API の名前を含みます。 いくつかの API は、既定の `PermissionDescriptor` から継承した、追加情報を含んだ、より複雑な `PermissionDescriptor` を持っています。 例えば、`PushPermissionDescriptor` には、[`userVisibleOnly`](/ja/docs/Web/API/PushManager/subscribe#parameters) が `true` か `false` かを指定する論理値も含める必要があります。

### 権限の状態の変更への対応

上記のコードには、{{domxref("PermissionStatus.change_event", "change")}} イベントを待ち受けが {{domxref("PermissionStatus")}} オブジェクトにアタッチされていることに気付くでしょう。 これにより、関心のある API の権限の状態の変更に対応できるようになります。 現時点では、状態の変化を報告しているだけです。

## まとめと今後の課題

現時点では、これは私たちがすでに持っていたもの以上のものを提供するものではありません。 権限のプロンプトから位置を決して共有しないことを選択した場合（権限を拒否した場合）、ブラウザーのメニューオプションを使用しないと権限のプロンプトに戻ることはできません。

- **Firefox**: \[ツール] > \[ページの情報] > \[サイト別設定] の順にクリックします。 \[位置情報の送信] で \[標準設定を使用する] をチェックします。
- **Chrome**: \[ハンバーガーメニュー] > \[設定] > \[詳細設定] の順にクリックします。 \[プライバシーとセキュリティ] セクションで \[サイトの設定] をクリックします。 表示されたダイアログで、\[位置情報] セクションを探し、\[アクセスする前に確認する] を選択します。 最後に、\[すべてのサイトに保存されている権限とデータを表示する] をクリックして、関心のあるサイトに付与されている権限を削除します。

サイトがその権限を強制的に[リクエスト](https://github.com/WICG/permissions-request)したり[取り消し](https://github.com/WICG/permissions-revoke)たりする機能を追加する提案がありますが、用途が不明確であることや、ブラウザーベンダーからの反対に直面していることから、あまり進展していません。 [`permissions.request()` の削除](https://github.com/w3c/permissions/issues/83)と [`permissions.revoke()` の主要な仕様書からの削除](https://github.com/w3c/permissions/issues/46)に関する議論をご覧ください。
