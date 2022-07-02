---
title: Event.defaultPrevented
slug: Web/API/Event/defaultPrevented
page-type: web-api-instance-property
tags:
  - プロパティ
  - 読み取り専用
browser-compat: api.Event.defaultPrevented
translation_of: Web/API/Event/defaultPrevented
---
{{ APIRef("DOM") }}

**`defaultPrevented`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、論理値で {{ domxref("Event.preventDefault()") }} の呼び出しがイベントをキャンセルしたかどうかを示す値を返します。

## 値

論理値で、 `true` は既定の{{glossary("user agent", "ユーザーエージェント")}}の動作が抑制されたことを、 `false` はそうではないことを表しています。

## 例

この例は 2 つの {{htmlElement("a")}} 要素のリンクを訪れる試みをログ出力します。 JavaScript は 2 番目のリンクの動作を抑制するために使用しています。

### HTML

```html
<p><a id="link1" href="#link1">Visit link 1</a></p>
<p><a id="link2" href="#link2">Try to visit link 2</a> (you can't)</p>
<p id="log"></p>
```

### JavaScript

```js
function stopLink(event) {
  event.preventDefault();
}

function logClick(event) {
  const log = document.getElementById('log');

  if (event.target.tagName === 'A') {
    if (event.defaultPrevented) {
      log.innerText = 'Sorry, but you cannot visit this link!\n' + log.innerText;
    }
    else {
      log.innerText = 'Visiting link...\n' + log.innerText;
    }
  }
}

const a = document.getElementById('link2');
a.addEventListener('click', stopLink);
document.addEventListener('click', logClick);
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
