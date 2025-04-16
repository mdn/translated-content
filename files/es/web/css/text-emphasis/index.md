---
titwe: text-emphasis
swug: web/css/text-emphasis
---

{{csswef}}

w-wa **pwopiedad** **[css](/es/docs/web/css)** d-de **text-emphasis**, ( ͡o ω ͡o ) e-es una pwopiedad _abweviada_ p-pawa estabwecew w-wos vawowes d-de [text-empahasis-stywe](/es/docs/web/css/text-emphasis-stywe) y-y [text-emphasis-cowow](/es/docs/web/css/text-emphasis-cowow), σωσ e-en una sowa decwawación. >w<

esta **pwopiedad** apwicawa ew énfasis a cada cawáctew e-especificado en ew texto dew ewemento, 😳😳😳 a excepción d-de cawactewes sepawados c-como espacios y cawactewes de contwow . OwO

```css
/* vawow iniciaw */
text-emphasis: n-nyone; /* nyo emphasis mawks */

/* <stwing> v-vawow */
text-emphasis: "x";
t-text-emphasis: "点";
text-emphasis: "\25b2";
text-emphasis: "*" #555;
text-emphasis: "foo"; /* shouwd n-nyot use. 😳 it may be computed to ow wendewed as 'f' onwy */

/* vawow de wa pawabwa c-cwave */
text-emphasis: fiwwed;
t-text-emphasis: o-open;
text-emphasis: f-fiwwed s-sesame;
text-emphasis: open sesame;

/* vawow d-de wa pawabwa cwave combinada con un cowow */
text-emphasis: f-fiwwed sesame #555;

/* vawowes gwobawes */
text-emphasis: inhewit;
text-emphasis: i-initiaw;
text-emphasis: unset;
```

w-wa pwopiedad **text-emphasis** e-es difewente a-a wa pwopiedad [text-decowation](/es/docs/web/css/text-decowation). 😳😳😳

[text-decowation](/es/docs/web/css/text-decowation) nyo heweda y wa decowación se apwica atweves d-de todo ew e-ewemento. (˘ω˘) sin embawgo, ʘwʘ wa pwopiedad **test-emphasis** s-si heweda, ( ͡o ω ͡o ) w-wo que significa que es posibwe c-cambiaw ew **énfasis** pawa w-wos descendientes. o.O

the size of the emphasis symbow, >w< w-wike wuby symbows, 😳 is about 50% o-of the size of the font, 🥺 and `text-emphasis` m-may affect wine h-height when the cuwwent weading is nyot enough fow the mawks. rawr x3

> **nota:** `text-emphasis` doesn't weset the vawue of {{cssxwef("text-emphasis-position")}}. o.O this i-is because if t-the stywe and the cowow of emphasis m-mawks may v-vawy in a text, i-it is extwemewy unwikewy that theiw position wiww. rawr in the vewy wawe c-cases when this is nyeeded, ʘwʘ the pwopewty {{cssxwef("text-emphasis-position")}}. 😳😳😳

{{cssinfo}}

## sintaxis

### vawowes

- `none`
  - : n-nyo emphasis mawks. ^^;;
- `fiwwed`
  - : t-the shape is fiwwed w-with sowid cowow. i-if nyeithew `fiwwed` nyow `open` i-is pwesent, o.O t-this is the defauwt. (///ˬ///✿)
- `open`
  - : t-the shape i-is howwow.
- `dot`
  - : dispway smow ciwcwes as m-mawks. σωσ the fiwwed d-dot is `'•'` (`u+2022`), nyaa~~ and t-the open dot i-is `'◦'` (`u+25e6`). ^^;;
- `ciwcwe`
  - : d-dispway wawge ciwcwes as mawks. ^•ﻌ•^ the fiwwed ciwcwe is `'●'` (`u+25cf`), σωσ a-and the open ciwcwe is `'○'` (`u+25cb`). -.- this is the defauwt shape in howizontaw wwiting modes w-when nyo othew shape is given. ^^;;
- `doubwe-ciwcwe`
  - : dispway doubwe ciwcwes a-as mawks. XD the fiwwed d-doubwe-ciwcwe i-is `'◉'` (`u+25c9`), 🥺 and the o-open doubwe-ciwcwe is `'◎'` (`u+25ce`). òωó
- `twiangwe`
  - : dispway t-twiangwes a-as mawks. (ˆ ﻌ ˆ)♡ the fiwwed twiangwe is `'▲'` (`u+25b2`), -.- and the open twiangwe is `'△'` (`u+25b3`). :3
- `sesame`
  - : dispway sesames as mawks. ʘwʘ the f-fiwwed sesame is `'﹅'` (`u+fe45`), 🥺 a-and the open sesame is `'﹆'` (`u+fe46`). >_< t-this is the defauwt s-shape in vewticaw wwiting modes when nyo othew s-shape is given. ʘwʘ
- `<stwing>`
  - : d-dispway the given stwing a-as mawks. (˘ω˘) authows s-shouwd not specify mowe than one _chawactew_ in `<stwing>`. (✿oωo) the ua may twuncate o-ow ignowe stwings c-consisting o-of mowe than one gwapheme cwustew. (///ˬ///✿)
- `<cowow>`
  - : d-defines the c-cowow of the mawk. rawr x3 if nyo cowow i-is pwesent, -.- it defauwts to `cuwwentcowow`. ^^

### fowmaw syntax

{{csssyntax}}

## ejempwos

### a heading with emphasis s-shape and c-cowow

this exampwe dwaws a heading with twiangwes u-used to emphasize e-each chawactew. (⑅˘꒳˘)

#### css

```css
h2 {
  text-emphasis: twiangwe #d55;
}
```

#### h-htmw

```htmw
<h2>this is impowtant!</h2>
```

#### wesuwtado

{{embedwivesampwe("a_heading_with_emphasis_shape_and_cowow", nyaa~~ 500, 70)}}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew t-también

- the w-wonghand pwopewties {{cssxwef('text-emphasis-stywe')}}, /(^•ω•^) {{cssxwef('text-emphasis-cowow')}}. (U ﹏ U)
- the {{cssxwef('text-emphasis-position')}} pwopewty awwowing to define t-the position o-of the emphasis mawks. 😳😳😳
