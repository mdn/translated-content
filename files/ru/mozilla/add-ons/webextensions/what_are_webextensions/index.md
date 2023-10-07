---
title: Что такое WebExtensions?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---

{{AddonSidebar}}

Дополнения расширяют и изменяют функциональность браузера. Они разрабатываются с использованием стандартных Веб-технологий - JavaScript, HTML и CSS, а также некоторых специальных JavaScript API, которые позволяют вам делать намного больше, чем то, на что вы способны на любом из сайтов. Вот некоторые из примеров того, что вы можете делать:

**Расширять или дополнять сайты**: Используйте дополнения, чтобы предоставить информацию или дополнительные функции для браузера. Позвольте пользователям собирать информацию с посещённых ими страниц для улучшения предлагаемых вами услуг.

![Пример использования Amazon Assistant for Firefox](https://mdn.dev/archives/media/attachments/2018/02/13/15808/f81a8cc5b196af29cd9d558ee3c5dbdc/Amazon_add_on.png)

Примеры: [Amazon Assistant for Firefox](https://addons.mozilla.org/en-US/firefox/addon/amazon-browser-bar/), [OneNote Web Clipper](https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/) и [Grammarly for Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/).

**Дайте пользователям продемонстрировать себя**: Дополнения могут управлять содержимым сайтов, например, позволять пользователям добавлять их любимые изображения как фоновые картинки для каждого сайта, которые они посещают. Ещё дополнения могут изменять и то, как выглядит сам интерфейс Firefox, делая это тем же способом, что и [обычные темы](/ru/docs/Mozilla/Add-ons/Themes/Theme_concepts).

![Как расширение может изменить фоновую картинку сайта](https://mdn.dev/archives/media/attachments/2018/02/13/15809/ce69d140dc91da804ce6eb8f20d03c07/MyWeb_New_Tab_add_on.png)

Примеры: [MyWeb New Tab](https://addons.mozilla.org/en-US/firefox/addon/myweb-new-tab/), [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/) и [VivaldiFox](https://addons.mozilla.org/en-US/firefox/addon/vivaldifox/).

**Добавьте или скройте содержимое веб-страниц**: Возможно, вы захотите помочь пользователям заблокировать назойливую рекламу, дать доступ к туристическим путеводителям, когда на странице упоминается страна или город, или отформатировать содержимое страницы так, чтобы дать незабываемый опыт прочтения. С доступом к HTML и CSS дополнения могут помогать пользователям смотреть на Интернет так, как они хотят.

![Как работает uBlock Origin, популярный блокировщик рекламы](https://mdn.dev/archives/media/attachments/2018/02/13/15807/4e85eb0560fc8d5945e64cf75a1a8e50/ublock_origin_add_on.png)

Примеры: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Reader](https://addons.mozilla.org/en-US/firefox/addon/reader/) и [Toolbox for Google Play Store™](https://addons.mozilla.org/en-US/firefox/addon/toolbox-google-play-store/).

**Дайте новые инструменты и функции**: Добавляйте новые пункты в список дел или генерируйте QR-коды для текста страницы или различных ссылок. При помощи гибких опций интерфейса и мощью WebExtensions API вы можете с лёгкостью добавлять новые функции в браузер. Причём вы можете расширить таким образом функциональность любого сайта, он не обязательно должен быть вашим.

![Как выглядит генератор QR-кодов QRUTILS.com](https://mdn.dev/archives/media/attachments/2018/02/13/15806/b9070a5f71c40c18d0a4ae722bca2e4a/QR_Code_Image_Generator_add_on.png)

Примеры: [Swimlanes for Trello](https://addons.mozilla.org/en-US/firefox/addon/swimlanes-for-trello/) и [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

**Игры**: Давайте геймерам тот же опыт, что и в традиционных компьютерных играх - или же исследуйте новые игровые возможности, например, внедряя геймплей в ежедневный просмотр веб-страниц.

![Пример игры Asteroids in Popup](https://mdn.dev/archives/media/attachments/2018/02/13/15805/259d5d3c0620469521d43a897a7b653b/Asteroids_in_Popup_add_on%20.png)

Примеры: [Asteroids in Popup](https://addons.mozilla.org/en-US/firefox/addon/asteroids-in-popup/), [Solitaire Card Game New Tab](https://addons.mozilla.org/en-US/firefox/addon/solitaire-card-game-new-tab/) и [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

**Добавляйте инструменты для разработки**: вы можете предлагать инструменты разработки как часть вашего бизнеса, или же как то, что вы нового открыли для веб-разработки и чем хотите поделиться. Например, вы можете добавлять свои инструменты во встроенный набор инструментов разработчика Firefox.

![То, как интегрируется aXe в инструменты разработчика Firefox](https://mdn.dev/archives/media/attachments/2018/02/13/15804/a2f3ed2cd857626d42352dd0de550486/aXe_Developer_Tools_add_on.png)

Примеры: [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) и [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/).

WebExtensions - это кросс-браузерная система для разработки дополнений для браузера. В значительной степени её API совместим с [extension API](https://developer.chrome.com/extensions), который поддерживается браузерами Google Chrome и Opera. Расширения, разработанные для этих браузеров, в большинстве случаев будут работать в Firefox или Microsoft Edge с минимальными изменениями. Также API полностью совместим с [мультипроцессным Firefox](/ru/Firefox/Multiprocess_Firefox).

Мы также намерены расширять API для поддержки нужд разработчиков дополнений, и если у вас есть идеи, мы будем рады услышать их. Вы можете связаться с нами через рассылку [dev-addons mailing list](https://mail.mozilla.org/listinfo/dev-addons) или на [IRC](https://wiki.mozilla.org/IRC) канале [#webextensions](irc://irc.mozilla.org/webextensions).

До появления WebExtensions разработка дополнения для Firefox осуществлялась одним из трёх различных способов: [XUL/XPCOM overlays](/en-US/Add-ons/Overlay_Extensions), [bootstrapped extensions](/ru/docs/Mozilla/Add-ons/Bootstrapped_extensions) или [Add-on SDK](/ru/docs/Mozilla/Add-ons/SDK). В будущем WebExtensions станет рекомендуемым способом разработки дополнений для Firefox, а остальные способы будут считаться устаревшими.

## Что дальше?

- Чтобы посмотреть примеры некоторых дополнений, см. [Example WebExtensions](/en-US/Add-ons/WebExtensions/Examples).
- Чтобы узнать больше о структуре дополнений, см. [Anatomy of a WebExtension](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- Чтобы посмотреть пример разработки простого дополнения, см. [Ваш первый WebExtension](/ru/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension).
