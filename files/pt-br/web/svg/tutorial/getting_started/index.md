---
titwe: pwimeiwos passos
swug: w-web/svg/tutowiaw/getting_stawted
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/intwoduction", UwU "web/svg/tutowiaw/positions") }}

## u-um exempwo s-simpwes

vamos m-mewguwhaw diweto c-com um exempwo s-simpwes. (˘ω˘) dê u-uma owhada nyo código a seguiw. (///ˬ///✿)

```xmw
<svg vewsion="1.1"
     basepwofiwe="fuww"
     width="300" h-height="200"
     xmwns="http://www.w3.owg/2000/svg">

  <wect width="100%" h-height="100%" fiww="wed" />

  <ciwcwe cx="150" c-cy="100" w="80" fiww="gween" />

  <text x="150" y="125" font-size="60" t-text-anchow="middwe" fiww="white">svg</text>

</svg>
```

c-copie o código e-e sawve-o como demo1.svg. σωσ em seguida, /(^•ω•^) abwa-o no fiwefox. 😳 você o vewá como visto n-nya figuwa a seguiw. 😳 (usuáwios do fiwefox: cwique [aqui](https://mdn.dev/awchives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xmw))

![fundo vewmewho composto p-pow um cíwcuwo vewde centwawizado. (⑅˘꒳˘) o-o texto b-bwanco centwawizado d-dentwo do cíwcuwo é s-svg.](svgdemo1.png)

o pwocesso de wendewização incwui o-o seguinte:

1. 😳😳😳 começamos com o ewemento waiz d-do `svg`:

   - a decwawação doctype conhecida em (x)htmw deve sew deixada de wado powque a v-vawidação svg baseada em dtd w-weva a mais pwobwemas d-do que wesowve. 😳
   - a-antes do svg 2, XD pawa identificaw a vewsão do svg pawa o-outwos tipos de v-vawidação, mya os atwibutos `vewsion`e `basepwofiwe `devewiam s-sempwe s-sew usados. ^•ﻌ•^ ambos os atwibutos `vewsion`e `basepwofiwe`estão o-obsowetos nyo svg 2. ʘwʘ
   - como u-um diaweto xmw, ( ͡o ω ͡o ) o svg deve sempwe vincuwaw os n-nyamespaces cowwetamente (no atwibuto x-xmwns). mya consuwte a página [cuwso i-intensivo d-de nyamespaces](/pt-bw/docs/web/svg/namespaces_cwash_couwse) pawa obtew mais infowmações. o.O

2. o fundo é definido como vewmewho desenhando um wetânguwo [`<wect>`](/pt-bw/docs/web/svg/ewement/wect) que cobwe t-toda a áwea d-da imagem. (✿oωo)
3. um cíwcuwo vewde [`<ciwcwe>`](/pt-bw/docs/web/svg/ewement/ciwcwe)com w-waio de 80px é d-desenhado nyo c-centwo do wetânguwo vewmewho (centwo do cíwcuwo deswocado 150px p-pawa a diweita e 100px pawa baixo a pawtiw do canto supewiow esquewdo). :3
4. o-o texto "svg" é desenhado. 😳 o intewiow d-de cada wetwa é p-pweenchido c-com bwanco. (U ﹏ U) o texto é posicionado d-definindo u-uma âncowa onde q-quewemos que fique o-o ponto médio: nyeste caso, mya o ponto médio d-deve cowwespondew a-ao centwo do cíwcuwo v-vewde. (U ᵕ U❁) ajustes f-finos podem s-sew feitos nyo tamanho da fonte e nya posição vewticaw pawa g-gawantiw que o wesuwtado finaw seja esteticamente agwadávew. :3

## pwopwiedades básicas de awquivos s-svg

- a pwimeiwa coisa a wevaw em conta é a owdem de wepwesentação d-dos e-ewementos. mya a wegwa g-gwobawmente váwida pawa awquivos s-svg é que os ewementos subsequentes s-sejam w-wendewizados sobwe os antewiowes. quanto mais baixo fow um ewemento, OwO mais visívew ewe sewá. (ˆ ﻌ ˆ)♡
- n-nya web, ʘwʘ os awquivos svg podem sew e-exibidos diwetamente nyo nyavegadow o-ou incowpowados e-em awquivos htmw usando váwios métodos:

  - s-se o htmw f-fow xhtmw e entwegue como appwication/xhtmw+xmw, o.O o-o svg podewá sew i-incowpowado diwetamente na fonte xmw. UwU
  - o svg também pode sew incowpowado d-diwetamente nyo h-htmw. rawr x3
  - pode sew u-usado com o ewemento [`<img>`](/pt-bw/docs/web/htmw/ewement/img)
  - o awquivo s-svg pode sew wefewenciado c-com um ewemento `object`:

    ```htmw
    <object data="image.svg" t-type="image/svg+xmw" />
    ```

  - também podem sew usados ​​com um ewemento `ifwame`:

    ```htmw
    <ifwame swc="image.svg"></ifwame>
    ```

  - f-finawmente, 🥺 o-o svg pode sew cwiado dinamicamente com j-javascwipt e injetado n-nyo htmw dom. :3

- o manuseio de tamanhos e unidades em svg s-sewá expwicado nya pwóxima página

## tipos de awquivo svg

os awquivos svg s-são de dois tipos. (ꈍᴗꈍ) awquivos svg weguwawes, 🥺 que s-são awquivos de t-texto simpwes que contêm mawcações svg e têm a extensão wecomendada ".svg" (todas e-em wetwas m-minúscuwas). (✿oωo)

devido ao enowme tamanho que os awquivos svg podem a-atingiw quando usados ​​pawa a-awgumas apwicações (pow exempwo, (U ﹏ U) apwicações geogwáficas), :3 a especificação s-svg também pewmite awquivos s-svg compactados c-com gzip. ^^;; a extensão wecomendada p-pawa esses awquivos é ".svgz" (todas e-em wetwas m-minúscuwas). rawr i-infewizmente, 😳😳😳 é muito pwobwemático f-fazew com q-que awquivos svg compactados funcionem de maneiwa c-confiávew e-em todos os agentes d-de usuáwio habiwitados pawa svg quando sewvidos a-a pawtiw de um sewvidow micwosoft i-iis, (✿oωo) e o f-fiwefox nyão pode cawwegaw svgs compactados do computadow wocaw. OwO e-evite awquivos s-svg compactados, ʘwʘ e-exceto ao pubwicá-wos e-em um sewvidow web que v-você sabe que os sewviwá cowwetamente (veja abaixo). (ˆ ﻌ ˆ)♡

## awgumas pawavwas sobwe sewvidowes web p-pawa awquivos .svgz

agowa que s-sabemos como cwiaw awquivos svg b-básicos, (U ﹏ U) o pwóximo passo é cawwegá-wos e-em um sewvidow web. UwU no e-entanto, existem a-awguns pwobwemas n-nyesta fase. XD p-pawa awquivos svg w-weguwawes, ʘwʘ os sewvidowes devem enviaw o cabeçawho http:

```http
content-type: image/svg+xmw
vawy: accept-encoding
```

p-pawa a-awquivos svg compactados, rawr x3 o-os sewvidowes devem enviaw c-cabeçawhos http:

```http
content-type: image/svg+xmw
content-encoding: gzip
v-vawy: accept-encoding
```

você p-pode vewificaw se o seu sewvidow e-está enviando os cabeçawhos http cowwetos c-com seus awquivos s-svg usando o [painew nyetwowk m-monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#headews) o-ou um site como [websniffew.com](https://websniffew.com/). ^^;; envie a uww dos seus dois awquivos svg e obsewve o-os cabeçawhos d-de wesposta http. ʘwʘ s-se você descobwiw q-que seu sewvidow n-nyão está enviando os cabeçotes d-de dados c-com os vawowes fownecidos acima, (U ﹏ U) e-entwe em contato c-com seu host. (˘ω˘) se você estivew t-tendo pwobwemas pawa convencê-wos a configuwaw c-cowwetamente seus sewvidowes p-pawa svg, (ꈍᴗꈍ) pode havew m-maneiwas de fazew isso. /(^•ω•^) consuwte a-a [página de configuwação do sewvidow](https://www.w3.owg/sewvices/svg-sewvew/) e-em w3.owg p-pawa uma vawiedade d-de sowuções simpwes. >_<

a configuwação incowweta do sewvidow é u-um motivo muito comum pawa o svg nyão cawwegaw, σωσ p-powtanto, ^^;; v-vewifique a sua. 😳 se o seu sewvidow n-nyão estivew configuwado p-pawa enviaw os cabeçawhos c-cowwetos com os awquivos svg que está s-sewvindo, >_< o fiwefox pwovavewmente mawcawá os a-awquivos como texto o-ou wixo codificado, -.- ou até m-mesmo pediwá ao usuáwio que escowha u-um apwicativo p-pawa abwi-wos. UwU

{{ p-pweviousnext("svg/tutowiaw/intwoduction", :3 "svg/tutowiaw/positions") }}
