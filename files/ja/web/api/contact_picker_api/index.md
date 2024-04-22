---
title: 連絡先ピッカー API
slug: Web/API/Contact_Picker_API
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}{{SeeCompatTable}}

連絡先ピッカー API (Contact Picker API) は、ユーザーが連絡先リストから項目を選択し、選択した項目の限定された詳細をウェブサイトやアプリケーションで共有できるようにします。

> **メモ:** この API は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では使用できません（{{domxref("WorkerNavigator")}} に公開されていません）。

## 連絡先ピッカー API の概念と使用法

連絡先へのアクセスは、長い間、ネイティブアプリケーションの中で利用できる機能でした。連絡先ピッカー API は、その機能をウェブアプリケーションに提供します。

用途としては、メールやチャットアプリケーションでメッセージを送る連絡先を選択したり、Voice over IP ( VOIP ) で使用する連絡先の電話番号を選択したり、ソーシャルプラットフォームに既に参加している連絡先を発見したりするために使用されることがあります。また、ユーザーエージェントは、ユーザー機器上の他のアプリケーションとの一貫した使い勝手も提供することができます。

{{domxref('ContactsManager')}} インターフェイスの {{domxref('ContactsManager.select', 'select')}} メソッドを呼び出すと、ユーザーに連絡先ピッカーが存在し、ユーザーはウェブアプリケーションと共有する連絡先情報を選択することができます。連絡先ピッカーを表示する許可を得るには、ユーザーとの対話が必要です。また、連絡先へのアクセスは永続的ではなく、アプリケーションからの要求があるたびにユーザーがアクセスを許可する必要があります。

このAPIが利用可能なのは、安全な最上位の閲覧コンテキストからのみであり、連絡先データの機密性とプライバシーについてとても慎重に考慮されています。共有するデータを選択する責任はユーザーにあり、選択した連絡先の特定のデータのみを許可し、他の連絡先のデータには一切アクセスできないようになっています。

## インターフェイス

- {{domxref("ContactAddress")}}
  - : 物理的な住所を表します。
- {{domxref("ContactsManager")}}
  - : ユーザーがウェブアプリケーションで連絡先の限定された詳細を選択し、共有する方法を提供します。
- {{domxref("Navigator.contacts")}}
  - : 他のすべての機能にアクセス可能な {{domxref("ContactsManager")}} オブジェクトのインスタンスを返します。

## 例

### 機能検出

以下のコードは、連絡先ピッカー API に対応しているかどうかを調べるものです。

```js
const supported = "contacts" in navigator;
```

### 対応しているプロパティを調べる

以下の非同期関数は、`getProperties()` メソッドを使用して、対応しているプロパティを調べます。

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes("name")) {
    // 名前に対応したコードを実行
  }
  if (supportedProperties.includes("email")) {
    // メールアドレスに対応したコードを実行
  }
  if (supportedProperties.includes("tel")) {
    // 電話番号に対応したコードを実行
  }
  if (supportedProperties.includes("address")) {
    // 住所に対応したコードを実行
  }
  if (supportedProperties.includes("icon")) {
    // アバターに対応したコードを実行
  }
}
```

### 連絡先の選択

以下の例では、それぞれの連絡先に対して取得するプロパティの配列を設定し、また、複数の連絡先が選択できるようにオプションオブジェクトを設定しています。

そして、`select()` メソッドを使用して、ユーザーに連絡先ピッカーインターフェイスを表示し、選択された結果を処理する非同期関数を定義しています。

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
