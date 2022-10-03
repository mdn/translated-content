---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
---

{{APIRef}}

`sessionStorage` プロパティで、 session {{domxref("Storage")}} オブジェクトにアクセスできます。sessionStorage は {{domxref("Window.localStorage")}} に似ています。唯一の違いは、localStorage に保存されたデータに期限がないのに対して、sessionStorage に保存されたデータはページのセッションが終了するときに消去されます。ページのセッションはブラウザを開いている限り、ページの再読み込みや復元を越えて持続します。**新しいタブやウィンドウにページを開くと、新しいセッションが開始します。**これは、セッション Cookie の動作とは異なります。

注意すべき点として、sessionStorage や localStorage **はページのプロトコルに限定されます。**

## 構文

```js
// sessionStorage にデータを保存する
sessionStorage.setItem('key', 'value');

// sessionStorage に保存したデータを取得する
var data = sessionStorage.getItem('key');

// sessionStorage に保存したデータを削除する
sessionStorage.removeItem('key')
```

### 値

{{domxref("Storage")}} オブジェクト。

## 例

以下のスニペットは、現在のドメインのセッション {{domxref("Storage")}} オブジェクトにアクセスして、{{domxref("Storage.setItem()")}} を使用してデータアイテムを追加します。

```js
sessionStorage.setItem('myCat', 'Tom');
```

以下の例はテキストフィールドの内容を自動的に保存して、ブラウザが意図せず再開されたときに、記入した内容を失わないようにテキストフィールドの内容を復元します。

```js
// 追跡するテキストフィールドを取得する
var field = document.getElementById("field");

// 自動保存された値があるかを確認する
// (これはページが意図せず再開された場合にのみ存在する)
if (sessionStorage.getItem("autosave")) {
  // テキストフィールドの内容を復元する
  field.value = sessionStorage.getItem("autosave");
}

// テキストフィールドの変更をリッスンする
field.addEventListener("change", function() {
  // セッションストレージオブジェクトに結果を保存する
  sessionStorage.setItem("autosave", field.value);
});
```

> **メモ:** 詳細な使用例は [Web Storage API を使用する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) の記事を参照してください。

## 仕様

| 仕様書                                                                                                   | 策定状況                         | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Web Storage', '#the-sessionstorage-attribute', 'sessionStorage')}} | {{Spec2('Web Storage')}} |          |

## ブラウザ実装状況

{{Compat("api.Window.sessionStorage")}}

## 関連情報

- [Web Storage API を使用する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
