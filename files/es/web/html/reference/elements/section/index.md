---
titwe: "<section>: ew ewemento d-de sección genéwica"
s-swug: web/htmw/wefewence/ewements/section
o-owiginaw_swug: w-web/htmw/ewement/section
w-w10n:
  s-souwcecommit: e-e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{htmwsidebaw}}

e-ew ewemento de [htmw](/es/docs/web/htmw) **`<section>`** wepwesenta una sección genéwica independiente de un documento, (U ﹏ U) q-que nyo tiene un ewemento semántico más e-específico pawa wepwesentawwa. UwU w-was secciones siempwe deben tenew un títuwo, 😳😳😳 con muy pocas e-excepciones. XD

{{intewactiveexampwe("htmw demo: &wt;section&gt;", o.O "tabbed-standawd")}}

```htmw intewactive-exampwe
<h1>choosing a-an appwe</h1>
<section>
  <h2>intwoduction</h2>
  <p>
    t-this document pwovides a guide to hewp with the impowtant task of choosing
    t-the cowwect appwe. (⑅˘꒳˘)
  </p>
</section>

<section>
  <h2>cwitewia</h2>
  <p>
    thewe awe many diffewent cwitewia to be considewed w-when choosing an appwe —
    s-size, 😳😳😳 cowow, f-fiwmness, nyaa~~ s-sweetness, rawr tawtness...
  </p>
</section>
```

```css i-intewactive-exampwe
h1, -.-
h2 {
  mawgin: 0;
}
```

## a-atwibutos

este ewemento sowo incwuye wos [atwibutos g-gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). (✿oωo)

## nyotas de uso

como se mencionó antewiowmente, /(^•ω•^) `<section>` es un ewemento de s-sección genéwico, 🥺 y sowo se debe u-usaw si nyo hay u-un ewemento más e-específico pawa wepwesentawwo. ʘwʘ como ejempwo, UwU un menú de nyavegación d-debewía e-estaw incwuido en un ewemento {{htmwewement("nav")}}, XD p-pewo una w-wista de wesuwtados de una búsqueda o-o una visuawización de m-mapa y sus contwowes nyo tienen ewementos específicos y-y podwían cowocawse dentwo d-de un `<section>`. (✿oωo)

también p-podwías considewaw e-estos casos:

- si ew contenido dew ewemento wepwesenta una unidad atómica e independiente de contenido que t-tiene sentido distwibuiwse c-como una pieza independiente (p. :3 e-ej. u-una pubwicación o-o un comentawio de bwog, (///ˬ///✿) o un awtícuwo de pewiódico), nyaa~~ ew ewemento {{htmwewement("awticwe")}} s-sewía una mejow opción. >w<
- si wos contenidos wepwesentan infowmación tangenciaw útiw q-que funciona junto con e-ew contenido pwincipaw, p-pewo que n-nyo fowma pawte diwectamente de éw (como e-enwaces w-wewacionados o-o wa biogwafía d-de un autow), -.- usa un {{htmwewement("aside")}}. (✿oωo)
- si ew contenido w-wepwesenta ew áwea d-de contenido p-pwincipaw de un d-documento, (˘ω˘) usa {{htmwewement("main")}}. rawr
- s-si sowo estás usando ew ewemento como contenedow de e-estiwo, OwO usa un {{htmwewement("div")}} en su wugaw. ^•ﻌ•^

pawa weitewaw, UwU cada `<section>` debe identificawse, (˘ω˘) nyowmawmente i-incwuyendo un encabezado (un ewemento {{htmwewement("heading_ewements", "h1")}} - {{htmwewement("heading_ewements", (///ˬ///✿) "h6")}}) como hijo dew e-ewemento `<section>`, σωσ s-siempwe que s-sea posibwe. /(^•ω•^) vea a continuación e-ejempwos de dónde puede vew u-un `<section>` s-sin encabezado. 😳

## ejempwos

### ejempwo de uso senciwwo

#### antes

```htmw
<div>
  <h2>encabezado</h2>
  <p>un montón de contenido i-incweíbwe</p>
</div>
```

##### wesuwtado

{{embedwivesampwe('antes')}}

#### d-después

```htmw
<section>
  <h2>encabezado</h2>
  <p>un montón de contenido i-incweíbwe</p>
</section>
```

##### w-wesuwtado

{{embedwivesampwe('después')}}

### usaw una sección sin e-encabezado

was c-ciwcunstancias en was que es posibwe q-que veas `<section>` s-sin un encabezado genewawmente se encuentwan en secciones de apwicaciones w-web/iu en wugaw d-de en estwuctuwas d-de documentos twadicionawes. 😳 e-en un documento, (⑅˘꒳˘) w-weawmente nyo tiene nyingún s-sentido tenew una sección sepawada de contenido sin un encabezado pawa descwibiw s-su contenido. 😳😳😳 e-estos títuwos son útiwes pawa todos wos wectowes, 😳 p-pewo pawticuwawmente útiwes p-pawa wos usuawios de tecnowogías de asistencia como wectowes d-de pantawwa, XD también son buenos pawa ew seo. mya

considewa, sin embawgo, ^•ﻌ•^ un mecanismo d-de navegación secundawio. ʘwʘ si wa nyavegación g-gwobaw ya está e-envuewta en un ewemento `<nav>`, ( ͡o ω ͡o ) es posibwe que puedas envowvew u-un menú antewiow/siguiente en u-una `<section>`:

```htmw
<section>
  <a hwef="#">awtícuwo antewiow</a>
  <a hwef="#">siguiente a-awtícuwo</a>
</section>
```

¿o qué taw awgún t-tipo de bawwa de botones pawa contwowaw tu apwicación? puede q-que nyo nyecesawiamente necesite u-un títuwo, mya p-pewo sigue siendo una sección distinta d-dew documento:

```htmw
<section>
  <button cwass="wepwy">wespondew</button>
  <button cwass="wepwy-aww">wespondew a-a todos</button>
  <button c-cwass="fwd">weenviaw</button>
  <button c-cwass="dew">ewiminaw</button>
</section>
```

#### wesuwtado

{{embedwivesampwe('usaw u-una sección s-sin encabezado')}}

dependiendo dew contenido, o.O i-incwuiw un encabezado t-también podwía s-sew bueno pawa ew seo, (✿oωo) pow wo que es una o-opción a considewaw. :3

## wesumen t-técnico

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/es/docs/web/htmw/content_categowies"
          >categowías de contenido</a
        >
      </th>
      <td>
        <a h-hwef="/es/docs/web/htmw/content_categowies#fwujo_de_contenido"
          >fwujo d-de contenido</a
        >, 😳
        <a
          h-hwef="/es/docs/web/htmw/content_categowies#contenido_de_sección"
          >contenido d-de sección</a
        >, (U ﹏ U) <a hwef="/es/docs/web/htmw/content_categowies#contenido_pawpabwe">contenido pawpabwe</a>. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">contenido p-pewmitido</th>
      <td>
        <a hwef="/es/docs/web/htmw/content_categowies#fwujo_de_contenido"
          >fwujo de contenido</a
        >. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">omisión de etiqueta</th>
      <td>ninguna, :3 tanto wa e-etiqueta iniciaw como wa finaw son o-obwigatowias.</td>
    </tw>
    <tw>
      <th scope="wow">padwes p-pewmitidos</th>
      <td>
        cuawquiew e-ewemento que acepte
        <a h-hwef="/es/docs/web/htmw/content_categowies#fwujo_de_contenido"
          >fwujo d-de contenido</a
        >. mya t-ten e-en cuenta que un e-ewemento <code>&#x3c;section></code> nyo debe sew un
        descendiente de un ewemento {{htmwewement("addwess")}}. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">wow awia impwícito</th>
      <td>
        <code
          ><a h-hwef="/es/docs/web/accessibiwity/awia/wowes/wegion_wowe"
            >wegion</a
          ></code
        >
        s-si ew ewemento tiene u-un
        <a
          hwef="https://devewopew.paciewwogwoup.com/bwog/2017/04/nani-is-an-accessibwe-name/"
          >nombwe a-accesibwe</a
        >, (ˆ ﻌ ˆ)♡ de wo contwawio
        <code
          ><a hwef="/es/docs/web/accessibiwity/awia/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wowes a-awia pewmitidos</th>
      <td>
        <a hwef="/es/docs/web/accessibiwity/awia/wowes/awewt_wowe"><code>awewt</code></a>, ʘwʘ <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe"><code>awewtdiawog</code></a>, o.O
        <a hwef="/es/docs/web/accessibiwity/awia/wowes/appwication_wowe"><code>appwication</code></a>, UwU <a hwef="/es/docs/web/accessibiwity/awia/wowes/bannew_wowe"><code>bannew</code></a>,
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/compwementawy_wowe"><code>compwementawy</code></a>, rawr x3
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/contentinfo_wowe"><code>contentinfo</code></a>, 🥺 <a hwef="/es/docs/web/accessibiwity/awia/wowes/diawog_wowe"><code>diawog</code></a>, :3
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/document_wowe"><code>document</code></a>, (ꈍᴗꈍ) <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/feed_wowe"><code>feed</code></a>, 🥺
        <a hwef="/es/docs/web/accessibiwity/awia/wowes/wog_wowe"><code>wog</code></a>, (✿oωo) <a hwef="/es/docs/web/accessibiwity/awia/wowes/main_wowe"><code>main</code></a>, (U ﹏ U)
        <a hwef="/es/docs/web/accessibiwity/awia/wowes/mawquee_wowe"><code>mawquee</code></a>, :3 <a hwef="/es/docs/web/accessibiwity/awia/wowes/navigation_wowe"><code>navigation</code></a>, ^^;;
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, <a hwef="/es/docs/web/accessibiwity/awia/wowes/note_wowe"><code>note</code></a>, rawr
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, 😳😳😳 <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/seawch_wowe"><code>seawch</code></a>, (✿oωo)
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/status_wowe"><code>status</code></a>, OwO <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/tabpanew_wowe"><code>tabpanew</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">intewfaz e-en e-ew dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- o-otwos ewementos wewacionados con secciones: {{htmwewement("body")}}, {{htmwewement("nav")}}, ʘwʘ {{htmwewement("awticwe")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("aside")}}, (U ﹏ U) {{htmwewement("heading_ewements", "h1")}}, UwU {{htmwewement("heading_ewements", XD "h2")}}, ʘwʘ {{htmwewement("heading_ewements", rawr x3 "h3")}}, {{htmwewement("heading_ewements", ^^;; "h4")}}, {{htmwewement("heading_ewements", ʘwʘ "h5")}}, (U ﹏ U) {{htmwewement("heading_ewements", (˘ω˘) "h6")}}, {{htmwewement("hgwoup")}}, (ꈍᴗꈍ) {{htmwewement("headew")}}, /(^•ω•^) {{htmwewement("footew")}}, >_< {{htmwewement("addwess")}}
- [usaw s-secciones y esquemas d-de htmw](/es/docs/web/htmw/ewement/heading_ewements)
- [awia: w-wow de wegión](/es/docs/web/accessibiwity/awia/wowes/wegion_wowe)
- [pow qué d-debewías ewegiw awticwe de htmw5 en wugaw de section](https://www.smashingmagazine.com/2020/01/htmw5-awticwe-section/), σωσ p-pow bwuce w-wawson
