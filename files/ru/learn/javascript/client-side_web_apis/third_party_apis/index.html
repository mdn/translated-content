---
title: Сторонние API
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
tags:
  - 3rd party
  - API
  - Third party
  - Новичку
translation_of: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}</div>

<p class="summary">API, которые мы рассмотрели до сих пор, встроены в браузер, но не все API таковы. Многие крупные веб-сайты и сервисы, такие как Google Maps, Twitter, Facebook, PayPal и т. д., Предоставляют API-интерфейсы, позволяющие разработчикам использовать свои данные (например, показывать ваш твиттер-поток в вашем блоге) или сервисы (например, отображение пользовательских карт Google на вашем сайте, или использование логина Facebook для входа в систему ваших пользователей). В этой статье рассматривается различие между API-интерфейсами браузера и сторонними API и показано типичное использование последних.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Необходимые условия:</th>
   <td>Основы JavaScript (см. <a href="/en-US/docs/Learn/JavaScript/First_steps">первые шаги</a>, <a href="/en-US/docs/Learn/JavaScript/Building_blocks">структурные элементы</a>, <a href="/en-US/docs/Learn/JavaScript/Objects">объекты JavaScript</a>), the <a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">основы клиентских API</a></td>
  </tr>
  <tr>
   <th scope="row">Задача:</th>
   <td>Изучить, как работают сторонние API, и как использовать их для улучшения ваших сайтов.</td>
  </tr>
 </tbody>
</table>

<h2 id="Что_такое_сторонние_API">Что такое сторонние API?</h2>

<p>Сторонние API - это API, предоставляемые третьими лицами — как правило, такими компаниями, как Facebook, Twitter, or Google — чтобы вы могли получить доступ к их функциям с помощью JavaScript и использовать его на своём собственном сайте. Как мы показали в нашей <a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">вводной статье об API</a>, одним из наиболее очевидных примеров является использование <a href="https://developers.google.com/maps/">Google Maps APIs</a> для отображения пользовательских карт на ваших страницах.</p>

<p>Давайте снова посмотрим на наш пример карты (см. <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html">исходный код на GitHub</a>; <a href="https://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html">см. это в действии</a>),  и используем его для иллюстрации того, как сторонние API отличаются от API-интерфейсов браузера.</p>

<div class="note">
<p><strong>Примечание</strong>: По умолчанию использование сторонних API на вашем сайте позволит им отслеживать файлы cookie своих доменов, устанавливать файлы cookie в исходное состояние, получать заголовки ссылок, определяющие посещаемые страницы, и разрешать им выполнять JavaScript на страницах, на которых они загружаются с теми же разрешениями (например, выполнить запросы AJAX на ваши серверы с теми же кукисами сеанса). Должны быть оценены вопросы регулирования, безопасности и конфиденциальности.</p>
</div>

<div class="note">
<p><strong>Примечание</strong>: Возможно, вы захотите сразу <a href="/en-US/docs/Learn#Getting_our_code_examples">получить все наши примеры кода</a>, в этом случае вы можете просто искать репо для файлов примеров, которые вам нужны в каждом разделе.</p>
</div>

<h3 id="Они_находятся_на_сторонних_серверах">Они находятся на сторонних серверах</h3>

<p>API браузера встроены в браузер - вы можете получить к ним доступ сразу из JavaScript. Например, <a href="/en-US/docs/Web/API/Geolocation/Using_geolocation">API геолокации</a>, доступный в нашем примере, осуществляется с использованием свойства геолокации объекта <code><a href="/en-US/docs/Web/API/Navigator">Navigator</a></code>, которое возвращает объект <code><a href="/en-US/docs/Web/API/Geolocation">Geolocation</a></code>. Этот пример использует метод <code><a href="/en-US/docs/Web/API/Geolocation/getCurrentPosition">getCurrentPosition()</a></code> этого объекта, для запроса текущего положения устройства:</p>

<pre class="brush: js">navigator.geolocation.getCurrentPosition(function(position) { ... });</pre>

<p>Сторонние API, с другой стороны, расположены на сторонних серверах. Чтобы получить доступ к ним из JavaScript, вам сначала нужно подключиться к функциям API и сделать его доступным на вашей странице. Обычно это связано с первой ссылкой на библиотеку JavaScript, доступную на сервере через элемент {{htmlelement("script")}}, как показано в нашем примере:</p>

<pre class="brush: js">&lt;script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA"&gt;&lt;/script&gt;</pre>

<p>Затем вы можете начать использовать объекты, доступные в этой библиотеке. Например:</p>

<pre class="brush: js">var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
var myOptions = {
  zoom: 8,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  disableDefaultUI: true
}

var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);</pre>

<p>Здесь мы создаём новый объект <code>LatLng</code>, используя конструктор <code>google.maps.LatLng()</code>, который содержит широту и долготу местоположения, которое мы хотим показать, полученные из API геолокации. Затем мы создаём объект опций (<code>myOptions</code>), содержащий эту и другую информацию, связанную с отображением карты. Наконец, мы фактически создаём карту, используя конструктор <code>google.maps.Map()</code>, который принимает в качестве параметров элемент, на котором мы хотим нарисовать карту, и объект опций.</p>

<p>Это вся информация, которую API Карт Google требует для построения простой карты. Сервер, к которому вы подключаетесь, обрабатывает все сложные вещи, такие как отображение правильных фрагментов карты для отображаемой области и т. д.</p>

<div class="note">
<p><strong>Примечание</strong>: Некоторые API обрабатывают доступ к их функциям несколько иначе, требуя от разработчика сделать HTTP-запрос (см. <a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">Получение данных с сервера</a>) на определённый шаблон URL для получения определённых данных. Они называются RESTful API, и мы покажем пример этого позже в статье.</p>
</div>

<h3 id="Разрешения_обрабатываются_по-разному">Разрешения обрабатываются по-разному</h3>

<p>Безопасность API-интерфейсов браузеров, как правило, обрабатывается запросами разрешения, как <a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#They_have_additional_security_mechanisms_where_appropriate">описано в нашей первой статье</a>. Целью этого является то, что пользователь знает, что происходит на сайтах, которые он посещает, и с меньшей вероятностью может стать жертвой того, кто использует API, злонамеренно.</p>

<p>Сторонние API имеют немного другую систему разрешений - они, как правило, используют ключевые коды, чтобы позволить разработчикам получить доступ к функциям API. Просмотрите URL-адрес библиотеки API Карт Google, с которой мы связались:</p>

<pre>https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA</pre>

<p>Параметр URL, указанный в конце URL-адреса, является ключом разработчика - разработчик приложения должен применять его для получения ключа, а затем включать его в свой код определённым образом, чтобы иметь доступ к функциям API. В случае с Картами Google (и другими API Google) вы подаёте заявку на получение ключа на <a href="https://console.cloud.google.com/">Google Cloud Platform</a>.</p>

<p>Другие API могут потребовать, чтобы вы включили ключ немного по-другому, но шаблон для большинства из них довольно схож. <br>
  <br>
 Требование к ключу заключается в том, что не каждый может использовать функциональность API без какой-либо подотчётности. Когда разработчик зарегистрировался для ключа, они затем известны поставщику API, и действие может быть предпринято, если они начинают делать что-то вредоносное с помощью API (например, отслеживать местоположение пользователей или пытаться спамить API с множеством запросов для остановки его работы, например). Самое простое действие - просто отменить их привилегии API.</p>

<h2 id="Расширенный_пример_Карт_Google">Расширенный пример Карт Google</h2>

<p>Теперь когда мы рассмотрели пример API Карт Google и посмотрели, как он работает, добавим ещё несколько функций, чтобы показать, как использовать некоторые другие функции API.</p>

<ol>
 <li>
  <p>Чтобы начать этот раздел, сделайте себе копию <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/google-maps/maps_start.html">исходного файла Карт Google</a>, в новой папке. Если вы уже <a href="/en-US/docs/Learn#Getting_our_code_examples">клонировали репозиторий примеров</a>, у вас уже есть копия этого файла, которую вы можете найти в папке the <em>javascript/apis/third-party-apis/google-maps</em>.</p>
 </li>
 <li>
  <p>Затем получите свой собственный ключ разработчика, выполнив следующие шаги:</p>

  <ol>
   <li>Перейдите в <a href="https://console.cloud.google.com/apis/dashboard">панель управления API-интерфейсом Google Cloud Platform</a>.</li>
   <li>Создайте новый проект, если у вас его ещё нет.</li>
   <li>Нажмите кнопку <em>Enable API</em>.</li>
   <li>Выберите <em>Google Maps JavaScript API</em>.</li>
   <li>Нажмите кнопку <em>Enable</em>.</li>
   <li>Нажмите <em>Create credentials</em>, затем выберите <em>API key</em>.</li>
   <li>Скопируйте свой ключ API и замените существующий ключ в первом элементе {{htmlelement ('script')}} примера вашим собственным (фрагмент между <code>?key=</code> и меткой закрытия закрытия атрибута (<code>"</code>).)</li>
  </ol>

  <div class="note">
  <p><strong>Примечание</strong>: Получение ключей API, связанных с Google, может быть немного затруднительным: в Менеджере API Google Cloud Platform много разных экранов, и рабочий процесс может немного отличаться в зависимости от того, как у вас уже установлена ​​учётная запись. Если у вас возникнут проблемы с этим шагом, мы будем рады помочь — <a href="/en-US/docs/Learn#Contact_us">Свяжитесь с нами</a>.</p>
  </div>
 </li>
 <li>Откройте исходный файл Карт Google, найдите строку <code>INSERT-YOUR-API-KEY-HERE</code>, и замените её фактическим ключом API, который вы получили из панели управления Google Cloud Platform API Manager.</li>
</ol>

<h3 id="Adding_a_custom_marker">Adding a custom marker</h3>

<p>Adding a marker (icon) at a certain point on the map is easy — you just need to create a new marker using the <code>google.maps.Marker()</code> constructor, passing it an options object containing the position to display the marker at (as a <code>LatLng</code> object), and the <code>Map</code> object to display it on.</p>

<ol>
 <li>
  <p>Add the following just below the <code>var map ...</code> line:</p>

  <pre class="brush: js">var marker = new google.maps.Marker({
  position: latlng,
  map: map
});</pre>

  <p>Now if you refresh your page, you'll see a nice little marker pop up in the centre of the map. This is cool, but it is not exactly a custom marker — it is using the default marker icon.</p>
 </li>
 <li>
  <p>To use a custom icon, we need to specify it when we create the marker, using its URL. First of all, add the following line above the previous block you added:</p>

  <pre class="brush: js">var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';</pre>

  <p>This defines the base URL where all the official Google Maps icons are stored (you could also specify your own icon location if you wished).</p>
 </li>
 <li>
  <p>The icon location is specified in the <code>icon</code> property of the options object. Update the constructor like so:</p>

  <pre class="brush: js">var marker = new google.maps.Marker({
  position: latlng,
  icon: iconBase + 'flag_maps.png',
  map: map
});</pre>

  <p>Here we specify the icon property value as the <code>iconBase</code> plus the icon filename, to create the complete URL. Now try reloading your example and you'll see a custom marker displayed on your map!</p>
 </li>
</ol>

<div class="note">
<p><strong>Note</strong>: See <a href="https://developers.google.com/maps/documentation/javascript/custom-markers">Customizing a Google Map: Custom Markers</a> for more information.</p>
</div>

<div class="note">
<p><strong>Note</strong>: See <a href="https://fusiontables.google.com/DataSource?dsrcid=308519#map:id=3">Map marker or Icon names</a> to find out what other icons are available, and see what their reference names are. Their file name will be the icon name they display when you click on them, with ".png" added on the end.</p>
</div>

<h3 id="Displaying_a_popup_when_the_marker_is_clicked">Displaying a popup when the marker is clicked</h3>

<p>Another common use case for Google Maps is displaying more information about a place when its name or marker is clicked (popups are called <strong>info windows</strong> in the Google Maps API). This is also very simple to achieve, so let's have a look at it.</p>

<ol>
 <li>
  <p>First of all, you need to specify a JavaScript string containing HTML that will define the content of the popup. This will be injected into the popup by the API and can contain just about any content you want. Add the following line below the <code>google.maps.Marker()</code> constructor definition:</p>

  <pre class="brush: js">var contentString = '&lt;div id="content"&gt;&lt;h2 id="firstHeading" class="firstHeading"&gt;Custom info window&lt;/h2&gt;&lt;p&gt;This is a cool custom info window.&lt;/p&gt;&lt;/div&gt;';</pre>
 </li>
 <li>
  <p>Next, you need to create a new info window object using the <code>google.maps.InfoWindow()</code> constructor. Add the following below your previous line:</p>

  <pre class="brush: js">var infowindow = new google.maps.InfoWindow({
  content: contentString
});</pre>

  <p>There are other properties available (see <a href="https://developers.google.com/maps/documentation/javascript/infowindows">Info Windows</a>), but here we are just specifying the <code>content</code> property in the options object, which points to the source of the content.</p>
 </li>
 <li>
  <p>Finally, to get the popup to display when the marker is clicked, we use a simple click event handler. Add the following below the <code>google.maps.InfoWindow()</code> constructor:</p>

  <pre class="brush: js">marker.addListener('click', function() {
  infowindow.open(map, marker);
});</pre>

  <p>Inside the function, we simply invoke the infowindow's <code>open()</code> function, which takes as parameters the map you want to display it on, and the marker you want it to appear next to.</p>
 </li>
 <li>
  <p>Now try reloading the example, and clicking on the marker!</p>
 </li>
</ol>

<h3 id="Controlling_what_map_controls_are_displayed">Controlling what map controls are displayed</h3>

<p>Inside the original <code>google.maps.Map()</code> constructor, you'll see the property <code>disableDefaultUI: true</code> specified. This disables all the standard UI controls you usually get on Google Maps.</p>

<ol>
 <li>
  <p>Try setting its value to <code>false</code> (or just removing the line altogether) then reloading your example, and you'll see the map zoom buttons, scale indicator, etc.</p>
 </li>
 <li>
  <p>Now undo your last change.</p>
 </li>
 <li>
  <p>You can show or hide the controls in a more granular fashion by using other properties that specify single UI features. Try adding the following underneath the <code>disableDefaultUI: true</code> (remember to put a comma after <code>disableDefaultUI: true</code>, otherwise you'll get an error):</p>

  <pre class="brush: js">zoomControl: true,
mapTypeControl: true,
scaleControl: true,</pre>
 </li>
 <li>
  <p>Now try reloading the example to see the effect these properties have. You can find more options to experiment with at the <a href="https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions">MapOptions object reference page</a>.</p>
 </li>
</ol>

<p>That's it for now — have a look around the <a href="https://developers.google.com/maps/documentation/javascript/">Google Maps APIs documentation</a>, and have some more fun playing!</p>

<h2 id="A_RESTful_API_—_NYTimes">A RESTful API — NYTimes</h2>

<p>Now let's look at another API example — the <a href="https://developer.nytimes.com">New York Times API</a>. This API allows you to retrieve New York Times news story information and display it on your site. This type of API is known as a <strong>RESTful API</strong> — instead of getting data using the features of a JavaScript library like we did with Google Maps, we get data by making HTTP requests to specific URLs, with data like search terms and other properties encoded in the URL (often as URL parameters). This is a common pattern you'll encounter with APIs.</p>

<h2 id="An_approach_for_using_third-party_APIs">An approach for using third-party APIs</h2>

<p>Below we'll take you through an exercise to show you how to use the NYTimes API, which also provides a more general set of steps to follow that you can use as an approach for working with new APIs.</p>

<h3 id="Find_the_documentation">Find the documentation</h3>

<p>When you want to use a third party API, it is essential to find out where the documentation is, so you can find out what features the API has, how you use them, etc. The New York Times API documentation is at <a href="https://developer.nytimes.com/">https://developer.nytimes.com/</a>.</p>

<h3 id="Get_a_developer_key">Get a developer key</h3>

<p>Most APIs require you to use some kind of developer key, for reasons of security and accountability. To sign up for an NYTimes API key, you need to go to <a href="https://developer.nytimes.com/signup">https://developer.nytimes.com/signup</a>.</p>

<ol>
 <li>
  <p>Let's request a key for the "Article Search API" — fill in the form, selecting this as the API you want to use.</p>
 </li>
 <li>
  <p>Next, wait a few minutes, then get the key from your email.</p>
 </li>
 <li>
  <p>Now, to start the example off, make copies of <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes_start.html">nytimes_start.html</a> and <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes.css">nytimes.css</a> in a new directory on your computer. If you've already <a href="/en-US/docs/Learn#Getting_our_code_examples">cloned the examples repository</a>, you'll already have a copy of these files, which you can find in the <em>javascript/apis/third-party-apis/nytimes</em> directory. Initially the <code>&lt;script&gt;</code> element contains a number of variables needed for the setup of the example; below we'll fill in the required functionality.</p>
 </li>
</ol>

<p>The app will end up allowing you to type in a search term and optional start and end dates, which it will then use to query the Article Search API and display the search results.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14821/nytimes-search.png" style="border-style: solid; border-width: 1px; display: block; height: 374px; margin: 0px auto; width: 700px;"></p>

<h3 id="Connect_the_API_to_your_app">Connect the API to your app</h3>

<p>First, you'll need to make a connection between the API, and your app. This is usually done either by connecting to the API's JavaScript (as we did in the Google Maps API), or by making requests to the correct URL(s).</p>

<p>In the case of this API, you need to include the API key as a <a href="/en-US/docs/Web/HTTP/Methods/GET">get</a> parameter every time you request data from it.</p>

<ol>
 <li>
  <p>Find the following line:</p>

  <pre class="brush: js">var key = 'INSERT-YOUR-API-KEY-HERE';</pre>

  <p>Replace <code>INSERT-YOUR-API-KEY-HERE</code> with the actual API key you got in the previous section.</p>
 </li>
 <li>
  <p>Add the following line to your JavaScript, below the "<code>// Event listeners to control the functionality</code>" comment. This runs a function called <code>fetchResults()</code> when the form is submitted (the button is pressed).</p>

  <pre class="brush: js">searchForm.addEventListener('submit', submitSearch);</pre>
 </li>
 <li>
  <p>Now add the <code>submitSearch()</code> and <code>fetchResults()</code> function definitions, below the previous line:</p>

  <pre class="brush: js">function submitSearch(e) {
  pageNumber = 0;
  fetchResults(e);
}

function fetchResults(e) {
  // Use preventDefault() to stop the form submitting
  e.preventDefault();

  // Assemble the full URL
  url = baseURL + '?api-key=' + key + '&amp;page=' + pageNumber + '&amp;q=' + searchTerm.value + '&amp;fq=document_type:("article")';

  if(startDate.value !== '') {
    url += '&amp;begin_date=' + startDate.value;
  };

  if(endDate.value !== '') {
    url += '&amp;end_date=' + endDate.value;
  };

}</pre>
 </li>
</ol>

<p><code>submitSearch()</code> sets the page number back to 0 to begin with, then calls <code>fetchResults()</code>. This first calls <code><a href="/en-US/docs/Web/API/Event/preventDefault">preventDefault()</a></code> on the event object, to stop the form actually submitting (which would break the example). Next, we use some string manipulation to assemble the full URL that we will make the request to. We start off by assembling the parts we deem as mandatory for this demo:</p>

<ul>
 <li>The base URL (taken from the <code>baseURL</code> variable).</li>
 <li>The API key, which has to be specified in the <code>api-key</code> URL parameter (the value is taken from the <code>key</code> variable).</li>
 <li>The page number, which has to be specified in the <code>page</code> URL parameter (the value is taken from the <code>pageNumber</code> variable).</li>
 <li>The search term, which has to be specified in the <code>q</code> URL parameter (the value is taken from the value of the <code>searchTerm</code> text {{htmlelement("input")}}).</li>
 <li>The document type to return results for, as specified in an expression passed in via the <code>fq</code> URL parameter. In this case, we just want to return articles.</li>
</ul>

<p>Next, we use a couple of <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if()</a></code> statements to check whether the <code>startDate</code> and <code>endDate</code> <code>&lt;input&gt;</code>s have had values filled in on them. If they do, we append their values to the URL, specified in <code>begin_date</code> and <code>end_date</code> URL parameters respectively.</p>

<p>So, a complete URL would end up looking something like this:</p>

<pre>https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4f3c267e125943d79b0a3e679f608a78&amp;page=0&amp;q=cats
&amp;fq=document_type:("article")&amp;begin_date=20170301&amp;end_date=20170312</pre>

<div class="note">
<p><strong>Note</strong>: You can find more details of what URL parameters can be included in the <a href="https://developer.nytimes.com/article_search_v2.json">Article Search API reference</a>.</p>
</div>

<div class="note">
<p><strong>Note</strong>: The example has rudimentary form data validation — the search term field has to be filled in before the form can be submitted (achieved using the <code>required</code> attribute), and the date fields have <code>pattern</code> attributes specified, which means they won't submit unless their values consist of 8 numbers (<code>pattern="[0-9]{8}"</code>). See <a href="/en-US/docs/Learn/HTML/Forms/Form_validation">Form data validation</a> for more details on how these work.</p>
</div>

<h3 id="Requesting_data_from_the_API">Requesting data from the API</h3>

<p>Now we've constructed our URL, let's make a request to it. We'll do this using the <a href="/en-US/docs/Web/API/Fetch_API/Using_Fetch">Fetch API</a>.</p>

<p>Add the following code block inside the <code>fetchResults()</code> function, just above the closing curly brace:</p>

<pre class="brush: js">// Use fetch() to make the request to the API
fetch(url).then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});</pre>

<p>Here we run the request by passing our <code>url</code> variable to <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch()</a></code>, convert the response body to JSON using the <code><a href="/en-US/docs/Web/API/Body/json">json()</a></code> function, then pass the resulting JSON to the <code>displayResults()</code> function so the data can be displayed in our UI.</p>

<h3 id="Displaying_the_data">Displaying the data</h3>

<p>OK, let's look at how we'll display the data. Add the following function below your <code>fetchResults()</code> function.</p>

<pre class="brush: js">function displayResults(json) {
  while (section.firstChild) {
      section.removeChild(section.firstChild);
  }

  var articles = json.response.docs;

  if(articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }

  if(articles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'No results returned.'
    section.appendChild(para);
  } else {
    for(var i = 0; i &lt; articles.length; i++) {
      var article = document.createElement('article');
      var heading = document.createElement('h2');
      var link = document.createElement('a');
      var img = document.createElement('img');
      var para1 = document.createElement('p');
      var para2 = document.createElement('p');
      var clearfix = document.createElement('div');

      var current = articles[i];
      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
      para2.textContent = 'Keywords: ';
      for(var j = 0; j &lt; current.keywords.length; j++) {
        var span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para2.appendChild(span);
      }

      if(current.multimedia.length &gt; 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class','clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
};</pre>

<p>There's a lot of code here; let's explain it step by step:</p>

<ul>
 <li>The <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/while">while</a></code> loop is a common pattern used to delete all of the contents of a DOM element, in this case, the {{htmlelement("section")}} element. We keep checking to see if the <code>&lt;section&gt;</code> has a first child, and if it does, we remove the first child. The loop ends when <code>&lt;section&gt;</code> no longer has any children.</li>
 <li>Next, we set the <code>articles</code> variable to equal <code>json.response.docs</code> — this is the array holding all the objects that represent the articles returned by the search. This is done purely to make the following code a bit simpler.</li>
 <li>The first <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if()</a></code> block checks to see if 10 articles are returned (the API returns up to 10 articles at a time.) If so, we display the {{htmlelement("nav")}} that contains the <em>Previous 10</em>/<em>Next 10</em> pagination buttons. If less than 10 articles are returned, they will all fit on one page, so we don't need to show the pagination buttons. We will wire up the pagination functionality in the next section.</li>
 <li>The next <code>if()</code> block checks to see if no articles are returned. If so, we don't try to display any — we just create a {{htmlelement("p")}} containing the text "No results returned." and insert it into the <code>&lt;section&gt;</code>.</li>
 <li>If some articles are returned, we, first of all, create all the elements that we want to use to display each news story, insert the right contents into each one, and then insert them into the DOM at the appropriate places. To work out which properties in the article objects contained the right data to show, we consulted the <a href="https://developer.nytimes.com/article_search_v2.json">Article Search API reference</a>. Most of these operations are fairly obvious, but a few are worth calling out:
  <ul>
   <li>We used a <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for loop</a> (<code>for(var j = 0; j &lt; current.keywords.length; j++) { ... }</code> ) to loop through all the keywords associated with each article, and insert each one inside its own {{htmlelement("span")}}, inside a <code>&lt;p&gt;</code>. This was done to make it easy to style each one.</li>
   <li>We used an <code>if()</code> block (<code>if(current.multimedia.length &gt; 0) { ... }</code>) to check whether each article actually has any images associated with it (some stories don't.) We display the first image only if it actually exists (otherwise an error would be thrown).</li>
   <li>We gave our &lt;div&gt; element a class of "clearfix", so we can easily apply clearing to it (this technique is needed at the time of writing to stop floated layouts from breaking.)</li>
  </ul>
 </li>
</ul>

<p>If you try the example now, it should work, although the pagination buttons won't work yet.</p>

<h3 id="Wiring_up_the_pagination_buttons">Wiring up the pagination buttons</h3>

<p>To make the pagination buttons work, we will increment (or decrement) the value of the <code>pageNumber</code> variable, and then re-rerun the fetch request with the new value included in the page URL parameter. This works because the NYTimes API only returns 10 results at a time — if more than 10 results are available, it will return the first 10 (0-9) if the <code>page</code> URL parameter is set to 0 (or not included at all — 0 is the default value), the next 10 (10-19) if it is set to 1, and so on.</p>

<p>This allows us to easily write a simplistic pagination function.</p>

<ol>
 <li>
  <p>Below the existing <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code> call, add these two new ones, which cause the <code>nextPage()</code> and <code>previousPage()</code> functions to be invoked when the relevant buttons are clicked:</p>

  <pre class="brush: js">nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);</pre>
 </li>
 <li>
  <p>Below your previous addition, let's define the two functions — add this code now:</p>

  <pre class="brush: js">function nextPage(e) {
  pageNumber++;
  fetchResults(e);
};

function previousPage(e) {
  if(pageNumber &gt; 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
};</pre>

  <p>The first function is simple — we increment the <code>pageNumber</code> variable, then run the <code>fetchResults()</code> function again to display the next page's results.</p>

  <p>The second function works nearly exactly the same way in reverse, but we also have to take the extra step of checking that <code>pageNumber</code> is not already zero before decrementing it — if the fetch request runs with a minus <code>page</code> URL parameter, it could cause errors. If the <code>pageNumber</code> is already 0, we simply <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/return">return</a></code> out of the function, to avoid wasting processing power (If we are already at the first page, we don't need to load the same results again).</p>
 </li>
</ol>

<h2 id="YouTube_example">YouTube example</h2>

<p>We also built another example for you to study and learn from — see our <a href="https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/">YouTube video search example</a>. This uses two related APIs:</p>

<ul>
 <li>The <a href="https://developers.google.com/youtube/v3/docs/">YouTube Data API</a> to search for YouTube videos and return results.</li>
 <li>The <a href="https://developers.google.com/youtube/iframe_api_reference">YouTube IFrame Player API</a> to display the returned video examples inside IFrame video players so you can watch them.</li>
</ul>

<p>This example is interesting because it shows two related third-party APIs being used together to build an app. The first one is a RESTful API, while the second one works more like Google Maps (with constructors, etc.). It is worth noting however that both of the APIs require a JavaScript library to be applied to the page. The RESTful API has functions available to handle making the HTTP requests and returning the results, so you don't have to write them out yourself using say fetch or XHR.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14823/youtube-example.png" style="border-style: solid; border-width: 1px; display: block; height: 389px; margin: 0px auto; width: 700px;"></p>

<p>We are not going to say too much more about this example in the article — <a href="https://github.com/mdn/learning-area/tree/master/javascript/apis/third-party-apis/youtube">the source code</a> has detailed comments inserted inside it to explain how it works.</p>

<h2 id="Summary">Summary</h2>

<p>This article has given you a useful introduction to using third party APIs to add functionality to your websites.</p>

<p>{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}</p>

<p> </p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">Introduction to web APIs</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents">Manipulating documents</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">Fetching data from the server</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs">Third party APIs</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics">Drawing graphics</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs">Video and audio APIs</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage">Client-side storage</a></li>
</ul>
