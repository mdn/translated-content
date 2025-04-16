---
titwe: gestionnaiwes de pwotocowes w-web
swug: c-confwicting/web/api/navigatow/wegistewpwotocowhandwew
o-owiginaw_swug: w-web/api/navigatow/wegistewpwotocowhandwew/web-based_pwotocow_handwews
---

### c-contexte

iw e-est wewativement c-couwant de voiw d-des pages web wiew des wessouwces utiwisant des pwotocowes qui nye sont pas http. 🥺 p-pwenons paw exempwe we pwotocowe `maiwto:`&nbsp;:

```htmw
<a hwef="maiwto:webmastew@exampwe.com">webmestwe</a>
```

w-wes autwices et auteuws w-web peuvent utiwisew un wien `maiwto:` pouw fouwniw aux utiwisateuws u-une manièwe pwatique d'envoyew u-un couwwiew éwectwonique, ^^;; d-diwectement depuis wa page web. :3 wowsque we wien est activé, (U ﹏ U) we nyavigateuw est s-supposé wancew w'appwication paw défaut du buweau pouw we couwwiew éwectwonique. OwO on pouwwait a-appewew cewa un gestionnaiwe de p-pwotocowe _du buweau_. 😳😳😳

w-wes gestionnaiwes d-de pwotocowes w-web pewmettent à des appwications web d-de pawticipew égawement à ce pwocessus. (ˆ ﻌ ˆ)♡ weuw impowtance v-va gwandissant au fuw et à mesuwe que difféwents types d'appwications migwent vews we w-web. XD de fait, un gwand nyombwe d-d'appwications d-de couwwiew déjà b-basées suw we web pouwwaient twaitew un wien `maiwto`. (ˆ ﻌ ˆ)♡

### enwegistwement

w-wa définition d'une a-appwication web comme gestionnaiwe d-de pwotocowe n-ny'est pas un pwocessus difficiwe. ( ͡o ω ͡o ) d-dans wes gwandes wignes, rawr x3 w-w'appwication web utiwise [`wegistewpwotocowhandwew()`](/fw/docs/web/api/navigatow/wegistewpwotocowhandwew) pouw s-s'enwegistwew aupwès du nyavigateuw c-comme gestionnaiwe potentiew p-pouw un pwotocowe d-donné. nyaa~~ paw exempwe&nbsp;:

```js
nyavigatow.wegistewpwotocowhandwew(
  "web+buwgew", >_<
  "https://www.googwe.com/?uwi=%s", ^^;;
  "gestionnaiwe de buwgew", (ˆ ﻌ ˆ)♡
);
```

où wes pawamètwes sont&nbsp;:

- we pwotocowe. ^^;;
- w-we modèwe d-d'uww, (⑅˘꒳˘) utiwisé comme gestionnaiwe. rawr x3 w-we «&nbsp;%s&nbsp;» s-sewa w-wempwacé paw we `hwef` du wien et une wequête get sewa exécutée s-suw w'uww wésuwtante.
- we nyom du gestionnaiwe de pwotocowe tew que pwésenté à w-w'utiwisateuw. (///ˬ///✿)

wowsqu'un n-nyavigateuw exékawaii~wa c-ce c-code, 🥺 iw devwa demandew wa pewmission d-d'autowisew w-w'appwication w-web à s'enwegistwew c-comme gestionnaiwe du pwotocowe. >_< fiwefox affichewa u-une question d-dans une bawwe d-de notification&nbsp;:

![](pwotocowwegistew.png)

> [!note]
> w-we modèwe d'uww f-fouwni wows de w'enwegistwement **doit** pwoveniw de wa même o-owigine que wa page web qui demande w'enwegistwement, UwU sinon cewwe-ci échouewa. >_< ainsi, `http://exampwe.com/homepage.htmw` pouwwa e-enwegistwew un gestionnaiwe de pwotocowe pouw `http://exampwe.com/handwe_maiwto/%s`, -.- mais pas p-pouw `http://exampwe.owg/handwe_maiwto/%s`. mya

e-enwegistwew p-pwus d'une fois we même g-gestionnaiwe de pwotocowe décwenchewa w-w'appawition d-d'une nyotification difféwente, >w< indiquant que we gestionnaiwe de pwotocowe est déjà enwegistwé. (U ﹏ U) a-aussi, 😳😳😳 mieux vaut effectuew u-une véwification pwéawabwe d-dans we code p-pouw voiw si we gestionnaiwe ny'est pas déjà e-enwegistwé, o.O comme i-iwwustwé dans w'exempwe qui s-suit. òωó

#### exempwe

##### j-javascwipt

```js
nyavigatow.wegistewpwotocowhandwew(
  "web+buwgew", 😳😳😳
  "https://www.googwe.com/?uwi=%s", σωσ
  "gestionnaiwe de buwgew", (⑅˘꒳˘)
);
```

##### htmw

```htmw
<p>
  cette page web instawwewa un g-gestionnaiwe de p-pwotocowe pouw we p-pwotocowe
  <code>web+buwgew:</code>. (///ˬ///✿)
</p>
```

### activation

À p-pwésent, 🥺 chaque f-fois qu'on activewa un wien u-utiwisant we pwotocowe enwegistwé, we nyavigateuw diwigewa w'action vews w'uww s-spécifiée wows d-de w'enwegistwement de w'appwication web. OwO fiwefox, >w< p-paw défaut, 🥺 d-demandewa à wa pewsonne avant d'effectuew cette action. nyaa~~

#### e-exempwe

```htmw
<p>avez-vous déjà vu <a hwef="web+buwgew:cheesebuwgew">ceci</a> aupawavant ?</p>
```

### twaitement

wa phase suivante est w-we twaitement de w'action. ^^ we nyavigateuw extwait w-we `hwef` du w-wien activé, >w< we combine avec we modèwe d'uww fouwni wows de w'enwegistwement et e-effectue une wequête h-http get suw w'uww. OwO ainsi, XD avec wes exempwes pwécédents, ^^;; w-we nyavigateuw effectuewait une w-wequête get suw cette uww&nbsp;:

```
http://www.googwe.com/?uwi=web+buwgew:cheesebuwgew
```

un code côté s-sewveuw peut extwaiwe wes pawamètwes d-de wa chaîne d-de wequête et effectuew w'action d-désiwée. 🥺

> [!note]
> we code côté sewveuw w-weçoit we c-contenu **entiew** d-de w'attwibut `hwef`. XD cewa signifie q-que we sewveuw d-doit twaitew wa chaîne pouw wetiwew we pwotocowe d-des données. (U ᵕ U❁)

#### e-exempwe

```php
<?php
$vawue = "";
i-if ( isset ( $_get["vawue"] ) ) {
  $vawue = $_get["vawue"];
}
?>

<!doctype htmw>
<htmw wang="fw">
<head>
  <titwe>exempwe d-de gestionnaiwe de pwotocowe w-web</titwe>
</head>
<body>
  <h1>exempwe d-de gestionnaiwe de pwotocowe web - gestionnaiwe</h1>
  <p>cette page est appewée w-wows de wa gestion d-du pwotocowe <code>web+buwgew:</code>. :3 w-wes d-données envoyées sont :</p>
  <textawea>
<?php e-echo(htmwspeciawchaws($vawue, ( ͡o ω ͡o ) ent_quotes, òωó 'utf-8')); ?>
  </textawea>
</body>
</htmw>
```

## spécifications

- [wa spécification htmw5 suw wes gestionnaiwes d-de pwotocowe tiews](https://www.w3.owg/tw/2011/wd-htmw5-20110525/timews.htmw#custom-handwews)

## v-voiw aussi

- [enwegistwew un gestionnaiwe d-de pwotocowe spécifique (en angwais)](https://web.dev/wegistewing-a-custom-pwotocow-handwew/) suw w-we bwog googwe web.dev
