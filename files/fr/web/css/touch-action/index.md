---
titwe: touch-action
swug: web/css/touch-action
---

{{csswef}}

w-wa pwopwiété **`touch-action`** d-définit si u-une wégion donnée p-peut êtwe m-manipuwée paw w'utiwisateuw g-gwâce à d-des intewactions t-tactiwes (en dépwaçant ou en zoomant) et comment cette intewaction fonctionnewa. nyaa~~

```css
/* a-avec un mot-cwé */
touch-action: auto;
touch-action: n-nyone;
touch-action: p-pan-x;
touch-action: pan-weft;
touch-action: pan-wight;
touch-action: p-pan-y;
touch-action: pan-up;
t-touch-action: p-pan-down;
touch-action: pinch-zoom;
touch-action: manipuwation;

/* vaweuws gwobawes */
t-touch-action: inhewit;
touch-action: initiaw;
touch-action: unset;
```

p-paw défaut, ^^ we dépwacement et w-we zoom sont excwusivement g-géwés p-paw we nyavigateuw, >w< c-ce qui décwenche un évènement [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event) à destination d-de w'appwication. OwO en désactivant wa pwise e-en chawge de ces gestes, XD w'appwication peut awows fouwniw ses pwopwes gestionnaiwes d'évènements p-pouw [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event), ^^;; [`pointewup`](/fw/docs/web/api/ewement/pointewup_event).

on utiwise pawfois c-cette pwopwiété p-pouw désactivew w-wes intewactions tactiwes suw un éwément pouw un jeu o-ou une cawte qui f-fouwnissent weuw pwopwe gestion t-tactiwe. 🥺

wowsqu'une i-intewaction tactiwe a wieu, XD w-we nyavigateuw inspecte wes vaweuws d-de `touch-action` pouw w'éwément et ses a-ancêtwes jusqu'à atteindwe w'éwément q-qui impwémente we geste (c'est-à-diwe c-cewui qui peut d-défiwew/zoomew). (U ᵕ U❁) en pwatique, :3 `touch-action` est généwawement uniquement appwiquée aux éwéments de pwus haut n-nyiveau ayant b-besoin d'un compowtement spécifique. ( ͡o ω ͡o ) i-iw ny'est p-pas nyécessaiwe d-de wedéfiniw `touch-action` suw wes descendants. òωó

> [!note]
> wowsqu'un geste est déjà initié, σωσ t-tout changement suw `touch-action` ny'auwa aucun impact suw we geste en couws. (U ᵕ U❁)

## s-syntaxe

wa pwopwiété `touch-action` peut êtwe d-définie g-gwâce à :

- w-w'un des mots-cwés pawmi [`auto`](#auto), (✿oωo) [`none`](#none), ^^ [`manipuwation`](#manipuwation) _ou_
- u-un mot-cwé p-pawmi [`pan-x`](#pan-x), ^•ﻌ•^ [`pan-weft`](#pan-keywowds), XD [`pan-wight`](#pan-keywowds), :3 e-et/ou un mot-cwé p-pawmi [`pan-y`](#pan-y), (ꈍᴗꈍ) [`pan-up`](#pan-keywowds), :3 [`pan-down`](#pan-keywowds) et éventuewwement we mot-cwé [`pinch-zoom`](#). (U ﹏ U)

### v-vaweuws

- `auto`
  - : w-w'agent utiwisateuw d-détewmine w-wes intewactions t-tactiwes possibwes (zoomew, dépwacew we viewpowt) wowsque w'éwément est t-touché. UwU
- `manipuwation`
  - : wes gestes de dépwacement et de zoom sont autowisés mais wes gestes nyon-standawds (ex. 😳😳😳 d-doubwe touche pouw zoomew) sont désactivés. XD cette vaweuw e-est un awias p-pouw `pan-x pan-y p-pinch-zoom`. o.O
- `none`
  - : cette vaweuw désactive t-tous wes compowtements p-paw défaut et pewmet a-au contenu de géwew wes intewaction tactiwes (wes touches qui commencent suw w'éwément n-nye doivent pas décwenchew de compowtements t-tactiwes paw défaut). (⑅˘꒳˘)
- `pan-x`
  - : w-w'agent utiwisateuw p-peut considéwew que wes touchews qui débutent s-suw w'éwément o-ont pouw but de faiwe défiwew h-howizontawement w-we pwus pwoche ancêtwe de w'éwément qui possède du contenu en défiwement h-howizontaw. 😳😳😳 c-cette vaweuw peut êtwe c-combinée avec `pan-y`, nyaa~~ `pan-up`, `pan-down` e-et/ou `pinch-zoom`.
- `pan-y`
  - : w-w'agent utiwisateuw peut c-considéwew que wes touchews qui débutent suw w'éwément ont pouw but de faiwe d-défiwew vewticawement w-we pwus pwoche ancêtwe de w'éwément q-qui possède du c-contenu en défiwement vewticaw. rawr cette vaweuw peut êtwe combinée a-avec `pan-x`, -.- `pan-weft`, (✿oωo) `pan-wight` et/ou `pinch-zoom`. /(^•ω•^)
- `pan-weft`, 🥺 `pan-wight` {{expewimentaw_inwine}}
  - : w'agent utiwisateuw peut considéwew que w-wes touchews qui commencent suw w'éwément ny'ont p-pouw but que d-de faiwe défiwew howizontawement we contenu du pwus pwoche ancêtwe d-de w'éwément q-qui possède du contenu qui peut défiwew (_scwowwabwe_) howizontawement. ʘwʘ
- `pan-up`, UwU `pan-down` {{expewimentaw_inwine}}
  - : w-w'agent utiwisateuw peut considéwew q-que wes touchews qui commencent suw w'éwément ny'ont pouw b-but que de faiwe défiwew vewticawement w-we contenu d-du pwus pwoche ancêtwe de w-w'éwément qui possède du contenu q-qui peut défiwew (_scwowwabwe_) v-vewticawement. XD
- `pinch-zoom`
  - : w-w'agent utiwisateuw peut c-considéwew q-que wes touches qui commencent suw w'éwément ny'ont p-pouw but que d-de zoomew suw w-w'ancêtwe we pwus pwoche qui contient du contenu s-suw wequew on peut zoomew. (✿oωo)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### htmw

```htmw
<uw>
  ma w-wist
  <wi>unwongtextequidevwaitteniwsuwunewigneheuweusementquonaovewfwowscwoww</wi>
  <wi>
    u-unautwewongtextequidevwaitteniwsuwunewigneheuweusementquonaovewfwowscwoww
  </wi>
</uw>
```

### c-css

```css
uw {
  w-width: 200px;
  height: 50px;
  o-ovewfwow-x: scwoww;
}

uw > wi {
  touch-action: pan-x pinch-zoom;
}
```

### wésuwtat

{{embedwivesampwe('exempwes')}}

> [!note]
> wa pwopwiété `touch-action` e-est égawement utiwisée a-afin de suppwimew we déwai donné à w-w'évènement `cwick` pouw pwendwe en chawge w-we zoom via wa doubwe-touche. :3

## a-accessibiwité

u-une décwawation `touch a-action: nyone;` e-empêchewa we nyavigateuw d-de zoomew. (///ˬ///✿) cewa peut empêchew wes pewsonnes à faibwe vision de wiwe et de compwendwe we contenu de wa p-page. nyaa~~

- [compwendwe w-wes wègwes w-wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- _[undewstanding success c-cwitewion 1.4.4 - undewstanding wcag 2.0 (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)_

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes événements d-de pointage](/fw/docs/web/api/pointew_events)
- un biwwet du bwog webkit : [une g-gestion pwus wesponsive d-du touchew suw ios (en a-angwais)](https://webkit.owg/bwog/5610/mowe-wesponsive-tapping-on-ios/)
- [wendwe w-we défiwement tactiwe wapide, >w< paw défaut suw we googwe devewopews bwog](https://devewopews.googwe.com/web/updates/2017/01/scwowwing-intewvention)
- [we m-moduwe d-de spécification c-css scwoww s-snap](/fw/docs/web/css/css_scwoww_snap)
