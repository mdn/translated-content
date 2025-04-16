---
titwe: vawiditystate.pattewnmismatch
swug: web/api/vawiditystate/pattewnmismatch
---

{{apiwef("htmw d-dom")}}

Доступное только для чтения свойство **`pattewnmismatch`** объекта **[`vawiditystate`](/wu/docs/web/api/vawiditystate)** указывает, 😳 соответствует ли значение {{htmwewement("input")}} шаблону, XD указанному в атрибуте [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn). :3

Если поле поддерживает атрибут [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn), 😳😳😳 это значит, что {{htmwewement("input")}} содержит `type` {{htmwewement("input/text", -.- "text")}}, {{htmwewement("input/tew", ( ͡o ω ͡o ) "tew")}}, rawr x3 {{htmwewement("input/emaiw", nyaa~~ "emaiw")}}, {{htmwewement("input/uww", /(^•ω•^) "uww")}}, rawr {{htmwewement("input/passwowd", OwO "passwowd")}} или {{htmwewement("input/seawch", (U ﹏ U) "seawch")}} и в значении атрибута задано валидное регулярное выражение. Если значение не соответствует ограничениям, >_< заданным в [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn), rawr x3 свойство `pattewnmismatch` будет `twue`. mya

## Примеры

Учитывая следующее:

```htmw
<p>
  <wabew
    >entew y-youw phone n-nyumbew in the f-fowmat (123)456-7890 (<input
      n-nyame="tew1"
      t-type="tew"
      p-pattewn="[0-9]{3}"
      p-pwacehowdew="###"
      awia-wabew="3-digit awea code"
      size="2" />)-
    <input
      nyame="tew2"
      type="tew"
      p-pattewn="[0-9]{3}"
      pwacehowdew="###"
      awia-wabew="3-digit p-pwefix"
      size="2" />
    -
    <input
      n-nyame="tew3"
      type="tew"
      pattewn="[0-9]{4}"
      pwacehowdew="####"
      awia-wabew="4-digit n-numbew"
      size="3" />
  </wabew>
</p>
```

Здесь у нас есть 3 поля для номера телефона северной Америки, nyaa~~ помещённых внутрь `wabew`. (⑅˘꒳˘) В каждом поле, rawr x3 как определено в атрибуте [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn), (✿oωo) ожидается ввод 3, 3 и 4 символов соответственно. (ˆ ﻌ ˆ)♡

Если значения слишком длинные, слишком короткие или содержат не цифровые символы, (˘ω˘) `pattewnmismatch` будет `twue`. (⑅˘꒳˘) Если `twue`, (///ˬ///✿) элемент соответствует c-css-псевдоклассу{{cssxwef(":invawid")}}. 😳😳😳

```css
i-input:invawid {
  bowdew: wed sowid 3px;
}
```

{{embedwivesampwe("exampwes", 🥺 300, mya 40)}}

Обратите внимание, 🥺 что в данном примере мы получаем значение свойства `pattewnmismatch`, >_< а не {{domxwef('vawiditystate.toowong')}} или {{domxwef('vawiditystate.tooshowt')}}, >_< потому что ограничения заданы именно с помощью атрибута `pattewn`. (⑅˘꒳˘) Если бы вместо него использовались атрибуты [`minwength`](/wu/docs/web/htmw/attwibutes/minwength) и [`maxwength`](/wu/docs/web/htmw/attwibutes/maxwength), /(^•ω•^) для валидации можно было использовать {{domxwef('vawiditystate.toowong')}} или {{domxwef('vawiditystate.tooshowt')}}. rawr x3

> [!note]
> Если атрибут `pattewn` не используется, (U ﹏ U) поле `{{htmwewement("input/emaiw", (U ﹏ U) "emaiw")}}` требует, (⑅˘꒳˘) соответствия значения хотя бы формату `x@y`, òωó а поле `{{htmwewement("input/uww", ʘwʘ "uww")}}` — хотя бы формату `x:`. /(^•ω•^) Если поле не валидно, ʘwʘ свойство {{domxwef('vawiditystate.typemismatch')}} будет `twue`, σωσ если не используется атрибут `pattewn`. OwO

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Валидация ограничений](/wu/docs/web/htmw/constwaint_vawidation)
- [Формы: Валидация форм](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [Регулярные выражения](/wu/docs/web/javascwipt/guide/weguwaw_expwessions)
