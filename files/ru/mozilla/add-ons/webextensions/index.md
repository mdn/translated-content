---
title: Расширения браузера
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

WebExtensions - это кросс-браузерная система разработки дополнений (для браузеров). В значительной степени эта система совместима с [API-расширений](https://developer.chrome.com/extensions), поддерживаемых Google Chrome и Opera. Расширения, написанные для этих браузеров, в большинстве случаев будут работать с Firefox или [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) [лишь с минимальными изменениями](/ru/Add-ons/WebExtensions/Porting_from_Google_Chrome). Эти API также полностью совместимы с [мультипоточным Firefox](/ru/Firefox/Multiprocess_Firefox).

Также мы намерены расширять API для поддержки нужд разработчиков дополнений, поэтому, если у вас есть идеи, то мы их с удовольствием выслушаем. Вы можете связаться с нами через [dev-addons mailing list](https://mail.mozilla.org/listinfo/dev-addons) или [#webextensions](irc://irc.mozilla.org/webextensions) на [IRC](https://wiki.mozilla.org/IRC).

### Приступая к работе

- [Что такое WebExtensions?](/ru/Add-ons/WebExtensions/What_are_WebExtensions)
- [Первое WebExtension](/ru/Add-ons/WebExtensions/Your_first_WebExtension)
- [Второе WebExtension](/ru/Add-ons/WebExtensions/Your_second_WebExtension)
- [Анатомия WebExtension](/ru/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Примеры WebExtensions](/ru/Add-ons/WebExtensions/Examples)

### How to

- [Перехват HTTP-запросов](/ru/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Изменить веб-страницу](/ru/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Добавить кнопку на панель инструментов](/ru/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Реализация страницы настроек](/ru/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Работа с буфером обмена](/ru/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- Работа с вкладками браузера
- Доступ и изменение закладок
- Доступ и изменение куки (cookies)

### Интерфейс пользователя

- [Введение](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [Кнопка на панели инструментов](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)
- [Кнопка в адресной строке](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Всплывающие окна](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Контекстное меню](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [Боковые панели](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Страница настройки дополнения](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_page)
- [Дополнительные web-страницы](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Bundled_web_pages)
- [Уведомления](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [Угадывание адреса по мере ввода](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [Панели инструмента разработчика](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)

### Основные понятия

- [Обзор JavaScript API](/ru/docs/Mozilla/Add-ons/WebExtensions/API)
- [Компоненты пользовательского интерфейса](/ru/docs/Mozilla/Add-ons/WebExtensions/User_interface_components)
- [Скрипты Content scripts](/ru/Add-ons/WebExtensions/Content_scripts)
- [Match patterns (шаблоны совпадения)](/ru/Add-ons/WebExtensions/Match_patterns)
- [Internationalization](/ru/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Content Security Policy (политика безопасного контента)](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Native messaging (нативный обмен сообщениями)](/ru/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)

### Адаптация

- [Портирование расширения из Google Chrome](/ru/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [Портирование старых дополнений Firefox](/ru/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [Embedded WebExtensions](/ru/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Сравнение с Add-on SDK](/ru/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [Сравнение с XUL/XPCOM-расширениями](/ru/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [Несовместимость с Chrome](/ru/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

### Рабочий процесс (workflow) Firefox

- [Установка](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [Отладка](/ru/Add-ons/WebExtensions/Debugging)
- [Начало работы с инструментом Web-ext](/ru/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [Справочник команд Web-ext](/ru/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [WebExtensions и Add-on ID](/ru/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [Публикация вашего дополнения WebExtension](/ru/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)

### Справочники

- [Обзор JavaScript API](/ru/docs/Mozilla/Add-ons/WebExtensions/API)
- [Таблицы совместимости браузера для JavaScript APIs](/ru/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

#### JavaScript APIs

{{ ListSubpages ("/ru/Add-ons/WebExtensions/API") }}

#### Manifest keys

{{ ListSubpages ("/ru/Add-ons/WebExtensions/manifest.json") }}
