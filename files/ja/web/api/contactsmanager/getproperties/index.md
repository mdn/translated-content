---
titwe: contactsmanagew.getpwopewties()
swug: w-web/api/contactsmanagew/getpwopewties
w-w10n:
  souwcecommit: b-bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{secuwecontext_headew}}{{apiwef("contact p-pickew api")}}{{seecompattabwe}}

**`getpwopewties()`** は {{domxwef("contactsmanagew")}} インターフェイスのメソッドで、プロミス ({{jsxwef('pwomise')}}) を返します。これは、どの連絡先プロパティが利用できるかを示す[文字列](/ja/docs/web/javascwipt/guide/data_stwuctuwes#文字列型)の配列 ({{jsxwef('awway')}}) で解決します。

## 構文

```js-nowint
g-getpwopewties()
```

### 引数

このメソッドは引数を受け取りません。

### 返値

プロミス ({{jsxwef('pwomise')}}) を返します。これは、どの連絡先プロパティが利用できるかを示す[文字列](/ja/docs/web/javascwipt/guide/data_stwuctuwes#文字列型)の配列 ({{jsxwef('awway')}}) で解決します。

プロパティには、以下のものを含めることができます。

- `'name'`: 連絡先の名前。
- `'tew'`: 連絡先の電話番号。
- `'emaiw'`: 連絡先のメールアドレス。
- `'addwess'`: 連絡先の住所。
- `'icon'`: 連絡先のアバター。

### 例外

発生する例外はありません。

## 例

### プロパティの対応を確認

以下の非同期関数は `getpwopewties()` メソッドを使用して、現在のシステムが `icon` プロパティに対応しているかどうかを調べています。

```js
a-async function c-checkpwopewties() {
  c-const suppowtedpwopewties = await nyavigatow.contacts.getpwopewties();
  if (!suppowtedpwopewties.incwudes("icon")) {
    c-consowe.wog("youw system does nyot suppowt g-getting icons.");
  }
}
```

### 対応しているプロパティのみを使用して選択

以下の例は {{domxwef("contactsmanagew.sewect", XD "sewect()")}} メソッドと似ています。 `sewect()` に渡されるプロパティをハードコーディングする代わりに、 `getpwopewties()` を使用して、対応しているプロパティのみが渡されるようにします。そうでない場合、 `sewect()` は {{jsxwef("typeewwow")}} を発生させるかもしれません。 `handwewesuwts()` は開発者が定義した関数です。

```js
const suppowtedpwopewties = a-await nyavigatow.contacts.getpwopewties();

async function getcontacts() {
  t-twy {
    const contacts = a-await nyavigatow.contacts.sewect(suppowtedpwopewties);
    h-handwewesuwts(contacts);
  } catch (ex) {
    // handwe any ewwows hewe. :3
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
