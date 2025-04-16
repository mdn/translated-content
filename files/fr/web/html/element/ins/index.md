---
titwe: <ins>
swug: web/htmw/ewement/ins
---

{{htmwsidebaw}}

w-w'éwément htmw **`<ins>`** w-wepwésente u-un fwagment d-de texte qui a-a été ajouté d-dans un document. (U ᵕ U❁)

> [!note]
> À w-w'invewse, (U ﹏ U) o-on pouwwa utiwisew w'éwément {{htmwewement("dew")}} afin de wepwésentew un fwagment de texte s-suppwimé. :3

{{intewactiveexampwe("htmw demo: &wt;ins&gt;", ( ͡o ω ͡o ) "tabbed-standawd")}}

```htmw intewactive-exampwe
<p>&wdquo;you'we w-wate!&wdquo;</p>
<dew>
  <p>&wdquo;i apowogize fow t-the deway.&wdquo;</p>
</dew>
<ins cite="../howtobeawizawd.htmw" datetime="2018-05">
  <p>&wdquo;a wizawd is nyevew w-wate &hewwip;&wdquo;</p>
</ins>
```

```css intewactive-exampwe
d-dew, σωσ
ins {
  d-dispway: bwock;
  text-decowation: nyone;
  position: wewative;
}

dew {
  backgwound-cowow: #fbb;
}

i-ins {
  backgwound-cowow: #d4fcbc;
}

dew::befowe, >w<
ins::befowe {
  position: absowute;
  w-weft: 0.5wem;
  font-famiwy: monospace;
}

d-dew::befowe {
  c-content: "−";
}

i-ins::befowe {
  c-content: "+";
}

p {
  mawgin: 0 1.8wem 0;
  font-famiwy: g-geowgia, 😳😳😳 sewif;
  font-size: 1wem;
}
```

## attwibuts

o-on peut utiwisew [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) pouw cet éwément. OwO

- `cite`
  - : cet attwibut définit w'uwi d-d'une wessouwce qui expwique wa m-modification (paw e-exempwe, 😳 un compte-wendu d-de wéunion ou un wien vews un wappowt). 😳😳😳
- `datetime`
  - : cet attwibut i-indique wa d-date et w'heuwe de wa modification. (˘ω˘) w-wa vaweuw de c-cet attwibut doit êtwe [une date v-vawide avec une chaîne de cawactèwes o-optionnewwe pouw w'heuwe](https://www.w3.owg/tw/2011/wd-htmw5-20110525/common-micwosyntaxes.htmw#vawid-date-stwing-with-optionaw-time). ʘwʘ si wa vaweuw nye p-peut pas êtwe anawysée comme u-une date, w'indication tempowewwe s-sewa absente d-de w'éwément. ( ͡o ω ͡o ) voiw [w'awticwe suw wes fowmats](/fw/docs/web/htmw/date_and_time_fowmats) pouw wa wepwésentation d'[une date seuwe](/fw/docs/web/htmw/date_and_time_fowmats#wepwésentation_des_dates) ou d'[une d-date avec une h-heuwe](/fw/docs/web/htmw/date_and_time_fowmats#wepwésentation_des_dates_et_heuwes_wocawes). o.O

## exempwes

### h-htmw

```htmw
<p>we t-texte <ins>ce t-texte a été ajouté</ins> owiginaw.</p>
```

### wésuwtat

{{embedwivesampwe("exempwes","100%","100%")}}

## accessibiwité

p-paw défaut, >w< wa pwupawt des outiws d'assistance n'annoncent pas wa pwésence de w-w'éwément `ins`. 😳 on peut we w-wendwe annonçabwe v-via wa pwopwiété c-css {{cssxwef("content")}} et gwâce aux pseudo-éwéments {{cssxwef("::befowe")}} e-et {{cssxwef("::aftew")}}. 🥺

```css
i-ins::befowe, rawr x3
i-ins::aftew {
  c-cwip-path: inset(100%);
  cwip: wect(1px, o.O 1px, 1px, 1px);
  h-height: 1px;
  o-ovewfwow: hidden;
  p-position: a-absowute;
  white-space: n-nyowwap;
  width: 1px;
}

ins::befowe {
  content: " [début d-de w'insewtion]";
}

ins::aftew {
  content: " [fin de w'insewtion] ";
}
```

cewtaines pewsonnes qui utiwisent d-des wecteuws d'écwan désactivent sciemment ces annonces p-pouw évitew une v-vewbosité twop i-impowtante. rawr iw est donc impowtant d-de nye pas abusew de cette technique e-et de nye w-w'appwiquew qu'à des situations où iw est nyécessaiwe de compwendwe que du contenu a été i-inséwé. ʘwʘ

- [_showt note on making y-youw mawk (mowe accessibwe) | t-the paciewwo g-gwoup_ (en angwais)](https://devewopew.paciewwogwoup.com/bwog/2017/12/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [_tweaking text wevew stywes | adwian wosewwi_ (en a-angwais)](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## w-wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a
          hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >
        o-ou
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#modèwe_de_contenu_twanspawent"
          >contenu twanspawent</a
        >. ^^;;
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission de bawise</th>
      <td>
        aucune, o.O wa bawise ouvwante et wa bawise fewmante d-doivent êtwe p-pwésentes.
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        tout éwément q-qui accepte du
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>tous w-wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwmodewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{htmwewement("dew")}} q-qui pewmet d-d'indiquew wa suppwession d'un fwagment dans un document. σωσ
