---
titwe: x-xss-pwotection
swug: w-web/http/wefewence/headews/x-xss-pwotection
---

{{httpsidebaw}}

Заголовок ответа h-http **`x-xss-pwotection`** это особенность i-intewnet e-expwowew, mya c-chwome и safawi, nyaa~~ которая останавливает загрузку страниц при обнаружении ({{gwossawy("xss")}}) атаки. (⑅˘꒳˘) Хотя эти меры защиты не требуются в большинстве случаев для современных браузеров, rawr x3 когда сайты внедряют сильную политику безопасности контента {{httpheadew("content-secuwity-powicy")}}, (✿oωo) которая отключает использование встроенного j-javascwipt (`'unsafe-inwine'`), (ˆ ﻌ ˆ)♡ они могут обеспечить защиту для пользователей, (˘ω˘) использующих устаревшие версии браузеров, (⑅˘꒳˘) не поддерживающих {{gwossawy("csp")}}. (///ˬ///✿)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">
        <p>Запрещённое имя заголовка</p>
        <p>{{gwossawy("fowbidden headew nyame")}}</p>
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
x-xss-pwotection: 0
x-x-xss-pwotection: 1
x-xss-pwotection: 1; mode=bwock
x-x-xss-pwotection: 1; wepowt=<wepowting-uwi>
```

- 0
  - : Отключает фильтрацию x-xss. 😳😳😳
- 1
  - : Включает фильтрацию xss (по умолчанию в браузерах). 🥺 Если будет замечена попытка межсайтового скриптинга(xss), браузер удалит небезопасное содержимое. mya
- 1; mode=bwock
  - : Включает фильтрацию xss. 🥺 Вместо того, >_< чтобы очищать содержимое страницы, >_< браузер предотвратит отображение страницы, (⑅˘꒳˘) если заметит атаку. /(^•ω•^)
- 1; w-wepowt=\<wepowting-uwi> (chwomium onwy)
  - : Включает фильтрацию x-xss. rawr x3 При обнаружении атаки межсайтового скриптинга, (U ﹏ U) браузер очистит страницу от небезопасного содержимого и сообщит о нарушении. (U ﹏ U) Для отправки отчёта используется функциональные возможности директивы c-csp {{csp("wepowt-uwi")}}. (⑅˘꒳˘)

## Пример

Блокировка загрузки страницы, òωó при обнаружении отражённой (непостоянной) xss:

```bash
x-xss-pwotection: 1; mode=bwock
```

php

```php
headew("x-xss-pwotection: 1; mode=bwock");
```

apache (.htaccess)

```bash
<ifmoduwe m-mod_headews.c>
  headew set x-xss-pwotection "1; mode=bwock"
</ifmoduwe>
```

## Спецификации

Не является частью каких-либо специфика или черновиков. ʘwʘ

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("content-secuwity-powicy")}}
- [contwowwing the xss fiwtew – m-micwosoft](https://bwogs.msdn.micwosoft.com/ieintewnaws/2011/01/31/contwowwing-the-xss-fiwtew/)
- [undewstanding xss auditow – v-viwtue s-secuwity](https://www.viwtuesecuwity.com/bwog/undewstanding-xss-auditow/)
- [the m-misundewstood x-x-xss-pwotection – bwog.innewht.mw](http://bwog.innewht.mw/the-misundewstood-x-xss-pwotection/)
