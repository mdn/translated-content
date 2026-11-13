---
title: "CookieChangeEvent: deleted プロパティ"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

**`deleted`** は {{domxref("CookieChangeEvent")}} インターフェイスの読み取り専用プロパティで、指定された `CookieChangeEvent` のインスタンスで削除された Cookie の配列を返します。

なお、有効期限が過去の日付に設定されて作成されたクッキーは、即座に削除されるため、ここに含まれます。

## 値

オブジェクトの配列で、削除された Cookie が格納されています。それぞれのオブジェクトは以下のプロパティを持ちます。

- `name`
  - : Cookie の名前を表す文字列です。
- `value`
  - : Cookie の値を表す文字列です。
- `domain`
  - : Cookie のドメインを表す文字列です。
- `path`
  - : Cookie のパスを表す文字列です。
- `expires`
  - : ミリ秒単位の {{glossary("Unix time", "UNIX 時間")}}で与えられるタイムスタンプで、Cookie の有効期限を表します。
- `secure`
  - : 論理値 ({{jsxref("Boolean")}}) で、Cookie が保護されたコンテキスト (HTTP ではなく HTTPS) でのみ使用されるかどうかを表します。
- `sameSite`
  - : 以下の [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) の値のいずれかです。
    - `"strict"`
      - : Cookie はファーストパーティコンテキストでのみ送信され、サードパーティのウェブサイトから発信されたリクエストでは送信されません。
    - `"lax"`
      - : Cookie は通常のクロスサイトサブリクエスト (たとえば、サードパーティサイトへの画像やフレームの読み込み) では送信されませんが、ユーザーが発信元のサイト内へ移動するとき (すなわち、リンクをたどるとき) は送信されます。
    - `"none"`
      - : Cookie はすべてのコンテキストで送信されます。

- `partitioned`
  - : クッキーが区画化されたクッキーであるか (`true`)、そうでないか (`false`) を示す論理値です。情報については、[個別区画化された状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies)を参照してください。

## 例

この例では、Cookie が削除されると、イベントリスナーが `CookieChangeEvent.deleted` プロパティの最初の要素をコンソールに記録します。これには、削除されたばかりの Cookie を表すオブジェクトが格納されています。

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.deleted[0]);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
