---
title: "HTMLElement: hidden プロパティ"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} の **`hidden`** プロパティは、この要素の [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性の値を反映します。

## 値

この属性には 3 つの値のうち 1 つを取ります。

- `true`
  - : この要素は非表示です。
- `false`
  - : この要素は非表示ではありません。これはこの属性の既定値です。
- `"until-found"`
  - : この要素は見つかるまで非表示で、ページ内検索で見つかったり、フラグメントナビゲーションで到達したりすると表示されます。

この属性の使い方の詳細は、このプロパティが反映する [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性のページを参照してください。

## 例

ここでは、非表示のブロックを使用して、ユーザーが変わった依頼に同意した後に表示されるお礼のメッセージを含める例を示します。

### HTML

この HTML には 2 つのパネルがあります。1 つ目は、ユーザーに「今日は最高の自分でいる」ことへの同意を求めるウェルカムパネルです。もう 1 つはフォローアップパネルで、初期状態では非表示です。

```html
<div id="welcome" class="panel">
  <h1>私のウェブサイトへようこそ！</h1>
  <p>
    "OK" をクリックすると、今日は最高の自分でいることに同意したことになります。
  </p>
  <button class="button" id="okButton">OK</button>
</div>

<div id="awesome" class="panel" hidden>
  <h1>ありがとう！</h1>
  <p>今日は最高の自分でいることに同意してくれてありがとう！</p>
</div>
```

### CSS

コンテンツは、以下の CSS を使用してスタイル設定されます。

```css
.panel {
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border: 1px solid #2222dd;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font:
    22px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### JavaScript

この JavaScript は "OK" ボタンにイベントリスナーを追加し、`welcome` パネルを非表示にして `awesome` パネルを表示します。

```js
document.getElementById("okButton").addEventListener("click", () => {
  document.getElementById("welcome").hidden = true;
  document.getElementById("awesome").hidden = false;
});
```

### 結果

{{ EmbedLiveSample('Examples', 560, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [hidden](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性
- {{cssxref("display")}}
