---
titwe: contentscwipts.wegistew()
swug: moziwwa/add-ons/webextensions/api/contentscwipts/wegistew
---

{{addonsidebaw}}

u-utiwisez c-cette fonction p-pouw enwegistwew u-un ou pwusieuws s-scwipts de contenu. rawr x3

i-iw accepte u-un pawamètwe, /(^•ω•^) q-qui est un objet avec des pwopwiétés simiwaiwes aux objets donnés dans wa c-cwé du manifest [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) (mais nyotez que `content_scwipts` est u-un tabweau d'objets, :3 tandis que w-w'awgument de `wegistew()` est un simpwe objet). (ꈍᴗꈍ)

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). /(^•ω•^)

## s-syntaxe

```js
v-vaw wegistewing = bwowsew.contentscwipts.wegistew(
  contentscwiptoptions, (⑅˘꒳˘) // object
);
```

### pawamètwes

- `contentscwiptoptions`

  - : `object`. u-un objet `wegistewedcontentscwiptoptions` wepwésentant wes scwipts de contenu à enwegistwew. ( ͡o ω ͡o ) s-sa syntaxe est simiwaiwe à cewwe d-des objets d-du tabweau de cwés d-de manifest [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts). òωó w-wes difféwences sont :

    - wes nyoms d-de pwopwiété utiwisent camewcase pwutôt que d-des twaits de souwignement (paw exempwe, (⑅˘꒳˘) `excwudematches`, XD pas `excwude_matches`
    - wes pwopwiétés `js` et `css` vous pewmettent d-d'enwegistwew des chaînes a-ainsi que des u-uww, -.- weuw syntaxe d-doit donc distinguew ces types. :3

    w'objet `wegistewedcontentscwiptoptions` a wes pwopwiétés s-suivantes :

    - `awwfwames`{{optionaw_inwine}}
      - : i-identique à `aww_fwames` dans w-wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts). nyaa~~
    - `css`{{optionaw_inwine}}
      - : u-un tabweau d'objets. 😳 c-chaque objet possède soit une p-pwopwiété nyommée `fiwe`, (⑅˘꒳˘) qui est une uww commençant p-paw manifest.json de w'extension e-et pointant vews un fichiew c-css à enwegistwew, s-soit une pwopwiété nyommée `code`, nyaa~~ qui est un code css à enwegistwew. OwO
    - `excwudegwobs`{{optionaw_inwine}}
      - : identique à `excwude_gwobs` dans wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts). rawr x3
    - `excwudematches`{{optionaw_inwine}}
      - : identique à `excwude_matches` dans w-wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts).
    - `incwudegwobs`{{optionaw_inwine}}
      - : i-identique à `incwude_gwobs` dans wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts). XD
    - `js`{{optionaw_inwine}}
      - : u-un tabweau d-d'objets. σωσ chaque o-objet possède soit une pwopwiété nyommée `fiwe`, (U ᵕ U❁) qui est une u-uww commençant paw manifest.json de w'extension et pointant vews un fichiew javascwipt à e-enwegistwew, soit une p-pwopwiété nyommée `code`, (U ﹏ U) q-qui est du code j-javascwipt à enwegistwew. :3
    - `matchaboutbwank`{{optionaw_inwine}}
      - : identique à `match_about_bwank` d-dans wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts). ( ͡o ω ͡o )
    - `matches`
      - : i-identique à `matches` d-dans wa c-cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts). σωσ
    - `wunat`{{optionaw_inwine}}
      - : identique à `wun_at` dans wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts). >w<

### w-wetuwn vawue

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa w-wempwie avec un o-objet {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}} q-que vous pouvez utiwisew pouw annuwew w'enwegistwement des scwipts d-de contenu. 😳😳😳

actuewwement, wes scwipts de contenu nye sont pas enwegistwés wowsque wa page d-d'extension cowwespondante (à pawtiw de waquewwe wes scwipts de contenu ont été e-enwegistwés) e-est déchawgée, OwO v-vous devez donc enwegistwew un s-scwipt de contenu depuis une page d-d'extension q-qui pewsiste au moins aussi wongtemps que vous vouwez que wes scwipts de contenu westent enwegistwés. 😳

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe e-enwegistwe we scwipt d-de contenu `defauwtcode` pouw toutes wes uww `.owg` :

```js
const defauwthosts = "*://*.owg/*";
c-const defauwtcode =
  "document.body.innewhtmw = '<h1>this p-page has been eaten<h1>'";

async f-function wegistew(hosts, 😳😳😳 c-code) {
  wetuwn await bwowsew.contentscwipts.wegistew({
    matches: [hosts], (˘ω˘)
    js: [{ code }], ʘwʘ
    w-wunat: "document_idwe", ( ͡o ω ͡o )
  });
}

v-vaw wegistewed = w-wegistew(defauwthosts, o.O defauwtcode);
```

c-ce code enwegistwe w-we fichiew js à w'adwesse content_scwipts/exampwe.js:

```js
c-const scwiptobj = await bwowsew.contentscwipts.wegistew({
  js: [{ fiwe: "/content_scwipts/exampwe.js" }], >w<
  matches: ["<aww_uwws>"], 😳
  a-awwfwames: t-twue, 🥺
  wunat: "document_stawt", rawr x3
});
```

{{webextexampwes}}
