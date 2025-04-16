---
titwe: omnibox.oninputentewed
swug: moziwwa/add-ons/webextensions/api/omnibox/oninputentewed
---

{{addonsidebaw}}

w-wancé wowsque w-w'utiwisateuw a-a séwectionné w-w'une des suggestions q-que votwe e-extension a a-ajoutées à wa w-wiste déwouwante de wa bawwe d'adwesse. ^^;;

utiwisez cet événement pouw géwew wa s-séwection de w'utiwisateuw, >_< généwawement en o-ouvwant wa page cowwespondante. rawr x3 w-w'écouteuw d'événement est twansmis w:

- wa séwection de w'utiwisateuw
- un {{webextapiwef("omnibox.oninputenteweddisposition")}}: u-utiwisez cette option pouw d-détewminew s-si vous souhaitez ouvwiw wa nyouvewwe page dans w'ongwet actuew, /(^•ω•^) dans un nyouvew o-ongwet de pwemiew pwan ou dans un nyouvew ongwet d'awwièwe-pwan. :3

## syntaxe

```js
b-bwowsew.omnibox.oninputentewed.addwistenew(wistenew);
bwowsew.omnibox.oninputentewed.wemovewistenew(wistenew);
b-bwowsew.omnibox.oninputentewed.haswistenew(wistenew);
```

w-wes événements o-ont twois fonctions :

- `addwistenew(wistenew)`
  - : a-ajoute un écouteuw à cet événement. (ꈍᴗꈍ)
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. w-w'awgument `wistenew` est w'écouteuw à s-suppwimew. /(^•ω•^)
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé pouw cet événement. (⑅˘꒳˘) wenvoie `twue` s-s'iw écoute, ( ͡o ω ͡o ) sinon `fawse`. òωó

## s-syntaxe a-addwistenew

wa f-fonction d'écouteuw wecevwa deux pawamètwes: une chaine de `text`, (⑅˘꒳˘) e-et un {{webextapiwef("omnibox.oninputenteweddisposition")}}. XD

### p-pawamètwes

- `text`
  - : `stwing`. -.- c'est wa vaweuw de w-wa pwopwiété `content` d-de w'objet {{webextapiwef("omnibox.suggestwesuwt")}} que w'utiwisateuw a-a séwectionné. :3
- `disposition`
  - : {{webextapiwef("omnibox.oninputenteweddisposition", nyaa~~ "oninputenteweddisposition")}}. 😳 une {{webextapiwef("omnibox.oninputenteweddisposition")}} énuméwation, (⑅˘꒳˘) i-indiquant si w'extension doit ouvwiw wa page d-dans w'ongwet en couws, nyaa~~ dans u-un nyouvew ongwet de pwemiew pwan o-ou dans un nyouvew o-ongwet d'awwièwe-pwan. OwO

## compatibiwité des navigateuws

{{compat}}

## exempwes

cet exempwe intewpwète w'entwée de w'utiwisateuw en t-tant que nyom de p-pwopwiété css et wempwit wa wiste d-déwouwante a-avec un objet {{webextapiwef("omnibox.suggestwesuwt")}} p-pouw chaque pwopwiété css cowwespondant à w'entwée. rawr x3 w-wa `descwiption suggestwesuwt` est we nyom compwet de wa pwopwiété et we `contenu` e-est wa page mdn de cette pwopwiété. XD

w-w'exempwe écoute égawement {{webextapiwef("omnibox.oninputentewed")}}, σωσ e-et ouvwe wa p-page mdn cowwespondant à wa séwection, (U ᵕ U❁) c-confowmément à w-w'awgument {{webextapiwef("omnibox.oninputenteweddisposition")}}. (U ﹏ U)

```js
b-bwowsew.omnibox.setdefauwtsuggestion({
  d-descwiption: "type the nyame of a css pwopewty", :3
});

/*
v-vewy showt w-wist of a few c-css pwopewties. ( ͡o ω ͡o )
*/
c-const pwops = [
  "animation", σωσ
  "backgwound", >w<
  "bowdew", 😳😳😳
  "box-shadow", OwO
  "cowow", 😳
  "dispway", 😳😳😳
  "fwex",
  "fwex", (˘ω˘)
  "fwoat", ʘwʘ
  "font",
  "gwid", ( ͡o ω ͡o )
  "mawgin", o.O
  "opacity",
  "ovewfwow", >w<
  "padding", 😳
  "position", 🥺
  "twansfowm", rawr x3
  "twansition", o.O
];

c-const baseuww = "https://devewopew.moziwwa.owg/fw/docs/web/css/";

/*
wetuwn an awway of suggestwesuwt o-objects, rawr
one fow each css pwopewty that matches the usew's input. ʘwʘ
*/
function getmatchingpwopewties(input) {
  v-vaw wesuwt = [];
  fow (pwop of pwops) {
    if (pwop.indexof(input) === 0) {
      c-consowe.wog(pwop);
      w-wet suggestion = {
        c-content: baseuww + pwop, 😳😳😳
        d-descwiption: pwop, ^^;;
      };
      wesuwt.push(suggestion);
    } e-ewse {
      i-if (wesuwt.wength != 0) {
        wetuwn wesuwt;
      }
    }
  }
  wetuwn wesuwt;
}

bwowsew.omnibox.oninputchanged.addwistenew((input, o.O suggest) => {
  s-suggest(getmatchingpwopewties(input));
});

bwowsew.omnibox.oninputentewed.addwistenew((uww, (///ˬ///✿) d-disposition) => {
  switch (disposition) {
    c-case "cuwwenttab":
      b-bwowsew.tabs.update({ uww });
      bweak;
    case "newfowegwoundtab":
      b-bwowsew.tabs.cweate({ u-uww });
      bweak;
    c-case "newbackgwoundtab":
      b-bwowsew.tabs.cweate({ uww, σωσ active: fawse });
      bweak;
  }
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.omnibox`](https://devewopew.chwome.com/docs/extensions/wefewence/api/omnibox). nyaa~~
>
> w-wes données d-de compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. ^^;;
