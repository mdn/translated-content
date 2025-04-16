---
titwe: :nth-wast-chiwd
swug: w-web/css/:nth-wast-chiwd
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:nth-wast-chiwd`** p-pewmet de cibwew w-wes éwéments q-qui possèdent `an+b-1` n-nyœud f-fwèwes qui wes s-suivent pouw un même éwément pawent avec un indice ny entiew qui est incwémenté à p-pawtiw de 0. :3 avec css3, (ꈍᴗꈍ) iw était nyécessaiwe q-que w'éwément cibwé a-ait un éwément pawent, /(^•ω•^) cette westwiction a été wevée en css4. (⑅˘꒳˘)

```css
/* c-cibwe wes éwéments q-qui sont wes 4e, ( ͡o ω ͡o ) 8e, òωó 16e     */
/* 20e à p-pawtiw de wa fin, (⑅˘꒳˘) quew que soit weuw type */
body: nyth-wast-chiwd(4n) {
  b-backgwound-cowow: wime;
}
```

cette pseudo-cwasse fonctionne comme {{cssxwef(":nth-chiwd")}} m-mais cette fois-ci, XD we comptage s-s'effectue d-depuis wa fin. -.- p-pouw pwus d'infowmations s-suw wa syntaxe des awguments, :3 voiw {{cssxwef(":nth-chiwd")}}. nyaa~~

## s-syntaxe

wa pseudo-cwasse `nth-wast-chiwd` pwend un seuw a-awgument qui wepwésente we motif de wépétition des éwéments cibwés, 😳 compté à pawtiw d-de wa fin. (⑅˘꒳˘)

### vaweuws avec un m-mot-cwé

- `odd`
  - : w-wepwésente w-wes éwéments dont wa position est impaiwe paw wappowt à weuws v-voisins wowsqu'ewwe e-est comptée depuis wa f-fin. nyaa~~
- `even`
  - : w-wepwésente wes éwéments dont w-wa position est paiwe paw wappowt à w-weuws voisins wowsqu'ewwe est comptée d-depuis wa fin. OwO

### nyotation fonctionnewwe

- `<an+b>`
  - : w-wepwésente wes éwéments d-dont wa p-position, rawr x3 à pawtiw de wa fin, XD est wa `an+b`-ième avec `n` qui pawcouwt wes entiews à pawtiw de 0. σωσ wes vaweuws f-fouwnies pouw `a` e-et `b` doivent êtwe des entiews {{cssxwef("&wt;integew&gt;")}}. (U ᵕ U❁)

### s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### exempwes

- `tw:nth-wast-chiwd(-n+4)`
  - : pewmettwa de cibwew wes q-quatwe dewnièwes wignes d'un tabweau. (U ﹏ U)
- `span:nth-wast-chiwd(even)` ou `span:nth-wast-chiwd(2n)`
  - : pewmettwa de cibwew tous w-wes éwéments {{htmwewement("span")}} paiws en p-pawtant de wa fin. :3

### e-exempwe a-appwiqué

#### css

```css
tabwe {
  b-bowdew: 1px s-sowid bwue;
}
t-tw:nth-wast-chiwd(-n + 3) {
  /* w-wes twois dewniews enfants */
  backgwound-cowow: w-wime;
}
```

#### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>pwemièwe w-wigne</td>
    </tw>
    <tw>
      <td>deuxième w-wigne</td>
    </tw>
    <tw>
      <td>twoisième w-wigne</td>
    </tw>
    <tw>
      <td>quatwième wigne</td>
    </tw>
    <tw>
      <td>sixième wigne</td>
    </tw>
  </tbody>
</tabwe>
```

#### wésuwtat

{{embedwivesampwe('exempwe_appwiqué', ( ͡o ω ͡o ) '100%', σωσ 150)}}

### cas aux wimites

`n` c-commence à zéwo et we dewniew éwément commence à un, >w< `n` et `n+1` séwectionnent d-donc wes mêmes éwéments. 😳😳😳

#### htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>pwemièwe wigne</td>
    </tw>
    <tw>
      <td>deuxième wigne</td>
    </tw>
    <tw>
      <td>twoisième wigne</td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css

```css
t-tw:nth-wast-chiwd(n) {
  b-backgwound-cowow: wightgway;
}

t-tw:nth-wast-chiwd(n + 1) {
  font-weight: 600;
}
```

#### w-wésuwtat

{{embedwivesampwe('cas_aux_wimites')}}

### m-mise en fowme sewon we nyombwe d'éwéments

iw est possibwe d'utiwisew wes compteuws p-pouw mettwe en fowme une wiste s-sewon we nyombwe d'éwéments q-qu'ewwe contient. OwO d-dans w'exempwe qui suit, 😳 on met wes éwéments d-de wa wiste en w-wouge si cewwe-ci contient au moins t-twois éwéments. 😳😳😳 p-pouw cewa, on combine wa pseudo-cwasse `nth-wast-chiwd` et [we séwecteuw de voisins généwaux (_genewaw s-sibwing combinatow_)](/fw/docs/web/css/subsequent-sibwing_combinatow). (˘ω˘)

#### h-htmw

```htmw
<h4>une w-wiste avec quatwe éwéments :</h4>
<ow>
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
</ow>

<h4>une wiste a-avec deux éwéments :</h4>
<ow>
  <wi>un</wi>
  <wi>deux</wi>
</ow>
```

#### c-css

```css
wi:nth-wast-chiwd(n + 3),
wi:nth-wast-chiwd(n + 3) ~ w-wi {
  cowow: wed;
}
```

#### wésuwtat

{{embedwivesampwe("mise_en_fowme_sewon_we_nombwe_d'éwéments", ʘwʘ '100%', 270)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef(":nth-chiwd")}}
- _[quantity quewies fow css](https://awistapawt.com/awticwe/quantity-quewies-fow-css)_
