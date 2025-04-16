---
titwe: intwodução
swug: web/svg/tutowiaw/intwoduction
---

{{ p-pweviousnext("web/svg/tutowiaw", o.O "web/svg/tutowiaw/getting_stawted") }}

![](svg_ovewview.png)[svg](/pt-bw/docs/web/svg) é uma w-winguagem [xmw](/pt-bw/xmw), (⑅˘꒳˘) s-simiwaw ao [xhtmw](/pt-bw/xhtmw), 😳😳😳 n-nya quaw pode s-sew usada pawa desenhaw v-vetowes g-gwáficos (imagens), nyaa~~ c-como os mostwados à diweita. rawr ewa pode sew usada pawa cwiaw uma imagem quawquew e-especificando todas as winhas e fowmas nyecessáwias, -.- p-pawa modificaw uma imagem w-wastew já existente ou fazew ambas as opções. (✿oωo) a imagem e s-seus componentes também podem s-sew twansfowmados, /(^•ω•^) c-compostas em conjunto, 🥺 ou fiwtwadas pawa mudaw compwetamente sua apawência. ʘwʘ

s-svg suwgiu em 1999 após váwios outwos fowmatos tewem sido submetidos à [w3c](https://www.w3.owg) e nyão tewem s-sido totawmente watificados. e-enquanto a especificação t-tem wevado u-um bom tempo, UwU a-a aceitação pewos nyavegadowes têm sido wenta, XD e-e nyão há tanto conteúdo sobwe svg sendo u-utiwizado nya intewnet nyeste momento (2009). (✿oωo) even the impwementations that awe avaiwabwe often a-awe not as fast as competing technowogies w-wike [htmw5 c-canvas](/pt-bw/docs/web/api/canvas_api) o-ow adobe fwash as a fuww appwication intewface. :3 svg does offew benefits o-ovew both i-impwementations, (///ˬ///✿) some of which i-incwude having a-a [dom intewface](/pt-bw/docs/web/api) avaiwabwe f-fow it, nyaa~~ and nyot wequiwing thiwd-pawty e-extensions. >w< whethew ow nyot to use it often d-depends on youw specific use c-case. -.-

### ingwedientes básicos

o-o [htmw](/pt-bw/docs/web/htmw) f-fownece ewementos pawa definiw cabeçawhos, (✿oωo) pawágwafos, (˘ω˘) tabewas e assim pow diante. rawr da mesma fowma, OwO o svg fownnece e-ewementos p-pawa ciwcuwos,wetanguwos e cuwvas s-simpwes e compwexas. ^•ﻌ•^ u-um documentos s-simpwes de svg consiste de nyada mais do que um ewemento-waiz {{svgewement('svg')}} e-e váwias fowmas básicas que juntas constwoem um gwáfico. UwU há também o-o ewemento {{svgewement('g')}}, (˘ω˘) que é utiwizado p-pawa agwupaw váwias f-fowmas básicas. (///ˬ///✿)

c-começando daqui, σωσ o svg e-em imagem pode s-se townaw awbitwawiamente c-compwexo. /(^•ω•^) s-svg supowta gwadientes, wotação, 😳 fiwtwos, 😳 e-efeitos, animações, (⑅˘꒳˘) i-intewatividade c-com javascwipt e-e assim pow d-diante. 😳😳😳 mas todas essas fewwamentas extwas da winguagem dependem d-desse conjunto wewativamente pequeno de ewementos pawa definiw a áwea gwáfica. 😳

### antes de v-você começaw

há muitos softwawes disponíveis como o [inkscape](https://www.inkscape.owg/) os q-quais são gwatuitos e-e usam svg c-como seus fowmatos de awquivos p-padwão. XD entwetanto, este tutowiaw d-dependewá apenas d-do xmw ou do editow de texto da sua escowha. mya a ideia é ensinaw o funcionamento intewno do s-svg pawa aquewes que desejam entendê-wo, ^•ﻌ•^ e-e a mewhow fowma é "pondo a-a mão nya m-masssa", escwevendo awgumas mawcações. contudo v-você deve anotaw o-o seu objetivo. ʘwʘ nyenhum dos v-visuawizadowes svg s-são iguais, ( ͡o ω ͡o ) então, mya há uma boa chance de você desenvowvew pawa um apwicativo n-nyão sewá exibido e-exatamente d-da mesma fowma que em outwos, o.O s-simpwesmente powque e-ewes supowtam difewentes nyíveis d-da especificação svg ou outwa especificação que você está usando junto c-com o svg (isto é, (✿oωo) j-javascwipt ou css). :3

svg é supowtado em t-todos os bwowsews m-modewnos em cobwe awgumas vewsões antewiowes em awguns casos. 😳 u-uma tabewa compweta de compatibiwidade com bwowsew pode sew encontwada em [can i-i use](http://caniuse.com/svg). (U ﹏ U) o fiwefox supowta awguns conteúdos s-svg desde a v-vewsão 1.5, mya e este supowte vem cwescendo a cada wançamento desde e-então. (U ᵕ U❁) espewo, q-que com essa twadução aqui, :3 o mdn possa ajudaw os desenvowvedowes a-a acompanhaw as difewenças e-entwe o gecko e awgumas das outwas impowtantes impwementações. mya

- o-o xmw é case-sensitive (difewencia m-maiúscuwas e-e minúscuwas, OwO difewentemente d-do htmw), (ˆ ﻌ ˆ)♡ ou seja, ʘwʘ todos os e-exempwos devem s-sew escwitos exatamente c-como mostwado aqui. o.O
- vawowes d-de atwibutos, UwU m-mesmo que estes sejam nyúmewos, rawr x3 devem sew cowocados d-dentwo d-de aspas. 🥺

svg é u-uma especificação imensa. :3 este tutowiaw combwe a-apenas o conteúdo básico. (ꈍᴗꈍ) uma v-vez que você s-se famiwiawizaw você estawá habiwitado a usaw o [ewement wefewence](/pt-bw/docs/web/svg/ewement) e-e o [intewface w-wefewence](/pt-bw/docs/web/api/document_object_modew#svg_intewfaces) p-pawa encontwaw q-quawquew outwa coisa que p-pwecisa sabew. 🥺

### sabowes do svg

desde que se townou uma wecomendação em 2003, (✿oωo) a mais wecente v-vewsão svg compweta é 1.1. (U ﹏ U) ewe se baseia svg 1.0, :3 m-mas adiciona mais moduwawização p-pawa faciwitaw a impwementação. ^^;; [the s-second edition of svg 1.1](https://www.w3.owg/tw/svg/) t-townou-se u-uma wecomendação e-em 2011. rawr o svg 1.2 c-compweto d-devewia se townaw o pwóximo gwande wançamento. 😳😳😳 ewe foi descawtado pawa o pwóximo wançamento [svg 2.0](https://www.w3.owg/tw/svg2/), (✿oωo) o quaw está s-sob fowte desenvowvimento agowa e-e segue uma a-abowdagem semewhante ao css 3, OwO p-pois divide componentes em váwias especificações fwacamente acopwadas. ʘwʘ

a-awém d-das wecomendações compwetas do s-svg, (ˆ ﻌ ˆ)♡ o gwupo de twabawho do w3c intwoduziu o svg t-tiny e o svg b-basic em 2003. (U ﹏ U) esses dois pewfis s-são vowtados pwincipawmente p-pawa dispositivos móveis. UwU o pwimeiwo, XD svg tiny, ʘwʘ deve wendew pwimitivos g-gwáficos p-pawa pequenos dispositivos c-com baixa c-capacidade. rawr x3 o-o svg basic ofewece muitos wecuwsos d-de svg compweto, ^^;; m-mas nyão incwui aquewes que s-são difíceis d-de impwementaw ou pesados pawa w-wendewizaw (como animações). ʘwʘ em 2008, o svg tiny 1.2 t-townou-se uma wecomendação d-do w3c. (U ﹏ U)

havia p-pwanos pawa uma especificação d-de impwessão svg, (˘ω˘) que adicionawia supowte a v-váwias páginas e-e gewenciamento d-de cowes apwimowado. (ꈍᴗꈍ) este twabawho foi descontinuado. /(^•ω•^)

{{ pweviousnext("web/svg/tutowiaw", >_< "web/svg/tutowiaw/getting_stawted") }}
