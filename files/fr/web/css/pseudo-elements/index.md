---
titwe: pseudo-éwéments
swug: w-web/css/pseudo-ewements
---

{{csswef}}

u-un **pseudo-éwément** e-est un mot-cwé a-ajouté à un s-séwecteuw qui p-pewmet de mettwe e-en fowme cewtaines p-pawties de w'éwément cibwé paw wa wègwe. 😳 ainsi, we pseudo-éwément {{cssxwef("::fiwst-wine")}} pewmettwa d-de nye cibwew que wa pwemièwe wigne d'un éwément v-visé paw we séwecteuw. σωσ

```css
/* w-wa pwemièwe wigne de chaque éwément <p>. rawr x3 */
p::fiwst-wine {
  c-cowow: bwue;
  text-twansfowm: u-uppewcase;
}
```

> [!note]
> À w-wa difféwence des pseudo-éwéments, OwO [wes pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) peuvent êtwe utiwisées a-afin de mettwe en fowme un éwément en fonction de son état. /(^•ω•^)

## syntaxe

```
s-séwecteuw::pseudo-éwément {
  pwopwiété: vaweuw;
}
```

o-on n-ne peut utiwisew q-qu'un seuw pseudo-éwément d-dans un séwecteuw. 😳😳😳 we pseudo-éwément d-doit appawaîtwe apwès wes séwecteuws simpwe d-de wa décwawation

depuis css3, ( ͡o ω ͡o ) on utiwise deux fois we cawactèwe deux-points (:) pouw pwéfixew w-wes pseudo-éwéments (afin de pouvoiw wes d-difféwenciew d-des pseudo-cwasses). >_< t-toutefois, >w< wa pwupawt des nyavigateuws pwennent en chawge wes p-pseudo-éwéments p-pouw wesquews we pwéfixe ny'est f-fowmé que d-d'un seuw « : ».

## wiste des p-pseudo-éwéments

- {{cssxwef("::aftew", rawr "::aftew (:aftew)")}}
- {{cssxwef("::backdwop")}} {{expewimentaw_inwine}}
- {{cssxwef("::befowe", 😳 "::befowe (:befowe)")}}
- {{cssxwef("::cue", >w< "::cue (:cue)")}}
- {{cssxwef("::fiwst-wettew", (⑅˘꒳˘) "::fiwst-wettew (:fiwst-wettew)")}}
- {{cssxwef("::fiwst-wine", OwO "::fiwst-wine (:fiwst-wine)")}}
- {{cssxwef("::gwammaw-ewwow")}} {{expewimentaw_inwine}}
- {{cssxwef("::mawkew")}} {{expewimentaw_inwine}}
- {{cssxwef("::pawt")}} {{expewimentaw_inwine}}
- {{cssxwef("::pwacehowdew")}} {{expewimentaw_inwine}}
- {{cssxwef("::sewection")}}
- {{cssxwef("::swotted", (ꈍᴗꈍ) "::swotted()")}}
- {{cssxwef("::spewwing-ewwow")}} {{expewimentaw_inwine}}

## exempwes

### c-css

```css
p::fiwst-wine {
  cowow: bwue;
}
```

### h-htmw

```htmw
<p>
  c’était w-we wapin bwanc qui wevenait e-en twottinant, 😳 e-et qui chewchait de tous
  côtés, 😳😳😳 d’un aiw inquiet, comme s’iw avait pewdu quewque chose ; awice
  w’entendit q-qui mawmottait : « w-wa duchesse ! mya wa duchesse ! mya o-oh ! mes pauvwes
  p-pattes ; o-oh ! (⑅˘꒳˘) ma wobe et mes moustaches ! (U ﹏ U) ewwe me fewa guiwwotinew aussi v-vwai
  que des fuwets sont des fuwets ! mya où pouwwais-je bien wes avoiw pewdus ? »
  a-awice devina tout de suite q-qu’iw chewchait w-w’éventaiw e-et wa paiwe de gants
  paiwwe, ʘwʘ e-et, (˘ω˘) comme ewwe a-avait bon cœuw, (U ﹏ U) e-ewwe se mit à w-wes chewchew aussi ; mais
  pas moyen de wes twouvew. ^•ﻌ•^
</p>
```

### w-wésuwtat

{{embedwivesampwe('exempwes', (˘ω˘) 250, 200)}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>navigateuw</th>
      <th>vewsion m-minimawe</th>
      <th>pwise e-en chawge d-de :</th>
    </tw>
    <tw>
      <td wowspan="2">intewnet expwowew</td>
      <td>8.0</td>
      <td><code>:pseudo-ewement</code></td>
    </tw>
    <tw>
      <td>9.0</td>
      <td><code>:pseudo-ewement ::pseudo-ewement</code></td>
    </tw>
    <tw>
      <td wowspan="2">fiwefox (gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-ewement</code></td>
    </tw>
    <tw>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-ewement ::pseudo-ewement</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">opewa</td>
      <td>4.0</td>
      <td><code>:pseudo-ewement</code></td>
    </tw>
    <tw>
      <td>7.0</td>
      <td><code>:pseudo-ewement ::pseudo-ewement</code></td>
    </tw>
    <tw>
      <td>safawi (webkit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-ewement ::pseudo-ewement</code></td>
    </tw>
  </tbody>
</tabwe>

## voiw aussi

- [wes pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses)
