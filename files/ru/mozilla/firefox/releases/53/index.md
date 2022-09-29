---
title: Firefox 53 для разработчиков
slug: Mozilla/Firefox/Releases/53
translation_of: Mozilla/Firefox/Releases/53
---
<div>{{FirefoxSidebar}}</div>

<p>Firefox 53 был выпущен 19 апреля 2017. В этой статье перечислены основные изменения, которые полезны не только для веб-разработчиков, но и разработчиков Firefox и Gecko, а также разработчикам дополнений.</p>

<h2 id="Изменения_для_веб-разработчиков">Изменения для веб-разработчиков</h2>

<h3 id="Инструменты_разработчика">Инструменты разработчика</h3>

<ul>
 <li>Избегание задержки в прокрутке на подсветке заданных АПЗ ({{bug (1312103)}}).</li>
 <li>Добавлена возможность <a href="/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Copy CSS Path">копировать полный путь CSS</a> элемента ({{bug(1323700)}}).</li>
 <li>Devtools добавлена поддержка CSS-цвета-4 ({{bug (1310681)}}).</li>
 <li>Разметка вид: добавить визуальную подсказку между открывающим и закрывающим тегами сложенного узла ({{bug(1323193)}}).</li>
</ul>

<h3 id="CSS">CSS</h3>

<h4 id="Новые_возможности">Новые возможности</h4>

<ul>
 <li>В <code>mask-*</code>свойствах обыкновенного письма (см <a href="/en-US/docs/Web/CSS/CSS_Masks">CSS маски</a> ) все поддерживается и доступны по умолчанию (см {{bug (1251161)}}).</li>
 <li>Добавлено {{cssxref("caret-color")}} Свойство ({{bug (1063162)}}).</li>
 <li>Реализована {{cssxref("place-items")}} / {{cssxref("place-self")}} / {{cssxref("place-content")}} Shorthands ({{bug (1319958)}} ).</li>
 <li>Добавлено <code>flow-root</code>значение {{cssxref ( "display")}} свойства ({{bug(1322191)}}).</li>
 <li>{{cssxref("tab-size", "-moz-tab-size")}} теперь принимает {{cssxref("&lt;length&gt;")}} значения ({{bug (943918)}}), а теперь анимируемый ({{bug (1308110)}}).</li>
 <li>{{cssxref("mask-mode")}}: яркости не работает на градиентных масок ({{bug (1346265)}}).</li>
 <li>[CSS-сетка] FR Единица в {{cssxref("grid-template-rows")}} не заполняя окно просмотра ({{bug(1346699)}}).</li>
 <li>гибкие элементы не сортируются в соответствии с «порядком», если они отделены друг от друга abspos собрата ({{bug (1345873)}}).</li>
</ul>

<h4 id="Другие_изменения">Другие изменения</h4>

<ul>
 <li>Включить маски longhands по элементам SVG ({{bug(1319667)}}).</li>
 <li>[CSS-сетка] Исправлено: <code>align-self</code>/ <code>justify-self:stretch</code>/ <code>normal</code>не работает на <code>&lt;table&gt;</code>элементах сетки ({{bug (1316051)}}).</li>
 <li>Установленный: <code>clip-path: circle()</code>с большой ссылкой окно и процент радиус не оказывают правильно ({{bug (1324713)}}.</li>
 <li>При применении {{cssxref ("text-transform")}} значения из <code>uppercase</code>древнегреческого текста, акцент на дизъюнктивной ETA (rj) больше не удаляется (см {{bug(1322989)}}).</li>
 <li>Наличие <code>contents</code>значения {{cssxref ("display")}} контролировали через <code>layout.css.display-contents.enabled</code>настройку. В Firefox 53 эта настройка была удалена полностью, так что значение всегда будет доступен и больше не могут быть отключены ({{bug (1295788)}}).</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>ECMAScript 2015 семантика для {{jsxref ( "Function.name")}} свойства были реализованы. Это включает в себя выведенные имена на анонимные функции ( <code>var foo = function() {}</code>) ({{bug (883377)}}).</li>
 <li>ECMAScript 2015 семантика для закрытия итераторы были реализованы. Это влияет на <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code>цикл, например ({{bug(1147371)}}).</li>
 <li><a href="https://tc39.github.io/proposal-template-literal-revision/">Шаблон Буквальное предложение Revision</a> , что <a href="/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals_and_escape_sequences">снимает ограничения избежать последовательностей на помеченных литералах шаблона</a> было реализовано ({{bug(1317375)}}).</li>
 <li>Нестандартные <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods">Струнные дженерики</a> теперь представьте предупреждение устаревания в консоли. Не используйте их больше, они будут удалены в будущем! ({{bug (1319926)}}).</li>
 <li>Статическое <code>length</code>свойство {{jsxref ( "TypedArray")}} объектов было изменено с 3 до 0 в соответствии с ES2016 ({{bug (1317306)}}).</li>
 <li>{{jsxref ( "SharedArrayBuffer")}} теперь может быть использован в {{jsxref ( "DataView")}} объекты ({{bug (1246597)}}).</li>
 <li>В более ранних версиях спецификации, {{jsxref ( "SharedArrayBuffer")}} объектов необходимо явно переданы в ходе <a href="/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">структурированного клонирования</a> . В новой спецификации они не являются <a href="/en-US/docs/Web/API/Transferable">переводными объекты</a> больше , и , следовательно , не должны быть в списке передачи. Новое поведение используется для представления консоли предупреждения только, но теперь будет выдавать ошибку ({{bug(1302037)}}).</li>
 <li>{{jsxref ( "ArrayBuffer")}} длина теперь ограничена {{jsxref ( "Number.MAX_SAFE_INTEGER")}} (&gt; = 2 ** 53) ({{bug (1255128)}}).</li>
 <li>{{jsxref ( "Error.prototype")}} и другие нативный объект ошибки прототипы , как {{jsxref ( "RangeError.prototype")}} и т.д. теперь обычные объекты вместо соответствующих объектов Error. (В частности,  <code>Object.prototype.toString.call(Error.prototype)</code>теперь <code>"[object Object]"</code>вместо <code>"[object Error]"</code>.) ({{bug (1213341)}}).</li>
</ul>

<h3 id="Мероприятия">Мероприятия</h3>

<ul>
 <li>CSS Transitions: The {{event("transitionstart")}}, {{event ( "transitionrun")}} и {{event ( "transitioncancel")}} события были реализованы (см {{bug (1264125)}} и {{bug (1287983)}}).</li>
 <li>{{Domxref ( "CompositionEvent.CompositionEvent", "CompositionEvent")}} Конструктор был реализован (см {{bug(1002256)}}).</li>
 <li>{{Domxref ( "MouseEvent.x")}} и {{domxref ( "MouseEvent.y")}} псевдонимами {{domxref ( "MouseEvent.clientX")}} / {{domxref ( "MouseEvent.clientY" )}} были реализованы (см {{bug(424390)}}).</li>
 <li>{{Event ( "auxclick")}} событие и соответствующий {{domxref ( "GlobalEventHandlers.onauxclick")}} был реализован обработчик (см {{bug (1304044)}}).</li>
 <li>{{Event ( "transitioncancel")}} событие теперь уволен после <a href="/en-US/docs/Web/CSS/CSS_Transitions">перехода</a> отменяется. См {{domxref ( "GlobalEventHandlers.ontransitioncancel")}} для получения более подробной информации и пример ({{bug ( "1264125")}}).</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>{{Domxref ( "HTMLHyperLinkElementUtils.pathname", "путь")}} и {{domxref ( "HTMLHyperLinkElementUtils.search", "поиск")}} {{domxref ( "HTMLHyperLinkElementUtils")}} свойства ранее возвращено неправильные части в URL. Например, для URL из <code>http://z.com/x?a=true&amp;b=false</code>, <code>pathname</code>будет возвращаться « <code>/x?a=true&amp;b=false"</code>и <code>search</code>вернётся„“, а не» <code>/x</code>«и» <code>?a=true&amp;b=false"</code>соответственно. Теперь это было исправлено ({{bug (1310483)}}).</li>
 <li>{{Domxref ( "URLSearchParams.URLSearchParams", "URLSearchParams ()")}} Конструктор теперь принимает на {{domxref ( "USVString")}} или последовательность {{domxref ( "USVString")}} ев в качестве инициализации объект ({{bug( "1330678")}}).</li>
 <li>{{Domxref ( "Selection.setBaseAndExtent ()")}} метод <a href="/en-US/docs/Web/API/Selection_API">API выбора</a> теперь реализован (см {{bug (1321623)}}).</li>
 <li><a href="https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly">"Fakepath"</a> дополнение <code>file</code>типа {{HTMLElement ( "вход")}} <code>values</code>была реализована в Gecko, давая его соотношение с другими браузерами (см {{bug (1274596)}}).</li>
 <li>{{Domxref ( "Node.getRootNode ()")}} была реализована, заменяя устаревшее {{domxref ( "Node.rootNode")}} Свойство ({{bug(1269155)}}).</li>
 <li>Собственные свойства {{domxref ( "Plugin")}} и {{domxref ( "PluginArray")}} объектов больше не перечислимы ({{bug ( "1270366")}}).</li>
 <li>Названные свойства {{domxref ( "MimeTypeArray")}} объекты больше не перечислимы ({{bug ( "1270364")}}).</li>
 <li><a href="/en-US/docs/Web/API/Permissions_API">API разрешений</a> теперь имеет новое название разрешения доступного - <code>persistent-storage</code>- как он используется при создании {{domxref ( "Permissions.query ()")}} (см {{bug (1270038)}}). Это позволяет источнику использовать постоянную форму (т.е. <a href="https://storage.spec.whatwg.org/#persistence">постоянного хранения</a> ) для его хранения, в соответствии с <a href="https://storage.spec.whatwg.org/">API хранения</a> .</li>
</ul>

<h3 id="Рабочие_и_работники_сферы_обслуживания">Рабочие и работники сферы обслуживания</h3>

<ul>
 <li><a href="/en-US/docs/Web/API/Network_Information_API">Network Information API</a> теперь доступен в рабочих (см {{bug (1323172)}}).</li>
 <li><a href="/en-US/docs/Web/API/Server-sent_events">События сервера посланных</a> теперь могут быть использованы из рабочих (см {{bug (1267903)}}).</li>
 <li>{{Domxref ( "ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil ()")}} Теперь можно вызвать асинхронно (см {{bug(1263304)}}).</li>
</ul>

<h3 id="WebGL">WebGL</h3>

<ul>
 <li>{{Domxref ( "WEBGL_compressed_texture_astc")}} реализуется расширение WebGL ({{bug(1250077)}}).</li>
 <li>{{Domxref ( "WEBGL_debug_renderer_info")}} расширение WebGL теперь включён по умолчанию ({{bug(1336645)}}).</li>
</ul>

<h3 id="Аудио_видео_и_медиа">Аудио, видео и медиа</h3>

<h4 id="Генеральная">Генеральная</h4>

<ul>
 <li>Начиная с <strong>Firefox 53 для Android</strong> , декодирование массовой информации обрабатывается вне процесса для повышения производительности на многоядерных системах ({{bug (1333323)}}).</li>
</ul>

<h4 id="элементы_медиа">элементы медиа</h4>

<ul>
 <li>{{domxref ( "HTMLMediaElement.play ()")}} Метод, используемый для начала воспроизведения медиа в любом медиа-элемента, теперь возвращает {{jsxref ( "Promise")}}, которая выполняется, когда воспроизведение начинается и отклоняется если произошла ошибка ({{bug(1244768)}}).</li>
</ul>

<h4 id="Web_Audio_API">Web Audio API</h4>

<ul>
 <li>был добавлен {{domxref ( "AudioScheduledSourceNode")}} интерфейс и {{domxref ( "AudioBufferSourceNode")}}, {{domxref ( "ConstantSourceNode")}} и {{domxref ( "OscillatorNode")}} интерфейсы теперь основаны на нем ({{bug( "1324568")}}).</li>
</ul>

<h4 id="WebRTC">WebRTC</h4>

<ul>
 <li>В {{domxref ( "RTCPeerConnection")}} методы {{domxref ( "RTCPeerConnection.createOffer", "createOffer ()")}} и {{domxref ( "RTCPeerConnection.createAnswer", "createAnswer ()")}} Теперь возвращает {{jsxref ( "промис")}} , который возвращает объект , соответствующий словарь {{domxref ( "RTCSessionDescriptionInit")}} вместо возврата {{domxref ( "RTCSessionDescription")}} непосредственно. Существующий код будет продолжать работать, но <a href="/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter">новый код можно записать более просто</a> .</li>
 <li>Аналогичным образом , {{domxref ( "RTCPeerConnection")}} методы {{domxref ( "RTCPeerConnection.setLocalDescription", "setLocalDescription ()")}} и {{domxref ( "RTCPeerConnection.setRemoteDescription", "setRemoteDescription ()")}} теперь принимают в качестве входных данных объекта , соответствующего словарю {{domxref ( "RTCSessionDescriptionInit")}}. Существующий код продолжает работать, но <a href="/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter">может быть упрощена</a> .</li>
 <li>{{Domxref ( "RTCPeerConnection.addIceCandidate ()")}} теперь принимает в качестве входных данных объекта, соответствующую {{domxref ( "RTCIceCandidateInit")}} словарь. Это совместимо с существующим кодом, но позволяет новый код, который будет написано чуть более просто при использовании в сочетании с изменениями перечисленных выше ({{bug (1263312)}}).</li>
 <li>{{glossary( "DTMF")}} поддержка теперь включена по умолчанию , используя {{domxref ( "RTCDTMFSender")}}. См <a href="/en-US/docs/Web/API/WebRTC_API/Using_DTMF">Использование DTMF с WebRTC</a> для получения дополнительной информации о том , как это работает.</li>
</ul>

<h3 id="HTTP_Networking">HTTP / Networking</h3>

<ul>
 <li>Gecko теперь имеет прив доступный в , <code>about:config</code>чтобы позволить пользователям устанавливать их по умолчанию {{HTTPHeader ( "Referrer-политики")}} - ({{bug ( "1304623")}}). Возможные значения: <code>network.http.referer.userControlPolicy</code>

  <ul>
   <li>0 - <code>no-referrer</code></li>
   <li>1 - <code>same-origin</code></li>
   <li>2 - <code>strict-origin-when-cross-origin</code></li>
   <li>3 - <code>no-referrer-when-downgrade</code>(по умолчанию)</li>
  </ul>
 </li>
 <li>Поддержка следующего протокола переговоров (NPN) была удалена в пользу <a href="https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation">протокола прикладного уровня переговоров</a> (ALPN) - см {{bug ( "1248198")}}.</li>
 <li>{{HTTPHeader ( "Large-Allocation")}} заголовок HTTP теперь доступен по умолчанию, и больше не скрывается за привилегированную ({{bug(1331083)}}).</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>Частично реализована {{domxref ( "SVGGeometryElement")}} интерфейс ({{bug (1239100)}}).</li>
</ul>

<h2 id="Переезды_с_веб-платформы">Переезды с веб-платформы</h2>

<h3 id="HTML_XML">HTML / XML</h3>

<ul>
 <li><code>dom.details_element.enabled</code>Прив - которая контролируется включение / отключение {{HTMLElement ( "детали")}} и {{HTMLElement ( "Резюме")}} опорный элемент в Firefox - теперь был удалён из <code>about:config</code>. Эти элементы (которые впервые были включены по умолчанию в Firefox 49) больше не могут быть отключены. См {{bug (1271549)}}.</li>
</ul>

<h3 id="CSS_2">CSS</h3>

<ul>
 <li>Удалены <code>-moz</code> приставкой вариант {{cssxref ( ": реж", ": каталог ()")}} псевдокласс ({{bug (1270406)}}).</li>
 <li><code>-moz</code>Приставкой версия {{cssxref ( "текст-ALIGN-последний")}} был удалён ({{bug (1276808)}}).</li>
 <li>Удалены <code>-moz</code> приставкой вариант {{cssxref ( "известково ()")}} Метод ({{bug (1331296)}}).</li>
</ul>

<h3 id="JavaScript_2">JavaScript</h3>

<ul>
 <li>Нестандартный {{jsxref ( "ArrayBuffer.slice ()")}} Метод был удалён (но стандартизированная версия {{jsxref ( "ArrayBuffer.prototype.slice ()")}} сохраняется, см {{bug (1313112)}}).</li>
</ul>

<h3 id="API-интерфейсы">API-интерфейсы</h3>

<ul>
 <li><a href="/en-US/docs/Archive/B2G_OS/API/WiFi_Information_API">Информация API Wi - Fi</a> , спикер API - менеджер, и Привязывание API и <a href="/en-US/docs/Archive/B2G_OS/API/Settings_API">настройки API</a> , были удалены из платформы (см {{bug (1313788)}}, {{bug (1317853)}}, {{bug (1313789)}} и {{bug (1313155)}} соответственно).</li>
</ul>

<h2 id="Изменения_для_дополнения_и_разработчиков_Mozilla">Изменения для дополнения и разработчиков Mozilla</h2>

<h3 id="WebExtensions">WebExtensions</h3>

<p>Новые API:</p>

<ul>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData">browsingData</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity">identity</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities">contextualIdentities</a></code></li>
</ul>

<p>Усовершенствованные API:</p>

<ul>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync">storage.sync</a></code></li>
 <li><code>page_action</code>, <code>browser_action</code>, <code>password</code>, <code>tab</code> <a href="/en-US/Add-ons/WebExtensions/API/contextMenus/ContextType">Типы контекстов</a> в<code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus">contextMenus</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest">webRequest.onBeforeRequest</a></code> теперь поддерживает <code>requestBody</code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS">tabs.insertCSS</a></code>теперь поддерживает <code>cssOrigin</code>, что позволяет вставлять таблицы стилей пользователя.</li>
</ul>

<h3 id="модули_JavaScript_код">модули JavaScript-код</h3>

<ul>
 <li>Асинхронные <a href="../../../Add-ons/Add-on_Manager/AddonManager">интерфейсы AddonManager</a> теперь поддерживают {{jsxref ( "Promise", "Промис")}}, а также колбэки ({{bug (987512)}}.</li>
</ul>

<h2 id="Старые_версии">Старые версии</h2>

<p>{{Firefox_for_developers (52)}}</p>
