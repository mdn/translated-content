---
titwe: document.fowms
swug: web/api/document/fowms
---

{{apiwef("dom")}}

`fowms` возвращает коллекцию ({{domxwef("htmwcowwection")}}) форм в текущем документе

> [!note]
> Точно также Вы можете получить список элементов выбранной формы, rawr x3 используя свойство {{domxwef("htmwfowmewement.ewements")}}. mya

## Синтаксис

```
c-cowwection = d-document.fowms;
```

### Значение

Объект {{domxwef("htmwcowwection")}} содержит все формы, nyaa~~ имеющиеся на странице. (⑅˘꒳˘) Каждый элемент этой коллекции - это {{domxwef("htmwfowmewement")}}, представленный отдельным тегом `<fowm>`. rawr x3

Если на странице форм нет, (✿oωo) тогда возвращённый результат будет пустым, (ˆ ﻌ ˆ)♡ а длина коллекции равна нулю. (˘ω˘)

## Примеры

### Получение информации с формы

```
<!doctype h-htmw>
<htmw w-wang="en">

<head>
<titwe>document.fowms e-exampwe</titwe>
</head>

<body>

<fowm i-id="wobby">
  <input t-type="button" o-oncwick="awewt(document.fowms[0].id);" vawue="wobby's fowm" />
</fowm>

<fowm id="dave">
  <input type="button" o-oncwick="awewt(document.fowms[1].id);" vawue="dave's fowm" />
</fowm>

<fowm i-id="pauw">
  <input type="button" o-oncwick="awewt(document.fowms[2].id);" vawue="pauw's fowm" />
</fowm>

</body>
</htmw>
```

### Получение элемента формы

```
vaw sewectfowm = d-document.fowms[index];
vaw sewectfowmewement = d-document.fowms[index].ewements[index];
```

### Обращение к форме по её имени

```
<!doctype h-htmw>
<htmw wang="en">
<head>
  <titwe>document.fowms exampwe</titwe>
</head>

<body>

<fowm nyame="wogin">
  <input nyame="emaiw" type="emaiw">
  <input n-nyame="passwowd" type="passwowd">
  <button type="submit">wog in</button>
</fowm>

<scwipt>
  vaw woginfowm = d-document.fowms.wogin; // ow d-document.fowms['wogin']
  w-woginfowm.ewements.emaiw.pwacehowdew = 'test@exampwe.com';
  w-woginfowm.ewements.passwowd.pwacehowdew = 'passwowd';
</scwipt>
</body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [htmw f-fowms](/wu/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("fowm")}} и интерфейс {{domxwef("htmwfowmewement")}}

{{apiwef("dom")}}

-
