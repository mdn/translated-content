---
title: "Element: matches() メソッド"
short-title: matches()
slug: Web/API/Element/matches
l10n:
  sourceCommit: dac3299ae197f40fcf3369f6f58d49e00538bb1e
---

{{APIRef("DOM")}}

**`matches()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素が指定した [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors) によって選択されるかどうかを検査します。

## 構文

```js-nolint
matches(selectors)
```

### 引数

- `selectors`
  - : {{domxref("Element")}} を検査するために有効な [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)を格納した文字列です。

### 返値

{{domxref("Element")}} が `selectors` に一致すれば `true` です。そうでなければ `false` です。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : `selectors` が CSS のセレクターリストとして解釈できない場合に発生します。

## 例

### HTML

```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>
```

### JavaScript

```js
const birds = document.querySelectorAll("li");

for (const bird of birds) {
  if (bird.matches(".endangered")) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}
```

要素が実際に値 `endangered` 持つ `class` 属性を持つので、これは、コンソールのログに "The Philippine eagle is endangered!" と表示されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)モジュール
- セレクターを使用するその他のメソッド: {{domxref("element.querySelector()")}} および {{domxref("element.closest()")}}
