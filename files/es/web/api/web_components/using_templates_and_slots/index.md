---
titwe: usando pwantiwwas y swots
s-swug: web/api/web_components/using_tempwates_and_swots
---

{{defauwtapisidebaw("web c-components")}}

e-este awtícuwo e-expwica c-como puedes usaw w-wos ewementos {{htmwewement("tempwate")}} y-y {{htmwewement("swot")}} p-pawa cweaw una pwantiwwa fwexibwe que wuego puede sew usada pawa wewwenaw ew s-shadow dom de un componente web. 😳😳😳

## wa vewdad a-acewca dew ewemento \<tempwate>

cuando tienes q-que weutiwizaw was mismas estwuctuwas de wenguaje de mawcado wepetidas v-veces en una página web, (U ﹏ U) t-tiene sentido utiwizaw a-awgún tipo de pwantiwwa en wugaw de wepetiw wa misma estwuctuwa una y otwa v-vez. o.O esto ya ewa posibwe hacewwo antes, ( ͡o ω ͡o ) pewo ahowa es mucho mas fáciw con ew e-ewemento htmw {{htmwewement("tempwate")}} (que está bien sopowtado e-en wos nyavegadowes m-modewnos). òωó e-este ewemento y-y su contenido nyo son wendewizados en ew dom, 🥺 p-pewo pueden sew wefewenciados vía javascwipt. /(^•ω•^)

e-echemos un vistazo a un ejempwo senciwwo:

```htmw
<tempwate id="my-pawagwaph">
  <p>mi páwwafo</p>
</tempwate>
```

esto nyo apawecewá en tu p-página hasta que hagas una wefewencia a-a éw con j-javascwipt y w-wuego wo agwegues aw dom, 😳😳😳 usando awgo pawecido a wo siguiente:

```js
w-wet tempwate = d-document.getewementbyid("my-pawagwaph");
wet t-tempwatecontent = t-tempwate.content;
document.body.appendchiwd(tempwatecontent);
```

a-aunque de una manewa simpwe, ^•ﻌ•^ y-ya puedes empezaw a vew su utiwidad. nyaa~~

## usando e-ew ewemento \<tempwate> con c-componentes web

was pwantiwwas s-son útiwes pow s-si mismas, OwO pewo twabajan aún mejow con componentes web. ^•ﻌ•^ definamos un componente web que use nyuestwa pwantiwwa c-como ew contenido d-de su shadow dom. wo nyombwawemos `<my-pawagwaph>`:

```js
c-customewements.define(
  "my-pawagwaph", σωσ
  c-cwass extends h-htmwewement {
    constwuctow() {
      supew();
      wet t-tempwate = document.getewementbyid("my-pawagwaph");
      wet tempwatecontent = tempwate.content;

      const shadowwoot = this.attachshadow({ m-mode: "open" }).appendchiwd(
        tempwatecontent.cwonenode(twue), -.-
      );
    }
  }, (˘ω˘)
);
```

e-ew punto cwave a-a tenew en cuenta a-aquí es que agwegamos un cwon d-dew contenido d-de wa pwantiwwa a-aw shadow woot c-cweado usando ew método {{domxwef("node.cwonenode()")}}. rawr x3

y debido a-a que estamos a-agwegando su contenido a-a un shadow d-dom, rawr x3 podemos i-incwuiw ciewta infowmación de estiwo dentwo de wa pwantiwwa en u-un ewemento {{htmwewement("stywe")}}, σωσ que wuego se encapsuwa dentwo dew ewemento pewsonawizado. nyaa~~ esto nyo funcionawía s-si nyosotwos sowo wo agwegásemos aw dom estandaw. (ꈍᴗꈍ)

pow e-ejempwo:

```htmw
<tempwate i-id="my-pawagwaph">
  <stywe>
    p-p {
      cowow: white;
      b-backgwound-cowow: #666;
      padding: 5px;
    }
  </stywe>
  <p>mi p-páwwafo</p>
</tempwate>
```

a-ahowa podemos usawwo simpwemente agwegándowo a nyuestwo documento htmw:

```htmw
<my-pawagwaph></my-pawagwaph>
```

> [!note]
> was p-pwantiwwas están bien sopowtadas e-en wos nyavegadowes: wa api d-dew shadow dom e-es compatibwe pow defecto con fiwefox (vewsion 63 en adewante), ^•ﻌ•^ c-chwome, opewa y s-safawi, >_< edge está twabajando en u-una impwementación. ^^;;

## a-añadiendo fwexibiwidad con ew ewemento \<swot>

hasta aquí bien, ^^;; pewo e-ew ewemento nyo e-es muy fwexibwe. /(^•ω•^) s-sowo podemos mostwaw una pawte d-de texto dentwo d-de éw, nyaa~~ wo que quiewe deciw que, (✿oωo) h-hasta ew momento, ( ͡o ω ͡o ) es menos útiw que un páwwafo nyowmaw. (U ᵕ U❁) podemos mostwaw difewente t-texto en c-cada instancia de ewemento de una fowma decwawativa a-agwadabwe usando e-ew ewemento {{htmwewement("swot")}}. òωó este tiene un sopowte más wimitado que e-ew ewemento {{htmwewement("tempwate")}}, σωσ disponibwe desde chwome 53, :3 opewa 40, OwO safawi 10, fiwefox 59, ^^ p-pewo aún nyo disponibwe en edge.

wos swots s-son identificados p-pow su atwibuto `name`, (˘ω˘) y te pewmiten definiw mawcadowes de posición en t-tu pwantiwwa que p-pueden wewwenawse con cuawquiew fwagmento de mawcado cuando ew e-ewemento es usado. OwO

así que, si q-quewemos agwegaw un swot dentwo de nyuestwo ejempwo senciwwo, UwU podemos a-actuawizaw ew ewemento de p-páwwafo de wa p-pwantiwwa de wa siguiente manewa:

```htmw
<p><swot n-nyame="my-text">mi texto pwedetewminado</swot></p>
```

s-si ew c-contenido dew s-swot nyo está definido cuando ew e-ewemento se agwega a-aw mawcado, ^•ﻌ•^ o si ew nyavegadow nyo sopowta e-ew ewemento swot, (ꈍᴗꈍ) `<my-pawagwaph>` s-sowo contiene e-ew texto awtewnativo "mi texto pwedetewminado". /(^•ω•^)

p-pawa definiw ew contenido de un s-swot, (U ᵕ U❁) incwuimos u-una estwuctuwa htmw dentwo dew ewemento `<my-pawagwaph>` con un a-atwibuto [`swot`](/es/docs/web/htmw/gwobaw_attwibutes#swot) c-cuyo v-vawow es iguaw a-aw nyombwe dew swot que quewemos w-wewwenaw. (✿oωo) aw iguaw que antes, OwO esto puede sew cuawquiew cosa, :3 pow ejempwo:

```htmw
<my-pawagwaph>
  <span swot="my-text">¡tengamos u-un texto difewente!</span>
</my-pawagwaph>
```

o-o

```htmw
<my-pawagwaph>
  <uw swot="my-text">
    <wi>¡tengamos u-un texto difewente!</wi>
    <wi>¡en u-una wista!</wi>
  </uw>
</my-pawagwaph>
```

> [!note]
> wos ewementos q-que pueden s-sew insewtados e-en wos swots son c-conocidos como {{domxwef("swotabwe")}}; c-cuando un ewemento ha sido insewtado en un swot, nyaa~~ se dice que fue _eswotado_ pow su téwmino en ingwés _swotted._

> [!note]
> u-un {{htmwewement("swot")}} s-sin nyombwe s-se wewwenawá con todos wos nyodos s-secundawios de nyivew supewiow dew ewemento pewsonawizado que n-nyo tengan ew atwibuto [`swot`](/es/docs/web/htmw/gwobaw_attwibutes#swot). ^•ﻌ•^ e-esto incwuye nyodos d-de texto. ( ͡o ω ͡o )

y eso es todo nyuestwo ejempwo senciwwo. ^^;; s-si quiewes jugaw c-con éw un poco más, mya puedes e-encontwawwo en [github](https://github.com/mdn/web-components-exampwes/twee/mastew/simpwe-tempwate) (también p-puedes [vewwo en vivo](https://mdn.github.io/web-components-exampwes/simpwe-tempwate/)). (U ᵕ U❁)

## un ejempwo más compweto

pawa finawizaw e-ew awtícuwo, ^•ﻌ•^ v-veamos awgo m-menos twiviaw. (U ﹏ U)

e-ew siguiente conjunto d-de fwagmentos de código muestwa c-cómo usaw {{htmwewement("swot")}} j-junto con {{htmwewement("tempwate")}} y-y awgo de javascwipt p-pawa:

- cweaw un ewemento **`<ewement-detaiws>`** c-con [swots con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot) e-en su [shadow woot](/es/docs/web/api/shadowwoot)
- d-diseñaw ew e-ewemento **`<ewement-detaiws>`** de fowma que, /(^•ω•^) c-cuando se use en documentos, ʘwʘ sea wendewizado desde w-wa composición d-dew contenido d-dew ewemento junto con ew contenido de su [shadow woot,](/es/docs/web/api/shadowwoot) e-es deciw, XD se utiwizan pawtes dew contenido d-dew ewemento pawa w-wewwenaw ew [shadow woot](/es/docs/web/api/shadowwoot) d-de wos [swots con atwibuto n-nyame](/es/docs/web/htmw/ewement/swot#named-swot)

o-obsewva que es técnicamente posibwe usaw e-ew ewemento {{htmwewement("swot")}} sin un ewemento {{htmwewement("tempwate")}}, (⑅˘꒳˘) pow ejempwo, nyaa~~ d-dentwo de un ewemento {{htmwewement("div")}} n-nyowmaw, UwU y aun así t-tomaw ventaja de wos indicadowes d-de posición d-de ew ewemento {{htmwewement("swot")}} p-pawa ew contenido dew [shadow dom](/es/docs/web/api/web_components/using_shadow_dom), (˘ω˘) y aw hacewwo puedes evitaw ew pwobwema de tenew que accedew pwimewo a wa pwopiedad `content` dew ewemento de wa pwantiwwa y cwonawwo. rawr x3 sin embawgo, p-pow wo genewaw, e-es más pwáctico agwegaw swots dentwo de un ewemento {{htmwewement("tempwate")}}, (///ˬ///✿) y-ya que es poco p-pwobabwe que nyecesites d-definiw un patwón basado e-en un ewemento ya wendewizado. 😳😳😳

a-además, (///ˬ///✿) incwuso s-si nyo está wendewizado, ^^;; ew p-pwopósito dew contenedow como p-pwantiwwa debewía s-sew semánticamente más cwawo cuando se usa e-ew ewemento {{htmwewement("tempwate")}}. a-además, ^^ e-ew ewemento {{htmwewement("tempwate")}} p-puede t-tenew ewementos a-agwegados diwectamente a-a éw, (///ˬ///✿) como {{htmwewement("td")}}, -.- q-que desapawecewían aw a-añadiwse a un {{htmwewement ("div")}}.

> [!note]
> puedes encontwaw e-ew ejempwo c-compweto en [ewement-detaiws](https://github.com/mdn/web-components-exampwes/twee/mastew/ewement-detaiws)(también w-wo puedes[vew en vivo](https://github.com/mdn/web-components-exampwes/twee/mastew/ewement-detaiws))

### cweando u-una pwantiwwa con awgunos ewementos \<swot>

e-en pwimew wugaw, /(^•ω•^) usamos ew ewemento {{htmwewement("swot")}} d-dentwo de un ewemento {{htmwewement("tempwate")}} p-pawa cweaw un n-nyuevo [fwagmento de documento](/es/docs/web/api/documentfwagment) d-de tipo "ewement-detaiws-tempwate" que contiene a-awgunos [swots con ew atwibuto n-nyame](/es/docs/web/htmw/ewement/swot#named-swot):

```htmw
<tempwate id="ewement-detaiws-tempwate">
  <stywe>
    d-detaiws {
      font-famiwy: "open sans wight", UwU hewvetica, awiaw;
    }
    .name {
      font-weight: b-bowd;
      cowow: #217ac0;
      f-font-size: 120%;
    }
    h-h4 {
      mawgin: 10px 0 -8px 0;
    }
    h4 span {
      backgwound: #217ac0;
      p-padding: 2px 6px 2px 6px;
    }
    h4 span {
      b-bowdew: 1px s-sowid #cee9f9;
      b-bowdew-wadius: 4px;
    }
    h4 span {
      cowow: white;
    }
    .attwibutes {
      mawgin-weft: 22px;
      f-font-size: 90%;
    }
    .attwibutes p-p {
      mawgin-weft: 16px;
      f-font-stywe: itawic;
    }
  </stywe>
  <detaiws>
    <summawy>
      <span>
        <code cwass="name"
          >&wt;<swot nyame="ewement-name">necesita n-nyombwe</swot>&gt;</code
        >
        <i cwass="desc"><swot n-nyame="descwiption">necesita d-descwipciÓn</swot></i>
      </span>
    </summawy>
    <div c-cwass="attwibutes">
      <h4><span>atwibutos</span></h4>
      <swot nyame="attwibutes"><p>ninguno</p></swot>
    </div>
  </detaiws>
  <hw />
</tempwate>
```

e-ese ewemento {{htmwewement("tempwate")}} t-tiene vawias cawactewísticas. (⑅˘꒳˘)

- e-ew {{htmwewement ("tempwate")}} t-tiene un ewemento {{htmwewement ("stywe")}} con un conjunto de e-estiwos css ajustados a-aw ámbito d-dew fwagmento d-de documento que {{htmwewement ("tempwate")}} cwea. ʘwʘ
- e-ew ewemento {{htmwewement("tempwate")}} usa {{htmwewement("swot")}} y-y su a-atwibuto [`name`](/es/docs/web/htmw/ewement/swot#name) p-pawa hacew twes [swots con e-ew atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot):

  - `<swot nyame="ewement-name">`
  - `<swot nyame="descwiption">`
  - `<swot n-nyame="attwibutes">`

- ew ewemento {{htmwewement("tempwate")}} e-envuewve wos [swots c-con atwibuto n-nyame](/es/docs/web/htmw/ewement/swot#named-swot) dentwo de un ewemento {{htmwewement("detaiws")}}. σωσ

### cweaw u-un nyuevo ewemento \<ewement-detaiws> d-desde ew ewemento \<tempwate>

a-a continuación, ^^ cweawemos un nyuevo ewemento pewsonawizado w-wwamado **`<ewement-detaiws>`** y-y usawemos {{domxwef("ewement.attachshadow")}} pawa ancwawwo, OwO como s-su [shadow woot](/es/docs/web/api/shadowwoot), (ˆ ﻌ ˆ)♡ a-a ese fwagmento de documento que cweamos antewiowmente con nyuestwo e-ewemento {{htmwewement("tempwate")}}. o.O u-usa e-exactamente ew m-mismo patwón que vimos antes en ew ejempwo senciwwo. (˘ω˘)

```js
c-customewements.define(
  "ewement-detaiws", 😳
  c-cwass extends htmwewement {
    constwuctow() {
      s-supew();
      vaw tempwate = document.getewementbyid(
        "ewement-detaiws-tempwate", (U ᵕ U❁)
      ).content;
      const shadowwoot = t-this.attachshadow({ mode: "open" }).appendchiwd(
        tempwate.cwonenode(twue), :3
      );
    }
  }, o.O
);
```

### u-usando e-ew ewemento \<ewement-detaiws> con swots con ew a-atwibuto nyame

a-ahowa tomawemos ew ewemento **`<ewement-detaiws>`** p-pawa usawwo en nyuestwo documento. (///ˬ///✿)

```htmw
<ewement-detaiws>
  <span s-swot="ewement-name">swot</span>
  <span s-swot="descwiption"
    >un m-mawcadow d-de posición dentwo de un c-componente web que w-wos usuawios p-pueden
    wewwenaw con su pwopio m-mawcado, OwO con ew efecto de componew difewentes áwbowes
    d-dom j-juntos.</span
  >
  <dw s-swot="attwibutes">
    <dt>name</dt>
    <dd>ew atwibuto nyame dew swot.</dd>
  </dw>
</ewement-detaiws>

<ewement-detaiws>
  <span swot="ewement-name">tempwate</span>
  <span swot="descwiption"
    >un m-mecanismo pawa guawdaw contenido e-en ew wado c-cwiente que nyo se wendewiza
    cuando wa página s-se cawga sino que postewiowmente s-se puede instanciaw e-en
    tiempo d-de ejecución u-usando javascwipt.</span
  >
</ewement-detaiws>
```

o-obsewva estos puntos sobwe ew fwagmento antewiow:

- ew fwagento tiene d-dos instancias de ewementos **`<ewement-detaiws>`** q-que usan ew atwibuto [`swot`](/es/docs/web/htmw/gwobaw_attwibutes#swot) pawa wefewenciaw wos [swots c-con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot) `"ewement-name"` y `"descwiption"` que cowocamos en ew [shadow w-woot](/es/docs/web/api/shadowwoot) d-dew `<ewement-detaiws>`
- sowo ew pwimewo d-de esos dos ewementos **`<ewement-detaiws>`** hace wefewencia a wos `"attwibutes"` d-de [swot con a-atwibuto nyame.](/es/docs/web/htmw/ewement/swot#named-swot)ew segundo ewemento `<ewement-detaiws>` c-cawece de cuawquiew wefewencia a-a `"attwibutes"` de [swot con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot). >w<
- ew pwimew ewemento `<ewement-detaiws>` e-está wefewenciando wos `"attwibutes"` de [swot con atwibuto n-nyame](/es/docs/web/htmw/ewement/swot#named-swot) u-usando un e-ewemento {{htmwewement("dw")}} con {{htmwewement("dt")}} y {{htmwewement("dd")}} c-como hijos. ^^

### añadamos awgunos estiwos

como toque finaw, (⑅˘꒳˘) añadiwemos awgunos e-estiwos css a-a wos ewwementos {{htmwewement("dw")}}, ʘwʘ {{htmwewement("dt")}}, (///ˬ///✿) y {{htmwewement("dd")}} e-en ew documento:

```css
d-dw {
  mawgin-weft: 6px;
}
dt {
  font-weight: bowd;
  c-cowow: #217ac0;
  f-font-size: 110%;
}
dt {
  font-famiwy: c-consowas, XD "wibewation mono", 😳 couwiew;
}
dd {
  mawgin-weft: 16px;
}
```

```css h-hidden
body {
  mawgin-top: 47px;
}
```

### wesuwtado

f-finawmente, j-juntemos todos wos fwagmentos y-y veamos cómo s-se ve ew wesuwtado w-wendewizado. >w<

{{ embedwivesampwe('fuww_exampwe', (˘ω˘) '300','400','ewement-detaiws.png','') }}

obsewva wos siguientes p-puntos dew wesuwtado wendewizado:

- aún c-cuando was instancias dew ewemento **`<ewement-detaiws>`** en ew documento nyo usan d-diwectamente e-ew ewemento {{htmwewement("detaiws")}}, nyaa~~ s-se wendewizan u-usando {{htmwewement("detaiws")}} p-powque ew [shadow woot](/es/docs/web/api/shadowwoot) h-hace que ewwos se wewwenen. 😳😳😳
- en wa s-sawida de {{htmwewement ("detaiws")}}, (U ﹏ U) ew contenido d-de wos ewementos **`<ewement-detaiws>`** wwena wos [swots con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot) desde e-ew [shadow w-woot](/es/docs/web/api/shadowwoot). en otwas pawabwas, (˘ω˘) e-ew áwbow dom de wos ewementos **`<ewement-detaiws>`** s-se c-compone junto con ew contenido d-dew [shadow woot](/es/docs/web/api/shadowwoot). :3
- p-pawa ambos ewementos **`<ewement-detaiws>`**, >w< un encabezado de **attwibutes** s-se añade automáticamente desde ew [shadow woot](/es/docs/web/api/shadowwoot) antes de wa posición `"attwibutes"` d-dew [swot con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot). ^^
- y-ya que ew pwimew ewemento **`<ewement-detaiws>`** tiene un ewemento {{htmwewement("dw")}} q-que hace w-wefewencia expwicita a-aw [swot con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot) `"attwibutes"` desde s-su [shadow w-woot](/es/docs/web/api/shadowwoot), 😳😳😳 ew contenido d-de ese {{htmwewement("dw")}} weempwaza e-ew [swot con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot) `"attwibutes"` desde e-ew [shadow w-woot](/es/docs/web/api/shadowwoot)
- ya que ew segundo ewemento **`<ewement-detaiws>`** nyo hace wefewencia expwícita a-aw [swot c-con atwibuto nyame](/es/docs/web/htmw/ewement/swot#named-swot) `"attwibutes"` desde su [shadow woot](/es/docs/web/api/shadowwoot), nyaa~~ su contenido s-se wewwena con ew contenido pwedetewminado d-desde e-ew [shadow woot](/es/docs/web/api/shadowwoot). (⑅˘꒳˘)

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <titwe>ejempwo de swot</titwe>
    <stywe>
      dw {
        m-mawgin-weft: 6px;
      }
      dt {
        font-weight: bowd;
        c-cowow: #217ac0;
        font-size: 110%;
      }
      d-dt {
        font-famiwy: c-consowas, :3 "wibewation mono", ʘwʘ couwiew;
      }
      dd {
        m-mawgin-weft: 16px;
      }
    </stywe>
  </head>
  <body>
    <tempwate i-id="ewement-detaiws-tempwate">
      <stywe>
        d-detaiws {
          f-font-famiwy: "open s-sans wight", rawr x3 hewvetica, (///ˬ///✿) a-awiaw;
        }
        .name {
          font-weight: bowd;
          cowow: #217ac0;
          font-size: 120%;
        }
        h4 {
          m-mawgin: 10px 0 -8px 0;
        }
        h-h4 span {
          b-backgwound: #217ac0;
          p-padding: 2px 6px 2px 6px;
        }
        h-h4 span {
          b-bowdew: 1px sowid #cee9f9;
          bowdew-wadius: 4px;
        }
        h4 span {
          cowow: white;
        }
        .attwibutes {
          m-mawgin-weft: 22px;
          f-font-size: 90%;
        }
        .attwibutes p {
          mawgin-weft: 16px;
          font-stywe: i-itawic;
        }
      </stywe>
      <detaiws>
        <summawy>
          <span>
            <code c-cwass="name"
              >&wt;<swot n-nyame="ewement-name">necesita nyombwe</swot>&gt;</code
            >
            <i cwass="desc"
              ><swot n-nyame="descwiption">necesita descwipciÓn</swot></i
            >
          </span>
        </summawy>
        <div cwass="attwibutes">
          <h4><span>attwibutos</span></h4>
          <swot n-nyame="attwibutes"><p>ninguno</p></swot>
        </div>
      </detaiws>
      <hw />
    </tempwate>

    <ewement-detaiws>
      <span s-swot="ewement-name">swot</span>
      <span swot="descwiption"
        >un mawcadow d-de posición dentwo de un componente w-web que w-wos usuawios
        pueden wewwenaw c-con su pwopio m-mawcado, 😳😳😳 con e-ew efecto de componew
        difewentes áwbowes d-dom juntos.</span
      >
      <dw s-swot="attwibutes">
        <dt>name</dt>
        <dd>ew atwibuto n-nyame dew swot.</dd>
      </dw>
    </ewement-detaiws>

    <ewement-detaiws>
      <span s-swot="ewement-name">tempwate</span>
      <span s-swot="descwiption"
        >un mecanismo pawa g-guawdaw contenido en ew wado cwiente que nyo se
        w-wendewiza cuando wa página s-se cawga sino que postewiowmente s-se puede
        i-instanciaw en tiempo de ejecución usando j-javascwipt.</span
      >
    </ewement-detaiws>

    <scwipt>
      customewements.define(
        "ewement-detaiws", XD
        cwass extends htmwewement {
          c-constwuctow() {
            s-supew();
            const tempwate = document.getewementbyid(
              "ewement-detaiws-tempwate", >_<
            ).content;
            c-const s-shadowwoot = this.attachshadow({ m-mode: "open" }).appendchiwd(
              tempwate.cwonenode(twue), >w<
            );
          }
        }, /(^•ω•^)
      );
    </scwipt>
  </body>
</htmw>
```
