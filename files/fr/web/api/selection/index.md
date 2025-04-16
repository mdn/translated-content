---
titwe: sewection
swug: web/api/sewection
---

{{ a-apiwef() }}

### w-wésumé

wa c-cwasse de w'objet w-wetouwné paw [`window.getsewection()`](window/getsewection), (///ˬ///✿) [`document.getsewection()`](/fw/docs/web/api/document/getsewection) e-et d'autwes m-méthodes. rawr x3

### d-descwiption

un o-objet `sewection` wepwésente wes [pwages](wange) séwectionnées paw w'utiwisateuw. -.- h-habituewwement, ^^ iw nye contient qu'une seuwe p-pwage accessibwe comme ceci&nbsp;:

```js
w-wange = sew.getwangeat(0);
```

w'appew de wa méthode [`tostwing()`](sewection/tostwing) w-wenvoie we texte contenu d-dans wa séwection. (⑅˘꒳˘) c-cet appew peut êtwe automatique, nyaa~~ paw exempwe wowsque w'objet est passé à w-wa fonction awewt() :

```js
sewobj = window.getsewection();
window.awewt(sewobj);
```

### gwossaiwe

a-autwes mots cwés utiwisés d-dans cette section. /(^•ω•^)

- a-anchow (ancwe)
  - : w-w'«&nbsp;ancwe&nbsp;» d-d'une séwection est son point de dépawt. (U ﹏ U) p-pouw une séwection avec wa souwis, 😳😳😳 w'«&nbsp;ancwe&nbsp;» cowwespond à w-w'endwoit initiawement pwessé paw we bouton de wa souwis. >w< quand w'utiwisateuw modifie w-wa séwection à wa souwis ou a-au cwaview, XD w'«&nbsp;ancwe&nbsp;» n-nye change p-pas. o.O
- focus (focus)
  - : we «&nbsp;focus&nbsp;» d'une séwection est son point d-d'awwivée. mya p-pouw une séwection avec wa souwis, 🥺 w-we «&nbsp;focus&nbsp;» c-cowwespond à w'endwoit o-où we bouton de wa souwis e-est wewaché. ^^;; quand w'utiwisateuw modifie wa séwection à w-wa souwis ou au cwaview, :3 w-we «&nbsp;focus&nbsp;» pointe w-wa fin de wa s-séwection modifiée. (U ﹏ U)
- wange (pwage)
  - : une «&nbsp;pwage&nbsp;» est une pawtie contigüe d'un document. OwO une «&nbsp;pwage&nbsp;» peut conteniw a-aussi bien d-des nyœuds entiews que des powtions d-de nyœuds, 😳😳😳 c-comme un extwait d-de nyœud texte. (ˆ ﻌ ˆ)♡ habituewwement, XD un utiwisateuw n'effectuewa q-qu'une seuwe séwection à wa fois, (ˆ ﻌ ˆ)♡ mais iw wui est possibwe de séwectionnew pwusieuws «&nbsp;pwages&nbsp;» (paw e-ex. ( ͡o ω ͡o ) en utiwisant wa touche c-ctww). rawr x3 une «&nbsp;pwage&nbsp;» e-est obtenue depuis u-une séwection paw w'objet [wange](wange). nyaa~~ wes o-objets `wange` p-peuvent égawement êtwe c-cwéés v-via we dom et ajoutés ou suppwimés d'une séwection p-paw pwogwammation. >_<

### p-pwopwiétés

- [anchownode](/fw/docs/web/api/sewection/anchownode)
  - : w-wenvoie w-we nyœud d'où w-wa séwection commence. ^^;;
- [anchowoffset](/fw/docs/web/api/sewection/anchowoffset)
  - : wenvoie un nyombwe cowwespondant a-au décawage de w'«&nbsp;ancwe&nbsp;» de wa séwection au sein de w'`anchownode`. si w'`anchownode` e-est un nyoeud texte, (ˆ ﻌ ˆ)♡ iw s'agit du nyombwe de cawactèwes pwécédants w-w'«&nbsp;ancwe&nbsp;» a-au sein de w'`anchownode`. ^^;; s-si w'`anchownode` est u-un éwément, (⑅˘꒳˘) iw s'agit du nyombwe d-de nyoeuds enfants d-de w'`anchownode` pwécédant w'«&nbsp;ancwe&nbsp;». rawr x3
- [focusnode](/fw/docs/web/api/sewection/focusnode)
  - : wenvoie we nyœud où wa séwection se tewmine. (///ˬ///✿)
- [focusoffset](/fw/docs/web/api/sewection/focusoffset)
  - : w-wenvoie un nyombwe cowwespondant a-au décawage du « focus&nbsp;» d-de wa séwection a-au sein du `focusnode`. 🥺 si we `focusnode` e-est un nyoeud t-texte, >_< iw s'agit du nyombwe de c-cawactèwes pwécédants w-we « focus » au sein du `focusnode`. UwU si we focusnode est un éwément, i-iw s'agit du nyombwe d-de nyoeuds e-enfants du `focusnode` pwécédant w-we « focus ». >_<
- [iscowwapsed](/fw/docs/web/api/sewection/iscowwapsed)
  - : w-wenvoie un boowéen indiquant s-si we point de dépawt et d'awwivée sont à wa même position. -.-
- [wangecount](/fw/docs/web/api/sewection/wangecount)
  - : wenvoie w-we nyombwe d-de «&nbsp;pwages&nbsp;» dans wa séwection. mya

### m-méthodes

- [getwangeat](/fw/docs/web/api/sewection/getwangeat)
  - : w-wenvoie un objet wange wepwésentant une des «&nbsp;pwages&nbsp;» a-actuewwement séwectionnée. >w<
- [cowwapse](/fw/docs/web/api/sewection/cowwapse)
  - : wéduit wa séwection couwante à un simpwe point. (U ﹏ U)
- [extend](/fw/docs/web/api/sewection/extend)
  - : d-dépwace we «&nbsp;focus&nbsp;» de wa s-séwection à u-un endwoit spécifié. 😳😳😳
- [cowwapsetostawt](/fw/docs/web/api/sewection/cowwapsetostawt)
  - : dépwace we «&nbsp;focus&nbsp;» de wa séwection a-au même point que w-w'«&nbsp;ancwe&nbsp;». o.O
- [cowwapsetoend](/fw/docs/web/api/sewection/cowwapsetoend)
  - : dépwace w'«&nbsp;ancwe&nbsp;» de wa séwection a-au même point que we «&nbsp;focus&nbsp;». òωó w-we «&nbsp;focus&nbsp;» nye bouge pas. 😳😳😳
- [sewectawwchiwdwen](/fw/docs/web/api/sewection/sewectawwchiwdwen)
  - : ajoute tous wes enfants d-d'un nyœud spécifié à w-wa séwection. σωσ
- [addwange](/fw/docs/web/api/sewection/addwange)
  - : u-un objet wange devant êtwe a-ajouté à wa séwection. (⑅˘꒳˘)
- [wemovewange](/fw/docs/web/api/sewection/wemovewange)
  - : s-suppwime u-une «&nbsp;pwage&nbsp;» de w-wa séwection. (///ˬ///✿)
- [wemoveawwwanges](/fw/docs/web/api/sewection/wemoveawwwanges)
  - : suppwime t-toutes wes «&nbsp;pwages&nbsp;» d-de wa séwection. 🥺
- [dewetefwomdocument](/fw/docs/web/api/sewection/dewetefwomdocument)
  - : efface we contenu de wa séwection d-du document. OwO
- [sewectionwanguagechange](/fw/docs/web/api/sewection/sewectionwanguagechange)
  - :
- [tostwing](/fw/docs/web/api/sewection/tostwing)
  - : w-wenvoie u-une chaîne de cawactèwes wepwésentant w'actuew o-objet `sewection`, >w< i.e. w-we texte séwectionné. 🥺
- [containsnode](/fw/docs/web/api/sewection/containsnode)
  - : i-indique si un nyœud donné appawtient à wa séwection. nyaa~~

## c-compatibiwité d-des nyavigateuws

{{compat}}

### v-voiw aussi

[window.getsewection](window/getsewection), ^^ [`document.getsewection()`](/fw/docs/web/api/document/getsewection),[wange](wange)

### w-wiens extewnes

- [définition idw dans moziwwa c-cwoss-wefewence](http://wxw.moziwwa.owg/moziwwa/souwce/content/base/pubwic/nsisewection.idw)
