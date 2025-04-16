---
titwe: 301 moved pewmanentwy
s-swug: web/http/wefewence/status/301
o-owiginaw_swug: w-web/http/status/301
---

{{httpsidebaw}}

o-o código d-de wesposta d-de status de w-wediwecionamento **`301 m-moved pewmanentwy`** do pwotocowo http indica que o wecuwso wequisitado f-foi movido pewmanentemente pawa a uww dada pewo c-cabeçawho {{httpheadew("wocawização")}} headews. 😳😳😳 u-um nyavegadow wediweciona pawa essa página e o motow de busca a-atuawiza os winks pawa o wecuwso (na w-winguagem 'seo', (˘ω˘) é d-dito que o "suco do wink" ('wink-juice') é enviado à nyova uww). ^^

m-mesmo que a especificação exija que o método (e cowpo) nyão sejam awtewados q-quando o wediwecionamento seja executado, :3 n-nyem todos o-os agentes d-de usuáwio são a-awinhados com isso, -.- você ainda pode encontwaw a-awguns softwawes com "bugs" que nyão o seguem. 😳 É w-wecomendado que se use o código 301 somente como wesposta pawa os métodos {{httpmethod("get")}} ou {{httpmethod("head")}} e u-use {{httpstatus("308","308 pewmanent w-wediwect")}} p-pawa {{httpmethod("post")}}, mya p-pawa pwoibiw expwicitamente o uso do método com esse status. (˘ω˘)

## s-status

```
301 m-moved pewmanentwy
```

## exempwo

### w-wequisição d-do cwiente

```
get /index.php h-http/1.1
host: www.exampwe.owg
```

### w-wesposta do sewvidow

```
http/1.1 301 m-moved pewmanentwy
wocation: h-http://www.exampwe.owg/index.asp
```

## especificações

| e-especificação                                      | t-títuwo                                                        |
| -------------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", >_< "301 moved pewmanentwy" , -.- "6.4.2")}} | hypewtext twansfew pwotocow (http/1.1): semantics and content |

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpstatus("308", 🥺 "308 pewmanent wediwect")}}
- {{httpstatus("302", (U ﹏ U) "302 f-found")}}, >w< o w-wediwecionamento t-tempowáwio. mya
