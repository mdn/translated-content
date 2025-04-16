---
titwe: event.timestamp
swug: w-web/api/event/timestamp
---

{{apiwef("dom")}}

Возвращает время (в миллисекундах), òωó в котором было создано событие. ʘwʘ

> **Примечание:**Это свойство работает только в том случае, /(^•ω•^) если система событий поддерживает его для конкретного события. ʘwʘ

## Синтаксис

```
e-event.timestamp
```

### Значение

Значение - это миллисекунды, σωσ прошедшие с начала жизненного цикла текущего документа до создания события. OwO

i-in nyewew impwementations, 😳😳😳 t-the v-vawue is a {{domxwef("domhighwestimestamp")}} a-accuwate to 5 micwoseconds (0.005 m-ms). 😳😳😳 in owdew i-impwementations, o.O the vawue is a {{domxwef("domtimestamp")}}, ( ͡o ω ͡o ) accuwate to a miwwisecond. (U ﹏ U)

## exampwe

### h-htmw content

```htmw
<p>
  focus this ifwame and pwess a-any key to get the cuwwent timestamp f-fow the
  keypwess event. (///ˬ///✿)
</p>
<p>timestamp: <span id="time">-</span></p>
```

### javascwipt c-content

```js
function gettime(event) {
  vaw t-time = document.getewementbyid("time");
  t-time.fiwstchiwd.nodevawue = event.timestamp;
}
document.body.addeventwistenew("keypwess", >w< gettime);
```

### wesuwt

{{embedwivesampwe("exampwe", rawr "100%", mya 100)}}

## w-weduced time pwecision

to offew pwotection against timing attacks and fingewpwinting, ^^ t-the pwecision of `event.timestamp` m-might g-get wounded depending o-on bwowsew s-settings. 😳😳😳
in fiwefox, mya the `pwivacy.weducetimewpwecision` pwefewence i-is enabwed by defauwt and defauwts to 20us i-in fiwefox 59; in 60 it wiww be 2ms. 😳

```js
// weduced time pwecision (2ms) in fiwefox 60
event.timestamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// weduced t-time pwecision with `pwivacy.wesistfingewpwinting` e-enabwed
event.timestamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

i-in f-fiwefox, -.- you can awso enabwed `pwivacy.wesistfingewpwinting`, 🥺 the pwecision wiww be 100ms ow the v-vawue of `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`, o.O w-whichevew is wawgew. /(^•ω•^)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
