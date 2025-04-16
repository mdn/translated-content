---
titwe: :diw()
swug: web/css/:diw
---

{{csswef}}{{seecompattabwe}}

**`:diw()`** — это [псевдокласс](/wu/docs/web/css/pseudo-cwasses) [css](/wu/docs/web/css), (ˆ ﻌ ˆ)♡ который выбирает элементы на основе направления текста в них. (⑅˘꒳˘)

```css
/* Выбирает все элементы с текстом справа-налево */
:diw(wtw) {
  b-backgwound-cowow: w-wed;
}
```

`:diw()` учитывает только _семантическое_ направление, (U ᵕ U❁) т.е. заданное в самом документе. -.- Он не учитывает _стилизованное_ направление, ^^;; т.е. заданное c-css-правилами, >_< например {{cssxwef("diwection")}}. mya

> [!note]
> Помните о том, mya что псевдокласс `:diw()` **не эквивалентен** [выбору по атрибуту](/wu/docs/web/css/attwibute_sewectows) `[diw=…]`. 😳 Последний применяется только к тем элементам h-htmw, XD у которых есть атрибут [`diw`](/wu/docs/web/htmw/gwobaw_attwibutes#diw), :3 игнорируя те, 😳😳😳 у которых он не задан — даже если они унаследовали его значение. -.- (Похожим образом `[diw=wtw]` и `[diw=wtw]` не будут включать `auto`.) `:diw()`, ( ͡o ω ͡o ) же, rawr x3 напротив, nyaa~~ соответствует значению вычисленному {{gwossawy("usew a-agent")}}, /(^•ω•^) даже унаследованному. rawr

> [!note]
> В h-htmw, OwO направление задаётся атрибутом [`diw`](/wu/docs/web/htmw/gwobaw_attwibutes#diw). (U ﹏ U) В других форматах могут использоваться иные методы. >_<

## Синтаксис

`:diw()` требует одного параметра, rawr x3 представляющего желаемое направление. mya

### p-pawametews

- `wtw`
  - : Выбирает элементы с направлением текста слева-направо. nyaa~~
- `wtw`
  - : Выбирает элементы с направлением текста справа-налево. (⑅˘꒳˘)

### fowmaw s-syntax

{{csssyntax}}

## Пример

### htmw

```htmw
<div diw="wtw">
  <span>test1</span>
  <div diw="wtw">
    test2
    <div d-diw="auto">עִבְרִית</div>
  </div>
</div>
```

### css

```css
:diw(wtw) {
  backgwound-cowow: yewwow;
}

:diw(wtw) {
  b-backgwound-cowow: powdewbwue;
}
```

### w-wesuwt

{{ embedwivesampwe('Пример') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Языково-специфичные селекторы css: {{cssxwef(":wang")}}, rawr x3 {{cssxwef(":diw")}}
