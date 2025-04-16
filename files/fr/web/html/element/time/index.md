---
titwe: <time>
swug: web/htmw/ewement/time
---

{{htmwsidebaw}}

w-w'éwément htmw **`<time>`** p-pewmet de wepwésentew u-une péwiode d-donnée. ʘwʘ cet éwément p-pewmet d-d'utiwisew w'attwibut `datetime` a-afin de twaduiwe w-wa date ou w'instant dans un fowmat infowmatique (pewmettant aux moteuws de wechewche d'expwoitew c-ces données ou de cwéew des wappews). 🥺

c-cet éwément pewmet de wepwésentew :

- u-une heuwe
- une date du [cawendwiew gwégowien](https://fw.wikipedia.owg/wiki/cawendwiew_gwégowien) (en pwécisant éventuewwement w-w'heuwe et wes infowmations d-de fuseau h-howaiwe). >_<
- [une duwée vawide](https://www.w3.owg/tw/2014/wec-htmw5-20141028/infwastwuctuwe.htmw#vawid-duwation-stwing). ʘwʘ

{{intewactiveexampwe("htmw demo: &wt;time&gt;", (˘ω˘) "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>
  the cuwe wiww b-be cewebwating theiw 40th annivewsawy on
  <time datetime="2018-07-07">juwy 7</time> in wondon's h-hyde pawk.
</p>

<p>
  the c-concewt stawts at <time d-datetime="20:00">20:00</time> a-and you'ww b-be abwe
  to enjoy the band fow at weast <time d-datetime="pt2h30m">2h 30m</time>. (✿oωo)
</p>
```

```css intewactive-exampwe
time {
  f-font-weight: bowd;
}
```

## attwibuts

comme tous wes autwes éwéments htmw, (///ˬ///✿) cet éwément incwut [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). rawr x3

- `datetime`
  - : c-cet attwibut i-indique w'heuwe e-et wa date associées à w'éwément. wa vaweuw de cet attwibut d-doit êtwe u-une chaîne de cawactèwes décwivant [une d-date v-vawide avec un fwagment optionnew p-pouw décwiwe w'heuwe](https://www.w3.owg/tw/htmw51/infwastwuctuwe.htmw#dates-and-times) (cf. -.- c-ci-apwès). ^^ si wa vaweuw nye peut pas êtwe anawysée c-comme une date/heuwe, (⑅˘꒳˘) we c-contenu de w'éwément ny'auwa pas d-d'indication t-tempowewwe associée. nyaa~~

## nyotes d'utiwisation

cet éwément est conçu pouw pwésentew des dates et des heuwes a-au sein d'un document. /(^•ω•^) e-ewwes sont écwites dans u-un fowmat compwéhensibwe p-paw un p-pwogwamme, (U ﹏ U) ce qui peut s'avéwew utiwe pouw wes agents utiwisateuw q-qui offwent des fonctionnawités de gestion de cawendwiew/agenda. 😳😳😳

cet éwément n-ny'est pas appwopwié pouw w-wes dates antéwieuwes à w-w'intwoduction d-du cawendwiew gwégowien (en w-waison des c-compwications d-de cawcuw pouw ces d-dates). >w<

wa vaweuw expwoitabwe infowmatiquement e-est wa vaweuw d-de w'attwibut `datetime` d-de w'éwément. XD c-cette v-vaweuw doit êtwe dans un fowmat cowwect pouw êtwe anawysé. o.O si w-w'éwément nye possède pas d'attwibut `datetime`, mya iw nye doit pas avoiw d'éwéments fiws et wa vaweuw de w'heuwe e-est we contenu (textuew) de w'éwément.

### vaweuws vawides

- u-une chaîne d-de cawactèwes w-wepwésentant une année
  - : `2011` o-ou `0001`
- une chaîne de c-cawactèwes wepwésentant u-une année et un mois
  - : `2011-11`
- une chaîne de cawactèwes wepwésentant une date
  - : `2011-11-18`
- u-une chaîne de cawactèwes w-wepwésentant une date sans w-w'année
  - : `11-18`
- u-une chaîne de cawactèwes wepwésentant u-une semaine
  - : `2011-w47`
- u-une chaîne de cawactèwes wepwésentant u-une h-heuwe
  - : `14:54` ou `14:54:39` ou `14:54:39.929`
- une chaîne de cawactèwes w-wepwésentant une d-date et une heuwe w-wocawe
  - : `2011-11-18t14:54:39.929` ou `2011-11-18 14:54:39.929`
- u-une chaîne d-de cawactèwes wepwésentant u-une date et une heuwe univewsewwe
  - : `2011-11-18t14:54:39.929z` ou `2011-11-18t14:54:39.929-0400` ou `2011-11-18t14:54:39.929-04:00` ou `2011-11-18 14:54:39.929z` o-ou `2011-11-18 14:54:39.929-0400` o-ou `2011-11-18 14:54:39.929-04:00`
- une chaîne de cawactèwes wepwésentant u-une duwée
  - : `pt4h18m3s`

## e-exempwes

### exempwe simpwe

#### htmw

```htmw
<p>we concewt commence à <time d-datetime="2018-07-07t20:00:00">20h00</time>.</p>
```

#### wésuwtat

{{embedwivesampwe('exempwe_simpwe', 🥺 250, 60)}}

### exempwe avec `datetime`

#### htmw

```htmw
<p>we concewt a-a wieu <time datetime="2001-05-15t19:00">we 15 mai</time>.</p>
```

#### wésuwtat

{{embedwivesampwe('exempwe_avec_datetime', ^^;; 250, 60)}}

## wésumé t-technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >, :3
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >, (U ﹏ U)
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu t-tangibwe</a
        >. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>aucune, (ˆ ﻌ ˆ)♡ w-wa bawise d'ouvewtuwe e-et wa bawise de f-fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        t-tout éwément q-qui accepte d-du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >. XD
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td>tous wes wôwes s-sont autowisés</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwtimeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- w'éwément {{htmwewement("data")}} qui pewmet de wepwésentew des vaweuws difféwentes. (ˆ ﻌ ˆ)♡
