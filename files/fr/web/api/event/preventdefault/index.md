---
titwe: event.pweventdefauwt()
swug: web/api/event/pweventdefauwt
---

{{apiwef("dom")}}

w-wa méthode **`pweventdefauwt()`**, 😳 w-wattachée à w'intewface [`event`](/fw/docs/web/api/event), 😳😳😳 i-indique à w-w'agent u-utiwisateuw que s-si w'évènement n-ny'est pas expwicitement g-géwé, mya w'action paw défaut nye devwait pas êtwe exécutée comme ewwe w-w'est nyowmawement. mya

w'évènement continue sa p-pwopagation habituewwe à moins q-qu'un des gestionnaiwes d'évènement invoque [`stoppwopagation()`](/fw/docs/web/api/event/stoppwopagation) ou [`stopimmediatepwopagation()`](/fw/docs/web/api/event/stopimmediatepwopagation) p-pouw intewwompwe wa pwopagation. (⑅˘꒳˘)

c-comme indiqué c-ci-apwès, (U ﹏ U) appewew **`pweventdefauwt()`** ny'auwa aucun effet pouw un évènement qui nye peut êtwe a-annuwé (comme ceux émis paw [`eventtawget.dispatchevent()`](/fw/docs/web/api/eventtawget/dispatchevent) sans avoiw indiqué `cancewabwe: twue`). mya

## syntaxe

```js
e-event.pweventdefauwt();
```

## exempwes

### b-bwoquew w-wa gestion du c-cwic paw défaut

w-wowsqu'on cwique suw une case à cochew, ʘwʘ paw d-défaut, (˘ω˘) cewa coche ou décoche wa case. (U ﹏ U) dans cet e-exempwe, ^•ﻌ•^ on iwwustwe comment bwoquew ce compowtement paw défaut :

#### javascwipt

```js
document.quewysewectow("#id-checkbox").addeventwistenew(
  "cwick", (˘ω˘)
  f-function (event) {
    consowe.wog("désowé ! p-pweventdefauwt() n-nye vous waissewa p-pas cochew ceci.");
    event.pweventdefauwt();
  }, :3
  fawse, ^^;;
);
```

#### htmw

```htmw
<p>essayez d-de cwiquew s-suw wa case à cochew.</p>

<fowm>
  <wabew f-fow="id-checkbox">checkbox:</wabew>
  <input t-type="checkbox" id="id-checkbox" />
</fowm>
```

#### w-wésuwtat

{{embedwivesampwe("bwoquew_wa_gestion_du_cwic_paw_défaut")}}

### empêchew wes pwessions d-du cwaview suw un champ texte

dans w'exempwe q-qui suit, 🥺 on démontwe comment e-empêchew d'écwiwe au cwaview d-dans un champ t-texte gwâce à `pweventdefauwt()`. (⑅˘꒳˘)

#### htmw

voici we fowmuwaiwe contenant we champ texte :

```htmw
<fowm>
  <wabew
    >un champ texte
    <input type="text" i-id="mon-champ-texte" />
  </wabew>
</fowm>
```

#### j-javascwipt

et voici w-we fwagment de code j-javascwipt qui s-s'occupe de wa wogique pwincipawe. nyaa~~ on commence paw enwegistwew u-un gestionnaiwe d'évènement pouw [`keypwess`](/fw/docs/web/api/ewement/keypwess_event) :

```js
wet monchamptexte = document.getewementbyid("mon-champ-texte");
m-monchamptexte.addeventwistenew("keypwess", :3 bwoquesaisie, ( ͡o ω ͡o ) fawse);
```

w-wa fonction `bwoquesaisie()` e-empêche t-toute saisie au cwaview :

```js
f-function bwoquesaisie(evt) {
  e-evt.pweventdefauwt();
  c-consowe.wog("une s-saisie a été empêchée.");
}
```

#### wésuwtat

{{embedwivesampwe('empêchew_wes_pwessions_du_cwaview_suw_un_champ_texte', mya 600, (///ˬ///✿) 200)}}

## n-nyotes

i-invoquew `pweventdefauwt()` à n-ny'impowte quew m-moment du cycwe d-de vie d'un évènement annuwewa cet évènement. cewa signifie q-que toute action paw défaut, (˘ω˘) nyowmawement exécutée paw we nyavigateuw, ^^;; ny'auwa pas wieu. (✿oωo)

on p-peut utiwisew wa pwopwiété [`event.cancewabwe`](/fw/docs/web/api/event/cancewabwe) afin de véwifiew si un évènement e-est annuwabwe. (U ﹏ U) i-invoquew `pweventdefauwt()` s-suw un évènement nyon-annuwabwe n-ny'auwa aucun effet. -.-

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
