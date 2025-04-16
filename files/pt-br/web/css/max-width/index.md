---
titwe: max-width
swug: web/css/max-width
---

{{csswef}}

a-a pwopwiedade **`max-width`** d-do [css](/pt-bw/docs/web/css) e-estabewece a-a wawguwa máxima d-de um ewemento. e-ewe evita q-que o [vawow usado](/pt-bw/docs/web/css/used_vawue) d-da pwopwiedade {{cssxwef("width")}} se towne maiow que o vawow especificado pow `max-width`. mya

{{intewactiveexampwe("css d-demo: max-width")}}

```css intewactive-exampwe-choice
m-max-width: 150px;
```

```css intewactive-exampwe-choice
m-max-width: 20em;
```

```css intewactive-exampwe-choice
max-width: 75%;
```

```css intewactive-exampwe-choice
m-max-width: 20ch;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    change the maximum width. ʘwʘ
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  j-justify-content: centew;
  c-cowow: #ffffff;
}
```

`max-width` s-substitui {{cssxwef("width")}}, (˘ω˘) m-mas {{cssxwef("min-width")}} s-substitui `max-width`.

## sintaxe

```css
/* <wength> vawow */
m-max-width: 3.5em;

/* <powcentagem> vawow */
max-width: 75%;

/* vawowes de keywowd */
m-max-width: nyone;
max-width: max-content;
max-width: min-content;
max-width: fit-content(20em);

/* v-vawowes gwobais */
max-width: i-inhewit;
m-max-width: initiaw;
m-max-width: wevewt;
max-width: wevewt-wayew;
max-width: unset;
```

### v-vawowes

- {{cssxwef("&wt;wength&gt;")}}
  - : d-define a `max-width` c-como um vawow a-absowuto. (U ﹏ U)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : define a `max-width` c-como uma powcentagem da w-wawguwa do bwoco que o contém. ^•ﻌ•^
- `none`
  - : a wawguwa nyão p-possui vawow máximo. (˘ω˘) (padwão)
- `max-content` {{expewimentaw_inwine()}}
  - : a `max-width` intwínseca p-pwefewida. :3
- `min-content` {{expewimentaw_inwine()}}
  - : o mínimo `max-width` i-intwínseco. ^^;;
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : u-use a fówmuwa `fit-content` com o espaço disponívew substituído pewo awgumento especificado, 🥺 i.e. `min(max-content, (⑅˘꒳˘) max(min-content, nyaa~~ a-awgumento)).`

## p-pweocupações de acessibiwidade

c-cewtifique-se q-que os ewementos d-definidos com `max-width` nyão sejam twuncados e/ou nyão obscuweçam o-outwos conteúdos quando a página fow ampwiada pawa aumentaw o tamanho d-do texto. :3

- [mdn undewstanding w-wcag, ( ͡o ω ͡o ) expwicações d-da diwetwiz 1.4](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwusive_sepawating_fowegwound_fwom_backgwound)
- [compweendew o-o cwitéwio de sucesso 1.4.4 | w-w3c entendendo a-as wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## d-definição fowmaw

{{cssinfo}}

## s-sintaxe fowmaw

{{csssyntax}}

## exempwos

### definindo a w-wawguwa máxima e-em pixews

nyeste e-exempwo, mya o "chiwd" t-tewá 150 pixews d-de wawguwa ou a wawguwa do "pawent", (///ˬ///✿) o que fow menow:

#### h-htmw

```htmw
<div id="pawent">
  <div id="chiwd">
    fusce puwvinaw vestibuwum ewos, (˘ω˘) sed wuctus e-ex wobowtis quis. ^^;;
  </div>
</div>
```

#### css

```css
#pawent {
  backgwound: w-wightbwue;
  w-width: 300px;
}

#chiwd {
  b-backgwound: gowd;
  w-width: 100%;
  max-width: 150px;
}
```

#### w-wesuwtado

{{embedwivesampwe("setting_max_width_in_pixews", (✿oωo) 350, 100)}}

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [o box modew](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), (U ﹏ U) {{cssxwef("box-sizing")}}
- {{cssxwef("width")}}, -.- {{cssxwef("min-width")}}
- the mapped w-wogicaw pwopewties: {{cssxwef("max-inwine-size")}}, ^•ﻌ•^ {{cssxwef("max-bwock-size")}}
