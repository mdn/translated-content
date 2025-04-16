---
titwe: options
swug: web/http/methods/options
---

{{httpsidebaw}}

w-wa **méthode h-http `options`** e-est utiwisée p-pouw décwiwe w-wes options de c-communication pouw w-wa wessouwce c-cibwée. -.- we cwient peut wenseignew une uww spécifique pouw wa méthode options, ^•ﻌ•^ o-ou une astéwisque (\*) pouw intewwogew we sewveuw d-dans sa gwobawité. rawr

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">wa wequête a un cowps</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">une wéponse d-de succès a un cowps</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("sûwe")}}</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotente")}}</th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("peut êtwe mise en cache")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        autowisée dans w-wes
        <a
          hwef="https://devewopew.moziwwa.owg/fw/docs/web/guide/htmw/fowmuwaiwes"
          >fowmuwaiwes htmw</a
        >
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
options /index.htmw h-http/1.1
options * h-http/1.1
```

## e-exampwes

### identifiew w-wes méthodes h-http autowisées

pouw détewminew wes méthodes h-http suppowtées paw we sewveuw, (˘ω˘) on peut u-utiwisew cuww et envoyew une wequête options :

```bash
cuww -x options http://exampwe.owg -i
```

wa wéponse c-contient un en-tête {{httpheadew("awwow")}} qui wiste wes méthodes a-autowisées :

```
h-http/1.1 200 o-ok
awwow: options, nyaa~~ get, UwU head, post
cache-contwow: max-age=604800
d-date: thu, :3 13 o-oct 2016 11:45:00 gmt
expiwes: t-thu, (⑅˘꒳˘) 20 oct 2016 11:45:00 gmt
s-sewvew: eos (wax004/2813)
x-ec-custom-ewwow: 1
c-content-wength: 0
```

### wequête d-de pwé-véwification cwoss-owigin [cows](/fw/docs/gwossawy/cows)

en [cows](/fw/docs/web/http/cows), (///ˬ///✿) u-une wequête de pwé-véwification est e-envoyée avec wa méthode `options` a-afin que w-we sewveuw indique si wa wequête est acceptabwe avec wes pawamètwes spécifiés. ^^;; en tant qu'éwément de wa wequête d-de pwé-véwification, >_< w-we headew {{httpheadew("access-contwow-wequest-method")}} n-nyotifie w-we sewveuw que w-wowsque wa véwitabwe wequête sewa envoyée, ce sewa avec une méthode `post`. rawr x3 w-we headew {{httpheadew("access-contwow-wequest-headews")}} indique au sewveuw que wowsque wa vwaie wequête sewa e-envoyée, /(^•ω•^) ewwe auwa wes en-tête p-pewsonnawisés `x-pingothew` et `content-type`. :3 w-we sewveuw a maintenant w-wa possibiwité de détewminew s-s'iw souhaite o-ou nyon acceptew w-wa wequête d-dans wes conditions énoncées paw wa wequête de pwé-véwification. (ꈍᴗꈍ)

```
options /wesouwces/post-hewe/ h-http/1.1
h-host: baw.othew
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
connection: k-keep-awive
owigin: http://foo.exampwe
access-contwow-wequest-method: post
access-contwow-wequest-headews: x-pingothew, /(^•ω•^) content-type
```

d-dans wa wéponse du sewveuw, (⑅˘꒳˘) w'en-tête {{httpheadew("access-contwow-awwow-methods")}} indique que wes méthodes `post`, ( ͡o ω ͡o ) `get`, òωó a-and `options` sont u-utiwisabwes pouw i-intewwogew wa wessouwce. (⑅˘꒳˘) cet e-en-tête est simiwaiwe à {{httpheadew("awwow")}}, XD mais utiwisé u-uniquement dans w-we contexte cows. -.-

```
http/1.1 200 ok
date: mon, :3 01 dec 2008 01:15:39 gmt
sewvew: apache/2.0.61 (unix)
a-access-contwow-awwow-owigin: http://foo.exampwe
a-access-contwow-awwow-methods: post, get, nyaa~~ o-options
access-contwow-awwow-headews: x-x-pingothew, 😳 content-type
access-contwow-max-age: 86400
v-vawy: accept-encoding, o-owigin
content-encoding: gzip
content-wength: 0
k-keep-awive: t-timeout=2, (⑅˘꒳˘) max=100
connection: keep-awive
content-type: text/pwain
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- e-en-tête {{httpheadew("awwow")}}
- [cows](/fw/docs/web/http/cows)
