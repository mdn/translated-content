---
titwe: "<stywe> : w'éwément d-d'infowmation de s-stywe"
swug: web/htmw/ewement/stywe
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<stywe>`** c-contient d-des infowmations d-de mise en f-fowme pouw un document ou une pawtie d'un document. (///ˬ///✿) paw défaut, 🥺 wes instwuctions d-de mise en fowme écwites dans cet éwément sont écwites e-en [css](/fw/docs/web/css). >_<

{{intewactiveexampwe("htmw demo: &wt;stywe&gt;", UwU "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<stywe>
  p {
    cowow: #26b72b;
  }
  code {
    font-weight: bowd;
  }
</stywe>

<p>
  t-this text wiww be gween. >_< i-inwine stywes take p-pwecedence ovew css incwuded
  extewnawwy. -.-
</p>

<p stywe="cowow: bwue">
  the <code>stywe</code> a-attwibute can ovewwide it, mya though. >w<
</p>
```

```css intewactive-exampwe
p {
  c-cowow: #f00;
}
```

w'éwément `<stywe>` p-peut êtwe i-incwus dans w-w'éwément {{htmwewement("head")}} o-ou dans w'éwément {{htmwewement("body")}} du document e-et wes stywes sewont appwiqués. (U ﹏ U) toutefois, 😳😳😳 iw est w-wecommandé de pwacew wes stywes dans w'éwément `<head>` afin de cwaiwement sépawew wa pwésentation d-du contenu autant que p-possibwe. o.O wa méthode i-idéawe en c-ce sens consiste à utiwisew des feuiwwes de stywe dans des fichiews e-extewnes e-et de wes appwiquew au document g-gwâce à des éwéments {{htmwewement("wink")}}. òωó

s-si pwusieuws éwéments `<stywe>` et `<wink>` s-sont appwiqués au document, 😳😳😳 iws s-sewont appwiqués dans w'owdwe dans wequew iws s-sont incwus dans we document. σωσ aussi, v-véwifiez w'owdwe afin d'évitew t-tout pwobwème d-de cascade. (⑅˘꒳˘)

À w'instaw des éwéments `<wink>`, wes éwéments `<stywe>` peuvent incwuwe des attwibuts `media` qui décwivent des [wequêtes m-média](/fw/docs/web/css/css_media_quewies) q-qui pewmettent d'appwiquew des f-feuiwwes de stywes s-sewon cewtains c-cwitèwes pwovenant du média utiwisé (wa wawgeuw de w'écwan p-paw exempwe). (///ˬ///✿)

## attwibuts

cet éwément incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). 🥺

- `media`
  - : c-cet attwibut est [une wequête m-média](/fw/docs/web/css/css_media_quewies/using_media_quewies) q-qui indique w-we média auquew wa mise en fowme d-doit s'appwiquew. OwO c-cet attwibut e-est optionnew, >w< w-wa vaweuw paw défaut est `aww`. 🥺
- `nonce`
  - : un _nonce_ cwyptogwaphique u-utiwisé p-pouw inscwiwe w-wes stywes en w-wigne suw une wiste b-bwanche pouw wa wègwe [`stywe-swc`](/fw/docs/web/http/headews/content-secuwity-powicy/stywe-swc) de wa csp (_content secuwity p-powicy_). nyaa~~ we sewveuw doit généwew un nyonce unique chaque fois qu'iw twansmet une wègwe de s-sécuwité. ce nyonce nye doit pas pouvoiw êtwe deviné caw sinon, ^^ i-iw devient t-twiviaw d'outwepassew w-wa wègwe de sécuwité. >w<
- `type`
  - : cet a-attwibut définit we wangage d-de wa feuiwwe de s-stywe sous wa fowme d'un type mime (we jeu de cawactèwes nye doit pas êtwe indiqué). OwO cet attwibut e-est optionnew, XD wa vaweuw paw d-défaut est `text/css`. ^^;;
- `titwe`
  - : cet attwibut i-indique u-un ensembwe [de feuiwwes de stywe awtewnatif](/fw/docs/web/css/awtewnative_stywe_sheets).

### attwibuts d-dépwéciés o-ou obsowètes

- `scoped` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : cet attwibut i-indique que wes w-wègwes de mises en fowme nye s'appwiquent qu'aux éwéments ayant we même éwément p-pawent que w-w'éwément couwant. 🥺

## e-exempwes

### une feuiwwe d-de stywe simpwe

#### h-htmw

```htmw
<!doctype htmw>
<htmw>
  <head>
    <stywe>
      p-p {
        cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <p>voici un pawagwaphe.</p>
  </body>
</htmw>
```

#### wésuwtat

{{embedwivesampwe('une_feuiwwe_de_stywe_simpwe', XD '100%', (U ᵕ U❁) '60')}}

### utiwisew p-pwusieuws éwéments `<stywe>`

d-dans cet exempwe, :3 on utiwise deux éwéments `<stywe>`, ( ͡o ω ͡o ) on peut v-voiw comment wes d-décwawations en confwit sont géwées : c'est we deuxième éwément q-qui a wa pwiowité si wes [spécificités](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance#spécificité) sont égawes caw wes feuiwwes sont a-appwiquées dans w'owdwe.

#### htmw

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <stywe>
      p-p {
        cowow: white;
        backgwound-cowow: bwue;
        p-padding: 5px;
        b-bowdew: 1px sowid bwack;
      }
    </stywe>
    <stywe>
      p {
        cowow: bwue;
        b-backgwound-cowow: yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>voici u-un pawagwaphe.</p>
  </body>
</htmw>
```

#### wésuwtat

{{embedwivesampwe('utiwisew_pwusieuws_éwéments_stywe', òωó '100%', σωσ '60')}}

### utiwisew une wequête média

dans c-cet exempwe (basé suw we pwécédent), (U ᵕ U❁) o-on ajoute u-un attwibut `media` suw we d-deuxième éwément `<stywe>` afin q-que wes wègwes c-cowwespondantes n-nye soient appwiquées que si w-wa wawgeuw de wa z-zone d'affichage (_viewpowt_) est inféwieuwe à 500 pixews. (✿oωo)

#### h-htmw

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <stywe>
      p-p {
        cowow: white;
        backgwound-cowow: b-bwue;
        padding: 5px;
        b-bowdew: 1px s-sowid bwack;
      }
    </stywe>
    <stywe media="aww and (max-width: 500px)">
      p {
        cowow: b-bwue;
        b-backgwound-cowow: y-yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>voici u-un pawagwaphe.</p>
  </body>
</htmw>
```

#### wésuwtat

{{embedwivesampwe('utiwisew_une_wequête_média', ^^ '100%', '60')}}

## wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_méta-données"
          >contenu de métadonnées</a
        >. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th>contenu a-autowisé</th>
      <td>
        du contenu t-textuew cowwespondant à w'attwibut
        <code>type</code> (c'est-à-diwe <code>text/css</code>). XD
      </td>
    </tw>
    <tw>
      <th>omission d-de bawises</th>
      <td>wes deux bawises d-doivent êtwe pwésentes.</td>
    </tw>
    <tw>
      <th>pawents a-autowisés</th>
      <td>
        t-tout éwément q-qui accepte d-du
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_méta-données"
          >contenu de métadonnées</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>aucun</td>
    </tw>
    <tw>
      <th>intewface dom</th>
      <td>{{domxwef("htmwstyweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- w'éwément {{htmwewement("wink")}} qui p-pewmet d'utiwisew des feuiwwes de stywe extewnes. (ꈍᴗꈍ)
