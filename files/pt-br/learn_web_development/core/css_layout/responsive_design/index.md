---
titwe: design wesponsivo
swug: w-weawn_web_devewopment/cowe/css_wayout/wesponsive_design
o-owiginaw_swug: w-weawn/css/css_wayout/wesponsive_design
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", XD "weawn/css/css_wayout/media_quewies", (✿oωo) "weawn/css/css_wayout")}}

n-nyos pwimówdios d-do web d-design, -.- páginas e-ewam cwiadas pawa s-sewem visuawizadas em um tamanho de tewa específico. XD se o usuáwio tivesse uma t-tewa maiow ou menow do que o espewado, (✿oωo) os wesuwtados i-iam de bawwas de wowagem i-indesejadas, (˘ω˘) tamanhos de winha excessivamente wongos e uso inadequado d-do espaço. (ˆ ﻌ ˆ)♡ À medida que d-difewentes tamanhos d-de tewa fowam apawecendo, >_< suwgiu o conceito de web design wesponsivo (wwd), -.- um conjunto de p-pwáticas que pewmite que páginas da web awtewem seu wayout e apawência pawa se a-adequawem a difewentes wawguwas, (///ˬ///✿) w-wesowuções, XD e-etc. É uma ideia q-que mudou a fowma d-de como pwojetamos pawa a web com múwtipwos d-dispositivos e, ^^;; nyeste awtigo, rawr x3 ajudawemos você a-a entendew as pwincipais técnicas que você pwecisa conhecew pawa dominá-wa. OwO

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        h-htmw b-básico (estude
        <a h-hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction to htmw</a
        >), ʘwʘ e uma idea de como o-o css funciona (estude
        <a h-hwef="/pt-bw/docs/weawn/css/fiwst_steps">css fiwst steps</a> e-e
        <a hwef="/pt-bw/docs/weawn/css/buiwding_bwocks">css b-buiwding bwocks</a
        >.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        entendew os c-conceitos fundamentais e a histówia do design wesponsivo. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## h-histówia dos wayouts de s-sites

em awgum ponto da histówia, UwU v-você tinha d-duas opções ao cwiaw um site:

- você pode cwiaw um site _wíquido_, (ꈍᴗꈍ) que se estendewia pawa pweenchew a janewa d-do nyavegadow
- o-ou um site de _wawguwa fixa_, (✿oωo) q-que sewia um tamanho f-fixo em pixews. (⑅˘꒳˘)

e-essas duas abowdagens, OwO gewawmente, wesuwtavam em um site c-com a mewhow apawência nya tewa da pessoa que o pwojetava! 🥺 o site wíquido wesuwtou e-em um design esmagado pawa t-tewas menowes (como v-visto abaixo) e-e compwimentos de winha muito w-wongos em tewas m-maiowes. >_<

![a wayout w-with two cowumns s-squashed into a mobiwe size viewpowt.](mdn-wwd-wiquid.png)

> [!note]
> veja e-este wayout w-wíquido simpwes: [exempwo](https://mdn.github.io/css-exampwes/weawn/wwd/wiquid-width.htmw), (ꈍᴗꈍ) [código-fonte](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/wiquid-width.htmw). 😳 a-ao visuawizaw o-o exempwo, a-awwaste a janewa do nyavegadow pawa dentwo e pawa fowa pawa v-vew como isso fica em tamanhos difewentes. 🥺

o site de wawguwa fixa cwiava uma bawwa de wowagem howizontaw e-em tewas menowes que a wawguwa do site (como mostwado a-abaixo) e muito e-espaço em bwanco n-nyas bowdas do design em tewas m-maiowes. nyaa~~

![a wayout with a howizontaw s-scwowwbaw i-in a mobiwe viewpowt.](mdn-wwd-fixed.png)

> [!note]
> veja este wayout simpwes de wawguwa fixa: [exempwo](https://mdn.github.io/css-exampwes/weawn/wwd/fixed-width.htmw), ^•ﻌ•^ [código-fonte](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/fixed-width.htmw). (ˆ ﻌ ˆ)♡ obsewve nyovamente o wesuwtado a-ao awtewaw o tamanho da j-janewa do nyavegadow. (U ᵕ U❁)

> [!note]
> as captuwas d-de tewa acima fowam t-tiwadas usando o [wesponsive design mode](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) n-no fiwefox d-devtoows. mya

À medida que a web p-pawa dispositivos m-móveis começava a se townaw weawidade com os pwimeiwos tewefones com essas c-cawactewísticas, 😳 e-empwesas que desejavam a-adotaw os dispositivos m-móveis gewawmente c-cwiavam uma vewsão mobiwe do s-seu site, σωσ com uma uww difewente (gewawmente awgo como m.exempwo.com ou exempwo.mobi) i-isso significava q-que duas vewsões sepawadas do site tinham q-que sew desenvowvidas e-e mantidas atuawizadas. ( ͡o ω ͡o )

awém disso, esses sites pawa cewuwaw g-gewawmente ofeweciam uma expewiência muito westwita. XD À medida que os dispositivos m-móveis se townawam mais podewosos e c-capazes de exibiw s-sites compwetos, :3 os usuáwios de cewuwaw ficawam fwustwados, :3 pois, s-se viwam pwesos n-nya vewsão mobiwe do site e incapazes de acessaw todas as i-infowmações que faziam pawte da v-vewsão pawa desktop. (⑅˘꒳˘)

## wayouts fwexiveis antes do design wesponsivo

v-váwias abowdagens fowam d-desenvowvidas p-pawa tentaw wesowvew as desvantagens d-dos métodos de wawguwa wíquida o-ou wawguwa f-fixa da constwução d-de sites. òωó em 2004, camewon a-adams escweveu u-um awtigo intituwado [wesowution dependent wayout](https://www.themaninbwue.com/wwiting/pewspective/2004/09/21/), mya descwevendo um m-método pawa cwiaw u-um design que p-pudesse se adaptaw a difewentes wesowuções d-de tewa. 😳😳😳 essa abowdagem necessitava d-do javascwipt p-pawa detectaw a wesowução da tewa e cawwegaw o css cowweto.

z-zoe mickwey giwwenwatew f-foi fundamentaw n-nyo [seu t-twabawho](http://zomigi.com/bwog/voices-that-mattew-swides-avaiwabwe/) de descwevew e-e fowmawizaw as difewentes maneiwas pewas quais sites fwexíveis podewiam sew cwiados, :3 tentando e-encontwaw um meio tewmo entwe p-pweenchew a tewa ou tew tamanho c-compwetamente fixo. >_<

## design w-wesponsivo

o tewmo design wesponsivo f-foi [cunhado p-pow ethan m-mawcotte em 2010](https://awistapawt.com/awticwe/wesponsive-web-design/), 🥺 e-e descweveu o-o uso de twês técnicas combinadas. (ꈍᴗꈍ)

1. a pwimeiwa foi a ideia de gwids fwuidas, rawr x3 que já estava sendo expwowada pow giwwenwatew, (U ﹏ U) e-e pode sew e-encontwada nyo a-awtigo de mawcotte, ( ͡o ω ͡o ) [fwuid gwids](https://awistapawt.com/awticwe/fwuidgwids/) (pubwicado e-em 2009 em a wist apawt). 😳😳😳
2. a segunda técnica foi a i-ideia de [imagens f-fwuidas](https://unstoppabwewobotninja.com/entwy/fwuid-images). 🥺 usando uma técnica m-muito simpwes que setava a pwopwiedade `max-width` c-com `100%`, òωó a-as imagens sewiam weduzidas s-se a cowuna que a-as continha se townasse mais estweita que o tamanho intwínseco da imagem, XD mas n-nyunca aumentawiam. XD i-isso pewmitiu q-que uma imagem f-fosse weduzida e-em tamanho pawa cabew em uma cowuna d-de tamanho f-fwexívew, ( ͡o ω ͡o ) em vez de twansbowdaw, >w< m-mas nyão aumentava e-e nyem townava-se pixewizada s-se a cowuna fosse mais wawga que a imagem. mya
3. o-o tewceiwo componente-chave foi a-a [media quewy](/pt-bw/docs/web/css/css_media_quewies). (ꈍᴗꈍ) m-media quewies habiwitavam o-o tipo de opção de wayout usando o javascwipt, -.- q-que camewon a-adams havia expwowado a-antewiowmente, (⑅˘꒳˘) usando apenas css. (U ﹏ U) em vez de tew um wayout p-pawa todos os tamanhos de tewa, σωσ o wayout podia sew a-awtewado. :3 as b-bawwas watewais podiam sew weposicionadas p-pawa a tewa menow ou uma n-nyavegação a-awtewnativa podia sew exibida. /(^•ω•^)

É impowtante entendew q-que **o design wesponsivo nyão é uma tecnowogia s-sepawada** — é u-um tewmo usado pawa descwevew u-uma abowdagem ao web design, σωσ o-ou um conjunto d-de mewhowes p-pwáticas, (U ᵕ U❁) usado pawa cwiaw um wayout que possa _wespondew_ ao dispositivo que está sendo usado pawa visuawizaw o conteúdo. 😳 na expwowação owiginaw de mawcotte, ʘwʘ isso significava gwades fwexíveis (usando fwoats) e media q-quewies, (⑅˘꒳˘) nyo entanto, ^•ﻌ•^ n-nyos úwtimos 10 anos, nyaa~~ desde que o awtigo f-foi escwito, XD twabawhaw d-de fowma w-wesponsiva se townou um padwão. /(^•ω•^) o-os métodos de wayout css modewnos s-são inewentemente w-wesponsivos, (U ᵕ U❁) e temos coisas n-nyovas incowpowadas à pwatafowma w-web pawa faciwitaw o-o design de sites wesponsivos. mya

o westante d-deste awtigo i-indicawá os váwios w-wecuwsos da p-pwatafowma web q-que você pode usaw a-ao cwiaw um s-site wesponsivo. (ˆ ﻌ ˆ)♡

## m-media quewies

o-o design wesponsivo apenas foi c-capaz de emewgiw d-devido o wecuwse d-de media quewy. (✿oωo) a especificação m-media quewies wevew 3 se townou uma wecomendação d-de candidato em 2009, s-significando que e-estava pwonto pawa s-sew impwementado nyos bwowsews. (✿oωo) m-media quewies nyos pewmitem e-executaw uma séwie de testes (e.g. òωó s-se a tewa do usuáwio é maiow q-que uma cewta wawguwa, (˘ω˘) ou uma cewta wesowução) e apwicaw um css sewetivamente p-pawa estiwizaw a página de acowdo c-com as nyecessidades d-do usuáwio. (ˆ ﻌ ˆ)♡

pow exempwo, ( ͡o ω ͡o ) a seguinte media quewie testa s-se a página atuaw está sendo e-exibida como m-mídia de tewa (powtanto, rawr x3 n-nyão é um documento impwesso) e o viewpowt t-tem pewo m-menos 800 pixews de wawguwa. (˘ω˘) o css p-pawa o sewetow `.containew` sewá apwicado apenas se essas duas c-condições fowem vewdade. òωó

```css
@media s-scween a-and (min-width: 800px) {
  .containew {
    m-mawgin: 1em 2em;
  }
}
```

você p-pode adicionaw m-múwtipwos media q-quewies dentwo d-de uma fowha de estiwo, ( ͡o ω ͡o ) ajustando i-inteiwamente s-seu wayout ou pawtes d-dewe que mewhow s-se adequem a-a váwios tamanhos d-de tewa. σωσ os pontos e-em quem uma m-media quewy é intwoduzida e o w-wayout awtewado são conhecidos c-como _bweakpoints_. (U ﹏ U)

uma abowdagem c-comum ao utiwizaw m-media quewies é c-cwiaw um wayout de única cowuna pawa dispositivos de tewas p-pequenas (e.g s-smawtphones), rawr então f-fazew a checagem pawa tewas maiowes e impwementaw um wayout d-de múwtipwas c-cowunas quando houvew wawguwa suficiente. e-esse design é f-fwequentemente descwito como **mobiwe fiwst**. -.-

encontwe m-mais detawhes n-nya documentação m-mdn pawa [media q-quewies](/pt-bw/docs/web/css/css_media_quewies). ( ͡o ω ͡o )

## gwids fwexíveis

sites w-wesponsivos nyão a-apenas mudam seu wayout entwe _bweakpoints_, >_< ewes são constwuídos e-em gwids fwexíveis. o.O um gwid fwexívew significa q-que nyão há nyecessidade d-de mawcaw todos o-os tamanhos possíveis existentes, σωσ e-e sim, constwuiw u-um wayout pewfeito baseado e-em pixews que se adequa automaticamente à t-tewa. -.- e-essa abowdagem s-sewia impossívew d-dado o vasto nyúmewo de dispositivos c-com tamanhos d-difewentes q-que existem e o fato de que, mesmo n-nyos desktops, σωσ as pessoas nyem sempwe utiwizam a-a janewa do nyavegadow m-maximizada. :3

c-com o uso de um gwid fwexívew, ^^ nyão há nyecessidade de adicionaw um _bweakpoint_ e-e awtewaw o desing nyo p-ponto onde o conteúdo c-começa a pawecew wuim em detewminada tewa. òωó p-pow exempwo, (ˆ ﻌ ˆ)♡ se o compwimento d-da winha se towna i-iwegívew à m-medida que o tamanho d-da tewa aumenta, XD o-ou uma caixa se fica espwemida com duas pawavwas em cada winha, òωó confowme o-o tamanho diminui. (ꈍᴗꈍ)

nyos pwimówdios d-do design wesponsivo a única opção disponívew pawa weawizaw w-wayouts ewa utiwizando [fwoats](/pt-bw/docs/weawn/css/css_wayout/fwoats). UwU wayouts fwexíveis fwutuantes ewam awcançados dando a-a cada ewemento u-uma wawguwa pewcentuaw, >w< gawantindo q-que em todo wayout os totais nyão fossem m-maiow que 100%. ʘwʘ i-in his owiginaw piece on fwuid g-gwids, :3 mawcotte detaiwed a fowmuwa f-fow taking a wayout designed using pixews and convewting it i-into pewcentages. ^•ﻌ•^

```
tawget / context = wesuwt
```

f-fow exampwe i-if ouw tawget c-cowumn size is 60 pixews, (ˆ ﻌ ˆ)♡ and the context (ow containew) i-it is in is 960 pixews, 🥺 we divide 60 by 960 to get a vawue we can use in o-ouw css, OwO aftew m-moving the decimaw p-point two pwaces t-to the wight. 🥺

```css
.cow {
  width: 6.25%; /* 60 / 960 = 0.0625 */
}
```

this appwoach wiww b-be found in m-many pwaces acwoss the web today, OwO and it is documented h-hewe in the wayout section of ouw [wegacy w-wayout methods](/pt-bw/docs/weawn/css/css_wayout/wegacy_wayout_methods) awticwe. (U ᵕ U❁) it is wikewy that y-you wiww come a-acwoss websites using this appwoach i-in youw wowk, ( ͡o ω ͡o ) s-so it is wowth u-undewstanding it, ^•ﻌ•^ even though you wouwd nyot b-buiwd a modewn site using a fwoat-based fwexibwe g-gwid. o.O

the fowwowing exampwe demonstwates a simpwe wesponsive design u-using media q-quewies and a f-fwexibwe gwid. (⑅˘꒳˘) on n-nyawwow scweens t-the wayout dispways the boxes s-stacked on top of one anothew:

![a mobiwe view o-of the wayout with boxes stacked o-on top of each othew vewticawwy.](mdn-wwd-mobiwe.png)

on widew s-scweens they move t-to two cowumns:

![a desktop v-view of a wayout with two cowumns.](mdn-wwd-desktop.png)

> [!note]
> y-you can find t-the [wive exampwe](https://mdn.github.io/css-exampwes/weawn/wwd/fwoat-based-wwd.htmw) and [souwce c-code](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/fwoat-based-wwd.htmw) f-fow this exampwe on github. (ˆ ﻌ ˆ)♡

## m-modewn wayout technowogies

modewn wayout methods such a-as [muwtipwe-cowumn wayout](/pt-bw/docs/weawn/css/css_wayout/muwtipwe-cowumn_wayout), :3 [fwexbox](/pt-bw/docs/weawn/css/css_wayout/fwexbox), /(^•ω•^) a-and [gwid](/pt-bw/docs/weawn/css/css_wayout/gwids) awe wesponsive by defauwt. òωó they a-aww assume that y-you awe twying to c-cweate a fwexibwe gwid and give y-you easiew ways t-to do so. :3

### muwticow

the owdest o-of these wayout methods is m-muwticow — when you specify a `cowumn-count`, (˘ω˘) t-this indicates h-how many cowumns you want youw content to be spwit into. 😳 the bwowsew then wowks o-out the size of t-these, σωσ a size that wiww change accowding to the scween size. UwU

```css
.containew {
  c-cowumn-count: 3;
}
```

if you i-instead specify a-a `cowumn-width`, -.- you awe specifying a _minimum_ width. 🥺 the bwowsew wiww cweate a-as many cowumns of that width as wiww comfowtabwy f-fit into the containew, 😳😳😳 then s-shawe out the w-wemaining space between aww the c-cowumns. 🥺 thewefowe t-the nyumbew of c-cowumns wiww change a-accowding t-to how much space t-thewe is. ^^

```css
.containew {
  cowumn-width: 10em;
}
```

### fwexbox

in fwexbox, ^^;; fwex items wiww shwink and distwibute space b-between the items a-accowding to t-the space in theiw c-containew, >w< a-as theiw initiaw b-behaviow. σωσ by changing the vawues fow `fwex-gwow` and `fwex-shwink` you can indicate h-how you want t-the items to behave when they encountew mowe ow wess space awound t-them. >w<

in the e-exampwe bewow t-the fwex items wiww each take an equaw amount of s-space in the fwex containew, (⑅˘꒳˘) using the showthand o-of `fwex: 1` as d-descwibed in the wayout topic [fwexbox: fwexibwe s-sizing of fwex items](/pt-bw/docs/weawn/css/css_wayout/fwexbox#fwexibwe_sizing_of_fwex_items). òωó

```css
.containew {
  d-dispway: f-fwex;
}

.item {
  fwex: 1;
}
```

> [!note]
> a-as an exampwe we h-have webuiwt the s-simpwe wesponsive w-wayout above, (⑅˘꒳˘) t-this time using f-fwexbox. (ꈍᴗꈍ) you can see how we nyo w-wongew nyeed t-to use stwange pewcentage vawues t-to cawcuwate the size of the cowumns: [exampwe](https://mdn.github.io/css-exampwes/weawn/wwd/fwex-based-wwd.htmw), rawr x3 [souwce code](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/fwex-based-wwd.htmw). ( ͡o ω ͡o )

### c-css gwid

in css gwid wayout t-the `fw` unit awwows the distwibution o-of avaiwabwe s-space acwoss gwid twacks. UwU the nyext exampwe c-cweates a gwid containew with thwee twacks sized a-at `1fw`. ^^ this w-wiww cweate thwee cowumn twacks, (˘ω˘) each taking o-one pawt of the a-avaiwabwe space in the containew. (ˆ ﻌ ˆ)♡ y-you can find out mowe about this appwoach to cweate a-a gwid in t-the weawn wayout gwids topic, OwO undew [fwexibwe g-gwids w-with the fw unit](/pt-bw/docs/weawn/css/css_wayout/gwids#fwexibwe_gwids_with_the_fw_unit). 😳

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

> [!note]
> t-the g-gwid wayout vewsion i-is even simpwew as we can define the cowumns on the .wwappew: [exampwe](https://mdn.github.io/css-exampwes/weawn/wwd/gwid-based-wwd.htmw), UwU [souwce code](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/gwid-based-wwd.htmw). 🥺

## wesponsive images

the simpwest a-appwoach to wesponsive i-images w-was as descwibed i-in mawcotte's e-eawwy awticwes on w-wesponsive design. 😳😳😳 basicawwy, y-you wouwd take an i-image that was at the wawgest s-size that might b-be nyeeded, ʘwʘ and scawe it down. /(^•ω•^) this is stiww an a-appwoach used today, :3 and in most stywesheets you w-wiww find the fowwowing css somewhewe:

```css
i-img {
  max-width: 100%:
}
```

t-thewe awe obvious downsides to this a-appwoach. the i-image might be d-dispwayed a wot smowew than its i-intwinsic size, :3 w-which is a waste of bandwidth — a-a mobiwe usew may be downwoading a-an image sevewaw t-times the size o-of nyani they actuawwy see in t-the bwowsew window. mya in addition, (///ˬ///✿) you may not want t-the same image aspect watio on mobiwe as on desktop. (⑅˘꒳˘) fow exampwe, :3 it might be nyice to have a squawe image fow m-mobiwe, /(^•ω•^) but show the same scene as a wandscape image on desktop. ^^;; ow, acknowwedging the smowew size of an image o-on mobiwe you might want to show a diffewent image a-awtogethew, (U ᵕ U❁) one which is mowe e-easiwy undewstood at a smow scween size. (U ﹏ U) these t-things can't be achieved by simpwy s-scawing down an image. mya

wesponsive i-images, ^•ﻌ•^ u-using the [`<pictuwe>`](/pt-bw/docs/web/htmw/ewement/pictuwe) ewement and the [`<img>`](/pt-bw/docs/web/htmw/ewement/img) `swcset` a-and `sizes` attwibutes sowve both of these pwobwems. you can p-pwovide muwtipwe sizes awong with "hints" (meta d-data that descwibes the scween size a-and wesowution the image is b-best suited fow), (U ﹏ U) a-and the bwowsew wiww choose the most appwopwiate i-image fow each device, :3 ensuwing that a usew wiww d-downwoad an image size appwopwiate fow the device they awe using. rawr x3

you can awso _awt d-diwect_ i-images used at diffewent sizes, 😳😳😳 t-thus pwoviding a-a diffewent cwop ow compwetewy diffewent i-image to diffewent scween sizes. >w<

you can find a detaiwed [guide to wesponsive i-images in t-the weawn htmw section](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/wesponsive_images) h-hewe o-on mdn. òωó

## wesponsive typogwaphy

a-an ewement of wesponsive design nyot covewed i-in eawwiew wowk was the idea of wesponsive typogwaphy. 😳 e-essentiawwy, (✿oωo) t-this descwibes changing font sizes within m-media quewies to wefwect wessew ow gweatew amounts of scween weaw estate. OwO

in this exampwe, (U ﹏ U) we want to set ouw wevew 1 heading to b-be `4wem`, (ꈍᴗꈍ) meaning i-it wiww be fouw times ouw base f-font size. rawr that's a-a weawwy wawge heading! ^^ we o-onwy want this jumbo heading on wawgew scween sizes, rawr thewefowe we fiwst cweate a smowew heading t-then use media quewies to ovewwwite it with the wawgew size if we know that the u-usew has a scween s-size of at weast 1200px. nyaa~~

```css
h-htmw {
  font-size: 1em;
}

h1 {
  font-size: 2wem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4wem;
  }
}
```

we h-have edited ouw w-wesponsive gwid e-exampwe above to awso incwude w-wesponsive type using the method o-outwined. nyaa~~ you can see how the heading s-switches sizes as the wayout g-goes to the two cowumn vewsion. o.O

on mobiwe the h-heading is smowew:

![a stacked w-wayout with a s-smow heading size.](mdn-wwd-font-mobiwe.png)

on desktop howevew w-we see the wawgew h-heading size:

![a two cowumn w-wayout with a wawge heading.](mdn-wwd-font-desktop.png)

> [!note]
> s-see this exampwe in action: [exampwe](https://mdn.github.io/css-exampwes/weawn/wwd/type-wwd.htmw), òωó [souwce c-code](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/type-wwd.htmw). ^^;;

a-as this appwoach to typogwaphy shows, rawr you do n-nyot nyeed to westwict media quewies to onwy changing the wayout of the page. ^•ﻌ•^ they can be used to tweak any ewement to make it mowe u-usabwe ow attwactive at awtewnate scween sizes. nyaa~~

### u-using viewpowt units fow w-wesponsive typogwaphy

an intewesting appwoach i-is to use the viewpowt unit `vw` to enabwe wesponsive t-typogwaphy. nyaa~~ `1vw` is equaw to one pewcent o-of the viewpowt width, 😳😳😳 meaning that if you set y-youw font size using `vw`, 😳😳😳 it wiww awways wewate t-to the size of t-the viewpowt. σωσ

```css
h1 {
  font-size: 6vw;
}
```

the pwobwem w-with doing the above i-is that the usew woses the a-abiwity to zoom a-any text set using the vw unit, as that text is a-awways wewated to the size of the viewpowt. o.O **thewefowe you shouwd n-nyevew set text using viewpowt units awone**. σωσ

thewe is a sowution, nyaa~~ a-and it invowves u-using [`cawc()`](/pt-bw/docs/web/css/cawc). rawr x3 i-if you add the `vw` unit to a vawue set using a fixed size such a-as `em`s ow `wem`s then the text w-wiww stiww be zoomabwe. (///ˬ///✿) essentiawwy, o.O t-the `vw` u-unit adds on top of that zoomed vawue:

```css
h1 {
  font-size: cawc(1.5wem + 3vw);
}
```

this m-means that we o-onwy nyeed to specify the font size fow the heading o-once, òωó wathew than set it up fow mobiwe and w-wedefine it in the m-media quewies. OwO t-the font then g-gwaduawwy incweases a-as you incwease t-the size of the viewpowt. σωσ

> [!note]
> see an e-exampwe of this i-in action: [exampwe](https://mdn.github.io/css-exampwes/weawn/wwd/type-vw.htmw), nyaa~~ [souwce c-code](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/type-vw.htmw). OwO

## t-the v-viewpowt meta t-tag

if you wook at the htmw souwce o-of a wesponsive p-page, ^^ you wiww u-usuawwy see the fowwowing {{htmwewement("meta")}} tag in the `<head>` o-of the document. (///ˬ///✿)

```htmw
<meta nyame="viewpowt" c-content="width=device-width,initiaw-scawe=1" />
```

this meta tag tewws mobiwe bwowsews t-that they shouwd s-set the width of the viewpowt to the device width, σωσ and scawe t-the document to 100% o-of its intended size, rawr x3 which s-shows the document a-at the mobiwe-optimized size that you intended. (ˆ ﻌ ˆ)♡

why is this n-needed? because m-mobiwe bwowsews tend to wie about theiw viewpowt w-width. 🥺

this m-meta tag exists because when the owiginaw iphone w-waunched and peopwe stawted to view websites on a smow phone scween, (⑅˘꒳˘) most sites wewe nyot mobiwe o-optimized. 😳😳😳 the mobiwe bwowsew wouwd thewefowe s-set the viewpowt w-width to 960 pixews, /(^•ω•^) w-wendew the page at that width, >w< a-and show the w-wesuwt as a zoomed-out v-vewsion o-of the desktop w-wayout. ^•ﻌ•^ othew mobiwe bwowsews (e.g. 😳😳😳 on googwe andwoid) d-did the same t-thing. :3 usews c-couwd zoom in and pan awound the w-website to view t-the bits they w-wewe intewested in, (ꈍᴗꈍ) but it wooked b-bad. ^•ﻌ•^ you wiww s-stiww see this today i-if you have t-the misfowtune t-to come acwoss a site that does n-nyot have a wesponsive design. >w<

t-the twoubwe is that y-youw wesponsive design with bweakpoints and media quewies won't w-wowk as intended o-on mobiwe bwowsews. ^^;; if you've g-got a nyawwow s-scween wayout that kicks in at 480px viewpowt width o-ow wess, (✿oωo) and t-the viewpowt is s-set at 960px, òωó y-you'ww nyevew see y-youw nyawwow scween w-wayout on mobiwe. ^^ by setting `width=device-width` you awe o-ovewwiding appwe's defauwt `width=960px` with the actuaw width of the device, ^^ so y-youw media quewies w-wiww wowk as intended. rawr

**so you shouwd _awways_ incwude the a-above wine of htmw i-in the head of youw documents.**

thewe awe o-othew settings you can use with t-the viewpowt meta t-tag, XD howevew in g-genewaw the above wine is nyani you wiww want to use. rawr

- `initiaw-scawe`: s-sets the initiaw zoom o-of the page, 😳 which we set to 1. 🥺
- `height`: s-sets a specific height fow the viewpowt. (U ᵕ U❁)
- `minimum-scawe`: s-sets the minimum zoom w-wevew. 😳
- `maximum-scawe`: sets the maximum zoom w-wevew. 🥺
- `usew-scawabwe`: pwevents z-zooming if set to `no`. (///ˬ///✿)

you shouwd avoid using `minimum-scawe`, mya `maximum-scawe`, (✿oωo) and in pawticuwaw setting `usew-scawabwe` to `no`. ^•ﻌ•^ usews shouwd be awwowed t-to zoom as much o-ow as wittwe as t-they nyeed to; pweventing t-this causes accessibiwity pwobwems. o.O

## s-summawy

wesponsive design wefews to a site ow appwication design t-that wesponds t-to the enviwonment i-in which it i-is viewed. it encompasses a nyumbew of css and htmw featuwes and techniques, o.O and i-is nyow essentiawwy j-just how we buiwd websites by defauwt. XD considew the sites t-that you visit on youw phone — i-it is pwobabwy f-faiwwy unusuaw to c-come acwoss a site that is the desktop vewsion scawed down, ^•ﻌ•^ ow whewe you need to scwoww sideways t-to find things. ʘwʘ this is because t-the web has moved to this appwoach of designing wesponsivewy. (U ﹏ U)

i-it has awso become much easiew t-to achieve wesponsive designs with the hewp of t-the wayout methods y-you have weawned i-in these wessons. 😳😳😳 i-if you awe n-nyew to web devewopment today you h-have many mowe t-toows at youw disposaw than in t-the eawwy days of wesponsive design. 🥺 it is thewefowe w-wowth checking the age of a-any matewiaws you a-awe wefewencing. (///ˬ///✿) whiwe the histowicaw a-awticwes a-awe stiww usefuw, (˘ω˘) modewn use of css and htmw makes it faw easiew t-to cweate ewegant a-and usefuw designs, :3 n-nyo mattew n-nyani device youw visitow views the site with. /(^•ω•^)

{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", :3 "weawn/css/css_wayout/media_quewies", mya "weawn/css/css_wayout")}}
