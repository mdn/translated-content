---
title: "DocumentFragment: getElementById() メソッド"
short-title: getElementById()
slug: Web/API/DocumentFragment/getElementById
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ ApiRef("DOM") }}

**`getElementById()`** は {{domxref("DocumentFragment")}} のメソッドで、{{domxref("Element.id", "id")}} プロパティが指定された文字列に一致する {{domxref("Element")}} オブジェクトを返します。要素の ID は指定された場合は一意であることが求められるため、特定の要素に素早くアクセスする方法として有効です。

ID を持っていない要素へアクセスする必要がある場合は、{{domxref("Document.querySelector", "querySelector()")}} を使用すると任意の{{Glossary("CSS selector", "セレクター")}}を用いて要素を検索することができます。

> [!NOTE]
> ID は単一の文書フラグメント内で一意である必要があります。2 つ以上の要素が単一の文書フラグメント内で同じ ID を持っている場合、このメソッドは最初に見つかった要素を返します。

## 構文

```js-nolint
getElementById(id)
```

> [!NOTE]
> コードが機能するためには、このメソッドの名前における `"Id"` という大文字小文字の表記を正確にしなければなりません。`getElementByID()` のほうが自然に見えますが、正しくなく機能しません。

### 引数

- `id`
  - : 探す要素の ID です。 ID は大文字と小文字の区別がある文字列で、文書内で固有です。指定された ID の要素は一つしかありません。

### 返値

指定された ID に一致する DOM 要素オブジェクトを記述した {{domxref("Element")}} オブジェクト、または文書内に一致する要素がなければ `null` です。

## 例

### 要素のリストを展開

この例では、文書に 1 つのアイテム `Cherry` を持つリストが格納されています。`Apple`、`Orange`、`Banana`、`Melon` の 4 つの項目を含む文書フラグメントを作成します。

次に、`getElementById()` を使用して、文書内とフラグメント内で `Apple` と `Cherry` を探した結果をログ出力します。この点で、`Cherry` は文書内にしか現れず、`Apple` はフラグメント内にしか現れません。

［フラグメントを文書に追加する］をクリックすると、文書内のリストにフラグメントが追加され、文書内とフラグメント内で `Apple` と `Cherry` の両方を探していた結果を再びログ出力します。この時点では、`Apple` と `Cherry` の両方が文書内に現れ、どちらもフラグメントには現れません。

これは、フラグメントを文書に追加すると、フラグメントのノードが DOM 内へ移動し、空の `DocumentFragment` が残るからです。

#### HTML

```html
<button id="add">フラグメントを文書に追加</button>
<button id="reset">例をリセット</button> <br />
リストの内容:
<ul>
  <li id="Cherry">Cherry</li>
</ul>
フラグメントの内容:
<ul id="fragment"></ul>
現在の状態:
<pre id="log" />
```

```css hidden
button {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
// 文書フラグメントを初期コンテンツで作成
const fragment = new DocumentFragment();
["Apple", "Orange", "Banana", "Melon"].forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  li.id = fruit;
  fragment.append(li);
});

// ボタンがクリックされると、フラグメントをリストへ追加
document.getElementById("add").addEventListener("click", () => {
  document.querySelector("ul").append(fragment);
  displayStatus();
});

// 両方の結果を getElementById() でログ出力
function displayStatus() {
  const log = document.getElementById("log");
  log.textContent = "";
  ["Apple", "Cherry"].forEach((id) => {
    log.textContent += `document.getElementById("${id}") ${
      document.getElementById(id) ? "Yes" : "No"
    }\n`;
    log.textContent += `fragment.getElementById("${id}") ${
      fragment.getElementById(id) ? "Yes" : "No"
    }\n`;
  });

  // Empty the fragment viewer and fill it with the current content
  const fragmentViewer = document.getElementById("fragment");
  while (fragmentViewer.hasChildNodes()) {
    fragmentViewer.removeChild(fragmentViewer.lastChild);
  }
  for (entry of fragment.children) {
    fragmentViewer.appendChild(entry.cloneNode(true));
  }
}

// 初期状態をログ出力
displayStatus();

// リセットボタンをフック
document.getElementById("reset").addEventListener("click", () => {
  document.location.reload();
});
```

#### 結果

{{EmbedLiveSample('Examples', '100%', '410px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.getElementById()")}}
