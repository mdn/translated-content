---
title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
---

{{HTMLElement("input")}} 元素的 **`"submit"`** 類型會被視為提交按鈕（submit button）——點選的話就能把表單提交到伺服器。

| **[值](#值)**      | 用作按鈕 label 的 {{domxref("DOMString")}}                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **事件**           | [`click`](/zh-TW/docs/Web/API/Element/click_event)                                                                             |
| **常見的支援屬性** | [`type`](/zh-TW/docs/Web/HTML/Reference/Elements/input#type) 與 [`value`](/zh-TW/docs/Web/HTML/Reference/Elements/input#value) |
| **IDL 屬性**       | `value`                                                                                                                        |
| **方法**           | 無                                                                                                                             |

## 值

`<input type="submit">` 元素的 [`value`](/zh-TW/docs/Web/HTML/Reference/Elements/input#value) 屬性會包含用作按鈕 label 的 {{domxref("DOMString")}}。

```html hidden
<input type="submit" value="Submit to me" />
```

{{EmbedLiveSample("值", 650, 30)}}

### 不指定 value 屬性

如果不指定 `value`，視瀏覽器不同，按鈕會是 _Submit_/_Submit Query_/_提交_ 之類的預設值：

```html hidden
<input type="submit" />
```

{{EmbedLiveSample("不指定 value 屬性", 650, 30)}}

## 使用提交按鈕

`<input type="submit">` 按鈕用於提交表單。如果想自訂按鈕、並透過 JavaScript 自訂其行為，你應該用 [`<input type="button">`](/zh-TW/docs/Web/HTML/Reference/Elements/input/button)、或更好的，{{htmlelement("button")}} 元素。

請記住，如果表單內只有一個按鈕元素（例如 `<button>My button</button>`）的話，瀏覽器會自動把它視為提交按鈕。你要在其他按鈕之外，明確宣告一個提交按鈕。

### 簡易的提交按鈕

我們要開始建立一個新的提交按鈕：

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Submit to me" />
  </div>
</form>
```

它會被渲染為：

{{EmbedLiveSample("簡易的提交按鈕", 650, 100)}}

試著在文字區塊內輸入些文字，接著提交表單。

提交時，送到伺服器的成對 name/value 資料會 be along the lines of `text=mytext`，視你在文字區塊內輸入了什麼。資料在哪裡並如何被送出，取決於 `<form>` 屬性和其他細節的設定：請參見[傳送表單資料](/zh-TW/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)。

### 增加提交的快捷鍵

鍵盤快捷鍵，又稱熱鍵，能讓用戶透過鍵盤按鍵或組合觸發按鈕事件。要給提交按鈕添加鍵盤快捷鍵——如同 {{HTMLElement("input")}} 那樣——你需要使用全域屬性 [`accesskey`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#accesskey)。

下例之中，<kbd>s</kbd> 被指定為快捷鍵（you'll need to press <kbd>s</kbd> plus the particular modifier keys for your browser/OS combination; see [`accesskey`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#accesskey) for a useful list of those）。

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Submit to me" accesskey="s" />
  </div>
</form>
```

{{EmbedLiveSample("增加提交的快捷鍵", 650, 100)}}

> [!NOTE]
> 上例的問題很明顯，就是用戶不知道要按什麼快捷鍵！在實際網站中，你要提供不干擾網站整體設計的快捷鍵資訊：像是提供易於訪問的連結，告訴用戶說網站的快捷鍵是什麼。

### 禁用與啟用提交按鈕

要禁用提交按鈕，就如同下例般指定全域屬性 [`disabled`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#disabled)：

```html hidden
<input type="submit" value="Disabled" disabled />
```

你可以在 run time 時藉由設定 `disabled` 的 `true` or `false` 來禁用或啟用提交按鈕。在 JavaScript 就看起來像 `btn.disabled = true`。

> [!NOTE]
> 請參見 [`<input type="button">`](/zh-TW/docs/Web/HTML/Reference/Elements/input/button#Disabling_and_enabling_a_button) 頁面以取得關於禁用/啟用提交按鈕的詳細資訊。

> [!NOTE]
> Firefox 不若其他瀏覽器，它預設上會在 {{HTMLElement("button")}} 跨網頁加載時[保持動態禁用狀態](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。請用 [`autocomplete`](/zh-TW/docs/Web/HTML/Reference/Elements/button#autocomplete) 屬性控制這個功能。

## 驗證

提交按鈕不參與強制驗證：they have no real value to be constrained.

## 範例

上面已經有一些程式碼了。這裡也沒有什麼還能講的。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 實做它的 {{HTMLElement("input")}} 與 {{domxref("HTMLInputElement")}} 介面。
- {{HTMLElement("button")}} 元素。
