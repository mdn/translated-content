---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
translation_of: Web/API/Navigator/registerProtocolHandler
---
<p id="Summary">{{APIRef("HTML DOM")}}</p>

<p>Позволяет веб-сайтам зарегистрировать себя как возможный обработчик  для конкретных протоколов.</p>

<p>По соображениям безопасности, по умолчанию, веб-сайты могут зарегистрировать только обработчики протокола для себя - домен и протокол обработчика должны совпадать с текущим сайтом. Тем не менее, пользователи могут установить предпочтение в Firefox, разрешающее перекрёстную обработку веб-сайтов  в настройках <code>gecko.handlerService.allowRegisterFromDifferentHost</code> установив <code>true</code> в about:config.</p>

<p>Расширения могут регистрировать обработчики протоколов, направленные другие сайты: см. "Смотрите также" раздел как использовать их с XPCOM.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="eval">window.navigator.registerProtocolHandler(<em>protocol</em>, <em>uri</em>, <em>title</em>);
</pre>

<ul>
 <li><code>protocol</code> это протокол нуждающийся в обработке, записанный в виде строки.</li>
 <li><code>uri</code> это URI обработчика в виде строки. Вы можете включить "%s", что бы показать куда вставлять  выходящие URI документа для обработки.
  <div class="note">
  <p>Примечание: ДОЛЖНА быть <code>http </code>или <code>https </code>схема</p>
  </div>
 </li>
 <li>
  <p><code>title</code> это заголовок обработчика, представленный пользователю в виде строки.</p>
 </li>
</ul>

<h2 id="Example">Пример</h2>

<p>Если ваше веб-приложение находится по адресу <code>http://www.google.co.uk</code>, вы можете зарегистрировать обработчик протокола и привязать  обращение к нему "burger", как это:</p>

<pre class="eval">navigator.registerProtocolHandler("burger",
                                  "http://www.google.co.uk/?uri=%s",
                                  "Burger handler");
</pre>

<p><br>
 Это создаст обработчик, который разрешает <code>burger://</code>ссылки, направляющие пользователя на ваше веб-приложение, вставляя burger информацию указанную в ссылке на URL. Напомним, что этот скрипт должен быть запущен с того же домена (так и любой странице расположенной в <code>google.co.uk</code>) и второе, переданный аргумент должен быть <code>http </code>или <code>https</code> схемы (в этом примере это <code>http</code>) .</p>

<p>Пользователь будет уведомлен о регистрации этого протокола, для примера смотрите на изображение ниже.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9683/protocolregister.png" style="display: block; height: 401px; margin: 0px auto; width: 700px;"></p>

<div class="note">
<p><strong>Примечание</strong>: "<a href="/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window">Регистрация службы веб-почты, как mailto-обработчик</a>", показывает как сделать это в рамках XPCOM.</p>
</div>

<h2 id="Specification">Спецификация</h2>

<p>Specified by the WHATWG's <a class="external" href="http://whatwg.org/specs/web-apps/current-work/#custom-handlers">Web Applications 1.0 working draft</a> (HTML5).</p>

<h2 id="See_also">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li><a href="/en/Web-based_protocol_handlers" title="en/Web-based_protocol_handlers">Web-based protocol handlers</a></li>
 <li><a class="external" href="http://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/">RegisterProtocolHandler Enhancing the Federated Web</a> at Mozilla Webdev</li>
 <li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#whitelisted-scheme">Web Application APIs - Custom scheme and content handlers - Whitelisted schemes</a></li>
 <li><a href="/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window">Register a webmail service as mailto handler</a> shows how to do <code>registerProtocolHandler</code> from XPCOM scope.</li>
 <li><a href="/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#registerProtocolHandler">XPCOM Interface Reference &gt; nsIWebContentHandlerRegistrar &gt; registerContentHandler</a> - This shows how to use this function XPCOM scope</li>
</ul>

<p>{{ languages( { "es": "es/DOM/window.navigator.registerProtocolHandler", "fr": "fr/DObrM/window.navigator.registerProtocolHandler", "ja": "ja/DOM/window.navigator.registerProtocolHandler", "pl": "pl/DOM/window.navigator.registerProtocolHandler", "ko": "ko/DOM/window.navigator.registerProtocolHandler" } ) }}</p>
