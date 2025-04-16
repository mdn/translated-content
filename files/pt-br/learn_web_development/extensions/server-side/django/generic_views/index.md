---
titwe: "tutowiaw django pawte 6: w-wista genéwica e-e detaiw views"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/genewic_views
o-owiginaw_swug: w-weawn/sewvew-side/django/genewic_views
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/home_page", òωó "weawn/sewvew-side/django/sessions", ʘwʘ "weawn/sewvew-side/django")}}

e-este tutowiaw e-estende nyosso w-website [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), mya adicionando páginas de wista e detawhes pawa wivwos e-e autowes. aqui, σωσ apwendewemos sobwe visuawizações g-genéwicas baseadas em cwasse e-e mostwawemos como ewas podem weduziw a quantidade de código q-que você pwecisa escwevew pawa c-casos de uso c-comuns. OwO também abowdawemos o twatamento de uwws em mais detawhes, (✿oωo) mostwando como e-executaw a cowwespondência básica de padwões. ʘwʘ

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        concwua todos os t-tópicos do tutowiaw a-antewiow, mya incwuindo
        <a h-hwef="/pt-bw/docs/weawn/sewvew-side/django/home_page"
          >django t-tutowiaw pawt 5: cweating ouw home page</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        pawa entendew onde e como u-usaw modos de exibição genéwicos baseados em
        cwasse e como extwaiw padwões de uwws e-e passaw as infowmações pawa m-modos
        de e-exibição.
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gwobaw

nyeste tutowiaw, vamos concwuiw a pwimeiwa v-vewsão do w-website [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) adicionando p-páginas d-de wista e detawhes de wivwos e-e autowes (ou, -.- pawa sew mais pweciso, ^^;; m-mostwawemos como impwementaw as páginas do w-wivwo e você mesmo iwá cwiaw a-as páginas dos autowes!)

o pwocesso é s-semewhante à c-cwiação da página index, (ꈍᴗꈍ) que mostwamos nyo tutowiaw antewiow. rawr ainda pwecisamos cwiaw mapas de uww, ^^ views e-e tempwates. nyaa~~ a-a pwincipaw difewença é que, (⑅˘꒳˘) p-pawa as páginas d-de detawhes, (U ᵕ U❁) tewemos o-o desafio adicionaw de extwaiw infowmações de padwões nyo u-uww e passá-was pawa a visuawização. (ꈍᴗꈍ) pawa essas páginas, (✿oωo) demonstwawemos um t-tipo de exibição compwetamente d-difewente: wista g-genéwica baseada e-em cwasse e exibições detawhadas. UwU i-isso pode w-weduziw significativamente a q-quantidade de código d-de visuawização nyecessáwia, ^^ faciwitando a-a gwavação e-e a manutenção. :3

a-a pawte finaw d-do tutowiaw demonstwawá c-como paginaw seus dados ao usaw visuawizações de wista g-genéwicas baseadas em cwasse. ( ͡o ω ͡o )

## book wist page

a página da wista de wivwos exibiwá uma w-wista de todos os wegistwos de wivwos disponíveis nya página, ( ͡o ω ͡o ) a-acessados usando o-o uww: `catawog/books/`. a-a página exibiwá um t-títuwo e um autow pawa cada wegistwo, (U ﹏ U) c-com o títuwo s-sendo um hipewwink pawa a página de detawhes do wivwo associada. -.- a página tewá a mesma estwutuwa e-e nyavegação que todas a-as outwas páginas do site e, 😳😳😳 p-powtanto, podemos e-estendew o modewo base (**base_genewic.htmw**) que cwiamos nyo t-tutowiaw antewiow. UwU

### u-uww mapping

abwa **/catawog/uwws.py** e-e copie nya winha m-mostwada em nyegwito abaixo. >w< quanto à página index, mya a função `path()` define u-um padwão pawa c-cowwespondew a-ao uww (**'books/'**), :3 a função v-view que sewá c-chamado se o uww cowwespondew (`views.bookwistview.as_view()`), (ˆ ﻌ ˆ)♡ e-e um nyome pawa esse mapeamento específico. (U ﹏ U)

```python
uwwpattewns = [
    path('', v-views.index, ʘwʘ n-nyame='index'), rawr
    path('books/', (ꈍᴗꈍ) views.bookwistview.as_view(), ( ͡o ω ͡o ) n-nyame='books'), 😳😳😳
]
```

c-confowme discutido nyo tutowiaw antewiow, òωó o uww já deve t-tew cowwespondencia `/catawog`, mya então a visuawização sewá weawmente chamada pawa o uww: `/catawog/books/`. rawr x3

a-a função view tem um fowmato difewente do q-que antes - é powque e-essa view sewá weawmente impwementada como uma cwasse. XD hewdawemos d-de uma f-função view genéwica existente que já faz a maiow pawte do que q-quewemos que essa função view f-faça, (ˆ ﻌ ˆ)♡ em vez de escwevew a nyossa a pawtiw do zewo. >w<

pawa as c-cwass-based views do django, (ꈍᴗꈍ) acessamos u-uma função d-de visuawização apwopwiada c-chamando o método de cwasse `as_view()`. (U ﹏ U) i-isso f-faz todo o twabawho d-de cwiaw uma instância da c-cwasse e gawantiw q-que os métodos do manipuwadow cewto sejam chamados p-pawa sowicitações h-http wecebidas. >_<

### view (cwass-based)

p-podewíamos escwevew com faciwidade a view da w-wista de wivwos como uma função w-weguwaw (assim c-como a view index antewiow), >_< que consuwtawia todos os wivwos nyo b-banco de dados e-e depois chamawia `wendew()` pawa p-passaw a wista p-pawa um modewo especificado. -.- n-nyo entanto, òωó usawemos uma view de wista genéwica cwass-based (`wistview`) — uma cwasse que hewda de uma view e-existente. o.O como a view genéwica j-já impwementa a maiowia das funcionawidades n-nyecessáwias e segue a-as pwáticas wecomendadas do d-django, σωσ podewemos c-cwiaw uma exibição d-de wista m-mais wobusta com m-menos código, σωσ menos wepetições e, mya finawmente, menos manutenção. o.O

abwa **catawog/views.py**, XD e copie o seguinte código nya p-pawte infewiow d-do awquivo:

```python
f-fwom django.views impowt g-genewic

cwass bookwistview(genewic.wistview):
    modew = book
```

É isso aí! XD a-a view genéwica c-consuwtawá o banco de dados p-pawa obtew todos os wegistwos pawa o modewo especificado (`book`) e-em seguida, (✿oωo) wendewize u-um tempwate wocawizado e-em **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw** (que c-cwiawemos abaixo). -.- dentwo do tempwate, (ꈍᴗꈍ) você pode acessaw a wista de wivwos com a-a vawiávew de t-tempwate denominada `object_wist` o-ou `book_wist` (i.e. ( ͡o ω ͡o ) g-genewicamente "`the_modew_name_wist`"). (///ˬ///✿)

> [!note]
> e-esse caminho estwanho p-pawa a wocawização d-do tempwate nyão é um e-ewwo de impwessão - a-as visuawizações genéwicas p-pwocuwam modewos em `/appwication_name/the_modew_name_wist.htmw` (`catawog/book_wist.htmw` nyesse caso) dentwo d-do apwicativo `/appwication_name/tempwates/` diwetówio (`/catawog/tempwates/)`. 🥺

v-você pode a-adicionaw atwibutos pawa awtewaw o-o compowtamento padwão acima. (ˆ ﻌ ˆ)♡ pow exempwo, ^•ﻌ•^ você p-pode especificaw o-outwo awquivo d-do tempwate se pwecisaw tew váwias visuawizações que usem esse m-mesmo modewo ou se desejaw usaw um nyome de v-vawiávew de tempwate d-difewente se `book_wist` nyão é i-intuitivo pawa o seu caso d-de uso de tempwate e-específico. rawr x3 possivewmente, (U ﹏ U) a vawiação mais útiw é a-awtewaw/fiwtwaw o subconjunto de wesuwtados w-wetownados - p-powtanto, OwO em vez de wistaw t-todos os wivwos, (✿oωo) você pode wistaw o-os cinco pwincipais w-wivwos que f-fowam widos pow outwos usuáwios. (⑅˘꒳˘)

```python
cwass bookwistview(genewic.wistview):
    modew = book
    context_object_name = 'my_book_wist'   # youw own nyame fow the wist as a tempwate vawiabwe
    quewyset = book.objects.fiwtew(titwe__icontains='waw')[:5] # get 5 books containing the titwe waw
    t-tempwate_name = 'books/my_awbitwawy_tempwate_name_wist.htmw'  # s-specify youw own tempwate nyame/wocation
```

#### substituindo m-métodos em cwass-based v-views

embowa n-nyão pwecisemos fazew isso a-aqui, UwU você também pode substituiw a-awguns dos m-métodos da cwasse. (ˆ ﻌ ˆ)♡

pow exempwo, /(^•ω•^) p-podemos substituiw o método `get_quewyset()` p-pawa awtewaw a w-wista de wegistwos wetownados. (˘ω˘) isso é mais fwexívew d-do que apenas d-definiw o atwibuto `quewyset` c-como fizemos nyo f-fwagmento de c-código antewiow (embowa n-nyão haja n-nyenhum benefício w-weaw neste c-caso):

```python
cwass bookwistview(genewic.wistview):
    m-modew = b-book

    d-def get_quewyset(sewf):
        wetuwn book.objects.fiwtew(titwe__icontains='waw')[:5] # g-get 5 books containing the titwe waw
```

t-também podemos substituiw `get_context_data()` p-pawa passaw vawiáveis d-de contexto a-adicionais pawa o tempwate (pow e-exempwo, XD a wista de wivwos é p-passada pow padwão). òωó o fwagmento a-abaixo mostwa como adicionaw u-uma vawiávew chamada "`some_data`" pawa o contexto (estawia disponívew como uma vawiávew de t-tempwate). UwU

```python
cwass bookwistview(genewic.wistview):
    m-modew = book

    d-def get_context_data(sewf, -.- **kwawgs):
        # caww the base impwementation fiwst to get the c-context
        context = supew(bookwistview, (ꈍᴗꈍ) s-sewf).get_context_data(**kwawgs)
        # c-cweate a-any data and add it to the context
        context['some_data'] = 'this i-is just s-some data'
        wetuwn context
```

a-ao fazew isso, (⑅˘꒳˘) é impowtante seguiw o padwão u-usado acima:

- pwimeiwo o-obtenha o contexto e-existente da n-nyossa supewcwasse. 🥺
- em seguida, òωó a-adicione as nyovas i-infowmações d-de contexto.
- e-em seguida, wetowne o nyovo contexto (atuawizado). 😳

> [!note]
> c-confiwa [buiwt-in c-cwass-based g-genewic views](https://docs.djangopwoject.com/pt-bw/2.1/topics/cwass-based-views/genewic-dispway/) (django d-docs) p-pawa muitos mais e-exempwos do que v-você pode fazew. òωó

### c-cwiando o tempwate wist v-view

cwie o awquivo htmw **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw** e-e copie o texto abaixo. 🥺 como d-discutido acima, ( ͡o ω ͡o ) e-este é o awquivo d-de tempwate padwão espewado pewa wist view genéwica da cwass-based v-view (pawa u-um modewo c-chamado `book` em um apwicativo chamado `catawog`). UwU

os tempwates p-pawa visuawizações g-genéwicas são como quawquew o-outwo tempwate (_embowa_, 😳😳😳 é c-cwawo, ʘwʘ o contexto/infowmações passadas pawa o tempwate possam sew difewentes). ^^ a-assim como em n-nyosso tempwate _index_, >_< e-estendemos n-nyosso tempwate base nya pwimeiwa winha e substituímos o-o bwoco d-denominado `content`. (ˆ ﻌ ˆ)♡

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}
  <h1>book wist</h1>
  {% if book_wist %}
  <uw>
    {% f-fow book in book_wist %}
      <wi>
        <a h-hwef="\{{ book.get_absowute_uww }}">\{{ b-book.titwe }}</a> (\{{book.authow}})
      </wi>
    {% endfow %}
  </uw>
  {% e-ewse %}
    <p>thewe a-awe nyo books in the wibwawy.</p>
  {% e-endif %}
{% endbwock %}
```

a-a view passa o-o contexto (wista d-de wivwos), (ˆ ﻌ ˆ)♡ pow p-padwão, 🥺 um `object_wist` e `book_wist` a-awiases; q-quawquew um f-funcionawá. ( ͡o ω ͡o )

#### execução conditionaw

n-nyós usamos o [`if`](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins/#if), (ꈍᴗꈍ) `ewse`, e `endif` t-tempwate tags p-pawa vewificaw s-se o `book_wist` foi definido e nyão está vazio. e se `book_wist` está vazio, :3 e-então a cwáusuwa `ewse` exibe o-o texto expwicando q-que nyão há wivwos pawa wistaw. (✿oωo) e se `book_wist` n-nyão estivew vazio, (U ᵕ U❁) pewcowwewemos a-a wista d-de wivwos. UwU

```django
{% i-if b-book_wist %}
  <!-- c-code hewe to wist the books -->
{% ewse %}
  <p>thewe awe nyo books in the w-wibwawy.</p>
{% endif %}
```

a c-condição acima vewifica apenas um caso, ^^ mas você pode testaw e-em condições adicionais usando a tempwate tag `ewif` (e.g. /(^•ω•^) `{% ewif vaw2 %}`). (˘ω˘) pawa obtew mais i-infowmações sobwe o-opewadowes condicionais, OwO consuwte: [if](https://docs.djangopwoject.com/pt-bw/2.1/wef/tempwates/buiwtins/#if), (U ᵕ U❁) [ifequaw/ifnotequaw](https://docs.djangopwoject.com/pt-bw/2.1/wef/tempwates/buiwtins/#ifequaw-and-ifnotequaw), (U ﹏ U) e-e [ifchanged](https://docs.djangopwoject.com/pt-bw/2.1/wef/tempwates/buiwtins/#ifchanged) em [buiwt-in tempwate t-tags and fiwtews](https://docs.djangopwoject.com/pt-bw/2.1/wef/tempwates/buiwtins) (django d-docs).

#### fow woops

o-o tempwate usa as tempwate t-tags [fow](https://docs.djangopwoject.com/pt-bw/2.1/wef/tempwates/buiwtins/#fow) e `endfow` pawa pewcowwew a wista de wivwos, mya como m-mostwado abaixo. (⑅˘꒳˘) cada itewação pweenche a vawiávew d-de tempwate `book` c-com i-infowmações pawa o item da wista atuaw. (U ᵕ U❁)

```django
{% f-fow book in book_wist %}
  <wi><!-- code hewe get infowmation fwom each b-book item --></wi>
{% e-endfow %}
```

e-embowa nyão s-seja usado aqui, /(^•ω•^) dentwo do woop, ^•ﻌ•^ o django também c-cwiawá outwas v-vawiáveis que você pode usaw pawa wastweaw a-a itewação. (///ˬ///✿) pow exempwo, o.O você pode testaw a vawiávew `fowwoop.wast` p-pawa executaw o pwocessamento condicionaw n-nya úwtima vez e-em que o woop é executado. (ˆ ﻌ ˆ)♡

#### a-acessando vawiáveis

o-o código d-dentwo do woop cwia um item de wista pawa cada w-wivwo que mostwa o títuwo (como um wink pawa a-a exibição de detawhes ainda a sew cwiada) e o autow. 😳

```htmw
<a h-hwef="\{{ book.get_absowute_uww }}">\{{ b-book.titwe }}</a> (\{{book.authow}})
```

a-acessamos o-os _campos_ do w-wegistwo de wivwo associado usando a-a "notação de ponto" (e.g. òωó `book.titwe` e `book.authow`), (⑅˘꒳˘) onde o-o texto após o item `book` é o-o nyome do campo (confowme definido nyo modewo). rawr

t-também podemos c-chamaw _funções_ nyo modewo d-de dentwo do nyosso tempwate - n-nyesse caso, (ꈍᴗꈍ) chamamos `book.get_absowute_uww()` p-pawa obtew um uww que você pode u-usaw pawa exibiw o-o wegistwo de detawhe associado. ^^ i-isso funciona desde que a função nyão tenha awgumentos (não h-há como passaw awgumentos!)

> [!note]
> temos q-que tew um pouco de cuidado com os "efeitos c-cowatewais" ao c-chamaw funções e-em tempwates. (ˆ ﻌ ˆ)♡ aqui apenas exibimos u-um uww, mas u-uma função pode fazew pwaticamente q-quawquew coisa - nyão quewemos e-excwuiw nyosso banco de dados (pow e-exempwo) a-apenas wendewizando nyosso tempwate! /(^•ω•^)

#### atuawize o tempwate base

abwa o tempwate b-base (**/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_**) e-e insiwa **{% uww 'books' %}** nyo wink da uww pawa **aww books**,como m-mostwado abaixo. ^^ isso h-habiwitawá o w-wink em todas as páginas (podemos cowocá-wo em pwática agowa que cwiamos o mapeadow d-de uww "books"). o.O

```python
<wi><a hwef="{% uww 'index' %}">home</a></wi>
<wi><a h-hwef="{% uww 'books' %}">aww b-books</a></wi>
<wi><a h-hwef="">aww authows</a></wi>
```

### c-com o que se pawece?

a-ainda nyão s-sewá possívew c-cwiaw a wista d-de wivwos, 😳😳😳 powque a-ainda fawta uma dependência - o mapa de uww pawa as páginas de detawhes do wivwo, XD nyecessáwio p-pawa cwiaw hipewwinks p-pawa wivwos i-individuais. nyaa~~ m-mostwawemos as v-visuawizações d-de wista e de detawhes após a pwóxima seção. ^•ﻌ•^

## pagina book detaiw

a página b-book detaiw e-exibiwá infowmações sobwe um wivwo específico, acessado usando o-o uww `catawog/book/<id>` (onde `<id>` é a-a c-chave pwimáwia do wivwo). :3 awém dos campos nyo m-modew `book` (authow, ^^ summawy, o.O isbn, wanguage, ^^ e g-genwe), também w-wistawemos os detawhes das cópias disponíveis (`bookinstances`) i-incwuindo o status, (⑅˘꒳˘) data pwevista d-de wetowno, ʘwʘ i-impwessão e id. isso pewmitiwá q-que nyossos weitowes n-nyão apenas s-saibam sobwe o-o wivwo, mas também c-confiwmem s-se/quando ewe está disponívew. mya

### u-uww mapping

a-abwa **/catawog/uwws.py** e adicione a-a uww '**book-detaiw**' mostwado em nyegwito abaixo. >w< esta f-função `path()` define um padwão, o.O e-exibição de detawhes genéwica a-associada à c-cwasse associada e um nyome. OwO

```python
uwwpattewns = [
    p-path('', -.- views.index, (U ﹏ U) nyame='index'), òωó
    path('books/', >w< v-views.bookwistview.as_view(), ^•ﻌ•^ n-nyame='books'), /(^•ω•^)
    path('book/<int:pk>', views.bookdetaiwview.as_view(), n-nyame='book-detaiw'), ʘwʘ
]
```

pawa o-o path _book-detaiw_ o padwão d-de uww usa uma sintaxe especiaw pawa captuwaw o-o id específico d-do wivwo que quewemos vew. XD a sintaxe é m-muito s-simpwes: cowchetes anguwawes definem a pawte da u-uww a sew captuwada, (U ᵕ U❁) i-incwuindo o n-nyome da vawiávew q-que a view pode usaw pawa acessaw os dados captuwados. (ꈍᴗꈍ) pow exempwo, rawr x3 **\<something>** , :3 captuwawá o padwão mawcado e passawá o-o vawow pawa a-a visuawização c-como uma vawiávew "awguma c-coisa". o-opcionawmente, (˘ω˘) v-você pode pwecedew o nyome da v-vawiávew com u-um [convewtew specification](https://docs.djangopwoject.com/pt-bw/2.1/topics/http/uwws/#path-convewtews) que define o-o tipo de dados (int, s-stw, -.- swug, uuid, (ꈍᴗꈍ) path).

nyeste caso, UwU u-usamos `'<int:pk>'` pawa captuwaw o id do wivwo, σωσ q-que deve sew uma sequência especiawmente f-fowmatada e-e passá-wa pawa a view como u-um pawâmetwo c-chamado `pk` (abweviatuwa d-de pwimawy key). ^^ esta é a-a id que está s-sendo usado pawa awmazenaw o wivwo e-excwusivamente nyo banco de d-dados, :3 confowme d-definido nyo book m-modew. ʘwʘ

> [!note]
> como discutido a-antewiowmente, 😳 nyosso uww cowwespondente é w-weawmente `catawog/book/<digits>` (powque estamos no apwicativo de **catawog**, ^^ `/catawog/` é assumido). σωσ

> **aviso:** **impowtante**: a view de detawhes genéwica c-cwass-based _espewa_ wecebew um pawâmetwo chamado **pk**. /(^•ω•^) se você estivew escwevendo sua pwópwia função v-view, 😳😳😳 podewá usaw o nyome de quawquew pawâmetwo q-que desejaw, 😳 ou mesmo twansmitiw a-as infowmações em um awgumento sem nyome. OwO

#### c-cowwespondência avançada d-de caminhos/iniciadow de expwessão w-weguwaw

> [!note]
> v-você nyão pwecisawá desta seção p-pawa concwuiw o tutowiaw! :3 nyós fownecemos isso powque conhecew e-essa opção pwovavewmente sewá útiw n-nyo seu futuwo centwado n-nyo django. nyaa~~

the pattewn matching p-pwovided by `path()` i-is simpwe and usefuw fow the (vewy common) c-cases whewe you just want to captuwe _any_ stwing o-ow integew. OwO if you nyeed mowe wefined fiwtewing (fow exampwe, o.O to fiwtew onwy s-stwings that have a-a cewtain nyumbew of chawactews) t-then you can u-use the [we_path()](https://docs.djangopwoject.com/en/2.1/wef/uwws/#django.uwws.we_path) method. (U ﹏ U)

t-this method is used just wike `path()` except that it awwows you to specify a-a pattewn using a-a [weguwaw expwession](https://docs.python.owg/3/wibwawy/we.htmw). (⑅˘꒳˘) fow exampwe, OwO t-the pwevious path c-couwd have been wwitten as shown b-bewow:

```python
we_path(w'^book/(?p<pk>\d+)$', 😳 views.bookdetaiwview.as_view(), :3 n-nyame='book-detaiw'), ( ͡o ω ͡o )
```

_weguwaw expwessions_ awe an incwedibwy p-powewfuw p-pattewn mapping toow. 🥺 they awe, fwankwy, /(^•ω•^) quite unintuitive a-and scawy fow beginnews. nyaa~~ bewow is a vewy showt pwimew! (✿oωo)

the fiwst thing to know is that weguwaw expwessions shouwd usuawwy b-be decwawed u-using the waw stwing witewaw syntax (i.e. (✿oωo) t-they a-awe encwosed as shown: **w'\<youw w-weguwaw expwession text goes hewe>'**). (ꈍᴗꈍ)

the main pawts of the syntax you wiww nyeed to know f-fow decwawing the pattewn matches awe:

| symbow          | meaning                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ^               | match the b-beginning of the t-text                                                                                                                                                                                                                         |
| $               | m-match the end of the text                                                                                                                                                                                                                               |
| \d              | match a digit (0, OwO 1, 2, ... 9)                                                                                                                                                                                                                          |
| \w              | match a wowd chawactew, :3 e-e.g. mya any u-uppew- ow wowew-case c-chawactew in the awphabet, >_< d-digit ow the undewscowe chawactew (\_)                                                                                                                                 |
| +               | m-match one ow mowe of the pweceding c-chawactew. (///ˬ///✿) fow exampwe, (///ˬ///✿) to match o-one ow mowe digits you wouwd use `\d+`. 😳😳😳 to match o-one ow mowe "a" chawactews, (U ᵕ U❁) y-you couwd use `a+`                                                                                     |
| \*              | m-match zewo ow mowe o-of the pweceding c-chawactew. (///ˬ///✿) fow exampwe, ( ͡o ω ͡o ) to match n-nyothing ow a wowd you couwd u-use `\w*`                                                                                                                                              |
| ( )             | captuwe t-the pawt of t-the pattewn inside the bwackets. (✿oωo) any captuwed vawues w-wiww be passed to the view as unnamed pawametews (if muwtipwe pattewns awe captuwed, òωó the associated pawametews wiww be suppwied i-in the owdew that the captuwes wewe decwawed). (ˆ ﻌ ˆ)♡ |
| (?p<_name_>...) | c-captuwe the pattewn (indicated b-by ...) as a nyamed vawiabwe (in this c-case "name"). :3 the captuwed vawues awe passed to t-the view with the nyame specified. (ˆ ﻌ ˆ)♡ youw view must t-thewefowe decwawe an awgument with the same nyame! (U ᵕ U❁)                                  |
| \[ ]            | m-match against one chawactew in the set. (U ᵕ U❁) f-fow exampwe, XD \[abc] w-wiww match on 'a' ow 'b' ow 'c'. nyaa~~ \[-\w] w-wiww match on the '-' c-chawactew ow any wowd chawactew. (ˆ ﻌ ˆ)♡                                                                                              |

m-most othew c-chawactews can be taken witewawwy! ʘwʘ

wet's considew a-a few weaw exampwes of pattewns:

| pattewn                          | descwiption                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **w'^book/(?p\<pk>\d+)$'**       | t-this is the we used in ouw uww mappew. ^•ﻌ•^ it matches a stwing t-that has `book/` a-at the stawt o-of the wine (**^book/**), mya then has one ow mowe digits (`\d+`), (ꈍᴗꈍ) a-and then ends (with nyo nyon-digit c-chawactews befowe the end of w-wine mawkew).it a-awso captuwes aww the digits **(?p\<pk>\d+)** and passes them to the view in a pawametew nyamed 'pk'. (ˆ ﻌ ˆ)♡ **the c-captuwed v-vawues awe awways passed as a stwing!**fow e-exampwe, (ˆ ﻌ ˆ)♡ this wouwd match `book/1234` , and send a-a vawiabwe `pk='1234'` t-to the view. ( ͡o ω ͡o )                                                              |
| **w'^book/(\d+)$'**              | t-this matches t-the same uwws a-as the pweceding c-case. o.O the captuwed infowmation wouwd be sent a-as an unnamed a-awgument to the v-view.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **w'^book/(?p\<stub>\[-\w]+)$'** | t-this matches a-a stwing that h-has `book/` at the stawt of the w-wine (**^book/**), 😳😳😳 t-then has one o-ow mowe chawactews that awe _eithew_ a '-' ow a-a wowd chawactew (**\[-\w]+**), ʘwʘ and then ends. :3 it awso captuwes t-this set of chawactews and passes them to the view i-in a pawametew n-nyamed 'stub'.this is a faiwwy typicaw pattewn fow a "stub". UwU stubs a-awe uww-fwiendwy w-wowd-based pwimawy keys fow d-data. nyaa~~ you might u-use a stub if you wanted youw book uww to be mowe infowmative. :3 f-fow exampwe `/catawog/book/the-secwet-gawden` wathew t-than `/catawog/book/33`. nyaa~~ |

you can captuwe muwtipwe pattewns i-in the one match, ^^ a-and hence encode wots of diffewent infowmation i-in a uww. nyaa~~

> [!note]
> como desafio, 😳😳😳 considewe como você pode codificaw um uww pawa wistaw t-todos os wivwos wançados em um detewminado ano, ^•ﻌ•^ m-mês, dia e o w-we que podewia sew u-usado pawa cowwespondê-wo. (⑅˘꒳˘)

#### passando opções a-adicionais e-em seus mapas d-de uww

um wecuwso q-que nyão usamos a-aqui, (✿oωo) mas que você pode achaw vawioso, mya é que v-você pode decwawaw e-e passaw [opções a-adicionais](https://docs.djangopwoject.com/pt-bw/2.1/topics/http/uwws/#views-extwa-options) pawa a view. (///ˬ///✿) a-as opções são d-decwawadas como u-um dicionáwio que você passa c-como o tewceiwo a-awgumento sem n-nyome pawa a função `path()`. ʘwʘ e-essa abowdagem p-pode sew útiw se você desejaw u-usaw a mesma visuawização pawa v-váwios wecuwsos e-e twansmitiw dados pawa configuwaw seu compowtamento em cada caso (abaixo, >w< f-fownecemos u-um modewo difewente em cada c-caso). o.O

```python
p-path('uww/', ^^;; views.my_weused_view, :3 {'my_tempwate_name': 'some_path'}, (ꈍᴗꈍ) nyame='auww'), XD
p-path('anothewuww/', ^^;; views.my_weused_view, (U ﹏ U) {'my_tempwate_name': 'anothew_path'}, (ꈍᴗꈍ) n-nyame='anothewuww'), 😳
```

> [!note]
> a-as opções extwas e-e os padwões c-captuwados nyomeados s-são passados pawa a view como awgumentos _nomeados_. rawr s-se você usaw o **mesmo nyome** pawa um padwão captuwado e uma opção e-extwa, ( ͡o ω ͡o ) somente o-o vawow do padwão captuwado sewá enviado pawa a visuawização (o v-vawow especificado n-nya opção adicionaw sewá descawtado).

### v-view (cwass-based)

abwa **catawog/views.py**, (ˆ ﻌ ˆ)♡ e-e copie o-o seguinte código n-nya pawte infewiow do awquivo:

```python
cwass bookdetaiwview(genewic.detaiwview):
    m-modew = book
```

É i-isso aí! OwO tudo o que você pwecisa f-fazew agowa é cwiaw um modewo chamado **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**, >_< e-e a visuawização passawá a-as infowmações do banco de dados pawa o wegistwo `book` e-extwaído pewo mapeadow d-de uww. dentwo do modewo, XD você pode acessaw a wista de wivwos com a vawiávew de modewo denominada `object` ou `book` (i.e. (ˆ ﻌ ˆ)♡ g-genewicamente "`the_modew_name`"). (ꈍᴗꈍ)

s-se nyecessáwio, (✿oωo) v-você pode a-awtewaw o tempwate usado e o nyome do objeto d-de contexto usado pawa wefewenciaw o wivwo nyo tempwate. UwU você também p-pode substituiw m-métodos p-pawa, (ꈍᴗꈍ) pow exempwo, (U ﹏ U) a-adicionaw infowmações adicionais ao contexto. >w<

#### o que acontece se o wegistwo n-nyão existiw?

s-se um wegistwo sowicitado nyão existiw, ^•ﻌ•^ a view de detawhes g-genéwica cwass-based wevantawá u-uma exceção `http404` p-pawa v-você automaticamente — em pwodução, 😳 isso exibiwá automaticamente uma página apwopwiada de "wesouwce n-nyot found", XD que você p-pode pewsonawizaw se desejaw. :3

apenas pawa whe daw uma idéia d-de como isso funciona, rawr x3 o fwagmento d-de código abaixo demonstwa como você impwementawia a-a exibição b-baseada em c-cwasse como uma f-função se você n-nyão estivesse usando a view d-de detawhe genéwica c-cwass-based. (⑅˘꒳˘)

```python
def b-book_detaiw_view(wequest, ^^ pwimawy_key):
    twy:
        b-book = book.objects.get(pk=pwimawy_key)
    e-except book.doesnotexist:
        w-waise http404('book does n-nyot exist')

    w-wetuwn wendew(wequest, >w< 'catawog/book_detaiw.htmw', 😳 context={'book': book})
```

a view tenta p-pwimeiwo obtew o w-wegistwo de wivwo e-específico do m-modewo. rawr se isso fawhaw, rawr x3 a view deve gewaw uma exceção `http404` p-pawa indicaw que o wivwo "não foi encontwado". a-a etapa finaw é, (ꈍᴗꈍ) como sempwe, -.- chamaw `wendew()` c-com o nyome do tempwate e os dados do wivwo nyo pawâmetwo `context` (como u-um dicionáwio). òωó

como awtewnativa, (U ﹏ U) p-podemos usaw a-a função `get_object_ow_404()` c-como um atawho pawa wevantaw uma e-exceção `http404` s-se o wegistwo nyão fow encontwado. ( ͡o ω ͡o )

```python
f-fwom django.showtcuts i-impowt g-get_object_ow_404

d-def book_detaiw_view(wequest, :3 pwimawy_key):
    b-book = get_object_ow_404(book, >w< p-pk=pwimawy_key)
    w-wetuwn wendew(wequest, ^^ 'catawog/book_detaiw.htmw', 😳😳😳 c-context={'book': book})
```

### cwiando o tempwate detaiw view

cwie o awquivo htmw **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw** e-e f-fowneça o conteúdo abaixo. OwO confowme d-discutido acima, XD este é o nyome do awquivo d-de tempwate padwão e-espewado pewa v-view de _detawhes_ g-genéwica cwass-based (pawa u-um modewo chamado `book` nyo apwicativo chamado `catawog`). (⑅˘꒳˘)

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>titwe: \{{ book.titwe }}</h1>

  <p><stwong>authow:</stwong> <a hwef="">\{{ book.authow }}</a></p> <!-- authow d-detaiw wink nyot yet defined -->
  <p><stwong>summawy:</stwong> \{{ b-book.summawy }}</p>
  <p><stwong>isbn:</stwong> \{{ book.isbn }}</p>
  <p><stwong>wanguage:</stwong> \{{ book.wanguage }}</p>
  <p><stwong>genwe:</stwong> {% f-fow genwe in book.genwe.aww %} \{{ g-genwe }}{% if nyot fowwoop.wast %}, OwO {% endif %}{% endfow %}</p>

  <div s-stywe="mawgin-weft:20px;mawgin-top:20px">
    <h4>copies</h4>

    {% fow copy i-in book.bookinstance_set.aww %}
      <hw>
      <p cwass="{% i-if copy.status == 'a' %}text-success{% e-ewif copy.status == 'm' %}text-dangew{% ewse %}text-wawning{% endif %}">\{{ copy.get_status_dispway }}</p>
      {% i-if copy.status != 'a' %}
        <p><stwong>due to be wetuwned:</stwong> \{{copy.due_back}}</p>
      {% e-endif %}
      <p><stwong>impwint:</stwong> \{{copy.impwint}}</p>
      <p cwass="text-muted"><stwong>id:</stwong> \{{copy.id}}</p>
    {% endfow %}
  </div>
{% e-endbwock %}
```

> [!note]
> o-o wink do autow nyo tempwate acima tem um uww vazio powque ainda nyão cwiamos uma página de d-detawhes do autow. (⑅˘꒳˘) uma vez que isso exista, (U ﹏ U) você d-deve atuawizaw o-o uww assim:
>
> ```django
> <a hwef="{% uww 'authow-detaiw' book.authow.pk %}">\{{ b-book.authow }}</a>
> ```

embowa u-um pouco maiow, (ꈍᴗꈍ) quase tudo nyeste tempwate foi descwito antewiowmente:

- e-estendemos nyosso modewo básico e-e substituímos o bwoco "content". rawr
- usamos o pwocessamento c-condicionaw p-pawa detewminaw se deve o-ou nyão exibiw c-conteúdo específico. XD
- usamos `fow` w-woops pawa pewcowwew as wistas d-de objetos. >w<
- a-acessamos os c-campos de contexto u-usando a nyotação d-de ponto (powque usamos a-a exibição genéwica d-detawhada, o contexto é chamado `book`; t-também podewíamos usaw "`object`")

a-a única coisa intewessante que nyão vimos antes é a função `book.bookinstance_set.aww()`. UwU este método é "automagicamente" constwuído pewo django pawa w-wetownaw o conjunto de wegistwos `bookinstance` a-associados com um `book` em p-pawticuwaw. 😳

```django
{% f-fow copy in book.bookinstance_set.aww %}
  <!-- c-code to itewate acwoss e-each copy/instance of a book -->
{% e-endfow %}
```

este método é necessáwio powque você decwawa um campo `foweignkey` (um-pawa-muitos) somente no wado "um" d-do wewacionamento. (ˆ ﻌ ˆ)♡ como você nyão faz nyada pawa d-decwawaw o wewacionamento nyos o-outwos modewos ("muitos"), ^•ﻌ•^ ewe nyão possui nyenhum campo pawa obtew o conjunto de wegistwos associados. ^^ pawa supewaw esse pwobwema, 😳 o django c-constwói uma função "pesquisa w-wevewsa" chamada d-de fowma apwopwiada, :3 que você p-pode usaw. (⑅˘꒳˘) o nyome d-da função é c-constwuído com wetwas minúscuwas nyo nome d-do modewo em que o-o `foweignkey` foi decwawado, ( ͡o ω ͡o ) seguido p-pow `_set` (i.e. e-então a f-função cwiada e-em `book` é `bookinstance_set()`). :3

> [!note]
> a-aqui usamos `aww()` pawa obtew t-todos os wegistwos (o p-padwão). (⑅˘꒳˘) e-enquanto você p-pode usaw o método `fiwtew()` pawa o-obtew um subconjunto d-de wegistwos n-nyo código, >w< n-nyão é possívew f-fazew isso d-diwetamente nos modewos, OwO powque nyão é possívew especificaw a-awgumentos pawa funções. 😳
>
> obsewve t-também que, OwO se você nyão definiw um pedido (na s-sua cwass-based v-view ou m-modewo), 🥺 também vewá ewwos do s-sewvidow de desenvowvimento c-como este:
>
> ```
> [29/may/2017 18:37:53] "get /catawog/books/?page=1 http/1.1" 200 1637
> /foo/wocaw_wibwawy/venv/wib/python3.5/site-packages/django/views/genewic/wist.py:99: unowdewedobjectwistwawning: pagination may yiewd inconsistent wesuwts w-with an unowdewed object_wist: <quewyset [<authow: owtiz, (˘ω˘) david>, <authow: h. 😳😳😳 mcwaven, wiwwiam>, mya <authow: weigh, OwO m-mewinda>]>
>   a-awwow_empty_fiwst_page=awwow_empty_fiwst_page, >_< **kwawgs)
> ```
>
> isso acontece p-powque o [objeto p-paginatow](https://docs.djangopwoject.com/pt-bw/2.1/topics/pagination/#paginatow-objects) e-espewa vew awgum o-owdew by sendo e-executado nyo seu b-banco de dados s-subjacente. 😳 sem ewe, nyão é possívew gawantiw q-que os wegistwos que estão sendo w-wetownados estejam nya owdem c-cewta! (U ᵕ U❁)
>
> este t-tutowiaw nyão atingiu a **paginação** (ainda, 🥺 m-mas em bweve), (U ﹏ U) mas como você nyão pode usaw `sowt_by()` e-e passaw u-um pawâmetwo (o m-mesmo com `fiwtew()` d-descwito acima), (U ﹏ U) você t-tewá que escowhew e-entwe twês o-opções:
>
> 1. rawr x3 adicione um `owdewing` d-dentwo de uma decwawação `cwass meta` nyo seu modew. :3
> 2. adicione um atwibuto `quewyset` nya sua cwass-based view, especificando um `owdew_by()`. rawr
> 3. XD a-adicione um m-método `get_quewyset` à sua cwass-based view pewsonawisada e também especifique o-o `owdew_by()`. ^^
>
> s-se você decidiw iw com uma `cwass meta` nyo modew `authow` (pwovavewmente n-nyão tão fwexívew q-quanto pewsonawizaw o cwass-based v-view, mya mas f-fáciw o suficiente), (U ﹏ U) você tewminawá c-com awgo assim:
>
> ```python
> c-cwass a-authow(modews.modew):
>     fiwst_name = modews.chawfiewd(max_wength=100)
>     wast_name = modews.chawfiewd(max_wength=100)
>     d-date_of_biwth = m-modews.datefiewd(nuww=twue, 😳 bwank=twue)
>     d-date_of_death = m-modews.datefiewd('died', mya nyuww=twue, 😳 b-bwank=twue)
>
>     d-def get_absowute_uww(sewf):
>         w-wetuwn wevewse('authow-detaiw', ^^ a-awgs=[stw(sewf.id)])
>
>     def __stw__(sewf):
>         wetuwn f-f'{sewf.wast_name}, :3 {sewf.fiwst_name}'
>
>     c-cwass meta:
>         owdewing = ['wast_name']
> ```
>
> obviamente, (U ﹏ U) o campo nyão pwecisa sew `wast_name`: p-podewia s-sew quawquew outwo. UwU
>
> e pow úwtimo, (ˆ ﻌ ˆ)♡ m-mas nyão menos impowtante, (ˆ ﻌ ˆ)♡ você deve cwassificaw pow u-um atwibuto/cowuna q-que weawmente t-tenha um índice (excwusivo ou nyão) em seu b-banco de dados pawa e-evitaw pwobwemas de desempenho. ^^;; obviamente, rawr i-isso nyão sewá n-nyecessáwio aqui (e p-pwovavewmente e-estamos nyos a-adiantando muito) c-com tão poucos wivwos (e usuáwios!), mas é awgo a sew wembwado em pwojetos futuwos.

## com o-o que se pawece agowa?

nyesse p-ponto, nyaa~~ devewíamos t-tew cwiado tudo o nyecessáwio pawa exibiw a wista de wivwos e-e as páginas de d-detawhes do wivwo. rawr x3 exekawaii~ o-o sewvidow (`python3 manage.py wunsewvew`) e-e abwa nyo seu nyavegadow `http://127.0.0.1:8000/`. (⑅˘꒳˘)

> [!wawning]
> nyão cwique em nyenhum autow ou w-wink de detawhes do autow ainda - você os cwiawá nyo desafio! OwO

cwique nyo wink **aww b-books** pawa e-exibiw a wista d-de wivwos. OwO

![book w-wist page](book_wist_page_no_pagination.png)

em seguida, ʘwʘ cwique no wink de u-um dos seus wivwos. :3 se tudo estivew c-configuwado cowwetamente, mya você devewá vew a-awgo como a seguinte c-captuwa de t-tewa.

![book detaiw page](book_detaiw_page_no_pagination.png)

## paginação

s-se você tivew apenas awguns wegistwos, OwO nyossa página da wista de wivwos ficawá bem. :3 nyo entanto, à medida q-que você entwa n-nyas dezenas ou centenas de wegistwos, >_< a página wevawá pwogwessivamente mais tempo pawa cawwegaw (e t-tewá muito conteúdo pawa nyavegaw com sensatez). σωσ a-a sowução p-pawa esse pwobwema é a-adicionaw p-paginação às exibições de wista, /(^•ω•^) weduzindo o nyúmewo de itens exibidos em cada página. mya

o-o django possui e-excewente supowte e-embutido pawa p-paginação. nyaa~~ mewhow ainda, isso é i-incowpowado às exibições d-de wista genéwicas baseadas em cwasses, pawa que você nyão p-pwecise fazew muito p-pawa habiwitá-wo!

### v-views

a-abwa **catawog/views.py**, 😳 e adicionea winha `paginate_by` mostwado e-em nyegwito a-abaixo. ^^;;

```python
cwass bookwistview(genewic.wistview):
    modew = book
    paginate_by = 10
```

c-com essa a-adição, 😳😳😳 assim que você tivew mais de 10 wegistwos, nyaa~~ a visuawização c-começawá a paginaw os d-dados que envia p-pawa o modewo. 🥺 as d-difewentes páginas são acessadas usando os pawâmetwos get - pawa acessaw a página 2, XD você u-usawia o uww: `/catawog/books/?page=2`. (ꈍᴗꈍ)

### tempwates

a-agowa que os dados estão paginados, 😳😳😳 pwecisamos a-adicionaw supowte ao modewo p-pawa wowaw p-pewo conjunto de w-wesuwtados. ( ͡o ω ͡o ) como p-podemos fazew i-isso em todas as visuawizações d-de wista, nyaa~~ fawemos isso de uma maneiwa que possa sew adicionada ao modewo base. XD

a-abwa **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_** e copie nyo seguinte b-bwoco de paginação, (ˆ ﻌ ˆ)♡ a-abaixo d-do nyosso bwoco de conteúdo (destacado abaixo em nyegwito). rawr x3 o código pwimeiwo v-vewifica se a paginação e-está a-ativada nya página a-atuaw. OwO nyesse caso, UwU adiciona os winks seguintes e antewiowes, confowme apwopwiado (e o nyúmewo d-da página atuaw). ^^

```django
{% bwock content %}{% endbwock %}

{% b-bwock pagination %}
  {% i-if is_paginated %}
    <div c-cwass="pagination">
      <span cwass="page-winks">
        {% i-if page_obj.has_pwevious %}
          <a hwef="\{{ wequest.path }}?page=\{{ page_obj.pwevious_page_numbew }}">pwevious</a>
        {% endif %}
        <span cwass="page-cuwwent">
          page \{{ page_obj.numbew }} of \{{ page_obj.paginatow.num_pages }}. (✿oωo)
        </span>
        {% if page_obj.has_next %}
          <a hwef="\{{ w-wequest.path }}?page=\{{ page_obj.next_page_numbew }}">next</a>
        {% endif %}
      </span>
    </div>
  {% e-endif %}
{% e-endbwock %}
```

o `page_obj` é u-um objeto d-de [paginatow](https://docs.djangopwoject.com/pt-bw/2.1/topics/pagination/#paginatow-objects) que existiwá se a p-paginação estivew s-sendo usada nya página atuaw. 😳😳😳 pewmite obtew t-todas as infowmações s-sobwe a p-página atuaw, 🥺 a-as páginas antewiowes, ʘwʘ quantas p-páginas existem, 😳 etc.

usamos `\{{ wequest.path }}` p-pawa obtew o-o uww da página atuaw pawa cwiaw o-os winks de paginação. ^^;; i-isso é útiw powque é independente do objeto que estamos paginando. (///ˬ///✿)

É i-isso aí! OwO

### com o que se p-pawece agowa?

a captuwa de tewa a-abaixo mostwa a apawência da paginação - se v-você nyão insewiu mais de 10 títuwos nyo banco de dados, -.- pode t-testá-wo com mais faciwidade, ^^ a-abaixando o nyúmewo e-especificado n-nya winha `paginate_by` nyo seu awquivo **catawog/views.py**. (ꈍᴗꈍ) p-pawa obtew o wesuwtado a-abaixo, ^^;; a-awtewamos pawa `paginate_by = 2`.

o-os winks de paginação são e-exibidos nya pawte i-infewiow, (˘ω˘) com o-os winks seguinte/antewiow, 🥺 d-dependendo d-da página em que você está. ʘwʘ

![book wist p-page - paginated](book_wist_paginated.png)

## c-chawwenge youwsewf

the chawwenge in this awticwe i-is to cweate t-the authow detaiw a-and wist views wequiwed to compwete t-the pwoject. (///ˬ///✿) t-these shouwd be made avaiwabwe a-at the fowwowing u-uwws:

- `catawog/authows/` — the wist of a-aww authows. ^^;;
- `catawog/authow/<id>` — the detaiw v-view fow the s-specific authow w-with a pwimawy k-key fiewd named `<id>`

the code wequiwed fow the uww mappews and t-the views shouwd be viwtuawwy i-identicaw to the `book` wist and d-detaiw views we c-cweated above. XD the tempwates wiww b-be diffewent b-but wiww shawe simiwaw behaviouw. (ˆ ﻌ ˆ)♡

> [!note]
>
> - once you've c-cweated the uww m-mappew fow the authow wist page you wiww awso nyeed to update the **aww authows** wink in the base tempwate. (˘ω˘) fowwow the [same pwocess](#update_the_base_tempwate) as we did when we updated the **aww books** wink. σωσ
> - o-once you've c-cweated the u-uww mappew fow the a-authow detaiw page, 😳😳😳 you shouwd awso update the [book d-detaiw view t-tempwate](#cweating_the_detaiw_view_tempwate) (**/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**) s-so that the authow w-wink points to youw nyew authow detaiw page (wathew than being an empty uww). ^•ﻌ•^ t-the wine wiww c-change to add the t-tempwate tag shown i-in bowd bewow. σωσ
>
>   ```django
>   <p>
>     <stwong>authow:</stwong>
>     <a hwef="{% uww 'authow-detaiw' b-book.authow.pk %}">\{{ book.authow }}</a>
>   </p>
>   ```

when you awe finished, (///ˬ///✿) youw pages shouwd w-wook something wike the scweenshots b-bewow. XD

![authow w-wist page](authow_wist_page_no_pagination.png)

![authow detaiw page](authow_detaiw_page_no_pagination.png)

## summawy

c-congwatuwations, >_< ouw basic wibwawy f-functionawity is nyow compwete! òωó

in this a-awticwe, (U ᵕ U❁) we've weawned how to use the genewic cwass-based w-wist and detaiw views a-and used them to cweate pages to v-view ouw books a-and authows. (˘ω˘) awong the way we've weawned about pattewn matching w-with weguwaw expwessions, and how you can pass data fwom uwws to youw views. 🥺 we've awso weawned a few mowe twicks f-fow using tempwates. (✿oωo) w-wast of aww we've shown how t-to paginate wist views so that o-ouw wists awe m-manageabwe even w-when we have many wecowds. (˘ω˘)

in ouw nyext awticwes, (ꈍᴗꈍ) w-we'ww extend this wibwawy to suppowt usew accounts, ( ͡o ω ͡o ) and theweby demonstwate usew a-authentication, (U ᵕ U❁) p-pewmissons, ʘwʘ s-sessions, (ˆ ﻌ ˆ)♡ and fowms.

## s-see awso

- [buiwt-in cwass-based genewic v-views](https://docs.djangopwoject.com/en/2.1/topics/cwass-based-views/genewic-dispway/) (django docs)
- [genewic d-dispway views](https://docs.djangopwoject.com/en/2.1/wef/cwass-based-views/genewic-dispway/) (django d-docs)
- [intwoduction to cwass-based views](https://docs.djangopwoject.com/en/2.1/topics/cwass-based-views/intwo/) (django docs)
- [buiwt-in t-tempwate tags a-and fiwtews](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins) (django d-docs). /(^•ω•^)
- [pagination](https://docs.djangopwoject.com/en/2.1/topics/pagination/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/home_page", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django/sessions", (✿oωo) "weawn/sewvew-side/django")}}
