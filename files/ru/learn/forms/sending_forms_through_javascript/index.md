---
title: Отправка форм при помощи JavaScript
slug: Learn/Forms/Sending_forms_through_JavaScript
---

{{LearnSidebar}}

HTML формы могут декларативно отправлять [HTTP](/ru/docs/HTTP)-запросы. Но формы также могут подготовить HTTP-запросы для отправки с помощью JavaScript, например при помощи `XMLHttpRequest`. В этой статье исследуются подобные подходы.

## Формы не всегда формы

В современных веб-приложениях, одностраничных приложениях и приложениях на основе фреймворков, обычно [HTML-формы](/ru/docs/HTML/Forms) используются для отправки данных без загрузки нового документа при получении данных ответа. В начале поговорим о том почему это требует другого подхода.

### Получение контроля над глобальным интерфейсом

Отправка стандартной HTML формы, как описывалось в предыдущей статье, загружает URL-адрес, по которому были отправлены данные, это означает, что окно браузера перемещается с полной загрузкой страницы. Если избегать полную перезагрузку страницы, можно обеспечить более плавную работу, за счёт предотвращения задержек в сети и возможных визуальных проблем (например, мерцания).

Многие современные пользовательские интерфейсы используют HTML формы только для сбора пользовательского ввода, а не для для отправки данных. Когда пользователь пытается отправить свои данные, приложение берёт контроль и асинхронно передаёт данные в фоновом режиме, обновляя только ту часть всего интерфейса пользователя, которой требуется обновление.

Асинхронная отправка произвольных данных обычно называется [AJAX](/ru/docs/AJAX), что означает **"Asynchronous JavaScript And XML"** (Асинхронный JavaScript и XML).

### Чем он отличается?

Объект {{domxref("XMLHttpRequest")}} (XHR) DOM может создавать HTTP-запросы, отправлять их, и получать их результат. Исторически, {{domxref("XMLHttpRequest")}} был разработан для получения и отправки [XML](/ru/docs/XML) в качестве формата обмена, который со временем был заменён на [JSON](/ru/docs/JSON). Но ни XML, ни JSON не вписываются в кодировку запроса данных формы. Данные формы (`application/x-www-form-urlencoded`) состоят из списка пар ключ/значение в кодировке URL. Для передачи бинарных данных, HTTP-запрос преобразуется в `multipart/form-data`.

> **Примечание:** Сейчас [Fetch API](/ru/docs/Web/API/Fetch_API) часто используется вместо XHR — это современная, обновлённая версия XHR, которая работает в похожем стиле, но имеет несколько преимуществ. Большая часть XHR-кода, которую вы увидите в этой статье можно заменить на Fetch.

Если вы управляете фронтендом (кодом, который выполняется в браузере) и бэкендом (кодом, который выполняется на стороне сервера), вы можете отправлять JSON/XML и обрабатывать их как хотите.

Но если вы хотите использовать сторонний сервис, то вам необходимо отправлять данные в формате, который требуется сервису.

Так как нам следует отправлять подобные данные? Ниже описаны различные необходимые вам техники.

## Отправка данных формы

Есть три способа отправки данных формы:

- Создание `XMLHttpRequest` вручную.
- Использование самостоятельного `FormData` объекта.
- Использование `FormData` связанного с `<form>` элементом.

Давайте рассмотрим их подробнее:

### Создание XMLHttpRequest вручную

{{domxref("XMLHttpRequest")}} это самый безопасный и надёжный способ создавать HTTP-запросы. Для отправки данных формы с помощью {{domxref("XMLHttpRequest")}}, подготовьте данные с помощью URL-кодирования, и соблюдайте специфику запросов данных формы.

Посмотрите на пример:

```html
<button>Click Me!</button>
```

И на JavaScript:

```js
const btn = document.querySelector("button");

function sendData(data) {
  console.log("Sending data");

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
    urlEncodedDataPairs = [],
    name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + "=" + encodeURIComponent(data[name]),
    );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Define what happens on successful data submission
  XHR.addEventListener("load", function (event) {
    alert("Yeah! Data sent and response loaded.");
  });

  // Define what happens in case of error
  XHR.addEventListener("error", function (event) {
    alert("Oops! Something went wrong.");
  });

  // Set up our request
  XHR.open("POST", "https://example.com/cors.php");

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Finally, send our data.
  XHR.send(urlEncodedData);
}

btn.addEventListener("click", function () {
  sendData({ test: "ok" });
});
```

Это результат:

{{EmbedLiveSample("Создание_XMLHttpRequest_вручную", "100%", 50)}}

> **Примечание:** This use of {{domxref("XMLHttpRequest")}} is subject to the {{glossary('same-origin policy')}} if you want to send data to a third party web site. For cross-origin requests, you'll need [CORS and HTTP access control](/ru/docs/HTTP/Access_control_CORS).

### Using XMLHttpRequest and the FormData object

Building an HTTP request by hand can be overwhelming. Fortunately, the [XMLHttpRequest specification](http://www.w3.org/TR/XMLHttpRequest/) provides a newer, simpler way to handle form data requests with the {{domxref("XMLHttpRequest/FormData","FormData")}} object.

The {{domxref("XMLHttpRequest/FormData","FormData")}} object can be used to build form data for transmission, or to get the data within a form element to manage how it's sent. Note that {{domxref("XMLHttpRequest/FormData","FormData")}} objects are "write only", which means you can change them, but not retrieve their contents.

Using this object is detailed in [Using FormData Objects](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects), but here are two examples:

#### Using a standalone FormData object

```html
<button>Click Me!</button>
```

You should be familiar with that HTML sample. Now for the JavaScript:

```js
const btn = document.querySelector("button");

function sendData(data) {
  const XHR = new XMLHttpRequest(),
    FD = new FormData();

  // Push our data into our FormData object
  for (name in data) {
    FD.append(name, data[name]);
  }

  // Define what happens on successful data submission
  XHR.addEventListener("load", function (event) {
    alert("Yeah! Data sent and response loaded.");
  });

  // Define what happens in case of error
  XHR.addEventListener(" error", function (event) {
    alert("Oops! Something went wrong.");
  });

  // Set up our request
  XHR.open("POST", "https://example.com/cors.php");

  // Send our FormData object; HTTP headers are set automatically
  XHR.send(FD);
}

btn.addEventListener("click", function () {
  sendData({ test: "ok" });
});
```

Here's the live result:

{{EmbedLiveSample("Using_a_standalone_FormData_object", "100%", 50)}}

#### Using FormData bound to a form element

You can also bind a `FormData` object to an {{HTMLElement("form")}} element. This creates a `FormData` object that represents the data contained in the form.

The HTML is typical:

```html
<form id="myForm">
  <label for="myName">Send me your name:</label>
  <input id="myName" name="name" value="John" />
  <input type="submit" value="Send Me!" />
</form>
```

But JavaScript takes over the form:

```js
window.addEventListener("load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
      alert("Oops! Something went wrong.");
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Access the form element...
  const form = document.getElementById("myForm");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
```

Here's the live result:

{{EmbedLiveSample("Using_FormData_bound_to_a_form_element", "100%", 50)}}

You can even get more involved with the process by using the form's {{domxref("HTMLFormElement.elements", "elements")}} property to get a list of all of the data elements in the form and manually manage them one at a time. To learn more about that, see the example in [Accessing form controls](/ru/docs/Web/API/HTMLFormElement/elements#accessing_form_controls).

## Dealing with binary data

If you use a {{domxref("XMLHttpRequest/FormData","FormData")}} object with a form that includes `<input type="file">` widgets, the data will be processed automatically. But to send binary data by hand, there's extra work to do.

There are many sources for binary data, including {{domxref("FileReader")}}, {{domxref("HTMLCanvasElement","Canvas")}}, and [WebRTC](/ru/docs/WebRTC/navigator.getUserMedia). Unfortunately, some legacy browsers can't access binary data or require complicated workarounds. To learn more about the `FileReader` API, see [Using files from web applications](/ru/docs/Using_files_from_web_applications).

The least complicated way of sending binary data is by using {{domxref("XMLHttpRequest/FormData","FormData")}}'s `append()` method, demonstrated above. If you have to do it by hand, it's trickier.

In the following example, we use the {{domxref("FileReader")}} API to access binary data and then build the multi-part form data request by hand:

```html
<form id="theForm">
  <p>
    <label for="theText">text data:</label>
    <input id="theText" name="myText" value="Some text data" type="text" />
  </p>
  <p>
    <label for="theFile">file data:</label>
    <input id="theFile" name="myFile" type="file" />
  </p>
  <button>Send Me!</button>
</form>
```

As you see, the HTML is a standard `<form>`. There's nothing magical going on. The "magic" is in the JavaScript:

```js
// Because we want to access DOM nodes,
// we initialize our script at page load.
window.addEventListener("load", function () {
  // These variables are used to store the form data
  const text = document.getElementById("theText");
  const file = {
    dom: document.getElementById("theFile"),
    binary: null,
  };

  // Use the FileReader API to access file content
  const reader = new FileReader();

  // Because FileReader is asynchronous, store its
  // result when it finishes to read the file
  reader.addEventListener("load", function () {
    file.binary = reader.result;
  });

  // At page load, if a file is already selected, read it.
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // If not, read the file once the user selects it.
  file.dom.addEventListener("change", function () {
    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData is our main function
  function sendData() {
    // If there is a selected file, wait it is read
    // If there is not, delay the execution of the function
    if (!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // To construct our multipart form data request,
    // We need an XMLHttpRequest instance
    const XHR = new XMLHttpRequest();

    // We need a separator to define each part of the request
    const boundary = "blob";

    // Store our body request in a string.
    let data = "";

    // So, if the user has selected a file
    if (file.dom.files[0]) {
      // Start a new part in our body's request
      data += "--" + boundary + "\r\n";

      // Describe it as form data
      data +=
        "content-disposition: form-data; " +
        // Define the name of the form data
        'name="' +
        file.dom.name +
        '"; ' +
        // Provide the real name of the file
        'filename="' +
        file.dom.files[0].name +
        '"\r\n';
      // And the MIME type of the file
      data += "Content-Type: " + file.dom.files[0].type + "\r\n";

      // There's a blank line between the metadata and the data
      data += "\r\n";

      // Append the binary data to our body's request
      data += file.binary + "\r\n";
    }

    // Text data is simpler
    // Start a new part in our body's request
    data += "--" + boundary + "\r\n";

    // Say it's form data, and name it
    data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
    // There's a blank line between the metadata and the data
    data += "\r\n";

    // Append the text data to our body's request
    data += text.value + "\r\n";

    // Once we are done, "close" the body's request
    data += "--" + boundary + "--";

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
      alert("Yeah! Data sent and response loaded.");
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
      alert("Oops! Something went wrong.");
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // Add the required HTTP header to handle a multipart form data POST request
    XHR.setRequestHeader(
      "Content-Type",
      "multipart/form-data; boundary=" + boundary,
    );

    // And finally, send our data.
    XHR.send(data);
  }

  // Access our form...
  const form = document.getElementById("theForm");

  // ...to take over the submit event
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
```

Here's the live result:

{{EmbedLiveSample("Dealing_with_binary_data", "100%", 150)}}

## Conclusion

Depending on the browser and the type of data you are dealing with, sending form data through JavaScript can be easy or difficult. The {{domxref("XMLHttpRequest/FormData","FormData")}} object is generally the answer, and you can use a [polyfill](https://github.com/jimmywarting/FormData) for it on legacy browsers.

## See also

### Learning path

- [Your first HTML form](/ru/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [How to structure an HTML form](/ru/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [The native form widgets](/ru/docs/Learn/HTML/Forms/The_native_form_widgets)
- [HTML5 input types](/ru/docs/Learn/HTML/Forms/HTML5_input_types)
- [Additional form controls](/ru/docs/Learn/HTML/Forms/Additional_form_controls)
- [UI pseudo-classes](/ru/docs/Learn/HTML/Forms/UI_pseudo-classes)
- [Styling HTML forms](/ru/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Form data validation](/ru/docs/Learn/HTML/Forms/Form_validation)
- [Sending form data](/ru/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)

### Advanced Topics

- [Sending forms through JavaScript](/ru/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [How to build custom form widgets](/ru/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [HTML forms in legacy browsers](/ru/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [Advanced styling for HTML forms](/ru/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [Property compatibility table for form widgets](/ru/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
