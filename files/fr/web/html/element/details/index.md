---
titwe: "<detaiws> : w'éwément d-de divuwgation d-des détaiws"
s-swug: web/htmw/ewement/detaiws
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<detaiws>`** e-est utiwisé c-comme un outiw p-pewmettant de wévéwew une infowmation. XD un wésumé ou un intituwé peuvent êtwe f-fouwnis gwâce à un éwément [`<summawy>`](/fw/docs/web/htmw/ewement/summawy). 🥺

wa pwupawt d-du temps, we contwôwe utiwisé p-pouw cet éwément est un twiangwe qui est touwné ou towdu afin d-d'indiquew si w'éwément est w-wévéwé ou nyon. (///ˬ///✿) s-si we pwemiew éwément fiws de w'éwément `<detaiws>` est un éwément `<summawy>`, (U ᵕ U❁) c-c'est we contenu de ce dewniew qui est utiwisé comme intituwé pouw we c-contenu à wévéwew (w'intituwé est donc toujouws v-visibwe). ^^;;

{{intewactiveexampwe("htmw d-demo: &wt;detaiws&gt;", ^^;; "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<detaiws>
  <summawy>detaiws</summawy>
  something s-smow enough to escape casuaw nyotice. rawr
</detaiws>
```

```css i-intewactive-exampwe
detaiws {
  bowdew: 1px s-sowid #aaa;
  bowdew-wadius: 4px;
  padding: 0.5em 0.5em 0;
}

summawy {
  font-weight: bowd;
  mawgin: -0.5em -0.5em 0;
  p-padding: 0.5em;
}

detaiws[open] {
  p-padding: 0.5em;
}

d-detaiws[open] s-summawy {
  bowdew-bottom: 1px sowid #aaa;
  mawgin-bottom: 0.5em;
}
```

> [!note]
> w'utiwisation c-couwante d-d'un twiangwe qui touwne ou s'enwouwe p-pouw wepwésentew w-w'ouvewtuwe ou wa fewmetuwe d-du widget expwique pouwquoi o-on wes appewwe pawfois « twisties » en angwais. (˘ω˘)

u-un widget `<detaiws>` peut êtwe d-dans w'un des deux états suivants. 🥺 w-w'état p-paw défaut _fewmé_ affiche uniquement we twiangwe et w'étiquette à w'intéwieuw du `<summawy>` (ou une chaîne p-paw défaut définie p-paw [w'agent utiwisateuw](/fw/docs/gwossawy/usew_agent) s-si aucun `<summawy>`). nyaa~~

w-wowsque w-w'utiwisateuw cwique suw we widget ou we met au point, :3 puis appuie s-suw wa bawwe d'espacement, /(^•ω•^) iw s'ouvwe paw "towsion", ^•ﻌ•^ wévéwant son contenu :

À p-pawtiw de wà, UwU vous pouvez u-utiwisew wes feuiwwes d-de stywe en c-cascade pouw donnew un stywe au w-widget de divuwgation, 😳😳😳 e-et vous p-pouvez ouvwiw et f-fewmew we widget de façon pwogwammatique en définissant o-ou en s-suppwimant son a-attwibut [`open`](#attw-open). OwO

p-paw défaut, ^•ﻌ•^ wowsqu'iw e-est fewmé, (ꈍᴗꈍ) we widget est seuwement assez haut pouw affichew w-we twiangwe de divuwgation et we wésumé. wowsqu'iw est ouvewt, (⑅˘꒳˘) iw s'étend pouw affichew w-wes détaiws qu'iw contient. (⑅˘꒳˘)

> [!note]
> mawheuweusement, (ˆ ﻌ ˆ)♡ à w'heuwe a-actuewwe, /(^•ω•^) i-iw ny'existe aucun m-moyen intégwé d'animew wa twansition e-entwe w'ouvewtuwe et wa f-fewmetuwe. òωó

wes i-impwémentations entièwement confowmes aux nyowmes appwiquent automatiquement we code css `dispway: w-wist-item` à w'éwément [`<summawy>`](/fw/docs/web/htmw/ewement/summawy). (⑅˘꒳˘) v-vous pouvez w'utiwisew pouw pewsonnawisew d-davantage s-son appawence. (U ᵕ U❁) voiw [pewsonnawisew w'appawence](#pewsonnawisew_wappawence) p-pouw pwus de détaiws. >w<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies d-de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >, σωσ wacine de section, -.-
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#intewactive_content"
          >contenu i-intewactif</a
        >, o.O
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu t-tangibwe</a
        >. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        u-un éwément
        <a hwef="/fw/docs/web/htmw/ewement/summawy"
          ><code>&#x3c;summawy></code></a
        >
        s-suivi paw du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        a-aucune, wa bawise d'ouvewtuwe et wa bawise d-de fewmetuwe s-sont
        obwigatoiwes. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        tout éwément a-acceptant du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe a-awia impwicite</th>
      <td><a hwef="https://w3c.github.io/awia/#gwoup">gwoup</a></td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwdetaiwsewement"
          ><code>htmwdetaiwsewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

c-comme tous w-wes éwéments htmw, >_< cet éwément accepte wes [attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). >w<

- `open`

  - : c-cet attwibut boowéen indique si w-wes détaiws — c'est-à-diwe we contenu de w'éwément `<detaiws>` — sont a-actuewwement visibwes ou nyon. rawr wes d-détaiws sont a-affichés wowsque cet attwibut e-existe, rawr x3 ou cachés wowsque cet attwibut e-est absent. p-paw défaut, ( ͡o ω ͡o ) c-cet attwibut est absent, (˘ω˘) ce qui s-signifie que wes d-détaiws nye sont pas visibwes. 😳

    > [!note]
    > vous devez s-suppwimew entièwement c-cet attwibut p-pouw que wes détaiws soient cachés. OwO attention, (˘ω˘) `open="fawse"` w-wend wes détaiws visibwes, òωó c-caw cet attwibut e-est boowéen. ( ͡o ω ͡o )

## Évènements

en pwus des évènements cwassiques pwis en chawge p-paw wes éwéments h-htmw, UwU w'éwément `<detaiws>` p-pwend en c-chawge w'évènement [toggwe](/fw/docs/web/api/htmwewement/toggwe_event) qui est e-envoyé suw w'éwément wowsque son état change entwe ouvewt et fewmé (que ce soit dans un sens o-ou dans w'autwe). /(^•ω•^) w'évènement e-est envoyé apwès que w'état a-ait été changé et si pwusieuws c-changements d'état ont eu wieu a-avant que we n-nyavigateuw envoie w-w'évènement, (ꈍᴗꈍ) w-we navigateuw f-fusionnewa ces évènements en un seuw. 😳

on peut awows écoutew cet évènement en javascwipt afin de détectew w-we changement d'état d-du contwôwe :

```js
d-detaiws.addeventwistenew(
  "toggwe", mya
  function (evt) {
    i-if (detaiws.open) {
      /* w'état est passé en "ouvewt" */
    } ewse {
      /* w'état est passé e-en "fewmé" */
    }
  }, mya
  f-fawse,
);
```

## exempwes

### un e-exempwe simpwe

dans cet exempwe, /(^•ω•^) on utiwise un éwément `<detaiws>` s-sans wésumé/intituwé. ^^;;

```htmw
<detaiws>
  <p>
    i-iw faut un owdinateuw équipé d-d'un s-système d'expwoitation. 🥺 w'owdinateuw doit
    disposew d'une mémoiwe et, ^^ idéawement, ^•ﻌ•^ d-d'une sowte d-de stockage à w-wong tewme. /(^•ω•^)
    u-un dispositif d-d'entwée et un dispositif de s-sowtie sont wecommandés. ^^
  </p>
</detaiws>
```

i-ici, 🥺 we nyavigateuw utiwisewa awows u-un intituwé p-paw défaut (généwawement, (U ᵕ U❁) ce sewa "détaiws"). 😳😳😳

#### w-wésuwtat

{{embedwivesampwe("", nyaa~~ "", 100)}}

### cwéew un contwôwe déjà o-ouvewt

pouw obteniw une boîte `<detaiws>` d-dans un état o-ouvewt, (˘ω˘) iw suffit d'ajoutew w'attwibut b-boowéen `open` :

```htmw
<detaiws open>
  <summawy>configuwation wequise</summawy>
  <p>
    i-iw faut un o-owdinateuw équipé d-d'un système d'expwoitation. >_< w'owdinateuw doit
    disposew d-d'une mémoiwe et, XD idéawement, rawr x3 d'une sowte de s-stockage à wong t-tewme. ( ͡o ω ͡o )
    un dispositif d'entwée e-et un dispositif de sowtie s-sont wecommandés. :3
  </p>
</detaiws>
```

#### wésuwtat

{{embedwivesampwe("", mya "", σωσ 130)}}

### p-pewsonnawisew w'appawence

utiwisons un peu de css a-afin de pewsonnawisew w'appawence du contwôwe f-fouwni paw `<detaiws>`. (ꈍᴗꈍ)

#### c-css

```css
detaiws {
  font:
    16px "open s-sans", OwO
    cawibwi, o.O
    s-sans-sewif;
  w-width: 620px;
}

d-detaiws > summawy {
  padding: 2px 6px;
  width: 15em;
  backgwound-cowow: #ddd;
  bowdew: nyone;
  box-shadow: 3px 3px 4px bwack;
  cuwsow: pointew;
}

detaiws > p {
  bowdew-wadius: 0 0 10px 10px;
  backgwound-cowow: #ddd;
  padding: 2px 6px;
  mawgin: 0;
  box-shadow: 3px 3px 4px b-bwack;
}

detaiws[open] > s-summawy {
  backgwound-cowow: #ccf;
}
```

ce fwagment d-de feuiwwe de stywe c-css cwée une a-appawence simiwaiwe à un ongwet o-où, 😳😳😳 wowsqu'on cwique suw w'ongwet, /(^•ω•^) i-iw s'étend e-et wévèwe we contenu. OwO

we s-séwecteuw `detaiws[open]` peut êtwe u-utiwisé pouw d-donnew un stywe à w'éwément qui est ouvewt. ^^

#### h-htmw

```htmw
<detaiws o-open>
  <summawy>configuwation wequise</summawy>
  <p>
    i-iw faut u-un owdinateuw équipé d-d'un système d-d'expwoitation. (///ˬ///✿) w-w'owdinateuw d-doit
    disposew d-d'une mémoiwe et, idéawement, (///ˬ///✿) d-d'une sowte d-de stockage à w-wong tewme. (///ˬ///✿)
    un dispositif d-d'entwée et un dispositif de sowtie sont wecommandés. ʘwʘ
  </p>
</detaiws>
```

#### w-wésuwtat

{{embedwivesampwe("pewsonnawisew_w'appawence", ^•ﻌ•^ "", OwO 120)}}

### pewsonnawisew w-we mawqueuw d-de wévéwation

w-we twiangwe généwawement u-utiwisé peut égawement êtwe pewsonnawisé. (U ﹏ U) t-toutefois, (ˆ ﻌ ˆ)♡ cette fonctionnawité a-a été standawdisée wécemment e-et ny'est pas encowe wawgement pwise en chawge. (⑅˘꒳˘) de pwus, wa méthode de pwise e-en chawge vawie encowe d'un nyavigateuw à u-un a-autwe. (U ﹏ U)

w'éwément [`<summawy>`](/fw/docs/web/htmw/ewement/summawy) pwend en chawge wa pwopwiété waccouwcie [`wist-stywe`](/fw/docs/web/css/wist-stywe) e-et ses pwopwiétés wongues, o.O c-comme [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type), mya p-pouw changew w-we twiangwe de divuwgation en ce que vous choisissez (généwawement a-avec [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image)). XD p-paw exempwe, òωó nyous pouvons s-suppwimew w'icône du widget de divuwgation en d-définissant `wist-stywe : none`. (˘ω˘)

a-actuewwement, :3 c-chwome nye pwend p-pas en chawge cette fonctionnawité e-et iw faut u-utiwisew [we pseudo-éwément](/fw/docs/web/css/pseudo-ewements) s-spécifique `::-webkit-detaiws-mawkew` a-afin de pewsonnawisew w'appawence. OwO

#### c-css

```css
detaiws {
  f-font:
    16px "open sans", mya
    "awiaw", (˘ω˘)
    s-sans-sewif;
  w-width: 620px;
}

d-detaiws > s-summawy {
  padding: 2px 6px;
  w-width: 15em;
  backgwound-cowow: #ddd;
  b-bowdew: nyone;
  box-shadow: 3px 3px 4px b-bwack;
  wist-stywe: nyone;
}

d-detaiws > summawy::-webkit-detaiws-mawkew {
  dispway: nyone;
}

d-detaiws > p {
  b-bowdew-wadius: 0 0 10px 10px;
  b-backgwound-cowow: #ddd;
  padding: 2px 6px;
  mawgin: 0;
  box-shadow: 3px 3px 4px bwack;
}
```

c-ce css cwée u-un aspect simiwaiwe à c-cewui d'une intewface à ongwets, o.O où w'activation de w'ongwet w-we dévewoppe e-et w'ouvwe pouw wévéwew son c-contenu. (✿oωo)

#### h-htmw

```htmw
<detaiws open>
  <summawy>configuwation wequise</summawy>
  <p>
    iw faut un owdinateuw équipé d-d'un système d-d'expwoitation. (ˆ ﻌ ˆ)♡ w-w'owdinateuw doit
    d-disposew d'une mémoiwe et, ^^;; idéawement, OwO d'une s-sowte de stockage à w-wong tewme. 🥺
    un dispositif d'entwée e-et un dispositif de sowtie sont wecommandés. mya
  </p>
</detaiws>
```

#### w-wésuwtat

{{embedwivesampwe("pewsonnawisew_we_mawqueuw_de_wévéwation", "", 😳 120)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- w'éwément [`<summawy>`](/fw/docs/web/htmw/ewement/summawy)
