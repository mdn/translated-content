---
title: ContactsManager.select()
slug: Web/API/ContactsManager/select
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

**`select()`** は {{domxref("ContactsManager")}} インターフェイスのメソッドで、プロミス ({{jsxref('Promise')}}) を返し、解決されると、共有したい連絡先を選択できる連絡先ピッカーがユーザーに表示されます。このメソッドでは、 {{jsxref('Promise')}} が解決するためにユーザーのジェスチャーが必要です。

## 構文

```js-nolint
select(properties)
select(properties, options)
```

### 引数

- `properties`

  - : [文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型)の配列で、連絡先からどの情報を受け取るかを定義します。許可されている値は次の通りです。

    - `'name'`: 連絡先の名前。
    - `'tel'`: 連絡先の電話番号。
    - `'email'`: 連絡先のメールアドレス。
    - `'address'`: 連絡先の住所。
    - `'icon'`: 連絡先のアバター。

- `options` {{optional_inline}}

  - : オプションは以下のとおりです。

    - `multiple`
      - : 複数の連絡先を選択できるようにするかどうかの論理値。既定値では `false` です。

### 返値

連絡先情報を格納したオブジェクトの配列で解決する {{jsxref('Promise')}} を返します。各オブジェクトは、それぞれ単一の連絡先を表し、以下のプロパティを格納する可能性があります。

- `address`
  - : それぞれ固有の物理的な住所の詳細を格納した {{domxref("ContactAddress")}} オブジェクトの {{jsxref("Array")}} です。
- `email`
  - : メールアドレスを格納した文字列の配列です。
- `icon`
  - : 個人の画像を格納した {{domxref("Blob")}} オブジェクトの配列です。
- `name`
  - : 文字列の配列で、それぞれが固有の個人名です。
- `tel`
  - : 文字列の配列で、それぞれが個人の固有の電話番号です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 閲覧コンテキストが最上位でない場合、または連絡先ピッカーがフラグを表示している場合に返されます。フラグは既に存在する連絡先ピッカーを表します。ピッカーは常に 1 つだけ存在できます。
- `SecurityError` {{domxref("DOMException")}}
  - : このメソッドがユーザーの操作によって起動していない場合に返されます。
- {{jsxref("TypeError")}}
  - : `properties` が空の場合、または指定されたプロパティのいずれかが対応していない場合に返されます。

## 例

### 基本的な例

以下の例では、それぞれの連絡先に対して取得するプロパティの配列を設定し、また、複数の連絡先を選択できるようにオプションオブジェクトを設定しています。

次に、`select()` メソッドを使用して、ユーザーに連絡先ピッカーインターフェイスを表示し、選択された結果を処理する非同期関数を定義しています。 `handleResults()` は開発者が定義する関数です。

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

### 対応しているプロパティのみを使用して選択

以下の例では {{domxref("ContactsManager.getProperties", "getProperties()")}} を使用し、対応しているプロパティのみが渡されるようにしています。そうしないと、 `select()` で {{jsxref("TypeError")}} が発生する可能性があるからです。 `handleResults()` は開発者が定義した関数です。

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
