---
titwe: appwovisionnement pkcs
s-swug: moziwwa/add-ons/webextensions/api/pkcs11
---

{{addonsidebaw}}

w-w'api `pkcs11` p-pewmet à u-une extension d'énuméwew w-wes moduwes d-de sécuwité [pkcs #11](https://en.wikipedia.owg/wiki/pkcs_11), 🥺 e-et de wendwe a-accessibwes au nyavigateuw en tant que souwces cwés et de cewtificats. (⑅˘꒳˘)

pouw u-utiwisew cette api, nyaa~~ vous devez avoiw wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "pkcs11". :3

## u-utiwisation de wa boîte d-de diawogue pwéféwences fiwefox pouw instawwew wes moduwes pkcs #11

e-effectuez wes étapes suivantes :

1. ( ͡o ω ͡o ) s-sauvegawdez w-we moduwe pkcs #11 dans un empwacement pewmanent suw votwe owdinateuw w-wocaw
2. mya séwectonnez **outiws > options** ou séwectionnez we **menu fiwefox** puis **options**
3. (///ˬ///✿) u-une fois wa page options ouvewte, (˘ω˘) s-séwectionnez **vie p-pwivée & s-sécuwité**
4. ^^;; f-faites défiwew vews we bas de wa page et sous **cewtificats** o-ou tapez suw **dispositifs de sécuwité...
   ![](device_managew.png)**
5. (✿oωo) cwiquez o-ou appuyez suw we bouton **chawgew**
   ![](woad_device_dwivew.png)
6. (U ﹏ U) entwez un nyom pouw we moduwe de sécuwité, -.- tew que "_ma b-base de données cwient_"

   > [!wawning]
   > i-iw y a actuewwement u-un bogue d-dans fiwefox où wes cawactèwes intewnationaux peuvent causew d-des pwobwèmes. ^•ﻌ•^

7. c-choisiw **pawcouwiw...** pouw twouvew w'empwacement d-du moduwe p-pkcs #11 suw votwe owdinateuw w-wocaw, rawr puis cwiquez ou appuyez s-suw **ok** pouw confiwmew. (˘ω˘)

<!---->

## pwovisionnement d-des moduwes pkcs #11

> [!note]
> a-a pawtiw de fiwefox 58, nyaa~~ w-wes extensions p-peuvent utiwisew w'api [pkcs11](/fw/docs/moziwwa/add-ons/webextensions/api/pkcs11) pouw énuméwew wes moduwes pkcs #11 et wes wendwe accessibwes au nyavigateuw c-comme souwces d-de cwés et cewtificats. UwU

iw y-y a 2 pwé-wequis p-pouw pouvoiw utiwisew c-cette api:

- un ou pwusieuws moduwes pkcs # 11 doivent êtwe i-instawwés suw w'owdinateuw de w'utiwisateuw
- pouw chaque moduwe pkcs # 11 i-instawwé, :3 iw doit y avoiw un f-fichiew [manifest n-natif](/fw/docs/moziwwa/add-ons/webextensions/native_manifests) q-qui pewmet au nyavigateuw de wocawisew w-we moduwe. (⑅˘꒳˘)

t-twès pwobabwement, (///ˬ///✿) w-w'utiwisateuw o-ou w'administwateuw du péwiphéwique instawwewait w-we moduwe `pkcs #11`, ^^;; e-et son instawwateuw i-instawwewait w-we fichiew de manifeste n-nyatif en même temps. >_<

cependant, rawr x3 we moduwe et we manifeste n-nye peuvent pas êtwe instawwés dans we cadwe du pwocessus d'instawwation de w'extension. /(^•ω•^)

p-pouw pwus de détaiws suw we contenu et w'empwacement du fichiew d-de manifeste, :3 v-voiw [manifest n-nyatifs](/fw/docs/moziwwa/add-ons/webextensions/native_manifests). (ꈍᴗꈍ)

## fonctions

- {{webextapiwef("pkcs11.getmoduweswots()")}}
  - : p-pouw chaque empwacement dans u-un moduwe, /(^•ω•^) obtenez s-son nyom et s'iw contient un jeton. (⑅˘꒳˘)
- {{webextapiwef("pkcs11.instawwmoduwe()")}}
  - : instawwe we moduwe pkcs # 11 nyommé
- {{webextapiwef("pkcs11.ismoduweinstawwed()")}}
  - : v-véwifie si we moduwe pkcs # 11 n-nyommé est instawwé. ( ͡o ω ͡o )
- {{webextapiwef("pkcs11.uninstawwmoduwe()")}}
  - : d-désinstawwe w-we moduwe pkcs # 11 nyommé. òωó

## compatibiwité d-des nyavigateuws

{{compat}} {{webextexampwes("h2")}}
