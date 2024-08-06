---
title: "Window: localStorage プロパティ"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Web Storage API")}}

**`localStorage`** は {{domxref("window")}} プロパティの読み取り専用プロパティで、この {{DOMxRef("Document")}} の {{glossary("origin")}} における {{DOMxRef("Storage")}} オブジェクトにアクセスできます。格納されたデータは、ブラウザーのセッションを跨いで保存されます。

`localStorage` は {{DOMxRef("Window.sessionStorage", "sessionStorage")}} によく似ていますが、 `localStorage` のデータには期限がないのに対し、 `sessionStorage` のデータはページセッションが終了したとき、すなわちページが閉じられたときにクリアされます。（「プライベートブラウジング」や「プライバシーモード」のセッションに読み込まれた文書の `localStorage` のデータは、最後の「プライベート」タブが閉じられたときにクリアされます。）

## 値

現在のオリジンのローカルストレージ領域にアクセスするのに使用できる {{DOMxRef("Storage")}} オブジェクトを返します。

### 例外

- `SecurityError`

  - : 以下のいずれかの場合に発生します。

    - オリジンが[妥当なスキーム/ホスト名/ポート番号の組み合わせ](/ja/docs/Web/Security/Same-origin_policy#definition_of_an_origin)でない。これは例えば、オリジンが `file:` や `data:` スキームを使うときに起こります。
    - リクエストがポリシーの決定に反している。例えば、ユーザーがブラウザーで特定のオリジンにおいてデータの永続化を拒否している場合です。

    なお、ユーザーが Cookie をブロックしている場合、ブラウザーはこれをデータの永続化の拒否と解釈する可能性が高いです。

## 解説

`localStorage` に保存されるキーと値は*常に* UTF-16 文字列であり、 1 文字あたり 2 バイトを使用します。オブジェクトと同様に、整数のキーは自動的に文字列に変換されます。

`localStorage` のデータは**その文書のプロトコルに依存する**ことに注意する必要があります。特に、 `http://example.com` のような HTTP で読み込まれているページにおける `localStorage` は、`https://example.com` のような対応する HTTPS で読み込まれているページにおける `localStorage` とは異なるオブジェクトを返します。

文書が `file:` URL から読み込まれている（すなわち、ファイルをウェブサーバーから読み込んだのではなくローカルのファイルシステムからブラウザーで直接開いている）場合、`localStorage` に関する要件は定義されておらず、ブラウザーによって異なる可能性があります。

現在の全てのブラウザーにおいて、 `localStorage` はそれぞれの `file:` URL に対して異なるオブジェクトを返すようです。すなわち、それぞれの `file:` URL がそれぞれ独自のローカルストレージ領域を持つようです。しかし、前述のように `file:` URL における要件は未定義なので、この挙動は保証されず、この挙動に頼るべきではありません。ブラウザーは `file:` URL における `localStorage` の扱いを変える可能性があり、実際にいくつかのブラウザーは変えています。

## 例

以下のスニペットでは現在のドメインのローカル {{DOMxRef("Storage")}} オブジェクトにアクセスし、{{DOMxRef("Storage.setItem()")}} を利用してデータを追加しています。

```js
localStorage.setItem("myCat", "Tom");
```

`localStorage` からのアイテムの読み込みは以下のようにします。

```js
const cat = localStorage.getItem("myCat");
```

`localStorage` からのアイテムの削除は以下のようにします。

```js
localStorage.removeItem("myCat");
```

`localStorage` からの全アイテムの削除は以下のようにします。

```js
localStorage.clear();
```

> [!NOTE]
> 詳細な使用例は、[ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)の記事を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{DOMxRef("Window.sessionStorage")}}
