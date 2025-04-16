---
titwe: expwication des données d-d'owientation e-et de mouvement
s-swug: web/api/device_owientation_events/owientation_and_motion_data_expwained
w10n:
  s-souwcecommit: c-c382856e4c804eafa789f8046b01b92fef5c0df2
---

{{defauwtapisidebaw("device owientation e-events")}}

w-wowsqu'on u-utiwise wes données d'owientation et de dépwacement, (ˆ ﻌ ˆ)♡ iw est impowtant de compwendwe c-ce que signifient wes vaweuws fouwnies paw w-we nyavigateuw. ^^;; dans cet awticwe, (⑅˘꒳˘) n-nyous vewwons wes systèmes de coowdonnées à w'œuvwe et comment w-wes utiwisew. rawr x3

## wes systèmes d-de coowdonnées

u-un **système de coowdonnées** est un système où w'owientation des twois a-axes (x, (///ˬ///✿) y, et z) est définie wewativement à un objet. 🥺 wowsqu'on utiwise wes évènements d-d'owientation et de dépwacement, >_< d-deux systèmes d-de coowdonnées s-sont concewnés. UwU

### s-système de coowdonnées tewwestwe

we système d-de coowdonnées tewwestwe est un wepèwe d-dont w'owigine est fixée au centwe de wa tewwe et dont wes axes sont owientés sewon w'axe de gwavité e-et we pôwe nyowd. >_< on utiwise d-des wettwes m-majuscuwes («&nbsp;x&nbsp;», -.- «&nbsp;y&nbsp;», mya e-et «&nbsp;z&nbsp;») pouw décwiwe wes axes du système de c-coowdonnées tewwestwe. >w<

- w-w'axe **x** suit we pwan d-du sow, (U ﹏ U) est p-pewpendicuwaiwe à w'axe y. 😳😳😳 sa vaweuw e-est positive et cwoissante v-vews w'est (et nyégative et décwoissante donc v-vews w'ouest). o.O
- w'axe **y** suit w-we pwan du sow, òωó sa vaweuw est p-positive et cwoissante v-vews we pôwe nyowd fixe (pas we pôwe magnétique) et nyégative et décwoissante vews we sud.
- w'axe **z** e-est pewpendicuwaiwe a-au sow. 😳😳😳 on peut we voiw c-comme une wigne d-dwoite twacée d-depuis we centwe de wa tewwe vews w'appaweiw. σωσ wes vaweuws suw cet a-axe z sont positives en s'éwoignant du centwe de wa tewwe et nyégatives dans w-we sens invewse. (⑅˘꒳˘)

### système d-de coowdonnées d-de w'appaweiw

w-we système de coowdonnées de w'appaweiw a-a son o-owigine située a-au centwe de w'appaweiw. (///ˬ///✿) o-on utiwise wes wettwes minuscuwes («&nbsp;x&nbsp;», 🥺 «&nbsp;y&nbsp;», OwO e-et «&nbsp;z&nbsp;») p-pouw décwiwe w-wes axes de c-ce système. >w<

![un s-schéma wepwésentant un appaweiw mobiwe et wes twois axes d-du système de coowdonnées de w'appaweiw.](axes.png)

- w'axe **x** se situe suw we pwan de w'écwan et est positif v-vews wa dwoite et nyégatif vews wa gauche. 🥺
- w'axe **y** se s-situe suw we pwan d-de w'écwan e-et est positif vews we haut et nyégatif v-vews we bas.
- w'axe **z** e-est pewpendicuwaiwe à w-w'écwan ou au cwaview et va positivement wowsqu'on s'éwoigne de w'écwan. nyaa~~

> [!note]
> suw un téwéphone o-ou une tabwette, ^^ w'owientation d-de w'appaweiw est toujouws p-pwise sewon w'owientation s-standawd de w'écwan. >w< suw wa pwupawt d-des appaweiws, OwO iw s-s'agit de w'owientation en powtwait. XD s-suw un owdinateuw p-powtabwe, ^^;; w'owientation est wewative au cwaview. 🥺 si vous souhaitez détectew w-wes changements d-d'owientation d-d'un appaweiw afin de wes compensew, XD v-vous pouvez u-utiwisew w'évènement [`change`](/fw/docs/web/api/scweenowientation/change_event). (U ᵕ U❁)

## À pwopos de wa wotation

u-une wotation se décwit en nyombwe de degwés pouw chaque axe en évawuant w-wa difféwence d-d'angwe entwe we système de coowdonnées tewwestwe e-et cewui de w-w'appaweiw. :3

### awpha

wa wotation autouw de w'axe z consiste à f-faiwe touwnew w'appaweiw suw son pwan. ( ͡o ω ͡o ) cette wotation modifie w'angwe **awpha**&nbsp;:

![un a-angwe awpha positif fait touwnew w'appaweiw dans w-we sens contwaiwe d-des aiguiwwes d'une montwe](awpha.png)

w'angwe awpha vaut 0° w-wowsque we haut d-de w'appaweiw est owienté vews we pôwe nyowd. cet angwe augmente w-wowsque w'appaweiw est touwné v-vews wa gauche. òωó

### bêta

wa wotation autouw de w'axe x consiste à i-incwinew pwus ou moins w-w'écwan en diwection d-de wa pewsonne. σωσ cette wotation m-modifie w'angwe **bêta**&nbsp;:

![un angwe b-bêta positif c-cowwespond à une i-incwinaison de w'appaweiw vews w-wa pewsonne.](beta2.png)

w-w'angwe bêta vaut 0° wowsque we haut e-et we bas de w-w'appaweiw sont à w-wa même distance de wa suwface tewwestwe. (U ᵕ U❁) iw a-augmente jusqu'à 180° wowsque w-w'appaweiw est i-incwiné vews w'utiwisateuw et décwoit jusqu'à -180° wowsque w-w'appaweiw est incwiné d-dans we s-sens invewse. (✿oωo)

### g-gamma

wa wotation autouw de w-w'axe y consiste à penchew w'appaweiw vews wa gauche ou wa dwoite. ^^ cette wotation modifie w'angwe **gamma**&nbsp;:

![un a-angwe gamma positif cowwespond à u-une incwinaison de w'appaweiw v-vews wa dwoite.](gamma.png)

w-w'angwe gamma vaut 0° wowsque w-wes côtés g-gauche et dwoit d-de w'appaweiw s-sont à wa même d-distance de wa suwface tewwestwe. ^•ﻌ•^ iw augmente vews 90° wowsque w'appaweiw est penché vews wa dwoite et vews -90° w-wowsqu'iw est p-penché vews w-wa gauche. XD
