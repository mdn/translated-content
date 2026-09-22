---
title: "CookieStore: set() メソッド"
short-title: set()
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

**`set()`** は {{domxref("CookieStore")}} インターフェイスのメソッドで、渡された名前またはオプションオブジェクトに一致する Cookie のリストを返します。

## 構文

```js-nolint
set(name, value)
set(options)
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name` {{optional_inline}}
  - : Cookie の名前の文字列です。
- `value` {{optional_inline}}
  - : Cookie の値の文字列です。

または

- `options` {{optional_inline}}
  - : オブジェクトは次のものを含みます。
    - `domain` {{Optional_Inline}}
      - : Cookie のドメインが入った文字列です。
    - `expires` {{Optional_Inline}}
      - : ミリ秒単位の {{glossary("Unix time","Unix 時間")}}によるタイムスタンプで、Cookie の有効期限が入ります。デフォルト値は `null` です。
    - `maxAge` {{Optional_Inline}}
      - : Cookie が失効するまでの秒数を表す数値です。0 または負の数値を指定すると、Cookie は直ちに失効します。`expires` と `maxAge` の両方が設定されている場合、`set()` の呼び出しは `TypeError` を発生させて失敗します。デフォルトは `null` です。
    - `name`
      - : Cookie の名前が入った文字列です。
    - `partitioned` {{Optional_Inline}}
      - : 論理値で、既定値は `false` です。`true` に設定すると、設定された Cookie はパーティション化された Cookie になります。詳しくは[個別区画化された状態を持つ Cookie (CHIPS)](/ja/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) を参照してください。
    - `path` {{Optional_Inline}}
      - : Cookie のパスの入った文字列です。デフォルト値は `/` です。
    - `sameSite` {{Optional_Inline}}
  - : [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 値（[`"strict"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict)、[`"lax"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax)、[`"none"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#none)）のいずれかです。
    - `value`
      - : Cookie の値が入った文字列です。

> [!NOTE]
> ここで値を設定することは可能であり、内部的にはその値が使用されますが、一部のブラウザーでは、{{domxref("CookieStore.get()")}} および {{domxref("CookieStore.getAll()")}} から `name` と `value` のオプションのみが返される場合があります。

### 返値

Cookie の設定が完了すると {{jsxref("undefined")}} に解決される {{jsxref("Promise")}} です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : オリジンが URL に{{glossary("Serialization", "シリアライズ")}}できない場合に発生します。
- {{jsxref("TypeError")}}
  - : 以下の場合に発生します。
    - `expires` プロパティと `maxAge` プロパティの両方が設定されている。
    - 指定された `name` および `value`、あるいは `options` をつけて Cookie を設定しようとしたところ、何らかの理由で失敗しした。

## 例

<!-- これらの例は、MDN 環境では（原因不明のエラーのため）ライブサンプルとして動作しません。 -->

### 名前と値をつけた Cookie の設定

この例では、`name` に "cookie1"、`value` に "cookie1-value" をそれぞれ指定して、Cookie を設定しています。
Cookie のその他のプロパティは、[`options`](#options) 引数で定義されているデフォルト値で設定されます。

コードはまず、Cookie が設定されるのを待ちます。この操作は失敗する可能性があるため、`try...catch` ブロック内で実行され、エラーが発生した場合はコンソールにログ出力されます。
その後、設定されたばかりの Cookie を取得して、コンソールにログ出力します。

```js
async function cookieTest() {
  // Set cookie: passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Get the cookie and log its values
  const cookie = await cookieStore.get("cookie1");
  console.log(cookie);
}
```

### オプションを指定して Cookie を設定

この例では、`name`、`value`、`expires`、`partitioned` を含む `options` オブジェクトを渡すことで、Cookie を設定します。
コードはまず、Cookie が設定されるのを待ちます。この操作は失敗する可能性があるため、`try...catch` ブロック内で実行され、エラーが発生した場合はコンソールに記録されます。
その後、設定されたばかりの Cookie を取得して、コンソールに記録します。

```js
async function cookieTest() {
  const day = 24 * 60 * 60 * 1000;
  const cookieName = "cookie2";
  try {
    // Set cookie: passing options
    await cookieStore.set({
      name: cookieName,
      value: `${cookieName}-value`,
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting ${cookieName}: ${error}`);
    console.log(error);
  }

  // Log the new cookie
  const cookie = await cookieStore.get(cookieName);
  console.log(cookie);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
