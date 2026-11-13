---
title: LaunchQueue
slug: Web/API/LaunchQueue
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

**`LaunchQueue`** は{{domxref("Launch Handler API", "起動ハンドラー API", "", "nocode")}} のインターフェイスで、 {{domxref("Window.launchQueue")}} プロパティを介して利用できます。[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) が [`launch_handler`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) の `client_mode` 値を `focus-existing`、`navigate-new`、`navigate-existing` で起動される場合、 `LaunchQueue` は PWA にカスタム起動ナビゲーション処理を実装できる機能にアクセスできるようにします。この機能は、 {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} コールバック関数に渡される {{domxref("LaunchParams")}} オブジェクトのプロパティによってコントロールされます。

{{InheritanceDiagram}}

## インスタンスメソッド

- {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} {{Experimental_Inline}}
  - : PWA のカスタム起動ナビゲーションを処理するコールバック関数が含まれています。

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
