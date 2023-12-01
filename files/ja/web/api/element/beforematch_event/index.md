---
title: "Element: beforematch イベント"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}{{SeeCompatTable}}

要素が **`beforematch`** イベントを受け取るのは、それが _hidden until found_ の状態にあり、ユーザーが「ページ内検索」機能やフラグメントナビゲーションによってコンテンツを見つけたため、ブラウザーがそのコンテンツを表示しようとしているときです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("beforematch", (event) => {});

onbeforematch = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 使用上のメモ

HTML の [`hidden`](/ja/docs/Web/HTML/Global_attributes/hidden) 属性は、`until-found` の値を受け入れます。この値が指定されると、要素は非表示になりますが、ブラウザーの「ページ内検索」機能やフラグメントナビゲーションではそのコンテンツにアクセスできるようになります。これらの機能により、"hidden until found" のサブツリーの要素にスクロールが発生した場合、ブラウザーは次のようになります。

- 非表示の要素で `beforematch` イベントが発生する
- その要素から `hidden` 属性が除去される
- その要素へスクロールする

## 例

### beforematch の使用

この例では、次のものがあります。

- 2 つの {{HTMLElement("div")}} 要素。最初の要素は非表示で、2 つ目には `hidden="until-found"` と `id="until-found-box"` 属性があります。
- `"until-found-box"` フラグメントをターゲットとしたリンク。

また、hidden until found 要素で発行される `beforematch` イベントを待ち受けする JavaScript もあります。イベントハンドラーはボックスのテキストコンテンツを変更します。

#### HTML

```html
<a href="#until-found-box">非表示のコンテンツへ移動</a>

<div>非表示ではない</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
```

```html hidden
<button id="reset">リセット</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}
```

```css hidden
#until-found-box {
  scroll-margin-top: 200px;
}
```

#### JavaScript

```js
const untilFound = document.querySelector("#until-found-box");
untilFound.addEventListener(
  "beforematch",
  () => (untilFound.textContent = "I've been revealed!"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### 結果

「非表示のコンテンツへ移動」ボタンをクリックすると、hidden-until-found 要素に移動します。`beforematch` イベントが発行され、テキストコンテンツが更新され、要素のコンテンツが表示されます。

例を再度実行する場合は、「リセット」を押してください。

{{EmbedLiveSample("Using beforematch", "", 300)}}

ブラウザーが `hidden` 属性の列挙値 `"until-found"` に対応していない場合、2つ目の `<div>` は非表示になります（`until-found` 値が追加される前の `hidden` は論理属性でした）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`hidden`](/ja/docs/Web/HTML/Global_attributes/hidden) 属性
