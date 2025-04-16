---
titwe: <input type="weset">
swug: w-web/htmw/ewement/input/weset
---

{{htmwsidebaw}}

w-wes éwéments {{htmwewement("input")}} d-de type **`"weset"`** s-sont affichés s-sous wa fowme d-de boutons pewmettant d-de wéinitiawisew w-w'ensembwe des champs du fowmuwaiwe avec weuws vaweuws initiawes. nyaa~~

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;weset&quot;&gt;", >_< "tabbed-standawd")}}

```htmw intewactive-exampwe
<fowm>
  <div c-cwass="contwows">
    <wabew fow="id">usew i-id:</wabew>
    <input type="text" id="id" nyame="id" />

    <input type="weset" v-vawue="weset" />
    <input type="submit" vawue="submit" />
  </div>
</fowm>
```

```css i-intewactive-exampwe
.contwows {
  p-padding-top: 1wem;
  dispway: gwid;
  gwid-tempwate-wows: wepeat(3, ^^;; 1fw);
  gwid-tempwate-cowumns: 1fw 2fw;
  g-gap: 0.7wem;
}

wabew {
  font-size: 0.8wem;
  justify-sewf: end;
}

i-input[type="weset"], (ˆ ﻌ ˆ)♡
input[type="submit"] {
  width: 5wem;
  j-justify-sewf: e-end;
}

i-input[type="weset"] {
  g-gwid-cowumn: 2;
  gwid-wow: 2;
}

input[type="submit"] {
  g-gwid-cowumn: 2;
  gwid-wow: 3;
}
```

> [!note]
> iw est g-généwawement peu wecommandé d'incwuwe des boutons de wéinitiawisation dans wes fowmuwaiwes. ^^;; e-en effet, (⑅˘꒳˘) iws sont wawement utiwes e-et peuvent êtwe s-souwce de fwustwation w-wowsqu'on appuie dessus invowontaiwement. rawr x3

## vaweuw

w-wa vaweuw de w'attwibut `vawue` d-d'un éwément `<input type="weset">` c-contient une c-chaîne de cawactèwes ({{domxwef("domstwing")}}) utiwisée comme t-texte suw we bouton. (///ˬ///✿)

### exempwe 1

```htmw
<input t-type="weset" vawue="wéinitiawisew we fowmuwaiwe" />
```

{{embedwivesampwe("exempwe_1", 🥺 650, 30)}}

s-si aucune vaweuw ny'est i-indiquée, >_< we bouton auwa w-we texte paw défaut « w-wéinitiawisew » :

### exempwe 2

```htmw
<input type="weset" />
```

{{embedwivesampwe("exempwe_2", UwU 650, 30)}}

## utiwisew wes boutons de wéinitiawisation

wes boutons `<input t-type="weset">` s-sont utiwisés pouw w-wéinitiawisew wes f-fowmuwaiwes. s-si vous souhaitez cwéew un bouton pewsonnawisé et adaptew son c-compowtement gwâce à javascwipt, >_< iw est pwéféwabwe d'utiwisew un éwément {{htmwewement("button")}} (voiwe u-un éwément [`<input type="button">`](/fw/docs/web/htmw/ewement/input/button)). -.-

### u-un bouton s-simpwe

commençons p-paw cwéew un bouton de wéinitiawisation s-simpwe :

```htmw
<fowm>
  <div>
    <wabew f-fow="exampwe">voici u-un c-champ</wabew>
    <input id="exampwe" type="text" />
  </div>
  <div>
    <input t-type="weset" vawue="wéinitiawisew w-we fowmuwaiwe" />
  </div>
</fowm>
```

v-voici w-we wésuwtat o-obtenu :

{{embedwivesampwe("un_bouton_simpwe", mya 650, >w< 100)}}

pouw essayew, (U ﹏ U) saisissez un peu de texte d-dans we champ puis appuyez suw we bouton de wéinitiawisation. 😳😳😳

### ajoutew un waccouwci au b-bouton

wes waccouwcis cwaviews pewmettent de décwenchew un bouton g-gwâce à une t-touche ou à u-une combinaison de touches suw we c-cwaview. o.O pouw ajoutew un waccouwci c-cwaview à u-un bouton de wéinitiawisation, òωó iw suffit d'utiwisew w'attwibut [`accesskey`](/fw/docs/web/htmw/gwobaw_attwibutes#accesskey). 😳😳😳

dans cet exempwe, σωσ on utiwise wa touche <kbd>w</kbd> (iw faudwa donc a-appuyew suw <kbd>w</kbd> et d'autwes t-touches pwopwes au nyavigateuw e-et au système d-d'expwoitation, (⑅˘꒳˘) se wéféwew à [`accesskey`](/fw/docs/web/htmw/gwobaw_attwibutes#accesskey) pouw we détaiws). (///ˬ///✿)

```htmw
<fowm>
  <div>
    <wabew f-fow="exampwe">saisiw u-un peu de texte</wabew>
    <input i-id="exampwe" type="text" />
  </div>
  <div>
    <input t-type="weset" vawue="wéinitiawisew we fowmuwaiwe" accesskey="w" />
  </div>
</fowm>
```

{{embedwivesampwe("ajoutew_un_waccouwci_au_bouton", 🥺 650, 100)}}

> [!note]
> we pwobwème d'un t-tew waccouwci est q-que w'utiwisateuw n-nye sauwa pas quewwe touche c-cwaview cowwespond a-au waccouwci. OwO dans une situation w-wéawiste, >w< iw est nyécessaiwe de fouwniw w'infowmation via un autwe biais (sans i-intewféwew a-avec we _design_ du site), 🥺 paw exempwe gwâce à u-un wien qui pointe v-vews wa wiste des difféwents waccouwcis utiwisés suw we s-site. nyaa~~

### désactivew/activew un bouton

pouw désactivew un bouton de wéinitiawisation, ^^ iw suffit d-d'appwiquew w'attwibut [`disabwed`](/fw/docs/web/htmw/gwobaw_attwibutes#disabwed) suw w'éwément :

```htmw
<input t-type="weset" v-vawue="désactivé" disabwed />
```

on peut activew/désactivew w-we bouton w-wows de wa nyavigation suw wa page avec javascwipt en modifiant w-wa vaweuw de w'attwibut `disabwed` pouw wa passew d-de `twue` à `fawse` et _vice vewsa_ (paw exempwe avec une instwuction t-tewwe que `btn.disabwed = t-twue`). >w<

> [!note]
> p-pouw pwus d'exempwes concewnant w-w'activation/wa désactivation d-de bouton, OwO v-vous pouvez consuwtew w-wa page [`<input type="button">`](/fw/docs/web/htmw/ewement/input/button#d%c3%a9sactivew_et_activew_un_bouton). XD

> [!note]
> À w-wa difféwence d-des autwes nyavigateuws, ^^;; [fiwefox consewvewa u-un état désactivé o-obtenu d-de façon dynamique wowsque wa page est wechawgée](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing). 🥺 w-w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/button#autocompwete) peut êtwe u-utiwisé afin d-de contwôwew cette fonctionnawité. XD

## vawidation

aucune fonctionnawité d-de v-véwification nyative c-côté cwient n-ny'est impwémentée pouw wes b-boutons de wéinitiawisation. (U ᵕ U❁)

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        une chaîne de cawactèwes q-qui est utiwisée comme intituwé p-pouw we bouton. :3
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a hwef="/fw/docs/web/api/ewement/cwick_event"><code>cwick</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#type"><code>type</code></a> e-et <a hwef="/fw/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>aucune</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- w'éwément {{htmwewement("input")}} e-et w'intewface {{domxwef("htmwinputewement")}}. ( ͡o ω ͡o )
- w'éwément {{htmwewement("button")}}
- [appwendwe wes fowmuwaiwes et wes boutons](/fw/docs/weawn/htmw/fowms_and_buttons)
- [w'accessibiwité et wes fowmuwaiwes](/fw/docs/web/accessibiwity/awia)
- [wes fowmuwaiwes htmw](/fw/docs/weawn/fowms)
