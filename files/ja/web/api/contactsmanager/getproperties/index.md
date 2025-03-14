---
title: ContactsManager.getProperties()
slug: Web/API/ContactsManager/getProperties
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

**`getProperties()`** は {{domxref("ContactsManager")}} インターフェイスのメソッドで、プロミス ({{jsxref('Promise')}}) を返します。これは、どの連絡先プロパティが利用できるかを示す[文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型)の配列 ({{jsxref('Array')}}) で解決します。

## 構文

```js-nolint
getProperties()
```

### 引数

このメソッドは引数を受け取りません。

### 返値

プロミス ({{jsxref('Promise')}}) を返します。これは、どの連絡先プロパティが利用できるかを示す[文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型)の配列 ({{jsxref('Array')}}) で解決します。

プロパティには、以下のものを含めることができます。

- `'name'`: 連絡先の名前。
- `'tel'`: 連絡先の電話番号。
- `'email'`: 連絡先のメールアドレス。
- `'address'`: 連絡先の住所。
- `'icon'`: 連絡先のアバター。

### 例外

発生する例外はありません。

## 例

### プロパティの対応を確認

以下の非同期関数は `getProperties()` メソッドを使用して、現在のシステムが `icon` プロパティに対応しているかどうかを調べています。

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (!supportedProperties.includes("icon")) {
    console.log("Your system does not support getting icons.");
  }
}
```

### 対応しているプロパティのみを使用して選択

以下の例は {{domxref("ContactsManager.select", "select()")}} メソッドと似ています。 `select()` に渡されるプロパティをハードコーディングする代わりに、 `getProperties()` を使用して、対応しているプロパティのみが渡されるようにします。そうでない場合、 `select()` は {{jsxref("TypeError")}} を発生させるかもしれません。 `handleResults()` は開発者が定義した関数です。

```js
const supportedProperties = await navigator.contacts.getProperties();

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(supportedProperties);
    handleResults(contacts);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
