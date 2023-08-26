---
title: Navigator.contacts
slug: Web/API/Navigator/contacts
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

**`contacts`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、 {{domxref('ContactsManager')}} インターフェイスを返します。ユーザーが連絡先リストから項目を選択し、選択した項目の限定された詳細をウェブサイトやアプリケーションと共有することができます。

### 値

{{domxref('ContactsManager')}} オブジェクトです、 2 回連続して呼び出すと、同じオブジェクトを返します。

## 例

以下のコードは、連絡先ピッカー API に対応しているかどうかを調べるものです。

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [A Contact Picker for the Web](https://web.dev/contact-picker/)
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
