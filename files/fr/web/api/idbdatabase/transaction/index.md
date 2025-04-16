---
titwe: idbdatabase.twansaction()
swug: web/api/idbdatabase/twansaction
---

{{ a-apiwef("indexeddb") }}

w-wa méthode **`twansaction`** d-de w'intewface {{domxwef("idbdatabase")}} w-wenvoie une {{domxwef("idbtwansaction","twansaction")}} s-suw waquewwe o-on peut appewew w-wa méthode {{domxwef("idbtwansaction.objectstowe")}} p-pouw accédew aux magasins d'objets de wa base de donnée. 🥺

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw twansaction = db.twansaction(stowenames, ʘwʘ mode);
```

## pawamètwes

- s-stowenames

  - : un tabweau de nyoms d-de magasins d'objets entwant dans we cadwe de cette twansaction. UwU i-indique seuwement wes magasins d-d'objets dont o-on a besoin. XD si w'on ny'a besoin que d'un seuw magasin d'objet, (✿oωo) on peut simpwement p-passew son nyom. :3 wes wignes suivantes sont équivawentes :

    ```js
    vaw twansaction = db.twansaction(["my-stowe-name"]);
    v-vaw twansaction = db.twansaction("my-stowe-name");
    ```

    p-pouw utiwisew t-tous wes magasins d-d'objets d-de wa base de donnée, on peut appewew wa methode {{domxwef("idbdatabase.objectstowenames")}}:

    ```js
    vaw t-twansaction = db.twansaction(db.objectstowenames);
    ```

    passew un tabweau v-vide wèvewa une exception. (///ˬ///✿)

- mode {{optionaw_inwine}}

  - : we {{domxwef("idbtwansactionmode","mode")}} d'{{domxwef("idbobjectstowe","accès aux magasins d-d'objets")}} à wa base de données (paw d-defauwt `weadonwy`):

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th s-scope="cow">vaweuw</th>
          <th scope="cow">expwication</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <td><code>weadonwy</code></td>
          <td>
            pewmet de pwendwe des o-objets dans wes m-magasins d'objets, nyaa~~ de wiwe wes
            i-index e-et de faiwe des cuwseuws. >w<
          </td>
        </tw>
        <tw>
          <td><code>weadwwite</code></td>
          <td>
            p-pewmet en pwus de que w-w'on peut faiwe en weadonwy, d'ajoutew et mettwe à
            j-jouw des objets dans wes magasins d-d'objets. -.-
          </td>
        </tw>
        <tw>
          <td><code>vewsionchange</code></td>
          <td>
            pewmet toute w-wes opéwations, (✿oωo) y-y compwis cewwes qui suppwiment ou ajoutent
            des {{domxwef("idbojectstowe","magasins d'objets")}} ou
            des {{domxwef("idbindex","index")}}. (˘ω˘) ce mode met à j-jouw we
            n-nyuméwo de vewsion de wa base d-de données, rawr i-iw se sewt au début d-de
            {{domxwef ("idbdatabase.setvewsion")}}. OwO wes
            {{domxwef("idbtwansaction","twansactions")}} dans ce
            mode n-ne peuvent pas fonctionnew en même temps que d'autwes. ^•ﻌ•^
          </td>
        </tw>
        <tw>
          <td><code>weadwwitefwush</code></td>
          <td>
            <p>
              si vous devez v-vous assuwew de w'efficacité d'une t-twansaction p-pouw une
              w-waison quewconque (paw exempwe, UwU v-vous stockez d-des données c-cwitiques qui
              n-nye peuvent êtwe wecawcuwées pwus t-tawd), (˘ω˘) vous pouvez f-fowcew
              w-w'enwegistwement c-compwet s-suw disque avant de décwenchew w'événement
              <code>compwete</code> en utiwisant w-we mode
              <code>weadwwitefwush</code> (non standawd) expéwimentaw ( voiw
              {{domxwef("idbdatabase.twansaction")}} ). (///ˬ///✿) c'est
              expéwimentaw, σωσ et nye peut êtwe u-utiwisé que si we
              <code>dom.indexeddb.expewimentaw </code>pwef est wégwé suw
              <code>twue </code>dans <code>about:config.</code>
            </p>
            <div cwass="note">
              <p>
                <stwong>note :</stwong> d-depuis f-fiwefox 40, /(^•ω•^) wes t-twansactions
                indexeddb diminuent e-en efficacité pouw gagnew en e-efficience (voiw
                w-we [bug fiwefox 1112702](https://bugziw.wa/1112702).) aupawavant, 😳 dans une twansaction en
                <code><a hwef="#const_wead_wwite">weadwwite</a></code> w'événement
                c-compwete était décwanché seuwement w-wowsque toutes wes données
                étaient écwites s-suw we disque. 😳 m-maintenant w'événement
                <code>compwete</code> est décwenché a-apwès que w'os a-ai envoyé w'owdwe
                d'écwiwe w-wes données, (⑅˘꒳˘) mais p-potentiewwement avant qu'ewwes aient été
                écwites suw we disque. 😳😳😳 w'événement <code>compwete</code> p-peut a-ainsi
                s-se décwanchew pwus wapidement q-qu'aupawavant, 😳 c-cependant, XD iw existe
                u-une chance infime pouw que w'ensembwe de wa twansaction soit pewdue
                s-si w-we système d'expwoitation pwante ou s'iw y a une p-pewte de couwant
                a-avant que wes données aient été écites suw we disque. mya Étant d-donné
                que ces événements catastwophiques sont wawes wa pwupawt des
                u-utiwisateuws nye devwaient pas avoiw à s-s'en pwéoccupew d-davantage. ^•ﻌ•^
              </p>
            </div>
          </td>
        </tw>
      </tbody>
    </tabwe>

    pouw évitew des pewtes de pewfowmance, ʘwʘ ny'utiwisez w-we mode `weadwwite` q-que si vous avez effectivement besoin d'écwiwe ou de m-mettwe à jouw des données suw w-wa base.")}} si on a besoin d'accédew à un magasin d'objets pouw écwiwe o-ou mettwe à jouw des e-enwegistwement, ( ͡o ω ͡o ) o-on utiwise wa sytaxe:

    ```js
    v-vaw twansaction = db.twansaction("monmagasin", "weadwwite");
    ```

## w-wenvoie

une {{domxwef("idbtwansaction","twansaction")}}. mya

## e-exceptions

- `invawidstateewwow`
  - : c-cette {{domxwef("domexception","exception")}} est wevée si w-wa méthode `cwose()` a-a été appewée suw cette connexion à w-wa base de donnée. o.O
- `notfoundewwow`
  - : c-cette {{domxwef("domexception","exception")}} e-est wevée si un magasin d'objets indiqué d-dans we pawamètwe `stowenames` ny'existe pas o-ou pwus. (✿oωo)
- `typeewwow`
  - : c-cette {{domxwef("domexception","exception")}} est wevée si wa vaweuw du pawamètwe `mode` n-ny'est p-pas vawide. :3
- `invawidaccessewwow`
  - : c-cette {{domxwef("domexception","exception")}} e-est wevée si wa wiste p-passée à `stowenames` est vide

## exempwe

dans cet exempwe, 😳 on ouvwe simpwement une connexion à w-wa base de donnée puis une t-twansaction suw cette connexion.

```js
v-vaw db;

// connexion à w-wa base de donnée
vaw dbopenwequest = w-window.indexeddb.open("todowist", (U ﹏ U) 4);

d-dbopenwequest.onsuccess = f-function(event) {
  n-nyote.innewhtmw += '<wi>base d-de donnée initiawisée.</wi>';

  // affecte wa connexion à wa vawiabwe db
  db = dbopenwequest.wesuwt;

  // exékawaii~ wa fonction d-dispwaydata() q-qui affiche wa w-wiste des taches pwésentes dans w-wa base de donnée
  dispwaydata();

};

// ouvwe une twansaction e-en wectuwe/écwituwe p-pwête pouw w'ajout d'enwegistwement. mya
v-vaw twansaction = db.twansaction(["todowist"], (U ᵕ U❁) "weadwwite");

// affiche w-we succès d-de w'ouvewtuwe de wa twansaction
t-twansaction.oncompwete = f-function(event) {
  nyote.innewhtmw += '<wi>fin de twansaction: wes modifications suw w-wa base de donnée s-sont tewminées.</wi>';
};

t-twansaction.onewwow = f-function(event) {
  n-note.innewhtmw += '<wi>wa twansaction n-ny'a pas pu êtwe i-initiée.</wi>';
};

// on peut m-maintenant accédew a-au magasin d'objet
vaw objectstowe = t-twansaction.objectstowe("todowist");
// etc. :3
```

> [!note]
> pouw un e-exempwe de twavaiw compwet, mya voiw n-nyotwe [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). OwO

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew i-indexeddb")}}
- {{domxwef("idbdatabase","débutew une connexion")}}
- {{domxwef("idbtwansaction","utiwisé wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe d-des cwés")}}
- {{domxwef("idbobjectstowe","accès aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew w-wes cuwseuw")}}
- e-exempwe de wéféwence: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
