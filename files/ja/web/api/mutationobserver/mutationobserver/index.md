---
title: "MutationObserver: MutationObserver() コンストラクター"
short-title: MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
l10n:
  sourceCommit: ca0ef1bb638a3fa4c2436796e8d85f5959996209
---

{{APIRef("DOM WHATWG")}}

DOM の **`MutationObserver()`** コンストラクターは、{{domxref("MutationObserver")}} インターフェイスの一部で、指定されたコールバックを DOM イベントが発生したときに実行するオブザーバーを作成して返します。

DOM の監視はすぐに開始されるわけではありません。最初に {{domxref("MutationObserver.observe", "observe()")}} メソッドを呼び出し、DOM のどの部分を監視し、どのような変更を監視するかを決めなければなりません。

## 構文

```js-nolint
new MutationObserver(callback)
```

### 引数

- `callback`

  - : 対象となるノードやサブツリー、および指定されたオプションの条件を満たす DOM の変更が起きるたびに呼び出される関数です。

    この `callback` 関数は、2 つの引数を受け取ります。

    1. 発生したそれぞれの変更を記述した {{domxref("MutationRecord")}} オブジェクトの配列。
    2. `callback` を呼び出した {{domxref("MutationObserver")}} です。これは {{domxref("MutationObserver.disconnect()")}} を使用してオブザーバーを切断するときによく使われます。

    詳細については、以下の[例](#例)を参照してください。

### 返値

指定されたコールバックを DOM の変更が発生したときに呼び出すように設定された {{domxref("MutationObserver")}} オブジェクト。

## 例

### コールバック関数

この例には、リストに {{htmlelement("li")}} 要素を追加するボタンと、リストから最初の `<li>` を除去するボタンがあります。

リストの変更を通知してもらうために、`MutationObserver` を使用します。コールバック内で、追加と除去をログ出力し、リストが空になったらすぐにオブザーバーを切断します。

「例をリセット」ボタンは、この例を元の状態にリセットします。

#### HTML

```html
<button id="add">子を追加</button>
<button id="remove">子を除去</button>
<button id="reset">例をリセット</button>

<ul id="container"></ul>

<pre id="log"></pre>
```

#### CSS

```css
#container,
#log {
  height: 150px;
  overflow: scroll;
}

#container li {
  background-color: paleturquoise;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const reset = document.querySelector("#reset");
const container = document.querySelector("#container");
const log = document.querySelector("#log");

let namePrefix = 0;

add.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `item ${namePrefix}`;
  container.appendChild(newItem);
  namePrefix++;
});

remove.addEventListener("click", () => {
  const itemToRemove = document.querySelector("li");
  if (itemToRemove) {
    itemToRemove.parentNode.removeChild(itemToRemove);
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});

function logChanges(records, observer) {
  for (const record of records) {
    for (const addedNode of record.addedNodes) {
      log.textContent = `追加: ${addedNode.textContent}\n${log.textContent}`;
    }
    for (const removedNode of record.removedNodes) {
      log.textContent = `除去: ${removedNode.textContent}\n${log.textContent}`;
    }
    if (record.target.childNodes.length === 0) {
      log.textContent = `切断しました\n${log.textContent}`;
      observer.disconnect();
    }
    console.log(record.target.childNodes.length);
  }
}

const observerOptions = {
  childList: true,
  subtree: true,
};

const observer = new MutationObserver(logChanges);
observer.observe(container, observerOptions);
```

#### 結果

「子を追加」をクリックするとリストアイテムが追加され、「子を除去」をクリックするとリストアイテムが除去されます。 オブザーバーのコールバックは追加と除去をログ出力します。 リストが空になるとすぐに、オブザーバーは「切断」メッセージをログ出力し、オブザーバーを切断します。

「例をリセット」ボタンを押すと、この例が再読み込みされるので、もう一度試すことができます。

{{EmbedLiveSample("Observing child elements", 0, 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
