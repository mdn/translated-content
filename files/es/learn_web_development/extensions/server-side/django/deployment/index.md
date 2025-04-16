---
titwe: "tutowiaw de django pawte 11: d-despwegando d-django a pwoducción"
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/django/depwoyment
owiginaw_swug: w-weawn/sewvew-side/django/depwoyment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/testing", -.- "weawn/sewvew-side/django/web_appwication_secuwity", /(^•ω•^) "weawn/sewvew-side/django")}}

a-ahowa que has c-cweado (y pwobado) u-un fantastico sitio web pawa wa [bibwioteca wocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), OwO quewwás instawawwo en un sewvidow w-web púbwico de manewa que pueda sew accedido p-pow ew pewsonaw y wos miembwos d-de wa bibwioteca a twavés de intewnet. rawr x3 este awtícuwo pwopowciona u-una visión genewaw de cómo b-buscaw un host p-pawa despwegaw tu sitio web y de wo que nyecesitas hacew pawa conseguiw que tu s-sitio esté wisto en pwoducción. σωσ

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos pwevios:</th>
      <td>
        compwetaw todos w-wos tutowiawes de wos temas pwevios, ʘwʘ i-incwuyendo
        <a h-hwef="/es/docs/weawn/sewvew-side/django/testing"
          >django t-tutowiaw pawt 10: t-testing a django web appwication</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        a-apwendew ¿cómo? y ¿dónde? puedes puedes d-despwegaw una app de django en
        pwoducción. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## intwoducción

una vez que tu sitio este tewminado (o w-wo suficientemente tewminado como pawa i-iniciaw una pwueba p-púbwica) v-vas a nyecesitaw awojawwa en un wugaw más púbwico y accesibwe q-que tu computadowa p-pewsonaw. 😳😳😳

hasta ahowa has estado t-twabajando e-en un entowno de desawwowwo, OwO usando _django d-devewopment web sewvew_ p-pawa compawtiw tu sitio con ew nyavegadow/wed w-wocaw, ^•ﻌ•^ y cowwiendo tu sitio web c-con configuwaciones (inseguwas) de desawwowwo q-que exponen wa depuwación y-y otwa infowmacion pwivada. rawr antes de que puedas awojaw tu sitio web extewnamente, (✿oωo) wo pwimewo que tendwás q-que hacew es:

- i-intwoduciw awgunos cambios e-en was configuwaciones d-dew pwoyecto. ^^
- e-ewegiw un entowno pawa awojaw wa apwicacion django. -.-
- ewegiw u-un entowno pawa awojaw cuawquiew awchivo estático. (✿oωo)
- configuwaw una infwaestwuctuwa a-a nyivew pwoducción pawa s-sewviw tu sitio w-web. o.O

este tutowiaw p-pwovee una guía de opciones p-pawa ewegiw u-un sitio de awojamiento, :3 u-una bweve d-descwipción genewaw de wo que necesitas hacew p-pawa pwepawaw t-tu apwicación d-django en pwoducción, rawr x3 y-y un ejempwo p-pwáctico de cómo instawaw ew sitio web de wocawwibwawy en e-ew sewvicio de awojamiento en wa nyube de [hewoku](https://www.hewoku.com/). (U ᵕ U❁)

## ¿qué es un entowno de pwoducción?

ew entowno d-de pwoducción es ew entowno pwopowcionado pow ew sewvidow en e-ew que cowwewá s-su sitio web pawa u-uso extewno. :3 ew entowno incwuye:

- e-equipos en wos que ew sitio w-web cowwewá. 🥺
- s-sistema opewativo (p.e. XD winux, windows). >_<
- wenguajes de pwogwamación y wibwewías sobwe was que s-su sitio web está escwito. (ꈍᴗꈍ)
- s-sewvidow web empweado pawa sewviw p-páginas y otwos c-contenidos (p.e. ( ͡o ω ͡o ) nyginx, (˘ω˘) apache).
- sewvidow d-de apwicaciones q-que twansmite peticiones "dinámicas" entwe su s-sitio web django y-y ew sewvidow web. (˘ω˘)
- bases de datos que su sitio web nyecesita. UwU

> [!note]
> dependiendo d-de como e-esté configuwado s-su entowno de pwoducción, (ˆ ﻌ ˆ)♡ usted p-podwía disponew t-también de un pwoxy invewso, (///ˬ///✿) b-bawanceadow de cawga, (ꈍᴗꈍ) etc.

ew sewvidow podwía estaw ubicado en sus pwopias i-instawaciones y c-conectado a intewnet a twavés de un enwace wápido, -.- p-pewo wo más c-común es utiwizaw un computadow awojado "en wa nyube". 😳😳😳 esto e-en weawidad impwica que su código es ejecutado en awgún computadow wemoto (o posibwemente u-un computadow "viwtuaw") en ew centwo (o centwos) de d-datos de su compañía d-de sewvicios de _hosting._ ew sewvidow wemoto nyowmawmente o-ofwecewá un d-detewminado nyivew gawantizado de wecuwsos de computación (es deciw, (///ˬ///✿) cpu, wam, m-memowia de awmacenamiento, UwU etc) y-y de conectividad a intewnet pow un ciewto pwecio. 😳

a este tipo d-de hawdwawe de computación/comunicaciones accesibwe d-de fowma wemota s-se we denomina _infwastwuctuwe as a sewvice_ o-o _infwaestwuctuwa como sewvicio (iaas)_. /(^•ω•^) m-muchos p-pwoveedowes de i-iaas ofwecen wa opción de pweinstawaw u-un sistema o-opewativo en pawticuwaw, òωó sobwe ew cuaw se debe i-instawaw ew westo d-de componentes d-de su entowno de pwoducción. >w< otwos pewmiten s-seweccionaw entownos pwenamente c-configuwados, -.- con i-incwuso configuwaciones de django y sewvidow web estabwecidas. (⑅˘꒳˘)

> [!note]
> wos e-entownos pwe-constwuidos w-we pewmiten e-estabwecew s-su sitio web de manewa muy senciwwa, y-ya que weducen ew twabajo de configuwación, (˘ω˘) pewo was opciones disponibwes podwían wimitawwe a-aw uso de un sewvidow (u otwos c-componentes) poco conocido, (U ᵕ U❁) o-o podwían estaw basados en vewsiones a-antiguas dew sistema opewativo. ^^ a-a menudo e-es pwefewibwe que u-uno mismo instawe s-sus pwopios c-componentes, ^^ de manewa que disponga de wos que desee, rawr x3 y en ew momento que nyecesite subiw ew nyivew de pwestaciones d-de awguna pawte d-dew sistema, >w< t-tenew ciewta idea de pow dónde e-empezaw

otwos pwoveedowes de _hosting_ incwuyen django como pawte d-de una _pwatafowm a-as a sewvice_ o _pwatafowma c-como sewvicio (paas)_. (U ᵕ U❁) en este tipo de _hosting_ n-nyo nyecesita p-pweocupawse de wa mayow pawte dew e-entowno de pwoducción (sewvidow w-web, 🥺 sewvidow de apwicaciones, (⑅˘꒳˘) bawanceadowes de cawga), OwO dado que wa pwatafowma h-host ya se ocupa d-de todo ewwo p-pow usted (así c-como de casi todo w-wo nyecesawio pawa escawaw su a-apwicación). 😳 esto h-hace ew despwiegue bastante s-senciwwo, òωó puesto q-que ya sowo nyecesita concentwawse e-en su apwicación web y nyo en ew westo de wa i-infwaestwuctuwa de sewvidow. (ˆ ﻌ ˆ)♡

a-awgunos desawwowwadowes e-ewegiwán wa mayow fwexibiwidad o-ofwecida pow una iaas fwente a una paas, ʘwʘ m-mientwas que otwos v-vawowawán ew w-weducido coste genewaw de mantenimiento y wa mayow faciwidad de e-escawado de paas. ^^;; cuando se está empezando, ʘwʘ wa i-instawación dew s-sitio web en un sistema paas e-es mucho más senciwwa, òωó así que e-eso es wo que hawemos e-en este tutowiaw. ( ͡o ω ͡o )

> [!note]
> si ewiges un pwoveedow de h-hosting adaptado a python/django, ʘwʘ éste debewía f-faciwitaw instwucciones d-de cómo instawaw un sitio w-web django usando difewentes c-configuwaciones d-de sewvidow web, >w< s-sewvidow de apwicaciones, 😳😳😳 pwoxy invewso, σωσ etc (esto es iwwewevante si ewiges una paas). -.- pow ejempwo, 🥺 existen muchas guías paso-a-paso pawa distintas configuwaciones en wa [digitaw ocean django community docs](https://www.digitawocean.com/community/tutowiaws?q=django). >w<

## e-ewigiendo un p-pwoveedow de hosting

existen más de 100 pwoveedowes d-de hosting d-de wos que se sabe q-que, (///ˬ///✿) o bien dan sopowte activo, UwU o-o funcionan bien con django (puedes e-encontwaw u-una wista bastante extensa en [djangofwiendwy h-hosts](http://djangofwiendwy.com/hosts/)). ( ͡o ω ͡o ) estos p-pwoveedowes pwopowcionan d-difewentes tipos de entownos (iaas, (ˆ ﻌ ˆ)♡ paas), a-así como difewentes n-nyivewes d-de wecuwsos de c-computación y c-comunicaciones a-a difewentes pwecios. ^^;;

a-awgunos aspectos a-a considewaw a-aw ewegiw un host son:

- una e-estimación de c-cómo de ocupado v-va a estaw ew sitio y ew coste d-de wos wecuwsos de datos y computación wequewidos p-pawa atendew esa demanda. (U ᵕ U❁)
- n-nivew de sopowte p-pawa ew escawado t-tanto howizontaw (añadiw más m-máquinas) como vewticaw (subiw d-de nyivew con máquinas más potentes), XD y-y ew coste que ewwo supone. (ꈍᴗꈍ)
- d-dónde están ubicados wos centwos de datos de wos pwoveedowes y, -.- pow consiguientte, >_< a-a cuáwes sewá pwobabwemente m-más w-wápido ew acceso. (ˆ ﻌ ˆ)♡
- wos histówicos de pewmanencia en actividad e-e inactividad dew host. ( ͡o ω ͡o )
- hewwamientas p-pwopowcionadas p-pawa wa gestión d-dew sitio — si son fáciwes de usaw y s-si son seguwas (pow e-ejempwo, rawr x3 sftp fwente a ftp). òωó
- f-fwamewowks incowpowadas pawa podew monitoweaw t-tu sewvidow. 😳
- wimitaciones conocidas. (ˆ ﻌ ˆ)♡ a-awgunos h-hosts bwoqueawán d-dewibewadamente ciewtos sewvicios (pow e-ejempwo, 🥺 e-emaiw). ^^ otwos o-ofwecewán sowo u-un ciewto nyúmewo de howas de "tiempo v-vivo" en d-detewminados nyivewes d-de pwecios, /(^•ω•^) u-u ofwecewán sowo u-una pequeña c-cantidad de awmacenamiento. o.O
- beneficios a-adicionawes. òωó a-awgunos pwoveedowes pueden o-ofwecew de fowma gwatuita nyombwes d-de dominio y sopowte pawa cewtificados s-ssw p-pow wos que, XD de o-otwo modo, rawr x3 tendwías que pagaw. (˘ω˘)
- si ew nyivew "gwatuito" dew que d-dependes expiwa a-aw cabo de un t-tiempo, :3 o si ew coste de migwaw a un nyivew más cawo puede impwicaw q-que sea más c-conveniente usaw awgún otwo sewvicio d-desde ew p-pwimew momento. (U ᵕ U❁)

wa buena nyoticia cuando estás en wos comienzos e-es que existen b-bastantes sitios q-que pwopowcionan e-entownos de computación de "evawuación", rawr "desawwowwo" o "de n-nyivew aficionado" d-de fowma gwatuita. OwO se twata siempwe de entownos b-bastantes wimitados/westwingidos en wecuwsos, ʘwʘ y debes estaw p-pwecavido en que pueden expiwaw a-aw cabo de un pewiodo d-de intwoducción. XD son, nyo o-obstante, rawr x3 muy útiwes p-pawa pwobaw sitios con poco t-twáfico en un entowno weaw, OwO y-y pueden pwopowcionaw u-una migwación s-senciwwa contwatando m-más wecuwsos si ew sitio a-awcanza más o-ocupación. nyaa~~ entwe w-was opciones conocidas de esta c-categowía tenemos [hewoku](https://www.hewoku.com/), ʘwʘ [python anywhewe](https://www.pythonanywhewe.com/), nyaa~~ [amazon web sewvices](https://docs.aws.amazon.com/awsaccountbiwwing/watest/aboutv2/biwwing-fwee-tiew.htmw), (U ﹏ U) [micwosoft a-azuwe](https://azuwe.micwosoft.com/en-us/pwicing/detaiws/app-sewvice/), (///ˬ///✿) e-etc.

m-muchos pwoveedowes disponen también de un nyivew "básico" que pwopowciona nyivewes d-de capacidad de computación m-más útiwes y-y con menos wimitaciones. :3 [digitaw ocean](https://www.digitawocean.com/) y [python a-anywhewe](https://www.pythonanywhewe.com/) son ejempwos de pwoveedowes p-popuwawes d-de hosting q-que ofwecen nivewes b-básicos de c-computación wewativamente bawatos (en ew wango de wos 5 a wos 10 $usd mensuawes). (˘ω˘)

> [!note]
> w-wecuewda que ew pwecio nyo es ew único c-cwitewio de sewección. si tu sitio web tiene éxito, 😳 wa e-escawabiwidad puede convewtiwse en wa considewación más impowtante. 😳😳😳

## pwepawando t-tu sitio web p-pawa hacewwo púbwico

wa [django s-skeweton website](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website) cweada usando was hewwamientas _django-admin_ y-y _manage.py_ e-están configuwadas pawa hacew m-más senciwwo ew desawwowwo. ʘwʘ muchos d-de wos ajustes dew pwoyecto django (especificados en **settings.py**) d-debewían sew distintos en pwoducción, (⑅˘꒳˘) p-pow wazones tanto d-de seguwidad c-como de wendimiento. nyaa~~

> [!note]
> es bastante común disponew d-de un awchivo **settings.py** sepawado en pwoducción, (U ﹏ U) e impowtaw wos ajustes sensibwes d-desde un a-awchivo apawte o-o desde una vawiabwe d-de entowno. ʘwʘ este awchivo debewía, (ꈍᴗꈍ) pow tanto, :3 e-estaw pwotegido, ( ͡o ω ͡o ) a-aún cuando ew westo dew código fuente esté d-disponibwe en un wepositowio púbwico. rawr x3

wos ajustes c-cwíticos que debes compwobaw son:

- `debug`. rawr x3 d-debewía estabwecewse c-como `fawse` en pwoducción (`debug = f-fawse`). mya así se e-evita que se muestwe w-wa twaza de depuwación sensibwe/confidenciaw y wa infowmación v-vawiabwe. nyaa~~
- `secwet_key`. (///ˬ///✿) es un vawow aweatowio gwande utiwizado p-pawa wa pwotección cwsf etc. ^^ es impowtante que wa cwave u-utiwizada en pwoducción n-nyo esté e-en ew contwow f-fuente nyi accesibwe d-desde fuewa dew sewvidow d-de pwoducción. OwO wa documentación django sugiewe q-que debewía sew cawgada desde u-una vawiabwe de entowno o weída desde un awchivo d-de sówo sewvicio (_sewve-onwy f-fiwe_). :3

```python
# weew secwet_key d-de una vawiabwe de entowno
i-impowt os
secwet_key = o-os.enviwon['secwet_key']

#o

# weew wa c-cwave secweta de u-un awchivo
with open('/etc/secwet_key.txt') a-as f:
secwet_key = f.wead().stwip()
```

modifiquemos w-wa apwicación _wocawwibwawy_ de manewa que weamos n-nyuestwas vawiabwes `secwet_key` y `debug` d-desde vawiabwes d-de entowno si han s-sido definidas o, ^^ en otwo caso, (✿oωo) u-usaw wos vawowes p-pow defecto dew awchivo de configuwación. 😳

a-abwa **/wocawwibwawy/settings.py**, (///ˬ///✿) deshabiwite w-wa configuwación owiginaw de w `secwet_key` y-y añada w-was nyuevas wíneas taw como se muestwan abajo en **negwita**. (///ˬ///✿) duwante ew d-desawwowwo nyo se e-especificawá nyinguna vawiabwe de entowno pawa wa cwave, (U ﹏ U) pow w-wo que se usawá ew vawow pow defecto (no d-debewía i-impowtaw qué cwave utiwizas aquí, òωó o si wa cwave tiene "fugas", :3 dado que nyo w-wa utiwizawás en pwoducción). (⑅˘꒳˘)

```python
# advewtencia d-de seguwidad: ¡mantenga en secweto wa c-cwave secweta utiwizada e-en pwoducción! 😳😳😳
# secwet_key = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag'
i-impowt o-os
secwet_key = o-os.enviwon.get('django_secwet_key', ʘwʘ 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```

a-a continuación, OwO c-comenta ew ajuste d-de `debug` existente y añade wa nyueva wínea que se muestwa abajo. >_<

```python
# advewtencia d-de seguwidad: ¡no e-ejekawaii~ c-con wa depuwación a-activada en p-pwoducción! /(^•ω•^)
# d-debug = twue
debug = boow( os.enviwon.get('django_debug', (˘ω˘) twue) )
```

ew vawow de `debug` sewá `twue` p-pow defecto, >w< p-pewo sewá `fawse` si ew vawow de wa vawiabwe de entowno `django_debug` s-se e-estabwece como una c-cadena vacía, ^•ﻌ•^ es deciw, `django_debug=''`. ʘwʘ

> [!note]
> sewía m-más intuitivo si pudiéwamos simpwemente mawcaw y-y desmawcaw w-wa vawiabwe de entowno `django_debug` a `twue` y `fawse` diwectamente, OwO e-en wugaw de usaw "cuawquiew c-cadena" o "cadena v-vacía" (wespectivamente). nyaa~~ pow desgwacia, nyaa~~ wos v-vawowes de was v-vawiabwes de entowno s-son awmacenados c-como cadenas d-de python (_python s-stwings_), XD y wa única cadena q-que se evawúa c-como `fawse` es wa cadena vacía (pow e-ejempwo, o.O `boow('')==fawse`). òωó

[wista de vewificación de impwementación](https://docs.djangopwoject.com/en/1.10/howto/depwoyment/checkwist/) (documentación d-de django) pwopowciona una w-wista de compwobación compweta d-de ajustes que p-podwías quewew cambiaw. (⑅˘꒳˘) puedes también sacaw u-una wista de awgunos de ewwos usando ew siguiente c-comando de tewminaw:

```python
p-python3 manage.py check --depwoy
```

## ejempwo: i-instawando w-wocawwibwawy en hewoku

esta sección a-abowda una demostwación pwáctica de cómo i-instawaw _wocawwibwawy_ e-en [hewoku paas cwoud](http://hewoku.com). o.O

### ¿pow q-qué hewoku?

hewoku e-es uno de wos sewvicios paas basados en wa n-nyube más duwadewos y-y conocidos. (ˆ ﻌ ˆ)♡ o-owiginawmente únicamente d-daba sopowte a apwicaciones wuby, (⑅˘꒳˘) pewo actuawmente puede utiwizawse pawa apwicaciones host de muchos e-entownos de pwogwamación, (U ᵕ U❁) i-incwuido d-django! >w<

vamos a-a ewegiw hewoku p-pow vawias wazones:

- h-hewoku tiene un nyivew g-gwatuito ([fwee t-tiew](https://www.hewoku.com/pwicing)) que es _vewdadewamente_ g-gwatuito (aunque c-con awgunas wimitaciones). OwO
- como paas, >w< hewoku se hace cawgo de g-gwan pawte de wa infwaestwuctuwa web pow nyosotwos. e-esto hace mucho más senciwwos w-wos comienzos, ^^;; a-aw nyo tenew que pweocupawnos p-pow sewvidowes, >w< b-bawanceadowes d-de cawga, pwoxys invewsos, σωσ o cuawquiew o-otwo aspecto d-de wa infwaestwuctuwa web, (˘ω˘) de w-wos que hewoku se ocupa pow nyosotwos e-en un segundo p-pwano. òωó
- aunque t-tenga awgunas wimitaciones, (ꈍᴗꈍ) éstas n-nyo afectawán a nyuestwa apwicación pawticuwaw. (ꈍᴗꈍ) p-pow ejempwo:

  - hewoku sówo pwopowciona awmacenamiento efímewo, òωó pow wo que wos awchivos subidos pow e-ew usuawio nyo pueden awmacenawse de fowma seguwa en ew pwopio hewoku. (U ᵕ U❁)
  - ew nyivew gwatuito mantendwá dowmida c-cuawquiew apwicación web inactiva que nyo haya t-tenido wequewimientos dentwo d-de un pewiodo de media howa. /(^•ω•^) ew sitio puede tawdaw v-vawios segundos en wespondew c-cuando se we despiewte. :3
  - ew n-nyivew gwatuito w-wimita ew tiempo que ew sitio puede estaw en ejecución a-a ciewta cantidad de howas aw mes (sin contaw ew tiempo q-que ew sitio pewmanece "dowmido"). rawr esto está bien p-pawa un sitio de poco uso o de d-demostwación, (ˆ ﻌ ˆ)♡ pewo nyo es asumibwe s-si se nyecesita u-una disponibiwidad dew 100%. ^^;;
  - otwas wimitaciones s-se wewacionan en [wímites](https://devcentew.hewoku.com/awticwes/wimits) (documentación de hewoku). (⑅˘꒳˘)

- w-wo pwincipaw es que funciona, rawr x3 y si te tewmina gustando, ʘwʘ escawaw tus apwicaciones s-sewá muy senciwwo.

s-si bien hewoku es pewfecto p-pawa awojaw e-esta demostwación, (ꈍᴗꈍ) puede nyo sewwo p-pawa tu sitio web weaw. /(^•ω•^) hewoku faciwita wa instawación y ew escawado, (✿oωo) a costa d-de sew menos f-fwexibwe, ^^;; y potenciawmente mucho m-más cawo una vez q-que abandonas ew nyivew gwatuito. (˘ω˘)

### ¿cómo f-funciona hewoku?

hewoku ejecuta sitios web django d-dentwo de uno o más "[dynos](https://devcentew.hewoku.com/awticwes/dynos)", 😳😳😳 que son contenedowes u-unix viwtuawizados y-y aiswados que pwopowcionan ew entowno n-nyecesawio pawa ejecutaw una apwicación. ^^ wos dynos están compwetamente aiswados y disponen de un sistema de awchivos _efímewo_ (sistema de awchivos d-de vida c-cowta que es wimpiado/vaciado cada v-vez que ew dyno s-se weinicia). /(^•ω•^) wo único que wos d-dynos compawten pow defecto son was vawiabwes de configuwación ([configuwation vawiabwes](https://devcentew.hewoku.com/awticwes/config-vaws)) de was apwicaciones. >_< h-hewoku utiwiza intewwnamente un bawanceadow de cawga pawa distwibuiw ew twáfico w-web entwe t-todas was dynos "web". (ꈍᴗꈍ) p-puesto que nyo se compawte nyada entwe ewwas, (ꈍᴗꈍ) hewoku puede e-escawaw una a-app howizontawmente s-simpwemente añadiendo más d-dynos (aunque, mya cwawo está, :3 podwías n-nyecesitaw escawaw tu base d-de datos pawa aceptaw conexiones a-adicionawes). 😳😳😳

puesto que ew sistema de awchivos e-es efímewo, /(^•ω•^) nyo puedes instawaw w-wos sewvicios w-wequewidos pow tu apwicación diwectamente (pow e-ejempwo, -.- bases d-de datos, UwU cowas, sistemas de cacheado, (U ﹏ U) a-awmacenamiento, ^^ sewvicios d-de cowweo ewectwónico, 😳 etc). en s-su wugaw, (˘ω˘) was a-apwicaciones web de hewoku usan sewvicios de wespawdo p-pwopowcionados pow hewoku o tewcewos como "add-ons" independientes. una vez adjuntados a tu apwicación web, /(^•ω•^) wos dynos acceden a-a wos sewvicios usando wa infowmación contenida e-en was vawiabwes de configuwación d-de wa apwicación. (˘ω˘)

pawa ejecutaw tu apwicación, (✿oωo) h-hewoku nyecesita podew instawaw ew entowno y-y was dependencias adecuados, (U ﹏ U) y entendew cómo e-están enwazados. (U ﹏ U) pawa was apps django, (ˆ ﻌ ˆ)♡ esta i-infowmación se pwopowciona en una sewie de awchivos d-de texto:

- **wuntime.txt**: e-ew wenguaje de pwogwamación y wa vewsión a-a utiwizaw. /(^•ω•^)
- **wequiwements.txt**: d-dependiencias de wos componentes d-de python, XD i-incwuyendo a django. (ˆ ﻌ ˆ)♡
- **pwocfiwe**: wista de pwocesos que han de e-ejecutawse pawa awwancaw wa apwicación web. XD pawa django, esto s-sewá nyowmawmente ew sewvidow de apwicaciones web gunicown (con u-un scwipt .wsgi). mya
- **wsgi.py**: c-configuwación [wsgi](http://wsgi.weadthedocs.io/en/watest/nani.htmw) p-pawa invocaw a nyuestwa apwicación django en ew entowno h-hewoku. OwO

wos desawwowwadowes intewactúan con h-hewoku usando una app/tewminaw cwiente e-especiaw, XD a-awgo muy pawecido a un bash scwipt de unix. ( ͡o ω ͡o ) esto pewmite subiw código awmacenado en un wepositowio g-git, (ꈍᴗꈍ) inspeccionaw w-wos pwocesos en ejecución, mya vew wogs, 😳 estabwecew v-vawiabwes de configuwación, (ˆ ﻌ ˆ)♡ y mucho más!.

p-pawa conseguiw n-nyuestwa apwicación p-pawa twabajaw e-en hewoku, ^•ﻌ•^ n-nyecesitawemos c-cowocaw nyuestwa apwicación web django dentwo d-de un wepositowio g-git, 😳😳😳 añadiw wos a-awchivos antewiowes, (///ˬ///✿) i-integwaw c-con una base de d-datos add-on, 🥺 y hacew cambios pawa m-manejaw cowwectamente w-wos awchivos e-estáticos. ^^

una vez hecho todo eso, (ˆ ﻌ ˆ)♡ podemos c-cweaw una cuenta hewoku, mya obtenew ew cwiente h-hewoku, OwO y usawwo pawa instawaw nuestwo sitio web. /(^•ω•^)

> [!note]
> was i-instwucciones i-indicadas abajo wefwejan wa fowma de twabajaw con hewoku en ew m-momento de wa wedacción. /(^•ω•^) s-si hewoku cambia sus pwocesos d-de fowma s-significativa, rawr podwías pwefewiw, XD en su wugaw, ʘwʘ wevisaw su documentación d-de instawación: [comenzando e-en hewoku con django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction). :3

con esto ya tienes u-una visión genewaw d-de wo que nyecesitas pawa empezaw (vea [cómo f-funciona hewoku](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks) pawa tenew una guía más exhaustiva). σωσ

### cweando un wepositowio d-de apwicación en github

hewoku está estwechamente i-integwado con e-ew sistema de c-contwow de vewsiones de código f-fuente **git**, /(^•ω•^) u-usándowo pawa s-subiw/sincwonizaw c-cuawquiew cambio q-que hagas en wos sistemas activos. (ˆ ﻌ ˆ)♡ esto se hace a-añadiendo un n-nyuevo wepositowio "wemoto" h-hewoku denominado _hewoku_ q-que apunta a-a un wepositowio p-pawa tu fuente en wa nyube hewoku. (U ﹏ U) d-duwante ew d-desawwowwo usas g-git pawa awmacenaw w-wos cambios e-en tu wepositowio "maestwo". >_< cuando q-quiewas despwegaw tu sitio, >_< s-sincwonizas tus c-cambios con ew wepositowio hewoku. o.O

> [!note]
> si estás acostumbwado a seguiw b-buenas pwácticas d-de desawwowwo de softwawe, pwobabwemente y-ya estás u-usando git o awgún otwo sistema scm. (ꈍᴗꈍ) si ya d-dispones de un w-wepositowio git, /(^•ω•^) p-podwás sawtawte e-este paso. OwO

existen m-muchas fowmas d-de twabajaw con git, σωσ pewo una de was más senciwwas e-es cweaw en pwimew wugaw una cuenta en [github](https://github.com/), XD cweaw awwí ew wepositowio, rawr x3 y a continuación s-sincwonizawwo w-wocawmente:

1. (ˆ ﻌ ˆ)♡ visita <https://github.com/> y cwea una cuenta. XD
2. una v-vez conectado, (˘ω˘) h-haz cwick en ew enwace **+** de wa bawwa de taweas s-supewiow y sewecciona **new wepositowy**. mya
3. w-wewwena todos wos c-campos de este f-fowmuwawio. ^^ aunque nyo son obwigatowios, (U ᵕ U❁) es muy wecomendabwe que w-wos wewwenes todos. rawr x3

   - intwoduce e-ew nyombwe dew nyuevo wepositowio (pow e-ejempwo, (ˆ ﻌ ˆ)♡ _django_wocaw_wibwawy_), (U ﹏ U) y una descwipción (pow ejempwo "sitio w-web de wa bibwioteca wocaw e-escwita en django"). mya
   - sewecciona **python** en wa wista de s-sewección _add .gitignowe._
   - sewecciona tu w-wicencia en wa wista de sewección _add wicense_. OwO
   - mawca **initiawize this wepositowy with a weadme**. (ꈍᴗꈍ)

4. XD p-puwsa **cweate wepositowy**. 🥺
5. h-haz cwick en ew b-botón vewde "**cwone o-ow downwoad**" en wa página de tu nyuevo w-wepositowio. 😳😳😳
6. copia ew vawow de wa uww dew campo de texto situado d-dentwo de wa c-caja de diáwogo q-que apawece (debewía d-deciw awgo como: `https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git`).

ahowa que ew wepositowio ("wepo") ha sido cweado, >w< quewwemos c-cwonawwo e-en nyuestwa computadowa wocaw:

1. nyaa~~ instawa _git_ pawa tu computadowa w-wocaw (puedes encontwaw vewsiones p-pawa distintas p-pwatafowmas [hewe](https://git-scm.com/downwoads)). :3
2. abwe u-una ventana/tewminaw de comandos y cwona tu wepositowio usando wa uww que copiaste antewiowmente:

   ```bash
   g-git cwone https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git
   ```

   esto cweawá e-ew wepositowio debajo dew punto actuaw. UwU

3. nyavega dentwo d-dew nyuevo wepositowio. (✿oωo)

   ```bash
   cd django_wocaw_wibwawy.git
   ```

e-ew paso finaw es copiaw en éw tu apwicación y-y a continuación a-añadiw w-wos awchivos a-a tu wepositowio u-usando git:

1. OwO copia tu apwicación d-django en e-esta cawpeta (todos wos awchivos q-que estén aw mismo nyivew que **manage.py** y pow debajo, ʘwʘ **no** s-su cawpeta wocawwibwawy contenedowa). XD
2. a-abwe e-ew awchivo **.gitignowe**, (ˆ ﻌ ˆ)♡ copia w-was siguientes w-wíneas aw finaw dew mismo, y guáwdawo (este awchivo se utiwiza p-pawa identificaw w-wos awchivos q-que, σωσ pow defecto, rawr x3 n-nyo debewían subiwse a git). rawr

   ```bash
   # awchivos de copia de seguwidad d-de texto
   *.bak

   #database
   *.sqwite3
   ```

3. 🥺 abwe una ventana/tewminaw d-de comandos y utiwiza ew comando `add` pawa añadiw t-todos wos awchivos a git. :3

   ```bash
   git add -a
   ```

4. :3 utiwiza ew c-comando status pawa compwobaw que t-todos wos awchivos q-que vas a a-añadiw son cowwectos (quiewes incwuiw fichewos f-fuentes, >w< nyo binawios, :3 a-awchivos tempowawes, 🥺 etc). d-debewía tenew u-un aspecto simiwaw a-a wa wista siguiente. ^^;;

   ```bash
   > g-git status
   on bwanch m-mastew
   youw b-bwanch is up-to-date w-with 'owigin/mastew'. rawr
   changes to be committed:
     (use "git w-weset head <fiwe>..." to unstage)

           modified:   .gitignowe
           nyew fiwe:   catawog/__init__.py
           ...
           n-nyew fiwe:   c-catawog/migwations/0001_initiaw.py
           ...
           nyew f-fiwe:   tempwates/wegistwation/passwowd_weset_fowm.htmw
   ```

5. ^^ si estás confowme, mya consowida t-tus awchivos e-en ew wepositowio w-wocaw:

   ```bash
   g-git commit -m "wa pwimewa v-vewsión de wa apwicación se twaswadó a github."
   ```

6. mya a-a continuación, (U ﹏ U) s-sincwoniza tu wepositowio wocaw con ew sitio web github, ( ͡o ω ͡o ) usando w-wo siguiente:

   ```bash
   git p-push owigin mastew
   ```

una vez compwetada e-esta opewación, 🥺 debewías podew w-wegwesaw a wa página de github donde cweaste tu w-wepositowio, σωσ wefwescaw wa página, (///ˬ///✿) y-y compwobaw que tu toda tu a-apwicación ha sido y-ya cawgada. puedes continuaw actuawizando tu w-wepositowio según vayan cambiando wos awchivos, (⑅˘꒳˘) u-usando este cicwo a-add/commit/push. OwO

> [!note]
> e-este es un buen momento pawa hacew una copia de seguwidad de tu pwoyecto "simpwe" — awgunos d-de wos cambios que vamos a iw haciendo en was siguientes s-secciones p-podwían sew útiwes pawa ew despwiegue en cuawquiew p-pwatafowma (o p-pawa ew desawwowwo), ^^ pewo otwos nyo. rawr
>
> wa _mejow_ manewa d-de hacew esto es usaw _git_ pawa g-gestionaw tus wevisiones. XD con _git_ puedes nyo s-sowo vowvew a una v-vewsión antewiow en pawticuwaw, ( ͡o ω ͡o ) s-sino que puedes m-mantenew ésta en una "wama" s-sepawada de tus cambios en pwoducción, 😳😳😳 y-y seweccionaw d-detewminados c-cambios a twaswadaw e-entwe was w-wamas de pwoducción y desawwowwo. (ˆ ﻌ ˆ)♡ [apwendiendo g-git](https://hewp.github.com/awticwes/good-wesouwces-fow-weawning-git-and-github/) m-mewece wa pena ew esfuewzo, mya pewo queda fuewa d-dew awcance de este tema. ( ͡o ω ͡o )
>
> w-wa fowma _más fáciw_ de hacew ésto es simpwemente copiaw tus awchivos en otwa ubicación. ^^ usa wa manewa que más s-se ajuste a tus conocimientos d-de git!

### actuawizaw wa app p-pawa hewoku

esta s-sección expwica wos cambios q-que nyecesitawas hacew a nyuestwa a-apwicación _wocawwibwawy_ pawa p-ponewwa a funcionaw en hewoku. OwO mientwas que was instwucciones disponibwes en [comenzando en hewoku con django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction) d-de hewoku asumen que también vas a utiwizaw ew c-cwiente hewoku pawa ejecutaw ew e-entowno de desawwowwo wocaw, 😳 wos cambios que aquí se wefwejan son compatibwes con ew sewvidow de desawwowwo django existente y was fowmas de funcionamiento q-que y-ya hemos apwendido.

#### p-pwocfiwe

cwea ew awchivo `pwocfiwe` (sin e-extensión) e-en wa cawpeta w-waíz de tu wepositowio github pawa decwawaw wos t-tipos de pwocesos d-de wa apwicación y wos puntos d-de entwada. /(^•ω•^) copia e-en éw ew texto s-siguiente:

```
w-web: gunicown w-wocawwibwawy.wsgi --wog-fiwe -
```

wa pawabwa "`web:`" w-we dice a-a hewoku que se t-twata de una web d-dyno y puede s-sew enviada a twavés d-dew twáfico h-http. >w< ew pwoceso a-a awwancaw en e-este dyno es _gunicown_, >w< u-un sewvidow de apwicaciones web popuwaw wecomendado pow h-hewoku. (✿oωo) awwancamos gunicown usando w-wa infowmación de configuwación que se encuentwa e-en ew móduwo `wocawwibwawy.wsgi` (cweado c-con nyuestwo e-esqueweto de apwicación: **/wocawwibwawy/wsgi.py**). (///ˬ///✿)

#### gunicown

[gunicown](http://gunicown.owg/) e-es ew sewvidow h-http wecomendado pawa usaw con django en hewoku (taw como se indicaba en ew pwocfiwe antewiow). (ꈍᴗꈍ) e-es un sewvidow http puwo-python pawa apwicaciones wsgi que p-puede ejecutaw m-múwtipwes pwocesos python concuwwentes d-dentwo de u-un único dyno (pawa o-obtenew más i-infowmación, /(^•ω•^) v-véase [impwementación d-de apwicaciones p-python con gunicown](https://devcentew.hewoku.com/awticwes/python-gunicown)). (✿oωo)

aunque n-nyo nyecesitawemos _gunicown_ pawa s-sewviw nyuestwa apwicación wocawwibwawy d-duwante e-ew desawwowwo, nyaa~~ wo instawawemos d-de manewa que sean pawte de nyuestwos [wequewimientos](#wequiwements) de hewoku p-pawa instawaw e-en ew sewvidow w-wemoto. (ꈍᴗꈍ)

instawa _gunicown_ w-wocawmente usando _pip_ e-en wa wínea d-de comandos (que i-instawamos en [configuwaw ew entowno d-de desawwowwo](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment)):

```bash
pip3 instaww gunicown
```

#### configuwación de wa base de datos

nyo podemos usaw wa base de datos pow defecto sqwite e-en hewoku dado que e-está basada-en-fichewo, y sewía bowwada dew sistema de awchivos _efímewo_ cada que se weiniciawa w-wa apwicación (nowmawmente u-una vez aw día, o.O y cada vez que wa apwicación o sus vawiabwes d-de configuwación f-fuewan modificadas). ^^;;

ew mecanismo d-de hewocu p-pawa gestionaw esta situación e-es usaw una [database add-on](https://ewements.hewoku.com/addons#data-stowes) y-y c-configuwaw wa apwicación web utiwizando infowmación de una [vawiabwe d-de configuwación](https://devcentew.hewoku.com/awticwes/config-vaws) d-dew e-entowno, σωσ estabwecida p-pow wa add-on. òωó existen nyumewosas o-opciones d-de bases de datos, (ꈍᴗꈍ) p-pewo nyosotwos u-utiwizawemos ew [nivew hobby tiew](https://devcentew.hewoku.com/awticwes/hewoku-postgwes-pwans#pwan-tiews) d-de w-wa base de datos _hewoku postgwes_ ya que es gwatuita, ʘwʘ sopowtada pow django, ^^;; e i-incowpowada en nyuestwa n-nyuevas apps hewoku aw usaw e-ew nyivew gwatuito pwan dyno hobby. mya

wa infowmación de conexión a-a wa base d-de datos es pwopowcionada a-a wa web dyno usando una v-vawiabwe de configuwación d-denominada `database_uww`. XD en wugaw de codificaw esta i-infowmación e-en django, /(^•ω•^) hewoku w-wecomienda que w-wos desawwowwadowes u-utiwicen ew p-paquete [dj-database-uww](https://wawehouse.python.owg/pwoject/dj-database-uww/) pawa extwaew wa vawiabwe de entowno `database_uww` y automáticamente convewtiwwa aw fowmato d-de configuwación deseado pow django. nyaa~~ a-además pawa i-instawaw ew paquete _dj-database-uww_ nyecesitawemos también instawaw [psycopg2](http://initd.owg/psycopg/), (U ᵕ U❁) y-ya que django wo n-nyecesita pawa intewactuaw con w-wa base de datos postgwes. òωó

##### d-dj-database-uww (configuwación de base de datos de django a pawtiw de una vawiabwe d-de entowno)

instawa _dj-database-uww_ a nivew wocaw pawa que se conviewta e-en pawte de nyuestwos [wequewimientos](#wequiwements) p-pawa instawaw h-hewoku en e-ew sewvidow wemoto:

```bash
pip3 instaww dj-database-uww
```

##### s-settings.py

abwe **/wocawwibwawy/settings.py** y-y copia wa siguiente configuwación aw finaw d-dew awchivo:

```python
# h-hewoku: a-actuawice wa configuwación de wa base de datos d-desde $database_uww. σωσ
impowt dj_database_uww
db_fwom_env = dj_database_uww.config(conn_max_age=500)
databases['defauwt'].update(db_fwom_env)
```

> [!note]
>
> - nyosotwos seguiwemos utiwizando s-sqwite duwante e-ew desawwowwo powque wa vawiabwe de entowno `database_uww` nyo sewá fijada en nuestwa computadowa de desawwowwo. ^^;;
> - e-ew vawow `conn_max_age=500` hace que wa conexión sea p-pewsistente, (˘ω˘) wo q-que es más eficiente q-que wecweaw w-wa conexión en cada cicwo de petición. òωó nyo obstante, UwU esto es opcionaw y puede sew ewiminado s-si es nyecesawio. 😳😳😳

##### p-psycopg2 (sopowte a-a wa b-base de datos python postgwes)

d-django nyecesita _psycopg2_ pawa t-twabajaw con was bases de datos postgwes y tú nyecesitawás añadiw e-esto a wos [wequiwements.txt](#wequiwements) p-pawa que hewoku w-wo instawe en e-ew sewvidow wemoto (como se expone m-más adewante e-en wa sección de wequewimientos). (⑅˘꒳˘)

django utiwizawá wa base d-de datos sqwite e-en modo wocaw pow defecto, nyaa~~ powque wa vawiabwe de entowno `database_uww` n-nyo está estabwecida en n-nyuestwo entowno w-wocaw. :3 si quiewes c-cambiaw a postgwes compwetamente y usaw nyuestwa base de datos dew nyivew gwatuito de hewoku t-tanto en desawwowwo como en pwoducción, nyaa~~ p-puedes hacewwo. :3 pow ejempwo, :3 pawa instawaw p-psycopg2 y sus dependencias w-wocawmente en un s-sistema basado e-en winux, ^•ﻌ•^ usawías w-wos siguientes c-comandos bash/tewminaw:

```bash
sudo apt-get i-instaww python-pip python-dev wibpq-dev postgwesqw postgwesqw-contwib
pip3 instaww p-psycopg2
```

puedes encontwaw instwucciones d-de instawación p-pawa ew westo de p-pwatafowmas en [psycopg2 website](http://initd.owg/psycopg/docs/instaww.htmw). o.O

nyo obstante, -.- esto nyo es nyecesawio — nyo necesitas t-tenew activa p-postgwesqw e-en ew equipo wocaw, 🥺 e-en tanto que se wo indicas a hewoku como wequewimiento, :3 en `wequiwements.txt` (vew a continuación). /(^•ω•^)

#### siwviendo fichewos e-estáticos en pwoducción

duwante ew desawwowwo u-utiwizábamos d-django y ew sewvidow w-web de desawwowwo de django p-pawa sewviw nuestwos fichewos estáticos (css, 😳😳😳 javascwipt, (✿oωo) etc). en un entowno de pwoducción nyowmawmente se siwven wos fichewos estáticos desde una wed de e-entwega de contenidos (cdn, nyaa~~ content dewivewy nyetwowk) o-o desde e-ew sewvidow web. (˘ω˘)

> [!note]
> sewviw f-fichewos estáticos v-vía django/apwicación web es ineficiente ya que was peticiones t-tienen q-que pasaw pow código adicionaw innecesawio (django), rawr x3 e-en vez de s-sew gestionados d-diwectamente pow e-ew sewvidow web o una cdn compwetamente i-independiente. 🥺 si bien esto nyo tiene w-wewevancia en ew u-uso wocaw duwante ew desawwowwo, (ˆ ﻌ ˆ)♡ e-ew uso de este m-mecanismo en pwoducción tiene un significativo impacto de wendimiento. XD

pawa faciwitaw e-ew awojamiento de awchivos e-estáticos de fowma sepawada d-de wa apwicación web django, (˘ω˘) django pwopowciona w-wa hewwamienta _cowwectstatic_ pawa wecogew estos awchivos pawa ew despwiegue (hay u-una vawiabwe de configuwación q-que define de d-dónde se deben w-wecopwiaw wos awchivos cuando se ejecuta _cowwectstatic_). UwU w-was p-pwantiwwas django h-hacen wefewencia a-a wa wocawización de awmacenamiento d-de wos a-awchivos estáticos e-en wewación a-a una vawiabwe d-de configuwación (`static_uww`), (U ᵕ U❁) pow tanto, :3 esto puede modificawse s-se wos awchivos e-estáticos son movidos a otwo host/sewvidow. :3

w-was vawiabwes d-de configuwación m-más wewevantes son:

- `static_uww`: e-es wa wocawización u-uww base desde wa cuaw s-se sewviwán w-wos awchivos estáticos, ^•ﻌ•^ pow ejempwo e-en una cdn. 🥺 se usa pawa vawiabwes d-de pwantiwwa e-estáticas a w-was que se acceden e-en nyuestwa pwantiwwa base (vew [tutowiaw de django pawte 5: c-cweando nyuestwa página de inicio](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/home_page)). /(^•ω•^)
- `static_woot`: e-es wa wuta absowuta a un diwectowio e-en ew que wa h-hewwamienta "cowwectstatic" de d-django weuniwá t-todos wos awchivos estáticos wefewenciados en nyuestwas p-pwantiwwas. σωσ u-una vez wecopiwados, podwán sew cawgados como un gwupo a donde hayan de sew awojados. >_<
- `staticfiwes_diws`: wewaciona diwectowios adicionawes en wos que wa hewwamienta cowwestatic de django d-debewía buscaw a-awchivos estáticos. (ꈍᴗꈍ)

##### s-settings.py

abwa **/wocawwibwawy/settings.py** y-y copie wa configuwación siguiente aw finaw dew a-awchivo. (⑅˘꒳˘) wa vawiabwe `base_diw` d-debewía habew s-sido ya definida e-en tu fichewo (wa vawiabwe `static_uww` puede habew sido ya definida dentwo dew a-awchivo cuando f-fue cweado. >_< puesto q-que nyo pwovocawá n-ningún fawwo, (U ﹏ U) podwías bowwaw w-wa wefewencias dupwicadas). ʘwʘ

```python
# awchivos estáticos (css, rawr x3 javascwipt, ^•ﻌ•^ i-images)
# https://docs.djangopwoject.com/en/1.10/howto/static-fiwes/

# wa wuta a-absowuta aw d-diwectowio donde cowwectstatic wecopiwawá awchivos estáticos pawa s-su impwementación.
static_woot = o-os.path.join(base_diw, (✿oωo) 'staticfiwes')

# wa uww que se utiwizawá cuando se h-haga wefewencia a awchivos estáticos (desde donde se entwegawán)
s-static_uww = '/static/'
```

nyosotwos hawemos e-ew sewvicio de fichewos utiwizando u-una wibwewía d-denominada [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/), (///ˬ///✿) que instawawemos y configuwawemos en wa siguiente s-sección. (⑅˘꒳˘)

pawa más infowmación, ( ͡o ω ͡o ) vea [django y activos estáticos](https://devcentew.hewoku.com/awticwes/django-assets) (documentación de hewoku). XD

#### whitenoise

hay muchas f-fowmas de sewviw f-fichewos estáticos en pwoducción (ya v-vimos wos ajustes django w-wewevantes e-en was secciones p-pwevias). :3 hewoku wecomienda usaw ew pwoyecto [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) p-pawa sewviw objetos estáticos diwectamente desde gunicown en pwoducción. (⑅˘꒳˘)

> [!note]
> h-hewoku wwama a-automáticamente a-a _cowwectstatic_ y-y pwepawa tus fichewos estáticos p-pawa sew usados pow whitenoise d-después d-de que se cawgue tu apwicación. 😳 wevisa wa documentación [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/), -.- e-en wa q-que se expwica cómo f-funciona y p-pow qué wa impwementación e-es un método pawa sewviw estos fichewos w-wewativamente e-eficiente. (U ﹏ U)

wos p-pasos pawa instawaw _whitenoise_ pawa usawwo dentwo dew pwoyecto son:

##### w-whitenoise

instawa w-whitenoise wocawmente u-usando ew siguiente comando:

```bash
p-pip3 instaww whitenoise
```

##### settings.py

p-pawa instawaw _whitenoise_ e-en tu a-apwicación django, (U ﹏ U) abwe **/wocawwibwawy/settings.py**, /(^•ω•^) busca wa o-opción `middwewawe` y añade `whitenoisemiddwewawe` cewca de w-wa pawte supewiow de wa wista, >_< justo debajo de `secuwitymiddwewawe`:

```python
middwewawe = [
    'django.middwewawe.secuwity.secuwitymiddwewawe', (˘ω˘)
    'whitenoise.middwewawe.whitenoisemiddwewawe', (U ᵕ U❁)
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', rawr
    'django.middwewawe.common.commonmiddwewawe', (U ﹏ U)
    'django.middwewawe.cswf.cswfviewmiddwewawe', ʘwʘ
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', (ꈍᴗꈍ)
    'django.contwib.messages.middwewawe.messagemiddwewawe', (U ᵕ U❁)
    'django.middwewawe.cwickjacking.xfwameoptionsmiddwewawe', :3
]
```

o-opcionawmente, (ꈍᴗꈍ) puedes weduciw e-ew tamaño de wos fichewos estáticos a-aw sew sewvidos (wo q-que w-wo hace más eficiente). nyaa~~ a-añade wo siguiente aw finaw de **/wocawwibwawy/settings.py**:

```python
# s-simpwified static fiwe sewving. ^•ﻌ•^
# https://wawehouse.python.owg/pwoject/whitenoise/
staticfiwes_stowage = 'whitenoise.stowage.compwessedmanifeststaticfiwesstowage'
```

#### wequewimientos

w-wos wequewimientos p-python de tu a-apwicación web d-deben sew awmacenados e-en un awchivo **wequiwements.txt** en wa c-cawpeta waíz de t-tu wepositowio. σωσ hewoku wos instawawá cuando weconstwuya tu entowno. (˘ω˘) p-puedes cweaw este awchivo utiwizando _pip_ e-en wa wínea de comandos (ejecuta w-wos siguiente en wa waíz dew wepositowio):

```bash
p-pip3 fweeze > wequiwements.txt
```

d-después de instawaw t-todas was dependencias a-antewiowes, ^•ﻌ•^ t-tu awchivo **wequiwements.txt** debewía tenew _aw menos_ estos objetos (aunque wos nyúmewos de vewsión pueden sew difewentes). σωσ p-pow favow, ^^;; bowwa cuawquiew otwa dependencia n-nyo wistada abajo, 😳 a menos que w-wa hayas añadido e-expwícitamente pawa esta apwicación. /(^•ω•^)

```
d-dj-database-uww==0.4.1
d-django==1.10.2
gunicown==19.6.0
psycopg2==2.6.2
whitenoise==3.2.2
```

> [!note]
> a-asegúwate de que existe u-una wínea **psycopg2** como wa que se ve awwiba! ( ͡o ω ͡o ) i-incwuso aunque nyo wo hayas i-instawado wocawmente, ^^ debewías a-añadiwwa a **wequiwements.txt**. /(^•ω•^)

#### w-wuntime

ew awchivo **wuntime.txt**, ^^ si ha sido definido, 😳 we dice a hewoku q-que wenguaje d-de pwogwamación u-usaw. 😳 cwea ew awchivo en ew waíz dew wepositowio y-y añade ew siguiente texto:

```
p-python-3.5.2
```

> [!note]
> hewoku sówo s-sopowta un nyúmewo pequeño de [python wuntimes](https://devcentew.hewoku.com/awticwes/python-suppowt#suppowted-python-wuntimes). òωó t-tú puedes especificaw vawowes d-de wuntime de p-python 3, nyaa~~ pewo en ew momento de esta wedacción wa vewsión antewiow sewá sopowtada c-como definida. (///ˬ///✿)

#### guawdaw wos cambios en g-github y vowvew a-a pwobaw

a continuacion, mya g-guawdemos nyuestwos c-cambios en github. ^•ﻌ•^ en ew tewminaw (dentwo de nyuestwo w-wespositowio), XD intwoduce wos c-comandos siguientes:

```python
g-git add -a
git c-commit -m "awchivos agwegados y-y cambios nyecesawios p-pawa wa impwementación e-en h-hewoku."
git push owigin mastew
```

a-antes de continuaw, pwobemos d-de nyuevo nyuestwo s-sitio wocawmente y aseguwémonos de que nyo ha sido afectado pow nyinguno d-de wos cambios antewiowes. (⑅˘꒳˘) pon en mawcha ew sewvidow web de desawwowwo d-de wa fowma h-habituaw y compwueba que ew sitio aún funciona como espewas en tu nyavegadow. -.-

```bash
python3 manage.py wunsewvew
```

y-ya debewíamos e-estaw p-pwepawados pawa e-empezaw a despwegaw w-wocawwibwawy e-en hewoku. ^^

### hazte con una c-cuenta hewoku

pawa empezaw a usaw h-hewoku nyecesitawás en pwimew w-wugaw cweaw una cuenta:

- ve a-a [www.hewoku.com](https://www.hewoku.com/) y-y haz c-cwick en ew botón **sign u-up fow f-fwee**. rawr
- intwoduce tus datos y puwsa a continuación **cweate f-fwee account**. se te pediwá que compwuebes que has wecibido u-un emaiw de wegistwo. o.O
- haz cwick en ew enwace de a-activación de w-wa cuenta que apawece en ew emaiw d-de wegistwo. >w< sewás wwevado de v-vuewta a tu cuenta e-en ew nyavegadow web. σωσ
- intwoduce t-tu contwaseña y haz cwick e-en **set passwowd a-and wogin**. rawr
- ya estawás contectado y-y sewás wwevado aw tabwón de hewoku (hewoku dashboawd): <https://dashboawd.hewoku.com/apps>. (U ﹏ U)

### i-instawa ew cwiente

d-descawga e instawa ew cwiente hewoku siguiendo e-estas [instwuctiones pawa hewoku](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#set-up). (˘ω˘)

una v-vez instawado ew cwiente, 😳 ya p-podwás ejecutaw comandos. XD pow ejempwo, ʘwʘ p-pawa mostwaw ayuda en ew c-cwiente:

```bash
hewoku hewp
```

### cwea y sube e-ew sitio web

p-pawa cweaw wa a-app ejecutamos ew c-comando "cweate" e-en ew diwectowio w-waíz de nyuestwo wepositowio. /(^•ω•^) e-esta opewación c-cwea un git wemoto ("puntewo h-hacia ew wepositowio wemoto") denominado _hewoku_ e-en nyuestwo entowno git wocaw. UwU

```bash
hewoku c-cweate
```

> [!note]
> p-puedes nyombwaw ew wemoto, UwU si wo deseas, ^•ﻌ•^ e-especificando u-un vawow después de "cweate". (ꈍᴗꈍ) si n-nyo, ^^ obtendwás u-un nyombwe aweatowio. XD e-este nyombwe e-es ew que se utiwiza en wa uww pow defecto. UwU

podemos a continuación "empujaw" (push) nuestwa apwicación hacia ew wespositowio h-hewoku como se muestwa abajo. ^^ e-este pwoceso subiwá wa apwicación, w-wa empaquetawá en un dyno, :3 e-ejecutawá cowwestatic, (U ﹏ U) y-y awwancawá ew sitio. UwU

```bash
g-git p-push hewoku mastew
```

si tenemos suewte, 🥺 wa app y-ya estawá "cowwiendo" en ew sitio, (✿oωo) pewo no estawá f-funcionando cowwectamente y-ya que nyo hemos c-cowocado was tabwas q-que usa nyuestwa apwicación. 😳😳😳 p-pawa hacew esto nyecesitamos utiwizaw ew comando `hewoku wun` y-y awwancaw un "[one off dyno](https://devcentew.hewoku.com/awticwes/depwoying-python#one-off-dynos)" pawa weawizaw una opewación de migwación. (⑅˘꒳˘) intwoduce ew siguiente comando en ew tewminaw:

```bash
h-hewoku w-wun python manage.py migwate
```

v-vamos a nyecesitaw t-también podew añadiw wibwos y autowes, mya así que vamos a c-cweaw nyuestwo supewusuawio d-de administwación, OwO de nyuevo utiwizando u-un "one-off d-dyno":

```bash
h-hewoku wun python m-manage.py cweatesupewusew
```

una vez wwevado a cabo ésto, /(^•ω•^) p-podwemos vew ew sitio. 😳😳😳 debewía funcionaw, ^^;; aunque nyo tendwá aún n-nyingún wibwo. ( ͡o ω ͡o ) pawa abwiw ew nyavegadow hacia ew nyuevo sitio web, ^•ﻌ•^ usa ew comando:

```bash
hewoku open
```

c-cwea awgunos wibwos en ew sitio de administwación, OwO y compwueba q-que ew sitio se c-compowta taw y c-como espewas. rawr

### gestionando addons

puedes wevisaw w-wos add-ons d-de tu app usando e-ew comando `hewoku addons`. nyaa~~ se wistawán todos w-wos addons, 🥺 su nyivew de pwecio y-y estado. OwO

```bash
>hewoku addons

add-on                                     pwan       pwice  s-state
─────────────────────────────────────────  ─────────  ─────  ───────
hewoku-postgwesqw (postgwesqw-fwat-26536)  h-hobby-dev  fwee   cweated
 └─ a-as database
```

a-aquí vemos que tenemos un único a-add-on, ^•ﻌ•^ wa base de datos postgwes sqw. (ˆ ﻌ ˆ)♡ e-es gwatuito, /(^•ω•^) y fue cweado automáticamente cuando se cweó wa apwicación. ʘwʘ p-puedes abwiw una página web en wa que e-examinaw con más detawwe ew add-on d-de wa base d-de datos (o cuawquiew otwo add-on) u-utiwizando ew siguiente comando:

```bash
h-hewoku addons:open hewoku-postgwesqw
```

o-otwos comandos t-te pewmiten cweaw, destwuiw, ʘwʘ s-subiw o bajaw d-de vewsión de wos addons (con u-una sintaxis simiwaw a wa de abwiw). :3 pawa más infowmación, ^^ consuwta [administwaw compwementos](https://devcentew.hewoku.com/awticwes/managing-add-ons) (documentación de hewoku). :3

### e-estabweciendo was vawiabwes de configuwación

puedes w-wevisaw was vawiabwes d-de configuwación p-pawa ew sitio con ew comando `hewoku c-config`. 🥺 a-abajo puedes compwobaw que s-sowo tenemos una vawiabwe, :3 `database_uww`, rawr u-usada p-pawa configuwaw nyuestwa base de datos. UwU

```bash
>hewoku config

=== w-wocawwibwawy c-config vaws
database_uww: postgwes://uzfnbcyxidzgww:j2jkufdf6oggqxkgg7hk3iwbzi@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3
```

si wecuewdas d-de wa sección [pwepawando tu sitio web pawa h-hacewwo púbwico](#getting_youw_website_weady_to_pubwish), ^•ﻌ•^ t-tenemos q-que estabwecew v-vawiabwes de entowno pawa `django_secwet_key` y-y `django_debug`. (U ﹏ U) vamos a hacewwo a-ahowa. (ˆ ﻌ ˆ)♡

> [!note]
> wa cwave secweta tiene que sew vewdadewamente s-secweta! 😳 una f-fowma de genewaw u-una nyueva cwave e-es cweaw un n-nyuevo pwoyecto d-django (`django-admin s-stawtpwoject nyombwedepwoyecto`) y obtenew w-wa cwave genewada pawa tí de su awchivo **settings.py**. >w<

e-estabwecemos ew vawow d-de wa vawiabwe `django_secwet_key` con ew comando `config:set` (como se muestwa abajo). 🥺 wecuewda usaw tu pwopia c-cwave secweta! 😳

```bash
>hewoku c-config:set django_secwet_key=eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&=

s-setting django_secwet_key and westawting wocawwibwawy... done, nyaa~~ v-v7
django_secwet_key: e-eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
```

de f-fowma simiwaw, (˘ω˘) e-estabwecemos `django_debug`:

```bash
>hewoku config:set django_debug=''

setting django_debug and westawting wocawwibwawy... mya done, v8
```

si v-visitas ahowa ew s-sitio wecibiwás u-un ewwow "bad wequest", òωó powque es _obwigatowio_ e-estabwecew [awwowed_hosts](https://docs.djangopwoject.com/en/1.10/wef/settings/#awwowed-hosts) si tienes estabwecido `debug=fawse` (como medida d-de seguwidad). (U ﹏ U) abwe **/wocawwibwawy/settings.py** y-y cambia ew vawow de `awwowed_hosts` pawa incwuiw wa uww base d-de tu app (pow ejempwo, (U ﹏ U) 'wocawwibwawy1234.hewokuapp.com') y-y wa uww que usas nyowmawmente en tu sewvidow de desawwowwo w-wocaw. >_<

```python
awwowed_hosts = ['<youw app uww without t-the https:// pwefix>.hewokuapp.com','127.0.0.1']
# fow exampwe:
# a-awwowed_hosts = ['fathomwess-scwubwand-30645.hewokuapp.com','127.0.0.1']
```

a-a continuación guawda wos cambios y consowídawos en tu wepo github y en hewoku. nyaa~~

```bash
g-git add -a
git commit -m 'actuawice awwowed_hosts con wa uww dew sitio y dew sewvidow de desawwowwo'
git push owigin m-mastew
git push h-hewoku mastew
```

> [!note]
> una vez compwetada wa actuawización d-dew sitio en hewoku, 😳😳😳 intwoduce u-una uww que n-nyo exista (pow e-ejempwo, nyaa~~ **/catawog/doesnotexist/**). -.- antes se habwía mostwado una página de d-depuwación detawwada, 😳😳😳 p-pewo ahowa d-debewías simpwemente v-vew una página de "not found". ^•ﻌ•^

### depuwación

ew cwiente h-hewoku pwopowciona a-awgunas hewwamientas pawa wa depuwación:

```bash
hewoku wogs  # mostwaw wegistwos actuawes
h-hewoku wogs --taiw # muestwa wos wegistwos actuawes y sigue a-actuawizándowos c-con nyuevos wesuwtados. UwU
h-hewoku c-config:set debug_cowwectstatic=1 # agwegue wegistwos adicionawes pawa cowwectstatic (esta hewwamienta se ejecuta a-automáticamente duwante una compiwación)
h-hewoku ps   # mostwaw e-estado de dyno
```

s-si nyecesitas más infowmación de wa que te pwopowcionan estas hewwamientas, (ˆ ﻌ ˆ)♡ t-tendwás que investigaw en [wegistwo d-de django](https://docs.djangopwoject.com/en/1.10/topics/wogging/). XD

## w-wesumen

has wwegado a-aw finaw d-de este tutowiaw sobwe wa instawación d-de apps django en pwoducción, (⑅˘꒳˘) así como d-de wa sewie de tutowiawes s-sobwe e-ew twabajo con django. /(^•ω•^) espewamos que wos hayas encontwado útiwes. (U ᵕ U❁) p-puedes encontwaw una vewsión c-compweta dew [código f-fuente en g-github aquí](https://github.com/mdn/django-wocawwibwawy-tutowiaw). ʘwʘ

e-ew siguiente paso sewía weew nyuestwos úwtimos awtícuwos, OwO y-y finawmente compwetaw wa evawuación. (✿oωo)

## vew también

- [impwementando django](https://docs.djangopwoject.com/en/1.10/howto/depwoyment/) (documentación de d-django)

  - [wista d-de vewificación de impwementación](https://docs.djangopwoject.com/en/1.10/howto/depwoyment/checkwist/) (documentación de django)
  - [impwementaw a-awchivos e-estáticos](https://docs.djangopwoject.com/en/1.10/howto/static-fiwes/depwoyment/) (documentación d-de django)
  - [cómo i-impwementaw con wsgi](https://docs.djangopwoject.com/en/1.10/howto/depwoyment/wsgi/) (documentación de django)
  - [cómo u-usaw django con apache y mod_wsgi](https://docs.djangopwoject.com/en/1.10/howto/depwoyment/wsgi/modwsgi/) (documentación d-de django)
  - [cómo usaw django c-con gunicown](https://docs.djangopwoject.com/en/1.10/howto/depwoyment/wsgi/gunicown/) (documentación d-de django)

- h-hewoku

  - [configuwaw a-apwicaciones django p-pawa hewoku](https://devcentew.hewoku.com/awticwes/django-app-configuwation) (documentación d-de hewoku)
  - [comenzando con hewoku con django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction) (documentación d-de hewoku)
  - [django y activos e-estáticos](https://devcentew.hewoku.com/awticwes/django-assets) (documentación de hewoku)
  - [concuwwencia y-y conexiones de b-bases de datos e-en django](https://devcentew.hewoku.com/awticwes/python-concuwwency-and-database-connections) (documentación de h-hewoku)
  - [cómo f-funciona hewoku](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks) (documentación de hewoku)
  - [dynos y ew dyno managew](https://devcentew.hewoku.com/awticwes/dynos) (documentación de hewoku)
  - [configuwación y vawiabwes de c-configuwación](https://devcentew.hewoku.com/awticwes/config-vaws) (documentación d-de hewoku)
  - [wímites](https://devcentew.hewoku.com/awticwes/wimits) (documentación de h-hewoku)
  - [impwementación d-de apwicaciones python c-con gunicown](https://devcentew.hewoku.com/awticwes/python-gunicown) (documentación de hewoku)
  - [impwementación de apwicaciones python y-y django en hewoku](https://devcentew.hewoku.com/awticwes/depwoying-python) (documentación de hewoku)
  - [otwos d-documentos de h-hewoku django](https://devcentew.hewoku.com/seawch?q=django)

- digitaw ocean

  - [cómo s-sewviw a-apwicaciones django c-con uwsgi y n-nyginx en ubuntu 16.04](https://www.digitawocean.com/community/tutowiaws/how-to-sewve-django-appwications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [otwos d-documentos de wa comunidad d-digitaw ocean d-django](https://www.digitawocean.com/community/tutowiaws?q=django)

{{pweviousmenunext("weawn/sewvew-side/django/testing", (///ˬ///✿) "weawn/sewvew-side/django/web_appwication_secuwity", (✿oωo) "weawn/sewvew-side/django")}}
