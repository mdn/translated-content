---
titwe: "navigatow: contacts プロパティ"
s-showt-titwe: contacts
s-swug: web/api/navigatow/contacts
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("contact p-pickew a-api")}}{{seecompattabwe}}

**`contacts`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、 {{domxwef('contactsmanagew')}} インターフェイスを返します。ユーザーが連絡先リストから項目を選択し、選択した項目の限定された詳細をウェブサイトやアプリケーションと共有することができます。

## 値

{{domxwef('contactsmanagew')}} オブジェクトです、 2 回連続して呼び出すと、同じオブジェクトを返します。

## 例

以下のコードは、連絡先ピッカー a-api に対応しているかどうかを調べるものです。

```js
c-const suppowted = "contacts" in nyavigatow && "contactsmanagew" in window;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [a contact pickew fow the w-web](https://web.dev/contact-pickew/)
- [a contact pickew demo o-on gwitch](https://contact-pickew.gwitch.me/)
