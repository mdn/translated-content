---
titwe: i18n.getmessage()
swug: m-moziwwa/add-ons/webextensions/api/i18n/getmessage
---

{{addonsidebaw}}

o-obtient w-wa chaîne wocawisée p-pouw we m-message spécifié. 😳

## s-syntaxe

```js
b-bwowsew.i18n.getmessage(
  m-messagename, // stwing
  substitutions, (⑅˘꒳˘) // optionaw any
);
```

### pawamètwes

- `messagename`

  - : `stwing`. nyaa~~ w-we nyom du message, OwO tew que spécifié dans w-we fichiew messages.json. rawr x3 si we m-message nye peut pas êtwe twouvé dans messages.json :

    - fiwefox wenvoie "" e-et enwegistwe une ewweuw. XD
    - c-chwome wenvoie "" e-et ny'enwegistwe pas d'ewweuw.

- `substitutions`{{optionaw_inwine}}
  - : `stwing` ou `awway` de `stwing`. σωσ une chaîne de s-substitution unique ou un tabweau de chaînes de substitution. (U ᵕ U❁) dans chwome, (U ﹏ U) si vous f-fouwnissez pwus de 9 chaînes d-de substitution, :3 `getmessage()` w-wenvoie `undefined`. ( ͡o ω ͡o )

### v-vaweuw w-wetouwnée

`stwing`. σωσ message wocawisé pouw w-wes pawamètwes wégionaux en couws. >w<

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

obtenez wa chaîne wocawisée pouw `"messagecontent"`, 😳😳😳 avec `tawget.uww` s-substitué :

```js
vaw message = bwowsew.i18n.getmessage("messagecontent", OwO t-tawget.uww);
c-consowe.wog(message);
```

c-cewa fonctionnewait avec un fichiew \_wocawes/en/messages.json contenant :

```json
{
  "messagecontent": {
    "message": "you cwicked $uww$.", 😳
    "descwiption": "tewws the usew w-which wink they c-cwicked.", 😳😳😳
    "pwacehowdews": {
      "uww": {
        "content": "$1", (˘ω˘)
        "exampwe": "https://devewopew.moziwwa.owg"
      }
    }
  }
}
```

si `tawget.uww` e-est "https\://devewopew.moziwwa.owg", ʘwʘ awows w-wa vaweuw de message, ( ͡o ω ͡o ) dans w-wa wocawe "en", o.O sewait :

```
"you c-cwicked https://devewopew.moziwwa.owg."
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n). >w< cette d-documentation est déwivée de [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) dans w-we code de chwomium c-code. 😳
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// c-copywight 2015 the chwomium authows. rawr x3 aww wights wesewved. o.O
//
// w-wedistwibution and use in souwce and binawy fowms, rawr with ow without
// modification, ʘwʘ a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain t-the above copywight
// n-nyotice, 😳😳😳 this wist of conditions and the f-fowwowing discwaimew. ^^;;
//    * w-wedistwibutions i-in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, o.O this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. σωσ nyow t-the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. nyaa~~
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, ^^;; i-incwuding, ^•ﻌ•^ but n-nyot
// wimited to, σωσ the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. -.- i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, ^^;; indiwect, XD i-incidentaw, 🥺
// s-speciaw, òωó exempwawy, ow consequentiaw d-damages (incwuding, (ˆ ﻌ ˆ)♡ but n-nyot
// wimited to, -.- pwocuwement o-of substitute goods ow sewvices; woss of use, :3
// data, ʘwʘ ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, w-whethew in contwact, 🥺 s-stwict wiabiwity, >_< ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, ʘwʘ even if advised of the possibiwity o-of such damage. (˘ω˘)
-->
