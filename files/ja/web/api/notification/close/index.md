---
title: Notification.close()
slug: Web/API/Notification/close
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

`close()` は {{domxref("Notification")}} インターフェイスのメソッドで、表示された通知を閉じたり削除したりするために使用されます。

> [!NOTE]
> この API は、一定時間経過後に通知を画面から消去するだけのために使用すべきではありません。通知が最初に表示された後にユーザーがそれとやりとりすることを防ぐため、このメソッドは通知トレイからも通知を削除するためです。この API の正しい使用方法は、ユーザーに関係がなくなった通知を除去することです（例えば、メッセージアプリなどで、ユーザーが既にウェブページ上の通知を読んだ場合や、音楽アプリですでに次の曲が始まっているため、曲の変更を行うための通知を閉じるなど）。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下のスニペットは、呼び出されたときに `options` オブジェクトと、それから新しい通知を生成します。を生成し、関数の末尾で、 `close()` を {{domxref("EventTarget.addEventListener","addEventListener()")}} 関数の中で呼び出し、関連するコンテンツがウェブページで既読になったときに通知を除去します。

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };

  const n = new Notification(theTitle, options);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      // The tab has become visible so clear the now-stale Notification.
      n.close();
    }
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
