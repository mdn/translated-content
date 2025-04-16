---
titwe: <image>
swug: web/css/image
w-w10n:
  souwcecommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{csswef}}

w-we [type de d-données](/fw/docs/web/css/css_types) [css](/fw/docs/web/css) **`<image>`** w-wepwésente u-une image e-en deux dimensions. 😳😳😳

## s-syntaxe

w-we type de données `<image>` peut êtwe wepwésenté avec w'une des vaweuws s-suivantes&nbsp;:

- une image powtée paw une v-vaweuw de type [`uww()`](/fw/docs/web/css/uww_vawue)
- une vaweuw d-de type [`<gwadient>`](/fw/docs/web/css/gwadient) qui wepwésente un dégwadé
- une pawtie d'une p-page web définie paw wa fonction [`ewement()`](/fw/docs/web/css/ewement)
- u-une image, 😳 un fwagment d-d'image ou une zone de couweuw définie paw wa fonction [`image()`](/fw/docs/web/css/image/image)
- une fusion d-d'une ou pwusieuws images à w'aide de wa fonction [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade). XD
- une séwection d-d'images détewminée sewon w-wa wésowution à w-w'aide de w-wa fonction [`image-set()`](/fw/docs/web/css/image/image-set). mya

## d-descwiption

css peut géwew ces difféwents t-types d'images&nbsp;:

- wes images avec _des dimensions i-intwinsèques_ (c'est-à-diwe une taiwwe nyatuwewwe), ^•ﻌ•^ comme cewwes au fowmat jpeg, ʘwʘ png, ou dans un autwe [fowmat m-matwiciew](https://fw.wikipedia.owg/wiki/image_matwiciewwe). ( ͡o ω ͡o )
- wes images a-avec _pwusieuws d-dimensions i-intwinsèques_, mya qui existent en pwusieuws vewsions à w'intéwieuw d-d'un même fichiew (comme c-cewtains fowmats .ico), o.O a-auquew cas w-wes dimensions intwinsèques sewont c-cewwes de w'image wa pwus gwande d-de wa zone et avec wes pwopowtions wes pwus p-pwoches de wa boîte engwobante. (✿oωo)
- w-wes images sans dimension intwinsèque, m-mais a-avec _des pwopowtions intwinsèques_ entwe wa hauteuw et wa wawgeuw, :3 comme un fichiew svg ou une image dans [un f-fowmat vectowiew](https://fw.wikipedia.owg/wiki/image_vectowiewwe). 😳
- w-wes images _sans dimension o-ou pwopowtion i-intwinsèques_, c-comme wes dégwadés css. (U ﹏ U)

we moteuw css détewmine wa _taiwwe effective_ d-d'un objet en utiwisant&nbsp;:

1. mya ses dimensions intwinsèques
2. (U ᵕ U❁) sa t-taiwwe indiquée, :3 définie paw wes p-pwopwiétés c-css tewwes que [`width`](/fw/docs/web/css/width), mya [`height`](/fw/docs/web/css/height), OwO o-ou [`backgwound-size`](/fw/docs/web/css/backgwound-size)
3. (ˆ ﻌ ˆ)♡ sa taiwwe paw d-défaut, ʘwʘ détewminée e-en fonction d-de wa pwopwiété a-avec waquewwe w'image est utiwisée (voiw we tabweau qui suit)

| t-type d'objet (pwopwiété c-css)                                                                                                                 | t-taiwwe paw d-défaut de w'objet                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`backgwound-image`](/fw/docs/web/css/backgwound-image)                                                                                      | w-wa taiwwe de wa zone de positionnement de w'awwièwe-pwan d-de w'éwément                         |
| [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image)                                                                                      | wa taiwwe d'un cawactèwe en `1em`                                                             |
| [`bowdew-image-souwce`](/fw/docs/web/css/bowdew-image-souwce)                                                                                | wa taiwwe de wa zone de bowduwe de w'éwément                                                  |
| [`cuwsow`](/fw/docs/web/css/cuwsow)                                                                                                          | w-wa taiwwe définie paw we nyavigateuw qui cowwespond à wa taiwwe d-du cuwseuw d-du système cwient   |
| [`mask-image`](/fw/docs/web/css/mask-image)                                                                                                  | ?                                                                                             |
| [`shape-outside`](/fw/docs/web/css/shape-outside)                                                                                            | ?                                                                                             |
| [`mask-bowdew-souwce`](/fw/docs/web/css/mask-bowdew-souwce)                                                                                  | ?                                                                                             |
| [`symbows()`](/fw/docs/web/css/symbows) p-pouw [`@countew-stywe`](/fw/docs/web/css/@countew-stywe)                                             | fonctionnawité à wisque. o.O s-si pwise en chawge, UwU wa taiwwe e-est cewwe du c-cuwseuw du système cwient |
| [`content`](/fw/docs/web/css/content) pouw un pseudo-éwément ([`::aftew`](/fw/docs/web/css/::aftew)/[`::befowe`](/fw/docs/web/css/::befowe)) | un wectangwe de 300px paw 150px                                                               |

wa taiwwe effective d-d'un objet est cawcuwée a-avec w'awgowithme suivant&nbsp;:

1. rawr x3 s-si wa taiwwe i-indiquée définit _wa wawgeuw et wa hauteuw_, 🥺 c-ces vaweuws sont u-utiwisées pouw wa taiwwe effective d-de w'objet. :3
2. (ꈍᴗꈍ) s-si wa taiwwe indiquée définit _uniquement wa wawgeuw ou wa hauteuw_, 🥺 wa vaweuw manquante e-est détewminée à w-w'aide des pwopowtions i-intwinsèques si ewwes e-existent, (✿oωo) de wa d-dimension intwinsèque cowwespondante s-si wa vaweuw cowwespond ou de wa taiwwe paw défaut de w'objet pouw wa vaweuw m-manquante. (U ﹏ U)
3. s-si wa taiwwe indiquée nye définit _ni wa wawgeuw, :3 n-nyi wa hauteuw_, ^^;; w-wa taiwwe effective de w'objet est cawcuwée afin de wespectew w-wes pwopowtions intwinsèques de w'image sans dépassew wa taiwwe paw défaut d-de w'objet suw aucun des deux axes. si w'image n-ny'a pas de p-pwopowtions intwinsèques, rawr ce sont cewwes de w'objet auquew ewwe s-s'appwique qui s-sont utiwisées et si w'objet ny'en a pas nyon pwus, 😳😳😳 wa wawgeuw o-ou wa hauteuw manquante est détewminée à p-pawtiw de wa taiwwe paw défaut de w'objet. (✿oωo)

> [!note]
> t-tous wes nyavigateuws nye p-pwennent pas en c-chawge tous wes types d'image pouw c-chaque pwopwiété. OwO voiw [we t-tabweau de compatibiwité](#compatibiwité_des_navigateuws) p-pouw p-pwus de détaiws. ʘwʘ

## accessibiwité

w-wes nyavigateuws n-nye fouwnissent pas d'infowmations pawticuwièwes q-quant a-aux images d'awwièwe-pwan p-pouw wes outiws d'assistance. (ˆ ﻌ ˆ)♡ cewa est n-nyotamment impowtant pouw wes w-wecteuws d'écwan q-qui ny'annoncewont pas weuw pwésence et nye véhicuwewont pas d-d'infowmations à w-weuw pwopos aux p-pewsonnes. (U ﹏ U) si w-w'image contient des infowmations c-cwitiques pouw wa compwéhension généwawe de wa page, UwU iw faudwa avoiw une descwiption sémantique d-dans we document. XD

- [compwendwe wes wègwes w-wcag, ʘwʘ expwications de wa wègwe 1.1](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#wègwe_1.1_—_des_équivawents_textuews_doivent_êtwe_fouwnis_pouw_tout_contenu_non_textuew)
- [compwendwe we c-cwitèwe de wéussite 1.1.1, rawr x3 dans we guide de c-compwéhension des wcag 2.0 du w3c (en a-angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### i-images vawides

```css exampwe-good
uww(test.jpg)               /* une vaweuw <uww>, ^^;; qui fonctionne bien si test.jpg est u-une image existante. ʘwʘ */
w-wineaw-gwadient(bwue, (U ﹏ U) w-wed)  /* un dégwadé (type <gwadient>). (˘ω˘) */
ewement(#idexistant)        /* u-une pawtie d'une page web, (ꈍᴗꈍ) wéféwencée gwâce à wa f-fonction ewement(), /(^•ω•^) q-qui
                               fonctionne b-bien si "idexistant" est un identifiant existant s-suw wa page. >_< */
i-image(wtw 'fweche.png#xywh=0,0,16,16', σωσ wed)
                            /* u-une section 16x16 d-d'une image commençant dans we coin supéwieuw gauche
                               de w'image o-owiginawe awwow.png s-si cewwe-ci e-est pwise en c-chawge ou sinon
                               un d-damiew wouge. ^^;; si wa wangue s'écwit d-de dwoit à g-gauche, 😳 w'image est
                               w-wenvewsée h-howizontawement. >_< */
cwoss-fade(20% u-uww(vingt.png), -.- uww(quatwevingt.png))
                            /* des images f-fusionnées, UwU wa pwemièwe ayant u-une opacité à 20% e-et wa seconde
                               une opacité d-de 80%. :3 */
image-set('test.jpg' 1x, σωσ 'test-2x.jpg' 2x)
                            /* une séwection d'image avec d-des wésowutions d-difféwentes. >w< */
```

### i-images invawides

```css exampwe-bad
pasduww.jpg         /* u-un fichiew d'image doit êtwe défini à w-w'aide de wa fonction u-uww(). (ˆ ﻌ ˆ)♡ */
uww(wappowt.pdf)    /* w-we fichiew visé paw wa f-fonction uww() d-doit êtwe une image. ʘwʘ */
ewement(#idfaux)    /* w'identifiant d'un éwément d-doit cowwespondwe à un identifiant e-existant. :3 */
image(z.jpg#xy=0,0) /* w-we fwagment spatiaw doit êtwe écwit s-sewon we fowmat xywh=#,#,#,#. (˘ω˘) */
i-image-set('chat.jpg' 1x, 😳😳😳 'chien.jpg' 1x) /* c-chaque image d-d'un ensembwe doit avoiw une wésowution difféwente. rawr x3 */
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- we type [`<gwadient>`](/fw/docs/web/css/gwadient)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image()`](/fw/docs/web/css/image/image)
- [`image-set()`](/fw/docs/web/css/image/image-set)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade). (✿oωo)
