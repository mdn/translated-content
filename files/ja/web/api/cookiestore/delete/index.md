---
title: "CookieStore: delete() メソッド"
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

**`delete()`** は {{domxref("CookieStore")}} インターフェイスのメソッドで、与えられた名前またはオプションオブジェクトを持つ Cookie を削除します（下記参照）。`delete()` メソッドは日付を過去のものに変更することで Cookie を失効させます。

## 構文

```js-nolint
delete(name)
delete(options)
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
    - `partitioned` {{Optional_Inline}}
      - : 論理値で、既定値は `false` です。`true` に設定すると、削除するクッキーがパーティション化 Cookie であることを表します。詳しくは [Cookies Having Independent Partitioned State (CHIPS)](/ja/docs/Web/Privacy/Partitioned_cookies) を参照してください。
    - `path`{{Optional_Inline}}
      - : パスを含む文字列です。
    - `url`{{Optional_Inline}}
      - : Cookie の URL が入っている文字列です。

> **メモ:** `url` オプションは、特定の URL をスコープとした Cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の URL に送信される Cookie を取得できます。ドキュメントからは現在の URL の Cookie しか取得できないので、ドキュメントコンテキストで有効な URL はドキュメントの URL のみとなります。

### 返値

削除が完了すると {{jsxref("undefined")}} に解決される {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 与えられた `name` や `options` で表される Cookie の削除に失敗した場合に発生します。

## 例

この例では、`delete()` メソッドに名前を渡すことで、Cookie を削除しています。

```js
let result = cookieStore.delete("cookie1");
console.log(result);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
