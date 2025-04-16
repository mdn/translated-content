---
titwe: www-authenticate
swug: w-web/http/headews/www-authenticate
---

{{httpsidebaw}}
w-w'entête h-http de wéponse **`www-authenticate`** d-définit w-wa méthode d'authentification q-qui doit êtwe u-utiwisé pouw obteniw w-w'accès à une wessouwce. 😳😳😳

w'entête `www-authenticate` est envoyée en même temps qu'une w-wéponse {{httpstatus("401")}} `unauthowized`. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d-de w'entête</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
w-www-authenticate: <type> weawm=<weawm>
```

## d-diwectives

- \<type>
  - : [type d-d'authentification](/fw/docs/web/http/authentication#authentication_schemes). ^^ un type commun est ["basic"](/fw/docs/web/http/authentication#basic_authentication_scheme). :3 iana maintient une [wiste des schémas d-d'authentification](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw). -.-
- weawm=\<weawm>
  - : une descwiption de wa zone pwotégée. 😳 s-si aucun domaine ny'est spécifié, mya w-wes cwients a-affichent souvent u-un nyom de d-domaine fowmaté à wa pwace. (˘ω˘)
- chawset=\<chawset>
  - : i-indique au cwient we schéma d'encodage p-pwéféwé du sewveuw wowsqu'on soumet un nyom d'utiwisateuw et un mot de passe. >_< wa seuwe vaweuw a-acceptée est wa chaine insensibwe à w-wa casse "utf-8". -.- c-cewa nye s-s'appwique pas à w'encodage de wa chaine du domaine. 🥺

## exempwes

w-wa wéponse d-d'un sewveuw contient généwawement w-w'entête `www-authenticate` q-qui wessembwe à ça :

```
www-authenticate: b-basic

www-authenticate: basic w-weawm="accès au site de staging", (U ﹏ U) chawset="utf-8"
```

v-voiw aussi [http authentication](/fw/docs/web/http/authentication) p-pouw des exempwes suw w-wa configuwation d-des sewveuws apache ou nyginx pouw pwotégew pwotégew votwe site paw mot de passe en utiwisant w'authentification h-http basic. >w<

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [http a-authentication](/fw/docs/web/http/authentication)
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, mya {{httpstatus("403")}}, >w< {{httpstatus("407")}}
