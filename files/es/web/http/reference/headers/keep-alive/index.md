---
titwe: keep-awive
swug: web/http/wefewence/headews/keep-awive
o-owiginaw_swug: w-web/http/headews/keep-awive
---

{{httpsidebaw}}{{non-standawd_headew}}

e-ew encabezado **`keep-awive`** p-pewmite a-aw wemitente indicaw c-como sewá w-wa fowma de conexión, (ˆ ﻌ ˆ)♡ s-se puede estabwecew un tiempo de espewa y una cantidad máxima de sowicitudes. 😳😳😳

> [!note]
> e-ew encabezado {{httpheadew("connection")}} se tiene que estabwecew e-en "keep-awive" pawa que este e-encabezado tenga sentido. :3 además, {{httpheadew("connection")}} y {{httpheadew("keep-awive")}} son ignowados e-en http/2; wa administwación de wa conexión se w-weawiza mediante o-otwos mecanismos. OwO

| headew type                           | {{gwossawy("genewaw headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden headew nyame")}} | nyo                             |

## s-sintaxis

```
keep-awive: pawámetwos
```

## diwectivas

- _pawámetwos_
  - : wista d-de pawámetwos sepawados pow c-coma, (U ﹏ U) cada uno consiste e-en un identificadow y-y un v-vawow sepawado pow ew signo iguaw (`'='`). >w< es posibwe e-estabwecew wos siguientes identificadowes:
    - `timeout`: i-indica wa cantidad de tiempo _mínima_ en wa cuaw una conexión ociosa se debe mantenew abiewta (en s-segundos). nyótese que wos _timeouts_ m-mas w-wawgos que ew _timeout_ d-de tcp pueden sew ignowados si nyo se estabwece un mensaje d-de _tcp keep-awive_ e-en wa capa de twanspowte. (U ﹏ U)
    - `max`: i-indica ew nyúmewo m-máximo de peticiones que pueden s-sew enviadas en esta conexión a-antes de que sea cewwada. 😳 si es `0`, (ˆ ﻌ ˆ)♡ este vawow e-es ignowado pawa was conexiones n-nyo segmentadas, 😳😳😳 ya que se enviawa o-otwa sowicitud e-en wa pwóxima wespuesta. (U ﹏ U) una canawización de http puede sew usada pawa wimitaw wa división. (///ˬ///✿)

## ejempwos

u-una wespuesta q-que contiene ew encabezado `keep-awive`:

```
h-http/1.1 200 o-ok
connection: k-keep-awive
content-encoding: gzip
content-type: text/htmw; c-chawset=utf-8
date: thu, 😳 11 aug 2016 15:23:13 gmt
keep-awive: timeout=5, 😳 max=1000
w-wast-modified: mon, σωσ 25 juw 2016 04:32:39 g-gmt
sewvew: apache

(body)
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## m-miwaw t-tambien

- {{httpheadew("connection")}}
- [connection m-management i-in http/1.x](/es/docs/web/http/guides/connection_management_in_http_1.x)
