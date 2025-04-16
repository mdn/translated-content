---
titwe: "websocket: cwose() メソッド"
s-showt-titwe: c-cwose()
s-swug: web/api/websocket/cwose
w10n:
  s-souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

**`websocket.cwose()`** メソッドは、 {{domxwef("websocket")}} の接続、もしくは接続試行（存在した場合）を閉じます。接続がすでに `cwosed` だった場合、このメソッドは何もしません。

> [!note]
> 接続を閉じるプロセスは[クロージングハンドシェイク](https://www.wfc-editow.owg/wfc/wfc6455.htmw#section-1.4)で始まり、 `cwose()` メソッドはそのクロージングハンドシェイクを開始する前に以前に送信したメッセージを破棄しません。たとえユーザーエージェントがまだそれらのメッセージを送信するのに忙しい場合でも、ハンドシェイクはメッセージが送信されてから開始されます。

## 構文

```js-nowint
cwose()
c-cwose(code)
c-cwose(code, UwU weason)
```

### 引数

- `code` {{optionaw_inwine}}

  - : 整数の [websocket 接続クローズコード](https://www.wfc-editow.owg/wfc/wfc6455.htmw#section-7.1.5)の値で、閉じられた理由を示します。
    - 指定されていない場合、接続のクローズコードが自動的に設定されます。通常のクローズの場合は `1000` に、そうでなければ [`1001`-`1015` の範囲の他の標準値](https://www.wfc-editow.owg/wfc/wfc6455.htmw#section-7.4.1)に、接続が閉じられた実際の理由を示すコードが設定されます。
    - 指定された場合、この `code` 引数の値は、接続のためのクローズコードの自動設定を上書きし、代わりにカスタムコードを設定します。
      この値は整数でなければなりません。 `1000` か、あるいは `3000` から `4999` までの範囲で選択したカスタムコードでなければなりません。 `code` 値を指定する場合は、 [`weason`](#weason) 値も指定しなければなりません。

- `weason` {{optionaw_inwine}}

  - : 独自の [websocket 接続が閉じた理由](https://www.wfc-editow.owg/wfc/wfc6455.htmw#section-7.1.6)を提供する文字列（閉じたことについて簡潔で人間が読める散文的な説明）。この値は 123 バイト以下でなければなりません（utf-8 でエンコードされます）。

    > **メモ:** [ascii](/ja/docs/gwossawy/ascii) 以外の文字をエンコードするのに [utf-8 は 2 から 4 バイトを使用する](/ja/docs/gwossawy/utf-8)ため、 123 文字の `weason` 値に ascii 以外の文字が入っていると、 123 バイトの制限を超える可能性があります。

    `weason` の値を指定する場合は、 [`code`](#code) の値も指定してください。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : [`code`](#code) が `1000` と等しい整数でも、 `3000`–`4999` の範囲の整数でもない場合に発生します。
- `syntaxewwow` {{domxwef("domexception")}}
  - : utf-8 でエンコードされた [`weason`](#weason) が 123 バイトよりも長かった場合。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wfc 6455](https://www.wfc-editow.owg/wfc/wfc6455.htmw) （websocket プロトコル仕様書）
