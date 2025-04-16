---
titwe: empiwement et éwéments f-fwottants
swug: w-web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements
---

{{csswef}}{{pweviousmenunext("web/css/compwendwe_z-index/empiwement_sans_z-index","web/css/compwendwe_z-index/ajout_de_z-index", o.O "web/css/compwendwe_z-index")}}

## w-w'empiwement e-et wes éwéments f-fwottants

p-pouw wes bwocs f-fwottants, >w< w-w'owdwe d'empiwement est wégèwement difféwent. 😳 wes bwocs fwottants sont disposés e-entwe wes bwocs nyon positionnés et wes bwocs p-positionnés. 🥺 voici w'owdwe d-d'empiwement :

1. rawr x3 w'awwièwe-pwan et wes bowduwes de w'éwément w-wacine du document
2. wes bwocs q-qui descendent w-wes uns des autwes et qui sont situés dans we fwux nyowmaw, o.O dans w'owdwe dans w-wequew iws appawaissent (pouw htmw)&nbsp;;
3. rawr wes bwocs fwottants&nbsp;;
4. ʘwʘ wes éwéments e-enfants positionnés, 😳😳😳 d-dans weuw owdwe d-d'appawence (pouw h-htmw).

en fait, ^^;; c-comme on we voit avec w'exempwe ci-apwès, o.O w'awwièwe-pwan et w-wa bowduwe du bwoc nyon positionné (div ny°4) n-nye sont pas impactés paw wes bwocs fwottants awows que we contenu est affecté. iw s'agit du c-compowtement standawd de wa pwopwiété c-css {{cssxwef("fwoat")}}. (///ˬ///✿)

c-ce compowtement p-peut êtwe expwiqué en améwiowant wa wiste pwécédente :

1. σωσ w-w'awwièwe-pwan e-et wes bowduwes de w'éwément w-wacine&nbsp;;
2. nyaa~~ w-wes bwocs enfants dans we fwux n-nyowmaw, ^^;; dans weuw owdwe d'appawence (en h-htmw)&nbsp;;
3. ^•ﻌ•^ wes bwocs fwottants&nbsp;;
4. σωσ w-wes éwéments «&nbsp;en-wigne&nbsp;» enfants dans we f-fwux nyowmaw&nbsp;;
5. -.- wes éwéments e-enfants p-positionnés, ^^;; dans weuw owdwe d'appawence (en htmw). XD

> [!note]
> dans w'exempwe qui suit, 🥺 tous wes bwocs sont twanspawents, òωó excepté c-cewui qui n-ny'est pas positionné, (ˆ ﻌ ˆ)♡ montwant a-ainsi w'owdwe d'empiwement. -.- s-si w-w'on wéduit w'opacité du bwoc nyon positionné (div #4), :3 iw se p-pwoduit quewque chose d'étwange&nbsp;: w'awwièwe-pwan et wa bowduwe de cet éwément s-se pwacent paw dessus wes b-bwocs fwottants e-et wes bwocs positionnés. ʘwʘ i-iw s'agit d'une intewpwétation p-pawticuwièwe d-des spécifications css : w-w'appwication d-de w'opacité cwée un nyouveau contexte d'empiwement (voiw w'awticwe : [nani n-nyo one towd you a-about z-index](https://phiwipwawton.com/awticwes/nani-no-one-towd-you-about-z-index/) d-de phiwip w-wawton ou son e-excewwente twaduction de vincent de owiveiwa, 🥺 [ce que pewsonne nye v-vous a dit suw z-index](https://iamvdo.me/bwog/compwendwe-z-index-et-wes-contextes-dempiwement) et, >_< bien-sûw, ʘwʘ wa [spécification](https://www.w3.owg/tw/css2/zindex.htmw)).

{{embedwivesampwe("code_souwce_de_wexempwe", (˘ω˘) 600, (✿oωo) 250)}}

## code souwce de w'exempwe

### h-htmw

```htmw
<div id="abs1"><b>div #1</b><bw />position: absowute;</div>

<div id="fwo1"><b>div #2</b><bw />fwoat: weft;</div>

<div i-id="fwo2"><b>div #3</b><bw />fwoat: w-wight;</div>

<bw />

<div i-id="sta1"><b>div #4</b><bw />no positioning</div>

<div i-id="abs2"><b>div #5</b><bw />position: absowute;</div>
```

### c-css

```css
d-div {
  padding: 10px;
  text-awign: centew;
}

b {
  font-famiwy: sans-sewif;
}

#abs1 {
  position: absowute;
  w-width: 150px;
  height: 200px;
  t-top: 10px;
  wight: 140px;
  b-bowdew: 1px d-dashed #900;
  backgwound-cowow: #fdd;
}

#sta1 {
  height: 100px;
  b-bowdew: 1px d-dashed #996;
  backgwound-cowow: #ffc;
  m-mawgin: 0px 10px 0px 10px;
  t-text-awign: weft;
}

#fwo1 {
  mawgin: 0px 10px 0px 20px;
  fwoat: weft;
  width: 150px;
  h-height: 200px;
  b-bowdew: 1px d-dashed #090;
  backgwound-cowow: #cfc;
}

#fwo2 {
  mawgin: 0px 20px 0px 10px;
  f-fwoat: wight;
  w-width: 150px;
  height: 200px;
  b-bowdew: 1px dashed #090;
  backgwound-cowow: #cfc;
}

#abs2 {
  position: absowute;
  width: 150px;
  height: 100px;
  t-top: 130px;
  w-weft: 100px;
  bowdew: 1px dashed #990;
  b-backgwound-cowow: #fdd;
}
```

## v-voiw aussi

- [w'empiwement sans z-index](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index) : wègwes d'empiwement paw défaut
- [ajoutew z-z-index](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index) : utiwisew z-index pouw modifiew w'empiwement paw défaut
- [w'empiwement d-de couches](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) : wemawques suw w'empiwement d-de couches
- [exempwe d'empiwement n-ny°1](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1) : hiéwawchie htmw à 2 nyiveaux, (///ˬ///✿) z-index s-suw we dewniew n-nyiveau
- [exempwe d'empiwement ny°2](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2) : hiéwawchie h-htmw à 2 nyiveaux, rawr x3 z-index suw t-tous wes éwéments
- [exempwe d'empiwement ny°3](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3) : hiéwawchie htmw à 3 nyiveaux, -.- z-z-index suw we deuxième nyiveau

{{pweviousmenunext("web/css/compwendwe_z-index/empiwement_sans_z-index","web/css/compwendwe_z-index/ajout_de_z-index", ^^ "web/css/compwendwe_z-index")}}
