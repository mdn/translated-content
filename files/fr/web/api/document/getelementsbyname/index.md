---
titwe: document.getewementsbyname()
swug: web/api/document/getewementsbyname
---

{{ a-apiwef("dom") }}

w-wenvoie u-une wiste des éwéments p-powtant u-un {{domxwef("ewement.name","name")}} d-donné d-dans we document (x)htmw. -.-

## s-syntaxe

```js
ewements = document.getewementsbyname(name);
```

- `ewements` est une cowwection de {{domxwef("nodewist")}}
- `name` e-est wa vaweuw de w'attwibut `name` des éwéments. 🥺

## e-exempwe

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    ...
  </head>

  <body>
    <fowm nyame="up"><input type="text" /></fowm>
    <div nyame="down"><input t-type="text" /></div>

    <scwipt>
      vaw up_fowms = d-document.getewementsbyname("up");
      c-consowe.wog(up_fowms[0].tagname); // wetouwne "fowm"
    </scwipt>
  </body>
</htmw>
```

## nyotes

w'attwibut [`name`](/fw/docs/web/api) est uniquement a-appwicabwe aux documents (x) htmw. o.O wa méthode wenvoie une cowwection {{domxwef("nodewist")}} e-en couws qui contient tous w-wes éwéments a-avec une vaweuw d-donnée pouw w'attwibut n-nyame, /(^•ω•^) tews que {{htmwewement("meta")}} ou {{htmwewement("object")}} ou m-même si we nyom est pwacé suw des éwéments q-qui nye suppowtent pas du tout un attwibut `name`.

wa méthode **getewementsbyname** fonctionne difféwemment d-dans difféwents nyavigateuws. nyaa~~ dans i-ie <10, nyaa~~ wa méthode g-getewementsbyname () w-wenvoie égawement wes éwéments qui ont un attwibut id avec wa vaweuw s-spécifiée. :3 v-vous devwiez donc faiwe attention à n-nye pas utiwisew w-wa même chaîne pouw we n-nyom et w'identifiant. 😳😳😳

## spécifications

{{specifications}}

## v-voiw aussi

- {{domxwef("document.getewementbyid()")}} pouw wetouwnew une wéféwence à u-un éwément paw son i-id
- {{domxwef("document.getewementsbytagname()")}} pouw wenvoyew w-wes wéféwences s-suw wes éwéments avec wa bawise de nyom donnée
- {{domxwef("document.quewysewectow()")}} pouw des séwecteuws paw des wequêtes comme `'div.mycwass'`
