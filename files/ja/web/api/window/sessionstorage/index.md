---
title: "Window: sessionStorage プロパティ"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Storage API")}}

**`sessionStorage`** プロパティは読み取り専用で、セッションの {{DOMxRef("Storage")}} オブジェクトにアクセスできます。`sessionStorage` は {{DOMxRef("Window.localStorage", "localStorage")}} に似ています。違いは、`localStorage` がオリジンだけで区切られるのに対し、`sessionStorage` はオリジンとブラウザーのタブ（最上位の閲覧コンテキスト）の両方で区切られるという点です。`sessionStorage` 内のデータは、そのページのセッションが継続している間のみ保持されます。

- 文書がブラウザー内の特定のタブに読み込まれるたびに、固有のページセッションが作成され、その特定のタブに割り当てられます。 そのページセッションにアクセスできるのは、その特定のタブ内のみです。メインの文書と、埋め込まれたすべての{{glossary("browsing context", "閲覧コンテキスト")}}（iframe）は、そのオリジンごとにグループ化されており、各オリジンはそれぞれ別個のストレージ領域にアクセスできます。
- ページにオープナー ({{domxref("Window.opener", "opener")}}) が存在する場合、`sessionStorage` の初期状態はオープナーの `sessionStorage` オブジェクトのコピーとなります。ただし、これらは別個のものであり、一方への変更が他方に影響を与えることはありません。`sessionStorage` がコピーされるのを防ぐには、`opener` が除去される手法のいずれかを使用してください（{{domxref("Window.opener")}} を参照）。
- ページセッションはタブやブラウザーが開いている限り続き、ページの再読み込みや復元があっても残ります。
- 新しいタブやウィンドウでページを開くと、最上位の閲覧コンテキストの値で新しいセッションが作成されますが、これはセッションクッキーの動作とは異なります。
- タブ/ウィンドウを閉じられた場合、セッションは終わり、 `sessionStorage` 内のオブジェクトは消去されます。

## 値

現在のオリジンのセッションストレージ領域にアクセスするのに使用できる {{DOMxRef("Storage")}} オブジェクトを返します。

### 例外

- `SecurityError`
  - : 以下のいずれかの場合に発生します。
    - オリジンが[有効なスキーム/ホスト名/ポート番号の組み合わせ](/ja/docs/Web/Security/Defenses/Same-origin_policy#オリジンの定義)でない。これは例えば、オリジンが `file:` や `data:` スキームを使うときに起こります。
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
