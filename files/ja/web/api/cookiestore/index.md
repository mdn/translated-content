---
title: CookieStore
slug: Web/API/CookieStore
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

**`CookieStore`** は{{domxref("Cookie Store API", " Cookie ストア API", "", "nocode")}} のインターフェイスで、ページまたはサービスワーカーから非同期に Cookie を取得、設定するためのメソッドを提供します。

`CookieStore` は {{domxref("Window")}} または {{domxref("ServiceWorkerGlobalScope")}} コンテキスト内のグローバスコープの属性を介してアクセスされます。そのため、コンストラクターはありません。

{{InheritanceDiagram}}

## メソッド

- {{domxref("CookieStore.delete()")}}
  - : `delete()` メソッドは与えられた名前またはオプションオブジェクトを持つ Cookie を削除します。
    削除が完了したか、一致する Cookie がなかった場合に解決される {{jsxref("Promise")}} が返されます。
- {{domxref("CookieStore.get()")}}
  - : `get()` メソッドは与えられた名前またはオプションオブジェクトで 1 つの Cookie を取得します。
    1 つの Cookie の詳細に解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.getAll()")}}
  - : `getAll()` メソッドは一致するすべての Cookie を取得します。Cookie のリストに解決される {{jsxref("Promise")}} を返します。
- {{domxref("CookieStore.set()")}}
  - : `set()` メソッドは与えられた名前と値またはオプションオブジェクトを Cookie に設定し、Cookie が設定されると解決される {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("CookieStore.change_event", "change")}}
  - : `change` イベントは、任意の Cookie に変更が加えられたときに発生します。

## 例

下記の実例は、コードをテスト環境にコピーして[ローカルサーバー](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)で実行するか、GitHub pages などのウェブサイトに展開することでテストできます。

<!-- これらの例は、MDN 環境では（原因不明のエラーのため）ライブサンプルとして動作しません。 -->

### Cookie の設定

この例では、`name` と `value` を渡し、`options` の値を設定することで、 Cookie を設定する方法を示しています。

`cookieTest()` メソッドは、`name` および `value` プロパティを持つ Cookie を 1 つ、さらに `name`、`value`、および `expires` プロパティを持つ Cookie をもう 1 つ設定します。
その後、{{domxref("CookieStore.get()")}} メソッドを使用してそれぞれの Cookie を取得し、それらをログ出力します。

```js
async function cookieTest() {
  //  Cookie を設定: 名前と値を渡す
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  //  Cookie を設定: オプションを渡す
  const day = 24 * 60 * 60 * 1000;

  try {
    await cookieStore.set({
      name: "cookie2",
      value: "cookie2-value",
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting cookie2: ${error}`);
  }

  // 名前付き Cookie を取得し、そのプロパティを記録する
  const cookie1 = await cookieStore.get("cookie1");
  console.log(cookie1);

  const cookie2 = await cookieStore.get("cookie2");
  console.log(cookie2);
}

cookieTest();
```

> [!NOTE]
> [対応ブラウザー](/ja/docs/Web/API/CookieStore/set#ブラウザーの互換性)では、`maxAge` を `expires` の代わりに使用して、Cookie の有効期限を設定できます。

### Cookie の取得

この例では、{{domxref("CookieStore.get()")}} を使用して具体的な Cookie を取得する方法、および {{domxref("CookieStore.getAll()")}} を使用してすべての Cookie を取得する方法を示しています。

このサンプルコードでは、まず get メソッドの説明に使用する 3 つの Cookie を設定します。
まず、`cookie1` と `cookie2` を {{domxref("CookieStore.set()")}} メソッドを使用して生成します。
次に、旧式の同期型プロパティである {{domxref("Document.cookie")}} を使用して 3 つ目の Cookie を生成します（これらは `get()` および `getAll()` メソッドでも取得できることを表示させるためです）。

その後、このコードでは {{domxref("CookieStore.get()")}} を使用して "cookie1" を取得し、そのプロパティを出力するとともに、{{domxref("CookieStore.getAll()")}}（引数なし）を使用して、現在のコンテキスト内のすべての Cookie を取得します。

```js
async function cookieTest() {
  // 名前と値を指定して Cookie を設定
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // オプションオブジェクトを渡して Cookie を設定
  const day = 24 * 60 * 60 * 1000;
  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }

  // document.cookie を使用して Cookie を設定
  // （これらも取得されることを示すため）
  document.cookie = "favorite_food=tripe; SameSite=None; Secure";

  // 名前付き Cookie およびログのプロパティを取得
  const cookie1 = await cookieStore.get("cookie1");
  console.log(cookie1);

  // すべての Cookie を取得し、それぞれを記録
  const cookies = await cookieStore.getAll();
  if (cookies.length > 0) {
    console.log(`getAll(): ${cookies.length}:`);
    cookies.forEach((cookie) => console.log(cookie));
  } else {
    console.log(" Cookie が見つかりません");
  }
}

cookieTest();
```

この例では、"cookie1" と 3 つの Cookie すべてが別個にログに出力されるはずです。
注意すべき点として、{{domxref("Document.cookie")}} を使用して生成された Cookie は、{{domxref("CookieStore.set()","set()")}} を使用して生成された Cookie （デフォルトは `/`）とは異なるパスを持つことができる場合があります。

### 名前付き Cookie の削除

この例では、{{domxref("CookieStore.delete()","delete()")}} メソッドを使用して、名前付き Cookie を削除する方法を示しています。

このコードはまず、2 つの Cookie を設定し、それらをコンソールにログ出力します。
次に、そのうちの 1 つの Cookie を削除し、その後、すべての Cookie を再度一覧表示します。
削除された Cookie ("cookie1") は、最初の一覧に存在しますが、2 つ目の一覧には存在しません。

```js
async function cookieTest() {
  // 2 つの Cookie を設定
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

  //  Cookie 名をログ出力
  let cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);

  // cookie1 を削除
  await cookieStore.delete("cookie1");

  // 再び Cookie をログ出力（cookie1 が削除されたのを確認するため）
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `削除を試みた後も残っている Cookie （cookie1 は削除されるはず）: ${cookieNames}`,
  );
}

cookieTest();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
