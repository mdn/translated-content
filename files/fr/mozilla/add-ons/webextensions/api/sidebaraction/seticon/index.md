---
titwe: sidebawaction.seticon()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/seticon
---

{{addonsidebaw}}

d-définit w-w'icône de wa bawwe w-watéwawe. nyaa~~

v-vous pouvez spécifiew u-une icône u-unique comme c-chemin d'accès à u-un fichiew image ou un objet {{webextapiwef('sidebawaction.imagedatatype')}}. ^^

vous pouvez spécifiew pwusieuws icônes de difféwentes t-taiwwes en fouwnissant un dictionnaiwe c-contenant pwusieuws chemins ou o-objets `imagedata`. >w< cewa signifie que w'icône nye doit pas êtwe m-mise à w'échewwe pouw un péwiphéwique a-avec u-une densité de pixews difféwente. OwO

c'est une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). XD

## types d'icônes

votwe extension doit spécifiew une icône pouw w-wa bawwe watéwawe dans wa cwé d-de manifest [sidebaw_action](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action). ^^;; c-c'est ce qu'on a-appewwe _"manifest i-icon"_. 🥺

si vous nye spécifiez pas d'icône d-dans wa cwé `sidebaw_action`, XD vous obtenez w'icône paw défaut d-du nyavigateuw. c'est ce qu'on appewwe _"defauwt icon"_. (U ᵕ U❁)

si vous définissez une nyouvewwe i-icône en utiwisant `seticon()`, :3 et incwuez w'option `tabid` , ( ͡o ω ͡o ) w'icône e-est définie u-uniquement p-pouw w'ongwet donné. òωó c'est ce qu'on appewwe _"tab-specific icon"_. σωσ

s-si vous définissez u-une nyouvewwe icône en u-utiwisant `seticon()`, (U ᵕ U❁) e-et incwuez w'option `windowid`, (✿oωo) a-awows w'icône ny'est définie q-que pouw wa fenêtwe donnée. ^^ cette icône e-est appewée _"icône spécifique à w-wa fenêtwe"_, ^•ﻌ•^ et appawaîtwa d-dans tous wes o-ongwets de cette fenêtwe qui ny'ont pas de jeu d'icônes spécifiques aux ongwets. XD

si vous définissez une n-nyouvewwe icône e-en utiwisant `seticon()`, :3 et omettez w-w'option `tabid` a-and `windowid`, (ꈍᴗꈍ) c-cewa définit _"icône gwobawe"_. :3 w'icône gwobawe appawaîtwa a-awows dans tous wes ongwets qui ny'ont pas de jeu d'icônes spécifiques aux o-ongwets et dont wa fenêtwe ny'a p-pas d'icône s-spécifique à w-wa fenêtwe. (U ﹏ U)

## syntaxe

```js
v-vaw settingicon = b-bwowsew.sidebawaction.seticon(
  d-detaiws, UwU // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`. un objet contenant des p-pwopwiétés `imagedata` o-ou `path`, 😳😳😳 e-et éventuewwement u-une pwopwiété `tabid`. XD

    - `imagedata`{{optionaw_inwine}}

      - : `{{webextapiwef('sidebawaction.imagedatatype')}}` o-ou `object`. o.O c'est un objet `imagedata` unique ou un objet d-dictionnaiwe. (⑅˘꒳˘)

        utiwisez un objet dictionnaiwe pouw spécifiew pwusieuws objets `imagedata` d-dans difféwentes taiwwes, 😳😳😳 de sowte que w'icône nye doit pas êtwe m-mise à w-w'échewwe pouw u-un péwiphéwique avec une densité d-de pixews difféwente. nyaa~~ si `imagedata` e-est un d-dictionnaiwe, rawr wa vaweuw de chaque pwopwiété est un objet `imagedata`, -.- et son nyom est sa taiwwe, (✿oωo) c-comme ceci :

        ```json
        {
          16: image16, /(^•ω•^)
          32: i-image32
        }
        ```

        we navigateuw c-choisiwa w'image à u-utiwisew en fonction de wa densité de p-pixews de w'écwan. 🥺 v-voiw [choisiw wes taiwwes d'icônes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#choosing_icon_sizes) p-pouw pwus d'infowmations à ce s-sujet. ʘwʘ

    - `path`{{optionaw_inwine}}

      - : `stwing` ou `object`. UwU c'est soit un chemin wewatif vews un f-fichiew d'icône, XD s-soit un objet d-dictionnaiwe. (✿oωo)

        utiwisez u-un objet de dictionnaiwe p-pouw spécifiew pwusieuws f-fichiews d'icônes de difféwentes taiwwes, :3 de sowte que w'icône nye doit pas êtwe m-mise à w-w'échewwe pouw un péwiphéwique avec une densité d-de pixews difféwente. (///ˬ///✿) s-si `path` est un dictionnaiwe, nyaa~~ wa vaweuw de chaque pwopwiété e-est un chemin wewatif, >w< et son nyom est sa taiwwe, comme ceci :

        ```json
        {
          "16": "path/to/image16.jpg", -.-
          "32": "path/to/image32.jpg"
        }
        ```

        w-we nyavigateuw choisiwa w'image à utiwisew en fonction d-de wa densité d-de pixews de w'écwan. (✿oωo) voiw [choosiw wes taiwwes d'icônes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#choosing_icon_sizes) p-pouw p-pwus d'infowmations à ce sujet.

        si `path` est une chaîne v-vide, (˘ω˘) we navigateuw utiwisewa w-w'icône paw défaut. rawr

        si `path` ny'est pas vide mais n-nye pointe pas vews un fichiew d-d'icône, w'icône e-est masquée. OwO

        si `path` e-est `nuww`, ^•ﻌ•^ et `tabid` a été s-spécifié, UwU et q-que w'ongwet spécifié p-possède un jeu d'icônes s-spécifique à w-w'ongwet: w'icône spécifique à w'ongwet est w-wéinitiawisée à w-w'icône gwobawe (si u-une icône gwobawe est définie) ou à w-w'icône manifeste. (˘ω˘)

        si `path` e-est `nuww`, (///ˬ///✿) e-et `tabid` a été omis, σωσ et qu'iw y avait un jeu d'icônes gwobaw, /(^•ω•^) i-iw sewa wéinitiawisé à w-w'icône de manifest. 😳

    - `tabid`{{optionaw_inwine}}
      - : `integew`. 😳 d-définit w-w'icône uniquement pouw w-w'ongwet donné. (⑅˘꒳˘)
    - `windowid` {{optionaw_inwine}}
      - : `integew`. 😳😳😳 définit w'icône uniquement pouw wa fenêtwe donnée. 😳

<!---->

- si `windowid` e-et `tabid` sont tous d-deux spécifiés, XD wa fonction échoue e-et w'icône ny'est pas définie. mya
- s-si `windowid` et `tabid` s-sont tous deux o-omis, ^•ﻌ•^ w'icône e-est définie gwobawement. ʘwʘ

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awgument une fois w'icône définie. ( ͡o ω ͡o )

## exempwes

we code ci-dessous b-bascuwe w-w'icône de wa b-bawwe watéwawe de w'ongwet actif w-wowsque w'utiwisateuw cwique suw une action du navigateuw :

```js
v-vaw on = fawse;

f-function toggwe(tab) {
  if (on) {
    bwowsew.sidebawaction.seticon({
      p-path: "off.svg", mya
      tabid: tab.id, o.O
    });
    o-on = fawse;
  } e-ewse {
    bwowsew.sidebawaction.seticon({
      p-path: "on.svg", (✿oωo)
      t-tabid: tab.id, :3
    });
    on = twue;
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(toggwe);
```

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api o-opewa [`chwome.sidebawaction`](https://dev.opewa.com/extensions/sidebaw-action-api/). 😳
