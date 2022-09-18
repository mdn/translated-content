---
title: Как сделать PWA устанавливаемым
slug: Web/Progressive_web_apps/Installable_PWAs
translation_of: Web/Progressive_web_apps/Installable_PWAs
---
<div>{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}</div>

<p class="summary">В предыдущей статье мы читали о том, как <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> работает в off-line режиме благодаря <a href="/en-US/docs/Web/API/Service_Worker_API">service worker</a>, но мы можем пойти дальше и позволить устанавливать веб-приложения на поддерживающие мобильные браузеры, как если бы это было нативное приложение. В этой статье разберём, как этого добиться, используя веб-манифест и функцию под названием «Добавить на главный экран».</p>

<p>Эта технология позволяет запускать приложение прямо с рабочего стола, без запуска браузера и ручного ввода URL-адреса. Ваше веб-приложение может быть установлено рядом с нативным. Поэтому к нему проще получить доступ, а так же вы можете указать, что приложение должно использовать полноэкранный режим браузера, делая его ещё более похожим на нативное</p>

<h2 id="Требования">Требования</h2>

<p>Чтобы сделать сайт доступным для установки, ему необходимы следующие вещи:</p>

<ul>
 <li>Веб-манифест с <a href="/en-US/Apps/Progressive/Add_to_home_screen#Manifest">правильно заполненными полями</a></li>
 <li>Сайт должен использовать защищённый (HTTPS) домен</li>
 <li>Иконка для предоставления приложения на устройстве</li>
 <li>Зарегистрированный service worker, чтобы приложение работало в off-line режиме (на данный момент требуется только для Chrome на Android)</li>
</ul>

<h3 id="Файл_манифеста">Файл манифеста</h3>

<p>Ключевым элементом является файл манифеста,  в котором представлена вся информация о веб-сайте в JSON формате.</p>

<p>Обычно находится в корневой папке веб-приложения. Содержит информацию, такую как название приложения, paths пути к значкам разных размеров, которые можно использовать для представления приложения в мобильных операционных системах (например, в качестве значка домашнего экрана), и цвет фона для использования при загрузке. Эта информация необходима браузеру для правильного отображения приложения при установке и на домашнем экране.</p>

<p>Файл <code>js13kpwa.webmanifest</code> веб-приложения <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> включён в раздел {{htmlelement("head")}} файла <code>index.html</code> с помощью следующей строчки кода:</p>

<pre class="brush: html">&lt;link rel="manifest" href="js13kpwa.webmanifest"&gt;</pre>

<div class="note">
<p><strong>Примечание:</strong> Существует несколько расширений, используемых в прошлом: <code>manifest.webapp</code> был популярен в манифестах приложений Firefox OS, также многие используют <code>manifest.json</code> потому что содержание организовано по структуре JSON. Однако, расширение <code>.webmanifest</code> явно упоминается в <a href="https://w3c.github.io/manifest/">W3C manifest specification</a>, поэтому давайте придерживаться именно этого стандарта.</p>
</div>

<p>Содержимое файла может выглядеть так:</p>

<pre class="brush: json">{
    "name": "js13kGames Progressive Web App",
    "short_name": "js13kPWA",
    "description": "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
    "icons": [
        {
            "src": "icons/icon-32.png",
            "sizes": "32x32",
            "type": "image/png"
        },
        // ...
        {
            "src": "icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "start_url": "/pwa-examples/js13kpwa/index.html",
    "display": "fullscreen",
    "theme_color": "#B12A34",
    "background_color": "#B12A34"
}</pre>

<p>Названия большинства полей говорят сами за себя, но давайте разберём документ и объясним всё подробно:</p>

<ul>
 <li><code>name</code>: Полное название вашего приложения.</li>
 <li><code>short_name</code>: Короткое название для отображения на домашнем экране.</li>
 <li><code>description</code>: Одно-два предложения, описывающих приложение.</li>
 <li><code>icons</code>: Куча информации о значках — URL, размеры, типы. Не забудьте указать хотя бы несколько, чтобы иконка лучше подходила под устройство пользователя</li>
 <li><code>start_url</code>: Загружаемый исходный документ при запуске приложения</li>
 <li><code>display</code>: Как приложение должно отображаться; может быть fullscreen (полноэкранный), standalone (автономный), minimal-ui (минимальный пользовательский интерфейс), browser (браузер)</li>
 <li><code>theme_color</code>: Основной цвет для интерфейса, используемый операционной системой</li>
 <li><code>background_color</code>: Цвет для фона, используемый при установке и на заставке</li>
</ul>

<p>Минимальные требования к манифесту - <code>name</code> и хотя бы один значок (с <code>src</code>, <code>size</code> и <code>type</code>). Поля <code>description</code>, <code>short_name</code>, и <code>start_url</code> являются рекомендуемыми. Вы можете использовать даже больше полей, чем указано выше — не забудьте проверить ссылку на <a href="/en-US/docs/Web/Manifest">Web App Manifest reference</a>.</p>

<h2 id="Добавить_на_домашний_экран">Добавить на домашний экран</h2>

<p>"Добавить на домашний экран" (кратко: a2hs) - это функция, реализованная браузерами, которая берёт информацию, найденную в веб-манифесте, и использует для добавления приложения на домашний экран устройства со значком и именем. Это работает при выполнении требований, описанных выше.</p>

<p>Когда пользователь посещает PWA с помощью браузера, поддерживающего технологию, должен отобразиться значок, указывающий на возможность установки приложения в качестве PWA.</p>

<p><img alt="Add to Home screen popup of js13kPWA." src="https://mdn.mozillademos.org/files/15928/js13kpwa-icon.png" style="border-style: solid; border-width: 1px; display: block; height: 640px; margin: 0px auto; width: 360px;"></p>

<p>После того, как пользователь кликнет на иконку, отобразится баннер установки. Информация в баннере генерируется на основе файла-манифеста — имя и значок отображаются в приглашении.</p>

<p><img alt="Install banner of js13kPWA." src="https://mdn.mozillademos.org/files/15927/js13kpwa-banner.png" style="border-style: solid; border-width: 1px; display: block; height: 640px; margin: 0px auto; width: 360px;"></p>

<p>Если пользователь нажимает кнопку, появляется окно, на котором изображены ярлык приложения и кнопки для подтверждения действий.</p>

<p><img alt="Add to Home screen popup of js13kPWA." src="https://mdn.mozillademos.org/files/15926/js13kpwa-add.png" style="border-style: solid; border-width: 1px; display: block; height: 640px; margin: 0px auto; width: 360px;"></p>

<p>При подтверждении ярлык будет добавлен на рабочий стол.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15834/js13kpwa-installed.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>После этого пользователь может запустить приложение и сразу начать его использовать. Обратите внимание, иногда у PWA (в зависимости от браузера и/или операционной системы) в правом нижнем углу отображается иконка браузера, чтобы пользователи понимали, что работают с веб-приложением.</p>

<h3 id="Экран_загрузки">Экран загрузки</h3>

<p>В некоторых браузерах, на основе информации из манифеста, создаётся заставка, отображаемая при запуске PWA</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15835/js13kpwa-splash.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>Иконка и фоновый цвет использовались для создания заставки.</p>

<h2 id="Итог">Итог</h2>

<p>В статье мы узнали, как сделать PWA устанавливаемыми, используя веб-манифест, и добавить их на главный экран.</p>

<p>Для получения большей информации, можете почитать наш <a href="/en-US/docs/Web/Apps/Progressive/Add_to_home_screen">Add to Home screen гайд</a>. В настоящее время поддержка ограничена браузерами Firefox для Android 58+, Мобильным Chrome и Android Webview 31+, также Opera для Android 32+, но поддержка должна расширяться в ближайшем будущем.</p>

<p>Теперь давайте перейдём к последнему фрагменту PWA-головоломки — повторному запуску с помощью push-уведомлений.</p>

<p>{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</p>
