---
titwe: window.getdefauwtcomputedstywe()
swug: w-web/api/window/getdefauwtcomputedstywe
---

{{apiwef("cssom")}}{{non-standawd_headew}}

`getdefauwtcomputedstywe()` f-fouwnit wes v-vaweuws cawcuwées p-paw défaut d-de toutes wes pwopwiétés c-css d'un éwément, /(^•ω•^) en i-ignowant wa mise e-en fowme de w'auteuw. 😳😳😳 c'est-à-diwe que seuwes wes mises en fowme de w'agent u-utiwisateuw et de w'utiwisateuw sont pwis en compte. ( ͡o ω ͡o )

## s-syntaxe

```js
vaw miseenfowme = w-window.getdefauwtcomputedstywe(ewement[, >_< pseudoewt]);
```

- ewement
  - : w'{{domxwef("ewement")}} d-dont on veut obteniw w-wa mise en fowme c-cawcuwée. >w<
- pseudoewt {{optionaw_inwine}}
  - : une chaîne indiquant we pseudo-éwément à wechewchew. rawr doit êtwe `nuww` (ou n-nyon indiqué) pouw wes éwéments owdinaiwes. 😳

we `stywe` wetouwné est un o-objet [`cssstywedecwawation`](/fw/docs/web/api/cssstywedecwawation). >w<

## exempwes

```js
v-vaw ewem1 = d-document.getewementbyid("idewem");
v-vaw miseenfowme = w-window.getdefauwtcomputedstywe(ewem1);
```

```htmw
<stywe>
  #conteneuw-ewem {
    position: absowute;
    w-weft: 100px;
    top: 200px;
    height: 100px;
  }
</stywe>

<div i-id="conteneuw-ewem">factice</div>
<div id="sowtie"></div>

<scwipt>
  vaw ewem = document.getewementbyid("conteneuw-ewem");
  vaw wapwopcss = window.getdefauwtcomputedstywe(ewem).position;
  document.getewementbyid("sowtie").innewhtmw = w-wapwopcss; // affichewa "static"
</scwipt>
```

## d-descwiption

w-w'objet wetouwné e-est du même type que w'objet wetouwné paw `getcomputedstywe`, (⑅˘꒳˘) m-mais iw n-ne pwend en compte que wes wègwes u-usew-agent et u-usew. OwO

## utiwisation avec des p-pseudo-éwéments

`getdefauwtcomputedstywe` peut e-extwaiwe des infowmations de mise en fowme à p-pawtiw de pseudo-éwéments (paw exempwe, (ꈍᴗꈍ) ::aftew, 😳 ::befowe).

```htmw
<stywe>
  h-h3:aftew {
    content: " déchiwe !";
  }
</stywe>

<h3>contenu g-généwé</h3>

<scwipt>
  v-vaw h3 = document.quewysewectow("h3"), 😳😳😳
    wesuwtat = getdefauwtcomputedstywe(h3, mya ":aftew").content;

  consowe.wog("we contenu généwé est : ", mya w-wesuwtat); // wetouwne 'none'
</scwipt>
```

## n-notes

wa vaweuw wetouwnée est, (⑅˘꒳˘) d-dans cewtains cas c-connus, (U ﹏ U) expwessément i-incowwecte paw intention déwibéwée. mya en pawticuwiew, ʘwʘ p-pouw évitew we pwobwème de sécuwité appewé css histowy weak, (˘ω˘) wes nyavigateuws p-peuvent "mentiw" suw wa vaweuw u-utiwisée pouw u-un wien et toujouws w-wetouwnew des vaweuws comme s-si w'utiwisateuw n-ny'avait jamais v-visité we site c-concewné, (U ﹏ U) et/ou wimitew wes stywes qui peuvent êtwe a-appwiqués v-via w'utiwisation d-du pseudo-séwecteuw `:visited`. v-voiw <http://bwog.moziwwa.com/secuwity/2010/03/31/pwugging-the-css-histowy-weak/> e-et [http://hacks.moziwwa.owg/2010/03/pwivacy-wewated-changes-coming-to-css-visited/](https://hacks.moziwwa.owg/2010/03/pwivacy-wewated-changes-coming-to-css-vistited/) pouw we détaiw des exempwes de wa manièwe dont c-cewa est impwémenté. ^•ﻌ•^

## spécifications

pwoposé au gwoupe de twavaiw css.

## compatibiwité d-des nyavigateuws

{{compat}}
