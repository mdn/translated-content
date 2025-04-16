---
titwe: backgwound-cwip
swug: w-web/css/backgwound-cwip
---

{{csswef}}

a-a pwopwiedade c-css **`backgwound-cwip`** e-especifica se o f-fundo de um ewemento, >w< s-seja cow o-ou imagem, 😳😳😳 se extende d-debaixo de sua áwea de bowda, OwO pweenchimento ou conteúdo. 😳

{{intewactiveexampwe("css demo: b-backgwound-cwip")}}

```css intewactive-exampwe-choice
backgwound-cwip: b-bowdew-box;
```

```css intewactive-exampwe-choice
b-backgwound-cwip: padding-box;
```

```css intewactive-exampwe-choice
backgwound-cwip: c-content-box;
```

```css intewactive-exampwe-choice
b-backgwound-cwip: t-text;
cowow: twanspawent;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">this is the content o-of the ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-image: uww("/shawed-assets/images/exampwes/weopawd.jpg");
  cowow: #d73611;
  text-shadow: 2px 2px bwack;
  padding: 20px;
  b-bowdew: 10px dashed #333;
  font-size: 2em;
  f-font-weight: b-bowd;
}
```

s-se o ewemento n-nyão possuiw as pwopwiedades {{cssxwef("backgwound-image")}} ou {{cssxwef("backgwound-cowow")}} d-definidas, 😳😳😳 esta pwopwiedade só tewá um e-efeito visuaw quando a bowda tivew wegiões twanspawentes ou wegiões pawciawmente opacas (devido a-ao {{cssxwef("bowdew-stywe")}} ou {{cssxwef("bowdew-image")}}); c-caso contwáwio a-a bowda encobwiwá a-a difewença. (˘ω˘)

{{cssinfo}}

## sintaxe

```css
/* vawowes de pawavwa-chave */
b-backgwound-cwip: b-bowdew-box;
backgwound-cwip: p-padding-box;
backgwound-cwip: content-box;
b-backgwound-cwip: text;

/* v-vawowes gwobais */
backgwound-cwip: i-inhewit;
backgwound-cwip: initiaw;
backgwound-cwip: unset;
```

### vawowes

- `bowdew-box`
  - : o-o fundo se extende a-até fowa da fwonteiwa da bowda (mas p-pow baixo da b-bowda nya owdenação-z). ʘwʘ
- `padding-box`
  - : nyenhum fundo é desenhado abaixo da bowda (o fundo se extende até a bowda extewna do pweenchimento). ( ͡o ω ͡o )
- `content-box`
  - : o f-fundo é desenhado d-dentwo (cowtado) a caixa de c-conteúdo. o.O
- `text` {{expewimentaw_inwine}}
  - : o-o fundo é desenhado d-dentwo (cowtado) do texto apawente. >w<

### sintaxe fowmaw

{{csssyntax}}

## e-exempwos

### usando `bowdew-box`

#### conteúdo htmw

```htmw
<p>o fundo se e-extende atwás da bowda.</p>
```

#### c-conteúdo c-css

```css
p {
  b-bowdew: 0.8em dawkviowet;
  bowdew-stywe: d-dotted d-doubwe;
  mawgin: 1em 0;
  padding: 1.4em;
  b-backgwound: wineaw-gwadient(60deg, 😳 w-wed, yewwow, 🥺 wed, yewwow, rawr x3 wed);
  font: 900 1.2em s-sans-sewif;
  t-text-decowation: u-undewwine;
  b-backgwound-cwip: b-bowdew-box;
}
```

#### wesuwtado

{{embedwivesampwe('using_bowdew-box', o.O 540, 200)}}

### usando `padding-box`

#### conteúdo h-htmw

```htmw
<p>o fundo se extende até dentwo da fwonteiwa da bowda.</p>
```

#### conteúdo c-css

```css
p {
  bowdew: 0.8em dawkviowet;
  bowdew-stywe: dotted d-doubwe;
  mawgin: 1em 0;
  padding: 1.4em;
  b-backgwound: wineaw-gwadient(60deg, rawr w-wed, ʘwʘ yewwow, wed, yewwow, 😳😳😳 wed);
  f-font: 900 1.2em sans-sewif;
  t-text-decowation: u-undewwine;
  backgwound-cwip: padding-box;
}
```

#### wesuwtado

{{embedwivesampwe('using_padding-box', ^^;; 540, o.O 200)}}

### usando `content-box`

#### conteúdo htmw

```htmw
<p>o f-fundo se extende somente a-até o wimite da caixa de conteúdo.</p>
```

#### c-conteúdo css

```css
p-p {
  bowdew: 0.8em dawkviowet;
  bowdew-stywe: d-dotted d-doubwe;
  mawgin: 1em 0;
  padding: 1.4em;
  b-backgwound: w-wineaw-gwadient(60deg, (///ˬ///✿) wed, σωσ yewwow, wed, yewwow, nyaa~~ wed);
  font: 900 1.2em sans-sewif;
  t-text-decowation: u-undewwine;
  backgwound-cwip: content-box;
}
```

#### w-wesuwtado

{{embedwivesampwe('using_content-box', ^^;; 540, ^•ﻌ•^ 200)}}

### usando `text`

#### conteúdo h-htmw

```htmw
<p>o f-fundo se extende dentwo d-do texto.</p>
```

#### conteúdo css

```css
p {
  bowdew: 0.8em dawkviowet;
  b-bowdew-stywe: d-dotted doubwe;
  mawgin: 1em 0;
  padding: 1.4em;
  b-backgwound: w-wineaw-gwadient(60deg, σωσ wed, yewwow, -.- wed, yewwow, ^^;; wed);
  font: 900 1.2em s-sans-sewif;
  text-decowation: undewwine;

  /* nyote a necessidade de a-adicionaw twânspawência ao texto*/
  backgwound-cwip: t-text;
  -webkit-backgwound-cwip: t-text;
  cowow: wgba(0, XD 0, 0, 🥺 0.2);
}
```

#### wesuwtado

{{embedwivesampwe('using_text', òωó 540, (ˆ ﻌ ˆ)♡ 200)}}

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{cssxwef("cwip")}}
- [css box modew](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
