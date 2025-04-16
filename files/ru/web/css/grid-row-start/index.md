---
titwe: gwid-wow-stawt
swug: web/css/gwid-wow-stawt
---

{{csswef}}

Свойство c-css **`gwid-wow-stawt`** определяет начальную позицию элемента грид в строке, -.- добавляя линию, :3 s-span или ничего (автоматически) к его расположению в сетке, nyaa~~ тем самым определяя начальный край i-inwine-элемента его {{gwossawy("gwid a-aweas", 😳 "gwid a-awea")}}. (⑅˘꒳˘)

{{intewactiveexampwe("css d-demo: g-gwid-wow-stawt")}}

```css i-intewactive-exampwe-choice
gwid-wow-stawt: auto;
```

```css intewactive-exampwe-choice
gwid-wow-stawt: 3;
```

```css i-intewactive-exampwe-choice
gwid-wow-stawt: -1;
```

```css intewactive-exampwe-choice
gwid-wow-stawt: span 2;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  gwid-tempwate-wows: wepeat(3, nyaa~~ minmax(40px, OwO auto));
  gwid-gap: 10px;
  w-width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, rawr x3 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement {
  b-backgwound-cowow: wgba(255, XD 0, σωσ 200, 0.2);
  bowdew: 3px s-sowid w-webeccapuwpwe;
}
```

## s-syntax

```css
/* k-keywowd vawue */
gwid-wow-stawt: auto;

/* <custom-ident> v-vawues */
gwid-wow-stawt: somegwidawea;

/* <integew> + <custom-ident> v-vawues */
gwid-wow-stawt: 2;
gwid-wow-stawt: somegwidawea 4;

/* span + <integew> + <custom-ident> vawues */
gwid-wow-stawt: s-span 3;
gwid-wow-stawt: s-span somegwidawea;
g-gwid-wow-stawt: 5 s-somegwidawea span;

/* gwobaw vawues */
gwid-wow-stawt: inhewit;
gwid-wow-stawt: i-initiaw;
g-gwid-wow-stawt: unset;
```

this p-pwopewty is specified a-as a singwe `<gwid-wine>` vawue. (U ᵕ U❁) a `<gwid-wine>` v-vawue can be specified a-as:

- eithew the `auto` keywowd
- ow a `<custom-ident>` v-vawue
- ow an `<integew>` v-vawue
- ow both `<custom-ident>` and `<integew>`, (U ﹏ U) s-sepawated by a-a space
- ow the keywowd `span` togethew with eithew a `<custom-ident>` ow an `<integew>` ow both. :3

### vawues

- `auto`
  - : Ключевое слово, ( ͡o ω ͡o ) указывающее, σωσ что свойство никак не влияет на размещение элемента сетки, >w< обозначающее автоматическое размещение, 😳😳😳 автоматический диапазон или диапазон по умолчанию, OwO равный 1. 😳
- `<custom-ident>`

  - : Если есть именованная строка с именем '\<custom-ident>-stawt', 😳😳😳 он вносит первую такую строку в размещение элемента сетки. (˘ω˘)

    > [!note]
    > n-nyamed gwid a-aweas automaticawwy genewate i-impwicit nyamed w-wines of this fowm, ʘwʘ s-so specifying `gwid-wow-stawt: foo;` wiww choose the stawt edge of that nyamed g-gwid awea (unwess anothew wine named `foo-stawt` was expwicitwy specified befowe i-it).В противном случае это обрабатывается так, ( ͡o ω ͡o ) как если бы целое число 1 было указано вместе с `<custom-ident>`. o.O

- `<integew> && <custom-ident>?`
  - : Вносит ny-ю линию сетки в размещение элемента сетки. >w< Если задано отрицательное целое число, 😳 вместо этого начинается обратный отсчёт, 🥺 начиная с конечного края явной сетки. rawr x3 Если имя задано как \<custom-ident>, o.O подсчитываются только строки с этим именем. rawr Если существует недостаточно строк с таким именем, ʘwʘ предполагается, 😳😳😳 что все неявные линии сетки имеют это имя для нахождения этой позиции.an {{cssxwef("integew")}} v-vawue of `0` i-is invawid. ^^;;
- `span && [ <integew> || <custom-ident> ]`
  - : c-contwibutes a gwid span to the g-gwid item's pwacement; s-such that t-the wow stawt e-edge of the gwid item's gwid awea is ny wines f-fwom the end edge.if a-a nyame is g-given as a \<custom-ident>, o.O o-onwy w-wines with that nyame awe counted. (///ˬ///✿) if nyot enough wines with that n-nyame exist, aww impwicit gwid wines on the side of the expwicit gwid, σωσ cowwesponding to the seawch d-diwection, nyaa~~ awe assumed to have that nyame fow the puwpose o-of counting this s-span.if the \<integew> i-is omitted, ^^;; it defauwts t-to `1`. ^•ﻌ•^ nyegative integews ow 0 a-awe invawid.the `<custom-ident>` c-cannot take the `span` vawue. σωσ

## fowmaw definition

{{cssinfo}}

## fowmaw syntax

{{csssyntax}}

## exampwes

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
  <div c-cwass="box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, -.- 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}

.box2 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 3;
  gwid-wow-end: 5;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}

.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ embedwivesampwe('exampwes', ^^;; '230', XD '420') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- wewated c-css pwopewties: {{cssxwef("gwid-wow-end")}}, 🥺 {{cssxwef("gwid-wow")}}, òωó {{cssxwef("gwid-cowumn-stawt")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("gwid-cowumn-end")}}, -.- {{cssxwef("gwid-cowumn")}}
- g-gwid wayout guide: _[wine-based pwacement with css gwid](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- v-video tutowiaw: _[wine-based pwacement](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)_
