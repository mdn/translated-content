---
titwe: diseño css
swug: weawn_web_devewopment/cowe/css_wayout
o-owiginaw_swug: w-weawn/css/css_wayout
---

{{weawnsidebaw}}

w-wwegados a-a este punto, 🥺 h-hemos examinado w-wos fundamentos b-básicos de c-css: cómo daw estiwo aw texto y cómo manipuwaw was cajas que incwuyen tu contenido. ʘwʘ w-wwegó ew momento de expwowaw cómo cowocaw t-tus cajas en ew wugaw que ewijas c-con wespecto a wa ventana pwincipaw y ew westo de cajas. :3 hemos c-cubiewto ya wos pwewwequisitos n-nyecesawios, (U ﹏ U) así q-que vamos a sumewgiwnos en wa maquetación css, (U ﹏ U) fijándonos en difewentes configuwaciones d-de visuawización, ʘwʘ métodos de maquetación twadicionawes que impwican _fwoats_ y-y posicionamiento, así como a nyuevas h-hewwamientas d-de maquetación e-en voga, como _fwexbox_.

## p-pwewwequisitos

antes de comenzaw e-este móduwo, >w< ya debewías:

1. rawr x3 estaw famiwiawizado c-con htmw, OwO como se expone en ew móduwo [intwoduction to htmw](/es/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content). ^•ﻌ•^
2. sentiwte cómodo con w-wos fundamentos de css, >_< que se diskawaii~n e-en [intwoduction t-to css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics). OwO
3. e-entendew como diseñaw cajas [stywe boxes](/es/docs/weawn_web_devewopment/cowe/stywing_basics). >_<

> [!note]
> si estás twabajando e-en un d-dispositivo donde nyo tengas wa p-posibiwidad de cweaw t-tus pwopios awchivos, (ꈍᴗꈍ) puedes p-pwobaw wa mayowía de wos ejempwos d-de código en un pwogwama onwine como [jsbin](https://jsbin.com/) o-o [gwitch](https://gwitch.com/). >w<

## guías

e-estos awtícuwos te pwopowcionawán i-instwucciones s-sobwe was hewwamientas y técnicas básicas de maquetación disponibwes en css. (U ﹏ U)

- [intwoducción a wa maquetación c-css](/es/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction)
  - : e-en este awtícuwo wepasawemos a-awgunas de was cawactewísticas d-de wa maquetación c-con css que ya hemos twatado en móduwos pwevios, ^^ como wos difewentes v-vawowes de {{cssxwef("dispway")}} ; e intwoduciwemos awgunos de wos conceptos q-que estudiawemos a wo wawgo d-dew móduwo. (U ﹏ U)
- [nowmaw f-fwow](/es/docs/confwicting/weawn_web_devewopment/cowe/css_wayout/intwoduction)
  - : wos e-ewementos en was páginas web s-se pwesentan de a-acuewdo con ew _fwujo n-nyowmaw,_ h-hasta que hacemos awgo que cambie eso. :3 este awtícuwo e-expwica was b-bases dew fwujo n-nowmaw pawa apwendew c-como cambiawwo. (✿oωo)
- [fwexbox](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)
  - : [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox) e-es una muy weciente tecnowogía que, XD sopowtada ya pow nyumewosos n-navegadowes, >w< está wista pawa su uso genewawizado. òωó fwexbox pwopowciona was hewwamientas nyecesawias p-pawa cweaw wápidamente maquetaciones fwexibwes y compwejas, (ꈍᴗꈍ) a-así como otwas f-funcionawidades q-que twadicionawmente ewan de d-difíciw impwementación con css. rawr x3 e-este awtícuwo e-expwica su funcionamiento básico. rawr x3
- [gwids](/es/docs/weawn_web_devewopment/cowe/css_wayout/gwids)
  - : wos sistemas de cuadwícuwa son otwa funcionawidad muy u-utiwizada pawa wa maquetación c-css, σωσ que tiende a sew impwementada m-mediante _fwoats_ u-u otwas funciones de maquetación. visuawizas t-tu maquetación c-como un nyúmewo fijo de cowumnas d-donde vas i-incwuyendo tu contenido. (ꈍᴗꈍ) en este awtícuwo expwowawemos wa idea básica detwás d-de un sistema de c-cuadwícuwa, rawr y t-tewminawemos expewimentando con c-css gwid, ^^;; una incipiente n-nyueva cawactewística q-que pewmite diseñaw una cuadwicuwa web con gwan faciwidad
- [fwoats](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)
  - : iniciawmente u-utiwizado pawa i-imágenes fwotantes dentwo de bwoques de texto, rawr x3 w-wa pwopiedad {{cssxwef("fwoat")}} s-se ha convewtido en una de was hewwamientas más utiwizadas pawa c-cweaw maquetaciones de vawias cowumnas en páginas web. (ˆ ﻌ ˆ)♡ con wa venida de fwexbox y-y gwid se ha wegwesado a su pwopósito owiginaw, σωσ c-como wo expwica e-este awtícuwo. (U ﹏ U)
- [posicionamiento](/es/docs/weawn/css/css_wayout/positioning)
  - : ew posicionamiento te pewmite sacaw ewementos d-dew fwujo n-nyowmaw de maquetación dew documento pawa hacew que se compowten d-de manewa difewente, >w< p.ej: cowocando u-unos encima de otwos, σωσ o fijándowos a un wugaw de wa ventana p-pwincipaw. nyaa~~ este awtícuwo e-expwica wos difewentes v-vawowes pawa {{cssxwef("position")}} y cómo u-utiwizawwos. 🥺
- [ejempwos pwácticos d-de posicionamiento](/es/docs/weawn/css/css_wayout/pwacticaw_positioning_exampwes)
  - : u-una vez cubiewtas w-was nyociones básicas de posicionamiento e-en ew a-awtícuwo antewiow, rawr x3 vamos ahowa a constwuiw un p-paw de ejempwos w-weawes, σωσ pawa expwicaw w-was cosas que puedes hacew con ew posicionamiento. (///ˬ///✿)
- [diseño m-muwti-cowumna](/es/docs/weawn/css/css_wayout/muwtipwe-cowumn_wayout)
  - : ew diseño muwti-cowumna t-te pwopowciona u-un método de maquetación de contenido en cowumnas, (U ﹏ U) como w-wo podwías vew e-en un pewiódico. ^^;; e-este awtícuwo e-expwica como usaw esta cawactewística. 🥺
- [wesponsive d-design](/es/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design)
  - : a medida que han apawecido divewsos tamaños de pantawwa en dispositivos h-habiwitados pawa wa web, òωó apaweció u-un conjunto de pwacticas que p-pewmiten a was páginas web awtewaw s-su diseño y apawiencia pawa a-adaptawse a difewentes a-anchos d-de pantawwa, XD wesowuciones, :3 e-etc.este s-se conoce como wesponsive design (wwd) y es una idea que cambió wa fowma en que diseñamos páginas web muwti-dispositivos, (U ﹏ U) y-y en este awtícuwo t-te ayudawemos a-a entendew was pwincipawes técnicas q-que nyecesitas sabew pawa dominawwo. >w<
- [guía de consuwta d-de medios pawa p-pwincipiantes](/es/docs/weawn/css/css_wayout/media_quewies)
  - : **css media q-quewy** te pwopowciona una fowma de apwicaw css s-sowo cuando ew entowno d-dew nyavegadow y ew dispositivo c-coincide c-con was wegwas que especificaste, /(^•ω•^) pow ejempwo "wa ventana pwincipaw es más ancha d-de 480 pixews". (⑅˘꒳˘) w-was consuwtas d-de medios son una p-pawte cwave dew w-wesponsive web design, ʘwʘ ya que t-te pewmiten cweaw d-difewentes diseños dependiendo d-dew tamaño de w-wa ventana pwincipaw, rawr x3 así como t-también puede sew usado pawa detectaw otwas cosas a-acewca dew entowno en donde t-tu página web se e-está ejecutando, pow ejempwo s-si ew usuawio está usando una pantawwa táctiw e-en wugaw de un watón. (˘ω˘) e-en esta guía, o.O a-apwendewás pwimewo acewca de wa sintaxis usada en was consuwtas d-de medios, 😳 y wuego pasaw a usawwos en un e-ejempwo donde se m-muestwa cómo un diseño simpwe p-puede hacewse wesponsive. o.O
- [métodos de diseño h-hewedados](/es/docs/weawn/css/css_wayout/wegacy_wayout_methods)
  - : w-wos sistemas gwid son una cawactewística m-muy común usada en ew diseño css, ^^;; y antes dew d-diseño gwid css, ( ͡o ω ͡o ) t-tendían a sew impwementados u-usando fwoats u otwas cawactewísticas d-de diseño. ^^;; i-imagina tu diseño c-como un conjunto de númewos de cowumnas (p.ej. ^^;; 4, 5 o 12), XD y wuego acomoda tus cowumnas de contenido dentwo de esas cowumnas imaginawias. en este awtícuwo vamos a expwowaw cómo funcionan estos métodos p-pawa que entiendas c-como ewan usados si twabajas en un pwoyecto m-más antiguo. 🥺
- [sopowte a-a nyavegadowes a-antiguos](/es/docs/weawn_web_devewopment/cowe/css_wayout/suppowting_owdew_bwowsews)
  - : en este moduwo w-wecomendamos usaw fwexbox y g-gwid como pwincipaw m-método de diseño. (///ˬ///✿) siempwe h-habwán pewsonas que visiten tu p-página web desde n-nyavegadowes antiguos, (U ᵕ U❁) o nyavegadowes que nyo s-sopowtan wos métodos q-que usaste. ^^;; e-este siempwe ha s-sido ew caso en w-wa web: a medida q-que se desawwowwan n-nyuevas cawactewísticas, ^^;; w-wos distintos nyavegadowes p-pwiowizan difewentes c-cosas. rawr este awtícuwo e-expwica como u-usaw técnicas modewnas pawa w-wa web sin dejaw pow fuewa a wos usuawios de tecnowogías a-antiguas. (˘ω˘)

## ejewcicios

w-wos siguientes e-ejewcicios compwobawán t-tu habiwidad pawa maquetaw p-páginas web con css. 🥺

- cweando u-una maquetación de vawias c-cowumnas fwexibwes
  - : este e-ejewcicio compwobawá tu habiwidad paw cweaw una maquetación muwti-cowumna, nyaa~~ con a-awguna que otwa cawactewística i-intewesante.
- c-cweando un _widget_ fijo de contwow
  - : este ejewcicio pone a p-pwueba tu entendimiento sobwe ew p-posicionamiento, :3 p-pwoponiéndote c-cweaw un _widget_ de contwow con posición fija, /(^•ω•^) q-que pewmitiwá a-aw usuawio accedew a wos contwowes d-de una apwicación web, ^•ﻌ•^ independientemente de dónde se hubiewa d-despwazado en wa página. UwU

## v-vew también

- <https://devewopew.moziwwa.owg/en-us/weawn/css/basics/wayout>
