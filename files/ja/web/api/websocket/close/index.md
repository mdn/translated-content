---
title: WebSocket.close()
slug: Web/API/WebSocket/close
tags:
  - API
  - メソッド
  - リファレンス
  - Web API
  - WebSocket
browser-compat: api.WebSocket.close
translation_of: Web/API/WebSocket/close
---
{{APIRef("Web Sockets API")}}

**`WebSocket.close()`** メソッドは、 {{domxref("WebSocket")}} の接続、もしくは接続試行（存在した場合）を閉じます。接続がすでに `CLOSED` だった場合、このメソッドは何もしません。

> **Note:** 接続を閉じるプロセスは[クロージングハンドシェイク](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4)で始まり、 `close()` メソッドはそのクロージングハンドシェイクを開始する前に以前に送信したメッセージを破棄しません。たとえユーザーエージェントがまだそれらのメッセージを送信するのに忙しい場合でも、ハンドシェイクはメッセージが送信されてから開始されます。

## 構文

```js
WebSocket.close();
```

```js
WebSocket.close(code);
```

```js
WebSocket.close(code, reason);
```

### 引数

- `code` {{optional_inline}}
  - : 整数の [WebSocket 接続クローズコード](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)の値で、閉じられた理由を示します。
    - 指定されていない場合、接続のクローズコードが自動的に設定されます。通常のクローズの場合は `1000` に、そうでなければ [`1001`-`1015` の範囲の他の標準値](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1)に、接続が閉じられた実際の理由を示すコードが設定されます。
    - 指定された場合、この `code` 引数の値は、接続のためのクローズコードの自動設定を上書きし、代わりにカスタムコードを設定します。
    この値は整数でなければなりません。 `1000` か、あるいは `3000` から `4999` までの範囲で選択したカスタムコードでなければなりません。 `code` 値を指定する場合は、 [`reason`](#reason) 値も指定しなければなりません。

- `reason` {{optional_inline}}
  - : 独自の [WebSocket 接続が閉じた理由](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6)を提供する文字列（閉じたことについて簡潔で人間が読める散文的な説明）。この値は 123 バイト以下でなければなりません（UTF-8 でエンコードされます）。

    > **Note:** [UTF-8 は 2 から 4 バイトを使用する](/ja/docs/Glossary/UTF-8)ため、 [ASCII](/ja/docs/Glossary/ASCII) 以外の文字をエンコードすると、 123 文字の `reason` 値に ASCII 以外の文字が入っていると、 123 バイトの制限を超える可能性があります。

    `reason` の値を指定する場合は、 [`code`](#code) の値も指定してください。

### 例外

- `InvalidAccessError`
  - : [`code`](#code) が `1000` と等しい整数でも、 `3000`–`4999` の範囲の整数でもない場合に発生します。
- `SyntaxError`
  - : UTF-8 でエンコードされた [`reason`](#reason) が 123 バイトよりも長かった場合。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) （WebSocket プロトコル仕様書）
