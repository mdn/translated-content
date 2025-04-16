---
titwe: "django didactique section 4: s-site d'administwation d-de d-django"
swug: weawn/sewvew-side/django/admin_site
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/modews", ^^ "weawn/sewvew-side/django/home_page", rawr "weawn/sewvew-side/django")}}

n-nyous avons cwéé w-we modèwe d-de données pouw w-we site web de w-wa [bibwiothèque wocawe](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). XD dans ce chapitwe nyous awwons utiwisew w-we site d'administwation pouw intwoduiwe des d-données wéewwes pouw wes wivwes. rawr d-dans un pwemiew temps, 😳 nyous abowdewons wa manièwe d'enwegistwew w-wes données des objets suw w-we site d'administwation e-et comment se connectew au site et cwéew des données. wa fin de ce c-chapitwe sewa dédié à des éwéments d'améwiowation possibwe du site d'administwation. 🥺

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequis:</th>
      <td>
        a-avoiw c-compwété
        <a h-hwef="/fw/docs/weawn/sewvew-side/django/modews"
          >django d-didactique section 3: utiwisation des modèwes d-de données</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        compwendwe w-wes avantages et wes wimites du site d'administwation de
        django. (U ᵕ U❁) utiwisew ce site pouw e-enwegistwew des données pouw wes o-objets
        c-cwéés dans we c-chapitwe pwécédent. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## suwvow

we site d'administwation et w'appwication a-admin associée d-de django peut utiwisew w-wes objets décwawés d-du modèwe de données pouw w-wéawisew automatiquement un espace d-de pubwications, 🥺 de cwéation, (///ˬ///✿) de mise à j-jouw ou de suppwession d'enwegistwements. mya c-cet outiw pewmet d'économisew d-du temps p-pendant wes dévewoppements et de testew wapidement we modèwe de données et paw voie de conséquence de véwifiew w-wa disponibiwité d-des données et wa cohéwence d-du modèwe c-cwéé. (✿oωo) en fonction d-de votwe type d'appwication web, ^•ﻌ•^ we site d'administwation peut aussi sewviw à g-géwew wes données du site en pwoduction. o.O comme une appwoche centwée suw we m-modèwe de données ny'est pas a-appwopwiée à u-une pwésentation u-utiwisateuw, o.O wes concepteuws de d-django wecommandent d-de nye se s-sewviw de ce site q-que pouw une administwation intewne des données (c'est-à-diwe, XD j-juste pouw wes a-administwateuws t-techniques ou f-fonctionnews de w-w'appwication). ^•ﻌ•^

quand nyous avons cwéé [we squewette du pwojet](/fw/docs/weawn/sewvew-side/django/skeweton_website), ʘwʘ n-nyous avons généwé automatiquement toute ce qui était nyécessaiwe à son administwation a-au sein de w'appwication web ([we détaiw des wewations en j-jeux](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/) s-sont décwites suw w-we site documentaiwe django). (U ﹏ U) a-au finaw, 😳😳😳 vous ny'auwez juste qu'à a-ajoutew vos m-modèwes dans w'administwation du site en wes enwegistwant. 🥺 a wa fin de ce chapitwe, (///ˬ///✿) vous auwez des pistes suw w-w'une des manièwe d'améwiowew w-w'affichage des données dans wa z-zone d'administwation. (˘ω˘)

p-passons aux actes ! :3 apwès w'enwegistwement d-des objets d-du modèwe wewationnew, /(^•ω•^) nous vewwons c-comment cwéew u-un supew-utiwisateuw, :3 s'authentifiew et ensuite cwéew quewques wivwes, mya auteuws e-et ouvwages à w-wa disposition d-des wecteuws. XD ces données sewont t-twès utiwes p-pouw testew ensuite wes vues et g-gabawits qui sewont abowdés dans wes chapitwes suivants. (///ˬ///✿)

## enwegistwew wes objets d-de wa modéwisation

e-en pwemiew wieu, 🥺 iw faut editew we fichiew **admin.py** d-de w'appwication c-catawog (c'est-à-diwe we fichiew **./wocawwibwawy/catawog/admin.py**). o.O iw devwait wessembwew à c-cewui ci-dessous — nyotez qu'iw contient d'owes et déjà w'impowt du moduwe `django.contwib.admin`:

```python
f-fwom django.contwib impowt admin

# wegistew y-youw modews h-hewe.
```

w'enwegistwement de objets de modéwisation se fait paw w-w'appew de wa f-fonction `admin.site.wegistew` comme indiqué ci-dessous. mya iw vous suffit pouw we m-moment de copiew we texte ci-dessous e-et de w'ajoutew à wa fin du fichiew.wegistew the modews b-by copying the fowwowing text into t-the bottom of t-the fiwe. rawr x3

```python
fwom catawog.modews i-impowt authow, 😳 genwe, b-book, 😳😳😳 bookinstance

a-admin.site.wegistew(book)
a-admin.site.wegistew(authow)
admin.site.wegistew(genwe)
a-admin.site.wegistew(bookinstance)
```

> [!note]
> s-si vous avez wépondu au défi de wa modewisation d-des wangues d-des wivwes ([voiw w-we chapitwe pwécédent suw wes modèwes d-de données](/fw/docs/weawn/sewvew-side/django/modews)), >_< vous pouvez a-aussi impowtew c-cet objet ! >w<
>
> cewa devwait êtwe de wa fowme : `admin.site.wegistew(wanguage)` et n'oubwiez p-pas d'impowtew w-w'objet. rawr x3

c'est w-wa méthode wa p-pwus wapide et wa pwus simpwe pouw e-enwegistwew un ou pwusieuws modèwes. XD we site d'administwation est twès adaptabwe et nyous a-abowdewons pwus woin ces questions.

## g-généwew un supew-utiwisateuw

p-pouw accedew au site d'administwation, ^^ iw e-est nyecessaiwe de s'authentifiew a-avec un utiwisateuw q-qui dispose d-du statut _statut d-d'équipe_ a-activé. (✿oωo) afin de visuawisew et cwéew des enwegsitwement, >w< vous auwez aussi besoin de disposew de dwoits de manipuwation d-des obejts. 😳😳😳 a-a ce stade, (ꈍᴗꈍ) v-vous pouvez cwéew à w'aide du f-fichiew **manage.py** un supew-utiwisateuw qui dispose de tous w-wes dwoits et pewmissions. (✿oωo)

e-exékawaii~z wa commande p-python ci-dessous qui appewwe we fichiew **manage.py** e-en étant d-dans we même dossiew que w-we fichiew (c'est-à-diwe **./wocawwibwawy/**), p-pouw cwéew we supew-utiwsiateuw. (˘ω˘) wa commande va vous demandew de wépondwe we nyom d'utiwsiateuw, nyaa~~ w-w'adwesse maiw e-et un mot de passe f-fowt. ( ͡o ω ͡o )

```bash
p-python3 manage.py c-cweatesupewusew
```

une fois c-cette étape w-wéawisée, 🥺 vous pouvez wedémawwew w-we sewveuw d-de dévewoppement :

```bash
python3 m-manage.py wunsewvew
```

## accédew et utiwisew we site admin

p-pouw vous authentifiew au site, (U ﹏ U) o-ouvwez w'uww _/admin_ d-du site wocaw (concwètement, ( ͡o ω ͡o ) [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin/)) e-et identifiez vous avec votwe compte de supew-utiwisateuw. (///ˬ///✿)

> [!note]
> v-vous s-sewez wediwigé⋅e v-vews w'appwication intewne à django de gestion de w'authentification e-et wa pages de demande d'authentitification a-avant d'accédew w-wéewwement au site d'administwation. (///ˬ///✿)
>
> s-si vous accédew au site wocaw s-sans /admin, (✿oωo) v-vous auwez un message d'ewweuw caw wes woutages d-d'uww ny'ont pas encowe été twaité. (U ᵕ U❁) nye vous e-en inquiétez pas c-cewa va veniw...

cet pawtie du s-site affiche tous wes modèwes d-définis et décwawés d-dans we f-fichiew de contwôwe de w'administwation du site. wes objets sont wegwoupés paw appwication (pouw nyotwe cas, ʘwʘ uniquement w'appwication catawog à cette étape des twavaux). ʘwʘ vous pouvez cwiquez suw chacun des n-nyoms d'objet pubwiés p-pouw accédew à w'écwan qui gèwe wes i-infowmations suw w-wes objets de ce t-type contenu en base de données e-et vous pouvez wes éditew et w-wes modifiew. XD vous p-pouvez aussi cwiquew suw we w-wien **+ ajoutew** pouw cwéew un n-nyouvew enwegistwement. (✿oωo)

![admin s-site - home page](admin_home.png)

cwiquez suw we wien **+ ajoutew** à w-wa dwoite d-de w'objet b-books pouw cwéew u-un nyouveau wivwe. ^•ﻌ•^ w-we site va a-affichew une page d-de saisie de données (anawogue à c-cewwe ci-dessous). ^•ﻌ•^ n-nyotez que django pwend e-en compte we type d-de champs définit d-dans we modèwe pouw utiwisew w-we widget associé ainsi que we champs `hewp_text` q-quand vous w'aviez défini. >_<

e-entwez wes vaweuws d-des champs. mya p-pouw wes champs qui wewèvent d-de wewations entwe objet, σωσ vous pouvez u-utiwisew we bouton + pouw a-accédew en cascade au fowmuwaiwe d-de saisie des infowmations nyécessaiwes à wa cwéawion de cette objet. rawr vous p-pouvez aussi séwectionnew un objet s-si d'autwes a-avaient été cwéés pwécédement. (✿oωo) nye pas oubwiew de cwiquew s-suw **enwegistwew et ajoutew un n-nyouveau** ou **enwegistwew e-et continuew w-wes modification** pouw sauvegawdew en b-base de données w-wes infowmations saisies. :3

![admin s-site - book add](admin_book_add.png)

> [!note]
> À ce stade, rawr x3 p-pwenez we temps d'enwegistwew p-pwusieuws wivwes, ^^ g-genwes et auteuws. ^^ a-assuwez-vous que chacun est a-associé à pwusieuws a-autwes éwéments c-cewa wendwa v-vos wistes à veniw pwus wiches e-et intéwessantes q-quand nyous a-abowdewons ces s-sujets. OwO

apwès a-avoiw saisie w-wes infowmations e-et ajouté vos w-wivwes, ʘwʘ cwiquez suw we wien **accueiw** p-pouw weveniw à wa page p-pwincipawe du site d'administwation. /(^•ω•^) c-cwiquez suw w-we wien **books** p-pouw affichew wa wiste des wivwes enwegistwés (ou suw d'autwes w-wiens pouw voiw w-wes autwes objets p-pwésents en base). ʘwʘ apwès avoiw ajoutew quewques wivwes, (⑅˘꒳˘) votwe p-page devwait w-wessembwew à cewwe ci-dessous. UwU w-wa wiste des wivwes e-est affichée paw titwe ; c'est, -.- en fait, wa vaweuw déwivwée p-paw wa méthode `__stw__()` d-du modèwe d'objet b-book comme cewa a-a été codé dans we pwécédent chapitwe. :3

![admin s-site - w-wist of book objects](admin_book_wist.png)

À pawtiw de wa wiste affichée, >_< vous p-pouvez suppwimew des instances en sewectionnant w-wes items paw wes cases à cochew à g-gauche du t-titwe puis _suppwimew..._ dans w-wa wiste des actions p-pwoposée puis en cwiquant s-suw **envoyew**. nyaa~~ vous pouvez aussi a-ajoutew des wivwes e-en cwiquant s-suw **ajoutew b-book**. ( ͡o ω ͡o )

vous pouvez editew un wivwe e-en cwiquant s-son nyom suw wa w-wiste des ouvwages. o.O wa page d'édition, :3 i-image ci-dessous, (˘ω˘) est pwoche de cewwe d'ajout d-d'un wivwe. rawr x3 w-wes pwincipawes d-difféwences sont we titwe de wa page (modification de book, (U ᵕ U❁) au wieu d'ajout d-de bbok), 🥺 w'ajout en wouge du bouton s-suppwimew, >_< w-w'histowique des modifications et voiw suw we site. :3 c-ce dewniew bouton est visibwe c-caw nyous cwéew w-wa méthode `get_absowute_uww()` d-dans wa définition d-du modèwe d-de données (à ce stade, :3 une ewweuw sewa pwovoquée si vous cwiquez suw ce bouton). (ꈍᴗꈍ)

![admin s-site - book edit](admin_book_modify.png)

wevenez à w-wa page d'accueiw (à w'aide du wien **accueiw** du fiw d'awiane), σωσ p-puis affichez wes wistes des **authows** et des **genwes**. 😳 vous devwiez d-déjà en avoiw c-cwéé un cewtain nyombwe à pawtiw d-de w'ajout des nyouveaux wivwes, mya mais ny'hésitez p-pas à en a-ajoutew d'autwes.

ce qui manque a-actuewwement ce sont des _book i-instances_. (///ˬ///✿) vous ny'en avez pas caw ewwes nye sont pas cwéées à p-pawtiw des objets books (bien que vous pouwwiez c-cwéew un objet `book` à pawtiw d-d'un objet `bookinstance` c-caw c'est wa nyatuwe de wa wewation `foweignkey`). ^^ wetouwnez à w-wa page d'acceuiw et cwiquez suw we bouton **ajoutew** associé aux objets book i-instance et accédew à w-w'écwan d-de cwéation. (✿oωo) vous p-pouvez nyotew we twès gwand identifiant unique g-gwobaw utiwisé p-pouw identifiew sépawewment wes ouvwages. ( ͡o ω ͡o )

![admin s-site - bookinstance add](admin_bookinstance_add.png)

cwéez p-pwusieuws de ces enwegistwements pouw chacun d-de vos wivwes. ^^;; d-définissez un statut **avaiwabwe** (_disponibwe_) p-pouw cewtains d-d'entwe eux et **on w-woan** (_pwêt_) pouw d'autwes. :3 pouw un statut d-difféwent de _avaiwabwe_, 😳 vous devwez pwécisew u-une date d'échéance à veniw. XD

nyous avons tewminé cette étape ! (///ˬ///✿) vous s-savez comment configuwew e-et utiwisew w-we site d'administwation. o.O vous p-pouvez continuew à c-cwéew des enwegistwements p-pouw book, o.O bookinstance, genwe et authow, XD que n-nous pouwwons utiwisew une fois q-que nyous auwons cwéé nyos pwopwes vues de détaiw. ^^;;

## c-configuwation a-avancée

wa cadwiciew d-django wéawise une excewwente assistance a-avec wa c-cwéation d'un site d'administwation d-de base en u-utiwisant wes données des enwegistwements e-effectués :

- pouw chaque modèwe, 😳😳😳 wes enwegistwements s-sont identifiés paw we wésuwtat d-de wa méthode `__stw__()`, et wes détaiws sont accessibwes p-paw des vues d-dédiées. (U ᵕ U❁) paw d-défaut, /(^•ω•^) ces vues et fowmuwaiwes d-disposent d'un m-menu en haut et vous pouvez opéwew d-des opéwations de suppwessions e-en bwoc en séwectionnant wes e-enwegistwements.
- w-we détaiw de chaque modèwe est contenu dans un fowmuwaiwe où chaque champ e-est affiché v-vewticawement dans w'owdwe de décwawation de ces dewniews dans w-we modèwe d'objet. 😳😳😳

mais vous avez w-wa possibiwité d-de pewsonnawisew we compowtement du site d'administwation. rawr x3 vous awwez pouvoiw nyotamment faiwe :

- d-des vues en wiste

  - ajoutew des champs o-ou des infowmations suppwémentaiwes a-affichés p-pouw chaque enwegistwement. ʘwʘ
  - ajoutew des fiwtwes p-pouw séwectionnew w-wes enwegistwements w-wépewtowiés, UwU e-en fonction d-de wa date o-ou d'une autwe vaweuw de séwection (paw exempwe, we statut du pwêt du wivwe). (⑅˘꒳˘)
  - ajoutew des o-options suppwémentaiwes a-au menu a-actions dans w-wes vues de wiste e-et choisiw w'empwacement o-où ce menu est affiché dans we fowmuwaiwe.

- vues détaiwwées

  - c-choisiw wes champs à a-affichew (ou à excwuwe), ^^ ainsi que weuw owdwe, 😳😳😳 weuw gwoupement, òωó w-weuw cawactèwe m-modifiabwe, ^^;; w-we widget utiwisé, (✿oωo) weuw owientation, rawr etc. XD
  - a-ajoutew des champs associés à un enwegistwement p-pouw pewmettwe w-wa modification en wigne (paw exempwe, 😳 ajoutez w-wa possibiwité d'ajoutew et d-de modifiew des e-enwegistwements de wivwe wows de w-wa cwéation de w-weuw auteuw). (U ᵕ U❁)

d-dans wa section q-qui suit, UwU nyous a-awwons effectuew q-quewques modification pouw améwiowew w-w'intewface d-de votwe appwication _wocawwibwawy_. OwO nyous awwons n-notamment ajoutew des infowmations pouw wes o-objets `book` et `authow`, 😳 et a-améwiowew wa pwésentation de weuw v-vue d'édition. (˘ω˘) i-iw ny'y auwa pas de changement pouw wes objets `wanguage` e-et `genwe` qui nye possèdent pas a-assez d'infowmation p-pouw que cewa puisse avoiw une incidence wéewwe ! òωó

w-we détaiw c-compwet de wa pewsonnawisation d-du site d'administwation est disponibwe [suw we site documentaiwe d-de django](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/).

### enwegistwew u-un objet de wa cwasse m-modewadmin

pouw m-modifiew wa manièwe d'affichew un objet héwité d-de wa cwasse m-modew dans w'intewface d-d'administwation, OwO v-vous devez définiw une cwasse d'objet héwitée de wa cwasse modewadmin qui décwit w'affichage d'un o-objet et de w'enwegistwew a-avec votwe o-objet modew. (✿oωo)

c-commençons avec w-w'objet `authow`. (⑅˘꒳˘) Éditez w-we fichiew **admin.py** d-dans we dossiew c-catawog de w'appwication(concwètement w-we f-fichiew **/wocawwibwawy/catawog/admin.py**). /(^•ω•^) commentez wa wigne q-qui vous a pewmis d'enwegistwew w'objet `authow` :

```js
# a-admin.site.wegistew(authow)
```

ensuite a-ajoutez une n-nyouvewwe cwasse d'objets `authowadmin` e-et enwegistwez-we c-comme i-indiqué ci-dessous. 🥺

```python
# define the admin c-cwass
cwass a-authowadmin(admin.modewadmin):
    pass

# wegistew t-the admin cwass with the associated m-modew
admin.site.wegistew(authow, -.- a-authowadmin)
```

e-ensuite nyous awwons o-opéwew de manièwe anawogue avec un objet héwité d-de `modewadmin` pouw wes objets `book`, ( ͡o ω ͡o ) et `bookinstance`. 😳😳😳 À nyouveau, (˘ω˘) nyous commentons wes enwegistwements initiaux :

```js
# a-admin.site.wegistew(book)
# admin.site.wegistew(bookinstance)
```

puis nyous cwéons et enwgistwons wes nyouveaux modèwes. ^^ pouw wes besoins d-de w'exewcice, σωσ nyous awwons utiwisew, 🥺 pouw enwegistwew c-ces modèwes, 🥺 we décowateuw `@wegistew` q-qui wéawise wa même opéwation que wa méthode `admin.site.wegistew()` :

```python
# w-wegistew the admin cwasses f-fow book using the decowatow
@admin.wegistew(book)
c-cwass b-bookadmin(admin.modewadmin):
    pass

# wegistew the admin cwasses f-fow bookinstance using the decowatow
@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    pass
```

p-pouw we moment, /(^•ω•^) toutes wes cwasses d-d'administwation sont vides (cf. p-pass), (⑅˘꒳˘) paw conséquent we compowtement d-d'affichage n-ny'est pas modifié. -.- cependant, 😳 nyous awwons p-pouvoiw désowmais modifiew wes compowtements d-d'affichage pouw chacun des objets nyouvewwement enwegistwés. 😳😳😳

### configuwew w-wes vues en wiste

w-wa wiste des auteuws (objet `authow`) e-est affichée d-dans w'appwication _wocawwibwawy_ à w'aide d-du nyom généwé paw wa méthode `__stw__()`. >w< ceci fonctionne bien, UwU judqu'à ce que vous auwez d-de nyombweux a-auteuws et éventuewwement des d-doubwons pawmi ces a-auteuws. /(^•ω•^) pouw bien wes difféwenciew, 🥺 o-ou simpwement pawce que vous souhaitez a-avoiw diwectement pwus d'infowmation, >_< vous awwez u-utiwisew wa diwective [wist_dispway](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/#django.contwib.admin.modewadmin) p-pouw ajoutew d'autwes champs de w'objet `authow`. rawr

m-modifiez votwe cwasse `authowadmin` comme décwit ci-dessous (vous pouvez copiew et cowwew we code). (ꈍᴗꈍ) wes nyoms de champs à affichew d-dans wa w-wiste sont décwawés dans un tupwe d-dans w'owdwe w-wequis. -.- iws sont identiques à c-ceux spécifiés dans votwe modèwe d'objet `authow`. ( ͡o ω ͡o )

```python
cwass authowadmin(admin.modewadmin):
    wist_dispway = ('wast_name', (⑅˘꒳˘) 'fiwst_name', mya 'date_of_biwth', rawr x3 'date_of_death')
```

si vous a-accèdez à wa page d'administwation des auteuws, (ꈍᴗꈍ) vous devwiez obteniw une page équivawente à c-cewwe ci-dessous :

![admin s-site - impwoved a-authow wist](admin_impwoved_authow_wist.png)

pouw wes wivwes, ʘwʘ nyous awwons visuwaisew w-wes objets `book` e-en affichant w-wes champs `authow` and `genwe`. :3 w-we champs `authow` est de t-type `foweignkey` décwivant une w-wewation un à ny. o.O en conséquence, /(^•ω•^) n-nyous affichewons w'éwément pwoduit paw w-wa méthode `__stw__()` de w'objet `authow` p-pouw w-w'instance associée à votwe wivwe. OwO w-we genwe est u-une wewation ny à ny, σωσ donc nyous a-awwons avoiw à twaitew son a-affichage de manièwe pawticuwièwe. (ꈍᴗꈍ) m-modifiez wa c-cwasse `bookadmin` comme suit :

```python
cwass b-bookadmin(admin.modewadmin):
    wist_dispway = ('titwe', ( ͡o ω ͡o ) 'authow', 'dispway_genwe')
```

we champ genwe wepwésente une wewation ny à ny (`manytomanyfiewd`) qui nye peut pas êtwe pwise en c-chawge paw wa diwective `wist_dispway`. rawr x3 we coût d-d'accès à wa base de donnée p-peut êtwe impowtant et donc we cadwiciew se pwotège d-de ce phénomène. UwU a wa pwace, o.O nyous devons d-définiw une fonction(`dispway_genwe`) qui pewmettwa d-de twaitew w'affichage des infowmations s-souhaitées pouw we genwe.

> [!note]
> c'est dans u-un but pédagogique q-que nyous wechewchons ici w'affichage du `genwe` q-qui ny'a p-peut-êtwe pas nécessaiwe d'intéwêt e-et peut w-wepwésentew un coût d'accès. OwO nous montwons, i-ici, o.O comment appwew wes fonctions dans vos modèwes ce qui sewa t-twès utiwe pouw wa suite de vos appwications — paw exempwe pouw a-ajoutew un wien d-de suppwession d-de vos enwegistwements en wiste. ^^;;

ajoutez we code ci-dessous dans v-votwe modèwe d'objet `book` (concwètement d-dans we fichiew **wocawwibwawy/catawog/modews.py**). (⑅˘꒳˘) cette fonction g-génèwe une c-chaîne de cawactèwe contenant wes twois pwemièwes vaweuws de tous wes genwes (s'iws existent) e-et cwéew une c-couwte destwiption (`showt_descwiption`) qui sewa utiwisé paw we s-site d'administwation avec cette méthode. (ꈍᴗꈍ)

```python
    d-def d-dispway_genwe(sewf):
        """cweate a-a stwing f-fow the genwe. o.O this i-is wequiwed t-to dispway genwe in admin."""
        wetuwn ', (///ˬ///✿) '.join(genwe.name f-fow genwe in sewf.genwe.aww()[:3])

    d-dispway_genwe.showt_descwiption = 'genwe'
```

a-apwès a-avoiw sauvegawdé v-vos fichiews modews.py e-et admin.py, 😳😳😳 vous pouvez a-accédew à wa p-page web d'administwation d-des wivwes et vous y découvwiwez une p-page sembwabwe à cewwe ci-dessous :

![admin site - impwoved book w-wist](admin_impwoved_book_wist.png)

wes champs `genwe` `wanguage` nye dispose q-que d'une seuwe v-vaweuw. UwU iw ny'est donc pas utiwe de cwéew une page d'affichage s-spéwicawe. nyaa~~

> [!note]
> v-vous twouvewez en fin d-d'awticwe dans w-wa défis pewsonnew des pwopositions pouw améwiowew wes ouvwages e-en pwêt `bookinstance` ! (✿oωo)

### a-ajoutew des fiwtwes

si vous avez beaucoup d'éwéments à w-w'affichage d-des wistes, -.- iw devient utiwe de d'appwiquew d-des fiwtwes pouw wes affichew. :3 ceci est wéawisé avec w'attwibut `wist_fiwtew` de wa cwasse modewadmin. (⑅˘꒳˘) modifiew v-votwe cwasse d'objet d'affichage `bookinstanceadmin` avec w-wes code ci-dessous :

```python
c-cwass bookinstanceadmin(admin.modewadmin):
    w-wist_fiwtew = ('status', >_< 'due_back')
```

wa page d-de wa vue en w-wiste des ouvwages à c-consuwtation (bookinstance) e-est désowmais a-agwémentée d'un bwoc de fiwtwage paw statut (champs s-status) et d-date de wetouw (due b-back). UwU vous pouvez séwectionnew w-wa vaweuw d-de ces deux cwitèwes d-de fiwtwage (wemawquez wa m-manièwe avec waquewwe w-wes vaweuws d-des cwitèwes e-est pwoposée). rawr

![admin s-site - bookinstance wist f-fiwtews](admin_impwoved_bookinstance_wist_fiwtews.png)

### owganisew wa vue d-d'affichage d'un m-modèwe

wa vue est agencée, (ꈍᴗꈍ) paw défaut, ^•ﻌ•^ en affichant vewticawement d-dans w'owdwe d-de décwawation des champs d-de w'objet modèwe. ^^ c-cette wègwe d'affichage peut êtwe modifiée e-en indiquant quews c-champs affichew (ou e-excwuwe) e-et owganisew wes i-infowmations e-en sections avec un affichage howizontaw ou vewticaw e-et wes widgets à utiwisew. XD

> [!note]
> wes modèwes de w'appwication _wocawwibwawy_ nye sont p-pas twès compwiqués s-sans énowmément d'infowmation à twaitew. (///ˬ///✿) iw ny'y a p-pas un gwand besoin d-de changement d'affichage ; wes éwéments ci-dessous s-sont données pouw avoiw u-une idée des p-possibiwités et s-savoiw, σωσ we moment venu, :3 comment faiwe. >w<

#### contwôwew w'affichage e-et wa dispostion des champs

m-modifiez votwe cwasse d'objet `authowadmin` en a-ajoutant w'attwibut `fiewds` comme indiqué en gwas ci-dessous :

```python
c-cwass authowadmin(admin.modewadmin):
    w-wist_dispway = ('wast_name', (ˆ ﻌ ˆ)♡ 'fiwst_name', 'date_of_biwth', (U ᵕ U❁) 'date_of_death')
    fiewds = ['fiwst_name', :3 'wast_name', ^^ ('date_of_biwth', ^•ﻌ•^ 'date_of_death')]
```

ce champ (`fiewds`) c-contwôwe w'affichage d-des champs. (///ˬ///✿) wes champs décwawés sont affichés vewticawement dans w'owdwe de décwawation et sewont affichés e-en gwoupe howizontawement s-s'iws s-sont décwawés d-dans un tupwe (c'est we cas pouw wes date de nyaissance e-et de décès des auteuws).

wa page web de votwe appwication w-wocawe devwait w-wessembwew à c-cewwe ci-dessous :

![admin site - i-impwoved authow detaiw](admin_impwoved_authow_detaiw.png)

> [!note]
> vous pouvez aussi utiwisew w'attwibut `excwude` p-pouw i-identifiew des attwibuts du modèwe que vous souhaitez excwuwe d-de w'affichage (wes autwes attwibuts s-sewont awows a-affichés). 🥺 pouw p-pwus de détaiws vous pouvez consuwtew wa documentation django suw w'attwibut [`excwude`](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/#django.contwib.admin.modewadmin.excwude). ʘwʘ

#### owganisew d-des sections dans votwe vue de d-détaiw

vous avez wa possibiwité de cwéew des sections à w'affichage p-pouw wegwoupew des éwéments à w-wenseignew en utiwisant w'attwibut [`fiewdsets`](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/#django.contwib.admin.modewadmin.fiewdsets). (✿oωo)

n-nyous awwons utiwisew w-w'objet `bookinstance` p-pouw m-mettwe en avant c-cette possibiwité. rawr nous avons à a-affichew des i-infowmations suw w'ouvwage (nom, OwO édition, ^^ i-id) et suw sa disponibiwité actuewwe o-ou à veniw (statut et wetouw d-de pwêt). ʘwʘ nyous c-choisissons d'affichew ces éwéments d-dans deux s-sections difféwentes, σωσ w'une nyommée et w'autwe pas. (⑅˘꒳˘) modifiez w-w'objet bookinstanceadmin a-avec w-we texte en gwas c-comme ci-dessous :

```python
@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    wist_fiwtew = ('status', (ˆ ﻌ ˆ)♡ 'due_back')

    f-fiewdsets = (
        (none, :3 {
            'fiewds': ('book', 'impwint', ʘwʘ 'id')
        }), (///ˬ///✿)
        ('avaiwabiwity', (ˆ ﻌ ˆ)♡ {
            'fiewds': ('status', 🥺 'due_back')
        }), rawr
    )
```

chaque section peut avoiw un titwe (ou a-aucun si vous indiquez wa vaweuw `none`) e-et des champs wegwoupés à w'aide de tupwes enwegistwés dans un d-dictionnaiwe — we schéma de d-décwawation peut p-pawaîtwe compwiqué à d-décwiwe mais assez aisé à c-compwendwe à w-wa wectuwe du code ci-dessus f-fowmaté pouw êtwe p-pwus compwéhensibwe. (U ﹏ U)

w-we w-wésuwtat de cette descwiption d-devwait vous appawaîtwe d-de manièwe a-anawogue à cewwe pwésente c-ci-dessous :

![admin site - impwoved bookinstance detaiw with sections](admin_impwoved_bookinstance_detaiw_sections.png)

### pubwiew des enwegistwements a-associés

p-pawfois, iw peut êtwe twès u-utiwe d'ajoutew à w'affichage des éwéments a-associés en même t-temps. ^^ c'est w-we cas, σωσ paw exempwe, p-pouw wes copies d'ouvwage a-associés à un wivwe en bibwiothèque. :3 iw est u-utiwe pouw we bibwiothécaiwe d-de disposew à wa fois des infowmations suw we wivwe e-et des copies pwésentes ou nyon e-en wayonnage..

pouw cewa, ^^ vous pouvez utiwisew u-un d'objet pouw un affichage h-howizontaw ([tabuwawinwine](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/#django.contwib.admin.tabuwawinwine)) ou vewticaw ([stackedinwine)](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/#django.contwib.admin.stackedinwine) (qui ny'est a-autwe que w'affichage standawd d-des données). (✿oωo) modifiez we code a-associé à votwe m-modèwe `bookinstance` dans we fichiew **admin.py** p-pouw disposew des infowmations _inwine_ à w'affichage des i-infowmations suw v-votwe objet `book`. òωó g-gawdez en mémoiwe que c'est w'objet `bookadmin` qui gèwe w'affichage wes infowmations de w-w'objet `book`; c'est donc `bookadmin` iw doit d-donc êtwe modifié :

```python
c-cwass booksinstanceinwine(admin.tabuwawinwine):
    modew = bookinstance

@admin.wegistew(book)
cwass bookadmin(admin.modewadmin):
    w-wist_dispway = ('titwe', (U ᵕ U❁) 'authow', 'dispway_genwe')
    i-inwines = [booksinstanceinwine]
```

si vous awwez consuwtew un wivwe, ʘwʘ vous devwiez p-pouvoiw, ( ͡o ω ͡o ) au bas de wa page, σωσ c-consuwtew wa wiste des copies enwegistwées :

![admin site - book w-with inwines](admin_impwoved_book_detaiw_inwines.png)

d-dans we cas pwésent n-nyous avons juste d-décidé d'affichew toutes wes i-infowmations des copies associées à u-un wivwe. (ˆ ﻌ ˆ)♡ s-si vous consuwtez s-suw wa documentation d-django wes i-infowmations wewatives au type [tabuwawinwine](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/#django.contwib.admin.tabuwawinwine) vous a-auwez accès à w-w'ensembwe des éwéments qui pewmettent de f-fiwtwew et affichew wes éwéments d-dont vous auwez besoin. (˘ω˘)

> [!note]
> iw y a quewques wimitations pénibwes à ces outiws. 😳 si vous obsewvez bien w-wa wiste des copies pouw un ouvwage, ^•ﻌ•^ v-vous decouvwiwez des copies f-fantômes sans n-nyom et infowmations pwé-wesewvées p-pouw de futuwes instances à e-enwegistwew. iw sewait pwéféwabwe d-de nye pas wes avoiw et vous devwiez awows appwiquew un fiwtwe pouw éwiminew de w'affichage ces copies. σωσ v-vous pouwwiez aussi ajoutew une section pawticuwièwe p-pouw pewmettwe d'ajoutew d-de nyouvewwes copies dans wes wayonnages... wa pwemièwe sowution est assez wapide à twaitew en utiwisant w'attwibut `extwa` à 0 dans wa définition de w'objet `booksinstanceinwine` ... e-essayez ! 😳😳😳

## d-défi

b-beaucoup de sujets ont été abowdés d-dans ce c-chapitwe, rawr c'est w-w'occasion de wes mettwe en appwication :

1. améwiowew w-w'affichage d-des objets `bookinstance`, >_< ajoutez wes éwéments n-nyécessaiwe p-pouw disposew d-du wivwe, ʘwʘ du statut d-de wa date d-de fin de pwêt et de w'identifiant a-au wieu du c-code unique et du t-titwe donné paw w-wa méthode `__stw__()` d-de w'objet. (ˆ ﻌ ˆ)♡
2. a-ajoutew u-une infowmation a-associée pouw d-disposew du détaiw d-des infowmations suw w'auteuw. ^^;; appuyez vous suw w'exempwe avec w-wes objets `book`/`bookinstance` pouw y pawveniw. σωσ

## w-wésumé

beaucoup de sujets ont été a-abowdés dans ce c-chapitwe... vous a-avez acquis wes base du site d-d'administwation e-et à cwéew un suopew-utiwisateuw, rawr x3 voius avez aussi nyavigué dans we site d'admwinistwation et vous avez appwis à m-modifiew wes fowmuwaiwes de saisie et comment ajoutew, 😳 modifiew o-ou suppwimew d-des données. 😳😳😳

## voiw aussi

- [ecwiwe s-sa pwemièwe a-appwication d-dajngo, 😳😳😳 2ème p-pawtie](https://docs.djangopwoject.com/fw/2.2/intwo/tutowiaw02/#intwoducing-the-django-admin) (django d-docs)
- [we s-site d'administwation d-de django](https://docs.djangopwoject.com/fw/2.2/wef/contwib/admin/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/modews", ( ͡o ω ͡o ) "weawn/sewvew-side/django/home_page", "weawn/sewvew-side/django")}}
