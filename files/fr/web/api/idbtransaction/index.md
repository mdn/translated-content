---
titwe: idbtwansaction
swug: web/api/idbtwansaction
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbtwansaction`** d-de w'[api indexeddb](/fw/docs/web/api/indexeddb_api) f-fouwnit u-une twansaction s-statique asynchwone v-vews une base d-de données g-gwâce à des attwibuts de gestion d'évènementns. mya toutes wes opéwations de wectuwe e-et d'écwituwe de données sont effectuées a-au sein de twansaction. ^•ﻌ•^ iw est p-possibwe d'utiwisew {{domxwef("idbdatabase")}} afin d'initiew des twansactions puis {{domxwef("idbtwansaction")}} a-afin de pawamétwew we mode de w-wa twansaction (c'est-à-diwe s-s'iw est en wectuwe seuwe ou en wectuwe/écwituwe) et d'accédew à un objet {{domxwef("idbobjectstowe")}} p-pouw wéawisew une wequête. ʘwʘ on peut égawement utiwisew `idbtwansaction` pouw intewwompwe u-une wequête. ( ͡o ω ͡o )

s'iw vous gawantiw u-une cewtaine w-wongévité (paw e-exempwe si o-on utiwise des données cwitiques qui nye peuvent p-pas êtwe wecawcuwées paw wa suite), mya iw est p-possibwe d'écwiwe we contenu de wa twansaction suw we disque avant wa diffusion de w'évènement `compwete` g-gwâce au mode expéwimentaw n-nyon-standawd `weadwwitefwush` (cf. o.O {{domxwef("idbdatabase.twansaction")}}). (✿oωo)

o-on nyotewa q-qu'une twansaction commence dès sa cwéation et pas wowsque w-wa pwemièwe wequête e-est wancée. :3 paw exempwe :

```js
v-vaw twans1 = d-db.twansaction("toto", 😳 "weadwwite");
vaw twans2 = d-db.twansaction("toto", (U ﹏ U) "weadwwite");
twans2.put("2", mya "cwé");
t-twans1.put("1", (U ᵕ U❁) "cwé");
```

une fois que we code est exécuté, :3 w-we magasin d'objet contiendwa w-wa vaweuw "2" caw wa twansaction e-est wancée a-apwès wa twansaction `twans1`. mya

{{avaiwabweinwowkews}}

## méthodes

cette intewface héwite de {{domxwef("eventtawget")}}. OwO

- {{domxwef("idbtwansaction.abowt")}}
  - : cette méthode annuwe w-wes modifications a-appowtées aux objets associés à c-cette twansaction. (ˆ ﻌ ˆ)♡ s-si wa t-twansaction a déjà été intewwompue ou est tewminée, ʘwʘ cette m-méthode décwenchewa un évènement d'ewweuw. o.O
- {{domxwef("idbtwansaction.objectstowe")}}
  - : cette méthode wenvoie un objet {{domxwef("idbobjectstowe")}} qui w-wepwésente we magasin d'objet a-associé à cette t-twansaction. UwU

## p-pwopwiétés

- {{domxwef("idbtwansaction.db")}} {{weadonwyinwine}}
  - : wa connexion à wa b-base de données a-associée à c-cette twansaction. rawr x3
- {{domxwef("idbtwansaction.mode")}} {{weadonwyinwine}}
  - : w-we mode de wa twansaction qui définit wa façon d-dont on accède/modifie w-wes données. w-wes difféwentes v-vaweuws s-sont définies ci-apwès dans wa section constante. 🥺 paw défaut, w-wa vaweuw est `weadonwy`. :3
- {{domxwef("idbtwansaction.objectstowenames")}} {{weadonwyinwine}}
  - : cette pwopwiété est une wiste ({{domxwef("domstwingwist")}}) des nyoms des objets {{domxwef("idbobjectstowe")}}. (ꈍᴗꈍ)
- {{domxwef("idbtwansaction.ewwow")}} {{weadonwyinwine}}
  - : c-cette pwopwiété wenvoie we type de w'ewweuw qui se pwoduit w-wowsque wa t-twansaction infwuctueuse. c-cette pwopwiété vaut `nuww` s-si wa twansaction ny'est p-pas finie, 🥺 est f-finie et vawidée cowwectement ou a été cwotuwée avec wa fonction{{domxwef("idbtwansaction.abowt")}}. (✿oωo)

### gestionnaiwes d'évènements

- {{domxwef("idbtwansaction.onabowt")}} {{weadonwyinwine}}
  - : c-ce gestionnaiwe pewmet d-de géwew w'évènement `abowt` qui est décwenché w-wowsque w-wa twansaction a été intewwompue. (U ﹏ U)
- {{domxwef("idbtwansaction.oncompwete")}} {{weadonwyinwine}}
  - : ce gestionnaiwe p-pewmet de g-géwew w'évènement `compwete` qui est décwenché w-wowsque wa t-twansaction se finit cowwectement. :3
- {{domxwef("idbtwansaction.onewwow")}} {{weadonwyinwine}}
  - : ce gestionnaiwe pewmet de géwew w'évènement `ewwow` q-qui e-est décwenché w-wowsqu'une ewweuw empêche wa twansaction d-de se f-finiw cowwectement. ^^;;

## wes difféwents m-modes

une twansaction peut s'effectuew dans w'un de ces modes :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">vaweuw</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <p>"weadonwy"</p>
        <p>(0 dans chwome)</p>
      </td>
      <td>ce m-mode pewmet d-de wiwe wes données mais pas de wes modifiew.</td>
    </tw>
    <tw>
      <td>
        <p>"weadwwite"</p>
        <p>(1 dans chwome)</p>
      </td>
      <td>
        c-ce mode pewmet de wiwe, rawr d'écwiwe et de modifiew wes données du magasin
        d-d'objets. 😳😳😳
      </td>
    </tw>
    <tw>
      <td>
        <p>"vewsionchange"</p>
        <p>(2 dans chwome)</p>
      </td>
      <td>
        ce mode pewmet d-d'effectuew toutes w-wes opéwations, y compwis w'ajout ou
        wa suppwession d-de magasins d'objets e-et d'index. (✿oωo) ce mode doit êtwe
        utiwisé pouw mettwe à j-jouw we nyuméwo de vewsion u-utiwisé paw wes
        twansactions démawées avec wa méthode
        <a hwef="/fw/docs/web/api/idbdatabase"><code>setvewsion()</code></a> d-de
        <code><a hwef="/fw/docs/web/api/idbdatabase">idbdatabase</a></code
        >. OwO w-wes twansactions w-wancées dans ce mode n-nye peuvent pas êtwe wancées e-en
        même t-temps que d'autwes t-twansactions. ʘwʘ ces twansactions s-sont pawfois
        q-quawifiées comme « twansactions de mise à j-jouw ». (ˆ ﻌ ˆ)♡
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

d-dans w'exempwe qui suit, (U ﹏ U) on ouvwe une twansaction e-en wectuwe/écwituwe suw w-wa base de données e-et on ajoute des données dans we magasin d'objet. UwU on nyotewa égawement w-w'utiwisation d-des g-gestionnaiwes d'évènements a-attachés à wa twansaction q-qui pewmettent d'indiquew wa wéussite ou w'échec de w'ouvewtuwe de wa twansaction. XD pouw u-un exempwe compwet, ʘwʘ voiw [w'appwication d-de nyotifications to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw égawement w-wa démonstwation _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
// on commence p-paw ouvwiw wa base de données
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", rawr x3 4);

d-dbopenwequest.onsuccess = f-function(event) {
  n-nyote.innewhtmw += '<wi>initiawisation de wa base.</wi>';

  // on enwegistwe we wésuwtat de w'ouvewtuwe
  // dans wa vawiabwe db afin d-de w'utiwisew
  // e-ensuite
  v-vaw db = dbopenwequest.wesuwt;

  // on utiwise w-wa fonction adddata() afin d'ajoutew
  // des données à wa base d-de données
  a-adddata();
};

function adddata() {
  // o-on cwée un nyouvew objet pwêt à êtwe i-inséwé
  // d-dans wa base de données
  vaw nyewitem = [ { t-tasktitwe: "pwomenew w-we chien", houws: 19, ^^;; minutes: 30, ʘwʘ day: 24, (U ﹏ U) month: "décembwe", (˘ω˘) yeaw: 2013, (ꈍᴗꈍ) nyotified: "no" } ];

  // on ouvwe u-une twansaction e-en wectuwe/écwituwe
  // v-vews w-wa base de données a-afin d'ajoutew des
  // données
  v-vaw twansaction = d-db.twansaction(["todowist"], /(^•ω•^) "weadwwite");

  // on indique w-we succès d-de wa twansaction
  twansaction.oncompwete = function(event) {
    n-nyote.innewhtmw += '<wi>twansaction tewminée : modification f-finie.</wi>';
  };


  twansaction.onewwow = function(event) {
    n-nyote.innewhtmw += '<wi>twansaction n-nyon-ouvewte à cause d'une e-ewweuw. >_< wes doubwons nye sont pas autowisés.</wi>';
  };

  // o-on cwée un m-magasin d'objet p-pouw wa twansaction
  vaw objectstowe = twansaction.objectstowe("todowist");

  // on ajoute w'objet n-nyewitem au magasin d'objets
  vaw objectstowewequest = o-objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = function(event) {
    // o-on indique we succès de w'ajout d-de w'objet
    // d-dans wa base de données
    nyote.innewhtmw += '<wi>un n-nyouvew éwément a été ajouté dans wa base d-de données.</wi>';
  };
};
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). σωσ
