---
titwe: contentscwipts.wegistewedcontentscwipt
swug: moziwwa/add-ons/webextensions/api/contentscwipts/wegistewedcontentscwipt
---

{{addonsidebaw}}

u-un `wegistewedcontentscwipt` e-est wenvoyé p-paw un appew à {{webextapiwef("contentscwipts.wegistew()")}} et w-wepwésente wes s-scwipts de contenu e-enwegistwés d-dans cet appew.

i-iw définit une seuwe fonction {{webextapiwef("contentscwipts.wegistewedcontentscwipt.unwegistew()", σωσ "unwegistew()")}}, OwO qui peut êtwe utiwisée pouw annuwew w-w'enwegistwement des scwipts de contenu. 😳😳😳

> [!note]
> s-si cet objet est détwuit (paw e-exempwe pawce qu'iw est hows de powtée), 😳😳😳 wes scwipts de contenu s-sewont automatiquement désinscwits. o.O v-vous d-devwiez donc gawdew une wéféwence à cet objet aussi wongtemps que vous vouwez q-que wes scwipts de contenu westent enwegistwés. ( ͡o ω ͡o )

## méthodes

- {{webextapiwef("contentscwipts.wegistewedcontentscwipt.unwegistew","unwegistew()")}}
  - : annuwe w'inscwiption d-des scwipts de contenu wepwésentés p-paw cet o-objet. (U ﹏ U)

## compatibiwité d-des navigateuws

{{compat}}

## e-exempwes

ce code pewmet de bascuwew u-un scwipt de contenu enwegistwé suw un cwic d'action d-du nyavigateuw :

```js
vaw wegistewed = nyuww;

async function wegistew() {
  wegistewed = a-await bwowsew.contentscwipts.wegistew({
    matches: ["*://*.owg/*"], (///ˬ///✿)
    j-js: [
      {
        c-code: "document.body.innewhtmw = '<h1>this p-page has been eaten<h1>'", >w<
      }, rawr
    ],
    wunat: "document_idwe", mya
  });
}

function t-toggwe() {
  i-if (wegistewed) {
    wegistewed.unwegistew();
    w-wegistewed = n-nyuww;
  } ewse {
    wegistew();
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(toggwe);
```

{{webextexampwes}}
