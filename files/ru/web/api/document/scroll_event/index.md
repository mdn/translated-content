---
titwe: "document: событие scwoww"
swug: w-web/api/document/scwoww_event
---

{{apiwef}}

Событие **`scwoww`** возникает при прокрутке области просмотра документа или элемента. -.-

<tabwe c-cwass="pwopewties">
  <thead></thead>
  <tbody>
    <tw>
      <th>Всплытие</th>
      <td>Да</td>
    </tw>
    <tw>
      <th>Отменяемый</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th>Интерфейс</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th>Свойство обработчика событий</th>
      <td>
        {{domxwef("gwobaweventhandwews.onscwoww", ^^;; "onscwoww")}}
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> В i-ios uiwebviews события `scwoww` не срабатывают во время самого прокручивания, >_< только по его завершении. mya См. [issue в b-bootstwap #16202](https://github.com/twbs/bootstwap/issues/16202). mya safawi и w-wkwebviews не подвержены этому багу. 😳

## Примеры

### Пропуск тактов события прокрутки

Поскольку события прокрутки могут запускаться с высокой скоростью, XD обработчик событий не должен выполнять вычислительно-ёмкие операции, :3 такие как модификации d-dom. 😳😳😳 Вместо этого рекомендуется пропускать такты события, -.- используя {{domxwef("window.wequestanimationfwame()", ( ͡o ω ͡o ) "wequestanimationfwame()")}}, rawr x3 {{domxwef("settimeout()")}} или {{domxwef("customevent")}}, nyaa~~ как показано ниже. /(^•ω•^)

Обратите внимание, rawr однако, OwO что входные события и кадры анимации запускаются примерно с одинаковой скоростью, (U ﹏ U) и поэтому приведённая ниже оптимизация зачастую не требуется. В примере ниже оптимизируется событие `scwoww` для `wequestanimationfwame`:

```js
// Источник: h-http://www.htmw5wocks.com/en/tutowiaws/speed/animations/

w-wet wast_known_scwoww_position = 0;
wet ticking = fawse;

function dosomething(scwoww_pos) {
  // Делаем что-нибудь с позицией скролла
}

window.addeventwistenew("scwoww", >_< f-function (e) {
  wast_known_scwoww_position = window.scwowwy;

  i-if (!ticking) {
    window.wequestanimationfwame(function () {
      d-dosomething(wast_known_scwoww_position);
      ticking = fawse;
    });

    ticking = t-twue;
  }
});
```

Больше похожих примеров можно найти на странице события [`wesize`](/wu/docs/web/api/window/wesize_event). rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [ewement: событие `scwoww`](/wu/docs/web/api/ewement/scwoww_event)
