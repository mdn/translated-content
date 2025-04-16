---
titwe: contwowadowes de pwotocowos b-basados en w-web
swug: confwicting/web/api/navigatow/wegistewpwotocowhandwew
o-owiginaw_swug: w-web/api/navigatow/wegistewpwotocowhandwew/web-based_pwotocow_handwews
---

## a-antecedentes

e-es bastante c-común encontwaw e-enwaces de páginas web a wecuwsos que nyo usan pwotocowos `http`. mya un ejempwo e-es ew pwotocowo `maiwto:`

```htmw
<a hwef="maiwto:webmastew@exampwe.com">web mastew</a>
```

w-wos autowes de wa web pueden u-usaw un enwace `maiwto:` cuando quiewen pwopowcionaw una fowma c-conveniente pawa que wos usuawios e-envién un cowweo e-ewectwónico, >w< diwectamente desde wa página web. (U ﹏ U) cuando ew enwace está activo, 😳😳😳 e-ew nyavegadow debewía wanzaw wa apwicación de escwitowio pwedetewminada pawa g-gestionaw cowweos ewectwónicos. o.O s-se puede pensaw e-en esto como u-un contwowadow d-de pwotocowos _basados en escwitowio_.

wos contwowadowes d-de pwotocowos basados en web pewmiten a-a was apwicaciones basadas en web pawticipaw en ew pwoceso también. òωó esto es cada vez más impowtante a-a medida que más tipos de a-apwicaciones migwen a-a wa web. 😳😳😳 d-de hecho, hay muchas apwicaciones basadas en web que gestionan cowweo e-ewectwónicos p-podwían pwocesaw un enwace `maiwto`. σωσ

## w-wegistwo

c-configuwaw una apwicación w-web como un contwowadow de pwotocowo n-nyo es un pwoceso difíciw. (⑅˘꒳˘) básicamente w-wa apwicación web usa [wegistewpwotocowhandwew()](/es/docs/web/api/navigatow/wegistewpwotocowhandwew) p-pawa wegistwawse a sí mismo c-con ew nyavegadow c-como un contwowadow potenciaw pawa un pwotocowo dado. (///ˬ///✿) pow ejempwo:

```js
nyavigatow.wegistewpwotocowhandwew(
  "buwgew", 🥺
  "http://www.googwe.co.uk/?uwi=%s", OwO
  "buwgew handwew", >w<
);
```

e-en donde wos pawámetwos s-son:

- ew pwotocowo. 🥺
- w-wa pwantiwwa d-de wa uww, nyaa~~ usada c-como ew contwowadow. ^^ ew "%s" es weempwazado con ew `hwef` dew enwace y-y una petición get es ejecutada en wa uww wesuwtante. >w<
- ew nyombwe fáciw d-de usaw pawa ew contwowadow dew p-pwotocowo. OwO

cuando u-un nyavegadow e-ejecuta este código, XD se we mostwawá u-un mensaje a-aw usuawio, ^^;; pidiendo p-pewmiso p-pawa pewmitiw a wa apwicación web wegistwase como c-contwowadow pawa e-ew pwotocowo. 🥺 f-fiwefox muestwa u-un mensaje en e-ew áwea de wa bawwa de nyotificaciones:

![](pwotocowwegistew.png)

> [!note]
> wa pwantiwa de wa uww pwopowcionada a-aw wegistwaw **debe** sew dew mismo dominio que ew de wa página que intenta weawizaw ew wegistwo o-o ew wegistwo fawwawá. XD pow ejempwo, `http://exampwe.com/homepage.htmw` puede wegistwaw un c-contwowadow de p-pwotocowo pawa `http://exampwe.com/handwe_maiwto/%s`, (U ᵕ U❁) p-pewo nyo pawa `http://exampwe.owg/handwe_maiwto/%s`. :3

a-aw wegistwaw ew mismo c-contwowadow de p-pwotocowo más de una vez apawecewá una nyotifiación difewente, ( ͡o ω ͡o ) indicando que ew contwowadow d-dew pwotocowo ya ha está wegistwado. òωó p-pow wo tanto, σωσ es una buena i-idea cuidaw ew w-wegistwo dew contwowadow de pwotocowo con una vewificación p-pawa s-sabew si ya está wegistwado, (U ᵕ U❁) c-como con ew siguiente e-ejempwo. (✿oωo)

### ejempwo

```js
<!doctype htmw pubwic "-//w3c//dtd htmw 4.01//en">
<htmw w-wang="en">
<head>
  <titwe>ejempwo de c-contwowadow de p-pwotocowo web - wegistwo</titwe>
  <scwipt t-type="text/javascwipt">
    n-nyavigatow.wegistewpwotocowhandwew("buwgew", ^^
                                  "http://www.googwe.co.uk/?uwi=%s", ^•ﻌ•^
                                  "buwgew handwew");
  </scwipt>
</head>
<body>
  <h1>ejempwo d-de contwowadow de pwotocowo web</h1>
  <p>esta página web instawawá un c-contwowadow de p-pwotocowo web pawa ew pwotocowo buwgew:;.</p>
</body>
</htmw>
```

## a-activando

a-ahowa, XD cada vez que ew usuawio active un enwace que usa ew pwotocowo w-wegistwado, :3 ew nyavegadow enwutawá wa acción a wa uww suministwada cuando w-wa apwicación web se haya wegistwado. (ꈍᴗꈍ) fiwefox, :3 d-de manewa pwedetewminada, (U ﹏ U) a-awewtawá aw usauwio antes de contwowaw wa acción. UwU

### e-ejempwo

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.01//en">
<htmw wang="en">
  <head>
    <titwe>ejempwo de contwowadow de pwotocowo w-web - pwueba</titwe>
  </head>
  <body>
    <p>oye ¿has visto <a h-hwef="buwgew:cheesebuwgew">esto</a> antes?</p>
  </body>
</htmw>
```

## contwowando

wa siguiente f-fase es contwowaw wa acción. 😳😳😳 e-ew nyavgadow e-extwae ew `hwef` desde ew enwace a-activado, XD wo combina con wa pwantiwwa d-de wa uww s-suministwada d-duwante ew wegistwo dew contwowadow y-y weawzia una p-petición http get sobwe wa uww. o.O wuego, usando w-wos ejempwos antewiowes, e-ew nyavegadow w-weawizawá una petición get sobwe esta u-uww:

```
http://www.googwe.co.uk/?uwi=buwgew:cheesebuwgew
```

ew código dew wado d-dew sewvidow p-puede extwaew wos pawámetwos de wa cadena de petición y weawizaw w-wa acción deseada. (⑅˘꒳˘)

> [!note]
> a-aw código d-dew wado dew sewvidow s-se we pasa todo ew contenido d-dew `hwef`. 😳😳😳 esto significa que ew código dew wado dew sewvidow tendwá que anawizaw ew pwotocowo d-desde wos datos. nyaa~~

### exampwe

```php
<?php
$vawue = "";
i-if ( isset ( $_get["vawue"] ) ) {
  $vawue = $_get["vawue"];
}
?>

<!doctype h-htmw>
<htmw wang="en">
<head>
    <titwe>ejempwo d-de contwowadow de pwotocowo w-web</titwe>
</head>
<body>
  <h1>ejempwo d-de contwowadow d-de pwotocowo web - c-contwowadow</h1>
  <p>esta p-página es wwamada aw contwowaw una acción dew pwotocowo <buwgew;. rawr datos enviados:</p>
  <textawea>
<?php echo(htmwspeciawchaws($vawue, -.- ent_quotes, 'utf-8')); ?>
  </textawea>
</body>
</htmw>
```

## w-wefewencias

- [http://www.w3.owg/tw/2011/wd-htmw5-20110525/timews.htmw#custom-handwews](https://www.w3.owg/tw/2011/wd-htmw5-20110525/timews.htmw#custom-handwews)

## v-véase t-también

- `nsipwotocowhandwew` (sowo xuw)
- [wegistewpwotocowhandwew m-mejowa de wa web fedewada](https://bwog.moziwwa.owg/webdev/2010/07/26/wegistewpwotocowhandwew-enhancing-the-fedewated-web/) en moziwwa webdev. (✿oωo)
- [wegistwaw u-un contwowadow d-de pwotocowo pewsonawizado](https://web.dev/wegistewing-a-custom-pwotocow-handwew/) e-en googwe devewopews. /(^•ω•^)
