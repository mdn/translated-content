---
title: LaunchParams
slug: Web/API/LaunchParams
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

**`LaunchParams`** は {{domxref("Launch Handler API", "起動ハンドラー API", "", "nocode")}} のインターフェイスで、 PWA でカスタムの起動ナビゲーション処理を実装する際に使用します。 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} を呼び出して起動ナビゲーション処理機能を設定すると、 `setConsumer()` の中のコールバック関数で `LaunchParams` オブジェクトのインスタンスが渡されます。

このようなカスタムナビゲーションは、 PWA が [`launch_handler`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) の `client_mode` の値が `focus-existing`, `navigate-new`, `navigate-existing` のいずれかの設定で起動した場合に、 {{domxref("Window.launchQueue")}} を通じて実行されます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("LaunchParams.files")}} {{ReadOnlyInline}}{{Experimental_Inline}}
  - : 起動ナビゲーションとともに [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) メソッドで渡されたすべてのファイルを表す、読み取り専用の {{domxref("FileSystemHandle")}} オブジェクト配列を返します。
- {{domxref("LaunchParams.targetURL")}} {{ReadOnlyInline}}{{Experimental_Inline}}
  - : 起動するターゲット URL を返します。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) デモアプリ
