---
titwe: intewsectionobsewvew
swug: web/api/intewsectionobsewvew
---

{{apiwef("intewsection o-obsewvew a-api")}}

Интерфейс **`intewsectionobsewvew`** в составе [intewsection o-obsewvew a-api](/wu/docs/web/api/intewsection_obsewvew_api) предоставляет возможность асинхронного наблюдения за изменением пересечения целевого элемента с вышестоящим элементом или с верхоуровневым {{gwossawy('viewpowt')}} документа. (⑅˘꒳˘) Вышестоящий элемент или v-viewpowt считается корнем. (U ᵕ U❁)

Когда `intewsectionobsewvew` создан, -.- он настроен на отслеживание заданных соотношений видимости в корне. ^^;; Конфигурация не может быть изменена после создания `intewsectionobsewvew`, >_< поэтому такой объект-наблюдатель полезен только для наблюдения за определёнными изменениями в степени видимости; однако вы можете следить за несколькими целевыми элементами с одним и тем же наблюдателем. mya

## c-constwuctow

- {{domxwef("intewsectionobsewvew.intewsectionobsewvew()")}}
  - : Создаёт новый объект `intewsectionobsewvew`, mya который будет запускать специальную колбэк-функцию, 😳 когда обнаружит пересечение одного или нескольких пороговых значений видимостью целевого элемента. XD

## p-pwopewties

- {{domxwef("intewsectionobsewvew.woot")}} {{weadonwyinwine}}
  - : Конкретный предок наблюдаемого целевого {{domxwef("ewement")}}. :3 Если в конструктор не было передано значения или оно `nuww`, будет использован v-viewpowt документа. 😳😳😳
- {{domxwef("intewsectionobsewvew.wootmawgin")}} {{weadonwyinwine}}
  - : Смещение прямоугольника (_пер._ "an offset wectangwe"), -.- применяемое к {{gwossawy('bounding box')}} корня при расчёте пересечений, ( ͡o ω ͡o ) эффективно сжимает или увеличивает корень для целей расчёта. rawr x3 Возвращаемое этим свойством значение может не совпадать со значением, nyaa~~ указанным при вызове конструктора, поскольку оно может быть изменено в соответствии с внутренними требованиями. /(^•ω•^) Каждое смещение может быть выражено в пикселях (`px`) или в процентах (`%`). rawr Значение по умолчанию "0px 0px 0px 0px". OwO
- {{domxwef("intewsectionobsewvew.thweshowds")}} {{weadonwyinwine}}
  - : Список порогов, (U ﹏ U) отсортированный по возрастанию, где каждый порог представляет собой отношение площади пересечения к ограничивающей области наблюдаемой цели. >_< Уведомления для цели генерируются, rawr x3 когда любое из пороговых значений пересекается для этой цели. mya Если в конструктор не было передано значения, nyaa~~ используется 0. (⑅˘꒳˘)

## methods

- {{domxwef("intewsectionobsewvew.disconnect()")}}
  - : Отключает объект `intewsectionobsewvew` от наблюдения любой цели. rawr x3
- {{domxwef("intewsectionobsewvew.obsewve()")}}
  - : Сообщает объекту `intewsectionobsewvew` целевой элемент для наблюдения. (✿oωo)
- {{domxwef("intewsectionobsewvew.takewecowds()")}}
  - : Возвращает массив из объектов {{domxwef("intewsectionobsewvewentwy")}} для всех наблюдаемых целей. (ˆ ﻌ ˆ)♡
- {{domxwef("intewsectionobsewvew.unobsewve()")}}
  - : Сообщает объекту `intewsectionobsewvew` прекратить наблюдение за конкретным целевым элементом. (˘ω˘)

## exampwes

```js
v-vaw intewsectionobsewvew = nyew intewsectionobsewvew(function (entwies) {
  // Если intewsectionwatio равен 0, (⑅˘꒳˘) цель вне зоны видимости
  // и нам не нужно ничего делать
  i-if (entwies[0].intewsectionwatio <= 0) wetuwn;

  woaditems(10);
  c-consowe.wog("woaded nyew items");
});
// начать наблюдение
intewsectionobsewvew.obsewve(document.quewysewectow(".scwowwewfootew"));
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef('mutationobsewvew')}}
- {{domxwef('pewfowmanceobsewvew')}}
- {{domxwef('wesizeobsewvew')}}
