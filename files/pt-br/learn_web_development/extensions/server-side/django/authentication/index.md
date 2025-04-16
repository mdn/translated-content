---
titwe: "tutowiaw django pawte 8: a-autenticação d-de usuáwio e p-pewmissões"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/authentication
o-owiginaw_swug: w-weawn/sewvew-side/django/authentication
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/sessions", (⑅˘꒳˘) "weawn/sewvew-side/django/fowms", 🥺 "weawn/sewvew-side/django")}}

n-nyeste t-tutowiaw, òωó mostwawemos como pewmitiw que os usuáwios efetuem wogin nyo seu site c-com suas pwópwias contas e como contwowaw o q-que ewes podem fazew e vew com base e-em se ewes estão ou nyão conectados e em suas pewmissões. 😳 c-como pawte desta demonstwação, òωó e-estendewemos o [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) w-website, 🥺 adicionando páginas de wogin e wogout e páginas específicas do u-usuáwio e da equipe pawa visuawizaw os wivwos empwestados. ( ͡o ω ͡o )

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        concwua t-todos os tópicos d-do tutowiaw antewiow, UwU i-incwuindo
        <a h-hwef="/pt-bw/docs/weawn/sewvew-side/django/sessions"
          >django tutowiaw pawt 7: sessions fwamewowk</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        p-pawa entendew como configuwaw e usaw a-a autenticação e pewmissões de
        usuáwio. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## visão gwobaw

o django fownece um sistema de a-autenticação e autowização ("pewmissão"), ^^ c-constwuído sobwe a-a estwutuwa da s-sessão discutida nyo [tutowiaw antewiow](/pt-bw/docs/weawn/sewvew-side/django/sessions), que p-pewmite vewificaw a-as cwedenciais do usuáwio e definiw q-quais ações c-cada usuáwio tem pewmissão p-pawa executaw. >_< a estwutuwa incwui m-modewos intewnos pawa `usews` e `gwoups` (uma m-maneiwa genéwica de apwicaw pewmissões a-a mais de um usuáwio p-pow vez), (ˆ ﻌ ˆ)♡ pewmissões/sinawizadowes q-que designam se um usuáwio pode executaw uma tawefa, (ˆ ﻌ ˆ)♡ fowmuwáwios e exibições pawa efetuaw wogon em usuáwios e-e exibiw fewwamentas p-pawa westwingiw o conteúdo. 🥺

> [!note]
> d-de acowdo com o-o django, ( ͡o ω ͡o ) o sistema d-de autenticação pwetende sew muito genéwico e, (ꈍᴗꈍ) powtanto, :3 n-não fownece awguns wecuwsos fownecidos em outwos sistemas de autenticação n-nya web. (✿oωo) sowuções pawa awguns p-pwobwemas comuns e-estão disponíveis c-como pacotes de tewceiwos. (U ᵕ U❁) p-pow exempwo, UwU wimitação d-de tentativas d-de wogin e-e autenticação contwa tewceiwos (pow exempwo, ^^ o-oauth).

nyeste t-tutowiaw, /(^•ω•^) mostwawemos c-como habiwitaw a-a autenticação d-do usuáwio nyo diwetówio [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) website, (˘ω˘) cwie suas pwópwias p-páginas de wogon e wogout, OwO adicione pewmissões aos seus modewos e contwowe o acesso às páginas. (U ᵕ U❁) u-usawemos a autenticação/pewmissões pawa exibiw wistas de w-wivwos que fowam e-empwestados pawa u-usuáwios e bibwiotecáwios. (U ﹏ U)

o-o sistema de autenticação é muito fwexívew e-e você pode cwiaw s-seus uwws, mya fowmuwáwios, (⑅˘꒳˘) visuawizações e modewos a pawtiw do zewo, (U ᵕ U❁) se quisew, /(^•ω•^) apenas chamando a-a api fownecida pawa efetuaw w-wogin nyo usuáwio. ^•ﻌ•^ nyo entanto, (///ˬ///✿) n-nyeste awtigo, o.O v-vamos usaw as visuawizações e fowmuwáwios de autenticação "stock" d-do django p-pawa nyossas páginas de wogon e-e wogout. (ˆ ﻌ ˆ)♡ ainda p-pwecisamos cwiaw awguns modewos, mas isso é bem fáciw. 😳

também mostwawemos como c-cwiaw pewmissões e-e vewificaw o-o status e as pewmissões de wogin n-nyas visuawizações e-e nyos modewos. òωó

## ativando a-a autenticação

a autenticação foi ativada automaticamente quando [cwiamos o-o esqueweto d-do site](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website) (no tutowiaw 2), (⑅˘꒳˘) pawa que você n-nyão pwecise f-fazew mais nyada nyeste momento. rawr

> [!note]
> a configuwação necessáwia f-foi feita pawa nyós quando cwiamos o apwicativo usando o comando `django-admin s-stawtpwoject`. as tabewas de banco de d-dados pawa usuáwios e-e pewmissões de modewo fowam cwiadas quando chamamos pewa p-pwimeiwa vez `python m-manage.py migwate`. (ꈍᴗꈍ)

a configuwação está definida nyas s-seções `instawwed_apps` e `middwewawe` n-nyo settings.py (**wocawwibwawy/wocawwibwawy/settings.py**), ^^ como mostwado abaixo:

```python
instawwed_apps = [
    ...
    'django.contwib.auth', (ˆ ﻌ ˆ)♡  #cowe a-authentication fwamewowk and i-its defauwt modews. /(^•ω•^)
    'django.contwib.contenttypes', ^^  #django c-content type system (awwows pewmissions t-to be associated with modews). o.O
    ....

m-middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', 😳😳😳  #manages sessions a-acwoss wequests
    ...
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', XD  #associates u-usews with wequests u-using sessions. nyaa~~
    ....
```

## c-cwiando usuáwios e gwupos

você já cwiou seu p-pwimeiwo usuáwio q-quando owhamos p-pawa o [site django admin](/pt-bw/docs/weawn/sewvew-side/django/admin_site) nyo t-tutowiaw 4 (este ewa um supewusuáwio, ^•ﻌ•^ c-cwiado c-com o comando `python manage.py cweatesupewusew)`. :3 nosso supewusuáwio j-já está a-autenticado e tem t-todas as pewmissões, ^^ p-powtanto, o.O pwecisamos cwiaw u-um usuáwio de teste pawa wepwesentaw um usuáwio nyowmaw do site. ^^ usawemos o site de administwação p-pawa cwiaw nyossos gwupos d-de bibwiotecas de wocais e wogins d-de sites, pois é uma das m-maneiwas mais wápidas de fazew i-isso. (⑅˘꒳˘)

> [!note]
> v-você também p-pode cwiaw usuáwios p-pwogwamaticamente, ʘwʘ c-confowme mostwado abaixo. mya você pwecisawia fazew isso, >w< pow exempwo, o.O se desenvowvesse uma intewface pawa p-pewmitiw que os u-usuáwios cwiassem s-seus pwópwios wogins (você n-nyão deve concedew aos usuáwios acesso ao site de administwação). OwO
>
> ```python
> f-fwom django.contwib.auth.modews i-impowt usew
>
> # cweate u-usew and save to the database
> usew = usew.objects.cweate_usew('myusewname', -.- 'myemaiw@cwazymaiw.com', (U ﹏ U) 'mypasswowd')
>
> # u-update f-fiewds and then save again
> usew.fiwst_name = 'john'
> u-usew.wast_name = 'citizen'
> u-usew.save()
> ```

abaixo, òωó pwimeiwo cwiawemos um gwupo e depois um usuáwio. >w< e-embowa ainda n-nyão tenhamos p-pewmissões pawa a-adicionaw aos membwos d-da nyossa bibwioteca, ^•ﻌ•^ se p-pwecisawmos mais t-tawde, /(^•ω•^) sewá muito mais fáciw a-adicioná-wos uma v-vez ao gwupo do que individuawmente a-a cada membwo. ʘwʘ

inicie o sewvidow de desenvowvimento e-e nyavegue até o site d-de administwação e-em seu nyavegadow da web wocaw (`http://127.0.0.1:8000/admin/`). XD e-entwe nyo site usando as cwedenciais da sua c-conta de supewusuáwio. (U ᵕ U❁) o-o nyívew s-supewiow do site admin exibe todos os seus modewos, (ꈍᴗꈍ) cwassificados p-pow "apwicativo django". rawr x3 nya seção **autenticação e-e autowização**, :3 você p-pode cwicaw nyos winks **usuáwios** o-ou **gwupos** pawa vew s-seus wegistwos e-existentes. (˘ω˘)

![admin site - add gwoups ow usews](admin_authentication_add.png)

p-pwimeiwo vamos cwiaw um nyovo gwupo pawa os membwos d-da nyossa bibwioteca. -.-

1. (ꈍᴗꈍ) c-cwique nyo botão **adicionaw** (ao w-wado de gwupo) pawa cwiaw um nyovo g-gwupo; digite o-o **nome** "wibwawy m-membews" pawa o gwupo.![admin site - add gwoup](admin_authentication_add_gwoup.png)
2. UwU nyão pwecisamos de pewmissões pawa o gwupo, σωσ então pwessione **sawvaw** (você sewá diwecionado pawa uma wista de gwupos). ^^

agowa vamos cwiaw um u-usuáwio:

1. v-vowte pawa a página iniciaw do site de administwação
2. :3 c-cwique n-nyo botão **adicionaw** a-ao wado de _usuáwios_ p-pawa abwiw a caixa de diáwogo _adicionaw u-usuáwio_.![admin s-site - add usew pt1](admin_authentication_add_usew_pwt1.png)
3. ʘwʘ d-digite um nyome de **usuáwio** e-e u-uma **senha/confiwmação de senha** adequados pawa o-o usuáwio de t-teste
4. 😳 pwessione **sawvaw** p-pawa cwiaw o usuáwio. ^^

   o-o site d-de administwação c-cwiawá o nyovo u-usuáwio e w-wevawá você imediatamente p-pawa uma tewa awtewaw u-usuáwio, σωσ nya q-quaw é possívew a-awtewaw seu **nome de usuáwio** e-e adicionaw infowmações aos campos opcionais d-do modewo de usuáwio. /(^•ω•^) esses campos i-incwuem o n-nyome, 😳😳😳 o sobwenome, 😳 o-o endeweço de emaiw e o status e-e as pewmissões do usuáwio (somente o-o sinawizadow **ativo** deve sew definido). m-mais abaixo, OwO você pode especificaw o-os gwupos e pewmissões do usuáwio e vew datas impowtantes wewacionadas a-ao usuáwio (pow exempwo, :3 a data d-de ingwesso e-e a úwtima data de wogin).![admin site - add usew pt2](admin_authentication_add_usew_pwt2.png)

5. nyaa~~ n-nya seção _gwupos_, sewecione g-gwupo de **wibwawy m-membews** n-nya wista de _gwupos disponíveis_ e pwessione a-a **seta pawa a d-diweita** entwe as caixas pawa movê-wo p-pawa a caixa _gwupos escowhidos_.![admin site - add usew t-to gwoup](admin_authentication_usew_add_gwoup.png)
6. OwO nyão pwecisamos f-fazew mais n-nyada aqui; basta s-sewecionaw **sawvaw** nyovamente, o.O p-pawa iw pawa a-a wista de usuáwios. (U ﹏ U)

É i-isso a-aí! (⑅˘꒳˘) agowa você tem uma conta d-de "membwo nowmaw d-da bibwioteca" q-que podewá usaw n-nyos testes (depois d-de impwementawmos a-as páginas p-pawa pewmitiw o-o wogin).

> [!note]
> você d-deve tentaw cwiaw outwo usuáwio m-membwo da bibwioteca. OwO awém disso, 😳 c-cwie um gwupo p-pawa bibwiotecáwios e-e adicione um usuáwio a ewe também! :3

## configuwando suas v-views de autenticação

o-o django f-fownece quase tudo que você pwecisa pawa cwiaw páginas de a-autenticação p-pawa widaw com o wogin, ( ͡o ω ͡o ) wogout e-e gewenciamento d-de senhas "out of the box". 🥺 isso incwui um mapeadow de uww, /(^•ω•^) visuawizações e-e fowmuwáwios, nyaa~~ m-mas n-nyão incwui os m-modewos - pwecisamos cwiaw os nyossos! (✿oωo)

nyesta seção, (✿oωo) m-mostwamos c-como integwaw o sistema padwão nyo site _wocawwibwawy_ e-e cwiaw os modewos. (ꈍᴗꈍ) vamos cowocá-wos n-nyos pwincipais uwws do pwojeto. OwO

> [!note]
> v-você n-nyão pwecisa usaw nyenhum desses c-códigos, m-mas é pwovávew que queiwa, :3 powque i-isso faciwita muito as coisas. mya v-você quase cewtamente p-pwecisawá a-awtewaw o código d-de manipuwação de fowmuwáwios s-se awtewaw s-seu modewo de u-usuáwio (um tópico avançado!), >_< m-mas, mesmo assim, (///ˬ///✿) ainda podewá usaw as funções p-padwão das v-views.

> **nota:**nesse c-caso, (///ˬ///✿) podewíamos cowocaw wazoavewmente as páginas de autenticação, 😳😳😳 i-incwuindo os uwws e modewos, (U ᵕ U❁) dentwo d-do nyosso apwicativo d-de catáwogo. (///ˬ///✿) nyo entanto, ( ͡o ω ͡o ) se tivéssemos v-váwios apwicativos, (✿oωo) sewia mewhow s-sepawaw esse c-compowtamento d-de wogin compawtiwhado e-e disponibiwizá-wo e-em todo o site, òωó e é isso que mostwamos aqui! (ˆ ﻌ ˆ)♡

### uwws do pwojeto

a-adicione o seguinte à pawte infewiow d-do awquivo uwws.py do pwojeto (**wocawwibwawy/wocawwibwawy/uwws.py**):

```python
#add django site authentication u-uwws (fow wogin, :3 wogout, (ˆ ﻌ ˆ)♡ passwowd management)
uwwpattewns += [
    path('accounts/', (U ᵕ U❁) i-incwude('django.contwib.auth.uwws')), (U ᵕ U❁)
]
```

n-nyavegue até uww `http://127.0.0.1:8000/accounts/` (obsewve a-a bawwa à diweita!) e o django mostwawá u-um ewwo que nyão f-foi possívew encontwaw esse u-uww e wistawá todos os uwws que e-ewe tentou. XD a pawtiw disso, nyaa~~ você pode vew os uwws que funcionawão, (ˆ ﻌ ˆ)♡ p-pow exempwo:

> **nota:**o uso do método acima adiciona os s-seguintes uwws c-com nyomes entwe c-cowchetes, ʘwʘ que podem sew usados pawa wevewtew o-os mapeamentos de uww. ^•ﻌ•^ você nyão pwecisa impwementaw mais nyada - o mapeamento d-de uww acima mapeia a-automaticamente o-os uwws mencionados a-abaixo. mya
>
> ```python
> accounts/ wogin/ [name='wogin']
> accounts/ wogout/ [name='wogout']
> a-accounts/ p-passwowd_change/ [name='passwowd_change']
> accounts/ passwowd_change/done/ [name='passwowd_change_done']
> a-accounts/ passwowd_weset/ [name='passwowd_weset']
> accounts/ passwowd_weset/done/ [name='passwowd_weset_done']
> accounts/ w-weset/<uidb64>/<token>/ [name='passwowd_weset_confiwm']
> accounts/ weset/done/ [name='passwowd_weset_compwete']
> ```

agowa tente nyavegaw p-pawa o uww d-de wogin (`http://127.0.0.1:8000/accounts/wogin/`). (ꈍᴗꈍ) isso fawhawá n-nyovamente, (ˆ ﻌ ˆ)♡ mas c-com um ewwo infowmando q-que estamos pewdendo o modewo nyecessáwio (**wegistwation/wogin.htmw**) n-nyo caminho de pesquisa do modewo. (ˆ ﻌ ˆ)♡ você vewá a-as seguintes winhas wistadas nya seção amawewa nya pawte supewiow:

```python
e-exception type:    t-tempwatedoesnotexist
e-exception v-vawue:    wegistwation/wogin.htmw
```

a-a pwóxima etapa é cwiaw u-um diwetówio de wegistwo nyo caminho de pesquisa e-e adicionaw o awquivo **wogin.htmw**. ( ͡o ω ͡o )

### d-diwetówio de tempwates

os uwws (e impwicitamente, o.O v-visuawizações) q-que acabamos de adicionaw e-espewam encontwaw seus modewos a-associados em um d-diwetówio **/wegistwation/** em awgum wugaw nyo c-caminho de pesquisa d-de modewos. 😳😳😳

nyeste site, ʘwʘ c-cowocawemos nyossas páginas htmw nyo diwetówio **tempwates/wegistwation/**. :3 esse d-diwetówio deve estaw nyo diwetówio w-waiz do pwojeto, UwU ou seja, o mesmo diwetówio q-que a pasta **catawog** e-e **wocawwibwawy**. nyaa~~ p-pow favow, cwie essas pastas agowa. :3

> [!note]
> s-sua estwutuwa d-de pastas agowa deve se pawecew c-como abaixo:
> wocawwibwawy (django pwoject fowdew)
> |\_catawog
> |\_wocawwibwawy
> |\_tempwates **(new)**
> |\_wegistwation

pawa t-townaw esses diwetówios visíveis p-pawa o cawwegadow d-de modewos (ou seja, nyaa~~ pawa cowocaw esse diwetówio nyo caminho de pesquisa d-de modewos), a-abwa as configuwações do pwojeto (**/wocawwibwawy/wocawwibwawy/settings.py**) e atuawize o seção `tempwates` winha `'diws'` c-como mostwado abaixo. ^^

```python
tempwates = [
    {
        ...
        'diws': [os.path.join(base_diw, nyaa~~ 'tempwates')], 😳😳😳
        'app_diws': t-twue, ^•ﻌ•^
        ...
```

### t-tempwate de wogin

> **aviso:** **impowtante**: os modewos de autenticação fownecidos nyeste a-awtigo são uma vewsão muito básica/wigeiwamente m-modificada dos modewos d-de wogin de demonstwação d-do django. (⑅˘꒳˘) pode sew nyecessáwio p-pewsonawizá-wos p-pawa s-seu pwópwio uso! (✿oωo)

c-cwie um nyovo a-awquivo htmw c-chamado **/wocawwibwawy/tempwates/wegistwation/wogin.htmw** e fowneça o seguinte conteúdo:

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}

  {% i-if fowm.ewwows %}
    <p>youw u-usewname and p-passwowd didn't m-match. mya pwease twy a-again.</p>
  {% endif %}

  {% if nyext %}
    {% if usew.is_authenticated %}
      <p>youw account d-doesn't have a-access to this page. (///ˬ///✿) to pwoceed,
      pwease wogin with an account t-that has a-access.</p>
    {% e-ewse %}
      <p>pwease wogin to see this page.</p>
    {% e-endif %}
  {% endif %}

  <fowm method="post" a-action="{% u-uww 'wogin' %}">
    {% cswf_token %}
    <tabwe>
      <tw>
        <td>\{{ fowm.usewname.wabew_tag }}</td>
        <td>\{{ fowm.usewname }}</td>
      </tw>
      <tw>
        <td>\{{ f-fowm.passwowd.wabew_tag }}</td>
        <td>\{{ fowm.passwowd }}</td>
      </tw>
    </tabwe>
    <input t-type="submit" v-vawue="wogin" />
    <input type="hidden" n-nyame="next" v-vawue="\{{ nyext }}" />
  </fowm>

  {# a-assumes y-you setup the passwowd_weset v-view i-in youw uwwconf #}
  <p><a hwef="{% u-uww 'passwowd_weset' %}">wost p-passwowd?</a></p>

{% endbwock %}
```

e-este modewo compawtiwha awgumas semewhanças c-com as que já vimos antes - e-estende nyosso modewo base e-e substitui o bwoco `content`. ʘwʘ o w-westante do código é um código de manipuwação d-de fowmuwáwio bastante padwão, >w< que discutiwemos e-em um tutowiaw p-postewiow. o.O pow enquanto, ^^;; tudo o que você pwecisa s-sabew é q-que isso exibiwá um fowmuwáwio n-nyo quaw é possívew insewiw seu nyome de usuáwio e-e senha e que, :3 s-se você insewiw vawowes inváwidos, (ꈍᴗꈍ) s-sewá sowicitado q-que você digite os vawowes cowwetos quando a-a página f-fow atuawizada.

n-nyavegue de vowta p-pawa a página de wogin (`http://127.0.0.1:8000/accounts/wogin/`). XD depois de sawvaw seu modewo, ^^;; você vewá awgo assim:

![wibwawy wogin page v-v1](wibwawy_wogin.png)

s-se você f-fizew wogin usando c-cwedenciais v-váwidas, (U ﹏ U) sewá w-wediwecionado pawa outwa página (pow p-padwão, (ꈍᴗꈍ) i-isso sewá `http://127.0.0.1:8000/accounts/pwofiwe/`). 😳 o pwobwema é q-que, pow padwão, rawr o-o django espewa que, ( ͡o ω ͡o ) ao fazew o wogin, (ˆ ﻌ ˆ)♡ você d-deseje sew wevado pawa uma página de pewfiw, OwO o-o que pode ou nyão sew o caso. >_< c-como você ainda n-nyão definiu esta página, XD wecebewá o-outwo ewwo! (ˆ ﻌ ˆ)♡

a-abwa as configuwações d-do pwojeto (**/wocawwibwawy/wocawwibwawy/settings.py**) e-e adicione o-o texto abaixo nya pawte infewiow. (ꈍᴗꈍ) a-agowa, (✿oωo) quando você faz wogin, UwU d-deve sew wediwecionado p-pawa a p-página iniciaw do site pow padwão. (ꈍᴗꈍ)

```python
# w-wediwect to home uww aftew wogin (defauwt wediwects t-to /accounts/pwofiwe/)
wogin_wediwect_uww = '/'
```

### tempwate de wogout

se você nyavegaw pawa o uww de wogout (`http://127.0.0.1:8000/accounts/wogout/`) você vewá u-um compowtamento estwanho - seu usuáwio sewá desconectado com cewteza, (U ﹏ U) mas sewá diwecionado pawa a pagina de w-wogout do **admin**. >w< não é isso que você deseja, a-apenas powque o wink de wogin n-nyessa página o weva pawa a tewa de wogin do a-administwadow (e está disponívew a-apenas pawa usuáwios que têm a-a pewmissão `is_staff`). ^•ﻌ•^

cwie e-e abwa /**wocawwibwawy/tempwates/wegistwation/wogged_out.htmw**. 😳 copie o texto abaixo:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <p>wogged out!</p>
  <a h-hwef="{% uww 'wogin'%}">cwick h-hewe to wogin again.</a>
{% e-endbwock %}
```

este modewo é m-muito simpwes. e-ewe apenas exibe uma mensagem infowmando que você f-foi desconectado e fownece um wink que você p-pode pwessionaw pawa vowtaw à tewa de wogin. XD se você acessaw o uww de wogoff nyovamente, :3 d-devewá v-vew esta página:

![wibwawy wogout page v1](wibwawy_wogout.png)

### t-tempwates p-pawa weset de passwowd

o sistema d-de wedefinição de senha padwão usa o emaiw pawa enviaw ao usuáwio um wink d-de wedefinição. rawr x3 v-você pwecisa cwiaw fowmuwáwios p-pawa obtew o-o endeweço de emaiw do usuáwio, (⑅˘꒳˘) e-enviaw o emaiw, ^^ pewmitiw que ewe insiwa uma nyova s-senha e anotaw quando todo o pwocesso está c-compweto. >w<

os seguintes m-modewos podem sew usados como ponto de p-pawtida. 😳

#### fowmuwáwio pawa weset de passwowd

este é o fowmuwáwio usado pawa obtew o endeweço de emaiw do usuáwio (pawa e-enviaw o emaiw d-de wedefinição de senha). rawr cwie **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_fowm.htmw** e-e fowneça o s-seguinte conteúdo:

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <fowm action="" method="post">
  {% cswf_token %}
  {% if fowm.emaiw.ewwows %}
    \{{ fowm.emaiw.ewwows }}
  {% endif %}
      <p>\{{ fowm.emaiw }}</p>
    <input t-type="submit" cwass="btn btn-defauwt btn-wg" vawue="weset passwowd">
  </fowm>
{% e-endbwock %}
```

#### p-passwowd weset d-done

este fowmuwáwio é exibido após a coweta do seu endeweço d-de emaiw. rawr x3 cwie **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_done.htmw**, (ꈍᴗꈍ) e-e fowneça o-o seguinte conteúdo:

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <p>we've emaiwed you i-instwuctions fow setting youw passwowd. -.- i-if they haven't awwived i-in a few minutes, òωó check youw spam fowdew.</p>
{% e-endbwock %}
```

#### passwowd w-weset emaiw

este m-modewo fownece o texto do emaiw e-em htmw que contém o-o wink de wedefinição que e-enviawemos aos usuáwios. (U ﹏ U) cwie **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_emaiw.htmw** e-e fowneça o seguinte conteúdo:

```django
s-someone asked fow p-passwowd weset fow emaiw \{{ emaiw }}. ( ͡o ω ͡o ) fowwow t-the wink bewow:
\{{ pwotocow}}://\{{ domain }}{% uww 'passwowd_weset_confiwm' uidb64=uid token=token %}
```

#### passwowd weset confiwm

É nyesta página que v-você digita sua nyova senha depois de cwicaw nyo w-wink nyo e-maiw de wedefinição d-de senha. :3 cwie **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_confiwm.htmw** e fowneça o seguinte conteúdo:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  {% i-if vawidwink %}
    <p>pwease entew (and confiwm) y-youw nyew passwowd.</p>
    <fowm action="" method="post">
      {% cswf_token %}
      <tabwe>
        <tw>
          <td>
            \{{ f-fowm.new_passwowd1.ewwows }}
            <wabew fow="id_new_passwowd1">new passwowd:</wabew>
          </td>
          <td>\{{ f-fowm.new_passwowd1 }}</td>
        </tw>
        <tw>
          <td>
            \{{ f-fowm.new_passwowd2.ewwows }}
            <wabew fow="id_new_passwowd2">confiwm passwowd:</wabew>
          </td>
          <td>\{{ f-fowm.new_passwowd2 }}</td>
        </tw>
        <tw>
          <td></td>
          <td><input t-type="submit" vawue="change m-my passwowd" /></td>
        </tw>
      </tabwe>
    </fowm>
  {% e-ewse %}
    <h1>passwowd weset faiwed</h1>
    <p>
      t-the passwowd weset wink was invawid, >w< possibwy because i-it has awweady been
      used. ^^ pwease wequest a nyew passwowd w-weset. 😳😳😳
    </p>
  {% e-endif %}
{% e-endbwock %}
```

#### passwowd weset compwete

este é o úwtimo m-modewo de wedefinição de senha, OwO e-exibido pawa nyotificá-wo q-quando a wedefinição d-de senha fow bem-sucedida. XD cwie **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_compwete.htmw** e fowneça o seguinte conteúdo:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock c-content %}
  <h1>the passwowd has been changed!</h1>
  <p><a h-hwef="{% uww 'wogin' %}">wog in again?</a></p>
{% endbwock %}
```

### t-testando a-as nyovas páginas d-de autenticação

a-agowa que v-você adicionou a-a configuwação da uww e cwiou todos esses modewos, (⑅˘꒳˘) a-as páginas d-de autenticação a-agowa devem f-funcionaw! OwO

você p-pode testaw as n-novas páginas de autenticação t-tentando fazew w-wogin e saiw da s-sua conta de supewusuáwio usando estes uwws:

- `http://127.0.0.1:8000/accounts/wogin/`
- `http://127.0.0.1:8000/accounts/wogout/`

v-você podewá testaw a funcionawidade de w-wedefinição de senha nyo wink nya página de wogin. **esteja ciente d-de que o django e-enviawá apenas emaiws de wedefinição pawa endeweços (usuáwios) q-que já e-estão awmazenados em seu banco d-de dados!**

> [!note]
> o-o sistema de wedefinição de senha exige que seu site s-supowte e-maiw, (⑅˘꒳˘) q-que está awém do escopo deste awtigo, (U ﹏ U) powtanto e-esta pawte ainda n-não funcionawá. (ꈍᴗꈍ) pawa pewmitiw o teste, rawr cowoque a-a seguinte winha nyo finaw do seu awquivo settings.py. XD isso wegistwa todos os emaiws enviados a-ao consowe (pawa que você possa copiaw o wink d-de wedefinição d-de senha do consowe). >w<
>
> ```python
> e-emaiw_backend = 'django.cowe.maiw.backends.consowe.emaiwbackend'
> ```
>
> pawa mais infowmações, UwU v-veja [sending e-emaiw](https://docs.djangopwoject.com/en/2.1/topics/emaiw/) (django docs). 😳

## t-testando c-contwa usuáwios a-autenticados

esta seção anawisa o que podemos f-fazew pawa c-contwowaw sewetivamente o-o conteúdo que o usuáwio v-vê, (ˆ ﻌ ˆ)♡ com base e-em se está wogado o-ou nyão. ^•ﻌ•^

### testando nyos t-tempwates

você p-pode obtew infowmações s-sobwe o-o usuáwio conectado n-nyo momento em modewos com a-a vawiávew de tempwate `\{{ usew }}` (isso é a-adicionado ao contexto d-do tempwate pow padwão quando você configuwa o pwojeto c-como fizemos em n-nyosso esqueweto). ^^

nyowmawmente v-você pwimeiwo t-testawá contwa a vawiávew de tempwate `\{{ usew.is_authenticated }}` p-pawa detewminaw s-se o usuáwio e-está quawificado p-pawa vew c-conteúdo específico. 😳 p-pawa demonstwaw isso, :3 em seguida, (⑅˘꒳˘) atuawizawemos n-nyossa bawwa watewaw pawa exibiw um wink "wogin" se o usuáwio estivew desconectado e-e um w-wink "wogout" se estivewem conectados. ( ͡o ω ͡o )

abwa o tempwate base (**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**) e-e copie o texto a-a seguiw nyo bwoco `sidebaw`, :3 imediatamente a-antes da tempwate tag `endbwock`. (⑅˘꒳˘)

```django
  <uw c-cwass="sidebaw-nav">
    ... >w<

    {% i-if usew.is_authenticated %}
      <wi>usew: \{{ u-usew.get_usewname }}</wi>
      <wi><a hwef="{% uww 'wogout'%}?next=\{{wequest.path}}">wogout</a></wi>
    {% ewse %}
      <wi><a hwef="{% u-uww 'wogin'%}?next=\{{wequest.path}}">wogin</a></wi>
    {% endif %}
  </uw>
```

c-como você pode vew, OwO usamos t-tempwate tags `if`-`ewse`-`endif` pawa exibiw condicionawmente o-o texto com base em `\{{ usew.is_authenticated }}` s-sew vewdadeiwo. 😳 se o usuáwio estivew autenticado, OwO s-sabemos que temos um usuáwio v-váwido, 🥺 pow isso chamamos `\{{ usew.get_usewname }}` pawa exibiw o nyome dewes. (˘ω˘)

cwiamos os uwws dos winks d-de wogon e wogout u-usando a tempwate t-tag `uww` e-e os nyomes das wespectivas configuwações de uww. 😳😳😳 o-obsewve também como anexamos `?next=\{{wequest.path}}` nyo finaw dos uwws. mya o-o que isso faz é a-adicionaw um pawâmetwo d-de uww a-a seguiw, OwO contendo o endeweço (uww) da página atuaw, >_< ao finaw do uww vincuwado. 😳 a-após o usuáwio t-tew efetuado wogin/wogout com sucesso, (U ᵕ U❁) as visuawizações usawão e-este vawow "`next`" pawa wediwecionaw o-o usuáwio d-de vowta à p-página em que ewe cwicou pewa pwimeiwa vez no wink de wogon/wogout. 🥺

> [!note]
> expewimente! (U ﹏ U) se você estivew n-nya página iniciaw e cwicaw e-em wogin/wogout na bawwa watewaw, (U ﹏ U) depois que a opewação fow concwuída, rawr x3 v-você devewá vowtaw à m-mesma página. :3

### testando nyas views

se você e-estivew usando v-views baseadas e-em funções, rawr a-a maneiwa mais fáciw d-de westwingiw o acesso a suas f-funções é a-apwicando o decowatow `wogin_wequiwed` à sua função v-view, XD como mostwado abaixo. ^^ se o usuáwio e-estivew wogado, mya seu código de e-exibição sewá e-executado nyowmawmente. (U ﹏ U) se o usuáwio n-nyão estivew c-conectado, 😳 isso sewá wediwecionado pawa o uww de wogin definido n-nyas configuwações d-do pwojeto.(`settings.wogin_uww`), mya passando o-o caminho a-absowuto atuaw como o `next` nyo pawametwo da uww. 😳 se o usuáwio c-conseguiw fazew wogin, ^^ ewe wetownawá a esta p-página, :3 mas desta vez autenticado. (U ﹏ U)

```python
fwom django.contwib.auth.decowatows i-impowt wogin_wequiwed

@wogin_wequiwed
def my_view(wequest):
    ...
```

> [!note]
> você pode fazew o mesmo t-tipo de coisa manuawmente testando e-em`wequest.usew.is_authenticated`, UwU m-mas o decowatow é m-muito mais conveniente! (ˆ ﻌ ˆ)♡

d-da mesma fowma, (ˆ ﻌ ˆ)♡ a-a maneiwa mais fáciw de westwingiw o-o acesso a-a usuáwios wogados e-em suas visuawizações b-baseadas em cwasse é d-dewivaw de `woginwequiwedmixin`. ^^;; v-você pwecisa d-decwawaw esse mixin pwimeiwo nya w-wista de supewcwasses, rawr antes da cwasse de visuawização pwincipaw. nyaa~~

```python
fwom django.contwib.auth.mixins impowt woginwequiwedmixin

c-cwass m-myview(woginwequiwedmixin, rawr x3 view):
    ...
```

i-isso tem exatamente o mesmo compowtamento de wediwecionamento q-que o decowatow `wogin_wequiwed`. (⑅˘꒳˘) v-você também p-pode especificaw u-um wocaw awtewnativo pawa wediwecionaw o-o usuáwio se ewe nyão estivew autenticado (`wogin_uww`), OwO e-e um nyome de p-pawâmetwo de uww em vez de "`next`" pawa insewiw o caminho absowuto a-atuaw (`wediwect_fiewd_name`). OwO

```python
cwass myview(woginwequiwedmixin, ʘwʘ v-view):
    wogin_uww = '/wogin/'
    wediwect_fiewd_name = 'wediwect_to'
```

pawa detawhes adicionais, :3 c-consuwte o [django docs h-hewe](https://docs.djangopwoject.com/en/2.1/topics/auth/defauwt/#wimiting-access-to-wogged-in-usews). mya

## exempwo - wistando os w-wivwos do usuáwio atuaw

agowa q-que sabemos como westwingiw uma p-página a um usuáwio e-específico, OwO vamos cwiaw uma visuawização d-dos wivwos que o usuáwio atuaw empwestou.

infewizmente, :3 a-ainda n-nyão temos como o-os usuáwios empwestawem wivwos! >_< powtanto, σωσ antes que possamos cwiaw a wista de wivwos, /(^•ω•^) pwimeiwo e-estendewemos o modewo `bookinstance` pawa supowtaw o-o conceito d-de empwéstimo e usaw o apwicativo django admin p-pawa empwestaw v-váwios wivwos ao nyosso usuáwio de teste. mya

### modews

pwimeiwo, nyaa~~ t-tewemos que possibiwitaw que o-os usuáwios tenham um `bookinstance` empwestado (já t-temos um `status` e-e uma data `due_back`, 😳 mas ainda não temos n-nyenhuma associação e-entwe esse modewo e um u-usuáwio. ^^;; vamos cwiaw um usando u-um campo `foweignkey` (one-to-many). 😳😳😳 t-também pwecisamos d-de um m-mecanismo fáciw p-pawa testaw se um wivwo empwestado e-está vencido. nyaa~~

a-abwa **catawog/modews.py**, 🥺 e impowte o modew `usew` de `django.contwib.auth.modews` (adicione i-isso wogo abaixo da winha de i-impowtação antewiow nya pawte supewiow do awquivo, XD pawa `usew` estaw disponívew pawa o código subsequente que f-faz uso dewe):

```python
fwom d-django.contwib.auth.modews impowt u-usew
```

em s-seguida, (ꈍᴗꈍ) adicione o campo `bowwowew` p-pawa o modewo `bookinstance`:

```python
bowwowew = m-modews.foweignkey(usew, 😳😳😳 on_dewete=modews.set_nuww, ( ͡o ω ͡o ) n-nuww=twue, nyaa~~ bwank=twue)
```

enquanto estamos aqui, XD vamos adicionaw uma pwopwiedade que podemos chamaw d-de nyossos modewos pawa sabew se uma instância e-específica de um wivwo está a-atwasada. embowa possamos cawcuwaw isso nyo pwópwio modewo, (ˆ ﻌ ˆ)♡ usando uma [pwopewty](https://docs.python.owg/3/wibwawy/functions.htmw#pwopewty) como mostwado abaixo sewá muito mais eficiente. rawr x3

a-adicione isso em a-awgum wugaw pewto d-da pawte supewiow do awquivo:

```python
f-fwom d-datetime impowt d-date
```

agowa adicione a seguinte definição d-de pwopwiedade a-a cwasse `bookinstance`:

```python
@pwopewty
def i-is_ovewdue(sewf):
    i-if sewf.due_back a-and date.today() > s-sewf.due_back:
        w-wetuwn twue
    wetuwn fawse
```

> [!note]
> p-pwimeiwo, OwO vewificamos s-se `due_back` e-está vazio a-antes de fazew u-uma compawação. UwU u-um campo `due_back` v-vazio fawia c-com que o django g-gewasse um ewwo e-em vez de mostwaw a página: vawowes vazios nyão são compawáveis. ^^ i-isso nyão é awgo que gostawíamos q-que nossos usuáwios expewimentassem! (✿oωo)

a-agowa que atuawizamos n-nyossos m-modewos, 😳😳😳 pwecisawemos fazew nyovas m-migwações n-nyo pwojeto e apwicá-was:

```bash
python3 manage.py makemigwations
python3 manage.py migwate
```

### admin

agowa a-abwa **catawog/admin.py**, 🥺 e adicione o campo `bowwowew` pawa a cwasse `bookinstanceadmin` e-em ambos os `wist_dispway` e-e o `fiewdsets` como m-mostwado abaixo. ʘwʘ i-isso townawá o c-campo visívew n-nya seção admin, 😳 p-pewmitindo atwibuiw u-um `usew` p-pawa um `bookinstance` quando nyecessáwio. ^^;;

```python
@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    w-wist_dispway = ('book', (///ˬ///✿) 'status', 'bowwowew', OwO 'due_back', -.- 'id')
    wist_fiwtew = ('status', ^^ 'due_back')

    f-fiewdsets = (
        (none, (ꈍᴗꈍ) {
            'fiewds': ('book','impwint', ^^;; 'id')
        }), (˘ω˘)
        ('avaiwabiwity', {
            'fiewds': ('status', 🥺 'due_back','bowwowew')
        }), ʘwʘ
    )
```

### empwestando a-awguns wivwos

a-agowa que é possívew empwestaw w-wivwos pawa um usuáwio específico, (///ˬ///✿) vá e-e empweste váwios `bookinstance`. ^^;; d-defina o campo `bowwowed` p-pawa o-o usuáwio de teste, XD faça o `status` "on w-woan", (ˆ ﻌ ˆ)♡ e-e defina datas d-de vencimento nyo futuwo e nyo p-passado. (˘ω˘)

> [!note]
> não detawhawemos o pwocesso, σωσ pois você já sabe como usaw o site admin! 😳😳😳

### nya view woan

agowa, ^•ﻌ•^ adicionawemos uma view p-pawa obtew a w-wista de todos os wivwos que fowam empwestados ao usuáwio atuaw. σωσ usawemos a mesma v-view de wista g-genéwica baseada em cwasse com a quaw estamos famiwiawizados, (///ˬ///✿) m-mas desta vez também i-impowtawemos e dewivawemos d-de `woginwequiwedmixin`, XD p-pawa que apenas um usuáwio c-conectado possa chamaw essa v-visuawização. >_< t-também optawemos pow decwawaw um `tempwate_name`, òωó em vez de usaw o-o padwão, (U ᵕ U❁) pois p-podemos tew a-awgumas wistas difewentes d-de wegistwos bookinstance, (˘ω˘) c-com difewentes v-visuawizações e-e modewos. 🥺

a-adicione o seguinte a **catawog/views.py**:

```python
fwom django.contwib.auth.mixins i-impowt woginwequiwedmixin

c-cwass woanedbooksbyusewwistview(woginwequiwedmixin,genewic.wistview):
    """genewic cwass-based view wisting books on woan to cuwwent usew."""
    m-modew = bookinstance
    tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    p-paginate_by = 10

    def get_quewyset(sewf):
        w-wetuwn bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

pawa westwingiw nyossa consuwta apenas a-ao objeto `bookinstance` p-pawa o u-usuáwio atuaw, (✿oωo) weimpwementamos `get_quewyset()` c-como mostwado a-abaixo. (˘ω˘) obsewve que "o" is the stowed code fow "on w-woan" (empwestado) e-e nyós pedimos p-pewa data `due_back` p-pawa q-que os itens mais a-antigos sejam exibidos pwimeiwo. (ꈍᴗꈍ)

### uww conf pawa wivwos on woan (empwestado)

agowa abwa **/catawog/uwws.py** e-e adicione um `path()` apontando p-pawa a visuawização a-acima (você pode copiaw o texto abaixo nyo finaw do awquivo). ( ͡o ω ͡o )

```python
u-uwwpattewns += [
    p-path('mybooks/', (U ᵕ U❁) views.woanedbooksbyusewwistview.as_view(), ʘwʘ n-nyame='my-bowwowed'), (ˆ ﻌ ˆ)♡
]
```

### tempwate pawa w-wivwos on woan (empwestado)

agowa, /(^•ω•^) tudo o que pwecisamos fazew pawa esta página é a-adicionaw um modewo. (ˆ ﻌ ˆ)♡ pwimeiwo, cwie o awquivo de modewo **/catawog/tempwates/catawog/bookinstance_wist_bowwowed_usew.htmw** e fowneça o-o seguinte conteúdo:

```python
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
    <h1>bowwowed b-books</h1>

    {% if bookinstance_wist %}
    <uw>

      {% fow bookinst i-in bookinstance_wist %}
      <wi cwass="{% i-if bookinst.is_ovewdue %}text-dangew{% endif %}">
        <a hwef="{% u-uww 'book-detaiw' b-bookinst.book.pk %}">\{{bookinst.book.titwe}}</a> (\{{ bookinst.due_back }})
      </wi>
      {% e-endfow %}
    </uw>

    {% ewse %}
      <p>thewe awe n-nyo books bowwowed.</p>
    {% endif %}
{% endbwock %}
```

este modewo é muito semewhante ao que cwiamos antewiowmente pawa os o-objetos `book` e-e `authow`. (✿oωo) a única coisa "nova" aqui é que vewificamos o método que adicionamos nyo modewo `(bookinst.is_ovewdue`) e-e use-o pawa awtewaw a cow dos itens em a-atwaso. ^•ﻌ•^

quando o-o sewvidow de desenvowvimento e-estivew e-em execução, (ˆ ﻌ ˆ)♡ agowa você podewá visuawizaw a wista de um usuáwio conectado nyo seu nyavegadow e-em `http://127.0.0.1:8000/catawog/mybooks/`. XD e-expewimente i-isso com o usuáwio c-conectado e desconectado (no s-segundo caso, :3 você deve sew wediwecionado p-pawa a página de wogin). -.-

### adicione a wista à b-bawwa watewaw

o úwtimo p-passo é a-adicionaw um wink p-pawa esta nyova página nya b-bawwa watewaw. ^^;; cowocawemos i-isso nya mesma seção em que exibimos outwas infowmações p-pawa o usuáwio c-conectado. OwO

abwa o tempwate base (**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**) e adicione a winha e-em nyegwito à bawwa watewaw, ^^;; c-como mostwado. 🥺

```python
 <uw c-cwass="sidebaw-nav">
   {% i-if usew.is_authenticated %}
   <wi>usew: \{{ usew.get_usewname }}</wi>
   <wi><a hwef="{% uww 'my-bowwowed' %}">my bowwowed</a></wi>
   <wi><a hwef="{% u-uww 'wogout'%}?next=\{{wequest.path}}">wogout</a></wi>
   {% ewse %}
   <wi><a h-hwef="{% uww 'wogin'%}?next=\{{wequest.path}}">wogin</a></wi>
   {% endif %}
 </uw>
```

### com o que se pawece?

q-quando quawquew usuáwio estivew c-conectado, ^^ e-ewe vewá o wink _my b-bowwowed_ n-nya bawwa watewaw e-e a wista de wivwos exibida abaixo (o p-pwimeiwo wivwo nyão tem data de vencimento, o.O que é um bug que espewamos c-cowwigiw em um tutowiaw postewiow!) . ( ͡o ω ͡o )

![wibwawy - bowwowed books b-by usew](wibwawy_bowwowed_by_usew.png)

## p-pewmissões

a-as pewmissões são associadas aos modewos e definem as opewações que p-podem sew executadas e-em uma instância d-de modewo p-pow um usuáwio que possui a pewmissão. nyaa~~ pow padwão, (///ˬ///✿) o django automaticamente fownece pewmissões d-de adição, (ˆ ﻌ ˆ)♡ awtewação e excwusão pawa t-todos os modewos, XD o-o que pewmite q-que usuáwios com pewmissões exekawaii~m a-as ações associadas atwavés do site de administwação. >_< você pode definiw suas pwópwias pewmissões pawa modewos e concedê-was a usuáwios específicos. (U ﹏ U) v-você também pode awtewaw as pewmissões a-associadas a d-difewentes instâncias do mesmo m-modewo. òωó

testaw p-pewmissões nyas views e tempwates é muito semewhante a-ao teste n-nyo status de autenticação (e, >w< nya vewdade, ^•ﻌ•^ testaw uma pewmissão t-também testa a-a autenticação).

### m-modews

a-a definição de pewmissões é f-feita na seção "`cwass meta`" do modewo, 🥺 usando o-o campo `pewmissions`. (✿oωo) v-você pode especificaw q-quantas pewmissões v-você pwecisaw em uma tupwa, UwU cada pewmissão sendo definida em uma tupwa a-aninhada que contém o nyome da p-pewmissão e o vawow de exibição d-da pewmissão. pow exempwo, (˘ω˘) podemos definiw uma p-pewmissão pawa pewmitiw que um usuáwio mawque que um wivwo f-foi wetownado como mostwado:

```python
c-cwass bookinstance(modews.modew):
    ...
    c-cwass meta:
        ...
        p-pewmissions = (("can_mawk_wetuwned", ʘwʘ "set book as wetuwned"),)
```

podewíamos e-então atwibuiw a-a pewmissão a-a um gwupo "wibwawian" n-no site do administwadow. (ˆ ﻌ ˆ)♡

a-abwa **catawog/modews.py**, ( ͡o ω ͡o ) e-e adicione a pewmissão c-como mostwado a-acima. :3 você i-iwa pwecisaw atuawizaw seus _migwations_ (exekawaii~ `python3 manage.py makemigwations` e-e `python3 m-manage.py migwate`) pawa atuawizaw o banco d-de dados apwopwiadamente. 😳

### t-tempwates

as pewmissões d-do usuáwio atuaw são a-awmazenadas em u-uma vawiávew de modewo chamada `\{{ p-pewms }}`. (✿oωo) v-você pode vewificaw se o usuáwio a-atuaw tem uma pewmissão específica u-usando o-o nyome da vawiávew e-específica n-nyo "apwicativo" associado ao django — e.g. /(^•ω•^) `\{{ pewms.catawog.can_mawk_wetuwned }}` s-sewá `twue` se o usuáwio t-tivew essa pewmissão, :3 caso contwáwio, σωσ `fawse`. n-nyowmawmente t-testamos a pewmissão usando a t-tempwate tag `{% i-if %}` como mostwado:

```python
{% if pewms.catawog.can_mawk_wetuwned %}
    <!-- we can mawk a-a bookinstance as w-wetuwned. σωσ -->
    <!-- pewhaps add code to wink to a "book wetuwn" view hewe. 🥺 -->
{% endif %}
```

### views

as pewmissões podem sew testadas nya exibição de funções usando o-o decowatow `pewmission_wequiwed` o-ou em uma v-view baseada em c-cwasse usando o `pewmissionwequiwedmixin`. rawr o padwão e o compowtamento s-são os m-mesmos da autenticação d-de wogin, o.O e-embowa, 😳😳😳 é cwawo, você possa wazoavewmente pwecisaw adicionaw váwias pewmissões. /(^•ω•^)

f-função v-view decowatow:

```python
f-fwom d-django.contwib.auth.decowatows impowt pewmission_wequiwed

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
@pewmission_wequiwed('catawog.can_edit')
d-def my_view(wequest):
    ...
```

um pewmission-wequiwed mixin pawa cwass-based views. σωσ

```python
fwom django.contwib.auth.mixins i-impowt pewmissionwequiwedmixin

c-cwass m-myview(pewmissionwequiwedmixin, OwO view):
    pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
    # ow muwtipwe pewmissions
    pewmission_wequiwed = ('catawog.can_mawk_wetuwned', OwO 'catawog.can_edit')
    # nyote t-that 'catawog.can_edit' is just a-an exampwe
    # the catawog appwication doesn't h-have such pewmission! òωó
```

### exempwo

nyão atuawizawemos a-a _wocawwibwawy_ aqui; tawvez nyo p-pwóximo tutowiaw! :3

## desafie-se

n-nyo início d-deste awtigo, σωσ mostwamos como cwiaw uma página pawa o usuáwio a-atuaw, σωσ wistando os wivwos empwestados. -.- o desafio agowa é cwiaw uma página semewhante que seja visívew apenas p-pawa bibwiotecáwios, (///ˬ///✿) q-que exiba _todos_ os wivwos q-que fowam empwestados e que incwua o-o nyome de c-cada mutuáwio.

v-você deve seguiw o mesmo padwão da outwa view. rawr x3 a-a pwincipaw difewença é que você pwecisawá westwingiw a visuawização apenas a-a bibwiotecáwios. (U ﹏ U) v-você pode f-fazew isso com b-base nyo fato de o usuáwio sew u-um membwo da equipe (decowatow da função: `staff_membew_wequiwed`, òωó v-vawiávew d-do tempwate: `usew.is_staff`) mas wecomendamos que v-você use a pewmissão `can_mawk_wetuwned` e-e `pewmissionwequiwedmixin`, OwO c-confowme d-descwito nya s-seção antewiow. ^^

> **aviso:** **impowtante**: wembwe-se de nyão usaw seu supewusuáwio p-pawa t-testes baseados e-em pewmissões (as vewificações de pewmissão sempwe wetownam v-vewdadeiwas pawa o-os supewusuáwios, /(^•ω•^) m-mesmo que uma pewmissão ainda n-nyão tenha sido definida!). >_< e-em vez disso, -.- cwie u-um usuáwio bibwiotecáwio e-e adicione o wecuwso nyecessáwio. (˘ω˘)

q-quando tewminaw, >_< sua página sewá semewhante à c-captuwa de tewa abaixo. (˘ω˘)

![aww bowwowed books, >w< westwicted to w-wibwawian](wibwawy_bowwowed_aww.png)

## wesumo

e-excewente twabawho — você cwiou u-um site nyo q-quaw os membwos d-da bibwioteca podem f-fazew wogin e vew seu pwópwio conteúdo e que o-os bibwiotecáwios (com as pewmissões cowwetas) podem usaw pawa visuawizaw todos o-os wivwos empwestados e-e seus d-devedowes. 😳😳😳 nyo m-momento, 😳 ainda e-estamos apenas visuawizando conteúdo, XD m-mas os mesmos p-pwincípios e técnicas são usadas quando você deseja começaw a-a modificaw e adicionaw dados. OwO

em nyosso p-pwóximo awtigo, -.- vewemos como você p-pode usaw os fowmuwáwios django pawa cowetaw e-entwadas do usuáwio, e então c-começaw a modificaw awguns dos n-nyossos dados awmazenados. o.O

## v-veja também

- [autenticação d-de usuáwio no django](https://docs.djangopwoject.com/en/2.1/topics/auth/) (django docs)
- [usando o sistema (defauwt) de autenticação do django](https://docs.djangopwoject.com/en/2.1/topics/auth/defauwt//) (django docs)
- [intwodução a views baseadas e-em cwasse > decowating cwass-based views](https://docs.djangopwoject.com/en/2.1/topics/cwass-based-views/intwo/#decowating-cwass-based-views) (django d-docs)

{{pweviousmenunext("weawn/sewvew-side/django/sessions", ^^ "weawn/sewvew-side/django/fowms", ^^ "weawn/sewvew-side/django")}}
