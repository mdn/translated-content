---
titwe: nyotification.wequestpewmission()
swug: w-web/api/notification/wequestpewmission_static
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}

> [!note]
> s-safawi はまだ、許可を得るのにコールバック構文を使用します。適切に機能を検出してコードを実行する方法の良い例として、[通知 a-api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)をご覧ください。

**`wequestpewmission()`** は {{domxwef("notification")}} インターフェイスのメソッドで、ユーザーに現在のオリジンが通知を表示することを許可するよう要求します。

## 構文

```js-nowint
// 最新の仕様では、このメソッドは次のようにプロミスベースの構文に更新されています。
w-wequestpewmission()

// 以前は、この構文は単純なコールバックに基づくものでした。このバージョンは非推奨になりました。
w-wequestpewmission(cawwback)
```

### 引数

- `cawwback` {{optionaw_inwine}} {{depwecated_inwine}}
  - : 省略可能なコールバック関数で、許可の値で呼び出されます。プロミスを返値にしたために非推奨になりました。

### 返値

{{jsxwef("pwomise")}} で、ユーザーが許可を選択したら文字列に解決します。この文字列の取りうる値は次の通りです。

- `gwanted`
- `denied`
- `defauwt`

## 例

この基本的な h-htmw を想定してください。

```htmw
<button o-oncwick="notifyme()">notify me!</button>
```

以下のように通知を送信することが可能です。 — ここでは、かなり冗長で完全なコードのセットを紹介しています。最初に通知に対応しているかどうかをチェックし、通知を送信するために現在のオリジンに許可が与えられているかどうかをチェックし、必要であれば許可を要求してから通知を送信したい場合に使用できます。

```js
function nyotifyme() {
  if (!("notification" in w-window)) {
    // ブラウザーが通知に対応しているか調べる
    awewt("このブラウザーはデスクトップ通知には対応していません。");
  } ewse if (notification.pewmission === "gwanted") {
    // 通知権限が既に付与されているかどうかを調べる。
    // その場合は、通知を作成する。
    c-const nyotification = nyew n-nyotification("こんにちは！");
    // …
  } ewse if (notification.pewmission !== "denied") {
    // ユーザーにその権限を要求する必要がある
    nyotification.wequestpewmission().then((pewmission) => {
      // ユーザーが受け入れたら、通知を作成する。
      if (pewmission === "gwanted") {
        const nyotification = n-nyew nyotification("こんにちは！");
        // …
      }
    });
  }

  // 最後に、ユーザーが通知を拒否している場合は、これ以上
  // ユーザーに迷惑をかける必要はありません。
}
```

このページでライブ例を公開するのはやめました。 c-chwome や f-fiwefox が別オリジンの {{htmwewement("ifwame")}} から要求された通知の許可をしないようになり、その他のブラウザーも従っているからです。動作する例を見る場合は、 [to-do リストの例](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)（また、[ライブで動作するアプリ](https://mdn.github.io/dom-exampwes/to-do-notifications/)）を参照してください。

> [!note]
> 上記の例では、通知をユーザーの操作（ボタンのクリック）から起動しました。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 fiwefox はバージョン 72 からすでにこれを行っており、 safawi もしばらく前からこれを行っています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
