---
title: "Document: ariaNotify() メソッド"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{ApiRef("DOM")}}

{{domxref("Document")}} インターフェイスの **`ariaNotify()`** メソッドは、{{glossary("screen reader", "スクリーンリーダー")}} によって読み上げられる文字列をキューに追加します。

## 構文

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### 引数

- `announcement`
  - : 読み上げるテキストを指定する文字列。
- `options` {{optional_inline}}
  - : 以下のプロパティを含むオプションオブジェクトです。
    - `priority`
      - : 読み上げの優先度を指定する列挙値です。
        指定できる値は以下のとおりです。
        - `normal`
          - : 読み上げは通常の優先度を持ちます。
            スクリーンリーダーが現在行っている読み上げの後に読み上げられます。
            これが既定値です。
        - `high`
          - : 読み上げは高い優先度を持ちます。
            スクリーンリーダーが現在行っている読み上げに割り込んで、即座に読み上げられます。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

**`ariaNotify()`** メソッドは、プログラムからスクリーンリーダーの読み上げを発生させるために使用できます。このメソッドは [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) と似た機能を提供しますが、いくつかの利点があります。

- ライブリージョンは DOM の変更後にしか読み上げを行えませんが、`ariaNotify()` の読み上げはいつでも発生させられます。
- ライブリージョンの読み上げは変更された DOM ノードの更新後の内容を読み上げますが、`ariaNotify()` の読み上げ内容は DOM の内容とは独立して定義できます。

開発者は、ライブリージョンが設定された非表示の DOM ノードを用意し、読み上げたい内容でその内容を更新するという方法で、ライブリージョンの制限を回避することがよくあります。これは非効率的でエラーが起きやすく、`ariaNotify()` はこのような問題を避ける手段を提供します。

一部のスクリーンリーダーは複数の `ariaNotify()` の読み上げを順番に読み上げますが、これはすべてのスクリーンリーダーやプラットフォームで保証されるものではありません。通常は、直近の読み上げのみが発声されます。複数の読み上げを一つにまとめる方が信頼性が高くなります。

例えば、以下の呼び出しは、

```js
document.ariaNotify("Hello there.");
document.ariaNotify("The time is now 8 o'clock.");
```

次のようにまとめたほうがよいでしょう。

```js
document.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()` の読み上げには {{glossary("transient activation", "Transient activation")}} は必要ありません。ユーザー体験を損なわないよう、スクリーンリーダーの利用者に対して通知を送りすぎないように注意してください。

### 読み上げの優先度

`priority: high` が設定された `ariaNotify()` の読み上げは、`priority: normal` が設定された `ariaNotify()` の読み上げよりも先に読み上げられます。

`ariaNotify()` の読み上げは、おおよそ以下のように ARIA ライブリージョンの読み上げに相当します。

- `ariaNotify()` の `priority: high`: `aria-live="assertive"`
- `ariaNotify()` の `priority: normal`: `aria-live="polite"`

ただし、`aria-live` による読み上げは `ariaNotify()` の読み上げよりも優先されます。

### 言語の選択

スクリーンリーダーは、{{htmlelement("html")}} 要素の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性で指定された言語（`lang` 属性が設定されていない場合はユーザーエージェントの既定の言語）に基づいて、`ariaNotify()` の読み上げに使用する適切な音声（アクセントや発音など）を選択します。

### パーミッションポリシーとの統合

文書や {{htmlelement("iframe")}} における `ariaNotify()` の使用は、{{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [パーミッションポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によって制御できます。

具体的には、定義されたポリシーが使用をブロックしている場合、`ariaNotify()` で作成された読み上げはすべて黙って失敗します（送信されません）。

## 例

### `ariaNotify()` の基本的な使用方法

この例には、クリックするとスクリーンリーダーの読み上げを発生させる {{htmlelement("button")}} が含まれています。

```html live-sample___basic-arianotify
<button>Press</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document.ariaNotify("Hi there, I'm Ed Winchester.");
});
```

#### 結果

出力は以下のようになります。

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

スクリーンリーダーを起動してからボタンを押してみてください。スクリーンリーダーが "Hi there, I'm Ed Winchester." と読み上げるはずです。

### アクセシブルな買い物リストの例

この例は、商品の追加・削除ができ、商品の合計金額を記録する買い物リストです。商品が追加または削除されると、スクリーンリーダーはどの商品が追加・削除されたか、そして更新後の合計金額がいくらかを読み上げます。

#### HTML

この HTML では、二つの {{htmlelement("input")}} 要素を含む {{htmlelement("form")}} があります。一つは商品名を入力するための `text` 入力欄で、もう一つは価格を入力するための `number` 入力欄です。どちらの入力欄も [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) であり、`number` 入力欄には、価格ではない値（長い小数など）が入力されるのを防ぐため [`step`](/ja/docs/Web/HTML/Reference/Attributes/step) に `0.01` を設定しています。

フォームの下には、追加された商品を表示するための [順序なしリスト要素](/ja/docs/Web/HTML/Reference/Elements/ul) と、合計金額を表示するための {{htmlelement("p")}} 要素があります。

```html live-sample___shopping-list
<h1><code>ariaNotify</code> demo: shopping list</h1>

<form>
  <div>
    <label for="item">Enter item name</label>
    <input type="text" name="item" id="item" required />
  </div>
  <div>
    <label for="price">Enter item price</label>
    <input type="number" name="price" id="price" step="0.01" required />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>

<hr />

<ul></ul>

<p>Total: £0.00</p>
```

```css hidden live-sample___shopping-list
html {
  box-sizing: border-box;
  font: 1.2em / 1.5 system-ui;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  padding: 0 50px;
}

div {
  display: flex;
  margin-bottom: 20px;
}

label {
  flex: 2;
}

input {
  flex: 4;
  padding: 5px;
}

form button {
  padding: 5px 10px;
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid gray;
}

li {
  margin-bottom: 10px;
}

li button {
  font-size: 0.6rem;
  margin-left: 10px;
}
```

#### JavaScript

このスクリプトは、`<form>`、二つの `<input>` 要素、`<ul>`、`<p>` 要素への参照を格納するいくつかの定数定義から始まります。また、すべての商品の合計金額を格納するための `total` 変数も用意します。

```js live-sample___shopping-list
const form = document.querySelector("form");
const item = document.querySelector("input[type='text']");
const price = document.querySelector("input[type='number']");
const priceList = document.querySelector("ul");
const totalOutput = document.querySelector("p");

let total = 0;
```

次のコードブロックでは、`updateTotal()` という関数を定義しています。この関数には一つの役割しかありません。`<p>` 要素に表示される価格を、`total` 変数の現在の値と等しくなるように更新します。

```js live-sample___shopping-list
function updateTotal() {
  totalOutput.textContent = `Total: £${Number(total).toFixed(2)}`;
}
```

次に、`addItemToList()` という関数を定義します。関数本体の中ではまず、新しく追加された商品を格納するための {{htmlelement("li")}} 要素を作成します。商品名と価格は要素の [`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) 属性に保存し、テキストコンテンツは商品名と価格を含む文字列にします。また、「Remove &lt;商品名>」というテキストを持つ {{htmlelement("button")}} 要素も作成し、リスト項目を順序なしリストに、ボタンをリスト項目にそれぞれ追加します。

関数本体のもう一つの主要な部分は、ボタンに対する `click` イベントリスナーの定義です。ボタンがクリックされると、まずボタンの親ノードであるリスト項目への参照を取得します。次に、リスト項目の `data-price` 属性に含まれる数値を `total` 変数から引き、`updateTotal()` 関数を呼び出して表示されている合計金額を更新し、`ariaNotify()` を呼び出して削除された商品と新しい合計金額を読み上げます。最後に、リスト項目を DOM から削除します。

```js live-sample___shopping-list
function addItemToList(item, price) {
  const listItem = document.createElement("li");
  listItem.setAttribute("data-item", item);
  listItem.setAttribute("data-price", price);
  listItem.textContent = `${item}: £${Number(price).toFixed(2)}`;
  const btn = document.createElement("button");
  btn.textContent = `Remove ${item}`;

  priceList.appendChild(listItem);
  listItem.appendChild(btn);

  btn.addEventListener("click", (e) => {
    const listItem = e.target.parentNode;
    total -= Number(listItem.getAttribute("data-price"));
    updateTotal();
    document.ariaNotify(
      `${listItem.getAttribute(
        "data-item",
      )} removed. Total is now £${total.toFixed(2)}.`,
      {
        priority: "high",
      },
    );
    listItem.remove();
  });
}
```

最後のコードブロックでは、`<form>` に `submit` イベントリスナーを追加します。ハンドラー関数の中では、まずイベントオブジェクトの {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出し、フォームの送信を止めます。次に `addItemToList()` を呼び出して、新しい商品とその価格をリストに表示し、価格を `total` 変数に加算し、`updateTotal()` を呼び出して表示されている合計金額を更新し、`ariaNotify()` を呼び出して追加された商品と新しい合計金額を読み上げます。最後に、次の商品を追加できるように、現在の入力欄の値をクリアします。

```js live-sample___shopping-list
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addItemToList(item.value, price.value);
  total += Number(price.value);
  updateTotal();

  document.ariaNotify(
    `Item ${item.value}, price £${
      price.value
    }, added to list. Total is now £${total.toFixed(2)}.`,
    {
      priority: "high",
    },
  );

  item.value = "";
  price.value = "";
});
```

#### 結果

出力は以下のようになります。

{{EmbedLiveSample("shopping-list", "100%", 500, , , , "aria-notify")}}

スクリーンリーダーを起動してから商品の追加・削除を行ってみてください。スクリーンリーダーがそれらを読み上げるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.ariaNotify()")}}
- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
