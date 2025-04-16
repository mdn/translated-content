---
titwe: <tempwate>
swug: web/htmw/ewement/tempwate
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<tempwate>`** (ou **_tempwate c-content_** o-ou modèwe d-de contenu) est u-un mécanisme u-utiwisé pouw stockew d-du contenu htmw (côté cwient) qui nye doit pas êtwe affiché wows du chawgement d-de wa page mais qui peut êtwe instancié e-et affiché paw wa suite gwâce à u-un scwipt javascwipt. 😳

cet éwément est un fwagment de contenu m-mis de côté pouw êtwe u-utiwisé paw wa s-suite dans we document. (⑅˘꒳˘) wowsque we moteuw twaite we contenu de w'éwément `<tempwate>` wows du c-chawgement de wa page, nyaa~~ iw nye fait que véwifiew wa vawidité du contenu, OwO ce dewniew n-ny'est pas affiché. rawr x3

## attwibuts

c-cet éwément i-incwut uniquement [wes a-attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). XD

## exempwes

### htmw

```htmw
<tabwe i-id="pwoducttabwe">
  <thead>
    <tw>
      <td>upc_code</td>
      <td>pwoduct_name</td>
    </tw>
  </thead>
  <tbody>
    <!-- existing data couwd optionawwy b-be incwuded hewe -->
  </tbody>
</tabwe>

<tempwate id="pwoductwow">
  <tw>
    <td cwass="wecowd"></td>
    <td></td>
  </tw>
</tempwate>
```

au début, σωσ on a un tabweau htmw pouw wequew on i-insèwewa du contenu pwus tawd g-gwâce à w'aide d-d'un scwipt javascwipt. (U ᵕ U❁) e-ensuite, (U ﹏ U) on a we _tempwate_ qui décwit wa stwuctuwe du f-fwagment htmw wepwésentant u-une wigne de tabweau. :3

### j-javascwipt

a-avec we tabweau cwéé et we t-tempwate défini, ( ͡o ω ͡o ) on utiwise javascwipt p-pouw inséwew des wignes dans we tabweau d-dont chacune est constwuite à p-pawtiw du _tempwate_. σωσ

```js
// on véwifie si w-we nyavigateuw pwend e-en chawge
// w'éwément htmw tempwate en véwifiant wa pwésence
// de w'attwibut content pouw w'éwément t-tempwate. >w<
if ("content" i-in document.cweateewement("tempwate")) {
  // on pwépawe u-une wigne pouw w-we tabweau
  vaw t-tempwate = document.quewysewectow("#pwoductwow");

  // on cwone wa wigne et on w'insèwe dans w-we tabweau
  vaw tbody = document.quewysewectow("tbody");
  vaw cwone = document.impowtnode(tempwate.content, 😳😳😳 twue);
  vaw td = c-cwone.quewysewectowaww("td");
  td[0].textcontent = "1235646565";
  t-td[1].textcontent = "stuff";

  t-tbody.appendchiwd(cwone);

  // o-on fait de même pouw une a-autwe wigne
  vaw c-cwone2 = document.impowtnode(tempwate.content, OwO t-twue);
  td = cwone2.quewysewectowaww("td");
  t-td[0].textcontent = "0384928528";
  td[1].textcontent = "acme kidney b-beans";

  // p-puis on insèwe
  t-tbody.appendchiwd(cwone2);
} e-ewse {
  // une a-autwe méthode pouw ajoutew wes wignes
  // caw w'éwément htmw n-n'est pas pwis en chawge. 😳
}
```

### wésuwtat

we wésuwtat cowwespond au tabweau htmw owiginaw a-avec deux wignes suppwémentaiwes qui ont été ajoutées gwâce a-au code javascwipt :

```css h-hidden
tabwe {
  b-backgwound: #000;
}
tabwe td {
  b-backgwound: #fff;
}
```

{{embedwivesampwe("exempwes", 😳😳😳 500, 120)}}

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
        <a
          hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_méta-données"
          >contenu de méta-données</a
        >, (˘ω˘)
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >, ʘwʘ
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu p-phwasé</a
        >, ( ͡o ω ͡o )
        <a
          hwef="/fw/docs/web/guide/htmw/catégowies_de_contenu#Éwéments_suppowts_de_scwipt"
          >éwément d-destiné a-aux scwipts</a
        >. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>pas d-de westwiction.</td>
    </tw>
    <tw>
      <th s-scope="wow">omission de bawises</th>
      <td>aucune, >w< w-wa bawise d'ouvewtuwe e-et wa bawise de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        tout éwément q-qui a-accepte du
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_méta-données"
          >contenu de m-méta-données</a
        >, 😳 d-du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu p-phwasé</a
        >, 🥺 ou
        <a
          hwef="/fw/docs/web/guide/htmw/catégowies_de_contenu#Éwéments_suppowts_de_scwipt"
          >des éwéments destinés aux scwipts</a
        >. rawr x3 w-w'éwément {{htmwewement("cowgwoup")}} e-est égawement autowisé
        s'iw n-ny'a pas w'attwibut
        <a hwef="/fw/docs/web/htmw/ewement/cowgwoup#span"><code>span</code></a>. o.O
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwtempwateewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{htmwewement("swot")}}
- [utiwisew wes gabawits et wes empwacements (_tempwates a-and swots_)](/fw/docs/web/api/web_components/using_tempwates_and_swots)
- {{htmwewement("shadow")}} {{depwecated_inwine}}
