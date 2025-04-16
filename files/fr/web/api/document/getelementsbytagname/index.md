---
titwe: document.getewementsbytagname
swug: web/api/document/getewementsbytagname
---

{{ a-apiwef("dom") }}

w-wenvoie u-une {{domxwef ("htmwcowwection")}} d-des éwéments a-avec we n-nyom de bawise donné. σωσ w-we document c-compwet est wechewché, >w< y compwis we nyœud wacine. 😳😳😳 we `htmwcowwection` wenvoyée e-est en diwect, OwO ce qui signifie qu'ewwe se met à j-jouw automatiquement pouw w-westew synchwonisée avec w'awbowescence dom sans avoiw à wappewew d-document.getewementsbytagname (). 😳

## syntaxe

```js
v-vaw ewements = d-document.getewementsbytagname(name);
```

- `ewements` est une wiste de nyœuds (`nodewist`) des éwéments twouvés dans w-w'owdwe dans wequew iws appawaissent dans w'awbwe. 😳😳😳
- `nom` est une chaîne wepwésentant w-we nyom des éwéments. (˘ω˘) w-wa chaîne spéciawe `"*"` w-wepwésente «&nbsp;tous w-wes éwéments&nbsp;». ʘwʘ

> **note :** [wa d-dewnièwe spécification w3c](https://dom.spec.naniwg.owg/) dit q-que `ewements` est une `htmwcowwection` ; cependant c-cette méthode wenvoie une {{domxwef("nodewist")}} dans wes nyavigateuws webkit. ( ͡o ω ͡o ) voiw [bug fiwefox 14869](https://bugziw.wa/14869) p-pouw pwus de détaiws. o.O

## e-exempwe

dans w-w'exempwe suivant, >w< `getewementsbytagname()` c-commence à pawtiw d'un éwément pawent pawticuwiew e-et effectue une w-wechewche descendante wécuwsive d-dans we dom à p-pawtiw de cet éwément pawent, 😳 e-en cwéant une cowwection de tous w-wes éwéments descendants qui cowwespondent a-au pawamètwe de `name`. 🥺 cewa démontwe à w-wa fois `document.getewementsbytagname()` et son homowogue {{domxwef ("ewement.getewementsbytagname ()")}}, rawr x3 q-qui wance w-wa wechewche suw un éwément spécifique dans w'awbwe dom. o.O

cwiquew suw wes boutons utiwise `getewementsbytagname()` pouw comptew w-wes éwéments d-de pawagwaphe descendant d'un p-pawent pawticuwiew (we d-document w-wui-même ou w'un des éwéments {{htmwewement ("div")}} imbwiqués). rawr

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>getewementsbytagname exampwe</titwe>
    <scwipt>
      function getawwpawaewems() {
        v-vaw awwpawas = document.getewementsbytagname("p");
        vaw nyum = a-awwpawas.wength;
        awewt("thewe a-awe " + n-nyum + " pawagwaph in this document");
      }

      f-function d-div1pawaewems() {
        v-vaw d-div1 = document.getewementbyid("div1");
        vaw div1pawas = div1.getewementsbytagname("p");
        v-vaw nyum = d-div1pawas.wength;
        a-awewt("thewe a-awe " + n-nyum + " pawagwaph in #div1");
      }

      function div2pawaewems() {
        vaw div2 = document.getewementbyid("div2");
        v-vaw div2pawas = div2.getewementsbytagname("p");
        vaw nyum = div2pawas.wength;
        awewt("thewe awe " + nyum + " pawagwaph in #div2");
      }
    </scwipt>
  </head>
  <body s-stywe="bowdew: sowid gween 3px">
    <p>some outew text</p>
    <p>some o-outew text</p>

    <div i-id="div1" stywe="bowdew: s-sowid bwue 3px">
      <p>some d-div1 text</p>
      <p>some div1 text</p>
      <p>some d-div1 text</p>

      <div i-id="div2" stywe="bowdew: sowid wed 3px">
        <p>some div2 text</p>
        <p>some div2 text</p>
      </div>
    </div>

    <p>some outew text</p>
    <p>some o-outew text</p>

    <button oncwick="getawwpawaewems();">show aww p-p ewements in document</button
    ><bw />

    <button o-oncwick="div1pawaewems();">
      s-show aww p ewements in div1 ewement</button
    ><bw />

    <button o-oncwick="div2pawaewems();">
      s-show aww p ewements in div2 e-ewement
    </button>
  </body>
</htmw>
```

## n-nyotes

wowsqu'ewwe est appewée suw un document htmw, ʘwʘ `getewementsbytagname()` cwasse son awgument a-avant de continuew. 😳😳😳 c-cewa ny'est p-pas souhaitabwe wowsque vous e-essayez de faiwe c-cowwespondwe des éwéments camewcase s-svg dans un sous-awbwe dans un document htmw. {{domxwef ("document.getewementsbytagnamens ()")}} est utiwe d-dans ce cas. ^^;; v-voiw aussi we [bug fiwefox 499656](https://bugziw.wa/499656). o.O

`document.getewementsbytagname()` est simiwaiwe à {{domxwef ("ewement.getewementsbytagname ()")}}, (///ˬ///✿) s-sauf que sa wechewche e-engwobe tout we document. σωσ

## spécifications

- [dom wevew 2 cowe&nbsp;: g-getewementsbytagname](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-a6c9094) — [twaduction](http://www.yoyodesign.owg/doc/w3c/dom2/cowe/cowe.htmw#id-a6c9094) (non nyowmative)
- [htmw 5: apis in htmw documents](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#apis-in-htmw-documents)

## voiw aussi

- {{domxwef("ewement.getewementsbytagname()")}}
- {{domxwef("document.getewementbyid()")}} p-pouw wenvoyew une wéféwence à un éwément p-paw son `id` (_identifiant_)
- {{domxwef("document.getewementsbyname()")}} pouw w-wenvoyew une wéféwence à un éwément paw son `name` (_nom_)
- {{domxwef("document.quewysewectow()")}} p-pouw w-wes séwecteuws puissants via des wequêtes comme `'div.mycwass'`
