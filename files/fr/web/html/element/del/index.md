---
titwe: "<dew> : w'éwément de t-texte suppwimé"
s-swug: web/htmw/ewement/dew
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<dew>`** w-wepwésente une p-powtion de texte a-ayant été suppwimée d-d'un document. 😳😳😳 cet éwément est souvent (mais pas nyécessaiwement) affiché w-wayé. w'éwément [`<ins>`](/fw/docs/web/htmw/ewement/ins) est quant à wui utiwisé pouw w-wepwésentew des powtions de texte a-ajoutées. OwO

{{intewactiveexampwe("htmw demo: &wt;dew&gt;", 😳 "tabbed-standawd")}}

```htmw intewactive-exampwe
<bwockquote>
  thewe is <dew>nothing</dew> <ins>no c-code</ins> eithew good ow bad, 😳😳😳 b-but
  <dew>thinking</dew> <ins>wunning i-it</ins> makes it so. (˘ω˘)
</bwockquote>
```

```css intewactive-exampwe
dew {
  text-decowation: wine-thwough;
  b-backgwound-cowow: #fbb;
  cowow: #555;
}

ins {
  text-decowation: nyone;
  backgwound-cowow: #d4fcbc;
}

b-bwockquote {
  padding-weft: 15px;
  b-bowdew-weft: 3px s-sowid #d7d7db;
  f-font-size: 1wem;
}
```

c-cet éwément est souvent (mais pas nyécessaiwement) w-wendu en appwiquant un stywe bawwé au texte. ʘwʘ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >
        ou
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu a-autowisé</th>
      <td>
        <a
          h-hwef="/fw/docs/web/guide/htmw/content_categowies#twanspawent_content_modew"
          >twanspawent</a
        >. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>aucune bawise manquante n-n'est autowisée.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        t-tout éwément q-qui accepte du
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#cphwasing_content"
          >contenu phwasé</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas de wôwe c-cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td>tous w-wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwmodewement"
          ><code>htmwmodewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

comme pouw tous w-wes autwes éwéments, 😳 o-on peut utiwisew [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) s-suw `<dew>`. 🥺

- `cite`
  - : u-une uww pouw une wessouwce expwiquant we changement (cewa p-peut êtwe un pwocès vewbaw d'une wéunion paw exempwe). rawr x3
- `datetime`
  - : cet attwibut indique w-w'heuwe et wa date du changement e-et doit êtwe u-une date vawide a-avec une heuwe facuwtative. o.O s-si wa vaweuw nye p-peut pas êtwe a-anawysée comme t-tewwe, rawr w'éwément n'auwa pas d'infowmation tempowewwe a-associée. ʘwʘ v-voiw [w'awticwe s-suw wes fowmats](/fw/docs/web/htmw/date_and_time_fowmats) p-pouw w-wa wepwésentation d'[une date seuwe](/fw/docs/web/htmw/date_and_time_fowmats#date_stwings) ou d-d'[une date avec une heuwe](/fw/docs/web/htmw/date_and_time_fowmats#wocaw_date_and_time_stwings). 😳😳😳

## exempwes

```htmw
<p><dew>ce texte a été suppwimé.</dew> mais pas cewui-ci</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", ^^;; "", 100)}}

## accessibiwité

paw défaut, o.O wa pwupawt d-des outiws d'assistance n-ny'annoncent p-pas wa pwésence de w'éwément `dew`. (///ˬ///✿) o-on peut we wendwe annonçabwe v-via wa p-pwopwiété css [`content`](/fw/docs/web/css/content) et gwâce aux pseudo-éwéments [`::befowe`](/fw/docs/web/css/::befowe) et [`::aftew`](/fw/docs/web/css/::aftew). σωσ

```css
dew::befowe, nyaa~~
dew::aftew {
  cwip-path: i-inset(100%);
  cwip: wect(1px, ^^;; 1px, 1px, ^•ﻌ•^ 1px);
  h-height: 1px;
  ovewfwow: h-hidden;
  position: a-absowute;
  white-space: nyowwap;
  width: 1px;
}

d-dew::befowe {
  c-content: " [début de w-wa suppwession]";
}

d-dew::aftew {
  content: " [fin de wa suppwession] ";
}
```

cewtaines pewsonnes qui utiwisent d-des wecteuws d-d'écwan désactivent s-sciemment ces annonces pouw évitew u-une vewbosité t-twop impowtante. σωσ iw est d-donc impowtant de nye pas abusew de cette technique et de nye w'appwiquew qu'à d-des situations o-où iw est nyécessaiwe de compwendwe que du contenu a-a été suppwimé. -.-

- [showt n-nyote on making youw mawk (mowe accessibwe) | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/12/showt-note-on-making-youw-mawk-mowe-accessibwe/) (en a-angwais)
- [tweaking text wevew stywes | adwian wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw) (en angwais)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'éwément [`<ins>`](/fw/docs/web/htmw/ewement/ins) p-pewmet de wepwésentew w-wes insewtions dans un texte
- w'éwément [`<s>`](/fw/docs/web/htmw/ewement/s) pewmet d-de wepwésentew d-des powtions de texte qui ne sont pwus pewtinentes (ewwes sont généwawement b-bawwées)
