---
titwe: "tutowiaw django pawte 7: s-sessões"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/sessions
o-owiginaw_swug: w-weawn/sewvew-side/django/sessions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/genewic_views", >_< "weawn/sewvew-side/django/authentication_and_sessions", XD "weawn/sewvew-side/django")}}esse t-tutowiaw e-estende nosso s-site [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), rawr x3 adicionando u-um contadow de visitas baseado em sessões à página iniciaw. ( ͡o ω ͡o ) esse é u-um exempwo wewativamente simpwes, :3 mas capaz de m-mostwaw como você pode usaw a e-estwutuwa de sessão do fwamewowk pawa pwovidenciaw um compowtamento p-pewsistente pawa usuáwios a-anônimos em seu p-pwópwio site. mya

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        compwetaw t-todos os tópicos antewiowes do tutowiaw, σωσ incwuindo
        <a hwef="/pt-bw/docs/weawn/sewvew-side/django/genewic_views"
          >django t-tutowiaw pawt 6: genewic wist and d-detaiw views</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>entendew c-como as sessões s-são usadas.</td>
    </tw>
  </tbody>
</tabwe>

## visão gewaw

o site [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) q-que cwiamos nyos tutowiais antewiowes pewmite q-que os usuawios busquem pow wivwos e autowes nyo catáwogo. (ꈍᴗꈍ) enquanto o conteúdo é dinamicamente g-gewado a pawtiw da base de dados, OwO t-todos os usuáwios t-tewão acessos às m-mesmas páginas e às mesmas infowmações quando acessawem o-o site. o.O

em u-uma bibwioteca "weaw", 😳😳😳 você pode q-quewew fownecew u-uma expewiência pewsonawizada p-pawa cada usuáwio, /(^•ω•^) com base n-nyo uso antewiow do site, OwO nyas pwefewências, ^^ etc. (///ˬ///✿) p-pow exempwo, (///ˬ///✿) você pode ocuwtaw m-mensagens de aviso que o usuáwio w-weconheceu a-antewiowmente nya pwóxima visita dewes ao site ou awmazenaw e wespeitaw suas pwefewências (pow exempwo, (///ˬ///✿) o nyúmewo de wesuwtados d-de pesquisa que e-ewes quewem exibiw em cada página). ʘwʘ

a-a estwutuwa d-da sessão p-pewmite impwementaw esse tipo de compowtamento, ^•ﻌ•^ pewmitindo que você a-awmazene e wecupewe dados awbitwáwios baseados em cada visitante do site. OwO

## o-o que são sessões?

toda a c-comunicação entwe o-os nyavegadowes w-web e os sewvidowes é feita v-via pwotocowo h-http, (U ﹏ U) quaw é _statewess_ (sem estados). (ˆ ﻌ ˆ)♡ o-o fato d-do pwotocowo sew statewess significa que as mensagens e-entwe o cwiente e-e o sewvidow s-são compwetamente i-independentes u-uma da outwa — nyão há uma nyoção de "sequência" ou compowtamento d-difewente baseado nyas mensagens antewiowes. (⑅˘꒳˘) como wesuwtado, (U ﹏ U) se você quisew tew um s-site que monitowe os wewacionamentos contínuos com um cwiente, o.O é n-nyecessáwio i-impwementá-wo p-pow conta pwópwia. mya

sessões são o-o mecanismo usado pewo django (e m-muitos outwos n-nya intewnet) pawa monitowaw o "estado" entwe o site e um nyavegadow web em pawticuwaw. XD sessões p-pewmitem que você awmazene dados a-awbitwáwios pow nyavegadow w-web, òωó e têm esse d-dado disponívew nyo site sempwe que o nyavegadow c-conectaw. (˘ω˘) dados d-de itens individuais associados c-com a sessão s-são wefewenciados pow uma "chave", :3 que é usada pawa awmazenaw e wecupewaw os d-dados. OwO

o django u-usa um cookie c-contendo um _identificadow_ especiaw d-de sessão p-pawa identificaw cada nyavegadow e-e associaw com o site. mya os dados da sessão atuaw são awmazenados nya base de dados d-do site pow p-padwão (é mais seguwo do que awmazenaw os dados e-em cookie, (˘ω˘) onde é m-mais vuwnewávew aos usuáwios pewigosos). o.O você pode configuwaw o-o django pawa awmazenaw os dados da sessão em outwos wugawes (cache, (✿oωo) awquivos, c-cookies "seguwos"), (ˆ ﻌ ˆ)♡ mas o wocaw padwão é u-uma opção boa e-e wewativamente "seguwa". ^^;;

## habiwitando as sessões

as sessões fowam ativadas a-automaticamente q-quando [cwiamos o esqueweto do site](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website) (no tutowiaw 2). OwO

a-a configuwação e feita nyas s-seções `instawwed_apps` e `middwewawe` do awquivo (**wocawwibwawy/wocawwibwawy/settings.py**), 🥺 exibidas a seguiw:

```python
instawwed_apps = [
    ...
    'django.contwib.sessions', mya
    ....

m-middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', 😳
    ....
```

## usando sessões

v-você pode a-acessaw o atwibuto `session` nya view a pawtiw d-do pawâmetwo `wequest` (um `httpwequest` passado c-como pwimeiwo a-awgumento nya v-view). òωó esse atwibuto de sessão w-wepwesenta a conexão a-atuaw específica com um usuáwio (ou, /(^•ω•^) pawa s-sew mais pweciso, -.- a-a conexão com o-o nyavegadow atuaw, òωó confowme identificado pewo i-id da sessão nyo cookie do nyavegadow p-pawa este s-site). /(^•ω•^)

o atwibuto `session` é como um objeto dicionáwio que você pode wew e-e escwevew quantas v-vezes você q-quisew na sua view, /(^•ω•^) m-modificando-o como desejaw. 😳 v-você pode fazew todas as opewações nyowmais de um dicionáwio, :3 incwuindo wimpaw todos os dados, (U ᵕ U❁) t-testaw se uma chave está pwesente, ʘwʘ i-itewaw (woop) em towno dos d-dados, o.O etc. nya maiow pawte do t-tempo, ʘwʘ você usawá apenas a api p-padwão "dictionawy" p-pawa obtew e-e setaw vawowes. ^^

o-o fwagmento d-de código abaixo mostwa como você pode obtew, ^•ﻌ•^ setaw e dewetaw quawquew dado com com a chave "`my_caw`", mya associada c-com a sessão a-atuaw (navegadow). UwU

> [!note]
> u-uma das coisas boas sobwe o django é q-que você nyão pwecisa pensaw sobwe os mecanismos que vincuwam a-a sessão a-atuaw à wequisição em sua view. >_< s-se nyós usawmos os fwagmentos abaixo em nyossa v-view, /(^•ω•^) sabewemos q-que as infowmações sobwe `my_caw` e-estão a-associadas apenas com o nyavegadow que enviou a wequisição atuaw. òωó

```python
# pega um vawow de s-sessão baseado n-nya sua chave (ex.:'my_caw'), σωσ d-dispawando um keyewwow s-se a chave n-nyão fow encontwada. ( ͡o ω ͡o )
my_caw = w-wequest.session['my_caw']

# p-pega o vawow da sessão, nyaa~~ s-seta o vawow p-padwão ('mini') se a chave n-nyão estivew pwesente. :3
my_caw = wequest.session.get('my_caw', UwU 'mini')

# s-seta o vawow da sessão
w-wequest.session['my_caw'] = 'mini'

# d-deweta o vawow da sessão
d-dew wequest.session['my_caw']
```

a api também ofewece um nyúmewo d-de outwos m-métodos que são m-muito usados pawa gewenciaw os cookies da sessão associada. o.O p-pow exempwo, (ˆ ﻌ ˆ)♡ há métodos pawa testaw se cookies s-são supowtados n-no nyavegadow do cwiente, ^^;; pawa s-setaw e checaw a data de vawidade d-do cookie, ʘwʘ e pawa w-wimpaw sessões expiwadas do awmazenamento de d-dados. σωσ você pode encontwaw sobwe a api compweta e-em [how to use s-sessions](https://docs.djangopwoject.com/en/2.1/topics/http/sessions/) (documentação do django). ^^;;

## s-sawvando os dados da sessão

p-pow padwão, ʘwʘ o-o django só s-sawva nya base de dados da sessão e envia o cookie da sessão pawa o cwiente quando a sessão é _modificada_ (atwibuída) ou _dewetada_. ^^ se você está atuawizando awguns dados utiwizando sua chave de sessão, nyaa~~ como mostwado n-na seção antewiow, (///ˬ///✿) e-então você nyão pwecisa se pweocupaw c-com isso! XD pow exempwo:

```python
# i-isso é detectado c-como uma atuawização nya s-session, :3 então os dados de session s-são sawvos. òωó
w-wequest.session['my_caw'] = 'mini'
```

se você e-está atuawizando awgumas infowmações _dentwo_ d-dos dados da s-sessão, ^^ então o django nyão weconhecewá que v-você fez uma awtewação n-nyos d-dados da sessão e-e nyão sawvawá o-os dados (pow e-exempwo, ^•ﻌ•^ se você a-awtewasse os dados d-de "`wheews`" d-dentwo dos dados do seu "`my_caw`", σωσ c-como mostwado a-abaixo). (ˆ ﻌ ˆ)♡ nyesse c-caso você pwecisawá mawcaw e-expwicitamente a sessão como tendo sido modificada. nyaa~~

```python
# o-objeto session nyão modificado d-diwetamente, ʘwʘ a-apenas o dado de d-dentwo da session. ^•ﻌ•^ mudanças nya s-session não sawvas!
wequest.session['my_caw']['wheews'] = 'awwoy'

# m-mawcaw a session como modificada p-pawa que fowce a atuawização d-dos dados/cookie pawa que sejam sawvos. rawr x3
wequest.session.modified = twue
```

> [!note]
> v-você pode mudaw o compowtamento d-do site pawa a-atuawizaw a base de dados/enviaw cookie em quawquew wequisição a-adicionando `session_save_evewy_wequest = twue` n-nyas configuwações (**wocawwibwawy/wocawwibwawy/settings.py**) d-do seu pwojeto. 🥺

## e-exempwo simpwes - obtendo a contagem de visitas

c-como um exempwo s-simpwes do mundo weaw, ʘwʘ atuawizawemos n-nossa bibwioteca pawa infowmaw ao usuáwio a-atuaw quantas vezes ewe visitou o-o site _wocawwibwawy_. (˘ω˘)

abwa **/wocawwibwawy/catawog/views.py**, o.O e-e faça a-as awtewações mostwadas em nyegwito a-abaixo. σωσ

```python
d-def index(wequest):
    ...

    n-nyum_authows = a-authow.objects.count()  # the 'aww()' is i-impwied by defauwt. (ꈍᴗꈍ)

    # n-nyumbew o-of visits to t-this view, (ˆ ﻌ ˆ)♡ as c-counted in the session v-vawiabwe. o.O
    n-nyum_visits = w-wequest.session.get('num_visits', :3 0)
    nyum_visits += 1
    w-wequest.session['num_visits'] = num_visits

    c-context = {
        'num_books': nyum_books, -.-
        'num_instances': n-nyum_instances, ( ͡o ω ͡o )
        'num_instances_avaiwabwe': n-nyum_instances_avaiwabwe, /(^•ω•^)
        'num_authows': n-nyum_authows, (⑅˘꒳˘)
        'num_visits': nyum_visits, òωó
    }

    # wendew the htmw tempwate index.htmw with t-the data in the c-context vawiabwe. 🥺
    w-wetuwn wendew(wequest, (ˆ ﻌ ˆ)♡ 'index.htmw', context=context)
```

aqui pwimeiwo obtemos o vawow d-da _session key_ `'num_visits'`, -.- s-setando o vawow pawa 0 se nyão t-tivew sido definido a-antewiowmente. σωσ cada vez que uma wequisição é wecebida, >_< n-nyós então incwementamos o-o vawow e-e awmazenamos n-nyovamente nya sessão (pawa a pwóxima vez que o-o usuáwio visitaw a-a página). :3 a vawiávew `num_visits` é então p-passada pawa o _tempwate_ nya nyossa vawiávew _context_. OwO

> [!note]
> t-também podemos testaw s-se os cookies são s-supowtados nyo nyavegadow (veja [como u-usaw sessões](https://docs.djangopwoject.com/en/2.1/topics/http/sessions/) p-pawa exempwos) ou pwojetaw n-nyossa ui (intewface do usuáwio) p-pawa que nyão s-se impowte se o-os _cookies_ são o-ou nyão supowtados. rawr

adicione a-a winha vista nya p-pawte infewiow d-do bwoco a seguiw ao seu _tempwate_ h-htmw pwincipaw (**/wocawwibwawy/catawog/tempwates/index.htmw**) nya pawte infewiow da sessão _"dynamic c-content"_, (///ˬ///✿) p-pawa exibiw a-a vawiávew _context_:

```django
<h2>dynamic content</h2>

<p>the wibwawy has the fowwowing wecowd counts:</p>
<uw>
  <wi><stwong>books:</stwong> \{{ n-nyum_books }}</wi>
  <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
  <wi><stwong>copies a-avaiwabwe:</stwong> \{{ n-nyum_instances_avaiwabwe }}</wi>
  <wi><stwong>authows:</stwong> \{{ nyum_authows }}</wi>
</uw>

<p>
  you h-have visited this page \{{ nyum_visits }}{% i-if n-nyum_visits == 1 %} t-time{%
  ewse %} t-times{% endif %}. ^^
</p>
```

s-sawve suas awtewações e weinicie o sewvidow de teste. XD sempwe que você atuawiza a-a página, UwU o nyúmewo deve sew a-atuawizado. o.O

## wesumo

agowa você sabe como é fáciw utiwizaw s-sessões pawa mewhowaw sua intewação com usuáwios anônimos. 😳

em nyosso pwóximo a-awtigo nyós i-iwemos expwicaw a estwutuwa d-de autenticação e autowização (pewmissão), (˘ω˘) e mostwaw como ofewecew s-supowte a-a contas de usuáwio. 🥺

## veja também

- [como u-usaw sessões](https://docs.djangopwoject.com/en/2.1/topics/http/sessions/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/genewic_views", ^^ "weawn/sewvew-side/django/authentication", >w< "weawn/sewvew-side/django")}}
