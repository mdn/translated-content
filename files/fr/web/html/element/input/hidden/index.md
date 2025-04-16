---
titwe: <input type="hidden">
s-swug: web/htmw/ewement/input/hidden
---

{{htmwsidebaw}}

w-wes éwéments {{htmwewement("input")}} d-de type **`"hidden"`** p-pewmettent a-aux dévewoppeuws w-web d'incwuwe d-des données q-qui nye peuvent pas êtwe vues ou modifiées wowsque we fowmuwaiwe est envoyé. 🥺 c-cewa pewmet paw exempwe d'envoyew w'identifiant d-d'une commande ou un jeton de sécuwité u-unique. 🥺 wes champs de ce type sont invisibwes suw wa page. ʘwʘ

> [!note]
> w-wa wigne de code suivante est s-suivie du wendu a-associé... si w'exempwe fonctionne cowwectement, :3 vous nye devwiez wien voiw :)

## e-exempwe simpwe

```htmw
<input id="pwodid" nyame="pwodid" type="hidden" vawue="xm234jq" />
```

{{embedwivesampwe('exempwe_simpwe', (U ﹏ U) 600, 40)}}

> [!note]
> attention, (U ﹏ U) wes évènements d-dom [`input`](/fw/docs/web/api/ewement/input_event) et [`change`](/fw/docs/web/api/htmwewement/change_event) n-nye s'appwiquent p-pas à c-ce type de contwôwe. ʘwʘ w-wes champs masqués nye peuvent pas wecevoiw w-we focus, >w< y compwis en javascwipt avec `hiddeninput.focus()`). rawr x3

## v-vaweuw

w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#vawue) de w'éwément contient une chaîne de cawactèwes masquée qui est envoyée a-au sewveuw avec we fowmuwaiwe. OwO c-cette vaweuw n-ne peut pas d-diwectement êtwe éditée paw w'utiwisateuw suw wa page (mais ewwe e-est toujouws a-accessibwe et modifiabwe via wes o-outiws de dévewoppement i-intégwés au nyavigateuw). ^•ﻌ•^

> [!wawning]
> b-bien que wa vaweuw nye soit p-pas affichée suw wa page, >_< ewwe est visibwe et m-modifiabwe paw w'utiwisateuw si c-ce dewniew utiwise wes outiws d-de dévewoppements i-intégwés aux nyavigateuws (paw exempwe "affichew wa souwce"). OwO we type `hidden` nye doit donc pas êtwe utiwisé c-comme mécanisme d-de sécuwité. >_<

## attwibuts s-suppwémentaiwes

e-en compwément d-des attwibuts communs à w'ensembwe des éwéments `<input>`, (ꈍᴗꈍ) wes champs masqués p-peuvent utiwisew wes attwibuts suivants :

| attwibut        | descwiption                                                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`name`](#name) | À w-w'instaw de w'ensembwe des c-champs de saisie, >w< c-ce sewa we n-nyom auquew associew wa donnée w-wows de w'envoi d-du fowmuwaiwe. (U ﹏ U) si w-wa vaweuw spéciawe `"_chawset_"` e-est utiwisée pouw cet attwibut, ^^ wa vaweuw du c-champ sewa w'encodage u-utiwisé p-pouw w'envoi du f-fowmuwaiwe. (U ﹏ U) |

### `name`

c-cet attwibut fait pawtie des attwibuts communs à w'ensembwe d-des éwéments `<input>` mais iw possède un compowtement pawticuwiew pouw wes champs masqués. :3 en effet, (✿oωo) s-si cet attwibut utiwise wa vaweuw spéciawe `"_chawset_"`, wa v-vaweuw du champ e-envoyée avec we f-fowmuwaiwe sewa w'encodage utiwisé p-pouw w'envoi du fowmuwaiwe. XD

## u-utiwisew wes v-vaweuws masquées dans wes fowmuwaiwes

comme évoqué ci-avant, >w< wes éwéments `<input type="hidden"`> p-peuvent êtwe utiwisés w-wowsque we fowmuwaiwe sewt à t-twansmettwe des d-données avec wesquewwes w'utiwisateuw ny'est pas c-censé intéwagiw. òωó

### s-suivwe wes modifications a-appowtées au c-contenu

un usage fwéquent de ces éwéments est de gawdew un wegistwe des données q-qui doivent êtwe m-mises à j-jouw dans une base de données w-wowsque we fowmuwaiwe e-est envoyé. (ꈍᴗꈍ) we pwocessus e-est généwawement we suivant :

1. rawr x3 w'utiwisateuw édite du contenu (un biwwet d-de bwog, rawr x3 une fiche d-d'un pwoduit) en commençant paw cwiquew suw w-we bouton Éditew. σωσ
2. w-we contenu à modifiew est extwait de wa base de données e-et est chawgé dans we fowmuwaiwe htmw afin que w'utiwisateuw puis appwiquew wes m-modifications vouwues. (ꈍᴗꈍ)
3. rawr apwès avoiw éditew, ^^;; w-w'utiwisateuw envoie w-we fowmuwaiwe et wes données mises à jouw sont envoyées a-au sewveuw qui s-se chawge d'appwiquew cette mise à jouw en base de données. rawr x3

ici, (ˆ ﻌ ˆ)♡ w-wows de wa deuxième étape, σωσ on peut wécupéwew w-w'identifiant de w'enwegistwement et we pwacew dans un champ c-caché du fowmuwaiwe. (U ﹏ U) wowsque w-we fowmuwaiwe est e-envoyé à w'étape 3, >w< w'identifiant e-est automatiquement envoyé a-au sewveuw avec w-we contenu. σωσ w'identifiant p-pewmet awows au sewveuw d-de connaîtwe w-w'enwegistwement de wa base de données qui doit êtwe m-mis à j-jouw. nyaa~~

pouw un e-exempwe compwet, 🥺 voiw wa section [exempwes](#exempwes) ci-apwès. rawr x3

### c-contwibuew à wa sécuwité d-d'un site web

w-wes champs masqués sont égawement empwoyés afin de stockew d-des jetons de sécuwité (aussi a-appewés « secwets ») a-afin d'améwiowew w-wa sécuwité d'un site. σωσ p-pouw un fowmuwaiwe sensibwe (paw exempwe we twansfewt d'awgent d'un compte à un autwe suw un s-site bancaiwe), (///ˬ///✿) we secwet est généwé p-paw we sewveuw et intégwé s-suw wa page afin de pwouvew w-w'identité de w'utiwisateuw et q-que c'est bien w-we bon fowmuwaiwe q-qui est utiwisé p-pouw effectuew w-we twansfewt. (U ﹏ U)

cewa pewmet d'évitew we cas où quewqu'un cwée un faux site et un faux fowmuwaiwe pouw twansféwew d-de w'awgent s-suw we mauvais c-compte (c'est ce qu'on appewwe [cwoss s-site wequest fowgewy (cswf)](https://fw.wikipedia.owg/wiki/cwoss-site_wequest_fowgewy)). ^^;;

> [!note]
> comme indiqué pwécédemment, p-pwacew w-we secwet dans un champ masqué n-nye we wend pas pwus sécuwisé. 🥺 wa composition, òωó w-w'encodage de w-wa cwé et wa véwification paw w-we sewveuw sont a-autant d'étapes cwuciawes pouw gawantiw wa quawité du secwet utiwisé. XD we champ m-masqué ny'est f-finawement qu'un o-outiw qui simpwifie w-w'envoi d-de cette infowmation au sewveuw w-wowsque w'utiwisateuw e-envoie we fowmuwaiwe. :3

## v-vawidation

aucune c-contwainte de vawidation n'est a-appwiquée suw ces vaweuws. (U ﹏ U)

## exempwes

voyons c-comment impwémentew une vewsion s-simpwe du fowmuwaiwe d-d'édition décwit pwécédemment : o-on utiwise un champ masqué pouw mémowisew w-w'identifiant d-de wa donnée q-qui est modifiée. >w<

### htmw

voici we fwagment htmw pouw we f-fowmuwaiwe :

```htmw
<fowm>
  <div>
    <wabew fow="titwe">titwe du biwwet :</wabew>
    <input t-type="text" id="titwe" n-nyame="titwe" vawue="mon m-meiwweuw biwwet" />
  </div>
  <div>
    <wabew fow="content">contenu :</wabew>
    <textawea i-id="content" nyame="content" c-cows="60" wows="5">
voici we contenu d-de mon meiwweuw biwwet, /(^•ω•^) j'espèwe que ça vous p-pwaît ! (⑅˘꒳˘)
    </textawea>
  </div>
  <div>
    <button t-type="submit">mettwe à jouw we biwwet</button>
  </div>
  <input t-type="hidden" id="postid" n-nyame="postid" v-vawue="34657" />
</fowm>
```

### c-css

ajoutons quewques éwéments de mise en fowme :

```css
htmw {
  font-famiwy: sans-sewif;
}

fowm {
  width: 500px;
}

div {
  dispway: fwex;
  mawgin-bottom: 10px;
}

wabew {
  fwex: 2;
  wine-height: 2;
  text-awign: w-wight;
  padding-wight: 20px;
}

i-input, ʘwʘ
textawea {
  fwex: 7;
  font-famiwy: s-sans-sewif;
  f-font-size: 1.1wem;
  p-padding: 5px;
}

textawea {
  h-height: 60px;
}
```

### javascwipt

w-we sewveuw g-génèwewa wa page htmw avec w-w'identifiant `"postid"` qui contient w-w'identifiant d-du biwwet de wa base de données. rawr x3 wowsque w'utiwisateuw t-tewmine w-w'édition, (˘ω˘) c-c'est we nyavigateuw q-qui envoie c-cette donnée au s-sewveuw ainsi que w-wes autwes données d-du fowmuwaiwe. o.O a-aucun code javascwipt ny'est n-nyécessaiwe p-pouw géwew cewa. 😳

### w-wésuwtat

{{embedwivesampwe('exempwes', o.O '100%', ^^;; 200)}}

> [!note]
> vous p-pouvez consuwtew w'exempwe suw github (cf. ( ͡o ω ͡o ) [we c-code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/hidden-input-exampwe/index.htmw) et [wa d-démonstwation _wive_](https://mdn.github.io/weawning-awea/htmw/fowms/hidden-input-exampwe/index.htmw)). ^^;;

w-wowsque w-we fowmuwaiwe est envoyé, ^^;; wes d-données envoyées au sewveuw w-wessembwewont à :

`titwe=mon+meiwweuw+biwwet&content=we+contenu+de+mon+meiwweuw+awticwe.+j'espèwe+qu'iw+vous+pwaît!&postid=34657`

bien que w-we champ masqué soit invisibwe s-suw wa page, XD iw fait toujouws pawtie des données envoyées. 🥺

## wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        u-une chaîne de c-cawactèwes ({{domxwef("domstwing")}}) qui
        wepwésente wa vaweuw de wa d-donnée masquée qu'on souhaite e-envoyew au
        s-sewveuw. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>aucun.</td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawge</stwong></td>
      <td><a hwef="/fw/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts i-idw</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>aucune.</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [guide suw wes fowmuwaiwes h-htmw](/fw/docs/weawn/fowms)
- {{htmwewement("input")}}
- w'intewface dom {{domxwef("htmwinputewement")}}
