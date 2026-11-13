---
title: 起動ハンドラー API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

**起動ハンドラー API** (Launch Handler API) により、開発者は[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) の起動方法を制御することができます。例えば、既存のウィンドウを使用するか、新しいウィンドウを作成するか、また、アプリのターゲット起動 URL をどのように処理するかなどです。

## 概念と使用方法

[`launch_handler`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) フィールドをウェブアプリのマニフェストファイルに追加することで、アプリの起動時の動作を指定することができます。これには、 `client_mode` というサブフィールドがあり、アプリの起動方法と移動先を指定する文字列値が含まれています。例を示します。

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

指定しなかった場合、既定の `client_mode` 値は `auto` です。利用できる値は次のとおりです。

- `focus-existing`
  - : 最後に操作したウェブアプリのウィンドウの閲覧コンテキストが、起動処理のために選択されます。 これにより、 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} のコールバック関数に渡される {{domxref("LaunchParams")}} オブジェクトの {{domxref("LaunchParams.targetURL", "targetURL")}} プロパティに、ターゲットの起動URLが設定されます。 下記で説明するように、これによって、アプリの起動処理に独自の機能を設定することができます。
- `navigate-existing`
  - : ウェブアプリウィンドウで最後に操作した閲覧コンテキストが、ターゲットの起動 URL へ移動します。ターゲットの URL は、 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} を通じて引き続き利用できるため、追加のカスタム起動ナビゲーション処理を実装することができます。
- `navigate-new`
  - : ウェブアプリウィンドウに新しい閲覧コンテキストが作成され、ターゲットの起動 URL が読み込まれます。ターゲットの URL は、 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} を通じて引き続き利用できるため、追加のカスタム起動ナビゲーション処理を実装することができます。
- `auto`
  - : ユーザーエージェントは、プラットフォームに最適なものを決定します。例えば、単一のアプリインスタンスが一般的であるモバイルでは、 <code>navigate-existing</code> の方が意味がある可能性が高いですが、デスクトップのコンテキストでは、 <code>navigate-new</code> の方が意味がある可能性が高いでしょう。これは、指定された値が不正な場合に用いられる既定値です。

`focus-existing` を使用すると、 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} のコールバック関数の中でコードを記載して、 {{domxref("LaunchParams.targetURL", "targetURL")}} をカスタム処理して指定することができます。

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> [!NOTE]
> {{domxref("LaunchParams")}} には、 {{domxref("LaunchParams.files")}} プロパティもあり、これは、 [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) メソッド経由で起動ナビゲーションと共に渡されるすべてのファイルを表す、 {{domxref("FileSystemHandle")}} オブジェクトの読み取り専用の配列を返します。これにより、カスタムファイル処理の実装が可能になります。

## インターフェイス

- {{domxref("LaunchParams")}}
  - : PWA でカスタムの起動ナビゲーション処理を実装する際に使用します。 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} を呼び出して起動ナビゲーション処理機能を設定すると、 `setConsumer()` の中のコールバック関数で `LaunchParams` オブジェクトのインスタンスが渡されます。
- {{domxref("LaunchQueue")}}
  - : [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) が [`launch_handler`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) の `client_mode` 値を `focus-existing`、`navigate-new`、`navigate-existing` で起動される場合、 `LaunchQueue` は PWA にカスタム起動ナビゲーション処理を実装できる機能にアクセスできるようにします。この機能は、 {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} コールバック関数に渡される {{domxref("LaunchParams")}} オブジェクトのプロパティによって制御されます。

## 他のインターフェイスへの拡張

- {{domxref("Window.launchQueue")}}
  - : {{domxref("LaunchQueue")}} クラスへのアクセスを提供し、 [`launch_handler`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) マニフェストフィールドの `client_mode` 値で示されたコンテキストで処理することで、[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) にカスタム起動ナビゲーション処理を実装することができるようにします。

## 例

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // 再生するトラックを受け取る音楽プレーヤーアプリを想定
      const track = params.get("track");
      if (track) {
        audio.src = track;
        title.textContent = new URL(track).pathname.substr(1);
        audio.play();
      }
    }
  });
}
```

このコードは PWA に含まれ、アプリが読み込まれた際に起動時に実行されます。 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} のコールバック関数は、 {{domxref("LaunchParams.targetURL")}} から検索パラメーターを抽出し、 `track` パラメーターを探し出したら、それを使用して {{htmlelement("audio")}} 要素の `src` を設定し、これが指す音声トラックを再生します。

動作する完全なコードについては、 [Musicr 2.0](https://launch-handler.glitch.me/) デモアプリを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) デモアプリ
