---
title: 使用値
slug: Web/CSS/used_value
tags:
  - CSS
  - リファレンス
  - レイアウト
translation_of: Web/CSS/used_value
---
{{CSSRef}}

**使用値** (used value) は [CSS](/ja/docs/Web/CSS) プロパティにおいて、[計算値](/ja/docs/Web/CSS/computed_value)で行われたすべての計算が実行された後の値です。

{{glossary("user agent", "ユーザーエージェント")}}が計算を終了した後、すべての CSS プロパティは使用値を持ちます。長さ ({{cssxref("width")}} や {{cssxref("line-height")}} など) の使用値はピクセル数です。一括指定プロパティ ({{cssxref("background")}} など) の使用値は、各成分 ({{cssxref("background-color")}} や {{cssxref("background-size")}} など) のプロパティに、 {{cssxref("position")}} や {{cssxref("float")}} が加味されたものと一致します。

> **Note:** DOM の {{domxref("Window.getComputedStyle", "getComputedStyle()")}} API が返すのは[解決値](/ja/docs/Web/CSS/resolved_value)であり、これはプロパティによって[計算値](/ja/docs/Web/CSS/computed_value)または[使用値](/ja/docs/Web/CSS/used_value)のどちらかになります。

## 例

この例は、3 つの要素の `width` の使用値を計算および表示します (大きさを変更すると更新されます)。

### HTML

```html
<div id="no-width">
  <p>明示的な幅の指定なし</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>明示的な幅: 50%</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>明示的な幅: inherit</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* 結果を見やすくする */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### JavaScript

```js
function updateUsedWidth(id) {
  var div = document.querySelector(`#${id}`);
  var par = div.querySelector('.show-used-width');
  var wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener('resize', updateAllUsedWidths);
```

### 結果

{{ EmbedLiveSample('Example', '80%', 372) }}

## 計算値との違い

CSS 2.0 では、プロパティの計算の最後のステップとして*計算値*のみを定義していました。そして CSS 2.1 では、使用値を別な定義として導入しました。そして、計算値がパーセント値である親の幅や高さを、要素が明確に継承できるようになりました。レイアウトに依存しない CSS プロパティ (`display`, `font-size`, `line-height` など) に関しては、計算値と使用値は同じです。以下のものは CSS 2.1 のプロパティのうち、レイアウトに依存し、計算値と使用値が異なるものです。 ([CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36) より取得)。

- `background-position`
- `bottom`, `left`, `right`, `top`
- `height`, `width`
- `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
- `min-height`, `min-width`
- `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
- `text-indent`

## 仕様書

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("CSS2.2", "cascade.html#used-value", "used value")}}
      </td>
      <td>{{Spec2("CSS2.2")}}</td>
      <td>変更なし</td>
    </tr>
    <tr>
      <td>
        {{SpecName("CSS2.1", "cascade.html#used-value", "used value")}}
      </td>
      <td>{{Spec2("CSS2.1")}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

## 関連情報

- {{domxref("window.getComputedStyle")}}
- {{CSS_key_concepts}}
