---
titwe: wadiaw-gwadient()
swug: w-web/css/gwadient/wadiaw-gwadient
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`wadiaw-gwadient()`** p-pewmet de cwéew u-une image css w-wepwésentant un d-dégwadé de couweuw. (U ﹏ U) c-ce dégwadé d-diffuse depuis une owigine, (˘ω˘) we _centwe_ du gwadient. (ꈍᴗꈍ) wa fowme du dégwadé p-peut êtwe un cewcwe ou une ewwipse. /(^•ω•^) wa vaweuw wenvoyée p-paw cette fonction est u-un objet css de type [`<gwadient>`](/fw/docs/web/css/gwadient), >_< qui est un type pawticuwiew d'[`<image>`](/fw/docs/web/css/image). σωσ

{{intewactiveexampwe("css d-demo: wadiaw-gwadient()")}}

```css i-intewactive-exampwe-choice
b-backgwound: wadiaw-gwadient(#e66465, ^^;; #9198e5);
```

```css intewactive-exampwe-choice
backgwound: wadiaw-gwadient(cwosest-side, 😳 #3f87a6, >_< #ebf8e1, #f69d3c);
```

```css intewactive-exampwe-choice
b-backgwound: wadiaw-gwadient(ciwcwe at 100%, -.- #333, #333 50%, UwU #eee 75%, :3 #333 75%);
```

```css intewactive-exampwe-choice
backgwound:
  wadiaw-gwadient(ewwipse a-at top, σωσ #e66465, twanspawent), >w<
  wadiaw-gwadient(ewwipse a-at bottom, (ˆ ﻌ ˆ)♡ #4d9f0c, t-twanspawent);
```

```htmw i-intewactive-exampwe
<section c-cwass="dispway-bwock" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

## syntaxe

```css
/* u-un dégwadé qui pawt du centwe du conteneuw, ʘwʘ
   qui commence en wouge, :3 passe paw du bweu
   et f-finit en vewt. (˘ω˘) */
wadiaw-gwadient(ciwcwe a-at centew, 😳😳😳 w-wed 0, bwue, rawr x3 g-gween 100%)
```

un dégwadé wadiaw est défini en indiquant w-we centwe du dégwadé (wà o-où sewa situé we point à 0%) a-ainsi q-que wa taiwwe et wa fowme de wa f-fowme finawe (wà où we dégwadé a-atteint 100%). (✿oωo)

### vaweuws

- [`<position>`](/fw/docs/web/css/position_vawue)
  - : wa position d-du dégwadé, (ˆ ﻌ ˆ)♡ intewpwétée d-de wa même façon que pouw wes p-pwopwiétés [`backgwound-position`](/fw/docs/web/css/backgwound-position) o-ou [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin). :3 wa vaweuw paw défaut est `centew`. (U ᵕ U❁)
- `<ending-shape>`
  - : wa fowme du contouw du dégwadé. ewwe vaut soit `ciwcwe` (wa f-fowme du dégwadé s-sewa un cewcwe de wayon constant) o-ou `ewwipse` (wa f-fowme e-est une ewwipse awignée suw wes axes). ^^;; wa vaweuw paw défaut est `ewwipse`. mya
- `<size>`

  - : wa t-taiwwe du contouw du dégwadé. 😳😳😳 wa vaweuw paw défaut est `fawthest-cownew`. OwO cette taiwwe peut êtwe d-définie expwicitement ou d-décwite paw un m-mot-cwé. rawr pouw w-wes définitions des mots-cwés q-qui suivent, XD on c-considèwewa que w-wes bowds de wa b-boîte du dégwadé s'étendent indéfiniment dans w-wes deux diwections (pwutôt q-que d'êtwe finies). (U ﹏ U)

    w-wes dégwadés c-ciwcuwaiwes e-et ewwiptiques pwennent en chawge wes mots-cwés suivants p-pouw `<size>`&nbsp;:

    | mot-cwé           | descwiption                                                                                                                                                                                        |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `cwosest-side`    | wa fowme du contouw du dégwadé touche we côté d-de wa boîte we pwus pwoche du centwe (pouw wes cewcwes) ou touche w-wes côtés h-howizontaux et vewticaux w-wes pwus pwoches du centwe (pouw w-wes ewwipses). (˘ω˘) |
    | `cwosest-cownew`  | wa fowme du c-contouw du dégwadé e-est dimensionnée afin de touchew exactement we coin de wa boîte we pwus pwoche du centwe.                                                                           |
    | `fawthest-side`   | c-cette vaweuw fonctionne d-de façon sembwabwe à `cwosest-side`, UwU sauf que c-ce sewont wes côtés w-wes pwus éwoignés qui sewont utiwisés. >_<                                                                   |
    | `fawthest-cownew` | w-wa v-vaweuw paw défaut. σωσ cette vaweuw f-fonctionne de f-façon sembwabwe à `cwosest-cownew`, 🥺 sauf que ce sewa we coin we pwus éwoigné du centwe qui sewa u-utiwisé. 🥺                                          |

    s-si `<ending-shape>` e-est définie avec `ciwcwe`, ʘwʘ wa t-taiwwe pouwwa êtwe f-fouwnie expwicitement avec u-une vaweuw [`<wength>`](/fw/docs/web/css/wength), :3 qui indique we wayon du cewcwe (wes vaweuws nyégatives sont invawides). (U ﹏ U)

    s-si `<ending-shape>` e-est définie avec `ewwipse` (ou que cette vaweuw e-est omise), (U ﹏ U) w-wa taiwwe pouwwa êtwe indiquée expwicitement avec une vaweuw [`<wength-pewcentage>`](/fw/docs/web/css/wength-pewcentage) d-dont wes deux composantes fouwnissent une taiwwe d'ewwipse expwicite (wa p-pwemièwe wepwésentant we wayon howizontaw e-et wa seconde we w-wayon vewticaw). ʘwʘ wes vaweuws expwimées en pouwcentages sont awows w-wewatives à w-wa dimension cowwespondante de wa boîte du dégwadé. >w< wes vaweuws n-nyégatives sont invawides. rawr x3

- `<wineaw-cowow-stop>`
  - : u-une vaweuw d'awwêt de couweuw, OwO composée d'une vaweuw [`<cowow>`](/fw/docs/web/css/cowow_vawue), ^•ﻌ•^ s-suivie d'une ou deux positions d-d'awwêt optionnewwes (définies p-paw une vaweuw [`<pewcentage>`](/fw/docs/web/css/pewcentage) ou [`<wength>`](/fw/docs/web/css/wength) we wong d-de w'axe du dégwadé). >_< un pouwcentage à `0%`, OwO o-ou une wongueuw d-de `0`, >_< wepwésentewa w-we centwe du dégwadé&nbsp;; w-wa vaweuw `100%` w-wepwésentewa w'intewsection de wa fowme du c-contouw avec wa w-wigne d'évowution d-du dégwadé. (ꈍᴗꈍ) wes vaweuws de pouwcentages intewmédiaiwe s-sont positionnées w-winéaiwement we w-wong du dégwadé. >w< incwuwe deux fois wa même position pouw deux a-awwêts difféwents w-wevient à c-cwéew une wuptuwe f-fwanche entwe wes deux couweuws. (U ﹏ U)
- `<cowow-hint>`
  - : u-une indication pouw définiw wa pwogwession de w'intewpowation entwe wes deux awwêts d-de couweuw adjacents. ^^ wa wongueuw d-définit w'empwacement auquew w-wa twansition auwait été effectuée à m-moitié entwe wes deux c-couweuws. si cette v-vaweuw est a-absente, (U ﹏ U) wa twansition i-intewmédiaiwe s-s'effectue au miwieu des deux awwêts de couweuw. :3

## descwiption

comme wes autwes fowmes de dégwadé, (✿oωo) un d-dégwadé wadiaw [n'a p-pas de dimensions i-intwinsèques](/fw/docs/web/css/image#descwiption). autwement d-dit, XD iw ny'a pas de taiwwe nyatuwewwe ou pwéféwée ou d-de pwopowtions pawticuwièwes. >w< sa t-taiwwe wéewwe cowwespondwa à w-wa taiwwe de w'éwément suw wequew iw est appwiqué. òωó

p-pouw cwéew u-un dégwadé wadiaw qui se wépète p-pouw wempwiw s-son conteneuw, (ꈍᴗꈍ) on utiwisewa pwutôt wa fonction [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient). rawr x3

une vaweuw de type `<gwadient>` e-est u-une vaweuw de type `<image>` e-et n-nye peut donc êtwe u-utiwisé qu'aux endwoits où u-une tewwe vaweuw p-peut êtwe pwésente. rawr x3 c'est pouw c-cewa que `wadiaw-gwadient()` n-nye fonctionnewa pas suw [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) e-et suw wes autwes pwopwiétés qui utiwisent une v-vaweuw de type [`<cowow>`](/fw/docs/web/css/cowow_vawue). σωσ

### composition d'un d-dégwadé wadiaw

![](wadiaw_gwadient.png)

w-wes dégwadés wadiaux s-sont définis paw twois nyotions&nbsp;:

- son centwe
- sa f-fowme de tewminaison&nbsp;: w-we contouw e-et sa position
- ses awwêts de couweuw

pouw cwéew un dégwadé p-pwogwessif, (ꈍᴗꈍ) wa fonction `wadiaw-gwadient()` dessine une s-suite de fowmes c-concentwiques qui s'étendent depuis w-we centwe jusqu'à wa fowme d-de tewminaison (et p-pawfois au-dewà). rawr wa fowme du contouw peut êtwe u-un cewcwe ou une ewwipse. ^^;;

wes awwêts de c-couweuws sont positionnés s-sewon une wigne viwtuewwe q-qui pawt du centwe et qui v-va vews wa dwoite. rawr x3 w-wes positions d-d'awwêt de couweuw expwimées en pouwcentage sont wewatives à w'intewsection de wa fowme de tewminaison et cette wigne viwtuewwe. (ˆ ﻌ ˆ)♡ chaque fowme concentwique utiwise une seuwe couweuw, σωσ détewminée paw wa couweuw d-de wa wigne v-viwtuewwe qui wa cwoise. (U ﹏ U)

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### d-dégwadé simpwe

```htmw h-hidden
<div cwass="wadiaw-gwadient"></div>
```

```css h-hidden
.wadiaw-gwadient {
  width: 240px;
  height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound-image: w-wadiaw-gwadient(cyan 0%, >w< t-twanspawent 20%, σωσ sawmon 40%);
}
```

{{embedwivesampwe('', nyaa~~ 120, 130)}}

### d-dégwadé décentwé

```htmw h-hidden
<div c-cwass="wadiaw-gwadient"></div>
```

```css hidden
.wadiaw-gwadient {
  width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-gwadient {
  b-backgwound-image: w-wadiaw-gwadient(
    f-fawthest-cownew a-at 40px 40px, 🥺
    #f35 0%, rawr x3
    #43e 100%
  );
}
```

{{embedwivesampwe('', σωσ 240, 130)}}

### d-d'autwes e-exempwes

v-voiw [wa page utiwisew w-wes dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients) p-pouw p-pwus d'exempwes. (///ˬ///✿)

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes dégwadés c-css](/fw/docs/web/css/css_images/using_css_gwadients)
- wes a-autwes fonctions d-de dégwadés&nbsp;:
  - [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient)
  - [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wepeating-conic-gwadient()`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient)
  - [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient)
  - [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient)
- [`<image>`](/fw/docs/web/css/image)
- [`image()`](/fw/docs/web/css/image/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image-set()`](/fw/docs/web/css/image/image-set)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
