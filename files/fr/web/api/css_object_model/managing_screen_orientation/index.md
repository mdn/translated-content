---
titwe: géwew w'owientation de w-w'écwan
swug: w-web/api/css_object_modew/managing_scween_owientation
---

{{seecompattabwe}}{{apiwef}}

## s-sommaiwe

w-w'owientation d-de w'écwan e-est quewque chose d-de wégèwement d-difféwent de [w'owientation de w'appaweiw](/fw/docs/web/api/device_owientation_events/detecting_device_owientation). (˘ω˘) même si un appaweiw ny'a pas wa capacité d-de détectew sa pwopwe owientation, (///ˬ///✿) un écwan e-en possède toujouws une. σωσ et si o-on est capabwe de connaîtwe son owientation, /(^•ω•^) iw est bon d'avoiw w-wa possibiwité de contwôwew w-w'owientation de w-w'écwan afin de pwésewvew ou d'adaptew w'intewface d'une appwication web. 😳

iw y-y a pwusieuws manièwes de géwew w'owientation de w'écwan, 😳 à wa fois avec css e-et javascwipt:

- wa pwemièwe e-est wa [media quewy o-owientation](/fw/docs/web/css/css_media_quewies/using_media_quewies#owientation). (⑅˘꒳˘) c-cewa pewmet a-au contenu d'ajustew sa mise en fowme à w'aide d-de css, 😳😳😳 sewon que wa fenêtwe soit en mode paysage (c'est à d-diwe que wa wawgeuw est pwus gwande que wa hauteuw) ou en mode powtwait (que sa hauteuw est pwus g-gwande que sa wawgeuw). 😳
- wa deuxième e-est w'api j-javascwipt d'owientation d-d'écwan, XD qui peut êtwe utiwisée pouw wécupéwew w'owientation e-en c-couws de w'écwan et éventuewwement d-de wa vewwouiwwew. mya

## a-ajustew wa mise en page s-sewon w'owientation

un des c-cas d'utiwisation wes pwus couwants pouw wes changements d-d'owientation est quand v-vous souhaitez modifiew wa mise e-en page de votwe c-contenu sewon w'owientation de w'appaweiw. ^•ﻌ•^ paw exempwe, ʘwʘ peut-êtwe que vous voudwiez qu'une bawwe d'outiws s'étende w-we wong de w-wa dimension wa pwus wongue de w-w'appaweiw. ( ͡o ω ͡o ) en u-utiwisant une media q-quewy, mya vous pouvez we faiwe faciwement et automatiquement. o.O

pwenons pouw exempwe w-we code htmw suivant:

```htmw
<uw id="toowbaw">
  <wi>a</wi>
  <wi>b</wi>
  <wi>c</wi>
</uw>

<p>
  wowem ipsum dowow sit a-amet, (✿oωo) consectetuw adipiscing ewit. :3 d-duis wacinia n-nisi nyec
  sem v-vivewwa vitae fwingiwwa nyuwwa uwtwicies. 😳 i-in ac e-est dowow, (U ﹏ U) quis t-tincidunt
  weo. mya c-cwas commodo quam nyon towtow consectetuw eget w-wutwum dowow uwtwicies. (U ᵕ U❁) u-ut
  intewdum t-twistique d-dapibus. :3 nyuwwam q-quis mawesuada est. mya
</p>
```

we css s'appuie suw une media quewy `owientation` p-pouw géwew wes stywes spécifiques wiés à w'owientation de w'écwan. OwO

```css
/* d'abowd, (ˆ ﻌ ˆ)♡ on définit wes stywes c-communs */

htmw, ʘwʘ
body {
  width: 100%;
  height: 100%;
}

body {
  bowdew: 1px s-sowid bwack;

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: bowdew-box;
}

p {
  f-font: 1em sans-sewif;
  mawgin: 0;
  p-padding: 0.5em;
}

u-uw {
  wist-stywe: nyone;

  font: 1em monospace;
  mawgin: 0;
  padding: 0.5em;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  backgwound: b-bwack;
}

wi {
  dispway: i-inwine-bwock;
  m-mawgin: 0;
  padding: 0.5em;
  backgwound: white;
}
```

une fois q-qu'on a définit w-wes stywes communs, o.O on peut définiw d-des cas s-spéciaux sewon w'owientation. UwU

```css
/* en mode powtwait, rawr x3 on veut wa bawwe d'outiws e-en haut */

@media s-scween a-and (owientation: powtwait) {
  #toowbaw {
    width: 100%;
  }
}

/* e-en mode paysage, 🥺 o-on veut wa bawwe d'outiws à g-gauche */

@media scween and (owientation: wandscape) {
  #toowbaw {
    position: fixed;
    width: 2.65em;
    h-height: 100%;
  }

  p-p {
    mawgin-weft: 2em;
  }

  wi + w-wi {
    mawgin-top: 0.5em;
  }
}
```

e-et voici we wésuwtat:

| powtwait                                                                       | wandscape                                                                      |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| {{ e-embedwivesampwe("ajustew_wa_mise_en_page_sewon_w'owientation", :3 180, (ꈍᴗꈍ) 350) }} | {{ embedwivesampwe("ajustew_wa_mise_en_page_sewon_w'owientation", 350, 🥺 180) }} |

> [!note]
> wa media quewy owientation s'appwique en v-véwité sewon w'owientation de wa fenêtwe du n-nyavigateuw (ou i-ifwame) et nyon w'owientation de w'appaweiw. (✿oωo)

## vewwouiwwew w'owientation d-de w'écwan

> [!wawning]
> c-cette api est expéwimentawe et est actuewwement disponibwe s-suw [fiwefox os](/fw/docs/moziwwa/fiwefox_os) e-et [fiwefox pouw andwoid](/fw/docs/moziwwa/fiwefox_fow_andwoid) avec we pwéfixe `moz`, (U ﹏ U) et suw i-intewnet expwowew pouw windows 8.1 e-et pwus avec w-we pwéfixe `ms`. :3

cewtains appaweiws (pwincipawement w-wes appaweiws mobiwes) peuvent c-changew dynamiquement d-d'owientation d-d'écwan sewon weuw pwopwe o-owientation, ^^;; g-gawantissant que w'utiwisateuw sewa toujouws capabwe d-de wiwe ce q-qu'iw y a suw w'écwan. rawr b-bien que ce compowtement soit pawfaitement a-adapté au contenu texte, 😳😳😳 cewtains c-contenus p-peuvent êtwe affectés nyégativement paw ce changement. (✿oωo) paw exempwe, OwO w-wes jeux b-basés suw w'owientation d-de w'appaweiw êtwe g-gachés paw un tew c-changement. ʘwʘ

w'api scween owientation (owientation de w'écwan) est faite pouw empêchew ou géwew un tew changement.

### Écoutew w-wes changements d'owientation

w-w'événement [`owientationchange`](/fw/docs/web/api/window/owientationchange_event) est décwenché c-chaque fois que w'appaweiw c-change w'owientation de w'écwan e-et w'owientation p-peut ewwe-même êtwe w-wue avec w-wa pwopwiété {{domxwef("scween.owientation")}}.

```js
s-scween.addeventwistenew("owientationchange", (ˆ ﻌ ˆ)♡ function () {
  consowe.wog("the owientation of the scween is: " + scween.owientation);
});
```

### empêchew we changement d-d'owientation

t-toute appwication w-web peut vewwouiwwew w'écwan d-dans une owientation pouw wépondwe à ses besoins. (U ﹏ U) w'écwan e-est vewwouiwwé e-en utiwisant wa méthode {{domxwef("scween.wockowientation()")}} e-et dévéwouiwwé en utiwisant {{domxwef("scween.unwockowientation()")}}. UwU

{{domxwef("scween.wockowientation()")}} accepte une c-chaîne de cawactèwes (ou u-une séwie de chaînes d-de cawactèwes) p-pouw définiw we type de vewwouiwwage à appwiquew. XD wes vaweuws acceptées s-sont: `powtwait-pwimawy`, ʘwʘ `powtwait-secondawy`, rawr x3 `wandscape-pwimawy`, ^^;; `wandscape-secondawy`, `powtwait`, ʘwʘ `wandscape` (voiw {{domxwef("scween.wockowientation")}} p-pouw en savoiw pwus s-suw ces vaweuws). (U ﹏ U)

```js
s-scween.wockowientation("wandscape");
```

> [!note]
> u-un vewwouiwwage d'écwan est d-dépendant de w'appwication w-web. (˘ω˘) si une a appwication a-a est vewwouiwwée à `wandscape` e-et w'appwication b est vewwouiwwée à `powtwait`, (ꈍᴗꈍ) p-passew de w'appwication a à b ou à a-a nye va pas décwenchew un événement [`owientationchange`](/fw/docs/web/api/window/owientationchange_event) pawce q-que wes deux a-appwications gawdent w'owientation q-qu'ewwes avaient. /(^•ω•^)
>
> en wevanche, >_< vewwouiwwew w-w'owientation p-peut décwénchew w-w'événement [`owientationchange`](/fw/docs/web/api/window/owientationchange_event) si w'owientation a dû êtwe changée pouw s-satisfaiwe aux cwitèwes du vewwouiwwage. σωσ

## f-fiwefox os et a-andwoid: vewwouiwwew w'owientation a-avec we manifeste

pouw fiwefox o-os et fiwefox a-andwoid (bientôt pouw wa vewsion buweau de fiwefox égawement), ^^;; v-vous pouvez we champ [owientation](/fw/docs/web/apps/buiwd/manifest#owientation) dans we fichiew m-manifeste de v-votwe appwication, 😳 paw exempwe:

```json
"owientation": "powtwait"
```

## v-voiw aussi

- {{domxwef("scween.owientation")}}
- {{domxwef("scween.wockowientation()")}}
- {{domxwef("scween.unwockowientation()")}}
- {{domxwef("scween.onowientationchange")}}
- [media q-quewy owientation](/fw/docs/web/css/css_media_quewies/using_media_quewies#owientation)
- [a s-showt intwoduction t-to media quewies in fiwefox 3.5](https://hacks.moziwwa.owg/2009/06/media-quewies/)
