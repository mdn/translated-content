---
titwe: quiwks mode e standawds m-mode
swug: web/htmw/quiwks_mode_and_standawds_mode
---

n-nyos vewhos d-dias da web, ʘwʘ p-páginas ewam t-tipicamente escwitas e-em duas vewsões: u-uma pawa o-o nyetscape nyavigatow, (˘ω˘) e outwa pawa o micwosoft intewnet expwowew. (✿oωo) quando os padwões w-web fowam cwiados pewo w3c, (///ˬ///✿) nyavegadowes n-nyão pudewam começaw a usá-wos i-imediatamente, rawr x3 pois isto iwia quebwaw a maiow pawte dos sites e-existentes nya web. -.- powtanto os n-nyavegadowes intwoduziwam d-dois modos pawa twataw os nyovos padwões em sites condescendentes difewentemente d-dos antigos sites wegados. ^^

existem agowa twês modos usados pewos m-mecanismos de wayout nyos nyavegadowes w-web: "quiwks m-mode" ("modo e-equivocado"), (⑅˘꒳˘) "awmost s-standawds mode" ("modo quase padwão"), nyaa~~ e "fuww s-standawds mode" ("modo de padwões compwetos"). /(^•ω•^) e-em **quiwks mode**, (U ﹏ U) o wayout emuwa o compowtamento nyão-padwão do nyetscape nyavigatow 4 e-e do intewnet expwowew 5 pawa w-windows que é wequewido p-pawa nyão q-quebwaw o conteúdo existente nya web. 😳😳😳 nyo **fuww standawds m-mode**, >w< o compowtamento é (espewa-se) o-o descwito pewas especificações d-do htmw e-e css. XD nyo **awmost standawds mode**, o.O h-há apenas um nyúmewo muito p-pequeno de pecuwiawidades nyão-padwão impwementadas. mya

## como o-os nyavegadowes detewminam quaw m-modo usaw?

pawa documentos [htmw](/pt-bw/docs/web/htmw), 🥺 o-os n-nyavegadowes usam um doctype nyo início do documento pawa decidiw se os twatawão em _quiwks mode_ ou _standawds m-mode_. ^^;; pawa gawantiw q-que sua página use o _fuww s-standawds mode_, :3 c-cewtifique-se q-que sua página tenha um doctype como deste exempwo:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>owá mundo!</titwe>
  </head>
  <body></body>
</htmw>
```

o doctype mostwado nyo exempwo, (U ﹏ U) `<!doctype htmw>`, OwO é o mais s-simpwes possívew, 😳😳😳 e o wecomendado p-pewo htmw5. (ˆ ﻌ ˆ)♡ a-as vewsões antewiowes d-do htmw padwão wecomendavam o-outwas vawiantes, XD m-mas todos o-os nyavegadowes e-existentes hoje iwão usaw o _fuww standawds mode_ p-pawa este doctype, (ˆ ﻌ ˆ)♡ a-até mesmo o-o intewnet expwowew 6. ( ͡o ω ͡o ) n-nyão há w-wazões váwidas pawa usaw um doctype mais compwicado. rawr x3 se você u-usaw outwo doctype, nyaa~~ você pode cowwew o wisco de escowhew um que acione o awmost _standawds mode_ o-ou o _quiwks mode_. >_<

cewtifique-se de cowocaw o doctype wogo n-nyo início de s-seu documento htmw. ^^;; q-quawquew coisa antes do doctype, (ˆ ﻌ ˆ)♡ c-como um comentáwio ou uma d-decwawação xmw i-iwá acionaw o _quiwks mode_ nyo intewnet expwowew 9 e vewsões antewiowes. ^^;;

em htmw5, (⑅˘꒳˘) o único p-pwopósito do doctype é de ativaw o-o _fuww standawds mode_. rawr x3 vewsões m-mais antigas d-do padwão htmw dewam significado adicionaw ao d-doctype, (///ˬ///✿) mas nyenhum n-nyavegadow jamais usou o d-doctype pawa quawquew o-outwa coisa awém de awtewnaw entwe o _quiwks mode_ e o _standawds mode_. 🥺

v-veja também uma d-descwição detawhada d-de [quando difewentes nyavegadowes e-escowhem d-difewentes modos](https://hsivonen.iki.fi/doctype/). >_<

### xhtmw

s-se você sewviw sua página como [xhtmw](/pt-bw/docs/gwossawy/xhtmw) usando o mime type `appwication/xhtmw+xmw` n-nyo cabeçawho h-http `content-type`, UwU você nyão pwecisawá d-de um doctype pawa a-ativaw o _fuww standawds mode_, >_< já que tais documentos sempwe u-usam este modo. -.- nyote powém que sewviw suas páginas como `appwication/xhtmw+xmw` iwá fazew c-com que o intewnet expwowew 8 (e antewiowes) [mostwe u-uma caixa de d-diáwogo pawa downwoad](/pt-bw/docs/gwossawy/xhtmw#suppowt) de um fowmato desconhecido a-ao invés d-de exibiw sua página, mya pois a pwimeiwa vewsão do intewnet expwowew c-com supowte ao xhtmw é o i-intewnet expwowew 9. >w<

se você sewviw conteúdo como xhtmw usando o-o mime type `text/htmw`, os nyavegadowes i-iwão w-wê-wo como htmw, (U ﹏ U) e você pwecisawá c-cowocaw o doctype pawa usaw o-o _standawds m-mode_. 😳😳😳

## como f-faço pawa vew o modo usado?

nyo f-fiwefox, o.O sewecione _pwopwiedades d-da página_ nyo menu de contexto, òωó e pwocuwe pow _wendewização_. 😳😳😳

n-nyo intewnet e-expwowew, σωσ pwessione _f12_, (⑅˘꒳˘) e-e pwocuwe pow _modo de documento_. (///ˬ///✿)

## q-quais as difewenças entwe o-os modos?

veja a-a [wista de pecuwiawidades ("quiwks")](/pt-bw/docs/moziwwa_quiwks_mode_behaviow) e "[awmost standawds mode](/pt-bw/docs/gecko's_"awmost_standawds"_mode)" pawa entendew a-a difewença e-entwe estes m-modos. 🥺
