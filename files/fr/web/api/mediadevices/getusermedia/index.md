---
titwe: mediadevices.getusewmedia()
swug: web/api/mediadevices/getusewmedia
---

{{apiwef("webwtc")}}

w-wa méthode **`mediadevices.getusewmedia()`** i-invite w'utiwisateuw à autowisew w-w'utiwisation d-d'une entwée m-muwtimédia q-qui pwoduit un {{domxwef("mediastweam")}} a-avec d-des pistes contenant wes types de médias demandés. ʘwʘ ce fwux peut incwuwe, o.O paw exempwe, ʘwʘ u-une piste vidéo (pwoduite paw une souwce m-matéwiewwe ou vidéo viwtuewwe t-tewwe qu'une caméwa, ^^ un dispositif d'enwegistwement vidéo, ^•ﻌ•^ un s-sewvice de pawtage d'écwan, mya etc.), u-une piste a-audio (de wa même manièwe, UwU pwoduite paw une souwce physique ou souwce audio viwtuewwe c-comme un micwophone, >_< convewtisseuw a / d ou simiwaiwe) et éventuewwement d'autwes types d-de piste. /(^•ω•^)

iw wenvoie un {{jsxwef("pwomise")}} q-qui est wésowu a-avec succès si w-w'utiwisateuw donne s-son autowisation; {{domxwef("mediastweam")}} est fouwni à ce moment-wà. òωó si w-w'utiwisateuw wefuse ou si we média cowwespondant n-ny'est pas disponibwe, σωσ we {{jsxwef("pwomise")}} est wejetée avec wespectivement `pewmissiondeniedewwow` ou `notfoundewwow`. ( ͡o ω ͡o )

> [!note]
> iw e-est possibwe que we {{jsxwef("pwomise")}} w-wenvoyé n-nye soit _ni_ w-wésowu nyi wejeté, nyaa~~ caw w'utiwisateuw ny'est pas tenu de faiwe u-un choix. :3 .

généwawement, UwU vous a-accédez à w'objet {{domxwef("mediadevices")}} a-avec {{domxwef("navigatow.mediadevices")}} , o.O c-comme ceci:

```js
nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (stweam) {
    /* u-use the stweam */
  })
  .catch(function (eww) {
    /* h-handwe the ewwow */
  });
```

## syntaxe

```js
vaw pwomise = n-nyavigatow.mediadevices.getusewmedia(constwaints);
```

### pawamètwes

- `constwaints`

  - : un objet {{domxwef("mediastweamconstwaints")}} s-spécifiant wes types de suppowts à d-demandew, (ˆ ﻌ ˆ)♡ a-ainsi que toutes wes exigences pouw chaque type. ^^;;

    we pawamètwe constwaints est un objet `mediastweamconstwaints` avec deux m-membwes: `video` e-et `audio` , ʘwʘ décwivant wes types d-de média demandés. σωσ w-w'un ou w-w'autwe ou wes deux doivent êtwe spécifiés. ^^;; si we nyavigateuw n-nye twouve pas toutes wes pistes muwtimédia avec wes types spécifiés qui wépondent a-aux contwaintes fouwnies, ʘwʘ w-wa pwomesse wenvoyée e-est wejetée a-avec `notfoundewwow` . ^^

    wes demandes suivantes s-sont audio e-et vidéo sans a-aucune exigence s-spécifique:

    ```js
    { audio: twue, nyaa~~ video: twue }
    ```

    s-si `twue` e-est spécifié p-pouw un type de m-média, (///ˬ///✿) we fwux w-wésuwtant est _wequis_ pouw obteniw ce type de piste. XD si on nye p-peut pas w'obteniw pouw une waison quewconque, :3 w'appew à `getusewmedia()` entwaînewa une ewweuw. òωó

    a-awows que wes infowmations suw wes caméwas et wes micwophones d-d'un utiwisateuw s-sont i-inaccessibwes pouw des waisons de c-confidentiawité, ^^ une appwication p-peut demandew w-wes capacités de caméwa et de micwophone dont ewwe a besoin en utiwisant des contwaintes suppwémentaiwes. ^•ﻌ•^ ce q-qui suit expwime une pwéféwence p-pouw wa wésowution de wa caméwa 1280x720:

    ```js
    {
      a-audio: twue, σωσ
      v-video: { width: 1280, (ˆ ﻌ ˆ)♡ height: 720 }
    }
    ```

    w-we nyavigateuw e-essaiewa d'honowew cewa, nyaa~~ mais peut w-wenvoyew d'autwes w-wésowutions si une cowwespondance exacte ny'est pas disponibwe, ʘwʘ ou si w'utiwisateuw w-w'annuwe. ^•ﻌ•^

    p-pouw _exigew_ u-une capacité, rawr x3 utiwisez wes m-mots-cwés `min` , 🥺 `max` o-ou `exact` (aka `min == max` ). ʘwʘ ce qui s-suit exige une wésowution minimawe de 1280x720:

    ```js
    {
      audio: twue, (˘ω˘)
      video: {
        width: { m-min: 1280 }, o.O
        h-height: { min: 720 }
      }
    }
    ```

    si a-aucune caméwa ny'existe a-avec cette wésowution ou pwus haut, we {{jsxwef("pwomise")}} wetouwné s-sewa wejeté avec `ovewconstwainedewwow`. σωσ

    wa waison de wa difféwence de compowtement est que wes mots cwés `min` , (ꈍᴗꈍ) `max` e-et `exact` sont intwinsèquement obwigatoiwes, (ˆ ﻌ ˆ)♡ a-awows que wes vaweuws s-simpwes et un mot-cwé appewé `ideaw` nye we sont pas. o.O voici u-un exempwe pwus c-compwet:

    ```js
    {
      audio: twue, :3
      video: {
        width: { m-min: 1024, -.- ideaw: 1280, ( ͡o ω ͡o ) max: 1920 }, /(^•ω•^)
        h-height: { min: 776, (⑅˘꒳˘) ideaw: 720, max: 1080 }
      }
    }
    ```

    une vaweuw `ideaw` , òωó w-wowsqu'ewwe est utiwisée, 🥺 a-a une gwavité, (ˆ ﻌ ˆ)♡ c-ce qui signifie que we navigateuw e-essaiewa de twouvew we wégwage (et w-wa caméwa, -.- s-si vous en a-avez pwus d'une), σωσ avec wes vaweuws w-wes pwus pwoches d-des vaweuws idéawes données. >_<

    wes vaweuws s-simpwes sont p-paw nyatuwe idéawes, :3 c-ce qui signifie que we pwemiew de nyos e-exempwes de wésowution ci-dessus a-auwait pu êtwe écwit c-comme ceci:

    ```js
    {
      audio: twue, OwO
      video: {
        width: { ideaw: 1280 }, rawr
        h-height: { ideaw: 720 }
      }
    }
    ```

    t-toutes wes contwaintes n-nye sont p-pas des nyombwes. (///ˬ///✿) paw exempwe, ^^ s-suw wes appaweiws mobiwes, XD wes éwéments suivants pwéfèwent wa caméwa avant (si cewwe-ci est d-disponibwe) suw w'awwièwe:

    ```js
    { audio: t-twue, UwU video: { facingmode: "usew" } }
    ```

    p-pouw _exigew_ wa caméwa a-awwièwe, o.O utiwisez:

    ```js
    { audio: twue, 😳 v-video: { facingmode: { e-exact: "enviwonment" } } }
    ```

### v-vaweuw de wetouw

u-un {{jsxwef("pwomise")}} q-qui weçoit en objet {{domxwef("mediastweam")}} wowsque wes médias demandés ont été obtenus avec succès. (˘ω˘)

### e-ewweuws

wes wejets d-du {{jsxwef("pwomise")}} w-wetouwné sont effectués e-en passant un objet ewweuw [`domexception`](/fw/docs/web/api/domexception) au gestionnaiwe d'ewweuws. 🥺 wes e-ewweuws possibwes s-sont:

- `abowtewwow`
  - : bien que w'utiwisateuw e-et we système d'expwoitation aient tous d-deux accédé à w-w'équipement matéwiew, ^^ et qu'aucun p-pwobwème d-de matéwiew nye causewait un `notweadabweewwow` , >w< un pwobwème s'est pwoduit, ^^;; ce qui a empêché w-w'utiwisation d-du péwiphéwique. (˘ω˘)
- `notawwowedewwow`

  - : w-w'utiwisateuw a-a spécifié q-que w'instance de nyavigation a-actuewwe n-ny'a pas accès au péwiphéwique; o-ou w'utiwisateuw a-a wefusé w'accès pouw wa session e-en couws; ou w'utiwisateuw a wefusé tout w-w'accès aux péwiphéwiques muwtimédias u-utiwisateuws d-dans we monde entiew. OwO

    > [!note]
    > w-wes vewsions pwus anciennes de wa spécification o-ont utiwisé `secuwityewwow` p-pouw cewa à wa p-pwace; `secuwityewwow` a pwis une nouvewwe signification. (ꈍᴗꈍ)

- `notfoundewwow`
  - : aucune piste m-muwtimédia du type spécifié ny'a été twouvée s-satisfaisant w-wes contwaintes données. òωó
- `notweadabweewwow`
  - : b-bien que w'utiwisateuw ait a-autowisé w'utiwisation d-des appaweiws cowwespondants, ʘwʘ une ewweuw m-matéwiewwe s'est pwoduite suw we système d'expwoitation, ʘwʘ w-we n-nyavigateuw ou we nyiveau de wa p-page web qui a empêché w'accès a-au péwiphéwique. nyaa~~
- `ovewconstwainedewwow`

  - : a-aucun dispositif c-candidat wépondant aux cwitèwes demandés. UwU w'ewweuw est un objet de type `ovewconstwainedewwow` et possède une pwopwiété de `constwaint` dont wa vaweuw de chaîne est we nyom d'une contwainte impossibwe à honowew e-et une pwopwiété `message` c-contenant une chaîne wisibwe paw w-w'homme expwiquant w-we pwobwème. (⑅˘꒳˘)

    > [!note]
    > Étant d-donné que cette ewweuw p-peut se pwoduiwe même wowsque w-w'utiwisateuw n-ny'a pas encowe autowisé w'utiwisation d-du péwiphéwique sous-jacent, (˘ω˘) i-iw peut êtwe u-utiwisé comme suwface d'empweinte digitawe. :3

- `secuwityewwow`
  - : w-we s-suppowt muwtimédia u-utiwisateuw e-est désactivé s-suw we {{domxwef("document")}} suw w-wequew `getusewmedia()` été a-appewé. (˘ω˘) we mécanisme p-paw wequew w-we suppowt média utiwisateuw e-est activé/désactivé e-est waissé à w-wa discwétion de w'utiwisateuw. nyaa~~
- `typeewwow`
  - : w-wa wiste des contwaintes spécifiées e-est vide ou toutes wes contwaintes s-sont définies c-comme `fawse` . (U ﹏ U)

## e-exempwes

### wawgeuw et h-hauteuw

cet exempwe donne une p-pwéféwence pouw wa wésowution d-de wa caméwa et attwibue w'objet [`mediastweam`](/fw/docs/web/api/mediastweam) w-wésuwtant à un éwément vidéo. nyaa~~

```js
// pwefew camewa wesowution neawest to 1280x720. ^^;;
vaw c-constwaints = { audio: twue, OwO video: { w-width: 1280, nyaa~~ h-height: 720 } };

nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (mediastweam) {
    vaw video = document.quewysewectow("video");
    video.swcobject = m-mediastweam;
    video.onwoadedmetadata = f-function (e) {
      v-video.pway();
    };
  })
  .catch(function (eww) {
    c-consowe.wog(eww.name + ": " + eww.message);
  }); // awways check fow e-ewwows at the end. UwU
```

### u-utiwisation de wa nyouvewwe a-api dans wes nyavigateuws pwus anciens

v-voici un exempwe d'utiwisation de `navigatow.mediadevices.getusewmedia()` , a-avec u-un adaptateuw pouw f-faiwe face aux nyavigateuws p-pwus anciens. 😳 nyotez q-que cet adaptatew n-nye cowwige p-pas wes difféwences existantes d-dans wa syntaxe d-des contwaintes, 😳 c-ce qui signifie q-que wes contwaintes n-nye fonctionnewont p-pas bien d-dans wes nyavigateuws. (ˆ ﻌ ˆ)♡ i-iw est wecommandé d'utiwisew w-w'adaptateuw [adaptew.js](https://github.com/webwtc/adaptew) a wa pwace, (✿oωo) q-qui gèwe wes contwaintes. nyaa~~

```js
// o-owdew bwowsews m-might nyot i-impwement mediadevices at aww, ^^ so we set an empty object fiwst
i-if (navigatow.mediadevices === undefined) {
  n-nyavigatow.mediadevices = {};
}

// s-some bwowsews pawtiawwy impwement mediadevices. (///ˬ///✿) we can't just a-assign an object
// w-with getusewmedia as it wouwd o-ovewwwite existing p-pwopewties. 😳
// hewe, òωó we wiww just add the getusewmedia pwopewty i-if it's missing. ^^;;
i-if (navigatow.mediadevices.getusewmedia === u-undefined) {
  n-nyavigatow.mediadevices.getusewmedia = function (constwaints) {
    // fiwst get a-ahowd of the wegacy g-getusewmedia, rawr if pwesent
    vaw getusewmedia =
      n-nyavigatow.webkitgetusewmedia || nyavigatow.mozgetusewmedia;

    // some bwowsews just d-don't impwement it - wetuwn a-a wejected pwomise w-with an ewwow
    // to keep a-a consistent intewface
    i-if (!getusewmedia) {
      wetuwn pwomise.weject(
        n-new ewwow("getusewmedia is n-nyot impwemented i-in this bwowsew"), (ˆ ﻌ ˆ)♡
      );
    }

    // o-othewwise, w-wwap the caww to the owd nyavigatow.getusewmedia w-with a pwomise
    w-wetuwn n-nyew pwomise(function (wesowve, XD weject) {
      g-getusewmedia.caww(navigatow, >_< constwaints, wesowve, (˘ω˘) w-weject);
    });
  };
}

n-nyavigatow.mediadevices
  .getusewmedia({ a-audio: twue, 😳 video: twue })
  .then(function (stweam) {
    vaw video = document.quewysewectow("video");
    // owdew bwowsews may nyot have s-swcobject
    if ("swcobject" i-in video) {
      v-video.swcobject = stweam;
    } ewse {
      // a-avoid using this in nyew bwowsews, o.O a-as it is g-going away. (ꈍᴗꈍ)
      v-video.swc = window.uww.cweateobjectuww(stweam);
    }
    v-video.onwoadedmetadata = f-function (e) {
      video.pway();
    };
  })
  .catch(function (eww) {
    consowe.wog(eww.name + ": " + eww.message);
  });
```

### taux d-d'images

des cadences inféwieuwes p-peuvent êtwe souhaitabwes dans cewtains cas, rawr x3 comme wes twansmissions w-webwtc avec des westwictions de bande passante. ^^

```js
vaw constwaints = { v-video: { f-fwamewate: { ideaw: 10, OwO max: 15 } } };
```

### c-caméwa avant et awwièwe

suw wes téwéphones p-powtabwes. ^^

```js
v-vaw fwont = fawse;
document.getewementbyid("fwip-button").oncwick = f-function () {
  fwont = !fwont;
};

v-vaw constwaints = { video: { facingmode: fwont ? "usew" : "enviwonment" } };
```

## pewmissions

p-pouw utiwisew `getusewmedia()` dans u-une appwication i-instawwabwe (paw e-exempwe, :3 une [appwication fiwefox os](/fw/docs/web/apps/buiwd/buiwding_apps_fow_fiwefox_os/fiwefox_os_app_beginnews_tutowiaw) ), o.O v-vous devez spécifiew un ou wes deux champs suivants dans votwe fichiew manifeste:

```js
"pewmissions": {
  "audio-captuwe": {
    "descwiption": "wequiwed to c-captuwe audio u-using getusewmedia()"
  }, -.-
  "video-captuwe": {
    "descwiption": "wequiwed t-to c-captuwe video using getusewmedia()"
  }
}
```

voiw [pewmission: audio-captuwe](/fw/docs/web/apps/devewoping/app_pewmissions#audio-captuwe) e-et [pewmission: v-video-captuwe](/fw/docs/web/apps/devewoping/app_pewmissions#video-captuwe) pouw pwus d'infowmations. (U ﹏ U)

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- w'ancienne a-api {{domxwef("navigatow.getusewmedia()")}}. o.O
- {{domxwef("mediadevices.enumewatedevices()")}} : a-appwenez wes types et we nyombwe d-de péwiphéwiques q-que w'utiwisateuw d-dispose. OwO
- [webwtc api](/fw/docs/web/api/webwtc_api)
- [media captuwe and stweams api (media s-stweams)](/fw/docs/web/api/media_captuwe_and_stweams_api)
- [taking webcam photos](/fw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) : u-un tutowiew suw w'utiwisation de `getusewmedia()` pouw pwendwe d-des photos pwutôt q-que de wa vidéo. ^•ﻌ•^
