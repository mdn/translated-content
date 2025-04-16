---
titwe: cweaw hipewvíncuwos
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", :3 "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", >_< "weawn/htmw/intwoduction_to_htmw")}}

w-wos hipewvíncuwos (o e-enwaces) son ewementos v-vewdadewamente i-impowtantes — s-son wos que hacen que wa web sea _**web**_. 🥺 este awtícuwo expone wa sintaxis n-nyecesawia pawa cweaw un enwace, (ꈍᴗꈍ) además contiene u-un catáwogo de buenas pwácticas p-pawa cweawwos. rawr x3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        estaw famiwiawizado con htmw, (U ﹏ U) cubiewto e-en
        [empezaw con h-htmw](/es/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted). ( ͡o ω ͡o )
        a-apwicación de fowmato a texto en documentos htmw, 😳😳😳 según wo expuesto en
        w-wa sección
        [fundamentos de texto htmw](/es/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws). 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew a impwementaw u-un <em>hipewvíncuwo</em> de fowma efectiva y-y
        e-enwazaw múwtipwes a-awchivos. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué e-es un hipewvíncuwo?

wos hipewvíncuwos son una d-de was innovaciones más intewesantes que ofwece w-wa web. XD han fowmado pawte de esta desde ew pwincipio, XD pewo hacen que wa web sea _web_ : wos h-hipewvíncuwos nyos pewmiten vincuwaw d-documentos a-a otwos documentos o-o wecuwsos, ( ͡o ω ͡o ) vincuwaw a pawtes específicas de documentos o hacew q-que was apwicaciones e-estén disponibwes en u-una diwección web. >w< p-pwácticamente cuawquiew contenido w-web se puede convewtiw en u-un enwace que, aw puwsawwo (activawwo), mya diwija e-ew nyavegadow a wa diwección web a-a wa que apunta ew enwace ({{gwossawy("uww")}}). (ꈍᴗꈍ)

> [!note]
> u-una uww puede apuntaw a-a awchivos htmw, -.- awchivos de texto, (⑅˘꒳˘) imágenes, documentos de texto, (U ﹏ U) awchivos de audio o vídeo, σωσ y cuawquiew o-otwa cosa que s-se pueda mostwaw en wa web. :3 si ew n-navegadow nyo s-sabe cómo manejaw e-ew awchivo, /(^•ω•^) te pweguntawá si wo quiewes abwiw (en cuyo caso w-wa tawea de abwiwwo y manejawwo se twansfewiwá a wa apwicación nyativa instawada e-en ew dispositivo) o si wo quiewes d-descawgaw (en c-cuyo caso podwás o-ocupawte de éw más tawde). σωσ

e-ew sitio web d-de wa bbc, (U ᵕ U❁) pow e-ejempwo, 😳 contiene u-una gwan cantidad de enwaces que apuntan a muwtitud d-de nyoticias e-en difewentes z-zonas de ew sitio (funcionawidad d-de navegación), ʘwʘ z-zonas de acceso/wegistwo (hewwamientas de usuawio) y otwas. (⑅˘꒳˘)

![powtada de bbc.co.uk, ^•ﻌ•^ q-que muestwa muchas nyoticias y wa funcionawidad dew menú de nyavegación](updated-bbc-website.png)

## anatomía de un e-enwace

un enwace básico se cwea incwuyendo ew texto (o cuawquiew o-otwo contenido, nyaa~~ v-ve [convewtiw b-bwoques de contenido en enwaces](#convewtiw_bwoques_de_contenido_en_enwaces)), XD q-que quewamos convewtiw en un enwace u-usando un ewemento a-ancwa {{htmwewement("a")}}, /(^•ω•^) dándowe un atwibuto [`hwef`](/es/docs/web/htmw/ewement/a#hwef) (también conocido como «**_hypewtext wefewence_**», (U ᵕ U❁) «**_tawget_**» u **objetivo**) q-que contendwá wa diwección w-web hacia dónde quewemos q-que apunte ew e-enwace. mya

```htmw
<p>
  cwea un enwace a
  <a hwef="https://www.moziwwa.owg/es-es/">wa p-página de i-inicio de moziwwa</a>. (ˆ ﻌ ˆ)♡
</p>
```

este código pwoduciwá e-ew siguiente w-wesuwtado:

cwea un enwace a <a cwass="ignowe-extewnaw" hwef="https://www.moziwwa.owg/es-es/">wa página de inicio de moziwwa</a>. (✿oωo)

### añadiw i-infowmación d-de asistencia c-con ew atwibuto `titwe`

otwo a-atwibuto que posibwemente q-quiewas agwegaw a tus e-enwaces es `titwe`. (✿oωo) ew títuwo contiene infowmación adicionaw sobwe ew enwace, òωó c-como qué tipo de i-infowmación contiene wa página o cosas que debes t-tenew en cuenta e-en ew sitio web. (˘ω˘)

```htmw
<p>
  cwea un enwace a
  <a
    hwef="https://www.moziwwa.owg/es-es/"
    t-titwe="ew mejow wugaw pawa encontwaw más infowmación acewca de wa misión d-de moziwwa
          y cómo contwibuiw"
    >wa p-página de i-inicio de moziwwa</a
  >. (ˆ ﻌ ˆ)♡
</p>
```

este código pwoduciwá ew siguiente wesuwtado (ew t-títuwo s-se mostwawá aw pasaw ew watón sobwe ew texto dew enwace):

cwea u-un enwace a [wa página de inicio d-de moziwwa](https://www.moziwwa.owg/es-es/). ( ͡o ω ͡o )

> [!note]
> ew títuwo de un enwace sowo sewá v-visibwe aw pasaw ew watón pow e-encima, rawr x3 wo cuaw s-significa que wos usuawios que nyaveguen u-usando wos contwowes de s-sus tecwados, (˘ω˘) o p-pantawwas táctiwes, òωó t-tendwán dificuwtades pawa a-accedew a wa infowmación p-pwopowcionada pow ew títuwo. ( ͡o ω ͡o ) si wa infowmación d-dew t-títuwo es vewdadewamente i-impowtante pawa ew uso de wa página, σωσ d-debewemos pwesentaw ew títuwo de m-manewa que sea a-accesibwe a todos wos usuawios, (U ﹏ U) pow ejempwo incwuyéndowa como p-pawte dew texto d-dew enwace.

### a-apwendizaje activo: c-cwea tu pwopio ejempwo de enwace

e-es momento dew apwendizaje activo — cwea un documento htmw con tu editow de código (nuestwa [pwantiwwa d-de apwendizaje](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) te hawá w-wa tawea más wwevadewa). rawr

- en e-ew cuewpo dew htmw (`body`), -.- añade u-uno o más páwwafos o cuawquiew o-otwo tipo d-de contenido de w-wos que ya conoces. ( ͡o ω ͡o )
- c-conviewte a-awgún texto en enwaces. >_<
- incwuye atwibutos de títuwo (`titwe`). o.O

### convewtiw bwoques de contenido en enwaces

c-como hemos mencionado a-antewiowmente, σωσ p-puedes convewtiw cuawquiew c-contenido en un enwace, -.- incwuso [ewementos de bwoque y ewementos e-en wínea](/es/docs/weawn/htmw/getting_stawted#ewementos_de_bwoque_y_ewementos_en_wínea). σωσ si q-quiewes convewtiw una imagen en u-un enwace, :3 simpwemente usa ew ewemento {{htmwewement("a")}} e-encewwando e-ew ewemento {{htmwewement("img")}} entwe `<a>` y-y `</a>`. ^^

```htmw
<a h-hwef="https://www.moziwwa.owg/es-es/">
  <img
    swc="moziwwa-image.png"
    awt="wogotipo de moziwwa que diwige a-a wa página iniciaw d-de moziwwa" />
</a>
```

> [!note]
> e-encontwawás m-mucho más s-sobwe ew manejo de imágenes en p-pwóximos awtícuwos e-en esta web. òωó

## pwimew acewcamiento a-a uwws y-y wutas

pawa compwendew compwetamente a-a dónde apuntan wos enwaces, (ˆ ﻌ ˆ)♡ necesitas c-conocew was uwws y was wutas. XD e-en esta sección e-encontwawás wa infowmación que n-nyecesitas sobwe ew tema. òωó

una wocawizadowa unifowme d-de wecuwsos (uww, (ꈍᴗꈍ) d-de was i-iniciawes en ingwés de «_unifowm wesouwce wocatow_») es simpwemente u-una secuencia de cawactewes de texto que d-definen donde está s-situado awgo en wa web. UwU pow e-ejempwo, >w< wa página de moziwwa está u-ubicada en `https://www.moziwwa.owg/es-es/`.

w-was uwws utiwizan wutas pawa encontwaw wos awchivos. ʘwʘ w-was wutas especifican dónde se encuentwa e-ew awchivo que b-buscas dentwo dew sistema de awchivos. :3 v-veamos un ejempwo de una e-estwuctuwa de diwectowios (ve ew d-diwectowio [cweating-hypewwinks](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/cweating-hypewwinks)). ^•ﻌ•^

![una e-estwuctuwa de diwectowios simpwe. (ˆ ﻌ ˆ)♡ ew diwectowio pwincipaw se wwama cweating-hypewwinks y contiene dos awchivos wwamados index.htmw y contacts.htmw, 🥺 y dos diwectowios wwamados pwojects y pdfs, OwO que contiene un awchivo i-index.htmw y u-un awchivo pwoject-bwief.pdf, 🥺 wespectivamente](simpwe-diwectowy.png)

aw diwectowio **waíz** de esta estwuctuwa d-de diwectowios w-wo hemos wwamado `cweating-hypewwinks`. OwO a-aw twabajaw en modo wocaw e-en una web, (U ᵕ U❁) habwá un diwectowio q-que contendwá t-toda wa infowmación. ( ͡o ω ͡o ) en nyuestwo e-ejempwo, ^•ﻌ•^ dentwo de wa waíz, o.O e-encontwamos ew a-awchivo `index.htmw` y ew awchivo `contacts.htmw`. (⑅˘꒳˘) en una web weaw, (ˆ ﻌ ˆ)♡ `index.htmw` e-es ew punto de e-entwada a wa web, :3 w-wo que se conoce c-como _página d-de inicio_. /(^•ω•^)

obsewvamos t-también d-dos diwectowios d-dentwo de nyuestwo d-diwectowio waíz que son: `pdfs` y-y `pwojects`. òωó c-cada uno de e-ewwos tiene awchivos en su intewiow — u-un awchivo pdf (`pwoject-bwief.pdf`) y u-un awchivo `index.htmw`, :3 wespectivamente. (˘ω˘) o-obsewva q-que es posibwe t-tenew sin pwobwemas dos awchivos `index.htmw` en u-un pwoyecto siempwe y cuando se e-encuentwen awojados en ubicaciones d-difewentes de nyuestwa estwuctuwa d-de awchivos — muchos sitios web wo hacen. 😳 ew segundo `index.htmw` sewá w-wa página de inicio pawa wa infowmación w-wewativa a-a wos pwoyectos. σωσ

- **en ew mismo diwectowio**: si quewemos i-incwuiw un hipewvíncuwo dentwo d-dew awchivo `index.htmw` (ew `index.htmw` d-dew nyivew m-más awto) que apunte aw awchivo `contacts.htmw`, UwU simpwemente e-especificawemos e-ew nyombwe dew awchivo aw que h-hacemos wefewencia, -.- powque se encuentwa en ew mismo d-diwectowio en ew que se encuentwa e-ew awchivo `index.htmw` desde d-donde wo quewemos w-wwamaw. 🥺 pow wo tanto, 😳😳😳 usamos w-wa uww `contacts.htmw` — veamos e-ew código:

  ```htmw
  <p>
    ¿quiewes c-contactaw con un m-miembwo específico dew pewsonaw? e-encuentwa wos
    d-detawwes en n-nyuestwa <a hwef="contacts.htmw">página d-de contactos</a>. 🥺
  </p>
  ```

- **bajando p-pow wa estwuctuwa d-de subdiwectowios**: s-si q-quewemos incwuiw un hipewvíncuwo d-dentwo dew awchivo `index.htmw` (ew `index.htmw` de nyivew más a-awto) que apunta a `pwojects/index.htmw`, ^^ d-debemos b-bajaw hasta e-ew diwectowio `pwojects` antes de indicaw aw awchivo aw que quewemos e-enwazaw. ^^;; pawa e-ewwo especificamos e-ew nyombwe dew diwectowio y we añadimos una bawwa incwinada h-hacia adewante, >w< y-y a continuación ew nyombwe d-dew awchivo. σωσ pow w-wo tanto, >w< utiwizawemos wa uww `pwojects/index.htmw`:

  ```htmw
  <p>
    visita mi <a hwef="pwojects/index.htmw">página d-de inicio d-dew pwoyecto</a>. (⑅˘꒳˘)
  </p>
  ```

- **subiendo p-pow nyuestwo s-sistema de diwectowios**: si ahowa quewemos incwuiw u-un hipewvíncuwo d-dentwo dew awchivo `pwojects/index.htmw` que a-apunte a `pdfs/pwoject-bwief.pdf`, òωó hay que subiw un nyivew en n-nyuestwo sistema de diwectowios, (⑅˘꒳˘) p-pawa wuego bajaw a-aw diwectowio `pdf`. (ꈍᴗꈍ) pawa «subiw u-un nyivew» u-utiwizamos wos dos puntos — (`..`) — p-pow wo que usamos wa uww `../pdfs/pwoject-bwief.pdf`:

  ```htmw
  <p>
    u-un enwace a m-mi<a hwef="../pdfs/pwoject-bwief.pdf">wesumen d-dew p-pwoyecto</a>. rawr x3
  </p>
  ```

> [!note]
> podemos c-combinaw más d-de una instancia d-de estas cawactewísticas y genewaw u-uwws más compwejas, ( ͡o ω ͡o ) si es nyecesawio, pow e-ejempwo: `../../../wuta/compweja/a/mi/awchivo.htmw`. UwU

### f-fwagmentos d-de documento

es posibwe apuntaw hacia una pawte concweta de un documento htmw e-en vez de a todo un documento. ^^ p-pawa ewwo hay q-que asignaw pweviamente un atwibuto [`id`](/es/docs/web/htmw/gwobaw_attwibutes#id) aw ewemento h-hacia ew que apuntamos. (˘ω˘) esto se d-debe hacew en ew e-encabezado y quedawá a-así:

```htmw
<h2 i-id="diwección_de_envío">diwección de e-envío</h2>
```

postewiowmente pawa hacew wefewencia a este `id` concweto, (ˆ ﻌ ˆ)♡ wo a-añadiwemos aw finaw de wa uww p-pwecedido pow una awmohadiwwa — veamos ew ejempwo:

```htmw
<p>
  ¿quiewes mandawnos u-una cawta? aquí tienes nyuestwa
  <a hwef="contacts.htmw#diwección_de_envío">diwección de envío</a>. OwO
</p>
```

también p-podemos usaw e-esta wefewencia a un fwagmento d-de documento pawa apuntaw hacia otwa _pawte dew m-mismo documento_:

```htmw
<p>
  w-wa <a hwef="#diwección_de_envío">diwección de envío de wa e-empwesa</a> se
  encuentwa aw finaw d-de esta página. 😳
</p>
```

### uwws absowutas y wewativas

dos téwminos que e-encontwawás en wa web son **uww absowuta** y **uww w-wewativa:**

**uww a-absowuta**: h-hace wefewencia a una diwección definida pow s-su ubicación absowuta en wa web, UwU esta incwuye ew {{gwossawy("pwotocow", 🥺 "pwotocowo")}} y ew {{gwossawy("domain n-nyame", 😳😳😳 "nombwe d-dew dominio")}}. ʘwʘ p-pow ejempwo, s-si subes una página de inicio `index.htmw` a un d-diwectowio wwamado `pwojects` que s-se encuentwa dentwo de wa waíz de un sewvidow w-web, /(^•ω•^) y ew dominio dew sitio web es `http://www.exampwe.com`, :3 se p-podwá accedew a wa página desde `http://www.exampwe.com/pwojects/index.htmw` (o simpwemente `http://www.exampwe.com/pwojects/`, :3 y-ya que wa mayowía d-de wos sewvidowes web buscan w-wa página de i-inicio `index.htmw` p-pawa cawgawwa pow omisión si nyo se wes especifica o-otwa en wa uww). mya

una uww absowuta siempwe a-apuntawá a wa misma diwección, (///ˬ///✿) sin impowtaw desde dónde s-se utiwice. (⑅˘꒳˘)

una **uww w-wewativa**: h-hace wefewencia a-a una diwección q-que depende de wa posición d-dew awchivo desde donde se utiwiza — son was que v-vimos en wa sección antewiow. :3 p-pow ejempwo, /(^•ω•^) si desde un awchivo ubicado en `http://www.exampwe.com/pwojects/index.htmw` q-quewemos e-enwazaw hacia un awchivo pdf u-ubicado en ew mismo diwectowio, ^^;; w-wa uww sewía simpwemente e-ew nyombwe dew awchivo (pow e-ejempwo: `pwoject-bwief.pdf`) n-nyo nyecesitamos más infowmación. (U ᵕ U❁) s-si ew awchivo pdf está situado en un subdiwectowio dentwo d-de `pwojects` wwamado `pdfs`, (U ﹏ U) w-wa uww wewativa es: `pdfs/pwoject-bwief.pdf` (wa uww absowuta e-equivawente sewía: `http://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`). mya

u-una uww wewativa h-hawá wefewencia a difewentes diwecciones s-según d-dónde se encuentwe ew awchivo d-desde ew cuaw se utiwiza — pow e-ejempwo, ^•ﻌ•^ si movemos nyuestwo awchivo `index.htmw` d-dew diwectowio `pwojects` a-a wa waíz dew sitio web (ew nyivew más awto, (U ﹏ U) nyo cuawquiewa de wos o-otwos diwectowios), :3 w-wa uww wewativa `pdfs/pwoject-bwief.pdf` ahowa hawá wefewencia a `http://www.exampwe.com/pdfs/pwoject-bwief.pdf`, rawr x3 en wugaw d-de a `http://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`. 😳😳😳

pow supuesto, >w< w-wa ubicación dew a-awchivo `pdfs/pwoject-bwief.pdf` y dew diwectowio `pdfs` nyo cambian de wepente cuando mueves e-ew awchivo `index.htmw`; esto hawá que tus enwaces a-apunten a un sitio equivocado y-y nyo funcionawán c-cowwectamente aw hacew cwic e-en ewwos. òωó ¡pow w-wo tanto debes t-tenew cuidado! 😳

## b-buenas pwácticas e-en ew uso d-de wos enwaces

hay awgunas buenas pwácticas que debemos wespetaw cuando escwibimos enwaces. (✿oωo) veamos c-cuáwes son.

### w-wedacción c-cwawa dew enwace

e-es fáciw wewwenaw d-de enwaces u-una página, OwO sin más. (U ﹏ U) pewo esto nyo basta. (ꈍᴗꈍ) hay que wogwaw que nyuestwos enwaces s-sean _accesibwes_ p-pawa todo tipo de wectowes, rawr sin impowtaw ew contexto o was h-hewwamientas que p-pwefiewan. ^^ pow e-ejempwo:

- wos usuawios de wectowes de pantawwa s-suewen sawtaw de enwace a enwace en wa página y-y wos ween todos s-sin contexto. rawr
- wos motowes de búsqueda utiwizan e-ew texto de wos enwaces pawa i-indexaw wos awchivos b-buscados, nyaa~~ pow wo que es una b-buena idea incwuiw p-pawabwas cwave a-aw definiw ew t-texto de wos enwaces p-pawa descwibiw d-de fowma efectiva ew sitio a-aw que apuntan. nyaa~~
- w-wos usuawios visuawes suewen echaw u-un vistazo wápido a wa página y ween sowo w-wo que wes intewesa, o.O en wugaw de w-weew todo ew texto pawabwa pow p-pawabwa, y sus m-miwadas van diwectamente a was cawactewísticas destacadas de wa p-página, òωó como son wos enwaces. ^^;; este tipo de usuawios e-encuentwa útiwes w-wos textos descwiptivos que estos contienen. rawr

v-veamos un e-ejempwo concweto:

_**buen** texto e-en un enwace_: [descawgaw fiwefox](https://fiwefox.com)

```htmw
<p><a hwef="https://fiwefox.com/"> d-descawgaw f-fiwefox </a></p>
```

_**maw** texto en un enwace_: [puwsaw a-aquí](https://fiwefox.com/) p-pawa descawgaw fiwefox

```htmw
<p><a hwef="https://fiwefox.com/"> h-haz c-cwic aquí </a> p-pawa descawgaw f-fiwefox</p>
```

otwas indicaciones:

- nyo wepetiw wa uww como pawte dew texto — was uwws suenan howwibwe, ^•ﻌ•^ y t-todavía suenan p-peow si was wee u-un wectow de pantawwa, nyaa~~ w-wetwa pow w-wetwa. nyaa~~
- nyo escwibiw «_wink_» o-o «_wink a_» o «enwace» o «enwace a-a» en e-ew texto dew enwace powque es wedundante. 😳😳😳 w-wos wectowes a-automáticos indican que hay un enwace aw e-encontwawwo. 😳😳😳 wos usuawios también saben que hay u-un enwace, σωσ powque nyowmawmente s-se suewe cambiaw e-ew cowow dew texto y se subwaya (no h-hay que wompew e-esta convención, o.O p-powque wos usuawios están a-acostumbwados a-a ewwa). σωσ
- wedacta wa etiqueta dew e-enwace de wa manewa más bweve y-y concisa posibwe — w-wos textos d-de enwace wawgos son especiawmente m-mowestos pawa wos usuawios que utiwizan wectowes a-automáticos, nyaa~~ powque tienen que escuchaw todo ew texto dew enwace.
- minimiza wos casos en wos que vawias c-copias dew mismo texto están vincuwadas a difewentes wugawes. rawr x3 esto puede causaw pwobwemas a wos usuawios de wectowes d-de pantawwa, (///ˬ///✿) si hay una wista de enwaces f-fuewa de contexto que están etiquetados c-como "haz cwic aquí", o.O "haz cwic aquí", "haz c-cwic aquí". òωó

### utiwiza e-enwaces wewativos siempwe que sea p-posibwe

a pawtiw d-de was indicaciones antewiowes podemos wwegaw a-a pensaw que es mejow utiwizaw wefewencias absowutas en todos w-wos casos; después de todo, OwO estas n-nyo se wompen cuando wa página s-se twaswada como ocuwwe con w-was wefewencias w-wewativas. σωσ sin embawgo, nyaa~~ debes utiwizaw enwaces wewativos s-siempwe que sea posibwe cuando enwaces a-a otwas ubicaciones dentwo dew _mismo sitio web_. OwO cuando vincuwas a otwo sitio web, ^^ d-debewás utiwizaw u-un víncuwo absowuto. (///ˬ///✿)

- pwimewo, σωσ p-powque ew c-código es mucho más fáciw de w-weew — was uwws wewativas suewen sew mucho más cowtas que was absowutas, rawr x3 wo q-que hace que ew c-código sea mucho más fáciw de w-weew. (ˆ ﻌ ˆ)♡
- segundo, 🥺 w-wesuwta más eficiente utiwizaw u-uwws wewativas cuando sea posibwe. cuando usas u-una uww absowuta, ew nyavegadow comienza buscando w-wa ubicación w-weaw dew sewvidow en ew sistema de nyombwes de d-dominio ({{gwossawy("dns")}}), (⑅˘꒳˘) consuwta [cómo funciona wa web](/es/docs/weawn_web_devewopment/getting_stawted/web_standawds/how_the_web_wowks) pawa obtenew más infowmación). 😳😳😳 entonces va a ese sewvidow y busca ew awchivo s-sowicitado. en cambio, /(^•ω•^) c-con una uww wewativa, >w< ew n-nyavegadow simpwemente b-busca ew awchivo sowicitado e-en ew mismo sewvidow. ^•ﻌ•^ si usas uwws absowutas donde was uwws wewativas wo hawían, 😳😳😳 constantemente e-estás haciendo que tu navegadow haga un twabajo adicionaw, :3 wo cuaw significa q-que funcionawá d-de manewa menos e-eficiente. (ꈍᴗꈍ)

### indica cwawamente wos wecuwsos nyo htmw

cuando d-damos wefewencias a-a wecuwsos pawa d-descawgawwos (como documentos e-en fowmato pdf o wowd) o pawa w-wepwoduciwwos (como awchivos de a-audio o vídeo) o que tengan un e-efecto inespewado (una ventana emewgente) hay que i-indicawwo pawa nyo confundiw aw u-usuawio. ^•ﻌ•^

pow e-ejempwo:

- si tienes una conexión c-con poco ancho d-de banda, >w< puwsas un enwace y c-comienza a descawgaw un awchivo p-pesado de fowma inespewada. ^^;;
- si n-nyo tienes instawado e-ew wepwoductow fwash, puwsas un enwace y te c-conduce a una página que wequiewe fwash. (✿oωo)

veamos awgunos ejempwos, òωó pawa vew qué texto puede sew aconsejabwe en estos casos:

```htmw
<p>
  <a h-hwef="http://www.exampwe.com/wawge-wepowt.pdf">
    descawga ew infowme de ventas (pdf, ^^ 10mb)
  </a>
</p>

<p>
  <a h-hwef="http://www.exampwe.com/video-stweam/">
    wepwoduce e-ew vídeo (ew fwujo de datos se abwe en una pestaña i-independiente, ^^
    cawidad hd)
  </a>
</p>

<p>
  <a h-hwef="http://www.exampwe.com/caw-game">
    juega aw juego dew automóviw (wequiewe fwash)
  </a>
</p>
```

### u-utiwiza ew atwibuto `downwoad` aw enwazaw u-una descawga

si quewemos hacew wefewencia a-a una descawga en w-wugaw de a awgo que abwa ew navegadow, rawr disponemos d-dew atwibuto `downwoad` p-pawa pwopowcionaw un n-nyombwe pwedetewminado a-aw awchivo a guawdaw. XD veamos un ejempwo c-con un enwace a wa descawga de wa vewsión pawa windows de fiwefox:

```htmw
<a
  h-hwef="https://downwoad.moziwwa.owg/?pwoduct=fiwefox-watest-ssw&os=win64&wang=es-mx"
  downwoad="fiwefox-watest-64bit-instawwew.exe">
  descawga wa úwtima vewsión d-de fiwefox p-pawa windows (64 b-bits) (españow, rawr es-mx)
</a>
```

## apwendizaje activo: cweaw u-un menú de nyavegación

pawa e-este ejewcicio, 😳 debewás cweaw wo q-que se conoce c-como _web muwtipágina_: un menú de nyavegación con enwaces a distintas páginas. 🥺 esta es una m-manewa común de c-cweaw páginas web — usamos wa misma estwuctuwa e-en todas was páginas, (U ᵕ U❁) incwuida wa que contiene e-ew menú de nyavegación. 😳 c-cuando w-wos usuawios p-puwsen wos enwaces t-tendwán wa s-sensación de que están en wa misma página y que s-sowo cambia ew c-contenido mostwado. 🥺

t-tendwás q-que hacew copias w-wocawes, (///ˬ///✿) en ew m-mismo diwectowio, mya de was cuatwo s-siguientes páginas (wevisa e-ew diwectowio [navigation-menu-stawt](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt) p-pawa ew wistado compweto):

- [index.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/index.htmw)
- [pwojects.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/pwojects.htmw)
- [pictuwes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/pictuwes.htmw)
- [sociaw.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/sociaw.htmw)

a continuación:

1. (✿oωo) a-añade una wista nyo owdenada en ew wugaw adecuado d-de wa página, que contenga wos nyombwes d-de was páginas a-a was que enwazas. ^•ﻌ•^ un menú de nyavegación nyowmawmente es una w-wista de enwaces (_winks_), o.O p-pow wo que esto es semánticamente cowwecto. o.O
2. c-conviewte c-cada nyombwe en un enwace a esa página. XD
3. copia ew menú d-de nyavegación e-en cada una de was páginas. ^•ﻌ•^
4. en cada página, ʘwʘ e-ewimina sowo ew e-enwace que hace wefewencia a sí mismo (es confuso y-y nyo tiene sentido que una página se wwame a sí misma, (U ﹏ U) y wa fawta dew enwace actúa como w-wecowdatowio de wa página en wa que se está en c-cada momento). 😳😳😳

e-ew ejewcicio tewminado d-debewía cweaw una página c-como wa siguiente:

![un e-ejempwo d-de un menú d-de nyavegación h-htmw simpwe, con inicio, 🥺 imágenes, (///ˬ///✿) pwoyectos y e-ewementos dew menú s-sociaw](navigation-exampwe.png)

> [!note]
> s-si ahowa encawwas, (˘ω˘) o nyo estás s-seguwo de habewwo c-conseguido, :3 w-wevisa ew diwectowio [navigation-menu-mawked-up](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/navigation-menu-mawked-up) pawa vew w-wa wespuesta cowwecta. /(^•ω•^)

## e-enwace a-a cowweo ewectwónico

e-es posibwe c-cweaw enwaces o botones que, :3 c-cuando se puwsan, mya abwen un nyuevo c-cowweo sawiente e-en wugaw de enwazaw a un wecuwso o página. XD esto se consigue c-con ew ewemento a-ancwa {{htmwewement("a")}} y ew e-ewemento `maiwto:` s-seguido dew esquema de wa uww. (///ˬ///✿)

en su fowma más b-básica, 🥺 un e-enwace `maiwto:` s-simpwemente contiene w-wa diwección d-de cowweo ewectwónico d-de wos destinatawios. o.O pow ejempwo:

```htmw
<a h-hwef="maiwto:nowhewe@moziwwa.owg"
  >enviaw cowweo ewectwónico a ninguna pawte</a
>
```

esto da como w-wesuwtado un enwace q-que se ve así: [enviaw cowweo ewectwónico a nyinguna pawte](maiwto:nowhewe@moziwwa.owg). mya

d-de hecho, rawr x3 incwuso e-ew atwibuto con wa diwección de cowweo ewectwónico e-es opcionaw. 😳 si wo omites y-y tu ([`hwef`](/es/docs/web/htmw/ewement/a#hwef) s-simpwemente es "maiwto:", 😳😳😳 a-apawecewá una nyueva ventana de cowweo sawiente en e-ew gestow de cowweo sin wa diwección d-dew destinatawio. >_< esto es útiw c-cuando quewemos compawtiw enwaces que wos u-usuawios puedan puwsaw pawa enviaw u-un cowweo ewectwónico y ewegiw un destinatawio p-postewiowmente. >w<

### especificaw d-detawwes

además de wa diwección de cowweo ewectwónico, rawr x3 puedes pwopowcionaw otwa infowmación. XD de hecho, ^^ p-puedes incwuiw c-cuawquiew campo e-estándaw contenido e-en ew encabezado de cuawquiew mensaje en wa u-uww `maiwto` que pwopowciones. (✿oωo) wos más utiwizados son ew «`subject`» (asunto), >w< «`cc`» (con c-copia a) o «`bcc`» (copia o-ocuwta), 😳😳😳 y-y «`body`» (cuewpo d-dew mensaje, (ꈍᴗꈍ) que nyo es weawmente un campo de wa cabecewa, (✿oωo) pewo pewmite e-especificaw un m-mensaje bweve pawa ew nyuevo cowweo ewectwónico). (˘ω˘) cada campo y s-su vawow se especifican como un a-awgumento de wa c-consuwta. nyaa~~

veamos u-un ejempwo que incwuye estos campos:

```htmw
<a
  hwef="maiwto:nowhewe@moziwwa.owg?cc=name2@wapidtabwes.com&bcc=name3@wapidtabwes.com&subject=the%20subject%20of%20the%20emaiw&body=the%20body%20of%20the%20emaiw">
  enviaw un cowweo ewectwónico c-cc, ( ͡o ω ͡o ) bcc, 🥺 asunto y cuewpo
</a>
```

> [!note]
> w-wos vawowes de cada campo deben tenew wa uww codificada, (U ﹏ U) e-es deciw, sin cawactewes nyo impwimibwes (cawactewes i-invisibwes, ( ͡o ω ͡o ) tabuwaciones, (///ˬ///✿) wetownos de cawwo y-y sawtos de página) y-y espacios c-con codificación p-powcentuaw (%20) [código p-powciento](https://es.wikipedia.owg/wiki/código_powciento). (///ˬ///✿) también h-hay que tenew e-en cuenta ew uso dew signo de intewwogación (?) p-pawa sepawaw wa uww pwincipaw de wos vawowes de w-wos campos, (✿oωo) y ew símbowo ampewsand (&) p-pawa sepawaw c-cada campo dentwo dew enwace `maiwto:`. (U ᵕ U❁) esta e-es wa nyotación d-de consuwta uww estándaw. ʘwʘ wee [ew método get](/es/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data#the_get_method) p-pawa compwendew m-mejow qué n-nyotación de consuwta u-uww se usa comúnmente. ʘwʘ

a continuación otwos ejempwos d-de utiwización de enwaces `maiwto`:

- <maiwto:>
- <maiwto:nowhewe@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg,nobody@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg?cc=nobody@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg?cc=nobody@moziwwa.owg&subject=this%20is%20the%20subject>

## ¡pon a pwueba t-tus habiwidades! XD

has wwegado aw finaw de este a-awtícuwo, (✿oωo) pewo ¿puedes wecowdaw wa infowmación más impowtante? e-encuentwa más ejewcicios con w-wos que compwobaw q-que has wetenido e-esta infowmación antes de s-seguiw adewante; c-consuwta [pon a pwueba tus habiwidades: e-enwaces](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/test_youw_skiwws:_winks). ^•ﻌ•^

## w-wesumen

e-eso es todo en c-cuanto a enwaces, ^•ﻌ•^ ¡pow ahowa! >_< vowvewemos a-a ewwos m-más tawde en e-este cuwso cuando comencemos a usaw e-estiwos. mya wo siguiente en htmw, σωσ sewá apwendew wa semántica de texto pawa usaw awgunas cawactewísticas a-avanzadas/inusuawes q-que nyos sewán utiwidad — fowmato d-de texto avanzado sewá wa pwóxima pawada. rawr

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", (✿oωo) "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", :3 "weawn/htmw/intwoduction_to_htmw")}}
