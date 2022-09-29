---
title: Что такое WebExtensions?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
tags:
  - Extensions
  - WebExtensions
  - Дополнения
  - Расширения
translation_of: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---
<div>{{AddonSidebar}}</div>

<div>
<p>Дополнения расширяют и изменяют функциональность браузера. Они разрабатываются с использованием стандартных Веб-технологий - JavaScript, HTML и CSS, а также некоторых специальных JavaScript API, которые позволяют вам делать намного больше, чем то, на что вы способны на любом из сайтов. Вот некоторые из примеров того, что вы можете делать:</p>
</div>

<div>
<p><strong>Расширять или дополнять сайты</strong>: Используйте дополнения, чтобы предоставить информацию или дополнительные функции для браузера. Позвольте пользователям собирать информацию с посещённых ими страниц для улучшения предлагаемых вами услуг.</p>
</div>

<div><img alt="Пример использования Amazon Assistant for Firefox" src="https://media.prod.mdn.mozit.cloud/attachments/2018/02/13/15808/f81a8cc5b196af29cd9d558ee3c5dbdc/Amazon_add_on.png" style="height: 438px; width: 700px;"></div>

<div>
<p>Примеры: <a href="https://addons.mozilla.org/en-US/firefox/addon/amazon-browser-bar/">Amazon Assistant for Firefox</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/">OneNote Web Clipper</a> и <a href="https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/">Grammarly for Firefox</a>.</p>
</div>

<div>
<p><strong>Дайте пользователям продемонстрировать себя</strong>: Дополнения могут управлять содержимым сайтов, например, позволять пользователям добавлять их любимые изображения как фоновые картинки для каждого сайта, которые они посещают. Ещё дополнения могут изменять и то, как выглядит сам интерфейс Firefox, делая это тем же способом, что и <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes/Theme_concepts">обычные темы</a>.</p>
</div>

<div><img alt="Как расширение может изменить фоновую картинку сайта" src="https://media.prod.mdn.mozit.cloud/attachments/2018/02/13/15809/ce69d140dc91da804ce6eb8f20d03c07/MyWeb_New_Tab_add_on.png" style="height: 398px; width: 540px;"></div>

<div>
<p>Примеры: <a href="https://addons.mozilla.org/en-US/firefox/addon/myweb-new-tab/">MyWeb New Tab</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/tabliss/">Tabliss</a> и <a href="https://addons.mozilla.org/en-US/firefox/addon/vivaldifox/">VivaldiFox</a>.</p>
</div>

<div>
<p><strong>Добавьте или скройте содержимое веб-страниц</strong>: Возможно, вы захотите помочь пользователям заблокировать назойливую рекламу, дать доступ к туристическим путеводителям, когда на странице упоминается страна или город, или отформатировать содержимое страницы так, чтобы дать незабываемый опыт прочтения. С доступом к HTML и CSS дополнения могут помогать пользователям смотреть на Интернет так, как они хотят.</p>
</div>

<div><img alt="Как работает uBlock Origin, популярный блокировщик рекламы" src="https://media.prod.mdn.mozit.cloud/attachments/2018/02/13/15807/4e85eb0560fc8d5945e64cf75a1a8e50/ublock_origin_add_on.png" style="height: 480px; width: 640px;"></div>

<div>
<p>Примеры: <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/">uBlock Origin</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/reader/">Reader</a> и <a href="https://addons.mozilla.org/en-US/firefox/addon/toolbox-google-play-store/">Toolbox for Google Play Store™</a>.</p>
</div>

<div>
<p><strong>Дайте новые инструменты и функции</strong>: Добавляйте новые пункты в список дел или генерируйте QR-коды для текста страницы или различных ссылок. При помощи гибких опций интерфейса и мощью WebExtensions API вы можете с лёгкостью добавлять новые функции в браузер. Причём вы можете расширить таким образом функциональность любого сайта, он не обязательно должен быть вашим.</p>
</div>

<div><img alt="Как выглядит генератор QR-кодов QRUTILS.com" src="https://media.prod.mdn.mozit.cloud/attachments/2018/02/13/15806/b9070a5f71c40c18d0a4ae722bca2e4a/QR_Code_Image_Generator_add_on.png" style="height: 512px; width: 700px;"></div>

<div>
<p>Примеры: <a href="https://addons.mozilla.org/en-US/firefox/addon/swimlanes-for-trello/">Swimlanes for Trello</a> и <a href="https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/">Tomato Clock</a>.</p>
</div>

<div>
<p><strong>Игры</strong>: Давайте геймерам тот же опыт, что и в традиционных компьютерных играх - или же исследуйте новые игровые возможности, например, внедряя геймплей в ежедневный просмотр веб-страниц.</p>
</div>

<div><img alt="Пример игры Asteroids in Popup" src="https://media.prod.mdn.mozit.cloud/attachments/2018/02/13/15805/259d5d3c0620469521d43a897a7b653b/Asteroids_in_Popup_add_on%20.png" style="height: 438px; width: 700px;"></div>

<div>
<p>Примеры: <a href="https://addons.mozilla.org/en-US/firefox/addon/asteroids-in-popup/">Asteroids in Popup</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/solitaire-card-game-new-tab/">Solitaire Card Game New Tab</a> и <a href="https://addons.mozilla.org/en-US/firefox/addon/2048-prime/">2048 Prime</a>.</p>
</div>

<div>
<p><strong>Добавляйте инструменты для разработки</strong>: вы можете предлагать инструменты разработки как часть вашего бизнеса, или же как то, что вы нового открыли для веб-разработки и чем хотите поделиться. Например, вы можете добавлять свои инструменты во встроенный набор инструментов разработчика Firefox.</p>
</div>

<div><img alt="То, как интегрируется aXe в инструменты разработчика Firefox" src="https://media.prod.mdn.mozit.cloud/attachments/2018/02/13/15804/a2f3ed2cd857626d42352dd0de550486/aXe_Developer_Tools_add_on.png" style="height: 261px; width: 700px;"></div>

<div>
<p>Примеры: <a href="https://addons.mozilla.org/en-US/firefox/addon/web-developer/">Web Developer</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">Web React Developer Tools</a> и <a href="https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/">aXe Developer Tools</a>.</p>
</div>

<div>
<p>WebExtensions - это кросс-браузерная система для разработки дополнений для браузера. В значительной степени её API совместим с  <a class="external external-icon" href="https://developer.chrome.com/extensions">extension API</a>, который поддерживается браузерами Google Chrome и Opera. Расширения, разработанные для этих браузеров, в большинстве случаев будут работать в Firefox или Microsoft Edge с минимальными изменениями. Также API полностью совместим с <a href="/ru/Firefox/Multiprocess_Firefox">мультипроцессным Firefox</a>.</p>
</div>

<div>
<p>Мы также намерены расширять API для поддержки нужд разработчиков дополнений, и если у вас есть идеи, мы будем рады услышать их. Вы можете связаться с нами через рассылку  <a class="external external-icon" href="https://mail.mozilla.org/listinfo/dev-addons">dev-addons mailing list</a> или на <a class="external external-icon" href="https://wiki.mozilla.org/IRC">IRC</a> канале <a href="irc://irc.mozilla.org/webextensions">#webextensions</a>.</p>
</div>

<div>
<p>До появления WebExtensions разработка дополнения для Firefox осуществлялась одним из трёх различных способов: <a href="/en-US/Add-ons/Overlay_Extensions">XUL/XPCOM overlays</a>, <a href="/en-US/docs/Mozilla/Add-ons/Bootstrapped_extensions">bootstrapped extensions</a> или <a href="/en-US/docs/Mozilla/Add-ons/SDK">Add-on SDK</a>. В будущем WebExtensions станет рекомендуемым способом разработки дополнений для Firefox, а остальные способы будут считаться устаревшими.</p>
</div>

<h2 id="Что_дальше">Что дальше?</h2>

<ul>
 <li>Чтобы посмотреть примеры некоторых дополнений, см. <a href="/en-US/Add-ons/WebExtensions/Examples">Example WebExtensions</a>.</li>
 <li>Чтобы узнать больше о структуре дополнений, см. <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">Anatomy of a WebExtension</a>.</li>
 <li>Чтобы посмотреть пример разработки простого дополнения, см. <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension">Ваш первый WebExtension</a>.</li>
</ul>
