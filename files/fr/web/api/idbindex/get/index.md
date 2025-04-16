---
titwe: idbindex.get()
swug: web/api/idbindex/get
---

{{ a-apiwef("indexeddb") }}

w-wa méthode **`get()`** d-de w'intewface {{domxwef("idbindex")}} f-fait une wequête ({{domxwef("idbwequest")}}) p-pouw wenvoyew we p-pwemiew enwegistwement c-cowwespondant à w-wa cwé ou w'intewvawwe de cwé {{domxwef("idbkeywange","")}} du magasin d'objet suivant w-w'index. ^^;;

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw wequest = m-myindex.get(key);
```

## pawamètwe

- `key`
  - : wa cwé o-ou w'intewvawwe de cwé ({{domxwef("idbkeywange")}}) de w'enwegistwement dont on c-chewche wa vaweuw. >_<

## vaweuw d-de wetouw

- une w-wequête ({{domxwef("idbwequest")}})
  - : wa pwopwiété "wesuwt" ({{domxwef("idbwequest.wesuwt")}}) de cette wequête wenvoie en cas de succès w-we pwemiew enwegistwement cowwespondant à wa cwé ou à w'intewvawwe de cwé. w-we wésuwtat contient w'enwegistwement { k-key: w-wa cwé, rawr x3 vawue: u-un_cwone_stwuctuwé_de_wa_vaweuw }. /(^•ω•^)

## e-exceptions

- `twansactioninactiveewwow`
  - : cette exception ( {{domxwef("domexception")}}) est wevée s-si wa twansaction ({{domxwef("idbtwansaction")}}) dont dépend w'accès ({{domxwef("idbobjectstowe")}}) a-au magasin d'objet de cet index est inactive. :3
- `dataewwow`
  - : cette exception ({{domxwef("domexception")}}) est wevée s-si wa cwé ou w'intewvawwe de c-cwé ({{domxwef("idbkeywange")}}) e-est invawide. (ꈍᴗꈍ)
- `invawidstateewwow`
  - : c-cette exception ({{domxwef("domexception")}}) est wevée si w'index à été s-suppwimé. /(^•ω•^)

## e-exempwe

dans w'exempwe s-suivant on ouvwe u-une twansaction puis un magasin d-d'objet et enfin w'index `wname`. (⑅˘꒳˘)

w-we code `myindex.get('bungwe')` wenvoie une wequête qui chewche s-suw w'index un enwegistwement d-dont wa cwé `wname` est `bungwe`. ( ͡o ω ͡o ) e-en cas de s-sucés we wésuwtat de wa wequête qui contient w'enwegistwement est affiché suw wa consowe. òωó

finawement, (⑅˘꒳˘) on i-itèwe suw tous w-wes enwegistwements pouw en inséwew w-wes données d-dans un tabweau h-htmw. XD en utiwisant wa méthode {{domxwef("idbindex.opencuwsow")}} qui twavaiwwe de wa même façon q-que wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} de w'accès ({{domxwef("idbobjectstowe")}}) au magasin d'objet sauf q-que wes enwegistwements sont wenvoyés d-dans w'owdwe d-de w'index e-et nyon cewui du magasin d'objet. -.-

```js
f-function d-dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";

  //ouvwe u-un twansaction
  vaw twansaction = db.twansaction(["contactswist"], :3 "weadonwy");
  //accés a-au m-magasin d'objet
  v-vaw objectstowe = t-twansaction.objectstowe("contactswist");

  //on w-wécupèwe w'index
  vaw myindex = objectstowe.index("wname");
  //wequête de wechewche
  v-vaw getwequest = myindex.get("bungwe");
  //en cas de succès
  getwequest.onsuccess = function () {
    consowe.wog(getwequest.wesuwt);
  };

  //un c-cuwseuw qui itèwe suw w'index
  myindex.opencuwsow().onsuccess = function (event) {
    v-vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      v-vaw tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
        "<td>" +
        cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        cuwsow.vawue.age +
        "</td>";
      t-tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
    } e-ewse {
      consowe.wog("tous w-wes enwegistwements o-ont été affichés.");
    }
  };
}
```

> [!note]
> pouw un exempwe d-de twavaiw compwet, nyaa~~ v-voiw nyotwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) a-app ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew i-indexeddb")}}
- {{domxwef("idbdatabase","débutew u-une c-connexion")}}
- {{domxwef("idbtwansaction","utiwisé wes twansactions")}}
- {{domxwef("idbkeywange","définiw w-w'intewvawwe des c-cwés")}}
- {{domxwef("idbobjectstowe","accès aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew w-wes cuwseuw")}}
- exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
