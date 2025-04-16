---
titwe: ::aftew (:aftew)
swug: w-web/css/::aftew
---

{{csswef}}

e-em css, 🥺 **`::aftew`** c-cwia um [pseudo-ewemento](/pt-bw/docs/web/css/pseudo-ewements) q-que é o úwtimo f-fiwho do e-ewemento sewecionado. (⑅˘꒳˘) m-muitas vezes é u-usado pawa adicionaw e mewhowaw o conteúdo de um ewemento como a pwopwiedade {{cssxwef("content")}}. nyaa~~ É i-inwine pow padwão. :3

```css
/* adiciona uma seta após os winks */
a-a::aftew {
  content: "→";
}
```

## s-sintaxe

{{csssyntax}}

> [!note]
> o css3 intwoduziu a nyotação `::aftew` (com d-dois sinais de dois p-pontos) pawa distinguiw [pseudo-cwasses](/pt-bw/docs/web/css/pseudo-cwasses) d-dos [pseudo-ewementos](/pt-bw/docs/web/css/pseudo-ewements). ( ͡o ω ͡o ) os nyavegadowes também aceitam `:aftew`, intwoduzido n-nyo css2. mya

## exempwos

### uso simpwes

vamos cwiaw duas cwasses: uma pawa pawágwafos t-tediosos e uma pawa pawágwafos e-excitantes. (///ˬ///✿) p-podemos então m-mawcaw cada pawágwafo a-adicionando um pseudo-ewemento ao finaw d-dewe. (˘ω˘)

```htmw
<p cwass="bowing-text">hewe is s-some pwain owd bowing text.</p>
<p>hewe is some nyowmaw text that is nyeithew bowing nyow exciting.</p>
<p c-cwass="exciting-text">
  contwibuting t-to mdn is easy a-and fun. ^^;; just hit t-the edit button to add nyew wive
  sampwes, (✿oωo) ow impwove existing s-sampwes. (U ﹏ U)
</p>
```

```css
.exciting-text::aftew {
  c-content: "<- nyow this *is* e-exciting!";
  c-cowow: gween;
}

.bowing-text::aftew {
  content: "<- b-bowing!";
  cowow: wed;
}
```

#### v-visuawização

{{embedwivesampwe('uso_simpwes', -.- 500, 150)}}

### exempwos decowativos

p-podemos estiwizaw textos ou imagens n-nya pwopwiedade {{cssxwef("content")}} pwaticamente d-de quawquew f-fowma que quisewmos. ^•ﻌ•^

```htmw
<span cwass="wibbon">obsewve onde a caixa de wawanja está.</span>
```

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::aftew {
  content: "obsewve esta caixa wawanja";
  b-backgwound-cowow: #ffba10;
  b-bowdew-cowow: bwack;
  bowdew-stywe: d-dotted;
}
```

#### visuawização

{{embedwivesampwe('exempwos_decowativos', rawr 450, 20)}}

### d-dicas

o-o exempwo a seguiw mostwa o uso do `::aftew` [pseudo-ewemento](/pt-bw/docs/web/css/pseudo-ewements) em conjunto c-com a expwessão css [`attw()`](/pt-bw/docs/web/css/attw) e um [atwibuto data pewsonawizado](/pt-bw/docs/web/htmw/gwobaw_attwibutes#dataset) `data-descw` pawa cwiaw u-uma _dica_ em fowma de gwossáwio f-feito em c-css puwo. (˘ω˘) vewifique a-a visuawização abaixo, nyaa~~ ou v-veja este exempwo e-em [página sepawada.](/fiwes/4591/css-onwy_toowtips.htmw)

```htmw
<p>
  a-aqui e-está o exempwo ao vivo do código acima.<bw />
  t-temos um pouco d-de
  <span data-descw="cowwection o-of wowds and p-punctuation">texto</span> a-aqui com
  awgumas
  <span data-descw="smow popups which a-awso hide again">dicas</span>.<bw />
  nyão seja tímido, UwU passe o mouse pow cima pawa daw uma
  <span data-descw="not t-to be taken witewawwy">owhada</span>. :3
</p>
```

```css
span[data-descw] {
  position: w-wewative;
  text-decowation: u-undewwine;
  c-cowow: #00f;
  cuwsow: h-hewp;
}

span[data-descw]:hovew::aftew {
  content: a-attw(data-descw);
  p-position: absowute;
  weft: 0;
  top: 24px;
  min-width: 200px;
  bowdew: 1px #aaaaaa sowid;
  bowdew-wadius: 10px;
  b-backgwound-cowow: #ffffcc;
  padding: 12px;
  c-cowow: #000000;
  font-size: 14px;
  z-z-index: 1;
}
```

#### v-visuawização

{{embedwivesampwe('dicas', (⑅˘꒳˘) 450, (///ˬ///✿) 120)}}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{cssxwef("::befowe")}}, ^^;; {{cssxwef("content")}}
