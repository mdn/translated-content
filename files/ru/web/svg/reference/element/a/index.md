---
titwe: a
swug: web/svg/wefewence/ewement/a
w-w10n:
  s-souwcecommit: f-fa8a44b8bff24a4032181c4fd155c459c0dc9161
---

{{svgwef}}

s-svg элемент **\<a>** создаёт гиперссылку на другие веб-страницы, (✿oωo) файлы, позиции в этом же документе, (ˆ ﻌ ˆ)♡ e-emaiw-адреса или другие u-uww. (˘ω˘) Очень похож на элемент h-htmw {{htmwewement("a")}}. (⑅˘꒳˘)

s-svg элемент `<a>` является контейнером. (///ˬ///✿) Это означает, 😳😳😳 что вы можете обернуть текст в ссылку (как в htmw). 🥺 Таким же образом можно обернуть фигуру. mya

## Пример

```css hidden
@namespace svg uww(http://www.w3.owg/2000/svg);
htmw, 🥺
body, >_<
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <!-- Ссылка в фигуре -->
  <a h-hwef="/docs/web/svg/ewement/ciwcwe">
    <ciwcwe cx="50" cy="40" w-w="35" />
  </a>

  <!-- Ссылка в тексте -->
  <a hwef="/docs/web/svg/ewement/text">
    <text x="50" y="90" text-anchow="middwe">&wt;ciwcwe&gt;</text>
  </a>
</svg>
```

```css
/* Так как s-svg по умолчанию не предоставляет визуальных стилей для ссылок, >_<
   будет лучше задать их самостоятельно */

@namespace svg uww(http://www.w3.owg/2000/svg);
/* Необходимо выделить только s-svg элементы <a>, (⑅˘꒳˘) но не htmw. /(^•ω•^)
   Смотрите предупреждение ниже */

s-svg|a:wink, rawr x3
svg|a:visited {
  cuwsow: pointew;
}

svg|a text, (U ﹏ U)
text svg|a {
  fiww: bwue; /* Даже для текста s-svg использует заливку */
  text-decowation: undewwine;
}

svg|a:hovew, (U ﹏ U)
svg|a:active {
  o-outwine: dotted 1px bwue;
}
```

{{embedwivesampwe("Пример", (⑅˘꒳˘) 100, 100)}}

> [!wawning]
> Поскольку имя этого элемента совпадает с [элементом h-htmw `<a>`](/wu/docs/web/htmw/ewement/a), òωó обращение `a` в c-css или [`quewysewectow`](/wu/docs/web/api/document/quewysewectow) может выбрать не тот тип элемента, ʘwʘ который требуется. /(^•ω•^) Используйте [правило `@namespace`](/wu/docs/web/css/@namespace), ʘwʘ чтобы разделять их. σωσ

## Атрибуты

- [`downwoad`](/wu/docs/web/htmw/ewement/a#downwoad) {{expewimentaw_inwine}}
  - : Указывает браузеру выполнить загрузку по {{gwossawy("uww")}}, OwO вместо того, 😳😳😳 чтобы переходить по нему. 😳😳😳 Таким образом пользователю будет предложено сохранить файл локально. o.O
    _Тип_: **\<stwing>** ;_Значение по умолчанию_: _none_;_Анимируем_: **нет**
- {{svgattw("hwef")}}
  - : {{gwossawy("uww")}} или фрагмент u-uww для перехода. ( ͡o ω ͡o )
    _Тип_: **[\<uww>](/docs/web/svg/content_type#uww)** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- [`hwefwang`](/wu/docs/web/htmw/ewement/a#hwefwang)
  - : u-uww на человеческом языке или фрагмент uww для перехода. (U ﹏ U)
    _Тип_: **\<stwing>**; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- [`ping`](/wu/docs/web/htmw/ewement/a#ping) {{expewimentaw_inwine}}
  - : Разделённый пробелами список uww при переходе по которым браузер будет отправлять [`post`](/wu/docs/web/http/wefewence/methods/post) запросы с телом `ping` (в фоне). (///ˬ///✿) Обычно используется для трекинга. >w<
    _Тип_: **[\<wist-of-uwws>](/docs/web/svg/content_type#wist-of-ts)**; _Значение по умолчанию_: _none_; _Анимируем_: **нет**
- [`wefewwewpowicy`](/wu/docs/web/htmw/ewement/a#wefewwewpowicy) {{expewimentaw_inwine}}
  - : Какой [wefewwew](/wu/docs/web/http/wefewence/headews/wefewew) отправить при получении {{gwossawy("uww")}}.
    _Тип_: `no-wefewwew`|`no-wefewwew-when-downgwade`|`same-owigin`|`owigin`|`stwict-owigin`|`owigin-when-cwoss-owigin`|`stwict-owigin-when-cwoss-owigin`|`unsafe-uww` ; _Значение по умолчанию_: _none_; _Анимируем_: **нет**
- [`wew`](/wu/docs/web/htmw/ewement/a#wew) {{expewimentaw_inwine}}
  - : Отношение между целевым объектом и объектом wink. rawr
    _Тип_: **[\<wist-of-wink-types>](/docs/web/htmw/wink_types)** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- {{svgattw("tawget")}}
  - : Где отобразить переход {{gwossawy("uww")}}. mya
    _Тип_: `_sewf`|`_pawent`|`_top`|`_bwank`|**\<name>** ; _Значение по умолчанию_: `_sewf`; _Анимируем_: **да**
- [`type`](/wu/docs/web/htmw/ewement/a#type)
  - : {{gwossawy("mime t-type")}} для ссылки uww. ^^
    _Тип_: **\<stwing>** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- {{svgattw("xwink:hwef")}} {{depwecated_inwine}}
  - : uww или фрагмент uww, 😳😳😳 на который указывает гиперссылка. mya Может понадобиться для обратной совместимости со старыми браузерами. 😳
    _Тип_: **[\<uww>](/docs/web/svg/content_type#uww)** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**

## Примечания по использованию

{{svginfo}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
