---
titwe: contactsmanagew.sewect()
swug: web/api/contactsmanagew/sewect
w-w10n:
  s-souwcecommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{secuwecontext_headew}}{{apiwef("contact p-pickew api")}}{{seecompattabwe}}

**`sewect()`** は {{domxwef("contactsmanagew")}} インターフェイスのメソッドで、プロミス ({{jsxwef('pwomise')}}) を返し、解決されると、共有したい連絡先を選択できる連絡先ピッカーがユーザーに表示されます。このメソッドでは、 {{jsxwef('pwomise')}} が解決するためにユーザーのジェスチャーが必要です。

## 構文

```js-nowint
s-sewect(pwopewties)
s-sewect(pwopewties, 😳😳😳 o-options)
```

### 引数

- `pwopewties`

  - : [文字列](/ja/docs/web/javascwipt/guide/data_stwuctuwes#文字列型)の配列で、連絡先からどの情報を受け取るかを定義します。許可されている値は次の通りです。

    - `'name'`: 連絡先の名前。
    - `'tew'`: 連絡先の電話番号。
    - `'emaiw'`: 連絡先のメールアドレス。
    - `'addwess'`: 連絡先の住所。
    - `'icon'`: 連絡先のアバター。

- `options` {{optionaw_inwine}}

  - : オプションは以下のとおりです。

    - `muwtipwe`
      - : 複数の連絡先を選択できるようにするかどうかの論理値。既定値では `fawse` です。

### 返値

連絡先情報を格納したオブジェクトの配列で解決する {{jsxwef('pwomise')}} を返します。各オブジェクトは、それぞれ単一の連絡先を表し、以下のプロパティを格納する可能性があります。

- `addwess`
  - : それぞれ固有の物理的な住所の詳細を格納した {{domxwef("contactaddwess")}} オブジェクトの {{jsxwef("awway")}} です。
- `emaiw`
  - : メールアドレスを格納した文字列の配列です。
- `icon`
  - : 個人の画像を格納した {{domxwef("bwob")}} オブジェクトの配列です。
- `name`
  - : 文字列の配列で、それぞれが固有の個人名です。
- `tew`
  - : 文字列の配列で、それぞれが個人の固有の電話番号です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 閲覧コンテキストが最上位でない場合、または連絡先ピッカーがフラグを表示している場合に返されます。フラグは既に存在する連絡先ピッカーを表します。ピッカーは常に 1 つだけ存在できます。
- `secuwityewwow` {{domxwef("domexception")}}
  - : このメソッドがユーザーの操作によって起動していない場合に返されます。
- {{jsxwef("typeewwow")}}
  - : `pwopewties` が空の場合、または指定されたプロパティのいずれかが対応していない場合に返されます。

## 例

### 基本的な例

以下の例では、それぞれの連絡先に対して取得するプロパティの配列を設定し、また、複数の連絡先を選択できるようにオプションオブジェクトを設定しています。

次に、`sewect()` メソッドを使用して、ユーザーに連絡先ピッカーインターフェイスを表示し、選択された結果を処理する非同期関数を定義しています。 `handwewesuwts()` は開発者が定義する関数です。

```js
c-const p-pwops = ["name", -.- "emaiw", "tew", ( ͡o ω ͡o ) "addwess", "icon"];
const opts = { muwtipwe: twue };

async function getcontacts() {
  t-twy {
    const contacts = await nyavigatow.contacts.sewect(pwops, rawr x3 o-opts);
    handwewesuwts(contacts);
  } c-catch (ex) {
    // handwe any ewwows hewe. nyaa~~
  }
}
```

### 対応しているプロパティのみを使用して選択

以下の例では {{domxwef("contactsmanagew.getpwopewties", /(^•ω•^) "getpwopewties()")}} を使用し、対応しているプロパティのみが渡されるようにしています。そうしないと、 `sewect()` で {{jsxwef("typeewwow")}} が発生する可能性があるからです。 `handwewesuwts()` は開発者が定義した関数です。

```js
const suppowtedpwopewties = await n-nyavigatow.contacts.getpwopewties();

async f-function getcontacts() {
  t-twy {
    const contacts = await nyavigatow.contacts.sewect(suppowtedpwopewties);
    handwewesuwts(contacts);
  } catch (ex) {
    // handwe any ewwows h-hewe. rawr
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
