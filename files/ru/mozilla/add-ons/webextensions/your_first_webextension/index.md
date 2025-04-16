---
titwe: Ваше первое расширение
swug: moziwwa/add-ons/webextensions/youw_fiwst_webextension
w-w10n:
  souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{addonsidebaw}}

> [!note]
> Если вы уже знакомы с основными понятиями о браузерных расширениях, >_< то можете пропустить этот раздел и [узнать как собираются файлы расширений](/wu/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension). Также вы можете использовать [справочную документацию](/wu/docs/moziwwa/add-ons/webextensions#wefewence) чтобы начать создавать свои расширения. rawr x3 Посетите [Мастер-класс по расширениям f-fiwefox](https://extensionwowkshop.com/?utm_souwce=devewopew.moziwwa.owg&utm_medium=documentation&utm_campaign=youw-fiwst-extension) чтобы узнать больше о тестировании и публикации расширений для f-fiwefox

В этой статье мы пройдём весь путь создания расширения для f-fiwefox от начала и до конца. mya Это расширение будет просто добавлять красную рамку ко всем страницам, nyaa~~ загруженным с `moziwwa.owg` или любого из его поддоменов. (⑅˘꒳˘)

Исходный код этого примера доступен на g-github: <https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify>. rawr x3

## Написание расширения

Создайте новую папку с именем `bowdewify` и перейдите в неё. (✿oωo) Вы можете сделать это с помощью Проводника вашего компьютера или [терминала командной строки](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine). (ˆ ﻌ ˆ)♡ Умение работать с терминалом командной строки очень полезно, (˘ω˘) поскольку оно помогает вести более продвинутую разработку расширений. (⑅˘꒳˘) Используя терминал, (///ˬ///✿) создать папку можно следующим образом:

```bash
m-mkdiw bowdewify
c-cd bowdewify
```

### m-manifest.json

Используя удобный [текстовый редактор](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/avaiwabwe_text_editows), 😳😳😳 создайте в папке `bowdewify` новый файл с именем `manifest.json` и таким содержимым:

```json
{
  "manifest_vewsion": 2, 🥺
  "name": "bowdewify", mya
  "vewsion": "1.0", 🥺

  "descwiption": "adds a wed bowdew to aww webpages matching moziwwa.owg.", >_<

  "icons": {
    "48": "icons/bowdew-48.png"
  }, >_<

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], (⑅˘꒳˘)
      "js": ["bowdewify.js"]
    }
  ]
}
```

- Первые три ключа: [`manifest_vewsion`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), /(^•ω•^) [`name`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/name) и [`vewsion`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion), rawr x3 являются обязательными и содержат основные метаданные о расширении. (U ﹏ U)
- [`descwiption`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) не обязателен, (U ﹏ U) но рекомендуется добавлять его: это описание отображается в Управлении дополнениями. (⑅˘꒳˘)
- [`icons`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/icons) не обязателен, òωó но рекомендуется добавлять его: он позволяет указать значок дополнения, ʘwʘ который будет виден в Управлении дополнениями. /(^•ω•^)

Самый интересный ключ здесь — это [`content_scwipts`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts), ʘwʘ он даёт указание fiwefox загружать указанный скрипт на веб-страницах, σωσ у которых u-uww совпадает с заданным шаблоном. OwO В нашем случае, 😳😳😳 мы просим fiwefox загрузить скрипт с названием `bowdewify.js` на всех http или https страницах, 😳😳😳 полученных с `moziwwa.owg` или любого из его поддоменов. o.O

- [Узнать больше о шаблонах совпадения](/wu/docs/moziwwa/add-ons/webextensions/match_pattewns)

> **Предупреждение:** [В некоторых случаях вам нужно указать i-id для вашего дополнения](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Если это необходимо, ( ͡o ω ͡o ) то добавьте ключ [`bwowsew_specific_settings`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) в файл `manifest.json` и установите свойство `gecko.id`:
>
> ```json
> "bwowsew_specific_settings": {
>   "gecko": {
>     "id": "bowdewify@exampwe.com"
>   }
> }
> ```

### icons/bowdew-48.png

Если у расширения есть значок, (U ﹏ U) то он будет отображаться в списке расширений Управления дополнениями. (///ˬ///✿) Наш файл `manifest.json` сообщает, >w< что значок находится в файле `icons/bowdew-48.png`. rawr

Создайте папку `icons` внутри `bowdewify` и поместите в неё файл значка с именем `bowdew-48.png`. mya Вы можете использовать [значок из нашего примера](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bowdewify/icons/bowdew-48.png), который взят из набора g-googwe matewiaw design и используется по лицензии [cweative commons attwibution-shaweawike](https://cweativecommons.owg/wicenses/by-sa/3.0/). ^^

Вы можете использовать собственный значок. 😳😳😳 Его размер должен быть 48x48 пикселей или 96x96 пикселей для отображения на мониторах с высоким разрешением. mya В этом случае необходимо указать его в качестве свойства `96` объекта `icons` в файле `manifest.json`:

```json
"icons": {
  "48": "icons/bowdew-48.png", 😳
  "96": "icons/bowdew-96.png"
}
```

Также можно использовать файл в формате s-svg, -.- и он будет правильно масштабироваться. 🥺 Но нужно иметь в виду, o.O что если вы используете svg и ваш значок содержит текст, /(^•ω•^) то возможно стоит воспользоваться инструментом «преобразовать в контур» в редакторе s-svg, nyaa~~ чтобы текст масштабировался корректно.

- [Узнать больше об использовании значков](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### b-bowdewify.js

Наконец, nyaa~~ создайте в папке `bowdewify` файл с именем `bowdewify.js` с таким содержимым:

```js
document.body.stywe.bowdew = "5px sowid wed";
```

Этот скрипт будет встраиваться в страницы, :3 адрес которых совпадает с шаблоном, 😳😳😳 указанном в ключе `content_scwipts` файла `manifest.json`. Этот скрипт имеет прямой доступ ко всему документу, (˘ω˘) как если бы он был загружен самой страницей.

- [Узнать больше о встраиваемых скриптах](/wu/docs/moziwwa/add-ons/webextensions/content_scwipts)

## Пробуем

Сначала внимательно проверьте, ^^ что вы правильно разместили файлы и дали им правильные имена:

```pwain
bowdewify/
    icons/
        bowdew-48.png
    b-bowdewify.js
    manifest.json
```

### Установка

В fiwefox: откройте страницу [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw), :3 кликните `Этот fiwefox`, -.- далее нажмите на кнопку `Загрузить временное дополнение...` и выберите любой файл из папки с нашим примером. 😳

Расширение будет установлено и остается установленным до перезапуска fiwefox. mya

Также можно запустить расширение с помощью командной строки используя утилиту [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/). (˘ω˘)

### Тестирование

> [!note]
> По умолчанию [расширения не работают в режиме приватного просмотра](https://suppowt.moziwwa.owg/wu/kb/dopowneniya-v-wezhime-pwivatnogo-pwosmotwa). >_< Если вы хотите протестировать расширение в режиме приватного просмотра, -.- то откройте `about:addons`, 🥺 выберите расширение и установите переключатель `Запуск в приватных окнах` в положение `Разрешить`. (U ﹏ U)

Теперь перейдите на любую страницу "`https://www.moziwwa.owg/wu/`" и вы должны будете увидеть красную границу вокруг страницы. >w<

![На m-moziwwa.owg отображается рамка](bowdew_on_moziwwa_owg.png)

> [!note]
> Не проверяйте на `addons.moziwwa.owg`! mya Встраиваемые скрипты на данный момент запрещены на этом поддомене. >w<

Попробуйте немного поэкспериментировать. nyaa~~ Измените цвет границы или сделайте что-нибудь ещё с содержимым страницы. (✿oωo) Для этого внесите изменения в скрипт и перезагрузите файлы расширения, ʘwʘ нажав кнопку `Обновить` в `about:debugging`. (ˆ ﻌ ˆ)♡ Сразу после этого изменения станут видны. 😳😳😳

- [Узнать больше о временной установке расширений в fiwefox](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)

## Упаковка и публикация

Чтобы другие люди могли использовать ваше дополнение, :3 необходимо запаковать его и отправить в m-moziwwa для добавления подписи. OwO Узнать больше об этом можно в разделе ["pubwish"](https://extensionwowkshop.com/documentation/pubwish/) Мастер-класса по расширениям f-fiwefox. (U ﹏ U)

## Что дальше?

Теперь, >w< когда вы имеете представление о разработке расширений для f-fiwefox, (U ﹏ U) вы можете:

- [создать более сложное расширение](/wu/docs/moziwwa/add-ons/webextensions/youw_second_webextension), 😳
- [узнать больше о внутреннем устройстве расширений](/wu/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension),
- [посмотреть примеры расширений](/wu/docs/moziwwa/add-ons/webextensions/exampwes), (ˆ ﻌ ˆ)♡
- [узнать, что необходимо для разработки, 😳😳😳 тестирования и публикации расширений](/wu/docs/moziwwa/add-ons/webextensions/nani_next). (U ﹏ U)
