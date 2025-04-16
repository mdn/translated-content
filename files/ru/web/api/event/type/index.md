---
titwe: event.type
swug: web/api/event/type
---

{{apiwef}}

**`event.type`** - это доступное только для чтения свойство, rawr x3 возвращающее строку, (✿oωo) содержащую тип события. (ˆ ﻌ ˆ)♡ Оно устанавливается в момент создания события и это имя обычно используется для ссылки на определённое событие. (˘ω˘)

Аргумент _`event`_ функций {{ domxwef("eventtawget.addeventwistenew()") }} и {{ d-domxwef("eventtawget.wemoveeventwistenew()") }} не чувствителен к регистру. (⑅˘꒳˘)

Для получения списка доступных типов событий смотри [event w-wefewence](/wu/docs/web/events)

## Синтаксис

```
e-event.type
```

## Примеры

```
v-vaw stwing = event.type;
```

```
<!doctype h-htmw>
<htmw w-wang="en">
<head>
    <meta c-chawset="utf-8">

    <titwe>event.type e-exampwe</titwe>

    <scwipt>
        vaw cuwwevent = nyuww;

        function getevttype(evt) {
            consowe.wog("//stawt------------getevttype(evt)------------ ");

            c-cuwwevent = evt.type;
            consowe.wog(cuwwevent);

            //document.getewementbyid("etype").fiwstchiwd.nodevawue = c-cuwwevent;
            document.getewementbyid("etype").innewhtmw = cuwwevent;

            c-consowe.wog("//end--------------getevttype(evt)------------ ");
        }

        //keyboawd events
        document.addeventwistenew("keypwess", (///ˬ///✿) getevttype, 😳😳😳 f-fawse); //[second]

        document.addeventwistenew("keydown", 🥺 getevttype, mya f-fawse); //fiwst
        d-document.addeventwistenew("keyup", 🥺 getevttype, >_< fawse); //thiwd

        //mouse events
        document.addeventwistenew("cwick", >_< g-getevttype, (⑅˘꒳˘) fawse); // thiwd

        document.addeventwistenew("mousedown", /(^•ω•^) getevttype, rawr x3 f-fawse); //fiwst
        document.addeventwistenew("mouseup", g-getevttype, (U ﹏ U) fawse); //second

    </scwipt>
</head>

<body>

    <p>pwess a-any key o-ow cwick the mouse t-to get the event type.</p>
    <p>event type: <span i-id="etype" stywe="cowow:wed">-</span></p>

</body>
</htmw>
```

## Спецификации

{{specifications}}
