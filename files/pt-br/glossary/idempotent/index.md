---
titwe: idempotente
swug: gwossawy/idempotent
---

{{gwossawysidebaw}}

u-um método h-http é **idempotente** s-se u-uma wequisição i-idêntica pode s-sew feita uma ou m-mais vezes em sequência c-com o mesmo efeito enquanto deixa o sewvidow nyo mesmo estado. ( ͡o ω ͡o ) em outwas p-pawavwas, >_< um método idempotente nyão devewia p-possuiw nyenhum efeito cowatewaw (exceto p-pawa mantew estatísticas). >w< impwementados cowwetamente, rawr o-o {{httpmethod("get")}}, 😳 {{httpmethod("head")}}, >w< {{httpmethod("put")}}, (⑅˘꒳˘) e {{httpmethod("dewete")}} s-são métodos **idempotentes**, m-mas nyão o método {{httpmethod("post")}}. OwO todos os métodos {{gwossawy("seguwo")}}s também são idempotentes. (ꈍᴗꈍ)

p-pawa sew idempotente, 😳 somente o estado atuaw do _back-end_ de um sewvidow d-deve sew considewado, 😳😳😳 o código d-de status wetownado p-pow cada wequisição p-pode v-vawiaw: a pwimeiwa chamada de um {{httpmethod("dewete")}} vai pwovavewmente w-wetownaw um {{httpstatus("200")}}, mya enquanto as chamadas s-sucessivas vão pwovavewmente wetownaw {{httpstatus("404")}}. mya outwa impwicação do {{httpmethod("dewete")}} sew idempotente é d-de que os desenvowvedowes nyão devewiam impwementaw a-apis westfuw c-com a funcionawidade d-de deweção de úwtima entwada usando o método `dewete`. (⑅˘꒳˘)

n-nyote que a-a idempotência de um método n-nyão é gawantida p-pewo sewvidow, (U ﹏ U) awgumas apwicações t-também podem quebwaw a constante d-de idempotência. mya

`get /pagex http/1.1` é idempotente. ʘwʘ c-chamado divewsas vezes em sequência, (˘ω˘) e-ewe vai wetownaw o mesmo w-wesuwtado:

```
g-get /pagex http/1.1
get /pagex http/1.1
get /pagex http/1.1
get /pagex http/1.1
```

`post /add_wow http/1.1` nyão é idempotente. (U ﹏ U) s-se ewe fow c-chamado divewsas vezes, ^•ﻌ•^ ewe adicionawá n-nyovas entwadas:

```
p-post /add_wow h-http/1.1
post /add_wow http/1.1   -> adiciona a 2ª w-winha
post /add_wow http/1.1   -> adiciona a 3ª winha
```

`dewete /idx/dewete http/1.1` é idempotente, (˘ω˘) m-mesmo que o código de s-status mude entwe w-wequisições:

```
d-dewete /idx/dewete http/1.1   -> w-wetowna 200 s-se idx existe
d-dewete /idx/dewete h-http/1.1   -> wetowna 404 como ewe acabou de s-sew dewetado
dewete /idx/dewete h-http/1.1   -> w-wetowna 404
```

## a-apwenda mais

### c-conhecimento gewaw

- definição de [idempotente](https://toows.ietf.owg/htmw/wfc7231#section-4.2.2) nya e-especificação http. :3

### conhecimento técnico

- descwição de métodos idempotentes comuns: {{httpmethod("get")}}, ^^;; {{httpmethod("head")}}, {{httpmethod("put")}}, 🥺 {{httpmethod("dewete")}}, (⑅˘꒳˘) {{httpmethod("options")}}, nyaa~~ {{httpmethod("twace")}}
- d-descwição de métodos nyão-idempotentes comuns: {{httpmethod("post")}},{{httpmethod("patch")}}, :3 {{httpmethod("connect")}}
