---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef()}}

`localStorage` プロパティは読み取り専用で、ローカルの {{domxref("Storage")}} オブジェクトにアクセスできます。 `localStorage` は [`sessionStorage`](/ja/docs/Web/API/Window.sessionStorage) によく似ています。唯一の違いは、`localStorage` に保存されたデータには保持期間の制限はなく、`sessionStorage` に保存されたデータはセッションが終わると同時に（ブラウザが閉じられたときに）消去されることです。

## 構文

```js
myStorage = localStorage;
```

### 値

現在の{{glossary("origin","オリジン")}}のローカルストレージ領域にアクセスするのに使用できる {{domxref("Storage")}} オブジェクトを返します。

### 例外

- `SecurityError`
  - : リクエストがポリシーの決定に反している、またはオリジンが[妥当な scheme/host/port tuple](/ja/docs/Web/Security/Same-origin_policy#Definition_of_an_origin)でない (これは例えば、オリジンが `file:` や `data:` スキームを使うときに起こります)。例えば、ユーザーがブラウザー設定で特定オリジンへのデータ永続化のパーミッションを拒否していることもあります。
      なお、ユーザーがクッキーをブロックしている場合、ブラウザーはこれをデータ永続化の拒否と解釈する可能性が高いです。

## 説明

`localStorage` に保存されるキーと値は*常に*UTF-16文字列 (1文字に2バイトを使用する) になります。オブジェクトと同様に、整数のキーは自動的に文字列に変換されます。

`localStorage`に保存されるデータは**そのページのプロトコル固有である**ことに注意する必要があります。特に、`http://example.com` のようなHTTPで読み込まれているページにおける `localStorage` は、`https://example.com` のような対応するHTTPSで読み込まれているページにおける `localStorage` とは異なるオブジェクトを返します。

ドキュメントが `file:` URLから読み込まれている (すなわち、ファイルをWebサーバから読み込んだのではなくローカルのファイルシステムからブラウザーで直接開いている) 場合、`localStorage` に関する要件は定義されておらず、ブラウザに酔って異なる可能性があります。

現在の全てのブラウザにおいて、`localStorage` はそれぞれの `file:` URLに対して異なるオブジェクトを返すようです。すなわち、それぞれの `file:` URLがそれぞれ独自のローカルストレージ領域を持つようです。しかし、前述のように `file:` URLにおける要件は未定義なので、この挙動は保証されず、この挙動に頼るべきではありません。ブラウザーはいつでも `file:` URLにおける `localStorage` の扱いを変えることが可能であり、実際にいくつかのブラウザーは変えています。

## 例

以下のスニペットでは現在のドメインのローカル {{domxref("Storage")}} オブジェクトにアクセスし、{{domxref("Storage.setItem()")}} を利用してデータを追加しています。

```js
localStorage.setItem('myCat', 'Tom');
```

`localStorage` からの項目の読み込みは以下のようにできます。

```js
var cat = localStorage.getItem('myCat');
```

`localStorage` からの項目の削除は以下のようにできます。

```js
localStorage.removeItem('myCat');
```

`localStorage` からの全項目の削除は以下のようにできます。

```js
localStorage.clear();
```

> **メモ:** 詳細な使用例は [Web Storage API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) の記事を参照してください。

## 仕様

| 仕様書                                                                                                   | 策定状況                         | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#the-localstorage-attribute', 'localStorage')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザ実装状況

{{Compat("api.Window.localStorage")}}

## 関連情報

- [Using the Web Storage API](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("LocalStorage")}}
- {{domxref("SessionStorage")}}
- {{domxref("Window.sessionStorage")}}
