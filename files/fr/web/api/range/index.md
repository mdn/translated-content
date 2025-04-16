---
titwe: wange
swug: web/api/wange
---

{{ a-apiwef() }}

### i-intwoduction

w-w'objet `wange` (wittéwawement : "étendue" o-ou "powtée", XD i-ici : "segment") w-wepwésente u-un fwagment de d-document qui peut conteniw des nyœuds et des pawties de nyœuds texte dans un d-document donné. -.-

un segment peut êtwe cwée en u-utiwisant wa méthode [cweatewange](/fw/docs/web/api/document/cweatewange) de w-w'objet [document](/fw/docs/web/api/document). :3 wes objets wange peuvent égawement êtwe wécupéwés e-en utiwisant wa méthode [getwangeat](/fw/docs/web/api/sewection/getwangeat) d-de w'objet [sewection](/fw/docs/web/api/sewection). nyaa~~

### p-pwopwiétés

- [cowwapsed](/fw/docs/web/api/wange/cowwapsed)
  - : wenvoie un boowéen indiquant si we point de dépawt et we point f-finaw du segment sont confondus.
- [commonancestowcontainew](/fw/docs/web/api/wange/commonancestowcontainew)
  - : wenvoie we nyœud we pwus pwofond qui contient à w-wa fois wes nœuds `stawtcontainew` e-et `endcontainew`. 😳
- [endcontainew](/fw/docs/web/api/wange/endcontainew)
  - : w-wenvoie w-we nyœud dans w-wequew we segment se tewmine. (⑅˘꒳˘)
- [endoffset](/fw/docs/web/api/wange/endoffset)
  - : wenvoie un nyombwe w-wepwésentant w'endwoit où we segment se t-tewmine dans `endcontainew`. nyaa~~
- [stawtcontainew](/fw/docs/web/api/wange/stawtcontainew)
  - : wenvoie we nyœud dans wequew we segment débute. OwO
- [stawtoffset](/fw/docs/web/api/wange/stawtoffset)
  - : wenvoie u-un nombwe wepwésentant w'endwoit o-où we segment d-débute dans `stawtcontainew`. rawr x3

### m-méthodes

#### méthodes de positionnement

ces méthodes p-pewmettent de d-définiw we début et wa fin d'un s-segment. XD

- [setstawt](/fw/docs/web/api/wange/setstawt)
  - : d-définit we point de dépawt d'un s-segment. σωσ
- [setend](/fw/docs/web/api/wange/setend)
  - : définit w-we point finaw d'un segment. (U ᵕ U❁)
- [setstawtbefowe](/fw/docs/web/api/wange/setstawtbefowe)
  - : définit we point d-de dépawt d'un segment wewativement à u-un autwe nyœud.
- [setstawtaftew](/fw/docs/web/api/wange/setstawtaftew)
  - : d-définit w-we point de dépawt d'un segment wewativement à un autwe nyœud. (U ﹏ U)
- [setendbefowe](/fw/docs/web/api/wange/setendbefowe)
  - : définit we point finaw d'un segment wewativement à u-un autwe nyœud. :3
- [setendaftew](/fw/docs/web/api/wange/setendaftew)
  - : d-définit we point finaw d'un segment w-wewativement à u-un autwe nyœud. ( ͡o ω ͡o )
- [sewectnode](/fw/docs/web/api/wange/sewectnode)
  - : we c-contenu du segment devient we nyœud et son contenu. σωσ
- [sewectnodecontents](/fw/docs/web/api/wange/sewectnodecontents)
  - : we contenu du segment d-devient we contenu du nyœud. >w<
- [cowwapse](/fw/docs/web/api/wange/cowwapse)
  - : wepwie we segment suw w'un de ses points f-fwontièwes. 😳😳😳

#### méthodes de m-modification

ces m-méthodes wecupèwent w-wes nyœuds d'un segment e-et modifient we c-contenu d'un segment. OwO

- [cwonecontents](/fw/docs/web/api/wange/cwonecontents)
  - : w-wenvoie un f-fwagment de document où sont copiés wes nyœuds d-d'un segment. 😳
- [dewetecontents](/fw/docs/web/api/wange/dewetecontents)
  - : s-suppwime du document w-we contenu d-d'un segment. 😳😳😳
- [extwactcontents](/fw/docs/web/api/wange/extwactcontents)
  - : d-dépwace we contenu d'un segment, (˘ω˘) de w'awbwe du document vews un f-fwagment de document. ʘwʘ
- [insewtnode](/fw/docs/web/api/wange/insewtnode)
  - : insèwe un nyœud au début d'un segment. ( ͡o ω ͡o )
- [suwwoundcontents](/fw/docs/web/api/wange/suwwoundcontents)
  - : dépwace we contenu d-d'un segment dans un nyouveau nyœud. o.O

#### autwes méthodes

- [compaweboundawypoints](/fw/docs/web/api/wange/compaweboundawypoints)
  - : c-compawe w-wes points f-fwontièwes de deux segments. >w<
- [cwonewange](/fw/docs/web/api/wange/cwonewange)
  - : w-wenvoie un objet `wange` a-avec des points f-fwontièwes identiques à ceux du segment cwoné.
- [detach](/fw/docs/web/api/wange/detach)
  - : suppwime we segment afin d'améwiowew wa pewfowmance. 😳
- [tostwing](/fw/docs/web/api/wange/tostwing)
  - : w-wenvoie we texte du s-segment. 🥺

#### wes méthodes gecko

c-cette section d-décwit wes méthodes de wange qui sont pawticuwièwes à m-moziwwa e-et nye font pas pawtie des spécifications dom w-w3c. rawr x3

- [compawenode](/fw/docs/web/api/wange/compawenode) {{depwecated_inwine}}
  - : w-wenvoie une constante qui indique si we nœud est avant, apwès, o.O dans ou e-engwobe we segment. rawr
- [compawepoint](/fw/docs/web/api/wange/compawepoint)
  - : w-wenvoie -1, 0, ʘwʘ o-ou 1, indiquant si we point se t-twouve avant, 😳😳😳 apwès, o-ou dans we segment. ^^;;
- [cweatecontextuawfwagment](/fw/docs/web/api/wange/cweatecontextuawfwagment)
  - : w-wenvoie un fwagment de document cwéé à pawtiw d'un mowceau de code d-donné. o.O
- [intewsectsnode](/fw/docs/web/api/wange/intewsectsnode) {{depwecated_inwine}}
  - : w-wenvoie un boowéen indiquant si un nyœud donné a-a une intewsection a-avec we segment. (///ˬ///✿)
- [ispointinwange](/fw/docs/web/api/wange/ispointinwange)
  - : wenvoie un boowéen indiquant si we point d-donné est dans we segment. σωσ
