---
title: "CookieStore: delete() メソッド"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

**`delete()`** は {{domxref("CookieStore")}} インターフェイスのメソッドで、与えられた名前またはオプションオブジェクトを持つ Cookie を削除します（下記参照）。`delete()` メソッドは日付を過去のものに変更することで Cookie を失効させます。

なお、一致する Cookie が見つからなくてもエラーは発生しません。一致した Cookie が削除された場合、または一致する Cookie がない場合、返されたプロミスは履行されます。

## 構文

```js-nolint
delete(name)
delete(options)
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
    - `domain` {{Optional_Inline}}
      - : Cookie のドメインを表す文字列。デフォルトは `null` です。
    - `path` {{Optional_Inline}}
      - : パスを含む文字列です。デフォルトは `/` です。
    - `partitioned` {{Optional_Inline}}
      - : 論理値で、デフォルト値は `false` です。`true` に設定すると、削除する Cookie がパーティション化 Cookie であることを表します。詳しくは[個別区画化された状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) を参照してください。

### 返値

削除が完了したか、一致した Cookie がないと {{jsxref("undefined")}} に解決される {{jsxref("Promise")}} です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : オリジンが URL に{{glossary("Serialization", "シリアライズ")}}できない場合に発生します。
- {{jsxref("TypeError")}}
  - : 与えられた `name` や `options` で表される Cookie の削除に失敗した場合に発生します。

## 例

<!-- これらの例は、MDN 環境では（原因不明のエラーのため）ライブサンプルとして動作しません。 -->

### 名前付き Cookie を削除する

この例では、Cookie の名前を `delete()` メソッドに渡すことで、その Cookie を削除する方法を示しています。

これは、削除対象の Cookie が、上記の [`options`](#options) で指定された Cookie 名およびデフォルト値と一致する場合に動作します。
この場合、Cookie が {{domxref("CookieStore/set","set()")}} を使用して名前と値のみを指定して設定された場合には当てはまりますが、オプションを指定して作成された場合や {{domxref("Document.cookie")}} を使用して作成された場合には当てはまらないことがあります。

このコードでは、まず `setTestCookies()` を定義しています。この関数は、いくつかのテスト用 Cookie を生成し、その名前をログ出力します。

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

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);
}
```

`cookieTest()` メソッドは `setTestCookies()` を呼び出します。
その後、先ほど作成した "cookie1" を削除し、すべての Cookie 名を再度一覧表示します。

```js
async function cookieTest() {
  // Create our test cookies
  await setTestCookies();

  // Delete cookie1
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    console.log(`Error deleting cookie1: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempting to delete cookie1: ${cookieNames}`,
  );
}

cookieTest();
```

実行すると、コンソールログには最初は "cookie1" と "cookie2" の両方が存在することが表示されるはずですが、cookie1 が削除された後には表示されません。

### オプションをつけて Cookie を削除する

この例は前回の例とほぼ同じですが、削除する Cookie のオプションと一致する必要があることを示している点が異なります。
このコードでは、まず `setTestCookies()` を定義しています。
これにより、`partitioned` プロパティが `true` に設定された 2 つの Cookie が生成され、それらの名前がログに出力されます。

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set({
      name: "cookie1",
      value: `cookie1-value`,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);
}
```

`cookieTest()` メソッドは `setTestCookies()` を呼び出します。
その後、名前を指定して "cookie1" という名前付きの Cookie を削除しようと試み、さらに名前と `partitioned: true` を指定して "cookie2" という名前付きの Cookie を削除しようと試みます。
その後、このメソッドは Cookie の名前を再度一覧表示します。

```js
async function cookieTest() {
  // Create our test cookies
  await setTestCookies();

  // Delete cookie1 specifying just the name
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    console.log(`Error deleting cookie1: ${error}`);
  }

  // Delete cookie2, setting partitioned to true
  try {
    await cookieStore.delete({
      name: "cookie2",
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (cookie2 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

実行すると、コンソールログには、最初は "cookie1" と "cookie2" の両方が存在していることが表示されますが、その後 "cookie2" は掲載されていない状態になります。
"cookie1" という名前付きの Cookie は、`delete()`の呼び出しで指定された Cookie と一致しないため、まだ存在しています。

> [!NOTE]
> 一致する Cookie がない場合、削除はエラーを返さずに失敗します。

### document.cookies を使用して作成された Cookie を削除する

{{domxref("document.cookie")}} を使用して作成された Cookie を削除する場合、{{domxref("CookieStore.set()")}} を使用して作成された Cookie を削除する場合と同じ要件が適用されます。つまり、その Cookie は、渡された `options` と一致するか、あるいは `name` とデフォルトのオプションと一致している必要があります。

> [!NOTE]
> `set()` で作成された Cookie の [デフォルトのパス](/ja/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) は常に `/` ですが、`document.cookie` で作成された Cookie のデフォルトのパスは、それが作成された文書のパスと同じになります。
> したがって、`document.cookie` を使用して作成された Cookie を削除する際、そのパスが `/` であると想定することはできません（明示的にそのように設定されていない限り）。そのため、デフォルトの `delete()` オプションと一致するとは限らないのです。

以下のコードでは、`document.cookie` を使用して、それぞれパス `/some_path` および `/` を持つ "doc_cookie1" と "doc_cookie2" という名前付き Cookie を作成し、その後、両方の Cookie をログ出力します。
続いて、`path` 一致オプションを指定せずに両方の Cookie を削除し、再度 Cookie の一覧を表示します。

```js
async function cookieTest() {
  // Create doc_cookie1 with path /some_path
  document.cookie =
    "doc_cookie1=doc_cookie1_name; SameSite=None; Secure; max-age=10; path='/some_path'";

  // Create doc_cookie2 with path / (the CookieStore.set() default)
  document.cookie =
    "doc_cookie2=doc_cookie2_name; SameSite=None; Secure; max-age=10; path=/";

  // Log cookie names
  let cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);

  // Delete doc_cookie1 (should fail)
  try {
    await cookieStore.delete("doc_cookie1");
  } catch (error) {
    console.log(`Error deleting doc_cookie1: ${error}`);
  }

  // Delete doc_cookie2 (should succeed)
  try {
    await cookieStore.delete("doc_cookie2");
  } catch (error) {
    console.log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (doc_cookie2 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

実行すると、最初のログには両方の Cookie が存在することが表示されるはずです。
2 つ目のログには "doc_cookie2" が含まれていないはずです。これは、一致して削除されたはずだからです。
"doc_cookie1" は含まれているはずです。これは、`/some_path`がデフォルトの削除パス（`/`）と一致しないためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
