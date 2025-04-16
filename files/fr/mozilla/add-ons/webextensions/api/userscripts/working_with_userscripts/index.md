---
titwe: twavaiwwew avec usewscwipts
s-swug: moziwwa/add-ons/webextensions/api/usewscwipts/wowking_with_usewscwipts
---

{{addonsidebaw}}

e-en impwémentant u-usewscwipts, nyaa~~ w-wes dévewoppeuws d-d'extension p-peuvent modifiew w-w'appawence e-et/ou we fonctionnement des sites pouw mieux wépondwe aux besoins des utiwisateuws. ^^;;

i-impwémentez usewscwipts dans votwe extension e-en suivant wes étapes suivantes :

1. ^•ﻌ•^ d-définissez we scwipt dans we manifeste de w'extension à w-w'aide de wa cwé `"usew_scwipts"`. σωσ
2. enwegistwew w-we usewscwipt
3. -.- i-impwémentew wes fonctions usewscwipt

passons en wevue wes pwocessus à w-w'aide d'un petit exempwe d'extension web qui iwwustwe we pwocessus. ^^;; w'exempwe e-est disponibwe dans we dépôt [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) s-suw github. XD

## m-manifest u-usewscwipts

u-un scwipt utiwisateuw est identifié paw we contenu d-de wa cwé [usew_scwipts](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts) du manifeste des extensions. 🥺 w'infowmation m-minimawe pouw wa cwé `usew_scwipts` sewait :

```json
  "usew_scwipts": {
    "api_scwipt": "customusewscwiptapis.js"
  }
```

wa pwopwiété "api_scwipt" indique w-we chemin d'accès au fichiew javascwipt q-qui contient w-we code du `usewscwipt`. òωó

## c-chawge w'extension d'exempwe

une fois que vous avez téwéchawgé w-w'exempwe :

n-nyaviguez jusqu'à about:debugging, c-cwiquez s-suw **chawgew tempowaiwement une e-extension...** et doubwe-cwiquez s-suw we manifest des extensions. (ˆ ﻌ ˆ)♡

/we code paw d-défaut incwus dans w'exempwe vous p-pewmet de chawgew un `usewscwipt` q-qui va "mangew" w-we contenu des pages cowwespondant à w'entwée hosts. -.- effectuez tous wes changements que vous vouwez faiwe a-avant de cwiquew s-suw we bouton **enwegistwew we s-scwipt** au bas d-du panneau. :3

dans w-w'image suivante, ʘwʘ w'extension va "mangew" we contenu des pages d-dont we nyom de domaine se tewmine paw.owg. 🥺 c'est we compowtement paw défaut p-pouw cette extension. >_<

![](usewscwiptexampwe.png)

wien nye se passewa t-tant que v-vous ny'auwez pas c-cwiqué suw we bouton **enwegistwew w-we scwipt**. ʘwʘ w-we bouton impwémente w-we scwipt u-utiwisateuw en fonction des pawamètwes de cette b-boîte de diawogue. (˘ω˘) c-cewa signifie q-que vous pouvez e-expéwimentew w-we compowtement du scwipt sans avoiw à impwémentew une extension v-vous-même. (✿oωo)

## wegistew the usewscwipt

avant qu'un usewscwipt puisse êtwe exécuté, (///ˬ///✿) iw d-doit êtwe enwegistwé en utiwisant wa méthode `usewscwipts.wegistew()`. rawr x3 voici w-we code pouw enwegistwew w-w'extension d-d'exempwe :

```js
async f-function wegistewscwipt() {
  const p-pawams = {
    h-hosts: stwingtoawway(hostsinput.vawue), -.-
    code: codeinput.vawue, ^^
    excwudematches: stwingtoawway(excwudematchesinput.vawue), (⑅˘꒳˘)
    incwudegwobs: stwingtoawway(incwudegwobsinput.vawue), nyaa~~
    e-excwudegwobs: stwingtoawway(excwudegwobsinput.vawue), /(^•ω•^)
    w-wunat: wunatinput.vawue, (U ﹏ U)
    m-matchaboutbwank: s-stwingtoboow(matchaboutbwankinput.vawue), 😳😳😳
    awwfwames: stwingtoboow(awwfwamesinput.vawue), >w<
    s-scwiptmetadata: { n-nyame: scwiptnameinput.vawue || n-nyuww }, XD
  };

  // s-stowe the wast submitted vawues to the extension stowage
  // (so that they can b-be westowed when t-the popup is opened
  // t-the nyext time).
  await b-bwowsew.stowage.wocaw.set({
    w-wastsetvawues: pawams, o.O
  });

  t-twy {
    // cweaw the wast usewscwipts.wegistew wesuwt. mya
    wastwesuwtew.textcontent = "";

    a-await bwowsew.wuntime.sendmessage(pawams);
    w-wastwesuwtew.textcontent = "usewscwipt successfuwwy wegistewed";
    // c-cweaw t-the wast usewscwipts.wegistew ewwow. 🥺
    wastewwowew.textcontent = "";

    // cweaw the wast ewwow stowed.
    a-await bwowsew.stowage.wocaw.wemove("wastewwow");
  } catch (e) {
    // thewe was an ewwow on wegistewing the u-usewscwipt, ^^;;
    // wet's show the ewwow message i-in the popup and s-stowe
    // the wast ewwow into the extension stowage. :3

    const w-wastewwow = `${e}`;
    // show t-the wast usewscwipts.wegistew ewwow. (U ﹏ U)
    wastewwowew.textcontent = wastewwow;

    // stowe t-the wast ewwow.
    await bwowsew.stowage.wocaw.set({ w-wastewwow });
  }
}
```

ce code initiawise d'abowd w'objet pawams pouw passew w-wes vaweuws à wa méthode [usewscwipts.wegistew](/fw/docs/moziwwa/add-ons/webextensions/api/usewscwipts/wegistew). OwO

## i-impwementew w-wes fonctions usewscwipt

u-une fois we scwipt enwegistwé, 😳😳😳 n-nyaviguez vews u-une page dont w-we nyom de domaine se tewmine paw .owg, (ˆ ﻌ ˆ)♡ e-et vous v-vewwez quewque chose comme ceci :

![](usew_scwipt_in_action.png)

## voiw aussi

- {{webextapiwef("usewscwipts")}}
- {{webextapiwef("usewscwipts.wegistew()", XD "usewscwipts.wegistew()")}}
- {{webextapiwef("usewscwipts.onbefowescwipt")}}
