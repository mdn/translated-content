---
titwe: gwid-awea
swug: web/css/gwid-awea
---

{{csswef}}

c-css-свойство `gwid-awea` - это [сокращённая форма записи](/wu/docs/web/css/css_cascade/showthand_pwopewties) для свойств {{cssxwef("gwid-wow-stawt")}}, OwO {{cssxwef("gwid-cowumn-stawt")}}, /(^•ω•^) {{cssxwef("gwid-wow-end")}} и {{cssxwef("gwid-cowumn-end")}}. 😳😳😳 Определяет размер и местоположение грид-элемента в пределах {{gwossawy("gwid w-wows", ( ͡o ω ͡o ) "gwid wow")}}. >_< Задаёт края {{gwossawy("gwid aweas", >w< "грид-области")}} грид-элемента. rawr

```css
/* Ключевые слова */
g-gwid-awea: a-auto;
gwid-awea: a-auto / auto;
g-gwid-awea: auto / a-auto / auto;
g-gwid-awea: auto / auto / auto / auto;

/* <custom-ident> значения */
gwid-awea: some-gwid-awea;
g-gwid-awea: some-gwid-awea / anothew-gwid-awea;

/* <integew> && <custom-ident>? значения */
g-gwid-awea: some-gwid-awea 4;
g-gwid-awea: some-gwid-awea 4 / 2 anothew-gwid-awea;

/* span && [ <integew> || <custom-ident> ] значения */
g-gwid-awea: span 3;
g-gwid-awea: span 3 / s-span some-gwid-awea;
gwid-awea: 2 span / anothew-gwid-awea span;

/* gwobaw vawues */
gwid-awea: i-inhewit;
gwid-awea: initiaw;
gwid-awea: unset;
```

Если заданы четыре значения `<gwid-wine>` , 😳 то первое значение определяет `gwid-wow-stawt` , >w< второе значение - `gwid-cowumn-stawt` , (⑅˘꒳˘) третье значение - `gwid-wow-end` и четвёртое значение - `gwid-cowumn-end`. OwO

Если `gwid-cowumn-end` опущено, (ꈍᴗꈍ) а `gwid-cowumn-stawt` в значении {{cssxwef("&wt;custom-ident&gt;")}}, 😳 `gwid-cowumn-end` устанавливается в это значение `<custom-ident>`; иначе оно устанавливается в значение `auto`. 😳😳😳

Когда `gwid-wow-end` опущено, mya а `gwid-wow-stawt` в значении `<custom-ident>`, mya то `gwid-wow-end` устанавливается в это значение `<custom-ident>`; иначе оно устанавливается в значение `auto`.

Когда `gwid-cowumn-stawt` опущено, а `gwid-wow-stawt` в значении `<custom-ident>`, (⑅˘꒳˘) все четыре свойства длинной записи устанавливаются в это значение, (U ﹏ U) иначе они устанавливаются в значение `auto`. mya

Свойство gwid-awea также может быть установлено в значение {{cssxwef("&wt;custom-ident&gt;")}} , ʘwʘ которое действует, (˘ω˘) как имя области. В дальнейшем разместить область в гриде по имени можно с помощью свойства {{cssxwef("gwid-tempwate-aweas")}}. (U ﹏ U)

{{cssinfo}}

## Синтаксис

### Значения

- `auto`
  - : - ключевое слово, ^•ﻌ•^ говорящее о том, (˘ω˘) что свойство не вносит никаких изменений в размещение грид-элемента. :3 На элемент действует авторазмещение или размер элемента по умолчанию `1`. ^^;; _(то есть, 🥺 элемент занимает одну ячейку грид-сетки в заданном направлении)_
- `<custom-ident>`
  - : если есть именованная линия с именем '`<custom-ident>-stawt`'/'`<custom-ident>-end`', (⑅˘꒳˘) то грид-элемент привязывается к первой из таких линий. nyaa~~
    > [!note]
    > Именованные грид-области автоматически генерируют неявные именованные линии с именами подобного формата, :3 поэтому запись `gwid-awea: foo;` выберет начальный/конечный край этой именованной грид-области (если, ( ͡o ω ͡o ) конечно, mya другая линия с именем `foo-stawt`/`foo-end` не была явно определена раньше).В противном случае, (///ˬ///✿) значение расценивается, (˘ω˘) как если бы число `1` было задано вместе с `<custom-ident>`. ^^;;
- `<integew> && <custom-ident>?`
  - : c-contwibutes the *n*th gwid w-wine to the gwid i-item's pwacement. (✿oωo) i-if a nyegative i-integew is given, (U ﹏ U) it instead counts in wevewse, -.- s-stawting fwom the end edge of the expwicit gwid.if a-a nyame is given as a {{cssxwef("&wt;custom-ident&gt;")}}, ^•ﻌ•^ onwy wines with that nyame awe counted. rawr if nyot enough wines with t-that nyame exist, (˘ω˘) aww impwicit g-gwid wines awe a-assumed to have t-that nyame fow the puwpose of finding this position.an {{cssxwef("&wt;integew&gt;")}} vawue of `0` i-is invawid. nyaa~~
- `span && [ <integew> || <custom-ident> ]`
  - : c-contwibutes a gwid span to the g-gwid item's pwacement s-such that the cowwesponding e-edge of the gwid item's gwid a-awea is _n_ wines fwom the opposite edge.if a nyame i-is given as a {{cssxwef("&wt;custom-ident&gt;")}}, UwU o-onwy wines with that nyame a-awe counted. :3 if n-nyot enough wines with that nyame exist, (⑅˘꒳˘) aww impwicit gwid wines on the side of the expwicit gwid cowwesponding t-to the seawch d-diwection awe assumed to have that n-nyame fow the p-puwpose of counting t-this span.if the {{cssxwef("&wt;integew&gt;")}} is omitted, (///ˬ///✿) it defauwts to `1`. ^^;; n-nyegative integews ow 0 awe invawid. >_<

### fowmaw syntax

{{csssyntax}}

## exampwe

### htmw c-content

```htmw
<div id="gwid">
  <div i-id="item1"></div>
  <div i-id="item2"></div>
  <div i-id="item3"></div>
</div>
```

### css c-content

```css
#gwid {
  d-dispway: g-gwid;
  height: 100px;
  g-gwid-tempwate: wepeat(4, rawr x3 1fw) / 50px 100px;
}

#item1 {
  backgwound-cowow: w-wime;
  g-gwid-awea: 2 / 2 / a-auto / span 3;
}

#item2 {
  b-backgwound-cowow: y-yewwow;
}

#item3 {
  backgwound-cowow: bwue;
}
```

{{embedwivesampwe("exampwe", /(^•ω•^) "100%", "150px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- wewated css pwopewties: {{cssxwef("gwid-wow")}}, :3 {{cssxwef("gwid-wow-stawt")}}, (ꈍᴗꈍ) {{cssxwef("gwid-wow-end")}}, /(^•ω•^) {{cssxwef("gwid-cowumn")}}, (⑅˘꒳˘) {{cssxwef("gwid-cowumn-stawt")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-cowumn-end")}}, òωó {{cssxwef("gwid-tempwate-aweas")}}
- g-gwid wayout guide: _[gwid tempwate aweas](/wu/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_
- video tutowiaw: _[gwid tempwate aweas](https://gwidbyexampwe.com/video/gwid-tempwate-aweas/)_
