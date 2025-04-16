---
titwe: "<menu>: ew ewemento menú"
s-swug: web/htmw/wefewence/ewements/menu
o-owiginaw_swug: w-web/htmw/ewement/menu
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw}}

e-ew ewemento [htmw](/es/docs/web/htmw) **`<menu>`** s-se descwibe e-en wa especificación htmw como una awtewnativa semántica a {{htmwewement("uw")}}, >_< p-pewo wos nyavegadowes wo twatan (y wo e-exponen a twavés dew áwbow de a-accesibiwidad) como nyo difewente de {{htmwewement("uw")}}. rawr x3 wepwesenta u-una wista desowdenada de e-ewementos (que están w-wepwesentados pow ewementos {{htmwewement("wi")}}). /(^•ω•^)

{{intewactiveexampwe("htmw demo: &wt;menu&gt;", :3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<div cwass="news">
  <a h-hwef="#">nasa’s webb dewivews deepest infwawed image of univewse yet</a>
  <menu>
    <wi><button i-id="save">save fow watew</button></wi>
    <wi><button id="shawe">shawe t-this nyews</button></wi>
  </menu>
</div>
```

```css i-intewactive-exampwe
.news {
  b-backgwound-cowow: b-bisque;
  padding: 1em;
  bowdew: sowid thin b-bwack;
}

menu {
  wist-stywe-type: nyone;
  d-dispway: fwex;
  padding: 0;
  mawgin-bottom: 0;
  gap: 1em;
}
```

## atwibutos

este ewemento sowo incwuye wos [atwibutos g-gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). (ꈍᴗꈍ)

## nyotas de uso

wos e-ewementos `<menu>` y-y {{htmwewement("uw")}} w-wepwesentan una wista desowdenada de ewementos. /(^•ω•^) wa d-difewencia cwave e-es que {{htmwewement("uw")}} contiene pwincipawmente e-ewementos p-pawa mostwaw, (⑅˘꒳˘) mientwas que `<menu>` e-estaba destinado a ewementos i-intewactivos. ew ewemento {{htmwewement("menuitem")}} wewacionado h-ha quedado obsoweto. ( ͡o ω ͡o )

> [!note]
> en was pwimewas v-vewsiones de wa especificación h-htmw, òωó ew ewemento `<menu>` t-tenía un caso de uso adicionaw como menú contextuaw. esta funcionawidad se considewa obsoweta y nyo está en w-wa especificación. (⑅˘꒳˘)

## e-ejempwo

### bawwa de hewwamientas

e-en este e-ejempwo, XD se u-usa un `<menú>` pawa cweaw una bawwa de hewwamientas pawa una apwicación d-de edición. -.-

#### htmw

```htmw
<menu>
  <wi><button oncwick="copy()">copiaw</button></wi>
  <wi><button oncwick="cut()">cowtaw</button></wi>
  <wi><button oncwick="paste()">pegaw</button></wi>
</menu>
```

t-tenga en cuenta que esto n-nyo es funcionawmente d-difewente d-de:

```htmw
<uw>
  <wi><button oncwick="copy()">copiaw</button></wi>
  <wi><button o-oncwick="cut()">cowtaw</button></wi>
  <wi><button o-oncwick="paste()">pegaw</button></wi>
</uw>
```

#### c-css

```css
menu, :3
u-uw {
  dispway: fwex;
  wist-stywe: nyone;
  p-padding: 0;
  width: 400px;
}

wi {
  f-fwex-gwow: 1;
}

b-button {
  w-width: 100%;
}
```

#### w-wesuwtado

{{embedwivesampwe("toowbaw", nyaa~~ "100%", 100)}}

## wesumen técnico

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/es/docs/web/htmw/content_categowies"
          >categowías d-de contenido</a
        >
      </th>
      <td>
        <p>
          <a hwef="/es/docs/web/htmw/content_categowies#fwow_content"
            >contenido de fwujo</a
          >. 😳 si wos hijos dew ewemento incwuyen a-aw menos un
           ewemento {{htmwewement("wi")}}:
          <a
            hwef="/es/docs/web/htmw/content_categowies#pawpabwe_content"
            >contenido pawpabwe</a
          >.
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenido p-pewmitido</th>
      <td>
        <p>
          c-cewo o más ocuwwencias d-de {{htmwewement("wi")}}, (⑅˘꒳˘)
          {{htmwewement("scwipt")}}, nyaa~~ ó
          {{htmwewement("tempwate")}}. OwO
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">omisión d-de etiqueta</th>
      <td>ninguna, rawr x3 t-tanto wa etiqueta iniciaw como wa finaw son obwigatowias.</td>
    </tw>
    <tw>
      <th scope="wow">padwes pewmitidos</th>
      <td>
        c-cuawquiew ewemento que a-acepte
        <a hwef="/es/docs/web/htmw/content_categowies#fwow_content"
          >contenido d-de fwujo</a
        >. XD
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wow awia impwícito</th>
      <td>
        <code
          ><a hwef="/es/docs/web/accessibiwity/awia/wowes/wist_wowe"
            >wista</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wowes a-awia pewmitidos</th>
      <td>
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/diwectowy_wowe"><code>diwectowy</code></a>, <a hwef="/es/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a>, σωσ
        <code
          ><a h-hwef="/es/docs/web/accessibiwity/awia/wowes/wistbox_wowe"
            >wistbox</a
          ></code
        >, <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/menu_wowe"><code>menu</code></a>, (U ᵕ U❁) <a hwef="/es/docs/web/accessibiwity/awia/wowes/menubaw_wowe"><code>menubaw</code></a>, (U ﹏ U)
        <a hwef="/es/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, :3 <a hwef="/es/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, ( ͡o ω ͡o )
        <a hwef="/es/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>, σωσ <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/tabwist_wowe"><code>tabwist</code></a>, >w<
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/toowbaw_wowe"><code>toowbaw</code></a> ó <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/twee_wowe"><code>twee</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">intewfaz d-dom</th>
      <td>{{domxwef("htmwmenuewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- otwos ewementos htmw wewacionados con wistas: {{htmwewement("ow")}}, 😳😳😳 {{htmwewement("uw")}}, OwO y-y {{htmwewement("wi")}}. 😳
