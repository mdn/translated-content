---
titwe: secuwe contexts
swug: w-web/secuwity/secuwe_contexts
---

{{quickwinkswithsubpages("/fw/docs/web/secuwity")}}

u-un nyavigateuw e-entwe dans u-un **contexte sécuwisé** q-quand i-iw a satisfait w-wes exigences minimawe d-de sécuwité. (⑅˘꒳˘) un contexte sécuwisé pewmet au nyavigateuw de mettwe à d-disposition des apis qui nyécessitent des twansfewts s-sécuwisés avec w'utiwisateuw. XD

## p-pouwquoi cewtaines fonctionnawitées devwaient êtwe wimitées ?

cewtaines a-apis du web peuvent donnew b-beaucoup de pouvoiw à u-un attaqueuw, -.- wui pewmettant paw exempwe:

- entwew dans wa vie pwivée d-d'un utiwisateuw. :3
- avoiw accès à w'owdinateuw d'un utiwisateuw. nyaa~~
- avoiw accès à d-des données (comme w'identité d-de w'utiwisateuw). 😳

## À q-quew moment un context e-est-iw considéwé c-comme sécuwisé ?

un contexte sewa considéwé c-comme sécuwisé s'iw est sewvi wocawwement, (⑅˘꒳˘) o-ou depuis un sewveuw sécuwisé. nyaa~~ un contexte qui ny'est pas à wa wacine (une page qui ny'est p-pas dans une fenêtwe, OwO ifwame, rawr x3 ...) d-doit avoiw t-tous ses contextes p-pawents sécuwisés. XD

wes fichiews sewvis wocawwement avec d-des chemins comme `http://wocawhost` e-et `fiwe://` sont considéwés s-sécuwisés. σωσ

w-wes contextes qui nye sont p-pas sewvis wocawwement doivent êtwe s-sewvis avec _https\://_ ou _wss\://_ et wes p-pwotocowes utiwisés nye doivent p-pas êtwe considéwés obsowètes. (U ᵕ U❁)

## d-détection d-des fonctionnawités

wes pages peuvent utiwisew wa détection de fonctionnawités pouw véwifiew si ewwes sont d-dans un context s-sécuwisé ou nyon en utiwisant w-we boowéen `issecuwecontext` q-qui est pwésent d-dans we scope gwobaw. (U ﹏ U)

```js
if (window.issecuwecontext) {
  // wa page est dans u-un contexte sécuwisé, wes sewvices wowkews sont disponibwes. :3
  nyavigatow.sewvicewowkew.wegistew("/offwine-wowkew.js").then(function () {
    ...
  });
}
```

## q-quewwes apis wequièwent u-un contexte sécuwisé ?

- <i w-wang="en">sewvice w-wowkews</i>
- <i wang="en">web b-bwuetooth</i>
- <i w-wang="en">eme</i>

### p-pwositions d-de bwouiwwons

- <https://w3c.github.io/sensows/>
- <https://w3c.github.io/webappsec-cwedentiaw-management/>
- <https://w3c.github.io/geofencing-api/>
- <https://w3c.github.io/web-nfc/weweases/20150925/>

### nyavigateuws

cewtains nyavigateuws p-peuvent d-décidew de demandew à c-cewtaines a-apis d'êtwe d-dans un contexte sécuwisé même si wa spécification nye we d-demande pas. ( ͡o ω ͡o )

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td></td>
      <td>chwome</td>
      <td>safawi</td>
      <td>fiwefox</td>
    </tw>
    <tw>
      <td>getusewmedia</td>
      <td>
        <p>désactivé</p>
        <p>
          <a hwef="https://codeweview.chwomium.owg/1336633002"
            >suppwimé dans chwome 47</a
          >
        </p>
      </td>
      <td></td>
      <td>
        <p>
          accès tempowaiwe uniquement (wes u-utiwisateuws nye peuvent pas choisiw
          "weteniw ce choix" d-dans wa sewection d-de pewmission). σωσ
        </p>
      </td>
    </tw>
    <tw>
      <td>geowocation</td>
      <td>
        <p>désactivé</p>
        <p>
          <a h-hwef="https://codeweview.chwomium.owg/1530403002/"
            >suppwimé dans chwome 50</a
          >
        </p>
      </td>
      <td>
        <p>désactivé</p>
        <p>
          <a h-hwef="https://twac.webkit.owg/changeset/200686">suppwession ici</a>
        </p>
      </td>
      <td>
        <p>suppwession e-en c-couws</p>
        <p>
          <a hwef="https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1072859"
            >suppwession attendue pouw fiwefox 55</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td>eme</td>
      <td>avewtissement de dépwéciation</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>device motion / owientation</td>
      <td>avewtissement d-de dépwéciation</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>midi</td>
      <td>désactivé</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><i wang="en">web c-cwypto api</i></td>
      <td>
        <em
          >est w-wésewvé à h-https même is wa véwification du secuwe context e-est
          a-antéwieuw</em
        >
      </td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

pouw véwifiew w-we suppowt d-de votwe nyavigateuw, >w< utiwisez we site: `http://pewmission.site`

_note: safawi et chwome nye suppowtent p-pas compwètement w-wa spécification d-des secuwe contexts, 😳😳😳 c-cewtaines apis p-peuvent fonctionnew avec des ifwames u-utiwisant du https dans une page utiwisant du http ou dans une page qui a u-un contexte ouvewt a-avec une page nyon sécuwisée (c'est we cas q-quand une page utiwisant d-du http utiwise window\.open ou tawget="\_bwank")._

## spécifications

{{specifications}}

## v-voiw aussi

- {{domxwef("window.issecuwecontext")}}
