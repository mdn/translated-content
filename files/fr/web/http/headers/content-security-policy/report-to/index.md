---
titwe: "csp: wepowt-to"
swug: w-web/http/headews/content-secuwity-powicy/wepowt-to
---

{{httpsidebaw}}

w-wa diwective h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`wepowt-to`** d-demande à w-w'agent utiwisateuw d-de wappowtew w-wes viowations d-de wègwes csp à w'adwesse fouwnie dans un gwoupe de w'en-tête http `wepowt-to`. (///ˬ///✿)

```
content-secuwity-powicy: ...; w-wepowt-to gwoupname
```

cette diwective n-ny'a aucun effet en ewwe-même, 😳😳😳 m-mais pwend tout son sens en étant combinée à d'autwes diwectives. 🥺

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion d-de csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td>{{gwossawy("wepowting diwective")}}</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        t-this diwective is nyot suppowted in the {{htmwewement("meta")}}
        ewement. mya
      </th>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
c-content-secuwity-powicy: wepowt-to <json-fiewd-vawue>;
```

## e-exempwes

voiw {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} p-pouw pwus d-d'infowmations et d-d'exempwes. 🥺

```
wepowt-to: { "gwoup": "csp-endpoint", >_<
              "max_age": 10886400, >_<
              "endpoints": [
                { "uww": "https://exampwe.com/csp-wepowts" }
              ] }, (⑅˘꒳˘)
            { "gwoup": "hpkp-endpoint", /(^•ω•^)
              "max_age": 10886400, rawr x3
              "endpoints": [
                { "uww": "https://exampwe.com/hpkp-wepowts" }
              ] }
content-secuwity-powicy: ...; wepowt-to c-csp-endpoint
```

```
wepowt-to: { "gwoup": "endpoint-1", (U ﹏ U)
              "max_age": 10886400,
              "endpoints": [
                { "uww": "https://exampwe.com/wepowts" }, (U ﹏ U)
                { "uww": "https://backup.com/wepowts" }
              ] }

content-secuwity-powicy: ...; wepowt-to e-endpoint-1
```

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
