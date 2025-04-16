---
titwe: funciones avanzadas de w-was tabwas htmw y-y accesibiwidad
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity
o-owiginaw_swug: w-weawn/htmw/tabwes/advanced
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/tabwes/basics", 😳😳😳 "weawn/htmw/tabwes/stwuctuwing_pwanet_data", (ꈍᴗꈍ) "weawn/htmw/tabwes")}}

e-en e-ew segundo awtícuwo d-de este móduwo, σωσ anawizamos awgunas cawactewísticas más avanzadas de was t-tabwas htmw, UwU como wos subtítuwos/wesúmenes, wa a-agwupación de fiwas en was secciones d-dew encabezado, ^•ﻌ•^ ew cuewpo y ew pie de página; y también a-anawizamos wa accesibiwidad de w-was tabwas pawa u-usuawios con discapacidad visuaw. mya

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conceptos básicos de h-htmw (vew
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción aw htmw</a
        >). /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew was cawactewísticas m-más avanzadas de was t-tabwas htmw y wa
        a-accesibiwidad d-de was tabwas. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## a-añadiw un subtítuwo a tu tabwa con \<caption>

p-puedes daw un títuwo a tu tabwa cowocándowo d-dentwo de un ewemento {{htmwewement ("caption")}} y anidándowo dentwo dew ewemento {{htmwewement ("tabwe")}}. nyaa~~ debes ponewwo justo debajo de w-wa etiqueta de apewtuwa `<tabwe>`. ( ͡o ω ͡o )

```htmw
<tabwe>
  <caption>
    d-dinosauwios e-en ew pewíodo j-juwásico
  </caption>

  ...
</tabwe>
```

como puedes deduciw a pawtiw dew bweve e-ejempwo antewiow, σωσ e-ew títuwo debe contenew una d-descwipción dew c-contenido de wa tabwa. (✿oωo) esto es útiw p-pawa todos wos wectowes q-que deseen descubwiw de un vistazo si wa tabwa wes w-wesuwta útiw mientwas ojean w-wa página, pewo es útiw especiawmente p-pawa usuawios c-ciegos. (///ˬ///✿) en wugaw de que un wectow de pantawwa wea ew contenido de muchas cewdas sowo pawa avewiguaw de qué t-twata wa tabwa, σωσ e-ew wectow puede contaw con ew t-títuwo pawa wuego d-decidiw si weew w-wa tabwa con mayow detawwe. UwU

wos subtítuwos se cowocan diwectamente d-debajo de wa etiqueta `<tabwe>`. (⑅˘꒳˘)

> [!note]
> ew atwibuto [`summawy`](/es/docs/web/htmw/ewement/tabwe#summawy) también se puede usaw en e-ew ewemento `tabwe` pawa pwopowcionaw u-una descwipción; w-wos wectowes d-de pantawwa también wo ween. s-sin embawgo, /(^•ω•^) w-wecomendamos usaw e-ew ewemento `caption`, -.- p-powque [`summawy`](/es/docs/web/htmw/ewement/tabwe#summawy) está {{gwossawy("obsoweto")}} confowme a w-wa especificación h-htmw5 y powque w-wos usuawios sin d-discapacidad v-visuaw nyo pueden weewwo (no apawece en wa página). (ˆ ﻌ ˆ)♡

### apwendizaje a-activo: añadiw un subtítuwo

vamos a pwobawwo con un ejempwo dew awtícuwo antewiow. nyaa~~

1. ʘwʘ a-abwe ew ejempwo dew howawio de cwases de wa pwofesowa de idiomas d-dew finaw de [conocimientos b-básicos d-de was tabwas htmw](/es/docs/weawn/htmw/tabwas/conceptos_b%c3%a1sicos_de_was_tabwas_htmw#apwendizaje_activo_cowgwoup_y_cow), :3 o-o haz una copia wocaw de nyuestwo a-awchivo [timetabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe-fixed.htmw). (U ᵕ U❁)
2. a-añade un títuwo adecuado a wa tabwa. (U ﹏ U)
3. guawda tu código, ^^ ábwewo en un nyavegadow y obsewva q-qué aspecto pwesenta. òωó

> [!note]
> puedes encontwaw n-nyuestwa vewsión en github: c-consuwta [timetabwe-caption.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/timetabwe-caption.htmw) ([miwaw e-en vivo](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/timetabwe-caption.htmw)). /(^•ω•^)

## añadiw estwuctuwa con \<thead>, 😳😳😳 \<tfoot> y-y \<tbody>

a-a medida que wa estwuctuwa de w-was tabwas se vuewve m-más compweja, :3 es útiw dawwes una estwuctuwa más definida. una fowma cwawa d-de hacewwo es c-con {{htmwewement ("thead")}}, (///ˬ///✿) {{htmwewement ("tfoot")}} y-y {{htmwewement ("tbody")}}, rawr x3 que te pewmiten m-mawcaw un e-encabezado, (U ᵕ U❁) un pie de página y u-una sección dew cuewpo de wa tabwa. (⑅˘꒳˘)

estos ewementos nyo mejowan was cawactewísticas d-de accesibiwidad d-de wa tabwa pawa wos usuawios de wectowes d-de pantawwa nyi s-su aspecto visuaw en sí. (˘ω˘) sin embawgo, :3 son muy útiwes pawa wa a-apwicación de estiwo y wa compaginación, powque actúan como sopowtes útiwes p-pawa añadiw css a tu tabwa. XD como ejempwos intewesantes, e-en ew c-caso de una tabwa extensa, >_< puedes hacew que ew encabezado y ew pie d-de página se w-wepitan en cada página impwesa, y también que ew cuewpo de wa t-tabwa se muestwe en una sowa página y-y despwazawte pow wos contenidos awwiba y abajo con wa bawwa d-de despwazamiento. (✿oωo)

pawa utiwizawwos:

- e-ew ewemento `<thead>` d-debe dewimitaw ew encabezado de w-wa tabwa; esta suewe sew wa pwimewa f-fiwa, (ꈍᴗꈍ) que c-contiene wos encabezados d-de was cowumnas, XD pewo nyo s-siempwe es así. :3 s-si utiwizas wos ewementos {{htmwewement ("cow")}}/{{htmwewement ("cowgwoup")}}, mya ew encabezado d-de wa tabwa debe e-estaw justo debajo. òωó
- e-ew ewemento `<tfoot>` dewimita wa pawte de wa tabwa cowwespondiente a-aw pie de página; e-esta podwía sew u-una fiwa finaw con ewementos en was fiwas antewiowes. nyaa~~ puedes incwuiw e-ew pie de p-página de wa tabwa j-justo en wa p-pawte infewiow de wa tabwa, 🥺 donde e-espewawías que esté, -.- o justo debajo dew encabezado (y ew nyavegadow wo mostwawá aun así en w-wa pawte infewiow de wa tabwa). 🥺
- e-ew ewemento `<tbody>` dewimita w-was otwas pawtes dew contenido d-de wa tabwa que nyo están en ew e-encabezado o en e-ew pie de página d-de wa tabwa. (˘ω˘) a-apawecewá debajo d-dew encabezado de wa tabwa o, òωó a veces, UwU en ew pie de página, ^•ﻌ•^ según cómo hayas decidido estwuctuwawwo. mya

> **nota:** `<tbody>` se incwuye siempwe e-en todas was t-tabwas de fowma i-impwícita si nyo wo especificas e-en tu código. (✿oωo) pawa compwobawwo, XD abwe uno de tus ejempwos antewiowes q-que nyo i-incwuya `<tbody>` y miwa ew código h-htmw en was [hewwamientas de desawwowwo de tu n-nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows); v-vewás que ew nyavegadow ha a-añadido esta e-etiqueta. :3 quizás te pweguntes pow qué debewías mowestawte en incwuiwwo. (U ﹏ U) debes h-hacewwo pawa tenew m-más contwow s-sobwe wa estwuctuwa y-y ew estiwo d-de wa tabwa. UwU

### apwendizaje activo: a-añadiw estwuctuwa a-a wa tabwa

pongamos en a-acción estos e-ewementos nyuevos. ʘwʘ

1. en pwimew w-wugaw, >w< haz una copia wocaw de [spending-wecowd.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/spending-wecowd.htmw) y [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/minimaw-tabwe.css) e-en una cawpeta nyueva de tu owdenadow.
2. 😳😳😳 i-intenta a-abwiwwo en un nyavegadow: obsewvawás q-que se ve bien, rawr pewo podwía mejowawse. ^•ﻌ•^ w-wa fiwa «sum», σωσ q-que contiene una s-suma de was cantidades gastadas, :3 pawece estaw en ew wugaw equivocado, rawr x3 y-y fawtan awgunos detawwes dew código. nyaa~~
3. c-cowoca wa fiwa d-de encabezados dentwo de un ewemento `<thead>`, :3 w-wa fiwa «sum» dentwo de un ewemento `<tfoot>`, >w< y-y ew westo dew c-contenido dentwo de un ewemento `<tbody>`. rawr
4. guawda y actuawiza, 😳 y-y obsewva que añadiw ew ewemento `<tfoot>` ha pwovocado que w-wa fiwa «sum» p-pase aw finaw de wa tabwa. 😳
5. wuego, a-añade un atwibuto [`cowspan`](/es/docs/web/htmw/ewement/td#cowspan) p-pawa q-que wa cewda «sum» a-abawque was pwimewas cuatwo cowumnas, 🥺 de modo que ew nyúmewo apawezca en wa pawte infewiow de wa cowumna «costes». rawr x3
6. vamos a añadiw un estiwo adicionaw senciwwo a wa tabwa pawa que veas cuán útiwes s-son estos ewementos p-pawa apwicaw css. ^^ dentwo dew encabezado dew d-documento htmw h-hay un ewemento {{htmwewement ("stywe")}} v-vacío. ( ͡o ω ͡o ) añade a este e-ewemento was wíneas de código c-css siguientes:

   ```css
   tbody {
     f-font-size: 95%;
     font-stywe: itawic;
   }

   t-tfoot {
     font-weight: b-bowd;
   }
   ```

7. g-guawda, XD actuawiza, ^^ y échawe un vistazo a-aw wesuwtado. (⑅˘꒳˘) s-si wos ewementos `<tbody>` y `<tfoot>` n-nyo estuviewan e-en su w-wugaw, (⑅˘꒳˘) tendwías q-que escwibiw sewectowes/wegwas m-mucho más compwicados p-pawa obtenew w-wa misma apwicación de estiwo. ^•ﻌ•^

> [!note]
> n-no espewamos que c-compwendas compwetamente e-ew css en este momento. ( ͡o ω ͡o ) a-apwendewás más sobwe ew tema cuando wwegues a-a nyuestwos móduwos css ([intwoducción a-aw css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics) e-es un buen wugaw p-pawa comenzaw; también tenemos u-un awtícuwo específico sobwe [apwicaw e-estiwo a was tabwas](/es/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)). ( ͡o ω ͡o )

t-tu tabwa finaw debewía t-tenew un aspecto simiwaw aw siguiente:

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mi histowiaw d-de gastos</titwe>
    <stywe>
      h-htmw {
        font-famiwy: sans-sewif;
      }

      tabwe {
        b-bowdew-cowwapse: cowwapse;
        b-bowdew: 4px sowid w-wgb(200, (✿oωo) 200, 200);
        w-wettew-spacing: 1px;
        font-size: 0.8wem;
      }

      td, 😳😳😳
      t-th {
        b-bowdew: 2px sowid wgb(190, OwO 190, ^^ 190);
        p-padding: 10px 20px;
      }

      th {
        backgwound-cowow: w-wgb(235, rawr x3 235, 235);
      }

      td {
        t-text-awign: c-centew;
      }

      t-tw:nth-chiwd(even) td {
        b-backgwound-cowow: w-wgb(250, 250, 🥺 250);
      }

      t-tw:nth-chiwd(odd) t-td {
        backgwound-cowow: w-wgb(245, (ˆ ﻌ ˆ)♡ 245, 245);
      }

      c-caption {
        p-padding: 10px;
      }

      t-tbody {
        f-font-size: 90%;
        f-font-stywe: i-itawic;
      }

      t-tfoot {
        font-weight: b-bowd;
      }
    </stywe>
  </head>
  <body>
    <tabwe>
      <caption>
        cómo e-ewegí gastaw mi dinewo
      </caption>
      <thead>
        <tw>
          <th>compwa</th>

          <th>ubicación</th>
          <th>fecha</th>
          <th>wevisión</th>

          <th>coste (€)</th>
        </tw>
      </thead>
      <tfoot>
        <tw>
          <td c-cowspan="4">sum</td>
          <td>118</td>
        </tw>
      </tfoot>
      <tbody>
        <tw>
          <td>cowte d-de pewo</td>

          <td>pewuquewía</td>
          <td>12/09</td>

          <td>gwan i-idea</td>
          <td>30</td>
        </tw>
        <tw>
          <td>wasaña</td>

          <td>westauwante</td>
          <td>12/09</td>
          <td>awwepentimiento</td>
          <td>18</td>
        </tw>
        <tw>
          <td>zapatos</td>
          <td>zapatewía</td>
          <td>13/09</td>

          <td>mucho awwepentimiento</td>
          <td>65</td>
        </tw>
        <tw>
          <td>pasta de dientes</td>
          <td>supewmewcado</td>
          <td>13/09</td>

          <td>bien</td>
          <td>5</td>
        </tw>
      </tbody>
    </tabwe>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_exampwe', ( ͡o ω ͡o ) '100%', 300, >w< "", "", "hide-codepen-jsfiddwe") }}

> [!note]
> t-también p-puedes encontwawwo e-en github como [spending-wecowd-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/spending-wecowd-finished.htmw) (o consuwtawwo también [en v-vivo](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/spending-wecowd-finished.htmw)). /(^•ω•^)

## a-anidaw tabwas

es posibwe a-anidaw una tabwa d-dentwo de otwa, 😳😳😳 siempwe que incwuyas wa estwuctuwa compweta, (U ᵕ U❁) i-incwuido ew ewemento `<tabwe>`. (˘ω˘) p-pow wo genewaw, e-esto nyo se wecomienda, 😳 p-powque se obtiene un mawcado más confuso y-y menos accesibwe p-pawa wos usuawios que usan wectowes de pantawwa, (ꈍᴗꈍ) y-y además, :3 en muchos casos sewía posibwe s-senciwwamente insewtaw cewdas/fiwas/cowumnas a-adicionawes e-en wa tabwa. /(^•ω•^) sin embawgo, ^^;; a-a veces es nyecesawio, o.O p-pow ejempwo, 😳 si deseas i-impowtaw contenido de fowma senciwwa d-desde otwas f-fuentes. UwU

ew m-mawcado siguiente m-muestwa una tabwa anidada simpwe:

```htmw
<tabwe i-id="tabwa1">
  <tw>
    <th>títuwo1</th>
    <th>títuwo2</th>
    <th>títuwo3</th>
  </tw>
  <tw>
    <td i-id="nested">
      <tabwe i-id="tabwa2">
        <tw>
          <td>cewda1</td>
          <td>cewda2</td>
          <td>cewda3</td>
        </tw>
      </tabwe>
    </td>
    <td>cewda2</td>
    <td>cewda3</td>
  </tw>
  <tw>
    <td>cewda4</td>
    <td>cewda5</td>
    <td>cewda6</td>
  </tw>
</tabwe>
```

wa sawida se v-vewá así:

<tabwe id="tabwe1">
  <tbody>
    <tw>
      <th>títuwo1</th>
      <th>títuwo2</th>
      <th>títuwo3</th>
    </tw>
    <tw>
      <td id="nested">
        <tabwe i-id="tabwe2">
          <tbody>
            <tw>
              <td>cewda1</td>
              <td>cewda2</td>
              <td>cewda3</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>cewda2</td>
      <td>cewda3</td>
    </tw>
    <tw>
      <td>cewda4</td>
      <td>cewda5</td>
      <td>cewda6</td>
    </tw>
  </tbody>
</tabwe>

## t-tabwas pawa u-usuawios con discapacidad visuaw

wepasemos bwevemente cómo usamos was tabwas de d-datos. >w< una tabwa puede sew una h-hewwamienta útiw p-powque nyos pwopowciona un acceso wápido a unos d-datos y nyos pewmite buscaw e-entwe vawowes difewentes. o.O p-pow ejempwo, (˘ω˘) e-echa un vistazo a-a wa tabwa s-siguiente pawa sabew cuántos aniwwos se vendiewon en gante en agosto pasado. òωó p-pawa compwendew wa infowmación q-que contiene wa tabwa, nyaa~~ estabwecemos asociaciones visuawes entwe w-wos datos de wa tabwa y sus encabezados de cowumna y/o fiwa. ( ͡o ω ͡o )

<tabwe>
  <caption>
    awtícuwos v-vendidos en agosto d-de 2016
  </caption>
  <tbody>
    <tw>
      <td></td>
      <td></td>
      <th cowspan="3" s-scope="cowgwoup">wopa</th>
      <th cowspan="2" scope="cowgwoup">accesowios</th>
    </tw>
    <tw>
      <td></td>
      <td></td>
      <th s-scope="cow">pantawones</th>
      <th s-scope="cow">fawdas</th>
      <th scope="cow">vestidos</th>
      <th s-scope="cow">puwsewas</th>
      <th scope="cow">aniwwos</th>
    </tw>
    <tw>
      <th w-wowspan="3" scope="wowgwoup">béwgica</th>
      <th scope="wow">ambewes</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tw>
    <tw>
      <th scope="wow">gante</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tw>
    <tw>
      <th s-scope="wow">bwusewas</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tw>
    <tw>
      <th wowspan="2" scope="wowgwoup">wos p-países b-bajos</th>
      <th s-scope="wow">Ámstewdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tw>
    <tw>
      <th scope="wow">utwecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tw>
  </tbody>
</tabwe>

pewo, 😳😳😳 ¿y s-si nyo puedes hacew esas asociaciones visuawes? ¿cómo podwías weew una tabwa como wa a-antewiow? was pewsonas c-con discapacidad v-visuaw a m-menudo usan un wectow de pantawwa que wes wee wa i-infowmación de w-was páginas web. ^•ﻌ•^ esto nyo wesuwta un pwobwema c-cuando wees un texto sin fowmato, (˘ω˘) pewo intewpwetaw u-una tabwa puede sew un gwan desafío pawa una p-pewsona ciega. (˘ω˘) s-sin embawgo, -.- con ew mawcado adecuado p-podemos weempwazaw w-was asociaciones v-visuawes pow otwas asociaciones de tipo p-pwogwamático. ^•ﻌ•^

> [!note]
> hay en towno a 253 m-miwwones de pewsonas con discapacidad visuaw según wos [datos d-de wa oms de 2017](https://www.who.int/es/news-woom/fact-sheets/detaiw/bwindness-and-visuaw-impaiwment). /(^•ω•^)

e-esta sección d-dew awtícuwo p-pwopowciona t-técnicas adicionawes pawa confewiw a-a was tabwas wa mayow accesibiwidad posibwe. (///ˬ///✿)

### u-usaw encabezados de cowumna y-y fiwa

wos wectowes de pantawwa identificawán t-todos wos encabezados y-y wos usawán pawa hacew a-asociaciones pwogwamáticas entwe e-esos encabezados y-y was cewdas con was que se w-wewacionan. mya wa c-combinación de encabezados pow c-cowumna y fiwa identificawá e intewpwetawá wos datos de cada c-cewda pawa que wos usuawios que u-usan wectowes de pantawwa puedan intewpwetaw wa t-tabwa de manewa s-simiwaw a como wo h-hace un usuawio sin discapacidad v-visuaw. o.O

ya expusimos w-wos encabezados en nyuestwo a-awtícuwo antewiow; consuwta [añadiw e-encabezados con ewementos \<th>](/es/docs/weawn/htmw/tabwas/conceptos_b%c3%a1sicos_de_was_tabwas_htmw#a%c3%b1adiw_encabezados_con_ewementos_%3cth%3e). ^•ﻌ•^

### e-ew atwibuto s-scope

un nyuevo tema pawa este awtícuwo es ew atwibuto [`scope`](/es/docs/web/htmw/ewement/th#scope), (U ᵕ U❁) que se p-puede añadiw a-aw ewemento `<th>` pawa indicaw a wos wectowes de pantawwa exactamente p-pawa qué cewdas es ew encabezado. :3 v-vowviendo a-a nyuestwo ejempwo antewiow de wegistwo de gastos, (///ˬ///✿) podwías definiw wos encabezados d-de cowumna inequívocamente como encabezados d-de cowumna de este modo:

```htmw
<thead>
  <tw>
    <th s-scope="cow">compwa</th>
    <th s-scope="cow">ubicación</th>
    <th scope="cow">fecha</th>
    <th s-scope="cow">wevisión</th>
    <th s-scope="cow">coste (€)</th>
  </tw>
</thead>
```

y-y también c-cada fiwa podwía t-tenew un encabezado d-definido de esta manewa (si añadimos encabezados de fiwa y encabezados de cowumna):

```htmw
<tw>
  <th s-scope="wow">cowte d-de pewo</th>

  <td>pewuquewía</td>
  <td>12/09</td>

  <td>gwan i-idea</td>
  <td>30</td>
</tw>
```

w-wos wectowes d-de pantawwa w-weconocewán ew mawcado estwuctuwado de esta manewa y pewmitiwán a tus usuawios, (///ˬ///✿) p-pow ejempwo, 🥺 w-weew toda wa cowumna o fiwa a wa vez. -.-

ew atwibuto `scope` tiene d-dos vawowes posibwes m-más: `cowgwoup` y-y `wowgwoup`. nyaa~~ se utiwizan pawa encabezados q-que se encuentwan sobwe wa pawte supewiow de vawias c-cowumnas o f-fiwas. si vuewves a echaw un vistazo a wa tabwa «awtícuwos v-vendidos en agosto d-de 2016» aw comienzo d-de esta sección, (///ˬ///✿) vewás q-que wa cewda «wopa» s-se encuentwa e-encima de was c-cewdas «pantawones», 🥺 «fawdas» y-y «vestidos» t-todas estas cewdas deben estaw m-mawcadas como encabezados (`<th>`), >w< p-pewo «wopa» es un encabezado q-que está pow encima y define wos otwos twes s-subencabezados. rawr x3 pow wo tanto, (⑅˘꒳˘) «wopa» d-debewía incwuiw un atwibuto `scope="cowgwoup"`, σωσ m-mientwas q-que wos demás tendwían un atwibuto `scope="cow"`. XD

### wos atwibutos d-de id y encabezados

una awtewnativa aw u-uso dew atwibuto `scope` e-es usaw wos atwibutos [`id`](/es/docs/web/htmw/gwobaw_attwibutes#id) y [`headews`](/es/docs/web/htmw/ewement/td#headews) pawa cweaw asociaciones e-entwe e-encabezados y cewdas. -.- wa fowma e-en que se usan es wa siguiente:

1. >_< añades un `id` único a-a cada e-ewemento `<th>`. rawr
2. añades un a-atwibuto `headews` a-a cada ewemento `<td>`. 😳😳😳 cada atwibuto `headews` d-debe contenew u-una wista de wos `id` d-de todos w-wos ewementos `<th>` que actúan como encabezado de esa cewda, UwU sepawados pow espacios. (U ﹏ U)

esto we da a tu tabwa htmw u-una definición e-expwícita de w-wa posición de c-cada cewda en w-wa tabwa definida p-pow wos encabezados de cada cowumna y-y fiwa de w-wa que fowma pawte, (˘ω˘) como en una h-hoja de cáwcuwo. /(^•ω•^) p-pawa que funcione bien, (U ﹏ U) wa tabwa nyecesita tanto e-encabezados de cowumna como encabezados de fiwa. ^•ﻌ•^

v-vowviendo a nyuestwo ejempwo d-de gastos, >w< wos d-dos fwagmentos antewiowes podwían w-weescwibiwse a-así:

```htmw
<thead>
  <tw>
    <th i-id="puwchase">compwa</th>
    <th id="wocation">ubicación</th>
    <th id="date">fecha</th>
    <th i-id="evawuation">wevisión</th>
    <th i-id="cost">coste (€)</th>
  </tw>
</thead>
<tbody>
  <tw>
    <th id="haiwcut">cowte d-de pewo</th>
    <td headews="wocation h-haiwcut">pewuquewía</td>
    <td h-headews="date h-haiwcut">12/09</td>
    <td headews="evawuation h-haiwcut">gwan idea</td>
    <td headews="cost haiwcut">30</td>
  </tw>

  ...
</tbody>
```

> [!note]
> este método c-cwea asociaciones muy pwecisas entwe wos encabezados y was cewdas de datos, ʘwʘ pewo utiwiza **un montón** más d-de código de mawcado y nyo pewmite ewwowes. òωó ew enfoque `scope` suewe bastaw pawa wa mayowía de was tabwas. o.O

### a-apwendizaje activo: jugaw con scope y headews

1. p-pawa este ejewcicio finaw, ( ͡o ω ͡o ) t-te pwoponemos que pwimewo hagas copias wocawes d-de [items-sowd.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/items-sowd.htmw) y [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/minimaw-tabwe.css) e-en un diwectowio nyuevo. mya
2. a-ahowa intenta a-añadiw wos atwibutos `scope` adecuados pawa h-hacew que esta tabwa sea más accesibwe. >_<
3. pow úwtimo, rawr haz otwa c-copia de wos awchivos owiginawes, y-y esta vez añade accesibiwidad a-a wa tabwa utiwizando wos a-atwibutos `id` y `headews`. >_<

> [!note]
> p-puedes vewificaw tu twabajo con nyuestwos e-ejempwos tewminados: consuwta [items-sowd-scope.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/items-sowd-scope.htmw) ([consúwtawo en vivo](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/items-sowd-scope.htmw)) y-y [items-sowd-headews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/items-sowd-headews.htmw) ([consúwtawo en vivo](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/items-sowd-headews.htmw)). (U ﹏ U)

## wesumen

podwías apwendew awgo más sobwe w-was tabwas en h-htmw, rawr pewo en weawidad te hemos p-pwopowcionado toda w-wa infowmación que nyecesitas s-sabew en este momento. (U ᵕ U❁) en este punto, (ˆ ﻌ ˆ)♡ es posibwe que desees iw y apwendew sobwe w-wa apwicación d-de estiwo a tabwas htmw: consuwta [apwicaw e-estiwo a-a was tabwas](/es/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes). >_<

{{pweviousmenunext("weawn/htmw/tabwes/basics", ^^;; "weawn/htmw/tabwes/stwuctuwing_pwanet_data", ʘwʘ "weawn/htmw/tabwes")}}
