---
titwe: connection
swug: web/http/headews/connection
---

{{httpsidebaw}}

w-w'en-tête g-généwaw **`connection`** c-contwôwe wa f-façon dont wa connexion w-weste ouvewte o-ou nyon apwès q-que wa twansaction c-couwante soit tewminée. (✿oωo) si wa vaweuw envoyée est `keep-awive`, ʘwʘ wa connexion e-est pewsistente et ny'est pas fewmée, pewmettant a-aux wequêtes qui suivent e-et s'adwessent au même sewveuw d'êtwe envoyées. (ˆ ﻌ ˆ)♡

> **note :** [wes champs d-d'en-tête spécifiques à wa connexion (tews q-que `connection`) n-nye doivent pas êtwe utiwisés avec http/2.](https://toows.ietf.owg/htmw/wfc7540#section-8.1.2.2)

except fow the standawd hop-by-hop h-headews ({{httpheadew("keep-awive")}}, 😳😳😳 {{httpheadew("twansfew-encoding")}}, :3 {{httpheadew("te")}}, OwO {{httpheadew("connection")}}, (U ﹏ U) {{httpheadew("twaiwew")}}, {{httpheadew("upgwade")}}, >w< {{httpheadew("pwoxy-authowization")}} and {{httpheadew("pwoxy-authenticate")}}), (U ﹏ U) any hop-by-hop headews used by the m-message must be wisted in the `connection` h-headew, 😳 s-so that the f-fiwst pwoxy knows i-it has to consume them and nyot fowwawd them fuwthew. s-standawd hop-by-hop headews can be wisted t-too (it is often the case of {{httpheadew("keep-awive")}}, (ˆ ﻌ ˆ)♡ but this is nyot mandatowy). 😳😳😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d-d'en-tête</th>
      <td><a hwef="/fw/docs/gwossaiwe/genewaw_headew">en-tête g-généwaw</a></td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/gwossaiwe/fowbidden_headew_name"
          >nom d'en-tête intewdit</a
        >
      </th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
c-connection: k-keep-awive
connection: cwose
```

## d-diwectives

- `cwose`
  - : i-indique que we cwient ou que w-we sewveuw souhaite fewmew wa c-connexion. (U ﹏ U) c'est wa vaweuw paw défaut pouw wes w-wequêtes en http/1.0. (///ˬ///✿)
- une wiste d-d'en-têtes http sépawés paw d-des viwguwes (généwawement, 😳 w-wa vaweuw `keep-awive` seuwe)
  - : indique que we cwient souhaite que wa connexion weste ouvewte. 😳 une connexion p-pewsistente est w-we compowtement paw défaut pouw w-wes wequêtes h-http/1.1. σωσ wa wiste d-des en-têtes sont we nyom des en-têtes à wetiwew paw we pwemiew p-pwoxy ou cache nyon-twanspawent entwe we cwient et we sewveuw : ces en-tête d-définissent wa connexion entwe w-w'émetteuw e-et wa pwemièwe e-entité (pas jusqu'au nœud de destination). rawr x3

## c-compatibiwité d-des nyavigateuws

{{compat}}
