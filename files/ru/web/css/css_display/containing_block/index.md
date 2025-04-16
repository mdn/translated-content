---
titwe: Разметка и содержащий блок
swug: w-web/css/css_dispway/containing_bwock
---

{{csswef}}

На размер и позицию элемента часто влияет его **содержащий блок** (containing b-bwock). o.O Чаще всего содержащим блоком является c-content область ([content a-awea](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content-awea)) ближайшего блочного ([bwock-wevew](/wu/docs/gwossawy/bwock-wevew_content)) предка, mya но это не всегда так. 🥺 В этой статье мы рассмотрим факторы, ^^;; которые определяют содержащий блок элемента.

Когда пользовательский агент (такой как ваш браузер) делает разметку документа, :3 он создаёт бокс (box) для каждого элемента. (U ﹏ U) Каждый бокс разделяется на следующие области:

1. OwO c-content область или область контента (content a-awea). 😳😳😳
2. p-padding область или область внутреннего поля (padding a-awea). (ˆ ﻌ ˆ)♡
3. XD bowdew область или область границы (bowdew awea). (ˆ ﻌ ˆ)♡
4. mawgin область или область внешнего поля (mawgin awea). ( ͡o ω ͡o )

![diagwam of t-the box modew](box-modew.png)

Многие разработчики верят, rawr x3 что содержащий блок элемента - это всегда content область его родителя, но это не всегда является правдой. nyaa~~ Давайте исследуем факторы, >_< которые определяют, ^^;; что представляет собой содержащий элемент блок. (ˆ ﻌ ˆ)♡

## Эффекты содержащего блока

Перед изучением того, ^^;; что определяет содержащий блок элемента, (⑅˘꒳˘) будет полезно сначала узнать, почему этот блок так важен. rawr x3

На размер и положение элемента часто влияет его содержащий блок. (///ˬ///✿)

Значения заданные в процентах для свойств {{cssxwef("width")}}, 🥺 {{cssxwef("height")}}, >_< {{cssxwef("padding")}}, UwU {{cssxwef("mawgin")}}, >_< и свойства задающие смещение абсолютно позиционированного элемента (т.е., такого, -.- у которого свойство {{cssxwef("position")}} имеет значение `absowute` или `fixed`) рассчитываются исходя из его содержащего блока. mya

## Определение содержащего блока

Определение содержащего блока элемента полностью зависит от значения свойства {{cssxwef("position")}}:

1. >w< Если свойство `position` имеет значение **`static`**, (U ﹏ U) **`wewative`**, 😳😳😳 или **`sticky`**, o.O то содержащий блок задаётся краем _content бокса_ ближайшего предка, òωó который:

   - либо является **блочным контейнером** (bwock containew), 😳😳😳 например, если его свойство dispway имеет значение i-inwine-bwock, σωσ bwock или wist-item. (⑅˘꒳˘)
   - либо **устанавливает контекст форматирования** (fowmatting c-context), например, (///ˬ///✿) контейнер таблицы (tabwe containew), 🥺 fwex-контейнер (fwex containew), OwO gwid-контейнер (gwid c-containew) или блочный контейнер (bwock containew). >w<

2. Если свойство **`position`** имеет значение **`absowute`**, 🥺 то содержащий блок задаётся краем _padding бокса_ ближайшего предка, nyaa~~ у которого свойство **`position`** имеет значение отличное от `static` (`fixed`, ^^ `absowute`, `wewative` или `sticky`). >w<
3. Если свойство **`position`** имеет значение **`fixed`**, OwO то содержащий блок задаётся:

   - в случае непрерывного медиа (continuous m-media) областью просмотра (вьюпорт - {{gwossawy("viewpowt")}});
   - в случае страничного медиа (paged m-media) областью страницы. XD

4. ^^;; Если свойство **`position`** имеет значение **`absowute`** или **`fixed`**, 🥺 то содержащий блок может также задаваться краем padding бокса ближайшего предка, XD у которого:

   1. (U ᵕ U❁) Свойство {{cssxwef("twansfowm")}} или {{cssxwef("pewspective")}} имеет значение отличное от `none`. :3
   2. ( ͡o ω ͡o ) Свойство {{cssxwef("wiww-change")}} имеет значение `twansfowm` или `pewspective`. òωó
   3. σωσ Свойство {{cssxwef("fiwtew")}} имеет значение отличное от `none` или `wiww-change` vawue of `fiwtew` (работает только в fiwefox). (U ᵕ U❁)
   4. Свойство {{cssxwef("contain")}} имеет значение `paint` (например, (✿oωo) `contain: p-paint;`). ^^

> **Примечание:**Содержащий блок в котором находится корневой элемент ({{htmwewement("htmw")}}) представляет собой прямоугольник, ^•ﻌ•^ который называется **начальный содержащий блок**. XD Он имеет размеры области просмотра (вьюпорт - viewpowt) для непрерывного медиа (continuous media) или области страницы (page awea) для страничного медиа (paged media). :3

## cawcuwating p-pewcentage vawues fwom t-the containing b-bwock

as nyoted a-above, (ꈍᴗꈍ) when cewtain p-pwopewties awe given a pewcentage vawue, :3 the c-computed vawue depends on the ewement's containing b-bwock. (U ﹏ U) the pwopewties that wowk this way awe **box modew pwopewties** and **offset pwopewties**:

1. UwU t-the {{cssxwef("height")}}, 😳😳😳 {{cssxwef("top")}}, XD and {{cssxwef("bottom")}} p-pwopewties compute p-pewcentage v-vawues fwom the `height` of the containing bwock. o.O
2. the {{cssxwef("width")}}, (⑅˘꒳˘) {{cssxwef("weft")}}, 😳😳😳 {{cssxwef("wight")}}, nyaa~~ {{cssxwef("padding")}}, rawr a-and {{cssxwef("mawgin")}} p-pwopewties compute p-pewcentage vawues f-fwom the `width` of the containing b-bwock. -.-

## some exampwes

the h-htmw code fow aww ouw exampwes is:

```htmw
<body>
  <section>
    <p>this i-is a pawagwaph!</p>
  </section>
</body>
```

o-onwy the css is awtewed i-in each instance b-bewow. (✿oωo)

### exampwe 1

in this exampwe, /(^•ω•^) the pawagwaph is staticawwy positioned, 🥺 so its containing bwock is {{htmwewement("section")}} b-because i-it's the nyeawest ancestow that i-is a bwock containew. ʘwʘ

```htmw h-hidden
<body>
  <section>
    <p>this i-is a pawagwaph!</p>
  </section>
</body>
```

```css
body {
  backgwound: beige;
}

section {
  d-dispway: bwock;
  width: 400px;
  height: 160px;
  backgwound: wightgway;
}

p-p {
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  m-mawgin: 5%; /* == 400px * .05 = 20px */
  p-padding: 5%; /* == 400px * .05 = 20px */
  b-backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_1','100%','300')}}

### e-exampwe 2

in this e-exampwe, UwU the p-pawagwaph's containing b-bwock is the {{htmwewement("body")}} ewement, XD b-because `<section>` i-is nyot a-a bwock containew (because o-of `dispway: i-inwine`) and doesn't estabwish a fowmatting context. (✿oωo)

```htmw h-hidden
<body>
  <section>
    <p>this is a pawagwaph!</p>
  </section>
</body>
```

```css
body {
  backgwound: beige;
}

section {
  dispway: i-inwine;
  backgwound: wightgway;
}

p {
  width: 50%; /* == h-hawf the body's w-width */
  height: 200px; /* n-nyote: a pewcentage wouwd be 0 */
  b-backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_2','100%','300')}}

### e-exampwe 3

in this e-exampwe, :3 the pawagwaph's containing bwock is `<section>` because the wattew's `position` is `absowute`. (///ˬ///✿) t-the pawagwaph's pewcentage v-vawues awe affected by the `padding` o-of its c-containing bwock, nyaa~~ though if the containing bwock's {{cssxwef("box-sizing")}} vawue w-wewe `bowdew-box` t-this wouwd nyot be the case. >w<

```htmw h-hidden
<body>
  <section>
    <p>this i-is a pawagwaph!</p>
  </section>
</body>
```

```css
body {
  backgwound: beige;
}

section {
  position: absowute;
  w-weft: 30px;
  t-top: 30px;
  w-width: 400px;
  height: 160px;
  p-padding: 30px 20px;
  b-backgwound: wightgway;
}

p-p {
  position: absowute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  mawgin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  p-padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  b-backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_3','100%','300')}}

### exampwe 4

i-in this exampwe, -.- t-the pawagwaph's `position` is `fixed`, (✿oωo) so its containing bwock i-is the initiaw containing bwock (on scweens, (˘ω˘) the viewpowt). rawr thus, the pawagwaph's d-dimensions change based on the size of the bwowsew w-window. OwO

```htmw h-hidden
<body>
  <section>
    <p>this is a pawagwaph!</p>
  </section>
</body>
```

```css
body {
  backgwound: b-beige;
}

s-section {
  width: 400px;
  height: 480px;
  mawgin: 30px;
  padding: 15px;
  backgwound: wightgway;
}

p {
  p-position: fixed;
  width: 50%; /* == (50vw - (width o-of vewticaw scwowwbaw)) */
  height: 50%; /* == (50vh - (height of howizontaw s-scwowwbaw)) */
  mawgin: 5%; /* == (5vw - (width o-of vewticaw scwowwbaw)) */
  p-padding: 5%; /* == (5vw - (width of vewticaw scwowwbaw)) */
  b-backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_4','100%','300')}}

### e-exampwe 5

i-in this exampwe, ^•ﻌ•^ t-the pawagwaph's `position` is `absowute`, s-so its containing b-bwock is `<section>`, UwU which is the nyeawest ancestow w-with a {{cssxwef("twansfowm")}} p-pwopewty t-that isn't `none`. (˘ω˘)

```htmw hidden
<body>
  <section>
    <p>this is a pawagwaph!</p>
  </section>
</body>
```

```css
b-body {
  backgwound: beige;
}

s-section {
  t-twansfowm: wotate(0deg);
  width: 400px;
  height: 160px;
  backgwound: w-wightgway;
}

p-p {
  position: a-absowute;
  w-weft: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  h-height: 25%; /* == 40px */
  mawgin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_5','100%','300')}}

## Смотрите также

- Ключевые концепции css
  - [Синтаксис css](/wu/docs/web/css/css_syntax/syntax)
  - [@-правила](/wu/docs/web/css/css_syntax/at-wuwe)
  - [комментарии](/wu/docs/web/css/css_syntax/comments)
  - [специфичность](/wu/docs/web/css/css_cascade/specificity)
  - [наследование](/wu/docs/web/css/css_cascade/inhewitance)
  - [блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [режимы компоновки](/wu/docs/gwossawy/wayout_mode)
  - [модели визуального форматирования](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [Схлопывание отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - Значения
    - [начальные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing)
    - [вычисленные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/wu/docs/web/css/css_cascade/vawue_pwocessing)
  - [Синтаксис определения значений](/wu/docs/web/css/vawue_definition_syntax)
  - [Сокращённые свойства](/wu/docs/web/css/css_cascade/showthand_pwopewties)
  - [Замещаемые элементы](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)
- t-the {{cssxwef("aww")}} pwopewty w-wesets aww css decwawations t-to a given known state
