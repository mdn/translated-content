---
title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`Notification()`** コンストラクターは、ユーザー通知を表す新しい {{domxref("Notification")}} オブジェクトのインスタンスを生成します。

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

    - `dir`
      - : 通知を表示する方向です。既定値は `auto` で、ブラウザーの言語設定の振る舞いが適用されますが、 `ltr` と `rtl` の値で振る舞いを上書きできます (ただし、ほとんどのブラウザーがこれらの設定を無視しているようですが)。
    - `lang`
      - : {{RFC(5646, "言語を識別するタグ（BCP 47 とも）")}}を表す文字列を使って指定される通知の言語です。簡単なリファレンスとして [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) ページを参照してください。
    - `badge`
      - : 文字列で、通知自体を表示する充分な空間がない場合に通知の表現に使用される画像の URL を指定します。
    - `body`
      - : 文字列で、タイトルの下側に表示される通知の本文を表します。
    - `tag`
      - : 通知のための識別タグを表す 文字列です。
    - `icon`
      - : 通知の一部として表示されるアイコンのURLを含む文字列です。
    - `image`
      - : 文字列で、通知に表示される画像の URL を指定します。
    - `data`
      - : 通知に関連付ける任意のデータです。これはどのデータ型でも可能です。
    - `vibrate`
      - : 通知が発生したときに端末のバイブレーションハードウェアに通知する[バイブレーションパターン](/ja/docs/Web/API/Vibration_API#vibration_patterns)です。
    - `renotify`
      - : 古い通知が新しい通知に置き換えられた後、ユーザーに通知するかどうかを指定する論理値です。既定値は `false` で、通知しないことを意味します。
    - `requireInteraction`
      - : 通知が自動的に閉じるのではなく、ユーザーがクリックするか解除するまでアクティブな状態を維持すべきであることを示します。既定値は `false` です。
    - `actions`

      - : 通知で表示するアクションの配列です。配列内のそれぞれの要素は、以下のメンバーを持つオブジェクトです。

        - `action`: 通知上に表示されるユーザーアクションを特定する文字列。
        - `title`: ユーザーに表示するアクションテキストを含む文字列。
        - `icon`: アクションとともに表示されるアイコンの URL を含む文字列。

        適切なレスポンスは `event.action` を使用して {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} イベント内で構築されます。

    - `silent`
      - : 通知をサイレントにするかどうかを指定する論理値です。端末の設定にかかわらず、音やバイブレーションを発しないようにします。既定値は `false` で、サイレントではないことを意味します。

## 例

[`Emogotchi demo`](https://chrisdavidmills.github.io/emogotchi/)（[ソースコードを見る](https://github.com/chrisdavidmills/emogotchi)）では、私たちが通知を発生させたいときに、 `spawnNotification()` 関数を実行しています。関数は必要な本文、アイコン、タイトルを指定する引数を受け取り、必要な `options` オブジェクトを生成して、 `Notification()` コンストラクターを用いて通知を発生させます。

```js
function spawnNotification(body, icon, title) {
  const notification = new Notification(title, { body, icon });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Chrome の注意事項

Chrome 49 以降では、 incognito モードでは通知が動作しません。

Android 版 Chrome は `Notification` コンストラクターを呼び出すと {{jsxref("TypeError")}} を発生させます。サービスワーカーからの通知の作成にのみ対応しています。詳しくは [Chromium issue tracker](https://bugs.chromium.org/p/chromium/issues/detail?id=481856) をご覧ください。

### Internet Explorer の注意事項

バージョン 38.14352 以降の MS Edge は通知 API に対応しています。 [Wikipedia - MS Edge](https://en.wikipedia.org/wiki/Microsoft_Edge#Release_history)

IE 11 以前では対応していません。

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
