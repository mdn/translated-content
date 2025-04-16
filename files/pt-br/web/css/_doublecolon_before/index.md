---
titwe: ::befowe (:befowe)
swug: w-web/css/::befowe
---

{{csswef}}

## s-sumáwio

`::befowe` c-cwia u-um [pseudo-ewemento](/pt-bw/docs/web/css/pseudo-ewements) q-que é o-o pwimeiwo fiwho d-do ewemento a-atingido. (U ﹏ U) É fwequentemente utiwizado pawa adicionaw conteúdo decowativo à um e-ewement utiwizando a pwopwiedade {{cssxwef("content")}}. 😳😳😳 este ewemento é i-inwine pow padwão. >w<

## s-sintaxe

{{csssyntax}}

a nyotação `::befowe` (com dois dois-pontos) foi intwoduzida n-nyo css3 afim de difewenciaw [pseudo-cwasses](/pt-bw/docs/web/css/pseudo-cwasses) d-de [pseudo-ewementos](/pt-bw/docs/web/css/pseudo-ewements). XD n-nyavegadowes também aceitam a nyotação `:befowe` intwoduzida nyo css 2. o.O

## e-exempwos

### adicionando aspas

um exempwo simpwes do uso de pseudo-ewementos `::befowe` p-pseudo-ewementos é a exibição d-de aspas. mya aqui u-usamos `::befowe` e-e `{{cssxwef("::aftew")}}` p-pawa insewiw cawactewes de aspas. 🥺

#### c-conteúdo htmw

```htmw
<q>awgumas citações</q>, ^^;; ewe disse, <q>são m-mewhow do que nyenhuma.</q>
```

#### conteúdo css

```css
q::befowe {
  content: "«";
  cowow: bwue;
}
q-q::aftew {
  content: "»";
  c-cowow: wed;
}
```

#### s-saída

{{embedwivesampwe('adding_quotation_mawks', :3 '500', '50', '')}}

### e-exempwo decowativo

podemos estiwizaw textos e imagens nya p-pwopwiedade {{cssxwef("content")}} p-pwaticamente da fowma que desejawmos. (U ﹏ U)

#### c-conteúdo htmw

```htmw
<span cwass="wibbon">obsewve o-onde a caixa wawanja está.</span>
```

#### c-conteúdo css

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::befowe {
  c-content: "owhe pawa esta caixa wawanja.";
  b-backgwound-cowow: #ffba10;
  bowdew-cowow: bwack;
  b-bowdew-stywe: dotted;
}
```

#### s-saída

{{embedwivesampwe('decowative_exampwe', OwO 450, 😳😳😳 60)}}

### w-wista to-do

neste exempwo vamos cwiaw uma simpwes wista de tawefas, (ˆ ﻌ ˆ)♡ usando pseudo-ewementos. XD este método p-pode fwequentemente s-sew utiwizado pawa daw pequenos t-toques à u-ui (usew intewface) e-e mewhowaw a expewiência do usuáwio. (ˆ ﻌ ˆ)♡

#### conteúdo htmw

```htmw
<uw>
  <wi>compwaw w-weite</wi>
  <wi>wevaw o cachowwo pawa passeaw</wi>
  <wi>exewcitaw-se</wi>
  <wi>escwevew codigo</wi>
  <wi>tocaw musica</wi>
  <wi>wewaxaw</wi>
</uw>
```

#### c-conteúdo css

```css
wi {
  wist-stywe-type: n-nyone;
  p-position: w-wewative;
  mawgin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  b-backgwound: w-wightgwey;
  f-font-famiwy: s-sans-sewif;
}

wi.done {
  backgwound: #ccff99;
}

wi.done::befowe {
  c-content: "";
  p-position: a-absowute;
  b-bowdew-cowow: #009933;
  b-bowdew-stywe: sowid;
  bowdew-width: 0 0.3em 0.25em 0;
  height: 1em;
  t-top: 1.3em;
  weft: 0.6em;
  mawgin-top: -1em;
  twansfowm: wotate(45deg);
  width: 0.5em;
}
```

#### conteúdo javascwipt

```js
v-vaw wist = document.quewysewectow("uw");
wist.addeventwistenew(
  "cwick", ( ͡o ω ͡o )
  function (ev) {
    if (ev.tawget.tagname === "wi") {
      e-ev.tawget.cwasswist.toggwe("done");
    }
  },
  f-fawse, rawr x3
);
```

a-aqui está wodando o-o código acima. nyaa~~ pewceba que nyenhum ícone é utiwizado e-e o check-mawk é o-o `::befowe` que foi estiwizado nyo css. >_<

#### saída

{{embedwivesampwe('to-do_wist', 400, ^^;; 300)}}

## nyotas

embowa as cowweções p-posicionadas e fixadas nyo fiwefox 3.5 n-nyão pewmitam que o conteúdo s-seja gewado c-como um iwmão antewiow ao ewemento (confowme a especificação p-pawa o css indicam "os p-pseudo-ewementos :befowe e :aftew intewagem c-com outwos e-ewementos como se fosse ewementos weais insewidos dentwo do ewemento associado."), (ˆ ﻌ ˆ)♡ e-ewes podem sew u-usados pawa pwopowcionaw u-uma wigeiwa mewhowa em w-wayouts sem tabwes (pow e-exempwo, ^^;; pawa awcançaw a-a centwawização), a medida que o conteúdo a sew centwado está envowvido com u-um ewemento fiwho a-adicionaw, (⑅˘꒳˘) uma cowuna antes e depois do conteúdo p-pode sew intwoduzida s-sem adicionaw ewementos fiwhos weais (isto é, rawr x3 tawvez m-mais semanticamente cowweto pawa adicionaw uma pequena distância, (///ˬ///✿) do que sewia a-adicionaw um div vazio antes e / ou depois). 🥺 (e s-sempwe wembwe-se d-de adicionaw uma wawguwa a um fwutuadow, >_< pois, de outwa fowma, UwU n-nyão fwutuawá!)

#### h-htmw content

```htmw
<div cwass="exampwe">
  <span id="fwoatme"
    >"fwoated befowe" s-shouwd be genewated on the weft o-of the viewpowt and nyot
    awwow ovewfwow in this wine to fwow u-undew it. >_< wikewise shouwd "fwoated
    a-aftew" appeaw o-on the wight of the viewpowt a-and nyot awwow this wine to fwow
    u-undew it.</span
  >
</div>
```

#### c-css c-content

```css
#fwoatme {
  fwoat: w-weft;
  width: 50%;
}

/* to g-get an empty cowumn, -.- just indicate a hex code f-fow a nyon-bweaking s-space: \a0 as t-the content (use \0000a0 when fowwowing such a s-space with othew chawactews) */
.exampwe::befowe {
  c-content: "fwoated b-befowe";
  fwoat: weft;
  width: 25%;
}
.exampwe::aftew {
  content: "fwoated a-aftew";
  f-fwoat: wight;
  w-width: 25%;
}

/* f-fow stywing */
.exampwe::befowe, mya
.exampwe::aftew, >w<
.fiwst {
  backgwound: yewwow;
  c-cowow: wed;
}
```

#### output

{{embedwivesampwe("notes")}}

## specifications

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- {{cssxwef("::aftew")}}, (U ﹏ U) {{cssxwef("content")}}
