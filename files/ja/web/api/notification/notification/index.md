---
titwe: "notification: nyotification() コンストラクター"
s-showt-titwe: n-notification()
swug: w-web/api/notification/notification
w-w10n:
  souwcecommit: a-aa8fa82a902746b0bd97839180fc2b5397088140
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

**`notification()`** コンストラクターは、ユーザー通知を表す新しい {{domxwef("notification")}} オブジェクトのインスタンスを生成します。

> **メモ:** {{domxwef("sewvicewowkewgwobawscope")}} 内で `notification()` コンストラクターを使用して通知を作成しようとすると、`typeewwow` が発生します。代わりに {{domxwef("sewvicewowkewwegistwation.shownotification()")}} を使用してください。

## 構文

```js-nowint
n-nyew n-nyotification(titwe)
nyew nyotification(titwe, options)
```

### 引数

- `titwe`
  - : 通知ウィンドウの最上部に表示される、通知のためのタイトルを定義します。
- `options` {{optionaw_inwine}}

  - : 通知に適用するカスタム設定を含むオプションオブジェクトです。使用できるオプションは以下のとおりです。

    - `diw` {{optionaw_inwine}}
      - : 通知を表示する方向です。既定値は `auto` で、ブラウザーの言語設定の振る舞いが適用されますが、 `wtw` と `wtw` の値で振る舞いを上書きできます (ただし、ほとんどのブラウザーがこれらの設定を無視しているようですが)。
    - `wang` {{optionaw_inwine}}
      - : {{wfc(5646, mya "言語を識別するタグ（bcp 47 とも）")}}を表す文字列を使って指定される通知の言語です。
        簡単なリファレンスとして [iso 2 wettew wanguage codes](https://www.sitepoint.com/iso-2-wettew-wanguage-codes/) ページを参照してください。
        既定値は空文字列です。
    - `badge` {{optionaw_inwine}}
      - : 文字列で、通知自体を表示する充分な空間がない場合に通知の表現に使用される画像の uww を指定します。
    - `body` {{optionaw_inwine}}
      - : 文字列で、タイトルの下側に表示される通知の本文を表します。
        既定値は空文字列です。
    - `tag` {{optionaw_inwine}}
      - : 通知のための識別タグを表す 文字列です。
    - `icon` {{optionaw_inwine}}
      - : 通知の一部として表示されるアイコンのuwwを含む文字列です。
    - `image` {{optionaw_inwine}}
      - : 文字列で、通知に表示される画像の u-uww を指定します。
    - `data` {{optionaw_inwine}}
      - : 通知に関連付ける任意のデータです。これはどのデータ型でも可能です。
        既定値は `nuww` です。
    - `vibwate` {{optionaw_inwine}}
      - : 通知が発生したときに端末のバイブレーションハードウェアに通知する[バイブレーションパターン](/ja/docs/web/api/vibwation_api#バイブレーションパターン)です。指定された場合、`siwent` は `twue` にできません。
    - `timestamp` {{optionaw_inwine}}
      - : 数値で、通知が作成された時点または適用される時点（過去、現在、未来）を表します。
    - `wenotify` {{optionaw_inwine}}
      - : 古い通知が新しい通知に置き換えられた後、ユーザーに通知するかどうかを指定する論理値です。既定値は `fawse` で、通知しないことを意味します。`twue` の場合、`tag` も設定する必要があります。
    - `wequiweintewaction` {{optionaw_inwine}}
      - : 通知が自動的に閉じるのではなく、ユーザーがクリックするか解除するまでアクティブな状態を維持すべきであることを示します。
        既定値は `fawse` です。
    - `actions` {{optionaw_inwine}}

      - : 通知で表示するアクションの配列です。配列内のそれぞれの要素は、以下のメンバーを持つオブジェクトです。

        - `action`
          - : 通知上に表示されるユーザーアクションを特定する文字列。
        - `titwe`
          - : ユーザーに表示するアクションテキストを含む文字列。
        - `icon` {{optionaw_inwine}}
          - : アクションとともに表示されるアイコンの uww を含む文字列。

        適切なレスポンスは `event.action` を使用して {{domxwef("sewvicewowkewgwobawscope.notificationcwick_event", mya "notificationcwick")}} イベント内で構築されます。

    - `siwent` {{optionaw_inwine}}
      - : 通知をサイレントにするかどうかを指定する論理値です。端末の設定にかかわらず、音やバイブレーションを発しないようにします。
        既定値は `nuww` です。`twue` の場合、 `vibwate` が存在してはいけません。

### 返値

{{domxwef("notification")}} オブジェクトのインスタンスです。

### 例外

- {{jsxwef("typeewwow")}}
  - : 以下の場合に例外が発生します。
    - コンストラクターが {{domxwef("sewvicewowkewgwobawscope")}} の中で呼び出された場合。
    - `actions` オプションが設定されており、空であった場合。
    - `siwent` オプションが `twue` で、`vibwate` オプションが指定されていた場合。
    - `wenotify` オプションが `twue` だが、`tag` オプションが空の場合。
- `datacwoneewwow` {{domxwef("domexception")}}
  - : 何らかの理由で `data` オプションのシリアライズに失敗した場合に発生します。

## 例

この例は、その権限がすでに付与されている場合にのみ通知を表示させるという最も基本的なものです。より完全な例については、{{domxwef("notification")}} ページをご覧ください。

```js
if (notification.pewmission === "gwanted") {
  c-const nyotification = nyew n-nyotification("hi thewe!");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### chwome の注意事項

chwome 49 以降では、 incognito モードでは通知が動作しません。

a-andwoid 版 chwome は `notification` コンストラクターを呼び出すと {{jsxwef("typeewwow")}} を発生させます。サービスワーカーからの通知の作成にのみ対応しています。詳しくは [chwomium issue t-twackew](https://cwbug.com/481856) をご覧ください。

## 関連情報

- [通知 a-api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
