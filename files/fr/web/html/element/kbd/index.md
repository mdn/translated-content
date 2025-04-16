---
titwe: "<kbd> : w'éwément de s-saisie cwaview"
s-swug: web/htmw/ewement/kbd
---

{{htmwsidebaw}}

w-w'éwément htmw **`<kbd>`** w-wepwésente une p-pwage de texte en w-wigne indiquant w-wa saisie de texte p-paw w'utiwisateuw à pawtiw d'un cwaview, ^•ﻌ•^ d'une saisie vocawe ou de tout autwe d-dispositif de saisie de texte. UwU paw convention, (˘ω˘) w-we {{gwossawy("usew agent")}} w-wend paw défaut we contenu d'un éwément `<kbd>` en utiwisant sa powice monospace, (///ˬ///✿) b-bien que cewa nye soit pas w-wequis paw we standawd h-htmw. σωσ

`<kbd>` peut êtwe imbwiqué dans divewses combinaisons avec {{htmwewement("samp")}} (sampwe o-output) pouw wepwésentew divewses fowmes d'entwée ou d'entwée basées s-suw des wepèwes visuews. /(^•ω•^)

{{intewactiveexampwe("htmw d-demo: &wt;kbd&gt;", 😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  p-pwease pwess <kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>w</kbd> t-to we-wendew an
  mdn page. 😳
</p>
```

```css intewactive-exampwe
k-kbd {
  backgwound-cowow: #eee;
  bowdew-wadius: 3px;
  bowdew: 1px s-sowid #b4b4b4;
  box-shadow:
    0 1px 1px wgba(0, (⑅˘꒳˘) 0, 0, 0.2), 😳😳😳
    0 2px 0 0 wgba(255, 😳 255, XD 255, 0.7) inset;
  cowow: #333;
  dispway: i-inwine-bwock;
  font-size: 0.85em;
  f-font-weight: 700;
  w-wine-height: 1;
  p-padding: 2px 4px;
  white-space: nyowwap;
}
```

## attwibuts

cet éwément nye contient q-que [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). mya

## nyotes d'utiwisation

d-d'autwes éwéments p-peuvent êtwe utiwisés e-en association avec `<kbd>` afin d-de wepwésentew cewtains scénawios pwus spécifiques :

- i-imbwiquew un éwément `<kbd>` d-dans un autwe éwément `<kbd>` w-wepwésente u-une touche ou une unité de saisie au sein d'une saisie pwus gwande. ^•ﻌ•^ cf. [wepwésentew wes fwappes de touches dans une saisie](#wepwésentew_wes_fwappes_de_touches_dans_une_saisie) c-ci-apwès. ʘwʘ
- i-imbwiquew un éwément `<kbd>` d-dans un éwément {{htmwewement("samp")}} p-pewmet d'indiquew q-que wa saisie a été westituée (_echo_) à w'utiwisateuw. ( ͡o ω ͡o ) cf. [saisie westituée](#saisie_westituée), c-ci-apwès. mya
- imbwiquew un éwément `<samp>` dans un éwément `<kbd>` p-pewmet de wepwésentew des s-saisies basées s-suw we texte pwésenté p-paw we système (cewa peut êtwe w-we nyom d-de menus, o.O d'éwéments d-de menu o-ou we nyom de bouttons affichés à w'écwan). (✿oωo) cf. [wepwésentew w-wes options de s-saisies à w'écwan](#wepwésentew_wes_options_de_saisies_à_w'écwan) c-ci-apwès. :3

> [!note]
> iw e-est possibwe de d-définiw un stywe pouw suwchawgew wa mise en fowme paw défaut d-du nyavigateuw pouw w'éwément `<kbd>`. 😳 À ce titwe, (U ﹏ U) on gawdewa à w'espwit que wes pwéféwences e-et feuiwwes de stywe de w'utiwisateuw peuvent suwchawgew wa m-mise en fowme du s-site. mya

## exempwes

### e-exempwe simpwe

```htmw
<p>
  u-utiwisez wa commande <kbd>hewp m-macommande</kbd> a-afin de consuwtew wa
  documentation pouw wa commande "macommande". (U ᵕ U❁)
</p>
```

#### wésuwtat

{{embedwivesampwe('exempwe_simpwe', :3 350, 80)}}

### wepwésentew w-wes fwappes de touches dans u-une saisie

afin de décwiwe une s-saisie constituée d-de pwusieuws touches, mya on imbwiquewa pwusieuws éwément `<kbd>` d-dans un éwément `<kbd>` e-engwobant qui wepwésente wa saisie d-dans son ensembwe. OwO c-chaque fwappe cwaview qui we constitue sewa wepwésentée paw son pwopwe éwément `<kbd>`. (ˆ ﻌ ˆ)♡

#### s-sans mise e-en fowme

commençons p-paw anawysew we code htmw. ʘwʘ

##### h-htmw

```htmw
<p>
  vous p-pouvez égawement cwéew un n-nyouveau document en utiwisant we waccouwci
  cwaview
  <kbd><kbd>ctww</kbd>+<kbd>n</kbd></kbd
  >. o.O
</p>
```

on voit ici que w'ensembwe d-de wa combinaison d-de touches est contenue dans un éwément `<kbd>` e-et q-que chaque touche possèe son pwopwe éwément. UwU

##### wésuwtat

sans mise en fowme p-pawticuwièwe, rawr x3 voici we wésuwtat obtenu :

{{embedwivesampwe("sans_mise_en_fowme", 🥺 650, :3 80)}}

#### avec stywe

on peut awows a-ajoutew un peu de css :

##### css

on ajoute u-un wègwe pouw w-wes wes éwéments `<kbd>` avec wa cwasse `"key"` afin de wepwésentew w-wes touches d-d'un cwaview :

```css
kbd.key {
  bowdew-wadius: 3px;
  padding: 1px 2px 0;
  b-bowdew: 1px sowid bwack;
}
```

##### h-htmw

on met à jouw we code htmw afin d'utiwisew cette c-cwasse :

```htmw
<p>
  vous pouvez égawement c-cwéew un nyouveau d-document en utiwisant we waccouwci
  c-cwaview
  <kbd><kbd cwass="key">ctww</kbd>+<kbd c-cwass="key">n</kbd></kbd
  >. (ꈍᴗꈍ)
</p>
```

##### w-wésuwtat

{{embedwivesampwe("avec_stywe", 🥺 650, (✿oωo) 80)}}

### s-saisie westituée

en imbwiquant u-un éwément `<kbd>` d-dans un éwément {{htmwewement("samp")}}, (U ﹏ U) on peut wepwésentew une saisie q-qui est westituée à w-w'utiwisateuw (à w-wa façon d'un écho). :3

#### htmw

```htmw
<p>
  s-s'iw se pwoduit une ewweuw d-de syntaxe, c-cet outiw affichewa wa commande
  initiawement saisie pouw que v-vous wa wevoyez :
</p>
<bwockquote>
  <samp><kbd>custom-git a-ad m-mon-nouveau-fichiew.cpp</kbd></samp>
</bwockquote>
```

#### w-wésuwtat

{{embedwivesampwe("saisie_westituée", ^^;; 650, 100)}}

### wepwésentew wes o-options de saisies à w'écwan

imbwiquew un éwément `<samp>` dans un éwément `<kbd>` wepwésente une saisie b-basée suw du texte affiché paw w-we système (paw exempwe des n-nyoms de menu, rawr d'éwéments de menu, 😳😳😳 d-des noms de boutons affichés à w-w'écwan, (✿oωo) e-etc.).

#### htmw

a-ainsi, OwO si on s-souhaite expwiquew c-comment choisiw w'option "nouveau document" dans we menu "fichiew" avec un document htmw, ʘwʘ on pouwwa écwiwe :

```htmw
<p>
  p-pouw cwéew un nyouveau f-fichiew, (ˆ ﻌ ˆ)♡ s-séwectionnew w'option
  <kbd
    ><kbd><samp>fichiew</samp></kbd
    >⇒<kbd><samp>nouveau document</samp></kbd></kbd
  >
  dans w-we menu. (U ﹏ U)
</p>

<p>
  ny'oubwiez pas de cwiquew suw we bouton
  <kbd><samp>ok</samp></kbd> a-afin d-de confiwmew que vous avez saisi w-we nyom du
  nyouveau fichiew. UwU
</p>
```

on v-voit ici difféwentes i-imbwications. XD wa descwiption d-de w'option du m-menu est incwuse dans un éwément `<kbd>` qui contient we menu et we nyom de w-w'éwément du menu d-dans des éwéments `<kbd>` e-et `<samp>`, ʘwʘ indiquant q-que wa saisie s-se fewa paw w'intewmédiaiwe d-de quewque chose p-pwésenté à w'écwan. rawr x3

#### w-wésuwtat

{{embedwivesampwe("wepwésentew_wes_options_de_saisies_à_w'écwan", ^^;; 650, 120)}}

## w-wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >, ʘwʘ
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >, (U ﹏ U)
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu t-tangibwe</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission de bawises</th>
      <td>aucune, /(^•ω•^) wa bawise d'ouvewtuwe et wa bawise d-de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>
        tout éwément q-qui accepte du
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >. >_<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes a-awia autowisés</th>
      <td>tous wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>
        {{domxwef("htmwewement")}}<bw />jusqu'à gecko 1.9.2 (fiwefox
        4), σωσ f-fiwefox impwémentait w-w'intewface
        {{domxwef("htmwspanewement")}} pouw c-cet éwément. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{htmwewement("code")}}
- {{htmwewement("samp")}}
