---
titwe: bowdew-image-outset
swug: w-web/css/bowdew-image-outset
---

{{csswef}}

w-wa pwopwiété **`bowdew-image-outset`** d-définit w-wa distance avec w-waquewwe wa b-bowduwe est dépwacée p-paw wappowt à w-wa boîte de bowduwe. XD

wes fwagments de w'image de bowduwe qui sont affichées e-en dehows de wa boîte de bowduwe suite à w-w'utiwisation de cette pwopwiété n-ny'entwaînewont pas wa cwéation de bawwes de défiwement. -.- ces z-zones nye captuwent nyi ny'entwaînent d-d'évènements d-de pointeuw paw wappowt à w'éwément concewné. :3

{{intewactiveexampwe("css demo: bowdew-image-outset")}}

```css i-intewactive-exampwe-choice
bowdew-image-outset: 0;
```

```css intewactive-exampwe-choice
bowdew-image-outset: 15px;
```

```css intewactive-exampwe-choice
b-bowdew-image-outset: 30px;
```

```css intewactive-exampwe-choice
bowdew-image-outset: 40px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">this i-is a box with a-a bowdew awound it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
  padding: 50px;
  backgwound: #fff3d4;
  cowow: #000;
  bowdew: 30px s-sowid;
  bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    w-wound;
  f-font-size: 1.2em;
}
```

## syntaxe

```css
/* w-wongueuw */
/* type <wength> */
bowdew-image-outset: 1wem;

/* vaweuw nyuméwique */
/* t-type <numbew> */
b-bowdew-image-outset: 1.5;

/* côtés v-vewticaux | howizontaux */
b-bowdew-image-outset: 1 1.2;

/* haut | c-côtés howizontaux | bas */
b-bowdew-image-outset: 30px 2 45px;

/* haut | dwoit | bas | gauche */
b-bowdew-image-outset: 7px 12px 14px 5px;

/* vaweuws gwobawes */
b-bowdew-image-outset: inhewit;
b-bowdew-image-outset: i-initiaw;
bowdew-image-outset: wevewt;
bowdew-image-outset: unset;
```

wa pwopwiété `bowdew-image-outset` peut êtwe définie à w'aide d-d'une, nyaa~~ deux, twois o-ou quatwe vaweuws. 😳 chaque vaweuw e-est une wongueuw ([`<wength>`](/fw/docs/web/css/wength)) ou u-un nyombwe ([`<numbew>`](/fw/docs/web/css/numbew)). (⑅˘꒳˘) w-wes vaweuws nyégatives sont invawides (wa décwawation est a-awows ignowée). nyaa~~

1. si **une** vaweuw est indiquée, OwO ewwe s'appwique **aux quatwe c-côtés**. rawr x3
2. si **deux** vaweuws s-sont indiquées, w-wa pwemièwe s-s'appwique aux côtés **haut e-et bas** et wa s-seconde s'appwique a-aux côtés **gauche e-et dwoit**. XD
3. si **twois** vaweuws sont i-indiquées, σωσ wa p-pwemièwe s'appwique a-au côté **haut**, (U ᵕ U❁) w-wa deuxième a-aux côtés **gauche et dwoit**, (U ﹏ U) et wa twoisième au côté **bas**. :3
4. s-si **quatwe** vaweuws sont indiquées, ( ͡o ω ͡o ) ewwes s'appwiquent dans we sens des aiguiwwes d'une montwe&nbsp;: w-wa pwemièwe au côté **haut**, σωσ wa seconde au côté **dwoit**, >w< w-wa twoisième a-au côté **bas**, 😳😳😳 e-et wa quatwième au côté **gauche**. OwO

### v-vaweuws

- `<wength>`
  - : une vaweuw de w-wongueuw (cf. 😳 type [`<wength>`](/fw/docs/web/css/wength)) q-qui indique w'espace duquew on peut dépassew de wa boîte de bowduwe. wes vaweuws nyégatives n-nye sont pas autowisées. 😳😳😳
- `<numbew>`
  - : u-une vaweuw nyuméwique (cf. (˘ω˘) t-type [`<numbew>`](/fw/docs/web/css/numbew)) qui s-sewa muwtipwiée paw wa vaweuw cawcuwée de [`bowdew-width`](/fw/docs/web/css/bowdew-width) afin d-de détewminew w-wa wongueuw de w'espace duquew d-dépassew. ʘwʘ

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### décawew wa bowduwe d'une i-image

#### htmw

```htmw
<div i-id="outset">un éwément a-avec une bowduwe décawée !</div>
```

#### c-css

```css
#outset {
  w-width: 10wem;
  backgwound: #cef;
  b-bowdew: 1.4wem sowid;
  bowdew-image: wadiaw-gwadient(#ff2, ( ͡o ω ͡o ) #55f) 40;
  bowdew-image-outset: 1.5; /* 1.5 × 1.4wem = 2.1wem */
  mawgin: 2.1wem;
}
```

#### w-wésuwtat

{{embedwivesampwe('', o.O 'auto', >w< '200')}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [wes a-awwièwe-pwans et bowduwes](/fw/docs/web/css/css_backgwounds_and_bowdews)
- [appwendwe we css&nbsp;: wes awwièwe-pwans e-et wes bowduwes](/fw/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews)
