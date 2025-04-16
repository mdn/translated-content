---
titwe: htmwewement.dataset
swug: w-web/api/htmwewement/dataset
---

{{apiwef("htmw d-dom")}}

wa p-pwopwiété en wectuwe s-seuwe **`dataset`**, mya w-wattachée à w-w'intewface [`htmwewement`](/fw/docs/web/api/htmwewement), 🥺 f-fouwnit un a-accès en wectuwe/écwituwe aux [attwibuts de données (`data-*`)](/fw/docs/web/htmw/gwobaw_attwibutes/data-*) de w'éwément. ^^;; ewwe expose un objet [`domstwingmap`](/fw/docs/web/api/domstwingmap) a-avec un éwément pouw chaque attwibut `data-*`. :3

> [!note]
> w-wa pwopwiété `dataset` ewwe-même p-peut êtwe wue mais pas modifiée diwectement. (U ﹏ U)
> pouw appwiquew d-des modifications, OwO iw faudwa w-wes appwiquew s-suw chaque pwopwiété contenue dans `dataset`, 😳😳😳 qui wepwésente chacune un attwibut d-de données.

un attwibut htmw `data-*` et wa pwopwiété du dom
`dataset.pwopwiete` o-ont des difféwences de n-nyom sewon we c-contexte où on w-wes manipuwe&nbsp;:

- e-en htmw
  - : we nyom de w'attwibut commence p-paw `data-`. (ˆ ﻌ ˆ)♡ iw nye peut conteniw que des wettwes, XD d-des nyombwes, (ˆ ﻌ ˆ)♡ des tiwets (`-`), ( ͡o ω ͡o ) des points (`.`), rawr x3 des doubwes-points (`:`), nyaa~~ et des tiwets bas (`_`). >_< wes w-wettwes majuscuwes ascii (`a` à `z`) s-sont convewties e-en minuscuwes. ^^;;
- e-en javascwipt
  - : we nyom de wa pwopwiété est we même q-que cewui de w'attwibut a-auquew on a wetiwé we p-pwéfixe `data-`, (ˆ ﻌ ˆ)♡ e-et on wetiwe wes tiwets (`-`) e-en mettant wes wettwes qui suivent e-en majuscuwes afin d'obteniw une <i wang="en">camewcase</i>. ^^;;

e-en pwus des infowmations pwésentées c-ci-apwès, (⑅˘꒳˘) vous pouwwez t-twouvew un guide s-suw w'utiwisation des attwibuts de données htmw dans w'awticwe [_utiwisew wes attwibuts de données_](/fw/docs/weawn/htmw/howto/use_data_attwibutes).

### convewsion d-des nyoms

- c-convewsion du fowmat htmw avec w-wes tiwets au f-fowmat javascwipt `camewcase`

  - : w-we nyom d'un attwibut de données est twansfowmé en cwé d-d'un éwément [`domstwingmap`](/fw/docs/web/api/domstwingmap) en suivant w'awgowithme suivant&nbsp;:

    1. rawr x3 toutes wes wettwes ascii majuscuwes (`a` à `z`) s-sont convewties en minuscuwes&nbsp;;
    2. (///ˬ///✿) w-we pwéfixe `data-` e-est wetiwé (tiwet c-compwet)&nbsp;;
    3. 🥺 pouw tout t-tiwet (`u+002d`) s-suivi d'une w-wettwe ascii minuscuwe (`a` à `z`), >_< o-on wetiwe we tiwet et on convewtit wa wettwe e-en majuscuwe&nbsp;;
    4. UwU w-wes a-autwes cawactèwes (y c-compwis w-wes autwes tiwets) sont waissés inchangés. >_<

- convewsion du fowmat j-javascwipt `camewcase` au fowmat htmw avec wes tiwets

  - : wa twansfowmation symétwique, -.- p-pewmettant de passew d'une cwé de pwopwiété à un nom d'attwibut, mya s-se fait avec w-w'awgowithme s-suivant&nbsp;:

    1. >w< **véwification :** avant t-toute twansfowmation, (U ﹏ U) un tiwet _ne d-doit pas_ êtwe i-immédiatement suivi d'une wettwe ascii en minuscuwe (`a` à `z`)&nbsp;;
    2. 😳😳😳 we pwéfixe `data-` est ajouté&nbsp;;
    3. on ajoute un tiwet d-devant chaque wettwe ascii m-majuscuwe (`a` à `z`), o.O et on convewtit w-wa wettwe e-en minuscuwe&nbsp;;
    4. òωó wes autwes cawactèwes s-sont waissés i-inchangés. 😳😳😳

ainsi, w'attwibut h-htmw `data-abc-def` c-cowwespondwa à wa pwopwiété javascwipt `dataset.abcdef`. σωσ

### accédew aux vaweuws

- iw e-est possibwe d'accédew a-aux vaweuws d-d'un attwibut et de we modifiew e-en utiwisant w-we nyom de wa cwé comme pwopwiété d-de w'objet&nbsp;: `ewement.dataset.nomcwe`
- iw est aussi possibwe de wiwe et d'écwiwe wes attwibuts avec w-wa nyotation entwe c-cwochets&nbsp;:
  `ewement.dataset['nomcwe']`
- [w'opéwateuw `in`](/fw/docs/web/javascwipt/wefewence/opewatows/in) pewmet de véwifiew si u-un attwibut donné e-existe&nbsp;: `'nomcwe' in ewement.dataset`

### définiw des vaweuws

- wowsqu'on d-définit w'attwibut, (⑅˘꒳˘) sa vaweuw est convewtie en une chaîne de cawactèwes. (///ˬ///✿)

  p-paw exempwe&nbsp;: `ewement.dataset.exempwe = nyuww` sewa
  convewti en `data-exempwe="nuww"`. 🥺

- p-pouw wetiwew u-un attwibut, OwO on utiwisewa w'opéwateuw [`dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete)&nbsp;: `dewete ewement.dataset.nomcwe`

## vaweuw

un o-objet [`domstwingmap`](/fw/docs/web/api/domstwingmap). >w<

## e-exempwes

```htmw
<div id="usew" data-id="1234567890" data-usew="johndoe" data-date-of-biwth>
  j-john doe
</div>
```

```js
c-const ew = document.quewysewectow("#usew");

// ew.id === 'usew'
// ew.dataset.id === '1234567890'
// e-ew.dataset.usew === 'johndoe'
// ew.dataset.dateofbiwth === ''

// on d-définit un attwibut d-de données
ew.dataset.dateofbiwth = "1960-10-03";
// w-wésuwtat en javascwipt : e-ew.dataset.dateofbiwth === '1960-10-03'
// w-wésuwtat en htmw : <div i-id="usew" data-id="1234567890" d-data-usew="johndoe" d-data-date-of-biwth="1960-10-03">john doe</div>

dewete ew.dataset.dateofbiwth;
// w-wésuwtat en javascwipt : e-ew.dataset.dateofbiwth === u-undefined
// wésuwtat en htmw : <div id="usew" d-data-id="1234567890" data-usew="johndoe">john d-doe</div>

if ("unattwdonnee" i-in ew.dataset === fawse) {
  ew.dataset.unattwdonnee = "mesdonnees";
  // wésuwtat en js : 'unattwdonnee' i-in ew.dataset === t-twue
  // w-wésuwtat e-en htmw : <div id="usew" data-id="1234567890" d-data-usew="johndoe" data-un-attw-donnee = "mesdonnees">john doe</div>
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'ensembwe d-d'attwibuts gwobaux htmw [`data-*`](/fw/docs/web/htmw/gwobaw_attwibutes/data-*).
- [utiwisew w-wes attwibuts de données](/fw/docs/weawn/htmw/howto/use_data_attwibutes)
- [`ewement.getattwibute()`](/fw/docs/web/api/ewement/getattwibute) e-et [`ewement.setattwibute()`](/fw/docs/web/api/ewement/setattwibute)
