---
title: "Window: launchQueue プロパティ"
short-title: launchQueue
slug: Web/API/Window/launchQueue
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

`launchQueue` は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、 {{domxref("LaunchQueue")}} クラスへのアクセスを提供し、 [`launch_handler`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) マニフェストフィールドの `client_mode` 値で示されたコンテキストで処理することで、[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) にカスタム起動ナビゲーション処理を実装することができるようにします。

カスタム起動ナビゲーション処理機能は、 {{domxref("LaunchQueue.setConsumer()")}} コールバック関数に渡される {{domxref("LaunchParams")}} オブジェクトのプロパティによって制御されます。

## 値

{{domxref("LaunchQueue")}} オブジェクトインスタンスです。

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
        title.textContent = new URL(track).pathname.substring(1);
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

- {{domxref("Launch Handler API", "起動ハンドラー API", "", "nocode")}}
- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- `Window.launchQueue`
- [Musicr 2.0](https://launch-handler.glitch.me/) デモアプリ
