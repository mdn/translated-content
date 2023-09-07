---
title: Использование Объектов FormData
slug: Web/API/FormData/Using_FormData_Objects
---

Объект [`FormData`](/ru/docs/Web/API/FormData) позволяет создать набор пар ключ/значение и передать их, используя `XMLHttpRequest.` Объект [`FormData`](/ru/docs/Web/API/FormData) предназначен для передачи данных форм, однако может быть использован для передачи пар ключ/значение независимо от форм. Данные передаются в том же формате, как и данные, передаваемые методом `{{domxref("HTMLFormElement.submit","submit()")}}` формы, с установленной кодировкой `enctype="multipart/form-data"`.

## Создание объекта FormData

Вы можете самостоятельно создать пустой объект `FormData`, наполнив его затем данными, используя его метод `{{domxref("FormData.append","append()")}}:`

```js
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // число 123456 немедленно преобразуется в строку "123456"

// Файл, выбранный пользователем
formData.append("userfile", fileInputElement.files[0]);

// JavaScript Blob объект
var content = '<a id="a"><b id="b">hey!</b></a>'; // содержимое нового файла...
var blob = new Blob([content], { type: "text/xml" });

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```

> **Примечание:** Поля "userfile" и "webmasterfile" оба содержат файлы. Число, переданное полю "accountnum" немедленно преобразуется в строку. Преобразование осуществляется методом [`FormData.append()`](</en/DOM/XMLHttpRequest/FormData#append()> "en/XMLHttpRequest/FormData#append()") (Значение поля может быть {{ domxref("Blob") }}, {{ domxref("File") }}, или строкой: **если значение не является ни Blob, ни File, то оно автоматически преобразуется в строку).**

Данный пример показывает создание экземпляра `FormData`, содержащего поля "username", "accountnum", "userfile" и "webmasterfile". Экземпляр `FormData` затем отправляется при помощи метода [`send()`](</en/DOM/XMLHttpRequest#send()> "en/XMLHttpRequest#send()") объекта `XMLHttpRequest`. Поле "webmasterfile" является экземпляром класса `{{domxref("Blob")}}`. Объект класса `Blob` является файлом-подобным объектом, содержащим "сырые" данные. Определение данных как `Blob` не является обязательным в нативном javascript. Интерфейс`{{ domxref("File") }}`базируется на `Blob`, наследуя его функциональность и расширяя его для поддержки файлов в ОС пользователя. Для создания объектов класса `Blob` используйте `{{domxref("Blob.Blob","Blob() constructor")}}`.

## Получение объекта FormData из HTML формы

Для создания объекта `FormDatа`, содержащего данные существующей формы ({{ HTMLElement("form") }}) передайте форму в качестве аргумента при создании объекта `FormData:`

> **Примечание:**FormData будет использовать только те поля ввода, которые используют атрибут name.

```js
var formData = new FormData(someFormElement);
```

Например:

```js
var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

Вы так же можете добавить дополнительные данные в объект `FormData` после его создания и до отправки данных:

```js
var formElement = document.querySelector("form");
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

Такой приём позволяет включать в форму дополнительную информацию, которая, например, не нуждается в демонстрации пользователю.

## Отправка файлов при помощи объекта FormData

Вы так же можете отправлять файлы при помощи `FormData`. Просто включите {{ HTMLElement("input") }} с типом `file` в форму.

```html
<form enctype="multipart/form-data" method="post" name="fileinfo">
  <label>Your email address:</label>
  <input
    type="email"
    autocomplete="on"
    autofocus
    name="userid"
    placeholder="email"
    required
    size="32"
    maxlength="64" /><br />
  <label>Custom file label:</label>
  <input type="text" name="filelabel" size="12" maxlength="32" /><br />
  <label>File to stash:</label>
  <input type="file" name="file" required />
  <input type="submit" value="Stash the file!" />
</form>
<div></div>
```

Затем вы сможете отправить выбранный файл следующим образом:

```js
var form = document.forms.namedItem("fileinfo");
form.addEventListener(
  "submit",
  function (ev) {
    var oOutput = document.querySelector("div"),
      oData = new FormData(form);

    oData.append("CustomField", "This is some extra data");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "stash.php", true);
    oReq.onload = function (oEvent) {
      if (oReq.status == 200) {
        oOutput.innerHTML = "Uploaded!";
      } else {
        oOutput.innerHTML =
          "Error " +
          oReq.status +
          " occurred when trying to upload your file.<br />";
      }
    };

    oReq.send(oData);
    ev.preventDefault();
  },
  false,
);
```

> **Примечание:** Если для формы указан атрибут `method`, то будет использован именно этот метод для отправки данных на сервер, а не метод, указанный в вызове `open()`

Вы так же можете добавить `{{ domxref("File") }}` или `{{ domxref("Blob") }}` непосредственно к объекту `{{ domxref("FormData") }}:`

```js
data.append("myfile", myBlob, "filename.txt");
```

Метод {{domxref("FormData.append","append()")}} принимает 3й опциональный параметр - название файла, которое добавляется в заголовок `Content-Disposition` при отправке на сервер. Если название файла не указано (или данный параметр не поддерживается) используется имя "blob".

Вы так же можете использовать `FormData` с jQuery:

```js
var fd = new FormData(document.querySelector("form"));
fd.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false, // Сообщить jQuery не передавать эти данные
  contentType: false, // Сообщить jQuery не передавать тип контента
});
```

## Отправка форм и файлов при помощи AJAX _без использования_ объекта `FormData`

Если вы заинтересованы в отправке форм и файлов при помощи [AJAX](/ru/docs/AJAX) _без использования_ FormData, прочитайте [/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files)

## See also

- [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- {{domxref("HTMLFormElement")}}
- {{domxref("Blob")}}
- [Typed Arrays](/ru/docs/Web/JavaScript/Typed_arrays)
