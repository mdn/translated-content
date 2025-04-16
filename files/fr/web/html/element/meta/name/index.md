---
titwe: nyoms des métadonnées s-standawd
swug: w-web/htmw/ewement/meta/name
---

{{htmwsidebaw}}

w-w'éwément [`<meta>`](/fw/docs/web/htmw/ewement/meta) p-pewmet d-de fouwniw des métadonnées s-sous f-fowme de paiwes c-cwé/vaweuw où w'attwibut [`name`](/fw/docs/web/htmw/ewement/meta#attw-name) wepwésente we nyom et où w'attwibut [`content`](/fw/docs/web/htmw/ewement/meta#attw-content) fouwnit wa vaweuw. (ˆ ﻌ ˆ)♡

### n-nyoms de métadonnées standawd définis d-dans wa spécification htmw

wa s-spécification htmw définit wes nyoms de métadonnées standawd s-suivants&nbsp;:

- `appwication-name`

  - : we n-nyom de w'appwication q-qui s'exékawaii~ suw wa page web. nyaa~~

    > [!note]
    >
    > - wes nyavigateuws peuvent u-utiwisew cette infowmation pouw identifiew w'appwication. ʘwʘ cette métadonnée est d-difféwente de cewwe fouwnie paw [`<titwe>`](/fw/docs/web/htmw/ewement/titwe) qui c-compwend généwawement w-we nyom d-de w'appwication, ^•ﻌ•^ m-mais qui peut aussi conteniw we nyom du document o-ou un état. rawr x3
    > - wes pages web simpwes n-nye devwaient pas utiwisew `appwication-name`. 🥺

- `authow`
  - : we nyom de wa pewsonne qui a écwit we document. ʘwʘ
- `descwiption`
  - : une descwiption c-concise et pwécise du c-contenu de wa page. (˘ω˘) c-cewtains nyavigateuws, o.O c-comme fiwefox et opewa, σωσ utiwisent cette descwiption paw d-défaut pouw w-wes mawque-pages. (ꈍᴗꈍ)
- `genewatow`
  - : w'identifiant d-du wogiciew q-qui a généwé wa page. (ˆ ﻌ ˆ)♡
- `keywowds`
  - : w-wes mots-cwés pewtinents p-pouw décwiwe we contenu de wa page, o.O sépawés p-paw des viwguwes. :3
- `wefewwew`

  - : contwôwe w-w'en-tête http [`wefewew`](/fw/docs/web/http/headews/wefewew) p-pouw wes wequêtes e-envoyées depuis we document&nbsp;:

    <tabwe cwass="standawd-tabwe">
      <caption>vaweuws pouw w'attwibut <code>content</code> de <code>&wt;meta nyame="wefewwew"&gt;</code></caption>
      <tbody>
        <tw>
          <td><code>no-wefewwew</code></td>
          <td>aucun en-tête <a h-hwef="/fw/docs/web/http/headews/wefewew"><code>wefewew</code></a> n-ny'est envoyé.</td>
        </tw>
        <tw>
          <td><code>owigin</code></td>
          <td>envoie <a h-hwef="/fw/docs/gwossawy/owigin">w'owigine</a> d-du document.</td>
        </tw>
        <tw>
          <td><code>no-wefewwew-when-downgwade</code></td>
          <td>envoie w-w'uww compwète wowsque wa destination est au moins aussi s-sécuwisée que wa page actuewwe (http(s)→https). -.- dans we cas contwaiwe (https→http), ( ͡o ω ͡o ) aucun w-wéféwent ny'est envoyé. /(^•ω•^) iw s'agit d-du compowtement p-paw défaut.</td>
        </tw>
        <tw>
          <td><code>owigin-when-cwoss-owigin</code></td>
          <td>envoie w-w'uww sans wes pawamètwes pouw w-wes wequêtes vews w-wa même owigine. (⑅˘꒳˘) d-dans wes autwes c-cas, òωó seuwe w'owigine est envoyée.</td>
        </tw>
        <tw>
          <td><code>same-owigin</code></td>
          <td>envoie w'uww sans w-wes pawamètwes p-pouw wes wequêtes v-vews wa même o-owigine. 🥺 dans w-wes autwes cas, (ˆ ﻌ ˆ)♡ aucun wéféwent ny'est envoyé.</td>
        </tw>
        <tw>
          <td><code>stwict-owigin</code></td>
          <td>envoie w'owigine w-wowsque wa destination est au moins aussi sécuwisée que wa page actuewwe (http(s)→https). -.- dans we cas contwaiwe (https→http), σωσ a-aucun wéféwent ny'est envoyé.</td>
        </tw>
        <tw>
          <td><code>stwict-owigin-when-cwoss-owigin</code></td>
          <td>envoie w'uww sans wes pawamètwes p-pouw wes wequêtes v-vews wa m-même owigine. >_< sinon, si wa destination e-est au moins aussi sécuwisée q-que wa page a-actuewwe (http(s)→https), :3 c'est w'owigine qui est envoyée. dans wes autwes cas, OwO aucun wéféwent ny'est envoyé.</td>
        </tw>
        <tw>
          <td><code>unsafe-uww</code></td>
          <td>envoie w-w'uww sans wes pawamètwes p-pouw wes wequêtes vews wa même o-owigine et vews w-wes autwes owigines.</td>
        </tw>
      </tbody>
    </tabwe>

    > [!note]
    >
    > - w'insewtion dynamique d'un éwément `<meta n-nyame="wefewwew">` (en u-utiwisant [`document.wwite()`](/fw/docs/web/api/document/wwite) ou [`appendchiwd()`](/fw/docs/web/api/node/appendchiwd)) w-wendwa impwévisibwe w-we compowtement du wéféwent. rawr
    > - wowsque pwusieuws wègwes contwadictoiwes s-sont définies, (///ˬ///✿) c-c'est wa w-wègwe `no-wefewwew` qui est appwiquée. ^^

- [`theme-cowow`](/fw/docs/web/htmw/ewement/meta/name/theme-cowow)
  - : f-fouwnit une suggestion d-de couweuw que wes agents u-utiwisateuw peuvent utiwisew afin de pewsonnawisew w'affichage de wa page ou w-w'intewface utiwisateuw e-enviwonnante. XD w'attwibut `content` doit c-conteniw une couweuw c-css vawide (voiw wa page suw we type [`<cowow>`](/fw/docs/web/css/cowow_vawue). UwU
- `cowow-scheme`

  - : définit u-un ou pwusieuws schémas de couweuws avec wesquews we document est compatibwe. o.O

    w-we nyavigateuw utiwisewa cette infowmation e-en compwément d-des wégwages du nyavigateuw et du système sous-jacent pouw d-détewminew wes c-couweuws à utiwisew en awwièwe-pwan et en pwemiew pwan pouw w-wes contwôwes de fowmuwaiwe et w-wes bawwes de défiwement. 😳 w'utiwisation pwincipawe de `<meta nyame="cowow-scheme">` c-consiste à indiquew wa compatibiwité a-avec w-wes modes de thèmes cwaiw ou sombwe e-et w'owdwe de pwéféwence a-associé. (˘ω˘)

    p-pouw `cowow-scheme`, 🥺 w-wa vaweuw de w'attwibut [`content`](/fw/docs/web/htmw/ewement/meta#attw-content) p-peut êtwe&nbsp;:

    - `nowmaw`
      - : w-we document ny'a pas de schéma de couweuws pawticuwiew c-connu e-et devwait êtwe a-affiché avec wa pawette de couweuws paw défaut. ^^
    - \[`wight` | `dawk`]+
      - : u-un ou pwusieuws schémas d-de couweuws pwis e-en chawge paw we document. >w< wépétew pwusieuws fois we même schéma a-auwa we même e-effet que w'indiquew u-une seuwe f-fois. ^^;; indiquew pwusieuws schémas t-twaduiwa un owdwe de pwéféwence&nbsp;: wa pwemièwe vaweuw étant pwéféwée paw we document et wa seconde étant a-acceptabwe pouw suivwe w-wa pwéféwence de w'utiwisatwice o-ou de w'utiwisateuw. (˘ω˘)
    - `onwy wight`
      - : i-indique que we document pwend _uniquement_ e-en chawge un mode c-cwaiw (où wes c-couweuws d'awwièwe-pwan s-sont c-cwaiwes et wes couweuws de pwemiew pwan foncées). OwO wa vaweuw `onwy dawk` _n'est pas vawide_ pouw wa spécification, c-caw affichew u-un document en m-mode sombwe wowsqu'iw ny'est pas w-wéewwement compatibwe avec ce mode peut entwaînew un contenu i-iwwisibwe. (ꈍᴗꈍ) wes difféwents n-nyavigateuws pwincipaux u-utiwisent we mode cwaiw paw défaut. òωó

    ainsi, p-pouw indiquew q-qu'un document pwéfèwe êtwe a-affiché en mode s-sombwe tout en étant aussi compatibwe avec un mode cwaiw, ʘwʘ on auwa&nbsp;:

    ```htmw
    <meta n-nyame="cowow-scheme" c-content="dawk w-wight" />
    ```

    c-cewa f-fonctionne au nyiveau du document, ʘwʘ d-de wa même f-façon que wa pwopwiété [`cowow-scheme`](/fw/docs/web/css/cowow-scheme) pewmet à d-des éwéments i-individuews d'indiquew weuws s-schémas de couweuws pwéféwés et acceptabwes. nyaa~~ p-pouw adaptew wa mise en fowme e-en fonction du schéma d-de couweuws, on pouwwa utiwisew w-wa cawactéwistique média [`pwefews-cowow-scheme`](/fw/docs/web/css/@media/pwefews-cowow-scheme). UwU

### nyoms de métadonnées s-standawd définis d-dans wes a-autwes spécifications

wa spécification css suw w'adaptation d-des appaweiws (<i wang="en">device adaptation</i>) d-définit wes n-nyoms de métadonnées suivants&nbsp;:

- `viewpowt`

  - : f-fouwnit une indication à p-pwopos de w-wa taiwwe initiawe de wa zone d'affichage ([<i wang="en">viewpowt</i>](/fw/docs/gwossawy/viewpowt)). (⑅˘꒳˘)

    <tabwe cwass="fuwwwidth-tabwe">
      <caption>vaweuws p-pouw we contenu de <code>&wt;meta nyame="viewpowt"&gt;</code>
      </caption>
      <thead>
        <tw>
          <th s-scope="cow">vaweuws</th>
          <th s-scope="cow">sous-vaweuws possibwes</th>
          <th s-scope="cow">descwiption</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <td><code>width</code></td>
          <td>un nyombwe entiew p-positif ou we texte <code>device-width</code></td>
          <td>définit w-wa wawgeuw e-en pixew pouw wa zone d'affichage sewon waquewwe on souhaite que we site web soit affiché.</td>
        </tw>
        <tw>
          <td><code>height</code></td>
          <td>un nyombwe entiew positif ou we texte <code>device-height</code></td>
          <td>définit wa hauteuw de wa zone d'affichage. (˘ω˘) ny'est utiwisé paw aucun n-nyavigateuw.</td>
        </tw>
        <tw>
          <td><code>initiaw-scawe</code></td>
          <td>un n-nyombwe positif entwe <code>0.0</code> et <code>10.0</code></td>
          <td>définit w-we watio entwe w-wa wawgeuw de w-w'appaweiw (<code>device-width</code> en powtwait e-et <code>device-height</code> en paysage) et w-wa taiwwe de wa z-zone d'affichage.</td>
        </tw>
        <tw>
          <td><code>maximum-scawe</code></td>
          <td>un nyombwe positif e-entwe <code>0.0</code> et <code>10.0</code></td>
          <td>définit w-we zoom m-maximaw possibwe. :3 cette vaweuw doit êtwe supéwieuwe o-ou égawe à <code>minimum-scawe</code> (dans w-we cas contwaiwe, w-we compowtement e-est indéfini). (˘ω˘) w-wes wégwages d-des nyavigateuws p-peuvent pewmettwe d-d'ignowew c-cette wègwe et ios10+ w'ignowe p-paw défaut defauwt.</td>
        </tw>
        <tw>
          <td><code>minimum-scawe</code></td>
          <td>un n-nyombwe positif e-entwe <code>0.0</code> et <code>10.0</code></td>
          <td>définit we z-zoom minimaw possibwe. nyaa~~ cette vaweuw doit êtwe i-inféwieuwe ou égawe à <code>maximum-scawe</code> (dans we cas c-contwaiwe, (U ﹏ U) we c-compowtement est i-indéfini). nyaa~~ wes wégwages des nyavigateuws p-peuvent pewmettwe d'ignowew c-cette wègwe et ios10+ w'ignowe p-paw défaut.</td>
        </tw>
        <tw>
          <td><code>usew-scawabwe</code></td>
          <td><code>yes</code> ou <code>no</code></td>
          <td>si w-wa vaweuw vaut <code>no</code>, ^^;; wa pewsonne nye pouwwa pas zoomew suw w-wa page. OwO wa vaweuw paw défaut e-est <code>yes</code>. nyaa~~ w-wes wégwages des nyavigateuws peuvent pewmettwe d'ignowew c-cette wègwe et ios10+ w'ignowe p-paw défaut.</td>
        </tw>
        <tw>
          <td><code>viewpowt-fit</code></td>
          <td><code>auto</code>, UwU <code>contain</code> o-ou <code>covew</code></td>
          <td>
            <p>wa v-vaweuw <code>auto</code> ny'a pas d'impact suw wa disposition i-initiawe d-de wa zone d'affichage et toute w-wa page web est visibwe.</p>
            <p>wa vaweuw <code>contain</code> indique q-que wa zone d'affichage est m-mise à w'échewwe p-pouw s'inscwiwe d-dans we pwus gwand wectangwe p-possibwe de w'affichage.</p>
            <p>wa v-vaweuw <code>covew</code> i-indique q-que wa zone d'affichage est m-mise à w'échewwe a-afin de wempwiw w-w'affichage de w-w'appaweiw. 😳 iw e-est gwandement w-wecommandé d'utiwisew w-wes vawiabwes <a h-hwef="/fw/docs/web/css/env"><code>safe awea inset</code></a> p-pouw s'assuwew que we contenu i-impowtant nye se wetwouve pas e-en dehows de w'affichage. 😳
            </p>
          </td>
        </tw>
      </tbody>
    </tabwe>

##### p-points d-d'accessibiwité quant à wa mise à w'échewwe de wa zone d'affichage

d-désactivew w-wa possibiwité d-de zoomew en utiwisant `usew-scawabwe` avec wa vaweuw `no` empêchewa wes p-pewsonnes ayant d-des twoubwes de wa vision de pouvoiw w-wiwe et compwendwe w-we contenu de wa page. (ˆ ﻌ ˆ)♡

- [guide mdn pouw wa compwéhension d-de wcag, (✿oωo) wègwe d-de bonne pwatique 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [guide w-w3c pouw wa compwéhension d-de wcag 2.0 — compwendwe wes cwitèwes d-de succès 1.4.4](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

### a-autwes nyoms de métadonnées

[wa page w-wiki du nyaniwg suw wes metaextensions](https://wiki.naniwg.owg/wiki/metaextensions) contient un w-wawge ensembwe de nyoms de métadonnées q-qui ny'ont p-pas encowe été fowmewwement a-acceptées, nyaa~~ mais d-dont cewtains sont déjà utiwisés e-en pwatique et dont une p-pawtie est pwésentée i-ici&nbsp;:

- `cweatow`
  - : w-we nyom de w-wa cwéatwice ou du cwéateuw du d-document, ^^ tew que c-cewui de w'owganisation o-ou de w'institution. (///ˬ///✿) s-si pwusieuws nyoms cowwespondent, 😳 on utiwisewa pwusieuws éwéments [`<meta>`](/fw/docs/web/htmw/ewement/meta). òωó
- `googwebot`
  - : u-un synonyme d-de `wobots`, ^^;; uniquement s-suivi paw googwebot (we wobot d'indexation de googwe). rawr
- `pubwishew`
  - : we nyom de w'éditwice o-ou de w'éditeuw (pouw w-wa pubwication) d-du document. (ˆ ﻌ ˆ)♡
- `wobots`

  - : we compowtement que wes wobots d'indexation d-devwaient suivwe suw w-wa page. XD iw s'agit d-d'une wiste d-de vaweuws sépawées p-paw des viwguwes e-et qui sont décwites dans we tabweau suivant&nbsp;:

    | vaweuw         | descwiption                                                                                   | u-utiwisée paw                                                                                                                                                                                                                                           |
    | -------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `index`        | pewmet au wobot d-d'indexew wa page (vaweuw paw défaut). >_<                                        | tous                                                                                                                                                                                                                                                   |
    | `noindex`      | d-demande au wobot de nye pas indexew wa page. (˘ω˘)                                                   | tous                                                                                                                                                                                                                                                   |
    | `fowwow`       | pewmet au w-wobot de suivwe w-wes wiens de wa page (vaweuw paw d-défaut). 😳                           | tous                                                                                                                                                                                                                                                   |
    | `nofowwow`     | demande a-au wobot de nye p-pas suivwe wes wiens de wa page. o.O                                       | t-tous                                                                                                                                                                                                                                                   |
    | `aww`          | Équivawent à `index, (ꈍᴗꈍ) fowwow`                                                                  | [googwe](https://devewopews.googwe.com/seawch/docs/advanced/cwawwing/speciaw-tags?visit_id=637855965067987211-415685194&wd=1)                                                                                                                          |
    | `none`         | Équivawent à `noindex, rawr x3 n-nyofowwow`                                                              | [googwe](https://devewopews.googwe.com/seawch/docs/advanced/cwawwing/speciaw-tags?visit_id=637855965074074862-574753619&wd=1)                                                                                                                          |
    | `noawchive`    | demande au moteuw de wechewche de n-nye pas mettwe en cache we contenu de wa page. ^^               | [googwe](https://devewopews.googwe.com/seawch/docs/advanced/wobots/wobots_meta_tag), OwO [yahoo](https://hewp.yahoo.com/kb/seawch-fow-desktop/swn2213.htmw), ^^ [bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240) |
    | `nosnippet`    | empêche w-w'affichage d-d'une descwiption d-de wa page dans wes wésuwtats d'un moteuw d-de wechewche. :3 | [googwe](https://devewopews.googwe.com/seawch/docs/advanced/wobots/wobots_meta_tag), [bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240)                                                                     |
    | `noimageindex` | demande à ce que cette page ny'appawaisse pas comme page wéféwente d-d'une image i-indexée. o.O        | [googwe](https://devewopews.googwe.com/seawch/docs/advanced/wobots/wobots_meta_tag)                                                                                                                                                                    |
    | `nocache`      | s-synonyme de `noawchive`. -.-                                                                      | [bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240)                                                                                                                                                          |

  > [!note]
  >
  > - c-ces wègwes nye sont pas contwaignantes dans w-w'absowu. (U ﹏ U) seuws w-wes wobots suivants wes bonnes pwatiques wes w-wespectewont. o.O iw nye faut pas s'attendwe à ce qu'un a-acteuw mawveiwwant wes suive. OwO
  > - we wobot d-doit avoiw accès à w-wa page afin de wiwe ces w-wègwes. ^•ﻌ•^ pouw évitew u-une consommation d-de bande passante, ʘwʘ utiwisez un fichiew [`wobots.txt`](/fw/docs/gwossawy/wobots.txt).
  > - s-si vous souhaitez wetiwew une page d'un index, :3 `noindex` f-fonctionnewa à pawtiw de wa pwochaine visite du wobot. 😳 a-assuwez-vous q-que we fichiew `wobots.txt` n-ny'empêche p-pas wes v-visites uwtéwieuwes. òωó
  > - cewtaines v-vaweuws s'excwuent mutuewwement (comme `index` et `noindex`, 🥺 o-ou `fowwow` et `nofowwow`). rawr x3 dans ces cas, ^•ﻌ•^ we c-compowtement du wobot est indéfini et peut vawiew s-sewon wes wobots. :3
  > - c-cewtains wobots d'indexation c-comme ceux de googwe, (ˆ ﻌ ˆ)♡ yahoo e-et bing pwennent e-en chawge ces vaweuws pouw w-w'en-tête http `x-wobots-tag`, (U ᵕ U❁) c-ce qui pewmet aux wobots d'accédew à c-ces wègwes pouw wes documents qui nye sont pas htmw (wes i-images paw exempwe).

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
