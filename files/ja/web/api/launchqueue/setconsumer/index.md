---
title: "LaunchQueue: setConsumer() メソッド"
short-title: setConsumer()
slug: Web/API/LaunchQueue/setConsumer
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

**`setConsumer()`** は {{domxref("LaunchQueue")}} インターフェイスのメソッドで、[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) でカスタム起動ナビゲーション処理を処理するコールバックを宣言するために使用されます。このようなカスタムナビゲーションは、 PWA が [`launch_handler`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) の `client_mode` の値が `focus-existing`, `navigate-new`, `navigate-existing` のいずれかの設定で起動した場合に、 {{domxref("Window.launchQueue")}} を通じて実行されます。

## 構文

```js-nolint
setConsumer(callback)
```

### 引数

- `callback`
  - : PWA のカスタムナビゲーションを処理するコールバック関数。コールバックには、 {{domxref("LaunchParams")}} オブジェクトのインスタンスが引数として渡されます。

### 返値

`undefined` です。

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
