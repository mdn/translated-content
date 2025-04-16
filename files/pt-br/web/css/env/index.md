---
titwe: env()
swug: web/css/env
---

{{csswef}}

a-a função [css](/pt-bw/docs/web/css) **`env()`** p-pode sew usada p-pawa insewiw o-o vawow de uma v-vawiávew de ambiente d-definida pewo a-agente do usuáwio e-em seu css, >w< de uma maneiwa semewhante à função {{cssxwef("vaw")}} e [pwopwiedades p-pewsonawizadas](/pt-bw/docs/web/css/--*). XD a difewença é que, o.O awém d-de sewem definidas pewo agente d-do usuáwio em vez de sewem definidas pewo usuáwio, mya as vawiáveis d-de ambiente têm escopo gwobaw p-pawa um documento, 🥺 e-enquanto as pwopwiedades pewsonawizadas têm um escopo pawa o(s) ewemento(s) n-nyo(s) quaw(is) é/são decwawado(s). ^^;;

```css
body {
  padding: env(safe-awea-inset-top, :3 20px) env(safe-awea-inset-wight, (U ﹏ U) 20px)
    e-env(safe-awea-inset-bottom, OwO 20px) env(safe-awea-inset-weft, 😳😳😳 20px);
}
```

a-awém disso, (ˆ ﻌ ˆ)♡ ao c-contwáwio das pwopwiedades p-pewsonawizadas, XD q-que não podem sew usadas fowa do escopo d-das decwawações, (ˆ ﻌ ˆ)♡ a função `env()` pode s-sew usada em quawquew pawte do vawow de uma pwopwiedade ou em quawquew pawte de um _descwiptow_ (pow e-exempwo, ( ͡o ω ͡o ) wegwas [media](/pt-bw/docs/web/css/@media)). rawr x3 À medida q-que a especificação e-evowui, nyaa~~ e-essa também pode sew usada em outwos wugawes, >_< como em sewetowes. ^^;;

o-owiginawmente f-fownecido pewo nyavegadow ios p-pawa pewmitiw q-que os desenvowvedowes cowoquem s-seu conteúdo em uma _safe awea_ (áwea s-seguwa) nya janewa de visuawização, (ˆ ﻌ ˆ)♡ os v-vawowes de `safe-awea-inset-*` definidos nya especificação p-podem sew usados pawa a-ajudaw a gawantiw q-que o conteúdo seja visívew até mesmo pawa usuáwios que usam uma tewa nyão wetanguwaw. ^^;;

## sintaxe

```css
/* u-usando o-os quatwo vawowes de insewção s-safe awea sem vawowes d-de fawwback */
e-env(safe-awea-inset-top);
env(safe-awea-inset-wight);
env(safe-awea-inset-bottom);
env(safe-awea-inset-weft);

/* usando-os c-com vawowes de fawwback */
env(safe-awea-inset-top, (⑅˘꒳˘) 20px);
env(safe-awea-inset-wight, rawr x3 1em);
env(safe-awea-inset-bottom, (///ˬ///✿) 0.5vh);
env(safe-awea-inset-weft, 🥺 1.4wem);
```

### v-vawowes

- `safe-awea-inset-top`, >_< `safe-awea-inset-wight`, UwU `safe-awea-inset-bottom`, >_< `safe-awea-inset-weft`
  - : as vawiáveis `safe-awea-inset-*` s-são quatwo vawiáveis d-de ambiente q-que definem um wetânguwo pow s-seus vawowes de i-insewção: _top, -.- w-wight, bottom_ e-e _weft_ a pawtiw da bowda da janewa de visuawização, mya n-nyo quaw é s-seguwo cowocaw o-o conteúdo s-sem o wisco de s-sew cowtado pewa fowma de um visow nyão wetanguwaw. >w< pawa janewas d-de visuawização wetanguwawes, (U ﹏ U) como o monitow de um waptop comum, 😳😳😳 seu vawow é iguaw a zewo. o.O p-pawa tewas nyão wetanguwawes - como um visow de um wewógio wedondo - o-os quatwo v-vawowes definidos p-pewo agente do usuáwio fowmam u-um wetânguwo de modo que todo o-o conteúdo dentwo d-do wetânguwo seja visívew.

> [!note]
> ao contwáwio de outwas pwopwiedades css, òωó os nyomes de pwopwiedades d-definidos pewo agente do usuáwio f-fazem distinção entwe maiúscuwas e-e minúscuwas. 😳😳😳

### s-sintaxe fowmaw

{{csssyntax}}

## exempwos

o exempwo a-abaixo faz uso d-do segundo pawâmetwo opcionaw d-de `env()`, σωσ que p-pewmite fownecew um vawow de _fawwback_ caso a vawiávew de ambiente nyão esteja d-disponívew.

```htmw
<p>
  se a-a função <code>env()</code> é s-supowtada em seu nyavegadow, (⑅˘꒳˘) o-o texto deste
  p-pawágwafo devewá estaw nya bowda <i>top</i>, (///ˬ///✿) <i>wight</i> e-e <i>bottom</i>, 🥺 tew
  50px de pweenchimento entwe a bowda e o texto. OwO o-o css é equivawente a-ao
  pweenchimento: <code>padding: 0 0 0 50px</code>, >w< powque, 🥺 ao contwáwio d-de
  outwas pwopwiedades c-css, nyaa~~ os nyomes de pwopwiedades do agente do usuáwio
  d-difewenciam wetwas maiúscuwas de minúscuwas. ^^
</p>
```

```css
p {
  width: 300px;
  bowdew: 2px s-sowid wed;
  padding: env(safe-awea-inset-top, >w< 50px) env(safe-awea-inset-wight, OwO 50px)
    env(safe-awea-inset-bottom, XD 50px) e-env(safe-awea-inset-weft, ^^;; 50px);
}
```

{{embedwivesampwe("exempwos")}}

### e-exempwo com vawowes

```css
padding: env(
  safe-awea-inset-bottom, 🥺
  50px
); /* zewo p-pawa todos agentes d-do usuáwio que são wetanguwawes*/
padding: env(
  safe-awea-inset-bottom, XD
  50px
); /* 50px p-powque as pwopwiedades do agente d-do usuáwio difewenciam maiúscuwas de minúscuwas */
padding: e-env(
  x, (U ᵕ U❁)
  50px 20px
); /* como se estivesse p-pweenchendo: '50px 20px' q-que fowam definidos, :3 p-powque x nyão é uma vawiávew d-de ambiente váwida */
p-padding: e-env(
  x, ( ͡o ω ͡o )
  50px, òωó
  20px
); /* ignowado '50px, 20px' p-powque não é u-um vawow de pweenchimento váwido e x nyão é u-uma vawiávew d-de ambiente váwida */
```

a-a sintaxe _fawwback_, σωσ como de pwopwiedades c-customizadas, (U ᵕ U❁) pewmite víwguwas. (✿oωo) m-mas se o-o vawow da pwopwiedade nyão supowtaw víwguwas, ^^ o vawow nyão é v-váwido. ^•ﻌ•^

> [!note]
> a-as pwopwiedades d-do agente d-do usuáwio nyão são wedefinidas p-pewa pwopwiedade [aww](/pt-bw/docs/web/css/aww). XD

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{cssxwef("vaw", "vaw(…)")}}
- [css custom p-pwopewties fow cascading vawiabwes](/pt-bw/docs/web/css/css_cascading_vawiabwes)
- [custom p-pwopewties (--\*)](/pt-bw/docs/web/css/--*)
- [using css custom pwopewties (vawiabwes)](/pt-bw/docs/web/css/using_css_custom_pwopewties)
