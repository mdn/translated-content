---
title: "CookieStore: get() メソッド"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

**`get()`** は {{domxref("CookieStore")}} インターフェイスのメソッドは、指定された `name` または `options` オブジェクトに一致する単一の Cookie に解決される {{jsxref("Promise")}} を返します。このメソッドは、一致する最初の Cookie を返します。

## 構文

```js-nolint
get(name)
get(options)
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name` {{optional_inline}}
  - : Cookie の名前が入っている文字列です。

または

- `options` {{optional_inline}}
  - : オブジェクトは以下のプロパティを含みます。
    - `name`
      - : Cookie の名前が入っている文字列です。
    - `url`
      - : Cookie の URL が入っている文字列です。

> [!NOTE]
> `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。文書からは現在の URL の Cookie しか取得できないので、文書コンテキストで有効な URL は文書の URL のみとなります。

### 返値

{{jsxref("Promise")}} で、送信された `name` または `options` に一致する最初の Cookie を表すオブジェクトに解決されます。一致する Cookie がない場合は `null` になります。

一致した結果として返されるオブジェクトには、以下のプロパティが含まれています。

- `domain` {{experimental_inline}} {{non-standard_inline}}
  - : Cookie のドメインを含む文字列です。

- `expires` {{experimental_inline}} {{non-standard_inline}}
  - : Cookie の期限が入ったタイムスタンプで、ミリ秒単位の {{glossary("Unix time", "Unix 時刻")}}です。

- `name` {{experimental_inline}} {{non-standard_inline}}
  - : Cookie の名前を含む文字列です。

- `partitioned` {{experimental_inline}} {{non-standard_inline}}
  - : 論理値で、Cookie がパーティション化 Cookie であるか (`true`) そうでないか (`false`) を表します。詳しくは [個別区画化された状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) を参照してください。

- `path` {{experimental_inline}} {{non-standard_inline}}
  - : Cookie のパスを含む文字列です。

- `sameSite` {{experimental_inline}} {{non-standard_inline}}
  - : [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 値（[`"strict"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict)、[`"lax"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax)、[`"none"`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#none)）のいずれかです。

- `secure` {{experimental_inline}} {{non-standard_inline}}
  - : 論理値で、この Cookie が保護されたコンテキストでのみ使用されるか (`true`) またはそうではないか (`false`) を示します。

- `value` {{experimental_inline}} {{non-standard_inline}}
  - : この Cookie の値が入った文字列です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : オリジンが URL に{{glossary("Serialization", "シリアライズ")}}できない場合に発生します。
- {{jsxref("TypeError")}}
  - : 以下の場合に発生します。
    - `options` 引数が空オブジェクトであった。
    - このメソッドがメインスレッドで呼び出され、`url` オプションが指定されているものの、現在のウィンドウの URL と一致していない。
    - このメソッドはワーカー内で呼び出されており、`url` オプションが指定されていますが、その値はワーカーのオリジンと一致していない。
    - 指定された `name` または `options` で表される Cookie のクエリーに失敗した。

## 例

<!-- これらの例は、MDN 環境では（原因不明のエラーのため）ライブサンプルとして動作しません。 -->

### Cookie を名前で取得する

この例では、名前を指定して特定の Cookie を取得する方法を示しています。

このコードはまず、{{domxref("CookieStore.set()")}} を使用して "cookie1" という名前付きの Cookie を作成し、エラーがあればコンソールに記録します。
次に、`get()` を待機して、その Cookie に関する情報を取得します。
返されたプロミスがオブジェクトで解決された場合は、その Cookie をコンソールに記録します。そうでない場合は、一致する Cookie が見つからなかったことをコンソールに記録します。

```js
async function cookieTest() {
  // Set test cookie
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Get cookie, specifying name
  const cookie = await cookieStore.get("cookie1");

  if (cookie) {
    console.log(cookie);
  } else {
    console.log("cookie1: Cookie not found");
  }
}

cookieTest();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
