---
title: ウェブストレージ API の使用
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Web Storage API")}}

ウェブストレージ API は、ブラウザーがキーと値のペアを安全に保存できる仕組みを提供します。

この記事では、この技術を使用する方法を手順を追って説明します。

## 基本概念

ストレージオブジェクトは、シンプルなキーと値の組み合わせを保存しており、オブジェクトに似ていますが、これらは何度ページを読み込んでも存在し続けます。キーは常に文字列です（なお、オブジェクトと同様、整数のキーは自動的に文字列に変換されます）。これらの値にアクセスするにはオブジェクトと同様に、または {{domxref("Storage.getItem()")}} と {{domxref("Storage.setItem()")}} メソッドを使用して行います。以下の 3 行はすべて、（同じ） colorSetting という項目を設定します。

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> [!NOTE]
> ウェブストレージ API (`setItem`, `getItem`, `removeItem`, `key`, `length`) の使用が推奨されているのは、単純なオブジェクトをキーと値の格納先として使うという[落とし穴](https://2ality.com/2012/01/objects-as-maps.html)を防ぐためです。

Web Storage には、以下の 2 種類の仕組みがあります。

- セッションストレージ (**`sessionStorage`**) は、オリジン毎に分割された保存領域を管理し、これはページセッションの間 (ブラウザーを開いている間、ページの再読み込みや復元を含む) 使用可能です。
- ローカルストレージ (**`localStorage`**) も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続します。

これらの仕組みは {{domxref("Window.sessionStorage")}} および {{domxref("Window.localStorage")}} プロパティ (正確には、対応しているブラウザーは `Window` オブジェクトが `WindowLocalStorage` および `WindowSessionStorage` オブジェクトを実装しており、これらに `localStorage` および `sessionStorage` プロパティがあります) を通して使用でき、いずれかのプロパティを使用すると {{domxref("Storage")}} オブジェクトのインスタンスを生成して、データアイテムの保存、取り出し、削除ができます。同じ生成元に対して `sessionStorage` と `localStorage` は、別の `Storage` オブジェクトを使用します。これらは別々に制御されて機能します。

よって例えば、始めに文書上で `localStorage` を呼び出すと {{domxref("Storage")}} オブジェクトが返ります。その後に文書上で `sessionStorage` を呼び出すと、別の {{domxref("Storage")}} オブジェクトが返ります。どちらも同じ方法で操作することができますが、操作は個別に行われます。

## localStorage の機能検出

ローカルストレージを利用できるようにするには、まず対応済みであり、現在のブラウザーセッションで利用可能であるかを確かめるべきです。

### 利用可能かどうかの検証

> [!NOTE]
> この API は、すべての主要なブラウザーで利用可能です。利用できるかどうかのテストが必要なのは、とても古いブラウザーに対応しなければならない場合か、下記に記述する限られた状況においてのみです。

ローカルストレージに対応しているブラウザーは、 `window` オブジェクトに `localStorage` という名称のプロパティを持っています。しかし、単にプロパティが存在すると仮定してしまうと例外が発生する可能性があります。`localStorage` オブジェクトが存在していたとしても、さまざまなブラウザーがローカルストレージを無効化する設定を設けていますので、ローカルストレージが利用できる保証はありません。よってブラウザーがローカルストレージに対応していても、ページ上のスクリプトでは利用できる状態ではない場合があります。

例えば、ブラウザー内のプライベートブラウジングモードで表示された文書に対して、ブラウザーによっては空の `localStorage` オブジェクトを返すかもしれません。逆に、正規の `QuotaExceededError` が発生することもあります。これは利用できるストレージ空間をすべて使用してしまったことを意味していますが、実際にはストレージは利用可能です。機能検出はこのようなシナリオを考慮に入れるべきです。

ローカルストレージに対応済みで、かつ使用可能であるかどうかを検出する関数を、以下に示します。

```js
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
```

また、この関数の使い方は以下のとおりです。

```js
if (storageAvailable("localStorage")) {
  // やったあ! ローカルストレージをちゃんと利用できます
} else {
  // 残念、ローカルストレージは利用できません
}
```

`storageAvailable('sessionStorage')` を呼び出すと、代わりにセッションストレージを確認できます。

[ローカルストレージの機能を検出する方法の略歴](https://gist.github.com/paulirish/5558557)をご覧ください。

## 例

ウェブストレージの典型的な使用法を示すため、想像力豊かに **Web Storage Demo** と名づけたシンプルな例を作成しました。この[ランディングページ](https://mdn.github.io/dom-examples/web-storage/) には、色、フォント、装飾画像をカスタマイズするためのコントロールがあります。

![16 進数値を入力して色を選択するテキストボックスと、フォントスタイルと装飾画像を選ぶ 2 つのドロップダウンメニューを備えたウェブストレージの例。](landing.png)別の選択肢を選ぶと、即座にページが更新されます。さらに、選択内容を `localStorage` に保存しますので、別のページに移動した後に再びこのページを読み込むと、選択内容が維持されています。

また、 [event output ページ](https://mdn.github.io/dom-examples/web-storage/event.html)も提供します。このページを別のタブで開くと、ランディングページで選択肢を変更したときに {{domxref("StorageEvent")}} が発生するのに応じて、更新されたストレージの情報が出力されるのを確認できます。

![Event output ページ](event-output.png)

> [!NOTE]
> 上記のリンクから実際のページを参照することができます。また、[ソースコードも確認できます](https://github.com/mdn/dom-examples/tree/main/web-storage)。

### ストレージが存在しているかを確認する

始めに [main.js](https://github.com/mdn/dom-examples/blob/main/web-storage/main.js) で、ストレージオブジェクトがすでに存在しているか (すなわち、過去にページへアクセスしていたか) を確認します。

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

{{domxref("Storage.getItem()")}} メソッドは、ストレージからデータアイテムを取得するために使用します。この例では、 `bgcolor` アイテムが存在するかを確認しています。アイテムが存在しなければ、既存のカスタマイズ値をストレージへ追加するために `populateStorage()` を実行します。すでに値が存在する場合は、ページのスタイルを保存済みの値で更新するために `setStyles()` を実行します。

> **メモ:** {{domxref("Storage.length")}} を使用して、ストレージオブジェクトが空であるかを確認することもできます。

### ストレージから値を取得する

前述のとおり {{domxref("Storage.getItem()")}} を使用して、ストレージから値を取り出すことができます。これはデータアイテムのキーが引数であり、またデータの値を返します。例えば以下のようにします。

```js
function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

この例で、最初の 3 行はローカルストレージから値を取得しています。
次に、フォーム要素で表示する値をこれらの値に更新して、ページを再読み込みしたときに同期するようにします。
最後に、ページのスタイルや装飾画像を更新して、再読み込み時にカスタマイズ設定を復元します。

### ストレージに値を設定する

{{domxref("Storage.setItem()")}} は新たなデータアイテムを作成するため、および (データアイテムがすでに存在していれば) 既存の値を更新するために使用します。これは引数が 2 つあり、ひとつは作成または変更するデータアイテムのキー、もうひとつはデータアイテムに保存する値です。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

`populateStorage()` 関数は、背景色、フォント、画像のパスの 3 つのアイテムをローカルストレージに保存します。そして、ページのスタイルなどを更新するために `setStyles()` 関数を実行します。

また、それぞれのフォーム要素に `onchange` ハンドラーを含めておき、フォームの値が変更されるたびにデータやスタイルを更新します。

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

`Storage` は、文字列の格納と取り出しにのみ対応しています。他のデータ型を保存したい場合は、文字列に変換する必要があります。プレーンなオブジェクトや配列の場合は {{jsxref("JSON.stringify()")}} を使用します。

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]" 役に立ちません
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

しかし、任意のデータ型を格納するために汎用的な方法はありません。さらに、取得されたオブジェクトは元オブジェクトの[ディープコピー](/ja/docs/Glossary/Deep_copy)であり、それに対して変更しても、元オブジェクトには影響しません。

### StorageEvent を使用してストレージの変更に反応する

{{domxref("StorageEvent")}} は、{{domxref("Storage")}} オブジェクトが変更されるたびに発生します (sessionStorage の変更では発生しません) 。これは、変更を行ったページ上では効果がないでしょう。実際は、ストレージを使用するドメイン上の別のページで、ストレージの変更に同期するための手段です。別のドメイン上のページは、前述のストレージオブジェクトにアクセスできません。

イベントページ ([events.js](https://github.com/mdn/dom-examples/blob/main/web-storage/event.js) をご覧ください) の JavaScript はこれだけです。

```js
window.addEventListener("storage", (e) => {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = JSON.stringify(
    e.storageArea,
  );
});
```

ここでは `window` オブジェクトに、現在のオリジンに関連付けられた {{domxref("Storage")}} オブジェクトが変更されたときに発生するイベントリスナを追加しています。上記の例でわかるとおり、このイベントに関連付けられたイベントオブジェクトは、変更されたデータのキー、変更前の古い値、変更後の新しい値、ストレージを変更した文書の URL、ストレージオブジェクト自体 (その中身を見えるように文字化しています) といった、役に立つ情報を含んでいるいくつものプロパティを持っています。

### データレコードの削除

ウェブストレージには、データを削除するためのシンプルなメソッドが 2 つあります。このデモでは使用していませんが、プロジェクトへとても簡単に追加できます:

- {{domxref("Storage.removeItem()")}} は引数が 1 つあり、削除したいデータアイテムのキーです。これは、当該ドメインのストレージオブジェクトからデータアイテムを削除します。
- {{domxref("Storage.clear()")}} は引数がなく、当該ドメインのストレージオブジェクト全体を空にします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API のランディングページ](/ja/docs/Web/API/Web_Storage_API)
