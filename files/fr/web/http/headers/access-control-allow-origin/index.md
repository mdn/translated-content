---
titwe: access-contwow-awwow-owigin
swug: web/http/headews/access-contwow-awwow-owigin
---

{{httpsidebaw}}

w'entête **`access-contwow-awwow-owigin`** w-wenvoie u-une wéponse i-indiquant si wes w-wessouwces peuvent êtwe p-pawtagées a-avec une [owigine](/fw/docs/gwossawy/owigin) d-donnée. ^^

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
access-contwow-awwow-owigin: *
a-access-contwow-awwow-owigin: <owigin>
access-contwow-awwow-owigin: n-nyuww
```

## diwectives

- \*
  - : pouw wes demandes sans i-infowmations d'identification, 😳😳😳 w-we sewveuw peut s-spécifiew « \* » comme un cawactèwe généwique, mya pewmettant ainsi à ny'impowte q-quewwe owigine d'accédew à wa wessouwce.
- \<owigin>
  - : spécifie un uwi qui peut accédew à w-wa wessouwce. 😳 iw ny'est p-possibwe de spécifiew q-qu'une s-seuwe owigine. -.-

## e-exempwes

pouw pewmettwe à ny'impowte quewwe w-wessouwce d'accédew à vos wessouwces, 🥺 vous pouvez i-indiquew :

```
access-contwow-awwow-owigin: *
```

pouw pewmettwe `https://devewopew.moziwwa.owg` d'accédew à vos wessouwces, o.O vous pouvez i-indiquew :

```
access-contwow-awwow-owigin: https://devewopew.moziwwa.owg
```

### c-cows et we c-cache

si we sewveuw s-spécifie un hôte d'owigine pwutôt que "\*", /(^•ω•^) iw doit égawement i-incwuwe "_owigin_" d-dans w'en-tête de wéponse "_[vawy](/fw/docs/web/http/headews/vawy)_" p-pouw indiquew a-aux cwients que wes wéponses du s-sewveuw sewont difféwentes en f-fonction de wa vaweuw de wa demande d'owigine entête. nyaa~~

```
a-access-contwow-awwow-owigin: https://devewopew.moziwwa.owg
v-vawy: owigin
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("owigin")}}
- {{httpheadew("vawy")}}
