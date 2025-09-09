---
title: <datalist>：HTML 資料清單元素
slug: Web/HTML/Reference/Elements/datalist
---

**`<datalist>`** [HTML](/zh-TW/docs/Web/HTML) 元素包含一組 {{HTMLElement("option")}} 元素，這些元素代表其他控制項中可選擇的允許或推薦選項。

{{InteractiveExample("HTML Demo: &lt;datalist&gt;", "tabbed-standard")}}

```html interactive-example
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

要將 `<datalist>` 元素綁定到控制項，我們在 [`id`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/id) 屬性中給予它一個唯一標識符，然後在具有相同標識符值的 {{HTMLElement("input")}} 元素中添加 [`list`](/zh-TW/docs/Web/HTML/Reference/Elements/input#list) 屬性。只有某些類型的 {{HTMLElement("input")}} 支援此行為，並且在不同的瀏覽器中可能也會有所不同。

> [!NOTE]
> `<option>` 元素可以將值存儲為內部內容和 `value` 和 `label` 屬性。在下拉選單中哪一個將可見取決於瀏覽器，但單擊時，輸入到控制欄中的內容始終來自 `value` 屬性。

## 屬性

此元素除了[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)外，沒有其他屬性，這些屬性是所有元素共用的。

## 範例

### 文本類型

在類型為 {{HTMLElement("input/text", "text")}}、{{HTMLElement("input/search", "search")}}、{{HTMLElement("input/url", "url")}}、{{HTMLElement("input/tel", "tel")}}、{{HTMLElement("input/email", "email")}} 和 {{HTMLElement("input/number", "number")}} 的控制項中，推薦的值在用戶點擊或雙擊控制項時顯示為下拉菜單。通常，控制項的右側也會有一個指向預定值存在的箭頭。

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

{{EmbedLiveSample("文本類型", 600, 40)}}

### 日期和時間類型

類型 {{HTMLElement("input/month", "month")}}、{{HTMLElement("input/week", "week")}}、{{HTMLElement("input/date", "date")}}、{{HTMLElement("input/time", "time")}} 和 {{HTMLElement("input/datetime-local", "datetime-local")}} 可以顯示一個界面，方便用戶選擇日期和時間。預定值可以在那裡顯示，允許用戶快速填寫控制項的值。

> [!NOTE]
> 當類型不受支援時，將使用 `text` 類型創建簡單的文本字段。該字段將正確識別推薦值並將其顯示給用戶作為下拉菜單。

```html
<input type="time" list="popularHours" />
<datalist id="popularHours">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>
```

{{EmbedLiveSample("日期和時間類型", 600, 40)}}

### 範圍類型

在 {{HTMLElement("input/range", "range")}} 類型中的推薦值將顯示為用戶可以輕松選擇的一系列哈希標記。

```html
<label for="tick">Tip amount:</label>
<input type="range" list="tickmarks" min="0" max="100" id="tick" name="tick" />
<datalist id="tickmarks">
  <option value="0"></option>
  <option value="10"></option>
  <option value="20"></option>
  <option value="30"></option>
</datalist>
```

{{EmbedLiveSample("範圍類型", 600, 70)}}

### 顏色類型

{{HTMLElement("input/color", "color")}} 類型可以在由瀏覽器提供的界面中顯示預定義的顏色。

```html
<label for="colors">Pick a color (preferably a red tone):</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>
```

{{EmbedLiveSample("顏色類型", 600, 70)}}

### 密碼類型

規範允許將 `<datalist>` 與 {{HTMLElement("input/password", "password")}} 類型連結，但出於安全原因，沒有瀏覽器支持。

```html
<label for="pwd">Enter a password:</label>
<input type="password" list="randomPassword" id="pwd" />
<datalist id="randomPassword">
  <option value="5Mg[_3DnkgSu@!q#"></option>
</datalist>
```

{{EmbedLiveSample("密碼類型", 600, 40)}}

## 無障礙議題

在決定使用 `<datalist>` 元素時，請注意以下一些無障礙性問題：

- 數據列表選項的字體大小不會放大，始終保持相同大小。在縮放或放大其餘內容時，自動建議的內容不會增大或減小。
- 由於使用 CSS 定位列表選項的能力非常有限甚至不存在，因此無法為高對比度模式設置渲染樣式。
- 一些屏幕閱讀器/瀏覽器組合（包括 NVDA 和 Firefox）不會宣告自動建議彈出窗口的內容。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >，或是零個或多個 {{HTMLElement("option")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"
            >listbox</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>不允許 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("input")}} 元素，特別是其 [`list`](/zh-TW/docs/Web/HTML/Reference/Elements/input#list) 屬性；
- {{HTMLElement("option")}} 元素。
