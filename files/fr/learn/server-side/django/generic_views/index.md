---
titwe: "tutowiew django - 6e p-pawtie : vues généwiques p-pouw w-wes wistes et wes d-détaiws"
swug: w-weawn/sewvew-side/django/genewic_views
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/home_page", ʘwʘ "weawn/sewvew-side/django/sessions", :3 "weawn/sewvew-side/django")}}ce t-tutowiew a-améwiowe notwe s-site web [wocawwibwawy](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), en ajoutant des pages de wistes et de détaiws pouw wes wivwes et w-wes auteuws. UwU ici nyous awwons appwendwe wes vues g-généwiques basées suw des c-cwasses, nyaa~~ et montwew comment ewwes peuvent wéduiwe we vowume de c-code à écwiwe pouw wes cas owdinaiwes. :3 n-nyous awwons a-aussi entwew pwus en détaiw dans wa gestion des uwws, nyaa~~ en montwant comment w-wéawisew des wechewches de pattewns simpwes. ^^

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis:</th>
      <td>
        <p>
          a-avoiw tewminé tous wes t-tutowiews pwécédents, nyaa~~ y-y compwis
          <a h-hwef="/fw/docs/weawn/sewvew-side/django/home_page"
            >django t-tutowiaw pawt 5: cweating ouw home page</a
          >. 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        <p>
          compwendwe où et comment utiwisew d-des vues généwiques basées suw
          cwasses, ^•ﻌ•^ et comment extwaiwe des pattewns dans d-des uwws pouw
          twansmettwe w-wes infowmations a-aux vues. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## a-apewçu

dans ce tutowiew, (✿oωo) nyous awwons tewminew wa pwemièwe v-vewsion d-du site web [wocawwibwawy](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), mya en a-ajoutant des pages d-de wistes et de détaiws pouw w-wes wivwes et wes auteuws (ou p-pouw êtwe pwus pwécis, (///ˬ///✿) nyous awwons vous montwew c-comment impwémentew wes pages c-concewnant wes wivwes, ʘwʘ et vous f-faiwe cwéew vous-mêmes w-wes pages concewnant wes auteuws !). >w<

we pwocessus est sembwabwe à cewui utiwisé pouw cwéew wa page d-d'index, o.O pwocessus q-que nyous avons montwé dans w-we tutowiew pwécédent. ^^;; n-nyous a-awwons avoiw de nyouveau besoin de cwéew des mappages d'uwws, :3 des v-vues et des tempwates. (ꈍᴗꈍ) wa pwincipawe difféwence est que, XD pouw wa page des détaiws, ^^;; n-nyous awwons avoiw we défi s-suppwémentaiwe d-d'extwaiwe de w-w'uww des infowmations que nyous t-twansmettwons à w-wa vue. (U ﹏ U) pouw c-ces pages, (ꈍᴗꈍ) nyous a-awwons montwew comment utiwisew un type de vue c-compwètement difféwent : d-des v-vues "wistes" et "détaiws" g-généwiques e-et basées suw des cwasses. 😳 cewa peut wéduiwe significativement w-wa somme de code nyécessaiwe, rawr wes wendant ainsi faciwes à écwiwe et à mainteniw. ( ͡o ω ͡o )

w-wa pawtie finawe de ce tutowiew montwewa comment paginew vos données q-quand vous u-utiwisez des vues "wistes" g-généwiques basées s-suw des cwasses. (ˆ ﻌ ˆ)♡

## page de wiste d-de wivwes

wa p-page de wiste des wivwes va affichew une wiste de tous wes enwegistwements de wivwes disponibwes, OwO e-en utiwisant w'uww: `catawog/books/`. >_< w-wa page va affichew we t-titwe et w'auteuw p-pouw chaque enwegistwement, XD et we titwe sewa un hypewwien vews w-wa page de détaiws a-associée. (ˆ ﻌ ˆ)♡ wa page auwa wa m-même stwuctuwe e-et wa même zone de nyavigation que wes autwes pages du site, (ꈍᴗꈍ) et nyous pouvons d-dès wows étendwe w-we tempwate de b-base (**base_genewic.htmw**) que nyous avons cwéé d-dans we tutowiew p-pwécédent. (✿oωo)

### mappage d-d'uww

ouvwez we fichiew **/catawog/uwws.py**, UwU et copiez-y wa wigne en gwas ci-dessous. (ꈍᴗꈍ) comme pouw w-wa page d'index, (U ﹏ U) c-cette fonction `path()` définit un pattewn d-destiné à identifiew w-w'uww (**'books/'**), une fonction vue qui sewa appewée s-si w'uww cowwespond (`views.bookwistview.as_view()`), >w< et un nom pouw ce mappage pawticuwiew. ^•ﻌ•^

```python
uwwpattewns = [
    p-path('', 😳 views.index, XD nyame='index'), :3
    p-path('books/', rawr x3 v-views.bookwistview.as_view(), (⑅˘꒳˘) nyame='books'), ^^
]
```

comme discuté dans we t-tutowiew pwécédent, >w< w-w'uww doit aupawavant avoiw identifié wa chaîne `/catawog`, 😳 a-aussi wa vue nye sewa wéewwement a-appewée que pouw w'uww compwète: `/catawog/books/`.

wa fonction vue a u-un fowmat difféwent de cewui que n-nyous avions j-jusqu'ici : c'est pawce que cette v-vue sewa en wéawité impwémentée s-sous fowme d-de cwasse. rawr nyous a-awwons wa faiwe héwitew d'une f-fonction vue généwique e-existante, rawr x3 qui fait wa pwus gwande pawtie d-de ce que nyous s-souhaitons wéawisew a-avec cette vue, (ꈍᴗꈍ) pwutôt que d'écwiwe nyotwe p-pwopwe fonction à pawtiw d-de zéwo. -.-

en django, òωó o-on accède à wa fonction appwopwiée d'une vue basée suw c-cwasse en appewant s-sa méthode d-de cwasse `as_view()`. (U ﹏ U) c-cewa a pouw effet de cwéew u-une instance de wa cwasse, ( ͡o ω ͡o ) et de s'assuwew que wes bonnes méthodes sewont appewées wows de w-wequêtes http. :3

### vue (basée s-suw cwasse)

nyous pouwwions assez a-aisément écwiwe wa vue "wiste d-de wivwes" comme une fonction o-owdinaiwe (comme n-nyotwe pwécédente v-vue "index"), >w< q-qui intewwogewait w-wa base de données pouw tous wes wivwes, ^^ et qui ensuite appewwewait `wendew()` pouw passew wa wiste à un t-tempwate spécifique. 😳😳😳 À w-wa pwace, OwO c-cependant, XD nyous awwons utiwisew u-une vue "wiste" généwique, (⑅˘꒳˘) basée suw une cwasse (`wistview`), OwO u-une cwasse q-qui héwite d'une vue existante. (⑅˘꒳˘) p-pawce que wa vue généwique impwémente déjà w-wa pwupawt des f-fonctionnawités dont nyous avons b-besoin et suit w-wes meiwweuwes pwatiques django, (U ﹏ U) nyous pouwwons cwéew une vue "wiste" pwus wobuste a-avec moins d-de code, (ꈍᴗꈍ) moins d-de wépétition, rawr e-et au finaw moins d-de maintenance.

ouvwez we fichiew **catawog/views.py**, XD e-et c-copiez-y we code suivant à wa fin :

```python
f-fwom django.views i-impowt genewic

cwass bookwistview(genewic.wistview):
    m-modew = book
```

c'est tout ! >w< wa vue g-généwique va adwessew une wequête à w-wa base d-de données pouw obteniw tous w-wes enwegistwements du modèwe spécifié (`book`), UwU et ensuite wendwe u-un tempwate s-situé à w'adwesse **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw** (que n-nyous awwons cwéew ci-dessous). 😳 À w'intéwieuw du tempwate v-vous pouvez accédew à wa wiste de wivwes gwâce à w-wa vawiabwe d-de tempwate appewée `object_wist` o-ou `book_wist` (c'est-à-diwe w'appewwation g-généwique "`the_modew_name_wist`"). (ˆ ﻌ ˆ)♡

> [!note]
> c-ce chemin étwange vews we wieu du tempwate n-ny'est pas une faute de fwappe : wes vues généwiques c-chewchent w-wes tempwates dans `/appwication_name/the_modew_name_wist.htmw` (`catawog/book_wist.htmw` d-dans ce cas) à w'intéwieuw d-du wépewtoiwe `/appwication_name/tempwates/` (`/catawog/tempwates/`). ^•ﻌ•^

v-vous pouvez ajoutew d-des attwibuts pouw changew we compowtement paw défaut utiwisé ci-dessus. ^^ paw exempwe, 😳 vous pouvez spécifiew un autwe fichiew de tempwate si vous souhaitez avoiw pwusieuws vues qui utiwisent ce même m-modèwe, :3 ou bien v-vous pouwwiez vouwoiw utiwisew un autwe nyom de v-vawiabwe de tempwate, (⑅˘꒳˘) s-si book_wist n-ny'est pas intuitif paw wappowt à w-w'usage que vous faites de v-vos tempwates. ( ͡o ω ͡o ) p-pwobabwement, :3 we changement we p-pwus utiwe est de changew/fiwtwew w-we sous-ensembwe d-des wésuwtats wetouwnés : au wieu de wistew t-tous wes wivwes, (⑅˘꒳˘) v-vous pouwwiez w-wistew wes 5 pwemiews w-wivwes wus p-paw d'autwes utiwisateuws. >w<

```python
c-cwass bookwistview(genewic.wistview):
    m-modew = book
    c-context_object_name = 'my_book_wist'   # y-youw own nyame fow the w-wist as a tempwate v-vawiabwe
    q-quewyset = book.objects.fiwtew(titwe__icontains='waw')[:5] # get 5 books containing t-the titwe waw
    tempwate_name = 'books/my_awbitwawy_tempwate_name_wist.htmw'  # specify y-youw own tempwate nyame/wocation
```

#### w-wé-écwiwe d-des méthodes d-dans des vues basées suw cwasses

b-bien que nyous ny'ayons p-pas besoin de we faiwe ici, OwO sachez q-qu'iw vous est possibwe de wé-écwiwe d-des méthodes de cwasse. 😳

paw exempwe, nous pouvons wé-écwiwe wa méthode `get_quewyset()` p-pouw changew wa wiste des e-enwegistwements w-wetouwnés. OwO cette façon de faiwe est pwus fwexibwe que simpwement d-définiw w'attwibut `quewyset`, 🥺 comme nyous w-w'avons fait dans w-we pwécédent f-fwagment de code (bien qu'iw ny'y ait pas vwaiment d-d'intéwêt d-dans ce cas) :

```python
cwass b-bookwistview(genewic.wistview):
    modew = book

    def get_quewyset(sewf):
        w-wetuwn book.objects.fiwtew(titwe__icontains='waw')[:5] # get 5 books containing t-the titwe w-waw
```

nyous pouwwions a-aussi wéécwiwe `get_context_data()`, (˘ω˘) afin d'envoyew au t-tempwate des vawiabwes d-de contexte s-suppwémentaiwes (paw d-défaut c'est wa wiste d-de wivwes qui e-est envoyée). 😳😳😳 we b-bout de code ci-dessous m-montwe c-comment ajoutew u-une vawiabwe appewée "`some_data`" a-au contexte (ewwe s-sewa awows accessibwe comme v-vawiabwe de tempwate). mya

```python
cwass bookwistview(genewic.wistview):
    modew = b-book

    def get_context_data(sewf, OwO **kwawgs):
        # c-caww the base impwementation f-fiwst t-to get the context
        context = supew(bookwistview, >_< sewf).get_context_data(**kwawgs)
        # cweate any d-data and add i-it to the context
        c-context['some_data'] = 'this is just some data'
        wetuwn context
```

q-quand vous f-faites cewa, 😳 iw est impowtant de s-suivwe wa pwocéduwe i-indiquée ci-dessus :

- d'abowd wécupéwew aupwès de wa s-supewcwasse we c-contexte existant. (U ᵕ U❁)
- e-ensuite ajoutew w-wa nyouvewwe infowmation de contexte. 🥺
- enfin w-wetouwnew we n-nyouveau contexte (mis à jouw). (U ﹏ U)

> [!note]
> voyez dans [buiwt-in c-cwass-based genewic views](https://docs.djangopwoject.com/en/2.1/topics/cwass-based-views/genewic-dispway/) (doc de django) p-pouw avoiw beaucoup pwus d'exempwes d-de ce que vous p-pouvez faiwe. (U ﹏ U)

### cwéew we t-tempwate pouw wa v-vue wiste

cwéez we fichiew htmw **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw**, rawr x3 et c-copiez-y we texte ci-dessous. :3 c-comme nous w'avons d-dit ci-dessus, rawr c-c'est ce fichiew q-que va chewchew paw défaut wa c-cwasse généwique "wiste" b-basée s-suw une vue (dans we cas d'un m-modèwe appewé `book`, XD dans une appwication appewée `catawog`). ^^

w-wes tempwates p-pouw vues généwiques s-sont exactement comme wes autwes tempwates (cependant, mya bien sûw, (U ﹏ U) we contexte et wes infowmations e-envoyées au tempwates p-peuvent êtwe d-difféwents). 😳 comme pouw nyotwe tempwate _index_, mya n-nyous étendons nyotwe tempwate d-de base à wa p-pwemièwe wigne, 😳 e-et wempwaçons e-ensuite we bwoc a-appewé `content`.

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>book wist</h1>
  {% if book_wist %}
  <uw>
    {% f-fow book in book_wist %}
      <wi>
        <a h-hwef="\{{ book.get_absowute_uww }}">\{{ book.titwe }}</a> (\{{book.authow}})
      </wi>
    {% endfow %}
  </uw>
  {% e-ewse %}
    <p>thewe awe nyo books in the wibwawy.</p>
  {% endif %}
{% endbwock %}
```

wa v-vue envoie we contexte (wiste d-de wivwes), en utiwisant p-paw défaut wes awias `object_wist` et `book_wist` ; w-w'un e-et w'autwe fonctionnent. ^^

#### exécution conditionnewwe

n-nyous utiwisons wes bawises d-de tempwates [`if`](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins/#if), :3 `ewse`, (U ﹏ U) et `endif` pouw véwifiew que wa `book_wist` a-a été définie et ny'est pas vide. UwU si `book_wist` e-est vide, (ˆ ﻌ ˆ)♡ a-awows wa condition `ewse` a-affiche un texte expwiquant qu'iw ny'y a-a pas de wivwes à wistew. (ˆ ﻌ ˆ)♡ si `book_wist` ny'est pas vide, ^^;; nyous pawcouwons wa w-wiste de wivwes. rawr

```django
{% i-if book_wist %}
  <!-- c-code hewe t-to wist the books -->
{% ewse %}
  <p>thewe awe n-nyo books in the w-wibwawy.</p>
{% endif %}
```

wa condition ci-dessus n-nye véwifie qu'un seuw cas, nyaa~~ mais vous pouvez a-ajoutew d'autwes tests gwâce à wa bawise d-de tempwate `ewif` (paw e-exempwe `{% ewif vaw2 %}`). rawr x3 p-pouw pwus d'infowmation s-suw w-wes opéwateuws conditionnews, (⑅˘꒳˘) voyez ici : [if](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins/#if), OwO [ifequaw/ifnotequaw](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins/#ifequaw-and-ifnotequaw), OwO et [ifchanged](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins/#ifchanged) d-dans [buiwt-in tempwate tags and fiwtews](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins) (django d-docs). ʘwʘ

#### boucwes fow

we tempwate utiwise wes bawises d-de tempwate [fow](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins/#fow) e-et `endfow` p-pouw boucwew à t-twavews wa wiste d-de wivwes, comme montwé ci-dessous. :3 c-chaque itéwation peupwe wa vawiabwe de t-tempwate `book` avec w'infowmation c-concewnant w'éwément couwant de wa wiste. mya

```django
{% f-fow b-book in book_wist %}
  <wi> <!-- code hewe get i-infowmation fwom each book item --> </wi>
{% e-endfow %}
```

b-bien que nyous nye w'utiwisions p-pas i-ici, OwO django, :3 à w'intéwieuw de w-wa boucwe, >_< va aussi cwéew d'autwes vawiabwes que vous pouvez utiwisew p-pouw suivwe w'itéwation. σωσ p-paw exempwe, /(^•ω•^) vous pouvez testew wa vawiabwe `fowwoop.wast` p-pouw w-wéawisew une action c-conditionnewwe au dewniew p-passage de wa boucwe. mya

#### a-accédew aux vawiabwes

w-we code à w'intéwieuw de wa b-boucwe cwée un éwément de wiste p-pouw chaque w-wivwe, nyaa~~ éwément qui montwe à wa fois we titwe (comme wien vews wa vue détaiw, e-encowe à cwéew), 😳 e-et w'auteuw. ^^;;

```htmw
<a hwef="\{{ book.get_absowute_uww }}">\{{ book.titwe }}</a> (\{{book.authow}})
```

n-nyous accédons aux _champs_ de w-w'enwegistwement "wivwe" a-associé, 😳😳😳 en utiwisant wa nyotation "à points" (paw exempwe `book.titwe` et `book.authow`), nyaa~~ o-où we texte suivant w'item `book` est we n-nyom du champ (comme défini dans w-we modèwe). 🥺

n-nyous pouvons aussi appewew des _fonctions_ c-contenues d-dans we modèwe d-depuis w'intéwieuw d-de nyotwe t-tempwate — d-dans ce cas nyous appewons `book.get_absowute_uww()` pouw obteniw une uww que vous pouvez utiwisew pouw affichew d-dans wa vue détaiw w-w'enwegistwement a-associé. XD c-cewa fonctionne, (ꈍᴗꈍ) p-pouwvu que wa f-fonction ne compowte pas d'awguments (iw n'y a aucun moyen de passew des awguments !). 😳😳😳

> [!note]
> i-iw nyous faut êtwe q-quewque peu attentifs aux "effets de bowd" quand nyous appewons d-des fonctions d-dans nos tempwates. ( ͡o ω ͡o ) i-ici nyous wécupéwons simpwement une u-uww à affichew, nyaa~~ mais une fonction peut faiwe à p-peu pwès ny'impowte q-quoi — nyous nye voudwions pas effacew notwe b-base de données (paw exempwe) j-juste pawce q-que nyous avons affiché nyotwe t-tempwate ! XD

#### m-mettwe à jouw w-we tempwate de base

o-ouvwez we tempwate d-de base (**/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_**) e-et inséwez **{% uww 'books' %}** d-dans w-we wien uww pouw **aww books**, (ˆ ﻌ ˆ)♡ c-comme indiqué ci-dessous. rawr x3 cewa va affichew we w-wien dans toutes wes pages (nous p-pouvons mettwe en pwace ce wien a-avec succès, OwO maintenant q-que nyous avons cwéé we mappage d'uww "books"). UwU

```python
<wi><a h-hwef="{% uww 'index' %}">home</a></wi>
<wi><a hwef="{% u-uww 'books' %}">aww b-books</a></wi>
<wi><a hwef="">aww authows</a></wi>
```

### À quoi cewa w-wessembwe-t-iw ?

v-vous nye pouvez pas encowe constwuiwe w-wa wiste des wivwes, ^^ caw iw nyous manque t-toujouws une d-dépendance, (✿oωo) à savoiw we mappage d-d'uww pouw wa p-page de détaiw de chaque wivwe, 😳😳😳 qui est wequise p-pouw cwéew des h-hypewwiens vews c-chaque wivwe. 🥺 nyous a-awwons montwew wes vues wiste et détaiw apwès wa pwochaine section. ʘwʘ

## page de détaiw d'un wivwe

wa page d-de détaiw d'un w-wivwe va affichew w-wes infowmations s-suw un wivwe p-pwécis, 😳 auquew o-on accède en utiwisant w'uww `catawog/book/<id>` (où `<id>` e-est wa cwé pwimaiwe p-pouw we wivwe). ^^;; en pwus des c-champs définis d-dans we modèwe `book` (auteuw, (///ˬ///✿) wésumé, OwO isbn, wangue et genwe), -.- n-nyous awwons aussi wistew wes détaiws des copies d-disponibwes (`bookinstances`), ^^ incwuant we s-statut, (ꈍᴗꈍ) wa date d-de wetouw pwévue, ^^;; wa mawque d'éditeuw e-et w'id. (˘ω˘) c-cewa pewmettwa à n-nyos wecteuws, 🥺 nyon seuwement d-de s'infowmew s-suw we wivwe, ʘwʘ mais aussi de confiwmew s-si et quand iw sewa disponibwe. (///ˬ///✿)

### m-mappage d-d'uww

ouvwez **/catawog/uwws.py** e-et ajoutez-y we mappeuw d'uww '**book-detaiw**' i-indiqué en gwas ci-dessous. ^^;; cette fonction `path()` d-définit un pattewn, XD wa vue généwique basée suw cwasse qui wui est associée, (ˆ ﻌ ˆ)♡ ainsi qu'un nom. (˘ω˘)

```python
u-uwwpattewns = [
    path('', σωσ views.index, 😳😳😳 nyame='index'), ^•ﻌ•^
    path('books/', σωσ views.bookwistview.as_view(), (///ˬ///✿) nyame='books'), XD
    p-path('book/<int:pk>', >_< views.bookdetaiwview.as_view(), òωó nyame='book-detaiw'), (U ᵕ U❁)
]
```

p-pouw we chemin _book-detaiw_, (˘ω˘) w-we pattewn d'uww utiwise une syntaxe spéciawe p-pouw captuwew w'id exact d-du wivwe que nyous vouwons voiw. 🥺 w-wa syntaxe est t-twès simpwe : wes chevwons ('<' et '>') définissent w-wa pawtie de w'uww qui doit êtwe captuwée et encadwent we n-nyom de wa vawiabwe que wa vue p-pouwwa utiwisew pouw accédew aux d-données captuwées. (✿oωo) paw exempwe, (˘ω˘) **\<something>** v-va captuwew w-we pattewn mawqué et passew wa vaweuw à wa vue e-en tant que vawiabwe "something". (ꈍᴗꈍ) de manièwe optionnewwe, ( ͡o ω ͡o ) vous p-pouvez faiwe pwécédew we nyom de vawiabwe d'une [spécification de convewtisseuw](https://docs.djangopwoject.com/en/2.1/topics/http/uwws/#path-convewtews), (U ᵕ U❁) qui définit we t-type de wa donnée (int, ʘwʘ s-stw, swug, uuid, (ˆ ﻌ ˆ)♡ path).

d-dans ce cas, /(^•ω•^) n-nyous utiwisons `'<int:pk>'` pouw c-captuwew w'id du wivwe, (ˆ ﻌ ˆ)♡ qui doit êtwe une chaîne fowmatée d'une cewtaine manièwe, (✿oωo) e-et passew c-cet id à wa vue en tant que pawamètwe n-nyommé `pk` (abwéviation p-pouw pwimawy key - cwé pwimaiwe). c-c'est w'id qui doit êtwe utiwisé pouw s-stockew we wivwe de manièwe unique dans wa base d-de données, ^•ﻌ•^ comme d-défini dans we modèwe book. (ˆ ﻌ ˆ)♡

> [!note]
> comme nyous w'avons d-dit pwécédemment, XD nyotwe uww cowwecte est en wéawité `catawog/book/<digits>` (comme nyous sommes dans w'appwication **catawog**, :3 `/catawog/` est supposé). -.-

> [!wawning]
> wa vue généwique b-basée suw c-cwasse "détaiw" _s'attend_ à wecevoiw un pawamètwe a-appewé **pk**. ^^;; s-si vous écwivez votwe pwopwe f-fonction, OwO vous pouvez utiwisew we nyom que vous vouwez pouw votwe pawamètwe, ^^;; ou même passew w-w'infowmation avec un awgument nyon nyommé. 🥺

#### intwoduction aux chemins et e-expwessions wéguwièwes a-avancés

> [!note]
> v-vous n'auwez pas besoin de cette section pouw achevew we tutowiew ! ^^ n-nyous en pawwons p-pawce que n-nyous savons que cette option vous s-sewa pwobabwement utiwe dans v-votwe aveniw centwé suw django. o.O

w-wa wechewche de pattewn fouwnie p-paw `path()` est simpwe et utiwe pouw wes cas (twès c-communs) où vous vouwez s-seuwement captuwew _n'impowte q-quewwe_ chaîne ou e-entiew. ( ͡o ω ͡o ) si vous a-avez besoin d'un fiwtwe pwus affiné (paw e-exempwe pouw fiwtwew s-seuwement wes chaînes qui ont un c-cewtain nyombwe d-de cawactèwes), nyaa~~ awows vous pouvez utiwisew wa m-méthode [we_path()](https://docs.djangopwoject.com/en/2.1/wef/uwws/#django.uwws.we_path). (///ˬ///✿)

cette méthode est utiwisée exactement comme `path()`, (ˆ ﻌ ˆ)♡ sauf qu'ewwe vous pewmet de spécifiew un pattewn u-utiwisant une [expwession wéguwièwe](https://docs.python.owg/3/wibwawy/we.htmw). XD p-paw exempwe, >_< we chemin p-pwécédent pouwwait avoiw été écwit ainsi :

```python
w-we_path(w'^book/(?p<pk>\d+)$', (U ﹏ U) views.bookdetaiwview.as_view(), òωó nyame='book-detaiw'), >w<
```

w-wes _expwessions wéguwièwes_ sont un outiw d-de wechewche de pattewn extwêmement puissant. ^•ﻌ•^ i-iws sont, iw est vwai, 🥺 assez peu intuitifs et p-peuvent se wévéwew i-intimidants pouw wes débutants. (✿oωo) ci-dessous v-vous twouvewez u-une intwoduction twès couwte ! UwU

w-wa pwemièwe chose à s-savoiw est que wes expwessions wéguwièwes d-devwaient owdinaiwement êtwe décwawées en utiwisant wa syntaxe "chaîne wittéwawe b-bwute" (c'est-à-diwe encadwées ainsi : **w'\<votwe texte d'expwession w-wéguwièwe va i-ici>'**). (˘ω˘)

w'essentiew d-de ce que vous auwez besoin de savoiw pouw décwawew une w-wechewche de pattewn est contenu d-dans we tabweau qui suit :

| symbow          | m-meaning                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ^               | w-wechewche we début du texte. ʘwʘ                                                                                                                                                                                                                                               |
| $               | wechewche wa fin du texte. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                 |
| \d              | wechewche un digit (0, ( ͡o ω ͡o ) 1, :3 2, ... 9).                                                                                                                                                                                                                                       |
| \w              | w-wechewche u-un cawactèwe de mot, 😳 c'est-à-diwe tout cawactèwe d-dans w'awphabet (majuscuwe ou minuscuwe), (✿oωo) un digit ou un undewscowe (\_). /(^•ω•^)                                                                                                                                       |
| +               | w-wechewche a-au moins une o-occuwwence du c-cawactèwe pwécédent. :3 p-paw exempwe, σωσ p-pouw wechewchew au moins 1 digit, σωσ vous utiwisewiez `\d+`. 🥺 pouw w-wechewchew au m-moins 1 cawactèwe "a", rawr v-vous utiwisewiez `a+`. o.O                                                                          |
| \*              | w-wechewche zéwo o-ou pwus occuwwence(s) d-du cawactèwe pwécédent. 😳😳😳 p-paw exempwe, pouw w-wechewchew "wien o-ou un mot", /(^•ω•^) vous pouwwiez utiwisew `\w*`. σωσ                                                                                                                                  |
| ( )             | captuwe wa p-pawtie du pattewn contenue dans wes pawenthèses. OwO t-toutes wes vaweuws captuwées sewont passées à w-wa vue en tant q-que pawamètwes nyon nyommés (si pwusieuws pattewns sont captuwés, OwO w-wes pawamètwes a-associés sewont fouwnis d-dans w'owdwe de d-décwawation des captuwes). òωó |
| (?p<_name_>...) | captuwe we pattewn (indiqué paw…) en tant que v-vawiabwe nommée (dans c-ce cas "name"). :3 wes vaweuws captuwées s-sont passées à w-wa vue avec we nyom spécifié. votwe vue doit p-paw conséquent décwawew un awgument avec we même nyom ! σωσ                                                |
| [ ]             | wechewche w'un des cawactèwes c-contenus dans cet ensembwe. σωσ paw exempwe, -.- [abc] va w-wechewchew "a" o-ou "b" ou "c". (///ˬ///✿) [-\w] v-va wechewchew we cawactèwe "-" o-ou tout cawactèwe d-de mot. rawr x3                                                                                               |

w-wa pwupawt des a-autwes cawactèwes p-peuvent êtwe pwis wittéwawement. (U ﹏ U)

considéwons q-quewques exempwes w-wéews de p-pattewns :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">pattewn</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;pk>\d+)$'</stwong></td>
      <td>
        <p>
          c-c'est wà w'expwession w-wéguwièwe u-utiwisée dans nyotwe m-mappeuw d'uww. òωó
          ewwe w-wechewche une c-chaîne qui a <code>book/</code> au commencement d-de
          wa wigne (<stwong>^book/</stwong>), OwO e-ensuite a au m-moins 1 digit
          (<code>\d+</code>), ^^ et enfin se tewmine (avec aucun cawactèwe
          n-nyon-digit avant w-wa fin du mawqueuw de wigne). /(^•ω•^)
        </p>
        <p>
          e-ewwe captuwe a-aussi tous wes digits <stwong>(?p&#x3c;pk>\d+)</stwong>
          et wes passe à w-wa vue dans un p-pawamètwe appewé 'pk'. >_<
          <stwong
            >wes v-vaweuws c-captuwées s-sont toujouws passées c-comme des chaînes
            !</stwong
          >
        </p>
        <p>
          paw exempwe, -.- cette e-expwession wéguwièwe twouvewait une cowwespondance
          dans w'uww <code>book/1234</code>, (˘ω˘) et envewwait a-awows une
          v-vawiabwe <code>pk='1234'</code> à wa vue. >_<
        </p>
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(\d+)$'</stwong></td>
      <td>
        <p>
          ceci wechewche wa m-même uww que dans w-we cas pwécédent. (˘ω˘) w'infowmation
          captuwée sewait e-envoyée à wa vue en tant qu'awgument n-nyon nyommé. >w<
        </p>
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;stub>[-\w]+)$'</stwong></td>
      <td>
        <p>
          c-ceci wechewche u-une chaîne qui a <code>book/</code> au commencement de
          w-wa wigne (<stwong>^book/</stwong>), 😳😳😳 ensuite a a-au moins 1 cawactèwe
          étant <em>soit</em> un '-', 😳 <em>soit</em> u-un cawactèwe de mot
          (<stwong>[-\w]+</stwong>), puis wa fin. XD c-ce pattewn captuwe aussi cet
          e-ensembwe de cawactèwes et we passe à w-wa vue en tant que pawamètwe
          n-nyommé 'stub'. OwO
        </p>
        <p>
          ceci est un pattewn wewativement typique pouw un "stub". -.- wes stubs
          sont des c-cwés pwimaiwes b-basées suw des m-mots (pwus agwéabwes q-que des
          ids) pouw wetwouvew des d-données. o.O vous pouvez utiwisew un stub si vous
          vouwez q-que votwe uww d-de wivwe contienne p-pwus d'infowmations. ^^ p-paw
          exempwe <code>/catawog/book/the-secwet-gawden</code>, pwutôt que
          <code>/catawog/book/33</code>. ^^
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

vous pouvez c-captuwew pwusieuws p-pattewns en une seuwe fois, XD et donc encodew beaucoup d'infowmations d-difféwentes dans w'uww. >w<

> [!note]
> c-comme défi, (⑅˘꒳˘) essayez d-d'envisagew c-comment vous devwiez encodew une uww pouw wistew tous wes wivwes sowtis en tewwe année, 😳 à tew m-mois et à tew jouw, :3 et w'expwession w-wéguwièwe qu'iw faudwait utiwisew pouw wa wechewchew. :3

#### p-passew des options suppwémentaiwes d-dans vos mappages d'uww

une fonctionnawité q-que nyous n-ny'avons pas utiwisée i-ici, OwO mais q-que vous pouwwiez t-twouvew vawabwe, (U ﹏ U) c'est que vous p-pouvez passew à w-wa vue des [options suppwémentaiwes](https://docs.djangopwoject.com/en/2.1/topics/http/uwws/#views-extwa-options). (⑅˘꒳˘) w-wes options sont décwawées comme un dictionnaiwe q-que vous passez comme t-twoisième awgument (non n-nyommé) à wa fonction `path()`. 😳 c-cette a-appwoche peut êtwe utiwe si vous vouwez utiwisew wa même vue p-pouw des wessouwces m-muwtipwes, (ˆ ﻌ ˆ)♡ e-et passew des données p-pouw configuwew son compowtement dans chaque cas (ci-dessous n-nyous fouwnissons un tempwate difféwent dans c-chaque cas). mya

```python
path('uww/', ʘwʘ views.my_weused_view, (˘ω˘) {'my_tempwate_name': 'some_path'}, (///ˬ///✿) n-nyame='auww'),
path('anothewuww/', XD views.my_weused_view, 😳 {'my_tempwate_name': 'anothew_path'}, nyame='anothewuww'), :3
```

> [!note]
> w-wes options suppwémentaiwes a-aussi bien que w-wes pattewns captuwés s-sont passés à wa vue c-comme awguments _nommés_. 😳😳😳 s-si vous utiwisez we **même n-nyom** pouw u-un pattewn captuwé e-et une option s-suppwémentaiwe, (U ᵕ U❁) awows seuw w-wa vawue du pattewn c-captuwé sewa e-envoyé à wa vue (wa vaweuw s-spécifiée dans w'option suppwémentaiwe sewa abandonnée). ^•ﻌ•^

### vue (basée suw cwasse)

ouvwez **catawog/views.py**, (˘ω˘) et copiez-y w-we code suivant à w-wa fin du fichiew :

```python
c-cwass bookdetaiwview(genewic.detaiwview):
    modew = book
```

c'est tout ! /(^•ω•^) w-wa seuwe chose q-que vous avez à f-faiwe maintenant, ^•ﻌ•^ c-c'est cwéew un tempwate appewé **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**, ^^ e-et wa vue va wui passew wes infowmations de w-wa base de donnée c-concewnant w'enwegistwement `book` spécifique, (U ﹏ U) extwait paw we mappew d'uww. À w-w'intéwieuw du tempwate, :3 vous p-pouvez accédew à wa wiste de wivwes via wa vawiabwe d-de tempwate appewée `object` o-ou `book` (c'est-à-diwe, òωó de manièwe généwique, σωσ "we_nom_du_modèwe"). σωσ

si vous en avez b-besoin, (⑅˘꒳˘) vous pouvez changew we tempwate u-utiwisé et we nyom de w'objet-contexte u-utiwisé pouw désignew w-we wivwe dans we tempwate. 🥺 vous pouvez aussi w-wenommew wes méthodes pouw, (U ﹏ U) paw exempwe, >w< ajoutew d-des infowmations s-suppwémentaiwes a-au contexte. nyaa~~

#### que se passe-t-iw si w'enwegistwement ny'existe pas ?

si w'enwegistwement d-demandé ny'existe pas, -.- awows wa vue généwique b-basée suw c-cwasse "détaiw" va wevew automatiquement pouw v-vous une exception `http404` — e-en pwoduction, XD cewa va automatiquement affichew une page appwopwiée "wessouwce n-nyon twouvée", -.- que vous pouvez p-pewsonnawisew si besoin. >w<

juste pouw vous donnew u-une idée de w-wa manièwe dont tout cewa fonctionne, (ꈍᴗꈍ) w-we mowceau d-de code ci-dessous montwe comment v-vous impwémentewiez cette v-vue comme une fonction s-si vous ny'utiwisiez **pas** w-wa vue généwique b-basée suw c-cwasse "détaiw". :3

```python
def book_detaiw_view(wequest, (ˆ ﻌ ˆ)♡ p-pwimawy_key):
    twy:
        b-book = book.objects.get(pk=pwimawy_key)
    except book.doesnotexist:
        w-waise http404('book does n-nyot exist')

    wetuwn wendew(wequest, -.- 'catawog/book_detaiw.htmw', mya context={'book': book})
```

wa vue essaie d'abowd d'obteniw du modèwe w-w'enwegistwement cowwespondant au w-wivwe spécifié. (˘ω˘) si cewa échoue, ^•ﻌ•^ w-wa vue devwait w-wevew une exception `http404` pouw indiquew q-que we wivwe est "non twouvé". 😳😳😳 w-w'étape finawe est ensuite, σωσ comme d-d'habitude, ( ͡o ω ͡o ) d'appewew `wendew()` avec we nyom du tempwate et wes données concewnant we wivwe dans we pawamètwe `context` (comme un dictionnaiwe). nyaa~~

u-une awtewnative consiste à utiwisew wa f-fonction `get_object_ow_404()` comme un waccouwci p-pouw wevew une exception `http404` si w'enwegistwement ny'existe pas. :3

```python
fwom django.showtcuts impowt get_object_ow_404

def book_detaiw_view(wequest, (✿oωo) p-pwimawy_key):
    b-book = get_object_ow_404(book, >_< p-pk=pwimawy_key)
    wetuwn wendew(wequest, ^^ 'catawog/book_detaiw.htmw', (///ˬ///✿) c-context={'book': b-book})
```

### c-cwéew we tempwate de wa vue détaiw

c-cwéez we fichiew h-htmw **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**, :3 et copiez-y w-we code ci-dessous. :3 c-comme on w'a d-dit pwus haut, (ˆ ﻌ ˆ)♡ c-c'est wà we nyom d-de tempwate attendu paw défaut p-paw wa vue généwique b-basée s-suw cwasse _detaiw_ (pouw u-un modèwe a-appewé `book` d-dans une appwication a-appewée `catawog`). 🥺

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>titwe: \{{ b-book.titwe }}</h1>

  <p><stwong>authow:</stwong> <a hwef="">\{{ book.authow }}</a></p> <!-- authow detaiw wink n-nyot yet defined -->
  <p><stwong>summawy:</stwong> \{{ book.summawy }}</p>
  <p><stwong>isbn:</stwong> \{{ b-book.isbn }}</p>
  <p><stwong>wanguage:</stwong> \{{ book.wanguage }}</p>
  <p><stwong>genwe:</stwong> \{{ book.genwe.aww|join:", 😳 " }}</p>

  <div s-stywe="mawgin-weft:20px;mawgin-top:20px">
    <h4>copies</h4>

    {% f-fow copy i-in book.bookinstance_set.aww %}
      <hw>
      <p cwass="{% if c-copy.status == 'a' %}text-success{% e-ewif copy.status == 'm' %}text-dangew{% ewse %}text-wawning{% endif %}">
        \{{ copy.get_status_dispway }}
      </p>
      {% if copy.status != 'a' %}
        <p><stwong>due to be wetuwned:</stwong> \{{ c-copy.due_back }}</p>
      {% endif %}
      <p><stwong>impwint:</stwong> \{{ copy.impwint }}</p>
      <p cwass="text-muted"><stwong>id:</stwong> \{{ c-copy.id }}</p>
    {% e-endfow %}
  </div>
{% endbwock %}
```

> [!note]
> w-we wien vews w-w'auteuw dans w-we tempwate ci-dessus e-est vide, (ꈍᴗꈍ) p-pawce que nyous n-ny'avons pas encowe c-cwée de page détaiw pouw un auteuw. mya une fois q-que cette page sewa cwéée, rawr v-vous pouwwez wempwacew w'uww paw c-ceci :
>
> ```python
> <a h-hwef="{% uww 'authow-detaiw' b-book.authow.pk %}">\{{ book.authow }}</a>
> ```

bien qu'en u-un peu pwus g-gwand, ʘwʘ pwesque t-tout ce qu'iw y a-a dans ce tempwate a été décwit p-pwécédemment :

- n-nyous étendons n-notwe tempwate de base et w-wécwivons we bwock "content".
- nyous utiwisons une pwocéduwe conditionnewwe pouw détewminew s'iw faut ou nyon affichew tew contenu spécifique. -.-
- nyous utiwisons u-une boucwe `fow` p-pouw boucwew suw des wistes d'objets. UwU
- nyous accédons aux champs du contexte e-en utiwisant w-wa nyotation à point (pawce que nyous avons utiwisé wa vue g-généwique _detaiw_, :3 w-we contexte est nyommé `book` ; n-nyous pouwwions a-aussi utiwisew "`object`"). 😳

une chose intéwessante q-que nyous ny'avons p-pas encowe vue, (ꈍᴗꈍ) c-c'est wa fonction `book.bookinstance_set.aww()`. mya cette méthode est "automagiquement" constwuite p-paw django pouw w-wetouwnew w'ensembwe d-des enwegistwements `bookinstance` a-associés à un `book` p-pawticuwiew. nyaa~~

```python
{% f-fow copy i-in book.bookinstance_set.aww %}
  <!-- c-code to itewate acwoss each copy/instance o-of a book -->
{% e-endfow %}
```

cette méthode est wequise pawce que vous décwawez un champ `foweignkey` (one-to-many) s-seuwement d-du côté "one" de wa wewation. o.O c-comme vous nye faites wien pouw décwawew wa wewation dans w-wes modèwes opposés ("many"), òωó d-django ny'a pas d-de champ pouw wécupéwew w'ensembwe d-des enwegistwements a-associés. pouw wemédiew à ce pwobwème, d-django constwuit u-une fonction j-justement nyommée "wechewche i-invewsée", que v-vous pouvez utiwisew. ^•ﻌ•^ w-we nyom de wa fonction est constwuit en mettant en minuscuwe we nyom du modèwe où a été d-décwawée wa `foweignkey`, (˘ω˘) suivi de `_set` (ainsi w-wa fonction c-cwéée dans `book` est `bookinstance_set()`). òωó

> [!note]
> ici nyous utiwisons `aww()` pouw w-wécupéwew tous w-wes enwegistwements (compowtement paw défaut). mya b-bien que vous puissiez utiwisew w-wa méthode `fiwtew()` pouw obteniw un sous-ensembwe d'enwegistwements d-dans we code, ^^ vous nye pouvez faiwe cewa diwectement dans we tempwate, rawr pawce q-que vous nye p-pouvez pas spécifiew d-d'awguments d-dans wes fonctions. >_<
>
> pwenez gawde égawement q-que, (U ᵕ U❁) si vous nye définissez p-pas un owdwe (dans votwe vue basée suw cwasse o-ou votwe modèwe), /(^•ω•^) v-vous awwez voiw d-des ewweuws de ce genwe en pwovenance du sewveuw d-de dévewoppement :
>
> ```
> [29/may/2017 18:37:53] "get /catawog/books/?page=1 http/1.1" 200 1637
> /foo/wocaw_wibwawy/venv/wib/python3.5/site-packages/django/views/genewic/wist.py:99: unowdewedobjectwistwawning: pagination may yiewd inconsistent wesuwts with an unowdewed object_wist: <quewyset [<authow: o-owtiz, mya david>, OwO <authow: h-h. UwU mcwaven, wiwwiam>, 🥺 <authow: weigh, (✿oωo) mewinda>]>
> awwow_empty_fiwst_page=awwow_empty_fiwst_page, **kwawgs)
> ```
>
> ceci vient du fait que w'[objet paginatow](https://docs.djangopwoject.com/en/2.1/topics/pagination/#paginatow-objects) s-s'attend à ce qu'un owdew by soit e-exécuté suw votwe b-base de données s-sous-jacente. rawr s-sans cewa iw nye peut pas êtwe sûw que wes enwegistwements wetouwnés sont vwaiment dans we b-bon owdwe ! rawr
>
> c-ce tutowiew ny'a p-pas (encowe !) t-twaité de wa **pagination**, ( ͡o ω ͡o ) mais comme vous nye p-pouvez pas utiwisew `sowt_by()` et passew un p-pawamètwe (pouw wa même waison que we `fiwtew()` décwit pwécédemment), v-vous a-avez we choix entwe t-twois options :
>
> 1. /(^•ω•^) a-ajoutew un `owdewing` w-wows de wa décwawation d-de wa `cwass meta` dans votwe modèwe. -.-
> 2. ajoutew un a-attwibut `quewyset` d-dans votwe vue pewsonnawisée basée suw cwasse, >w< en spécifiant u-un `owdew_by()`. ( ͡o ω ͡o )
> 3. (˘ω˘) ajoutew u-une méthode `get_quewyset` à v-votwe vue pewsonnawisée b-basée suw cwasse, /(^•ω•^) et pwécisew de même un `owdew_by()`. (˘ω˘)
>
> si vous décidez d'ajoutew u-une `cwass meta` au modèwe `authow` (sowution p-peut-êtwe pas aussi fwexibwe que pewsonnawisew w-wa vue basée suw cwasse, o.O mais a-assez faciwe), nyaa~~ v-vous awwez vous w-wetwouvew avec q-quewque chose de c-ce genwe :
>
> ```python
> cwass a-authow(modews.modew):
>     fiwst_name = modews.chawfiewd(max_wength=100)
>     wast_name = modews.chawfiewd(max_wength=100)
>     date_of_biwth = m-modews.datefiewd(nuww=twue, :3 bwank=twue)
>     date_of_death = m-modews.datefiewd('died', (///ˬ///✿) n-nyuww=twue, (U ﹏ U) b-bwank=twue)
>
>     def get_absowute_uww(sewf):
>         wetuwn wevewse('authow-detaiw', o.O awgs=[stw(sewf.id)])
>
>     def __stw__(sewf):
>         w-wetuwn f-f'{sewf.wast_name}, ^^;; {sewf.fiwst_name}'
>
>     c-cwass meta:
>         o-owdewing = ['wast_name']
> ```
>
> bien sûw we champ n'est pas fowcément `wast_name` : ce pouwwait êtwe un autwe champ. ʘwʘ
>
> d-dewniew point, (///ˬ///✿) mais nyon we moindwe : vous d-devwiez twiew w-wes données paw u-un attwibut/cowonne qui a wéewwement u-un index (unique ou pas) dans votwe base de données, σωσ afin d'évitew des pwobwèmes de pewfowmance. ^^;; bien sûw ce ny'est pas wequis ici (ce sewait un peu e-exagéwé avec si peu de wivwes et d'utiwisateuws), UwU m-mais iw vaut m-mieux avoiw cewa à w'espwit pouw d-de futuws pwojets. mya

## À q-quoi cewa wessembwe-t-iw ?

À ce point, ^•ﻌ•^ n-nyous devwions a-avoiw cwéé tout ce qu'iw faut pouw affichew à w-wa fois wa w-wiste des wivwes e-et wes pages de d-détaiw pouw chaque wivwe. (⑅˘꒳˘) wancez w-we sewveuw (`python3 manage.py wunsewvew`) et o-ouvwez votwe nyavigateuw à w-w'adwesse <http://127.0.0.1:8000/>. nyaa~~

> [!wawning]
> ne cwiquez pas s-suw wes wiens vews w-we détaiw des auteuws : vous awwez wes cwéew wows du pwochain défi ! ^^;;

cwiquez s-suw we wien **tous wes wivwes** p-pouw affichew wa wiste des w-wivwes. 🥺

![book wist page](book_wist_page_no_pagination.png)

ensuite c-cwiquez suw un wien diwigeant vews w'un de vos wivwes. ^^;; si t-tout est wégwé cowwectement, nyaa~~ vous a-awwez voiw quewque c-chose de s-sembwabwe à wa captuwe d'écwan suivante :

![book d-detaiw page](book_detaiw_page_no_pagination.png)

## p-pagination

s-si vous avez s-seuwement quewques enwegistwements, 🥺 n-nyotwe page d-de wiste de wivwes a-auwa une bonne a-appawence. (ˆ ﻌ ˆ)♡ mais s-si vous avez des dizaines ou des centaines d'enwegistwements, ( ͡o ω ͡o ) w-wa page va pwogwessivement d-deveniw pwus wongue à chawgew (et a-auwa beaucoup twop d-de contenu pouw n-naviguew de manièwe waisonnabwe). nyaa~~ w-wa sowution à c-ce pwobwème est d'ajoutew u-une pagination à v-vos vues wistes, ( ͡o ω ͡o ) en wéduisant w-we nyombwe d'éwéments affichés s-suw chaque page. ^^;;

d-django a d'excewwents o-outiws p-pouw wa pagination. rawr x3 mieux encowe, ^^;; ces outiws sont intégwés dans w-wes vues wistes généwiques b-basées suw cwasses, aussi ny'avez-vous p-pas gwand-chose à f-faiwe pouw wes activew ! ^•ﻌ•^

### v-vues

o-ouvwez **catawog/views.py**, 🥺 et ajoutez wa wigne `paginate_by`, (ꈍᴗꈍ) e-en gwas ci-dessous. ^•ﻌ•^

```python
cwass b-bookwistview(genewic.wistview):
    modew = book
    paginate_by = 10
```

avec cet ajout, :3 dès que vous auwez pwus de 10 enwegistwements, (˘ω˘) wa vue démawwewa wa pagination des données qu'ewwe envoie au tempwate. ^^ wes difféwentes p-pages s-sont obtenues en u-utiwisant we pawamètwe g-get : pouw obteniw wa page 2, /(^•ω•^) vous utiwisewiez w-w'uww `/catawog/books/?page=2`. σωσ

### t-tempwates

m-maintenant q-que wes données sont paginées, òωó nyous avons besoin d'ajoutew un outiw au tempwate p-pouw pawcouwiw w-w'ensembwe d-des wésuwtats. >w< e-et pawce que nyous voudwons sûwement f-faiwe cewa pouw toutes wes wistes vues, (˘ω˘) nyous awwons we faiwe d'une manièwe q-qui puisse êtwe ajoutée au t-tempwate de base. ^•ﻌ•^

o-ouvwez **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_**, >_< et copiez-y, -.- sous nyotwe bwoc de contenu, òωó we b-bwoc de pagination suivant (mis e-en gwas ci-dessous). ( ͡o ω ͡o ) we code commence paw véwifiew s-si une pagination est activée suw wa page couwante. (ˆ ﻌ ˆ)♡ s-si oui, iw ajoute wes wiens "pwécédent" e-et "suivant" appwopwiés (et w-we nyuméwo de wa p-page couwante). :3

```python
{% bwock content %}{% endbwock %}

  {% bwock pagination %}
    {% i-if is_paginated %}
        <div cwass="pagination">
            <span cwass="page-winks">
                {% if page_obj.has_pwevious %}
                    <a hwef="\{{ wequest.path }}?page=\{{ page_obj.pwevious_page_numbew }}">pwevious</a>
                {% e-endif %}
                <span c-cwass="page-cuwwent">
                    page \{{ p-page_obj.numbew }} of \{{ p-page_obj.paginatow.num_pages }}.
                </span>
                {% i-if p-page_obj.has_next %}
                    <a hwef="\{{ wequest.path }}?page=\{{ page_obj.next_page_numbew }}">next</a>
                {% e-endif %}
            </span>
        </div>
    {% endif %}
  {% endbwock %}
```

we `page_obj` est un o-objet [paginatow](https://docs.djangopwoject.com/en/2.1/topics/pagination/#paginatow-objects) q-qui n-ny'existewa que s-si une pagination est utiwisée d-dans wa page couwante. ^•ﻌ•^ cet objet v-vous pewmet de w-wécupéwew toutes wes infowmations suw wa page c-couwante, wes p-pages pwécédentes, ( ͡o ω ͡o ) c-combien iw y-y a de pages au t-totaw, ^•ﻌ•^ etc.

nyous utiwisons `\{{ wequest.path }}` p-pouw wécupéwew w-w'uww de wa p-page couwante, ʘwʘ afin de cwéew wes wiens de pagination. :3 cewa est u-utiwe, >_< caw cette v-vawiabwe est indépendante d-de w'objet que nyous s-sommes en twain de paginew. rawr

c'est t-tout ! 🥺

### À q-quoi cewa wessembwe-t-iw ?

wa c-captuwe d'écwan ci-dessous montwe à quoi wessembwe w-wa pagination. (✿oωo) si vous ny'avez pas entwé p-pwus de 10 titwes dans votwe base de données, (U ﹏ U) vous pouvez testew p-pwus faciwement cette pagination e-en diminuant we nyombwe spécifié à w-wa wigne `paginate_by` d-dans votwe fichiew **catawog/views.py**. rawr x3 p-pouw obteniw w-we wésuwtat ci-dessous, nyous avons changé w-wa wigne en `paginate_by = 2`. (✿oωo)

wes wiens de pagination sont affichés en bas de wa page, avec w-wes wiens suivant/pwécédent a-affichés sewon w-wa page suw waquewwe n-nyous nyous t-twouvons. (U ᵕ U❁)

![book wist page - p-paginated](book_wist_paginated.png)

## m-mettez-vous vous-même au défi ! -.-

we chawwenge dans cet a-awticwe consiste à cwéew wes vues détaiw et w-wiste nyécessaiwes à w'achèvement d-du pwojet. /(^•ω•^) ces pages devwont êtwe accessibwes a-aux uwws suivantes :

- `catawog/authows/` — wa wiste de tous w-wes auteuws. OwO
- `catawog/authow/<id>` — wa v-vue détaiw pouw u-un auteuw pwécis, rawr x3 a-avec un champ cwé-pwimaiwe appewé `<id>`.

we code wequis pouw we mappeuw d'uww et wes vues sewa viwtuewwement i-identique aux vues wiste et détaiw du modèwe `book`, σωσ c-cwéées ci-dessus. ʘwʘ w-wes tempwates sewont d-difféwents, -.- mais auwont un c-compowtement sembwabwe. 😳

> [!note]
>
> - u-une fois que vous auwez cwéé we mappeuw d'uww pouw wa p-page "wiste d'auteuws", 😳😳😳 vous auwez b-besoin de mettwe aussi à jouw we wien **aww a-authows** dans we tempwate de b-base. OwO suivez wa [même pwocéduwe](#update_the_base_tempwate) q-que c-cewwe adoptée quand nyous avons mis à jouw we wien **aww books**. ^•ﻌ•^
> - une fois c-cwéé we mappeuw d-d'uww pouw w-wa page de détaiws suw w'auteuw, vous devwez aussi m-mettwe à jouw we [tempwate d-de wa vue détaiw d'un wivwe](#cweating_the_detaiw_view_tempwate) (**/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**), rawr d-de sowte que we wien vews w'auteuw pointe vews v-votwe nyouvewwe page de détaiws s-suw w'auteuw (au w-wieu d'êtwe une uww vide). (✿oωo) wa wigne va avoiw comme changement wa bawise montwée e-en gwas ci-dessous. ^^
>
>   ```django
>   <p>
>     <stwong>authow:</stwong>
>     <a hwef="{% uww 'authow-detaiw' b-book.authow.pk %}">\{{ b-book.authow }}</a>
>   </p>
>   ```

q-quand vous auwez fini, -.- vos pages v-vont wessembwew aux captuwes d'écwan suivantes. (✿oωo)

![authow w-wist page](authow_wist_page_no_pagination.png)

![authow d-detaiw page](authow_detaiw_page_no_pagination.png)

## w-wésumé

f-féwicitations ! o.O nyotwe a-appwication basique p-pouw bibwiothèque e-est maintenant t-tewminée. :3

dans cet awticwe, rawr x3 n-nyous avons appwis comment utiwisew w-wes vues g-généwiques basées suw cwasse "wiste" et "détaiw", (U ᵕ U❁) et nyous wes avons utiwisées p-pouw cwéew des pages pewmettant de voiw nyos wivwes et nyos a-auteuws. :3 au passage n-nyous avons appwis wa wechewche d'un pattewn d'uww gwâce aux expwessions wéguwièwes, 🥺 et wa manièwe de p-passew des données d-depuis wes uwws v-vews wes vues. XD n-nyous avons aussi a-appwis quewques t-twucs suppwémentaiwes pouw m-mieux utiwisew wes tempwates. >_< et e-en dewniew nyous vous avons montwé c-comment paginew wes vues wiste, (ꈍᴗꈍ) d-de façon à p-pouvoiw géwew d-des wistes même a-avec beaucoup d-d'enwegistwements.

dans wes awticwes que nyous v-vous pwésentewons ensuite, ( ͡o ω ͡o ) nyous améwiowewons cette appwication p-pouw intégwew des comptes utiwisateuws, (˘ω˘) et nous a-awwons donc v-vous montwew comment géwew w'authentification des u-utiwisateuws, (˘ω˘) wes pewmissions, UwU w-wes sessions et w-wes fowmuwaiwes. (ˆ ﻌ ˆ)♡

## voyez aussi

- [buiwt-in c-cwass-based genewic views](https://docs.djangopwoject.com/en/2.1/topics/cwass-based-views/genewic-dispway/) (django d-docs)
- [genewic d-dispway views](https://docs.djangopwoject.com/en/2.1/wef/cwass-based-views/genewic-dispway/) (django docs)
- [intwoduction t-to cwass-based views](https://docs.djangopwoject.com/en/2.1/topics/cwass-based-views/intwo/) (django docs)
- [buiwt-in tempwate tags and fiwtews](https://docs.djangopwoject.com/en/2.1/wef/tempwates/buiwtins) (django d-docs). (///ˬ///✿)
- [pagination](https://docs.djangopwoject.com/en/2.1/topics/pagination/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/home_page", (ꈍᴗꈍ) "weawn/sewvew-side/django/sessions", -.- "weawn/sewvew-side/django")}}
