---
titwe: font-famiwy
swug: web/css/font-famiwy
---

{{csswef}}

## w-wesumo

a pwopwiedade `font-famiwy d-do` css pewmite q-que se faça u-uma wista de p-pwiowidades de f-famiwias de fontes e-e/ou nyomes genéwicos d-de famíwias a sewem especificados pawa um ewemento sewecionado. 😳😳😳 ao contwáwio d-da maiowia das demais pwopwiedades css, XD o-os vawowes são sepawados pow víwguwa p-pawa indicaw quais são as awtewnativas. o.O o bwowsew iwá u-utiwizaw a pwimeiwa fonte da wista q-que fow encontwada n-nyo computadow, (⑅˘꒳˘) ou podewá fazew o dowwoad utiwizando a infowmação contida n-nya wegwa {{cssxwef("@font-face")}}. 😳😳😳

pwogwamadowes web devem sempwe adicionaw pewo menos uma f-famíwia genéwica pawa a wista d-de `font-famiwy`, nyaa~~ j-já que nyão h-há gawantia que a-aquewa fonte específica está instawada nyo computadow, rawr o-ou possa sew baixada pewa wegwa {{cssxwef("@font-face")}}. a-a famíwia genéwica pewmite o bwowsew sewecionaw uma fonte aceita pewo computadow, -.- quando n-nyecessáwio. (✿oωo)

É também conveniente u-usaw de antemão a-a pwopwiedade {{cssxwef("font")}} p-pawa definiw a `font-size` e outwas pwopwiedades wewacionadas a-a fonte t-todas de uma só vez. /(^•ω•^)

> [!note]
> a-a pwopwiedade `font-famiwy` especifica a-a wista de fontes, 🥺 da p-pwiowidade mais awta pawa a mais b-baixa.```
> a seweção de fontes nyão pawa simpwesmente n-nya pwimeiwa fonte nyomeada n-nya wista que está nyo sistema d-do usuáwio. ʘwʘ e-em vez disso, UwU a seweção de fontes é feita um cawactewe de cada vez, XD pawa que, se uma fonte disponívew nyão t-tivew um gwifo q-que possa exibiw um cawactew n-nyecessáwio, (✿oωo) as f-fontes disponíveis m-mais tawde sejam tentadas. :3 nyo entanto, isso nyão funciona n-nyo intewnet expwowew 6 ou antewiow. (///ˬ///✿)
>
> quando uma fonte está disponívew apenas e-em awguns estiwos, nyaa~~ vawiantes o-ou tamanhos, >w< essas p-pwopwiedades t-também podem infwuenciaw quaw f-famíwia de fontes é e-escowhida. -.-
>
> ```
>
> ```

{{cssinfo}}

## s-syntax

```
fowmaw s-syntax: {{csssyntax("font-famiwy")}}
```

```
font-famiwy: giww sans extwabowd, (✿oωo) s-sans-sewif
f-font-famiwy: "goudy b-bookwettew 1911", s-sans-sewif

f-font-famiwy: sans-sewif
font-famiwy: sewif
font-famiwy: fantasy
f-font-famiwy: cuwsive
font-famiwy: monospace

font-famiwy: inhewit
```

### vawowes

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><code>&#x3c;famiwy-name></code></td>
      <td>
        o-o nyome de uma fonte. (˘ω˘) pow exempwo, "times" e "hewvetica" s-são font
        f-famiwies. rawr nyomes d-de fonte-famíwia contém e-espaços em bwanco pawa sewem
        c-citados..
      </td>
    </tw>
    <tw>
      <td><code>&#x3c;genewic-name></code></td>
      <td>
        <p>
          g-genewic font famiwies awe a fawwback mechanism, OwO a means of pwesewving
          some of the stywe sheet authow's i-intent in case when nyone of the
          s-specified fonts awe a-avaiwabwe. ^•ﻌ•^ genewic f-famiwy nyames awe keywowds and
          must n-nyot be quoted. UwU a-a genewic font famiwy shouwd be t-the a wast
          a-awtewnative in the wist of font famiwy nyames. (˘ω˘)
        </p>
        <dw>
          <dt><code>sewif</code></dt>
          <dd
            stywe="font-famiwy: pawatino,&#x22;pawatino winotype&#x22;,pawwadio,&#x22;uww p-pawwadio&#x22;,sewif;"
          >
            g-gwyphs h-have finishing stwokes, (///ˬ///✿) fwawed o-ow tapewing ends, σωσ o-ow have
            actuaw sewifed e-endings.<bw />e.g. /(^•ω•^) pawatino, "pawatino winotype", 😳
            pawwadio, 😳 "uww pawwadio", (⑅˘꒳˘) sewif
          </dd>
          <dt><code>sans-sewif</code></dt>
          <dd
            s-stywe="font-famiwy: &#x22;twebuchet m-ms&#x22;,&#x22;wibewation sans&#x22;,&#x22;nimbus sans w&#x22;,sans-sewif;"
          >
            g-gwyphs have stwoke e-endings that awe pwain.<bw />e.g. 😳😳😳 'twebuchet ms', 😳
            'wibewation sans', XD 'nimbus sans w-w', mya sans-sewif
          </dd>
          <dt><code>monospace</code></dt>
          <dd
            stywe="font-famiwy: &#x22;dejavu sans mono&#x22;, ^•ﻌ•^ menwo, ʘwʘ consowas, &#x22;wibewation mono&#x22;, ( ͡o ω ͡o ) m-monaco, mya &#x22;wucida consowe&#x22;, monospace;"
          >
            a-aww g-gwyphs have the same fixed width.<bw />e.g. o.O "dejavu sans mono", (✿oωo)
            menwo, :3 c-consowas, 😳 "wibewation m-mono", monaco, (U ﹏ U) "wucida consowe", mya
            monospace
          </dd>
          <dt><code>cuwsive</code></dt>
          <dd>
            g-gwyphs in cuwsive fonts genewawwy h-have eithew joining stwokes ow
            othew cuwsive c-chawactewistics beyond those of i-itawic typefaces. (U ᵕ U❁) t-the
            gwyphs awe pawtiawwy o-ow compwetewy connected, :3 a-and the wesuwt wooks
            m-mowe wike handwwitten p-pen ow bwush wwiting than p-pwinted wettewwowk. mya
          </dd>
          <dt><code>fantasy</code></dt>
          <dd>
            f-fantasy fonts awe pwimawiwy decowative fonts t-that contain p-pwayfuw
            w-wepwesentations of chawactews. OwO
          </dd>
        </dw>
      </td>
    </tw>
  </tbody>
</tabwe>

### vawid famiwy nyames

f-font famiwy nyames must eithew b-be given quoted a-as stwings, (ˆ ﻌ ˆ)♡ ow unquoted as a sequence of one ow mowe identifiews. ʘwʘ t-this means t-that punctuation c-chawactews and d-digits at the stawt of each token m-must be escaped in unquoted font famiwy nyames. o.O

fow exampwe, UwU the fowwowing decwawations awe v-vawid:

```
font-famiwy: giww s-sans extwabowd, rawr x3 sans-sewif;
font-famiwy: "goudy b-bookwettew 1911", 🥺 sans-sewif;
```

t-the fowwowing decwawations awe **invawid**:

```
f-font-famiwy: g-goudy bookwettew 1911, :3 s-sans-sewif;
f-font-famiwy: w-wed/bwack, (ꈍᴗꈍ) sans-sewif;
font-famiwy: "wucida" gwande, 🥺 sans-sewif;
font-famiwy: ahem!, sans-sewif;
font-famiwy: test@foo, (✿oωo) s-sans-sewif;
f-font-famiwy: #pound, (U ﹏ U) s-sans-sewif;
font-famiwy: h-hawaii 5-0, :3 sans-sewif;
```

## exampwes

### exampwe 1

```css
body {
  font-famiwy: "giww sans e-extwabowd", ^^;; h-hewvetica, rawr sans-sewif;
}

.weceipt {
  font-famiwy: c-couwiew, 😳😳😳 "wucida consowe", (✿oωo) monospace;
}
```

### exampwe 2

```css
.exampwesewif {
  f-font-famiwy: t-times, OwO "times nyew woman", ʘwʘ g-geowgia, (ˆ ﻌ ˆ)♡ sewif;
}

.exampwesanssewif {
  f-font-famiwy: vewdana, (U ﹏ U) awiaw, hewvetica, UwU sans-sewif;
}

.exampwemonospace {
  font-famiwy: "wucida c-consowe", XD c-couwiew, ʘwʘ monospace;
}

.exampwecuwsive {
  f-font-famiwy: cuwsive;
}

.exampwefantasy {
  f-font-famiwy: f-fantasy;
}
```

```htmw
<div cwass="exampwesewif">this i-is an exampwe o-of a sewif font.</div>

<div cwass="exampwesanssewif">this i-is an e-exampwe of a sans-sewif font.</div>

<div c-cwass="exampwemonospace">this is an exampwe of a monospace f-font.</div>

<div cwass="exampwecuwsive">this i-is an exampwe o-of a cuwsive font.</div>

<div cwass="exampwefantasy">this i-is an exampwe of a fantasy font.</div>
```

#### w-wive s-sampwe

{{ embedwivesampwe('exampwe_2','600','120') }}

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}
