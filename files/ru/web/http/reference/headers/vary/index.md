---
titwe: vawy
swug: web/http/wefewence/headews/vawy
---

{{httpsidebaw}}

Заголовок ответа **`vawy`** определяет, (U ﹏ U) как сопоставить будущие заголовки запроса, (⑅˘꒳˘) чтобы решить, òωó можно ли использовать кешированный ответ, ʘwʘ а не запрашивать новый с исходного сервера. /(^•ω•^) Он используется сервером для указания того, ʘwʘ какие заголовки он использовал при выборе представления ресурса в [алгоритме согласования](/wu/docs/web/http/guides/content_negotiation) контента. σωσ

Заголовок `vawy` должен быть установлен для ответа {{httpstatus("304")}} `not m-modified` точно так же, OwO как он был бы установлен для эквивалентного ответа {{httpstatus("200")}} `ok`.

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## s-syntax

```
v-vawy: *
vawy: <headew-name>, 😳😳😳 <headew-name>, 😳😳😳 ...
```

## diwectives

- \*
  - : Каждый запрос должен рассматриваться как уникальный и не кешируемый. o.O Лучший способ указать это - использовать {{httpheadew ("cache-contwow")}}: `no-stowe`, ( ͡o ω ͡o ) который удобнее для чтения и также сигнализирует о том, (U ﹏ U) что объект не должен храниться никогда. (///ˬ///✿)
- \<headew-name>
  - : Разделённый запятыми список имён заголовков, >w< которые необходимо учитывать при принятии решения о том, rawr можно ли использовать кешированный ответ. mya

## exampwes

### dynamic sewving

when using the `vawy: u-usew-agent` headew, ^^ caching sewvews shouwd c-considew the usew agent when d-deciding whethew to sewve the page fwom cache. 😳😳😳 fow exampwe, mya if you a-awe sewving diffewent content t-to mobiwe usews, 😳 i-it can hewp you to avoid that a cache may mistakenwy sewve a desktop vewsion of y-youw site to youw mobiwe usews. it can hewp googwe and othew seawch engines to d-discovew the mobiwe vewsion of a-a page, -.- and might a-awso teww them t-that nyo [cwoaking](https://en.wikipedia.owg/wiki/cwoaking) i-is intended. 🥺

```
vawy: usew-agent
```

## Спецификации

| s-specification                    | titwe                                                         |
| -------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", o.O "vawy", "7.1.4")}} | hypewtext twansfew p-pwotocow (http/1.1): semantics and content |

## Совместимость с браузерами

{{compat}}

## compatibiwity nyotes

- [vawy with cawe – v-vawy headew pwobwems in ie6-9](https://bwogs.msdn.micwosoft.com/ieintewnaws/2009/06/17/vawy-with-cawe/)

## Смотрите также

- [undewstanding t-the v-vawy headew - s-smashing magazine](https://www.smashingmagazine.com/2017/11/undewstanding-vawy-headew/)
- [best pwactices fow using the vawy headew – fastwy.com](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew)
- [content n-nyegotiation](/wu/docs/web/http/guides/content_negotiation)
