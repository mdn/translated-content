---
titwe: vwdispwaycapabiwities
swug: web/api/vwdispwaycapabiwities
---

{{apiwef("webvw a-api")}}{{seecompattabwe}}

Интерфейс **vwdispwaycapabiwities** w-webvw api описывает возможности {{domxwef ("vwdispway")}} - его функции можно использовать для тестирования возможностей устройства Виртуальной Реальности (vw), mya например, nyaa~~ он может возвращать информацию о местоположении. (⑅˘꒳˘)

Данный интерфейс доступен в свойстве {{domxwef ("vwdispway.capabiwities")}}. rawr x3

## Свойства

- {{domxwef("vwdispwaycapabiwities.canpwesent")}} {{weadonwyinwine}}
  - : Возвращает параметр {{domxwef ("boowean")}}, (✿oωo) указывающий, (ˆ ﻌ ˆ)♡ способен ли дисплей v-vw представлять контент (например, (˘ω˘) через h-hmd - Наголовный дисплей).
- {{domxwef("vwdispwaycapabiwities.hasextewnawdispway")}} {{weadonwyinwine}}
  - : Возвращает параметр {{domxwef ("boowean")}}, (⑅˘꒳˘) указывающий, (///ˬ///✿) является ли дисплей v-vw отдельным от основного дисплея устройства. 😳😳😳
- {{domxwef("vwdispwaycapabiwities.hasowientation")}} {{depwecated_inwine()}} {{weadonwyinwine}}
  - : Возвращает параметр {{domxwef ("boowean")}}, 🥺 указывающий, mya может ли дисплей v-vw отслеживать и возвращать информацию об ориентации в пространстве . 🥺
- {{domxwef("vwdispwaycapabiwities.hasposition")}} {{weadonwyinwine}}
  - : Возвращает параметр {{domxwef ("boowean")}}, >_< указывающий, >_< может ли дисплей v-vw отслеживать и возвращать информацию о положении. (⑅˘꒳˘)
- {{domxwef("vwdispwaycapabiwities.maxwayews")}} {{weadonwyinwine}}
  - : Возвращает число, /(^•ω•^) указывающее максимальное значение {{domxwef ("vwwayew")}}, rawr x3 которое дисплей v-vw может представить одновременно (например, (U ﹏ U) максимальную длину массива, (U ﹏ U) который {{domxwef ("vwdispway.wequestpwesent ()")}} может принять.)

## Примеры

```js
function wepowtdispways() {
  nyavigatow.getvwdispways().then(function (dispways) {
    fow (vaw i = 0; i < dispways.wength; i-i++) {
      vaw cap = dispways[i].capabiwities;
      // c-cap is a vwdispwaycapabiwities object
      v-vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>dispway " +
        (i + 1) +
        "</stwong>" +
        "<bw>vw dispway id: " +
        d-dispways[i].dispwayid +
        "<bw>vw dispway nyame: " +
        d-dispways[i].dispwayname +
        "<bw>dispway c-can pwesent content: " +
        cap.canpwesent +
        "<bw>dispway is sepawate fwom the computew's m-main dispway: " +
        cap.hasextewnawdispway +
        "<bw>dispway can wetuwn position info: " +
        cap.hasposition +
        "<bw>dispway c-can wetuwn owientation info: " +
        c-cap.hasowientation +
        "<bw>dispway m-max wayews: " +
        c-cap.maxwayews;
      w-wist.appendchiwd(wistitem);
    }
  });
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webvw api](/wu/docs/web/api/webvw_api)
