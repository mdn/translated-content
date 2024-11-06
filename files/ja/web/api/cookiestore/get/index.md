---
title: "CookieStore: get() メソッド"
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

**`get()`** は {{domxref("CookieStore")}} インターフェイスのメソッドは、与えられた名前またはオプションオブジェクトを持つ 1 つの Cookie を返します（下記参照）。このメソッドは渡された引数に最初に一致する Cookie を返します。

## 構文

```js-nolint
get(name)
get(options)
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name`
  - : Cookie の名前が入っている文字列です。

または

- `options`

  - : オブジェクトは以下のプロパティを含みます。

    - `name`
      - : Cookie の名前が入っている文字列です。
    - `url`
      - : Cookie の URL が入っている文字列です。

> **メモ:** `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。文書からは現在の URL の Cookie しか取得できないので、文書コンテキストで有効な URL は文書の URL のみとなります。

### 返値

与えられた名前またはオプションに一致する最初の Cookie を含むオブジェクトに解決される {{jsxref("Promise")}} です。このオブジェクトは以下のプロパティを含んでいます。

- `domain`

  - : Cookie のドメインを含む文字列です。

- `expires`

  - : Cookie の期限が入ったタイムスタンプで、ミリ秒単位の [Unix 時刻](/ja/docs/Glossary/Unix_time)です。

- `name`

  - : Cookie の名前を含む文字列です。

- `partitioned`

  - : 論理値で、Cookie がパーティション化 Cookie であるか (`true`) そうでないか (`false`) を表します。詳しくは [Cookies Having Independent Partitioned State (CHIPS)](/ja/docs/Web/Privacy/Partitioned_cookies) を参照してください。

- `path`

  - : Cookie のパスを含む文字列です。

- `sameSite`

  - : 以下の [`SameSite`](/ja/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 値のうちの何れかです。

    - `"strict"`
      - : Cookie はファーストパーティのコンテキストにのみ送られ、サードパーティのウェブサイトに対するリクエストには送られません。
    - `"lax"`
      - : Cookie は、通常のサイト間サブリクエスト（例えば、サードパーティーのサイトに画像やフレームを読み込むためのもの）には送信されませんが、ユーザーがオリジン間サイト内を移動しているとき（リンクを追跡するとき）には送信されます。
    - `"none"`
      - : Cookie はすべてのコンテキストで、送信されます。

- `secure`

  - : 論理値で、この Cookie が安全なコンテキストでのみ使用されるか (`true`) またはそうではないか (`false`) を示します。

- `value`
  - : この Cookie の値が入った文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた `name` や `options` で表される Cookie の取得に失敗した場合に発生します。

## 例

この例では、"cookie1" という名前の Cookie を返します。もし Cookie が見つかれば、プロミスの結果は 1 つの Cookie の詳細を含むオブジェクトになります。

```js
let cookie = cookieStore.get("cookie1");
if (cookie) {
  console.log(cookie);
} else {
  console.log("Cookie not found");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
