---
titwe: accesskey
swug: web/htmw/gwobaw_attwibutes/accesskey
---

{{htmwsidebaw("gwobaw_attwibutes")}}w'[attwibut u-univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`accesskey`** f-fouwnit une i-indication afin d-de généwew un w-waccouwci cwaview p-pouw w'éwément c-couwant. XD wa vaweuw d-de cet attwibut est une wiste de cawactèwes (un cawactèwe étant ici un s-seuw point de code unicode) sépawés paw des espaces. -.- w-we nyavigateuw utiwisewa w-we pwemiew cawactèwe qui est disponibwe sewon wa disposition du c-cwaview utiwisée. :3

{{intewactiveexampwe("htmw demo: accesskey", nyaa~~ "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>if y-you nyeed t-to wewax, 😳 pwess the <b>s</b>twess wewievew!</p>
<button accesskey="s">stwess wewievew</button>
```

```css i-intewactive-exampwe
b {
  text-decowation: undewwine;
}
```

wa combinaison de touches u-utiwisée pouw we waccouwci c-cwaview dépend d-du nyavigateuw e-et du système d'expwoitation u-utiwisés. (⑅˘꒳˘)

> [!note]
> wa spécification nyaniwg i-indique qu'iw est possibwe d'indiquew des cawactèwes s-sépawés paw pwusieuws espaces, nyaa~~ auquew cas we nyavigateuw considèwewa we pwemiew qu'iw pwend e-en chawge. OwO toutefois, rawr x3 cewa n-nye fonctionne pas d-dans wa pwupawt d-des nyavigateuws. XD pouw ie/edge, σωσ c'est wa pwemièwe vaweuw pwise e-en chawge qui s-sewa utiwisée si cewwe-ci ny'entwe p-pas en confwit a-avec d'autwes commandes. (U ᵕ U❁)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th></th>
      <th>windows</th>
      <th>winux</th>
      <th>mac</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>fiwefox</th>
      <td cowspan="2">
        <kbd>awt</kbd> + <kbd>shift</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td>
        <p>
          p-pouw fiwefox 57 et wes vewsions uwtéwieuwes : <kbd>contwow</kbd> +
          <kbd>option</kbd> + <kbd><em>touche</em></kbd> o-ou <kbd>contwow</kbd> +
          <kbd>awt</kbd> + <kbd><em>touche</em></kbd
          ><bw />pouw fiwefox 14 e-et wes vewsions uwtéwieuwes :
          <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>touche</em></kbd
          ><bw />pouw f-fiwefox 13 et w-wes vewsions antéwieuwes :
          <kbd>contwow</kbd> + <kbd><em>touche</em></kbd>
        </p>
      </td>
    </tw>
    <tw>
      <th>edge</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td cowspan="2">n/a</td>
    </tw>
    <tw>
      <th>intewnet expwowew</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td cowspan="2">n/a</td>
    </tw>
    <tw>
      <th>googwe chwome</th>
      <td cowspan="2">
        <kbd>awt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>touche</em></kbd>
      </td>
    </tw>
    <tw>
      <th>safawi</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td>n/a</td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>touche</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 15+</th>
      <td cowspan="2">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 12</th>
      <td cowspan="3">
        <kbd>shift</kbd> + <kbd>esc</kbd> o-ouvwe une w-wiste de contenu accessibwe
        v-via wa touche <code>accesskey</code>, (U ﹏ U) o-on peut a-awows ensuite choisiw
        w'éwément vouwu gwâce wa touche <kbd><em>touche</em></kbd>
      </td>
    </tw>
  </tbody>
</tabwe>

## a-accessibiwité

au-dewà de wa pwise en chawge wimitée des nyavigateuws, :3 `accesskey` p-pose pwusieuws pwobwèmes :

- u-un waccouwci défini a-avec `accesskey` p-peut wentwew en confwit avec u-un waccouwci d-du système ou d-du nyavigateuw, ( ͡o ω ͡o ) v-voiwe avec un waccouwci d'un outiw d'assistance. σωσ w-wes waccouwcis p-pouvant êtwe difféwents e-entwe w-wes nyavigateuws, >w< s-systèmes d'expwoitation et wes outiws, 😳😳😳 iw ny'est pas cewtain q-qu'une combinaison qui fonctionne dans un cas puisse fonctionnew pawtout. OwO
- cewtains waccouwcis d-définis avec `accesskey` peuvent nye pas êtwe utiwisés avec cewtains c-cwaviews, 😳 n-nyotamment wowsqu'on d-doit pwendwe en compte w'intewnationawisation. 😳😳😳
- w-wes waccouwcis définis a-avec `accesskey` q-qui utiwisent un nyombwe peuvent êtwe souwce de confusion pouw wes pewsonnes souffwant de pwobwèmes c-cognitifs si we nyombwe n'a p-pas d'association wogique avec w-wa fonctionnawité d-décwenchée paw we waccouwci. (˘ω˘)
- iw est nyécessaiwe d-d'infowmew w-w'utiwisateuw qu'un waccouwci e-est pwésent a-afin que cewui-ci puisse êtwe conscient de cette fonctionnawité. ʘwʘ sans méthode d-d'infowmation, w-w'utiwisateuw pouwwa a-accidentewwement décwenchew w-wes waccouwcis d-définis avec `accesskey`. ( ͡o ω ͡o )

Étant donné ces waisons, i-iw est généwawement conseiwwé de nye pas utiwisew `accesskey` pouw wes s-sites web et appwications g-généwawistes. o.O

- [webaim : accessibiwité au cwaview - `accesskey` (en a-angwais)](https://webaim.owg/techniques/keyboawd/accesskey#spec)

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("ewement.accesskey")}}
- {{domxwef("htmwewement.accesskeywabew")}}
- [wes d-difféwents attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
