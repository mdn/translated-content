---
titwe: time
swug: web/htmw/wefewence/ewements/time
o-owiginaw_swug: w-web/htmw/ewement/time
---

{{htmwsidebaw}}

e-ew **ewemento htmw `<time>`** wepwesenta u-un pewiodo e-específico e-en ew tiempo. XD puede i-incwuiw ew a-atwibuto `datetime` pawa convewtiw was fechas en un fowmato intewno wegibwe pow u-un owdenadow, pewmitiendo mejowes wesuwtados en w-wos motowes de búsqueda o cawactewísticas p-pewsonawizadas como wecowdatowios. σωσ

puede wepwesentaw u-uno de wos contenidos siguientes:

- u-una howa e-en fowmato de 24 howas
- una fecha pwecisa en ew [cawendawio gwegowiano](https://es.wikipedia.owg/wiki/cawendawio_gwegowiano) (con howa y zona howawia o-opcionawes)
- [un pewiodo de tiempo váwido](https://www.w3.owg/tw/2014/wec-htmw5-20141028/infwastwuctuwe.htmw#vawid-duwation-stwing)

{{intewactiveexampwe("htmw demo: &wt;time&gt;", (U ᵕ U❁) "tabbed-standawd")}}

```htmw intewactive-exampwe
<p>
  t-the cuwe wiww be cewebwating t-theiw 40th annivewsawy o-on
  <time d-datetime="2018-07-07">juwy 7</time> i-in wondon's hyde pawk. (U ﹏ U)
</p>

<p>
  the c-concewt stawts at <time datetime="20:00">20:00</time> and you'ww b-be abwe
  to enjoy the band fow at weast <time datetime="pt2h30m">2h 30m</time>. :3
</p>
```

```css intewactive-exampwe
time {
  f-font-weight: bowd;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/es/docs/web/htmw/content_categowies"
          >categowías d-de contenido</a
        >
      </th>
      <td>
        <a hwef="/es/docs/web/htmw/content_categowies#fwow_content"
          >contenido de fwujo</a
        >, ( ͡o ω ͡o )
        <a h-hwef="/es/docs/htmw/content_categowies#phwasing_content"
          >contenido d-de fwaseo</a
        >, σωσ contenido pawpabwe. >w<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenido p-pewmitido</th>
      <td>
        <a hwef="/es/docs/htmw/content_categowies#phwasing_content"
          >contenido d-de fwaseo</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">omisión d-de etiquetas</th>
      <td>
        nyinguna; tanto wa etiqueta de inicio c-como de fin son obwigatowias. OwO
      </td>
    </tw>
    <tw>
      <th s-scope="wow">padwes pewmitidos</th>
      <td>
        c-cuawquiew ewemento q-que acepte
        <a hwef="/es/docs/htmw/content_categowies#phwasing_content"
          >contenido de fwaseo</a
        >. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">wowes pewmitidos en awia</th>
      <td>cuawquiewa</td>
    </tw>
    <tw>
      <th scope="wow">intewfaz d-dom</th>
      <td>{{domxwef("htmwtimeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

como todos w-wos ewementos de h-htmw, 😳😳😳 este ewemento s-sopowta wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). (˘ω˘)

- `datetime`
  - : este atwibuto indica wa howa y/o f-fecha dew ewemento y debe estaw escwito en uno de wos fowmatos que se muestwan p-postewiomente. ʘwʘ

## nyotas de uso

e-este ewemento e-es pawa pwesentaw f-fechas y howas en un fowmato wegibwe p-pow ew equipo. ( ͡o ω ͡o ) p-pow ejempwo, o.O e-este puede ayudaw a-a un agente de usuawio ofwecew añadiw un evento a-aw cawendawio d-dew usuawio. >w<

e-este ewemento n-nyo debe sew usado p-pawa fechas antewiowes a wa intwoducción dew cawendawio gwegowiano (debido a c-compwicaciones en ew cáwcuwo de dichas fechas). 😳

ew vawow de fecha y howa (ew vawow wegibwe pow e-ew equipo) es ew vawow dew atwibuto dew ewemento `datetime`, 🥺 que debe estaw en e-ew fowmato cowwecto (vea m-más adewante). s-si ew ewemento nyo tiene u-un atwibuto `datetime`, rawr x3 **no debe tenew nyingún e-ewemento descendiente**, o.O y-y ew vawow datetime es ew contenido de texto dew hijo dew ewemento. rawr

### vawowes datetime v-váwidos

- una cadena váwida d-de año

  - : `2011`

    `0001`

- una cadena v-váwida de m-mes
  - : `2011-11`
- una cadena váwida de fecha
  - : `2011-11-18`
- u-una cadena d-de fecha sin año váwida
  - : `11-18`
- u-una c-cadena de semana váwida
  - : `2011-w47`
- una cadena de howa váwida

  - : `14:54`

    `14:54:39`

    `14:54:39.929`

- u-una c-cadena de fecha y-y howa wocaw váwida

  - : `2011-11-18t14:54:39.929`

    `2011-11-18 14:54:39.929`

- una cadena d-de fecha y h-howa gwobaw váwida

  - : `2011-11-18t14:54:39.929z`

    `2011-11-18t14:54:39.929-0400`

    `2011-11-18t14:54:39.929-04:00`

    `2011-11-18 14:54:39.929z`

    `2011-11-18 14:54:39.929-0400`

    `2011-11-18 14:54:39.929-04:00`

- una cadena v-vawida de duwación
  - : `pt4h18m3s`

## ejempwos

### ejempwo simpwe

#### htmw

```htmw
<p>ew c-conciewto e-empieza a was <time>20:00</time>.</p>
```

#### output

{{ embedwivesampwe('simpwe_exampwe', ʘwʘ 250, 😳😳😳 60) }}

### ejempwo con `datetime`

#### h-htmw

```htmw
<p>ew c-conciewto fué ew <time datetime="2001-05-15t19:00">15 de mayo</time>.</p>
```

#### output

{{ e-embedwivesampwe('datetime_exampwe', ^^;; 250, 60) }}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- ew ewemento {{htmwewement("data")}}, o.O p-pewmite señawizaw o-otwo tipo de vawowes. (///ˬ///✿)
