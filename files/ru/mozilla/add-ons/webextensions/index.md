---
title: Расширения браузера
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

[WebExtension API](/ru/docs/Mozilla/Add-ons/WebExtensions) — кросс-браузерная система разработки дополнений браузера.
В значительной степени эта система совместима с [Chrome Extensions API](https://developer.chrome.com/docs/extensions), которая поддерживается в Google Chrome и Opera. Расширения, написанные для этих браузеров, в большинстве случаев будут работать с Firefox или [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) [лишь с минимальными изменениями](/ru/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome). Эти API также полностью совместимы с [мультипоточным Firefox](/ru/docs/Mozilla/Firefox/Multiprocess_Firefox).

### Приступая к работе

- [Что такое расширения?](/ru/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
- [Ваше первое расширение](/ru/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Ваше второе расширение](/ru/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [Внутреннее устройство расширения](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Примеры расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/Examples)

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
- [Кнопка на панели инструментов](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)
- [Кнопка в адресной строке](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Всплывающие окна](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Контекстное меню](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [Боковые панели](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Страница настройки дополнения](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_page)
- [Дополнительные web-страницы](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)
- [Уведомления](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [Угадывание адреса по мере ввода](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [Панели инструмента разработчика](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)

### Основные понятия

- [Обзор JavaScript API](/ru/docs/Mozilla/Add-ons/WebExtensions/API)
- [Компоненты пользовательского интерфейса](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [Скрипты Content scripts](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Match patterns (шаблоны совпадения)](/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Internationalization](/ru/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Content Security Policy (политика безопасного контента)](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Native messaging (нативный обмен сообщениями)](/ru/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)

### Адаптация

- [Портирование расширения из Google Chrome](/ru/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [Портирование старых дополнений Firefox](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)
- [Сравнение с Add-on SDK](https://extensionworkshop.com/documentation/develop/comparison-with-the-add-on-sdk/)
- [Сравнение с XUL/XPCOM-расширениями](https://extensionworkshop.com/documentation/develop/comparison-with-xul-xpcom-extensions/)
- [Несовместимость с Chrome](/ru/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

### Рабочий процесс (workflow) Firefox

- [Установка](/ru/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [Отладка](/ru/docs/Mozilla/Add-ons/WebExtensions/Debugging)
- [Начало работы с инструментом Web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
- [Справочник команд Web-ext](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
- [Расширения и Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/)
- [Публикация вашего расширения](https://extensionworkshop.com/documentation/publish/package-your-extension/)

### Справочники

- [Обзор JavaScript API](/ru/docs/Mozilla/Add-ons/WebExtensions/API)
- [Таблицы совместимости браузера для JavaScript APIs](/ru/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

#### JavaScript APIs

{{ ListSubpages ("/ru/Add-ons/WebExtensions/API") }}

#### Manifest keys

{{ ListSubpages ("/ru/Add-ons/WebExtensions/manifest.json") }}
