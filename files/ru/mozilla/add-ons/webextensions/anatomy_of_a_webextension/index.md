---
title: Анатомия Расширения
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---

{{AddonSidebar}}

Расширение состоит из набора файлов, упакованных для распространения и установки. В этой статье мы быстро рассмотрим файлы, которые могут присутствовать в расширении.

## manifest.json

Это единственный файл, который должен присутствовать в каждом расширении. Он содержит основные метаданные, такие как его имя, версию и требуемые разрешения. Он также предоставляет указатели на другие файлы в расширении.

Этот манифест также может содержать указатели на несколько других типов файлов:

- [Background pages](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts): Реализует долгоиграющую логику.
- Иконки для расширения и любых кнопок, которые оно может определить.
- [Sidebars, popups, and options pages](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Sidebars_popups_options_pages): HTML-документы, которые предоставляют содержимое для различных компонентов пользовательского интерфейса.
- [Content scripts](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts): JavaScript сценарии вашего расширения, которые будут исполняться на веб-страницах.
- [Web-accessible resources](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Web_accessible_resources): Делает контент вашего расширения видимым для веб-страниц и скриптов.

![](webextension-anatomy.png)

Для получения подробной информации см. справочную страницу [manifest.json](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

Помимо ссылок, указанных в манифесте, расширение может включать дополнительные [веб-страницы расширения](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Extension_pages) с поддерживающимися файлами.

## Фоновые скрипты

Расширения часто должны поддерживать долгосрочное состояние или выполнять долгосрочные операции независимо от срока жизни любой конкретной веб-страницы или окна браузера. Для этого нужны фоновые сценарии.

Фоновые сценарии загружаются сразу после загрузки расширения и остаются загруженными до тех пор, пока расширение не будет отключено или удалено. вы можете использовать любой [API расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/API) в сценарии, если вы запросили необходимые [разрешения](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

### Спецификации фоновых скриптов

Вы можете включить фоновый скрипт, используя `background` ключ в «manifest.json»:

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

Вы можете указать несколько фоновых сценариев: если вы это сделаете, они выполняются в том же контексте, как и несколько сценариев, загруженных на одной веб-странице.

Вместо указания несколько фоновых сценариев вы можете указать фоновую страницу, которая так же преимущества поддержки ES6 модулей:

**manifest.json**

```json
// manifest.json

"background": {
  "page": "background-page.html"
}
```

**background-page.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script type="module" src="background-script.js"></script>
  </head>
</html>
```

### Окружение фоновых скриптов

#### DOM APIs

Фоновые скрипты запускаются в пространстве специальной страницы, называемой фоновой. Это даёт им доступ к глобальному [`window`](/ru/docs/Web/API/Window) объекту, а так же ко всем его DOM APIs.

#### WebExtension APIs

Фоновые скрипты могут использовать любые [API расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/API), если расширение имеет необходимые [разрешения](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

#### Многоцелевой доступ

Фоновые скрипты могут осуществлять XHR запросы к любому домену, если расширение имеет [host разрешения](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

#### Web-содержимое

Фоновые скрипты не получают прямого доступа к веб-страницам. Однако они могут загружать [скрипты содержимого](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) на веб-страницы и [взаимодействовать с этими скриптами с помощью API передачи сообщений](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts).

#### Политика безопасности содержимого

Фоновые скрипты ограничены в выполнении потенциально опасных операций, таких как [`eval()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/eval), через политику безопасности содержимого. Подробнее см. [Content Security Policy](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Боковые панели (sidebar), всплывающие окна (popup), страницы настроек

Ваше расширение может иметь разнообразные компоненты интерфейса, определённые в HTML документах:

- [Боковая панель (sidebar](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)) - это панель, отображаемая в окне браузера с левой стороны, рядом с веб-страницей
- [Всплывающие окна (popup](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)) - диалоговое окно, отображаемое по клику на [кнопке](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action) на [панели инструментов](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action) или в адресной строке
- [Страница настроек](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) открывается, когда пользователь обращается к настройкам расширения на странице менеджера расширений.

Для каждого из этих компонентов вы создаёте HTML файл и помещаете специальную информацию в [manifest.json](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json). HTML файл может в себя включать CSS и JavaScript файлы, как и любая web-страница.

Всё это типы [веб-страниц расширения](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), и, в отличие от нормальных веб-страниц, ваш JavaScript может использовать все привелегии WebExtension APIs, как и ваши фоновые скрипты. Они даже могут получить доступ к переменным в фоновой странице, используя {{WebExtAPIRef("runtime.getBackgroundPage()")}}.

## Веб-страницы расширения

Вы также можете включить HTML документы в ваше расширение, даже если они не будут включены в какой-либо существующий компонент пользовательского интерфейса. В отличие от документов, которые вы можете предоставить для боковых панелей, всплывающих окон или страниц настроек, эти документы не содержатся в manifest.json. Однако, они также имеют такой же доступ к WebExtension APIs, как и фоновые скрипты.

Вы можете загрузить такую страницу, используя {{WebExtAPIRef("windows.create()")}} или {{WebExtAPIRef("tabs.create()")}}.

Подробнее см. [Extension pages](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages).

## Встраиваемые скрипты

Используйте встраиваемые скрипты для доступа и изменения веб-страниц. Встраиваемые скрипты загружаются в веб-страницу и исполняются в контексте данной конкретной страницы.

Встраиваемые скрипты предоставляются расширением; этим они отличаются от скриптов, загруженных самой веб-страницей, включая тех, что загружены с помощью {{HTMLElement("script")}} элемента веб-страницы.

Встраиваемые скрипты имеют доступ и могут манипулировать DOM, как и обычные скрипты, загруженные веб-страницей.

В отличие от обычных скриптов, они могут:

- Осуществлять XHR запросы.
- Использовать часть [API расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/API).
- Обмениваться сообщениями с их фоновыми скриптами и таким образом иметь доступ ко всему WebExtension APIs.

Встраиваемые скрипты не могут напрямую взаимодействовать с обычными скриптами на странице, но они могут обмениваться сообщениями с помощью стандартного [`window.postMessage()`](/ru/docs/Web/API/Window/postMessage) API.

Обычно, когда мы говорим о встраиваемых скриптах, мы отсылаемся к JavaScript, но вы так же можете внедрить CSS в веб-страницы, используя этот же механизм.

Подробнее см. [content scripts](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

## Веб-доступные ресурсы

Веб-доступные ресурсы - это ресурсы вроде изображений, HTML, CSS и JavaScript, которые вы включаете в расширение и хотите сделать доступными для встраиваемых скриптов и оригинальных скриптов веб-страницы. Такие ресурсы могут быть доступны скриптам через специальную URI схему.

Например, если встраиваемый скрипт хочет добавить какие-либо изображения в веб-страницу, вы можете включить эти изображения в расширение и сделать их веб-доступными. Тогда встраиваемый скрипт может создать и добавить [`img`](/ru/docs/Web/HTML/Element/img) тэги, которые будут ссылаться на эти изображения через `src` атрибут.

Подробнее см. [web_accessible_resources](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) секцию manifest.json.
