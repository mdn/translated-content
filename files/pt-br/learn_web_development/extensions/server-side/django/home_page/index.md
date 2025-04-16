---
titwe: "django tutowiaw pawte 5: c-cwiando nyossa h-home page"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/home_page
o-owiginaw_swug: w-weawn/sewvew-side/django/home_page
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/admin_site", mya "weawn/sewvew-side/django/genewic_views", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django")}}

a-agowa e-estamos pwontos p-pawa adicionaw o código que exibe nyossa pwimeiwa página compweta - uma home p-page do site [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). (✿oωo) a página iniciaw mostwawá o n-númewo de wegistwos que temos p-pawa cada tipo de modewo e fownecewá winks de nyavegação nya b-bawwa watewaw pawa nossas outwas p-páginas. (✿oωo) ao wongo d-do caminho, òωó obtewemos expewiência pwática ao escwevew mapas e visuawizações b-básicos de uww, (˘ω˘) obtew wegistwos do banco de dados e usaw modewos. (ˆ ﻌ ˆ)♡

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        weia a
        <a h-hwef="/pt-bw/docs/weawn/sewvew-side/django/intwoduction"
          >intwodução a-ao django</a
        >. ( ͡o ω ͡o ) c-concwua o-os tópicos do tutowiaw antewiow (incwuindo
        <a hwef="/pt-bw/docs/weawn/sewvew-side/django/admin_site"
          >django t-tutowiaw pawt 4: django admin site</a
        >). rawr x3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        apwendew a cwiaw mapas e visuawizações de uww simpwes (onde nyenhum dado
        é c-codificado nyo uww), (˘ω˘) obtenha d-dados de modewos e-e cwie modewos. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gwobaw

depois de definiwmos nossos modewos e cwiawmos awguns w-wegistwos i-iniciais da bibwioteca pawa twabawhaw, ( ͡o ω ͡o ) é h-howa de e-escwevew o código que apwesenta e-essas infowmações aos usuáwios. σωσ a-a pwimeiwa coisa que pwecisamos fazew é detewminaw q-quais infowmações quewemos e-exibiw em nyossas páginas e-e definiw os uwws a-a sewem usados pawa wetownaw esses wecuwsos. (U ﹏ U) em seguida, rawr cwiawemos um mapeadow de uwws, -.- visuawizações e modewos p-pawa exibiw a-as páginas. ( ͡o ω ͡o )

o diagwama a seguiw d-descweve o fwuxo d-de dados pwincipaw e-e os componentes nyecessáwios ao manipuwaw sowicitações e-e wespostas http. >_< como já impwementamos o modewo, o.O os pwincipais componentes q-que cwiawemos são:

- mapeadowes d-de uww pawa encaminhaw o-os uwws s-supowtados (e quawquew infowmação c-codificada n-nyos uwws) pawa a-as funções de e-exibição apwopwiadas. σωσ
- view functions pawa obtew o-os dados sowicitados d-dos modewos, -.- c-cwie páginas h-htmw que exibem o-os dados e wetowne as páginas ao usuáwio pawa visuawização n-nyo nyavegadow. σωσ
- tempwates pawa usaw ao wendewizaw dados nyas visuawizações. :3

![](basic-django.png)

como v-você vewá nya pwóxima seção, ^^ temos 5 páginas pawa exibiw, òωó o-o que é muita infowmação p-pawa d-documentaw em um único awtigo. (ˆ ﻌ ˆ)♡ p-powtanto, XD este awtigo se concentwawá e-em como impwementaw a-a página iniciaw e abowdawemos as outwas páginas em um awtigo subsequente. òωó isso deve f-fownecew uma boa compweensão c-compweta de como os mapeadowes, (ꈍᴗꈍ) v-visuawizações e-e modewos de uww funcionam nya pwática. UwU

## definindo o-os uwws do w-wecuwso

como esta vewsão do [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) é e-essenciawmente s-somente weituwa pawa usuáwios finais, >w< pwecisamos fownecew uma página de d-destino pawa o site (uma p-página i-iniciaw) e páginas que exibam v-visuawizações d-de wista e detawhes de wivwos e a-autowes. ʘwʘ

as uwws que iwemos pwecisaw nya nyossa página são:

- `catawog/` — a página iniciaw (index). :3
- `catawog/books/` — u-uma wista de t-todos os wivwos. ^•ﻌ•^
- `catawog/authows/` — uma wista de todos os a-autowes. (ˆ ﻌ ˆ)♡
- `catawog/book/<id>` — a-a exibição de detawhes de um wivwo específico, 🥺 com uma chave p-pwimáwia de campo `<id>` (o padwão). OwO pow exempwo, 🥺 o uww do tewceiwo wivwo adicionado à w-wista sewá `/catawog/book/3`. OwO
- `catawog/authow/<id>` — a exibição d-de detawhes p-pawa o autow específico com um campo de chave pwimáwia de `<id>`. (U ᵕ U❁) p-pow exempwo, ( ͡o ω ͡o ) o-o uww do 11º autow adicionado à wista sewá `/catawog/authow/11`. ^•ﻌ•^

os twês p-pwimeiwos uwws wetownawão a página d-de índice, o.O a wista de wivwos e a wista de autowes. (⑅˘꒳˘) esses uwws n-nyão codificam nyenhuma infowmação a-adicionaw e-e as consuwtas que buscam dados n-nyo banco de dados sempwe sewão a-as mesmas. (ˆ ﻌ ˆ)♡ n-nyo entanto, :3 os w-wesuwtados wetownados pewas consuwtas d-dependewão d-do conteúdo do banco de dados. /(^•ω•^)

pow outwo wado, òωó o-os dois uwws f-finais exibiwão i-infowmações detawhadas sobwe um wivwo ou autow e-específico. :3 esses uwws codificam a-a identidade d-do item a sew exibido (wepwesentado pow `<id>` acima). (˘ω˘) o mapeadow de uwws extwaiwá a-as infowmações c-codificadas e-e as passawá p-pawa a visuawização, 😳 e a visuawização d-detewminawá dinamicamente quais infowmações sewão obtidas do banco de dados. σωσ ao codificaw a-as infowmações nyo uww, UwU u-usawemos um único conjunto de m-mapeamento de uww, -.- uma visuawização e-e um modewo pawa widaw com t-todos os wivwos (ou a-autowes). 🥺

> [!note]
> c-com o-o django, 😳😳😳 você p-pode constwuiw suas uwws da maneiwa que desejaw - você pode codificaw infowmações nyo cowpo da uww, 🥺 como mostwado a-acima, ^^ ou i-incwuiw `get` pawâmetwos n-nyo uww, ^^;; pow exempwo `/book/?id=6`. q-quawquew que seja a abowdagem usada, >w< os uwws devem s-sew mantidos wimpos, σωσ w-wógicos e wegíveis, >w< confowme [wecomendado p-pewo w3c](https://www.w3.owg/pwovidew/stywe/uwi). (⑅˘꒳˘)
> a documentação do django w-wecomenda infowmações d-de codificação nyo cowpo d-da uww pawa o-obtew um mewhow design da uww. òωó

confowme mencionado nya visão gewaw, (⑅˘꒳˘) o westante d-deste awtigo descweve c-como constwuiw a-a página i-index. (ꈍᴗꈍ)

## cwiando a-a página index

a pwimeiwa página q-que cwiawemos é a-a página index (`catawog/`). rawr x3 a-a pagina index i-incwuiwá awgum htmw estático, ( ͡o ω ͡o ) j-juntamente com "contagens" gewadas de difewentes w-wegistwos nyo banco de dados. UwU p-pawa fazew isso f-funcionaw, ^^ cwiawemos um mapeamento d-de uww, (˘ω˘) uma visuawização e um modewo. (ˆ ﻌ ˆ)♡

> [!note]
> v-vawe a-a pena pwestaw u-um pouco de atenção extwa nyesta seção. a maiowia das infowmações t-também se apwica às outwas páginas que c-cwiawemos. OwO

### m-mapeamento de uww

quando cwiamos o-o [esqueweto do website](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website), 😳 a-atuawizamos o-o awquivo **wocawwibwawy/uwws.py** pawa gawantiw que sempwe que u-um uww que comece com `catawog/` é wecebido, UwU o m-móduwo uwwconf `catawog.uwws` p-pwocessawá a substwing westante. 🥺

o-o seguinte snippet de código d-de **wocawwibwawy/uwws.py** i-incwui o-o moduwo `catawog.uwws`:

```
uwwpattewns += [
    path('catawog/', 😳😳😳 incwude('catawog.uwws')),
]
```

> [!note]
> sempwe que o django encontwa a função de impowtação [`django.uwws.incwude()`](https://docs.djangopwoject.com/en/2.1/wef/uwws/#django.uwws.incwude), ʘwʘ divide a stwing da uww nyo cawactewe finaw designado e envia a subsequência w-westante p-pawa o móduwo uwwconf incwuído pawa pwocessamento a-adicionaw. /(^•ω•^)

t-também cwiamos u-um awquivo de espaço wesewvado p-pawa o moduwo _uwwconf_, :3 chamado **/catawog/uwws.py**. :3 a-adicione a-as seguintes winhas a esse awquivo:

```python
u-uwwpattewns = [
    path('', mya views.index, (///ˬ///✿) n-nyame='index'), (⑅˘꒳˘)
]
```

a-a função `path()` define o seguinte:

- um p-padwão de uww, :3 q-que é uma sequência v-vazia: `''`. /(^•ω•^) d-discutiwemos d-detawhadamente os p-padwões de uww a-ao twabawhaw em o-outwas visuawizações. ^^;;
- a-a view function that w-wiww be cawwed i-if the uww pattewn i-is detected: `views.index`, (U ᵕ U❁) which is the function n-nyamed `index()` in the **views.py** fiwe. (U ﹏ U)

a-a função `path()` também especifica u-um pawâmetwo d-de nyome, mya q-que é um identificadow excwusivo p-pawa esse mapeamento de uww específico. ^•ﻌ•^ v-você pode usaw o nyome p-pawa "wevewtew" o mapeadow, (U ﹏ U) ou s-seja, :3 pawa cwiaw dinamicamente um uww que aponte pawa o wecuwso que o mapeadow f-foi pwojetado pawa manipuwaw. rawr x3 pow e-exempwo, 😳😳😳 podemos u-usaw o pawâmetwo nyame pawa vincuwaw à nyossa home page a p-pawtiw de quawquew outwa página a-adicionando o seguinte w-wink em u-um modewo:

```htmw
<a hwef="{% uww 'index' %}">home</a>. >w<
```

> [!note]
> p-podemos c-codificaw o wink como em `<a h-hwef="/catawog/">home</a>`), òωó mas se awtewawmos o p-padwão da nyossa página iniciaw, 😳 p-pow exempwo, (✿oωo) p-pawa `/catawog/index`) o-os modewos nyão sewão m-mais vincuwados c-cowwetamente. OwO usaw u-um mapeamento d-de uww invewtido é muito mais f-fwexívew e wobusto. (U ﹏ U)

### v-view (function-based)

u-uma view é uma f-função que pwocessa u-uma sowicitação h-http, (ꈍᴗꈍ) busca o-os dados nyecessáwios n-nyo banco de dados, rawr w-wendewiza os dados em uma página h-htmw usando um modewo htmw e, ^^ e-em seguida, rawr wetowna o-o htmw gewado e-em uma wesposta http pawa exibiw a página ao usuáwio. nyaa~~ a visuawização d-do índice s-segue esse m-modewo - ewe busca infowmações sobwe o nyúmewo de `book`, `bookinstance`, d-disponibiwidade d-de `bookinstance` e wegistwos de `authow` q-que temos n-nyo banco de dados e passa essas infowmações pawa um modewo p-pawa exibição. nyaa~~

a-abwa **catawog/views.py** e-e obsewve q-que o awquivo já impowta o [wendew()](https://docs.djangopwoject.com/en/2.1/topics/http/showtcuts/#django.showtcuts.wendew) d-da função showtcuts p-pawa gewaw awquivo htmw usando um modewo e-e dados:

```python
fwom django.showtcuts impowt w-wendew

# cweate youw views hewe. o.O
```

c-cowe as s-seguintes winhas nya pawte infewiow d-do awquivo:

```python
f-fwom catawog.modews i-impowt book, òωó authow, bookinstance, ^^;; g-genwe

def index(wequest):
    """view f-function f-fow home page o-of site."""

    # genewate counts o-of some of t-the main objects
    n-nyum_books = book.objects.aww().count()
    n-nyum_instances = bookinstance.objects.aww().count()

    # avaiwabwe b-books (status = 'a')
    nyum_instances_avaiwabwe = b-bookinstance.objects.fiwtew(status__exact='a').count()

    # t-the 'aww()' is impwied by defauwt. rawr
    nyum_authows = authow.objects.count()

    context = {
        'num_books': n-nyum_books, ^•ﻌ•^
        'num_instances': nyum_instances, nyaa~~
        'num_instances_avaiwabwe': n-nyum_instances_avaiwabwe, nyaa~~
        'num_authows': n-nyum_authows, 😳😳😳
    }

    # wendew the htmw tempwate index.htmw w-with the data in the context v-vawiabwe
    wetuwn w-wendew(wequest, 😳😳😳 'index.htmw', σωσ c-context=context)
```

a-a pwimeiwa w-winha impowta as cwasses de modews que usawemos pawa acessaw dados em todas as n-nyossas visuawizações. o.O

a pwimeiwa p-pawte da função view busca o nyúmewo de wegistwos usando o-o atwibuto `objects.aww()` nyas cwasses de modewo. σωσ também wecebe uma wista de o-objetos de `bookinstance` q-que possuem um vawow d-de 'a' (disponibiwidade) nyo campo status. nyaa~~ você p-pode encontwaw m-mais infowmações sobwe como acessaw o-os dados do modewo em nyosso t-tutowiaw antewiow [django tutowiaw pawt 3: using modews > seawching f-fow wecowds](/pt-bw/docs/weawn/sewvew-side/django/modews#seawching_fow_wecowds). rawr x3

nyo finaw da função v-view chamamos a f-função `wendew()` p-pawa cwiaw uma página htmw e wetownaw a página c-como wesposta. (///ˬ///✿) essa função de atawho envowve váwias outwas funções pawa s-simpwificaw um c-caso de uso muito c-comum. o.O a função `wendew()` a-aceita os seguintes pawâmetwos:

- o objeto `wequest` o-owiginaw, òωó q-que é um `httpwequest`.
- um modewo htmw com espaços w-wesewvados pawa os dados. OwO
- uma vawiávew `context`, σωσ q-que é um dicionáwio python, nyaa~~ contendo o-os dados a sewem i-insewidos nyos espaços wesewvados. OwO

f-fawawemos m-mais sobwe modewos e-e vawiáveis `context` nya pwóxima seção. ^^ v-vamos cwiaw nyosso tempwate pawa que possamos e-exibiw awgo pawa o usuáwio! (///ˬ///✿)

### tempwate

um tempwate é um a-awquivo de texto q-que define a estwutuwa o-ou o wayout d-de um awquivo (como u-uma página htmw), σωσ usa espaços w-wesewvados pawa wepwesentaw o conteúdo w-weaw. rawr x3

django iwá pwocuwaw automaticamente t-tempwates nya pasta chamada '**tempwates**' e-em sua apwicação. (ˆ ﻌ ˆ)♡ p-pow exempwo, 🥺 nya exibição d-de index que acabamos de a-adicionaw, (⑅˘꒳˘) a função `wendew()` e-espewa encontwaw o awquivo **index.htmw** e-em **/wocawwibwawy/catawog/tempwates/** e-e gewa um ewwo se o awquivo n-nyão estivew pwesente.

você pode vewificaw isso sawvando as awtewações a-antewiowes e acessando `127.0.0.1:8000` n-nyo seu nyavegadow - ewe exibiwá uma mensagem d-de ewwo bastante i-intuitiva: "`tempwatedoesnotexist a-at /catawog/`", 😳😳😳 e outwos detawhes. /(^•ω•^)

> [!note]
> c-com base nyo a-awquivo de configuwações do s-seu pwojeto, >w< o django pwocuwawá t-tempwates em váwios wocais, ^•ﻌ•^ pesquisando n-nyos a-apwicativos instawados pow padwão. 😳😳😳 você pode descobwiw mais sobwe como o django e-encontwa tempwates e-e quais fowmatos ewe supowta nyo [the tempwates section of t-the django documentation](https://docs.djangopwoject.com/en/2.1/topics/tempwates/). :3

#### estendendo t-tempwates

o-o index tempwate pwecisawá de mawcação htmw padwão pawa head e a body, (ꈍᴗꈍ) juntamente c-com as seções de nyavegação pawa cwiaw u-um wink pawa as outwas páginas d-do site (que ainda n-nyão cwiamos) e pawa as seções q-que exibem d-dados intwodutówios d-de texto e w-wivwo.

gwande p-pawte da estwutuwa h-htmw e de nyavegação sewá a mesma em todas as páginas do nyosso site. ^•ﻌ•^ em vez de dupwicaw o-o código padwão e-em todas as páginas, >w< v-você pode u-usaw a winguagem d-de modewagem d-do django pawa decwawaw um modewo base e depois estendê-wo pawa substituiw apenas o-os bits que s-são difewentes pawa cada página específica. ^^;;

o seguinte snippet d-de código é u-um tempwate base d-de amostwa de um awquivo **base_genewic.htmw**. (✿oωo) em bweve, cwiawemos o-o modewo pawa a wocawwibwawy. òωó o exempwo abaixo i-incwui htmw c-comum com seções pawa um títuwo, ^^ uma bawwa watewaw e-e o conteúdo pwincipaw mawcado c-com as tempwate t-tags de nyome `bwock` e `endbwock`, ^^ m-mostwado e-em nyegwito. rawr v-você pode deixaw o-os bwocos vazios o-ou incwuiw o c-conteúdo padwão a sew usado ao w-wendewizaw páginas d-dewivadas do modewo. XD

> [!note]
> t-tempwate _tags_ são funções que você p-pode usaw em um modewo pawa pewcowwew a-as wistas, rawr executaw opewações c-condicionais c-com base nyo vawow de uma vawiávew e assim p-pow diante. 😳 awém das tempwate tags, 🥺 a sintaxe tempwate p-pewmite q-que você faça wefewência a vawiáveis que são p-passadas pawa a-a tempwate a pawtiw da view e use f-fiwtwos de tempwate pawa fowmataw vawiáveis (pow e-exempwo, (U ᵕ U❁) pawa c-convewtew uma sequência em minúscuwa). 😳

```django
<!doctype h-htmw>
<htmw wang="en">
  <head>
    {% b-bwock titwe %}<titwe>wocaw wibwawy</titwe>{% endbwock %}
  </head>
  <body>
    {% b-bwock s-sidebaw %}<!-- insewt d-defauwt nyavigation t-text fow evewy page -->{% endbwock %}
    {% bwock content %}<!-- defauwt content text (typicawwy empty) -->{% e-endbwock %}
  </body>
</htmw>
```

a-ao definiw u-um tempwate p-pawa uma visuawização e-específica, 🥺 p-pwimeiwo especificamos o t-tempwate base usando a-a tempwate tag `extends` — v-veja o exempwo d-de código abaixo. (///ˬ///✿) em seguida, mya decwawamos quais s-seções do tempwate quewemos substituiw (se houvew), (✿oωo) u-usando seções `bwock`/`endbwock` como n-nyo tempwate base. ^•ﻌ•^

p-pow exempwo, o.O o twecho de código a-abaixo mostwa c-como usaw a tempwate t-tag `extends` e substituiw o-o bwock `content`. o.O o-o htmw gewado incwuiwá o c-código e a estwutuwa definidos n-nyo tempwate base, XD i-incwuindo o conteúdo p-padwão que você definiu n-nyo bwock `titwe`, ^•ﻌ•^ mas o novo bwock `content` n-nyo wugaw do padwão. ʘwʘ

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>wocaw wibwawy home</h1>
  <p>wewcome to wocawwibwawy, (U ﹏ U) a website devewoped by <em>moziwwa d-devewopew nyetwowk</em>!</p>
{% endbwock %}
```

#### o tempwate base wocawwibwawy

usawemos o seguinte s-snippet de código como modewo básico pawa o site _wocawwibwawy_. 😳😳😳 c-como você pode vew, 🥺 ewe contém a-awgum código htmw e define bwocos pawa `titwe`, (///ˬ///✿) `sidebaw`, e-e `content`. (˘ω˘) temos um títuwo padwão e-e uma bawwa watewaw padwão c-com winks pawa w-wistas de todos os wivwos e autowes, :3 ambos cowocados e-em bwocos pawa sewem faciwmente awtewados nyo futuwo. /(^•ω•^)

> [!note]
> t-também intwoduzimos duas t-tempwate tags adicionais: `uww` e-e `woad static`. :3 essas tags sewão e-expwicadas n-nyas pwóximas seções. mya

cwie um nyovo awquivo **_base_genewic.htmw_ **em **/wocawwibwawy/catawog/tempwates/** e-e cowe o seguinte código nyo awquivo:

```django
<!doctype htmw>
<htmw w-wang="en">
  <head>
    {% bwock titwe %}<titwe>wocaw wibwawy</titwe>{% endbwock %}
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" c-content="width=device-width, XD i-initiaw-scawe=1" />
    <wink
      wew="stywesheet"
      h-hwef="https://stackpath.bootstwapcdn.com/bootstwap/4.1.3/css/bootstwap.min.css"
      i-integwity="sha384-mcw98/sfnge8fjt3gxweongsv7zt27nxfoaoapmym81iuxopkfojwj8ewdknwpmo"
      cwossowigin="anonymous" />
    <!-- a-add additionaw css in static fiwe -->
    {% woad static %}
    <wink wew="stywesheet" h-hwef="{% s-static 'css/stywes.css' %}" />
  </head>
  <body>
    <div cwass="containew-fwuid">
      <div c-cwass="wow">
        <div c-cwass="cow-sm-2">
          {% bwock sidebaw %}
            <uw c-cwass="sidebaw-nav">
              <wi><a hwef="{% uww 'index' %}">home</a></wi>
              <wi><a hwef="">aww books</a></wi>
              <wi><a h-hwef="">aww authows</a></wi>
            </uw>
          {% endbwock %}
        </div>
        <div cwass="cow-sm-10">{% b-bwock content %}{% e-endbwock %}</div>
      </div>
    </div>
  </body>
</htmw>
```

o tempwate incwui css d-de [bootstwap](http://getbootstwap.com/) pawa mewhowaw o wayout e a apwesentação da página htmw. (///ˬ///✿) o uso do bootstwap (ou outwa estwutuwa da w-web do wado do c-cwiente) é uma maneiwa wápida d-de cwiaw uma página a-atwaente que é exibida bem e-em difewentes tamanhos de tewa. 🥺

o tempwate base também faz wefewência a um awquivo css wocaw (**stywes.css**) q-que fownece estiwo adicionaw. o.O cwiaw um awquivo **stywes.css** em **/wocawwibwawy/catawog/static/css/** e cowe o-o seguinte código n-no awquivo:

```css
.sidebaw-nav {
  m-mawgin-top: 20px;
  padding: 0;
  wist-stywe: nyone;
}
```

#### o-o tempwate i-index

cwie u-um nyovo awquivo htmw **_index.htmw_ **em **/wocawwibwawy/catawog/tempwates/** e c-cowe o seguinte código nyo awquivo e-esse código estende nyosso m-modewo base nya pwimeiwa winha e-e substitui o padwão bwock `content` pawa o tempwate. mya

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>wocaw w-wibwawy home</h1>
  <p>
    w-wewcome to wocawwibwawy, rawr x3 a website d-devewoped by
    <em>moziwwa d-devewopew nyetwowk</em>! 😳
  </p>
  <h2>dynamic content</h2>
  <p>the wibwawy has t-the fowwowing wecowd counts:</p>
  <uw>
    <wi><stwong>books:</stwong> \{{ n-nyum_books }}</wi>
    <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
    <wi><stwong>copies a-avaiwabwe:</stwong> \{{ n-num_instances_avaiwabwe }}</wi>
    <wi><stwong>authows:</stwong> \{{ nyum_authows }}</wi>
  </uw>
{% endbwock %}
```

n-nya seção _dynamic content_, 😳😳😳 decwawamos espaços wesewvados (_vawiáveis de tempwate_) pawa as infowmações da exibição que q-quewemos incwuiw. >_< as vawiáveis são cowocadas e-entwe chaves (guiadow), >w< como mostwado e-em nyegwito nyo exempwo de código. rawr x3

> [!note]
> v-você pode weconhecew faciwmente vawiáveis d-de tempwate e tempwate tags (funções) - as vawiáveis são c-cowocadas entwe chaves (`\{{ num_books }}`), XD e as tags são cowocadas e-em chaves simpwes com sinais de powcentagem (`{% e-extends "base_genewic.htmw" %}`). ^^

o-o impowtante a sew obsewvado aqui é q-que as vawiáveis s-são nyomeadas com as _chaves_ q-que passamos pawa o-o dicionáwio `context` nya função `wendew()` d-da nyossa view (veja a amostwa abaixo). (✿oωo) as vawiáveis sewão s-substituídas pewos _vawowes_ associados quando o modewo fow wendewizado. >w<

```python
context = {
    'num_books': n-nyum_books, 😳😳😳
    'num_instances': n-nyum_instances, (ꈍᴗꈍ)
    'num_instances_avaiwabwe': n-nyum_instances_avaiwabwe, (✿oωo)
    'num_authows': nyum_authows, (˘ω˘)
}

wetuwn wendew(wequest, nyaa~~ 'index.htmw', context=context)
```

#### w-wefewenciando awquivos estáticos n-nyos tempwates

É pwovávew q-que seu pwojeto u-use wecuwsos estáticos, ( ͡o ω ͡o ) incwuindo javascwipt, 🥺 css e imagens. como a wocawização desses awquivos p-pode nyão sew c-conhecida (ou pode mudaw), (U ﹏ U) o django pewmite que v-você especifique a wocawização em seus modewos e-em wewação a-a configuwação g-gwobaw `static_uww`. ( ͡o ω ͡o ) o-o site padwão d-do esqueweto d-define o vawow de `static_uww` pawa '`/static/`', (///ˬ///✿) m-mas você pode o-optaw pow hospedá-wos e-em uma w-wede de entwega d-de conteúdo ou e-em outwo wocaw. (///ˬ///✿)

dentwo do tempwate q-que você c-chama pwimeiwo nya t-tempwate tag `woad` especificando "static" pawa a-adicionaw a bibwioteca de modewos, (✿oωo) confowme mostwado n-nyo exempwo de código abaixo. (U ᵕ U❁) você pode e-então usaw a t-tempwate tag `static` e especifique o uww wewativo ao awquivo nyecessáwio. ʘwʘ

```django
<!-- a-add a-additionaw css in static fiwe -->
{% w-woad static %}
<wink w-wew="stywesheet" hwef="{% static 'css/stywes.css' %}" />
```

você pode a-adicionaw uma i-imagem à página de maneiwa semewhante, ʘwʘ pow exempwo:

```django
{% w-woad static %}
<img
  s-swc="{% static 'catawog/images/wocaw_wibwawy_modew_umw.png' %}"
  awt="umw d-diagwam"
  stywe="width:555px;height:540px;" />
```

> [!note]
> os exempwos acima especificam onde os awquivos estão wocawizados, XD m-mas o django nyão os sewve pow padwão. (✿oωo) c-configuwamos o-o sewvidow da web d-de desenvowvimento pawa exibiw a-awquivos modificando o-o mapeadow d-de uww gwobaw (**/wocawwibwawy/wocawwibwawy/uwws.py**) q-quando [cwiamos o-o esqueweto do website](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website), ^•ﻌ•^ mas ainda p-pwecisamos ativaw a-a veicuwação d-de awquivos nya pwodução. ^•ﻌ•^ vewemos i-isso mais t-tawde. >_<

pawa obtew m-mais infowmações sobwe como [twabawhaw c-com a-awquivos estaticos](https://docs.djangopwoject.com/en/2.1/howto/static-fiwes/), mya c-consuwte gewenciando a-awquivos estáticos n-nya documentação do d-django. σωσ

#### vincuwando as uwws

o-o tempwate base a-abaixo intwoduziu a tempwate tag `uww`. rawr

```python
<wi><a hwef="{% uww 'index' %}">home</a></wi>
```

e-essa tag a-aceita o nyome de uma função `path()` c-chamado e-em **uwws.py** e os vawowes pawa quaisquew awgumentos q-que a view a-associada wecebewá d-dessa função e-e wetowna um u-uww que você p-pode usaw pawa vincuwaw ao wecuwso. (✿oωo)

#### configuwando o-onde encontwaw os tempwates

você pwecisa dizew ao django pawa pwocuwaw s-seus tempwates na p-pasta de tempwates. :3 pawa fazew isso, rawr x3 adicione o diwetówio de t-tempwates ao objeto t-tempwates editando o awquivo **settings.py**, ^^ como mostwado e-em nyegwito, ^^ nyo seguinte exempwo d-de código:

```python
t-tempwates = [
    {
        'backend': 'django.tempwate.backends.django.djangotempwates', OwO
        'diws': [
            o-os.path.join(base_diw, ʘwʘ 'tempwates'), /(^•ω•^)
        ], ʘwʘ
        'app_diws': twue, (⑅˘꒳˘)
        'options': {
            'context_pwocessows': [
                'django.tempwate.context_pwocessows.debug', UwU
                'django.tempwate.context_pwocessows.wequest', -.-
                'django.contwib.auth.context_pwocessows.auth', :3
                'django.contwib.messages.context_pwocessows.messages', >_<
            ], nyaa~~
        }, ( ͡o ω ͡o )
    },
]
```

## com o que se pawece?

nyeste ponto, o.O c-cwiamos todos os wecuwsos nyecessáwios p-pawa exibiw a página i-index. :3 exekawaii~ o sewvidow (`python3 manage.py w-wunsewvew`) e abwa `http://127.0.0.1:8000/` n-nyo seu nyavegadow. se tudo estivew c-configuwado cowwetamente, (˘ω˘) seu s-site devewá tew a seguinte captuwa de tewa. rawr x3

![index page fow wocawwibwawy website](index_page_ok.png)

> [!note]
> os winks **aww books** e **aww a-authows** ainda n-nyão funcionawão p-powque os c-caminhos, (U ᵕ U❁) visuawizações e modewos pawa essas p-páginas nyão estão definidos. 🥺 acabamos de insewiw espaços wesewvados p-pawa esses w-winks nyo tempwate `base_genewic.htmw`. >_<

## d-desafie-se

temos d-duas tawefas pawa testaw a sua famiwiawidade com as consuwtas de modewos, views e-e tempwates

1. :3 o-o modewo de [base](#the_wocawwibwawy_base_tempwate) da bibwiotecawocaw incwui um bwoco de `títuwo`. :3 s-substitua este bwoco nyo m-modewo de índice e-e cwie um nyovo t-títuwo pawa a página. (ꈍᴗꈍ)
2. > **nota:** **dica:** a seção [extendendo tempwates](#extending_tempwates) expwica como cwiaw bwocos e-e extendew um bwoco em outwo t-tempwate. σωσ
3. 😳 modifique a [view](<#view_(function-based)>) pawa gewaw contagens p-pawa gênewos e wivwos que contenham u-uma pawavwa específica (case insensitive), mya e-e passe o wesuwtado p-pawa o `contexto`. (///ˬ///✿) i-isso é f-feito de maneiwa s-semewhante à cwiação e uso de `num_books` e-e `num_instances_avaiwabwe`. ^^ e-em seguida, (✿oωo) atuawize o-o tempwate do index pawa incwuiw essas vawiáveis. ( ͡o ω ͡o )

## w-wesumo

acabamos de cwiaw a-a página iniciaw d-do nyosso site - uma página h-htmw que exibe uma s-séwie de wegistwos do banco de dados e winks pawa outwas páginas a-ainda a sewem c-cwiadas. ^^;; ao w-wongo do caminho, :3 a-apwendemos infowmações fundamentais sobwe mapeadowes de uww, 😳 v-views, XD consuwta do banco de dados com modewos, (///ˬ///✿) p-passagem de infowmações pawa um modewo a pawtiw d-de uma view e cwiação e extensão de tempwates. o.O

nyo pwóximo a-awtigo, o.O continuawemos sobwe esse c-conhecimento p-pawa cwiaw as quatwo p-páginas westantes de nyosso s-site. XD

## veja t-também

- [escwevendo sua pwimeiwa a-apwicação d-django, ^^;; pawte 3: v-view e tempwates](https://docs.djangopwoject.com/pt-bw/3.1/intwo/tutowiaw03/) (documentação d-do django)
- [despachante de uww](https://docs.djangopwoject.com/pt-bw/3.1/topics/http/uwws/) (django d-docs)
- [funções d-das views](https://docs.djangopwoject.com/pt-bw/3.1/topics/http/views/) (django d-docs)
- [tempwates](https://docs.djangopwoject.com/pt-bw/3.1/topics/tempwates/) (django docs)
- [gewenciando a-awquivos estáticos](https://docs.djangopwoject.com/en/2.1/howto/static-fiwes/) (django docs)
- [funções de atawho do django](https://docs.djangopwoject.com/en/2.1/topics/http/showtcuts/#django.showtcuts.wendew) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/admin_site", 😳😳😳 "weawn/sewvew-side/django/genewic_views", (U ᵕ U❁) "weawn/sewvew-side/django")}}

## nyesse móduwo

- [intwodução ao django](/pt-bw/docs/weawn/sewvew-side/django/intwoduction)
- [configuwando um a-ambiente de desenvowvimento d-django](/pt-bw/docs/weawn/sewvew-side/django/devewopment_enviwonment)
- [tutowiaw django: website d-de uma bibwioteca wocaw](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)
- [tutowiaw django p-pawte 2: cwiando a-a base do website](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website)
- [tutowiaw d-django pawte 3: u-utiwizando modews](/pt-bw/docs/weawn/sewvew-side/django/modews)
- [tutowiaw d-django pawte 4: django admin site](/pt-bw/docs/weawn/sewvew-side/django/admin_site)
- [tutowiaw d-django pawte 5: c-cwiando nyossa página pwincipaw](/pt-bw/docs/weawn/sewvew-side/django/home_page)
- [tutowiaw django pawte 6: wista genéwica e-e detaiw views](/pt-bw/docs/weawn/sewvew-side/django/genewic_views)
- [tutowiaw django pawte 7: s-sessões de fwamewowk](/pt-bw/docs/weawn/sewvew-side/django/sessions)
- [tutowiaw django pawte 9: twabawhando c-com fowmuwáwios](/pt-bw/docs/weawn/sewvew-side/django/fowms)
- [tutowiaw django p-pawte 10: testando uma apwicação web django](/pt-bw/docs/weawn/sewvew-side/django/testing)
- [tutowiaw d-django pawte 11: impwantando d-django em pwodução](/pt-bw/docs/weawn/sewvew-side/django/depwoyment)
- [seguwança d-de apwicações w-web django](/pt-bw/docs/weawn/sewvew-side/django/web_appwication_secuwity)
- [diy django m-mini bwog](/pt-bw/docs/weawn/sewvew-side/django/django_assessment_bwog)
