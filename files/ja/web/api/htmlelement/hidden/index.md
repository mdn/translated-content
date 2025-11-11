---
title: "HTMLElement: hidden プロパティ"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
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
  - : この要素は _hidden until found_ で、隠されているが、ページ内検索で見つかったり、フラグメントナビゲーションで到達したりすると表示されることを意味します。

この属性の使い方の詳細は、このプロパティが反映する HTML の [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性のページを参照してください。

## 例

ここでは、非表示のブロックを使用して、ユーザーが珍しい要求に同意した後に表示されるお礼のメッセージを含める例を示します。

### HTML

この HTML には 2 つのパネルがあります。1 つはようこそパネルで、ユーザーに素晴らしいことを尋ね、もう一方はフォローアップパネルで、初期状態では非表示です。

```html
<div id="welcome" class="panel">
  <h1>Foobar.com へようこそ！</h1>
  <p>[OK] をクリックすると、今日は素晴らしいと同意したことになります。</p>
  <button class="button" id="okButton">OK</button>
</div>

<div id="awesome" class="panel" hidden>
  <h1>ありがとう！</h1>
  <p>今日は素晴らしいと同意してくれてありがとう！</p>
</div>
```

### CSS

コンテンツは、以下の CSS を使用してスタイル設定されます。

```css
.panel {
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font:
    22px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### JavaScript

この JavaScript はイベントリスナーを [OK] ボタンに追加し、これが "welcome" パネルを非表示にして "awesome" パネルを表示します。

```js
document.getElementById("okButton").addEventListener(
  "click",
  () => {
    document.getElementById("welcome").hidden = true;
    document.getElementById("awesome").hidden = false;
  },
  false,
);
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
