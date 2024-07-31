---
title: ServiceWorkerRegistration.showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Service Workers API")}}

`showNotification()` は {{domxref("ServiceWorkerRegistration")}} インターフェイスのメソッドで、アクティブなサービスワーカー上で通知を作成します。

> [!NOTE]
> この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

## 構文

```js-nolint
showNotification(title)
showNotification(title, options)
```

### 引数

- `title`
  - : 通知内に表示する必要があるタイトル
- `options` {{optional_inline}}

  - : 通知の設定を可能にするオブジェクト。 次のプロパティを持つことができます。

    - `actions` {{experimental_inline}}

      - : 通知に表示するアクションの配列。 配列のメンバーはオブジェクトリテラルである必要があります。 次の値が含まれる場合があります。

        - `action`
          - : 通知に表示されるユーザーアクションを識別する文字列。
        - `title`
          - : ユーザーに表示されるアクションテキストを含む文字列。
        - `icon`
          - : アクションで表示するアイコンの URL を含む文字列。

        適切なレスポンスは、 `event.action` を {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} イベントで使用することで作成されます。

    - `badge` {{experimental_inline}}
      - : 文字列で、Android の通知バーなど、通知自体を表示するのに十分なスペースがない場合に通知を表す画像の URL が入ります。Android 端末では、バッジは最大 4 倍の解像度、約 96 x 96 ピクセルの端末に対応する必要があり、画像は自動的にマスクされます。
    - `body`
      - : 通知内に表示する追加のコンテンツを表す文字列。
    - `data` {{experimental_inline}}
      - : 通知に関連付ける任意のデータ。 これは任意のデータ型にすることができます。
    - `dir`
      - : 通知の方向。 `auto`、`ltr`、`rtl` のいずれかです。
    - `icon`
      - : 通知でアイコンとして使用される画像の URL を含む文字列。
    - `image` {{experimental_inline}}
      - : 通知に表示される画像の URL を含む文字列。
    - `lang`
      - : 通知内で使用される言語を指定します。 この文字列は、{{RFC(5646, "言語識別子のタグ (BCP 47 とも呼ばれる)")}}に基づく有効なものである必要があります。
    - `renotify` {{experimental_inline}}
      - : 論理値で、`tag` 値を再利用するときにバイブレーションと可聴アラートを抑制するかどうかを示します。 *オプション*の `renotify` が `true` で、*オプション*の `tag` が空の文字列の場合、TypeError が発生します。既定値は `false` です。
    - `requireInteraction` {{experimental_inline}}
      - : 画面が十分に大きい端末では、ユーザーがクリックするか閉じるまで通知をアクティブにしておく必要があることを示します。 この値がないか `false` の場合、デスクトップ版の Chrome は約 20 秒後に通知を自動的に最小化します。既定値は `false` です。
    - `silent`
      - : 設定されている場合、音やバイブレーションは発生しないことを示します。*オプション*の `silent` が `true` で、*オプション*の `vibrate` が存在する場合、TypeError 例外が発生します。既定値は `false` です。
    - `tag`
      - : 必要に応じてスクリプトを使用して通知を検索、置換、または削除できるようにする所与の通知の ID です。
    - `timestamp`
      - : この通知に関連付けられた時刻で、ミリ秒単位の[Unix 時刻](/ja/docs/Glossary/Unix_time)で表されるタイムスタンプです。これは過去に、端末がオフラインだったためにすぐに配信できなかったメッセージに通知が使用された場合や、これから始まる会議に向けて通知が使用された場合などです。
    - `vibrate` {{experimental_inline}}
      - : 通知の表示で実行するバイブレーションパターン。 バイブレーションパターンは、メンバーが 1 つしかない配列にすることができます。 値はミリ秒単位の時間で、偶数のインデックス（0、2、4 など）は振動する時間を示し、奇数のインデックスは一時停止する時間を示します。例えば、 `[300, 100, 400]` は、 300 ミリ秒振動し、 100 ミリ秒休止してから、 400 ミリ秒振動します。

## 返値

`undefined` に解決するプロミス ({{jsxref('Promise')}}) です。

## 例

```js
navigator.serviceWorker.register("sw.js");

function showNotification() {
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("バイブレーションの例", {
          body: "ブンブン! ブンブン!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}
```

上記の関数を適切なタイミングで呼び出すには、{{domxref("ServiceWorkerGlobalScope.notificationclick_event", "onnotificationclick")}} イベントハンドラーが使用できます。

現在のサービスワーカーから発生した {{domxref("Notification")}} の詳細は、 {{domxref("ServiceWorkerRegistration.getNotifications()")}} を使用して取得することもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
