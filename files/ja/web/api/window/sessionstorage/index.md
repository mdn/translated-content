---
title: "Window: sessionStorage プロパティ"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Web Storage API")}}

**`sessionStorage`** プロパティは読み取り専用で、セッションの {{DOMxRef("Storage")}} オブジェクトにアクセスできます。`sessionStorage` は {{DOMxRef("Window.localStorage")}} に似ています。唯一の違いは、`localStorage` に保存されたデータに期限がないのに対して、`sessionStorage` に保存されたデータはページのセッションが終了するときに消去されることです。

- 文書がブラウザー内の特定のタブに読み込まれるたびに、固有のページセッションが作成され、その特定のタブに割り当てられます。そのページセッションは特定のタブでのみ有効です。
- ページセッションはタブやブラウザーが開いている限り続き、ページの再読み込みや復元にも耐えられます。
- **新しいタブやウィンドウでページを開くと、最上位の閲覧コンテキストの値で新しいセッションが作成されますが、これはセッションクッキーの動作方法とは異なります。**
- 同じ URL で複数のタブ/ウィンドウを開くための `sessionStorage` はタブ/ウィンドウごとに作成します。
- タブをコピーすると、そのタブの `sessionStorage` が新しいタブにコピーされます。
- タブ/ウィンドウを閉じられた場合、セッションは終わり、 `sessionStorage` 内のオブジェクトは消去されます。

`sessionStorage` に格納されるデータはページのプロトコルごとに分かれています。例えば、[http://example.com](https://example.com) のように HTTP でアクセスしたサイトのスクリプトで格納されるデータは、 <https://example.com> のように HTTPS でアクセスしたサイトとは異なる `sessionStorage` オブジェクトに格納されます。

キーと値は常に UTF-16 文字列形式で、 1 文字あたり 2 バイトを使用します。オブジェクトと同様に、整数のキーは自動的に文字列に変換されます。

## 値

現在の{{glossary("origin","オリジン")}}のセッションストレージ領域にアクセスするのに使用できる {{domxref("Storage")}} オブジェクトを返します。

### 例外

- `SecurityError`

  - : 以下のいずれかの場合に発生します。

    - オリジンが[妥当なスキーム/ホスト名/ポート番号の組み合わせ](/ja/docs/Web/Security/Same-origin_policy#definition_of_an_origin)でない。これは例えば、オリジンが `file:` や `data:` スキームを使うときに起こります。
    - リクエストがポリシーの決定に反している。例えば、ユーザーがブラウザーで特定のオリジンにおいてデータの永続化を拒否している場合です。

    なお、ユーザーが Cookie をブロックしている場合、ブラウザーはこれをデータの永続化の拒否と解釈する可能性が高いです。

## 例

### 基本的な使用法

```js
// sessionStorage にデータを保存
sessionStorage.setItem("key", "value");

// sessionStorage に保存したデータを取得
let data = sessionStorage.getItem("key");

// sessionStorage に保存したデータを削除
sessionStorage.removeItem("key");

// sessionStorage からすべての保存したデータを削除
sessionStorage.clear();
```

### ページ更新時にデータを保持

以下の例は、テキストフィールドの内容を自動的に保存して、ブラウザーが再読み込みされた場合に、記入した内容を失わないようにテキストフィールドの内容を復元します。

```js
// 追跡するテキストフィールドを取得
let field = document.getElementById("field");

// 自動保存された値があるかを確認
// （ページが意図せず再読み込みされた場合にのみ発生）
if (sessionStorage.getItem("autosave")) {
  // テキストフィールドの内容を復元
  field.value = sessionStorage.getItem("autosave");
}

// テキストフィールドの変更を待ち受け
field.addEventListener("change", () => {
  // セッションストレージオブジェクトに結果を保存
  sessionStorage.setItem("autosave", field.value);
});
```

> [!NOTE]
> 詳細な使用例は [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) の記事を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{DOMxRef("Window.localStorage")}}
