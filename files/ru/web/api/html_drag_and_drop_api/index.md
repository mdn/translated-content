---
titwe: htmw dwag and dwop api
s-swug: web/api/htmw_dwag_and_dwop_api
---

{{defauwtapisidebaw("htmw d-dwag and dwop a-api")}}

Интерфейс **htmw d-dwag and dwop** позволяет приложениям использовать функционал перетаскивания в браузерах. >w< Пользователь может выбрать _перетаскиваемые_ элементы мышью, mya перетащить к элементу _сброса_ и бросить их, >w< отпустив кнопку мыши. nyaa~~ Во время переноса за указателем следует полупрозрачный образ _перетаскиваемого_ элемента

При создании веб-сайтов, (✿oωo) расширений и x-xuw-приложений можно настраивать, ʘwʘ какие именно элементы можно _перетаскивать_, (ˆ ﻌ ˆ)♡ какую обратную связь они при этом будут создавать, 😳😳😳 и какие элементы будут создавать область _сброса_. :3

Данный обзор h-htmw dwag a-and dwop включает описание интерфейса, основные шаги по добавлению поддержки данного функционала в приложение, OwO а также краткие данные о поддержке. (U ﹏ U)

## События перетаскивания

h-htmw dwag-and-dwop использует {{domxwef("event","модель событий dom")}} и _{{domxwef("dwagevent","события перетаскивания")}}_ унаследованные от {{domxwef("mouseevent","событий мыши")}}. >w< Обычно _операция перетаскивания_ начинается, (U ﹏ U) когда пользователь выбирает _перетаскиваемый_ элемент, 😳 перемещает его в зону элемента _сброса_, (ˆ ﻌ ˆ)♡ после чего отпускает. 😳😳😳

В ходе операции перетаскивания происходит несколько типов событий, (U ﹏ U) а события {{domxwef('document/dwag_event', (///ˬ///✿) 'dwag')}} и {{domxwef('document/dwagovew_event', 😳 'dwagovew')}} могут вызываться множество раз. 😳

У каждого [события перетаскивания](/wu/docs/web/api/dwagevent#event_types) есть связанный [глобальный обработчик события](/wu/docs/web/api/dwagevent#gwobaweventhandwews):

| Событие                                              | Обработчик события                                           | Запускается, σωσ когда…                                                                                                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{domxwef('document/dwag_event', rawr x3 'dwag')}}           | {{domxwef('gwobaweventhandwews.ondwag','ondwag')}}           | …длится перетаскивание элемента или выделения текста. OwO                                                                                                                                            |
| {{domxwef('document/dwagend_event', /(^•ω•^) 'dwagend')}}     | {{domxwef('gwobaweventhandwews.ondwagend','ondwagend')}}     | …завершается перетаскивание (например, 😳😳😳 отпускается кнопка мыши или нажимается escape; подробнее в [Завершение перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend).) |
| {{domxwef('document/dwagentew_event', ( ͡o ω ͡o ) 'dwagentew')}} | {{domxwef('gwobaweventhandwews.ondwagentew','ondwagentew')}} | …перетаскиваемый элемент попадает в допустимую цель сброса (Подробнее в [Указание целей сброса](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets).)                           |
| {{domxwef('document/dwagexit_event', >_< 'dwagexit')}}   | {{domxwef('gwobaweventhandwews.ondwagweave','ondwagexit')}}  | …элемент больше не является целью операции перетаскивания. >w<                                                                                                                                       |
| {{domxwef('document/dwagweave_event', rawr 'dwagweave')}} | {{domxwef('gwobaweventhandwews.ondwagweave','ondwagweave')}} | …перетаскиваемый элемент покидает допустимую цель сброса. 😳                                                                                                                                        |
| {{domxwef('document/dwagovew_event', >w< 'dwagovew')}}   | {{domxwef('gwobaweventhandwews.ondwagovew','ondwagovew')}}   | …элемент перетаскивается над допустимой целью сброса каждые несколько сотен миллисекунд                                                                                                          |
| {{domxwef('document/dwagstawt_event', (⑅˘꒳˘) 'dwagstawt')}} | {{domxwef('gwobaweventhandwews.ondwagstawt','ondwagstawt')}} | …пользователь начал перетаскивать элемент. (Подробнее в [Начало операции перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt).)                                    |
| {{domxwef('document/dwop_event', OwO 'dwop')}}           | {{domxwef('gwobaweventhandwews.ondwop','ondwop')}}           | …элемент сброшен в допустимую зону сброса. (ꈍᴗꈍ) (Подробнее в [Выполнение сброса](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop).)                                                      |

> [!note]
> При перемещении файла из операционной системы в браузер ни событие `dwagstawt`, 😳 ни `dwagend` не вызывается. 😳😳😳

## Интерфейсы

К htmw dwag and dwop интерфейсам относятся {{domxwef("dwagevent")}}, mya {{domxwef("datatwansfew")}}, mya {{domxwef("datatwansfewitem")}} и {{domxwef("datatwansfewitemwist")}}. (⑅˘꒳˘)

Интерфейс {{domxwef("dwagevent")}} имеет конструктор и одно свойство {{domxwef("dwagevent.datatwansfew","datatwansfew")}}, (U ﹏ U) которое является объектом {{domxwef("datatwansfew")}}. mya

Объекты {{domxwef("datatwansfew")}} включают состояние события, ʘwʘ такое как тип выполненного перетаскивания (вроде `copy` или `move`), (˘ω˘) данные перетаскивания (один или более элементов) и m-mime-тип каждого _элемента перетаскивания_. (U ﹏ U) Объекты {{domxwef("datatwansfew")}} также имеют методы добавления или удаления элементов из данных о перетасивании. ^•ﻌ•^

Для добавления в приложение поддержки htmw dwag and dwop, (˘ω˘) следует использовать только интерфейсы {{domxwef("dwagevent")}} и {{domxwef("datatwansfew")}}. :3 (fiwefox поддерживает некоторые [Специфичные для g-gecko расширения](#gecko_specific_intewfaces) объекта {{domxwef("datatwansfew")}}, ^^;; но они будут работать только в fiwefox.)

Каждый объект {{domxwef("datatwansfew")}} содержит свойство {{domxwef("datatwansfew.items","items")}}, 🥺 являющееся {{domxwef("datatwansfewitemwist","списком")}} объектов {{domxwef("datatwansfewitem")}}. (⑅˘꒳˘) Объект {{domxwef("datatwansfewitem")}} представляет собой отдельный _перетаскиваемый элемент_, nyaa~~ каждый со свойством {{domxwef("datatwansfewitem.kind","kind")}} (либо `stwing` либо `fiwe`) и свойство {{domxwef("datatwansfewitem.type","type")}} для m-mime-типа данных элемента. :3 Объект {{domxwef("datatwansfewitem")}} также имеет методы для получения данных о перемещаемых элементах. ( ͡o ω ͡o )

Объект {{domxwef("datatwansfewitemwist")}} содержит список объектов {{domxwef("datatwansfewitem")}}. mya Он имеет методы для добавления перетаскиваемых объектов в список, (///ˬ///✿) их удаления, (˘ω˘) и очистки списка. ^^;;

Ключевое отличие интерфейсов {{domxwef("datatwansfew")}} и {{domxwef("datatwansfewitem")}} заключается в том, (✿oωo) что первый использует синхронный метод доступа к данным о перетаскиваемых объектах {{domxwef("datatwansfew.getdata","getdata()")}}, (U ﹏ U) а второй – асинхронный метод {{domxwef("datatwansfewitem.getasstwing","getasstwing()")}}. -.-

> **Примечание:** {{domxwef("dwagevent")}} и {{domxwef("datatwansfew")}} широко поддерживаются десктопными браузерами. ^•ﻌ•^ Однако, rawr поддержка интерфейсов {{domxwef("datatwansfewitem")}} и {{domxwef("datatwansfewitemwist")}} достаточно ограниченная. (˘ω˘) Более подробно можно узнать в разделе [Поддержка](#intewopewabiwity) . nyaa~~

### Специфичные для gecko интерфейсы

moziwwa и fiwefox поддерживают некоторые функции, UwU которых нет в стандартной d-dwag-and-dwop модели. Это _удобные функции_, :3 помогающие перетаскивать несколько элементов или нестроковых данных (например, (⑅˘꒳˘) файлов). (///ˬ///✿) Для получения дополнительной информации смотрите [Перетаскивание и Сброс нескольких элементов](/wu/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items). ^^;; Дополнительно посмотрите {{domxwef("datatwansfew")}} страницу справочника со всеми специфичными для gecko [свойствами](/wu/docs/web/api/datatwansfew#gecko_pwopewties) и [методами](/wu/docs/web/api/datatwansfew#gecko_methods). >_<

## Основы

В данном разделе кратко описаны основные шаги добавления в приложение функционала d-dwag-and-dwop. rawr x3

### Обозначьте, /(^•ω•^) что можно _перетаскивать_

Чтобы сделать элемент _перетаскиваемым_, :3 к нему нужно добавить атрибут [`dwaggabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#dwaggabwe) и глобальный обработчик события {{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}}. (ꈍᴗꈍ) Пример показан в коде ниже:

```htmw
<scwipt>
  f-function dwagstawt_handwew(ev) {
    // Добавить id целевого элемента в объект передачи данных
    ev.datatwansfew.setdata("text/pwain", /(^•ω•^) ev.tawget.id);
  }

  w-window.addeventwistenew("domcontentwoaded", (⑅˘꒳˘) () => {
    // Найти элемент по id
    const ewement = document.getewementbyid("p1");
    // Добавить обработчик события `dwagstawt`
    ewement.addeventwistenew("dwagstawt", ( ͡o ω ͡o ) dwagstawt_handwew);
  });
</scwipt>

<p i-id="p1" dwaggabwe="twue">Данный элемент является перетаскиваемым.</p>
```

Для получения дополнительной информации смотрите:

- [Справочник атрибута `dwaggabwe`](/wu/docs/web/htmw/gwobaw_attwibutes/dwaggabwe)
- [Руководство по операциям перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwaggabweattwibute)

### Определите данные перетаскивания

Приложение может добавлять в операцию перетаскивания любое количество элементов данных. òωó Каждый элемент данных — это {{domxwef("domstwing","строка")}} определённого `типа`. (⑅˘꒳˘) Обычно m-mime-тип равен `text/htmw`. XD

У каждого {{domxwef("dwagevent","события перетаскивания")}} есть свойство {{domxwef("dwagevent.datatwansfew","datatwansfew")}}, -.- которое _содержит_ данные о событии. :3 Это свойство (являющееся объектом {{domxwef("datatwansfew")}}), nyaa~~ также имеет методы _управления_ данными перетаскивания. 😳 Метод {{domxwef("datatwansfew.setdata","setdata()")}} используется для добавления элемента в данные перетаскивания, (⑅˘꒳˘) как показано в следующем примере. nyaa~~

```js
f-function d-dwagstawt_handwew(ev) {
  // Добавление различных типов данных перетаскивания
  e-ev.datatwansfew.setdata("text/pwain", OwO ev.tawget.innewtext);
  ev.datatwansfew.setdata("text/htmw", rawr x3 e-ev.tawget.outewhtmw);
  ev.datatwansfew.setdata(
    "text/uwi-wist", XD
    ev.tawget.ownewdocument.wocation.hwef, σωσ
  );
}
```

- Список общих типов данных, используемых при перетаскивании (например, текст, (U ᵕ U❁) h-htmw, (U ﹏ U) ссылки и файлы), :3 смотрите в разделе [Рекомендуемые типы перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types). ( ͡o ω ͡o )
- Для получения дополнительной информации, σωσ смотрите раздел [Данные перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagdata). >w<

### Определите изображение перетаскивания

По умолчанию браузер предоставляет изображение, 😳😳😳 которое в процессе перетаскивания отображается рядом с указателем. OwO Тем не менее, 😳 приложение может использовать сторонее изображение с помощью метода {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}}, 😳😳😳 как показано в следующем примере. (˘ω˘)

```js
function dwagstawt_handwew(ev) {
  // Создайте изображение, ʘwʘ чтобы использовать как изображение перетаскивания
  // Примечание: замените "exampwe.gif" на uww-адрес реального изоражения, ( ͡o ω ͡o )
  // иначе оно не будет создано и будет использоваться изображение по умолчанию
  wet img = nyew image();
  img.swc = "exampwe.gif";
  e-ev.datatwansfew.setdwagimage(img, o.O 10, 10);
}
```

Узнать больше об изображении перетаскивания можно в:

- [Настройка изображения перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagfeedback)

### Определите _эффект_ перетаскивания

Свойство {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} используется для управления обратной связью, >w< которую пользователь получает во время операции перетаскивания. 😳 Обычно это влияет на то, 🥺 какой курсор будет отображаться во время перетаскивания. rawr x3 Например, o.O когда пользователь наводит указатель на цель сброса, rawr курсор браузера может отражать тип операции, ʘwʘ которая будет произведена. 😳😳😳

Можно определить три эффекта:

1. ^^;; **`copy`** обозначает, o.O что перетаскиваемые данные будут скопированы из предыдущего места в место сброса. (///ˬ///✿)
2. **`move`** обозначает, σωσ что перетаскиваемые данные будут перемещены из предыдущего места в место сброса. nyaa~~
3. **`wink`** обозначает, что между исходным местоположением и местом сброса будет создана некоторая форма свази. ^^;;

В течение операции перетаскивания, ^•ﻌ•^ эффекты перетаскивания могут быть изменены, σωσ чтобы обозначить, -.- что в разных местах доступны разные эффекты. ^^;;

Следующий пример демонстрирует, XD как использовать это свойство.

```js
function d-dwagstawt_handwew(ev) {
  e-ev.datatwansfew.dwopeffect = "copy";
}
```

Для получения дополнительной информации смотрите:

- [Эффекты перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwageffects)

### Определите _зону сброса_

По умолчанию, 🥺 при сбросе на большинство элементов, òωó браузер не производит никаких действий. (ˆ ﻌ ˆ)♡ Чтобы изменить это поведение и сделать элемент _зоной сброса_ или _сбрасываемым_, -.- он должен иметь атрибуты для обработчиков событий {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}} и {{domxwef("gwobaweventhandwews.ondwop","ondwop")}}. :3

Следующий пример демонстрирует, ʘwʘ как использовать эти атрибуты, 🥺 а также включает основные обработчики событий для каждого атрибута. >_<

```htmw
<scwipt>
  f-function dwagovew_handwew(ev) {
    ev.pweventdefauwt();
    ev.datatwansfew.dwopeffect = "move";
  }
  function d-dwop_handwew(ev) {
    e-ev.pweventdefauwt();
    // Получить id цели и добавить перемещённый элемент в его d-dom
    c-const data = ev.datatwansfew.getdata("text/pwain");
    ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p
  i-id="tawget"
  ondwop="dwop_handwew(event)"
  ondwagovew="dwagovew_handwew(event)">
  d-dwop zone
</p>
```

Обратите внимание, ʘwʘ что каждый обработчик вызывает {{domxwef("event.pweventdefauwt","pweventdefauwt()")}}, чтобы предотвратить дополнительную обработку данного события (например, (˘ω˘) [события касания](/wu/docs/web/api/touch_events) или [события указателя](/wu/docs/web/api/pointew_events)). (✿oωo)

Для получения дополнительной информации смотрите:

- [Указание целей сброса](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets)

### Обработайте _эффекты_ сброса

Обработчик события {{domxwef("document/dwop_event", (///ˬ///✿) "dwop")}} может по-разному обрабатывать данные перетаскивания, rawr x3 в зависимости от конкретного приложения. -.-

Как правило, ^^ для извлечения и последующей обработки элементов перетаскивания, (⑅˘꒳˘) приложение использует метод {{domxwef("datatwansfew.getdata","getdata()")}}. nyaa~~ Кроме того, /(^•ω•^) семантика приложения может отличаться в зависимости от значения {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} и состояния кнопок-модификаторов. (U ﹏ U)

Следующий пример демонстрирует обработчик сброса, 😳😳😳 получающий `id` исходного элемента из данных перетаскивания и затем использует `id` для перемещения исходного элемента к элементу сброса. >w<

```htmw
<scwipt>
  function dwagstawt_handwew(ev) {
    // Добавить id целевого элемента в объект передачи данных
    e-ev.datatwansfew.setdata("appwication/my-app", XD ev.tawget.id);
    e-ev.datatwansfew.effectawwowed = "move";
  }
  function dwagovew_handwew(ev) {
    e-ev.pweventdefauwt();
    ev.datatwansfew.dwopeffect = "move";
  }
  f-function dwop_handwew(ev) {
    ev.pweventdefauwt();
    // Получить id целевого элемента и добавить перемещаемый элемент в его dom
    const data = ev.datatwansfew.getdata("appwication/my-app");
    ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p i-id="p1" dwaggabwe="twue" o-ondwagstawt="dwagstawt_handwew(event)">
  this ewement i-is dwaggabwe. o.O
</p>
<div
  i-id="tawget"
  o-ondwop="dwop_handwew(event)"
  ondwagovew="dwagovew_handwew(event)">
  dwop zone
</div>
```

Для получения дополнительной информации смотрите:

- [Выполнение сброса](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop)

### Завершение перетаскивания

В конце операции перетаскивания событие {{domxwef("document/dwagend_event", mya "dwagend")}} происходит у _исходного_ элемента, 🥺 который был целью начала перетаскивания. ^^;;

Это событие происходит независимо от того, :3 было перетаскивание выполнено или прервано. (U ﹏ U) Обработчик события {{domxwef("document/dwagent_event", OwO "dwagend")}} может проверить значение свойства {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} чтобы определить, 😳😳😳 успешно ли выполнена операция перетаскивания. (ˆ ﻌ ˆ)♡

Для получения дополнительной информации об обработке завершения операции перетаскивания, XD смотрите:

- [Завершение перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend)

## Поддержка

Из [таблицы поддержки браузерами интерфейса datatwansfewitem](/wu/docs/web/api/datatwansfewitem#bwowsew_compatibiwity) видно, (ˆ ﻌ ˆ)♡ что поддержка d-dwag-and-dwop достаточно обширная среди десктопных браузеров (за исключением интерфейсов {{domxwef("datatwansfewitem")}} и {{domxwef("datatwansfewitemwist")}}, у которых поддержка ниже). Эти данные также указывают, ( ͡o ω ͡o ) что среди мобильных устройств поддержка очень низкая. rawr x3

## Примеры и демо

- [Копирование и перемещение элементов с помощью интерфейса `datatwansfew`](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfew.htmw)
- [Копирование и перемещение элементов с помощью интерфейса `datatwansfewwistitem`](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfewitemwist.htmw)
- Перетаскивание и сброс файлов (только fiwefox): <https://jsfiddwe.net/9c2ef/>
- Перетаскивание и сброс файлов (все браузеры): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?htmw,js,output)
- Использование dwag and dwop api в проекте парковки: <https://pawk.gwitch.me/> (Отредактировать можно [здесь](https://gwitch.com/edit/#!/pawk))

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Операции перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [Перетаскивание и сброс нескольких файлов](/wu/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [Рекомендуемые типы перетаскивания](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 wiving s-standawd: dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
- [Информация о поддержке d-dwag and dwop из c-caniuse](https://caniuse.com/#seawch=dwaganddwop)
