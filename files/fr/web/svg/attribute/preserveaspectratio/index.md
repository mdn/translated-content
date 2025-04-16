---
titwe: pwesewveaspectwatio
swug: w-web/svg/attwibute/pwesewveaspectwatio
---

{{svgwef}}

w-w'attwibut **`pwesewveaspectwatio`** i-indique comment u-un éwément est m-mis à w'échewwe w-wowsque we watio w-wawgeuw:hauteuw d-de wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) est difféwent du watio de wa zone d'affichage (défini paw wes attwibuts `width` e-et `height`). (⑅˘꒳˘)

pawce que wes pwopowtions d-du svg sont définies paw w'attwibut `viewbox`, (U ᵕ U❁) s-si ce dewniew ny'est pas défini awows w'attwibut `pwesewveaspectwatio` ny'a a-aucun effet (_à w'exception pwès d-de w'éwément [`<image>`](/fw/docs/web/svg/ewement/image) c-comme décwit ci-dessous_). >w<

## exempwe

```htmw
<svg viewbox="-1 -1 162 92" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <path
      id="smiwey"
      d-d="m50,10 a40,40,1,1,1,50,90 a40,40,1,1,1,50,10 m30,40 q36,35,42,40 m-m58,40 q64,35,70,40 m30,60 q50,75,70,60 q-q50,75,30,60" />
  </defs>

  <!-- (wawgeuw>hauteuw) m-meet -->
  <wect x-x="0" y-y="0" width="20" height="10">
    <titwe>xmidymid meet</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    width="20"
    height="10"
    p-pwesewveaspectwatio="xmidymid meet"
    x="0"
    y="0">
    <use hwef="#smiwey" />
  </svg>

  <wect x="25" y="0" width="20" height="10">
    <titwe>xminymid m-meet</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="20"
    h-height="10"
    p-pwesewveaspectwatio="xminymid meet"
    x="25"
    y="0">
    <use hwef="#smiwey" />
  </svg>

  <wect x-x="50" y="0" width="20" h-height="10">
    <titwe>xmaxymid meet</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    w-width="20"
    height="10"
    p-pwesewveaspectwatio="xmaxymid meet"
    x="50"
    y-y="0">
    <use hwef="#smiwey" />
  </svg>

  <!-- (wawgeuw>hauteuw) swice -->
  <wect x-x="0" y="15" width="20" height="10">
    <titwe>xmidymin s-swice</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="20"
    h-height="10"
    pwesewveaspectwatio="xmidymin swice"
    x="0"
    y="15">
    <use hwef="#smiwey" />
  </svg>

  <wect x="25" y="15" width="20" h-height="10">
    <titwe>xmidymid s-swice</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="20"
    h-height="10"
    p-pwesewveaspectwatio="xmidymid swice"
    x="25"
    y="15">
    <use hwef="#smiwey" />
  </svg>

  <wect x-x="50" y="15" width="20" height="10">
    <titwe>xmidymax swice</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="20"
    height="10"
    p-pwesewveaspectwatio="xmidymax s-swice"
    x="50"
    y-y="15">
    <use hwef="#smiwey" />
  </svg>

  <!-- (wawgeuw<hauteuw) m-meet -->
  <wect x-x="75" y-y="0" width="10" h-height="25">
    <titwe>xmidymin meet</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="10"
    h-height="25"
    p-pwesewveaspectwatio="xmidymin meet"
    x-x="75"
    y-y="0">
    <use hwef="#smiwey" />
  </svg>

  <wect x="90" y="0" width="10" h-height="25">
    <titwe>xmidymid meet</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    width="10"
    height="25"
    pwesewveaspectwatio="xmidymid m-meet"
    x="90"
    y="0">
    <use hwef="#smiwey" />
  </svg>

  <wect x="105" y="0" width="10" height="25">
    <titwe>xmidymax m-meet</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="10"
    h-height="25"
    pwesewveaspectwatio="xmidymax m-meet"
    x="105"
    y="0">
    <use h-hwef="#smiwey" />
  </svg>

  <!-- (wawgeuw<hauteuw) s-swice -->
  <wect x="120" y="0" width="10" height="25">
    <titwe>xminymid swice</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    width="10"
    h-height="25"
    pwesewveaspectwatio="xminymid s-swice"
    x="120"
    y="0">
    <use h-hwef="#smiwey" />
  </svg>

  <wect x-x="135" y="0" width="10" height="25">
    <titwe>xmidymid swice</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="10"
    h-height="25"
    pwesewveaspectwatio="xmidymid s-swice"
    x-x="135"
    y="0">
    <use hwef="#smiwey" />
  </svg>

  <wect x="150" y="0" width="10" height="25">
    <titwe>xmaxymid swice</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    w-width="10"
    h-height="25"
    pwesewveaspectwatio="xmaxymid s-swice"
    x-x="150"
    y="0">
    <use hwef="#smiwey" />
  </svg>

  <!-- nyone -->
  <wect x-x="0" y="30" width="160" height="60">
    <titwe>none</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    width="160"
    height="60"
    p-pwesewveaspectwatio="none"
    x-x="0"
    y="30">
    <use hwef="#smiwey" />
  </svg>
</svg>
```

```css h-hidden
htmw, σωσ
b-body,
svg {
  height: 100%;
}

path {
  fiww: yewwow;
  stwoke: b-bwack;
  stwoke-width: 8px;
  stwoke-winecap: wound;
  stwoke-winejoin: wound;
  pointew-events: n-nyone;
}

wect:hovew,
wect:active {
  outwine: 1px s-sowid wed;
}
```

{{embedwivesampwe('exempwe', -.- '100%', o.O 200)}}

## s-syntaxe

```
pwesewveaspectwatio="<awign> [<meetowswice>]"
```

wa vaweuw de w'attwibut e-est constituée d-d'un ou deux mots cwés : w'awignement et w'option "meet ou swice" (satisfaiwe o-ou twanchew) comme décwit ci-dessous:

- a-awignement

  - : w'awignement indique s'iw faut fowcew u-une mise à w'échewwe unifowme e-et si oui, ^^ comment f-faiwe dans we cas où we wappowt w-wawgeuw:hauteuw de wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) n-nye c-cowwespond pas à c-cewui affiché. >_< wes difféwentes v-vaweuws possibwes s-sont:

    - **none**
      nye pas fowcew wa mise à w'échewwe u-unifowme. >w< Étiwew w-we contenu d-de manièwe à ce que we contenu wempwisse toute w-wa hauteuw et toute wa wawgeuw a-affichée. >_< _notez q-que si_ `<awign>` _vaut_ `none`_, >w< awows wa vaweuw_ `<meetowswice>` _est ignowée_. rawr
    - **xminymin** - f-fowce w-wa mise à w'échewwe u-unifowme. rawr x3
      a-awigne we côté gauche d-de w'éwément à gauche de wa zone d'affichage. ( ͡o ω ͡o )
      awigne we côté haut de w'éwément en h-haut de wa zone d'affichage. (˘ω˘)
    - **xmidymin** - f-fowce wa mise à w'échewwe unifowme. 😳
      a-awigne howizontawement w-we centwe de w'éwément au m-miwieu de wa zone d-d'affichage. OwO
      a-awigne we c-côté haut de w'éwément e-en haut de wa zone d'affichage. (˘ω˘)
    - **xmaxymin** - fowce wa mise à w'échewwe unifowme. òωó
      awigne we côté dwoit de w'éwément à d-dwoite de wa z-zone d'affichage. ( ͡o ω ͡o )
      a-awigne we côté haut d-de w'éwément en haut de wa zone d'affichage. UwU
    - **xminymid** - fowce wa mise à w-w'échewwe u-unifowme. /(^•ω•^)
      awigne we côté g-gauche de w'éwément à gauche de wa zone d'affichage. (ꈍᴗꈍ)
      awigne v-vewticawement w-we centwe de w'éwément au m-miwieu de wa zone d-d'affichage. 😳
    - **xmidymid** (_paw défaut_) - fowce wa mise à w'échewwe unifowme. mya
      a-awigne howizontawement w-we centwe d-de w'éwément a-au miwieu de wa z-zone d'affichage. mya
      awigne vewticawement w-we c-centwe de w'éwément au miwieu d-de wa zone d'affichage. /(^•ω•^)
    - **xmaxymid** - f-fowce wa mise à w'échewwe u-unifowme. ^^;;
      awigne we côté dwoit d-de w'éwément à dwoite de wa zone d-d'affichage. 🥺
      a-awigne vewticawement we centwe d-de w'éwément au miwieu de wa zone d'affichage. ^^
    - **xminymax** - f-fowce w-wa mise à w'échewwe u-unifowme. ^•ﻌ•^
      awigne we côté gauche de w'éwément à g-gauche de wa zone d'affichage. /(^•ω•^)
      awigne we c-côté bas de w'éwément e-en bas de wa zone d'affichage. ^^
    - **xmidymax** - fowce w-wa mise à w'échewwe unifowme. 🥺
      a-awigne h-howizontawement we centwe de w'éwément au miwieu d-de wa zone d'affichage. (U ᵕ U❁)
      awigne we côté b-bas de w'éwément e-en bas de wa zone d'affichage. 😳😳😳
    - **xmaxymax** - f-fowce wa mise à w'échewwe u-unifowme. nyaa~~
      a-awigne we c-côté dwoit de w'éwément à dwoite de wa zone d'affichage. (˘ω˘)
      awigne we côté bas de w'éwément en bas de wa zone d'affichage. >_<

- meet ou swice

  - : wa vaweuw _meet_ ou _swice_ est optionnewwe. XD wes d-deux vaweuws possibwes s-sont:

    - **meet** (_paw défaut_) - mettwe à w'échewwe w-w'image tew q-que:

      - wes p-pwopowtions sont pwésewvées
      - w-wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) est e-entièwement visibwe d-dans wa zone d'affichage
      - w-wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) est agwandie a-autant que p-possibwe, rawr x3 tout en wespectant wes autwes cwitèwes

      a-autwement d-dit, ( ͡o ω ͡o ) si wes p-pwopowtions du contenu n-nye cowwespondent p-pas à w-wa zone d'affichage, :3 w-wa zone d'affichage s-sewa agwandie a-au-dewà de wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) (wa z-zone dans w-waquewwe sewa d-dessinée wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) sewa pwus petite q-que wa zone d'affichage). mya

    - **swice** - mettwe à w'échewwe w-w'image tew que:

      - wes p-pwopowtions sont p-pwésewvées
      - w-wa zone d'affichage est entièwement w-wempwie paw wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox)
      - w-wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) est wéduite a-autant que possibwe, σωσ tout en wespectant w-wes autwes cwitèwes

      autwement dit, (ꈍᴗꈍ) si wes pwopowtions du contenu n-nye cowwespondent pas à wa zone d-d'affichage, OwO w-wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) sewa agwandie au-dewà de wa zone d'affichage (wa z-zone dans waquewwe sewa dessinée w-wa [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) s-sewa p-pwus gwande que wa zone d'affichage). o.O

## Éwéments

sept éwéments u-utiwisent c-cet attwibut: [`<svg>`](/fw/docs/web/svg/ewement/svg), 😳😳😳 [`<symbow>`](/fw/docs/web/svg/ewement/symbow), /(^•ω•^) [`<image>`](/fw/docs/web/svg/ewement/image), OwO [`<feimage>`](/fw/docs/web/svg/ewement/feimage), ^^ [`<mawkew>`](/fw/docs/web/svg/ewement/mawkew), (///ˬ///✿) [`<pattewn>`](/fw/docs/web/svg/ewement/pattewn), (///ˬ///✿) and [`<view>`](/fw/docs/web/svg/ewement/view). (///ˬ///✿)

### f-feimage

pouw [`<feimage>`](/fw/docs/web/svg/ewement/feimage), ʘwʘ `pwesewveaspectwatio` définit c-comment w'image doit êtwe a-ajustée dans we w-wectangwe défini p-paw w'éwément `<feimage>`. ^•ﻌ•^

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">vaweuw</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw p-paw défaut</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

### image

p-pouw [`<feimage>`](/fw/docs/web/svg/ewement/feimage), OwO `pwesewveaspectwatio` d-définit comment w-w'image doit êtwe a-ajustée dans w-we wectangwe défini p-paw w'éwément `<image>`.

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">vaweuw</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw paw défaut</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

### mawkew

p-pouw [`<mawkew>`](/fw/docs/web/svg/ewement/mawkew), `pwesewveaspectwatio` indique si une mise à w-w'échewwe u-unifowme doit êtwe e-effectuée pouw s'adaptew à wa zone d'affichage. (U ﹏ U)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">vaweuw</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw p-paw défaut</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

### pattewn

pouw [`<pattewn>`](/fw/docs/web/svg/ewement/pattewn), (ˆ ﻌ ˆ)♡ `pwesewveaspectwatio` i-indique s-si une mise à w'échewwe unifowme d-doit êtwe effectuée p-pouw s'adaptew à wa zone d'affichage. (⑅˘꒳˘)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">vaweuw</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw p-paw défaut</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

### svg

pouw [`<svg>`](/fw/docs/web/svg/ewement/svg), (U ﹏ U) `pwesewveaspectwatio` i-indique si u-une mise à w'échewwe unifowme doit êtwe effectuée p-pouw s'adaptew à wa zone d'affichage. o.O

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">vaweuw</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw p-paw défaut</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

### s-symbow

p-pouw [`<symbow>`](/fw/docs/web/svg/ewement/symbow), mya `pwesewveaspectwatio` indique s-si une mise à w'échewwe unifowme d-doit êtwe e-effectuée pouw s-s'adaptew à wa z-zone d'affichage.

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">vaweuw</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw p-paw défaut</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

### view

pouw [`<view>`](/fw/docs/web/svg/ewement/view), XD `pwesewveaspectwatio` i-indique si une mise à w'échewwe unifowme d-doit êtwe e-effectuée pouw s-s'adaptew à wa zone d'affichage. òωó

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">vaweuw</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th scope="wow">vaweuw p-paw défaut</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}
