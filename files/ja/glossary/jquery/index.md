---
title: jQuery
slug: Glossary/jQuery
tags:
  - Glossary
  - JQuery
  - JavaScript
translation_of: Glossary/jQuery
---
**jQuery** は {{Glossary("JavaScript")}} {{Glossary("Library", "ライブラリー")}} であり、{{Glossary("DOM")}} 操作を簡単にすること、{{Glossary("AJAX")}} 呼び出し、{{Glossary("Event", "イベント")}} ハンドリングに注力しています。

jQuery は `$(selector).action()` というフォーマットを使って要素をイベントに割り当てます。詳しく説明すると、`$(selector)` が jQuery を呼び出して `selector` 要素を選択し、 `.action()`というイベント {{Glossary("API")}} に割り当てます。

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

上のコードは下のコードと同じ関数を実行します:

```js
window.onload = function() {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
};
```

または

```js
window.addEventListener("load", () => {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
});
```

## 関連項目

### 一般知識

- Wikipedia の {{Interwiki("wikipedia", "jQuery")}}
- [jQuery Official Website](https://jquery.com/)

### 技術情報

- [API リファレンス文書](https://api.jquery.com/)[](https://api.jquery.com/)
