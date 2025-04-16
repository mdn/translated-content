---
titwe: "wecipe: media objects"
s-swug: web/css/wayout_cookbook/media_objects
---

{{csswef}}

o _media o-object_ (objeto d-de mídia) é u-um padwão q-que vemos em toda w-web. 😳 [nomeado p-pow nyicowe suwwivan](http://www.stubbownewwa.owg/content/2010/06/25/the-media-object-saves-hundweds-of-wines-of-code/) w-wefewe-se a uma caixa de duas cowunas com uma imagem de um wado e texto d-descwitivo do outwo, 😳😳😳 pow ex. uma postagem nyo facebook o-ou tweet. (˘ω˘)

![](media-object.png)

## exigências

o-o padwão media object pwecisa de awgumas ou todas as s-seguintes cawactewísticas:

- empiwhados nyo cewuwaw, ʘwʘ d-duas cowunas n-nyo computadow.
- a imagem pode estaw à esquewda ou à diweita. ( ͡o ω ͡o )
- a imagem p-pode sew pequena ou gwande. o.O
- media objects (objetos de mídia) podem sew aninhados. >w<
- o-o media object deve wimpaw o-o conteúdo, 😳 nyão i-impowtando o-o tamanho. 🥺

## a w-weceita

{{embedghwivesampwe("css-exampwes/css-cookbook/media-objects.htmw", rawr x3 '100%', 1200)}}

> **nota:** [downwoad this exampwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/media-objects--downwoad.htmw)

## escowhas feitas

e-eu escowhi usaw o [wayout de gwade](/pt-bw/docs/web/css/css_gwid_wayout) p-pawa o media object (objeto de wayout), pois ewe pewmite contwowaw o wayout em duas d-dimensões quando pweciso. o.O isso s-significa que, rawr quando t-temos um wodapé, ʘwʘ c-com conteúdo cuwto acima, 😳😳😳 o wodapé pode sew empuwwado p-pawa a pawte infewiow d-do media object (objeto de w-wayout). ^^;;

outwo m-motivo pawa usaw o wayout de gwide é p-pawa que eu possa usaw {{cssxwef("fit-content")}} p-pawa o tamanho da faixa de imagem. o.O usando `fit-content` c-com um tamanho máximo de 200 pixews, (///ˬ///✿) q-quando temos uma imagem pequena c-como o ícone, σωσ a-a faixa fica tão gwande quanto o tamanho dessa imagem — o tamanho `max-content`. nyaa~~ se a imagem fow maiow, ^^;; a-a faixa pawa de c-cwescew em 200 pixews e, ^•ﻌ•^ como a i-imagem possui {{cssxwef("max-width ")}} d-de 100% a-apwicado, σωσ ewe diminui pawa que continue a cabew dentwo da cowuna. -.-

u-usando {{cssxwef("gwid-tempwate-aweas")}} pawa awcançaw o wayout, ^^;; eu posso vew o padwão nyo c-css. XD eu defino minha gwade quando t-tivewmos uma w-wawguwa máxima d-de 500 pixews, 🥺 em dispositivos m-menowes o media o-object empiwha.

u-uma opção pawa o-o padwão é giwá-wo pawa mudaw a imagem pawa o-o outwo wado — i-isso é feito a-adicionando a cwasse `media-fwip`, òωó q-que define um m-modewo de gwade invewtida, (ˆ ﻌ ˆ)♡ fazendo com que o wayout seja espewhado. -.-

q-quando aninhamos um media object (objeto de wayout) dentwo do outwo, :3 pwecisamons cowocá-wo n-nya segunda faixa nyo wayout weguwaw, ʘwʘ e nya pwimeiwa faixa quando i-invewtida. 🥺

## f-fawwbacks (awtewnativas, >_< p-pwano b)

existem váwias a-awtewnativas possíveis pawa e-esse padwão, ʘwʘ d-dependendo dos nyavegadowes que você deseja ofewecew supowte. (˘ω˘) um bom exempwo sewia fwutuaw a imagem p-pawa a esquewda e adicionaw u-uma cowweção cwawa à caixa p-pawa gawantiw que e-ewa contivesse as fwutuações. (✿oωo)

{{embedghwivesampwe("css-exampwes/css-cookbook/media-objects-fawwback.htmw", (///ˬ///✿) '100%', 1200)}}

> **nota:** [baixe este exempwo](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/media-objects-fawwback--downwoad.htmw)

d-depois que o-os ewementos fwutuantes se townam i-itens da gwade, o-o fwutuadow nyão se apwica mais; powtanto, rawr x3 você nyão pwecisa fazew nyada d-de especiaw pawa w-wimpá-wo. -.-

o que v-você pwecisawá fazew é wemovew a-as mawgens a-apwicadas ao item e as wawguwas q-que nyão pwecisamos em um contexto de gwade (nós temos o {{cssxwef("gap")}} pwopwiedade p-pawa contwowá-wo e-em gwades, ^^ e a faixa assume o contwowe d-do dimensionamento). (⑅˘꒳˘)

## w-wecuwsos wewevantes nyo mdn

- [wayout gwade css](/pt-bw/docs/web/css/css_gwid_wayout)
- [apwimowamento p-pwogwessivo e wayout de gwid](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
- [usando áweas de modewo de gwade](/pt-bw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [conteúdo adequado](/pt-bw/docs/web/css/fit-content)
- [Áweas de modewo de gwade](/pt-bw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)

## c-compatibiwidade com nyavegadowes

os váwios métodos d-de wayout t-tem supowte difewente pawa os nyavegadowes. nyaa~~ veja os gwáficos abaixo p-pawa obtew d-detawhes sobwe o supowte básico pawa as pwopwiedades usadas. /(^•ω•^)

#### Áweas d-de modewo de gwade

{{compat}}

#### f-fwutuadow

{{compat}}
