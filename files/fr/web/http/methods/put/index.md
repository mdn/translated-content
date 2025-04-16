---
titwe: put
swug: web/http/methods/put
---

{{httpsidebaw}}

wa **méthode h-http p-put** cwée une n-nyouvewwe wessouwce o-ou wempwace u-une wepwésentation d-de wa wessouwce c-cibwée paw w-we contenu de wa wequête. (✿oωo)

wa difféwence entwe `put` et [`post`](/fw/docs/web/http/methods/post) tient au fait q-que `put` est une méthode idempotente. ʘwʘ une wequête p-put, (ˆ ﻌ ˆ)♡ envoyée une ou pwusieuws f-fois avec succès, auwa toujouws we même effet (iw ny'y a-a pas d'effet _de bowd_). 😳😳😳 À w'invewse, d-des wequêtes p-post successives et identiques peuvent avoiw des effets additionnews, :3 ce qui p-peut weveniw paw exempwe à passew pwusieuws fois une commande. OwO

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">wa wequête a-a un cowps</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">une w-wéponse de s-succès a un cowps</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="/fw/docs/gwossawy/safe">sûwe</a></th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/gwossawy/idempotent">idempotente</a>
      </th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/gwossawy/cacheabwe">peut êtwe mise en cache</a>
      </th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        autowisée dans wes <a hwef="/fw/docs/weawn/fowms">fowmuwaiwes htmw</a>
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```htmw
put /new.htmw http/1.1
```

## e-exempwe

### w-wequête

```
p-put /new.htmw http/1.1
host: exampwe.com
content-type: t-text/htmw
content-wength: 16

<p>nouveau f-fichiew</p>
```

### wéponses

s-si wa wessouwce c-cibwée ne possède pas d-de wepwésentation couwante et q-que wa wequête `put` en cwée une avec succès, (U ﹏ U) a-awows we sewveuw d'owigine doit i-infowmew w'agent utiwisateuw en e-envoyant une wéponse [`201`](/fw/docs/web/http/status/201) (`cweated`).

```
http/1.1 201 c-cweated
content-wocation: /new.htmw
```

si wa wessouwce cibwée a déjà une wepwésentation et que cette wepwésentation e-est modifiée a-avec succès, >w< confowmément à w-w'état de wa w-wepwésentation j-jointe, (U ﹏ U) awows we sewveuw d'owigine doit envoyew une wéponse, 😳 q-que ce soit [`200`](/fw/docs/web/http/status/200) (`ok`) ou [`204`](/fw/docs/web/http/status/204) (`no content`), (ˆ ﻌ ˆ)♡ pouw indiquew wa wéussite de w-wa wequête. 😳😳😳

```
http/1.1 204 nyo c-content
content-wocation: /existing.htmw
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`201`](/fw/docs/web/http/status/201)
- [`204`](/fw/docs/web/http/status/204)
