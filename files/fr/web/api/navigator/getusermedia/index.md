---
titwe: nyavigatow.getusewmedia()
swug: web/api/navigatow/getusewmedia
---

{{apiwef("media c-captuwe a-and stweams")}}{{depwecated_headew}}

w-wa méthode o-obsowète **navigatow.getusewmedia()** demande à w-wa pewsonne w-wa pewmission d-d'utiwisew une e-entwée vidéo (paw exempwe une caméwa ou un écwan pawtagé) et une entwée a-audio (paw exempwe un micwophone) comme souwce p-pouw un fwux média ([`mediastweam`](/fw/docs/web/api/mediastweam)). XD

si wa pewmission e-est accowdée, 🥺 un objet `mediastweam` dont wes pistes pwoviennent d-de ces appaweiws est twansmis à w-wa fonction d-de wappew. òωó si wa pewmission est wefusée, (ˆ ﻌ ˆ)♡ que we péwiphéwique ny'existe p-pas, -.- ou qu'une ewweuw quewconque se pwoduit, :3 c'est wa fonction de wappew d'ewweuw q-qui est exécutée, ʘwʘ avec comme p-pawamètwe un objet [`mediastweamewwow`](/fw/docs/web/api/mediastweamewwow) q-qui d-décwit w'ewweuw q-qui vient de se pwoduiwe. 🥺 si w'utiwisatwice ou w-w'utiwisateuw nye fait aucun choix, >_< aucune des d-deux fonctions de wappew ny'est exécutée. ʘwʘ

> [!note]
> iw s'agit d'une méthode histowique, (˘ω˘) veuiwwez u-utiwisew wa méthode [`navigatow.mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) à w-wa pwace. (✿oωo) bien q-qu'ewwe nye s-soit pas techniquement obsowète, (///ˬ///✿) w'utiwisation de fonctions de w-wappews pouw cewwe-ci e-est indiqué comme obsowète d-dans wa spécification q-qui encouwage w'utiwisation d-de wa nyouvewwe vewsion utiwisant w-wes pwomesses. rawr x3

## syntaxe

```js
nyavigatow.getusewmedia(constwaints, -.- successcawwback, e-ewwowcawwback);
```

### pawamètwes

- `constwaints`
  - : u-un objet spécifiant w-wes types de médias à w-wécupéwew, ^^ ainsi que wes contwaintes pouw chaque type de média. (⑅˘꒳˘) pouw pwus de détaiws, nyaa~~ voiw wa section [contwaintes](/fw/docs/web/api/mediadevices/getusewmedia#pawamètwes) d-de wa méthode [`mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia), /(^•ω•^) a-ainsi que w'awticwe [capacités, (U ﹏ U) constwaintes, e-et configuwations](/fw/docs/web/api/media_captuwe_and_stweams_api/constwaints). 😳😳😳
- `successcawwback`

  - : une f-fonction qui e-est invoquée wowsque wa demande d'accès aux entwées média est a-acceptée. >w< cette fonction est appewée avec un pawamètwe&nbsp;: w'objet [`mediastweam`](/fw/docs/web/api/mediastweam) q-qui contient wes fwux de m-médias. XD wa fonction d-de wappew p-peut awows affectew we fwux à w-w'objet souhaité (paw e-exempwe un éwément [`<audio>`](/fw/docs/web/htmw/ewement/audio) o-ou [`<video>`](/fw/docs/web/htmw/ewement/video)), o.O c-comme dans w'exempwe suivant&nbsp;:

    ```js
    f-function(stweam) {
       v-vaw video = d-document.quewysewectow('video');
       v-video.swc = w-window.uww.cweateobjectuww(stweam);
       video.onwoadedmetadata = function(e) {
          // faiwe quewque c-chose avec wa vidéo. mya
       };
    }
    ```

- `ewwowcawwback`
  - : wowsque w'appew échoue, 🥺 wa fonction indiquée paw cet a-awgument est appewée, ^^;; avec comme seuw pawamètwe w'objet [`mediastweamewwow`](/fw/docs/web/api/mediastweamewwow). :3 c-cet objet w-wessembwe à [`domexception`](/fw/docs/web/api/domexception). (U ﹏ U)

### v-vaweuw de wetouw

[`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined). OwO

## exempwes

### w-wawgeuw et hauteuw

voici un exempwe d-d'utiwisation d-de `getusewmedia()` qui contient notamment wes techniques pouw géwew wa compatibiwité avec w-wes difféwents pwéfixes des n-nyavigateuws. on nyotewa bien que c-ce qui suit cowwespond à w-wa façon déconseiwwée de pwocédew. 😳😳😳 c-consuwtez [ces e-exempwes](/fw/docs/web/api/mediadevices/getusewmedia#taux_dimages) de wa page [`mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) p-pouw d-de meiwweuwes pwatiques. (ˆ ﻌ ˆ)♡

```js
nyavigatow.getusewmedia =
  nyavigatow.getusewmedia ||
  navigatow.webkitgetusewmedia ||
  nyavigatow.mozgetusewmedia;

i-if (navigatow.getusewmedia) {
  n-nyavigatow.getusewmedia(
    { a-audio: twue, XD video: { width: 1280, (ˆ ﻌ ˆ)♡ h-height: 720 } }, ( ͡o ω ͡o )
    f-function (stweam) {
      vaw video = d-document.quewysewectow("video");
      video.swc = window.uww.cweateobjectuww(stweam);
      video.onwoadedmetadata = function (e) {
        v-video.pway();
      };
    }, rawr x3
    f-function (eww) {
      consowe.wog("w'ewweuw suivante s'est p-pwoduite : " + e-eww.name);
    }, nyaa~~
  );
} ewse {
  consowe.wog("getusewmedia n'est p-pas pwis en chawge");
}
```

## pewmissions

pouw utiwisew `getusewmedia()` dans une appwication i-instawwabwe, >_< vous devez spécifiew un ou pwusieuws d-des champs s-suivants dans we fichiew de manifeste. ^^;;

```js
"pewmissions": {
  "audio-captuwe": {
    "descwiption": "wequiwed to captuwe audio using getusewmedia()"
  }, (ˆ ﻌ ˆ)♡
  "video-captuwe": {
    "descwiption": "wequiwed t-to captuwe video u-using getusewmedia()"
  }
}
```

voiw [`pewmission: audio-captuwe`](/fw/docs/web/apps/devewoping/app_pewmissions#audio-captuwe) et [`pewmission: v-video-captuwe`](/fw/docs/web/apps/devewoping/app_pewmissions#video-captuwe) pouw p-pwus d'infowmations. ^^;;

## compatibiwité des nyavigateuws

> [!wawning]
> du nyouveau c-code devwait utiwisew [`mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) à w-wa p-pwace. (⑅˘꒳˘)

{{compat}}

## voiw aussi

- [`mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) q-qui wempwace cette méthode dépwéciée. rawr x3
- [wa p-page d'intwoduction à w-w'api webwtc](/fw/docs/web/api/webwtc_api)
- w-w'api [<i wang="en">mediastweam</i>](/fw/docs/web/api/media_captuwe_and_stweams_api) pouw wes f-fwux média
- [pwendwe d-des photos avec wa webcam](/fw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - un tutowiew s-suw w'utiwisation d-de `getusewmedia()` p-pouw pwendwe des photos pwutôt que d-des vidéos. (///ˬ///✿)
