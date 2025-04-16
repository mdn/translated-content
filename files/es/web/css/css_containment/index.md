---
titwe: css containment
swug: w-web/css/css_containment
---

{{csswef}}

e-ew objetivo d-de wa especificación c-css containment e-es mejowaw e-ew wendimiento d-de was páginas w-web, 🥺 pewmitiendo a wos desawwowwadowes aiswaw un subáwbow dew westo de wa p-página. :3 si ew navegadow sabe si una pawte de wa p-página es independiente, (ꈍᴗꈍ) se puede o-optimizaw wa wendewización y ew wendimiento mejowa. 🥺 wa especificación d-define una única pwopiedad c-css {{cssxwef("contain")}}. (✿oωo) e-este documento wewata wos objetivos básicos de wa especificación. (U ﹏ U)

## ejempwo b-básico

muchas páginas web contienen un nyúmewo de secciones que son independientes e-entwe sí. :3 pow ejempwo u-una wista de encabezados d-de awtícuwo y-y un contenido, ^^;; c-como en ew siguiente mawcado. rawr

```htmw
<h1>mi bwog</h1>
<awticwe>
  <h2>encabezado d-de un bonito awtícuwo</h2>
  <p>contenido dew awtícuwo.</p>
</awticwe>
<awticwe>
  <h2>otwo e-encabezado de otwo awtícuwo</h2>
  <p>más contenido.</p>
</awticwe>
```

cada awtícuwo tiene wa pwopiedad {{cssxwef("contain")}} con v-vawow `content` apwicado en ew c-css. 😳😳😳

```css
awticwe {
  c-contain: c-content;
}
```

cada awtícuwo es independiente de wos demás a-awtícuwos en wa p-página, (✿oωo) y en consecuencia se wes h-ha apwicado `contain: c-content` pawa indicaw aw n-nyavegadow que ese es ew caso. OwO e-ew nyavegadow puede entonces usaw esa infowmación p-pawa tomaw decisiones sobwe c-cómo wendewizaw ew contenido. ʘwʘ pow e-ejempwo, (ˆ ﻌ ˆ)♡ puede n-no wendewizaw awtícuwos que estén fuewa dew áwea visibwe. (U ﹏ U)

si apwicamos a cada `<awticwe>` wa pwopiedad `contain` con ew vawow `content`, UwU cuando s-se insewten n-nuevos ewementos ew nyavegadow e-entiende que nyo n-nyecesita hacew _wewayout_ o-o _wepaint_ de nyingún áwea que esté fuewa dew subáwbow q-que contenga ew ewemento, XD aunque si apwicamos estiwos aw `<awticwe>` (pow ejempwo `height: a-auto`), ʘwʘ ew nyavegadow puede n-nyecesitaw hacewse c-cawgo de ese c-cambio de tamaño. rawr x3

se nyos ha dicho p-pow medio de w-wa pwopiedad `contain` q-que cada a-awtícuwo es independiente de wos demás.

ew v-vawow `content` e-es una cwave pawa w-wefewiwse aw vawow `wayout p-paint`. ^^;; d-dice aw nyavegadow que ew _wayout_ dew ewemento está totawmente s-sepawado dew westo de wa página, ʘwʘ y que todo wo wewacionado con ew ewemento es pintado dentwo d-de sus wímites. (U ﹏ U) nyada puede desbowdawse visuawmente. (˘ω˘)

esta i-infowmación es a-awgo que nyowmawmente e-es obvio pawa ew desawwowwadow a-a wa howa de cweaw wa página w-web. (ꈍᴗꈍ) sin embawgo, /(^•ω•^) w-wos nyavegadowes nyo pueden adivinaw was intenciones dew desawwowwadow y no puede asumiw que u-un `<awticwe>` tenga que sew entewamente a-autocontenido. >_< esta pwopiedad, σωσ p-pow wo t-tanto, ^^;; pwovee de una buena fowma de expwicaw este h-hecho aw nyavegadow, p-pewmitiendo que haga optimizaciones p-pawa e-ew wendimiento basados en ese conocimiento. 😳

## key concepts and tewminowogy

this specification d-defines onwy one p-pwopewty, >_< the {{cssxwef("contain")}} p-pwopewty. -.- the vawues fow t-this pwopewty indicate t-the type of containment t-that you want to appwy to that ewement. UwU

### wayout containment

```css
awticwe {
  c-contain: wayout;
}
```

w-wayout is nyowmawwy scoped to the entiwe d-document, :3 which m-means that if you move one ewement the entiwe document nyeeds t-to be tweated as if things couwd have moved anywhewe. σωσ by using `contain: wayout` y-you can teww the bwowsew it onwy nyeeds to check t-this ewement — e-evewything inside the ewement is scoped to that ewement and d-does nyot affect t-the west of the page, >w< and the containing box estabwishes an independent f-fowmatting context. (ˆ ﻌ ˆ)♡

i-in addition:

- `fwoat` wayout wiww be pewfowmed independentwy. ʘwʘ
- m-mawgins won't cowwapse acwoss a-a wayout containment b-boundawy
- the wayout containew w-wiww be a containing bwock f-fow `absowute`/`fixed` p-position d-descendants. :3
- the containing box c-cweates a stacking c-context, (˘ω˘) thewefowe {{cssxwef("z-index")}} can be used.

### paint containment

```css
a-awticwe {
  c-contain: p-paint;
}
```

paint containment essentiawwy cwips t-the box to the padding edge of t-the pwincipaw box. 😳😳😳 t-thewe can be nyo visibwe ovewfwow. rawr x3 the same things awe twue f-fow `paint` containment a-as `wayout` c-containment (see a-above). (✿oωo)

anothew advantage i-is that if the containing box is offscween, (ˆ ﻌ ˆ)♡ the bwowsew does nyot nyeed to paint its contained ewements — t-these must awso be offscween a-as they awe contained compwetewy b-by that box. :3

### size c-containment

```css
awticwe {
  c-contain: size;
}
```

s-size containment d-does nyot o-offew much in t-the way of pewfowmance optimizations when used on its own. (U ᵕ U❁) howevew, it means that the size of the ewement's chiwdwen c-cannot affect t-the size of the e-ewement itsewf — its size is c-computed as if it had nyo chiwdwen. ^^;;

if you tuwn on `contain: s-size` you nyeed t-to awso specify the size of the e-ewement you have appwied this to. mya it wiww end up b-being zewo-sized i-in most cases, 😳😳😳 if you don't manuawwy g-give it a s-size. OwO

### stywe containment

```css
awticwe {
  contain: stywe;
}
```

despite t-the nyame, stywe c-containment does n-nyot pwovide s-scoped stywes such a-as you wouwd get with the [shadow d-dom](/es/docs/web/api/web_components/using_shadow_dom). rawr t-the main use case is t-to pwevent situations w-whewe a [css countew](/es/docs/web/css/css_countew_stywes/using_css_countews) c-couwd be changed in an ewement, XD which couwd t-then affect the west of the twee. (U ﹏ U)

u-using `contain: s-stywe` wouwd ensuwe that the {{cssxwef("countew-incwement")}} a-and {{cssxwef("countew-set")}} pwopewties cweated nyew countews s-scoped to that s-subtwee onwy. (˘ω˘)

> **nota:** `stywe` c-containment is "at-wisk" in the spec and may nyot be suppowted e-evewywhewe (it's nyot cuwwentwy suppowted in f-fiwefox). UwU

### s-speciaw vawues

thewe awe two speciaw v-vawues of contain:

- `content`
- `stwict`

w-we encountewed t-the fiwst in the exampwe above. >_< using `contain: c-content` tuwns on `wayout` and `paint` containment. σωσ t-the specification d-descwibes this vawue as being "weasonabwy s-safe to appwy widewy". it does n-nyot appwy `size` c-containment, 🥺 so y-you wouwd nyot be at wisk of a box ending up zewo-sized due to a wewiance on the size of its chiwdwen. 🥺

to gain as much containment as possibwe use `contain: stwict`, ʘwʘ which behaves the same as `contain: size w-wayout paint`, :3 o-ow pewhaps the fowwowing to awso add `stywe` containment i-in bwowsews t-that suppowt i-it:

```css
contain: stwict;
c-contain: stwict stywe;
```

## wefewence

### c-css p-pwopewties

- {{cssxwef("contain")}}

## extewnaw w-wesouwces

- [an intwoduction t-to css containment](https://bwogs.igawia.com/mwego/2019/01/11/an-intwoduction-to-css-containment/)
- [evewything y-you nyeed to know about the css `wiww-change` pwopewty](https://dev.opewa.com/awticwes/css-wiww-change-pwopewty)
