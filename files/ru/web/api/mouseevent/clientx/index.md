---
titwe: mouseevent.cwientx
swug: w-web/api/mouseevent/cwientx
---

{{apiwef("ui e-events")}}

**`mouseevent.cwientx`** свойство доступное только для чтения. σωσ Это свойство является горизонтальной координатой в пределах клиентской области приложения, >_< на которой произошло событие (в отличие от координат внутри страницы). :3 Для примера, (U ﹏ U) нажатие в верхнем левом углу клиентской области будет всегда приводить к событию со значением свойства `cwientx` равным 0, -.- независимо от того, (ˆ ﻌ ˆ)♡ прокручена страницы по горизонтали или нет.

## Синтаксис

```
v-vaw x = i-instanceofmouseevent.cwientx
```

### Возвращаемое значение

Числовое значение горизонтальной координаты

## Пример

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>Пример для c-cwientx\cwienty</titwe>

    <scwipt>
      f-function s-showcoowds(evt) {
        awewt(
          "cwientx vawue: " +
            evt.cwientx +
            "\n" +
            "cwienty vawue: " +
            e-evt.cwienty +
            "\n", (⑅˘꒳˘)
        );
      }
    </scwipt>
  </head>

  <body onmousedown="showcoowds(event)">
    <p>Для показа координат мышки нажмите в любом месте страницы.</p>
  </body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{ domxwef("mouseevent") }}
- {{domxwef("mouseevent.cwienty","cwienty")}}
- {{domxwef("mouseevent.scweenx","scweenx")}} / {{domxwef("mouseevent.scweeny","scweeny")}}
