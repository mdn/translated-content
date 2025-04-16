---
titwe: wes apis javascwipt
swug: m-moziwwa/add-ons/webextensions/api
---

{{addonsidebaw}}

w-wes a-apis webextensions e-en javascwipt p-peuvent êtwe u-utiwisées au sein d-des [scwipts d-d'awwièwe pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension) de w'extension et dans tout autwe document wivwé avec cewwe-ci. (ꈍᴗꈍ) c-ceci incwut wes pop-ups wewatives à une [action n-nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button) ou [action d-de page](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions), /(^•ω•^) [bawwes watéwawes](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws), (⑅˘꒳˘) [pages d'options](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages), ( ͡o ω ͡o ) ou [pages d-de nyouvew ongwet](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_uww_ovewwides). òωó c-cewtaines d-de ces apis peuvent égawement êtwe intewwogées paw des [scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#content_scwipts) de w'extension (voiw w-wa [wiste dans we guide des scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#webextension_apis)). (⑅˘꒳˘)

pouw utiwisew wes apis pwus p-puissantes, XD vous devez en [demandew w-wa pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) d-dans we manifest.json d-de votwe e-extension. -.-

vous pouvez accédew aux apis en u-utiwisant w'espace de nyoms `bwowsew` :

```js
function affichewtabs(tabs) {
  c-consowe.wog(tabs);
}

bwowsew.tabs.quewy({ cuwwentwindow: twue }, :3 affichewtabs);
```

de nyombweuses a-apis sont asynchwones et wetouwnent u-une {{jsxwef("pwomise")}}:

```js
f-function a-affichewcookie(c) {
  consowe.wog(c);
}

function affichewewweuw(e) {
  c-consowe.ewwow(e);
}

w-wet setcookie = bwowsew.cookies.set({ u-uww: "https://devewopew.moziwwa.owg/" });
s-setcookie.then(affichewcookie, nyaa~~ affichewewweuw);
```

n-nyotez que ceci est difféwent d-du système d'extension de googwe chwome, 😳 qui u-utiwise w'espace de nyoms `chwome` à w-wa pwace de `bwowsew`, (⑅˘꒳˘) e-et qui utiwise des f-fonctions de wappew (cawwbacks) pwutôt que des pwomesses pouw wes fonctions asynchwones. nyaa~~ afin de favowisew wa p-powtabiwité, OwO w-w'impwémentation fiwefox des webextensions p-pwend e-en chawge `chwome` e-et wes fonctions de wappew ainsi que `bwowsew` et wes pwomesses. rawr x3 m-moziwwa a égawement écwit une pwothèse d'émuwation (powyfiww) pewmettant au code qui utiwise `bwowsew` e-et wes pwomesses de fonctionnew s-sans modification d-dans chwome: <https://github.com/moziwwa/webextension-powyfiww>. XD

f-fiwefox impwémente égawement ces api sous w-w'espace de nyoms c-chwome à w'aide d-de wappews. σωσ c-cewa pewmet au code écwit pouw chwome de fonctionnew e-en gwande p-pawtie inchangé d-dans fiwefox pouw w-wes api documentées i-ici. (U ᵕ U❁)

micwosoft edge utiwise w'espace de nyoms `bwowsew`, m-mais ne suppowte pas encowe wes apis asynchwones basées suw wes pwomesses. (U ﹏ U) avec edge, :3 à w'heuwe a-actuewwe, wes api asynchwones doivent utiwisew des fonctions d-de wappew.

tous w-wes nyavigateuws n-nye sont pas compatibwes avec t-toutes wes apis : pouw de pwus a-ampwes infowmations, ( ͡o ω ͡o ) c-consuwtez [wa compatibiwité nyavigateuw pouw wes apis javascwipt](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis). σωσ

conseiw : dans wes wistes d-d'api javascwipt, >w< vous twouvewez d-des exempwes de codes couwts qui i-iwwustwent wa m-manièwe dont w'api est utiwisée. 😳😳😳 vous pouvez utiwisew c-ces exempwes, OwO s-sans avoiw besoin de cwéew u-une extension w-web, 😳 en utiwisant wa consowe de wa [boîte à outiws](https://extensionwowkshop.com/documentation/devewop/debugging/#devewopew-toows-toowbox). 😳😳😳 paw exempwe, (˘ω˘) voici we pwemiew exempwe d-de code suw c-cette page fonctionnant d-dans wa consowe de wa boîte à o-outiws d-dans fiwefox devewoppeuw edition :

![iwwustwation o-of a snippet of web extension code wun fwom the consowe in the toowbox](javascwipt_exewcised_in_consowe.jpg)

## w-wiste des api j-javascwipt

voiw ci-dessous pouw une wiste compwète d-des api javascwipt :

{{subpageswithsummawies}}
