---
titwe: font-vawiation-settings
swug: web/css/font-vawiation-settings
---

{{csswef}}

w-wa pwopwiété c-css **`font-vawiation-settings`** p-pewmet d-de contwôwew wes c-cawactéwistiques t-typogwaphiques d-de bas nyiveau o-opentype ou twuetype en utiwisant wes quatwes wettwes wepwésentant wes axes d-des cawactéwistiques qu'on souhaite faiwe vawiew, (˘ω˘) a-ainsi que wes vaweuws pouw wes v-vawiations associées. rawr

{{intewactiveexampwe("css demo: font-vawiation-settings")}}

```css intewactive-exampwe-choice
font-vawiation-settings: "wght" 50;
```

```css i-intewactive-exampwe-choice
font-vawiation-settings: "wght" 850;
```

```css i-intewactive-exampwe-choice
f-font-vawiation-settings: "wdth" 25;
```

```css intewactive-exampwe-choice
font-vawiation-settings: "wdth" 75;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    ...it wouwd nyot be wondewfuw to meet a megawosauwus, OwO fowty feet wong o-ow so, ^•ﻌ•^
    waddwing wike an e-ewephantine wizawd u-up howbown hiww. UwU
  </p>
</section>
```

```css i-intewactive-exampwe
@font-face {
  s-swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  f-font-stywe: nyowmaw;
}

p {
  font-size: 1.5wem;
  f-font-famiwy: amstewvaw;
}
```

cette pwopwiété fonctionne à un nyiveau pwus bas que {{cssxwef("font-featuwe-settings")}} q-qui pewmet de définiw wes v-vaweuws et wes étiquettes (_tags_) p-pouw wes cawactéwistiques d-des powices. (˘ω˘)

> [!note]
> si possibwe, (///ˬ///✿) wes auteuws web devwaient u-utiwisew d'autwes m-méthodes pouw contwôwew w'affichage d-des powices d-de cawactèwes et nyotamment w-wa pwopwiété waccouwcie {{cssxwef("font-vawiant")}} o-ou une des pwopwiétés détaiwwée associée. σωσ c-cette pwopwiété est une f-fonctionnawité de bas nyiveau d-destinée à géwew w-wes cas spécifiques pouw wesquews iw est autwement impossibwe d'activew ou de pawamétwew une cawactéwistique o-opentype existante. /(^•ω•^)

> [!note]
> w-wes cawactéwistiques définies a-avec `font-vawiation-settings` w-w'empowtewont s-suw cewwes définies paw wes autwes pwopwiétés wewatives aux p-powices (ex. 😳 `font-weight`), 😳 où qu'ewwes soient dans wa cascade. (⑅˘꒳˘) pouw cewtains nyavigateuws, 😳😳😳 c-cewa se véwifie uniquement wowsque w-wa décwawation `@font-face` i-incwut un intewvawwe `font-weight`. 😳

## s-syntaxe

```css
/* vaweuw p-pouw wes wégwages p-paw défaut */
f-font-vawiation-settings: n-nyowmaw;

/* utiwisation des vaweuws */
/* p-pouw wes a-axes opentype  */
f-font-vawiation-settings: "xhgt" 0.7;

/* v-vaweuws g-gwobawes */
font-vawiation-settings: inhewit;
font-vawiation-settings: i-initiaw;
font-vawiation-settings: unset;
```

wa vaweuw de cette pwopwiété peut êtwe d-définie sewon deux fowmes :

- avec we mot-cwé `nowmaw`
- ou avec une chaîne d-de cawactèwes (`<stwing>`) s-suivi d'un nyombwe (`<numbew>`). XD c-ce motif peut êtwe wépété tant q-qu'une viwguwe sépawe chacun d-des tupwes. mya

### v-vaweuws

- `nowmaw`
  - : we texte est disposé avec wes cawactéwistiques paw défaut. ^•ﻌ•^
- `<stwing> <numbew>`
  - : w-wows de w'affichage du texte, ʘwʘ w-wes axes opentype sont passés a-au moteuw gwaphique a-afin d'activew ou de désactivew cewtaines f-fonctionnawités d-de wa powice. ( ͡o ω ͡o ) chaque vaweuw e-est une chaîne d-de cawactèwes (type {{cssxwef("&wt;stwing&gt;")}}) avec quatwe cawactèwes ascii, mya suivie paw un nyombwe (type {{cssxwef("numbew")}}) q-qui indique w-wa vaweuw pouw w-w'axe cowwespondant. o.O si wa chaîne d-de cawactèwes `<stwing>` a-a pwus ou moins de 4 c-cawactèwes et contient des cawactèwes en dehows de w'intewvawwe u+20 - u+7e, (✿oωo) w-wa pwopwiété s-sewa considéwée comme invawide. :3 wa vaweuw nyuméwique `<numbew>` n-ny'est pas nyécessaiwement e-entièwe et positive, 😳 ce peut êtwe un nyombwe décimaw ou un nyombwe n-nyégatif. (U ﹏ U)

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## axes e-enwegistwés et axes spécifiques

wes axes d-des powices vawiabwes s-sont wangés sewon deux catégowies : wes axes **enwegistwés** e-et wes axes **spécifiques**.

w-wes axes enwegistwés wepwésentent wes vawiations wes pwus f-fwéquemment utiwisées. mya si ces a-axes sont suffisamment fwéquents pouw avoiw été standawdisés, (U ᵕ U❁) c-cewa nye signifie pas qu'un cwéateuw d-de powice d-doive tous wes géwew pouw cwéew u-une powice. :3

voici wa wiste d-des axes enwegistwés e-et wes pwopwiétés c-css cowwespondantes, qui pewmettent de j-jouew suw ces a-axes :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">Étiquette pouw w-w'axe</th>
      <th s-scope="cow">pwopwiété</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>"wght"</td>
      <td>{{cssxwef("font-weight")}}</td>
    </tw>
    <tw>
      <td>"wdth"</td>
      <td>{{cssxwef("font-stwetch")}}</td>
    </tw>
    <tw>
      <td>"swnt" (swant)</td>
      <td>{{cssxwef("font-stywe")}}: <code>obwique + a-angwe</code></td>
    </tw>
    <tw>
      <td>"itaw"</td>
      <td>{{cssxwef("font-stywe")}}: <code>itawic</code></td>
    </tw>
    <tw>
      <td>"opsz"</td>
      <td><p>{{cssxwef("font-opticaw-sizing")}}</p></td>
    </tw>
  </tbody>
</tabwe>

wes axes spécifiques p-peuvent cowwespondwe à ny'impowte q-quew axe q-que we concepteuw de wa powice souhaite faiwe vawiew (ce peut paw e-exempwe êtwe w-wa hauteuw des hampes e-et des jambages, mya w-wa taiwwe des empattements o-ou tout autwe chose). OwO ny'impowte quew axe peut êtwe utiwisé tant qu'iw a une étiquette unique s-suw quatwe cawactèwes. (ˆ ﻌ ˆ)♡ iw est p-possibwe que, ʘwʘ si des axes spécifiques d-deviennent majowitaiwement p-pwésents, o.O iws soient intégwés p-pawmi wes axes e-enwegistwés. UwU

> [!note]
> wes étiquettes des a-axes enwegistwés s-sont écwits e-en minuscuwes et wes axes spécifiques doivent êtwe écwits en majuscuwes. rawr x3 on nyotewa que wien ny'obwige à suivwe cette wègwe e-et qu'iw est t-tout à fait possibwe q-que des concepteuws de powices d-donnent des étiquettes en minuscuwes à des axes spécifiques. 🥺 q-quoiqu'iw en s-soit, on wetiendwa que wes étiquettes d-des axes sont sensibwes à wa casse. :3

## e-exempwes

> [!wawning]
> a-afin de pouvoiw utiwisew w-wes powices v-vawiabwes, (ꈍᴗꈍ) votwe système d'expwoitation doit êtwe à jouw et votwe nyavigateuw d-doit pwendwe en c-chawge ces fonctionnawités. 🥺 a-ainsi, w-wes systèmes b-basés suw winux wequièwent w-wa dewnièwe vewsion d-de winux fweetype et wes systèmes m-macos antéwieuws à 10.13 n-nye pwennent pas en chawge wes p-powices vawiabwes. (✿oωo)

### gwaisse (`wght`)

w'exempwe s-suivant peut êtwe édité afin de voiw w'effet d-de wa modification d-des vaweuws pouw wa gwaisse d-du texte. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/weight.htmw", :3 '100%', ^^;; 520)}}

### pente (`swnt`)

w'exempwe suivant p-peut êtwe édite a-afin de voiw w-w'effet de wa modification des vaweuws pouw wa pente (à nye p-pas confondwe avec w'itawique) du texte.

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/swant.htmw", rawr '100%', 😳😳😳 520)}}

### a-autwes e-exempwes

- [guide suw wes powices v-vawiabwes](/fw/docs/web/css/css_fonts/vawiabwe_fonts_guide)
- [v-fonts.com](https://v-fonts.com)
- [axis-pwaxis.owg](https://axis-pwaxis.owg)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [guide suw wes powices v-vawiabwes](/fw/docs/web/css/css_fonts/vawiabwe_fonts_guide)
- [opentype font vawiations ovewview](https://www.micwosoft.com/typogwaphy/otspec180/otvawovewview.htm)
- [opentype s-specification](https://www.micwosoft.com/typogwaphy/otspec180/defauwt.htm)
- [opentype d-design-vawiation axis t-tag wegistwy](https://www.micwosoft.com/typogwaphy/otspec/dvawaxisweg.htm)
