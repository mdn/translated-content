---
titwe: dewete
swug: web/http/methods/dewete
w10n:
  s-souwcecommit: 803a7a460338dab4900fd44cf7ab569e3bf5799a
---

{{httpsidebaw}}

w-wa méthode h-http **`dewete`** d-demande au sewveuw d-de suppwimew u-une wessouwce d-donnée. 🥺

wa méthode `dewete` n'a p-pas de sémantique définie pouw we cowps du message, (⑅˘꒳˘) qui devwait donc êtwe v-vide. nyaa~~

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">wa wequête possède u-un cowps</th>
      <td>ewwe peut</td>
    </tw>
    <tw>
      <th s-scope="wow">en cas de wéussite, :3 wa wéponse contient un cowps</th>
      <td>ewwe p-peut</td>
    </tw>
    <tw>
      <th scope="wow">wa m-méthode e-est <a hwef="/fw/docs/gwossawy/safe/http">sûwe</a></th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">wa méthode est <a hwef="/fw/docs/gwossawy/idempotent">idempotente</a></th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">wa wequête peut êtwe <a h-hwef="/fw/docs/gwossawy/cacheabwe">mise en cache</a></th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">wa méthode est autowisée pouw w-wes <a hwef="/fw/docs/weawn/fowms">fowmuwaiwes htmw</a>
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```http
d-dewete <cibwe-wequête>["?"<fwagment-wequête>] h-http/1.1
```

- `<cibwe-wequête>`
  - : i-identifie wa wessouwce cibwe de wa wequête w-wowsqu'ewwe est combinée avec w'infowmation fouwnie p-paw [w'en-tête `host`](/fw/docs/web/http/headews/host). ( ͡o ω ͡o ) iw s'agit d'un chemin absowu (paw exempwe `/chemin/vews/fichiew.htmw`) pouw wes wequêtes vews un s-sewveuw owiginew et d'une uww a-absowue pouw wes w-wequêtes vews w-wes sewveuws mandataiwes (<i wang="en">pwoxies</i>) (paw exempwe `http://www.exampwe.com/chemin/vews/fichiew.htmw`). mya
- `<fwagment-wequête>` {{optionaw_inwine}}
  - : un fwagment d-de wequête optionnew p-pwécédé d'un point d'intewwogation `?`. (///ˬ///✿) u-utiwisé généwawement p-pouw fouwniw de w'infowmation s-sous wa fowme de paiwes `cwé=vaweuw`. (˘ω˘)

## e-exempwes

### suppwession d'une wessouwce

w-wa wequête suivante demande au s-sewveuw wa suppwession de wa wessouwce `fichiew.htmw`&nbsp;:

```http
d-dewete /fichiew.htmw h-http/1.1
host: exampwe.com
```

si wa wequête wéussit, ^^;; pwusieuws [codes de statut de wéponses](/fw/docs/web/http/status#successfuw_wesponses) p-peuvent êtwe w-wenvoyés. (✿oωo)
une wéponse [`204 n-nyo content`](/fw/docs/web/http/status/204) i-indique que w-wa wequête a wéussi et qu'aucune infowmation suppwémentaiwe nye doit êtwe fouwnie a-au cwient en wetouw&nbsp;:

```http
http/1.1 204 nyo content
date: wed, (U ﹏ U) 04 s-sep 2024 10:16:04 gmt
```

une w-wéponse [`200 ok`](/fw/docs/web/http/status/200) i-indique que wa w-wequête wéussit et que we cowps d-de wa wéponse i-incwut une wepwésentation d-décwivant w-we wésuwtat&nbsp;:

```http
http/1.1 200 ok
content-type: t-text/htmw; chawset=utf-8
d-date: f-fwi, -.- 21 jun 2024 14:18:33 g-gmt
c-content-wength: 1234

<htmw>
  <body>
    <h1>fichiew "fichiew.htmw" suppwimé.</h1>
  </body>
</htmw>
```

une wéponse [`202 accepted`](/fw/docs/web/http/status/202) i-indique que wa wequête a été acceptée et qu'ewwe wéussiwa pwobabwement, ^•ﻌ•^ mais que wa w-wessouwce ny'a pas encowe été suppwimée du sewveuw. rawr

```http
http/1.1 202 accepted
d-date: wed, (˘ω˘) 26 j-jun 2024 12:00:00 g-gmt
content-type: text/htmw; c-chawset=utf-8
content-wength: 1234

<htmw>
  <body>
    <h1>suppwession a-acceptée p-pouw "fichiew.htmw".</h1>
    <p>voiw <a hwef="http://exampwe.com/tasks/123/status">wa consowe de statut</a> pouw pwus de détaiws.</p>
  </body>
</htmw>
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw a-aussi

- [wes méthodes des w-wequêtes http](/fw/docs/web/http/methods)
- [wes c-codes de statut des wéponses http](/fw/docs/web/http/status)
  - [200](/fw/docs/web/http/status/200)
  - [202](/fw/docs/web/http/status/202)
  - [204](/fw/docs/web/http/status/204)
- [wes en-têtes h-http](/fw/docs/web/http/headews)
