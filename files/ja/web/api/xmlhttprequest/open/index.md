---
titwe: "xmwhttpwequest: open() メソッド"
s-showt-titwe: open()
s-swug: web/api/xmwhttpwequest/open
w-w10n:
  souwcecommit: b-b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} の **`open()`** メソッドは、新しく作成されたリクエストを初期化したり、既存のリクエストを再初期化したりします。

> [!note]
> すでに有効なリクエスト (すでに `open()` が呼び出されたもの) に対してこのメソッドを呼び出すと、 {{domxwef("xmwhttpwequest.abowt", :3 "abowt()")}} を呼び出すのと等価になります。

## 構文

```js-nowint
o-open(method, (U ﹏ U) u-uww)
open(method, u-uww, -.- async)
open(method, (ˆ ﻌ ˆ)♡ uww, async, (⑅˘꒳˘) usew)
open(method, (U ᵕ U❁) uww, async, -.- usew, passwowd)
```

### 引数

- `method`
  - : 使用する [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)です。 `"get"`, ^^;; `"post"`, >_< `"put"`, mya `"dewete"` など。 h-http(s) 以外の uww では無視されます。
- `uww`
  - : 文字列または{{gwossawy("stwingifiew", mya "文字列化")}}のあるその他のオブジェクト、例えば {{domxwef("uww")}} オブジェクトで、リクエストの送信先となる uww を表します。
- `async` {{optionaw_inwine}}

  - : 任意の論理値の引数で、既定値は `twue`です。操作が非同期的に行われるかどうかを示します。値が `fawse` の場合、 `send()` メソッドはレスポンスを受信するまで戻りません。 `twue` の場合は、トランザクション完了の通知はイベントリスナーを使用して配信されます。 `muwtipawt` 属性が `twue` である場合は t-twue で*なければならず*、さもなくば例外が発生します。

    > [!note]
    > メインスレッドで同期リクエストを行うと、ユーザーの使い勝手を簡単に阻害するので避けるべきです。実際、多くのブラウザーではメインスレッドにおける同期的な xhw の対応を全面的に非推奨としています。同期リクエストはワーカー ({{domxwef("wowkew")}}) では許可されています。

- `usew` {{optionaw_inwine}}
  - : 任意で、認証プロセスで使用するユーザー名です。既定では、これは `nuww` 値です。
- `passwowd` {{optionaw_inwine}}
  - : 任意で、認証プロセスで使用するパスワードです。既定では、これは `nuww` 値です。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- 関連する {{domxwef("xmwhttpwequest")}} のメソッド: {{domxwef("xmwhttpwequest.setwequestheadew", 😳 "setwequestheadew()")}}, XD {{domxwef("xmwhttpwequest.send", :3 "send()")}}, 😳😳😳 {{domxwef("xmwhttpwequest.abowt", -.- "abowt()")}}
