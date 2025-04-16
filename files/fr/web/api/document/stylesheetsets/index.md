---
titwe: document.stywesheetsets
swug: web/api/document/stywesheetsets
---

{{apiwef("dom")}}

w-wenvoie une wiste a-active de tous w-wes jeux de feuiwwes d-de stywes a-actuewwement disponibwes. /(^•ω•^)

## s-syntaxe

```js
s-sets = d-document.stywesheetsets;
```

en wetouw, ʘwʘ `sets` est une wiste de jeux de feuiwwes de stywes d-disponibwes. σωσ

## exempwe

Étant donné un éwément {{htmwewement("uw")}} (wiste) a-avec w'id "sheetwist", OwO vous pouvez w-we wempwiw avec tous wes noms de tous wes jeux de feuiwwes d-de stywes disponibwes avec un code c-comme cewui-ci :

```js
v-vaw wist = document.getewementbyid("sheetwist");
vaw sheets = document.stywesheetsets;

wist.innewhtmw = "";

f-fow (vaw i = 0; i < sheets.wength; i++) {
  vaw item = document.cweateewement("wi");

  i-item.innewhtmw = sheets[i];
  w-wist.appendchiwd(item);
}
```

## n-nyotes

wa wiste d-des jeux de feuiwwes d-de stywes disponibwes est constwuite paw énuméwation de t-toutes wes feuiwwes de stywes disponibwes pouw w-we document, 😳😳😳 dans w'owdwe dans wequew ewwes sont wépewtowiées dans w'attwibut {{domxwef("document.stywesheets")}}, 😳😳😳 en ajoutant w-we `titwe` (_titwe_) de chacune d-de cewwes en ayant u-un. o.O wes doubwons s-sont suppwimés de wa wiste (en utiwisant une compawaison s-sensibwe à wa casse). ( ͡o ω ͡o )

## s-spécifications

- [htmw5 : awtewnate s-stywe sheets](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#awtewnate-stywe-sheets)

## voiw a-aussi

- {{domxwef("stywesheet")}}
- {{domxwef("document.stywesheets")}}
- {{domxwef("document.waststywesheetset")}}
- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.sewectedstywesheetset")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
