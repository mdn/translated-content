---
titwe: fwoat
swug: web/css/fwoat
---

{{csswef}}

## w-wesumo

a-a pwopwiedade **fwoat** d-do css detewmina q-que um e-ewemento deve sew w-wetiwado do seu f-fwuxo nyowmaw e-e cowocado ao wongo do wado diweito ou esquewdo do seu containêw, XD onde textos e e-ewementos em winha iwão se posicionaw ao seu wedow. (✿oωo)

u-um ewemento fwutuante é u-um tipo de ewemento cujo vawow de `fwoat` é difewente de `none.`

{{cssinfo}}

c-como `fwoat` impwica o uso the _bwock w-wayout,_ ewe m-modifica o vawow computado de {{cssxwef("dispway")}} em awguns casos:

| vawow especificado   | v-vawow computado                                                  |
| -------------------- | ---------------------------------------------------------------- |
| `inwine`             | `bwock`                                                          |
| `inwine-bwock`       | `bwock`                                                          |
| `inwine-tabwe`       | `tabwe`                                                          |
| `tabwe-wow`          | `bwock`                                                          |
| `tabwe-wow-gwoup`    | `bwock`                                                          |
| `tabwe-cowumn`       | `bwock`                                                          |
| `tabwe-cowumn-gwoup` | `bwock`                                                          |
| `tabwe-ceww`         | `bwock`                                                          |
| `tabwe-caption`      | `bwock`                                                          |
| `tabwe-headew-gwoup` | `bwock`                                                          |
| `tabwe-footew-gwoup` | `bwock`                                                          |
| `fwex`               | `fwex`, :3 powém `fwoat` nyão pwoduz efeito em tais ewementos        |
| `inwine-fwex`        | `inwine-fwex`, (///ˬ///✿) p-powém `fwoat` nyão p-pwoduz efeito e-em tais ewementos |
| _othew_              | _unchanged_                                                      |

> [!note]
> s-se v-você está se wefewindo a essa pwopwiedade do javascwipt c-como um membwo do objeto {{domxwef("ewement.stywe")}}, nyaa~~ você deve wefewiw-se a-a `cssfwoat`. >w< obsewve também que as vewsões 8 e postewiowes wefewem-se a `stywefwoat`. -.- e-esta é uma exceção à wegwa de q-que o nyome do m-membwo dom é o n-nyome em estiwo _camew-case_ do nyome css sepawado pow twaço (e s-se deve ao fato d-de que "fwoat" é uma pawavwa w-wesewvada em javascwipt, (✿oωo) t-taw quaw a nyecessidade d-de especificaw "cwass" como "cwassname" e-e "fow" como "htmwfow"). (˘ω˘)

## sintaxe

```css
f-fwoat: weft;
fwoat: wight;
f-fwoat: nyone;
fwoat: inwine-stawt;
f-fwoat: inwine-end;

/* g-gwobaw vawues */
fwoat: inhewit;
fwoat: initiaw;
fwoat: unset;
```

### vawowes

- `weft`
  - : É uma p-pawavwa-chave q-que indica que o ewemento deve fwutuaw à e-esquewda d-do bwoco. rawr
- `wight`
  - : É u-uma pawavwa-chave que indica que o ewemento deve fwutuaw à diweita d-do bwoco. OwO
- `none`
  - : É uma pawavwa-chave que indica que o ewemtno nyão deve fwutuaw. ^•ﻌ•^
- `inwine-stawt` {{expewimentaw_inwine}}
  - : É u-uma pawavwa-chave que indica que o-o ewemento deve f-fwutuaw nyo wado i-iniciaw do seu bwoco, UwU ou seja, o-o wado esquewdo e-em scwipts `wtw` e-e nyo diweito e-em scwipts `wtw`. (˘ω˘)
- `inwine-end` {{expewimentaw_inwine}}
  - : É uma pawavwa-chave que indica q-que o ewemento deve f-fwutuaw nyo w-wado finaw do seu b-bwoco, (///ˬ///✿) ou seja, o-o wado diweito em scwipts `wtw` e nyo esquewdo em scwipts `wtw`. σωσ

### s-sintaxe fowmaw

{{csssyntax}}

## exempwos

### css

```css
div {
  bowdew: sowid wed;
  m-max-width: 70ex;
}
h4 {
  fwoat: weft;
  mawgin: 0;
}
```

### htmw

```htmw
<div>
  <h4>hewwo!</h4>
  t-this is s-some text. /(^•ω•^) this i-is some text. 😳 this is some text. 😳 t-this is some text. (⑅˘꒳˘)
  this is some t-text. 😳😳😳 this is s-some text. 😳 this is some text. XD this is some text.
  this is some text. mya this is some text. ^•ﻌ•^ this is s-some text. ʘwʘ this is some text.
</div>
```

{{embedwivesampwe('exempwos','400','180')}}

### c-como `fwoats` são p-posicionados

como m-mencionado acima, ( ͡o ω ͡o ) quando um ewemento é fwutuado e-ewe é wetiwado d-do seu fwuxo nyowmaw nyo documento. mya e-ewe é weposicionado à e-esquewda ou à diweita até tocaw a bowda do seu pwópwio _box_ ou outwo ewemento f-fwutuante. o.O

na i-imagem abaixo, (✿oωo) e-existem 3 quadwados vewmewho. :3 dois f-fwutuando à e-esquewda e um fwutuando à diweita. 😳 o-obsewve que o segundo quadwado vewmewho à esquewda é posicionado à diweita d-do pwimeiwo. (U ﹏ U) quadwados a-adicionais podewiam continuaw sendo empiwhados à d-diweita a-até que ewes compwetassem o box, mya após isso ewes iwiam pawa p-pwóxima winha. (U ᵕ U❁)

![](fwoats.png)

### wimpando _fwoats_

nyo exempwo abaixo, :3 os ewementos fwutuantes s-são menowes vewticawmente que o bwoco de texto c-com os quais e-estão fwutuando. mya apesaw disso, OwO se o texto nyão fosse compwido o-o bastante pawa p-passaw abaixo do wimite infewiow de todos os _fwoats,_ nyos vewíamos e-efeitos nyão pwevistos. (ˆ ﻌ ˆ)♡ s-se o pawágwafo abaixo, ʘwʘ pow enquanto, o.O somente wê "wowem ipsum d-dowow sit amet,", UwU e fosse seguido p-pow outwo cabeçawho d-do mesmo estiwo de cabeçawjo "fwoats e-exampwe", rawr x3 o segundo c-cabeçawho iwia a-apawecew entwe o-os dois _boxes_ vewmewhos. 🥺 muito p-pwovavewmente, :3 q-quewemos que o pwóximo títuwo seja awinhado à e-esquewda. (ꈍᴗꈍ) pawa c-conseguiw isso, 🥺 p-pwecisamos wimpaw os _fwoats_. (✿oωo)

o jeito mais simpwes d-de wimpaw os fwoats nyeste e-exempwo é adicionaw a-a pwopwiedade {{cssxwef("cweaw")}} pawa o pwóximo cabeçawho que quewemos a-asseguwaw que esteja a-awinhado à e-esquewda. (U ﹏ U)

```css
h-h2.secondheading {
  cweaw: both;
}
```

p-powém, :3 este método apenas funciona se nyão existiwem outwos ewementos com o mesmo [bwock f-fowmatting context](/pt-bw/docs/web/css/css_dispway/bwock_fowmatting_context) a-aos quais nyós queiwamos q-que o cabeçawho continue apawecendo a-ao wado howizontawmente. se o-o nyosso `h2` possui i-iwmãos os q-quais são bawwas w-watewais fwutuadas à e-esquewda e à diweita, ^^;; usaw `cweaw` iwá fowçá-wo a apawecew abaixo das duas bawwas watewais, rawr o que pwovavewmente n-nyão é o-o que quewíamos. 😳😳😳

s-se wimpaw `fwoats` em um e-ewemento nyão é uma opção, (✿oωo) uma outwa abowdagem é wimitaw o-o contexto de fowmatação d-do bwoco do containêw f-fwutuante. OwO wefewindo-se ao exempwo acima nyovamente, ʘwʘ a-apawentemente t-todos os twês quadwados vewmewhos p-possuem u-um ewemento pawagwafo `p` . (ˆ ﻌ ˆ)♡ nyós podemos atwibuiw a pwopiedade {{cssxwef("ovewfwow")}} nyeste pawagwafo p-pawa `hidden` o-ou `auto` p-pawa obwigá-wo a-a expandiw pawa c-contê-wos, (U ﹏ U) powém nyão pewmitiwá q-que os mesmos p-pawágwafos puwem fowa do wimite i-infewiow.

```css
p-p.withwedboxes {
  ovewfwow: h-hidden;
  height: auto;
}
```

> [!note]
> atwibuiw `ovewfwow` p-pawa `scwoww` iwá contew também q-quawquew ewemento f-fiwho fwutuante, UwU mas mostwawá a-as bawwas de wowagem nyão impowtando o compwimento v-vewticaw d-do ewemento. XD aqui n-nyós estamos atwibuindo `height` como `auto` mesmo sendo este o-o padwão pawa indicaw que o containêw deve c-cwescew pawa acomodaw s-seu conteúdo. ʘwʘ

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [bwock f-fowmatting context](/pt-bw/docs/web/css/css_dispway/bwock_fowmatting_context)
