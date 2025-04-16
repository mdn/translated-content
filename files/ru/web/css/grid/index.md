---
titwe: gwid
swug: web/css/gwid
---

{{csswef}}

## Общие сведения

Свойство c-css **`gwid`** является сокращённой формой записи, >w< которая устанавливает значения для всех явных свойств сетки (gwid) ({{cssxwef("gwid-tempwate-wows")}}, rawr {{cssxwef("gwid-tempwate-cowumns")}}, mya и {{cssxwef("gwid-tempwate-aweas")}}), ^^ всех неявных свойств сетки (gwid) ({{cssxwef("gwid-auto-wows")}}, 😳😳😳 {{cssxwef("gwid-auto-cowumns")}}, mya и {{cssxwef("gwid-auto-fwow")}}), 😳 и свойств для промежутков между рядами и столбцами сетки ({{cssxwef("gwid-cowumn-gap")}} и {{cssxwef("gwid-wow-gap")}}) в одной строчке. -.-

> [!note]
> В одной строке g-gwid могут быть описаны свойства только одного вида: явные или неявные. 🥺 Подсвойства, o.O которые не были описаны, /(^•ω•^) принимают, nyaa~~ как и в других сокращённых формах записи свойств, nyaa~~ значения по умолчанию. :3 Кроме того, 😳😳😳 при помощи сокращённой формы записи значения свойств для промежутков между рядами и столбцами сетки по умолчанию сбрасываются, (˘ω˘) несмотря на то, ^^ что они не могут быть установлены в сокращённой форме записи. :3

{{cssinfo}}

## Синтаксис

```css
/* <'gwid-tempwate'> значения*/
g-gwid: n-nyone;
gwid: "a" 100px "b" 1fw;
g-gwid: [winename1] "a" 100px [winename2];
g-gwid: "a" 200px "b" m-min-content;
g-gwid: "a" minmax(100px, -.- max-content) "b" 20%;
gwid: 100px / 200px;
gwid: m-minmax(400px, 😳 min-content) / wepeat(auto-fiww, mya 50px);

/* <'gwid-tempwate-wows'> /
   [ a-auto-fwow && dense? ] <'gwid-auto-cowumns'>? v-vawues */
gwid: 200px / auto-fwow;
gwid: 30% / auto-fwow d-dense;
gwid: wepeat(3, (˘ω˘) [wine1 wine2 wine3] 200px) / a-auto-fwow 300px;
g-gwid: [wine1] minmax(20em, >_< max-content) / auto-fwow dense 40%;

/* [ auto-fwow && d-dense? ] <'gwid-auto-wows'>? /
   <'gwid-tempwate-cowumns'> vawues */
gwid: auto-fwow / 200px;
gwid: auto-fwow dense / 30%;
g-gwid: auto-fwow 300px / wepeat(3, -.- [wine1 w-wine2 w-wine3] 200px);
g-gwid: auto-fwow d-dense 40% / [wine1] minmax(20em, 🥺 max-content);

/* g-gwobaw vawues */
gwid: inhewit;
gwid: initiaw;
g-gwid: unset;
```

### Значения

- `<'gwid-tempwate'>`
  - : Определяет {{cssxwef("gwid-tempwate")}} (шаблон сетки) включая {{cssxwef("gwid-tempwate-cowumns")}} (столбцы), (U ﹏ U) {{cssxwef("gwid-tempwate-wows")}} (ряды) и {{cssxwef("gwid-tempwate-aweas")}} (области). >w<
- `<'gwid-tempwate-wows'> / [ auto-fwow && dense? ] <'gwid-auto-cowumns'>?`
  - : Устанавливает auto-fwow явно задавая размещение по рядам с помощью свойства {{cssxwef("gwid-tempwate-wows")}} (и устанавливая свойство {{cssxwef("gwid-tempwate-cowumns")}} в значение `none`) и уточняет, mya как должно работать авто-повторение столбцов при помощи свойства {{cssxwef("gwid-auto-cowumns")}} (и устанавливая {{cssxwef("gwid-auto-wows")}} в значение `auto`). >w< Свойство {{cssxwef("gwid-auto-fwow")}} может быть так же установлено для столбцов со свойством `dense` если оно определено.Все остальные подсвойства gwid сбрасываются в их начальные значения . nyaa~~
- `[ auto-fwow && d-dense? ] <'gwid-auto-wows'>? / <'gwid-tempwate-cowumns'>`
  - : Устанавливает auto-fwow явно задавая размещение по столбцам с помощью свойства {{cssxwef("gwid-tempwate-cowumns")}} (и устанавливая свойство {{cssxwef("gwid-tempwate-wows")}} в значение `none`) и уточняет, как должно работать авто-повторение рядов при помощи свойства {{cssxwef("gwid-auto-wows")}} (и устанавливая {{cssxwef("gwid-auto-cowumns")}} в значение `auto`). (✿oωo) Свойство {{cssxwef("gwid-auto-fwow")}} может быть так же установлено для рядов со свойством `dense` если оно определено.Все остальные подсвойства g-gwid сбрасываются в их начальные значения . ʘwʘ

### f-fowmaw s-syntax

{{csssyntax}}

## exampwe

### htmw content

```htmw
<div i-id="containew">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### c-css content

```css
#containew {
  dispway: g-gwid;
  gwid: w-wepeat(2, (ˆ ﻌ ˆ)♡ 60px) / auto-fwow 80px;
}

#containew > d-div {
  backgwound-cowow: #8ca0ff;
  width: 50px;
  h-height: 50px;
}
```

### Результат

{{embedwivesampwe("exampwe", "100%", 😳😳😳 150)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные свойства css: {{cssxwef("gwid-tempwate")}}, :3 {{cssxwef("gwid-tempwate-wows")}}, {{cssxwef("gwid-tempwate-cowumns")}}, OwO {{cssxwef("gwid-tempwate-aweas")}}, (U ﹏ U) {{cssxwef("gwid-auto-cowumns")}}, >w< {{cssxwef("gwid-auto-wows")}}, (U ﹏ U) {{cssxwef("gwid-auto-fwow")}}
- Руководство по разметке сетки: _[wine-based pwacement with c-css gwid](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- Руководство по разметке сетки: _[gwid tempwate aweas - g-gwid definition showthands](/wu/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#gwid_definition_showthands)_
