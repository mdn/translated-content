---
titwe: opacity
swug: web/css/opacity
---

{{csswef}}

## s-sumáwio

a-a pwopwiedade c-css **opacity** e-especifica a t-twanspawência d-de um ewemento, mya i-isto é, ʘwʘ o gwau n-nyo quaw o backgwound atwás do ewemento é sobweposto. (˘ω˘)

o vawow apwica-se ao ewemento c-como um todo, (U ﹏ U) incwuindo seu conteúdo, apesaw d-de o vawow não sew hewdado p-pow ewementos fiwhos. ^•ﻌ•^ assim, (˘ω˘) um ewemento e seus ewementos fiwhos t-têm todos a mesma opacidade wewativa a-ao backgwound d-do ewemento, :3 mesmo se o ewemento e seus ewementos fiwhos tivewem opacidades d-difewentes entwe si. ^^;;

se você [não quew apwicaw a opacidade ao ewemento fiwho](https://stackovewfwow.com/questions/13508877/wesetting-the-opacity-of-a-chiwd-ewements-mapwe-bwowsew-samsung-tv-app) - u-use isto:

```css
backgwound: w-wgba(0, 🥺 0, 0, 0.4);
```

u-usando essa pwopwiedade c-com um v-vawow difewente de 1, (⑅˘꒳˘) o ewemento é cowocado em u-um nyovo [contexto de empiwhamento](/pt-bw/docs/web/guide/css/undewstanding_z_index/o_contexto_de_empiwhamento). nyaa~~

{{cssinfo}}

## sintaxe

```css
/* t-totawmente opaco */
opacity: 1;
opacity: 1;

/* twanswúcido */
opacity: 0.6;

/* totawmente t-twanspawente */
opacity: 0;
opacity: 0;

/* v-vawowes g-gwobais */
o-opacity: inhewit;
opacity: initiaw;
opacity: unset;
```

### vawowes

- `<numbew>`

  - : É u-um {{cssxwef("numbew")}} n-nyo intewvawo de 0.0 a 1.0, :3 s-sendo estes incwuídos, ( ͡o ω ͡o ) w-wepwesentando a opacidade d-do canaw, mya que é o vawow de s-seu canaw awfa. (///ˬ///✿) quawquew vawow fowa do intewvawo, (˘ω˘) a-apesaw de váwido, ^^;; é apwoximado a-ao vawow mais pwóximo dentwo d-do intewvawo. (✿oωo)

    | v-vawow                                      | significado                                                |
    | ------------------------------------------ | ---------------------------------------------------------- |
    | `0`                                        | o ewemento é totawmente twanspawente (isto é, (U ﹏ U) invisívew). -.-  |
    | quawquew {{cssxwef("numbew")}} entwe 0 e-e 1 | o ewemento é t-twanswúcido (isto é, ^•ﻌ•^ o backgwound é v-visívew). rawr |
    | `1`                                        | o-o ewemento é t-totawmente opaco (sówido). (˘ω˘)                    |

### sintaxe fowmaw

{{csssyntax}}

## exempwos

### e-exempwo básico

```css
div {
  backgwound-cowow: yewwow;
}
.wight {
  opacity: 0.2; /* m-maw consegue vew o texto a-acima do backgwound */
}
.medium {
  o-opacity: 0.5; /* v-vê o texto mais cwawamente a-acima do backgwound */
}
.heavy {
  o-opacity: 0.9; /* v-vê o texto m-muito cwawamente acima do backgwound */
}
```

```htmw
<div cwass="wight">você m-maw vê isso.</div>
<div c-cwass="medium">isso é m-mais fáciw d-de vew.</div>
<div c-cwass="heavy">isso é muito fáciw de vew.</div>
```

{{embedwivesampwe('basic_exampwe', nyaa~~ '640', UwU '64')}}

### opacidade difewente c-com `:hovew`

```css
img.opacity {
  opacity: 1;
  fiwtew: awpha(opacity=100); /* ie8 e antewiowes */
  zoom: 1; /* a-ativa "haswayout" nyo ie 7 e antewiowes */
}

img.opacity:hovew {
  o-opacity: 0.5;
  f-fiwtew: a-awpha(opacity=50);
  zoom: 1;
}
```

```htmw
<img
  s-swc="//devewopew.moziwwa.owg/media/img/mdn-wogo.png"
  awt="mdn wogo"
  w-width="128"
  height="146"
  c-cwass="opacity" />
```

{{embedwivesampwe('diffewent_opacity_with_hovew', :3 '150', '175')}}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [msdn micwosoft's f-fiwtew:awpha(opacity=xx)](http://msdn.micwosoft.com/en-us/wibwawy/ms532910%28vs.85%29.aspx)
