---
title: HTMLElement.hidden
slug: Web/API/HTMLElement/hidden
tags:
  - API
  - 属性
  - 要素
  - HTML
  - HTML 要素
  - プロパティ
  - リファレンス
  - hidden
browser-compat: api.HTMLElement.hidden
translation_of: Web/API/HTMLElement/hidden
---
{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} の **`hidden`** プロパティは論理値で、この要素が非表示の場合は `true` で、それ以外の場合は `false` です。 これは、CSS プロパティの {{cssxref("display")}} を使用して要素の可視性を制御することとはまったく異なります。

`hidden` プロパティはすべてのプレゼンテーションモードに適用され、ユーザーが直接アクセスできるように意図されたコンテンツを非表示にために使用するべきではありません。

`hidden` の適切な使用例は次のとおりです。

- まだ関連性はないが、後で必要になる可能性のあるコンテンツ
- 以前は必要であったが、もう存在しないコンテンツ
- テンプレートのようにページの他の部分で再利用されるコンテンツ
- 描画バッファーとしてオフスクリーンのキャンバスを作成する

不適切な使用例には次のものがあります。

- タブ付きダイアログボックスでのパネルの非表示
- あるプレゼンテーションでコンテンツを非表示にし、他のプレゼンテーションでは表示されるようにする

> **Note:** `hidden` でない要素は、`hidden` 要素にリンクしてはいけません。

## 値

論理値で、この要素がビューから非表示になっている場合は `true`、そうでなければ `false` の値です。

## 例

次に、非表示のブロックを使用して、ユーザーが珍しい要求に同意した後に表示されるお礼のメッセージを含める例を示します。

### JavaScript

```js
document.getElementById("okButton")
        .addEventListener("click", function() {
  document.getElementById("welcome").hidden = true;
  document.getElementById("awesome").hidden = false;
}, false);
```

このコードは、ウェルカムパネルを非表示にして、その場所に "awesome" という名前のフォローアップパネルを表示する、ウェルカムパネルの [OK] ボタンのハンドラーを設定します。

### HTML

2 つのボックスの HTML は次のとおりです。

#### ウェルカムパネル

```html
<div id="welcome" class="panel">
  <h1>Foobar.com へようこそ！</h1>
  <p>[OK] をクリックすると、あなたは毎日が素晴らしいことに同意します。</p>
  <button class="button" id="okButton">OK</button>
</div>
```

この HTML は、ユーザーをサイトに歓迎し、[OK] ボタンをクリックして同意していることを伝えるパネルを（{{HTMLElement("div")}} ブロック内に）作成します。

#### フォローアップパネル

ユーザーがウェルカムパネルの [OK] ボタンをクリックすると、 JavaScript コードは 2 つのパネルのそれぞれの `hidden` の値を変更して 2 つのパネルを入れ替えます。 フォローアップパネルは、HTML では次のようになります。

```html
<div id="awesome" class="panel" hidden>
  <h1>ありがとう！</h1>
  <p>今日は素晴らしいことに同意してくれて<strong>とても</strong>ありがとう！
  さあ、世界をもっと素晴らしいものにするために、
  そこから出て、素晴らしいことをしてください！</p>
</div>
```

### CSS

コンテンツは、以下の CSS を使用してスタイル設定されます。

```css
.panel {
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font: 22px "Open Sans", Helvetica, Arial, sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### 結果

{{ EmbedLiveSample('Example', 560, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlattrxref("hidden")}} 属性
- {{cssxref("display")}}
