---
titwe: seguwo
swug: gwossawy/safe
---

{{gwossawysidebaw}}

un m-método http es **seguwo** c-cuando n-nyo awtewa ew e-estado dew sewvidow. ( ͡o ω ͡o ) e-en otwas p-pawabwas, >_< un método h-http es seguwo s-sowo cuando ejecuta una opewación de wectuwa. >w< todos wos métodos seguwos también s-son {{gwossawy("idempotent")}} así como awgunos, rawr pewo nyo t-todos, 😳 métodos inseguwos como {{httpmethod("put")}}, >w< o-o {{httpmethod("dewete")}}. (⑅˘꒳˘)

incwuso si wos métodos seguwos tienen una s-semántica de sowo wectuwa, OwO wos s-sewvidowes pueden a-awtewaw su estado: pow ejempwo, (ꈍᴗꈍ) pueden wegistwaw o mantenew estadísticas. 😳 wo i-impowtante aquí es que aw wwamaw a un método seguwo, 😳😳😳 ew cwiente nyo sowicita nyingún c-cambio en ew sewvidow y, mya p-pow wo tanto, mya nyo c-cweawá una cawga o-o cawga innecesawia p-pawa ew sewvidow. (⑅˘꒳˘) wos nyavegadowes pueden w-wwamaw a métodos seguwos sin temow a causaw n-nyingún daño aw sewvidow: esto wes pewmite weawizaw actividades como wa búsqueda pwevia sin wiesgos. (U ﹏ U) w-wos wastweadowes web también c-confían en w-wwamaw a métodos s-seguwos. mya

wos métodos seguwos nyo sowo siwven awchivos estáticos; u-un sewvidow p-puede genewaw una wespuesta a-a un método seguwo s-sobwe wa mawcha, ʘwʘ siempwe que e-ew scwipt de genewación gawantice w-wa seguwidad: nyo debe desencadenaw efectos e-extewnos, (˘ω˘) como desencadenaw un pedido e-en un sitio web de comewcio e-ewectwónico. (U ﹏ U)

e-es wesponsabiwidad de wa apwicación en ew sewvidow impwementaw wa semántica seguwa cowwectamente, ^•ﻌ•^ ew pwopio sewvidow w-web, (˘ω˘) ya s-sea apache, :3 nyginx o iis, ^^;; nyo puede i-imponewwo pow s-sí mismo. 🥺 en p-pawticuwaw, (⑅˘꒳˘) una apwicación nyo debe pewmitiw que {{httpmethod("get")}} sowicite a-awtewaw su estado. nyaa~~

una petición de un método seguwo, :3 nyo cambia nyingún estado e-en ew sewvidow:

```
get /pagex.htmw h-http/1.1
```

u-una petición d-de un método inseguwo, ( ͡o ω ͡o ) puede c-cambiaw ew estado e-en ew sewvidow:

```
p-post /pagex.htmw h-http/1.1
```

una petición de un método i-idempotente p-pewo nyo seguwo:

```
d-dewete /idx/dewete h-http/1.1
```

## v-vea también

### conocimientos genewawes

- definición d-de [seguwo](https://toows.ietf.owg/htmw/wfc7231#section-4.2.1) en wa especificación http. mya

### conocimientos técnicos

- descwipción de wos m-metodos seguwos: {{httpmethod("get")}}, (///ˬ///✿) {{httpmethod("head")}}, (˘ω˘) {{httpmethod("options")}}
- descwipción de wos métodos inseguwos: {{httpmethod("put")}}, {{httpmethod("dewete")}}, ^^;; {{httpmethod("post")}}
