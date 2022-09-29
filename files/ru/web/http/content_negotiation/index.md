---
title: Согласование контента
slug: Web/HTTP/Content_negotiation
tags:
  - Согласование контента
translation_of: Web/HTTP/Content_negotiation
---
<div>{{HTTPSidebar}}</div>

<p class="summary">В <a href="/en-US/docs/Glossary/HTTP">HTTP</a>, <em><strong>согласование контента</strong></em> - это механизм используемый для отображения различных представлений ресурса по тому же URI, так чтобы клиент мог указать, что лучше подходит для пользователя (например, желаемый язык документа, формат изображения, или кодировку текста).</p>

<h2 id="Принципы_согласования_контента">Принципы согласования контента</h2>

<p>Конкретный документ называется <em>ресурсом</em>. Когда клиент хочет его получить, он запрашивает его используя его URL. Сервер использует этот URL, чтобы выбрать один из возможных вариантов - каждый вариант, называется <em>представлением</em>, – и возвращает этот вариант клиенту. Ресурс в общем, а также каждое из представлений, имеют определённый URL. Выбор конкретного представления при вызове ресурса определяется механизмом <em>согласования контента</em> и существует несколько способов согласования между клиентом и сервером.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16156/HTTPNego_ru.png" style="height: 311px; width: 767px;"></p>

<p>Определение наиболее подходящего представления производится с помощью одного из двух механизмов:</p>

<ul>
 <li>Конкретные <a href="/en-US/docs/Web/HTTP/Headers">HTTP-заголовки </a> клиента (<em>согласование на основе сервера </em> или <em>упреждающее согласование</em>), что является стандартным способом согласования определённого вида ресурса.</li>
 <li><a href="/en-US/docs/Web/HTTP/Status">HTTP коды ответа</a> {{HTTPStatus("300")}} (Multiple Choices) или {{HTTPStatus("406")}} (Not Acceptable) (<em>согласование на основе агента</em> или <em>реактивное согласование</em>), используемые в качестве резервных механизмов.</li>
</ul>

<p>На протяжении многих лет предлагались и другие предложения по согласованию содержания, такие как <em>прозрачное согласование контента</em> и <code>Alternates</code> заголовок. Они не смогли получить достаточной поддержки и были заброшены.</p>

<h2 id="Согласование_на_основе_сервера">Согласование на основе сервера</h2>

<p>В <em>согласовании на стороне сервера</em> или <em>упреждающем согласовании</em>, браузер (или любое другое клиентское приложение) посылает несколько заголовков HTTP наряду с URL. Эти заголовки описывают предпочтения пользователя. Сервер использует их в качестве подсказок для внутреннего алгоритма, который выбирает наиболее подходящее представление ресурса, чтобы предоставить его клиенту. Реализация алгоритма в стандарт не входит и полностью зависит от сервера. Для примера, смотрите <a class="external" href="http://httpd.apache.org/docs/2.2/en/content-negotiation.html#algorithm">алгоритм согласования Apache 2.2</a>.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13791/HTTPNegoServer.png" style="height: 380px; width: 767px;"></p>

<p>Стандарт HTTP/1.1 определяет список стандартных заголовков которые используются в этом механизме согласования – ({{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}). Хотя, строго говоря, {{HTTPHeader("User-Agent")}} не находится в этом списке, в некоторых случаях он используется, чтобы послать определённое представление запрошенного ресурса, несмотря на то, что это и не является хорошей практикой. Сервер использует заголовок {{HTTPHeader("Vary")}} чтобы обозначить, какие заголовки он использовал для согласования (точнее, ассоциированные с ними заголовки ответа), чтобы <a href="/en-US/docs/Web/HTTP/Caching">кеширование</a> работало оптимально.</p>

<p>В дополнение к этим, есть предложение добавить больше заголовков в список доступным, так называемые Подсказки Клиента (Client Hints). Они будут предоставлять информацию о типе устройства на котором они используются (например, будет это настольный компьютер или мобильное устройство).</p>

<p>Согласование на стороне сервера является самым популярным способом согласования контента, но у него есть несколько недостатков:</p>

<ul>
 <li>У сервера нет всей информации о клиентском приложении. Даже с расширением Client Hints сервер не может знать всех возможностей браузера. В отличие от реактивного согласования, где клиент совершает выбор, выбор сервера всегда остаётся в каком-то смысле произвольным.</li>
 <li>Информация, полученная от клиента, довольно подробная (сжатие заголовков протокола HTTP/2 отчасти решает эту проблему) и является источником утечки конфиденциальности (идентификация по HTTP).</li>
 <li>С увеличением количества представлений падает эффективность общих кешей и усложняется реализация сервера.</li>
</ul>

<h3 id="Заголовок_Accept">Заголовок <code>Accept</code></h3>

<p>Заголовок {{HTTPHeader("Accept")}} перечисляет MIME типы содержимого ресурса, которые клиент желает получить. Он представляет список MIME типов, разделённый запятыми, каждый из которых, опционально, снабжён коэффициентом желательности – параметром, определяющим относительный уровень желательности среди разных MIME типов.</p>

<p>{{HTTPHeader("Accept")}} определяется браузером, или любым другим клиентом, и может изменяться в зависимости от контекста, например, при получении страницы HTML, изображения, видео или скрипта – его содержимое будет различаться при запросе документа из строки адреса, через тег {{ HTMLElement("img") }}, {{ HTMLElement("video") }} или {{ HTMLElement("audio") }}. Браузеры могут использовать любое значение, которые они считают наиболее подходящим; можете ознакомиться со списком <a href="/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values">значений по умолчанию, используемых распространёнными браузерами</a>.</p>

<h3 id="Заголовок_Accept-CH_experimental_inline">Заголовок <code>Accept-CH</code> {{experimental_inline}}</h3>

<div class="note">
<p>Перед вами <strong>экспериментальная</strong> технология под названием <em>Client Hints (Подсказки Клиента)</em>, реализуемая на данный момент только в Chrome 46 и более поздних версиях</p>
</div>

<p>Экспериментальный заголовок {{HTTPHeader("Accept-CH")}} перечисляет конфигурацию клиента, которая может быть использована сервером для выбора подходящего ответа. Определённые значения:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Value</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>DPR</code></td>
   <td>Указывает соотношение логических пикселей к физическим на устройстве.</td>
  </tr>
  <tr>
   <td><code>Viewport-Width</code></td>
   <td>Указывает ширину окна отображения.</td>
  </tr>
  <tr>
   <td><code>Width</code></td>
   <td>Указывает ширину ресурса в физических пикселях (другими словами собственный размер изображения).</td>
  </tr>
 </tbody>
</table>

<h3 id="Заголовок_Accept-Charset">Заголовок <code>Accept-Charset</code></h3>

<p>Заголовок {{HTTPHeader("Accept-Charset")}} указывает серверу какие кодировки текста поддерживает клиент. По традиции он имеет своё значение для каждой локали браузера, например, <code>ISO-8859-1,utf-8;q=0.7,*;q=0.7</code> установлен для западноевропейской локали.</p>

<p>В настоящее время, UTF-8 имеет серьёзную поддержку, является предпочтительным способом кодировки текста и гарантирует лучшую конфиденциальность за счёт уменьшения разнообразия конфигураций, поэтому большая часть браузеров пропускает заголовок <code>Accept-Charset</code>: Internet Explorer 8, Safari 5, Opera 11 и Firefox 10 отказались от этого заголовка в запросах.</p>

<h3 id="Заголовок_Accept-Encoding">Заголовок <code>Accept-Encoding</code></h3>

<p>The {{HTTPHeader("Accept-Encoding")}} header defines the acceptable content-encoding (supported compressions). The value is a q-factor list (e.g.: <code>br, gzip;q=0.8</code>) that indicates the priority of the encoding values. The default value <code>identity</code> is at the lowest priority (unless otherwise declared).</p>

<p>Compressing HTTP messages is one of the most important ways to improve the performance of a Web site, it shrinks the size of the data transmitted and makes better use of the available bandwidth; browsers always send this header and the server should be configured to abide to it and to use compression.</p>

<h3 id="Заголовок_Accept-Language">Заголовок <code>Accept-Language</code></h3>

<p>The {{HTTPHeader("Accept-Language")}} header is used to indicate the language preference of the user. It is a list of values with quality factors (like: <code>"de, en;q=0.7</code>"). A default value is often set according the language of the graphical interface of the user agent, but most browsers allow to set different language preferences.</p>

<p>Due to the <a href="https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy">configuration-based entropy</a> increase, a modified value can be used to fingerprint the user, it is not recommended to change it and a Web site cannot trust this value to reflect the actual wish of the user. Site designers must not be over-zealous by using language detection via this header as it can lead to a poor user experience:</p>

<ul>
 <li>They should always provide a way to overcome the server-chosen language, e.g., by providing a language menu on the site. Most user-agents provide a default value for the <code>Accept-Language</code> header, adapted to the user interface language and end users often do not modify it, either by not knowing how, or by not being able to do it, as in an Internet café for instance.</li>
 <li>Once a user has overridden the server-chosen language, a site should no longer use language detection and should stick with the explicitly-chosen language. In other words, only entry pages of a site should select the proper language using this header.</li>
</ul>

<h3 id="Заголовок_User-Agent">Заголовок <code>User-Agent</code></h3>

<div class="note">
<p>Though there are legitimate uses of this header for selecting content, <a href="/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent">it is considered bad practice</a> to rely on it to define what features are supported by the user agent.</p>
</div>

<p>The {{HTTPHeader("User-Agent")}} header identifies the browser sending the request. This string may contain a space-separated list of <em>product tokens</em> and <em>comments</em>.</p>

<p>A <em>product token</em> is a name followed by a '<code>/</code>' and a version number, like <code>Firefox/4.0.1</code>. There may be as many of them as the user-agent wants. A <em>comment</em> is a free string delimited by parentheses. Obviously parentheses cannot be used in that string. The inner format of a comment is not defined by the standard, though several browser put several tokens in it, separated by '<code>;</code>'.</p>

<h3 id="The_Vary_response_header">The <code>Vary</code> response header</h3>

<p>In opposition to the previous <code>Accept-*</code> headers which are sent by the client, the {{HTTPHeader("Vary")}} HTTP header is sent by the web server in its response. It indicates the list of headers used by the server during the server-driven content negotiation phase. The header is needed in order to inform the cache of the decision criteria so that can reproduce it, allowing the cache to be functional while preventing serving erroneous content to the user.</p>

<p>The special value of '<code>*</code>' means that the server-driven content negotiation also uses information not conveyed in a header to choose the appropriate content.</p>

<p>The <code>Vary</code> header was added in the version 1.1 of HTTP and is necessary in order to allow caches to work appropriately. A cache, in order to work with agent-driven content negotiation, needs to know which criteria was used by the server to select the transmitted content. That way, the cache can replay the algorithm and will be able to serve acceptable content directly, without more request to the server. Obviously, the wildcard '<code>*</code>' prevents caching from occurring, as the cache cannot know what element is behind it.</p>

<h2 id="Согласование_на_основе_агента">Согласование на основе агента</h2>

<p>Server-driven negotiation suffers from a few downsides: it doesn't scale well. There is one header per feature used in the negotiation. If you want to use screen size, resolution or other dimensions, a new HTTP header must be created. Sending of the headers must be done on every request. This is not too problematic with few headers, but with the eventual multiplications of them, the message size would lead to a decrease in performance. The more precise headers are sent, the more entropy is sent, allowing for more HTTP fingerprinting and corresponding privacy concern.</p>

<p>From the beginnings of HTTP, the protocol allowed another negotiation type: <em>agent-driven negotiation</em> or <em>reactive negotiation</em>. In this negotiation, when facing an ambiguous request, the server sends back a page containing links to the available alternative resources. The user is presented the resources and choose the one to use.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13795/HTTPNego3.png"></p>

<p>Unfortunately, the HTTP standard does not specify the format of the page allowing to choose between the available resource, which prevents to easily automatize the process. Besides falling back to the <em>server-driven negotiation</em>, this method is almost always used in conjunction with scripting, especially with JavaScript redirection: after having checked for the negotiation criteria, the script performs the redirection. A second problem is that one more request is needed in order to fetch the real resource, slowing the availability of the resource to the user.</p>
