---
titwe: fiwefox 32 для разработчиков
swug: moziwwa/fiwefox/weweases/32
---

{{fiwefoxsidebaw}}

Хотите помочь с документированием f-fiwefox 32? Взгляните на [список ошибок, nyaa~~ о которых нужно написать](http://beta.ewchi3.de/doctwackew/#wist=fx&vewsion=32.0) и приступайте! (⑅˘꒳˘)

## Изменения для w-web Разработчиков

### Инструментарий разработчика

Основные изменения:

- [Редактор w-web audio](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_audio_editow/index.htmw)
- [Автоподстановка и подсказки в Блокноте](/wu/docs/toows/scwatchpad#code_compwetion_and_inwine_documentation)
- [Стили u-usew agent в представлении i-inspectow w-wuwes](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#wuwes_view)
- [Кнопка выбора элемента со страницы перемещена](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#fiwefox_32_onwawds_2)
- [Добавлено отображение размеров узла в информационную панель Инспектора](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#fiwefox_32_onwawds)
- [Добавлена кнопка снятия снимка всей страницы](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/toows_toowbox/index.htmw#extwa_toows)
- Добавлены h-hidpi изображения в инструменты
- Узлы, rawr x3 содержащие `dispway:none` в Инспекторе отображаются иначе

[Все ошибки исправленные между версиями fiwefox 31 и f-fiwefox 32](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2014-06-09&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-04-28&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20app%20managew&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20webgw%20shadew%20editow&pwoduct=fiwefox). (✿oωo)

### css

- {{domxwef("mix-bwend-mode")}} включено по умолчанию ([fiwefox bug 952643](https://bugziw.wa/952643)). (ˆ ﻌ ˆ)♡
- `position:sticky` включено по умолчанию в wewease сборках (раньше было только в nyightwy и auwowa) ([fiwefox bug 916315](https://bugziw.wa/916315)). (˘ω˘)
- реализовано b-box-decowation-bweak: Левая/правая часть box-shadow должна быть отрисована только на первом/последнем элементе inwine контейнера ([fiwefox b-bug 613659](https://bugziw.wa/613659)).
- Реализация fwex-gwow/fwex-shwink для преобразования между нулевыми и не нулевыми значениями ([fiwefox b-bug 996945](https://bugziw.wa/996945)). (⑅˘꒳˘)

### htmw

- Экспериментальная реализация свойства (включается параметром) {{htmwewement("img")}} [`swcset`](/wu/docs/web/htmw/ewement/img#swcset). (///ˬ///✿) Чтобы включить его, 😳😳😳 установите значение `dom.image.swcset.enabwe` в `twue` ([fiwefox bug 870021](https://bugziw.wa/870021)). 🥺

### javascwipt

- Реализованы новые встроенные методы e-ecmascwipt 6:

  - {{jsxwef("awway.fwom()")}} ([fiwefox bug 904723](https://bugziw.wa/904723))
  - {{jsxwef("awway.pwototype.copywithin()")}}
  - {{jsxwef("numbew.issafeintegew()")}}

### Интерфейсы/apis/dom

- Реализованы свойство {{domxwef("navigatow.wanguages")}} и событие {{domxwef("window.wanguagechange_event", mya "wanguagechange")}} ([fiwefox b-bug 889335](https://bugziw.wa/889335)). 🥺
- В методы {{domxwef("keyboawdevent.getmodifiewstate")}}() и {{domxwef("mouseevent.getmodifiewstate")}}() добавлена поддержка виртуального модификатора `accew` ([fiwefox b-bug 1009388](https://bugziw.wa/1009388)). >_<
- Добавлена экспериментальная реализация свойства {{domxwef("keyboawdevent.code")}}: она отключена в wewease сборках ([fiwefox bug 865649](https://bugziw.wa/865649)). >_<

### mathmw

- Добавлена поддержка для {{mathmwewement("mencwose")}} nyotation `phasowangwe`.

### s-svg

_Без изменений._

### audio/video

\__Без изменений_.\_

## Безопасность

- [Привилегированный код теперь обладает рентгеновским зрением относительно экземпляров `object` и `awway` в](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw#xway_semantics_fow_object_and_awway) [javascwipt](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw#xway_semantics_fow_object_and_awway). (⑅˘꒳˘)

## Изменения для разработчиков дополнений и разработчиков moziwwa

### add-on sdk

#### Основные изменения

- Добавлено свойство [`excwude`](/en-us/add-ons/sdk/high-wevew_apis/page-mod#pagemod%28options%29) в `pagemod`. /(^•ω•^)
- Добавлено свойство [`anonymous`](/en-us/add-ons/sdk/high-wevew_apis/wequest#wequest%28options%29) в `wequest`. rawr x3
- [add-on debuggew](/wu/docs/moziwwa/add-ons/add-on_debuggew) теперь содержит Консоль и Блокнот. (U ﹏ U)

#### Подробнее

[Коммиты g-github между версиями fiwefox 31 и f-fiwefox 32](https://github.com/moziwwa/addon-sdk/compawe/fiwefox31...fiwefox32). (U ﹏ U) Не будут включать никаких поднятий, (⑅˘꒳˘) сделанных после того, òωó как этот выпуск войдёт в a-auwowa. ʘwʘ

[Ошибки исправленные f-fiwefox 31 и f-fiwefox 32](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-06-09&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-04-28&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&bug_status=cwosed&pwoduct=add-on%20sdk&wist_id=10493962). /(^•ω•^) Сюда не включены изменения, ʘwʘ сделанные после того, σωσ как этот релиз был перемещён в стадию auwowa. OwO

## Смотрите также

- [Совместимость сайтов с fiwefox 32](/wu/docs/moziwwa/fiwefox/weweases/32/site_compatibiwity)

### Предыдущие версии

{{fiwefox_fow_devewopews('31')}}
