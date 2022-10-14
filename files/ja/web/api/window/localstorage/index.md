---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef()}}

`localStorage` プロパティはローカルの {{domxref("Storage")}} オブジェクトにアクセスすることができます。 `localStorage` は [`sessionStorage`](/ja/docs/Web/API/Window.sessionStorage) によく似ています。唯一の違いは、`localStorage` に保存されたデータには保持期間の制限はなく、`sessionStorage` に保存されたデータはセッションが終わると同時に（ブラウザが閉じられたときに）クリアされてしまうことです。

`localStorageまたはsessionStorage`に保存されるデータは**そのページのプロトコル固有である**ことに注意する必要があります。

## 構文

```js
myStorage = localStorage;
```

### 値

現在のオリジンの local storage スペースにアクセスするのに使用できる {{domxref("Storage")}} オブジェクトを返します。

### 例外

- `SecurityError`
  - : リクエストがポリシーの決定に反している、またはオリジンが[妥当な scheme/host/port tuple](/ja/docs/Web/Security/Same-origin_policy#Definition_of_an_origin)でない (これは例えば、オリジンが `file:` や `data:` スキームを使うときに起こります)。例えば、ユーザーがブラウザー設定で特定オリジンへのデータ永続化のパーミッションを拒否していることもあります。

## 例

以下のスニペットでは現在のドメインのローカル {{domxref("Storage")}} オブジェクトにアクセスし、{{domxref("Storage.setItem()")}} を利用してデータを追加しています。

```js
localStorage.setItem('myCat', 'Tom');
```

localStorage 項目の読み込みの文法は以下の通り:

```js
var cat = localStorage.getItem("myCat");
```

localStorage 項目の削除の文法は以下の通り:

```js
localStorage.removeItem("myCat");
```

> **メモ:** 詳細な使用例は [Using the Web Storage API](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) の記事を参照してください。

## 仕様

| 仕様書                                                                                                   | 策定状況                         | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-localstorage', 'localStorage')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザ実装状況

{{Compat("api.Window.localStorage")}}

## 関連情報

- [Using the Web Storage API](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("LocalStorage")}}
- {{domxref("SessionStorage")}}
- {{domxref("Window.sessionStorage")}}
