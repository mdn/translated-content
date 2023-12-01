---
title: Ваш первый WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---

{{AddonSidebar}}

В этой статье мы пройдём весь путь создания WebExtension для Firefox, от начала и до конца. Это дополнение будет просто добавлять красную рамку ко всем страницам, загруженным с "mozilla.org" или любого из его поддоменов.

Исходный код этого дополнения доступен на GitHub: <https://github.com/mdn/webextensions-examples/tree/master/borderify>.

Для начала вам нужен Firefox 45 или более поздней версии.

## Написание WebExtension

Создайте новую директорию (папку) и перейдите в неё:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Теперь создайте новый файл, назовите его "manifest.json" в папке "borderify". Вставьте туда следующий код:

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a solid red border to all webpages matching mozilla.org.",
  "icons": {
    "48": "icons/border-48.png"
  },

  "applications": {
    "gecko": {
      "id": "borderify@mozilla.org",
      "strict_min_version": "45.0"
    }
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- Первые три ключа: [`manifest_version`](/ru/Add-ons/WebExtensions/manifest.json/manifest_version), `name и version`, являются обязательными и содержат основные метаданные о дополнении.
- [`description`](/ru/Add-ons/WebExtensions/manifest.json/description) не обязателен, но рекомендуется: это описание отображается в Менеджере Дополнений.
- [`icons`](/ru/Add-ons/WebExtensions/manifest.json/icons) не обязателен, но рекомендуется: позволяет указать значок для дополнения, который будет виден в Менеджере Дополнений.
- [`applications`](/ru/Add-ons/WebExtensions/manifest.json/applications) является обязательным для Firefox, и определяет ID дополнения. Он так же может использоваться для указания минимальной и максимальной версии Firefox, поддерживаемой расширением.

Самый интересный ключ здесь - это [`content_scripts`](/en-US/Add-ons/WebExtensions/manifest.json/content_scripts), который говорит Firefox загружать скрипт на Web страницах, чей URL совпадает с заданным шаблоном. В нашем случае, мы просим Firefox загрузить скрипт с названием "borderify.js" на всех HTTP или HTTPS страницах, полученных с "mozilla.org" или любого из его поддоменов.

- [Узнать больше content scripts.](/ru/Add-ons/WebExtensions/Content_scripts)
- [Узнать больше о match patterns](/ru/Add-ons/WebExtensions/Match_patterns).

> **Предупреждение:** [В некоторых случаях вам нужно указать ID для вашего дополнения](/ru/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID). Если вам нужно указать ID дополнения включите ключ [`applications`](/ru/Add-ons/WebExtensions/manifest.json/applications) в `manifest.json` и установите его свойство `gecko.id`:
>
> ```json
> "applications": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Дополнение должно иметь иконку (значок). Эта иконка будет показана в списке дополнений в Менеджере Дополнений. Наш файл manifest.json сообщает, что иконка будет находиться в файле "icons/border-48.png".

Создайте директорию (папку) "icons" внутри директории "borderify" . Сохраните в ней иконку под именем "border-48.png". Вы можете использовать [иконку из нашего примера](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png), которая взята из набора иконок Google Material Design, и используется по лицензии [Creative Commons Attribution-ShareAlike](http://creativecommons.org/licenses/by-sa/3.0/).

Вы можете использовать собственную иконку. Её размер должен быть 48x48 пикселей. Вы можете также использовать иконку размером 96x96 пикселей для отображения на мониторах высокого разрешения. В этом случае вам необходимо указать её в качестве свойства "96" объекта "`icons"` в файле manifest.json:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Также вы можете создать иконку в формате SVG и она будет корректно масштабироваться.

- [Узнать больше о ключе icons](/ru/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Наконец, создайте в директории "borderify" файл с именем "borderify.js" и поместите туда следующий код:

```js
document.body.style.border = "5px solid red";
```

Этот скрипт будет встраиваться в страницу, которая совпадает с шаблоном, указанном в ключе `content_scripts` файла manifest.json. Этот скрипт имеет прямой доступ ко всему документу, как если бы он был загружен самой страницей.

- [Узнать больше о content scripts](/ru/Add-ons/WebExtensions/Content_scripts)

## Пробуем

Сначала внимательно проверьте, что вы правильно разместили файлы и дали им правильные имена:

```
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Установка

Начиная с версии Firefox 45 вы можете временно установить WebExtension с локального диска.

Откройте страницу "about:debugging", кликните "Load Temporary Add-on" и выберите файл manifest.json:

{{EmbedYouTube("SKb-CNYpl6Q")}}

Теперь ваше дополнение установлено и останется в браузере до его перезапуска.

Для проверки, зайдите на страницу "about:addons" чтобы открыть Менеджер Дополнений. Вы должны увидеть своё дополнение с именем и иконкой:

{{EmbedYouTube("WpUL3-qmenE")}}

Также, вы можете запускать WebExtension из командной строки, используя [web-ext](/ru/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext).

### Тестирование

Теперь зайдите на любую страницу домена "mozilla.org" и вы должны будете увидеть красную границу вокруг страницы:

{{EmbedYouTube("exUAH0sIyBw")}}

Поэкспериментируйте немного. Поменяйте цвет границы или сделайте ещё что-нибудь с содержимым на странице. После того, как изменённый скрипт будет сохранён, а страница перезагружена, вы сразу увидите изменения:

{{EmbedYouTube("t6s_4yF8dRk")}}

> **Примечание:** Обратите внимание, что после изменения файла manifest.json, вы должны вручную перезагрузить своё дополнение. В настоящий момент это значит, что вам нужно перезагрузить Firefox, а затем снова загрузить своё дополнение на странице "about:debugging". Мы работаем над улучшением этого процесса.

- [Узнать больше о временной установке дополнений](/ru/Add-ons/WebExtensions/Packaging_and_installation#Loading_from_disk)

## Упаковка и публикация

Чтобы другие люди могли использовать ваше дополнение, вам необходимо запаковать его. Дополнения Firefox в запакованном виде являются XPI файлами, которые представляют собой обычные ZIP архивы с расширением "xpi".

При упаковке необходимо учитывать следующее: в ZIP архиве должны быть только файлы, а не содержащая их директория (директория "borderify" не должна попасть в архив). Для того, чтобы создать правильный XPI файл из вашего дополнения, в командной строке перейдите в директорию "borderify" и выполните следующую команду:

```
zip -r ../borderify.xpi *
```

Начиная с Firefox 43 все дополнения должны быть подписаны прежде чем они будут установлены в браузер. Вы можете снять это ограничение _только_ в [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) или [Firefox Nightly](https://nightly.mozilla.org/) при помощи следующих шагов:

- перейдите на страницу `about:config` в Firefox
- при помощи строки поиска найдите `xpinstall.signatures.required`
- дважды кликнув на этом свойстве или при помощи локального меню (через клик правой кнопкой мыши), выберите "Toggle", чтобы установить значение `false`.

{{EmbedYouTube("HgtBYDWtH4w")}}

- [Узнать больше об упаковке и инсталляции](/ru/Add-ons/WebExtensions/Packaging_and_installation)
- [Узнать больше о подписи и распространении](/ru/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)

## Что дальше?

Теперь, когда вы имеете представление о разработке дополнений для Firefox, вы можете:

- [Прочитать больше об анатомии WebExtensions](/ru/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Создать более сложное WebExtensions](/ru/Add-ons/WebExtensions/Your_second_WebExtension)
- [Прочитать больше об API JavaScript, доступном для WebExtensions](/ru/Add-ons/WebExtensions/API)
