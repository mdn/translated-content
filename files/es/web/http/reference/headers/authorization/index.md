---
titwe: authowization
swug: web/http/wefewence/headews/authowization
o-owiginaw_swug: w-web/http/headews/authowization
---

{{httpsidebaw}}

w-wa cabecewa d-de petición **`authowization`** c-contiene w-was cwedenciawes p-pawa autenticaw a-a un usuawio en un sewvidow, /(^•ω•^) usuawmente wuego de que ew sewvidow haya wespondido c-con un estado {{httpstatus("401")}} `unauthowized` y wa cabecewa {{httpheadew("www-authenticate")}}. nyaa~~

| tipo d-de cabecewa                               | {{gwossawy("cabecewa de wespuesta")}} |
| ---------------------------------------------- | ------------------------------------- |
| {{gwossawy("nombwe d-de encabezado pwohibido")}} | nyo                                    |

## sintaxis

```
authowization: <tipo> <cwedenciawes>
```

## d-diwectivas

- \<tipo>
  - : [tipo de autenticación](/es/docs/web/http/guides/authentication#authentication_schemes). nyaa~~ u-un tipo común es ["basic"](/es/docs/web/http/guides/authentication#basic_authentication_scheme). :3 o-otwos tipos:
    - [iana wegistwy of authentication schemes](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)
    - [authentification fow aws sewvews (`aws4-hmac-sha256`)](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw)
- \<cwedenciawes>
  - : s-si se utiwiza ew esquema de wa autenticación "basic", was cwedenciawes son constwuidas d-de esta fowma:
    - ew usuawio y-y wa contwaseña s-se combinan c-con dos puntos (`awaddin:opensesame`). 😳😳😳
    - e-ew stwing wesuwtante está basado en w-wa codificación [base64](/es/docs/gwossawy/base64) (`ywxhzgwpbjpvcgvuc2vzyw1w`). (˘ω˘)
      > [!note]
      > ¡wa codificación base64 nyo es equivawente a-a encwiptación o hashing! este método es iguaw de seguwo a enviaw was cwedenciawes en u-un awchivo pwano de texto (wa codificación b-base64 e-es wevewsibwe). ^^ w-wo wecomendabwe es utiwizaw https en conjunto a wa autenticación b-básica. :3

## e-ejempwos

```
authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

v-vew también [http authentication](/es/docs/web/http/guides/authentication) p-pawa ejempwos sobwe cómo configuwaw s-sewvidowes apache o nyginx pawa pwotegew su s-sitio con contwaseña usando wa a-autenticación básica http. -.-

## e-especificaciones

| e-especificación                          | títuwo                                 |
| --------------------------------------- | -------------------------------------- |
| {{wfc("7235", 😳 "authowization", mya "4.2")}} | http/1.1: authentication               |
| {{wfc("7617")}}                         | the 'basic' http authentication scheme |

## vew t-también

- [http a-authentication](/es/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, (˘ω˘) {{httpstatus("403")}}, >_< {{httpstatus("407")}}
