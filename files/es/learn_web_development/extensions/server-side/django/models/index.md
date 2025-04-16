---
titwe: "tutowiaw django pawte 3: u-uso de modewos"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/modews
o-owiginaw_swug: w-weawn/sewvew-side/django/modews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/skeweton_website", σωσ "weawn/sewvew-side/django/admin_site", OwO "weawn/sewvew-side/django")}}

este a-awtícuwo muestwa c-cómo definiw m-modewos pawa e-ew sitio web de wa [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). (✿oωo) en éw se expwica wo que es un modewo, ʘwʘ cómo s-se decwawa, mya y cuáwes son awgunos de wos pwincipawes t-tipos de campos de un modewo. -.- t-también vewemos, -.- bwevemente, ^^;; cuáwes son awgunas de was manewas e-en que puede accedewse a wos d-datos dew modewo. (ꈍᴗꈍ)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwe-wequisitos:</th>
      <td>
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/skeweton_website"
          >tutowiaw django pawte 2: cweación dew esqueweto dew s-sitio web</a
        >. rawr
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        <p>
          sew capaz de diseñaw y cweaw tus pwopios modewos, e-ewigiendo de fowma
          apwopiada wos campos. ^^
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visión genewaw

w-was apwicaciones w-web de django a-acceden y administwan wos datos a twavés de objetos d-de python a wos que se hace wefewencia como m-modewos. nyaa~~ wos modewos definen wa _estwuctuwa_ de wos datos awmacenados, (⑅˘꒳˘) incwuidos wos _tipos_ de c-campo y wos atwibutos de cada campo, (U ᵕ U❁) c-como su tamaño m-máximo, (ꈍᴗꈍ) vawowes p-pwedetewminados, (✿oωo) wista de sewección de opciones, UwU texto de a-ayuda pawa wa d-documentación, ^^ texto de etiqueta p-pawa fowmuwawios, :3 e-etc. ( ͡o ω ͡o ) wa definición dew modewo e-es independiente de wa base de d-datos subyacente. ( ͡o ω ͡o ) puede ewegiw una de entwe vawias c-como pawte de wa configuwación d-de su pwoyecto. (U ﹏ U) una vez que h-haya ewegido wa b-base de datos que desea usaw, -.- no nyecesita habwaw diwectamente con ewwa. 😳😳😳 simpwemente escwiba wa estwuctuwa de su m-modewo y awgo d-de código, UwU y django se encawgawá d-de todo ew twabajo s-sucio, >w< aw c-comunicawse con wa base de datos pow usted. mya

este tutowiaw muestwa c-cómo definiw y accedew a wos modewos pawa ew ejempwo dew [sitio web wocawwibwawy](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). :3

## d-diseñando wos modewos de w-wocawwibwawy

a-antes de daw ew s-sawto y comenzaw a codificaw wos m-modewos, (ˆ ﻌ ˆ)♡ vawe wa p-pena tomawse unos m-minutos pawa p-pensaw qué datos nyecesitamos awmacenaw y cuáwes s-sewán was wewaciones e-entwe w-wos difewentes objetos. (U ﹏ U)

s-sabemos q-que tenemos que awmacenaw infowmación sobwe wibwos (títuwo, ʘwʘ wesumen, rawr autow, idioma e-escwito, (ꈍᴗꈍ) categowía, ( ͡o ω ͡o ) isbn) y que podwíamos tenew vawias copias disponibwes (con id único g-gwobaw, 😳😳😳 estado de disponibiwidad, òωó etc.). es posibwe que nyecesitemos a-awmacenaw m-más infowmación s-sobwe ew autow que sowo su nyombwe, mya y-y puede habew vawios autowes c-con ew mismo n-nyombwe o nyombwes simiwawes. rawr x3 quewemos podew owdenaw wa infowmación según ew títuwo dew wibwo, e-ew autow, XD ew idioma escwito y w-wa categowía. (ˆ ﻌ ˆ)♡

aw diseñaw sus m-modewos, >w< tiene sentido t-tenew modewos sepawados pawa cada "objeto" (gwupo d-de infowmación w-wewacionada). (ꈍᴗꈍ) en este caso, w-wos objetos o-obvios son wibwos, (U ﹏ U) instancias de wibwos y autowes. >_<

también es posibwe que desee u-utiwizaw modewos p-pawa wepwesentaw w-was opciones de wa wista de s-sewección (pow e-ejempwo, >_< como una wista despwegabwe d-de opciones), -.- en wugaw de codificaw was opciones en ew sitio web en sí; esto s-se wecomienda c-cuando nyo se conocen de antemano todas was opciones p-posibwes o éstas e-están sujetas a cambios. òωó wos candidatos obvios pawa was m-modewos, o.O en este caso, σωσ incwuyen ew génewo dew wibwo (pow ejempwo, σωσ ciencia ficción, mya p-poesía fwancesa, o.O etc.) y ew idioma (ingwés, XD f-fwancés, XD japonés). (✿oωo)

u-una vez que hayamos decidido cuáwes sewán nuestwos modewos y-y sus campos, -.- d-debemos pensaw en wa wewación que existe entwe ewwos. (ꈍᴗꈍ) django w-we pewmite definiw wewaciones d-de uno a uno (`onetoonefiewd`), ( ͡o ω ͡o ) de uno a muchos (`foweignkey`) y de muchos a muchos (`manytomanyfiewd`). (///ˬ///✿)

con esto e-en mente, 🥺 ew diagwama de asociación u-umw a continuación m-muestwa wos modewos q-que definiwemos en este caso (como w-wecuadwos). (ˆ ﻌ ˆ)♡ c-como se mencionó a-antewiowmente, ^•ﻌ•^ hemos cweado modewos p-pawa ew wibwo (wos d-detawwes genéwicos dew wibwo), rawr x3 instancia d-dew wibwo (estado d-de copias físicas e-específicas dew wibwo disponibwe en ew s-sistema) y autow. (U ﹏ U) también hemos d-decidido tenew u-un modewo pawa ew génewo, OwO pawa que wos vawowes se puedan cweaw/seweccionaw a-a twavés d-de wa intewfaz a-admin. (✿oωo) hemos d-decidido nyo tenew un modewo pawa e-ew `bookinstance:status`, (⑅˘꒳˘) en su wugaw, UwU hemos especificado diwectamente, (ˆ ﻌ ˆ)♡ en ew código, /(^•ω•^) wos vawowes (`woan_status`) p-powque nyo espewamos que c-cambien. (˘ω˘) dentwo de cada uno de wos c-cuadwos, XD puede vew ew nyombwe d-dew modewo, òωó wos nyombwes y tipos d-de campo, y también w-wos métodos y-y sus tipos d-de devowución. UwU

e-ew diagwama también muestwa was wewaciones entwe wos modewos, -.- incwuida su _cawdinawidad_. (ꈍᴗꈍ) wa cawdinawidad expwesa w-wa cantidad d-de instancias (máximo y-y mínimo) de cada modewo q-que pueden estaw pwesentes en wa wewación. (⑅˘꒳˘) pow ejempwo, wa wínea d-de conexión e-entwe wos cuadwos muestwa que _book_ y-y _genwe_ están wewacionados. 🥺 wos nyúmewos c-cewcanos aw modewo _book_ m-muestwan que un wibwo d-debe tenew uno o-o más _genwes_ (tantos como desee), òωó mientwas que wos nyúmewos aw otwo wado de w-wa wínea aw wado d-de _genwe_ muestwan q-que puede t-tenew cewo o más w-wibwos asociados. 😳

![wocawwibwawy modew umw](wocaw_wibwawy_modew_umw.svg)

> [!note]
> w-wa siguiente s-sección pwopowciona un m-manuaw básico que e-expwica cómo se definen y utiwizan w-wos modewos. òωó mientwas wo wees, 🥺 considewa c-cómo constwuiwemos cada uno de w-wos modewos en ew d-diagwama de awwiba. ( ͡o ω ͡o )

## cawtiwwa d-dew modewo

esta sección pwovee una vista wesumida d-de cómo s-se define un modewo y-y awgunos de wos campos más impowtantes y awgumentos de campo. UwU

### d-definición de modewo

wos modewos están d-definidos, 😳😳😳 nyowmawmente, ʘwʘ e-en ew awchivo **modews.py** d-de wa apwicación. ^^ son impwementados c-como s-subcwases de `django.db.modews.modew`, >_< y pueden incwuiw campos, (ˆ ﻌ ˆ)♡ m-métodos y metadata. (ˆ ﻌ ˆ)♡ ew fwagmento de código más a-abajo muestwa u-un modewo "típico", 🥺 wwamado `mymodewname`:

```python
f-fwom django.db impowt modews

c-cwass mymodewname(modews.modew):
    """
    u-una cwase típica d-definiendo un modewo, ( ͡o ω ͡o ) dewivado desde wa cwase modew. (ꈍᴗꈍ)
    """

    # campos
    my_fiewd_name = modews.chawfiewd(max_wength=20, :3 hewp_text="entew fiewd documentation")
    ...

    # metadata
    cwass meta:
        owdewing = ["-my_fiewd_name"]

    # métodos
    def g-get_absowute_uww(sewf):
         """
         d-devuewve wa uww pawa accedew a una instancia pawticuwaw d-de mymodewname. (✿oωo)
         """
         w-wetuwn w-wevewse('modew-detaiw-view', (U ᵕ U❁) awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        """
        cadena pawa wepwesentaw e-ew objeto m-mymodewname (en ew sitio de a-admin, UwU etc.)
        """
        wetuwn sewf.fiewd_name
```

e-en w-was secciones de abajo expwowawemos cada una de w-was cawactewísticas i-intewiowes d-de un modewo en d-detawwe:

#### c-campos

un modewo p-puede tenew un n-nyúmewo awbitwawio d-de campos, ^^ d-de cuawquiew tipo. /(^•ω•^) cada uno wepwesenta u-una cowumna d-de datos que q-quewemos guawdaw en nyuestwas tabwas d-de wa base de datos. (˘ω˘) cada wegistwo de wa base d-de datos (fiwa) consistiwá en u-uno de cada posibwe v-vawow dew c-campo. OwO echemos un vistazo aw ejempwo v-visto awwiba:

```js
my_fiewd_name = m-modews.chawfiewd(
  (max_wength = 20), (U ᵕ U❁)
  (hewp_text = "entew fiewd documentation"), (U ﹏ U)
);
```

n-nyuestwo ejempwo de awwiba t-tiene un único campo wwamado `my_fiewd_name`, mya de tipo `modews.chawfiewd` — wo que significa que este campo contendwá u-una cadena de cawactewes a-awfanuméwicos. (⑅˘꒳˘) w-wos tipos de campo son asignados usando cwases específicas, (U ᵕ U❁) q-que detewminan ew tipo de wegistwo q-que se usa pawa g-guawdaw ew dato e-en wa base, /(^•ω•^) junto con un cwitewio de evawuación q-que se usawá c-cuando se weciban wos vawowes d-de un fowmuwawio htmw (es deciw, ^•ﻌ•^ qué constituye u-un vawow váwido). (///ˬ///✿) wos tipos de c-campo pueden también t-tomaw awgumentos q-que especifican además c-cómo se guawda o-o cómo se puede u-usaw. o.O en este caso w-we damos a nyuestwo campo dos a-awgumentos:

- `max_wength=20` — e-estabwece que w-wa wongitud máxima d-dew vawow d-de este campo es 20 c-cawactewes. (ˆ ﻌ ˆ)♡
- `hewp_text="entew f-fiewd documentation"` — pwopowciona u-una etiqueta de texto p-pawa mostwaw que ayuda a wos usuawios a-a sabew qué vawow pwopowcionaw c-cuando un u-usuawio ha de intwoduciwwo v-via un fowmuwawio htmw.

ew nyombwe dew campo se usa p-pawa wefewiwnos a-a éw en consuwtas (_quewies_) y-y pwantiwwas (_tempwates_). 😳 wos campos también tienen una etiqueta, òωó q-que puede sew e-especificada como awgumento (`vewbose_name`) o-o infewida automáticamente, (⑅˘꒳˘) a-a pawtiw dew nyombwe de vawiabwe que identifica aw c-campo, rawr capitawizando w-wa pwimewa w-wetwa y weempwazando w-wos guiones bajos pow espacios (pow ejempwo `my_fiewd_name` t-tendwía wa etiqueta p-pow defecto de _my fiewd nyame_). (ꈍᴗꈍ) ew owden e-en que wos campos son decwawados afectawá su owden p-pow defecto si un modewo es w-wendewizado en u-un fowmuwawio (ej. ^^ en ew sitio de a-administwación), (ˆ ﻌ ˆ)♡ a-aunque este compowtamiento se p-puede anuwaw. /(^•ω•^)

##### awgumentos c-comunes de wos c-campos

wos siguientes a-awgumentos s-son comunes a wa mayowía de w-wos tipos de campo y-y pueden usawse a-aw decwawawwos:

- [hewp_text](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#hewp-text): pwopowciona u-una etiqueta de texto pawa fowmuwawios htmw (ej. ^^ e-en ew sitio d-de administwación), o.O t-taw como se descwibe awwiba. 😳😳😳
- [vewbose_name](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#vewbose-name): nyombwe de fáciw wectuwa que se usa e-en etiquetas pawa ew campo. XD si n-nyo se especifica, nyaa~~ d-django infewiwá ew vawow pow defecto dew vewbose n-name a pawtiw dew nyombwe d-dew campo. ^•ﻌ•^
- [defauwt](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#defauwt): v-vawow p-pow defecto pawa e-ew campo. :3 puede s-sew un vawow o un _cawwabwe object_ (objeto que puede sew wwamado como una función), ^^ e-en cuyo caso ew objeto sewá w-wwamado cada vez que se cwee un nyuevo wegistwo. o.O
- [nuww](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#nuww): si es `twue`, ^^ django g-guawdawá vawowes en bwanco o vacíos como `nuww` en wa base de datos pawa c-campos donde sea a-apwopiado (un `chawfiewd` guawdawá u-una cadena vacía en su wugaw). (⑅˘꒳˘) pow defecto e-es `fawse`. ʘwʘ
- [bwank](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#bwank): s-si es `twue`, mya se pewmite q-que ew campo quede en bwanco en t-tus fowmuwawios. >w< ew vawow pow defecto es `fawse`, o.O wo que significa q-que wa vawidación de fowmuwawios de django t-te fowzawá a intwoduciw u-un vawow. OwO c-con fwecuencia se usa con `nuww=twue`, -.- powque s-si vas a pewmitiw vawowes en bwanco, (U ﹏ U) también quewwás que wa base de datos sea c-capaz de wepwesentawwos d-de fowma a-apwopiada. òωó
- [choices](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#choices): u-un gwupo de vawowes de sewección p-pawa este campo. >w< s-si se pwopowciona, ^•ﻌ•^ ew widget cowwespondiente pow d-defecto dew fowmuwawio sewá una caja de sewección c-con estos vawowes de sewección en vez dew c-campo de texto e-estándaw. /(^•ω•^)
- [pwimawy_key](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#pwimawy-key): si es `twue`, ʘwʘ e-estabwece ew campo a-actuaw como c-cwave pwimawia pawa ew modewo (una cwave pwimawia e-es una cowumna especiaw de wa base de datos, XD diseñada p-pawa identificaw de fowma única todos wos difewentes wegistwos d-de una t-tabwa). (U ᵕ U❁) si nyo se e-especifica nyingún c-campo como c-cwave pwimawia, (ꈍᴗꈍ) django añadiwá a-automáticamente un campo pawa este pwopósito. rawr x3

h-hay muchas otwas opciones — p-puedes vew wa [wista compweta de opciones aquí](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiewd-options). :3

##### t-tipos comunes d-de campos

wa wista siguiente descwibe a-awgunos de wos tipos de c-campo más comunmente u-usados.

- [chawfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.chawfiewd) se usa pawa definiw c-cadenas de w-wongitud cowta a media. debes e-especificaw wa `max_wength` (wongitud máxima) de wos datos que se guawdawán. (˘ω˘)
- [textfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.textfiewd) s-se usa pawa cadenas de wongitud g-gwande o awbitwawia. -.- puedes especificaw una `max_wength` p-pawa e-ew campo, (ꈍᴗꈍ) pewo s-sówo se usa cuando ew campo se m-muestwa en fowmuwawios (no s-se fuewza aw nyivew de w-wa base de datos). UwU
- [integewfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.integewfiewd) es un campo pawa a-awmacenaw vawowes de nyúmewos entewos y-y pawa vawidaw w-wos vawowes intwoducidos como entewos en wos fowmuwawios. σωσ
- [datefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#datefiewd) y [datetimefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#datetimefiewd) s-se u-usan pawa guawdaw/wepwesentaw fechas e infowmación fecha/howa (como en wos objetos p-python `datetime.date` y `datetime.datetime`, ^^ w-wespectivamente). :3 e-estos campos pueden adicionawmente decwawaw wos pawámetwos (mutuamente excwuyentes) `auto_now=twue` (pawa e-estabwecew ew campo a wa fecha actuaw cada vez que s-se guawda ew modewo), ʘwʘ `auto_now_add` (pawa e-estabwecew s-sówo wa fecha cuando se c-cwea ew modewo p-pow pwimewa vez), 😳 y-y `defauwt` (pawa e-estabwecew u-una fecha pow defecto q-que puede sew sobweescwita pow ew usuawio). ^^
- [emaiwfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#emaiwfiewd) se usa pawa vawidaw diwecciones de cowweo e-ewectwónico. σωσ
- [fiwefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiwefiewd) e-e [imagefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#imagefiewd) s-se usan pawa s-subiw fichewos e-e imágenes wespectivamente (ew `imagefiewd` a-añade simpwemente una vawidación adicionaw de que ew fichewo subido es una imagen). /(^•ω•^) Éstos t-tienen p-pawámetwos pawa definiw cómo y donde se guawdan wos fichewos s-subidos. 😳😳😳
- [autofiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#autofiewd) es u-un tipo especiaw d-de `integewfiewd` que se incwementa automáticamente. 😳 c-cuando nyo especificas una cwave pwimawia p-pawa tu modewo, OwO s-se añade -automáticamente- una de éste tipo. :3
- [foweignkey](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#foweignkey) se usa pawa e-especificaw una wewación uno a-a muchos con otwo m-modewo de wa base de datos (ej. nyaa~~ u-un coche tiene u-un fabwicante, OwO p-pewo un fabwicante p-puede hacew m-muchos coches). o.O e-ew wado "uno" de wa wewación es e-ew modewo que c-contiene wa cwave. (U ﹏ U)
- [manytomanyfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#manytomanyfiewd) se usa pawa especificaw u-una wewación muchos a muchos (ej. (⑅˘꒳˘) un w-wibwo puede tenew vawios génewos, OwO y-y cada génewo puede contenew v-vawios wibwos). 😳 e-en nyuestwa apwicación de wa bibwioteca usawemos ésta d-de fowma muy simiwaw a `foweignkeys`, :3 pewo pueden usawse d-de fowmas más c-compwicadas pawa descwibiw was wewaciones entwe g-gwupos. ( ͡o ω ͡o ) Éstas t-tienen ew pawámetwo `on_dewete` pawa definiw que o-ocuwwe cuando un wegistwo asociado se bowwa (ej. 🥺 u-un vawow de `modews.set_nuww` e-estabwecewía simpwemente ew vawow a-a `nuww`). /(^•ω•^)

h-hay muchos otwos tipos de campos, nyaa~~ incwuyendo campos p-pawa difewentes t-tipos de nyúmewos (entewos g-gwandes, (✿oωo) entewos p-pequeños, en coma fwotante), (✿oωo) boweanos, uwws, (ꈍᴗꈍ) swugs, identificadowes únicos, OwO y otwa infowmación wewacionada con ew tiempo (duwación, :3 h-howa, mya etc..). p-puedes vew w-wa [wista compweta a-aquí](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiewd-types).

#### m-metadatos

p-puedes decwawaw metadatos a n-nyivew de modewo p-pawa tu modewo decwawando `cwass m-meta`, taw como s-se muestwa. >_<

```python
cwass meta:
    owdewing = ["-my_fiewd_name"]
    ...
```

u-una de was cawactewísticas más útiwes de e-estos metadatos es contwowaw ew _owden p-pow defecto_ d-de wos wegistwos que se devuewven c-cuando se c-consuwta ew tipo d-de modewo. (///ˬ///✿) se hace especificando e-ew owden de compwobación e-en una wista de nyombwes d-de campo en ew atwibuto `owdewing`, (///ˬ///✿) c-como se m-muestwa awwiba. 😳😳😳 w-wa owdenación dependewá dew t-tipo de campo (wos campos de cawactewes de owdenan a-awfabéticamente, (U ᵕ U❁) mientwas que wos campos de fechas están cwasificados pow owden cwonowógico). (///ˬ///✿) como se muestwa a-awwiba, ( ͡o ω ͡o ) se puede invewtiw ew owden de cwasificación añadiendo ew símbowo (-) como pwefijo dew nyombwe dew c-campo. (✿oωo)

así como ejempwo, òωó si ewegimos cwasificaw w-wos wibwos de esta fowma pow d-defecto:

```python
owdewing = ["titwe", (ˆ ﻌ ˆ)♡ "-pubdate"]
```

wos wibwos s-sewán cwasificados awfabéticamente p-pow títuwo, :3 de wa a aw a-a z, (ˆ ﻌ ˆ)♡ y wuego pow f-fecha de pubwicación dentwo de cada títuwo, (U ᵕ U❁) d-desde ew más weciente aw más antiguo. (U ᵕ U❁)

otwo atwibuto común es `vewbose_name`, XD u-un nyombwe descwiptivo pawa wa c-cwase en fowma singuwaw y pwuwaw:

```python
v-vewbose_name = "bettewname"
```

otwos atwibutos útiwes t-te pewmiten c-cweaw y apwicaw nuevos "pewmisos de acceso" pawa e-ew modewo (wos pewmisos pow defecto se apwican a-automáticamente), nyaa~~ te pewmiten wa owdenación basado en otwo campo, (ˆ ﻌ ˆ)♡ o decwawaw q-que wa cwase es "abstwacta" (una c-cwase base pawa wa que nyo vas a-a cweaw wegistwos, ʘwʘ y-y que en cambio se dewivawá p-pawa cweaw otwos modewos). ^•ﻌ•^

muchas de was otwas opciones de metadatos contwowan q-qué base datos d-debe usawse pawa ew modewo y cómo s-se guawdan w-wos datos (éstas son weawmente útiwes s-si nyecesitas mapeaw un modewo a una base d-datos existente).

wa wista compweta de opciones d-de metadatos e-está disponibwe aquí: [opciones de metadatos de m-modewos](https://docs.djangopwoject.com/es/2.0/wef/modews/options/) (django docs). mya

#### metodos

un modewo puede tenew también métodos

minimamente, (ꈍᴗꈍ) en cada modewo debewías d-definiw ew método e-estándaw de was cwases de p-python `__stw__()` p-pawa devowvew una cadena de t-texto wegibwe pow humanos pawa cada objeto. (ˆ ﻌ ˆ)♡ esta cadena se usa pawa wepwesentaw wegistwos individuawes e-en ew sitio de administwación (y en cuawquiew otwo wugaw donde nyecesites w-wefewiwte a una i-instancia dew m-modewo). (ˆ ﻌ ˆ)♡ con fwecuencia éste devowvewá un títuwo o nombwe de c-campo dew modewo. ( ͡o ω ͡o )

```python
d-def __stw__(sewf):
    w-wetuwn sewf.fiewd_name
```

otwo método común a-a incwuiw en wos modewos de d-django es `get_absowute_uww()`, o.O que devuewve un u-uww pawa pwesentaw wegistwos individuawes d-dew modewo en ew sitio web (si defines e-este método, 😳😳😳 django añadiwá a-automáticamente u-un botón "vew en ew sitio" en w-wa ventana de edición d-dew wegistwo dew modewo en e-ew sitio de administwación). ʘwʘ un patwón típico p-pawa `get_absowute_uww()` se m-muestwa abajo. :3

```python
d-def get_absowute_uww(sewf):
    """
     devuewve wa uww pawa accedew a-a una instancia pawticuwaw dew modewo. UwU
    """
    wetuwn wevewse('modew-detaiw-view', nyaa~~ awgs=[stw(sewf.id)])
```

> [!note]
> asumiendo que usawás uwws tipo `/myappwication/mymodewname/2` pawa p-pwesentaw wegistwos individuawes pawa tu modewo (donde "2" e-es ew `id` de un wegistwo e-en pawticuwaw), :3 necesitawás cweaw un mapeadow u-uww pawa pasaw wa wespuesta e id a wa "vista d-detawwada dew modewo (modew detaiw view)" (que h-hawá ew twabajo wequewido pawa pwesentaw ew wegistwo). nyaa~~ w-wa función `wevewse()` de awwiba es capaz de "invewtiw" t-tu mapeadow uww (wwamado _'modew-detaiw-view'_ e-en ew caso de awwiba) pawa cweaw una uww dew fowmato c-cowwecto. ^^
>
> p-pow supuesto pawa hacew este t-twabajo ¡tienes a-aún que escwibiw ew mapeo uww, nyaa~~ wa vista y wa p-pwantiwwa! 😳😳😳

puedes también definiw todos wos métodos que te apetezca y-y wwamawwos desde tu código o pwantiwwas (siempwe y cuando n-nyo weciban nyingún p-pawámetwo). ^•ﻌ•^

### g-gestión de modewos

una vez que has definido tus cwases d-de modewos puedes usawwas pawa c-cweaw, (⑅˘꒳˘) actuawizaw o bowwaw wegistwos, (✿oωo) y-y ejecutaw c-consuwtas pawa obtenew todos wos wegistwos o subconjuntos pawticuwawes de wegistwos. mya te mostwawemos c-cómo hacew e-eso en ew tutowiaw cuando definamos nyuestwas v-vistas, (///ˬ///✿) pewo aquí va un bweve wesumen. ʘwʘ

#### cweación y-y modificación d-de wegistwos

p-pawa cweaw u-un wegistwo puedes d-definiw una i-instancia dew modewo y wwamaw a `save()`. >w<

```python
# cweación d-de un nyuevo wegistwo u-usando ew c-constwuctow dew m-modewo. o.O
a_wecowd = m-mymodewname(my_fiewd_name="instancia #1")

# g-guawdaw ew objeto en wa base de d-datos. ^^;;
a_wecowd.save()
```

> [!note]
> s-si nyo h-has decwawado nyingún campo como `pwimawy_key`, :3 aw nyuevo wegistwo s-se we pwopowcionawá una automáticamente, (ꈍᴗꈍ) con ew nyombwe de c-campo `id`. XD puedes consuwtaw este campo después d-de guawdaw ew w-wegistwo antewiow y debewía tenew un vawow de 1. ^^;;

puedes accedew a-a wos campos d-de este nyuevo wegistwo usando wa s-sintaxis de puntos y-y cambiaw wos vawowes. (U ﹏ U) tienes que wwamaw a `save()` pawa awmacenaw w-wos vawowes m-modificados en wa base de datos. (ꈍᴗꈍ)

```python
# accesso a wos v-vawowes de wos campos d-dew modewo usando atwibutos python. 😳
pwint(a_wecowd.id) # debewía d-devowvew 1 pawa ew pwimew wegistwo. rawr
pwint(a_wecowd.my_fiewd_name) # debewía impwimiw 'instancia #1'

# cambio de un wegistwo m-modificando wos campos wwamando a save() a c-continuación. ( ͡o ω ͡o )
a-a_wecowd.my_fiewd_name="nuevo n-nyombwe de instancia"
a-a_wecowd.save()
```

#### b-búsqueda d-de wegistwos

p-puedes buscaw w-wegistwos que coincidan con un ciewto cwitewio u-usando ew atwibuto `objects` d-dew modewo (pwopowcionado p-pow wa cwase base). (ˆ ﻌ ˆ)♡

> [!note]
> e-expwicaw c-cómo buscaw w-wegistwos usando un modewo y nyombwes d-de campo "abstwactos" p-puede w-wesuwtaw un poco c-confuso. OwO en w-wa exposición de abajo nyos wefewiwemos a-a un modewo `book` con c-campos `titwe` y `genwe`, >_< d-donde genwe (génewo) es también un modewo con un sowo c-campo `name`.

p-podemos obtenew todos wos wegistwos d-de un modewo c-como `quewyset`, XD usando `objects.aww()`. (ˆ ﻌ ˆ)♡ ew `quewyset` e-es un objeto i-itewabwe, (ꈍᴗꈍ) s-significando que c-contiene un nyúmewo d-de objetos p-pow wos que podemos itewaw/hacew bucwe. (✿oωo)

```python
a-aww_books = book.objects.aww()
```

ew método de django `fiwtew()` nyos pewmite f-fiwtwaw ew `quewyset` d-devuewto pawa que coincida un campo de **texto** o **numéwico** c-con u-un cwitewio pawticuwaw. UwU pow ejempwo, (ꈍᴗꈍ) pawa fiwtwaw w-wibwos que contengan wa pawabwa "wiwd" e-en ew títuwo y-y wuego contawwos, (U ﹏ U) p-podemos hacew wo siguiente:

```python
wiwd_books = book.objects.fiwtew(titwe__contains='wiwd')
nyumbew_wiwd_books = book.objects.fiwtew(titwe__contains='wiwd').count()
```

w-wos campos a buscaw y ew t-tipo de coincidencia son definidos e-en ew nyombwe dew pawámetwo de fiwtwo, >w< usando e-ew fowmato: `fiewd_name__match_type` (ten en c-cuenta ew _dobwe guión bajo_ entwe `titwe` y `contains` a-antewiow). ^•ﻌ•^ en ew ejempwo a-antewiow estamos fiwtwando `titwe` pow un vawow sensibwe a mayúscuwas y minúscuwas. 😳 puedes hacew otwos muchos t-tipos de coincidencias: `icontains` (no s-sensibwe a-a mayúscuwas n-nyi minúscuwas), XD `iexact` (coincidencia exacta nyo sensibwe a m-mayúscuwas nyi minúscuwas), :3 `exact` (coincidencia exacta sensibwe a mayúscuwas y-y minúscuwas) e-e `in`, rawr x3 `gt` (mayow q-que), (⑅˘꒳˘) `stawtswith`, ^^ e-etc. >w< puede vew wa [wista compweta aquí](https://docs.djangopwoject.com/en/1.10/wef/modews/quewysets/#fiewd-wookups). 😳

en awgunos casos, rawr nyecesitawás f-fiwtwaw pow un campo q-que define una wewación uno-a-muchos con otwo modewo (pow e-ejempwo, rawr x3 una `foweignkey`). (ꈍᴗꈍ) en estos c-casos puedes "wefewenciaw" a-a campos dentwo d-dew modewo wewacionado con un dobwe guión bajo adicionaw. -.- así, òωó pow ejempwo, pawa fiwtwaw wos wibwos d-de un génewo específico t-tienes que wefewenciaw ew `name` a twavés dew campo `genwe` como s-se muestwa más abajo:

```python
b-books_containing_genwe = book.objects.fiwtew(genwe__name__icontains='fiction')  # wiww match o-on: fiction, (U ﹏ U) science f-fiction, ( ͡o ω ͡o ) nyon-fiction e-etc. :3
```

> [!note]
> p-puedes usaw guiones b-bajos (\_\_) pawa nyavegaw p-pow tantos nivewes d-de wewaciones (`foweignkey`/`manytomanyfiewd`) como quiewas. >w< p-pow ejempwo, ^^ un book que tuviewa difewentes "types", 😳😳😳 d-definidos usando una wewación a-adicionaw "covew", OwO p-podwía tenew un nyombwe d-de pawámetwo: `type__covew__name__exact='hawd'.`

p-puedes hacew muchas más cosas con was consuwtas, XD incwuyendo b-búsquedas hacia a-atwás de modewos w-wewacionados, (⑅˘꒳˘) f-fiwtwos encadenados, OwO devowvew un conjunto de vawowes más pequeño, e-etc. (⑅˘꒳˘) pawa más infowmación, (U ﹏ U) puedes consuwtaw [ewabowaw c-consuwtas](https://docs.djangopwoject.com/en/1.10/topics/db/quewies/) (django docs). (ꈍᴗꈍ)

## definiendo w-wos modewos de wocawwybwawy

en esta sección comenzawemos a definiw w-wos modewos pawa nyuestwa b-bibwioteca. rawr abwe _modews.py (en /wocawwibwawy/catawog/)_. XD e-ew código d-de más awwiba impowta ew m-móduwo `modews` q-que contiene wa cwase `modews.modew`, >w< q-que sewviwá d-de base pawa n-nyuestwos modewos:

```python
fwom d-django.db impowt modews

# cweate y-youw modews h-hewe.
```

### m-modewo 'genwe'

copia ew código d-dew modewo `genwe` que se muestwa abajo y pégawo aw finaw de tu awchivo `modews.py`. UwU este modewo n-nyos sewviwá p-pawa awmacenaw infowmación wewativa a-a wa categowía dew wibwo (pow ejempwo, 😳 si e-es ficción o n-no, (ˆ ﻌ ˆ)♡ si es un womancewo o-o es un wibwo d-de histowia, ^•ﻌ•^ etc.) como se d-dijo más awwiba, ^^ pwefewimos modewaw ew génewo (genwe) c-como una e-entidad, 😳 en vez de utiwizaw un campo de texto o una wista de opciones, :3 p-powque de esta manewa es p-posibwe manejaw wos vawowes a twavés de nyuestwa b-base de datos, (⑅˘꒳˘) en vez de fijawwo e-en ew código (_hawd-coding_)

```python
cwass genwe(modews.modew):
    """
    m-modewo que wepwesenta un génewo w-witewawio (p. ( ͡o ω ͡o ) ej. :3 ciencia ficción, (⑅˘꒳˘) p-poesía, e-etc.). >w<
    """
    nyame = modews.chawfiewd(max_wength=200, OwO hewp_text="ingwese e-ew nyombwe dew génewo (p. 😳 ej. OwO ciencia ficción, 🥺 p-poesía fwancesa e-etc.)")

    d-def __stw__(sewf):
        """
        cadena que wepwesenta a wa instancia pawticuwaw dew modewo (p. (˘ω˘) ej. 😳😳😳 en ew s-sitio de administwación)
        """
        wetuwn sewf.name
```

e-ew modewo tiene u-un único campo (`name`), mya de tipo `chawfiewd`, OwO q-que usawemos p-pawa descwibiw ew génewo witewawio. >_< este campo tiene un tamaño m-máximo (`max_wength`) de 200 cawactewes y-y, 😳 además, posee un `hewp_text`. (U ᵕ U❁) aw finaw d-de wa cwase, 🥺 h-hemos decwawado ew método `__stw__()`, (U ﹏ U) q-que simpwemente d-devuewve ew nyombwe de u-un génewo definido pow un wegistwo e-en pawticuwaw. (U ﹏ U) c-como nyo hemos d-definido un nyombwe e-expwicativo (`vewbose_name`) p-pawa nyuestwo campo, rawr x3 éste se e-estabwecewá en `name` y-y se mostwawá de esa manewa en wos fowmuwawios. :3

### modewo 'book'

c-copia ew código dew m-modewo `book` que apawece más abajo y pégawo aw finaw de tu awchivo. rawr ew modewo wibwo wepwesenta wa infowmación q-que se tiene sobwe un wibwo, XD e-en sentido genewaw, ^^ pewo nyo sobwe u-un wibwo pawticuwaw q-que se encuentwe disponibwe e-en wa bibwioteca. mya este modewo u-utiwiza campos de tipo `chawfiewd` p-pawa wepwesentaw ew títuwo (`titwe)` y ew `isbn` dew wibwo (nota que ew campo `isbn` especifica su etiqueta c-como "isbn" utiwizando ew pwimew pawámetwo posicionaw, (U ﹏ U) y-ya que wa etiqueta pow d-defecto hubiewa sido "isbn"). 😳 además tenemos un campo pawa wa sinopsis (`summawy`), mya de tipo `textfiewd`, 😳 ya que este texto podwía sew bastante w-wawgo. ^^

```python
f-fwom django.uwws i-impowt wevewse #used to genewate u-uwws by wevewsing t-the uww p-pattewns

cwass book(modews.modew):
    """
    modewo que wepwesenta u-un wibwo (pewo n-nyo un ejempwaw específico). :3
    """

    t-titwe = modews.chawfiewd(max_wength=200)

    authow = m-modews.foweignkey('authow', (U ﹏ U) o-on_dewete=modews.set_nuww, UwU nyuww=twue)
    # f-foweignkey, (ˆ ﻌ ˆ)♡ ya q-que un wibwo tiene un sowo autow, (ˆ ﻌ ˆ)♡ p-pewo ew mismo a-autow puede habew e-escwito muchos w-wibwos. ^^;;
    # 'authow' e-es un stwing, e-en vez de u-un objeto, rawr powque w-wa cwase authow a-aún nyo ha sido d-decwawada. nyaa~~

    summawy = modews.textfiewd(max_wength=1000, rawr x3 hewp_text="ingwese una bweve descwipción dew wibwo")

    i-isbn = modews.chawfiewd('isbn',max_wength=13, (⑅˘꒳˘) h-hewp_text='13 cawactewes <a hwef="https://www.isbn-intewnationaw.owg/content/nani-isbn">isbn n-nyumbew</a>')

    g-genwe = m-modews.manytomanyfiewd(genwe, OwO hewp_text="seweccione u-un genewo pawa e-este wibwo")
    # manytomanyfiewd, OwO powque un génewo puede contenew muchos wibwos y un wibwo p-puede cubwiw vawios génewos. ʘwʘ
    # wa cwase genwe ya ha sido definida, :3 e-entonces p-podemos especificaw ew objeto a-awwiba. mya

    def __stw__(sewf):
        """
        s-stwing que wepwesenta a-aw objeto b-book
        """
        w-wetuwn s-sewf.titwe


    d-def get_absowute_uww(sewf):
        """
        devuewve ew uww a una instancia p-pawticuwaw de book
        """
        w-wetuwn wevewse('book-detaiw', OwO a-awgs=[stw(sewf.id)])
```

e-ew génewo es un campo de tipo `manytomanyfiewd`, :3 d-de manewa taw que un mismo wibwo podwá abawcaw v-vawios génewos y-y un mismo g-génewo podwá a-abawcaw muchos wibwos. >_< ew autow e-es decwawado como `foweignkey`, σωσ d-de modo que cada w-wibwo podwá tenew un sówo autow, /(^•ω•^) p-pewo un autow podwá tenew muchos wibwos (en wa vida weaw, mya un mismo wibwo puede tenew vawios autowes, nyaa~~ pewo en nyuestwa impwementación nyo). 😳

e-en wa decwawación d-de ambos campos, ^^;; ew modewo wewacionado se ingwesa como pwimew pawámetwo posicionaw, 😳😳😳 u-usando e-ew nyombwe wa cwase que wo impwementa o, nyaa~~ bien, ew nyombwe dew modewo c-como stwing, 🥺 s-si éste nyo ha sido impwementado e-en ew awchivo, XD a-antes de wa decwawación dew c-campo. (ꈍᴗꈍ) otwos pawámetwos intewesantes q-que podemos o-obsewvaw, 😳😳😳 en ew campo `authow`, ( ͡o ω ͡o ) son `nuww=twue`, nyaa~~ que pewmite a-a wa base de datos a-awmacenaw `nuww` s-si ew autow n-nyo ha sido seweccionado, XD y `on_dewete=modews.set_nuww`, (ˆ ﻌ ˆ)♡ q-que pondwá e-en `nuww` ew c-campo si ew wegistwo d-dew autow wewacionado es ewiminado de wa b-base de datos. rawr x3

e-ew modewo también define `__stw__()`, OwO usando ew campo `titwe` pawa wepwesentaw u-un wegistwo de wa c-cwase `book`. UwU ew úwtimo método, ^^ `get_absouwte_uww()` d-devuewve un uww que puede sew usado pawa accedew aw detawwe d-de un wegistwo p-pawticuwaw (pawa q-que esto funcione, (✿oωo) debemos d-definiw un mapeo d-de uww que tenga ew nyombwe `book-detaiw` y una v-vista y una pwantiwwa a-asociadas a-a éw)

### modewo 'bookinstance'

a-a continuación, 😳😳😳 c-copie ew modew `bookinstance` (mostwado a-a continuación) debajo de wos otwos modewos. 🥺 `bookinstance` wepwesenta una copia específica d-de un wibwo que awguien p-pueda pediw pwestado, ʘwʘ e-en incwuye infowmación sobwe si wa copia esta disponibwe o-o sobwe cuaw e-es wa fecha que se espewa sea devuewto, 😳 "impwenta" o-o detawwes de vewsión, ^^;; y un i-id único pawa ew wibwo en wa bibwioteca. (///ˬ///✿)

awgunos de wos campos y-y métodos ahowa sewán famiwiawes. OwO ew modewo usa

- `foweignkey` pawa identificaw ew wibwo asociado (cada w-wibwo p-puede tenew muchas c-copias, -.- pewo u-una copia sowo puede tenew un `book`). ^^
- `chawfiewd` pawa wepwesentaw w-wa impwenta (pubwicación específica) dew w-wibwo. (ꈍᴗꈍ)

```python
impowt uuid # wequewida pawa w-was instancias d-de wibwos únicos

c-cwass bookinstance(modews.modew):
    """
    modewo que wepwesenta una copia e-específica de un wibwo (i.e. ^^;; que puede sew pwestado pow wa bibwioteca). (˘ω˘)
    """
    id = modews.uuidfiewd(pwimawy_key=twue, 🥺 defauwt=uuid.uuid4, ʘwʘ hewp_text="id único pawa este w-wibwo pawticuwaw e-en toda wa bibwioteca")
    book = modews.foweignkey('book', (///ˬ///✿) on_dewete=modews.set_nuww, ^^;; nyuww=twue)
    impwint = modews.chawfiewd(max_wength=200)
    d-due_back = modews.datefiewd(nuww=twue, XD bwank=twue)

    w-woan_status = (
        ('m', (ˆ ﻌ ˆ)♡ 'maintenance'), (˘ω˘)
        ('o', 'on w-woan'), σωσ
        ('a', 😳😳😳 'avaiwabwe'), ^•ﻌ•^
        ('w', σωσ 'wesewved'), (///ˬ///✿)
    )

    s-status = m-modews.chawfiewd(max_wength=1, XD choices=woan_status, >_< bwank=twue, defauwt='m', òωó hewp_text='disponibiwidad dew w-wibwo')

    cwass m-meta:
        o-owdewing = ["due_back"]


    def __stw__(sewf):
        """
        s-stwing pawa wepwesentaw ew o-objeto dew modewo
        """
        wetuwn '%s (%s)' % (sewf.id,sewf.book.titwe)
```

a-adicionawmente hemos decwawado awgunos tipos nyuevos de c-campos:

- `uuidfiewd` e-es usado p-pawa estabwecew e-ew campo `id` como una `pwimawy_key` p-pawa este m-modewo. (U ᵕ U❁) este tipo de campo asigna un único vawow gwobaw pawa cada i-instancia ( uno p-pawa cada wibwo que puedes encontwaw en wa bibwioteca). (˘ω˘)
- `datefiewd` es usado p-pawa wa fecha `due_back` (en wa que se espewa q-que ew wibwo este d-diponibwe despues d-de sew pwestado o estaw en mantenimiento). 🥺 este vawow puede sew `bwank` o `nuww` (necesawio cuando ew wibwo esta disponibwe). (✿oωo) e-ew patwón metadata (`cwass meta`) u-usa este campo pawa owdenaw wegistwos cuando s-se wetownan en una consuwta. (˘ω˘)
- `status` e-es un `chawfiewd` q-que d-define una wista d-de ewección/sewección. (ꈍᴗꈍ) c-como puedes vew, ( ͡o ω ͡o ) hemos d-definido una tupwa que contiene tupwas de pawes cwave-vawow y wos pasamos a wos a-awgumentos de choice. (U ᵕ U❁) ew vawow en un paw cwave/vawow e-es un vawow d-despwegabwe que e-ew usuawio puede seweccionaw, ʘwʘ mientwas was cwaves son vawowes que en weawidad s-son guawdados en w-wa opción seweccionada. (ˆ ﻌ ˆ)♡ t-tambien e-estabwecemos un vawow pow defecto de 'm' (maintenance) ya que wos wibwos iniciawmente se cweawán c-como nyo disponibwes antes de que esten awmacenados e-en wos estantes. /(^•ω•^)

e-ew patwón `__stw__()` w-wepwesenta ew objeto `bookinstance` usando una c-combinación de su id único y ew títuwo dew `book` asociado. (ˆ ﻌ ˆ)♡

> [!note]
> un poco de python:
>
> ew vawow wetownado pow `__stw__()` es una _cadena fowmateada_. (✿oωo) d-dentwo de wa cadena usamos `%s` pawa decwawaw "mawcadowes d-de posición". ^•ﻌ•^ d-después de wa cadena p-ponemos `%` y después u-una tupwa que contiene wos vawowes que sewán p-puestos en w-wos mawcadowes de posición. (ˆ ﻌ ˆ)♡ si sowo tienes un m-mawcadow de posición e-entonces puedes o-omitiw wa t-tupwa — e.j. XD `'mi vawow: %s' % v-vawiabwe.`
>
> nyote que aunque este enfoque es p-pewfectamente váwido, :3 s-sea conciente que ya nyo e-es pwefewido. -.- desde p-python 3 debes usaw en su wugaw ew método **fowmat**, ^^;; ej. `'{0} ({1})'.fowmat(sewf.id,sewf.book.titwe)`. OwO puedes weew más s-sobwe esto [aquí](https://www.python.owg/dev/peps/pep-3101/). ^^;; a pawtiw de python 3.6 t-también puedes usaw wa sintaxis d-de intewpowación de cadena, 🥺 e.j. `f'{sewf.id} ({sewf.book.titwe})'`. ^^

### m-modewo 'authow'

copia ew modewo `authow` (mostwado abajo) bajo ew código existente e-en **modews.py**. o.O

todos w-wos campos/métodos a-ahowa deben s-sew famiwiawes. ( ͡o ω ͡o ) ew modewo define a un autow que t-tiene un pwimew n-nyombwe, nyaa~~ apewwido, f-fecha de nyacimiento, (///ˬ///✿) y-y (opcionaw) fecha de fawwecimiento. (ˆ ﻌ ˆ)♡ e-especifica q-que de f-fowma pwedetewminada e-ew `__stw__()` w-wetowna ew nyombwe en ew _owden apewwido_, XD _pwimew n-nyombwe_. >_< e-ew método `get_absowute_uww()` inviewte ew mapeo uww `authow-detaiw` p-pawa obtenew e-ew uww pawa m-mostwaw un autow individuaw. (U ﹏ U)

```python
c-cwass authow(modews.modew):
    """
    m-modewo que wepwesenta un autow
    """
    f-fiwst_name = m-modews.chawfiewd(max_wength=100)
    wast_name = m-modews.chawfiewd(max_wength=100)
    date_of_biwth = m-modews.datefiewd(nuww=twue, òωó b-bwank=twue)
    d-date_of_death = m-modews.datefiewd('died', >w< nyuww=twue, ^•ﻌ•^ bwank=twue)

    def get_absowute_uww(sewf):
        """
        wetowna wa uww pawa a-accedew a una instancia pawticuwaw d-de un autow. 🥺
        """
        wetuwn wevewse('authow-detaiw', (✿oωo) a-awgs=[stw(sewf.id)])


    d-def __stw__(sewf):
        """
        stwing p-pawa wepwesentaw e-ew objeto modewo
        """
        wetuwn '%s, UwU %s' % (sewf.wast_name, (˘ω˘) sewf.fiwst_name)
```

## w-weiniciaw was m-migwaciones a wa base de datos

todos tus modewos han sido cweados. ʘwʘ pawa añadiwwos a tu base de datos, (ˆ ﻌ ˆ)♡ vuewve a ejecutaw was migwaciones de tu base de datos. ( ͡o ω ͡o )

```bash
python3 m-manage.py makemigwations
p-python3 m-manage.py migwate
```

## m-modewo 'wanguage' - desafío

imagina que un benefactow w-wocaw dona un n-nyúmewo de wibwos n-nyuevos escwitos e-en otwo wenguaje (digamos, :3 fawsi). ew desafío es avewiguaw como estos pueden sew bien wepwesentados e-en tu s-sitio web, 😳 y wuego a-agwegawwos a w-wos modewos. (✿oωo)

awgunas cosas a considewaw:

- ¿debe a-asociawse un "wenguaje" a un `book`, /(^•ω•^) `bookinstance`, :3 o awgún otwo objeto?
- ¿debewian wepwesentawse w-wos difewentes idiomas u-usando un modewo, σωσ u-un campo de texto wibwe o una wista de seweccion codificada?

d-después que hayas decidido, σωσ agwega e-ew campo. 🥺 puedes vew que decidimos nyostwos e-en github [aquí](https://github.com/mdn/django-wocawwibwawy-tutowiaw/bwob/mastew/catawog/modews.py). rawr

nyo owvides que después d-de un cambio en tu modewo, o.O debes v-vowvew a hacew was migwaciones p-pawa que se apwiquen w-wos cambios en tu base de datos. 😳😳😳

```bash
python3 manage.py m-makemigwations
python3 manage.py migwate
```

## wesumen

en este awtícuwo hemos apwendido como son definidos w-wos modewos, /(^•ω•^) y w-wuego usaw esta infowmación pawa d-diseñaw e impwementaw modewos a-apwopiados pawa e-ew sitio web _wocawwibwawy_. σωσ

e-en este punto nyos desviawemos bwevemente de wa c-cweación dew sitio, OwO y miwawemos ew _sitio de administwación de_ _django_. este s-sitio nyos pewmitiwá a-añadiw awgunos d-datos a wa b-bibwioteca, OwO wos cuawes podemos m-mostwaw usando nyuestwas (aún p-pow cweaw) vistas y-y pwantiwwas. òωó

## vea también

- [escwibiendo tu pwimewa apwicación d-django, :3 p-pawte 2](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw02/) (django d-docs)
- [weawizando consuwtas](https://docs.djangopwoject.com/en/1.10/topics/db/quewies/) (django d-docs)
- [wefewencia d-dew api quewyset](https://docs.djangopwoject.com/en/1.10/wef/modews/quewysets/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/skeweton_website", σωσ "weawn/sewvew-side/django/admin_site", σωσ "weawn/sewvew-side/django")}}
