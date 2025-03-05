---
title: "Notification: Notification() コンストラクター"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

**`Notification()`** コンストラクターは、ユーザー通知を表す新しい {{domxref("Notification")}} オブジェクトのインスタンスを生成します。

> **メモ:** {{domxref("ServiceWorkerGlobalScope")}} 内で `Notification()` コンストラクターを使用して通知を作成しようとすると、`TypeError` が発生します。代わりに {{domxref("ServiceWorkerRegistration.showNotification()")}} を使用してください。

## 構文

```js-nolint
new Notification(title)
new Notification(title, options)
```

### 引数

- `title`
  - : 通知ウィンドウの最上部に表示される、通知のためのタイトルを定義します。
- `options` {{optional_inline}}

  - : 通知に適用するカスタム設定を含むオプションオブジェクトです。使用できるオプションは以下のとおりです。

    - `dir` {{optional_inline}}
      - : 通知を表示する方向です。既定値は `auto` で、ブラウザーの言語設定の振る舞いが適用されますが、 `ltr` と `rtl` の値で振る舞いを上書きできます (ただし、ほとんどのブラウザーがこれらの設定を無視しているようですが)。
    - `lang` {{optional_inline}}
      - : {{RFC(5646, "言語を識別するタグ（BCP 47 とも）")}}を表す文字列を使って指定される通知の言語です。
        簡単なリファレンスとして [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) ページを参照してください。
        既定値は空文字列です。
    - `badge` {{optional_inline}}
      - : 文字列で、通知自体を表示する充分な空間がない場合に通知の表現に使用される画像の URL を指定します。
    - `body` {{optional_inline}}
      - : 文字列で、タイトルの下側に表示される通知の本文を表します。
        既定値は空文字列です。
    - `tag` {{optional_inline}}
      - : 通知のための識別タグを表す 文字列です。
    - `icon` {{optional_inline}}
      - : 通知の一部として表示されるアイコンのURLを含む文字列です。
    - `image` {{optional_inline}}
      - : 文字列で、通知に表示される画像の URL を指定します。
    - `data` {{optional_inline}}
      - : 通知に関連付ける任意のデータです。これはどのデータ型でも可能です。
        既定値は `null` です。
    - `vibrate` {{optional_inline}}
      - : 通知が発生したときに端末のバイブレーションハードウェアに通知する[バイブレーションパターン](/ja/docs/Web/API/Vibration_API#バイブレーションパターン)です。指定された場合、`silent` は `true` にできません。
    - `timestamp` {{optional_inline}}
      - : 数値で、通知が作成された時点または適用される時点（過去、現在、未来）を表します。
    - `renotify` {{optional_inline}}
      - : 古い通知が新しい通知に置き換えられた後、ユーザーに通知するかどうかを指定する論理値です。既定値は `false` で、通知しないことを意味します。`true` の場合、`tag` も設定する必要があります。
    - `requireInteraction` {{optional_inline}}
      - : 通知が自動的に閉じるのではなく、ユーザーがクリックするか解除するまでアクティブな状態を維持すべきであることを示します。
        既定値は `false` です。
    - `actions` {{optional_inline}}

      - : 通知で表示するアクションの配列です。配列内のそれぞれの要素は、以下のメンバーを持つオブジェクトです。

        - `action`
          - : 通知上に表示されるユーザーアクションを特定する文字列。
        - `title`
          - : ユーザーに表示するアクションテキストを含む文字列。
        - `icon` {{optional_inline}}
          - : アクションとともに表示されるアイコンの URL を含む文字列。

        適切なレスポンスは `event.action` を使用して {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} イベント内で構築されます。

    - `silent` {{optional_inline}}
      - : 通知をサイレントにするかどうかを指定する論理値です。端末の設定にかかわらず、音やバイブレーションを発しないようにします。
        既定値は `null` です。`true` の場合、 `vibrate` が存在してはいけません。

### 返値

{{domxref("Notification")}} オブジェクトのインスタンスです。

### 例外

- {{jsxref("TypeError")}}
  - : 以下の場合に例外が発生します。
    - コンストラクターが {{domxref("ServiceWorkerGlobalScope")}} の中で呼び出された場合。
    - `actions` オプションが設定されており、空であった場合。
    - `silent` オプションが `true` で、`vibrate` オプションが指定されていた場合。
    - `renotify` オプションが `true` だが、`tag` オプションが空の場合。
- `DataCloneError` {{domxref("DOMException")}}
  - : 何らかの理由で `data` オプションのシリアライズに失敗した場合に発生します。

## 例

この例は、その権限がすでに付与されている場合にのみ通知を表示させるという最も基本的なものです。より完全な例については、{{domxref("Notification")}} ページをご覧ください。

```js
if (Notification.permission === "granted") {
  const notification = new Notification("Hi there!");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Chrome の注意事項

Chrome 49 以降では、 incognito モードでは通知が動作しません。

Android 版 Chrome は `Notification` コンストラクターを呼び出すと {{jsxref("TypeError")}} を発生させます。サービスワーカーからの通知の作成にのみ対応しています。詳しくは [Chromium issue tracker](https://crbug.com/481856) をご覧ください。

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
