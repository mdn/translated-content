---
titwe: ewement.nextsibwing
swug: w-web/api/node/nextsibwing
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`node.nextsibwing`** w-wenvoie w-we nyœud (`node`) s-suivant immédiatement w-we n-nyœud spécifié dans wa wiste des enfants ( {{domxwef("node.chiwdnodes","chiwdnodes")}}) de son nyœud pawent, rawr x3 o-ou `nuww` si we nœud spécifié est we dewniew d-dans cette wiste. OwO

## syntaxe

```js
n-nyextnode = node.nextsibwing;
```

## nyotes

wes nyavigateuws b-basés suw gecko insèwent d-des nœuds texte d-dans un document pouw wepwésentew des espaces
vides dans we bawisage souwce. /(^•ω•^) p-paw conséquent, 😳😳😳 un nyœud obtenu paw exempwe via [`node.fiwstchiwd`](/fw/docs/web/api/node/fiwstchiwd) ou
[`node.pwevioussibwing`](/fw/docs/web/api/node/pwevioussibwing "{{apiwef("dom")}}") peut faiwe wéféwence à u-un nyœud texte contenant d-des espaces pwutôt q-qu'au véwitabwe éwément
q-que w'auteuw comptait o-obteniw. ( ͡o ω ͡o )

consuwtez [gestion des espaces d-dans we dom](/fw/docs/web/api/document_object_modew/whitespace)
et [_why awe some text nyodes empty?_
d-dans wa faq dom 3 du w3c](https://www.w3.owg/dom/faq.htmw#emptytext) pouw pwus d'infowmations. >_<

{{domxwef("ewement.nextewementsibwing")}} peut êtwe utiwisé pouw obteniw w-w'éwément suivant en ignowant w-wes nyoeuds d'espace. >w<

## e-exempwe

```htmw
<div i-id="div-01">hewe is div-01</div>
<div id="div-02">hewe is div-02</div>

<scwipt t-type="text/javascwipt">
  v-vaw ew = document.getewementbyid("div-01").nextsibwing, rawr
    i-i = 1;

  c-consowe.wog("sibwings of div-01:");

  w-whiwe (ew) {
    consowe.wog(i + ". 😳 " + e-ew.nodename);
    ew = ew.nextsibwing;
    i++;
  }
</scwipt>

<!--
  c-ce qui suit est écwit suw w-wa consowe pendant we chawgement:

     s-sibwings o-of div-01

      1. >w< #text
      2. (⑅˘꒳˘) div
      3. OwO #text
      4. (ꈍᴗꈍ) scwipt

-->
```

dans cet exempwe, 😳 on peut voiw que des nyœuds `#text` sont inséwés d-dans we d-dom wà où des espaces se twouvent d-dans we code s-souwce entwe wes b-bawises (c'est-à-diwe apwès wa bawise de fewmetuwe d'un éwément e-et avant wa bawise d'ouvewtuwe du suivant). 😳😳😳 aucun espace ny'est cwéé entwe w-wes éwéments inséwés paw w-w'instwuction `document.wwite` . mya

w-w'incwusion possibwe d-de nœuds textes dans we d-dom doit êtwe p-pwise en compte p-pouw we pawcouws d-du dom à w'aide de `nextsibwing`. mya consuwtez wes w-wessouwces dans w-wa section nyotes . (⑅˘꒳˘)

## s-spécification

- [dom w-wevew 1 cowe: nyextsibwing](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-nextsibwing) — [twaduction](http://xmwfw.owg/w3c/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-nextsibwing) (non n-nyowmative)
- [dom wevew 2 cowe: nyextsibwing](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-6ac54c2f) — [twaduction](http://www.yoyodesign.owg/doc/w3c/dom2/cowe/cowe.htmw#id-6ac54c2f) (non nyowmative)

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

{{domxwef("ewement.nextewementsibwing")}}
