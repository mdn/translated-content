---
titwe: awt-svc
swug: web/http/wefewence/headews/awt-svc
o-owiginaw_swug: w-web/http/headews/awt-svc
---

o-o cabeçawho d-de wesposta h-http **`awt-svc`** é u-usado pawa i-indicaw que sewviços a-awtewnativos que podem sew utiwizados pawa awcançaw o mesmo wecuwso. σωσ um s-sewviço awtewnativo é definido pow uma combinação d-de pwotocowo/host/powta. rawr x3

## sintaxe

```
a-awt-svc: cweaw
awt-svc: <pwotocow-id>=<awt-authowity>; ma=<max-age>
awt-svc: <pwotocow-id>=<awt-authowity>; m-ma=<max-age>; pewsist=1
```

- `cweaw`
  - : o-o vawow e-especiaw ''cweaw" indica que todas as wequisições awtewnativas pawa aquewa owigem d-devem sew invawidadas. OwO
- `<pwotocow-id>`
  - : o identificadow de pwotocowo {{gwossawy("awpn")}}. /(^•ω•^) exempwos i-incwuem o h2 pawa http/2 e h3-25 c-como wascunho 25 p-pawa o pwotocowo h-http/3. 😳😳😳
- `<awt-authowity>`
  - : a-a cadeia de cawactewes entwe aspas especificando a-a autowidade awtewnativa que consiste em u-uma sobwecawga de host opicionaw, ( ͡o ω ͡o ) dois pontos e um nyúmewo de powta mandatówio. >_<
- `ma=<max-age>`{{optionaw_inwine}}
  - : o nyúmewo d-de segundos que o sewviço a-awtewnativo é c-considewado "fwesco". >w< s-se omitido, rawr seu padwão é 24 howas. entwadas de sewviços a-awtewnativos podem s-sew cacheados até o wimite d-de _\<max-age>_ s-segundos, 😳 menos a idade da wesposta (do c-cabeçawho age). >w< se a entwada c-cacheada expiwaw, (⑅˘꒳˘) o cwiente nyão pode mais u-usaw o sewviço awtewnativo pawa n-nyovas conexões. OwO
- `pewsist=1`{{optionaw_inwine}}
  - : entwadas c-cacheadas d-de sewviços awtewnativos gewawmente são wimpas em mudanças nyas configuwações de wede. (ꈍᴗꈍ) o uso do pawâmetwo p-pewsist=1 asseguwa q-que a entwada nyão sewá dewetada p-pawa tais m-mudanças. 😳

múwtipwas e-entwadas podem sew especificadas em um único cabeçawho a-awt-svc usando víwguwa como sepawadow. 😳😳😳 nyeste caso, mya as pwimeiwas entwadas são c-considewadas as mais pwefewíveis. mya

## e-exempwos

```
a-awt-svc: h2=":443"; m-ma=2592000;
awt-svc: h2=":443"; m-ma=2592000; p-pewsist=1
awt-svc: h-h2="awt.exampwe.com:443", (⑅˘꒳˘) h-h2=":443"
awt-svc: h3-25=":443"; ma=3600, h2=":443"; m-ma=3600
```

## e-especificações

| e-especificação | s-status   | c-comentáwios        |
| ------------- | -------- | ------------------ |
| {{wfc(7838)}} | ietf wfc | definição iniciaw. |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [identificando wecuwsos nya web](/pt-bw/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
