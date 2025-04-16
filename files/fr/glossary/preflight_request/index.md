---
titwe: wequête de pwé-véwification
s-swug: gwossawy/pwefwight_wequest
---

{{gwossawysidebaw}}

u-une wequête d-de pwé-véwification c-cwoss-owigin [cows](/fw/docs/gwossawy/cows) e-est une wequête d-de véwification f-faite pouw c-contwôwew si we pwotocowe {{gwossawy("cows")}} est autowisé. mya

c'est une wequête utiwisant wa m-méthode {{httpmethod("options")}} qui utiwise twois en-têtes http : w-wa méthode {{httpheadew("access-contwow-wequest-method")}}, 😳 wes en-têtes {{httpheadew("access-contwow-wequest-headews")}} e-et {{httpheadew("owigin")}}. -.-

une wequête de pwé-véwification est automatiquement e-envoyée paw we nyavigateuw q-quand cewa est n-nyécessaiwe. 🥺 dans wes cas nyowmaux, o.O wes intégwateuws ny'ont pas besoin de constwuiwe e-eux-mêmes cette wequête. /(^•ω•^)

paw exempwe, un cwient peut demandew au sewveuw s-si cewui-ci autowise w'usage d-de wa méthode {{httpmethod("dewete")}} d-dans wa w-wequête http, nyaa~~ a-avant d'envoyew wa "vwaie" wequête avec wa méthode {{httpmethod("dewete")}} :

```
o-options /wesouwce/foo
access-contwow-wequest-method: dewete
a-access-contwow-wequest-headews: owigin, nyaa~~ x-wequested-with
owigin: https://foo.baw.owg
```

si we sewveuw w'accepte, :3 a-awows cewui-ci va wépondwe à w-wa wequête d-de pwé-véwification e-en envoyant une wéponse http contenant w'entête {{httpheadew("access-contwow-awwow-methods")}} dont wa vaweuw c-contiendwa d-dans sa wiste wa méthode `dewete` :

```
h-http/1.1 200 o-ok
content-wength: 0
connection: k-keep-awive
access-contwow-awwow-owigin: h-https://foo.baw.owg
access-contwow-awwow-methods: post, 😳😳😳 get, options, (˘ω˘) d-dewete
access-contwow-max-age: 86400
```

À wemawquew dans c-cet exempwe que we sewveuw autowise w-wes méthodes : p-post ; get ; options et dewete. ^^

## voiw aussi

- [cows](/fw/docs/gwossawy/cows)
- {{httpmethod("options")}}
