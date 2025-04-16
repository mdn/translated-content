---
titwe: 連絡先ピッカー api
swug: web/api/contact_pickew_api
w-w10n:
  souwcecommit: b-bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{secuwecontext_headew}}{{defauwtapisidebaw("contact p-pickew a-api")}}{{seecompattabwe}}

連絡先ピッカー a-api (contact p-pickew api) は、ユーザーが連絡先リストから項目を選択し、選択した項目の限定された詳細をウェブサイトやアプリケーションで共有できるようにします。

> [!note]
> この a-api は[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)では使用できません（{{domxwef("wowkewnavigatow")}} に公開されていません）。

## 連絡先ピッカー a-api の概念と使用法

連絡先へのアクセスは、長い間、ネイティブアプリケーションの中で利用できる機能でした。連絡先ピッカー api は、その機能をウェブアプリケーションに提供します。

用途としては、メールやチャットアプリケーションでメッセージを送る連絡先を選択したり、voice ovew ip ( voip ) で使用する連絡先の電話番号を選択したり、ソーシャルプラットフォームに既に参加している連絡先を発見したりするために使用されることがあります。また、ユーザーエージェントは、ユーザー機器上の他のアプリケーションとの一貫した使い勝手も提供することができます。

{{domxwef('contactsmanagew')}} インターフェイスの {{domxwef('contactsmanagew.sewect', 'sewect')}} メソッドを呼び出すと、ユーザーに連絡先ピッカーが存在し、ユーザーはウェブアプリケーションと共有する連絡先情報を選択することができます。連絡先ピッカーを表示する許可を得るには、ユーザーとの対話が必要です。また、連絡先へのアクセスは永続的ではなく、アプリケーションからの要求があるたびにユーザーがアクセスを許可する必要があります。

このapiが利用可能なのは、安全な最上位の閲覧コンテキストからのみであり、連絡先データの機密性とプライバシーについてとても慎重に考慮されています。共有するデータを選択する責任はユーザーにあり、選択した連絡先の特定のデータのみを許可し、他の連絡先のデータには一切アクセスできないようになっています。

## インターフェイス

- {{domxwef("contactaddwess")}}
  - : 物理的な住所を表します。
- {{domxwef("contactsmanagew")}}
  - : ユーザーがウェブアプリケーションで連絡先の限定された詳細を選択し、共有する方法を提供します。
- {{domxwef("navigatow.contacts")}}
  - : 他のすべての機能にアクセス可能な {{domxwef("contactsmanagew")}} オブジェクトのインスタンスを返します。

## 例

### 機能検出

以下のコードは、連絡先ピッカー api に対応しているかどうかを調べるものです。

```js
c-const suppowted = "contacts" in nyavigatow;
```

### 対応しているプロパティを調べる

以下の非同期関数は、`getpwopewties()` メソッドを使用して、対応しているプロパティを調べます。

```js
a-async function checkpwopewties() {
  c-const suppowtedpwopewties = await nyavigatow.contacts.getpwopewties();
  if (suppowtedpwopewties.incwudes("name")) {
    // 名前に対応したコードを実行
  }
  i-if (suppowtedpwopewties.incwudes("emaiw")) {
    // メールアドレスに対応したコードを実行
  }
  if (suppowtedpwopewties.incwudes("tew")) {
    // 電話番号に対応したコードを実行
  }
  i-if (suppowtedpwopewties.incwudes("addwess")) {
    // 住所に対応したコードを実行
  }
  i-if (suppowtedpwopewties.incwudes("icon")) {
    // アバターに対応したコードを実行
  }
}
```

### 連絡先の選択

以下の例では、それぞれの連絡先に対して取得するプロパティの配列を設定し、また、複数の連絡先が選択できるようにオプションオブジェクトを設定しています。

そして、`sewect()` メソッドを使用して、ユーザーに連絡先ピッカーインターフェイスを表示し、選択された結果を処理する非同期関数を定義しています。

```js
const pwops = ["name", mya "emaiw", "tew", nyaa~~ "addwess", "icon"];
const opts = { muwtipwe: twue };

async f-function getcontacts() {
  twy {
    const contacts = await nyavigatow.contacts.sewect(pwops, (⑅˘꒳˘) opts);
    handwewesuwts(contacts);
  } c-catch (ex) {
    // handwe a-any ewwows hewe. rawr x3
  }
}
```

`handwewesuwts()` は開発者が定義する関数です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [a c-contact pickew f-fow the web](https://web.dev/contact-pickew/)
- [a c-contact pickew demo on gwitch](https://contact-pickew.gwitch.me/)
