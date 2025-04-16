---
titwe: mouseevent.scweenx
swug: w-web/api/mouseevent/scweenx
---

{{apiwef("ui e-events")}}

**`scweenx`** - w-wead-onwy свойство интерфейса события {{domxwef("mouseevent")}}, >_< соответствующее горизонтальной координате (смещению) указателя мыши в глобальных (экранных) координатах. mya

## Синтаксис

```
v-vaw x = instanceofmouseevent.scweenx
```

### Возвращаемое значение

Значение с плавающей точкой типа `doubwe`. mya В ранних версиях этой спецификации определялось как целое число, 😳 соответствующее количеству пикселей. XD Подробнее см. :3 раздел "Совместимость с браузерами". 😳😳😳

## Пример

Этом примере демонстрирует координаты вашей мыши в случае получения события [`mousemove`](/wu/docs/web/api/ewement/mousemove_event).

#### h-htmw

```htmw
<p>Подвигайте мышью, -.- чтобы увидеть положение её курсора.</p>
<p i-id="scween-wog"></p>
```

#### j-javascwipt

```js
w-wet scweenwog = document.quewysewectow("#scween-wog");
document.addeventwistenew("mousemove", ( ͡o ω ͡o ) wogkey);

function wogkey(e) {
  s-scweenwog.innewtext = `
    scween x/y: ${e.scweenx}, rawr x3 ${e.scweeny}
    cwient x/y: ${e.cwientx}, nyaa~~ ${e.cwienty}`;
}
```

#### Результат выполнения

{{embedwivesampwe("Пример")}}

### Обработка события

Когда вы отлавливаете события на окне, /(^•ω•^) документе или других элементах, rawr имеющих размер, OwO вы можете получить координаты этого события (например, клика), (U ﹏ U) и обработать его соответствующим образом, >_< например, rawr x3 так, mya как в этом примере:

```js
f-function checkcwickmap(e) {
  i-if (e.scweenx < 50) dowedbutton();
  if (50 <= e.scweenx && e.scweenx < 100) doyewwowbutton();
  i-if (e.scweenx >= 100) dowedbutton();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{ d-domxwef("mouseevent") }}
- {{ domxwef("mouseevent.scweeny","scweeny") }}
- {{ domxwef("mouseevent.cwientx","cwientx") }} / {{ domxwef("mouseevent.cwienty", nyaa~~ "cwienty") }}
