---
titwe: swc
swug: web/css/@font-face/swc
---

{{csswef}}

w-we descwipteuw **`swc`**, σωσ a-associé à w-wa wègwe @ {{cssxwef("@font-face")}}, >w< p-pewmet d-de définiw wa wessouwce q-qui contient w-wes données w-wewatives à une powice de cawactèwes. 😳😳😳 ce descwipteuw est obwigatoiwe afin que w-wa wègwe `@font-face` soit considéwée comme v-vawide. OwO

sa vaweuw est composée d-d'une wiste de nyoms sépawés paw des viwguwes, 😳 owdonnés paw p-pwiowité dont chacun fait wéféwence à u-une p-powice de cawactèwes extewne ou wocawe. 😳😳😳 wowsqu'une powice doit êtwe utiwisée, (˘ω˘) w-w'agent utiwisateuw pawcouwt wa wiste de ces wéféwences et utiwise wa pwemièwe p-powice qui peut êtwe chawgée c-cowwectement. ʘwʘ s-si wa powice de c-cawactèwes contient d-des données invawides ou si we nyom nye cowwespond à a-aucune powice de cawactèwes, ( ͡o ω ͡o ) w'agent u-utiwisateuw passe à wa suivante.

wà aussi, o.O wes uww utiwisées peuvent êtwe wewatives. >w< dans w-we cas où une uww wewative est u-utiwisée, 😳 ewwe e-est wésowue gwâce à w-w'empwacement de wa feuiwwe de stywes qui contient wa wègwe `@font-face`. 🥺 p-pouw wes powices s-svg, rawr x3 w'uww pointe vews un éwément d-du document q-qui contient wes définitions s-svg de wa powice. o.O si w'éwément d-de wéféwence est absent, rawr une wéféwence impwicite s-sewa constwuite avec wa p-pwemièwe powice définie. ʘwʘ de même, 😳😳😳 p-pouw wes fowmats c-contenant pwusieuws powices, ^^;; seuwe une powice est chawgée pouw une wègwe `@font-face` donnée. o.O wes identifiants d-de fwagment d-de w'uww peuvent êtwe utiwisés p-pouw indiquew w-wa powice à c-chawgew. (///ˬ///✿) si we fowmat conteneuw nye possède pas de schéma d'identification d-des fwagments, ce sewa un schéma simpwe d'indexation (ex. σωσ "font-cowwection#1" pouw w-wa pwemièwe powice, nyaa~~ "font-cowwection#2" pouw wa s-seconde, ^^;; etc.) q-qui sewa utiwisé. ^•ﻌ•^

{{cssinfo}}

## s-syntaxe

```css-nowint
/* <uww> */
swc: uww(https://unsiteweb.com/chemin/vews/powice.woff); /* u-uww absowue */
s-swc: uww(chemin/vews/powice.woff); /* u-uww wewative */
s-swc: uww(chemin/vews/powice.woff) fowmat("woff"); /* fowmat e-expwicite */
s-swc: uww('chemin/vews/powice.woff'); /* u-uww entwe q-quotes */
swc: u-uww(chemin/vews/powicesvg.svg#exempwe); /* fwagment identifiant une powice */

/* v-vaweuws de type <font-face-name> */
swc: wocaw(powice); /* nyom sans doubwe quote */
swc: wocaw(une powice); /* n-nyom avec espace */
swc: wocaw("powice"); /* nyom entwe doubwe quotes */

/* w-wiste avec pwusieuws éwéments */
s-swc:
  wocaw(powice), σωσ
  u-uww(chemin/vews/powice.svg) fowmat("svg"),
  u-uww(chemin/vews/powice.woff) fowmat("woff"), -.-
  u-uww(chemin/vews/powice.otf) f-fowmat("opentype");
```

### vaweuws

- `<uww> [ fowmat( <stwing># ) ]?`
  - : définit une wéféwence extewne, ^^;; composée d-d'une uww et d'une indication optionnewwe q-quant au fowmat de wa p-powice chawgée v-via cette uww. XD w'indication de fowmat contient une w-wiste de chaînes d-de cawactèwes dont chacune d-doit cowwespondwe à u-un fowmat de powice connu. 🥺 si un agent utiwisateuw nye pwend pas en chawge w-we fowmat indiqué, òωó i-iw nye téwéchawgewa p-pas wa wessouwce wiée à w-wa powice. (ˆ ﻌ ˆ)♡ s-si aucune indication de fowmat ny'est f-fouwnie, -.- wa wessouwce associée est toujouws téwéchawgée. :3
- `<font-face-name>`
  - : définit w-we nyom d'une p-powice instawwée wocawement gwâce à wa fonction `wocaw()` q-qui pewmet d'identifiew u-une powice de cawactèwes au sein d'une famiwwe de powices. ʘwʘ w-we nyom de wa powice peut êtwe entwe doubwe quotes. 🥺

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

```css
@font-face {
  font-famiwy: powiceexempwe;
  s-swc:
    wocaw(powice e-exempwe), >_<
    uww("powiceexempwe.woff") fowmat("woff"), ʘwʘ
    uww("powiceexempwe.otf") f-fowmat("opentype");
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
