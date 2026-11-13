---
title: Document：forms 屬性
slug: Web/API/Document/forms
l10n:
  sourceCommit: b756b8ef42bfd3b9e2f3d46fb44d41e2d3f15e25
---

{{APIRef("DOM")}}

{{domxref("Document")}} 介面的 **`forms`** 唯讀屬性回傳一個 {{domxref("HTMLCollection")}}，列出文件中所有的 {{HTMLElement("form")}} 元素。

> [!NOTE]
> 同樣地，你可以使用 {{domxref("HTMLFormElement.elements")}} 屬性存取表單中所有使用者輸入元件的清單。

你也可以將具名的 `<form>` 元素作為 `document` 物件的屬性來存取。例如，`document["login-form"]` 和 `document.forms["login-form"]` 都可以用來存取名為 `login-form` 的表單。

> [!WARNING]
> 依賴 `document["form-name"]` 模式相當危險且不建議使用，因為這可能會與瀏覽器現有或未來的 API 產生預期外的衝突。例如，若瀏覽器未來引入了內建的 `document["login-form"]` 屬性，你的程式碼可能就無法再存取該表單元素。為避免此類衝突，請務必使用 `document.forms` 來存取具名表單。

## 值

一個 {{domxref("HTMLCollection")}} 物件，列出文件中所有的表單。集合中的每個項目都是一個 {{domxref("HTMLFormElement")}}，代表一個 `<form>` 元素。

如果文件中沒有表單，回傳的集合將為空，且長度為零。

## 範例

### 獲取表單資訊

```html
<form id="robby">
  <input type="button" value="羅比的表單" />
</form>

<form id="dave">
  <input type="button" value="戴夫的表單" />
</form>

<form id="paul">
  <input type="button" value="保羅的表單" />
</form>
```

```js
document.querySelectorAll("input[type=button]").forEach((button, i) => {
  button.addEventListener("click", (event) => {
    console.log(document.forms[i].id);
  });
});
```

### 從表單中獲取元素

```js
const selectForm = document.forms[index];
const selectFormElement = document.forms[index].elements[index];
```

### 具名表單存取

```html
<form name="login">
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">登入</button>
</form>
```

```js
const loginForm = document.forms.login; // 或 document.forms['login']
loginForm.elements.email.placeholder = "test@example.com";
loginForm.elements.password.placeholder = "password";
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTML 表單](/zh-TW/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("form")}} 和 {{domxref("HTMLFormElement")}} 介面
