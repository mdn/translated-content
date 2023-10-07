---
title: "CookieStore: set() メソッド"
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

**`set()`** は {{domxref("CookieStore")}} インターフェイスのメソッドで、渡された名前またはオプションオブジェクトに一致する Cookie のリストを返します。

## 構文

```js-nolint
set(name, value)
set(options)
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name`
  - : Cookie の名前の文字列です。
- `value`
  - : Cookie の値の文字列です。

または

- `options`

  - : オブジェクトは次のものを含みます。

    - `domain` {{Optional_Inline}}
      - : Cookie のドメインが入った文字列です。
    - `expires` {{Optional_Inline}}
      - : ミリ秒単位の [Unix 時間](/ja/docs/Glossary/Unix_time)によるタイムスタンプで、Cookie の有効期限が入ります。
    - `name`
      - : Cookie の名前が入った文字列です。
    - `partitioned` {{Optional_Inline}}
      - : 論理値で、既定値は `false` です。`true` に設定すると、設定された Cookie はパーティション化された Cookie になります。詳しくは [Cookies Having Independent Partitioned State (CHIPS)](/ja/docs/Web/Privacy/Partitioned_cookies) を参照してください。
    - `path` {{Optional_Inline}}
      - : Cookie のパスの入った文字列です。
    - `sameSite` {{Optional_Inline}}

      - : 以下の [`SameSite`](/ja/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) のいずれかの値です。

        - `"strict"`
          - : Cookie は、ファーストパーティのコンテキストでのみ送信され、サードパーティのウェブサイトによるリクエストと一緒に送信されることはありません
        - `"lax"`
          - : Cookie は、通常のクロスサイトサブクエスト（例えば、画像やフレームをサードパーティのサイトにロードするため）には送信されません。しかし、ユーザーが元のサイト内を移動しているとき（すなわち、リンクをたどっているとき）には送信されます。
        - `"none"`
          - : Cookie は、すべてのコンテキストで送信されます。

    - `value`
      - : Cookie の値が入った文字列です。

### 返値

Cookie の設定が完了すると {{jsxref("Undefined")}} に解決される {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた値での Cookie の設定に失敗した場合に発生します。
- `SecurityError` の {{domxref("DOMException")}}
  - : オリジンが URL に {{glossary("serialize")}} されない場合に発生します。

## 例

次の例では `name`、`value`、`expires`、`domain` を持つオブジェクトを渡して Cookie を設定します。

```js
const day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + day,
  domain: "example.com",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
