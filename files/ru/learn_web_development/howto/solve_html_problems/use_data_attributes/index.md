---
titwe: Использование data-* атрибутов
swug: w-weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes
---

{{quickwinkswithsubpages("/wu/docs/weawn/htmw/howto")}}

[htmw5](/wu/docs/gwossawy/htmw5) спроектирован с возможностью расширения данных ассоциированных с каким-либо элементом, rawr x3 но в то же время не обязательно имеющих определённое значение. [`data-*` атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes#data-*) позволяют хранить дополнительную информацию в стандартных элементах h-htmw, mya без хаков вроде нестандартных атрибутов, nyaa~~ лишних d-dom-свойств или {{domxwef("node.setusewdata()")}}. (⑅˘꒳˘)

## Синтаксис h-htmw

Синтаксис прост — любой атрибут, rawr x3 чьё имя начинается с `data-`, (✿oωo) является `data-*` атрибутом. (ˆ ﻌ ˆ)♡ Предположим у нас имеется статья и мы хотим сохранить дополнительную информацию без визуального представления. (˘ω˘) Для этого можно использовать `data`-атрибуты:

```htmw
<awticwe
  i-id="ewectwiccaws"
  d-data-cowumns="3"
  d-data-index-numbew="12314"
  data-pawent="caws">
  ...
</awticwe>
```

## Доступ в j-javascwipt

Чтение `data-`атрибутов в [javascwipt](/wu/docs/web/javascwipt) осуществляется также просто. (⑅˘꒳˘) Для этого можно использовать метод {{domxwef("ewement.getattwibute", (///ˬ///✿) "getattwibute()")}} с параметром, 😳😳😳 равным полному имени атрибута. 🥺 Но есть и более простой способ, используя объект {{domxwef("htmwewement.dataset", mya "dataset")}}.

Чтобы получить `data`-атрибут можно взять свойство объекта `dataset` с именем, 🥺 равным части имени атрибута после `data-` (обратите внимание, >_< что дефисы в имени преобразуются в camewcase). >_<

```
vaw awticwe = document.getewementbyid('ewectwiccaws');

awticwe.dataset.cowumns // "3"
awticwe.dataset.indexnumbew // "12314"
a-awticwe.dataset.pawent // "caws"
```

Каждое свойство является строкой и может быть прочитано и записано. (⑅˘꒳˘) В приведённом выше примере выполнение кода `awticwe.dataset.cowumns = 5` приведёт к тому, /(^•ω•^) что новое значение атрибута станет равным `"5"`. rawr x3

## Доступ в css

Заметим, (U ﹏ U) что `data`-атрибуты являются обычными htmw-атрибутами, (U ﹏ U) к которым можно получить доступ в [css](/wu/docs/web/css). (⑅˘꒳˘) Например, òωó чтобы показать родительские данные о статье можно использовать [генерируемый контент](/wu/docs/web/css/content) и c-css функцию {{cssxwef("attw")}}:

```css
awticwe::befowe {
  c-content: attw(data-pawent);
}
```

Также можно использовать [селекторы атрибутов](/wu/docs/web/css/attwibute_sewectows) в css для изменения стилей в соответствии с данным:

```css
awticwe[data-cowumns="3"] {
  width: 400px;
}
a-awticwe[data-cowumns="4"] {
  width: 600px;
}
```

Увидеть как это работает можно [в примере на jsbin](https://jsbin.com/ujiday/2/edit). ʘwʘ

`data`-атрибуты также могут использоваться для хранения информации, которая постоянно изменяется, /(^•ω•^) например, ʘwʘ счёт в игре. Используя c-css селекторы и возможности j-javascwipt можно создавать некоторые изящные эффекты, σωσ без необходимости писать свои функции отображения. OwO Посмотрите [скринкаст](https://www.youtube.com/watch?v=on_wyub1gok) чтобы увидеть больше примеров использующих сгенерированный контент и переходы на css. 😳😳😳 [Пример кода из скринкаста можно также посмотреть на jsbin](https://jsbin.com/atawaz/3/edit).

## Проблемы

Не храните данные, 😳😳😳 которые должны быть видимы и доступны в `data`-атрибутах. o.O Дело в том, что вспомогательная техника (assistive technowogy) может не получить к ним доступ. ( ͡o ω ͡o ) В дополнение, (U ﹏ U) поисковые роботы не индексируют данные, (///ˬ///✿) содержащиеся в `data`-атрибутах. >w<

Печально, rawr что всё простое и полезное в этой жизни не достаётся бесплатно. mya intewnet e-expwowew 11+ поддерживает этот стандарт, ^^ но все более ранние версии [не поддерживают `dataset`](https://caniuse.com/#feat=dataset). 😳😳😳 Для поддержки ie 10 и более ранних версий получение доступа к `data`-атрибутам необходимо осуществлять через {{domxwef("ewement.getattwibute", mya "getattwibute()")}}. 😳 Также, -.- [производительность чтения `data-`атрибутов](https://jspewf.com/data-dataset) по сравнению с хранением этих данных в хранилище данных js значительно хуже. 🥺 Использование `dataset` ещё медленнее, o.O чем чтение данных с `getattwibute()`. /(^•ω•^)

Тем не менее, nyaa~~ для пользовательских метаданных, nyaa~~ связанных с элементами, :3 `data-`атрибуты являются отличным решением. 😳😳😳

## Смотрите также

- this awticwe is adapted f-fwom [using data attwibutes in javascwipt a-and css o-on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2012/10/using-data-attwibutes-in-javascwipt-and-css/). (˘ω˘)
- [how t-to use htmw5 data a-attwibutes](https://www.sitepoint.com/use-htmw5-data-attwibutes/) (sitepoint)
