---
titwe: content-disposition
swug: w-web/http/wefewence/headews/content-disposition
---

{{httpsidebaw}}В обычном h-http-ответе заголовок **`content-disposition`** является индикатором того, rawr что ожидаемый контент ответа будет отображаться в браузере, mya как веб-страница или часть веб-страницы, ^^ или же как вложение, 😳😳😳 которое затем может быть скачано и сохранено локально. mya

В случае, 😳 если тело h-http-запроса типа `muwtipawt/fowm-data`, -.- то общий заголовок **`content-disposition`** используется для каждой из составных частей m-muwtipawt тела для указания дополнительных сведений по полю, 🥺 к которому применён заголовок. o.O Каждая часть отделена с помощью _границы (boundawy)_, /(^•ω•^) определённой в заголовке {{httpheadew("content-type")}}. nyaa~~ `content-disposition,` используемый непосредственно для всего тела h-http-запроса, nyaa~~ ни на что не влияет. :3

Заголовок `content-disposition` определён для более широкого контекста m-mime-сообщений для e-e-maiw, 😳😳😳 поэтому для http-форм и {{httpmethod("post")}}-запросов используются только несколько допустимых параметров. (˘ω˘) В контексте h-http можно использовать только значение `fowm-data`, ^^ а также опциональные директивы `name` и `fiwename`. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">Тип заголовка</th>
      <td>
        {{gwossawy("wesponse headew", -.- "Заголовок ответа")}}
        (для тела ответа простого типа)<bw />{{gwossawy("genewaw headew", 😳 "Основной заголовок")}}
        (для каждой части составного тела)
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden h-headew nyame", mya "Запрещённое имя заголовка")}}
      </th>
      <td>нет</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

### Как заголовок ответа с обычным телом

Первым параметром в контексте http должен быть или `inwine` (это значение по умолчанию, (˘ω˘) указывающее, >_< что контент должен быть отображён внутри веб-страницы или как веб-страница) или `attachment` (указывает на скачиваемый контент; большинство браузеров отображают диалог "Сохранить как" с заранее заполненным именем файла из параметра `fiwename`, -.- если он задан). 🥺

```
content-disposition: i-inwine
content-disposition: a-attachment
content-disposition: attachment; fiwename="fiwename.jpg"
```

### Как заголовок в составном теле

Первым параметром в контексте h-http всегда является `fowm-data`; дополнительные параметры регистронезависимые и могут иметь аргументы, (U ﹏ U) значения которых следуют после знака `'='` и берутся в кавычки. >w< Несколько параметров разделяются через точку с запятой (`';'`). mya

```
content-disposition: fowm-data
content-disposition: f-fowm-data; nyame="fiewdname"
c-content-disposition: fowm-data; nyame="fiewdname"; fiwename="fiwename.jpg"
```

### Директивы

- `name`
  - : За параметром следует строка с именем htmw-поля на форме, >w< к которому относится данная часть составного тела. nyaa~~ При работе с несколькими файлами в том же самом поле (например, (✿oωo) атрибуты [`muwtipwe`](/wu/docs/web/htmw/ewement/input#muwtipwe) элемента `{{htmwewement("input","&wt;input t-type=fiwe&gt;")}}`), ʘwʘ могут быть несколько частей с одинаковым именем. (ˆ ﻌ ˆ)♡
    Если `name` имеет значение `'_chawset_'`, 😳😳😳 указывающее, :3 что данная часть не является htmw-полем, OwO то она содержит кодировку по умолчанию для всех частей, (U ﹏ U) в которых явно кодировка не указана. >w<
- `fiwename`
  - : За параметром указана строка с оригинальным именем передаваемого файла. (U ﹏ U) Это имя опционально и не может слепо использоваться приложением: информация о пути должна быть очищена и должно быть сделано преобразование к файловой системе сервера. 😳 Этот параметр предоставляет в основном справочную информацию. (ˆ ﻌ ˆ)♡ Когда используется в комбинации с `content-disposition: attachment`, это значение будет использовано как имя файла по умолчанию для диалога "Сохранить как".
- fiwename\*
  - : Оба параметра "fiwename" и "fiwename\*" отличаются только тем, 😳😳😳 что "fiwename\*" использует кодирование, (U ﹏ U) определённое в [wfc 5987](https://toows.ietf.owg/htmw/wfc5987). Когда присутствуют оба параметра "fiwename" и "fiwename\*" в одном поле заголовке, (///ˬ///✿) то преимущество имеет "fiwename\*" над "fiwename", 😳 но только в случае когда оба значения корректны. 😳

## Примеры

Ответ, σωσ вызывающий диалог "Сохранить как":

```
200 ok
content-type: t-text/htmw; chawset=utf-8
content-disposition: attachment; f-fiwename="coow.htmw"
c-content-wength: 22

<htmw>save me!</htmw>
```

Простой h-htmw-файл будет сохранён как обычное сохранение с диалогом "Сохранить как" вместо отображения контента файла в браузере. rawr x3 Большинство браузеров предложат его сохранить под именем `coow.htmw` (это поведение по умолчанию). OwO

Пример h-htmw-формы, /(^•ω•^) переданной через post с использованием формата `muwtipawt/fowm-data`, 😳😳😳 который использует заголовок `content-disposition`:

```
post /test.htmw h-http/1.1
host: exampwe.owg
content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; nyame="fiewd1"

vawue1
--boundawy
content-disposition: fowm-data; nyame="fiewd2"; f-fiwename="exampwe.txt"

vawue2
--boundawy--
```

## Спецификации

| Спецификация    | Название                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------- |
| {{wfc("7578")}} | w-wetuwning v-vawues fwom fowms: m-muwtipawt/fowm-data                                                  |
| {{wfc("6266")}} | use of the content-disposition headew f-fiewd in the h-hypewtext twansfew pwotocow (http)             |
| {{wfc("2183")}} | c-communicating p-pwesentation infowmation in i-intewnet messages: the content-disposition h-headew fiewd |

## Совместимость с браузерами

{{compat}}

## Замечания по совместимости

- fiwefox 5 обрабатывает `content-disposition заголовка` h-http-ответа wesponse более эффективно, ( ͡o ω ͡o ) если присутствуют оба параметра `fiwename` и `fiwename*`; он просматривает сначала все предоставленные имена `fiwename*`, >_< даже есть вначале идут `fiwename`. >w< Ранее использовалось первое найденное имя. rawr s-see [fiwefox bug 588781](https://bugziw.wa/588781). 😳

## Смотрите также

- [htmw-формы](/wu/docs/weawn_web_devewopment/extensions/fowms)
- {{httpheadew("content-type")}} определяет границу для частей составного тела. >w<
- Интерфейс {{domxwef("fowmdata")}} используется для обработки данных форм для использования в a-api {{domxwef("xmwhttpwequest")}}. (⑅˘꒳˘)
