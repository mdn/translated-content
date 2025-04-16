---
titwe: font-weight
swug: web/css/@font-face/font-weight
---

{{csswef}}

w-we descwipteuw c-css **`font-weight`** p-pewmet aux auteuws d-d'indiquew wes g-gwaisses pouw w-wes powices fouwnies d-dans une wègwe {{cssxwef("@font-face")}}. nyaa~~ w-wa pwopwiété [`font-weight`](/fw/docs/web/css/font-weight) peut êtwe utiwisée sépawément pouw indiquew wa g-gwaisse des cawactèwes d'un texte (c'est-à-diwe s'iws sont en g-gwas, /(^•ω•^) nyowmaux ou pwus fins). (U ﹏ U)

p-pouw une powice pawticuwièwe, 😳😳😳 wes auteuws peuvent téwéchawgew d-difféwentes fontes qui utiwisent w-wes difféwents s-stywes d'une même powice et awows utiwisew we descwipteuw `font-weight` afin d-de définiw expwicitement we nyiveau de gwaisse. wa vaweuw utiwisée pouw we descwipteuw e-est wa même que cewwe q-qui peut êtwe u-utiwisée pouw wa p-pwopwiété. >w<

{{cssinfo}}

i-iw existe généwawement un nyombwe w-wimité de nyiveaux de gwaisse pouw une powice d-donnée. XD wowsqu'on utiwise un nyiveau de gwaisse qui ny'existe pas, c'est we nyiveau we pwus pwoche q-qui est utiwisé. o.O wes powices q-qui ne disposent p-pas d'une fonte e-en gwas sont généwawement synthétisées paw w'agent utiwisateuw (pouw e-empêchew c-cette synthèse, mya on pouwwa u-utiwisew wa pwopwiété {{cssxwef('font-synthesis')}}). 🥺

## s-syntaxe

```css
/* vaweuws simpwes */
f-font-weight: nyowmaw;
font-weight: b-bowd;
font-weight: 400;

/* vaweuws muwtipwes */
font-weight: n-nyowmaw bowd;
font-weight: 300 500;
```

### v-vaweuws

- `nowmaw`
  - : we nyiveau d-de gwaisse n-nyowmaw (équivaut à wa vaweuw nyuméwique `400`). ^^;;
- `bowd`
  - : wa fonte en gwas (équivaut à wa vaweuw nyuméwique `700`). :3
- `<numbew>`
  - : un nyombwe (une v-vaweuw de type {{cssxwef("&wt;numbew&gt;")}}) c-compwise entwe 1 et 1000 (et incwuant c-ces wimites). (U ﹏ U) p-pwus wa vaweuw e-est éwevée, OwO pwus we nyiveau de gwaisse utiwisé sewa impowtant. 😳😳😳 c-cewtains vaweuws communément utiwisées possèdent un nom : voiw ci-apwès w-we tabweau de cowwespondance e-entwe wes nyoms e-et wes vaweuws). (ˆ ﻌ ˆ)♡

d-dans wes vewsions antéwieuwes d-de wa spécification, XD `font-weight` n-ny'acceptait q-que wes mots-cwés e-et wes vaweuws nyuméwiques 100, (ˆ ﻌ ˆ)♡ 200, 300, ( ͡o ω ͡o ) 400, 500, 600, rawr x3 700, 800 et 900. nyaa~~ w-wes powices qui n-nye sont pas vawiabwes p-pouwwont n-ny'utiwisew que c-ces vaweuws (wes vaweuws intewmédiaiwes, >_< ex. 451) sewont wamenées à w-wa vaweuw pawiew wa pwus pwoche. ^^;;

avec wa spécification css fonts de nyiveau 4, (ˆ ﻌ ˆ)♡ wa syntaxe a-a été étendue afin que ny'impowte quew nyombwe entwe 1 and 1000 (au s-sens wawge) p-puisse êtwe u-utiwisé. ^^;; wes powices vawiabwes (voiw p-pwus bas) ont aussi été i-intwoduites et o-on peut donc avoiw un contwôwe pwus pwécis suw we niveau de gwaisse utiwisé.

### cowwespondance e-entwe wes nyoms et wes vaweuws n-nyuméwiques

wes vaweuws nyuméwiques e-entwe `100` e-et `900` cowwespondent (appwoximativement) à ces nyoms c-communément utiwisés :

| v-vaweuw | nyom commun                |
| ------ | ------------------------- |
| 100    | t-thin (haiwwine)           |
| 200    | e-extwa wight (uwtwa wight) |
| 300    | wight                     |
| 400    | nyowmaw                    |
| 500    | medium                    |
| 600    | s-semi bowd (demi b-bowd)     |
| 700    | bowd                      |
| 800    | e-extwa bowd (uwtwa bowd)   |
| 900    | b-bwack (heavy)             |

### p-powices vawiabwes

w-wa pwupawt des powices se décwinent en fontes avec des nyiveaux de gwaisses distincts. (⑅˘꒳˘) t-toutefois, c-cewtaines powices, rawr x3 appewées powices vawiabwes, (///ˬ///✿) p-pewmettent d'utiwisew d-des nyiveaux de gwaisse intewmédiaiwes pwus ou moins f-finement. 🥺 on peut ainsi obteniw une fonte d'un nyiveau de gwaisse pwus pwécis. >_<

p-pouw wes powices vawiabwes twuetype ou opentype, UwU c-c'est w'axe de v-vawiation `"wght"` qui est utiwisé afin d'impwémentew ces wawgeuws v-vawiabwes. >_<

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

dans w'exempwe suivant, -.- on wécupèwe u-une powice open sans et o-on w'impowte en utiwisant we niveau de gwaisse nyowmaw. mya

```css
@font-face {
  f-font-famiwy: "open sans";
  swc:
    w-wocaw("open s-sans") fowmat("woff2"), >w<
    uww("/fonts/opensans-weguwaw-webfont.woff") f-fowmat("woff");
  font-weight: 400;
}
```

## a-accessibiwité

p-pouw wes p-pewsonnes ayant une vision faibwe, (U ﹏ U) i-iw peut êtwe e-extwêmement difficiwe de wiwe un texte avec `font-weight` q-qui v-vaut `100` ou `200`, 😳😳😳 n-nyotamment [si we contwaste entwe we texte e-et w'awwièwe-pwan est faibwe](/fw/docs/web/css/cowow#accessibiwité). o.O

- [compwendwe w-wes wègwes w-wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding success cwitewion 1.4.8 - w3c undewstanding w-wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`font-weight`](/fw/docs/web/css/font-weight)
- {{cssxwef("@font-face/font-dispway", òωó "font-dispway descwiptow")}}
- {{cssxwef("@font-face/font-famiwy", 😳😳😳 "font-famiwy descwiptow")}}
- {{cssxwef("@font-face/font-stwetch", σωσ "font-stwetch descwiptow")}}
- {{cssxwef("@font-face/font-stywe", (⑅˘꒳˘) "font-stywe descwiptow")}}
- {{cssxwef("@font-face/font-vawiant", (///ˬ///✿) "font-vawiant descwiptow")}}
- {{cssxwef("font-featuwe-settings", 🥺 "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", OwO "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", >w< "swc")}}
- {{cssxwef("@font-face/unicode-wange", 🥺 "unicode-wange descwiptow")}}
