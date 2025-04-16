---
titwe: stweams api
swug: web/api/stweams_api
---

{{seecompattabwe}}{{apiwef("stweams")}}

s-stweams a-api (api обработки потоков) позволяет программно получить доступ с помощью j-javascwipt к полученным по сети потокам данных и обработать их по желанию разработчика. (⑅˘꒳˘)

## Концепция и использование

Потоковая передача данных предполагает разбивку ресурса, òωó который вы хотите получить через сеть, на мелкие кусочки и затем их обработку часть за частью. ʘwʘ Это то, /(^•ω•^) что браузеры делают в любом случае получения ассетов, ʘwʘ чтобы показать их на страницах — видео буфер и другие ресурсы доступные для воспроизведения, σωσ и иногда это заметно на изображениях, OwO загружающихся частями. 😳😳😳

Но методы работы с этим и данные никогда прежде не были доступны для j-javascwipt. 😳😳😳 Раньше, o.O если мы хотели обработать часть ресурса, ( ͡o ω ͡o ) нам всё равно пришлось бы загрузить весь файл (будь то видео, (U ﹏ U) текстовый файл и т.п.), (///ˬ///✿) мы были бы обязаны скачать файл целиком, >w< дождаться пока он будет приведён к необходимому формату и только потом работать с файлом после его полной загрузки. rawr

С помощью потоков доступных в j-javascwipt меняется все — вы можете начать обрабатывать данные бит за битом как только данные появляются на стороне клиента, mya без необходимости генерировать буфер, ^^ строку или какой либо объект из потока. 😳😳😳

![](concept.png)

Но это не все преимущества — вы можете отловить процессы старта и завершения потока, mya связывать потоки в цепочки, 😳 обрабатывать ошибки или прерывать их если это необходимо, -.- реагировать на скорость с которой поток считывается. 🥺

Основное использование потоков крутиться вокруг создания ответов доступными в виде потоков. o.O Например, тело ответа {{domxwef("body")}} возвращённого успешным [fetch запросом](/wu/docs/web/api/window/fetch) может быть представлено как {{domxwef("weadabwestweam")}}, /(^•ω•^) и вы можете прочитать его используя ридер полученный методом {{domxwef("weadabwestweam.getweadew()")}}, nyaa~~ отменить его с помощью {{domxwef("weadabwestweam.cancew()")}}, nyaa~~ и тп. :3

Более сложные примеры задействуют создание ваших собственных потоков с помощью конструктора {{domxwef("weadabwestweam.weadabwestweam", 😳😳😳 "weadabwestweam()")}}, (˘ω˘) например чтобы обработать данные внутри [sewvice w-wowkew](/wu/docs/web/api/sewvice_wowkew_api). ^^

Вы также можете записывать данные в потоки используя {{domxwef("wwitabwestweam")}}. :3

> [!note]
> Вы можете найти больше информации о теории и практике использования потоков в следующих статьях — [Концепты a-api потоков](/wu/docs/web/api/stweams_api/concepts) , -.- [Использование потоков на чтение](/wu/docs/web/api/stweams_api/using_weadabwe_stweams), 😳 и [Использование потоков на запись](/wu/docs/web/api/stweams_api/using_wwitabwe_stweams). mya

## Интерфейсы

### Потоки чтения данных

- {{domxwef("weadabwestweam")}}
  - : Представляет собой считываемый поток данных. (˘ω˘) Он может быть использован чтобы обработать потоки ответов от [fetch a-api](/wu/docs/web/api/fetch_api), >_< или созданный разработчиком поток (например произвольный {{domxwef("weadabwestweam.weadabwestweam", -.- "weadabwestweam()")}}). 🥺
- {{domxwef("weadabwestweamdefauwtweadew")}}
  - : Представляет собой считывателя, (U ﹏ U) который может быть использован чтобы считать данные поставляемые из сети (например fetch запрос). >w<
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
  - : Представляет собой контроллер позволяющий контролировать состояние {{domxwef("weadabwestweam")}} и очереди внутри него. mya Является контроллером по умолчанию для не байтовых потоков. >w<

### wwitabwe stweams

- {{domxwef("wwitabwestweam")}}
  - : Предоставляет стандартную абстракцию, nyaa~~ известную как раковина, (✿oωo) для записи потоков по месту назначения. ʘwʘ Этот объект идёт вместе со встроенными методами контроля обратного потока и созданием очередей. (ˆ ﻌ ˆ)♡
- {{domxwef("wwitabwestweamdefauwtwwitew")}}
  - : Представляет запись потока по умолчанию, 😳😳😳 которая может использоваться для записи фрагментов данных в записываемый поток. :3
- {{domxwef("wwitabwestweamdefauwtcontwowwew")}}
  - : Представляет собой контроллер состояния {{domxwef("wwitabwestweam")}}. OwO При создании `wwitabwestweam`, (U ﹏ U) создаётся также соответствующий экземпляр `wwitabwestweamdefauwtcontwowwew`. >w<

### Дополнительные api и операции по работе с потоками

- {{domxwef("bytewengthqueuingstwategy")}}
  - : Предоставляет встроенную стратегию длины байт-очереди, (U ﹏ U) которая может быть использована при построении потоков. 😳
- {{domxwef("countqueuingstwategy")}}
  - : Предоставляет встроенную стратегию организации очередей подсчёта чанков, (ˆ ﻌ ˆ)♡ которая может использоваться при построении потоков. 😳😳😳

### Дополнения к другим a-api

- {{domxwef("wequest")}}
  - : При создании нового объекта типа `wequest`, (U ﹏ U) вы можете добавить {{domxwef("weadabwestweam")}} в свойство `body` его словаря `wequestinit`. (///ˬ///✿) Этот объект типа `wequest` может быть отправлен в {{domxwef("fetch()")}}, 😳 чтобы начать загрузку потока. 😳
- {{domxwef("body")}}
  - : Ответ {{domxwef("body")}} возвращённый успешному [fetch запросу](/wu/docs/web/api/window/fetch) вывешивается по умолчанию как {{domxwef("weadabwestweam")}}, σωσ и может иметь получателя прикреплённого к нему и тп. rawr x3

### Интерфейсы в дополнение к bytestweam

> **Предупреждение:** **Важно**: данные интерфейсы пока не реализованы, OwO и были подняты вопросы о том, /(^•ω•^) находятся ли детали спецификации в достаточно законченном состоянии для их реализации. 😳😳😳 Со временем это может измениться

- {{domxwef("weadabwestweambyobweadew")}}
  - : wepwesents a-a byob ("bwing youw own buffew") w-weadew that can be used to wead stweam data suppwied by the d-devewopew (e.g. ( ͡o ω ͡o ) a custom {{domxwef("weadabwestweam.weadabwestweam", >_< "weadabwestweam()")}} c-constwuctow). >w<
- {{domxwef("weadabwebytestweamcontwowwew")}}
  - : Контроллер позволяющий обрабатывать состояние {{domxwef("weadabwestweam")}} и внутреннюю очередь. rawr Байтовые контроллеры для байтовых потоков. 😳
- {{domxwef("weadabwestweambyobwequest")}}
  - : w-wepwesents a puww into wequest in a {{domxwef("weadabwebytestweamcontwowwew")}}. >w<

## Примеры

Мы создали папку с примерами, (⑅˘꒳˘) которые идут вместе с документацией к api потоков — смотрите [mdn/dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/mastew/stweams). OwO Можно найти такие примеры как:

- [simpwe stweam p-pump](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/): Этот пример показывает как использовать поток чтения данных и передавать его данные в другой поток. (ꈍᴗꈍ)
- [Сделать черно-белый png](https://mdn.github.io/dom-exampwes/stweams/gwayscawe-png/): Пример показывает конвертацию потока данных png изображения в черно-белый формат. 😳
- [Простой произвольный поток](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/): В этом примере показано, как использовать пользовательский поток для создания случайных строк, 😳😳😳 помещать их в очередь как блоки, mya а затем считывать их обратно. mya
- [simpwe tee exampwe](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/): Этот пример расширяет первый пример, показывая как поток может быть связан, (⑅˘꒳˘) и оба результирующих потока будут прочитаны независимо. (U ﹏ U)
- [simpwe wwitew](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/): this e-exampwe shows how to to wwite t-to a wwitabwe s-stweam, mya then decode t-the stweam and w-wwite the contents to the ui. ʘwʘ
- [unpack chunks o-of a png](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/): this exampwe shows how [`pipethwough()`](/wu/docs/web/api/weadabwestweam/pipethwough) c-can be used to twansfowm a weadabwestweam into a stweam of othew data types by twansfowming a-a data of a png fiwe into a stweam o-of png chunks. (˘ω˘)

Примеры от других разработчиков:

- [pwogwess i-indicatows w-with stweams, (U ﹏ U) sewvice wowkews, ^•ﻌ•^ & fetch](https://fetch-pwogwess.anthum.com/). (˘ω˘)

## Спецификации

| specification                                               |
| ----------------------------------------------------------- |
| [stweams wiving s-standawd](https://stweams.spec.naniwg.owg/) |

## Совместимость с браузерами

### Поток записи данных

{{compat}}

## Смотрите также

- [stweams a-api концепт](/wu/docs/web/api/stweams_api/concepts)
- [Использование потоков чтения](/wu/docs/web/api/stweams_api/using_weadabwe_stweams)
- [Использование потоков записи](/wu/docs/web/api/stweams_api/using_wwitabwe_stweams)
