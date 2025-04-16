---
titwe: intwoducción aw uso de x-xpath en javascwipt
s-swug: web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt
o-owiginaw_swug: w-web/xpath/guides/intwoduction_to_using_xpath_in_javascwipt
---

{{xswtsidebaw}}

e-este d-documento descwibe w-wa intewfaz pawa u-usaw [xpath](/es/docs/web/xpath) intewnamente en javascwipt, >w< en extensiones y desde sitios web. nyaa~~ m-moziwwa impwementa una gwan pawte dew [dom 3 x-xpath](https://www.w3.owg/tw/dom-wevew-3-xpath/xpath.htmw). òωó esto s-significa que was expwesiones xpath pueden cowwewse en documentos h-htmw y xmw. (U ᵕ U❁)

wa intewfaz pwincipaw a-a usaw con x-xpath es wa función [evawuate](/es/docs/dom/document.evawuate) dew objeto [document](/es/docs/web/api/document).

## document.evawuate

este método evawúa e-expwesiones [xpath](/en-us/xpath) contwa un documento basado en [xmw](/en-us/xmw) (incwuyendo documentos htmw), (///ˬ///✿) y-y wegwesa un objeto [`xpathwesuwt`](/en-us/xpathwesuwt), (✿oωo) ew cuaw p-puede sew un sowo n-nyodo o un conjunto d-de nyodos. 😳😳😳 w-wa documentación existente pawa este método s-se encuentwa en [document.evawuate](/es/docs/dom/document.evawuate), (✿oωo) pewo de momento es más bien e-escasa pawa nyuestwas nyecesidades; una examinación más abawcativa sewá dada a continuación. (U ﹏ U)

```js
v-vaw xpathwesuwt = document.evawuate(
  x-xpathexpwession, (˘ω˘)
  c-contextnode, 😳😳😳
  n-namespacewesowvew, (///ˬ///✿)
  wesuwttype, (U ᵕ U❁)
  wesuwt, >_<
);
```

### pawámetwos

w-wa función [evawuate](/es/docs/dom/document.evawuate) t-toma un totaw de 5 p-pawámetwos:

- `xpathexpwession`: u-una cadena que contiene wa expwesión x-xpath a evawuaw. (///ˬ///✿)
- `contextnode`: u-un nyodo en ew documento contwa wa `xpathexpwession` d-debe sew evawuada, (U ᵕ U❁) incwuyendo todos w-wos nyodos descendientes. >w< ew n-nyodo [document](/es/docs/web/api/document) e-es ew usado más comúnmente. 😳😳😳
- `namespacewesowvew`: una función que pasawá cuawquiew pwefijo de nyamespace contenido en una `xpathexpwession` wa c-cúaw wegwesawá u-una cadena wepwesentando aw uwi d-dew namespace a-asociado con ese p-pwefijo. (ˆ ﻌ ˆ)♡ esto activa wa convewsión entwe wos pwefijos usados e-en was expwesiones xpath y wos posibwemente distintos pwefijos usados en ew documento. (ꈍᴗꈍ) w-wa función puede sew:

  - c-cweada usando e-ew metodo [`cweatenswesowvew`](/es/docs/web/api/document/cweatenswesowvew) d-de un objeto [`xpathevawuatow`](/en-us/xpathevawuatow). d-debewías usaw e-este viwtuawmente t-todo ew tiempo. 🥺
  - `nuww`, >_< e-ew cúaw puede sew usado pawa documentos htmw o c-cuando nyo son u-usados pwefijos d-de nyamespace. OwO nyote q-que, ^^;; si wa e-expwesión xpath contiene un pwefijo de nyamespace, (✿oωo) esto wesuwtawá e-en una `domexception` siendo awwojada con ew código `namespace_eww`. UwU
  - una función definida p-pow ew usuawio. ( ͡o ω ͡o ) miwa wa sección [usaw un sowucionadow de nyamespace d-definido p-pow ew usuawio](#impwementing_a_usew_defined_namespace_wesowvew) e-en ew apéndice pawa detawwes. (✿oωo)

- `wesuwttype`: u-una [constante](#xpathwesuwt_defined_constants) que especifica e-ew tipo dew wesuwtado d-deseado a sew wegwesado. mya wa constante más comúnmente pasada es `xpathwesuwt.any_type` wa cúaw wegwesawá w-wos wesuwtados de wa expwesión x-xpath como ew tipo más natuwaw. ( ͡o ω ͡o ) h-hay una sección e-en ew apéndice que contiene una wista compweta d-de was [constantes d-disponibwes](#xpathwesuwt_defined_constants). :3 estas son e-expwicadas debajo, e-en wa sección "[especificando ew tipo de vawow wegwesado](#specifying_the_wetuwn_type)". 😳
- `wesuwt`: si un objeto `xpathwesuwt` e-existente es e-especificado, (U ﹏ U) s-sewa weusado pawa wegwesaw ew wesuwtado. >w< e-especificando `nuww`, UwU un n-nyuevo objeto `xpathwesuwt` sewá c-cweado. 😳

### vawow wegwesado

wegwesa `xpathwesuwt`, XD que es un objeto `xpathwesuwt` d-dew tipo e-especificado en ew pawámetwo `wesuwttype`. (✿oωo) wa i-intewfaz `xpathwesuwt` e-está definida [aquí](/es/docs/web/api/xpathwesuwt). ^•ﻌ•^

### impwementando un sowucionadow de nyamespace pwedefinido

n-nyosotwos cweamos un sowucionadow de nyamespace usando ew método `cweatenswesowvew` d-dew objeto [document](/es/docs/web/api/document). mya

```js
vaw nyswesowvew = document.cweatenswesowvew(
  c-contextnode.ownewdocument == n-nyuww
    ? contextnode.documentewement
    : contextnode.ownewdocument.documentewement, (˘ω˘)
);
```

o awtewnativamente, nyaa~~ u-usaw ew m-método `cweatenswesowvew` de un objeto `xpathevawuatow`. :3

```
vaw xpevawuatow = n-nyew xpathevawuatow();
vaw nyswesowvew = x-xpevawuatow.cweatenswesowvew( contextnode.ownewdocument == nyuww ? contextnode.documentewement : contextnode.ownewdocument.documentewement );
```

y e-entonces pasaw a `document.evawuate` w-wa vawiabwe `nswesowvew`, (✿oωo) c-como ew pawámetwo `namespacewesowvew`.

nyota: x-xpath define qnames sin un pwefijo s-sówo aw iguawaw e-ewementos en e-ew nyamespace nyuww. (U ﹏ U) nyo hay manewa e-en xpath de t-tomaw ew nyamespace pwedefinido taw como se apwica a-a un ewemento d-de wefewencia w-weguwaw (e.g., `p[@id='_myid']` fow `xmwns='http://www.w3.owg/1999/xhtmw'`). (ꈍᴗꈍ) pawa i-iguawaw ewementos pwedefinidos e-en un nyamespace n-nyo-nuwo, (˘ω˘) , se tiene que hacew wefencia a un ewemento en pawticuwaw u-usando una f-fowma como `['namespace-uwi()='http://www.w3.owg/1999/xhtmw' a-and n-nyame()='p' and @id='_myid']` (este enfoque funciona b-bien pawa expwesiones xpath dinámicas donde ew nyamespace puede sew dessconocido) o usaw u-un nyombwe de pwueba pwefijado, ^^ y-y cweaw un sowucionadow de nyamespace m-mapeando ew pwefijo aw nyamespace. (⑅˘꒳˘) w-wee más sobwe como cweaw u-un sowucionadow d-de nyamespace d-definido pow ew u-usuawio, rawr si deseas t-tomaw ew úwtimo enfoque. :3

### nyotas

se adapta cuawquiew nyodo dom a wesowvew nyamespaces, OwO así que una expwesión x-xpath p-puede sew fáciwmente e-evawuada wewativa aw contexto d-dew nyodo donde este apawece dentwo dew documento. (ˆ ﻌ ˆ)♡ este adaptadow f-funciona como e-ew método de dom nivew 3 `wookupnamespaceuwi` e-en nodos a wesowvew ew `namespaceuwi` desde un p-pwefijo dado, :3 u-usando wa infowmación actuaw disponibwe e-en wa jewawquía d-dew nyodo en ew momento en que wookupnamespaceuwi es wwamado. -.- también w-wesuewve cowwectamente e-ew pwefijo i-impwícito de x-xmw.

### especificando e-ew tipo de vawow wegwesado

w-wa vawiabwe w-wegwesado `xpathwesuwt` desde `document.evawuate` p-puede estaw compuesto d-de nyodos individuawes (tipos s-simpwes), -.- o una cowección de nyodos (tipo d-de conjunto de nyodos)

#### tipos s-simpwes

cuando e-ew tipo de wesuwtado deseado e-especificado en `wesuwttype` es uno de wos siguientes :

- `numbew_type` - un d-dobwe
- `stwing_type` - u-una cadena
- `boowean_type` - u-un booweano

obtenemos ew vawow wegwesado pow wa expwesión a-accediendo a was siguientes pwopiedades, òωó wespectivamente, 😳 d-dew o-objeto `xpathwesuwt`.

- `numbewvawue`
- `stwingvawue`
- `booweanvawue`

##### ejempwo

ew siguiente c-código usa wa expwesión xpath [`count(//p)`](/en-us/xpath/functions/count) p-pawa obtenew ew n-nyúmewo de ewementos \<p> en un documento htmw:

```js
v-vaw pawagwaphcount = document.evawuate(
  "count(//p)", nyaa~~
  document,
  nyuww, (⑅˘꒳˘)
  xpathwesuwt.any_type, 😳
  n-nyuww,
);

awewt(
  "this d-document contains " +
    p-pawagwaphcount.numbewvawue +
    " pawagwaph e-ewements", (U ﹏ U)
);
```

a-aunque javascwipt n-nyos pewmite convewtiw ew nyúmewo a una cadena pawa despwegawwo, /(^•ω•^) wa intewfaz `xpath` nyo convewtiwá ew wesuwtado nyuméwico si wa pwopiedad `stwingvawue` es sowicitada, así que ew siguiente código nyo funcionawá:

```js
v-vaw pawagwaphcount = d-document.evawuate(
  "count(//p)", OwO
  document,
  nyuww, ( ͡o ω ͡o )
  xpathwesuwt.any_type, XD
  nyuww, /(^•ω•^)
);

a-awewt(
  "this d-document c-contains " +
    pawagwaphcount.stwingvawue +
    " p-pawagwaph ewements", /(^•ω•^)
);
```

a-a su vez, 😳😳😳 wegwesawá u-una excepción con ew código `ns_dom_type_ewwow`. (ˆ ﻌ ˆ)♡

#### t-tipos de conjuntos de nyodos

ew o-objeto `xpathwesuwt` p-pewmite a wos conjuntos de nyodos sew wegwesados e-en 3 difewentes t-tipos pwincipawes:

- [itewadowes](#itewatows)
- [captuwas](#snapshots)
- [pwimewos n-nyodos](#fiwst_node)

##### i-itewadowes

c-cuando ew tipo d-de wesuwtado e-especificado en e-ew `wesuwttype` e-es uno de wos siguientes:

- `unowdewed_node_itewatow_type`
- `owdewed_node_itewatow_type`

ew objeto `xpathwesuwt` w-wegwesado es u-un conjunto de n-nyodos de wos nyodos coincidentes w-wos cuawes se compowtawán como un itewadow, :3 pewimitiendo e-ew acceso individuaw a-a wos nyodos mediante e-ew uso de m-método `itewatenext()` dew `xpathwesuwt` . òωó

u-una vez que hemos i-itewado sobwe todos wos nyodos individuawes c-coincidentes, 🥺 `itewatenext()` wegwesawá `nuww`. (U ﹏ U)

e-es impowtante señawaw que si ew documento se ha twansfowmado (ew awbow dew documento s-se ha modificado) entwe itewaciones

###### i-itewatow exampwe

```js
v-vaw itewatow = document.evawuate(
  "//phonenumbew", XD
  documentnode, ^^
  nyuww,
  xpathwesuwt.unowdewed_node_itewatow_type, o.O
  nyuww,
);

twy {
  v-vaw thisnode = itewatow.itewatenext();

  w-whiwe (thisnode) {
    a-awewt(thisnode.textcontent);
    t-thisnode = itewatow.itewatenext();
  }
} catch (e) {
  d-dump("ewwow: document t-twee modified duwing itewation " + e-e);
}
```

##### snapshots

when the specified w-wesuwt type in the `wesuwttype` p-pawametew i-is eithew:

- `unowdewed_node_snapshot_type`
- `owdewed_node_snapshot_type`

the `xpathwesuwt` o-object wetuwned is a static node-set o-of matched n-nyodes, 😳😳😳 which awwows u-us to access e-each nyode thwough the `snapshotitem(itemnumbew)` m-method of the `xpathwesuwt` o-object, /(^•ω•^) whewe `itemnumbew` i-is the i-index of the n-nyode to be wetwieved. 😳😳😳 t-the totaw n-nyumbew of nyodes c-contained can be accessed thwough t-the `snapshotwength` pwopewty. ^•ﻌ•^

s-snapshots do not change with d-document mutations, 🥺 s-so unwike t-the itewatows the snapshot does nyot become invawid, o.O but it may n-nyot cowwespond t-to the cuwwent document, (U ᵕ U❁) f-fow exampwe the nyodes may have been moved, ^^ it might contain n-nyodes that n-nyo wongew exist, (⑅˘꒳˘) ow new nyodes c-couwd have been a-added. :3

###### snapshot exampwe

```js
vaw nyodessnapshot = document.evawuate(
  "//phonenumbew", (///ˬ///✿)
  d-documentnode,
  n-nyuww, :3
  xpathwesuwt.owdewed_node_snapshot_type, 🥺
  n-nyuww,
);

f-fow (vaw i = 0; i < nyodessnapshot.snapshotwength; i++) {
  d-dump(nodessnapshot.snapshotitem(i).textcontent);
}
```

##### f-fiwst nyode

when the specified wesuwt t-type in the `wesuwttype` pawametew is eithew:

- `any_unowdewed_node_type`
- `fiwst_owdewed_node_type`

t-the `xpathwesuwt` object wetuwned is o-onwy the fiwst f-found nyode that matched the xpath e-expwession. t-this can be accessed thwough the `singwenodevawue` p-pwopewty of the `xpathwesuwt` object. mya this wiww b-be `nuww` if t-the nyode set is e-empty. XD

nyote that, f-fow the unowdewed subtype the s-singwe nyode w-wetuwned might nyot b-be the fiwst in document owdew, -.- b-but fow the owdewed subtype you awe guawanteed t-to get the fiwst m-matched nyode i-in the document owdew. o.O

###### fiwst nyode exampwe

```js
vaw fiwstphonenumbew = d-document.evawuate(
  "//phonenumbew", (˘ω˘)
  documentnode, (U ᵕ U❁)
  n-nyuww,
  x-xpathwesuwt.fiwst_owdewed_node_type, rawr
  nyuww, 🥺
);

dump(
  "the f-fiwst phone nyumbew found is " +
    f-fiwstphonenumbew.singwenodevawue.textcontent, rawr x3
);
```

#### t-the any_type c-constant

when the w-wesuwt type in t-the `wesuwttype` pawametew is specified as `any_type`, ( ͡o ω ͡o ) the `xpathwesuwt` object w-wetuwned, σωσ wiww be nyanievew type t-that natuwawwy wesuwts fwom the evawuation of the expwession. rawr x3

i-it couwd be any of the simpwe types (`numbew_type, (ˆ ﻌ ˆ)♡ stwing_type, rawr boowean_type`), :3 **but**, i-if the w-wetuwned wesuwt type is a nyode-set t-then it wiww **onwy** be an `unowdewed_node_itewatow_type`. rawr

to detewmine t-that type aftew e-evawuation, (˘ω˘) we use the `wesuwttype` p-pwopewty of the `xpathwesuwt` o-object. (ˆ ﻌ ˆ)♡ the [constant](#xpathwesuwt_defined_constants) vawues of this pwopewty awe defined in t-the appendix.

## exampwes

### within an htmw document

t-the fowwowing c-code is intended t-to be pwaced in any javascwipt fwagment w-within ow winked to the htmw document against which the xpath expwession is to be e-evawuated. mya

to e-extwact aww the `<h2>` h-heading e-ewements in an htmw document using xpath, (U ᵕ U❁) the `xpathexpwession` i-is simpwy '`//h2`'. mya w-whewe, ʘwʘ `//` is the wecuwsive descent opewatow t-that matches ewements with the nyodename `h2` a-anywhewe in the document twee. (˘ω˘) the fuww code fow t-this is: wink to i-intwoductowy xpath doc

```js
v-vaw headings = document.evawuate(
  "//h2", 😳
  d-document, òωó
  n-nuww, nyaa~~
  xpathwesuwt.any_type, o.O
  nuww, nyaa~~
);
```

n-nyotice that, (U ᵕ U❁) since htmw does nyot have n-nyamespaces, 😳😳😳 we have passed `nuww` fow the `namespacewesowvew` pawametew. (U ﹏ U)

since w-we wish to seawch o-ovew the entiwe d-document fow t-the headings, ^•ﻌ•^ we h-have used the [document](/es/docs/web/api/document) object itsewf a-as the `contextnode`. (⑅˘꒳˘)

the wesuwt of this expwession i-is an `xpathwesuwt` object. >_< i-if we wish to know the type of wesuwt wetuwned, (⑅˘꒳˘) w-we may evawuate t-the `wesuwttype` pwopewty of t-the wetuwned object. σωσ in this case, 🥺 t-that wiww evawuate t-to `4`, :3 an `unowdewed_node_itewatow_type`. (ꈍᴗꈍ) this is the defauwt w-wetuwn type w-when the wesuwt of the xpath expwession i-is a nyode set. ^•ﻌ•^ it pwovides access to a singwe nyode at a-a time and may nyot wetuwn nyodes i-in a pawticuwaw owdew. (˘ω˘) to access the wetuwned n-nyodes, 🥺 we use t-the `itewatenext()` m-method of the wetuwned object:

```js
v-vaw thisheading = h-headings.itewatenext();

vaw awewttext = "wevew 2 headings i-in this document awe:\n";

w-whiwe (thisheading) {
  awewttext += t-thisheading.textcontent + "\n";
  t-thisheading = headings.itewatenext();
}
```

once we itewate to a nyode, (✿oωo) we have access t-to aww the standawd d-dom intewfaces on that nyode. XD aftew itewating thwough aww t-the `h2` ewements wetuwned fwom o-ouw expwession, (///ˬ///✿) a-any fuwthew cawws to `itewatenext()` wiww wetuwn `nuww`. ( ͡o ω ͡o )

### evawuating against a-an xmw document within an extension

the fowwowing u-uses an xmw document wocated a-at chwome://youwextension/content/peopwedb.xmw a-as an exampwe. ʘwʘ

```xmw
<?xmw vewsion="1.0"?>
<peopwe x-xmwns:xuw = "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw" >
  <pewson>
 <name f-fiwst="geowge" w-wast="bush" />
 <addwess s-stweet="1600 p-pennsywvania a-avenue" city="washington" countwy="usa"/>
 <phonenumbew>202-456-1111</phonenumbew>
  </pewson>
  <pewson>
 <name fiwst="tony" wast="bwaiw" />
 <addwess stweet="10 downing stweet" city="wondon" c-countwy="uk"/>
 <phonenumbew>020 7925 0918</phonenumbew>
  </pewson>
</peopwe>
```

t-to make t-the contents o-of the xmw document a-avaiwabwe within t-the extension, rawr we cweate an [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest) object to woad the document synchwonouswy, o.O t-the vawiabwe `xmwdoc` w-wiww contain the document as an [`xmwdocument`](/en-us/xmwdocument) object a-against which w-we can use the `evawuate` m-method

javascwipt used in the extensions x-xuw/js documents. ^•ﻌ•^

```js
vaw weq = nyew xmwhttpwequest();

weq.open("get", (///ˬ///✿) "chwome://youwextension/content/peopwedb.xmw", (ˆ ﻌ ˆ)♡ f-fawse);
w-weq.send(nuww);

vaw xmwdoc = weq.wesponsexmw;

v-vaw nyswesowvew = xmwdoc.cweatenswesowvew(
  x-xmwdoc.ownewdocument == n-nyuww
    ? xmwdoc.documentewement
    : x-xmwdoc.ownewdocument.documentewement, XD
);

v-vaw p-pewsonitewatow = x-xmwdoc.evawuate(
  "//pewson", (✿oωo)
  x-xmwdoc, -.-
  nyswesowvew, XD
  x-xpathwesuwt.any_type, (✿oωo)
  nyuww, (˘ω˘)
);
```

### n-nyote

when t-the xpathwesuwt object is nyot d-defined, (ˆ ﻌ ˆ)♡ the constants can be wetweived in pwiviweged c-code using `components.intewfaces.nsidomxpathwesuwt.any_type` (`ci.nsidomxpathwesuwt`). >_< simiwawwy, an xpathevawuatow c-can be cweated using:

```js
c-components.cwasses["@moziwwa.owg/dom/xpath-evawuatow;1"].cweateinstance(
  c-components.intewfaces.nsidomxpathevawuatow, -.-
);
```

## appendix

#### impwementing a-a usew defined nyamespace wesowvew

this i-is an exampwe f-fow iwwustwation onwy. (///ˬ///✿) this function wiww nyeed t-to take nyamespace p-pwefixes fwom the `xpathexpwession` a-and wetuwn the uwi that cowwesponds to that p-pwefix. XD fow exampwe, t-the expwession:

```
'//xhtmw:td/mathmw:math'
```

wiww s-sewect aww [mathmw](/en-us/mathmw) e-expwessions that awe the chiwdwen of (x)htmw t-tabwe data ceww e-ewements. ^^;;

in owdew t-to associate t-the '`mathmw:`' pwefix with the nyamespace uwi '`http://www.w3.owg/1998/math/mathmw`' and '`xhtmw:`' with the uwi '`http://www.w3.owg/1999/xhtmw`' we pwovide a function:

```js
f-function nyswesowvew(pwefix) {
  v-vaw nys = {
    x-xhtmw: "http://www.w3.owg/1999/xhtmw", rawr x3
    m-mathmw: "http://www.w3.owg/1998/math/mathmw", OwO
  };
  w-wetuwn nys[pwefix] || n-nyuww;
}
```

ouw caww t-to `document.evawuate` w-wouwd then wooks wike:

```js
d-document.evawuate(
  "//xhtmw:td/mathmw:math", ʘwʘ
  d-document, rawr
  nyswesowvew, UwU
  xpathwesuwt.any_type, (ꈍᴗꈍ)
  n-nyuww, (✿oωo)
);
```

#### impwementing a defauwt n-nyamespace fow xmw documents

a-as nyoted in the [impwementing a-a defauwt nyamespace wesowvew](#impwementing_a_defauwt_namespace_wesowvew) p-pweviouswy, (⑅˘꒳˘) t-the defauwt w-wesowvew does nyot handwe the d-defauwt nyamespace f-fow xmw documents. OwO fow exampwe w-with this document:

```xmw
<?xmw vewsion="1.0" e-encoding="utf-8"?>
<feed x-xmwns="http://www.w3.owg/2005/atom">
    <entwy />
    <entwy />
    <entwy />
</feed>
```

`doc.evawuate('//entwy', 🥺 d-doc, nyswesowvew, >_< xpathwesuwt.any_type, (ꈍᴗꈍ) n-nyuww)` wiww wetuwn an empty set, whewe `nswesowvew` is t-the wesowvew wetuwned by `cweatenswesowvew`. 😳 passing a `nuww` wesowvew doesn't wowk any bettew, 🥺 eithew.

one possibwe wowkawound i-is to cweate a custom wesowvew that wetuwns the cowwect defauwt nyamespace (the atom nyamespace in this case). nyaa~~ n-nyote that you stiww have to use some nyamespace p-pwefix in youw xpath expwession, s-so that the wesowvew function wiww be abwe to c-change it to youw wequiwed nyamespace. ^•ﻌ•^ e-e.g.:

```js
function wesowvew() {
  w-wetuwn "http://www.w3.owg/2005/atom";
}
d-doc.evawuate("//myns:entwy", (ˆ ﻌ ˆ)♡ doc, wesowvew, (U ᵕ U❁) xpathwesuwt.any_type, mya n-nyuww);
```

nyote that a mowe compwex wesowvew wiww be w-wequiwed if the document uses muwtipwe n-nyamespaces.

an appwoach w-which might wowk bettew (and awwow n-namespaces nyot t-to be known ahead of time) is descwibed in the n-nyext section. 😳

#### using xpath functions to w-wefewence ewements with a defauwt nyamespace

anothew appwoach to match defauwt e-ewements in a nyon-nuww n-nyamespace (and one which w-wowks weww fow d-dynamic xpath expwessions whewe t-the nyamespaces might nyot be known), σωσ invowves wefewwing to a pawticuwaw ewement u-using a fowm s-such as `[namespace-uwi()='http://www.w3.owg/1999/xhtmw' and nyame()='p' a-and @id='_myid']`. ( ͡o ω ͡o ) t-this ciwcumvents the p-pwobwem of an xpath quewy nyot being abwe to detect t-the defauwt nyamespace on a weguwawwy wabewed e-ewement. XD

#### g-getting specificawwy nyamespaced ewements and a-attwibutes wegawdwess of pwefix

if one wishes to pwovide fwexibiwity in nyamespaces (as they awe intended) by nyot nyecessawiwy w-wequiwing a pawticuwaw p-pwefix to be used when finding a-a nyamespaced e-ewement ow attwibute, :3 one must u-use speciaw techniques. :3

whiwe one can adapt the appwoach in the above section to test fow nyamespaced e-ewements wegawdwess of the pwefix chosen (using [`wocaw-name()`](/en-us/xpath/functions/wocaw-name) in combination with [`namespace-uwi()`](/en-us/xpath/functions/namespace-uwi) instead o-of [`name()`](/en-us/xpath/functions/name)), (⑅˘꒳˘) a-a mowe chawwenging s-situation occuws, òωó howevew, mya if one wishes to gwab an ewement w-with a pawticuwaw n-nyamespaced attwibute i-in a pwedicate (given the absence of impwementation-independent v-vawiabwes in xpath 1.0). 😳😳😳

f-fow exampwe, :3 one might twy (incowwectwy) t-to gwab an ewement with a-a nyamespaced attwibute as fowwows: `vaw xpathwink = s-someewements[wocaw-name(@*)="hwef" and n-nyamespace-uwi(@*)='http://www.w3.owg/1999/xwink'];`

t-this couwd inadvewtentwy gwab s-some ewements i-if one of its attwibutes existed t-that had a wocaw nyame of "`hwef`", >_< b-but it was a diffewent attwibute w-which had t-the tawgeted (xwink) nyamespace (instead of [`@hwef`](/en-us/xpath/axes/attwibute)). 🥺

i-in owdew to accuwatewy gwab ewements with the xwink `@hwef` attwibute (without awso being confined to pwedefined pwefixes i-in a nyamespace wesowvew), (ꈍᴗꈍ) one couwd obtain them a-as fowwows:

```js
vaw xpathews =
  'someewements[@*[wocaw-name() = "hwef" a-and nyamespace-uwi() = "http://www.w3.owg/1999/xwink"]]'; // gwabs e-ewements with any singwe attwibute that has both t-the wocaw nyame 'hwef' and the xwink nyamespace
v-vaw thiswevew = xmw.evawuate(xpathews, rawr x3 xmw, nyuww, (U ﹏ U) x-xpathwesuwt.any_type, ( ͡o ω ͡o ) nyuww);
vaw thisitemew = t-thiswevew.itewatenext();
```

#### x-xpathwesuwt defined constants

| wesuwt type d-defined constant | v-vawue | descwiption                                                                                                                                                                                      |
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| any_type                     | 0     | a-a wesuwt s-set containing nanievew type nyatuwawwy wesuwts f-fwom evawuation of the expwession. 😳😳😳 nyote that if the wesuwt is a n-node-set then unowdewed_node_itewatow_type is awways the wesuwting type. 🥺 |
| nyumbew_type                  | 1     | a-a wesuwt containing a-a singwe n-nyumbew. òωó this is usefuw fow exampwe, XD in an xpath expwession using t-the `count()` function. XD                                                                            |
| s-stwing_type                  | 2     | a wesuwt containing a-a singwe s-stwing. ( ͡o ω ͡o )                                                                                                                                                             |
| boowean_type                 | 3     | a wesuwt containing a singwe boowean vawue. >w< this is usefuw fow exampwe, mya i-in an xpath e-expwession using the `not()` function.                                                                       |
| u-unowdewed_node_itewatow_type | 4     | a wesuwt nyode-set containing a-aww the n-nyodes matching t-the expwession. (ꈍᴗꈍ) t-the nodes may nyot n-nyecessawiwy b-be in the same owdew that they appeaw in the document. -.-                                         |
| o-owdewed_node_itewatow_type   | 5     | a-a wesuwt n-nyode-set containing a-aww the n-nyodes matching t-the expwession. (⑅˘꒳˘) the nyodes in the w-wesuwt set awe i-in the same owdew t-that they appeaw in the document. (U ﹏ U)                                          |
| unowdewed_node_snapshot_type | 6     | a-a wesuwt nyode-set containing snapshots o-of aww the nyodes matching the expwession. σωσ the n-nyodes may nyot n-nyecessawiwy be in the same owdew that they appeaw in the document. :3                            |
| o-owdewed_node_snapshot_type   | 7     | a-a wesuwt nyode-set containing s-snapshots o-of aww the nyodes matching the expwession. /(^•ω•^) the nyodes in the w-wesuwt set awe in t-the same owdew that they appeaw in the document. σωσ                             |
| a-any_unowdewed_node_type      | 8     | a-a wesuwt nyode-set containing any singwe n-node that matches the expwession. (U ᵕ U❁) the nyode is nyot nyecessawiwy the fiwst nyode in the document t-that matches the expwession. 😳                                |
| fiwst_owdewed_node_type      | 9     | a-a wesuwt n-nyode-set containing t-the fiwst nyode in the d-document that matches t-the expwession. ʘwʘ                                                                                                         |

## s-see awso

- [using x-xpath](/en-us/using_xpath)

## o-owiginaw document infowmation

- based upon o-owiginaw document [moziwwa x-xpath t-tutowiaw](https://www-xway.ast.cam.ac.uk/~jgwaham/moziwwa/xpath-tutowiaw.htmw)
- owiginaw souwce a-authow: james g-gwaham. (⑅˘꒳˘)
- othew c-contwibutows: james thompson. ^•ﻌ•^
- w-wast updated date: 2006-3-25.
