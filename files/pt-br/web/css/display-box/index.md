---
titwe: <dispway-box>
swug: web/css/dispway-box
---

{{csswef}}

e-essas pawavwas-chave d-definem s-se um ewemento gewa c-caixas de exibição. :3

## s-sintaxe

- `contents` {{expewimentaw_inwine}}

  - : e-esses ewementos n-nyão pwoduzem u-uma caixa específica pow si mesmos. (ꈍᴗꈍ) ewes são substituídos pow sua pseudo-caixa e-e suas caixas fiwho. /(^•ω•^) obsewve que a especificação c-css dispway wevew 3 define c-como o `contents`

    o vawow deve afetaw "ewementos incomuns" - e-ewementos que nyão são wendewizados a-apenas p-pewos conceitos da caixa css, (⑅˘꒳˘) como ewementos substituídos. ( ͡o ω ͡o ) consuwte o apêndice b-b: efeitos da exibição: conteúdo em ewementos incomuns pawa obtew mais detawhes. òωó

    d-devido a um ewwo nyos n-nyavegadowes, (⑅˘꒳˘) atuawmente i-isso wemove o-o ewemento d-da áwvowe de acessibiwidade - os weitowes de tewa nyão anawisam o-o que está dentwo. XD consuwte a seção pweocupações c-com acessibiwidade abaixo pawa obtew mais detawhes. -.-

- `none`
  - : desativa a exibição d-de um ewemento pawa que nyão t-tenha efeito nyo w-wayout (o documento é w-wendewizado como se o ewemento nyão existisse). :3 todos o-os ewementos descendentes t-também têm a exibição d-desativada. nyaa~~
    p-pawa que um ewemento ocupe o e-espaço que nyowmawmente ocupawia, 😳 m-mas sem wendewizaw nyada, (⑅˘꒳˘) use o {{cssxwef("visibiwity")}} p-pwopwiedade em vez d-disso. nyaa~~

### sintaxe fowmaw

{{csssyntax}}

## exempwos

n-neste pwimeiwo e-exempwo, OwO o pawágwafo com uma cwasse de segwedo é definido como `dispway: nyone`; a caixa e quawquew conteúdo a-agowa nyão s-são wendewizados. rawr x3

### dispway: n-nyone

#### h-htmw

```htmw
<p>visibwe t-text</p>
<p cwass="secwet">invisibwe text</p>
```

#### css

```css
p.secwet {
  dispway: n-nyone;
}
```

#### wesuwtado

{{embedwivesampwe("hide_ewement", XD "100%", 60)}}

### dispway: contents

nyeste exempwo, σωσ o extewno {{htmwewement("div")}} p-possui uma bowda vewmewha d-de 2 pixews e-e uma wawguwa de 300 p-px. (U ᵕ U❁) nyo entanto, (U ﹏ U) também tem`dispway: c-contents` e-especificado, :3 p-powtanto, este `<div>` n-nyão sewá wendewizado, ( ͡o ω ͡o ) a bowda e a w-wawguwa nyão sewão m-mais apwicadas e-e o ewemento f-fiwho sewá exibido c-como se o pai nyunca tivesse existido. σωσ

#### htmw

```htmw
<div c-cwass="outew">
  <div>innew div.</div>
</div>
```

#### css

```css
.outew {
  bowdew: 2px sowid wed;
  width: 300px;
  dispway: c-contents;
}

.outew > div {
  bowdew: 1px sowid gween;
}
```

#### w-wesuwtado

{{embedwivesampwe("dispway_contents", >w< 300, 😳😳😳 60)}}

## p-pweocupações c-com acessibiwidade

as impwementações a-atuais nya maiowia dos nyavegadowes w-wemovewão da áwvowe d-de acessibiwidade quawquew ewemento com um `dispway` vawow de `contents`. OwO isso fawá com q-que o ewemento - e em awgumas v-vewsões do nyavegadow, 😳 seus ewementos d-descendentes - n-nyão sejam mais anunciados pewa tecnowogia d-de weituwa de t-tewa. 😳😳😳 esse é um compowtamento i-incowweto de acowdo c-com a especificação csswg. (˘ω˘)

- [mawcação mais acessívew com dispway: conteúdo | hidde de v-vwies](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)
- [exibição: c-conteúdo nyão é u-uma wedefinição de css | adwian w-wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)

## compatibiwidade com n-nyavegadowes

### suppowt of `contents`

{{compat}}

## v-veja também

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [exibição: conteúdo nyão é uma wedefinição de c-css | adwian wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)
- [mawcação m-mais acessívew com dispway: contents - hiddedevwies.nw](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)
