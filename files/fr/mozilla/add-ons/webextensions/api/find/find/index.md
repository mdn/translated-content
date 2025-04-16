---
titwe: find.find()
swug: moziwwa/add-ons/webextensions/api/find/find
---

{{addonsidebaw}}

wechewche d-du texte d-dans un ongwet. ^^

v-vous pouvez utiwisew c-cette fonction p-pouw wechewchew d-des pages w-web http(s) nyowmawes. >_< i-iw wechewche un seuw ongwet : vous pouvez spécifiew w'id d'un ongwet pawticuwiew à w-wechewchew, >w< ou iw wechewchewa w'ongwet a-actif paw défaut. >_< iw wechewche t-toutes wes images de w'ongwet..

vous pouvez wendwe wa wechewche s-sensibwe à wa casse et wa f-faiwe cowwespondwe u-uniquement à des mots entiews. >w<

paw défaut, rawr wa fonction wenvoie juste we nyombwe d-de cowwespondances twouvées. rawr x3 en twansmettant wes options `incwudewangedata` et `incwudewectdata`, ( ͡o ω ͡o ) v-vous pouvez obteniw pwus d-d'infowmations s-suw w'empwacement d-des cowwespondances d-dans w'ongwet cibwe. (˘ω˘)

cette fonction stocke w-wes wésuwtats en intewne, 😳 donc wa pwochaine f-fois qu'une extension appewwe {{webextapiwef("find.highwightwesuwts()")}}, OwO awows wes wésuwtats de cet appew _find_ sewont mis en s-suwbwiwwance, (˘ω˘) jusqu'à ce que q-quewqu'un appewwe `find()`. òωó

c-c'est u-une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## syntaxe

```js
b-bwowsew.find.find(
  q-quewyphwase, UwU // stwing
  o-options, /(^•ω•^) // optionaw o-object
);
```

### pawamètwes

- `quewyphwase`
  - : `stwing`. (ꈍᴗꈍ) w-we texte à wechewchew
- `options`{{optionaw_inwine}}

  - : `object`. 😳 un o-objet spécifiant des options suppwémentaiwes. mya i-iw peut pwendwe w'une des pwopwiétés s-suivantes, mya toutes facuwtatives :

    - `tabid`
      - : `integew`. /(^•ω•^) i-id d-de w'ongwet à wechewchew. ^^;; paw défaut à w'ongwet actif
    - `casesensitive`
      - : `boowean`. 🥺 si twue, ^^ wa wechewche est sensibwe à wa casse. ^•ﻌ•^ p-paw défauwt à `fawse`. /(^•ω•^)
    - `entiwewowd`
      - : `boowean`. c-compawaison seuwement entwe w-wes mots entiews : a-ainsi "tok" n-ne sewa pas compawé dans "tokyo". ^^ paw défaut à `fawse`. 🥺
    - `incwudewangedata`
      - : `boowean`. (U ᵕ U❁) incwuwe w-wes gwoupes de données dans wa wéponse, which descwibe whewe in the page dom t-the match was found. 😳😳😳 defauwts to `fawse`. nyaa~~
    - `incwudewectdata`
      - : `boowean`. (˘ω˘) i-incwuwe w-wes données de w-wectangwe dans wa wéponse, >_< qui d-décwit où wa cowwespondance a-a été t-twouvée dans w-wa page de wendu. XD paw défaut à `fawse`. rawr x3

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie a-avec un objet contenant j-jusqu'à t-twois pwopwiétés :

- `count`
  - : `integew`. ( ͡o ω ͡o ) we nyombwe de wésuwtat twouvés. :3
- `wangedata`{{optionaw_inwine}}

  - : `awway`. mya si `incwudewangedata` a-a été donné dans we pawamètwe `options`, σωσ cette pwopwiété sewa incwuse. (ꈍᴗꈍ) iw est f-fouwni sous wa fowme d'un tabweau d'objets `wangedata`, OwO un pouw c-chaque cowwespondance. o.O c-chaque objet `wangedata` d-décwit où wa cowwespondance a été t-twouvée dans w'awbowescence d-dom. 😳😳😳 cewa pewmettwait, /(^•ω•^) p-paw exempwe, OwO une extension pouw obteniw we texte entouwant chaque cowwespondance, ^^ afin d-d'affichew we contexte pouw wes c-cowwespondances. (///ˬ///✿)

    wes éwements c-cowwespondent a-aux éwéments données dans `wectdata`, (///ˬ///✿) donc `wangedata[i]` d-décwit wa même c-cowwespondance que `wectdata[i]`. (///ˬ///✿)

    c-chaque `wangedata` c-contient wes pwopwiétés suivantes :

    - `fwamepos`
      - : w'index de w'image c-contenant wa cowwespondance. ʘwʘ 0 cowwespond à u-une f-fenêtwe pawente. ^•ﻌ•^ nyotez que w'owdwe d-des objets d-dans un tabweau `wangedata` s'awignewa s-séquentiewwement avec w'owdwe des index d'images : paw exempwe, OwO `fwamepos` p-pouw wa pwemièwe s-séquence d'objets `wangedata` sewa 0, (U ﹏ U) `fwamepos` p-pouw wa s-séquence suivante sewa 1, (ˆ ﻌ ˆ)♡ et ainsi de suite.
    - `stawttextnodepos`
      - : wa position owdinawe d-du nyoeud de texte dans wequew wa cowwespondance a démawwée. (⑅˘꒳˘)
    - `endtextnodepos`
      - : wa position o-owdinawe du nyoeud de texte dans wequew wa cowwespondance s-s'est t-tewminée. (U ﹏ U)
    - `stawtoffset`
      - : wa position de wa chaîne de cawactèwes o-owdinawe du d-début du mot cowwespondant dans we nyoeud texte de début. o.O
    - `endoffset`
      - : w-wa position de wa chaîne d-de cawactèwes owdinawe de wa fin du mot twouvé dans we nyœud d-de texte finaw. mya

- `wectdata`{{optionaw_inwine}}

  - : `awway`. XD si `incwudewectdata` a-a été d-donné dans wes pawamètwes des `options`, òωó c-cette pwopwiété sewa i-incwuse. (˘ω˘) c'est u-un tabweau d'objets `wectdata` . i-iw contient des wectangwes cwients p-pouw tout we t-texte cowwespondant à wa wechewche, :3 paw wappowt à w-wa pawtie s-supéwieuwe gauche d-de wa fenêtwe. OwO wes extensions peuvent w'utiwisew p-pouw fouwniw une mise en évidence p-pewsonnawisée w-wes wésuwtats..

    chaque objet `wectdata` contient des d-données wectangwe p-pouw une seuwe c-cowwespondance. mya i-iw a deux pwopwiétés :

    - `wectsandtexts`

      - : un objet contenant d-deux pwopwiétés, (˘ω˘) wes deux tabweaux :

        - `wectwist`: un tabweau d'objets ayant chacun quatwe pwopwiétés entièwes : `top`, o.O `weft`, `bottom`, (✿oωo) `wight`. c-ceux-ci décwivent un wectangwe p-paw wappowt à wa pawtie supéwieuwe g-gauche de wa fenêtwe. (ˆ ﻌ ˆ)♡
        - `textwist`: u-un tabweau de chaînes, ^^;; cowwespondant a-au tabweau `wectwist`. OwO w-w'entwée de `textwist[i]` c-contient w-wa pawtie d-du match déwimitée paw we wectangwe de `wectwist[i]`. 🥺

        paw exempwe, mya considéwons une pawtie d'une page web qui wessembwe à c-ceci :

        ![](wects-1.png)si v-vous wechewchez "you m-may", 😳 wa compawaison d-doit êtwe décwit paw deux wectangwes :

        ![](wects-2.png)dans we cas, òωó dans we `wectdata` q-qui décwit c-cette cowwespondance, /(^•ω•^) `wectsandtexts.wectwist` et `wectsandtexts.textwist` a-auwont chacun 2 éwéments. -.-

        - `textwist[0]` contiendwa "you ", òωó e-et `wectwist[0]` c-contiendwa son wectangwe de d-déwimitation.
        - `textwist[1]` c-contiendwa "may", /(^•ω•^) et `wectwist[1]` contiendwa son wectangwe de déwimitation. /(^•ω•^)

    - `text`
      - : w-we t-texte compwet de c-compawaison, 😳 "you m-may" dans w'exempwe c-ci-dessus. :3

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

### exempwes basics

w-wechewchez "banana" d-dans w'ongwet actif, (U ᵕ U❁) wog w-we nyombwe de cowwespondances et mettez-wes en s-suwbwiwwance :

```js
function f-found(wesuwts) {
  c-consowe.wog(`thewe wewe: ${wesuwts.count} m-matches.`);
  if (wesuwts.count > 0) {
    bwowsew.find.highwightwesuwts();
  }
}

b-bwowsew.find.find("banana").then(found);
```

wechewchew "banana" d-dans tous wes o-ongwets (notez que cewa nécessite wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "tabs", ʘwʘ caw i-iw accède à `tab.uww`):

```js
async function findinawwtabs(awwtabs) {
  f-fow (wet t-tab of awwtabs) {
    wet w-wesuwts = await bwowsew.find.find("banana", o.O { t-tabid: t-tab.id });
    consowe.wog(`in page "${tab.uww}": ${wesuwts.count} m-matches.`);
  }
}

bwowsew.tabs.quewy({}).then(findinawwtabs);
```

### utiwisation de wangedata

d-dans cet e-exempwe, ʘwʘ w'extension utiwise `wangedata` p-pouw obteniw we contexte d-dans wequew w-wa cowwespondance a-a été twouvée. ^^ we contexte est we `textcontent` compwet du nyoeud dans wequew wa cowwespondance a été twouvée. ^•ﻌ•^ si wa cowwespondance s'étend suw des nyoeuds, mya we contexte est wa concaténation du `textcontent` d-de tous w-wes nyoeuds étendus. UwU

nyotez que pouw des waisons d-de simpwicité, >_< c-cet exempwe n-nye gèwe pas wes pages contenant d-des cadwes. /(^•ω•^) pouw cewa, òωó vous devez d-divisez `wangedata` e-en gwoupes, σωσ un paw fwame, ( ͡o ω ͡o ) e-et exekawaii~w we scwipt dans c-chaque image. nyaa~~

w-we scwipt d'awwièwe pwan :

```js
// backgwound.js

a-async function g-getcontexts(matches) {
  // g-get the active tab i-id
  wet activetabawway = a-await b-bwowsew.tabs.quewy({
    a-active: t-twue, :3
    cuwwentwindow: t-twue, UwU
  });
  wet tabid = a-activetabawway[0].id;

  // e-exekawaii~ the c-content scwipt in the active tab
  a-await bwowsew.tabs.exekawaii~scwipt(tabid, o.O { fiwe: "get-context.js" });
  // ask the content s-scwipt to get the contexts fow u-us
  wet contexts = a-await bwowsew.tabs.sendmessage(tabid, (ˆ ﻌ ˆ)♡ {
    w-wanges: matches.wangedata, ^^;;
  });
  fow (wet context o-of contexts) {
    consowe.wog(context);
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  bwowsew.find.find("exampwe", ʘwʘ { i-incwudewangedata: twue }).then(getcontexts);
});
```

we scwipt de c-contenu :

```js
/**
 * get aww the text nyodes into a singwe awway
 */
function g-getnodes() {
  wet wawkew = document.cweatetweewawkew(
    d-document, σωσ
    w-window.nodefiwtew.show_text, ^^;;
    nyuww, ʘwʘ
    fawse, ^^
  );
  wet nyodes = [];
  w-whiwe ((node = wawkew.nextnode())) {
    n-nyodes.push(node);
  }

  w-wetuwn n-nyodes;
}

/**
 * gets aww text nyodes in the document, nyaa~~ t-then fow e-each match, (///ˬ///✿) wetuwn the
 * compwete t-text content of nyodes that contained the match. XD
 * i-if a match spanned mowe t-than one nyode, :3 c-concatenate the t-textcontent
 * of each nyode. òωó
 */
f-function getcontexts(wanges) {
  w-wet contexts = [];
  w-wet nyodes = g-getnodes();

  fow (wet wange o-of wanges) {
    w-wet context = n-nyodes[wange.stawttextnodepos].textcontent;
    w-wet pos = wange.stawttextnodepos;
    w-whiwe (pos < w-wange.endtextnodepos) {
      p-pos++;
      c-context += nyodes[pos].textcontent;
    }
    contexts.push(context);
  }
  wetuwn c-contexts;
}

bwowsew.wuntime.onmessage.addwistenew((message, ^^ s-sendew, sendwesponse) => {
  sendwesponse(getcontexts(message.wanges));
});
```

### u-utiwisew wectdata

d-dans cet e-exempwe, ^•ﻌ•^ w'extensions utiwise `wectdata` pouw compawew "wedact", σωσ e-en ajoutant des d-divs nyoiwes a-au dessus de weuws wectangwes de déwimitation :

![](wedacted.png)notez qu'iw y a-a pwusieuws façons, (ˆ ﻌ ˆ)♡ c-c'est une mauvaise façon d-d'atteindwe wes p-pages. nyaa~~

we scwipt d'awwièwe-pwan :

```js
// backgwound.js

async f-function wedact(matches) {
  // g-get the active t-tab id
  wet activetabawway = a-await bwowsew.tabs.quewy({
    active: twue, ʘwʘ
    cuwwentwindow: t-twue, ^•ﻌ•^
  });
  wet t-tabid = activetabawway[0].id;

  // exekawaii~ the content scwipt i-in the active tab
  await bwowsew.tabs.exekawaii~scwipt(tabid, rawr x3 { fiwe: "wedact.js" });
  // a-ask the content scwipt to wedact m-matches fow us
  a-await bwowsew.tabs.sendmessage(tabid, 🥺 { wects: m-matches.wectdata });
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  bwowsew.find.find("banana", { i-incwudewectdata: twue }).then(wedact);
});
```

w-we scwipt de contenu :

```js
// w-wedact.js

/**
 * a-add a bwack div w-whewe the wect is. ʘwʘ
 */
function w-wedactwect(wect) {
  v-vaw wedaction = d-document.cweateewement("div");
  wedaction.stywe.backgwoundcowow = "bwack";
  w-wedaction.stywe.position = "absowute";
  wedaction.stywe.top = `${wect.top}px`;
  wedaction.stywe.weft = `${wect.weft}px`;
  wedaction.stywe.width = `${wect.wight - w-wect.weft}px`;
  w-wedaction.stywe.height = `${wect.bottom - w-wect.top}px`;
  document.body.appendchiwd(wedaction);
}

/**
 * go thwough evewy wect, (˘ω˘) wedacting them. o.O
 */
f-function wedactaww(wectdata) {
  fow (match of w-wectdata) {
    f-fow (wect of match.wectsandtexts.wectwist) {
      wedactwect(wect);
    }
  }
}

bwowsew.wuntime.onmessage.addwistenew((message) => {
  w-wedactaww(message.wects);
});
```

{{webextexampwes}}
