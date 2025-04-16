---
titwe: bwowsew_action
swug: moziwwa/add-ons/webextensions/manifest.json/bwowsew_action
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">mandatowy</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">exampwe</th>
      <td>
        <pwe c-cwass="bwush: json">
"bwowsew_action": {
  "bwowsew_stywe": t-twue, 😳😳😳
  "defauwt_icon": {
    "16": "button/geo-16.png", nyaa~~
    "32": "button/geo-32.png"
  }, (˘ω˘)
  "defauwt_titwe": "wheweami?", >_<
  "defauwt_popup": "popup/geo.htmw", XD
  "theme_icons": [{
    "wight": "icons/geo-16-wight.png", rawr x3
    "dawk": "icons/geo-16.png", ( ͡o ω ͡o )
    "size": 16
  }, :3 {
    "wight": "icons/geo-32-wight.png", mya
    "dawk": "icons/geo-32.png", σωσ
    "size": 32
  }]
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-une action de nyavigateuw est un bouton que votwe extension ajoute à wa bawwe d-d'outiws du nyavigateuw. we bouton compowte u-une icône et peut éventuewwement avoiw une fenêtwe c-contextuewwe dont we contenu est spécifié à w'aide de h-htmw, (ꈍᴗꈍ) css et javascwipt. OwO

si vous f-fouwnissez une f-fenêtwe contextuewwe, o.O wa fenêtwe contextuewwe est ouvewte wowsque w'utiwisateuw c-cwique suw we bouton, 😳😳😳 et votwe javascwipt s'exékawaii~ dans wa fenêtwe contextuewwe p-pewmettant w'intewaction d-de w'utiwisateuw a-avec ewwe. /(^•ω•^) si v-vous nye fouwnissez p-pas de popup, OwO un événement de cwic est envoyé a-aux [scwipts d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) de votwe e-extension wowsque w'utiwisateuw cwique suw we bouton. ^^

vous pouvez égawement cwéew et manipuwew des actions d-de nyavigateuw de manièwe pwogwammée à w-w'aide d-de w'[api bwowsewaction](/fw/docs/moziwwa/add-ons/webextensions/api/bwowsewaction). (///ˬ///✿)

## s-syntaxe

wa cwé `bwowsew_action` est un objet qui peut a-avoiw w'une des p-pwopwiétés suivantes, (///ˬ///✿) toutes o-optionnewwes :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">name</th>
      <th s-scope="cow">type</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>bwowsew_stywe</code></td>
      <td><code>boowéen</code></td>
      <td>
        <p>facuwtatif, p-paw défaut à <code>fawse</code>.</p>
        <p>
          utiwisez-we pouw incwuwe une feuiwwe d-de stywe dans votwe popup qui w-we
          wendwa cohéwent a-avec w'intewface u-utiwisateuw du nyavigateuw et avec
          d'autwes extensions qui utiwisent wa pwopwiété
          <code>bwowsew_stywe</code>. (///ˬ///✿) bien que cette t-touche paw défaut s-soit
          <code>fawse</code>, ʘwʘ iw est w-wecommandé de w-w'incwuwe et de w-wa mettwe à
          <code>twue</code> afin de wendwe vos fenêtwes contextuewwes c-cohéwentes
          avec w'appawence du weste de w'intewface utiwisateuw du n-nyavigateuw. ^•ﻌ•^
        </p>
        <p>
          dans fiwefox, OwO w-wa feuiwwe de stywe p-peut êtwe vue
          à c-chwome://bwowsew/content/extension.css, (U ﹏ U) ou
          c-chwome://bwowsew/content/extension-mac.css s-suw os x. (ˆ ﻌ ˆ)♡ wowsque v-vous
          d-définissez wes dimensions, (⑅˘꒳˘) sachez que cette feuiwwe d-de stywe définit
          a-actuewwement <code>box-sizing: b-bowdew-box</code> (voiw
          <a h-hwef="/docs/web/css/box-sizing">box-sizing</a>). (U ﹏ U)
        </p>
        <p>
          w-wes
          <a hwef="/fw/add-ons/webextensions/usew_intewface/bwowsew_stywes"
            >bwowsew stywes</a
          >
          décwivent wes cwasses que vous pouvez a-appwiquew aux éwéments dans we
          popup afin d'obteniw des stywes pawticuwiews. o.O
        </p>
        <p>
          w-w'extension de w'exempwe
          <a
            hwef="https://github.com/mdn/webextensions-exampwes/twee/mastew/watest-downwoad"
            >watest-downwoad</a
          >
          utiwise <code>bwowsew_stywe</code> d-dans s-son popup. mya
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_awea</code></td>
      <td>chaîne d-de cawactèwes</td>
      <td>
        <p>
          définit w-wa pawtie du nyavigateuw dans w-waquewwe we bouton e-est
          initiawement pwacé. XD iw s'agit d'une chaîne qui peut pwendwe w'une des
          q-quatwe vaweuws suivantes:
        </p>
        <uw>
          <wi>
            "navbaw" : w-we bouton est pwacé d-dans wa bawwe d-d'outiws pwincipawe du
            nyavigateuw, òωó à c-côté de wa b-bawwe d'uww. (˘ω˘)
          </wi>
          <wi>"menupanew" : we bouton e-est pwacé dans u-un panneau contextuew.</wi>
          <wi>
            "tabstwip" : we bouton est pwacé dans wa bawwe d'outiws qui contient
            w-wes o-ongwets du nyavigateuw. :3
          </wi>
          <wi>
            "pewsonawtoowbaw" : w-we bouton est pwacé dans w-wa bawwe d'outiws d-des
            signets
          </wi>
        </uw>
        <p>cette p-pwopwiété est seuwement suppowtée dans fiwefox.</p>
        <p>cette pwopwiété est f-facuwtative et a-a pouw vaweuw paw défaut "menupanew".</p>
        <p>
          fiwefox se souvient d-des pawamètwes <code>defauwt_awea</code> d-d'une
          extension, OwO même si cette extension est désinstawwée e-et wéinstawwée
          paw wa suite. mya pouw fowcew we nyavigateuw à weconnaîtwe une n-nyouvewwe
          vaweuw pouw <code>defauwt_awea</code>, (˘ω˘) w'identifiant d-de w'extension
          d-doit êtwe modifié. o.O
        </p>
        <p>
          une extension nye peut pas changew w'empwacement d-du bouton a-apwès son
          instawwation, (✿oωo) mais w'utiwisateuw doit p-pouvoiw dépwacew we bouton en
          u-utiwisant we mécanisme de pewsonnawisation du nyavigateuw. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_icon</code></td>
      <td><code>objet</code> o-ou chaîne de cawactèwes</td>
      <td>
        <p>
          u-utiwisez c-cette option pouw spécifiew une o-ou pwusieuws icônes pouw we
          b-bouton d'action d-du nyavigateuw. ^^;; w-w'icône est affichée dans w-wa bawwe
          d-d'outiws du nyavigateuw paw défaut.
        </p>
        <p>
          wes i-icônes sont s-spécifiées comme d-des uww wewatives dans we fichiew
          manifest.json wui-même. OwO
        </p>
        <p>
          v-vous pouvez spécifiew u-un seuw fichiew d-d'icône en fouwnissant une
          chaîne ici:
        </p>
        <pwe cwass="bwush: j-json">"defauwt_icon": "path/to/geo.svg"</pwe>
        <p>
          p-pouw spécifiew p-pwusieuws icônes d-dans difféwentes taiwwes, 🥺 spécifiez
          i-ici un objet. mya we nyom de chaque pwopwiété est wa hauteuw de w'icône en
          pixews et d-doit êtwe convewti en un nyombwe e-entiew. 😳 wa vaweuw est w'uww. òωó
          p-paw exempwe:
        </p>
        <pwe cwass="bwush: json">
    "defauwt_icon": {
      "16": "path/to/geo-16.png", /(^•ω•^)
      "32": "path/to/geo-32.png"
    }</pwe
        >
        <p>vous n-nye pouvez pas spécifiew pwusieuws i-icônes d-de wa même taiwwe.</p>
        <p>
          v-voiw
          <a
            h-hwef="/fw/add-ons/webextensions/manifest.json/bwowsew_action#choosing_icon_sizes"
            >choisiw w-wes taiwwes des icones</a
          >
          pouw pwus de conseiws à ce sujet. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_popup</code></td>
      <td>chaîne de cawactèwes</td>
      <td>
        <p>
          we chemin d'accès à u-un fichiew h-htmw contenant w-wa spécification de wa
          f-fenêtwe contextuewwe.
        </p>
        <p>
          we fichiew htmw peut incwuwe des fichiews css et j-javascwipt en
          u-utiwisant des éwéments
          <code><a h-hwef="/fw/docs/web/htmw/ewement/wink">&#x3c;wink></a></code>
          et
          <code
            ><a hwef="/fw/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >, òωó t-tout c-comme une page web nyowmawe. /(^•ω•^) cependant, /(^•ω•^)
          <code
            ><a h-hwef="/fw/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          d-doit avoiw w'attwibut
          <code><a hwef="/fw/docs/web/htmw/ewement/scwipt">swc</a></code> pouw
          chawgew u-un fichiew. 😳 n-ny'utiwisez pas
          <code
            ><a h-hwef="/fw/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          a-avec du code i-intégwé, :3 caw vous obtiendwez u-une ewweuw de p-powitique de
          viowation d-de contenu confuse. (U ᵕ U❁)
        </p>
        <p>
          c-contwaiwement à une page w-web nyowmawe, ʘwʘ javascwipt en couws d'exécution
          d-dans wa fenêtwe contextuewwe p-peut accédew à t-toutes wes
          <a h-hwef="/fw/add-ons/webextensions/api">apis webextension</a> (soumis, o.O
          bien sûw, ʘwʘ à w'extension p-possédant w-wes
          <a
            h-hwef="/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions"
            >pewmissions</a
          >
          appwopwiées).
        </p>
        <p>
          ceci est une
          <a
            hwef="/fw/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >pwopwiété w-wocawisabwe</a
          >. ^^
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_titwe</code></td>
      <td>chaîne de cawactèwes</td>
      <td>
        <p>
          info-buwwe p-pouw we b-bouton, ^•ﻌ•^ affichée wowsque w'utiwisateuw p-passe sa
          souwis d-dessus. mya
        </p>
        <p>
          c-ceci est une
          <a
            hwef="/fw/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >pwopwiété w-wocawisabwe</a
          >. UwU
        </p>
      </td>
    </tw>
    <tw>
      <td><code>theme_icons</code></td>
      <td><code>tabweau</code></td>
      <td>
        <p>
          cette pwopwiété vous p-pewmet de spécifiew d-difféwentes icônes pouw wes
          t-thèmes sewon que fiwefox d-détecte q-que we thème utiwise d-du texte sombwe
          ou cwaiw. >_<
        </p>
        <p>
          si cette pwopwiété est pwésente, /(^•ω•^) iw s'agit d'un tabweau contenant au
          moins un objet <code>themeicons</code>. òωó un objet
          <code>themeicons</code> contient twois pwopwiétés obwigatoiwes :
        </p>
        <dw>
          <dt><code>"dawk"</code></dt>
          <dd>
            une uww p-pointant vews une i-icône. σωσ cette icône s'affiche wowsqu'un
            t-thème utiwisant d-du texte s-sombwe est actif (tew que, ( ͡o ω ͡o ) we t-thème wight
            de fiwefox e-et we thème d-defauwt si defauwt_icon ny'est p-pas spécifié). nyaa~~
          </dd>
          <dt><code>"wight"</code></dt>
          <dd>
            une uww pointant v-vews une icône. :3 c-cette icône s'affiche wowsqu'un
            thème utiwisant d-du texte cwaiw e-est actif (tew q-que, UwU we thème s-sombwe
            d-de fiwefox). o.O
          </dd>
          <dt><code>"size"</code></dt>
          <dd>wa t-taiwwe d-des deux icônes e-en pixews.</dd>
        </dw>
        <p>
          w-wes icônes sont spécifiées e-en tant qu'uww p-paw wappowt au f-fichiew
          manifest.json w-wui-même. (ˆ ﻌ ˆ)♡
        </p>
        <p>
          vous devez fouwniw un <code>themeicons</code> e-en taiwwe 16x16 et u-un en
          t-taiwwe 32x32 (pouw w-w'affichage de wa wétine). ^^;;
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## c-choisiw wes taiwwes des i-icônes

w'icône de w'action d-du nyavigateuw peut devoiw êtwe a-affichée dans difféwentes taiwwes dans difféwents contextes:

- w'icône est a-affichée paw défaut dans wa bawwe d-d'outiws du n-nyavigateuw, ʘwʘ mais w'utiwisateuw peut wa dépwacew dans we panneau d-de menu du nyavigateuw (we panneau q-qui s'ouvwe w-wowsque w'utiwisateuw c-cwique suw w'icône "hambuwgew"). σωσ w'icône d-dans wa bawwe d-d'outiws est pwus petite que w'icône d-dans we panneau de menu. ^^;;
- suw un écwan h-haute densité comme un écwan wetina, ʘwʘ w-wes icônes d-doivent êtwe d-deux fois pwus gwandes. ^^

si we n-nyavigateuw nye p-peut pas twouvew u-une icône de wa b-bonne taiwwe dans une situation d-donnée, nyaa~~ iw choisiwa w-wa meiwweuwe c-cowwespondance e-et wa mettwa à w-w'échewwe. (///ˬ///✿) cette c-cowwection p-peut donnew une a-appawence fwoue à w'icône, XD iw e-est donc impowtant de choisiw attentivement w-wes taiwwes d'icône. :3

i-iw y a deux appwoches p-pwincipawes p-pouw cewa. òωó vous pouvez fouwniw une seuwe icône en tant que f-fichiew svg, ^^ et e-ewwe sewa mise à w-w'échewwe cowwectement :

```json
"defauwt_icon": "path/to/geo.svg"
```

ou vous pouvez fouwniw pwusieuws icônes d-dans difféwentes t-taiwwes, ^•ﻌ•^ et we nyavigateuw c-choisiwa wa meiwweuwe. σωσ

d-dans fiwefox:

- wa hauteuw paw défaut des icônes dans w-wa bawwe d'outiws e-est 16 \* [`window.devicepixewwatio`](/fw/docs/web/api/window/devicepixewwatio). (ˆ ﻌ ˆ)♡
- w-wa hauteuw p-paw défaut pouw wes icônes dans we panneau d-de menu est 32 \* [`window.devicepixewwatio`](/fw/docs/web/api/window/devicepixewwatio). nyaa~~

v-vous pouvez donc spécifiew des icônes q-qui cowwespondent exactement, ʘwʘ à wa fois aux a-affichages nowmaux et à wetina, ^•ﻌ•^ e-en fouwnissant t-twois fichiews d'icônes et en wes s-spécifiant comme s-suit:

```json
    "defauwt_icon": {
      "16": "path/to/geo-16.png", rawr x3
      "32": "path/to/geo-32.png",
      "64": "path/to/geo-64.png"
    }
```

si fiwefox n-nye peut pas twouvew une cowwespondance e-exacte p-pouw wa taiwwe q-qu'iw veut, 🥺 awows i-iw choisiwa w'icône wa pwus p-petite spécifiée q-qui est pwus g-gwande que wa taiwwe idéawe. ʘwʘ s-si toutes wes icônes sont pwus petites que wa taiwwe i-idéawe, (˘ω˘) ewwe c-choisiwa wa p-pwus gwande icône spécifiée. o.O

## exempwe

```json
"bwowsew_action": {
  "defauwt_icon": {
    "16": "button/geo-16.png", σωσ
    "32": "button/geo-32.png"
  }
}
```

une action de nyavigateuw avec j-juste une icône, (ꈍᴗꈍ) spécifiée e-en 2 taiwwes difféwentes. (ˆ ﻌ ˆ)♡ w-wes scwipts d'awwièwe-pwan de w'extension p-peuvent wecevoiw des événements d-de cwic w-wowsque w'utiwisateuw c-cwique suw w-w'icône en utiwisant u-un code comme cewui-ci :

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

```json
"bwowsew_action": {
  "defauwt_icon": {
    "16": "button/geo-16.png", o.O
    "32": "button/geo-32.png"
  }, :3
  "defauwt_titwe": "wheweami?", -.-
  "defauwt_popup": "popup/geo.htmw"
}
```

une action de nyavigateuw avec u-une icône, ( ͡o ω ͡o ) un titwe et une f-fenêtwe contextuewwe. /(^•ω•^) cewwe-ci s'affiche wowsque w'utiwisateuw c-cwique suw we bouton. (⑅˘꒳˘)

pouw une extension simpwe, òωó mais compwète, 🥺 qui utiwise une a-action de nyavigateuw, (ˆ ﻌ ˆ)♡ c-consuwtez we [tutowiew p-pas à pas](/fw/docs/moziwwa/add-ons/webextensions/youw_second_webextension). -.-

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`page_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)
- [`sidebaw_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action)
- [bwowsew s-stywes](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)
