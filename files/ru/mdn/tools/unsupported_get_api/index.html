---
title: URL-суффиксы
slug: MDN/Tools/Unsupported_GET_API
tags:
  - HTTP
  - Kuma
  - MDN Мета
  - URL
  - Параметры URL
  - инструменты
translation_of: MDN/Tools/Document_parameters
original_slug: MDN/Tools/URL-suffix
---
<div>{{MDNSidebar}}</div>

<p id="Introduction">Вики-платформа MDN Kuma не имеет центрального API. Вместо этого наш общий подход заключается в том, чтобы предложить способы превращения доступных для человека ресурсов в удобные для машин данные.</p>

<h2 id="Параметры_URL_GET">Параметры URL GET</h2>

<p>Мы поддерживаем несколько полезных параметров запроса для каждого URL-адреса вики-документа Kuma при получении через HTTP GET или просмотре в браузере.</p>

<p>Несколько параметров запроса разделяются знаком <kbd>&amp;</kbd> вместо начального <kbd>?</kbd>. (См. Примеры макроса.)</p>

<dl>
 <dt><code>summary</code></dt>
 <dd>
 <p>Указывает Куме возвращать только сводку страницы. Если на странице есть контент, помеченный классом «Сводка SEO», этот контент возвращается. Если такого содержания нет, возвращается содержание раздела «Сводка». В противном случае возвращается содержимое первого блока.</p>

 <div class="note"><p><strong>Уведомление об ошибке:</strong> В настоящее время существует ошибка, из-за которой сводный параметр возвращает весь документ, если вы также не укажете необработанный параметр. Обратите внимание, что вы также можете получить сводку из возвращённого JSON, <a href="/ru/docs/MDN/Tools/URL-suffix#json-view">используя альтернативное представление $ json</a>.</p></div>
 </dd>
 <dt><code>raw</code></dt>
 <dd><p>Указывает Kuma вернуть необработанное содержимое страницы без какого-либо материала обложки, такого как верхние, нижние колонтитулы и т. д. При этом не выполняются шаблоны или сценарии, что удобно для редакторов сборки.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/HTML/HTML5?raw">/ru/docs/HTML/HTML5?raw</a></p></dd>
 <dt><code>macros</code></dt>
 <dd><p>Поручает Kuma выполнить все шаблоны на странице. В сочетании с <code>?raw</code> это предлагает полностью визуализированный контент MDN без оболочки сайт . Поручает Kuma выполнить все шаблоны на странице. В сочетании с <code>?raw</code> это предлагает полностью визуализированный контент MDN без оболочки сайта. По умолчанию включено без  <code>?raw</code> (то есть при обычном просмотре сайта), по умолчанию выключено, когда присутствует <code>?raw</code>.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/HTML/HTML5?raw&amp;macros">/ru/docs/HTML/HTML5?raw&amp;macros</a></p></dd>
 <dt><code>nomacros</code></dt>
 <dd><p>Указывает Kuma не выполнять шаблоны KumaScript на странице. Поскольку при обычном просмотре сайта для <code>?macros</code> по умолчанию установлено значение «включено», этот параметр отключает его.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/HTML/HTML5?nomacros">/ru/docs/HTML/HTML5?nomacros</a></p></dd>
 <dt><code>include</code></dt>
 <dd><p>Говорит Kuma удалить все блоки, на которых есть класс <code>noinclude</code>. Это полезно для получения вывода таким, каким он был бы при включении на другую страницу, а не на отдельной странице. Часто это удаляет образец кода и тому подобное (хотя не всегда).</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/Archive/Mozilla/XUL/Attribute/align?raw&amp;macros&amp;include">/ru/docs/Archive/Mozilla/XUL/Attribute/align?raw&amp;macros&amp;include</a></p></dd>
 <dt><code>section=id</code></dt>
 <dd><p>Указывает Kuma вернуть содержимое только из раздела с указанным якорем/именем привязки.</p>
 <p><strong>Пример:</strong>
 <ul>
  <li><a href="/ru/docs/MDN/Tools/URL-suffix?raw&amp;section=params">/ru/docs/MDN/Tools/URL-suffix?raw&amp;section=params</a><br>
   (...и больше интересного...)</li>
  <li><a href="/ru/docs/MDN/Tools/URL-suffix?raw&amp;macros&amp;section=params">/ru/docs/MDN/Tools/URL-suffix?raw&amp;macros&amp;section=params</a></li>
 </ul>

 <div class="note"><strong>Уведомление об ошибке: </strong> В настоящее время существует ошибка, из-за которой параметр <code>section</code>  возвращает весь документ, если вы также не укажете параметр <code>raw</code>.</div></p>
 </dd>
 <dt><code>expand</code></dt>
 <dd>
 <p>В сочетании с представлением <code>$children</code> расширяет ответ JSON с подробной информацией для каждой подстраницы. Он работает как комбинация <code>$children</code> и <code>$json</code> на каждой подстранице. Таким образом, можно узнать о тегах для подстраницы.</p>

 <p><strong>Пример:</strong> <a href="/ru/docs/MDN/About$children?expand">/ru/docs/MDN/About$children?expand</a></p>
 </dd>
</dl>

<h2 id="Ресурсы_метаданных_документа">Ресурсы метаданных документа</h2>

<p>Наряду с параметрами для настройки ответа URL-адреса документа существуют также некоторые альтернативные представления документов, заданные суффиксом URL-адреса:</p>

<dl>
 <dt><code>$toc</code></dt>
 <dd><p>Указывает Kuma вернуть только оглавление страницы в HTML. Он возвращается как упорядоченный список (то есть , {{HTMLElement("ol")}}).</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/MDN/Tools/URL-suffix$toc">/ru/docs/MDN/Tools/URL-suffix$toc</a></p></dd>
 <dt><code>$json</code></dt>
 <dd><p>Сообщает Kuma описать страницу в объекте JSON. Этот объект по сути тот же, что и при использовании подпрограммы KumaScript <code>wiki.getPage()</code>.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/MDN/About$json">/ru/docs/MDN/About$json</a></p></dd>
 <dt><code>$children</code></dt>
 <dd><p>Говорит Kuma перечислить дочерние темы страницы в JSON. Этот объект по сути тот же, что и при использовании подпрограммы KumaScript <code>pages.subpages()</code>.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/MDN/Contribute$children">/ru/docs/MDN/Contribute$children</a></p>
 <p>(<code>М</code>можно использовать с параметром <code>?expand</code> для получения более подробного ответа.)</p>
 </dd>
 <dt><code>$compare</code></dt>
 <dd>
 <p>Представляет различия строк исходного текста между ревизиями, указанными в требуемых параметрах запроса <code>?from</code> и <code>?to</code>.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/Web/API/KeyboardEvent/key/Key_Values$compare?locale=ru&amp;to=1651013&amp;from=1650680">/ru/docs/Web/API/KeyboardEvent/key/Key_Values$compare?locale=ru&amp;to=1651013&amp;from=1650680</a></p></dd>
 <dt><code>$edit</code></dt>
 <dd><p>Редактирует текущую ревизию данного документа вместо его отображения.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/MDN/Tools/URL-suffix$edit">/ru/docs/MDN/Tools/URL-suffix$edit</a></p></dd>
 <dt><code>$history</code></dt>
 <dd><p>Показывает историю последних десяти ревизий данного документа вместо его содержимого. Полную историю можно запросить с помощью значения параметра запроса <code>?limit=all</code>.</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/MDN/Tools/URL-suffix$history?limit=all">/ru/docs/MDN/Tools/URL-suffix$history?limit=all</a></p></dd>
 <dt><code>$revision</code></dt>
 <dd><p>Отображает номер ревизии документа, который необходимо указать после разделителя «/».</p>
 <p><strong>Пример:</strong> <a href="/ru/docs/MDN/Tools/URL-suffix$revision/1652169">/ru/docs/MDN/Tools/URL-suffix$revision/1652169</a></p></dd>
</dl>
