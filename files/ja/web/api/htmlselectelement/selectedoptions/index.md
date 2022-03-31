---
title: HTMLSelectElement.selectedOptions
slug: Web/API/HTMLSelectElement/selectedOptions
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Options
  - プロパティ
  - 読み取り専用
  - リファレンス
  - Select
  - ウェブ
  - selectedOptions
browser-compat: api.HTMLSelectElement.selectedOptions
---
{{APIRef("HTML DOM")}}

**読み取り専用**の {{domxref("HTMLSelectElement")}} の **`selectedOptions`** プロパティは、この {{HTMLElement("select")}} 要素にある現在選択中の　{{HTMLElement("option")}} のリストが入ります。選択中の選択肢のリストは {{domxref("HTMLCollection")}} オブジェクトで、現在選択中の選択肢ごとに 1 項目ずつ入ります。

選択肢は {{domxref("HTMLOptionElement.selected")}} 属性を持つ場合に選択されたとみなされます。

## 構文

```js
var selectedCollection = HTMLSelectElement.selectedOptions;
```

### 値

{{domxref("HTMLCollection")}} で、{{domxref("HTMLSelectElement")}} または `<select>` 内にある {{domxref("HTMLOptGroupElement")}} の子である現在選択中の {{domxref("HTMLOptionElement")}} すべてが入ります。

つまり、`<select>` 要素に含まれる選択肢はすべて結果に含まれますが、選択肢グループはリストに含まれません。

現在選択中の選択肢がない場合は、コレクションは空になり、{{domxref("HTMLCollection.length", "length")}} は 0 になります。

<h2 id="Example">例</h2>

この例では、いくつかの選択肢を持つ {{HTMLElement("select")}} 要素を使用し、ユーザーがさまざまな食べ物を注文できるようにしています。

### HTML

選択ボックスと、それぞれの食べ物の選択肢を表す {{HTMLElement("option")}} 要素を生成する HTML は次のようになります。

```html
<label for="foods">何を召し上がりますか？</label><br>
<select id="foods" name="foods" size="7" multiple>
  <option value="1">ブリトー</option>
  <option value="2">チーズバーガー</option>
  <option value="3">特上ダブルベーコンバーガー</option>
  <option value="4">ペパロニピザ</option>
  <option value="5">タコス</option>
</select>
<br>
<button name="order" id="order">
  注文する
</button>
<p id="output">
</p>
```

`<select>` 要素は、複数の項目を選択できるように設定されており、7 行の高さになっています。また、{{HTMLElement("button")}} は、`selected` プロパティを使用して、選択された要素の {{domxref("HTMLCollection")}} を取得するトリガーとなる役割を担っています。

### JavaScript

ボタンのイベントハンドラーを確立する JavaScript のコードと、イベントハンドラー自体は次のようになっています。

```js
let orderButton = document.getElementById("order");
let itemList = document.getElementById("foods");
let outputBox = document.getElementById("output");

orderButton.addEventListener("click", function() {
  let collection = itemList.selectedOptions;
  let output = "";

  for (let i=0; i<collection.length; i++) {
    if (output === "") {
      output = "Your order for the following items has been placed: ";
    }
    output += collection[i].label;

    if (i === (collection.length - 2) && (collection.length < 3)) {
      output +=  " and ";
    } else if (i < (collection.length - 2)) {
      output += ", ";
    } else if (i === (collection.length - 2)) {
      output += ", and ";
    }
  }

  if (output === "") {
    output = "You didn't order anything!";
  }

  outputBox.innerHTML = output;
}, false);
```

このスクリプトは、「注文する」ボタンの {{domxref("Element/click_event", "click")}} イベントリスナーを設定します。クリックされると、イベントハンドラーは `selectedOptions` を使って選択された選択肢のリストを取得し、リスト内の選択肢を繰り返し処理します。順番に並べられた項目を列挙するために文字列が作成され、適切な英語の文法ルール ({{interwiki("wikipedia", "en:serial comma")}} を含む) を使ってリストを作成するロジックがあります。

### 結果

出来上がったコンテンツを実際に見てみると、こんな感じです。

{{EmbedLiveSample("Example", 600, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SectionOnPage("/ja/docs/Learn/Forms/Other_form_controls", "Drop-down controls")}}
