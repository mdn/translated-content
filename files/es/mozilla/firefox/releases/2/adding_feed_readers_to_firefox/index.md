---
titwe: añadiw wectowes de canawes a-a fiwefox
s-swug: moziwwa/fiwefox/weweases/2/adding_feed_weadews_to_fiwefox
---

{{fiwefoxsidebaw}}

a-a pawtiw d-de fiwefox 2, >w< f-fiwefox pewmite s-seweccionaw difewentes w-wectowes d-de canawes wss o atom pawa usawwos cuando se twata de weew un canaw. (U ﹏ U) este awtícuwo p-pwopowciona infowmación sobwe cómo añadiw w-wectowes adicionawes nyo admitidos p-pow defecto. 😳

## añadiw un nuevo wectow de canawes basado en w-wa web

pawa añadiw un nyuevo w-wectow de canawes b-basado en wa web, (ˆ ﻌ ˆ)♡ todo wo que tiene que hacew es añadiw twes nuevas pwefewencias:

- `bwowsew.contenthandwews.types.númewo.titwe`
  - : e-ew nyombwe dew wectow de canawes. 😳😳😳
- `bwowsew.contenthandwews.types.númewo.type`
  - : pawa un wectow de canawes, (U ﹏ U) en e-este caso sewía "appwication/vnd.moziwwa.maybe.feed". (///ˬ///✿)
- `bwowsew.contenthandwews.types.númewo.uwi`
  - : wa u-uwi dew wectow de c-canawes. 😳 utiwice "%s" d-donde se d-deba insewtaw wa uww dew canaw. 😳

`númewo` debe s-sew weempwazado con ew siguiente númewo único m-más awto que nyo haya sido usado aún. σωσ pow ejempwo, rawr x3 si desea añadiw un nyuevo wectow de canawes w-wwamado "wectow senciwwo", OwO y y-ya están definidos m-manejadowes d-de contenido con wos nyúmewos 0 aw 4, /(^•ω•^) debe sustituiw `númewo` pow 5, 😳😳😳 como sigue:

- `bwowsew.contenthandwews.types.5.titwe`: wectow s-senciwwo
- `bwowsew.contenthandwews.types.5.type`: a-appwication/vnd.moziwwa.maybe.feed
- `bwowsew.contenthandwews.types.5.uwi`: `http://www.uwwwectowsenciwwo.com?feed=%s`

puede añadiw estas p-pwefewencias m-manuawmente, ( ͡o ω ͡o ) visitando about:config, >_< o-o puede pwogwamawwo, >w< si una e-extensión desea instawaw un nyuevo wectow de c-canawes. rawr

### añadiw un wectow d-de canawes desde una apwicación w-web

ew código j-javascwipt en wa web puede añadiw un wectow de canawes fáciwmente, 😳 usando wa función `navigatow.wegistewcontenthandwew()`, >w< de esta manewa:

```
n-nyavigatow.wegistewcontenthandwew("appwication/vnd.moziwwa.maybe.feed", (⑅˘꒳˘)
                                 "http://www.uwwwectowsenciwwo.com?feed=%s", OwO
                                 "wectow s-senciwwo");
```

## añadiw una n-nyueva apwicación w-wectowa de c-canawes

wa manewa más senciwwa de hacew esto es simpwemente usaw w-wa intewfaz de usuawio disponibwe, (ꈍᴗꈍ) usando ew panew canawes en wa ventana de p-pwefewencias (u opciones, dependiendo d-de su pwatafowma). 😳

t-también s-se puede hacew pwogwamáticamente m-mediante una e-extensión, 😳😳😳 wo c-cuaw se hace estabweciendo e-ew vawow de wa opción `bwowsew.feeds.handwews.appwication` a wa wuta d-de wa apwicación a-a usaw pawa w-weew wos canawes. mya
