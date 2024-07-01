---
title: ContactsManager
slug: Web/API/ContactsManager
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

**`ContactsManager`** は{{domxref('Contact Picker API', '連絡先ピッカー API', '', 1)}} のインターフェイスで、ユーザーが連絡先リストから項目を選択し、選択した項目の限られた詳細をウェブサイトやアプリケーションと共有できるようにします。

ContactsManager` はグローバルな {{domxref('navigator.contacts')}} プロパティを通して利用することができます。

## インスタンスメソッド

- {{domxref('ContactsManager.select','select()')}} {{Experimental_Inline}}
  - : {{jsxref('Promise')}} を返します。これが解決すると、ユーザーに連絡先ピッカーが表示され、共有したい連絡先を選択してもらうことができます。
- {{domxref('ContactsManager.getProperties()','getProperties()')}} {{Experimental_Inline}}
  - : {{jsxref('Promise')}} を返します。これは、利用できる連絡先プロパティを示す[文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型)の配列 ({{jsxref('Array')}}) で解決します。

## 例

### 機能検出

以下のコードは、連絡先ピッカー API に対応しているかどうかを調べるものです。

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

### 対応しているプロパティのチェック

以下の非同期関数は、 `getProperties` メソッドを使用して、対応しているプロパティを調べています。

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes("name")) {
    // run code for name support
  }
  if (supportedProperties.includes("email")) {
    // run code for email support
  }
  if (supportedProperties.includes("tel")) {
    // run code for telephone number support
  }
  if (supportedProperties.includes("address")) {
    // run code for address support
  }
  if (supportedProperties.includes("icon")) {
    // run code for avatar support
  }
}
```

### 連絡先の選択

以下の例では、それぞれの連絡先に対して取得するプロパティの配列を設定し、また、複数の連絡先を選択できるようにオプションオブジェクトを設定しています。

そして、 `select()` メソッドを使用して、ユーザーに連絡先ピッカーインターフェイスを表示し、選択された結果を処理する非同期関数が定義されます。

```js
const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

`handleResults()` は開発者が定義する関数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [A Contact Picker for the Web](https://web.dev/contact-picker/)
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
