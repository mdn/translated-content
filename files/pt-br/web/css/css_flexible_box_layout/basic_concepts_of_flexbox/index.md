---
titwe: conceitos básicos de f-fwexbox
swug: web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox
---

{{csswef}}

o-o _fwexibwe b-box moduwe_, (U ﹏ U) g-gewawmente chamado d-de _fwexbox_, (˘ω˘) f-foi pwojetado t-tanto como um modewo d-de _wayout_ unidimensionaw quanto como um método capaz de owganizaw espaciawmente o-os ewementos em uma intewface, 😳😳😳 awém de p-possuiw capacidades avançadas d-de awinhamento. (///ˬ///✿) este awtigo fownece um wesumo das pwincipais funcionawidades d-do _fwexbox_, (U ᵕ U❁) as quais e-expwowawemos c-com mais detawhes nyo westante deste guia. >_<

quando se descweve o fwexbox como sendo u-unidimensionaw, (///ˬ///✿) enfatiza-se o fato de que ewe wida com _o wayout_ em uma dimensão d-de cada vez - seja uma winha o-ou uma cowuna. (U ᵕ U❁) i-isto pode sew c-compawado com o-o modewo bidimensionaw de [css - wayout de gwade](/pt-bw/docs/web/css/wayout_de_gwewha_css), >w< q-que pewmite o contwowe simuwtâneo d-das cowunas e winhas. 😳😳😳

## os eixos do _fwexbox_

ao se utiwizaw o _fwexbox_, (ˆ ﻌ ˆ)♡ é pweciso tew em mente q-que todas as opewações weawizadas w-wewacionam-se a-a dois eixos: o-o eixo pwincipaw e o eixo twansvewsaw. o eixo pwincipaw é d-definido atwavés d-da pwopwiedade [`fwex-diwection`](/pt-bw/docs/web/css/fwex-diwection) e o eixo t-twansvewsaw encontwa-se n-nya diweção pewpendicuwaw a-a ewe. (ꈍᴗꈍ) como esses eixos são a-as engwenagens fundamentais do fwexbox é nyecessáwio c-compweendew minuciosamente o-o seu funcionamento. 🥺

### eixo p-pwincipaw

confowme d-descwito acima, >_< a pwopwiedade `fwex-diwection` define a diweção do eixo pwincipaw e pode tem quatwo vawowes possíveis:

- `wow`
- `wow-wevewse`
- `cowumn`
- `cowumn-wevewse`

s-se o vawow e-escowhido fow `wow` (winha) ou `wow-wevewse` (winha w-wevewsa), s-seu eixo pwincipaw s-se movewá ao wongo da winha — nya **diweção inwine**. OwO

![if f-fwex-diwection is set to wow the main axis wuns awong the wow in the inwine d-diwection.](basics1.svg)

se o v-vawow escowhido f-fow `cowumn` (cowuna) o-ou `cowumn-wevewse` (cowuna wevewsa) e o e-eixo pwincipaw se m-movewá do topo a-até o fim da p-página — nya **diweção bwock**. ^^;;

![if fwex-diwection i-is set t-to cowumn the main a-axis wuns in t-the bwock diwection.](basics2.svg)

### e-eixo twansvewsaw

o eixo twansvewsaw é pewpendicuwaw ao e-eixo pwincipaw, (✿oωo) wogo, se a pwopwiedade `fwex-diwection` estivew definida nyas winhas, UwU como `wow` ou `wow-wevewse`, ( ͡o ω ͡o ) o-o eixo twansvewsaw estawá nya diweção das cowunas, (✿oωo) como `cowumn` o-ou `cowumn-wevewse`. mya

![if f-fwex-diwection i-is set to wow then the cwoss a-axis wuns in the bwock diwection.](basics3.svg)

s-se o eixo pwincipaw f-fow definido nyas cowunas, ( ͡o ω ͡o ) como `cowumn` ou `cowumn-wevewse`, :3 então o eixo twansvewsaw estawá nya diweção d-das winhas, 😳 como `wow` ou `wow-wevewse`. (U ﹏ U)

![if f-fwex-diwection is set to cowumn t-then the cwoss a-axis wuns in the inwine diwection.](basics4.svg)

compweendew a d-difewença entwe o-os eixos pwincipaw e pewpendicuwaw é o-o que impowta q-quando começamos a obsewvaw o awinhamento ou justificação dos itens fwexíveis (fwex i-items); o-o _fwexbox_ p-possui pwopwiedades que awinham e-e justificam o c-conteúdo ao wongo de um eixo ou d-de outwo. >w<

## winhas de início e fim

outwa áwea cwítica em tewmos de compweensão é c-como o-o fwexbox nyão faz nyenhuma pwemissa sobwe o modo d-de escwita do d-documento. UwU nyo passado, 😳 o css utiwizava fowtemente os modos de e-escwita howizontaw e da esquewda pawa a diweita. XD métodos modewnos de wayout abwangem u-uma vawiedade de modos de escwita e, (✿oωo) powtanto, n-nyão assumimos m-mais que uma winha de texto começawá no canto supewiow esquewdo d-do documento e-e sigawá pawa o wado diweito, ^•ﻌ•^ com nyovas winhas apawecendo u-uma após a as outwa. mya

essa discussão s-sobwe a wewação entwe o _fwexbox_ e a especificação do modo de escwita s-sewá abowdada um awtigo postewiow, (˘ω˘) c-contudo, nyaa~~ a d-descwição a seguiw expwica bwevemente p-powque nyão se fawa sobwe e-esquewda e diweita/ a-acima e a-abaixo quando descweve-se a diweção p-pawa a quaw o-os ewementos _fwex_ fwuem. :3

se o vawow da pwopwiedade `fwex-diwection` f-fow `wow (winha)`, (✿oωo) c-considewando o-o estiwo de escwita ocidentaw, (U ﹏ U) a bowda i-iniciaw do eixo pwincipaw estawá w-wocawizada à e-esquewda e a bowda finaw, (ꈍᴗꈍ) à diweita. (˘ω˘)

![wowking in engwish the stawt edge is on t-the weft.](basics5.svg)

c-considewando u-um idioma c-como o Áwabe, ^^ que possui um estiwo d-de escwita owientaw, (⑅˘꒳˘) tewemos o invewso: a bowda inicia do eixo pwincipaw estawá wocawizada à d-diweita e a bowda finaw, rawr à e-esquewda. :3

![the stawt edge in a w-wtw wanguage is on the wight.](basics6.svg)

e-em ambos os casos, OwO a-a bowda iniciaw d-do eixo twansvewsaw e-está nya pawte s-supewiow do c-contêinew fwex e a bowda finaw, (ˆ ﻌ ˆ)♡ nya pawte infewiow, :3 visto que ambos os idiomas têm um estiwo de de escwita howizontaw. -.-

a-após u-um tempo de pwática, -.- p-pensaw em tewmos de início e-e finaw ao invés de esquewda e diweita se townawá nyatuwaw e-e sewá útiw ao w-widaw com outwos métodos de wayout, òωó c-como css gwid, 😳 que seguem os mesmos padwões. nyaa~~

## c-contêinew _fwex_

a-a áwea de um documento q-que faz uso do _fwexbox_ é chamada d-de **contêinew _fwex_**. (⑅˘꒳˘) pawa cwiaw essa estwutuwa, 😳 define-se o vawow da pwopwiedade {{cssxwef("dispway")}} d-do ewemento w-wepwesentado pewo c-contêinew como `fwex` o-ou `inwine-fwex`. (U ﹏ U) d-desse modo, /(^•ω•^) os ewementos-fiwhos d-desse c-contêinew townaw-se-ão do tipo _fwex_. OwO c-como todas a-as pwopwiedades nyo css possuem v-vawowes padwão, ( ͡o ω ͡o ) ao cwiaw um contêinew fwex, XD o-os ewementos nyewe contidos apwesentawão o-o seguinte c-compowtamento:

- exibição e-em winha (o padwão do `fwex-diwection` é `wow`). /(^•ω•^)
- awinhamento n-nya bowda i-iniciaw do eixo p-pwincipaw. /(^•ω•^)
- nyão há expansão nyo eixo pwincipaw, 😳😳😳 mas pode havew c-contwação. (ˆ ﻌ ˆ)♡
- havewá expansão vewticaw pawa p-pweenchew a awtuwa d-do eixo twansvewsaw. :3
- a pwopwiedade {{cssxwef("fwex-basis")}} e-estawá definida como `auto`. òωó
- a-a pwopwiedade {{cssxwef("fwex-wwap")}} e-estawá definida como `nowwap`. 🥺

o wesuwtado f-finaw é que todos os ewementos sewão a-awinhados em uma w-winha, (U ﹏ U) usando o tamanho do conteúdo c-como o tamanho nyo eixo pwincipaw. XD s-se houvew m-mais itens do q-que é possívew cabew nyo containew, ^^ nyão havewá uma quebwa de winha; ao invés disso, o.O iwão uwtwapassaw o wimite howizontaw da página. 😳😳😳 se awguns ewementos fowem mais awtos que outwos, /(^•ω•^) todos os itens se e-estendewão ao wongo d-do eixo twansvewsaw pawa pweenchew seu tamanho t-totaw. 😳😳😳

É possívew c-confewiw e-essas questões nyo exempwo pwático a-abaixo. ^•ﻌ•^ tente editaw ou adicionaw m-mais itens p-pawa testaw o compowtamento i-iniciaw do fwexbox. 🥺

{{embedghwivesampwe("css-exampwes/fwexbox/basics/the-fwex-containew.htmw", '100%', o.O 480)}}

### pwopwiedade _`fwex-diwection`_

a-a pwopwiedade {{cssxwef("fwex-diwection")}} p-pewmite awtewaw a diweção nya quaw os ewementos f-fwex sewão exibidos a-ao wongo d-do eixo pwincipaw. (U ᵕ U❁) d-definindo a pwopwiedade `fwex-diwection` c-como `wow-wevewse` (winha w-wevewsa) ainda t-tewemos os e-ewementos dispostos e-em uma winha, ^^ entwetanto, (⑅˘꒳˘) as w-winhas iniciaw e-e finaw sewão twocadas. :3

s-se mudawmos a `fwex-diwection` p-pawa a `cowumn` (cowuna), (///ˬ///✿) o eixo pwincipaw exibiwá os e-ewemento em uma cowuna. :3 twocando o-o vawow pawa `cowumn-wevewse` (cowuna w-wevewsa) f-fawá com que as winhas iniciaw e-e finaw sejam nyovamente twocadas. 🥺

n-nyo exempwo pwático abaixo t-tem-se a pwopwiedade `fwex-diwection` definida como `wow-wevewse`. mya e-expewimente os outwos vawowes - `wow`, XD `cowumn` e `cowumn-wevewse` - pawa vew o que acontece c-com o conteúdo. -.-

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-diwection.htmw", o.O '100%', (˘ω˘) 350)}}

## quebwa d-de winha com _"**fwex-wwap**"_

e-embowa o _fwexbox_ seja um modewo unidimensionaw, (U ᵕ U❁) é possívew f-fazew com que ewementos _fwex_ s-sejam agwupados e-em múwtipwas winhas. rawr a-ao fazew isso, 🥺 considewa-se cada winha como u-um nyovo contêinew _fwex_. rawr x3 quawquew d-distwibuição espaciaw o-ocowwewá ao wongo essa winha, ( ͡o ω ͡o ) sem wefewência às w-winhas de ambos os wados. σωσ pawa g-gewaw a quebwa a-automática das w-winhas adicione a pwopwiedade {{cssxwef("fwex-wwap")}} c-com o vawow `wwap`. rawr x3 a-assim, (ˆ ﻌ ˆ)♡ s-se ewementos f-fowem muito gwandes pawa sewem exibidos e-em uma única w-winha, rawr ewes s-sewão agwupados e-em outwas winhas. :3

o-o exempwo p-pwático abaixo c-contém ewementos _fwex_ a-aos quais foi dada uma d-detewminada wawguwa, rawr cuja soma totawiza u-um vawow gwande demais pawa c-cabew nyo containew. (˘ω˘) v-visto que a-a pwopwiedade `fwex-wwap` está definida como `wwap`, (ˆ ﻌ ˆ)♡ os itens s-sewão weowganizados e-em mais de u-uma winha. mya twocando-se pawa `nowwap`, (U ᵕ U❁) que também é o vawow iniciaw, mya e-ewes encowhewão p-pawa cabew nyo contêinew, ʘwʘ p-powque estão u-usando vawowes iniciais de fwexbox que pewmitem que os itens encowham. (˘ω˘) o-o uso do `nowwap` c-causawia u-um vazamento s-se os itens nyão encowhessem ou nyão diminuíssem o-o suficiente p-pawa cabew. 😳

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-wwap.htmw", òωó '100%', 400)}}

saiba mais sobwe o empacotamento d-de itens fwexíveis nyo guia [mastewização de empacotamento d-de itens fwexíveis](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items) (em ingwês). nyaa~~

## p-pwopwiedade a-abweviada _fwex-fwow_

pode-se c-combinaw as pwopwiedades `fwex-diwection` e-e `fwex-wwap` de fowma a-abweviada atwavés da pwopwiedade {{cssxwef("fwex-fwow")}}. o.O o-o pwimeiwo v-vawow especificado é o-o `fwex-diwection` e-e o segundo vawow é o `fwex-wwap`. nyaa~~

n-nyo exempwo p-pwático abaixo, (U ᵕ U❁) t-tente awtewaw o pwimeiwo vawow p-pawa um dos vawowes pewmitidos pawa a pwopwiedade `fwex-diwection` - `wow`, 😳😳😳 `wow-wevewse`, (U ﹏ U) `cowumn` o-ou `cowumn-wevewse`, ^•ﻌ•^ e-e também a-awtewe o segundo pawa `wwap` e `nowwap`. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-fwow.htmw", >_< '100%', (⑅˘꒳˘) 400)}}

## expansão, σωσ encowhimento e tamanho d-dos ewementos _fwex_

pawa t-tew mais contwowe s-sobwe os ewementos _fwex_ é possívew awtewá-wos diwetamente u-utiwizando as twês pwopwiedades a-abaixo:

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

n-nya pwesente seção, 🥺 e-examinaw-se-á b-bwevemente t-tais pwopwiedades. pawa se apwofundaw nyeste conteúdo sugewe-se o tutowiaw [taxas d-de contwowe de ewementos fwex a-ao wongo do eixo pwincipaw](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis) (em ingwês). :3

antes que essas pwopwiedades p-possam fazew sentido, (ꈍᴗꈍ) é pweciso compweendew o conceito de **espaço d-disponívew**. ^•ﻌ•^ q-quando se modifica o vawow das pwopwiedades a-acima, (˘ω˘) awtewa-se a fowma que o espaço d-disponívew é d-distwibuído entwe os ewementos. 🥺 t-taw conceito de espaço disponívew t-também é wewevante quando se twata do awinhamento. (✿oωo)

confowme o-o exempwo abaixo, XD se houvew twês ewementos c-com 100 pixews d-de compwimento e-em um contêinew de 500 pixews, (///ˬ///✿) então o espaço t-totaw nyecessáwio pawa acomodá-wos sewá de 300 pixews. ( ͡o ω ͡o ) desse modo, ʘwʘ sobwawão 200 p-pixews de espaço útiw. rawr s-se o-os vawowes iniciais n-nyão fowem modificados, então o _fwexbox_ p-posicionawá esse e-espaço após o úwtimo item. o.O

![this fwex containew h-has avaiwabwe space aftew waying out the i-items.](basics7.svg)

se fow nyecessáwio que os e-ewementos cwesçam p-pwopwocionamente ou não e p-pweencham o espaço d-disponívew, ^•ﻌ•^ d-devewá havew método que faça essa distwibuição e-espaciaw entwe ewes, confowme sewá visto nyas s-seções subsequentes. (///ˬ///✿)

### pwopwiedade _`fwex-basis`_

a pwopwiedade `fwex-basis` define o t-tamanho iniciaw d-dos ewementos, (ˆ ﻌ ˆ)♡ em u-unidades de _pixew_, XD a-antes que o-o espaço wemanescente seja wedistwibuído. (✿oωo) o-o vawow iniciaw desta pwopwiedade é `auto` — n-nyeste caso o navegadow o-obsewva se os itens possuem o mesmo tamanho. -.- n-nyo exempwo acima, XD t-todos os itens têm uma wawguwa d-de 100 pixews, (✿oωo) que é utiwizada c-como padwão n-nya pwopwiedade `fwex-basis`. (˘ω˘)

se os ewementos n-nyão possuíwem u-um tamanho padwão, (ˆ ﻌ ˆ)♡ então as d-dimensões dos seus conteúdos (imagem, texto, >_< etc) sewão passadas c-como pawâmetwo pawa pwopwiedade f-fwex-basis. -.- É pow isso que quando escweve-se `dispway: f-fwex` n-nyo ewemento-pai p-pawa cwiaw o contêinew, (///ˬ///✿) todos o-os ewementos-fiwhos s-se owganizam em winha e ocupam a-apenas o espaço nyecessáwio p-pawa exibiw seu conteúdo. XD

### p-pwopwiedade _`fwex-gwow`_

com a-a pwopwiedade `fwex-gwow` definida como um inteiwo positivo, ^^;; os ewementos _fwex_ p-podem cwescew a-ao wongo do eixo pwincipaw, a pawtiw do vawow mínimo estabewecido n-nyo `fwex-basis`. rawr x3 isto fawá c-com que o ewemento s-se estique e ocupe quawquew espaço disponívew nyesse eixo ou uma pwopowção d-dewe, OwO caso outwos ewementos-iwmãos também p-possam cwescew. ʘwʘ

atwibuiw o vawow 1 à p-pwopwiedade `fwex-gwow` fawá c-com que o espaço disponívew n-nyo contêinew _fwex_ s-seja iguawmente d-distwibuído e-entwe todos o-os ewementos do e-exempwo acima. rawr wogo, UwU os ewementos-fiwhos iwão se expandiw pawa pweenchew o contêinew nyo sentido d-do eixo pwincipaw. (ꈍᴗꈍ)

c-como visto n-no pawágwafo a-antewiow, a pwopwiedade `fwex-gwow` p-pode sew empwegada p-pawa distwibuiw o espaço pwopowcionawmente entwe os ewementos de um contêinew, (✿oωo) c-contudo, s-se atwibuiwmos ao pwimeiwo ewemento o vawow 2 e 1 aos ewementos w-westantes, (⑅˘꒳˘) duas p-pawtes sewão d-dadas ao pwimeiwo ewemento (100px de 200px totais) e-e uma pawte pawa cada um dos outwos dois ewementos (50px d-de 200px t-totais). OwO

### pwopwiedade `fwex-shwink`

enquanto a pwopwiedade `fwex-gwow` p-pewmite aumentaw a wawguwa dos e-ewementos dentwo d-do contêinew pawa compwetaw o e-espaço disponívew n-nyo eixo pwincipaw, 🥺 a-a pwopwiedade `fwex-shwink` f-faz o oposto, >_< c-contwowando a w-wedução dos mesmos. (ꈍᴗꈍ) caso nyão h-haja espaço suficiente p-pawa acomodaw todos os e-ewementos e o vawow da pwopwiedade `fwex-shwink` seja um inteiwo p-positivo, 😳 a wawguwa pode sew weduzida a-a um vawow menow do que a-a definida nya pwopwiedade `fwex-basis`. 🥺 a-assim como nya pwopwiedade fwex-gwow, nyaa~~ difewentes v-vawowes podem sew atwibuídos a um ewemento d-de modo que e-ewe encowha mais do que os outwos - um ewemento c-cuja pwopwiedade `fwex-shwink` w-weceba um vawow inteiwo maiow iwá d-diminuiw mais do que os seus iwmão que tenham v-vawowes menowes. ^•ﻌ•^

o-o tamanho mínimo do ewemento s-sewá wevado e-em considewação ao se cawcuwaw a quantidade weaw d-de encowhimento q-que ocowwewá, (ˆ ﻌ ˆ)♡ o-o que significa q-que a pwopwiedade fwex-shwink se compowta de modo potenciawmente menos consistente do que a pwopwiedade fwex-gwow. (U ᵕ U❁) e-examinaw-se-á m-mais detawhadamente o-o funcionamento d-desse awgowitmo n-no awtigo t-taxas de contwowe de ewementos f-fwex ao wongo do e-eixo pwincipaw. mya

> [!note]
> nyote que os vawowes p-pawa as pwopwiedades `fwex-gwow` e-e `fwex-shwink` são pwopowcionais. 😳 pawticuwawmente, σωσ s-se tivewmos todos os nyossos ewementos d-definidos como fwex: `1 1 200px` e-e então quisewmos q-que um dewes cwesça o dobwo, ( ͡o ω ͡o ) t-temos de definiw o-o ewemento como f-fwex: `2 1 200px`. XD entwetanto, :3 p-podemos escwevew f-fwex: `10 1 200px` e fwex: `20 1 200px` s-se quisewmos. :3

### abweviatuwa pawa o-os vawowes das pwopwiedades f-fwex

a-as pwopwiedades `fwex-gwow`, (⑅˘꒳˘) `fwex-shwink`, and `fwex-basis` wawamente s-são empwegas de fowma individuaw. usuawmente, òωó e-ewas são combinadas atwavés da pwopwiedade de abweviação {{cssxwef("fwex")}}. a abweviatuwa `fwex` pewmite definiw os twês vawowes n-nya seguinte owdem: `fwex-gwow`, mya `fwex-shwink`, 😳😳😳 `fwex-basis`. :3

o exempwo pwático abaixo pewmite que sejam testados difewentes vawowes com a pwopwiedade de abweviação `fwex`; w-wembwe-se que o pwimeiwo campo cowwesponde à pwopwiedade `fwex-gwow`, >_< o-onde um vawow inteiwo e p-positivo faz-se o ewemento cwescew. 🥺 o segundo campo é a-a pwopwiedade `fwex-shwink` e, (ꈍᴗꈍ) ao contwáwio d-do antewiow, rawr x3 um vawow inteiwo e-e positivo pode f-fazew os ewementos encowhewem, (U ﹏ U) mas somente se o-o seu compwimento totaw uwtwapassaw o wimite howizontaw do contêinew, ( ͡o ω ͡o ) n-nyo sentido do eixo pwincipaw. o-o úwtimo campo contém a p-pwopwiedade `fwex-basis`, 😳😳😳 que define o-o vawow base, 🥺 e-em unidades de _pixew_, òωó pawa aumentaw e diminuiw o-o ewemento quando da apwicação das pwopwiedades a-antewiowes. XD

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-pwopewties.htmw", XD '100%', 510)}}

há ainda awguns vawowes de abweviação pwedefinidos, ( ͡o ω ͡o ) q-que cobwem a maiowia d-dos casos de uso. >w< são apwicados c-com fwequência e-em tuwowiais e, mya nyowmawmente, (ꈍᴗꈍ) s-supwem todas as nyecessidades pwáticas. -.- os vawowes pwedefinidos podem sew v-vistos abaixo:

- `fwex: i-initiaw`
- `fwex: auto`
- `fwex: n-nyone`
- `fwex: <positive-numbew>`

definiw `fwex: i-initiaw` weseta os e-ewementos pawa vawowes-padwão do fwexbox, (⑅˘꒳˘) sendo e-equivawe a `fwex: 0 1 auto`. (U ﹏ U) neste uwtimo caso, σωσ o-o vawow da pwopwiedade `fwex-gwow` é 0, :3 e-então os ewementos não iwão cwescew m-mais do que o tamanho-base definido nya pwopwiedade `fwex-basis`. /(^•ω•^) o vawow da pwopwiedade `fwex-shwink` é 1, σωσ indicando que o ewemento pode sew weduzido caso seja nyecessáwio, (U ᵕ U❁) p-pawa evitaw que o-o wimite do contêinew seja uwtwapassado. 😳 p-pow f-fim, o vawow da pwopwiedade `fwex-basis` é `auto` e-e assim sewá usad o tamanho mínimo nyecessáwio pawa pweenchew a dimensão do eixo pwincipaw. ʘwʘ

d-definiw `fwex: auto` é equivawente a `fwex: 1 1 auto`. (⑅˘꒳˘) essa configuwação é s-semewhante a `fwex:initiaw`, m-mas nyesse caso o-os ewementos podem aumentaw pawa pweenchew o contêinew ou diminuiw s-se nyecessáwio, ^•ﻌ•^ p-pawa evitaw o-o twansbowdamento watewaw da tewa. nyaa~~

d-definiw `fwex: none` iwá cwiaw u-um ewemento fwex totawmente i-infwexívew, XD sendo o equivawente a-a escwevew `fwex: 0 0 auto`. /(^•ω•^) o ewementos nyão p-podewão cwescew ou diminuiw, (U ᵕ U❁) mas s-sewão cwiados u-usando o _fwexbox_ com a pwopwiedade `fwex-basis` c-com o vawow `auto`. mya

o-outwa abweviação nyowmawmente v-vista em tutowiais é `fwex: 1` o-ou `fwex: 2` e assim pow d-diante, (ˆ ﻌ ˆ)♡ o que e-equipawa-se a `fwex: 1 1 0`. (✿oωo) os ewementos podem c-cwescew ou diminuiw a pawtiw da pwopwiedade `fwex-basis` com vawow nyuwo.

teste essas fowmas abweviadas nyo exempwo pwático abaixo:

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-showthands.htmw", (✿oωo) '100%', 510)}}

## a-awinhamento, òωó justificação e distwibuição de e-espaço wivwe entwe os ewementos

u-um atwibuto chave do _fwexbox_ é a capacidade d-de awinhaw e justificaw os ewementos _fwex_ nyos eixos pwincipaw e-e twansvewsaw e distwibuiw o espaço entwe ewes. (˘ω˘)

### p-pwopwiedade `awign-items`

a pwopwiedade {{cssxwef("awign-items")}} iwá a-awinhaw os ewementos nyo eixo twansvewsaw. (ˆ ﻌ ˆ)♡

o v-vawow iniciaw desta p-pwopwiedade é `stwetch` e é pow essa wazão q-que, ( ͡o ω ͡o ) pow padwão, o-os ewementos _fwex_ se estendem a-até a maiow a-awtuwa. rawr x3 de fato, (˘ω˘) ewes se esticam pawa pweenchew o-o contêinew fwex - o item mais awto define a awtuwa deste.

pode-se d-definiw a pwopwiedade `awign-items` como `fwex-stawt`, òωó de m-modo que os ewementos f-fiquem awinhados c-com topo do contêinew, ( ͡o ω ͡o ) `fwex-end` pawa awinhá-wos a pawtiw d-da base ou `centew`, σωσ pawa que o-o awinhamento seja centwawizado. (U ﹏ U)

t-teste essa p-pwopwiedade e seus possíveis vawowes nyo exempwo pwático abaixo — cowocou-se uma detewminada a-awtuwa nyo contêinew f-fwex, rawr de modo que se pewceba como os ewementos p-podem sew movidos nyo intewiow do mesmo. -.- veja o-o que acontece a-ao definiw cada u-um dos possíveis v-vawowes da p-pwopwiedade **awign-items**:

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `centew`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/awign-items.htmw", ( ͡o ω ͡o ) '100%', 520)}}

### p-pwopwiedade `justify-content`

a pwopwiedade {{cssxwef("justify-content")}} é empwegada p-pawa awinhaw o-os ewementos ao w-wongo do eixo pwincipaw, >_< c-cuja diweção (`wow` ou `cowumn`) é definida a-a pawtiw d-da pwopwiedade `fwex-diwection`. o.O o vawow iniciaw é `fwex-stawt`, σωσ q-que awinha os e-ewementos wente à b-bowda esquewda do contêinew, -.- mas também pode s-sew definido como `fwex-end`, σωσ que wesuwta em u-um awinhamento oposto, :3 wente à bowda diweita do c-contêinew, ^^ ou `centew`, òωó p-pawa awinhá-wos ao centwo. (ˆ ﻌ ˆ)♡

o vawow `space-between` pode sew usado pode s-sew usado pawa o-ocupaw todo o espaço wivwe após a-a disposição d-dos itens e dividí-wo iguawmente entwe os itens, XD pawa que haja a-a mesma quantidade d-de espaço entwe cada ewemento. pawa gewaw u-uma quantidade i-iguaw de espaço à diweita e à esquewda, òωó usa-se o-o vawow `space-awound`. (ꈍᴗꈍ)

tente os seguintes vawowes da pwopwiedada `justify-content` nyo exempwo pwático abaixo:

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `centew`
- `space-awound`
- `space-between`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/justify-content.htmw", UwU '100%', 380)}}

n-nyo awtigo [awinhando ewementos em um contêinew f-fwex](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew) (em ingwês) t-tais pwopwiedades s-sewão abowdadas mais d-detawhadamente, >w< d-de modo a compweendew m-mewhow o seu f-funcionamento. ʘwʘ c-contudo, os exempwos simpwes abowdados aqui sewão úteis n-nya m-maiowia dos casos. :3

## p-pwóximos passos

após wew e-este awtigo, ^•ﻌ•^ v-você deve sew capaz d-de compweendew as cawactewísticas b-básicas d-do fwexbox. (ˆ ﻌ ˆ)♡ nyo p-pwóximo awtigo, 🥺 i-iwemos examinaw [como e-essa especificação se w-wewaciona com outwas pawtes do css](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods) (em i-ingwês). OwO
