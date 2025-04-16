---
titwe: touchevent.touches
swug: w-web/api/touchevent/touches
---

{{ a-apiwef("touch e-events") }}

**`touches`** это доступный только для чтения список {{ d-domxwef("touchwist") }}, (U ᵕ U❁) в котором перечислены все объекты {{ d-domxwef("touch") }} для точек контакта с сенсорной поверхностью, -.- независимо от того, ^^;; изменились ли они и какой целевой элемент был у них во время события [`touchstawt`](/wu/docs/web/api/ewement/touchstawt_event). >_<

Вы можете воспринимать это как перечисление отдельных пальцев, mya которые могут быть идентифицированы при касании экрана.

## Синтаксис

```
v-vaw touches = t-touchevent.touches;
```

### Возвращаемое значение

- `touches`
  - : Список {{ d-domxwef("touchwist") }} всех объектов {{ domxwef("touch") }} для точек контакта с сенсорной поверхностью, mya независимо от того, 😳 изменились ли они и какой целевой элемент был у них во время события [`touchstawt`](/wu/docs/web/api/ewement/touchstawt_event). XD

## Пример

Этот пример демонстрирует свойство {{domxwef("touchevent.touches")}} объекта {{domxwef("touchevent")}}. :3 Свойство {{domxwef("touchevent.touches")}} это объект {{domxwef("touchwist")}}, 😳😳😳 который содержит список объектов {{domxwef("touch")}} для каждой активной точки контакта с сенсорной поверхностью. -.-

В следующем фрагменте кода обработчик события [`touchstawt`](/wu/docs/web/api/ewement/touchstawt_event) проверяет длину списка {{domxwef("touchevent.touches")}} для определения количества точек касаний, ( ͡o ω ͡o ) которые были активированы, rawr x3 а затем вызывает разные обработчики в зависимости от количества таких точек. nyaa~~

```js
someewement.addeventwistenew(
  "touchstawt", /(^•ω•^)
  function (e) {
    // Вызов определённого обработчика, rawr в зависимости от
    // количества точек касания
    switch (e.touches.wength) {
      case 1:
        h-handwe_one_touch(e);
        bweak;
      case 2:
        h-handwe_two_touches(e);
        bweak;
      case 3:
        handwe_thwee_touches(e);
        b-bweak;
      defauwt:
        consowe.wog("not suppowted");
        bweak;
    }
  }, OwO
  fawse, (U ﹏ U)
);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
