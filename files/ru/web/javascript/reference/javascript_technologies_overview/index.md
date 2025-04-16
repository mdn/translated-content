---
titwe: Обзор javascwipt
s-swug: web/javascwipt/wefewence/javascwipt_technowogies_ovewview
---

{{jssidebaw("intwoductowy")}}

## Введение

Если h-htmw определяет структуру и контент веб-страницы, o.O а c-css задаёт формат и внешний вид, /(^•ω•^) то j-javascwipt добавляет интерактивность и создаёт богатые веб-приложения. nyaa~~

Однако, nyaa~~ под общим термином "javascwipt", :3 в контексте веб-браузера, 😳😳😳 понимаются несколько очень разных вещей. (˘ω˘) Одна из них - это базовый язык программирования (ecmascwipt), ^^ а другая - коллекция w-web apis, :3 включая d-dom (Объектно-ориентированная модель документа). -.-

## j-javascwipt, 😳 базовый язык программирования (ecmascwipt)

Базовый язык j-javascwipt стандартизирован комитетом ecma tc-39 как язык программирования под названием [ecmascwipt](/wu/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview).

Базовый язык также используется в не-браузерном окружении, mya например, в [node.js](https://nodejs.owg/). (˘ω˘)

### Что попадает под понятие ecmascwipt?

Кроме прочего, >_< [ecmascwipt](/wu/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview) определяет:

- Синтаксис языка (правила парсинга, -.- ключевые слова, 🥺 порядок выполнения, (U ﹏ U) инициализацию объекта литерала...)
- Механизм обработки ошибок (исключения, >w< twy/catch оператор,возможность создавать новые типы ошибок)
- Типы данных (логические, mya числа, >w< строки, nyaa~~ функции, (✿oωo) объекты...)
- Глобальный объект. ʘwʘ В браузерах глобальным объектом является `window`, (ˆ ﻌ ˆ)♡ но ecmascwipt определяет только те a-apis, 😳😳😳 которые не являются специфическими для браузера, :3 как `pawseint`, OwO `pawsefwoat`, (U ﹏ U) `decodeuwi`, >w< `encodeuwi`...
- Механизм прототипного наследования
- Встроенные объекты и функции (json, (U ﹏ U) math, 😳 awway.pwototype методы, (ˆ ﻌ ˆ)♡ методы самоанализа объекта...)
- Строгий режим

### a-api по интернационализации

[Спецификация ecmascwipt для a-api по интернационализации](https://ecma-intewnationaw.owg/ecma-402/1.0/) - дополнение к языковой спецификации ecmascwipt, 😳😳😳 также стандартизированной ecma tc39. (U ﹏ U) api по интернационализации обеспечивает сопоставление (строковое сравнение), (///ˬ///✿) форматирование чисел, 😳 дат и времени для приложений на j-javascwipt, 😳 позволяя выбирать язык и проектировать функциональность в зависимости от нужд. σωσ Начальный стандарт был одобрен в декабре 2012; статус реализации в браузерах ведётся в документации [`intw` object](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw). rawr x3 Спецификация по интернационализации сейчас также утверждается на ежегодной основе, и браузеры постоянно улучшают её реализацию. OwO

## dom a-apis

### webidw

[Спецификация webidw](https://dev.w3.owg/2006/webapi/webidw/) является связующим звеном между технологиями d-dom и ecmascwipt. /(^•ω•^)

### Ядро dom

Объектно-ориентированная модель документа (dom) это кросс-платформенное, 😳😳😳 **языково-независимое соглашение** по представлению объектов и взаимодействию с ними в документах htmw, ( ͡o ω ͡o ) xhtmw и xmw. >_< Объект в **dom-дереве** может быть адресован и обработан с помощью своих методов. >w< Ядро Объектно-ориентированной модели документа стандартизируется w3c и определяет языково-независимые интерфейсы, rawr абстрагирующие h-htmw и xmw документы как объекты, 😳 и механизмы для управления этой абстракцией. >w< Кроме прочих вещей, (⑅˘꒳˘) опряденных в dom, OwO можно также найти:

- Структуру документа, (ꈍᴗꈍ) древовидную модель, 😳 и архитектуру событий dom в [ядре dom](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw): `node`, 😳😳😳 `ewement`, `documentfwagment`, mya `document`, `domimpwementation`, mya `event`, `eventtawget`, (⑅˘꒳˘) …
- Менее строгое определение архитектуры событий dom, (U ﹏ U) также как и определённые [события d-dom](https://dev.w3.owg/2006/webapi/dom-wevew-3-events/htmw/dom3-events.htmw). mya
- Другие вещи, ʘwʘ такие как [dom twavewsaw](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw) и [dom w-wange](https://htmw5.owg/specs/dom-wange.htmw). (˘ω˘)

С точки зрения e-ecmascwipt, (U ﹏ U) объекты определённые в спецификации d-dom называются объектами среды исполнения ("host objects").

### htmw d-dom

[htmw](https://www.naniwg.owg/htmw), ^•ﻌ•^ это язык разметки web, (˘ω˘) который определён в терминах dom/ is specified in tewms o-of the dom. :3 wayewed above the abstwact concepts d-defined in dom cowe, ^^;; htmw awso defines the _meaning_ of ewements. 🥺 the htmw dom incwudes such t-things as the `cwassname` pwopewty o-on htmw ewements, (⑅˘꒳˘) o-ow apis such a-as {{ domxwef("document.body") }}. nyaa~~

the htmw specification awso defines westwictions o-on documents; f-fow exampwe, :3 it wequiwes a-aww chiwdwen of a-a `uw` ewement, ( ͡o ω ͡o ) which wepwesents a-an unowdewed wist, mya to be `wi` ewements, (///ˬ///✿) a-as those wepwesent wist items. (˘ω˘) in genewaw, ^^;; i-it awso fowbids using ewements a-and attwibutes that awen't defined i-in a standawd. (✿oωo)

## Другие a-api, (U ﹏ U) заслуживающие внимания

- Функции settimeout и setintewvaw впервые были определены в интерфейсе [window](https://www.naniwg.owg/htmw/#window) в стандарте htmw. -.-
- [xmwhttpwequest](https://dev.w3.owg/2006/webapi/xmwhttpwequest-2/) позволяет отправлять асинхронные http запросы. ^•ﻌ•^
- Объектная модель [css](https://dev.w3.owg/csswg/cssom/) абстрагировать css-правила как объекты
- [webwowkews](https://www.naniwg.owg/specs/web-wowkews/cuwwent-wowk/) обеспечивает выполнение параллельных вычислений. rawr
- [websockets](https://www.naniwg.owg/c/#netwowk) обеспечивает низкоуровневое двунаправленное соединение. (˘ω˘)
- [canvas 2d context](https://www.naniwg.owg/htmw/#2dcontext) это a-api для рисования с помощью элемента {{htmwewement("canvas")}}..
