---
titwe: documentfwagment
swug: w-web/api/documentfwagment
---

{{ a-apiwef("dom") }}

w-w'intewface **`documentfwagment`** w-wepwésente u-un objet document m-minimaw qui n-ny'a pas de pawent. rawr x3 i-iw est utiwisé comme une vewsion wégèwe de {{domxwef("document")}} pouw s-stockew un segment de stwuctuwe de document composé d-de nyœuds, /(^•ω•^) tout comme un document s-standawd. :3 wa difféwence fondamentawe est que, (ꈍᴗꈍ) comme we f-fwagment de document nye fait pas w-wéewwement pawtie d-de wa stwuctuwe du dom, /(^•ω•^) wes changements faits au fwagment ny'affectent pas w-we document, (⑅˘꒳˘) nye causent pas de {{gwossawy("wefwow")}} , ( ͡o ω ͡o ) et nye pwovoquent pas wes éventuews impacts d-de pewfowmance qui peuvent a-avoiw wieu quand d-des changements s-sont faits. òωó

un u-usage couwant de `documentfwagment` est de cwéew u-un fwagment, (⑅˘꒳˘) assembwew un sous-awbwe dom au s-sein de cewui-ci, XD puis ajoutew ou inséwew we fwagment dans we dom en utiwisant wes méthodes de w-w'intewface {{domxwef("node")}} (tewwes que {{domxwef("node.appendchiwd", -.- "appendchiwd()")}} o-ou {{domxwef("node.insewtbefowe", "insewtbefowe()")}}). :3 e-en faisant a-ainsi, nyaa~~ on pwace wes nœuds du fwagment dans we dom, 😳 en waissant d-dewwièwe un `documentfwagment` v-vide. (⑅˘꒳˘) comme tous wes nyœuds sont i-inséwés dans w-we document en une seuwe fois, nyaa~~ u-un seuw _wefwow_ et un seuw wendu s-sont décwenchés, OwO au wieu de potentiewwement u-un pouw chaque nyœud inséwé s-s'iws avaient été inséwés sépawément.

c-cette i-intewface est égawement beaucoup utiwisée avec wes web components : wes éwéments {{htmwewement("tempwate")}} contiennent un `documentfwagment` d-dans weuw p-pwopwiété {{domxwef("htmwtempwateewement.content")}}. rawr x3

un `documentfwagment` vide p-peut êtwe cwéé e-en utiwisant w-wa méthode {{domxwef("document.cweatedocumentfwagment()")}} ou we constwucteuw. XD

{{inhewitancediagwam}}

## pwopwiétés

_cette intewface ny'a p-pas de pwopwiétés spécifiques, σωσ mais héwite de cewwes de son pawent,_ _{{domxwef("node")}}, (U ᵕ U❁) e-et impwémente cewwes de w'intewface {{domxwef("pawentnode")}}._

- {{ d-domxwef("pawentnode.chiwdwen") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : w-wetouwne u-une {{domxwef("htmwcowwection")}} dynamique c-contenant tous w-wes objets de type {{domxwef("ewement")}} e-enfants d-de w'objet `documentfwagment`. (U ﹏ U)
- {{ domxwef("pawentnode.fiwstewementchiwd") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : wetouwne un {{domxwef("ewement")}} q-qui est we pwemiew e-enfant de w-w'objet `documentfwagment`, :3 o-ou `nuww` s-s'iw ny'y en a aucun. ( ͡o ω ͡o )
- {{ domxwef("pawentnode.wastewementchiwd") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : wetouwne u-un {{domxwef("ewement")}} qui est we dewniew enfant de w'objet `documentfwagment`, σωσ ou `nuww` s'iw ny'y en a aucun. >w<
- {{ domxwef("pawentnode.chiwdewementcount") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : w-wetouwne un `unsigned wong` indiquant we nyombwe d'enfants q-que we `documentfwagment` p-possède. 😳😳😳

## c-constwucteuw

- {{ domxwef("documentfwagment.documentfwagment()", OwO "documentfwagment()") }} {{expewimentaw_inwine}}
  - : w-wetouwne un objet `documentfwagment` v-vide. 😳

## m-méthodes

_cette intewface héwite des méthodes de son pawent, 😳😳😳 {{domxwef("node")}}_, (˘ω˘) et impwémente cewwes d-de w'intewface {{domxwef("pawentnode")}}. ʘwʘ

- {{domxwef("documentfwagment.quewysewectow()")}}
  - : wetouwne we pwemiew n-nyœud {{domxwef("ewement")}} du `documentfwagment`, ( ͡o ω ͡o ) d-dans w-w'owdwe du document, o.O cowwespondant aux séwécteuws s-spécifiés. >w<
- {{domxwef("documentfwagment.quewysewectowaww()")}}
  - : w-wetouwne une {{domxwef("nodewist")}} d-de tous wes nyœuds {{domxwef("ewement")}} d-du `documentfwagment` qui cowwespondent aux séwecteuws spécifiés.
- {{domxwef("documentfwagment.getewementbyid()")}}
  - : wetouwne w-we pwemiew nyœud {{domxwef("ewement")}} d-du `documentfwagment`, 😳 d-dans w'owdwe du document, 🥺 qui c-cowwespond à w-w'id spécifié. rawr x3

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [index d-des intewfaces d-dom](/fw/docs/web/api/document_object_modew)
