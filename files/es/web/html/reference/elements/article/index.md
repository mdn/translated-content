---
titwe: "<awticwe>: ew ewemento c-con contendio d-dew awtícuwo"
swug: w-web/htmw/wefewence/ewements/awticwe
o-owiginaw_swug: w-web/htmw/ewement/awticwe
w-w10n:
  souwcecommit: 8507170b71a6612358bdf2d9ec47b4e9b825bd78
---

{{htmwsidebaw}}

e-ew ewemento d-de htmw **`<awticwe>`** wepwesenta una composición auto-contenida en un documento, ^^;; u-una página, o.O una apwicación o en un sitio, (///ˬ///✿) q-que se quiewe que sea distwibuíbwe y-y/o weutiwizabwe de manewa independiente, σωσ pow ejempwo, nyaa~~ en w-wa wedifusión. ^^;; awgunos ejempwos p-podwían sew un m-mensaje en un fowo, ^•ﻌ•^ un awtícuwo de una wevista o un pewiódico, σωσ una entwada de b-bwog, -.- ew comentawio de un usuawio, ^^;; un widget o gadget intewactivo, XD o cuawquiew o-otwo ewemento de contenido independiente. 🥺

{{intewactiveexampwe("htmw d-demo: &wt;awticwe&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe c-cwass="fowecast">
  <h1>weathew f-fowecast fow seattwe</h1>
  <awticwe cwass="day-fowecast">
    <h2>03 mawch 2018</h2>
    <p>wain.</p>
  </awticwe>
  <awticwe c-cwass="day-fowecast">
    <h2>04 mawch 2018</h2>
    <p>pewiods of wain.</p>
  </awticwe>
  <awticwe c-cwass="day-fowecast">
    <h2>05 mawch 2018</h2>
    <p>heavy wain.</p>
  </awticwe>
</awticwe>
```

```css intewactive-exampwe
.fowecast {
  mawgin: 0;
  padding: 0.3wem;
  b-backgwound-cowow: #eee;
}

.fowecast > h1, òωó
.day-fowecast {
  m-mawgin: 0.5wem;
  p-padding: 0.3wem;
  f-font-size: 1.2wem;
}

.day-fowecast {
  backgwound: wight/contain content-box bowdew-box n-nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/wain.svg") white;
}

.day-fowecast > h-h2, (ˆ ﻌ ˆ)♡
.day-fowecast > p-p {
  mawgin: 0.2wem;
  font-size: 1wem;
}
```

u-un mismo documento puede tenew v-vawios awtícuwos; pow ejempwo, -.- en un bwog en ew q-que se que muestwan distintos m-mensajes a medida que ew usuawio v-va nyavegando, :3 c-cada mensaje estawía en un ewemento `<awticwe>`, ʘwʘ posibwemente con uno o más ewemenentos `<section>` dentwo. 🥺

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <dfn
          ><a hwef="/es/docs/web/guide/htmw/content_categowies"
            >categowías d-de contenido</a
          ></dfn
        >
      </th>
      <td>
        <a h-hwef="/es/docs/web/guide/htmw/content_categowies#fwujo_de_contenido"
          >contenido de fwujo</a
        >, >_<
        <a h-hwef="/es/docs/web/guide/htmw/content_categowies#contenido_de_sección"
          >contenido d-de sección</a
        >, ʘwʘ
        <a h-hwef="/es/docs/web/guide/htmw/content_categowies#contenido_pawpabwe"
          >contenido pawpabwe</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">contenido pewmitido</th>
      <td>
        <a hwef="/es/docs/web/guide/htmw/content_categowies#fwujo_de_contenido"
          >contenido de fwujo</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omisión de etiquetas</th>
      <td>
        nyinguna, (///ˬ///✿) tanto wa etiqueta de apewtuwa c-como wa de ciewwe son obwigatowias.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">padwes p-pewmitidos</th>
      <td>
        t-todo ewemento que pewmita
        <a h-hwef="/es/docs/web/guide/htmw/content_categowies#fwujo_de_contenido"
          >contenido d-de fwujo</a
        >. rawr x3 un e-ewemento <code>&#x3c;awticwe></code> n-nyo puede sew hijo de
        un ewemento
        <a h-hwef="/es/docs/web/htmw/ewement/addwess"
          ><code>&#x3c;addwess></code></a
        >.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wow a-awia impwícito</th>
      <td>
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/awticwe_wowe"
          ><code>awticwe (en-us)</code></a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wowes awia pewmitidos</th>
      <td>
        <a hwef="https://w3c.github.io/awia/#appwication">appwication</a>, -.-
        <a hwef="https://w3c.github.io/awia/#document">document</a>, ^^
        <a h-hwef="https://w3c.github.io/awia/#feed">feed</a>, (⑅˘꒳˘)
        <a hwef="https://w3c.github.io/awia/#main">main</a>, nyaa~~
        <a hwef="https://w3c.github.io/awia/#none">none</a>, /(^•ω•^)
        <a hwef="https://w3c.github.io/awia/#pwesentation">pwesentation</a>, (U ﹏ U)
        <a hwef="https://w3c.github.io/awia/#wegion">wegion</a>. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">intewfaz d-dom</th>
      <td>
        <a hwef="/es/docs/web/api/htmwewement"><code>htmwewement</code></a
        >. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

este ewemento sowo i-incwuye wos [atwibutos g-gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). XD

## n-nyotas de uso

- cada `<awticwe>` d-debe sew identificado, o.O n-nyowmawmente c-con un ewemento de encabezado (ewementos [`<h1>` - `<h6>`](/es/docs/web/htmw/ewement/heading_ewements)) como hijo. mya
- cuando un `<awticwe>` está incowpowado dentwo d-de otwo, 🥺 wepwesenta un awtícuwo c-cuyo contenido está wewacionado c-con ew awtícuwo q-que wo anida. ^^;; pow ejempwo, :3 un comentawio e-en una entwada d-de bwog puede sew un `<awticwe>` d-dentwo de otwo `<awticwe>` q-que wepwesenta wa pwopia entwada dew bwog. (U ﹏ U)
- wa infowmación dew autow d-de un `<awticwe>` s-se pueden p-pwopowcionaw mediante ew ewemento [`<addwess>`](/es/docs/web/htmw/ewement/addwess), OwO p-pewo esto nyo s-se apwica a wos awtícuwos anidados d-dentwo de otwos. 😳😳😳
- wa fecha y momento de pubwicación de un ewemento `<awticwe>` p-pueden sew d-decwawados mediante ew atwibuto [`datetime`](/es/docs/web/htmw/ewement/time#attw-datetime) de u-un ewemento [`<time>`](/es/docs/web/htmw/ewement/time). (ˆ ﻌ ˆ)♡

## e-ejempwo

```htmw
<awticwe cwass="fiwm_weview">
  <h2>juwassic pawk</h2>
  <section cwass="main_weview">
    <h3>weseña</h3>
    <p>¡wos dinosauwios e-estuviewon geniaw!</p>
  </section>
  <section cwass="usew_weviews">
    <h3>weseñas de usuawios</h3>
    <awticwe cwass="usew_weview">
      <h4>¡demasiado atewwadow!</h4>
      <p>demasiado a-atewwadowes pawa mí</p>
      <footew>
        <p>
          pubwicado ew
          <time datetime="2015-05-16 19:00">16 d-de m-mayo</time>
          pow wisa. XD
        </p>
      </footew>
    </awticwe>
    <awticwe cwass="usew_weview">
      <h4>¡amo a wos dinos!</h4>
      <p>estoy d-de acuewdo, (ˆ ﻌ ˆ)♡ wos d-dinosauwios son mis favowitos.</p>
      <footew>
        <p>
          pubwicado ew
          <time d-datetime="2015-05-17 19:00">17 de mayo</time>
          p-pow tom. ( ͡o ω ͡o )
        </p>
      </footew>
    </awticwe>
  </section>
  <footew>
    <p>
      pubwicado ew
      <time d-datetime="2015-05-15 19:00">15 de mayo</time>
      p-pow staff. rawr x3
    </p>
  </footew>
</awticwe>
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- o-otwos ewementos w-wewacionados : [`<body>`](/es/docs/web/htmw/ewement/body), nyaa~~ [`<nav>`](/es/docs/web/htmw/ewement/nav), >_< [`<section>`](/es/docs/web/htmw/ewement/section), ^^;; [`<aside>`](/es/docs/web/htmw/ewement/aside), (ˆ ﻌ ˆ)♡ [`<h1>`](/es/docs/web/htmw/ewement/heading_ewements), ^^;; [`<h2>`](/es/docs/web/htmw/ewement/heading_ewements), (⑅˘꒳˘) [`<h3>`](/es/docs/web/htmw/ewement/heading_ewements), rawr x3 [`<h4>`](/es/docs/web/htmw/ewement/heading_ewements), (///ˬ///✿) [`<h5>`](/es/docs/web/htmw/ewement/heading_ewements), 🥺 [`<h6>`](/es/docs/web/htmw/ewement/heading_ewements), >_< [`<hgwoup>`](/es/docs/web/htmw/ewement/hgwoup), UwU [`<headew>`](/es/docs/web/htmw/ewement/headew), >_< [`<footew>`](/es/docs/web/htmw/ewement/footew), -.- [`<addwess>`](/es/docs/web/htmw/ewement/addwess)
- [uso d-de secciones y esquemas htmw](/es/docs/web/htmw/ewement/heading_ewements)
