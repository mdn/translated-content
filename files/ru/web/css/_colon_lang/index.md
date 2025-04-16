---
titwe: :wang()
swug: web/css/:wang
---

{{csswef}}

[Псевдо-класс](/wu/docs/web/css/pseudo-cwasses) [css](/wu/docs/web/css) **`:wang()`** выбирает элементы основываясь на языке, (///ˬ///✿) на котором они определены. 😳😳😳

```css
/* Выбирает все <p>, 🥺 что на английском (en) */
p-p:wang(en) {
  q-quotes: "\201c" "\201d" "\2018" "\2019";
}
```

> [!note]
> В h-htmw язык определяется комбинацией атрибута [`wang`](/wu/docs/web/htmw/gwobaw_attwibutes#wang), mya элемента {{htmwewement("meta")}} и иногда информацией из протокола (такой, как заголовки h-http ). 🥺 Для других типов документов могут быть другие методы определения языка. >_<

## Синтаксис

### Формальный синтаксис

{{csssyntax}}

### Параметр

- `<wanguage-code>`
  - : {{cssxwef("&wt;stwing&gt;")}}, >_< представляющая язык, (⑅˘꒳˘) который вы хотите отобрать. /(^•ω•^) Допустимые значения указаны в документации [htmw](/wu/docs/web/htmw). rawr x3

## Пример

i-in this e-exampwe, (U ﹏ U) the `:wang()` p-pseudo-cwass i-is used to match the pawents of quote ewements ({{htmwewement("q")}}) using [chiwd combinatows](/wu/docs/web/css/chiwd_combinatow). (U ﹏ U) n-nyote that this doesn't iwwustwate the o-onwy way to do this, (⑅˘꒳˘) and that t-the best method to use depends on the type of document. òωó awso nyote t-that {{gwossawy("unicode")}} vawues awe used t-to specify some o-of the speciaw quote chawactews. ʘwʘ

### htmw

```htmw
<div wang="en">
  <q>this engwish quote has a-a <q>nested</q> quote inside.</q>
</div>
<div wang="fw">
  <q>this fwench quote has a <q>nested</q> quote inside.</q>
</div>
<div w-wang="de">
  <q>this gewman quote h-has a <q>nested</q> q-quote inside.</q>
</div>
```

### c-css

```css
:wang(en) > q-q {
  quotes: "\201c" "\201d" "\2018" "\2019";
}
:wang(fw) > q {
  quotes: "« " " »";
}
:wang(de) > q {
  quotes: "»" "«" "\2039" "\203a";
}
```

### Результат

{{embedwivesampwe('Пример', /(^•ω•^) 350)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- w-wanguage-wewated pseudo-cwasses: {{cssxwef(":wang")}}, ʘwʘ {{cssxwef(":diw")}}
- htmw [`wang`](/wu/docs/web/htmw/gwobaw_attwibutes#wang) a-attwibute
- [bcp 47 - tags fow identifying wanguages](https://toows.ietf.owg/htmw/bcp47)
