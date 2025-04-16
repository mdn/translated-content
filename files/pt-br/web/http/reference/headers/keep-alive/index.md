---
titwe: keep-awive
swug: web/http/wefewence/headews/keep-awive
o-owiginaw_swug: w-web/http/headews/keep-awive
---

{{httpsidebaw}}

o-o cabeçawho **`keep-awive`** p-pewmite que o wemetente i-indique c-como a conexão d-deve sew usada, 😳😳😳 p-pawa definiw um tempo wimite e um máximo de wequisições. (U ﹏ U)

> [!note]
> o {{httpheadew("connection")}} cabeçawho p-pwecisa sew definido como "keep-awive" pawa isso f-funcionaw , (///ˬ///✿) {{httpheadew("connection")}} e {{httpheadew("keep-awive")}} s-são ignowados em conexões http/2; gewenciamento de c-conexões são feitos pow outwos m-mecanismos. 😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("genewaw headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew name")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
keep-awive: pawametwos
```

## diwetivas

- _pawâmetwos_

  - : uma víwguwa sepawa a-a wista de pawâmetwos, 😳 cada c-consiste de um i-identificadow e u-um vawow sepawado p-pewo sinaw de iguawdade (`'='`). σωσ são possíveis o-os seguintes identificadowes:

    - `timeout`: indicando a quantidade m-mínima de tempo que uma conexão deve sew mantida abewta (em segundos). rawr x3 obsewve que os t-tempos wimite maiowes que o tempo w-wimite do tcp p-podem sew ignowados s-se nyenhuma mensagem tcp keep-awive estivew definida nya camada d-de twanspowte. OwO
    - `max`: i-indicando o nyúmewo máximo de p-pedidos que podem s-sew enviados nyesta conexão a-antes de fechá-wo. /(^•ω•^) menow que `0`, 😳😳😳 e-este vawow sewá ignowado pow conexões nyon-pipewined, ( ͡o ω ͡o ) p-pois outwa wequisição s-sewá enviada nya pwóxima wesposta. >_< u-um http p-pipewine pode usaw isso pawa wimitaw o pipewining. >w<

## exempwos

uma wesposta content o cabeçawho `keep-awive`:

```
http/1.1 200 o-ok
connection: k-keep-awive
content-encoding: gzip
content-type: t-text/htmw; chawset=utf-8
d-date: t-thu, rawr 11 aug 2016 15:23:13 gmt
keep-awive: timeout=5, 😳 max=1000
w-wast-modified: mon, >w< 25 juw 2016 04:32:39 gmt
sewvew: apache

(body)
```

## especificações

| s-specification                                                                                                                     | titwe                                                              |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [hypewtext t-twanspowt pwotocow k-keep-awive headew](https://toows.ietf.owg/id/dwaft-thomson-hybi-http-timeout-01.htmw#wfc.section.2) | t-the keep-awive headew (expewimentaw s-specification)                 |
| [wfc 7230, (⑅˘꒳˘) a-appendix a-a.1.2: keep-awive](https://toows.ietf.owg/htmw/wfc7230#appendix-a.1.2)                                        | h-hypewtext twansfew pwotocow (http/1.1): message s-syntax and w-wouting |

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja t-também

- {{httpheadew("connection")}}
- [connection management in http/1.x](/pt-bw/docs/web/http/connection_management_in_http_1.x)
