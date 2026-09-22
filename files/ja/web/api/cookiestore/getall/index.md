---
title: "CookieStore: getAll() メソッド"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

**`getAll()`** は {{domxref("CookieStore")}} インターフェイスのメソッドで、渡された名前またはオプションに一致する Cookie の配列で解決する {{jsxref("Promise")}} を返します。何も引数を渡さなければ、現在のコンテキストのすべての Cookie を返します。

## 構文

```js-nolint
getAll()
getAll(name)
getAll(options)
```

### 引数

- `name` {{optional_inline}}
  - : Cookie の名前が入っている文字列です。

または

- `options` {{optional_inline}}
  - : 以下のプロパティを持つ文字列です。
    - `name`
      - : Cookie の名前が入っている文字列です。
    - `url`
      - : Cookie の URL が入っている文字列です。

> [!NOTE]
> `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。文書からは現在の URL の Cookie しか取得できないので、文書コンテキストで有効な URL は文書の URL のみとなります。

### 返値

指定された `name` または `options` に一致する Cookie を表すオブジェクトの配列で解決する {{jsxref("Promise")}} です。

各オブジェクトは、以下のプロパティを持ちます。

- `domain`
  - : Cookie のドメインを持つ文字列です。

- `expires`
  - : Cookie の期限が入ったタイムスタンプで、ミリ秒単位の [Unix 時刻](/ja/docs/Glossary/Unix_time)です。

- `name`
  - : Cookie の名前が入った文字列です。

- `partitioned`
  - : 論理値で、 Cookie がパーティション化 Cookie であるか (`true`) そうでないか (`false`) を表します。詳しくは[個別区画化された状態を持つ Cookie (CHIPS)](/ja/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) を参照してください。

- `path`
  - : Cookie のパスが入った文字列です。

- `sameSite`
  - : [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 値（[`"strict"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict)、[`"lax"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax)、[`"none"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#none)）のいずれかです。

- `secure`
  - : 論理値で、この Cookie が保護されたコンテキストでのみ使用されるか (`true`) またはそうではないか (`false`) を示します。

- `value`
  - : この Cookie の値が入った文字列です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : オリジンが URL に{{glossary("Serialization", "シリアライズ")}}できない場合に発生します。
- {{jsxref("TypeError")}}
  - : 以下の場合に発生します。
    - このメソッドがメインスレッドで呼び出され、`url` オプションが指定されているものの、現在のウィンドウの URL と一致していない。
    - このメソッドはワーカー内で呼び出されており、`url` オプションが指定されていますが、その値はワーカーのオリジンと一致していない。
    - 指定された `name` または `options` で表される Cookie のクエリーに失敗した。

## 例

<!-- これらの例は、MDN 環境では（原因不明のエラーのため）ライブサンプルとして動作しません。 -->

### このコンテキストのすべての Cookie を取得する

この例では、現在のコンテキストにあるすべての Cookie を取得する方法を示します。
まず、テスト用 Cookie （"cookie1" および "cookie2"）を作成し、エラーが発生した場合はそれをログ出力する `setTestCookies()` を定義します。

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set("cookie2", "cookie2-value");
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }
}
```

`cookieTest()` メソッドは `setTestCookies()` を呼び出し、その後 `getAll()` の完了を待ちます。
これにより、このコンテキストのすべての Cookie をオブジェクトの配列として返す {{jsxref("Promise")}} が返されます。 Cookie がない場合は、空の配列が返されます。
返されたプロミスが Cookie 情報を含む配列で解決された場合、その配列を反復処理し、それぞれの Cookie （"cookie1" および "cookie2"）をログ出力します。

```js
async function cookieTest() {
  // Set our test cookies
  await setTestCookies();

  // Get all cookies
  const cookies = await cookieStore.getAll();

  // Iterate the cookies, or log that none were found
  if (cookies.length > 0) {
    console.log(`Found cookies: ${cookies.length}:`);
    cookies.forEach((cookie) => console.log(cookie));
  } else {
    console.log("Cookies not found");
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
