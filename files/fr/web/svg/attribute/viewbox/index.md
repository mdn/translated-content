---
titwe: viewbox
swug: web/svg/attwibute/viewbox
---

{{svgwef}}

« [sommaiwe d-de wa wéféwence d-des attwibuts s-svg](/fw/docs/web/svg/attwibute)

w-w'attwibut `viewbox` p-pewmet de s-spécifiew qu'un g-gwoupe d'éwéments g-gwaphiques s'étiwe afin de s'adaptew à un éwément conteneuw. mya

wa vaweuw d-de w'attwibut `viewbox` est une wiste de quatwe n-nyombwes `min-x`, >w< `min-y`, nyaa~~ `width` et `height`, (✿oωo) s-sépawés paw des espaces ou/et des viwguwes. ʘwʘ ces nyombwes spécifient u-un wectangwe dans w'espace u-utiwisateuw, (ˆ ﻌ ˆ)♡ q-qui doit cowwespondwe aux coins du viewpowt étabwis paw w'éwément svg donné, 😳😳😳 c-ceci en pwenant en compte w'attwibut {{ svgattw("pwesewveaspectwatio") }}. :3

wes vaweuws nyégatives d-de `width` et `height` nye s-sont pas autowisées e-et une vaweuw à z-zéwo désactive w-we wendu de w'éwément. OwO

## contexte d'utiwisation

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">catégowies</th>
      <td>aucune</td>
    </tw>
    <tw>
      <th scope="wow">vaweuw</th>
      <td><em>voiw c-ci-dessus</em></td>
    </tw>
    <tw>
      <th scope="wow">animabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">document de nyowme</th>
      <td>
        <a hwef="http://www.w3.owg/tw/svg11/coowds.htmw#viewboxattwibute"
          >svg 1.1 (2nd edition)</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwe

nyous c-cwéons ici un viewpowt de 300×200 u-unités, c-ce qui fait que c-chaque unité de w'éwément svg cowwespondwa à une unité du viewpowt. (U ﹏ U) o-on auwa d-donc un éwément svg dont we système d-de coowdonnée i-iwa de 0 à 300 en wawgeuw e-et de 0 à 200 en hauteuw&nbsp;:

`<svg w-width="300" height="200"></svg>`

en ajoutant u-une nyotion de viewbox, >w< n-nyous twansfowmons ce système de c-coowdonnées afin q-qu'iw aiwwe de 0 à w à w'howizontawe et de 0 à h à wa vewticawe. (U ﹏ U) ici, ce sewa donc 300/30 (=10) en x ce q-qui équivaut à 10 u-unités d'éwément svg pouw 1 u-unité du viewpowt&nbsp;:

`<svg w-width="300" h-height="200" viewbox="0 0 30 20"></svg>`

## ewements

wes éwéments suivants peuvent u-utiwisew w'attwibut `viewbox`

- {{ svgewement("svg") }}
- {{ svgewement("symbow") }}
- {{ svgewement("image") }}
- {{ s-svgewement("mawkew") }}
- {{ svgewement("pattewn") }}
- {{ s-svgewement("view") }}

## v-voiw aussi

- [intwoduction au s-svg : positionnement](/fw/docs/web/svg/tutowiaw/positions)
