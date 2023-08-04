---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
---

{{APIRef("HTML DOM")}}

HTML-элементы {{HTMLElement("script")}} предоставляют **`HTMLScriptElement`** интерфейс, который предоставляет специальные свойства и методы для манипулирования поведением и выполнением `<script>` элементов (за пределами унаследованного {{domxref("HTMLElement")}} интерфейса).

JavaScript файлы должны обслуживаться с `application/javascript` [MIME type](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types), но браузеры снисходительны и блокируют их только, если скрипты обслуживаются с типом изображение (`image/*`), типом видео (`video/*`), типом аудио (`audio/*`), или `text/csv`. Если скрипт заблокирован, его элемент получает событие {{event("error")}}; в противном случае, он получает событие {{event("success")}}.

{{InheritanceDiagram(600, 120)}}

## Свойства

_Наследует свойства от своего родителя, {{domxref("HTMLElement")}}._

<table class="standard-table">
  <thead>
    <tr>
      <th>Имя</th>
      <th>Тип</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code id="type_property">type</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Представляет тип MIME сценария. Он отражает атрибут
        <a href="/ru/docs/Web/HTML/Element/script#type"><code>type</code></a>.
      </td>
    </tr>
    <tr>
      <td><code id="src_property">src</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Получает и отдаёт URL внешнего скрипта. Он отражает атрибут
        <a href="/ru/docs/Web/HTML/Element/script#src"><code>src</code></a>.
      </td>
    </tr>
    <tr>
      <td><code id="event_property">event</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Старый, способ регистрации обработчиков событий на элементы в
        HTML-документе.
      </td>
    </tr>
    <tr>
      <td><code id="charset_property">charset</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Представляет кодировку символов внешнего скрипта. Он отражает атрибут
        <a href="/ru/docs/Web/HTML/Element/script#charset"><code>charset</code></a>.
      </td>
    </tr>
    <tr>
      <td><code id="async_property">async</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td rowspan="2">
        <p>
          Атрибуты <code>async</code> и <code>defer</code>
          <a href="/ru/docs/JavaScript/Reference/Global_Objects/Boolean"
            >булевы</a
          >
          атрибуты, которые контролируют как скрипт должен выполняться.
          <strong
            >Атрибуты <code>defer</code> и <code>async</code> не должны быть
            указаны, если атрибут <code>src</code> отсутствует.</strong
          >
        </p>
        <p>Существует три возможных режима выполнения:</p>
        <ol>
          <li>
            Если атрибут <code>async</code> представлен, то скрипт будет
            выполняться асинхронно по мере загрузки.
          </li>
          <li>
            Если атрибут <code>async</code> отсутствует, но представлен атрибут
            <code>defer</code>, то скрипт будет выполняться когда
            <a href="/ru/docs/Web/Events/DOMContentLoaded"
              >страница полностью загружена</a
            >.
          </li>
          <li>
            Если ни один атрибут не представлен, то скрипт извлекается и
            выполняется незамедлительно, блокируя дальнейший парсинг страницы.
          </li>
        </ol>
        <p>
          Атрибут <code>defer</code> может быть указан с атрибутом
          <code>async</code>, тогда устаревшие браузеры, которые поддерживают
          только <code>defer</code> (но не <code>async</code>) откатятся к
          поведению <code>defer</code> взамен дефолтного поведения блокировки.
        </p>
        <div class="note">
          <strong>Примечание:</strong> Точные детали обработки для этих
          атрибутов комплексны, включая множество различных аспектов HTML, и
          разбросаны по всей спецификации.
          <a
            href="http://www.w3.org/html/wg/drafts/html/master/scripting-1.html#prepare-a-script"
            >Эти алгоритмы</a
          >
          описывают основную идею, но они основаны на правилах синтаксического
          анализа для {{HTMLElement("script")}}
          <a
            href="http://www.w3.org/html/wg/drafts/html/master/syntax.html#scriptTag"
            >открывающих</a
          >
          и
          <a
            href="http://www.w3.org/html/wg/drafts/html/master/syntax.html#scriptEndTag"
            >закрывающих</a
          >
          тэгах в HTML,
          <a
            href="http://www.w3.org/html/wg/drafts/html/master/syntax.html#scriptForeignEndTag"
            >во внешнем контенте</a
          >, и в<a
            href="http://www.w3.org/html/wg/drafts/html/master/the-xhtml-syntax.html#scriptTagXML"
          >
            XML</a
          >; правиле для метода
          <a href="/ru/docs/DOM/document.write"
            ><code>document.write()</code></a
          >; обработке
          <a
            href="http://www.w3.org/html/wg/drafts/html/master/webappapis.html#scripting"
            >сценариев</a
          >; и так далее.
        </div>
      </td>
    </tr>
    <tr>
      <td><code id="defer_property">defer</code></td>
      <td>{{domxref("Boolean")}}</td>
    </tr>
    <tr>
      <td>
        <code id="crossOrigin_property">crossOrigin </code
        >{{experimental_inline}}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        {{domxref("DOMString")}}, отражающий
        <a href="/ru/docs/Web/HTML/CORS_settings_attributes"
          >настройку CORS </a
        >для элементов скрипта. Для скриптов из других
        <a href="/ru/docs/Glossary/Origin">источников</a>, он контролирует,
        будет ли раскрыта информация об ошибке.
      </td>
    </tr>
    <tr>
      <td><code id="text_property">text</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          IDL атрибут <code>text</code> объединяет и возвращает содержимое всех
          <a href="/ru/docs/DOM/Text"><code>Text</code> нод</a> внутри
          элемента {{HTMLElement("script")}} (игнорируя другие ноды,
          такие как комментарии) в древовидном порядке. При установке, он
          действует также, как и IDL атрибут
          <a href="/ru/docs/DOM/Node.textContent"><code>textContent</code></a
          >.
        </p>
        <div class="note">
          <strong>Примечание:</strong> При вставке с использованием метода
          <a href="/ru/docs/DOM/document.write"
            ><code>document.write()</code></a
          >, элементы {{HTMLElement("script")}} выполняются (обычно
          синхронно), когда при вставке используются
          <a href="/ru/docs/DOM/element.innerHTML"><code>innerHTML</code></a>
          или
          <a href="/ru/docs/DOM/element.outerHTML"><code>outerHTML</code></a
          >, они вообще не выполняются.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>noModule</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        Это булево свойство выполняет остановку выполнения скрипта в браузере,
        поддерживающим
        <a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/"
          >ES2015 модули</a
        >
        — используется для запуска резервных скриптов, которые не поддерживают
        JavaScript модули.
      </td>
    </tr>
    <tr>
      <td><code>referrerPolicy</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        {{domxref("DOMString")}}, который отражает HTML атрибут
        <a href="/ru/docs/Web/HTML/Element/script#referrerpolicy"><code>referrerpolicy</code></a>
        указывающий, какой реферер использовать при извлечении скриптов и
        выборках, выполненных сценариев.
      </td>
    </tr>
  </tbody>
</table>

## Методы

_Нет специальных методов; наследует методы от родителей, {{domxref("HTMLElement")}}._

## Примеры

### Динамическое импортирование скриптов

Давайте создадим функцию. которая импортирует новый скрипт в документ, создавая ноду {{HTMLElement("script")}} _непосредственно перед_ {{HTMLElement("script")}}, в котором размещается следующий код (через {{domxref("document.currentScript")}}). Эти скрипты будут выполняться **асинхронно**. Для получения подробной информации смотрите свойства [`defer`](#defer_property) и [`async`](#async_property).

```js
function loadError(oError) {
  throw new URIError(
    "The script " + oError.target.src + " didn't load correctly.",
  );
}

function prefixScript(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.currentScript.parentNode.insertBefore(
    newScript,
    document.currentScript,
  );
  newScript.src = url;
}
```

Следующая функция, вместо добавления новых скриптов непосредственно перед элементом {{domxref("document.currentScript")}}, добавляет их как потомков тега {{HTMLElement("head")}}.

```js
function loadError(oError) {
  throw new URIError(
    "The script " + oError.target.src + " didn't load correctly.",
  );
}

function affixScriptToHead(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.head.appendChild(newScript);
  newScript.src = url;
}
```

Простое использование:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", function () {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- HTML-элемент {{HTMLElement("script")}}
- HTML-элемент {{HTMLElement("noscript")}}
- {{domxref("document.currentScript")}}
- [Web Workers](/ru/docs/DOM/Using_web_workers) (фрагменты кода, похожие на скрипты, но выполняемые в другом глобальном контексте)
- [Ryan Grove's \<script> and \<link> node event compatibility chart](http://pieisgood.org/test/script-link-events/)
