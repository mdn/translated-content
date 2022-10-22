---
title: 基本表單應用
slug: conflicting/Web/Accessibility/ARIA
original_slug: Web/Accessibility/ARIA/forms/Basic_form_hints
---

## 表單的 label

當使用傳統的 HTML 表單元素建立表單時，提供控制用的標籤（label）以及將標籤與對應表單元素建立關聯是非常重要的。當  screen reader （例如瀏覽器、電子郵件……等等）瀏覽一個頁面時，screen reader 會顯示  form controls ，但若沒有標示 control 和  label 之間的關聯，  screen reader 沒法知道哪個 label 是對應哪個 control。

下面的範例顯示一個使用標籤的表單。注意每一個 {{ HTMLElement("input") }} 元件都有 **`id`**，每一個 {{ HTMLElement("label") }} 元件有 **`for`** 屬性，用來對應 {{ HTMLElement("input") }} 元素的 **`id`**。

_範例 1. 使用 label 的簡易表單_

```html
<form>
  <ul>
    <li>
      <input id="wine-1" type="checkbox" value="riesling"/>
      <label for="wine-1">Berg Rottland Riesling</label>
    </li>
    <li>
      <input id="wine-2" type="checkbox" value="weissbergunder"/>
      <label for="wine-2">Weissbergunder</label>
    </li>
    <li>
      <input id="wine-3" type="checkbox" value="pinot-grigio"/>
      <label for="wine-3">Pinot Grigio</label>
    </li>
    <li>
      <input id="wine-4" type="checkbox" value="gewurztraminer"/>
      <label for="wine-4">Berg Rottland Riesling</label>
    </li>
  </ul>
</form>
```

## 使用 ARIA 標籤

HTML 的 {{ HTMLElement("label") }} 元素適用於表單相關元素 , 但是許多表單控件被實現為動態 JavaScript 小部件 , 使用 {{ HTMLElement("div") }} 或 {{ HTMLElement("span") }}。[WAI-ARIA](http://www.w3.org/WAI/intro/aria.php), 來自 W3C 的網路無障礙計畫 ( [Web Accessibility Initiative](http://www.w3.org/WAI/) ) 的**無障礙互聯網應用程序**規範 ( **Accessible Rich Internet Applications** specification ) , 為這些情況提供了 [**`aria-labelledby`**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby) 屬性。

下面的範例顯示使用無序列表 (unordered list ) 實現的單選按鈕組 (radio button group )。注意程式碼第三行 , {{ HTMLElement("li") }} 元素將  **`aria-labelledby`** 屬性設置為 `"rg1_label"` , 在第一行中元素 {{ HTMLElement("h3") }} 的  **`id` **, 即單選按鈕組的標籤。

_範例 2._ 使用無序列表實現的單選按鈕組

```html
<h3 id="rg1_label">Lunch Options</h3>

<ul class="radiogroup" id="rg1"  role="radiogroup" aria-labelledby="rg1_label">
  <li id="r1"  tabindex="-1" role="radio" aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Thai
  </li>
  <li id="r2"  tabindex="-1" role="radio"  aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Subway
  </li>
  <li id="r3"   tabindex="0" role="radio" aria-checked="true">
    <img role="presentation" src="radio-checked.gif" /> Radio Maria
  </li>
</ul>
```

## Describing with ARIA

Form controls sometimes have a description associated with them, in addition to the label. ARIA provides the [**aria-describedby**](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-describedby) attribute to directly associate the description with the control.

The example below shows a {{ HTMLElement("button") }} element that is described by a sentence in a separate {{ HTMLElement("div") }} element. The **aria-describedby** attribute on the {{ HTMLElement("button") }} references the **id** of the {{ HTMLElement("div") }}.

_Example 3. A button described by a separate element._

```html
<button aria-describedby="descriptionRevert">Revert</button>
<div id="descriptionRevert">Reverting will undo any changes that have been made
                            since the last save.</div>
```

(Note that the **aria-describedby** attribute is used for other purposes, in addition to form controls.)

## Required and invalid fields

Web developers typically use presentational strategies to indicated required or invalid fields, but assistive technologies (ATs) cannot necessarily infer this information from the presentation. ARIA provides attributes for indicating that form controls are required or invalid:

- The [**aria-required**](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-required) property can be applied to a form element to indicate to an AT that it is required to complete the form.
- The [**aria-invalid**](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-invalid) state can be programmatically applied to indicate to an AT which data fields have incorrect data, so that the user knows they have entered invalid data.

The example below shows a simple form with three fields. On lines 4 and 12, the **aria-required** attributes are set to true (in addition to the asterisks next to the labels) indicating that the name and email fields are required. The second part of the example is a snippet of JavaScript that validates the email format and sets the **aria-invalid** attribute of the email field (line 12 of the HTML) according to the result (in addition to changing the presentation of the element).

_Example 4a. A form with required fields._

```html
<form>
  <div>
    <label for="name">* Name:</label>
    <input type="text" value="name" id="name" aria-required="true"/>
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input type="text" value="phone" id="phone" aria-required="false"/>
  </div>
  <div>
    <label for="email">* E-mail:</label>
    <input type="text" value="email" id="email" aria-required="true"/>
  </div>
</form>
```

_Example 4b. Part of a script that validates the form entry._

```js
var validate = function () {
  var emailElement = document.getElementById(emailFieldId);
  var valid = emailValid(formData.email); // returns true if valid, false otherwise

  emailElement.setAttribute("aria-invalid", !valid);
  setElementBorderColour(emailElement, valid); // sets the border to red if second arg is false
};
```

## 提供有幫助的錯誤訊息

繼續閱讀了解如何使用  [ARIA alerts to enhance forms](/zh-TW/docs/aria/forms/alerts).

> **備註：** TBD: we should either combine into one article or separate into techniques, or both. Also, is ARIA markup appropriate for error messages in a page loaded after server side validation?

參閱 [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/) .
