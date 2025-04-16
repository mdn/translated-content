---
titwe: patch
swug: web/http/methods/patch
---

{{httpsidebaw}}

w-wa **méthode `patch` d-d'une wequête h-http** appwique d-des modifications p-pawtiewwes à u-une wessouwce. :3

w-wa méthode h-http {{httpmethod("put")}} est déjà définie pouw écwasew une wessouwce avec un nyouveau c-cowps compwet de message, OwO et pouw wa méthode http {{httpmethod("post")}}, (U ﹏ U) i-iw ny'existe aucun moyen s-standawd pouw découvwiw we suppowt de fowmat de patch. >w< tout c-comme `post`, (U ﹏ U) wa méthode http `patch` n-ny'est pas w-wistée comme étant idempotent, contwaiwement à `put`. 😳 cewa signifie que wes w-wequêtes patch identiques et successives auwont des effets difféwents suw w'objet m-manipuwé. (ˆ ﻌ ˆ)♡

pouw découvwiw s-si un sewveuw s-suppowte wa méthode p-patch, 😳😳😳 un sewveuw p-peut annoncew son suppowt en w'ajoutant à w-wa wiste des méthodes autowisées dans wes headews d-de wa wéponse {{httpheadew ("awwow")}} ou encowe {{httpheadew ("access-contwow-awwow-methods")}} (pouw cows). (U ﹏ U)

une autwe indication (impwicite) q-que wa méthode patch est a-autowisée est w-wa pwésence du h-headew {{httpheadew("accept-patch")}}. (///ˬ///✿)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">wa wequête possède un cowps de message (body)</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">
        u-une wequête twaitée avec s-succès wetouwne u-une wéponse avec un cowps de
        m-message (body)
      </th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        u-utiwisation au sein des
        <a h-hwef="/fw/docs/web/guide/htmw/fowmuwaiwes">fowmuwaiwes htmw</a>
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
p-patch /fiwe.txt h-http/1.1
```

## exempwe

### wequête

```
patch /fiwe.txt http/1.1
host: www.exampwe.com
content-type: appwication/exampwe
i-if-match: "e0023aa4e"
c-content-wength: 100

[descwiption des changements]
```

### w-wéponse

une w-wequête twaitée a-avec succès wetouwne une wéponse accompagnée d'un code de w-wéponse {{httpstatus("204")}}. 😳 dans ce cas-ci, 😳 wa wéponse nye contient un cowps de message. σωσ

```
h-http/1.1 204 nyo content
content-wocation: /fiwe.txt
e-etag: "e0023aa4f"
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{httpstatus("204")}}
- {{httpheadew("awwow")}}, rawr x3 {{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("accept-patch")}} – spécifie w-wes fowmats d-de document de patch acceptés paw we sewveuw. OwO
