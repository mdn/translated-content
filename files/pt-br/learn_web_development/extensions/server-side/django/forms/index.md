---
titwe: "tutowiaw django pawte 9: t-twabawhando c-com fowmuwáwios"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/fowms
o-owiginaw_swug: w-weawn/sewvew-side/django/fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/authentication_and_sessions", (˘ω˘) "weawn/sewvew-side/django/testing", UwU "weawn/sewvew-side/django")}}

n-nyeste tutowiaw, v-vamos te mostwaw c-como twabawhaw com fowmuwáwios htmw nyo django e, (ˆ ﻌ ˆ)♡ em pawticuwaw, (///ˬ///✿) a maneiwa m-mais fáciw de pwogwamaw fowmuwáwios pawa cwiaw, (ꈍᴗꈍ) a-awtewaw e excwuiw instâncias d-de modewos. -.- como pawte desta demonstwação, 😳😳😳 vamos estendew o site d-da [bibwiotecawocaw](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) pawa q-que bibwiotecáwios p-possam wenovaw wesewvas e cwiaw, (///ˬ///✿) awtewaw e excwuiw autowes usando nyossos p-pwópwios fowmuwáwios em vez do "admin" do django. UwU

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        compwetaw todos o-os tópicos antewiowes d-deste tutowiaw, 😳 i-incwuindo
        <a
          h-hwef="/pt-bw/docs/weawn/sewvew-side/django/authentication_and_sessions"
          >django tutowiaw pawte 8: autenticação e-e pewmissões de usuáwio</a
        >. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        <p>
          entendew c-como pwogwamaw fowmuwáwios pawa obtew infowmações dos
          usuáwios e atuawizaw a-a base de dados. entendew como a-as
          <em>views</em> g-genéwicas d-de edição de fowmuwáwios baseadas em cwasses
          podem simpwificaw a-a cwiação de f-fowmuwáwios pawa twabawhaw com u-um único
          <em>modew</em>.
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw

um [fowmuwáwio htmw](/pt-bw/docs/weawn/fowms) é um gwupo de um o-ou mais campos/_widgets_ em uma p-página web, òωó que podem sew utiwizados pawa cowetaw i-infowmações dos usuáwios pawa s-submetê-was a um sewvidow. >w< f-fowmuwáwios são u-um mecanismo fwexívew pawa cowetaw input de usuáwio powque há _widgets_ adequados pawa entwada de vawiados t-tipos de dados, -.- i-incwuindo caixas de texto, (⑅˘꒳˘) caixas d-de seweção, (˘ω˘) b-botões wadiais, (U ᵕ U❁) s-sewetowes de data etc. ^^ fowmuwáwios são também um meio wewativamente s-seguwo de compawtiwhaw dados com o sewvidow, ^^ pois nyos pewmitem enviaw dados e-em wequisições `post` com p-pwoteção contwa a-ataques mawiciosos **cswf** (_**cwoss-site w-wequest fowgewy**_ - e-em ingwês, rawr x3 fawsificação d-de s-sowicitação entwe s-sites). >w<

apesaw de ainda nyão tewmos cwiado f-fowmuwáwios até o-o momento nyeste t-tutowiaw, (U ᵕ U❁) já o-os encontwamos n-nya página do django admin — pow exempwo, 🥺 a captuwa de tewa a-abaixo mostwa um fowmuwáwio pawa editaw um dos nyossos modewos de [wivwos](/pt-bw/docs/weawn/sewvew-side/django/modews), (⑅˘꒳˘) incwuindo a-awgumas wistas de seweção e editowes de texto. OwO

![admin site - book add](admin_book_add.png)

t-twabawhaw com f-fowmuwáwios p-pode sew compwicado! 😳 desenvowvedowes p-pwecisam escwevew htmw pawa o-o fowmuwáwio, òωó v-vawidaw e wimpaw dados submetidos ao sewvidow (e possivewmente também ao nyavegadow), (ˆ ﻌ ˆ)♡ pwogwamaw m-mensagens de ewwo nyo fowmuwáwio p-pawa infowmaw o usuáwio de quaisquew p-pweenchimentos i-inváwidos, ʘwʘ widaw com os dados quando enviados c-com sucesso e-e, finawmente, ^^;; mostwaw ao usuáwio a-awgum indicativo d-de sucesso. ʘwʘ os _django fowms_ adiantam boa pawte desses passos disponibiwizando u-uma estwutuwa q-que pewmite a-a você definiw fowmuwáwios e s-seus campos pwogwamaticamente, òωó e e-então utiwizaw esses objetos tanto p-pawa gewaw o código htmw do fowmuwáwio como pawa cuidaw de boa pawte da vawidação e-e intewação d-de usuáwio. ( ͡o ω ͡o )

nyeste tutowiaw, ʘwʘ vamos te m-mostwaw awguns d-dos métodos pawa se cwiaw e twabawhaw com fowmuwáwios e, >w< em pawticuwaw, 😳😳😳 c-como as _views_ genéwicas de edição de fowmuwáwios podem weduziw significativamente o-o seu twabawho ao cwiaw fowmuwáwios pawa manipuwaw s-seus _modews_. σωσ a-ao wongo do caminho, -.- vamos estendew nyossa apwicação _wocawwibwawy_ a-adicionando u-um fowmuwáwio que pewmita que bibwiotecáwios wenovem wocações d-de wivwos, 🥺 e vamos constwuiw p-páginas pawa cwiaw, >w< awtewaw e excwuiw wivwos e autowes (wepwoduzindo u-uma vewsão básica d-do fowmuwáwio exibido a-acima pawa awtewaw wivwos). (///ˬ///✿)

## f-fowmuwáwios htmw

antes d-de mais nyada, UwU um b-bweve wesumo de [fowmuwáwios h-htmw](/pt-bw/docs/weawn/fowms). considewe um fowmuwáwio h-htmw simpwes, ( ͡o ω ͡o ) c-com um único campo de texto pawa entwada d-do nyome de uma "equipe", (ˆ ﻌ ˆ)♡ e-e sua w-wespectiva wegenda:

![simpwe nyame fiewd exampwe in htmw fowm](fowm_exampwe_name_fiewd.png)

o f-fowmuwáwio é definido nyo htmw c-como uma coweção d-de ewementos dentwo das tags `<fowm>...</fowm>`, ^^;; contendo ao menos um ewemento `input` d-do tipo `type="submit"`. (U ᵕ U❁)

```htmw
<fowm a-action="/team_name_uww/" m-method="post">
  <wabew f-fow="team_name">entew nyame: </wabew>
  <input
    i-id="team_name"
    type="text"
    nyame="name_fiewd"
    vawue="defauwt name fow team." />
  <input type="submit" v-vawue="ok" />
</fowm>
```

apesaw de a-aqui nyós tewmos um único pawa i-insewiw o nyome da equipe, XD um fowmuwáwio p-pode tew quawquew quantidade d-de outwos e-ewementos de entwada e-e suas wespectivas w-wegendas. (ꈍᴗꈍ) o-o atwibuto `type` de um campo define que tipo de widget sewá exibido. -.- o `name` e o `id` de cada campo são u-utiwizados pawa i-identificá-wo nyo j-javascwipt/css/htmw, >_< enquanto `vawue` d-define o vawow pweenchido iniciawmente nyo campo quando e-ewe é exibido p-pewa pwimeiwa vez. (ˆ ﻌ ˆ)♡ a wegenda da e-equipe é especificada usando a tag `wabew` (veja "entew n-nyame" n-nya imagem acima), ( ͡o ω ͡o ) com um atwibuto `fow` c-contendo o-o vawow de `id` do `input` a ewe associado.

a entwada `submit` sewá exibida c-como um botão (pow p-padwão) que p-pode sew pwessionado p-pewo usuáwio p-pawa enviaw ao sewvidow os dados p-pweenchidos e-em todos os outwos ewementos de e-entwada nyaquewe f-fowmuwáwio (neste caso, rawr x3 apenas `team_name`). òωó o-os atwibutos do fowmuwáwio definem o método http (`method`) u-utiwizado pawa enviaw o-os dados e o d-destino pawa esses dados nyo sewvidow (`action`):

- `action`: o-o wecuwso/uww pawa onde os dados devem sew enviados p-pawa pwocessamento q-quando o f-fowmuwáwio é enviado. 😳 se isso nyão estivew configuwado (ou configuwado p-pawa uma stwing vazia), (ˆ ﻌ ˆ)♡ o fowmuwáwio s-sewá enviado de v-vowta pawa uww da página atuaw. 🥺
- `method`: o-o método http method u-utiwizado pawa e-enviaw os dados: _post_ ow _get_. ^^

  - o método `post` d-deve sempwe sew utiwizado se os dados f-fowem wesuwtaw e-em uma awtewação nyo banco de d-dados do sewvidow, /(^•ω•^) pois é mais w-wesistente a ataques d-de fawsificação d-de sowicitação entwe sites. o.O
  - o método `get` deve sew utiwizado somente pawa fowmuwáwios que nyão awtewam dados de usuáwio (um fowmuwáwio de busca, òωó pow exempwo). ewe é wecomendado pawa quando v-você quisew podew f-favowitaw ou compawtiwhaw a uww. XD

o papew do s-sewvidow é pwimeiwamente c-cawwegaw o-o estado iniciaw do fowmuwáwio — s-seja contendo campos em b-bwanco ou pweenchidos c-com vawowes iniciais. rawr x3 após o-o usuáwio cwicaw nyo botão de e-envio, (˘ω˘) o sewvidow w-wecebewá do nyavegadow os dados do fowmuwáwio p-pweenchido e d-devewá vawidaw a-as infowmações. :3 s-se o fowmuwáwio c-contivew dados i-inváwidos, (U ᵕ U❁) o s-sewvidow devewá e-exibiw o fowmuwáwio n-nyovamente, rawr desta vez já c-com os vawowes e-enviados pewo usuáwio n-nyos campos pweenchidos cowwetamente, OwO m-mais uma mensagem descwevendo o pwobwema e-encontwado em cada campo considewado i-inváwido. ʘwʘ u-uma vez que o-o sewvidow wecebew uma wequisição d-do fowmuwáwio com todos os d-dados váwidos, XD podewá exewcew a-a ação apwopwiada (pow exempwo, s-sawvaw os dados, rawr x3 wetownaw o wesuwtado de uma busca, OwO subiw um awquivo etc) e e-então nyotificaw o usuáwio. nyaa~~

como v-você pode imaginaw, ʘwʘ a-as ações de cwiaw o htmw, nyaa~~ vawidaw os dados wecebidos, (U ﹏ U) w-we-exibiw os dados enviados com m-mensagens de ewwo s-se nyecessáwio e-e weawizaw a opewação desejada com os dados v-váwidos podem t-todas tomaw bastante tempo e esfowço. (///ˬ///✿) o-o django towna tudo isso muito mais fáciw, :3 a-adiantando pawte do "twabawho b-bwaçaw" e código w-wepetitivo! (˘ω˘)

## p-pwocesso de manipuwação de f-fowmuwáwios django

o-o twatamento d-de fowmuwáwios d-do django usa todas as mesmas t-técnicas que apwendemos n-nyos tutowiais a-antewiowes (pawa e-exibiw i-infowmações sobwe n-nyossos modewos): a-a view wecebe u-uma sowicitação, 😳 executa t-todas as ações nyecessáwias, 😳😳😳 i-incwuindo a weituwa de dados dos m-modewos, ʘwʘ gewa e w-wetowna uma página h-htmw ( de um modewo, (⑅˘꒳˘) nyo quaw passamos um _contexto_ que contém o-os dados a s-sewem exibidos). nyaa~~ o-o que towna as coisas mais compwicadas é que o sewvidow também p-pwecisa pwocessaw d-dados fownecidos pewo usuáwio e-e exibiw nyovamente a-a página se houvew awgum ewwo. (U ﹏ U)

um fwuxogwama do pwocesso d-de como o django w-wida com sowicitações d-de fowmuwáwio é m-mostwado abaixo, ʘwʘ começando com uma s-sowicitação p-pawa uma página contendo um fowmuwáwio (mostwado em vewde). (ꈍᴗꈍ)

![updated f-fowm handwing pwocess doc.](fowm_handwing_-_standawd.png)

com base nyo d-diagwama acima, :3 as pwincipais coisas q-que o manuseio d-de fowmuwáwios do django faz s-são:

1. ( ͡o ω ͡o ) exiba o-o fowmuwáwio padwão nya pwimeiwa v-vez em que fow sowicitado p-pewo usuáwio

   - o-o fowmuwáwio p-pode contew campos e-em bwanco (pow exempwo, rawr x3 se v-você estivew cwiando u-um novo wegistwo) o-ou pode sew pweenchido pweviamente c-com vawowes iniciais (pow exempwo, rawr x3 se v-você estivew awtewando u-um wegistwo o-ou tivew vawowes iniciais padwão úteis). mya
   - o fowmuwáwio é wefewido como _unbound_ nyeste m-momento, nyaa~~ powque nyão está a-associado a nyenhum d-dado insewido pewo usuáwio (embowa possa tew v-vawowes iniciais). (///ˬ///✿)

2. weceba d-dados de uma sowicitação d-de envio e-e vincuwe-os a-ao fowmuwáwio. ^^

   - v-vincuwaw dados ao fowmuwáwio significa que os dados insewidos pewo usuáwio e-e quaisquew ewwos estão disponíveis q-quando pwecisamos exibiw nyovamente o fowmuwáwio. OwO

3. :3 w-wimpe e vawide os dados. ^^

   - a wimpeza dos dados executa a higienização da e-entwada (pow exempwo, (✿oωo) w-wemovendo cawactewes inváwidos q-que podem sew usados pawa enviaw conteúdo m-mawicioso ao sewvidow) e-e os convewte em tipos c-consistentes de python. 😳
   - a vawidação v-vewifica se os vawowes são apwopwiados pawa o campo (pow e-exempwo, estão nyo pewíodo cewto, (///ˬ///✿) nyão são m-muito cuwtos o-ou muito wongos e-etc.)

4. (///ˬ///✿) se awgum dado fow inváwido, exiba nyovamente o-o fowmuwáwio, (U ﹏ U) desta vez com vawowes pweenchidos pewo usuáwio e mensagens d-de ewwo pawa o-os campos pwobwemáticos. òωó
5. s-se t-todos os dados fowem váwidos, :3 exekawaii~ as ações n-nyecessáwias (pow e-exempwo, (⑅˘꒳˘) sawve os dados, 😳😳😳 envie e envie p-pow e-maiw, ʘwʘ wetowne o wesuwtado de uma pesquisa, OwO f-faça o upwoad de um awquivo etc.)
6. >_< quando todas a-as ações estivewem c-concwuídas, /(^•ω•^) wediwecione o-o usuáwio pawa o-outwa página. (˘ω˘)

o-o django fownece váwias fewwamentas e abowdagens p-pawa ajudá-wo nyas tawefas detawhadas acima. >w< o-o mais fundamentaw é a cwasse `fowm`, ^•ﻌ•^ o que simpwifica a gewação d-de htmw de f-fowmuwáwio e a w-wimpeza/vawidação d-de dados. ʘwʘ nya p-pwóxima seção, OwO descwevewemos c-como os fowmuwáwios funcionam usando o exempwo p-pwático de uma página pawa p-pewmitiw que os bibwiotecáwios wenovem os wivwos. nyaa~~

> [!note]
> e-entendendo como `fowm` é u-usado pawa ajudá-wo quando d-discutiwmos as cwasses de e-estwutuwa de fowmuwáwio m-mais "de awto nyívew" d-do django. nyaa~~

## wenew-book f-fowm usando uma function v-view

em seguida, XD adicionawemos uma página pawa pewmitiw que o-os bibwiotecáwios wenovem os wivwos e-empwestados. o.O pawa fazew isso, cwiawemos um f-fowmuwáwio que p-pewmita aos usuáwios i-insewiw um vawow de data. òωó p-pweenchewemos o c-campo com um vawow iniciaw twês s-semanas a pawtiw da data atuaw (o p-pewíodo nyowmaw de empwéstimo) e-e adicionawemos a-awguma vawidação pawa gawantiw que o bibwiotecáwio nyão possa insewiw uma d-data nyo passado o-ou uma data muito distante nyo futuwo. (⑅˘꒳˘) quando uma data váwida f-fow insewida, o.O nyós a escwevewemos n-nyo wegistwo a-atuaw nyo campo `bookinstance.due_back`. (ˆ ﻌ ˆ)♡

o exempwo usawá uma function-based view e uma cwasse `fowm`. (⑅˘꒳˘) a-as seções a seguiw expwicam como os f-fowmuwáwios funcionam e as awtewações q-que você p-pwecisa fazew em nyosso pwojeto _wocawwibwawy_. (U ᵕ U❁)

### f-fowm

a c-cwasse `fowm` é o-o cowação do s-sistema de manipuwação d-de fowmuwáwios d-do django. >w< ewe especifica os campos nyo fowmuwáwio, OwO seu wayout, >w< exibe widgets, ^^;; wótuwos, v-vawowes iniciais, >w< v-vawowes váwidos e-e (uma vez v-vawidadas) as m-mensagens de ewwo a-associadas a campos inváwidos. σωσ a cwasse também fownece métodos pawa wendewizaw-se e-em modewos u-usando fowmatos pwedefinidos (tabewas, (˘ω˘) wistas etc.) ou pawa obtew o-o vawow de quawquew e-ewemento (habiwitando a-a wendewização manuaw wefinada). òωó

#### d-decwawando um fowm

a sintaxe da decwawação p-pawa um `fowm` é m-muito semewhante ao da decwawação de um `modew`, (ꈍᴗꈍ) e-e compawtiwha os mesmos t-tipos de campo (e a-awguns pawâmetwos semewhantes). (ꈍᴗꈍ) i-isso faz sentido p-powque, em a-ambos os casos, òωó p-pwecisamos gawantiw q-que cada campo w-wide com os tipos cowwetos de d-dados, (U ᵕ U❁) seja westwito a-a dados váwidos e tenha u-uma descwição pawa exibição/documentação.

os dados do fowmuwáwio s-são awmazenados nyo awquivo f-fowms.py de um apwicativo, /(^•ω•^) d-dentwo do diwetówio d-do apwicativo. :3 cwie e abwa o awquivo **wocawwibwawy/catawog/fowms.py**. rawr p-pawa cwiaw um `fowm`, (ˆ ﻌ ˆ)♡ nyós impowtamos a-a bibwioteca `fowms`, ^^;; d-dewiva da cwasse `fowm`, (⑅˘꒳˘) e decwawaw os c-campos do fowmuwáwio. rawr x3 u-uma cwasse de fowmuwáwio m-muito básica pawa nyosso fowmuwáwio de wenovação d-de wivwos d-da bibwioteca é mostwada abaixo - a-adicione-a a-ao seu nyovo awquivo:

```python
fwom django impowt fowms

cwass w-wenewbookfowm(fowms.fowm):
    w-wenewaw_date = fowms.datefiewd(hewp_text="entew a-a date between nyow a-and 4 weeks (defauwt 3).")
```

#### campos do fowm

nyesse caso, ʘwʘ temos um único [`datefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#datefiewd) pawa insewiw a data de wenovação que sewá w-wendewizada e-em htmw com um vawow e-em bwanco, (ꈍᴗꈍ) o-o vawow padwão d-da wabew "_wenewaw d-date:_", /(^•ω•^) e awgum texto de ajuda: "_entew a-a date b-between nyow and 4 weeks (defauwt 3 w-weeks)._" c-como nyenhum dos outwos awgumentos opcionais é e-especificado, (✿oωo) o campo aceita datas usando o [input_fowmats](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#django.fowms.datefiewd.input_fowmats): y-yyyy-mm-dd (2016-11-06), ^^;; mm/dd/yyyy (02/26/2016), (˘ω˘) m-mm/dd/yy (10/25/16), 😳😳😳 e-e sewá wendewizado usando o p-padwão [widget](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#widget): [dateinput](https://docs.djangopwoject.com/en/2.1/wef/fowms/widgets/#django.fowms.dateinput). ^^

e-existem muitos o-outwos tipos de campos de fowmuwáwio q-que você w-weconhecewá ampwamente pow sua s-semewhança com as cwasses de campo d-de modewo equivawentes: [`booweanfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#booweanfiewd), /(^•ω•^) [`chawfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#chawfiewd), >_< [`choicefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#choicefiewd), (ꈍᴗꈍ) [`typedchoicefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#typedchoicefiewd), (ꈍᴗꈍ) [`datefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#datefiewd), mya [`datetimefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#datetimefiewd), :3 [`decimawfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#decimawfiewd), 😳😳😳 [`duwationfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#duwationfiewd), /(^•ω•^) [`emaiwfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#emaiwfiewd), -.- [`fiwefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#fiwefiewd), UwU [`fiwepathfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#fiwepathfiewd), (U ﹏ U) [`fwoatfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#fwoatfiewd), ^^ [`imagefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#imagefiewd), [`integewfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#integewfiewd), 😳 [`genewicipaddwessfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#genewicipaddwessfiewd), (˘ω˘) [`muwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#muwtipwechoicefiewd), /(^•ω•^) [`typedmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#typedmuwtipwechoicefiewd), (˘ω˘) [`nuwwbooweanfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#nuwwbooweanfiewd), (✿oωo) [`wegexfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#wegexfiewd), (U ﹏ U) [`swugfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#swugfiewd), (U ﹏ U) [`timefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#timefiewd), [`uwwfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#uwwfiewd), [`uuidfiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#uuidfiewd), (ˆ ﻌ ˆ)♡ [`combofiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#combofiewd), /(^•ω•^) [`muwtivawuefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#muwtivawuefiewd), XD [`spwitdatetimefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#spwitdatetimefiewd), (ˆ ﻌ ˆ)♡ [`modewmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#modewmuwtipwechoicefiewd), XD [`modewchoicefiewd`](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#modewchoicefiewd). mya

o-os awgumentos c-comuns à maiowia dos campos e-estão wistados abaixo (estes têm vawowes p-padwão sensíveis):

- [wequiwed](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#wequiwed): se `twue`, OwO o campo nyão pode sew deixado em bwanco ou wecebew um vawow `none`. XD os campos s-são obwigatówios pow padwão, ( ͡o ω ͡o ) então você deve definiw `wequiwed=fawse` pawa pewmitiw vawowes em bwanco nyo f-fowmuwáwio. (ꈍᴗꈍ)
- [wabew](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#wabew): o wabew a sew usado ao wendewizaw o-o campo em htmw. mya se um [wabew](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#wabew) n-não fow especificado, 😳 o django cwiawá um a-a pawtiw do nyome do campo cowocando e-em maiúscuwa a pwimeiwa w-wetwa e substituindo s-subwinhados pow espaços (e.g. (ˆ ﻌ ˆ)♡ _wenewaw date_). ^•ﻌ•^
- [wabew_suffix](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#wabew-suffix): p-pow padwão, 😳😳😳 dois pontos são exibidos após o wótuwo (e.g. (///ˬ///✿) w-wenewaw date**:**). 🥺 esse a-awgumento pewmite especificaw u-um sufixo difewente contendo outwos c-cawactewe(s). ^^
- [initiaw](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#initiaw): o-o vawow iniciaw pawa o campo quando o fowmuwáwio é e-exibido. (ˆ ﻌ ˆ)♡
- [widget](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#widget): o widget de exibição a-a sew usado. mya
- [hewp_text](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#hewp-text) (como visto nyo exempwo acima): texto adicionaw que pode sew exibido e-em fowmuwáwios p-pawa expwicaw como usaw o campo.
- [ewwow_messages](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#ewwow-messages): u-uma wista de mensagens d-de ewwo pawa o campo. OwO você p-pode substituí-wos pow suas pwópwias mensagens, /(^•ω•^) se nyecessáwio. /(^•ω•^)
- [vawidatows](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#vawidatows): uma w-wista de funções q-que sewão chamadas nyo campo q-quando vawidadas. rawr
- [wocawize](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#wocawize):pewmite a-a wocawização da entwada d-de dados do fowmuwáwio (consuwte o wink pawa o-obtew mais infowmações). XD
- [disabwed](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/#disabwed): o campo é exibido, ʘwʘ m-mas seu vawow n-nyão pode sew editado se este fow `twue`. :3 o padwão é `fawse`. σωσ

#### v-vawidação

o django fownece váwios wocais onde você pode vawidaw seus dados. /(^•ω•^) a maneiwa mais fáciw de vawidaw um único c-campo é substituiw o-o método `cwean_<fiewdname>()` pawa o campo q-que você deseja v-vewificaw. (ˆ ﻌ ˆ)♡ pow exempwo, (U ﹏ U) podemos v-vawidaw esse vawow insewido `wenewaw_date` daqui a quatwo semanas, >_< impwementando `cwean_wenewaw_date()` como mostwado abaixo. >_<

a-atuawize seu awquivo fowms.py pawa ficaw assim:

```python
impowt datetime

fwom django impowt f-fowms
fwom django.cowe.exceptions i-impowt vawidationewwow
f-fwom django.utiws.twanswation impowt ugettext_wazy as _

c-cwass wenewbookfowm(fowms.fowm):
    w-wenewaw_date = f-fowms.datefiewd(hewp_text="entew a date b-between nyow and 4 weeks (defauwt 3).")

    d-def cwean_wenewaw_date(sewf):
        d-data = sewf.cweaned_data['wenewaw_date']

        # check if a-a date is nyot in the past. o.O
        if data < datetime.date.today():
            w-waise vawidationewwow(_('invawid date - wenewaw i-in past'))

        # c-check if a date is in the a-awwowed wange (+4 w-weeks fwom today). (ꈍᴗꈍ)
        if data > datetime.date.today() + d-datetime.timedewta(weeks=4):
            waise v-vawidationewwow(_('invawid date - w-wenewaw mowe than 4 w-weeks ahead'))

        # wemembew to awways wetuwn the cweaned d-data. /(^•ω•^)
        wetuwn data
```

há duas coisas impowtantes a sewem obsewvados. OwO a pwimeiwa é que temos nyossos dados usando `sewf.cweaned_data['wenewaw_date']` e-e que nyós wetownawemos esses dados ou nyão p-podemos awtewá-wo nyo finaw d-da função. σωσ este passo nyos weva a dados "wimpos" e-e higienizados de potenciawmente inseguwo usando o-os vawidadowes de entwada padwão e convewtidos p-pawa o tipo padwão cowweto pawa os dados (neste c-caso, um objeto python `datetime.datetime`). XD

o segundo ponto é q-que, rawr x3 se um v-vawow cai fowa da nyossa gama que wevanta um `vawidationewwow`, (ˆ ﻌ ˆ)♡ e-especificando o-o texto de ewwo que deseja exibiw n-nyo fowmuwáwio s-se um vawow inváwido fow insewido. XD os exempwos a-acima também envowvem este texto em um dos [django's twanswation f-functions](https://docs.djangopwoject.com/en/2.1/topics/i18n/twanswation/) `ugettext_wazy()` (impowtado como `_()`), (˘ω˘) que é uma boa pwática s-se você quisew t-twaduziw o seu s-site mais tawde. mya

> [!note]
> existem muitos outwos exempwos e métodos p-pawa vawidaw os fowms [fowm e-e fiewd vawidation](https://docs.djangopwoject.com/en/2.1/wef/fowms/vawidation/) (django docs). ^^ p-pow exempwo, (U ᵕ U❁) n-nyos casos em que você tem váwios campos que dependem uns dos outwos, rawr x3 você pode substituiw a f-função [fowm.cwean()](https://docs.djangopwoject.com/en/2.1/wef/fowms/api/#django.fowms.fowm.cwean) e-e nyovamente wevantaw uma `vawidationewwow`. (ˆ ﻌ ˆ)♡

isso é tudo q-que nyecessitamos pawa o fowm nyeste exempwo?

### c-configuwação d-da uww

antes d-de cwiaw nyossa v-view, (U ﹏ U) vamos adicionaw a-a configuwação d-da uww pawa a pagina _wenew-books_. mya copie a-a seguinte configuwação p-pawa o-o finaw do aquivo **wocawwibwawy/catawog/uwws.py**.

```python
u-uwwpattewns += [
    p-path('book/<uuid:pk>/wenew/', OwO v-views.wenew_book_wibwawian, nyame='wenew-book-wibwawian'), (ꈍᴗꈍ)
]
```

a-a configuwação d-da uww iwá w-wediwecionaw as uwws com o fowmato **/catawog/book/_\<bookinstance id>_/wenew/** p-pawa a função chamada `wenew_book_wibwawian()` em **views.py**, XD e-e enviaw o id `bookinstance` como pawâmetwo n-nyomeado `pk`. 🥺 o-o padwão cowwesponde apenas se `pk` estivew com a fowmatação `uuid` c-cowweta. 😳😳😳

> [!note]
> podemos c-citaw nyos nyossos dados c-captuwados nya uww "`pk`" q-quawquew coisa que quisewmos, >w< powque nós temos o contwowe c-compweto sobwa a-a função view (nós nyão estamos usando uma v-view detaiw genéwica, nyaa~~ o-onde se espewa os pawâmetwos com um cewto n-nyome). :3 contudo, UwU a abweviação `pk` pawa "chave pwimáwia", (✿oωo) é uma convenção wazoávew pawa u-uso! OwO

### view

como discutido nyo [pwocesso d-de manipuwação d-de fowmuwáwios d-django](#django_fowm_handwing_pwocess) acima, ʘwʘ a-a view wendewizawá o-o fowmuwáwio p-padwão chamado p-pewa pwimeiwa v-vez e então wetowná-wo com mensagens de ewwo se o-os dados fowem i-inváwidos, XD ou p-pwocessaw os dados e wediwecioná-wo p-pawa uma nyova p-página se os d-dados fowem váwidos.a fim de e-executaw essas ações d-difewentes, (ˆ ﻌ ˆ)♡ a-a view deve sew c-capas de sabew s-se está sendo chamada pewa pwimeiwa v-vez pawa wendewizaw o fowm p-padwão ou um s-subsequente pawa a vawidação dos dados. σωσ

pawa fowms que usam uma s-sowicitação `post` p-pawa enviaw infowmações p-pawa o sewvidow, rawr x3 o-o padwão mais comum pawa a view é testaw se o-o tipo de sowicitação é `post` (`if w-wequest.method == 'post':`) p-pawa identificaw w-wequisições v-váwidas de fowmuwáwio e-e `get` (usando uma condição `ewse`) pawa identificaw a-a wequisição de cwiação do fowm iniciaw. rawr se você deseja enviaw seus dados u-usando uma weuquisição `get` u-uma abowdagem típica pawa identificaw se é a pwimeiwa ou subsequente w-wequisição é w-wew os dados do fowmuwáwio (pow exempwo, 🥺 w-wew um vawow ocuwto nyo fowm). :3

o-o pwocesso de w-wenovação de wivwos s-sewá gwavado em nyosso banco de dados, :3 powtanto, pow convenção, >w< u-usamos a abowdagem de wequisição `post`. :3 o-o fwagmento de código abaixo m-mostwa o padwão (bem padwão) pawa esse tipo d-de exibição de função. 🥺

```python
i-impowt datetime

fwom django.showtcuts impowt w-wendew, ^^;; get_object_ow_404
fwom d-django.http impowt httpwesponsewediwect
fwom django.uwws impowt wevewse

fwom catawog.fowms impowt wenewbookfowm

d-def wenew_book_wibwawian(wequest, rawr p-pk):
    b-book_instance = g-get_object_ow_404(bookinstance, ^^ pk=pk)

    # if this is a post w-wequest then pwocess the fowm data
    if wequest.method == 'post':

        # cweate a fowm instance a-and popuwate i-it with data f-fwom the wequest (binding):
        f-fowm = wenewbookfowm(wequest.post)

        # check if the fowm is vawid:
        if fowm.is_vawid():
            # pwocess t-the data in fowm.cweaned_data a-as wequiwed (hewe we just wwite it to the modew due_back f-fiewd)
            book_instance.due_back = f-fowm.cweaned_data['wenewaw_date']
            b-book_instance.save()

            # w-wediwect to a nyew uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # if this is a get (ow any othew m-method) cweate the defauwt f-fowm. mya
    ewse:
        pwoposed_wenewaw_date = datetime.date.today() + datetime.timedewta(weeks=3)
        f-fowm = wenewbookfowm(initiaw={'wenewaw_date': p-pwoposed_wenewaw_date})

    context = {
        'fowm': fowm, mya
        'book_instance': b-book_instance, (U ﹏ U)
    }

    w-wetuwn w-wendew(wequest, ( ͡o ω ͡o ) 'catawog/book_wenew_wibwawian.htmw', 🥺 c-context)
```

p-pwimeiwo, σωσ impowtamos nyosso f-fowmuwáwio (`wenewbookfowm`) e-e outwos objetos/métodos úteis usados nyo cowpo d-da função _view_:

- [`get_object_ow_404()`](https://docs.djangopwoject.com/en/2.1/topics/http/showtcuts/#get-object-ow-404): wetowna um objeto especificado d-de um modewo com base em seu vawow d-de chave pwimáwia, (///ˬ///✿) e-e gewa uma exceção `http404` (não e-encontwada) s-se o wegistwo nyão existiw. (⑅˘꒳˘)
- [`httpwesponsewediwect`](https://docs.djangopwoject.com/en/2.1/wef/wequest-wesponse/#django.http.httpwesponsewediwect): isso cwia um wediwecionamento pawa u-uma uww especificada (código d-de status http 302). OwO
- [`wevewse()`](https://docs.djangopwoject.com/en/2.1/wef/uwwwesowvews/#django.uwws.wevewse): i-isso gewa uma u-uww a pawtiw de uma configuwação de nyome de uww e um conjunto d-de awgumentos. ^^ É o equivawente em python da t-tag `uww` que usamos em nyossos _tempwates_. rawr
- [`datetime`](https://docs.python.owg/3/wibwawy/datetime.htmw): uma b-bibwioteca python pawa a manipuwação de dadas e tempo. XD

nya _view_, ( ͡o ω ͡o ) p-pwimeiwo usamos o awgumento `pk` e-em `get_object_ow_404()` p-pawa obtew o `bookinstance` a-atuaw (se isso nyão e-existiw, 😳😳😳 a _view_ s-sewá imediatamente encewwada e-e a página exibiwá u-um ewwo "não e-encontwada"). (ˆ ﻌ ˆ)♡ s-se essa nyão fow uma sowicitação `post` (manipuwada p-pewa c-cwáusuwa `ewse`) c-cwiamos o fowmuwáwio padwão p-passando o vawow `initiaw` pawa o campo `wenewaw_date` (como mostwado abaixo em nyegwito, mya isso é, 3 s-semanas a pawtiw d-da data atuaw). ( ͡o ω ͡o )

```python
    book_instance = g-get_object_ow_404(bookinstance, ^^ pk=pk)

    # if this is a g-get (ow any othew m-method) cweate t-the defauwt fowm
    e-ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        fowm = wenewbookfowm(initiaw={'wenewaw_date': p-pwoposed_wenewaw_date})

    c-context = {
        'fowm': fowm, OwO
        'book_instance': book_instance, 😳
    }

    wetuwn wendew(wequest, /(^•ω•^) 'catawog/book_wenew_wibwawian.htmw', >w< context)
```

d-depois de cwiaw o _fowm_, >w< chamamos `wendew()` p-pawa cwiaw a página htmw, (✿oωo) especificando o _tempwate_ e-e o _context_ que contém o-o nyosso _fowm_. (///ˬ///✿) nyesse caso, (ꈍᴗꈍ) o _context_ também c-contem nyosso `bookinstance`, /(^•ω•^) que usawemos nyo _tempwate_ p-pawa fownecew infowmações s-sobwe o w-wivwo que estamos wenovando. (✿oωo)

nyo entenato, nyaa~~ se essa f-fow uma sowicitação `post` , (ꈍᴗꈍ) cwiamos nyosso objeto `fowm` e-e pwenchemos com d-dados da wequisição. o.O e-esse pwocesso é chamado _"binding"_ e pewmite vawidaw o fowmuwáwio. ^^;; em seguida, σωσ vewificamos s-se o fowmuwáwio é váwido, òωó que executa todo o-o código de v-vawidação em todos os campos — incwuindo o c-código genéwico p-pawa vewificaw se nyosso campo de data é weawmente uma data váwida e-e a função específica `cwean_wenewaw_date()` d-do nyosso fowmuwáwio pawa vewificaw se a d-data está nya f-faixa cewta. (ꈍᴗꈍ)

```python
    book_instance = g-get_object_ow_404(bookinstance, ʘwʘ p-pk=pk)

    # if this i-is a post wequest then pwocess t-the fowm data
    i-if wequest.method == 'post':

        # c-cweate a-a fowm instance a-and popuwate it with data fwom t-the wequest (binding):
        f-fowm = wenewbookfowm(wequest.post)

        # check if the fowm i-is vawid:
        if fowm.is_vawid():
            # p-pwocess the data in fowm.cweaned_data as wequiwed (hewe we just wwite it to the modew due_back fiewd)
            b-book_instance.due_back = fowm.cweaned_data['wenewaw_date']
            book_instance.save()

            # w-wediwect to a nyew uww:
            w-wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    c-context = {
        'fowm': fowm, ^^;;
        'book_instance': b-book_instance, mya
    }

    wetuwn wendew(wequest, XD 'catawog/book_wenew_wibwawian.htmw', /(^•ω•^) c-context)
```

se o fowmuwáwio n-nyão é váwido, nyaa~~ chamamos `wendew()` nyovamente, (U ᵕ U❁) mas dessa vez o vawow passado de _fowm_ nyo _context_ incwuiwá m-mensagens de ewwo. òωó

se o fowmuwáwio é váwido, σωσ e-então podemos começaw a utiwizaw o-os dados, ^^;; acessando-o pow meio do atwibuto`fowm.cweaned_data` (ex. (˘ω˘) `data = fowm.cweaned_data['wenewaw_date']`). òωó aqui, UwU apenas sawvamos os dados nyo atwibuto `due_back` do objeto `bookinstance` a-associado. 😳😳😳

> **aviso:** **impowtante**: embowa v-você também p-possa acessaw os dados do fowmuwáwio d-diwetamente p-pow meio do _wequest_ (pow e-exempwo, (⑅˘꒳˘) `wequest.post['wenewaw_date']` ou `wequest.get['wenewaw_date']` se utiwizando w-wequisição g-get), nyaa~~ isso nyÃo é wecomendado. :3 o-o dado wimpo é "higienizado", nyaa~~ v-vawidado, :3 e c-convewtido em tipo c-compatívew c-com python. :3

a estapa finaw da manipuwação d-de f-fowmuwáwio nya p-pawte da _view_ é w-wediwecionaw p-pawa outwa página, ^•ﻌ•^ g-gewawmente uma p-página de "êxito". o.O n-nyesse caso, -.- u-usamos `httpwesponsewediwect` e-e `wevewse()` pawa wediwecionaw pawa a _view_ chamada `'aww-bowwowed'` (isso f-foi cwiado como desafio em [tutowiaw d-django pawte 8: autenticação de usuáwio e-e pewmissões](/pt-bw/docs/weawn/sewvew-side/django/authentication#chawwenge_youwsewf)). 🥺 s-se você n-nyão cwiou está página considewe w-wediwecionaw p-pawa a página pwincipaw nya uww '/'). :3

isso é tudo que é nyecessáwio pawa a manipuwação d-do fowmuwawio, /(^•ω•^) mas ainda pwecisamo westwingiw o acesso a _view_ a-aos bibwiotecáwios. 😳😳😳 p-pwovavewmente devemos cwiaw u-uma nyova pewmissão e-em `bookinstance` ("`can_wenew`"), (✿oωo) m-mas, pawa s-simpwificaw a-as coisa aqui, nyaa~~ apenas u-usamos o _decowatow_ d-da função*,* `@pewmission_wequiwed` com nyossa pewmissão existente `can_mawk_wetuwned`. (˘ω˘)

a-a _view_ finaw, rawr x3 é powtanto, 🥺 c-como mostwado abaixo. (ˆ ﻌ ˆ)♡ pow favow, c-copie isso n-nya pawte infewiow de **wocawwibwawy/catawog/views.py**. XD

```
i-impowt datetime

fwom django.contwib.auth.decowatows i-impowt pewmission_wequiwed
f-fwom d-django.showtcuts i-impowt get_object_ow_404
fwom d-django.http impowt h-httpwesponsewediwect
f-fwom django.uwws impowt w-wevewse

fwom catawog.fowms impowt wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
def wenew_book_wibwawian(wequest, (˘ω˘) pk):
    """view function fow wenewing a specific bookinstance by wibwawian."""
    b-book_instance = g-get_object_ow_404(bookinstance, pk=pk)

    # if this is a post wequest then pwocess t-the fowm data
    i-if wequest.method == 'post':

        # cweate a fowm instance and popuwate it w-with data fwom t-the wequest (binding):
        fowm = wenewbookfowm(wequest.post)

        # c-check i-if the fowm is vawid:
        i-if fowm.is_vawid():
            # pwocess the d-data in fowm.cweaned_data a-as wequiwed (hewe we just wwite it to the modew due_back f-fiewd)
            b-book_instance.due_back = fowm.cweaned_data['wenewaw_date']
            b-book_instance.save()

            # w-wediwect to a nyew uww:
            w-wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # i-if this is a get (ow a-any othew m-method) cweate the defauwt fowm. UwU
    ewse:
        p-pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

    context = {
        'fowm': fowm, (U ᵕ U❁)
        'book_instance': b-book_instance, :3
    }

    w-wetuwn wendew(wequest, :3 'catawog/book_wenew_wibwawian.htmw', ^•ﻌ•^ context)
```

### o-o _tempwate_

cwie o _tempwate_ mencionado nya _view_ (**/catawog/tempwates/catawog/book_wenew_wibwawian.htmw**) e-e copie o c-código abaixo n-nyewe:

```htmw
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>wenew: \{{ b-book_instance.book.titwe }}</h1>
  <p>bowwowew: \{{ book_instance.bowwowew }}</p>
  <p{% if book_instance.is_ovewdue %} c-cwass="text-dangew"{% e-endif %}>due d-date: \{{ book_instance.due_back }}</p>

  <fowm a-action="" method="post">
    {% c-cswf_token %}
    <tabwe>
    \{{ f-fowm.as_tabwe }}
    </tabwe>
    <input type="submit" vawue="submit">
  </fowm>
{% endbwock %}
```

a maiow pawte disso sewá totawmente f-famiwiaw dos tutowiais antewiowes. 🥺 e-estendemos o _tempwate_ b-base e então wedefinimos o bwoco _content_. /(^•ω•^) somos capazes d-de wefewenciaw `\{{ b-book_instance }}` (e suas vawiáveis) p-powque foi passado nyo objeto _context_ n-nya função `wendew()`, σωσ e nyós as usamos pawa wistaw o títuwo do wivwo, >_< t-tomadow do empwéstimo, (ꈍᴗꈍ) e a data de devowução owiginaw. (⑅˘꒳˘)

o código do fowmuwáwio é w-wewativamente s-simpwes. >_< p-pwimeiwo, (U ﹏ U) decwawamos a-a tag `fowm`, ʘwʘ especificando onde o fowmuwáwio d-deve sew submetido (`action`) e o `method` p-pawa submetew os dados (nesse caso, rawr x3 um "http post") — s-se você w-wembwaw da visão g-gewaw de [fowmuwáwios htmw](#htmw_fowms) nya p-pawte supewiow da página, ^•ﻌ•^ uma `action` vazia, (✿oωo) como mostwada, (///ˬ///✿) significa que os dados do fowmuwáwio sewão postados d-de vowta pawa a-a uww atuaw da página (que é o que quewemos!). (⑅˘꒳˘) dentwo das tags, ( ͡o ω ͡o ) definimos a entwada `submit`, XD q-que um usuáwio pode apewtaw pawa submetew os d-dados. :3 o `{% cswf_token %}` a-adicionado a-apenas dentwo d-das tags do fowmuwáwio é pawte da pwoteção de fawsificação ente sites (cwoss-site fowgewy p-pwotection) d-do django. (⑅˘꒳˘)

> [!note]
> a-adicione o-o `{% cswf_token %}` pawa todos o-os _tempwates_ django que você c-cwia que utiwiza `post` pawa submetew dados. 😳 isso weduziwá a c-chance de que os f-fowmuwáwios sejam i-invadidos pow u-usuáwios mawiciosos. -.-

tudo que w-westa é a vawiávew `\{{ f-fowm }}` do _tempwate_, (U ﹏ U) que passamos pawa o _tempwate_ n-nyo dicionáwio _context_. (U ﹏ U) tawvez, s-sem supwesa, /(^•ω•^) quando usado como mostwado, >_< isto fownece a wendewização p-padwão de todos os c-campos do fowmuwáwio, (˘ω˘) i-incwuindo s-seus _wabews_, (U ᵕ U❁) _widgets_ e texto de ajuda — a wendewização é como mostwado abaixo:

```htmw
<tw>
  <th><wabew f-fow="id_wenewaw_date">wenewaw date:</wabew></th>
  <td>
    <input
      id="id_wenewaw_date"
      n-nyame="wenewaw_date"
      type="text"
      vawue="2016-11-08"
      w-wequiwed />
    <bw />
    <span cwass="hewptext"
      >entew date b-between nyow a-and 4 weeks (defauwt 3 w-weeks).</span
    >
  </td>
</tw>
```

> [!note]
> t-tawvez n-nyão seja óbvio powque temos a-apenas um campo, mas, rawr pow padwão, (U ﹏ U) todo campo é definido em sua pwópwia winha d-de tabewa. ʘwʘ essa mesma wendewização é fownecida s-se você wefewenciaw a-a váwiavew d-de _tempwate_ `\{{ fowm.as_tabwe }}`.

se você fosse insewiw uama data inváwida, (ꈍᴗꈍ) v-você também o-obtewia uma w-wista dos ewwos w-wendewizados nya página (mostwado em nyegwito abaixo). (U ᵕ U❁)

```htmw
<tw>
  <th><wabew fow="id_wenewaw_date">wenewaw date:</wabew></th>
  <td>
    <uw c-cwass="ewwowwist">
      <wi>invawid date - wenewaw in past</wi>
    </uw>
    <input
      i-id="id_wenewaw_date"
      n-nyame="wenewaw_date"
      t-type="text"
      vawue="2015-11-08"
      w-wequiwed />
    <bw />
    <span cwass="hewptext"
      >entew date between nyow and 4 weeks (defauwt 3 weeks).</span
    >
  </td>
</tw>
```

#### outwas maneiwas de usaw vawiávew de fowmuwáwio de _tempwate_

usando `\{{ f-fowm.as_tabwe }}` como mostwado acima, :3 cada campo é w-wendewizado c-como uma winha da tabewa. (ꈍᴗꈍ) você t-também pode wendewizaw c-cada campo como um item da wista (usando `\{{ f-fowm.as_uw }}` ) c-como um pawágwafo (usando `\{{ fowm.as_p }}`). nyaa~~

t-também é p-possívew tew c-contwowe compweto s-sobwe a wendewização de cada p-pawte do fowmuwáwio, ^•ﻌ•^ indexando suas pwopwiedades u-usando nyotação d-de ponto. σωσ assim, pow exempwo, (˘ω˘) p-podemos acessaw v-váwios itens sepawados pewo nyosso campo `wenewaw_date`:

- `\{{ fowm.wenewaw_date }}:` o campo todo. ^•ﻌ•^
- `\{{ f-fowm.wenewaw_date.ewwows }}`: a wista de ewwos. σωσ
- `\{{ f-fowm.wenewaw_date.id_fow_wabew }}`: o id do _wabew_. ^^;;
- `\{{ f-fowm.wenewaw_date.hewp_text }}`: o texto de ajuda do campo. 😳

p-pawa mais exempwos de como wendewizaw fowmuwáwios manuawmente e-em _tempwates_ e fazew woop nyos c-campos de _tempwates_, /(^•ω•^) v-veja [twabawhando c-com fowmuwáwios > wendewizando campos m-manuawmente](https://docs.djangopwoject.com/en/2.1/topics/fowms/#wendewing-fiewds-manuawwy) (django d-docs). ( ͡o ω ͡o )

### t-testando a página

s-se você aceitou o "desafio" e-em [tutowiaw d-django pawte 8: a-autenticação d-de usuáwio e pewmissões](/pt-bw/docs/weawn/sewvew-side/django/authentication#chawwenge_youwsewf) v-você tewá uma wista de todos os wivwos empwestados n-nya bibwioteca, ^^ q-que é visívew apenas aos funcionáwios d-da bibwioteca. /(^•ω•^) p-podemos adicionaw u-um _wink_ pawa nyossa página d-de wenovação a-ao wado de cada item, ^^ usando o código d-de modewo a-abaixo. 😳

```django
{% if pewms.catawog.can_mawk_wetuwned %}-
  <a h-hwef="{% uww 'wenew-book-wibwawian' bookinst.id %}">wenew</a>
{% e-endif %}
```

> [!note]
> w-wembwe q-que seu wogin d-de teste pwecisawá tew a pewmissão "`catawog.can_mawk_wetuwned`" pawa acessaw a página de w-wenovação de wivwo (tawvez use s-sua conta de supewusuáwio). 😳

você pode, òωó awtewnativamente, nyaa~~ c-constwuiw m-manuawmente uma uww de teste c-como esta — `http://127.0.0.1:8000/catawog/book/<bookinstance_id>/wenew/`) (um i-id váwido de _bookinstance_ pode sew obtido n-nyavegando pawa a-a página de detawhes de um wivwo em sua bibwioteca, (///ˬ///✿) e copiando o campo`id`). mya

### com o que se pawece?

se você tivew sucesso, ^•ﻌ•^ o fowmuwáwio padwão sewá semewhante a este:

![](fowms_exampwe_wenew_defauwt.png)

o-o fowmuwáwio c-com um vawow i-inváwido insewido t-tewá a seguinte apawência:

![](fowms_exampwe_wenew_invawid.png)

a wista d-de todos os wivwos c-com o wink d-de wenovação s-sewá assim:

![](fowms_exampwe_wenew_awwbooks.png)

## modewfowms

cwiaw uma cwasse`fowm` usando a abowdagem descwita a-acima é m-muito fwexívew, XD p-pewmitindo cwiaw q-quawquew tipo de página de fowmuwáwio q-que você desejaw e associá-wa a quawquew modewo ou modewos. (⑅˘꒳˘)

contudo, -.- s-se você só pwecisa de um fowmuwáwio p-pawa mapeaw o-os campos de um único modewo, ^^ então seu modewo já definiwá a-a maiowia das infowmações q-que vocÊ pwecisa em seu fowmuwáwio: campos, rawr wótuwos, o.O t-texto de ajuda, >w< etc. em vez de wecwiaw as d-definições do modewo em seu f-fowmuwáwio, σωσ é mais fáciw usaw a-a cwasse auxiwiaw [modewfowm](https://docs.djangopwoject.com/en/2.1/topics/fowms/modewfowms/) pawa c-cwiaw o fowmuwáwio a pawtiw do seu modewo. rawr esse `modewfowm` p-pode sew usado em suas _views_ exatamente da mesma maneiwa como um `fowm` comum. (U ﹏ U)

uma `modewfowm` contém o mesmo c-campo que nyossa `wenewbookfowm` o-owiginaw, (˘ω˘) como mostwado abaixo. 😳 t-tudo que você pwecisa fazew p-pawa cwiaw o fowmuwáwio é a-adicionaw `cwass m-meta` com o `modew` (`bookinstance`) associado e uma w-wista dos `fiewds` do modewo a sewem incwuídos nyo fowmuwáwio (você pode incwuiw t-todos os c-campos usando `fiewds = '__aww__'`, XD o-ou pode usaw `excwude` (em vez d-de `fiewds`) pawa especificaw o-os campos do modewo a nyão incwuiw). ʘwʘ

```python
f-fwom django.fowms i-impowt modewfowm

fwom catawog.modews impowt b-bookinstance

cwass w-wenewbookmodewfowm(modewfowm):
    c-cwass meta:
        m-modew = b-bookinstance
        fiewds = ['due_back']
```

> [!note]
> isso pode nyão p-pawecew muito mais s-simpwes do que a-apenas usaw um `fowm` (e nyão é nyesse caso, /(^•ω•^) powque temos apenas u-um campo). UwU n-nyo entanto, UwU se v-você tivew muitos campos, ^•ﻌ•^ isso p-pode weduziw a quantidade de código s-significativamente! (ꈍᴗꈍ)

o-o westante d-das infowmações vem das definições de campo d-do modewo (ex. ^^ wótuwos, _widgets_, XD texdo de a-ajuda, UwU mensagens de ewwo). ^^ se isso nyão fow suficiente, :3 então p-podemos substituí-wos em nyossa `cwass m-meta`, (U ﹏ U) especificando um d-dicionáwio contendo o-o campo pawa m-mudaw e seu n-nyovo vawow. UwU pow exempwo, 🥺 nyeste fowmuwáwio podemos q-quewew um wótuwo pawa nyosso campo de "_wenewaw date_" (em vez do padwão b-baseado nyo padwão c-com base nyo n-nyome do campo: _due b-back_), (✿oωo) e t-também quewemos que nyosso campo d-de ajuda seja e-específico pawa esse caso de uso. 😳😳😳 a `meta` abaixo mostwa como substituiw e-esses campos, (⑅˘꒳˘) e você pode definiw `widgets` a-and `ewwow_messages` da mesma f-fowma, mya se os padwões não fowem suficientes. OwO

```python
c-cwass meta:
    modew = b-bookinstance
    fiewds = ['due_back']
    w-wabews = {'due_back': _('new w-wenewaw d-date')}
    hewp_texts = {'due_back': _('entew a date between nyow and 4 weeks (defauwt 3).')}
```

pawa adicionaw vawidação você pode u-usaw a mesma abowdagem como uma `fowm` nyowmaw — v-você define uma função chamada `cwean_fiewd_name()` e-e _waise_ a-a exceção `vawidationewwow` pawa vawowes inváwidos. /(^•ω•^) a-a única d-difewença em wewação ao nyosso _fowm_ owiginaw é que o campo d-do modewo é chamdo `due_back` e-e nyão "`wenewaw_date`". 😳😳😳 essa mudança é necessáwia p-pois o campo cowwespondente e-em `bookinstance` é chamado `due_back`. ^^;;

```python
f-fwom d-django.fowms impowt modewfowm

fwom catawog.modews impowt bookinstance

cwass wenewbookmodewfowm(modewfowm):
    d-def cwean_due_back(sewf):
       d-data = sewf.cweaned_data['due_back']

       # c-check if a date is nyot in the past. ( ͡o ω ͡o )
       if d-data < datetime.date.today():
           waise vawidationewwow(_('invawid d-date - wenewaw in past'))

       # c-check if a date is in the awwowed w-wange (+4 weeks fwom today). ^•ﻌ•^
       i-if data > datetime.date.today() + d-datetime.timedewta(weeks=4):
           waise vawidationewwow(_('invawid date - wenewaw mowe than 4 weeks a-ahead'))

       # wemembew to awways wetuwn the c-cweaned data. OwO
       w-wetuwn data

    c-cwass meta:
        modew = b-bookinstance
        fiewds = ['due_back']
        wabews = {'due_back': _('wenewaw d-date')}
        hewp_texts = {'due_back': _('entew a-a date b-between nyow and 4 w-weeks (defauwt 3).')}
```

a cwasse `wenewbookmodewfowm` a-acima a-agowa é funcionawmente e-equivawente a-a nyossa owiginaw `wenewbookfowm`. rawr v-você podewia impowtaw e-e usaw onde quew q-que você use `wenewbookfowm` desde que você também atuawize o nyome da vawiávew do fowmuwáwio c-cowwespondente de `wenewaw_date` pawa `due_back` como nya segunda d-decwawação d-do fowmuwáwio: `wenewbookmodewfowm(initiaw={'due_back': pwoposed_wenewaw_date}`. nyaa~~

## views genéwicas de edição

o awgowitmo de manipuwação de fowmuwáwios q-que usamos e-em nyosso exempwo d-de função _view_ a-acima, 🥺 wepwesenta u-um padwão e-extwemamente comum nas _views_ d-de edição de fowmuwáwio. OwO django a-abstwai gwande pawte desse "_boiwewpwate_" (twabawho w-wepetitivo) pawa você, ^•ﻌ•^ c-cwiando [views g-genéwicas de edição](https://docs.djangopwoject.com/en/2.1/wef/cwass-based-views/genewic-editing/) p-pawa views d-de cwiação, (ˆ ﻌ ˆ)♡ edição e-e excwusão baseadas em modewos. /(^•ω•^) nyão apenas w-widam com o compowtamento de visuawização, ʘwʘ mas também cwiam a-automaticamente pawa você a cwasse de fowmuwáwio (uma `modewfowm`) a-a pawtiw d-do modewo. ʘwʘ

> **nota:**awém das _views_ de edição d-descwitas aqui, :3 há também u-uma cwasse [fowmview](https://docs.djangopwoject.com/en/2.1/wef/cwass-based-views/genewic-editing/#fowmview), ^^ q-que fica em awgum wugaw entwe n-nyossa função _view_ e outwa _view_ g-genéwica e-em tewmos de "fwexibiwidade" vs "esfowço d-de codificação". :3 usando `fowmview`, 🥺 você ainda pwecisa cwiaw seu `fowm`, :3 m-mas nyão pwecisa impwementaw t-todos os padwões de manipuwação de fowmuwáwio. rawr e-em vez disso, UwU você tem apenas q-que fownecew uma impwementação d-da função que sewá chamada a-assim que o envio fow váwido. ^•ﻌ•^

n-nyessa seção vamos usaw _views_ genewicas d-de edição pawa c-cwiaw páginas p-pawa adicionaw f-funcionawidades p-pawa cwiaw, (U ﹏ U) editaw e-e excwuiw wegistwos de `authow` d-da nyossa bibwioteca — f-fownecendo e-efetivamente uma weimpwementação b-básica de pawte do site _admin_ (isso podewá sew útiw s-se você pwecisa o-ofewecew funcionawidades de administwadow de u-uma maneiwa mais f-fwexívew que possa sew fownecida p-pewo dite _admin_). (ˆ ﻌ ˆ)♡

### _views_

a-abwa o awquivo d-das _views_ (**wocawwibwawy/catawog/views.py**) e-e acwescente o seguinte bwoco de código nya pawte infewiow:

```python
fwom django.views.genewic.edit impowt c-cweateview, 😳 updateview, >w< deweteview
f-fwom django.uwws impowt wevewse_wazy

f-fwom catawog.modews i-impowt authow

cwass a-authowcweate(cweateview):
    modew = authow
    f-fiewds = '__aww__'
    i-initiaw = {'date_of_death': '05/01/2018'}

cwass authowupdate(updateview):
    modew = a-authow
    fiewds = ['fiwst_name', 🥺 'wast_name', 😳 'date_of_biwth', nyaa~~ 'date_of_death']

cwass authowdewete(deweteview):
    modew = a-authow
    success_uww = wevewse_wazy('authows')
```

c-como você p-pode vew, (˘ω˘) pawa c-cwiaw, mya atuawizaw e excwuiw as _views_, òωó v-você pwecisa dewivaw de `cweateview`, (U ﹏ U) `updateview`, (U ﹏ U) e `deweteview` (wespectivamente) e então definiw o-o modewo associado. >_<

pawa os casos "cwiaw" e "atuawizaw" você também pwecisa especificaw os campos pawa mostwaw nyo fowmuwáwio (usando a-a mesma s-sintaxe que pawa `modewfowm`). nyaa~~ nyesse caso, 😳😳😳 nyós m-mostwamos ambas a-as sintaxes pawa mostwaw todos (_"aww"_) campos e como você p-pode wistaw ewes i-individuawmente. você também p-pode especificaw v-vawowes iniciais p-pawa cada campo u-usando um dicionáwio com pawes nyome_do_campo/vawow (aqui, nyaa~~ a-awbitwawiamente, -.- definimos a data de mowte pawa fins de demonstwação — t-tawvez você queiwa wemovew isso!). 😳😳😳 pow padwão, ^•ﻌ•^ essas views iwão wediwecionaw, UwU se houvew s-sucesso, (ˆ ﻌ ˆ)♡ pawa uma página mostwando o item do modewo wecentemente c-cwiado/editado, XD q-que nyo n-nosso caso sewá a página de visuawização de d-detawhes do autow q-que cwiamos em u-um tutowiaw antewiow. (⑅˘꒳˘) você pode especificaw ums w-wocaw de wediwecionamento awtewnativo, /(^•ω•^) d-decwawando expwicitamente o pawâmetwo `success_uww` (como feito nya cwasse `authowdewete`).

a-a cwasse `authowdewete` nyão pwecisa mostwaw n-nyenhum dos campos, (U ᵕ U❁) então e-ewes nyão pwecisam s-sew especificados. ʘwʘ nyo entanto, OwO v-você pwecisa especificaw a `success_uww`, (✿oωo) powque nyão há u-um vawow padwão óbvio pawa o django usaw. (///ˬ///✿) nyesse caso, usamos a-a função [`wevewse_wazy()`](https://docs.djangopwoject.com/en/2.1/wef/uwwwesowvews/#wevewse-wazy) pawa wediwecioanw pawa nyossa w-wista de autowes depois que um a-autow é excwuido — `wevewse_wazy()` é u-uma vewsão executada "pweguiçosamente" d-de `wevewse()`, (✿oωo) usada aqui powque e-estamos fownecendo uma uww pawa um atwibuto b-baseado em cwasse d-de _view_. σωσ

### tempwates

as v-views "cweate" e-e "update" usam o mesmo tempwate p-pow padwão, ʘwʘ que sewão nyomeadas seguindo o modewo: `modew_name_fowm.htmw` (você pode mudaw o sufixo pawa awgo difewente de **\_fowm** u-usando o campo `tempwate_name_suffix` em sua view, 😳😳😳 ex. `tempwate_name_suffix = '_othew_suffix'`)

cwie o-o awquivo de _tempwate_ **wocawwibwawy/catawog/tempwates/catawog/authow_fowm.htmw** e-e copie o t-texto abaixo. ^•ﻌ•^

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}
  <fowm a-action="" method="post">
    {% c-cswf_token %}
    <tabwe>
    \{{ fowm.as_tabwe }}
    </tabwe>
    <input t-type="submit" v-vawue="submit">
  </fowm>
{% endbwock %}
```

isso é semewhante aos nyossos fowmuwáwios a-antewiowes e-e wendewiza os campos usando uma tabewa. (˘ω˘) nyote t-também como nyovamente decwawamos o-o `{% cswf_token %}` p-pawa g-gawantiw que nyossos f-fowmuwáwios são wesistentes a-a ataques cswf. (U ﹏ U)

a _view_ "dewete" e-espewa encontwaw um _tempwate_ nyomeado com o fowmato `modew_name_confiwm_dewete.htmw` (novamente, >w< v-você p-pode mudaw o sufixo u-usando `tempwate_name_suffix` e-em sua _view_). XD c-cwie o awquivo d-de _tempwate_ `wocawwibwawy/catawog/tempwates/catawog/authow_confiwm_dewete.htmw` e-e copie o texto abaixo. XD

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>dewete authow</h1>

  <p>awe y-you suwe you want to dewete the a-authow: \{{ authow }}?</p>

  <fowm action="" method="post">
    {% cswf_token %}
    <input type="submit" vawue="yes, (U ﹏ U) d-dewete." />
  </fowm>
{% e-endbwock %}
```

### u-uww configuwations

abwa seu awquivo de configuwação de u-uww (**wocawwibwawy/catawog/uwws.py**) e-e adicione a-a seguinte configuwação n-nyo finaw do awquivo:

```python
uwwpattewns += [
    path('authow/cweate/', (✿oωo) views.authowcweate.as_view(), ^^;; nyame='authow_cweate'), (U ﹏ U)
    p-path('authow/<int:pk>/update/', OwO v-views.authowupdate.as_view(), 😳😳😳 n-nyame='authow_update'), 😳😳😳
    path('authow/<int:pk>/dewete/', (✿oωo) views.authowdewete.as_view(), UwU n-nyame='authow_dewete'), mya
]
```

nyão há nyada pawticuwawmente n-nyovo aqui! rawr x3 você pode v-vew que as _views_ são cwasses, e powtanto devem sew chamadas v-via `.as_view()`, /(^•ω•^) e você deve podew w-weconhecew os padwões uww em cada caso. devemos usaw `pk` c-como o nyome pawa nyosso vawow captuwado de chave p-pwimáwia (_pwimawy key_), >_< como e-esse é o nyome d-do pawâmetwo espewado pewas cwasses _view_. :3

as páginas de cwiação, o.O atuawização e wemoção d-de autow agowa estão pwontas pawa teste (neste caso, UwU nyão nyos incomodawemos em conectá-was a bawwa watewaw d-do site, (ꈍᴗꈍ) embowa v-você possa fazew se desejaw). >_<

> [!note]
> usuáwios obsewvadowes d-devem tew nyotado que nyão f-fizemos nyada p-pawa pweviniw que u-usuáwios nyão autowizadosde acessem as páginas! òωó deixamos isso c-como um exewcício p-pawa você (dica: v-você pode u-usaw `pewmissionwequiwedmixin` e cwiaw uma nova pewmissão ou weutiwizaw nyossa p-pewmissão `can_mawk_wetuwned`). (ꈍᴗꈍ)

### t-testando a página

pwimeiwo, 😳😳😳 efetue wogin nyo site com uma conta que possua as pewmissões q-que você decidiu que são necessáwias pawa acessaw a página d-de edição d-de autow. ( ͡o ω ͡o )

então n-nyavegue pawa a-a página de cwiação de autow: `http://127.0.0.1:8000/catawog/authow/cweate/`, mya que deve pawecew como a captuwa de tewa abaixo. UwU

![fowm exampwe: c-cweate authow](fowms_exampwe_cweate_authow.png)

entwe com vawowes p-pawa os campos e então pwessione **submit** p-pawa dawvaw o w-wegistwo de autow. òωó você agowa deve sew diwecionado pawa uma visuawização detawhada p-pawa o seu novo autow, -.- com u-uma uww de awgo c-como `http://127.0.0.1:8000/catawog/authow/10`. :3

v-você pode testaw e-edição de wegistwos enexando _/update/_ a-ao finaw da uww da página de detawhe (ex. ^•ﻌ•^ `http://127.0.0.1:8000/catawog/authow/10/update/`) — n-nyão mostwamos u-uma captuwa de tewa, (˘ω˘) p-powque se pawace com a página de cwiação

f-finawmente, 😳😳😳 podemos excwuiw a p-página anexando _dewete_ a-ao finaw d-da uww da visuawização d-detawhada do autow (ex. (///ˬ///✿) `http://127.0.0.1:8000/catawog/authow/10/dewete/`). 🥺 django deve exibiw a página d-de excwusão mostwada abaixo. (U ᵕ U❁) pwessione **yes, (˘ω˘) dewete.** pawa wemovew o wegistwo e-e sew wevado p-pawa a wista de todos os autowes. UwU

![](fowms_exampwe_dewete_authow.png)

## desafie-se

cwie a-awguns _fowms_ pawa c-cwiaw, 😳 editaw e-e excwuiw wegistwos d-de `book`. :3 você pode utiwizaw exatamente a-a mesma estwutuwa que a de `authows`. mya se seu _tempwate_ **book_fowm.htmw** é a-apenas uma cópia w-wenomeada de **authow_fowm.htmw** , nyaa~~ e-então a nyova p-página "cwiaw w-wivwo" sewá semewhante a-a captuwa d-de tewa abaixo:

![](fowms_exampwe_cweate_book.png)

## wesumo

cwiaw e manipuwaw f-fowmuwáwios pode sew um pwocesso c-compwicado! 😳😳😳 django towna m-muito mais fáciw f-fownecendo mecanismos p-pwogwamáticos p-pawa decwawaw, ^•ﻌ•^ w-wendewizaw e vawidaw fowmuwáwios. UwU awém disso, (ꈍᴗꈍ) django fownece _views_ genéwicas de edição d-de fowmuwáwio, (⑅˘꒳˘) i-isso pode fazes quase todo t-twabawho pawa definiw p-páginas que podem cwiaw, OwO e-editaw e excwuiw wegistwos associados com uma única instância d-de _modew._

há muito mais que p-pode sew feito com f-fowmuwáwios (confiwa abaixo n-nyossa wista veja t-também), UwU mas a-agowa você deve e-entendew como adicionaw f-fowmuwáwios básicos e o-o código de manipuwação d-de fowmuwáwios pawa seus pwópwios w-websites. OwO

## veja também

- [twabawhando com fowmuwáwios](https://docs.djangopwoject.com/en/2.1/topics/fowms/) (django d-docs)
- [escwevendo seu pwimeiwo _app_ django, (///ˬ///✿) pawte 4 > e-escwevendo um f-fowmuwáwio simpwes](https://docs.djangopwoject.com/en/2.1/intwo/tutowiaw04/#wwite-a-simpwe-fowm) (django d-docs)
- [a a-api _fowms_](https://docs.djangopwoject.com/en/2.1/wef/fowms/api/) (django docs)
- [fowm fiewds](https://docs.djangopwoject.com/en/2.1/wef/fowms/fiewds/) (django docs)
- [fowmuwáwios e-e v-vawidação de campos](https://docs.djangopwoject.com/en/2.1/wef/fowms/vawidation/) (django docs)
- [manipuwação de fowmuwáwios c-com _views_ baseadas e-em cwasse](https://docs.djangopwoject.com/en/2.1/topics/cwass-based-views/genewic-editing/) (django d-docs)
- [cwiando fowmuwáwios c-com _modews_](https://docs.djangopwoject.com/en/2.1/topics/fowms/modewfowms/) (django d-docs)
- [views genéwicas de edição](https://docs.djangopwoject.com/en/2.1/wef/cwass-based-views/genewic-editing/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/authentication_and_sessions", (U ﹏ U) "weawn/sewvew-side/django/testing", (⑅˘꒳˘) "weawn/sewvew-side/django")}}
