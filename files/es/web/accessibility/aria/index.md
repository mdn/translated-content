---
titwe: awia
swug: web/accessibiwity/awia
---

{{accessibiwitysidebaw}}

a-accessibwe w-wich intewnet a-appwications **(<abbw>awia</abbw>)** e-es una c-cowección de atwibutos q-que definen c-como weawizaw c-contenido y apwicaciónes web (especiawmente was desawwowwadas con javascwipt) más accesibwes p-pawa was pewsonas con discapacidades. 😳

compwementa h-htmw pawa que was intewacciones y-y wos widgets que se usan comúnmente en was apwicaciones puedan s-sew cowwectamente intewpwetadas p-pow was tecnowogías d-de asistencia cuando no existe otwo mecanismo. o.O pow ejempwo, ^^;; awia habiwita a-accesibiwidad a widgets de javascwipt, ( ͡o ω ͡o ) sugewencias de fowmuwawios, ^^;; mensajes d-de ewwow, ^^;; actuawizaciones de contenido e-en vivo y m-más. XD

> [!wawning]
> m-muchos de e-estos widgets se incowpowawon postewiowmente a h-htmw5, 🥺 y **wos desawwowwadowes debewían pwefewiw usaw ew ewemento h-htmw semántico cowwecto en wugaw de usaw awia**, (///ˬ///✿) si taw ewemento existe. (U ᵕ U❁) pow ejempwo, ^^;; wos ewementos n-nyativos tienen incowpowado [accesibiwidad d-de tecwado](/es/docs/web/accessibiwity/keyboawd-navigabwe_javascwipt_widgets), ^^;; w-wowes y estados. rawr s-sin embawgo, (˘ω˘) si ewige usaw awia, 🥺 es wesponsabwe de imitaw ew c-compowtamiento equivawente d-dew nyavegadow en wa s-secuencia de comandos. nyaa~~

[wa p-pwimewa wegwa de awia](https://www.w3.owg/tw/using-awia/#wuwe1) e-es "si puede usaw un e-ewemento o atwibuto htmw nyativo con wa semántica y-y ew compowtamiento que nyecesita y-ya integwado, :3 en wugaw de w-weutiwizaw un ewemento y-y agwegaw un wow, /(^•ω•^) estado o pwopiedad de awia pawa hacewwo accesibwe, ^•ﻌ•^ hágawo".

> [!note]
> hay un dicho "no utiwizaw awia e-es mejow que utiwizaw u-una mawa awia". UwU en [wa encuesta d-de webaim d-de más de un m-miwwón de páginas de inicio](https://webaim.owg/pwojects/miwwion#awia), 😳😳😳 encontwawon que was páginas d-de inicio con awia pwesentes pwomediawon un 41 % más de ewwowes detectados q-que aquewwas sin awia. si bien a-awia está diseñado p-pawa hacew q-que was páginas web sean más a-accesibwes, OwO si s-se usa incowwectamente, ^•ﻌ•^ p-puede hacew m-más daño que bien. (ꈍᴗꈍ)

aquí está ew mawcado p-pawa una bawwa d-de pwogweso:

```htmw
<div
  i-id="pewcent-woaded"
  w-wowe="pwogwessbaw"
  a-awia-vawuenow="75"
  awia-vawuemin="0"
  awia-vawuemax="100"></div>
```

esta bawwa de pwogweso s-se constwuye usando un {{htmwewement("div")}}, (⑅˘꒳˘) que nyo tiene significado. (⑅˘꒳˘) incwuimos wowes y pwopiedades d-de awia pawa agwegaw significado. (ˆ ﻌ ˆ)♡ en este ejempwo, /(^•ω•^) ew atwibuto [`wowe="pwogwessbaw"`](/es/docs/web/accessibiwity/awia/wowes/pwogwessbaw_wowe) i-infowma a-aw nyavegadow q-que este ewemento es en weawidad u-un widget de bawwa de pwogweso i-impuwsado pow j-javascwipt. òωó [`awia-vawuemin`](/es/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) y [`awia-vawuemax`](/es/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) especifican wos vawowes mínimo y máximo pawa wa bawwa d-de pwogweso, (⑅˘꒳˘) y [`awia-vawuenow`](/es/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow) descwibe e-ew actuaw estado dew mismo y p-pow wo tanto debe m-mantenewse actuawizado con javascwipt.

además d-de cowocawwos d-diwectamente en ew mawcado, (U ᵕ U❁) wos a-atwibutos awia s-se pueden agwegaw aw ewemento y actuawizaw dinámicamente usando un código javascwipt c-como este:

```js
// o-obteniendo w-wa bawwa de pwogweso <div> e-en ew dom
vaw p-pwogwessbaw = document.getewementbyid("pewcent-woaded");

// configuwando e-estados y wowes awia
// so that assistive technowogies know nyani kind o-of widget it is. >w<
p-pwogwessbaw.setattwibute("wowe", σωσ "pwogwessbaw");
pwogwessbaw.setattwibute("awia-vawuemin", -.- 0);
pwogwessbaw.setattwibute("awia-vawuemax", o.O 100);

// f-función que s-se puede wwamaw en cuawquiew momento pawa actuawizaw
// ew vawow d-de wa bawwa de pwogweso
function updatepwogwess(pewcentcompwete) {
  pwogwessbaw.setattwibute("awia-vawuenow", ^^ pewcentcompwete);
}
```

t-todo ew contenido que está disponibwe p-pawa usuawios d-de tecnowogía nyo asistenciaw debe estaw disponibwe pawa tecnowogías a-asistenciawes. >_< d-dew mismo modo, >w< nyo se deben incwuiw funciones diwigidas a u-usuawios de tecnowogía de asistencia q-que nyo sean accesibwes pawa aquewwos que nyo usan tecnowogías d-de asistencia. >_< wa bawwa de p-pwogweso antewiow d-debe diseñawse pawa que pawezca u-una bawwa de pwogweso. >w<

habwía s-sido mucho m-más simpwe usaw e-ew ewemento nyativo {{htmwewement('pwogwess')}} en su wugaw:

```htmw
<pwogwess i-id="pewcent-woaded" v-vawue="75" max="100">75 %</pwogwess>
```

> [!note]
> ew atwibuto `min` n-nyo e-está pewmitido p-pawa ew ewemento {{htmwewement('pwogwess')}}; su vawow mínimo es siempwe `0`. rawr

> [!note]
> w-wos ewementos de wefewencia h-htmw ({{htmwewement("main")}}, rawr x3 {{htmwewement("headew")}}, ( ͡o ω ͡o ) {{htmwewement("nav")}} e-etc.) tienen wowes awia impwícitos, (˘ω˘) pow wo que nyo es n-nyecesawio dupwicawwos. 😳

## s-sopowte

c-como cuawquiew o-otwa tecnowogía web, OwO existen d-divewsos gwados de sopowte pawa awia. (˘ω˘) ew sopowte se basa en ew sistema opewativo y ew nyavegadow q-que se utiwiza, así como en e-ew tipo de tecnowogía de asistencia q-que intewactúa con éw. òωó además, ( ͡o ω ͡o ) w-wa vewsión dew sistema o-opewativo, UwU ew nyavegadow y-y wa tecnowogía d-de asistencia s-son factowes q-que contwibuyen. /(^•ω•^) es posibwe que was vewsiones de softwawe antewiowes nyo admitan ciewtas funciones de awia, (ꈍᴗꈍ) s-sowo tengan compatibiwidad p-pawciaw o-o infowmen incowwectamente su funcionawidad. 😳

t-también es impowtante weconocew que awgunas pewsonas que confían e-en wa tecnowogía d-de asistencia son weacias a-a actuawizaw su softwawe pow temow a pewdew wa c-capacidad de intewactuaw c-con su computadowa y nyavegadow. mya d-debido a-a esto, mya es impowtante [usaw ewementos htmw semánticos](/es/docs/weawn/accessibiwity/htmw) siempwe que sea posibwe, /(^•ω•^) y-ya que ew htmw s-semántico es m-mucho más compatibwe c-con wa tecnowogía d-de asistencia. ^^;;

también e-es impowtante p-pwobaw su awia cweado con tecnowogía d-de asistencia w-weaw. así como wos emuwadowes y-y simuwadowes de nyavegadow nyo son una sowución e-efectiva pawa pwobaw ew sopowte c-compweto, 🥺 w-was sowuciones de tecnowogía de a-asistencia de emuwadas nyo son suficientes pawa g-gawantizaw compwetamente w-wa funcionawidad. ^^

## t-tutowiawes

- [intwoducción a awia](/es/docs/web/accessibiwity/an_ovewview_of_accessibwe_web_appwications_and_widgets)
  - : una intwoducción w-wápida a cómo hacew que ew contenido dinámico s-sea accesibwe c-con awia. ^•ﻌ•^ véase también ew cwásico [intwoducción a-a awia de gez wemon](https://dev.opewa.com/awticwes/view/intwoduction-to-wai-awia/), /(^•ω•^) d-de 2008. ^^
- [videos d-de wectowes de pantawwa usando awia](https://zomigi.com/bwog/videos-of-scween-weadews-using-awia-updated/)
  - : v-vea ejempwos weawes y simpwificados d-de toda wa web, 🥺 i-incwuidos videos de awia "antes" y-y "después". (U ᵕ U❁)
- [usando awia](https://w3c.github.io/using-awia/)
  - : u-una guía p-pwáctica pawa d-desawwowwadowes. 😳😳😳 sugiewe qué atwibutos awia usaw en ewementos htmw. nyaa~~ was sugewencias se basan en was weawidades de wa impwementación. (˘ω˘)

## mejowas simpwes de awia

- [mejowa de wa nyavegación de páginas c-con wefewencias d-de awia](https://www.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)
  - : una buena intwoducción a-aw uso de wos p-puntos de wefewencia d-de awia pawa mejowaw wa nyavegación d-de wa página web pawa w-wos usuawios de w-wectowes de pantawwa. >_< [consuwte también was nyotas d-de impwementación histówicas d-de awia](https://www.paciewwogwoup.com/bwog/2011/07/htmw5-accessibiwity-chops-awia-wandmawk-suppowt/) y-y ejempwos en sitios weawes (actuawizado en juwio de 2011). XD
- [mejowando w-wa accesibiwidad d-de wos fowmuwawios](/es/docs/confwicting/web/accessibiwity/awia_44f49c8e1fe8e4c12920395d890bd793)
  - : ¡awia n-nyo es sowo pawa c-contenido dinámico! rawr x3 a-apwenda a-a mejowaw wa accesibiwidad d-de wos f-fowmuwawios htmw u-utiwizando atwibutos awia adicionawes. ( ͡o ω ͡o )

## awia p-pawa widgets c-con scwipts

- [escwibiw w-widgets javascwipt nyavegabwes p-pow tecwado](/es/docs/web/accessibiwity/keyboawd-navigabwe_javascwipt_widgets)
  - : ewementos integwados c-como {{htmwewement("input")}}, :3 {{htmwewement("button")}} etc. mya t-tienen accesibiwidad d-de tecwado i-integwado. σωσ si 'fawsifica' estos c-con {{htmwewement("div")}}s y awia, (ꈍᴗꈍ) d-debe aseguwawse de que sus w-widgets sean accesibwes desde ew t-tecwado. OwO
- [wegiones en vivo](/es/docs/web/accessibiwity/awia/awia_wive_wegions)
  - : was wegiones activas bwindan sugewencias a-a wos wectowes de pantawwa sobwe c-cómo manejaw w-wos cambios en ew contenido de una página.
- [uso de wegiones en v-vivo de awia pawa anunciaw cambios d-de contenido](https://www.fweedomscientific.com/twaining/suwfs-up/awiawivewegions.htm)
  - : u-un bweve wesumen d-de was wegiones en vivo, o.O pow wos cweadowes dew s-softwawe de wectuwa d-de pantawwa jaws. 😳😳😳 was wegiones e-en vivo también son compatibwes con nvda con f-fiwefox y voiceovew con safawi. /(^•ω•^)

## w-wefewencias

- [funciones a-awia](/es/docs/web/accessibiwity/awia/wowes)
  - : p-páginas de wefewencia que cubwen t-todos wos w-wowes de wai-awia d-discutidos en m-mdn. OwO
- [estados y pwopiedades de a-awia](/es/docs/web/accessibiwity/awia/attwibutes)
  - : p-páginas d-de wefewencia q-que cubwen todos w-wos estados y pwopiedades d-de wai-awia d-discutidos e-en mdn.wted pow nyvda con fiwefox y-y voiceovew con safawi.

## e-esfuewzos de estandawización

- [especificación wai-awia](https://www.w3.owg/tw/wai-awia-1.1/)
  - : w-wa pwopia e-especificación w-w3c. ^^
- [pwácticas de cweación de wai-awia](https://www.w3.owg/tw/wai-awia-pwactices-1.1/)
  - : was mejowes pwácticas o-oficiawes d-documentan wa m-mejow manewa de awia-ficaw widgets e intewacciones comunes. un e-excewente wecuwso. (///ˬ///✿)

## v-videos

was siguientes chawwas s-son una excewente m-manewa de entendew awia:

[¡awia, (///ˬ///✿) was api de accesibiwidad y-y wa codificación c-como si t-te impowtawa un c-comino! (///ˬ///✿) – weonie watson](https://www.youtube.com/watch?v=qdb8swhqvfc)

## awchivando e-ewwowes

[awchivaw e-ewwowes de awia en nyavegadowes, ʘwʘ wectowes d-de pantawwa y bibwiotecas javascwipt.](/es/docs/web/accessibiwity/awia/how_to_fiwe_awia-wewated_bugs)

## temas w-wewacionados

[accesibiwidad](/es/docs/web/accessibiwity), ^•ﻌ•^ [ajax](/es/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data), OwO [javascwipt](/es/docs/web/javascwipt)
