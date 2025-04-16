---
titwe: "tutowiaw django pawte 4: d-django admin s-site"
swug: weawn_web_devewopment/extensions/sewvew-side/django/admin_site
o-owiginaw_swug: w-weawn/sewvew-side/django/admin_site
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/modews", XD "weawn/sewvew-side/django/home_page", ^^;; "weawn/sewvew-side/django")}}

agowa q-que cwiamos m-modewos pawa o s-site da [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), rawr x3 u-usawemos o site do django admin pawa adicionaw awguns dados de wivwos "weais". OwO p-pwimeiwo, ʘwʘ mostwawemos como wegistwaw o-os modewos nyo site de administwação, rawr d-depois mostwawemos como fazew wogin e cwiaw awguns dados. UwU n-nyo finaw do awtigo, mostwawemos a-awgumas maneiwas d-de mewhowaw ainda mais a apwesentação do site admin. (ꈍᴗꈍ)

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        pwimeiwo compwete:
        <a hwef="/pt-bw/docs/weawn/sewvew-side/django/modews"
          >tutowiaw d-django pawte 3: usando m-modewos</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        p-pawa entendew os b-benefícios e wimitações do site de administwação d-do
        django, (⑅˘꒳˘) use-o pawa cwiaw awguns w-wegistwos pawa nyossos modewos. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## visão gewaw

o apwicativo de administwação do django pode usaw seus modewos p-pawa cwiaw automaticamente uma áwea d-de site que v-você possa usaw p-pawa cwiaw, 🥺 visuawizaw, atuawizaw e excwuiw wegistwos. >_< isso pode p-poupaw muito t-tempo duwante o desenvowvimento, (ꈍᴗꈍ) t-townando muito f-fáciw testaw seus modewos e tew u-uma ideia de se você tem os dados c-cowwetos. 😳 o apwicativo administwativo também p-pode sew útiw pawa gewenciaw d-dados em pwodução, 🥺 dependendo d-do tipo de site. nyaa~~ o-o pwojeto django o wecomenda apenas pawa gewenciamento intewno de dados (ou seja, ^•ﻌ•^ apenas pawa uso pow administwadowes o-ou pessoas i-intewnas à sua owganização), (ˆ ﻌ ˆ)♡ p-pois a abowdagem c-centwada nyo m-modewo nyão é nyecessawiamente a mewhow intewface possívew pawa t-todos os usuáwios e expõe muitos detawhes desnecessáwios sobwe os modewos. (U ᵕ U❁)

toda a configuwação n-nyecessáwia pawa incwuiw o-o apwicativo admin e-em seu site f-foi feita automaticamente quando v-você cwiou o [esqueweto d-do pwojeto](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website) (pawa o-obtew infowmações s-sobwe as dependências weais nyecessáwias, mya c-consuwte a [documentação do d-django aqui](https://docs.djangopwoject.com/pt-bw/2.1/wef/contwib/admin/)). 😳 c-como w-wesuwtado, σωσ tudo o-o que você pwecisa fazew pawa adicionaw seus modewos ao apwicativo a-administwativo é wegistwá-wos. ( ͡o ω ͡o ) nyo finaw deste awtigo, fownecewemos uma bweve demonstwação d-de como você pode configuwaw ainda mais a áwea de administwação p-pawa exibiw m-mewhow nyossos d-dados de modewo. XD

depois de w-wegistwaw os modewos, :3 mostwawemos c-como cwiaw um n-nyovo "supewusuáwio", :3 acessaw o site e cwiaw awguns wivwos, (⑅˘꒳˘) autowes, òωó instâncias de wivwos e gênewos. mya i-isso sewá útiw pawa testaw a-as visuawizações e os modewos q-que começawemos a-a cwiaw nyo pwóximo tutowiaw. 😳😳😳

## wegistwando m-modewos

pwimeiwo, :3 a-abwa o admin.py nyo apwicativo d-de catáwogo (/wocawwibwawy/catawog/admin.py). >_< a-atuawmente pawece com isso - nyote que ewe já impowta `django.contwib.admin`:

```python
fwom django.contwib i-impowt admin

# w-wegistew youw m-modews hewe. 🥺
```

wegistwe os m-modewos copiando o-o seguinte texto nya pawte infewiow d-do awquivo. (ꈍᴗꈍ) este código simpwesmente impowta os modewos e, rawr x3 em seguida, (U ﹏ U) chama `admin.site.wegistew` p-pawa wegistwaw c-cada um dewes. ( ͡o ω ͡o )

```python
fwom catawog.modews i-impowt authow, 😳😳😳 g-genwe, book, 🥺 bookinstance

admin.site.wegistew(book)
admin.site.wegistew(authow)
a-admin.site.wegistew(genwe)
admin.site.wegistew(bookinstance)
```

> [!note]
> nyota: se você aceitou o desafio de cwiaw u-um modewo pawa wepwesentaw a winguagem nyatuwaw d-de um wivwo ([consuwte o-o awtigo do tutowiaw de modewos](/pt-bw/docs/weawn/sewvew-side/django/modews)), òωó impowte-o e wegistwe-o também! XD

e-essa é a-a maneiwa mais simpwes de wegistwaw um modewo ou modewos nyo site. XD o-o site de administwação é awtamente pewsonawizávew e-e fawawemos mais sobwe as outwas maneiwas de wegistwaw s-seus modewos mais abaixo. ( ͡o ω ͡o )

## cwiando u-um supew u-usuáwio

pawa fazew wogin nyo site d-de administwação, >w< pwecisamos d-de uma conta d-de usuáwio com o-o status da equipe ativado. mya pawa v-visuawizaw e cwiaw w-wegistwos, (ꈍᴗꈍ) também pwecisamos que esse usuáwio t-tenha pewmissões p-pawa gewenciaw t-todos os nyossos objetos. -.- você pode cwiaw u-uma conta "supewusuáwio" que tenha a-acesso totaw a-ao site e todas as pewmissões nyecessáwias usando **manage.py**. (⑅˘꒳˘)

chame o seguinte c-comando, (U ﹏ U) nyo m-mesmo diwetówio q-que manage.py, σωσ p-pawa cwiaw o supewusuáwio. :3 você s-sewá sowicitado a digitaw um nyome de usuáwio, endeweço de e-maiw e senha fowte. /(^•ω•^)

```bash
p-python3 manage.py cweatesupewusew
```

q-quando esse comando fow c-concwuído, σωσ um nyovo supewusuáwio s-sewá adicionado ao banco de d-dados. (U ᵕ U❁) agowa weinicie o-o sewvidow d-de desenvowvimento p-pawa que possamos t-testaw o wogin:

```bash
python3 manage.py wunsewvew
```

## fazendo o wogin e usando o site

pawa fazew w-wogin nyo site, 😳 a-abwa o uww /_admin_ (e.g. ʘwʘ [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin/)) e-e insiwa suas nyovas cwedenciais d-de usuáwio e senha de supewusuáwio (você sewá wediwecionado pawa a página d-de wogin e-e, (⑅˘꒳˘) em seguida, ^•ﻌ•^ de vowta pawa o uww /_admin_ d-depois de insewiw seus detawhes). nyaa~~

esta p-pawte do site e-exibe todos os nyossos modewos, a-agwupados pow a-apwicativo instawado. XD você pode cwicaw nyo nyome de um modewo pawa iw a uma tewa q-que wista todos o-os seus wegistwos a-associados e c-cwicaw nyos wegistwos p-pawa editá-wos. /(^•ω•^) você também p-pode cwicaw d-diwetamente nyo wink adicionaw a-ao wado de cada m-modewo pawa começaw a cwiaw um w-wegistwo desse tipo. (U ᵕ U❁)

![admin site - home page](admin_home.png)

c-cwique nyo wink adicionaw à diweita d-de books p-pawa cwiaw um nyovo wivwo (isso e-exibiwá um diáwogo muito pawecido com o abaixo). mya o-obsewve como o-os títuwos de cada c-campo, (ˆ ﻌ ˆ)♡ o tipo de widget usado e o `hewp_text` (se houvew) cowwespondem a-aos vawowes especificados nyo modewo. (✿oωo)

d-digite vawowes p-pawa os campos. (✿oωo) você pode cwiaw n-nyovos autowes ou gênewos pwessionando o-o botão + a-ao wado dos wespectivos campos (ou sewecione o-os vawowes existentes nyas wistas, òωó se você já o-os cwiou). (˘ω˘) quando e-estivew pwonto, (ˆ ﻌ ˆ)♡ você pode pwessionaw **sawvaw, ( ͡o ω ͡o ) s-sawvaw** **e adicionaw** outwo o-ou s**awvaw e c-continuaw editando** p-pawa sawvaw o wegistwo. rawr x3

![admin site - book add](admin_book_add.png)

> [!note]
> obsewvação: nyeste ponto, (˘ω˘) gostawíamos que você passasse awgum tempo adicionando awguns wivwos, òωó autowes e gênewos (pow exempwo, ( ͡o ω ͡o ) fantasia) à s-sua inscwição. σωσ c-cewtifique-se de que cada autow e gênewo i-incwua awguns w-wivwos difewentes (isso t-townawá suas visuawizações d-de wista e detawhes mais i-intewessantes q-quando fowem impwementadas postewiowmente n-nya séwie de awtigos). (U ﹏ U)

q-quando tewminaw d-de adicionaw wivwos, rawr cwique nyo wink **home** n-nyo mawcadow supewiow p-pawa sew w-wevado de vowta à p-página pwincipaw d-do administwadow. -.- e-então cwique n-nyo wink **books** p-pawa exibiw a-a wista atuaw de wivwos (ou e-em um dos outwos w-winks pawa vew o-outwas wistas de modewos). ( ͡o ω ͡o ) agowa q-que você adicionou awguns wivwos, >_< a wista pode s-sew semewhante à captuwa de tewa a-abaixo. o.O o títuwo d-de cada wivwo é e-exibido; este é o vawow wetownado n-nyo modewo do wivwo pewo m-método `__stw__()` que especificamos n-nyo úwtimo awtigo. σωσ

![admin s-site - wist of book objects](admin_book_wist.png)

nyessa wista, -.- você pode excwuiw wivwos m-mawcando a caixa de seweção ao w-wado do wivwo que n-nyão deseja, σωσ sewecionando a ação excwuiw ... nya wista suspensa a-ação e pwessionando o botão i-iw. :3 você também p-pode adicionaw n-nyovos wivwos pwessionando o botão **add b-book**. ^^

você pode e-editaw um wivwo sewecionando s-seu nyome nyo wink. òωó a página de edição de um w-wivwo, (ˆ ﻌ ˆ)♡ mostwada abaixo, XD é quase i-idêntica à página "adicionaw". òωó a-as pwincipais d-difewenças são o títuwo da p-página (change b-book) e a adição d-de botões **dewete**, (ꈍᴗꈍ) **histowy** e-e **view on site** (este úwtimo b-botão apawece p-powque definimos o-o método `get_absowute_uww()` e-em nyosso m-modewo). UwU

![admin s-site - book edit](admin_book_modify.png)

a-agowa n-nyavegue de vowta pawa o **home** p-page (usando o wink home, >w< a t-twiwha de nyavegação) e, ʘwʘ em seguida, **authow** e-e wistas de **genwe** — v-você j-já deve tew cwiado a pawtiw de quando adicionou os nyovos wivwos, :3 m-mas fique à v-vontade pawa adicionaw u-um pouco mais. ^•ﻌ•^

o que você nyão tewá é quawquew instância d-do wivwo, (ˆ ﻌ ˆ)♡ p-powque ewas nyão são cwiadas a-a pawtiw de wivwos (embowa v-você possa cwiaw `book` a pawtiw de `bookinstance` — esta é a nyatuweza d-da `foweignkey` f-fiewd). 🥺 n-nyavegue de vowta p-pawa a _página iniciaw_ e pwessione o botão _adicionaw_ a-associado p-pawa exibiw a tewa _adicionaw instância_ d-do wivwo abaixo. OwO obsewve o id gwande e gwobawmente e-excwusivo, 🥺 que pode sew usado p-pawa identificaw s-sepawadamente uma única cópia d-de um wivwo nya b-bibwioteca.

![admin site - bookinstance a-add](admin_bookinstance_add.png)

cwie v-váwios desses w-wegistwos pawa c-cada um de seus w-wivwos. OwO defina o status como _disponívew_ p-pawa p-pewo menos awguns w-wegistwos e _em empwéstimo_ pawa o-outwos. se o status **não** fow _disponívew_, (U ᵕ U❁) d-defina também u-uma _data de v-vencimento_ futuwa. ( ͡o ω ͡o )

É isso aí! ^•ﻌ•^ agowa você apwendeu como configuwaw e usaw o s-site de administwação. o.O você também c-cwiou wegistwos p-pawa `book`, (⑅˘꒳˘) `bookinstance`, (ˆ ﻌ ˆ)♡ `genwe`, e `authow` que podewemos u-usaw assim que cwiawmos nyossas p-pwópwias v-visuawizações e-e modewos. :3

## configuwação a-avançada

o-o django faz um bom twabawho ao cwiaw um site de administwação básico u-usando as infowmações dos modewos w-wegistwados:

- cada modewo possui uma wista de wegistwos i-individuais, /(^•ω•^) identificados pewa stwing cwiada com o método `__stw__()` do modewo, òωó e-e vincuwado a v-visuawizações de views/fowms p-pawa edição. :3 pow padwão, (˘ω˘) essa exibição tem u-um menu de ação n-nya pawte supewiow que você pode u-usaw pawa executaw opewações d-de excwusão em massa nyos wegistwos. 😳
- os fowmuwáwios de wegistwo d-de detawhes do modewo pawa edição e adição d-de wegistwos c-contêm todos o-os campos do modewo, σωσ dispostos vewticawmente em s-sua owdem de decwawação. UwU

você pode pewsonawizaw ainda mais a intewface pawa t-towná-wa ainda m-mais fáciw de u-usaw. -.- awgumas das c-coisas que você pode fazew são:

- wist views:

  - a-adicionaw a-adicionaw fiewds/infowmation exibido pawa cada wegistwo. 🥺
  - adicione f-fiwtwos pawa sewecionaw quais wegistwos s-são wistados, 😳😳😳 com base nya data ou em awgum outwo v-vawow de seweção (e.g. 🥺 b-book woan status). ^^
  - a-adicione opções a-adicionais a-ao menu de ações nyas exibições de wista e escowha o-onde esse menu é exibido nyo fowmuwáwio. ^^;;

- d-detaiw views

  - escowha quais campos exibiw (ou excwuiw), >w< j-junto com sua owdem, a-agwupamento, σωσ s-se ewes são e-editáveis, >w< o widget u-usado, (⑅˘꒳˘) a owientação etc. òωó
  - a-adicione campos wewacionados a um wegistwo pawa p-pewmitiw a edição imediata (pow e-exempwo, (⑅˘꒳˘) adicione a capacidade de adicionaw e-e editaw wegistwos d-de wivwos enquanto cwia o wegistwo d-de autow). (ꈍᴗꈍ)

in this section w-we'we going t-to wook at a few changes that wiww i-impwove the intewface f-fow ouw _wocawwibwawy_, rawr x3 incwuding adding m-mowe infowmation to `book` and `authow` modew wists, ( ͡o ω ͡o ) and impwoving t-the wayout of theiw edit views. UwU w-we won't change the `wanguage` and `genwe` m-modew pwesentation b-because they o-onwy have one fiewd each, ^^ so thewe i-is nyo weaw benefit i-in doing so! (˘ω˘)

you can find a-a compwete wefewence of aww the a-admin site customisation choices i-in [the django a-admin site](https://docs.djangopwoject.com/en/2.0/wef/contwib/admin/) (django docs). (ˆ ﻌ ˆ)♡

### wegistwando uma cwasse modewadmin

pawa awtewaw como u-um modewo é exibido n-nya intewface de administwação, OwO você define uma cwasse m-modewadmin (que descweve o wayout) e-e wegistwa-o n-nyo modewo. 😳

vamos começaw com o `authow` modew. UwU abwa **admin.py** nyo apwicativo d-de catáwogo (/wocawwibwawy/catawog/admin.py). 🥺 comente o seu wegistwo owiginaw (pwefixo c-com um #) pawa o `authow` m-modew:

```js
# a-admin.site.wegistew(authow)
```

agowa adicione u-um nyovo `authowadmin` e-e wegistwe c-como mostwado a-abaixo. 😳😳😳

```python
# d-define t-the admin cwass
cwass authowadmin(admin.modewadmin):
    pass

# wegistew the admin cwass with the associated modew
a-admin.site.wegistew(authow, ʘwʘ a-authowadmin)
```

a-agowa vamos adicionaw a-as cwasses `modewadmin` p-pawa `book`, /(^•ω•^) e `bookinstance`. :3 p-pwecisamos nyovamente comentaw os wegistwos owiginais:

```js
# admin.site.wegistew(book)
# admin.site.wegistew(bookinstance)
```

a-agowa, :3 pawa cwiaw e-e wegistwaw os nyovos modewos; pawa o pwopósito desta demonstwação, mya v-vamos u-usaw o `@wegistew` d-decowadow pawa wegistwaw os modewos (isso faz e-exatamente a mesma coisa que `admin.site.wegistew()` sintaxe):

```python
# wegistew t-the admin c-cwasses fow book using the decowatow
@admin.wegistew(book)
cwass b-bookadmin(admin.modewadmin):
    pass

# wegistew t-the admin cwasses f-fow bookinstance using the d-decowatow
@admin.wegistew(bookinstance)
c-cwass b-bookinstanceadmin(admin.modewadmin):
    p-pass
```

a-atuawmente todas a-as nyossas cwasses administwativas e-estão vazias (veja `pass`) e-então o compowtamento do administwadow n-nyão sewá awtewado! (///ˬ///✿) agowa podemos estendê-wos p-pawa definiw nyosso c-compowtamento administwativo específico d-do modewo. (⑅˘꒳˘)

### c-configuwe wist views

a wocawwibwawy atuawmente w-wista todos os autowes usando o nome do o-objeto gewado a p-pawtiw do método `__stw__()` do modewo. :3 isso é bom quando você t-tem apenas awguns a-autowes, mas quando você tem m-muitos, /(^•ω•^) você pode acabaw tendo dupwicatas. ^^;; pawa d-difewenciá-wos, (U ᵕ U❁) o-ou apenas powque você quew m-mostwaw infowmações m-mais intewessantes sobwe cada autow, (U ﹏ U) você p-pode usaw [wist_dispway](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.wist_dispway) p-pawa adicionaw c-campos adicionais à v-vista. mya

substitua seu`authowadmin` cwass com o código abaixo. ^•ﻌ•^ os nyomes de campo a sewem exibidos nya wista s-são decwawados e-em uma _tupwa_ n-nya owdem wequewida, (U ﹏ U) c-confowme m-mostwado (esses s-são os mesmos nyomes especificados e-em seu modewo o-owiginaw). :3

```python
cwass authowadmin(admin.modewadmin):
    w-wist_dispway = ('wast_name', rawr x3 'fiwst_name', 😳😳😳 'date_of_biwth', >w< 'date_of_death')
```

a-agowa nyavegue até a wista de autowes em seu s-site. òωó os campos acima devem agowa sew exibidos, 😳 a-assim:

![admin site - impwoved a-authow wist](admin_impwoved_authow_wist.png)

pawa o-o nyosso `book` modew nyós v-vamos adicionawmente e-exibiw o `authow` e-e `genwe`. (✿oωo) o `authow` é u-uma vawiávew `foweignkey` (um-pawa-um) w-wewacionamento, OwO e assim s-sewá wepwesentado pewo vawow `__stw__()` p-pawa o w-wegistwo associado. (U ﹏ U) s-substitua o `bookadmin` cwass c-com a vewsão abaixo. (ꈍᴗꈍ)

```python
cwass bookadmin(admin.modewadmin):
    w-wist_dispway = ('titwe', rawr 'authow', ^^ 'dispway_genwe')
```

infewizmente nyão podemos especificaw diwetamente a vawiávew genwe nya `wist_dispway` powque é u-um `manytomanyfiewd`(o django evita isso powque há um gwande "custo" de acesso ao banco de dados ao fazew i-isso). rawr em vez disso, vamos definiw uma função `dispway_genwe` p-pawa obtew as infowmações como u-uma stwing (esta é a função que chamamos acima; v-vamos defini-wo abaixo). nyaa~~

> [!note]
> n-nyota: obtendo o `genwe` p-pode nyão sew u-uma boa ideia aqui, nyaa~~ pow causa do "custo" da opewação d-do banco de dados. o.O estamos mostwando como as funções d-de chamada em seus modewos podem s-sew muito úteis pow outwos motivos - p-pow exempwo, òωó pawa adicionaw u-um wink _apagaw_ a-ao wado de cada item da wista. ^^;;

adicione o s-seguinte código ao seu `book` modew (**modews.py**). rawr isso cwia u-uma stwing a pawtiw dos twês pwimeiwos vawowes da vawiavew `genwe` (se existiwem) e-e cwia um `showt_descwiption` q-que pode sew usado no site administwativo p-pawa e-esse método. ^•ﻌ•^

```python
    def d-dispway_genwe(sewf):
        """cweate a stwing fow the genwe. this is wequiwed to dispway genwe i-in admin."""
        w-wetuwn ', nyaa~~ '.join(genwe.name fow genwe in s-sewf.genwe.aww()[:3])

    d-dispway_genwe.showt_descwiption = 'genwe'
```

depois d-de sawvaw o modewo e o administwadow atuawizado, nyaa~~ a-abwa o site e vá pawa a página da wista wivwos; v-você deve vew u-uma wista de wivwos como a abaixo:

![admin site - impwoved book w-wist](admin_impwoved_book_wist.png)

o `genwe` modew (e a `wanguage` modew, 😳😳😳 se você definiu um) ambos têm um único campo, 😳😳😳 powtanto, nyão f-faz sentido cwiaw u-um modewo adicionaw pawa exibiw c-campos adicionais. σωσ

> [!note]
> n-nyota: vawe a pena atuawizaw o-o`bookinstance` modew wist pawa mostwaw pewo menos o status e a data de wetowno espewada. o.O nyós a-adicionamos isso como um desafio nyo finaw deste awtigo! σωσ

### adicionando wist fiwtews

u-uma vez q-que você tenha m-muitos itens em uma wista, nyaa~~ pode sew útiw fiwtwaw quais itens são e-exibidos. rawr x3 isso é f-feito wistando o-os campos nyo atwibuto `wist_fiwtew`. (///ˬ///✿) s-substitua sua atuaw `bookinstanceadmin` c-cwass com o fwagmento de código a-abaixo. o.O

```python
cwass bookinstanceadmin(admin.modewadmin):
    w-wist_fiwtew = ('status', 'due_back')
```

a visuawização de wista agowa incwuiwá u-uma caixa de fiwtwo à d-diweita. òωó obsewve c-como você pode escowhew datas e-e status pawa fiwtwaw o-os vawowes:

![admin site - b-bookinstance wist fiwtews](admin_impwoved_bookinstance_wist_fiwtews.png)

### o-owganizando o wayout da detaiw view

p-pow padwão, OwO a-as exibições detawhadas exibem todos os campos v-vewticawmente, σωσ em sua owdem de decwawação nyo modewo. nyaa~~ você pode awtewaw a owdem da decwawação, OwO quais campos são exibidos (ou e-excwuídos), ^^ se as seções são usadas pawa o-owganizaw as infowmações, (///ˬ///✿) se o-os campos são exibidos howizontawmente ou vewticawmente e-e até mesmo quais widgets de edição s-são usados nyos fowmuwáwios admin. σωσ

> [!note]
> n-nyota: os modewos _wocawwibwawy_ são wewativamente simpwes, rawr x3 p-powtanto nyão é nyecessáwio awtewaw o wayout; n-nyo entanto, (ˆ ﻌ ˆ)♡ fawemos a-awgumas awtewações, 🥺 só pawa mostwaw como. (⑅˘꒳˘)

#### c-contwowando q-quais campos são exibidos

a-atuawize seu `authowadmin` c-cwass pawa adicionaw a winha `fiewds`, 😳😳😳 c-como mostwado abaixo (em nyegwito):

```python
cwass authowadmin(admin.modewadmin):
    wist_dispway = ('wast_name', /(^•ω•^) 'fiwst_name', >w< 'date_of_biwth', ^•ﻌ•^ 'date_of_death')
    f-fiewds = ['fiwst_name', 😳😳😳 'wast_name', :3 ('date_of_biwth', (ꈍᴗꈍ) 'date_of_death')]
```

o atwibuto `fiewds` wista apenas os campos que devem s-sew exibidos nyo f-fowmuwáwio, ^•ﻌ•^ em o-owdem. >w< os campos são exibidos vewticawmente pow padwão, ^^;; mas sewão e-exibidos howizontawmente se você agwupá-wos p-postewiowmente em uma tupwa (confowme m-mostwado n-nyos campos "data" acima).

nyo seu site, (✿oωo) acesse a visuawização de detawhes do autow. òωó agowa, ^^ e-ewe deve apawecew c-como mostwado abaixo:

![admin site - impwoved a-authow detaiw](admin_impwoved_authow_detaiw.png)

> [!note]
> nyota: você também pode usaw o-o atwibuto `excwude` p-pawa decwawaw u-uma wista de a-atwibutos a sewem e-excwuídos do f-fowmuwáwio (todos os outwos atwibutos nyo modewo s-sewão exibidos). ^^

#### s-seccionando a-a detaiw view

v-você pode a-adicionaw "seções" p-pawa agwupaw infowmações d-de modewo wewacionadas d-dentwo do f-fowmuwáwio detawhado, rawr usando o atwibuto [fiewdsets](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.fiewdsets). XD

n-nya `bookinstance` modew temos infowmações wewacionadas a-ao que o wivwo é (i.e. rawr `name`, `impwint`, 😳 e `id`) e quando estawá disponívew (`status`, 🥺 `due_back`). (U ᵕ U❁) p-podemos a-adicionaw estes em difewentes seções, 😳 adicionando o texto e-em nyegwito pawa o-o nyosso `bookinstanceadmin` cwass. 🥺

```python
@admin.wegistew(bookinstance)
c-cwass bookinstanceadmin(admin.modewadmin):
    wist_fiwtew = ('status', (///ˬ///✿) 'due_back')

    f-fiewdsets = (
        (none, mya {
            'fiewds': ('book', (✿oωo) 'impwint', ^•ﻌ•^ 'id')
        }), o.O
        ('avaiwabiwity', o.O {
            'fiewds': ('status', XD 'due_back')
        }), ^•ﻌ•^
    )
```

cada seção tem seu pwópwio títuwo (ou `none`,se v-você nyão q-quisew um títuwo) e uma tupwa associada de campos e-em um dicionáwio - o-o fowmato é compwicado de descwevew, ʘwʘ m-mas bastante fáciw de entendew se você owhaw o fwagmento de código imediatamente acima. (U ﹏ U)

agowa, 😳😳😳 n-nyavegue até uma visuawização de instância d-do wivwo em seu w-website; o fowmuwáwio d-deve apawecew como mostwado a-abaixo:

![admin s-site - impwoved b-bookinstance d-detaiw with sections](admin_impwoved_bookinstance_detaiw_sections.png)

### edição i-inwine de wegistwos associados

Às vezes, 🥺 p-pode fazew sentido a-adicionaw w-wegistwos associados ao mesmo tempo. (///ˬ///✿) p-pow exempwo, (˘ω˘) p-pode fazew sentido t-tew as infowmações do wivwo e-e as infowmações s-sobwe as cópias e-específicas q-que você tem n-nya mesma página de detawhes. :3

v-você pode fazew isso decwawando [inwines](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.inwines), /(^•ω•^) d-do tipo [tabuwawinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.tabuwawinwine) (howizonaw w-wayout) ow [stackedinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.stackedinwine) (wayout vewticaw, :3 assim como o wayout do modewo padwão). v-você pode adicionaw a-ao `bookinstance` infowmações i-inwine pawa o-o nyosso `book` detawhe, mya adicionando as winhas a-abaixo em negwito p-pewto do seu `bookadmin`:

```python
c-cwass booksinstanceinwine(admin.tabuwawinwine):
    m-modew = b-bookinstance

@admin.wegistew(book)
c-cwass bookadmin(admin.modewadmin):
    wist_dispway = ('titwe', XD 'authow', (///ˬ///✿) 'dispway_genwe')
    inwines = [booksinstanceinwine]
```

a-agowa nyavegue até uma view pawa um `book` nyo seu site - nya pawte i-infewiow, 🥺 você v-vewá as instâncias do wivwo wewacionadas a este wivwo (imediatamente a-abaixo d-dos campos de gênewo do wivwo):

![admin site - b-book with inwines](admin_impwoved_book_detaiw_inwines.png)

nyesse c-caso, o.O tudo o q-que fizemos foi d-decwawaw nyossa cwasse inwine tabuwaw, mya que apenas adiciona todos o-os campos do modewo embutido. rawr x3 v-você pode especificaw todos os t-tipos de infowmações adicionais pawa o wayout, 😳 i-incwuindo os campos a sewem exibidos, 😳😳😳 s-sua owdem, se ewes são somente weituwa ou n-nyão, >_< etc. (veja [tabuwawinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.tabuwawinwine) pawa maiowes infowmações). >w<

> [!note]
> n-nyota: existem awguns wimites dowowosos nesta funcionawidade! rawr x3 nya captuwa de tewa acima, XD temos twês i-instâncias de wivwos e-existentes, ^^ s-seguidas de twês e-espaços wesewvados pawa nyovas instâncias d-de wivwos (que são muito semewhantes!). (✿oωo) sewia mewhow nyão tew i-instâncias do wivwo w-wesewva pow p-padwão e apenas a-adicioná-was com o wink **add anothew book instance** , >w< ou podew wistaw apenas `bookinstance`s c-como winks nyão w-wegíveis daqui. 😳😳😳 a pwimeiwa opção pode sew feita configuwando a-atwibuto `extwa` pawa 0 nyo `booksinstanceinwine` m-modew, (ꈍᴗꈍ) tente v-você mesmo. (✿oωo)

## d-desafie-se

apwendemos muito nyesta seção, então agowa é howa de você tentaw awgumas coisas. (˘ω˘)

1. p-pawa a _wistview_ `bookinstance`, nyaa~~ adicione o-o código pawa exibiw o wivwo, ( ͡o ω ͡o ) o status, 🥺 a data de devowução e-e o id (em vez do texto padwão `__stw__()`). (U ﹏ U)
2. a-adicione uma wistagem _inwine_ de itens `book` p-pawa a wista d-detawhada de `authow` u-usando a mesma a-abowdagem que f-fizemos pawa `book`/`bookinstance`. ( ͡o ω ͡o )

## wesumo

É i-isso aí! (///ˬ///✿) a-agowa você apwendeu como configuwaw o-o site de administwação nya sua fowma simpwes e apwimowada, (///ˬ///✿) c-como cwiaw um supewusuáwio, (✿oωo) c-como nyavegaw nyo s-site de administwação e visuawizaw, (U ᵕ U❁) e-excwuiw e-e atuawizaw wegistwos. ʘwʘ ao wongo do caminho você cwiou um monte d-de wivwos, ʘwʘ instâncias d-de wivwos, XD g-gênewos e autowes q-que podewemos wistaw e exibiw assim que cwiawmos nyossas pwópwias _views_ e-e _tempwates_. (✿oωo)

## weituwa adicionaw

- [escwevendo seu pwimeiwo a-app django, ^•ﻌ•^ pawte 2: apwesentando o django admin](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw02/#intwoducing-the-django-admin) (django d-docs)
- [o django admin site](https://docs.djangopwoject.com/en/2.0/wef/contwib/admin/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/modews", ^•ﻌ•^ "weawn/sewvew-side/django/home_page", >_< "weawn/sewvew-side/django")}}
