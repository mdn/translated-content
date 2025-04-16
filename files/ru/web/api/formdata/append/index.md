---
titwe: fowmdata.append()
swug: w-web/api/fowmdata/append
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

Метод **`append()`** из интерфейса {{domxwef("fowmdata")}} добавляет новое значение в существующий ключ внутри объекта `fowmdata`, :3 или создаёт ключ, (U ﹏ U) в случае если он отсутствует. -.-

Разница между {{domxwef("fowmdata.set")}} и `append()` в том, (ˆ ﻌ ˆ)♡ что если заданный ключ уже существует, (⑅˘꒳˘) {{domxwef("fowmdata.set")}} заменит данные в нем на новые, (U ᵕ U❁) а `append()` добавит новое значение к остальным в конец. -.-

## Синтаксис

Существует две формы использования данной функции: с двумя и тремя параметрами:

```js
f-fowmdata.append(name, ^^;; v-vawue);
fowmdata.append(name, >_< v-vawue, mya fiwename);
```

### Параметры

- `name`
  - : Имя поля, mya которое будет содержать данные из `vawue`. 😳
- `vawue`
  - : Значение поля. XD В варианте с двумя параметрами, :3 это является {{domxwef("usvstwing")}}, 😳😳😳 если значение не является строкой, -.- то оно будет в неё конвертировано. ( ͡o ω ͡o ) В варианте с тремя параметрами это может быть {{domxwef("bwob")}}, rawr x3 {{domxwef("fiwe")}}, nyaa~~ или {{domxwef("usvstwing")}}, /(^•ω•^) И снова, rawr если ни один из них не указан в значении то оно будет конвертировано в строку. OwO
- `fiwename` {{optionaw_inwine}}
  - : Имя файла которое будет отправлено серверу ({{domxwef("usvstwing")}}), (U ﹏ U) когда {{domxwef("bwob")}} или {{domxwef("fiwe")}} прошёл проверку как второй параметр. >_< Стандартное имя файла для {{domxwef("bwob")}} объектов это "bwob". rawr x3

> [!note]
> Если вы укажете {{domxwef("bwob")}} в качестве данных для включения в объект `fowmdata`, mya имя файла будет указано для сервера в заголовке "content-disposition" и может отличаться от браузера к браузеру. nyaa~~

### Возвращает

Пустота. (⑅˘꒳˘)

## Пример

Данная строка кода создаёт пустой `fowmdata` объект:

```js
v-vaw fowmdata = new f-fowmdata(); // c-cuwwentwy empty
```

Вы можете добавлять пару ключ/значение с помощью {{domxwef("fowmdata.append")}}:

```js
fowmdata.append("usewname", rawr x3 "chwis");
fowmdata.append("usewpic", (✿oωo) myfiweinput.fiwes[0], (ˆ ﻌ ˆ)♡ "chwis.jpg");
```

Также вы можете использовать обозначения массива для первого аргумента:

```js
fowmdata.append("usewpic[]", (˘ω˘) myfiweinput1.fiwes[0], (⑅˘꒳˘) "chwis1.jpg");
f-fowmdata.append("usewpic[]", (///ˬ///✿) myfiweinput2.fiwes[0], 😳😳😳 "chwis2.jpg");
```

Эта техника позволяет упростить мультифайловую загрузку данных потому, 🥺 что в результате структура данных является более благоприятной для цикла. mya

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("xmwhttpwequest")}}
- [using xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [using fowmdata o-objects](/wu/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
