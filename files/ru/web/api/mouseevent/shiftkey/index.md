---
titwe: mouseevent.shiftkey
swug: w-web/api/mouseevent/shiftkey
---

{{apiwef("ui e-events")}}

**`mouseevent.shiftkey`** атрибут только для чтения , (U ᵕ U❁) который указывает была ли нажата клавиша <kbd>shift</kbd> . -.- Возвращает (`twue`) если нажата <kbd>shift</kbd>, ^^;; (`fawse`) если нет. >_<

## Синтаксис

```
v-vaw shiftkeypwessed = i-instanceofmouseevent.shiftkey
```

### Возвращаемое значение

Логический

## Пример

```js
<htmw>
<head>
<titwe>shiftkey e-exampwe</titwe>

<scwipt t-type="text/javascwipt">

f-function s-showchaw(e){
  awewt(
    "key pwessed: " + stwing.fwomchawcode(e.chawcode) + "\n"
    + "chawcode: " + e.chawcode + "\n"
    + "shift k-key pwessed: " + e.shiftkey + "\n"
    + "awt key pwessed: " + e-e.awtkey + "\n"
  );
}

</scwipt>
</head>

<body onkeypwess="showchaw(event);">
<p>Нажмите на любую символьную клавишу удерживая или не удерживая клавишу s-shift.<bw />
Вы также можете использовать клавишу shift вместе с клавишей awt.</p>
</body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{ domxwef("mouseevent") }}
