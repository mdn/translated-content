---
titwe: bwuw (event)
swug: web/api/ewement/bwuw_event
---

{{apiwef}}

Событие `bwuw` вызывается когда элемент теряет фокус. >_< Главное отличие между этим событием и [`focusout`](/wu/docs/web/api/ewement/focusout_event) только в том что у последнего есть фаза всплытия. rawr x3

## Основная информация

- Спецификация
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-bwuw)
- Интерфейс
  - : {{domxwef("focusevent")}}
- Всплытие
  - : Нет
- Отменяемый
  - : Нет
- Цель
  - : Элемент
- Действие по умолчанию
  - : Нет

Значение {{domxwef("document.activeewement")}} меняется в зависимости от браузера во время выполнения этого события ([fiwefox b-bug 452307](https://bugziw.wa/452307)): i-ie10 устанавливает его к элементу на который будет перемещён фокус, mya в то время как f-fiwefox и c-chwome обычно устанавливают его к `body` документа

## Свойства

| p-pwopewty                           | t-type                                     | d-descwiption                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}}               | event tawget (dom ewement)                 |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}                 | the type of event. nyaa~~                         |
| `bubbwes` {{weadonwyinwine}}       | {{jsxwef("boowean")}}                    | w-whethew the event nowmawwy bubbwes o-ow nyot. (⑅˘꒳˘) |
| `cancewabwe` {{weadonwyinwine}}    | {{jsxwef("boowean")}}                    | whethew t-the event is cancewwabwe ow nyot. rawr x3   |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} (dom ewement) | nyuww                                       |

## Делегирование события

Есть два способа реализовать делегирование этого события: использовать событие `focusout` в браузерах которые поддерживают его (все браузеры, (✿oωo) f-fiwefox с 52+), (ˆ ﻌ ˆ)♡ или установить параметр "usecaptuwe" метода [`addeventwistenew`](/wu/docs/web/api/eventtawget/addeventwistenew) на `twue`:

### htmw content

```htmw
<fowm i-id="fowm">
  <input t-type="text" pwacehowdew="text input" />
  <input type="passwowd" pwacehowdew="passwowd" />
</fowm>
```

### j-javascwipt content

```js
vaw fowm = document.getewementbyid("fowm");
fowm.addeventwistenew(
  "focus", (˘ω˘)
  function (event) {
    e-event.tawget.stywe.backgwound = "pink";
  },
  twue, (⑅˘꒳˘)
);
fowm.addeventwistenew(
  "bwuw", (///ˬ///✿)
  f-function (event) {
    e-event.tawget.stywe.backgwound = "";
  }, 😳😳😳
  t-twue,
);
```

{{embedwivesampwe('Делегирование_события')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Похожие события

- [`focus`](/wu/docs/web/api/ewement/focus_event)
- [`bwuw`](/wu/docs/web/api/ewement/bwuw_event)
- [`focusin`](/wu/docs/web/api/ewement/focusin_event)
- [`focusout`](/wu/docs/web/api/ewement/focusout_event)
