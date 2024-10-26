---
title: "HTMLButtonElement: command プロパティ"
short-title: command
slug: Web/API/HTMLButtonElement/command
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

**`command`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、このボタンで制御される要素で実行されるアクションを取得し、設定します。これに効果を持たせるには、[`commandfor`](/ja/docs/Web/HTML/Element/button#commandfor) を設定する必要があります。

これは HTML の [`command`](/ja/docs/Web/HTML/Element/button#command) 属性を反映します。

## 値

文字列です。有効な値については [`command`](/ja/docs/Web/HTML/Element/button#command) 属性の記事を参照してください。

## 例

### 基本的な例

```html
<button id="toggleBtn" commandfor="mypopover" command="toggle-popover">
  ポップオーバーをトグル切り替え
</button>

<div popover id="mypopover">
  <button commandfor="mypopover" command="hide-popover">
    ポップオーバーを非表示
  </button>
</div>
```

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.command = "show-popover";
```

### イベントを使用した独自の例

```html
<button commandfor="the-image" command="--rotate-left">左回転</button>

<button commandfor="the-image" command="--rotate-right">右回転</button>

<img id="the-image" src="photo.jpg" alt="[ここに適切な代替テキストを追加]" />
```

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  if (event.command == "--rotate-left") {
    event.target.style.rotate = "-90deg";
  } else if (event.command == "--rotate-right") {
    event.target.style.rotate = "90deg";
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
- {{domxref("CommandEvent")}}
