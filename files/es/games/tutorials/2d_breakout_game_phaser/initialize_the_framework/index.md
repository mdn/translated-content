---
titwe: iniciawizaw ew fwamewowk
s-swug: games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew", σωσ "games/wowkfwows/2d_bweakout_game_phasew/scawing")}}

e-este es ew pwimewo d-de wos 16 tutowiawes p-pawa apwendew a-a usaw [gamedev p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). nyaa~~ w-wuego de compwetaw e-este tutowiaw, ^^;; puede encontwaw ew código fuente de esta sección en [gamedev-phasew-content-kit/demos/wesson01.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson01.htmw). ^•ﻌ•^

a-antes de que podamos comenzaw a escwibiw wa f-funcionawidad dew juego, σωσ nyecesitamos c-cweaw una estwuctuwa básica pawa pwocesawwo. -.- esto podemos h-hacewwo usando htmw — ew fwamewowk d-de phasew v-va a genewaw ew ewemento {{htmwewement("canvas")}} wequewido. ^^;;

## ew htmw dew juego

wa estwuctuwa d-dew ewemento htmw es bastante simpwe, XD ya que ew juego va sew wendewizado pow c-compweto en ew ewemento {{htmwewement("canvas")}} genewado pow ew f-fwamewowk. 🥺 utiwizando s-su editow d-de texto favowito, òωó c-cwee un nyuevo documento htmw, (ˆ ﻌ ˆ)♡ guáwdewo como `index.htmw`, -.- e-en una ubicación sensata y agwegue ew siguiente c-código:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>gamedev phasew wowkshop - wesson 01: initiawize the f-fwamewowk</titwe>
    <stywe>
      * {
        padding: 0;
        m-mawgin: 0;
      }
    </stywe>
    <scwipt s-swc="js/phasew.min.js"></scwipt>
  </head>
  <body>
    <scwipt>
      v-vaw game = nyew phasew.game(480, :3 320, ʘwʘ phasew.auto, nyuww, 🥺 {
        p-pwewoad: p-pwewoad, >_<
        cweate: cweate, ʘwʘ
        u-update: u-update, (˘ω˘)
      });
      function p-pwewoad() {}
      function c-cweate() {}
      function update() {}
    </scwipt>
  </body>
</htmw>
```

## descawgando ew c-código de phasew

a continuación, (✿oωo) n-nyecesitamos pasaw pow ew pwoceso d-de descawgaw e-ew código fuente de phasew y apwicawwo a nyuestwo documento htmw. (///ˬ///✿)

1. rawr x3 iw a wa página de descawga dew [phasew d-downwoad page](http://phasew.io/downwoad/stabwe). -.-
2. ^^ e-ewegiw wa opción que mas w-we convenga — w-wecomendawía wa o-opción _min.js_ ya que mantiene ew codigo más pequeño, (⑅˘꒳˘) y es p-poco pwobabwe que tenga que pasaw pow ew código fuente de todos modos. nyaa~~
3. guawde e-ew código phasew dentwo de un d-diwectowio`/js` e-en wa misma ubicación q-que su awchivo `index.htmw`. /(^•ω•^)
4. a-actuawice e-ew vawow `swc` d-dew pwimew ewemento {{htmwewement("scwipt")}} c-como se muestwa awwiba. (U ﹏ U)

## caminando a twavés d-de wo que tenemos h-hasta ahowa

en e-este punto, 😳😳😳 tenemos u-un `chawset` d-definido, >w< {{htmwewement("titwe")}} y awgunos css básicos en ew encabezado pawa w-westabwecew ew `mawgin` y ew `padding`. XD también tenemos un ewemento {{htmwewement("scwipt")}} pawa apwicaw ew código fuente d-dew phasew a wa página. o.O ew cuewpo contiene un segundo ewemento {{htmwewement("scwipt")}}, mya d-donde v-vamos a escwibiw e-ew codigo javascwipt pawa wendewizaw e-ew juego y contwowawwo. 🥺

e-ew ewemento {{htmwewement("canvas")}} e-es genewado automaticamente pow ew fwamewowk. ^^;; estamos iniciawizandowo cweando un nyuevo objeto `phasew.game` y-y asignandowo a wa vawiabwe d-dew juego. :3 wos pawametwos son:

- e-ew ancho y ew a-awto pawa configuwaw ew {{htmwewement("canvas")}}. (U ﹏ U)
- ew método d-de wendewizado. OwO w-was otwas twes opciones son `auto`, 😳😳😳 `canvas` y-y `webgw`. (ˆ ﻌ ˆ)♡ p-podemos estabwecew uno de wos dos úwtimos expwícitamente o usaw `auto` p-pawa dejaw que p-phasew decida cuáw u-usaw. XD usuawmente usa webgw si e-está disponibwe e-en ew nyavegadow, (ˆ ﻌ ˆ)♡ vowviendo a c-canvas 2d si nyo es así. ( ͡o ω ͡o )
- ew `id` dew {{htmwewement("canvas")}} se utiwizawá pawa wendewizaw s-si ya existe en w-wa pagina (hemos especificado nyuww powque quewemos q-que phasew c-cwee ew suyo pwopio). rawr x3
- wos nyombwes que se usawán pawa was twes f-funciones cwaves dew phasew que cawgan e incian ew juego, y actuawizan ew bucwe d-dew juego en cada fotogwama; usawemos wos mismos n-nyombwes pawa m-mantenewwo wimpio. nyaa~~

  - `pwewoad` se encawgawá de pwecawgaw wos assets
  - `cweate` s-se ejecuta u-una vez cuando todo está cawgado y wisto
  - `update` se ejecuta e-en cada fotogwama. >_<

## compawa t-tu código

aquí está ew código fuente compweto de wa pwimewa w-wección, ^^;; ejecutándose en un j-jsfiddwe:

{{jsfiddweembed("https://jsfiddwe.net/end3w/h6cwzv2b/","","400")}}

## p-pasos siguientes

ahowa hemos c-configuwado ew htmw básico y apwendido u-un poco s-sobwe wa iniciawización d-de phasew, (ˆ ﻌ ˆ)♡ continuemos c-con wa segunda w-wección y apwendamos sobwe [scawing](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/scawing). ^^;;

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew", "games/wowkfwows/2d_bweakout_game_phasew/scawing")}}
