---
title: Ваше первое расширение
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{AddonSidebar}}

> [!NOTE]
> Если вы уже знакомы с основными понятиями о браузерных расширениях, то можете пропустить этот раздел и [узнать как собираются файлы расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Также вы можете использовать [справочную документацию](/ru/docs/Mozilla/Add-ons/WebExtensions#reference) чтобы начать создавать свои расширения. Посетите [Мастер-класс по расширениям Firefox](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension) чтобы узнать больше о тестировании и публикации расширений для Firefox

В этой статье мы пройдём весь путь создания расширения для Firefox от начала и до конца. Это расширение будет просто добавлять красную рамку ко всем страницам, загруженным с `mozilla.org` или любого из его поддоменов.

Исходный код этого примера доступен на GitHub: <https://github.com/mdn/webextensions-examples/tree/master/borderify>.

## Написание расширения

Создайте новую папку с именем `borderify` и перейдите в неё. Вы можете сделать это с помощью Проводника вашего компьютера или [терминала командной строки](/ru/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line). Умение работать с терминалом командной строки очень полезно, поскольку оно помогает вести более продвинутую разработку расширений. Используя терминал, создать папку можно следующим образом:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Используя удобный [текстовый редактор](/ru/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors), создайте в папке `borderify` новый файл с именем `manifest.json` и таким содержимым:

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- Первые три ключа: [`manifest_version`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) и [`version`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), являются обязательными и содержат основные метаданные о расширении.
- [`description`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) не обязателен, но рекомендуется добавлять его: это описание отображается в Управлении дополнениями.
- [`icons`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) не обязателен, но рекомендуется добавлять его: он позволяет указать значок дополнения, который будет виден в Управлении дополнениями.

Самый интересный ключ здесь — это [`content_scripts`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), он даёт указание Firefox загружать указанный скрипт на веб-страницах, у которых URL совпадает с заданным шаблоном. В нашем случае, мы просим Firefox загрузить скрипт с названием `borderify.js` на всех HTTP или HTTPS страницах, полученных с `mozilla.org` или любого из его поддоменов.

- [Узнать больше о шаблонах совпадения](/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

> [!WARNING]
> [В некоторых случаях вам нужно указать ID для вашего дополнения](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Если это необходимо, то добавьте ключ [`browser_specific_settings`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) в файл `manifest.json` и установите свойство `gecko.id`:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Если у расширения есть значок, то он будет отображаться в списке расширений Управления дополнениями. Наш файл `manifest.json` сообщает, что значок находится в файле `icons/border-48.png`.

Создайте папку `icons` внутри `borderify` и поместите в неё файл значка с именем `border-48.png`. Вы можете использовать [значок из нашего примера](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png), который взят из набора Google Material Design и используется по лицензии [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/).

Вы можете использовать собственный значок. Его размер должен быть 48x48 пикселей или 96x96 пикселей для отображения на мониторах с высоким разрешением. В этом случае необходимо указать его в качестве свойства `96` объекта `icons` в файле `manifest.json`:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Также можно использовать файл в формате SVG, и он будет правильно масштабироваться. Но нужно иметь в виду, что если вы используете SVG и ваш значок содержит текст, то возможно стоит воспользоваться инструментом «преобразовать в контур» в редакторе SVG, чтобы текст масштабировался корректно.

- [Узнать больше об использовании значков](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Наконец, создайте в папке `borderify` файл с именем `borderify.js` с таким содержимым:

```js
document.body.style.border = "5px solid red";
```

Этот скрипт будет встраиваться в страницы, адрес которых совпадает с шаблоном, указанном в ключе `content_scripts` файла `manifest.json`. Этот скрипт имеет прямой доступ ко всему документу, как если бы он был загружен самой страницей.

- [Узнать больше о встраиваемых скриптах](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Пробуем

Сначала внимательно проверьте, что вы правильно разместили файлы и дали им правильные имена:

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Установка

В Firefox: откройте страницу [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), кликните `Этот Firefox`, далее нажмите на кнопку `Загрузить временное дополнение...` и выберите любой файл из папки с нашим примером.

Расширение будет установлено и остается установленным до перезапуска Firefox.

Также можно запустить расширение с помощью командной строки используя утилиту [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).

### Тестирование

> [!NOTE]
> По умолчанию [расширения не работают в режиме приватного просмотра](https://support.mozilla.org/ru/kb/dopolneniya-v-rezhime-privatnogo-prosmotra). Если вы хотите протестировать расширение в режиме приватного просмотра, то откройте `about:addons`, выберите расширение и установите переключатель `Запуск в приватных окнах` в положение `Разрешить`.

Теперь перейдите на любую страницу "`https://www.mozilla.org/ru/`" и вы должны будете увидеть красную границу вокруг страницы.

![На mozilla.org отображается рамка](border_on_mozilla_org.png)

> [!NOTE]
> Не проверяйте на `addons.mozilla.org`! Встраиваемые скрипты на данный момент запрещены на этом поддомене.

Попробуйте немного поэкспериментировать. Измените цвет границы или сделайте что-нибудь ещё с содержимым страницы. Для этого внесите изменения в скрипт и перезагрузите файлы расширения, нажав кнопку `Обновить` в `about:debugging`. Сразу после этого изменения станут видны.

- [Узнать больше о временной установке расширений в Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Упаковка и публикация

Чтобы другие люди могли использовать ваше дополнение, необходимо запаковать его и отправить в Mozilla для добавления подписи. Узнать больше об этом можно в разделе ["Publish"](https://extensionworkshop.com/documentation/publish/) Мастер-класса по расширениям Firefox.

## Что дальше?

Теперь, когда вы имеете представление о разработке расширений для Firefox, вы можете:

- [создать более сложное расширение](/ru/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension),
- [узнать больше о внутреннем устройстве расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension),
- [посмотреть примеры расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/Examples),
- [узнать, что необходимо для разработки, тестирования и публикации расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/What_next).
