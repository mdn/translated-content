---
title: Использование Объектов FormData
slug: Web/API/FormData/Using_FormData_Objects
translation_of: Web/API/FormData/Using_FormData_Objects
---
<p class="summary">Объект <code><a href="/en-US/docs/Web/API/FormData">FormData</a></code> позволяет создать набор пар ключ/значение и передать их, используя <code><a href="/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a>.</code> Объект <code><a href="/en-US/docs/Web/API/FormData">FormData</a></code> предназначен для передачи данных форм, однако может быть использован для передачи пар ключ/значение независимо от форм. Данные передаются в том же формате, как и данные, передаваемые методом <code>{{domxref("HTMLFormElement.submit","submit()")}}</code> формы, с установленной кодировкой <code>enctype="multipart/form-data"</code>.</p>

<h2 id="Создание_объекта_FormData">Создание объекта FormData</h2>

<p>Вы можете самостоятельно создать пустой объект <code>FormData</code>, наполнив его затем данными, используя его метод <code>{{domxref("FormData.append","append()")}}:</code></p>

<pre class="brush: js">var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // число 123456 немедленно преобразуется в строку "123456"

// Файл, выбранный пользователем
formData.append("userfile", fileInputElement.files[0]);

// JavaScript Blob объект
var content = '&lt;a id="a"&gt;&lt;b id="b"&gt;hey!&lt;/b&gt;&lt;/a&gt;'; // содержимое нового файла...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
</pre>

<div class="note"><strong>Примечание:</strong>  Поля "userfile" и "webmasterfile" оба содержат файлы. Число, переданное полю "accountnum" немедленно преобразуется в строку. Преобразование осуществляется методом <code><a href="/en/DOM/XMLHttpRequest/FormData#append()" title="en/XMLHttpRequest/FormData#append()">FormData.append()</a></code> (Значение поля может быть {{ domxref("Blob") }}, {{ domxref("File") }}, или строкой: <strong>если значение не является ни Blob, ни File, то оно автоматически преобразуется в строку).</strong></div>

<p>Данный пример показывает создание экземпляра <code>FormData</code>, содержащего поля "username", "accountnum", "userfile" и "webmasterfile". Экземпляр <code>FormData</code> затем отправляется при помощи метода <code><a href="/en/DOM/XMLHttpRequest#send()" title="en/XMLHttpRequest#send()">send()</a></code> объекта <code>XMLHttpRequest</code>. Поле "webmasterfile" является экземпляром класса <code>{{domxref("Blob")}}</code>. Объект класса <code>Blob</code> является файлом-подобным объектом, содержащим "сырые" данные. Определение данных как <code>Blob</code> не является обязательным в нативном javascript. Интерфейс<code> {{ domxref("File") }} </code>базируется на <code>Blob</code>, наследуя его функциональность и расширяя его для поддержки файлов в ОС пользователя. Для создания объектов класса <code>Blob</code> используйте <code>{{domxref("Blob.Blob","Blob() constructor")}}</code>.</p>

<h2 id="Получение_объекта_FormData_из_HTML_формы">Получение объекта FormData из HTML формы</h2>

<p>Для создания объекта <code>FormDatа</code>, содержащего данные существующей формы<code> ({{ HTMLElement("form") }}</code>) передайте форму в качестве аргумента при создании объекта <code>FormData:</code></p>

<div class="note">
<p><strong>Примечание: </strong>FormData будет использовать только те поля ввода, которые используют атрибут name.</p>
</div>

<pre class="brush: js">var formData = new FormData(someFormElement);
</pre>

<p>Например:</p>

<pre class="brush: js">var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
</pre>

<p>Вы так же можете добавить дополнительные данные в объект <code>FormData </code>после его создания и до отправки данных:</p>

<pre class="brush: js">var formElement = document.querySelector("form");
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);</pre>

<p>Такой приём позволяет включать в форму дополнительную информацию, которая, например, не нуждается в демонстрации пользователю.</p>

<h2 id="Отправка_файлов_при_помощи_объекта_FormData">Отправка файлов при помощи объекта FormData</h2>

<p>Вы так же можете отправлять файлы при помощи <code>FormData. </code>Просто включите <code>{{ HTMLElement("input") }}</code> с типом <code>file </code>в форму.</p>

<pre class="brush: html">&lt;form enctype="multipart/form-data" method="post" name="fileinfo"&gt;
  &lt;label&gt;Your email address:&lt;/label&gt;
  &lt;input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /&gt;&lt;br /&gt;
  &lt;label&gt;Custom file label:&lt;/label&gt;
  &lt;input type="text" name="filelabel" size="12" maxlength="32" /&gt;&lt;br /&gt;
  &lt;label&gt;File to stash:&lt;/label&gt;
  &lt;input type="file" name="file" required /&gt;
  &lt;input type="submit" value="Stash the file!" /&gt;
&lt;/form&gt;
&lt;div&gt;&lt;/div&gt;
</pre>

<p>Затем вы сможете отправить выбранный файл следующим образом:</p>

<pre class="brush: js">var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {

  var oOutput = document.querySelector("div"),
      oData = new FormData(form);

  oData.append("CustomField", "This is some extra data");

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "stash.php", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
    } else {
      oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.&lt;br \/&gt;";
    }
  };

  oReq.send(oData);
  ev.preventDefault();
}, false);
</pre>

<div class="note">
<p><strong>Примечание</strong>: Если для формы указан атрибут <code>method</code>, то будет использован именно этот метод для отправки данных на сервер, а не метод, указанный в вызове <code>open()</code></p>
</div>

<p>Вы так же можете добавить <code>{{ domxref("File") }}</code> или <code>{{ domxref("Blob") }}</code> непосредственно к объекту <code>{{ domxref("FormData") }}:</code></p>

<pre class="brush: js">data.append("myfile", myBlob, "filename.txt");
</pre>

<p>Метод<code> {{domxref("FormData.append","append()")}} </code>принимает 3й опциональный параметр - название файла, которое добавляется в заголовок <code>Content-Disposition </code>при отправке на сервер. Если название файла не указано (или данный параметр не поддерживается) используется имя "blob".</p>

<p>Вы так же можете использовать <code>FormData</code> с jQuery:</p>

<pre class="brush: js">var fd = new FormData(document.querySelector("form"));
fd.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false,  // Сообщить jQuery не передавать эти данные
  contentType: false   // Сообщить jQuery не передавать тип контента
});
</pre>

<h2 id="Отправка_форм_и_файлов_при_помощи_AJAX_без_использования_объекта_FormData">Отправка форм и файлов при помощи AJAX <em>без использования</em> объекта <code>FormData</code></h2>

<p>Если вы заинтересованы в отправке форм и файлов при помощи <a href="/en-US/docs/AJAX" title="/en-US/docs/AJAX">AJAX</a> <em>без использования</em> FormData, прочитайте <a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files" title="данную статью">/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files</a></p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Using XMLHttpRequest</a></li>
 <li>{{domxref("HTMLFormElement")}}</li>
 <li>{{domxref("Blob")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">Typed Arrays</a></li>
</ul>
