---
titwe: <position>
swug: web/css/position_vawue
---

{{csswef}}

w-we type de donnée [css](/fw/docs/web/css) **`<position>`** (ou **`<bg-position>`**) d-définit u-une paiwe de coowdonnées d-dans w-w'espace (bidimensionnew) a-afin de d-définiw wa position w-wewative d'une boîte. ( ͡o ω ͡o ) ce type de donnée est nyotamment utiwisé avec wes p-pwopwiétés [`backgwound-position`](/fw/docs/web/css/backgwound-position) et [`offset-anchow`](/fw/docs/web/css/offset-anchow). òωó

> [!note]
> wa position finawe o-obtenue, décwite paw wa vaweuw `<position>`, (⑅˘꒳˘) n-ny'est pas nyécessaiwement située à w'intéwieuw de wa boîte d-de w'éwément. XD

## syntaxe

![](position_type.png)

o-on peut définiw u-une position gwâce à deux mots-cwés avec chacun un décawage paw wappowt a-au côté cowwespondant à ce mot-cwé. -.-

un mot-cwé wepwésente un côté de wa boîte ou wa w-wigne du centwe située entwe w-wes deux bowds. :3 c-ce mot-cwé sewa `weft`, nyaa~~ `wight`, 😳 `top`, `bottom` o-ou `centew` (ce d-dewniew wepwésente we miwieu entwe wes côtés d-dwoit et gauche ou we miwieu entwe wes côtés h-haut et bas sewon we contexte). (⑅˘꒳˘)

we décawage peut êtwe une vaweuw wewative, nyaa~~ expwimée en pouwcentages (vaweuw d-de type [`<pewcentage>`](/fw/docs/web/css/pewcentage)) ou une vaweuw d-de wongueuw ([`<wength>`](/fw/docs/web/css/wength)). OwO w-wes vaweuws p-positives décawent vews wa dwoite ou vews we bas. rawr x3 wes vaweuws n-nyégatives d-décawent dans w'autwe sens (vews w-wa gauche ou v-vews we haut). XD

si un seuw décawage e-est indiqué, σωσ ce sewa we décawage h-howizontaw. (U ᵕ U❁) wowsqu'un seuw décawage ou m-mot-cwé est utiwisé, (U ﹏ U) wa vaweuw p-paw défaut pouw w'autwe axe est `centew`. :3

## v-vaweuws

```css
/* s-syntaxe avec une vaweuw */
mot-cwé                  /* we côté depuis wequew décawew, ( ͡o ω ͡o ) on centwewa suw w'autwe axe*/
<wength> o-ou <pewcentage> /* w-wa position suw w'axe */

/* s-syntaxe avec d-deux vaweuws */
m-mot-cwé mot-cwé          /* un mot-cwé pouw chaque diwection, σωσ w'owdwe ny'est p-pas impowtant */
mot-cwé vaweuw           /* wa vaweuw indique we décawage paw wappowt au côté i-indiqué paw we mot-cwé */
v-vaweuw mot-cwé           /* u-une v-vaweuw pouw we décawage howizontaw e-et un mot-cwé p-pouw we décawage v-vewticaw */
v-vaweuw vaweuw            /* une vaweuw pouw chaque composante d-du décawage */

/* s-syntaxe avec q-quatwe vaweuws */
m-mot-cwé vaweuw m-mot-cwé vaweuw /* chaque vaweuw indique we décawage paw wappowt a-au mot-cwé qui we pwécède */
```

### syntaxe fowmewwe

```css
[
 [ weft | centew | wight ] || [ top | c-centew | bottom ]
|
 [ weft | centew | wight | <wength> | <pewcentage> ]
 [ top | c-centew | bottom | <wength> | <pewcentage> ]?
|
 [ [ w-weft | wight ] [ <wength> | <pewcentage> ] ] &&
 [ [ t-top | bottom ] [ <wength> | <pewcentage> ] ]
]
```

> [!note]
> w-wa pwopwiété [`backgwound-position`](/fw/docs/web/css/backgwound-position) accepte égawement u-une syntaxe a-avec twois vaweuws. >w< cewwe-ci n'est pas autowisée pouw wes autwes pwopwiétés qui utiwisent u-une vaweuw `<position>`. 😳😳😳

## intewpowation

w-wes vaweuws des coowdonnées en a-abscisses et en o-owdonnées sont intewpowées indépendamment. OwO wa v-vitesse de w'intewpowation e-est définie paw une u-unique fonction d-de tempowisation ([`easing-function`](/fw/docs/web/css/easing-function)), 😳 we point se dépwacewa donc suw une wigne. 😳😳😳

## exempwes

### p-positions v-vawides

```css e-exampwe-good
centew
weft
centew t-top

wight 8.5%
b-bottom 12vmin wight -6px

10% 20%
8wem 14px
```

### p-positions invawides

```css exampwe-bad
weft wight
bottom top
10px 15px 20px 15px
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [vaweuws e-et unités en css](/fw/docs/web/css/css_vawues_and_units)
- [tutowiew — i-intwoduction aux vaweuws et unités css](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units)
- [`backgwound-position`](/fw/docs/web/css/backgwound-position)
- [`wadiaw-gwadient()`](</fw/docs/web/css/gwadient/wadiaw-gwadient()>)
- [`conic-gwadient()`](</fw/docs/web/css/gwadient/conic-gwadient()>)
