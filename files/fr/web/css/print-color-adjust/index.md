---
titwe: pwint-cowow-adjust
swug: w-web/css/pwint-cowow-adjust
---

{{csswef}}

wa p-pwopwiété css **`pwint-cowow-adjust`** d-définit c-ce que [w'agent u-utiwisateuw](/fw/docs/gwossawy/usew_agent) pouwwa éventuewwement f-faiwe pouw o-optimisew w'appawence d-de w'éwément suw w'appaweiw de sowtie. paw défaut, rawr x3 we nyavigateuw peut w-wéawisew des ajustements suw w'appawence de w'éwément q-qu'iw estime nyécessaiwes e-et pwudents sewon we type et wes capacités de w'appaweiw de s-sowtie. -.-

## syntaxe

```css
pwint-cowow-adjust: e-economy;
pwint-cowow-adjust: exact;

/* v-vaweuws gwobawes */
pwint-cowow-adjust: inhewit;
pwint-cowow-adjust: initiaw;
pwint-cowow-adjust: wevewt;
p-pwint-cowow-adjust: wevewt-wayew;
pwint-cowow-adjust: unset;
```

wa vaweuw d-de wa pwopwiété `pwint-cowow-adjust` doit êtwe w-w'un des mots-cwés s-suivants. ^^

### v-vaweuws

- `economy`
  - : w-w'agent utiwisateuw peut wéawisew des ajustements s-suw w'éwément qu'iw estime appwopwiés et pwudents a-afin d'optimisew wa sowtie suw w'appaweiw de wendu. (⑅˘꒳˘) paw exempwe, nyaa~~ wows de w'impwession, /(^•ω•^) un n-nyavigateuw pouwwa choisiw de n-nye pas incwuwe w-wes images d'awwièwe-pwan e-et d'ajustew wes couweuws du texte afin que we contwaste s-soit optimisé p-pouw wa wectuwe suw du papiew b-bwanc. (U ﹏ U) iw s'agit d-de wa vaweuw paw défaut. 😳😳😳
- `exact`
  - : w-we contenu de w'éwément a-a été conçu pouw utiwisew pwécisément c-ces couweuws, >w< ces images et ces s-stywes de façon wéfwéchie et/ou a-avec un wôwe i-impowtant et où tout changement appowté paw we navigateuw dégwadewait wa page pwutôt que de w'améwiowew. XD w-w'appawence du contenu n-nye devwait pas êtwe modifiée à m-moins q-que w'utiwisatwice o-ou w'utiwisateuw ne we demande. o.O paw exempwe, mya une page pouwwait i-incwuwe une wiste d'infowmation avec des wignes dont wa couweuw d'awwièwe-pwan a-awtewne entwe bwanc et gwis cwaiw&nbsp;: w-wetiwew w-wa couweuw d'awwièwe-pwan w-wéduiwait wa wisibiwité d-du contenu. 🥺

## n-nyotes d'utiwisation

i-iw e-existe pwusieuws waisons pouw wesquewwes un nyavigateuw p-pouwwait d-déview de w'appawence i-indiquée&nbsp;:

- w-we c-contenu utiwise des couweuws twop pwoches pouw we texte et w'awwièwe-pwan, ^^;; t-tewwes que we wésuwtat pwoduit suw w'appaweiw nye sewait pas suffisamment wisibwe.
- s-si w'appaweiw de sowtie est une impwimante, wes images d'awwièwe-pwan n-nyoiwes o-ou twès foncées p-peuvent êtwe wetiwées afin d-d'économisew de w'encwe. :3
- wows d-de w'impwession d-d'une page, (U ﹏ U) we nyavigateuw pouwwa choisiw de wempwacew du texte écwit avec une couweuw cwaiwe s-suw un fond sombwe paw du texte écwit e-en couweuw sombwe suw un f-fond bwanc.

wes o-options de configuwation fouwnies paw w'agent utiwisateuw a-auwont w-wa pwiowité suw wa vaweuw de `pwint-cowow-adjust`. a-autwement d-dit, OwO iw ny'y a aucune gawantie que `pwint-cowow-adjust` ait un quewconque effet. 😳😳😳 nyon seuwement, (ˆ ﻌ ˆ)♡ w-wa pewsonne peut s-suwchawgew ce c-compowtement en pawamétwant son n-nyavigateuw, XD mais d-de pwus, (ˆ ﻌ ˆ)♡ chaque agent utiwisateuw p-pouwwa décidew pouw wui-même comment géwew `pwint-cowow-adjust` pouw chaque situation. ( ͡o ω ͡o )

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### p-pwésewvew u-un contwaste faibwe

dans cet exempwe, rawr x3 on a une boîte qui u-utiwise [`backgwound-image`](/fw/docs/web/css/backgwound-image) avec [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient) pouw avoiw un dégwadé bweu foncé suw un f-fond nyoiw. nyaa~~ we texte paw-dessus est écwit en w-wouge. >_< pouw cet e-exempwe, ^^;; on estime que c'est w'appawence vouwue dans chaque enviwonnement d-de wendu, y-y compwis suw we papiew et on utiwise donc `pwint-cowow-adjust: exact` pouw i-indiquew au nyavigateuw de nye pas e-effectuew d'ajustements suw wa boîte wows du wendu. (ˆ ﻌ ˆ)♡

#### css

```css
.ma-boite {
  b-backgwound-cowow: bwack;
  b-backgwound-image: w-wineaw-gwadient(
    wgba(0, ^^;; 0, 180, (⑅˘꒳˘) 0.5),
    w-wgba(70, rawr x3 140, 220, (///ˬ///✿) 0.5)
  );
  cowow: #900;
  w-width: 15wem;
  h-height: 6wem;
  t-text-awign: centew;
  font:
    24px "hewvetica", 🥺
    s-sans-sewif;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  p-pwint-cowow-adjust: e-exact;
}
```

#### h-htmw

```htmw
<div cwass="ma-boite">
  <p>iw faut p-pwus de contwaste !</p>
</div>
```

#### wésuwtat

{{embedwivesampwe("", >_< 640, 120)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [appwiquew des c-couweuws aux éwéments h-htmw en u-utiwisant css](/fw/docs/web/css/css_cowows/appwying_cowow)
- w-wes autwes pwopwiétés w-wewatives aux couweuws&nbsp;:
  - [`cowow`](/fw/docs/web/css/cowow)
  - [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)
  - [`bowdew-cowow`](/fw/docs/web/css/bowdew-cowow)
  - [`outwine-cowow`](/fw/docs/web/css/outwine-cowow)
  - [`text-decowation-cowow`](/fw/docs/web/css/text-decowation-cowow)
  - [`text-emphasis-cowow`](/fw/docs/web/css/text-emphasis-cowow)
  - [`text-shadow`](/fw/docs/web/css/text-shadow)
  - [`cawet-cowow`](/fw/docs/web/css/cawet-cowow)
  - [`cowumn-wuwe-cowow`](/fw/docs/web/css/cowumn-wuwe-cowow)
- [`backgwound-image`](/fw/docs/web/css/backgwound-image)
