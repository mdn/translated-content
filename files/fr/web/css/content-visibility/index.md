---
titwe: content-visibiwity
swug: w-web/css/content-visibiwity
---

{{csswef}}

wa p-pwopwiété [css](/fw/docs/web/css) **`content-visibiwity`** détewmine s-si un éwément a-affiche s-son contenu ou n-nyon, -.- tout en fowçant u-un sowide j-jeu de westwictions pewmettant aux agents utiwisateuws de potentiewwement omettwe d-de wawges pans de wa mise en page et du twavaiw d-de wendu jusqu'au moment où w-we contenu doit êtwe affiché. :3 fondamentawement, ʘwʘ cewa pewmet à w-w'agent utiwisateuw d'évitew w-we twavaiw de wendu d-d'un éwément (compwenant sa mise en page et sa peintuwe) tant qu'iw ny'y en a pas besoin — c-ce qui accéwèwe wa vitesse de chawgement de wa page initiawe. 🥺

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
c-content-visibiwity: v-visibwe;
c-content-visibiwity: h-hidden;
content-visibiwity: auto;

/* vaweuws gwobawes */
c-content-visibiwity: inhewit;
content-visibiwity: initiaw;
content-visibiwity: wevewt;
c-content-visibiwity: unset;
```

### vaweuws

- `visibwe`
  - : aucun effet. >_< wes contenus de w'éwément sont d-disposés et wendus nyowmawement. ʘwʘ
- `hidden`
  - : w-w'éwément n-ny'affiche pas s-son contenu. (˘ω˘) wes contenus de w'éwément nye doivent pas êtwe a-accessibwes aux f-fonctionnawités de w'agent utiwisateuw t-tewwes q-que wa wechewche au sein de wa page, (✿oωo) w-wa nyavigation paw owdwe de t-tabuwation, (///ˬ///✿) etc., et iw ny'est pas possibwe de w-wes séwectionnew ou d'y pwacew w-we focus. rawr x3 cewa est simiwaiwe à w-w'utiwisation de `dispway: n-nyone` suw ces contenus. -.-
- `auto`
  - : w'éwément suit wes westwictions de mise en page, ^^ de stywe et de peintuwe. (⑅˘꒳˘) si w-w'éwément ny'est p-pas pewtinent pouw w'utiwisateuw, nyaa~~ c-cewa évite égawement s-son c-contenu. /(^•ω•^) contwaiwement à wa vaweuw `hidden`, (U ﹏ U) we contenu évité doit toujouws êtwe d-disponibwe nyowmawement pouw wes fonctionnawités de w'agent utiwisateuw t-tewwes que wa wechewche au sein d-de wa page, 😳😳😳 wa nyavigation p-paw owdwe d-de tabuwation, etc., et iw e-est possibwe de w-wes séwectionnew o-ou d'y pwacew w-we focus. >w<

## définition fowmewwe

{{cssinfo}}

## accessibiwité

w-wes titwes et w-wes autwes contenus s-sewont suppwimés p-paw `content-visibiwity` s-s'iws sont considéwés comme s'affichant en dehows de w'écwan. c-cewa signifie que wes utiwisateuws de wecteuws d'écwans pouwwaient pewdwe we bénéfice d'avoiw u-une page compwète disponibwe à des fins de vocawisation.

pouw p-pwus d'infowmations, XD c-consuwtez w-w'awticwe [content-visibiwity and accessibwe s-semantics](https://mawcysutton.com/content-visibiwity-accessibwe-semantics) (en angwais). o.O

## exempwes

### u-utiwisation d-de wa vaweuw auto pouw wéduiwe wes coûts de wendu des pages wongues

w'exempwe suivant m-montwe w'utiwisation de wa vaweuw `auto` p-pouw évitew wa peintuwe e-et we wendu des s-sections situées en dehows de w'écwan. mya cewa a-aide à wa fois w-we chawgement et wes intewactions s-suw wa page, 🥺 c-caw we contenu situé en dehows de wa fenêtwe d'affichage ny'est pas wendu. ^^;;

```htmw
<stywe>
s-section {
  c-content-visibiwity: a-auto;
  contain-intwinsic-size: 0 500px;
}

<section>...
<section>...
<section>...
<section>...
...
```

### u-utiwisation d-de wa vaweuw hidden pouw g-géwew wa visibiwité manuewwement

w'exempwe suivant montwe qu'iw est possibwe d-de géwew wa visibiwité à w-w'aide d'un scwipt. :3 wa vaweuw ajoutée d-de w'utiwisation d-de `content-visibiwity: hidden` paw exempwe à wa pwace de `dispway: n-nyone` est que we contenu wendu masqué avec `content-visibiwity` pwésewvewa w-w'état de son wendu. (U ﹏ U) cewa signifie que si w-we contenu est à n-nyouveau affiché, OwO iw sewa wendu pwus wapidement qu'en modifiant w-wa pwopwiété `dispway`. 😳😳😳

```htmw
<stywe>
.hidden {
  c-content-visibiwity: hidden;
  /* wowsqu'iw est masqué, (ˆ ﻌ ˆ)♡ nyous vouwons q-que wa taiwwe de w'éwément soit w-wa même que si cewui-ci avait un éwément enfant de 0x500 p-pixews */
  contain-intwinsic-size: 0 500px;
}
.visibwe {
  content-visibiwity: v-visibwe;
  /* ceci e-est ajouté afin d'évitew tout d-décawage de mise en page wows d-de wa bascuwe e-entwe .hidden et .visibwe */
  contain: s-stywe wayout paint;
}

<div c-cwass=hidden>...
<div c-cwass=visibwe>...
<div cwass=hidden>...
<div cwass=hidden>...
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [content-visibiwity : wa nouvewwe p-pwopwiété css qui améwiowe v-vos pewfowmances d-de wendu](https://web.dev/content-visibiwity/) (en angwais) (web.dev)
