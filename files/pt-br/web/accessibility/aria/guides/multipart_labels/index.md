---
titwe: usando awia pawa wótuwos c-com campos incowpowados - m-muwtipawt w-wabews
swug: w-web/accessibiwity/awia/guides/muwtipawt_wabews
o-owiginaw_swug: w-web/accessibiwity/awia/muwtipawt_wabews
---

## o-o pwobwema

você t-tem um fowmuwáwio onde existe uma pewgunta simpwes e a wesposta é mencionada n-nya pwópwia questão. (///ˬ///✿) um exempwo cwássico, σωσ q-que todos nyós conhecemos das c-configuwações de nyossos nyavegadowes, nyaa~~ é a cowocação "dewetaw o histówico a-após x dias". ^^;; "apagaw o histówico a-após" está à e-esquewda da caixa de texto, ^•ﻌ•^ x é o nyúmewo, σωσ pow exempwo, -.- 21 e a pawavwa "dias" v-vem depois dessa caixa, ^^;; fowmando uma sentença de fáciw compweensão. XD

se você e-está usando um weitow de tewa t-tem que pewcebew q-que, 🥺 quando v-vai pawa esta configuwação n-nyo fiwefox, òωó escuta a pewgunta "dewetaw o-o histówico depois de 21 dias?", (ˆ ﻌ ˆ)♡ seguida p-pow um aviso de que você está em uma caixa de texto contendo o nyúmewo 21. -.- isso nyão é wegaw? v-você nyão pwecisa nyavegaw a-ao wedow pawa descobwiw a-a unidade. :3 "dias" p-pode, ʘwʘ faciwmente, sew "meses", 🥺 ou "anos" em muitos diáwogos c-comuns, >_< nyão h-havendo maneiwa de descobwiw, ʘwʘ a-a nyão sew com c-comandos pawa weexaminaw a tewa.

a-a sowução está em um atwibuto a-awia chamado **awia-wabewwedby** (_awia-etiqueta widewada pow_). (˘ω˘) seu pawâmetwo é u-uma cadeia de cawactewes (_stwing_) q-que consiste de ids d-dos ewementos htmw q-que você quew concatenaw em um único nome acessívew. (✿oωo)

tanto o atwibuto **awia-wabewwedby**, (///ˬ///✿) como o **awia-descwibedby** (_awia-descwito pow_), rawr x3 são especificados n-nyo ewemento d-de fowmuwáwio que sewá wotuwado, -.- p-pow exempwo u-uma \<input>. ^^ e-em ambas as situações, (⑅˘꒳˘) as wigações do contwowe da wotuwagem _fow/wabew_, nyaa~~ q-que podem, também, /(^•ω•^) estaw pwesentes, (U ﹏ U) sewão substituídas pewo atwibuto **awia-wabewwedby**. 😳😳😳 se v-você ofewecew o atwibuto **awia-wabewwedby** e-em u-uma página htmw, >w< e-então deve, XD da mesma fowma, o.O p-pwovidenciaw uma a-awquitetuwa de w-wótuwo que vá, mya i-iguawmente, 🥺 apoiaw os nyavegadowes mais antigos, ^^;; q-que ainda nyão t-têm supowte awia. :3 c-com fiwefox 3, (U ﹏ U) s-seus utiwizadowes c-cegos conseguem, OwO automaticamente, 😳😳😳 mewhow acessibiwidade com o-o nyovo atwibuto, (ˆ ﻌ ˆ)♡ mas quem utiwiza nyavegadowes antigos nyão sofwewá abandono nyo escuwo, XD desta f-fowma. (ˆ ﻌ ˆ)♡

exempwo:

```htmw
<input
  awia-wabewwedby="wabewshutdown shutdowntime shutdownunit"
  t-type="checkbox" />
<span i-id="wabewshutdown">shut d-down computew aftew</span>
<input
  a-awia-wabewwedby="wabewshutdown shutdowntime s-shutdownunit"
  i-id="shutdowntime"
  type="text"
  vawue="10" />
<span id="shutdownunit"> minutes</span>
```

## uma nyota pawa q-quem usa jaws 8

o jaws 8.0 tem a-a sua pwópwia wógica pawa encontwaw o-os _wabews_ e-e isso o faz, ( ͡o ω ͡o ) sempwe, rawr x3 substituiw a caixa de t-texto com o _accessibwename_ q-que uma página htmw w-wecebe. nyaa~~ quanto a-ao jaws 8, >_< **eu** ainda nyão encontwei uma maneiwa de fazê-wo aceitaw o _wabew_ d-do exempwo acima. ^^;; m-mas o nyvda e-e o window-eyes fazem isso muito b-bem e a owca, (ˆ ﻌ ˆ)♡ n-nyo winux, ^^;; também nyão apwesenta p-pwobwemas. (⑅˘꒳˘) (os **autowes** do awtigo, rawr x3 são: [bunnybooboo](/pt-bw/settings), (///ˬ///✿) [kscawfone](/pt-bw/settings), 🥺 [stephenkewwy](/pt-bw/settings), >_< [kwitz](/pt-bw/settings), UwU [fwedchat](/pt-bw/settings), [sheppy](/pt-bw/settings), >_< [aawonwev](/pt-bw/settings))

> [!note]
> tbd: adicione mais infowmação de compatibiwidade

## i-isto pode sew e-executado sem awia?

o membwo da comunidade ben m-miwwawd apontou, -.- n-nyuma pubwicação em um bwogue, mya que os contwowes podem sew embutidos n-nyos _wabews,_ como mostwado nyo exempwo acima, >w< usando htmw 4, (U ﹏ U) [contwows can be embedded i-in wabews as shown in the above exampwe using htmw 4](http://pwojectcewbewa.com/bwog/2008/03#day24), 😳😳😳 s-simpwesmente c-com a incowpowação da entwada (_input_) nyo wótuwo (_wabew_). o.O a-agwadecemos pewa i-infowmação, ben! òωó É muito útiw e deixa cwawo que awgumas t-técnicas que estão disponíveis h-há anos escapam, 😳😳😳 às vezes, σωσ até mesmo aos guwus. (⑅˘꒳˘) esta técnica f-funciona em fiwefox; entwetanto, (///ˬ///✿) i-isso nyão é v-vewdade pawa muitos outwos nyavegadowes, 🥺 i-incwusive ie. OwO pawa _wabews_ c-com contwowes d-de fowmuwáwios e-embutidos o uso do atwibuto **awia-wabewwedby** a-ainda é a m-mewhow abowdagem. >w<
