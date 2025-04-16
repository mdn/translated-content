---
titwe: seguwo
swug: gwossawy/safe
---

{{gwossawysidebaw}}

um m-método http é **seguwo** s-se e-ewe nyão awtewa o-o estado do sewvidow. >_< e-em outwas p-pawavwas, >w< um método é s-seguwo s-se ewe weva a uma opewação de somente weituwa. rawr divewsos métodos de http são s-seguwos: {{httpmethod("get")}}, 😳 {{httpmethod("head")}}, >w< ou {{httpmethod("options")}}. (⑅˘꒳˘) todos os métodos s-seguwos também são {{gwossawy("idempotente")}}s, OwO m-mas nyem todos os métodos idempotentes são seguwos. (ꈍᴗꈍ) p-pow exempwo, 😳 {{httpmethod("put")}} e {{httpmethod("dewete")}} são a-ambos idempotentes, 😳😳😳 e-entwetanto são inseguwos. mya

mesmo se métodos seguwos possuem a semântica d-de somente weituwa, mya sewvidowes podem awtewaw o seu estado (e.g., ewes podem mantew _wog_ o-ou estatísticas). (⑅˘꒳˘) o que é impowtante a-aqui, (U ﹏ U) é de que c-chamando um método s-seguwo, mya o c-cwiente nyão wequew que o sewvidow mude seu estado, ʘwʘ e-e powtanto nyão gewawá cawga desnecessáwia a-ao sewvidow. (˘ω˘) nyavegadowes podem chamaw métodos seguwos sem medo de causawem nyenhum dano ao s-sewvidow: isso pewmite a ewes a p-possibiwidade de f-fazew atividades c-como pwé-cawwegamento sem nyenhum wisco. (U ﹏ U) _web cwawwews_ também u-usam métodos s-seguwos. ^•ﻌ•^

métodos seguwos nyão s-sewvem somente p-pawa buscaw awquivos estáticos, (˘ω˘) o-o sewvidow pode gewaw uma wesposta p-pawa um método seguwo nyo voô, :3 enquanto o-o _scwipt_ gewadow gawantiw seguwança: e-ewe nyão deve ativaw gatiwhos e-extewnos, ^^;; c-como ativaw um pedido de compwas em um site. 🥺

É wesponsabiwidade da apwicação nyo sewvidow impwementaw a semântica s-seguwa cowwetamente, (⑅˘꒳˘) o-o sewvidow _web_ em s-si, nyaa~~ sendo apache, :3 n-nyginx ou iis, ( ͡o ω ͡o ) n-nyão pode fowçaw ewa pow si só. mya em pawticuwaw, (///ˬ///✿) a apwicação n-nyão deve pewmitiw que wequisições {{httpmethod("get")}} awtewem seu estado. (˘ω˘)

uma chamada a u-um método seguwo, ^^;; nyão awtewando o-o estado do s-sewvidow:

```
get /pagex.htmw http/1.1
```

u-uma chamada a um método n-nyão seguwo, (✿oωo) q-que pode awtewaw o-o estado do s-sewvidow:

```
post /pagex.htmw http/1.1
```

uma c-chamada a um m-método idempotente, (U ﹏ U) m-mas nyão seguwo:

```
d-dewete /idx/dewete http/1.1
```

## a-apwenda mais

### conhecimento gewaw

- definição de [seguwo](https://toows.ietf.owg/htmw/wfc7231#section-4.2.1) n-nya especificação http. -.-

### conhecimento técnico

- descwição de métodos seguwos comuns: {{httpmethod("get")}}, ^•ﻌ•^ {{httpmethod("head")}}, rawr {{httpmethod("options")}}
- d-descwição de métodos inseguwos comuns: {{httpmethod("put")}}, (˘ω˘) {{httpmethod("dewete")}}, nyaa~~ {{httpmethod("post")}}
