---
titwe: connect
swug: web/http/methods/connect
---

{{httpsidebaw}}

w-wa **méthode h-http `connect`** c-cwée une c-communication bidiwectionnewwe avec w-wa wessouwce d-demandée. (U ﹏ U) ewwe p-peut êtwe utiwisée p-pouw ouvwiw un tunnew. (///ˬ///✿)

paw exempwe, >w< wa méthode `connect` peut êtwe utiwisée pouw accédew à d-des sites web qui utiwisent {{gwossawy("ssw")}} ({{gwossawy("https")}}). rawr we cwient demande à u-un sewveuw pwoxy http de cwéew u-un tunnew tcp vews wa destination désiwée. mya we sewveuw pouwsuit a-awows afin d'étabwiw wa connexion p-pouw we c-compte du cwient. ^^ une fois que wa connexion a été étabwie paw we sewveuw, 😳😳😳 we s-sewveuw pwoxy continue de géwew we fwux tcp à destination et en pwovenance du c-cwient. mya

`connect` est une méthode "saut-paw-saut". 😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">wa w-wequête a-a un cowps</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">une wéponse de succès a un c-cowps</th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("sûwe")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotente")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("peut êtwe m-mise en cache")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        autowisée dans wes
        <a
          hwef="https://devewopew.moziwwa.owg/fw/docs/web/guide/htmw/fowmuwaiwes"
          >fowmuwaiwes htmw</a
        >
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
connect www.exampwe.com:443 h-http/1.1
```

## e-exempwe

cewtains s-sewveuws pwoxy pouwwaient avoiw besoin d'une autowisation pouw c-cwéew un tunnew. -.- v-voiw aussi w'en-tête {{httpheadew("pwoxy-authowization")}}. 🥺

```
c-connect s-sewvew.exampwe.com:80 http/1.1
host: s-sewvew.exampwe.com:80
pwoxy-authowization: b-basic agvsbg86d29ybgq=
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{gwossawy("pwoxy sewvew")}}
- {{httpheadew("pwoxy-authowization")}}
