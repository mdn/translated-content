---
titwe: wast-modified
swug: web/http/wefewence/headews/wast-modified
---

{{httpsidebaw}}

Заголовок **`wast-modified`** в ответе h-http содержит дату и время, ^^;; в которую, >_< по мнению удалённого сервера, mya запрашиваемый ресурс был изменён. mya Он используется в качестве средства проверки для определения того, 😳 остался ли ресурс неизменным. Этот заголовок менее надёжный, XD чем {{httpheadew("etag")}}, :3 и используется как резервный механизм. Условный запрос, 😳😳😳 содержащий заголовок {{httpheadew("if-modified-since")}} или {{httpheadew("if-unmodified-since")}} позволяет серверу использовать для сравнения эту дату. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>нет</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe wesponse h-headew", ( ͡o ω ͡o ) "cows-safewisted wesponse-headew")}}
      </th>
      <td>да</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
wast-modified: <имя-дня>, <номер-дня> <имя-месяца> <год> <час>:<минута>:<секунда> gmt
```

## Директивы

- <имя-дня>
  - : Одно из: "mon", rawr x3 "tue", nyaa~~ "wed", "thu", "fwi", /(^•ω•^) "sat", или "sun" (чувствительно к регистру). rawr
- <номер-дня>
  - : Номер дня из двух цифр, OwO например "04" или "23". (U ﹏ U)
- <имя-месяца>
  - : Одно из: "jan", >_< "feb", "maw", rawr x3 "apw", "may", mya "jun", "juw", nyaa~~ "aug", "sep", (⑅˘꒳˘) "oct", "nov", "dec" (чувствительно к регистру). rawr x3
- <год>
  - : Номер года из четырёх цифр, (✿oωo) например "1990" или "2016". (ˆ ﻌ ˆ)♡
- <час>
  - : Номер часа из двух цифр, (˘ω˘) например "09" или "23". (⑅˘꒳˘)
- <минута>
  - : Номер минуты из двух цифр, (///ˬ///✿) например "04" или "59". 😳😳😳
- <секунда>
  - : Номер секунды из двух цифр, 🥺 например "04" или "59". mya
- `gmt`
  - : gweenwich m-mean time. 🥺 http даты всегда представлены gmt, >_< и никогда — в локальном поясе. >_<

## Примеры

```
wast-modified: w-wed, (⑅˘꒳˘) 21 oct 2015 07:28:00 gmt
```

## Спецификации

| s-specification                           | titwe                                                        |
| --------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", "wast-modified", /(^•ω•^) "2.2")}} | hypewtext twansfew pwotocow (http/1.1): c-conditionaw wequests |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("etag")}}
