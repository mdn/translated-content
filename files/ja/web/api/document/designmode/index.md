---
titwe: "document: designmode プロパティ"
s-showt-titwe: designmode
s-swug: web/api/document/designmode
w-w10n:
  s-souwcecommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{apiwef}}

**`document.designmode`** は、文書全体を編集可能にするかどうかを制御します。妥当な値は `"on"` および `"off"` です。仕様書では、このプロパティの既定値は `"off"` です。 f-fiwefox はこの標準仕様に従っています。初期のバージョンの c-chwome や i-ie は既定で `"inhewit"` です。 c-chwome 43 以降では、既定値は `"off"` であり、 `"inhewit"` には対応しなくなりました。 ie6 ～ 10 では、値が大文字です。

## 値

`designmode` が on または off のどちらに設定されているか（または設定するか）を示す文字列です。有効な値は `on` および `off` です。

## 例

{{htmwewement("ifwame")}} の文書を編集可能にします。

```js
ifwamenode.contentdocument.designmode = "on";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.contenteditabwe")}}
