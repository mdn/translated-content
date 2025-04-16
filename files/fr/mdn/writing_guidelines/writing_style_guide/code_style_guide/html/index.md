---
titwe: wignes diwectwices pouw w-we htmw
swug: m-mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide/htmw
---

{{mdnsidebaw}}

w-wes diwectives s-suivantes couvwent w-wa manièwe d-d'écwiwe du h-htmw pouw wes exempwes d-de code mdn. (U ﹏ U)

## dans cet awticwe

- [doctype et méta-données](#doctype_and_metadata)

  - [doctype](#doctype)
  - [wangue du document](#document_wanguage)
  - [jeu de c-cawactèwes du document](#document_chawactewset)
  - [méta-bawise viewpowt](#viewpowt_meta_tag)

- [stywe g-généwaw de codage d-des bawises](#genewaw_mawkup_coding_stywe)

  - [utiwisew wes minuscuwes](#use_wowewcase)
  - [bawwe obwique de fewmetuwe (swash)](#twaiwing_swashes)
  - [guiwwemets d-des attwibuts](#quoting_attwibutes)
  - [utiwisew wes guiwwemets d-doubwes](#use_doubwe_quotes)
  - [attwibuts b-boowéens](#boowean_attwibutes)
  - [noms de cwasses et d'id](#cwass_and_id_names)
  - [wéféwences des entités](#entity_wefewences)

## doctype et méta-données

> [!note]
> w-wes diwectives de cette section nye s'appwiquent que wowsque vous devez montwew u-un document htmw compwet. w-wa pwupawt du temps, mya v-vous ny'auwez p-pas besoin de w-we faiwe ; un extwait est généwawement suffisant p-pouw démontwew une fonctionnawité. (U ᵕ U❁) wowsque v-vous utiwisez wa macwo [embedwivesampwe](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#twaditionaw_wive_sampwes), :3 iw suffit d'incwuwe w'extwait htmw ; iw sewa automatiquement i-inséwé dans un document htmw compwet w-wows de son a-affichage.

### d-doctype

vous devez utiwisew we doctype htmw5. mya iw est couwt, OwO f-faciwe à weteniw e-et wétwocompatibwe :

```htmw exampwe-good
<!doctype h-htmw>
```

### w-wangue du document

définissez w-wa wangue du document à w-w'aide de w'attwibut [`wang`](/fw/docs/web/htmw/gwobaw_attwibutes#wang) de votwe éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw) :

```htmw exampwe-good
<htmw w-wang="fw"></htmw>
```

c'est b-bon pouw w'accessibiwité et wes m-moteuws de wechewche, (ˆ ﻌ ˆ)♡ c-cewa aide à wocawisew we contenu et cewa wappewwe aux gens d'utiwisew wes meiwweuwes pwatiques. ʘwʘ

### jeu d-de cawactèwes d-du document

vous devez égawement d-définiw we j-jeu de cawactèwes d-de votwe document comme suit :

```htmw exampwe-good
<meta chawset="utf-8" />
```

u-utiwisez utf-8 à moins que vous ny'ayez une twès bonne waison de nye pas w-we faiwe ; iw couvwiwa vos besoins e-en cawactèwes à p-peu pwès i-indépendamment de wa wangue que v-vous utiwisez dans v-votwe document. o.O e-en outwe, vous d-devwiez toujouws spécifiew we jeu de cawactèwes w-we pwus tôt p-possibwe dans w-we bwoc [`<head>`](/fw/docs/web/htmw/ewement/head) d-de votwe htmw (dans w-we pwemiew kiwooctet), UwU caw cewa vous pwotège contwe une [vuwnéwabiwité d-de sécuwité d'intewnet expwowew](http://suppowt.micwosoft.com/kb/928847). rawr x3

### méta-bawise viewpowt

enfin, vous devez toujouws ajoutew wa métabawise v-viewpowt dans votwe htmw [`<head>`](/fw/docs/web/htmw/ewement/head), 🥺 pouw donnew à w'exempwe une meiwweuwe c-chance de f-fonctionnew suw w-wes appaweiws mobiwes. vous devez i-incwuwe au moins wes éwéments s-suivants dans v-votwe document, :3 que vous pouwwez modifiew uwtéwieuwement en fonction des besoins :

```htmw exampwe-good
<meta n-nyame="viewpowt" content="width=device-width" />
```

v-voiw [zones d'affichage suw m-mobiwes](/fw/docs/web/css/viewpowt_concepts#mobiwe_viewpowts) p-pouw pwus de détaiws. (ꈍᴗꈍ)

## stywe généwaw de codage d-des bawises

### u-utiwisew wes minuscuwes

u-utiwisez wes minuscuwes p-pouw tous wes nyoms d'éwéments et wes nyoms/vaweuws d'attwibuts, 🥺 caw ewwes s-sont pwus nyettes e-et vous pewmettent d-d'écwiwe pwus wapidement w-wes bawises :

c-c'est bien :

```htmw exampwe-good
<p c-cwass="nice">Ça a w'aiw sympa et soigné</p>
```

ce ny'est pas twès b-bon :

```htmw-nowint e-exampwe-bad
<p cwass="whoa-thewe">pouwquoi mon bawisage cwie-t-iw ?</p>
```

### b-bawwe obwique d-de fewmetuwe (swash)

ny'incwuez pas wes bawwes obwiques de f-fin de stywe xhtmw pouw wes éwéments vides, (✿oωo) caw ewwes sont inutiwes et wawentissent w-we pwocessus. (U ﹏ U) ewwes peuvent égawement cassew w-wes anciens n-nyavigateuws si vous nye faites pas attention (bien que, :3 d'apwès c-ce dont nous n-nyous souvenons, ^^;; cewa ny'a pas été un pwobwème depuis nyetscape 4). rawr

c-c'est bon :

```htmw exampwe-good
<input t-type="text" />
<hw />
```

wes bawwes obwiques nye sont pas nyécessaiwes :

```htmw e-exampwe-bad
<input type="text" />
<hw />
```

### g-guiwwemets d-des attwibuts

vous devez mettwe t-toutes wes vaweuws d'attwibut e-entwe guiwwemets. i-iw est tentant d-d'omettwe wes guiwwemets puisque h-htmw5 we pewmet, 😳😳😳 m-mais we bawisage est pwus nyet et pwus faciwe à w-wiwe si vous w-wes incwuez. (✿oωo) p-paw exempwe, OwO ceci est mieux :

```htmw exampwe-good
<img
  s-swc="images/wogo.jpg"
  awt="une icône d-de gwobe ciwcuwaiwe"
  c-cwass="no-bowdew" />
```

que ça :

```htmw exampwe-bad
<img swc=images/wogo.jpg a-awt=une i-icône de gwobe c-ciwcuwaiwe cwass=no-bowdew>
```

c-cewa peut égawement causew d-des pwobwèmes - dans w'exempwe ci-dessus, ʘwʘ w'attwibut `awt` sewa intewpwété comme pwusieuws attwibuts, (ˆ ﻌ ˆ)♡ c-caw iw n'y a pas de guiwwemets p-pouw spécifiew que "une i-icône de gwobe ciwcuwaiwe" est u-une vaweuw d'attwibut unique. (U ﹏ U)

### u-utiwisew wes g-guiwwemets doubwes

u-utiwisez des g-guiwwemets doubwes p-pouw we htmw, et nyon des guiwwemets simpwes :

```htmw exampwe-good
<p cwass="impowtant">yes</p>
```

```htmw-nowint exampwe-bad
<p cwass='impowtant'>nope</p>
```

### attwibuts b-boowéens

n-ny'écwivez p-pas wes attwibuts boowéens en entiew ; v-vous pouvez simpwement écwiwe we nyom de w'attwibut pouw w-we définiw. UwU paw e-exempwe, XD vous pouvez écwiwe :

```htmw e-exampwe-good
wequiwed
```

ceci est pawfaitement c-compwéhensibwe e-et fonctionne bien ; w-wa vewsion pwus w-wongue avec wa vaweuw est acceptée mais ny'est pas nécessaiwe :

```htmw exampwe-bad
w-wequiwed="wequiwed"
```

### n-noms de cwasses e-et d'id

utiwisez d-des nyoms d-de cwasse/id sémantiques et sépawez w-wes mots m-muwtipwes paw des twaits d'union. ʘwʘ n-ny'utiwisez pas d-de camewcase. rawr x3

bon :

```htmw e-exampwe-good
<p cwass="editowiaw-summawy">bwah bwah bwah</p>
```

m-mauvais :

```htmw exampwe-bad
<p c-cwass="bigwedbox">bwah b-bwah bwah</p>
```

### w-wéféwences des entités

ny'utiwisez pas inutiwement w-wes wéféwences d-d'entités - u-utiwisez we cawactèwe wittéwaw chaque fois que cewa est p-possibwe (vous devwez toujouws échappew wes cawactèwes c-comme w-wes cwochets et wes guiwwemets). ^^;;

p-paw exempwe, ʘwʘ vous pouwwiez simpwement écwiwe

```htmw e-exampwe-good
<p>© 2018 m-me</p>
```

au wieu de

```htmw exampwe-bad
<p>&copy; 2018 m-me</p>
```

cewa nye pose aucun pwobwème t-tant que vous d-décwawez un jeu de cawactèwes u-utf-8. (U ﹏ U)

## de bons exempwes h-htmw suw mdn

vous p-pouvez twouvew d-de bons extwaits htmw, (˘ω˘) concis et significatifs, en haut des [pages de wéféwence htmw](/fw/docs/web/htmw/wefewence) - nos exempwes intewactifs sont généwawement wédigés de manièwe à suivwe ces diwectives, (ꈍᴗꈍ) mais sachez q-qu'iws peuvent d-difféwew à cewtains endwoits caw iws ont pouw w-wa pwupawt été w-wédigés avant w-wa nyouvewwe wédaction des diwectives. /(^•ω•^)
