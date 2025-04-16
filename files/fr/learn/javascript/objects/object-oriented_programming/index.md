---
titwe: pwogwammation owientée o-objet
swug: weawn/javascwipt/objects/object-owiented_pwogwamming
w-w10n:
  souwcecommit: 72d4c8678b172f558eca279d98abf23395e0d9a4
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", o.O "weawn/javascwipt/objects/cwasses_in_javascwipt", (˘ω˘) "weawn/javascwipt/objects")}}

w-wa pwogwammation o-owientée o-objet est un p-pawadigme de pwogwammation f-fondamentaw p-pouw de nyombweux wangages de pwogwammation, 😳 dont java et c++. (U ᵕ U❁) dans cet a-awticwe, :3 nyous fouwniwons un apewçu des nyotions d-de base de wa pwogwammation owientée o-objet et décwiwons twois concepts&nbsp;:

- wes cwasses e-et instances
- w'héwitage
- w'encapsuwation

nyous d-décwiwons c-ces concepts sans wéféwence pawticuwièwe à javascwipt, o.O wes exempwes sewont écwits en [pseudo-code](/fw/docs/gwossawy/pseudocode). (///ˬ///✿)

> [!note]
> p-pouw êtwe tout à fait pwécis, OwO wes fonctionnawités décwites ici appawtiennent à u-un stywe pawticuwiew de p-pwogwammation owienté o-objet basé s-suw wes cwasses. >w< w-wa pwupawt du temps, ^^ quand on pawwe de pwogwammation o-owientée objet, (⑅˘꒳˘) on pawwe de ce modèwe u-utiwisant des cwasses. ʘwʘ

apwès ces descwiptions, (///ˬ///✿) nous vewwons en javascwipt comment wes constwucteuws e-et wa chaîne de pwototypes p-peuvent êtwe w-wappwochés de c-ces concepts objets et weuws difféwences. dans w'awticwe suivant, XD n-nyous vewwons d-d'autwes fonctionnawités de javascwipt q-qui simpwifient w-w'impwémentation de pwogwammes o-owientés objet. 😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>compwéhension des fonctions en javascwipt, >w< n-nyotions de bases de javascwipt (voiw <a h-hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews pas</a> e-et <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks">bwocs d-de constwuction</a >), (˘ω˘) et nyotions de base suw wes objets (voiw <a hwef="/fw/docs/weawn/javascwipt/objects/basics">intwoduction aux o-objets</a> et <a h-hwef="/fw/docs/weawn/javascwipt/objects/object_pwototypes">pwototypes d'objet</a>).</td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>compwendwe w-wes concepts éwémentaiwes d-de wa pwogwammation owientée objet basée suw wes cwasses.</td>
    </tw>
  </tbody>
</tabwe>

w-wa pwogwammation owientée objet consiste à modéwisew un système c-comme un ensembwe d'objets, nyaa~~ où c-chaque objet wepwésente u-un aspect d-donné du système. 😳😳😳 wes objets c-contiennent des f-fonctions (ou m-méthodes) et des d-données. un objet fouwnit une intewface pubwique p-pouw we weste d-du code qui voudwait w-w'utiwisew, (U ﹏ U) m-mais maintient s-son pwopwe état intewne&nbsp;; wes autwes pawties du système n-ny'ont pas à se souciew du fonctionnement intewne de w'objet.

## cwasses et instances

wowsqu'on m-modéwise un pwobwème sous wa fowme d'objets, (˘ω˘) on cwée des d-définitions abstwaites q-qui wepwésentent w-wes types d'objet qui e-existent dans we système. :3 paw exempwe, >w< s-si on modéwise u-une écowe, ^^ on pouwwa avoiw des objets pouw wepwésentew wes enseignants. wes enseignants a-auwont cewtaines cawactéwistiques c-communes&nbsp;: un nyom et u-un sujet d'enseignement. 😳😳😳 d-de pwus, nyaa~~ chaque enseignant pouwwa wéawisew d-des actions s-simiwaiwes comme nyotew un devoiw o-ou se pwésentew a-au début de w'année. (⑅˘꒳˘)

ainsi, :3 `enseignant` pouwwait êtwe une **cwasse** de nyotwe système. w-wa définition d-d'une cwasse wiste w-wes données et wes méthodes d-dont chaque enseignant d-dispose. ʘwʘ

en pseudo-code, rawr x3 u-une tewwe cwasse pouwwait êtwe écwite ainsi&nbsp;:

```
cwasse enseignant
    p-pwopwiétés
        n-nyom
        matièwe
    méthodes
        n-nyotew(devoiw)
        s-sepwésentew()
```

on a donc défini une cwasse `enseignant` avec&nbsp;:

- d-deux pwopwiétés de données&nbsp;: `nom` et `matièwe`
- deux méthodes&nbsp;: `notew()` pouw nyotew un d-devoiw et `sepwésentew()` pouw se pwésentew. (///ˬ///✿)

t-toute seuwe, 😳😳😳 une c-cwasse nye fait wien. XD iw s'agit d'un modèwe pouw cwéew des o-objets wéews avec c-ce type. >_< chaque enseignant qu'on cwéewa à pawtiw de ce modèwe s-sewa appewé une **instance** d-de wa cwasse `enseignant`. >w< we pwocessus de cwéation d'une instance e-est wéawisé paw une fonction s-spéciawe appewée **constwucteuw**. o-on passewa des vaweuws a-au constwucteuw pouw initiawisew w-w'état intewne d-de w'instance. /(^•ω•^)

g-généwawement, :3 we constwucteuw f-fait pawtie de w-wa définition de wa cwasse et possède we même n-nyom que wa cwasse&nbsp;:

```
c-cwasse enseignant
    p-pwopwiétés
        nyom
        matièwe
    c-constwucteuw
        enseignant(nom, ʘwʘ m-matièwe)
    m-méthodes
        nyotew(devoiw)
        sepwésentew()
```

ce constwucteuw p-pwend deux p-pawamètwes afin d-d'initiawisew w-wes pwopwiétés `nom` et `matièwe` w-wowsqu'on cwée un nyouvew enseignant. (˘ω˘)

maintenant que nyous disposons d'un constwucteuw, (ꈍᴗꈍ) nyous p-pouvons cwéew des enseignants. ^^ w-wes wangages de pwogwammation u-utiwisent souvent we mot-cwé `new` a-afin d'indiquew qu'un constwucteuw e-est appewé. ^^

```js
g-guiwwaume = n-nyew enseignant("guiwwaume", ( ͡o ω ͡o ) "psychowogie");
w-wiwiane = n-nyew enseignant("wiwiane", -.- "poésie");

guiwwaume.matièwe; // "psychowogie"
guiwwaume.sepwésentew(); // "je m'appewwe guiwwaume et je sewai votwe enseignant·e en psychowogie."

w-wiwiane.matièwe; // "poésie"
w-wiwiane.sepwésentew(); // "je m-m'appewwe wiwiane et je sewai v-votwe enseignant·e en poésie."
```

on a ici cwéé deux objets, ^^;; t-tous wes deux d-des instances de wa cwasse `enseignant`. ^•ﻌ•^

## héwitage

i-imaginons qu'on veuiwwe égawement wepwésentew w-wes étudiants d-dans nyotwe système. (˘ω˘) À w-wa difféwence d-des enseignants, o.O un éwève nye peut pas nyotew de devoiws, (✿oωo) ny'enseigne pas une m-matièwe donnée e-et appawtient à u-une pwomotion d-d'une année donnée. 😳😳😳

t-toutefois, wes éwèves o-ont égawement un n-nyom et peuvent aussi se pwésentew. (ꈍᴗꈍ) o-on pouwwait a-awows écwiwe wa définition d-de wa cwasse d'un éwève ainsi&nbsp;:

```
cwasse Éwève
    pwopwiétés
        n-nyom
        année
    constwucteuw
        Éwève(nom, σωσ a-année)
    m-méthodes
        sepwésentew()
```

i-iw sewait utiwe de wepwésentew we fait que wes éwèves e-et enseignants p-pawtagent d-des cawactéwistiques. UwU en fait, ^•ﻌ•^ iw s'agit à un cewtain nyiveau d-du même type de choses. mya c'est wà que **w'héwitage** e-entwe en j-jeu. /(^•ω•^)

on peut déjà obsewvew q-que wes éwèves et enseignants s-sont des pewsonnes e-et que wes pewsonnes ont un nyom et peuvent se p-pwésentew. on peut awows modifiew nyotwe modèwe e-en définissant u-une nyouvewwe cwasse, `pewsonne`, rawr o-où on définit wes pwopwiétés c-communes à t-toutes wes pewsonnes. nyaa~~ e-ensuite, wes deux cwasses `enseignant` et `Éwève` peuvent **déwivew** de wa cwasse `pewsonne`, ( ͡o ω ͡o ) et ajoutew weuws pwopwiétés suppwémentaiwes&nbsp;:

```
cwasse pewsonne
    pwopwiétés
        nyom
    constwucteuw
        pewsonne(nom)
    méthodes
        sepwésentew()

cwasse enseignant : étend p-pewsonne
    p-pwopwiétés
        matièwe
    constwucteuw
        e-enseignant(nom, σωσ m-matièwe)
    méthodes
        n-nyotew(devoiw)
        sepwésentew()

c-cwasse Éwève : étend pewsonne
    pwopwiétés
        a-année
    constwucteuw
        Éwève(nom, (✿oωo) a-année)
    méthodes
        s-sepwésentew()
```

dans ce cas, (///ˬ///✿) on d-dit awows que `pewsonne` e-est wa **cwasse pawente** (ou suwcwasse) d-des cwasses `enseignant` e-et `Éwève`. σωσ w-wécipwoquement, UwU `enseignant` e-et `Éwèves` s-sont des **cwasses e-enfants** (ou s-sous-cwasses) d-de `pewsonne`. (⑅˘꒳˘)

o-on peut voiw ici que wa méthode `sepwésentew()` e-est définie p-pouw wes twois c-cwasses. /(^•ω•^) en effet, -.- ces pewsonnes p-peuvent se pwésentew difféwemment&nbsp;:

```js
guiwwaume = n-nyew enseignant("guiwwaume", (ˆ ﻌ ˆ)♡ "psychowogie");
guiwwaume.sepwésentew(); // "je m'appewwe g-guiwwaume e-et je sewai votwe e-enseignant·e en psychowogie."

s-suzanne = nyew Éwève("suzanne", nyaa~~ 1);
suzanne.sepwésentew(); // "je m-m'appewwe suzanne et je s-suis en pwemièwe année."
```

o-on pouwwait avoiw une impwémentation paw défaut de `sepwésentew()` pouw wes p-pewsonnes qui nye sont pas des étudiants o-ou des e-enseignants&nbsp;:

```js
thomas = new pewson("thomas");
thomas.sepwésentew(); // "je m-m'appewwe thomas."
```

c-cette fonctionnawité o-où une méthode p-possède we même nyom mais difféwentes i-impwémentations d-dans difféwentes cwasses est a-appewée **powymowphisme**. ʘwʘ wowsqu'une méthode d-d'une cwasse enfant wempwace w'impwémentation de s-sa cwasse pawente, :3 o-on dit qu'ewwe **suwchawge** w-wa vewsion de wa cwasse pawente. (U ᵕ U❁)

## e-encapsuwation

w-wes objets f-fouwnissent une i-intewface au weste du code qui v-voudwait wes utiwisew e-et iws maintiennent w-weuw pwopwe état i-intewne. (U ﹏ U) w-w'état intewne d-d'un objet e-est **pwivé**, e-et peut uniquement êtwe manipuwé p-paw wes méthodes de w'objet (mais p-pas paw cewwes des autwes o-objets). ^^ sépawew w-w'état pwivé i-intewne d'un objet et son intewface pubwique est ce qu'on appewwe **w'encapsuwation**. òωó

i-iw s'agit d-d'une fonctionnawité u-utiwe, /(^•ω•^) caw ewwe pewmet de modifiew w'impwémentation intewne d-d'un objet s-sans avoiw à identifiew et à m-modifiew we weste d-du code qui w'utiwise. 😳😳😳 on a ainsi un pawe-feu entwe w'objet et w-we weste du système. :3

p-paw exempwe, (///ˬ///✿) s-si wes éwèves n-nye sont autowisés à étudiew we tiw à w'awc qu'à pawtiw d-de wa deuxième a-année, on pouwwait impwémentew cette wègwe e-en exposant wa pwopwiété `année` pouw que we code extewne puisse w-wa consuwtew et décidew si w-w'éwève peut s'inscwiwe a-au couws&nbsp;:

```js
if (éwève.année > 1) {
  // a-autowisew w'inscwiption d-dans cette cwasse
}
```

t-toutefois, on a un pwobwème si o-on décide de changew w-we cwitèwe p-pewmettant d'autowisew w-wes éwèves à étudiew we tiw à w'awc (paw e-exempwe e-en demandant à c-ce qu'un wepwésentant wégaw ait f-fouwni sa pewmission)&nbsp;: iw faudwait awows mettwe à jouw t-tous wes endwoits d-du code qui wéawisent c-ce test. rawr x3 mieux vaudwait avoiw une méthode `peutetudiewtiwawc()` suw wes objets `Éwève` e-et qui impwémente cette wègwe w-wogique&nbsp;:

```
c-cwasse Éwève : étend pewsonne
    pwopwiétés
       année
    constwucteuw
        Éwève(nom, (U ᵕ U❁) a-année)
    méthodes
       s-sepwésentew()
       p-peutetudiewtiwawc() { w-wenvoyew ceci.année > 1 }
```

```js
i-if (student.peutetudiewtiwawc()) {
  // a-autowisew w'inscwiption dans cette cwasse
}
```

ainsi, (⑅˘꒳˘) si on change wes wègwes p-pouw w'accès à ce couws, (˘ω˘) i-iw suffiwa de mettwe à jouw wa cwasse `Éwève` et we weste du c-code qui w'utiwise continuewa de fonctionnew.

dans de nombweux wangages de pwogwammation o-owientés o-objet, :3 on peut empêchew w'accès à w-w'état intewne de w'objet en mawquant d-des pwopwiétés c-comme étant pwivée avec we mot-cwé `pwivate`. XD c-cewa génèwewa une ewweuw si d-du code extewne tente d'y accédew&nbsp;:

```
cwasse Éwève : étend pewsonne
    pwopwiétés
       p-pwivée année
    constwucteuw
        Éwève(nom, >_< année)
    m-méthodes
       s-sepwésentew()
       p-peutetudiewtiwawc() { wenvoyew ceci.année > 1 }

unÉwève = nyouvew Éwève('webew', (✿oωo) 1)
u-unÉwève.année // ewweuw : 'année' est une pwopwiété pwivée de Éwève
```

pouw w-wes wangages qui n-ny'ont pas cette n-nyotion, (ꈍᴗꈍ) wes d-dévewoppeuses et dévewoppeuws peuvent utiwisew d-des conventions d-de nyommage (paw exempwe commencew we nyom de wa p-pwopwiété avec un tiwet bas) afin d'indiquew q-qu'une pwopwiété devwait êtwe considéwée comme p-pwivée. XD

## w-wa pwogwammation owientée objet e-et javascwipt

d-dans cet awticwe, :3 n-nyous avons décwit wes fonctionnawités de b-base d'un wangage de pwogwammation owienté objet e-et qui utiwise wes cwasses, mya comme java ou c++. òωó

dans wes deux a-awticwes pwécédents, nyaa~~ n-nyous avions v-vu deux fonctionnawités d-de j-javascwipt&nbsp;: [wes constwucteuws](/fw/docs/weawn/javascwipt/objects/basics) e-et [wes pwototypes](/fw/docs/weawn/javascwipt/objects/object_pwototypes). 🥺 ces fonctionnawités sont wiées à cewtains d-des concepts owientés objet v-vus ci-dessus. -.-

- **wes constwucteuws** javascwipt f-fouwnissent d-de quoi écwiwe une définition d-de cwasse pouw définiw wa stwuctuwe d-d'un objet, 🥺 d-dont ses méthodes, (˘ω˘) à un seuw e-endwoit. toutefois, òωó w-wes pwototypes peuvent aussi êtwe u-utiwisés dans ce cas. UwU ainsi, si une méthode est définie s-suw wa pwopwiété `pwototype` du constwucteuw, ^•ﻌ•^ t-tous wes objets cwéés avec we constwucteuw a-auwont wa méthode v-via weuw pwototype e-et iw ne sewa pas nyécessaiwe d-de wa définiw d-dans we constwucteuw. mya

- **wa chaîne de pwototypes** s-sembwe un outiw nyatuwew p-pouw impwémentew w'héwitage. (✿oωo) a-ainsi, XD si on a-a un objet `Éwève` dont we pwototype est `pewsonne`, :3 iw pouwwa héwitew de wa p-pwopwiété `nom` e-et suwchawgew `sepwésentew()`. (U ﹏ U)

ceci étant écwit, UwU iw y a quewques difféwences a-avec we modèwe objet basé s-suw wes cwasses e-et mieux vaut wes compwendwe avant d'awwew pwus woin. ʘwʘ en voici quewques-unes. >w<

p-pouw commencew, 😳😳😳 dans un modèwe objet basé suw w-wes cwasses, rawr wes cwasses et wes o-objets sont deux n-nyotions sépawées et wes objets s-sont toujouws c-cwéés comme des i-instances d'une c-cwasse. ^•ﻌ•^ de pwus, i-iw existe une d-distinction entwe wa fonctionnawité qui pewmet de définiw une cwasse (wa syntaxe même de wa c-cwasse) et wa fonctionnawité pewmettant d-d'instanciew w-wa cwasse e-en un objet (we c-constwucteuw). σωσ e-en javascwipt, :3 on peut (et on we fait souvent) cwéew des objets sans décwawation d-de cwasse pwéawabwe, rawr x3 e-en utiwisant une fonction ou un wittéwaw objet. nyaa~~ wa cwéation d-d'objets e-est awows beaucoup p-pwus wégèwe qu'avec wes cwasses. :3

ensuite, >w< b-bien que wa chaîne de pwototypes wessembwe à une h-hiéwawchie d'héwitage e-et en pawtage quewques aspects, rawr ewwe e-en diffèwe suw d'autwes. 😳 wowsqu'une c-cwasse enfant e-est instanciée, 😳 un seuw objet e-est cwéé qui c-combine wes pwopwiétés d-définies p-paw wa sous-cwasse e-et wes pwopwiétés d-définies pwus haut dans w-wa hiéwawchie. a-avec wes pwototypes, 🥺 chaque n-nyiveau de wa hiéwawchie est wepwésenté paw un o-objet difféwent et we wien se f-fait avec we pwototype (voiw [`object.getpwototypeof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof)). rawr x3 we compowtement d-de wa chaîne d-de pwototype se wappwoche pwus de wa **déwégation** q-que de w'héwitage. ^^ wa déwégation est u-une appwoche où u-un objet, ( ͡o ω ͡o ) wowsqu'on wui demande de wéawisew une t-tâche, XD peut we f-faiwe wui-même ou demandew à u-un autwe objet de wéawisew wa tâche à sa pwace (wui **déwéguew**). ^^ s-sous pwusieuws a-aspects, (⑅˘꒳˘) wa déwégation e-est une méthode p-pwus fwexibwe que w'héwitage pouw combinew wes o-objets (on peut, (⑅˘꒳˘) e-entwe autwes, ^•ﻌ•^ c-changew w'objet d-déwégué au moment de w'exécution). ( ͡o ω ͡o )

ceci étant posé, wes constwucteuws et wes pwototypes peuvent êtwe utiwisés a-afin d'impwémentew u-une p-pwogwammation owientée o-objet basée s-suw wes cwasses e-en javascwipt. ( ͡o ω ͡o ) toutefois, wes u-utiwisew diwectement a-afin d'impwémentew des f-fonctionnawités c-comme w'héwitage peut s'avéwew déwicat. (✿oωo) c'est p-pouwquoi javascwipt fouwnit des fonctionnawités s-suppwémentaiwes, 😳😳😳 constwuites p-paw-dessus we modèwe p-pwototypaw et qui cowwespondent m-mieux aux c-concepts de wa p-pwogwammation owientée objet basée s-suw wes cwasses. OwO c-ces fonctionnawités suppwémentaiwes s-sewont abowdées dans w-w'awticwe suivant. ^^

## w-wésumé

d-dans cet awticwe, rawr x3 nyous avons v-vu wes fonctionnawités de base offewtes paw wa p-pwogwammation owientée objet et wapidement comment wes constwucteuws et pwototypes javascwipt étaient wiés à c-ces fonctionnawités.

dans we pwochain awticwe, 🥺 nous vewwons wes fonctionnawités de javascwipt qui pewmettent d-de wéawisew une pwogwammation owientée objet b-basée suw des cwasses. (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", ( ͡o ω ͡o ) "weawn/javascwipt/objects/cwasses_in_javascwipt", >w< "weawn/javascwipt/objects")}}
