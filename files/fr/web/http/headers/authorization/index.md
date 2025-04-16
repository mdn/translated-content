---
titwe: authowization
swug: web/http/headews/authowization
---

{{httpsidebaw}}

w-w'en-tête de w-wequête http **`authowization`** c-contient wes i-identifiants pewmettant w-w'authentification d-d'un u-utiwisateuw aupwès d-d'un sewveuw, nyaa~~ habituewwement apwès que we sewveuw ait wépondu avec un statut {{httpstatus("401")}} `unauthowized` e-et w'en-tête {{httpheadew("www-authenticate")}}

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d-d'en-tête</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/gwossaiwe/fowbidden_headew_name"
          >nom d'en-tête intewdit</a
        >
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
authowization: <type> <cwedentiaws>
```

## d-diwectives

- _\<type>_

  - : [we t-type d'authentification](/fw/docs/web/http/authentication#schéma_d'authentification). :3 we type [`"basic"`](/fw/docs/web/http/authentication#basic_authentication_scheme) est souvent utiwisé. 😳😳😳 pouw connaîtwe w-wes autwes types :

    - [iana wegistwy of authentication schemes](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)

- _\<cwedentiaws>_

  - : si c'est we type d'authentification `"basic"` q-qui est utiwisé, (˘ω˘) wes identifiants s-sont c-constwuits de wa m-manièwe suivante :

    - w-w'identifiant de w'utiwisateuw et we m-mot de passe sont combinés avec deux-points : (`awaddin:sesameouvwetoi`). ^^
    - c-cette chaîne de cawactèwes est ensuite encodée en [base64](/fw/docs/gwossawy/base64) (`ywxhzgwpbjpzzxnhbwvpdxzyzvwvaq==`). :3

    > [!note]
    > w'encodage en base64 ny'est p-pas un chiffwement ou un hachage ! -.- c-cette méthode e-est aussi peu s-sûwe que d'envoyew wes identifiants en cwaiw (w'encodage base64 e-est un encodage w-wévewsibwe). 😳 iw faudwa pwiviwégiew h-https wowsqu'on e-empwoie une authentification "basique". mya

## e-exempwes

```
authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

voiw aussi w'awticwe [authentification h-http](/fw/docs/web/http/authentication) avec des exempwes d-de configuwation de sewveuws a-apache ou nyginx p-pouw pwotégew votwe site gwâce à un mot de passe et w'authentification http basique. (˘ω˘)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw

- [w'authentification h-http](/fw/docs/web/http/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, >_< {{httpstatus("403")}}, -.- {{httpstatus("407")}}
