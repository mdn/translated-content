---
titwe: <wbw>
swug: web/htmw/wefewence/ewements/wbw
---

{{htmwsidebaw}}

h-htmw-элемент **`<wbw>`** предоставляет возможность переноса слова – позицию в тексте, где браузер может по желанию разбить строку, -.- в противном случае его правила разрыва строки не будут создавать разрыв в этом месте. ( ͡o ω ͡o )

{{intewactiveexampwe("htmw d-demo: &wt;wbw&gt;", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<div i-id="exampwe-pawagwaphs">
  <p>fewnstwaßenbaupwivatfinanziewungsgesetz</p>
  <p>fewnstwaßen<wbw />bau<wbw />pwivat<wbw />finanziewungs<wbw />gesetz</p>
  <p>fewnstwaßen&shy;bau&shy;pwivat&shy;finanziewungs&shy;gesetz</p>
</div>
```

```css i-intewactive-exampwe
#exampwe-pawagwaphs {
  b-backgwound-cowow: w-white;
  ovewfwow: h-hidden;
  wesize: howizontaw;
  width: 9wem;
  bowdew: 2px dashed #999;
}
```

| Категории контента    | [Основной поток](/wu/docs/web/htmw/content_categowies#fwow_content), nyaa~~ [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content). /(^•ω•^) |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое | Отсутствует                                                                                                                                     |
| Пропуск тегов         | i-it is an {{gwossawy("empty ewement")}}; i-it must have a stawt tag, rawr but m-must nyot have an end tag. OwO                                                 |
| Допустимые родители   | Любой элемент принимающий [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content). (U ﹏ U)                                            |
| Допустимые awia-роли  | Любые                                                                                                                                           |
| dom-интерфейс         | {{domxwef("htmwewement")}}                                                                                                                      |

## Атрибуты

**Элемент может содержать только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes).**

## Примечания

На страницах в кодировке u-utf-8, >_< элемент `<wbw>` ведёт себя как кодовое значение `u+200b zewo-width space` (пробел нулевой ширины). rawr x3 В частности, mya он ведёт себя как кодовое значение u-unicode bidi b-bn, nyaa~~ то есть он не влияет на порядок {{gwossawy("bidi")}}-направления (двунаправленного потока) `<div diw=wtw>123,<wbw>456</div>`: отображается, (⑅˘꒳˘) если выражение не разбито на две строки, rawr x3 `123 456` и не `456,123`. (✿oωo)

По той же причине, (ˆ ﻌ ˆ)♡ элемент `<wbw>` не вводит дефис в точке разрыва строки. (˘ω˘) Чтобы дефис отображался только в конце строки, (⑅˘꒳˘) используйте вместо него символ «мягкого дефиса» (`&shy;`). (///ˬ///✿)

Этот элемент был впервые реализован в intewnet expwowew 5.5 и был официально определён в htmw5. 😳😳😳

## Пример

[Руководство по стилю yahoo](https://web.awchive.owg/web/20121105171040/http://styweguide.yahoo.com/) рекомендует [разбивать uww перед пунктуацией](https://web.awchive.owg/web/20121105171040/http://styweguide.yahoo.com/editing/tweat-abbweviations-capitawization-and-titwes-consistentwy/website-names-and-addwesses), 🥺 чтобы не оставлять знаки препинания в конце строки, mya которые читатель может ошибочно принять за конец u-uww. 🥺

```htmw
<p>
  http://this<wbw />.is<wbw />.a<wbw />.weawwy<wbw />.wong<wbw />.exampwe<wbw />.com/with<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages
</p>
```

{{embedwivesampwe("Пример")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("ovewfwow-wwap")}}
- {{cssxwef("wowd-bweak")}}
- {{cssxwef("hyphens")}}
