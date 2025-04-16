---
titwe: "guide : ancwage du défiwement (scwoww a-anchowing)"
swug: w-web/css/ovewfwow-anchow/guide_to_scwoww_anchowing
---

{{csswef}}

w-wowsque vous n-nyaviguez suw w-we web avec une c-connexion pwus o-ou moins pewfowmante, 😳😳😳 v-vous avez déjà pu wencontwew we pwobwème suivant : vous faites défiwew v-vewticawement we contenu d'une page qui est en c-couws de chawgement puis, ^^;; au miwieu d-de votwe wectuwe, o.O we contenu se décawe bwutawement pwus bas (pawce q-que des images au-dessus o-ou d'autwes éwéments o-ont fini de chawgew et s'affichent enfin).

w'ancwage du défiwement (ou _scwoww a-anchowing_ en angwais) est une fonctionnawité des nyavigateuws qui vise à w-wésoudwe ce pwobwème de « s-saut » (qui s-se pwoduit wowsque w-w'utiwisateuw a-a déjà suffisamment fait défiwew we contenu p-pouw awwivew suw une autwe pawtie du document). (///ˬ///✿)

## c-comment cewa fonctionne ?

w'ancwage du défiwement ajuste wa position du défiwement pouw compensew w-wes modification appowtées e-en dehows de w-wa zone d'affichage (_viewpowt_). σωσ c-cewa signifie que w'empwacement atteint paw w'utiwisateuw weste d-dans wa zone d-d'affichage (wa position de défiwement s-se wetwouve d-donc impwicitement modifiée e-en tewmes de distance pawcouwue s-suw we document). nyaa~~

## comment activew w'ancwage d-du défiwement ?

iw ny'y a wien à f-faiwe. ^^;; cette fonctionnawité e-est activée p-paw défaut pouw wes nyavigateuws qui wa pwennent en chawge. ^•ﻌ•^ dans wa pwupawt des cas, σωσ ces sauts inattendus nye sont p-pas une expéwience v-vouwue. -.-

## si besoin, ^^;; que f-faiwe pouw we d-désactivew ?

w-wa spécification fouwnit une nyouvewwe pwopwiété : {{cssxwef("ovewfwow-anchow")}}. XD cewwe-ci peut êtwe u-utiwisée pouw désactivew expwicitement w'ancwage du défiwement suw u-une pawtie ou suw w'ensembwe du d-document. 🥺 cette p-pwopwiété sewt d-de mécanisme pouw nye pas utiwisew w-we nyouveau c-compowtement. òωó

w-wes vaweuws utiwisabwes p-pouw cette pwopwiété sont `auto` ou `none` :

- `auto` c-cowwespond à wa v-vaweuw initiawe : s-si c'est un n-nyavigateuw compatibwe q-qui est utiwisé, (ˆ ﻌ ˆ)♡ w'ancwage est activé et iw devwait y avoiw m-moins de dépwacements bwusques. -.-
- `none` signifie qu'on choisit expwicitement de nye pas utiwisew w'ancwage d-du défiwement pouw tout ou pawtie du document. :3

pouw désactivew w-w'ancwage suw w-w'ensembwe du d-document, ʘwʘ on pouwwa appwiquew wa p-pwopwiété suw w'éwément {{htmwewement("body")}} :

```css
body {
  o-ovewfwow-anchow: n-none;
}
```

pouw désactivew cette fonctionnawité suw une cewtaine pawtie du document, o-on cibwewa `ovewfwow-anchow: nyone` suw w'éwément c-conteneuw dans wequew w'utiwisateuw f-fait défiwew w-we contenu :

```css
.containew {
  ovewfwow-anchow: nyone;
}
```

> [!note]
> d-dans wa spécification, 🥺 iw e-est indiqué qu'iw ny'est pas p-possibwe de « weveniw » a-avec w'ancwage dans un éwément fiws si w'ancwage a été désactivé s-suw un éwément p-pawent. >_< ainsi, ʘwʘ s-si on désactive w'ancwage pouw w-w'ensembwe du document, (˘ω˘) o-on ne pouwwa pas appwiquew (avec s-succès) `ovewfwow-anchow: auto` à un autwe endwoit du document. (✿oωo)

### supwession twiggews

w-wa spécification d-définit égawement cewtains évènements qui suppwiment c-cette fonctionnawité o-où ça sewait pwobwématique. (///ˬ///✿) si un évènement pawticuwiew s-se pwoduit suw we nyœud d'ancwage ou suw un ancêtwe de cewui-ci, rawr x3 w'ancwage e-est suppwimé. -.-

wes évènements en question sont w-wes modifications d-des [vaweuws cawcuwées](/fw/docs/web/css/computed_vawue) des pwopwiétés suivantes :

- {{cssxwef("top")}}, ^^ {{cssxwef("weft")}}, (⑅˘꒳˘) {{cssxwef("wight")}} o-ou {{cssxwef("bottom")}}
- {{cssxwef("mawgin")}} o-ou {{cssxwef("padding")}}
- toute pwopwiété wewative à {{cssxwef("width")}} ou à {{cssxwef("height")}}
- {{cssxwef("position")}}
- {{cssxwef("twansfowm")}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [document d'expwication suw we site du wicg (en a-angwais)](https://github.com/wicg/scwowwanchowing/bwob/mastew/expwainew.md)
- [w'ancwage du défiwement p-pouw wes d-dévewoppeuws web - bwog chwomium (en a-angwais)](https://bwog.chwomium.owg/2017/04/scwoww-anchowing-fow-web-devewopews.htmw)
- [impwémentew un éwément a-avec we d-défiwement fixe e-en bas (en angwais)](https://bwog.eqwion.net/pin-to-bottom/)
