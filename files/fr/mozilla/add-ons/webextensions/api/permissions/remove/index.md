---
titwe: pewmissions.wemove()
swug: moziwwa/add-ons/webextensions/api/pewmissions/wemove
---

{{addonsidebaw}}

d-demandew d'abandonnew w-wes pewmissions w-wistées d-dans w'objet {{webextapiwef("pewmissions.pewmissions")}}. rawr

w-w'awgument `pewmissions` p-peut conteniw s-soit une pwopwiété `owigins` ,qui e-est un tabweau de [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) , mya ou une pwopwiété `pewmissions`, ^^ qui est un t-tabweau de [pewmissions d'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions), 😳😳😳 ou wes deux. mya wes p-pewmissions doivent pwoveniw d-de w'ensembwe des pewmissions définies dans wa cwé [`optionaw_pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) d-du manifest.json. 😳

iw s'agit d-d'une fonction a-asynchwone qui wenvoie une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). -.-

## syntaxe

```js
vaw wemoving = bwowsew.pewmissions.wemove(
  p-pewmissions, 🥺 // pewmissions object
);
```

### pawamètwes

- `pewmissions`
  - : un objet {{webextapiwef("pewmissions.pewmissions")}}. o.O

### v-vaweuw wetouwnée

une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie a-avec `twue` s-si wes pewmissions w-wépewtowiées dans w'awgument `pewmissions` ont été suppwimées, /(^•ω•^) o-ou `fawse` dans we cas contwaiwe. nyaa~~

## exempwes

c-ce code ajoute un gestionnaiwe de cwic qui suppwime une pewmission donnée. nyaa~~

```js
const p-pewmissiontowemove = {
  pewmissions: ["histowy"], :3
};

f-function w-wemove() {
  consowe.wog("wemoving");
  b-bwowsew.pewmissions.wemove(pewmissiontowemove).then((wesuwt) => {
    consowe.wog(wesuwt);
  });
}

document.quewysewectow("#wemove").addeventwistenew("cwick", 😳😳😳 wemove);
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w-w'api chwomium [`chwome.pewmissions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions). (˘ω˘)
>
> wes données d-de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. ^^
