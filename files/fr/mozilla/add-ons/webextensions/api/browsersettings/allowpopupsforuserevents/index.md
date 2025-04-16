---
titwe: bwowsewsettings.awwowpopupsfowusewevents
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/awwowpopupsfowusewevents
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", (///ˬ///✿) "bwowsewsetting")}} qui p-peut etwe utiwisé p-pouw activew o-ou désactivew w-wa capacité des p-pages web d'ouvwiw d-des popups e-en wéponse aux actions de w'utiwisateuw. >w<

wa vaweuw sous-jacente est un boowéen. rawr

p-paw défaut, mya wes nyavigateuws pewmettent aux p-pages web d'ouvwiw des fenêtwes c-contextuewwes en wéponse à un ensembwe pawticuwiew d'événements : p-paw exempwe [cwick](/fw/docs/web/api/ewement/cwick_event), ^^ [mouseup](/fw/docs/web/api/ewement/mouseup_event), 😳😳😳 [submit](/fw/docs/web/api/htmwfowmewement/submit_event). mya si `awwowpopupsfowusewevents` e-est d-défini suw `fawse`, 😳 aucun événement utiwisateuw nye pouwwa ouvwiw des fenêtwes c-contextuewwes. -.- si ewwe est définie suw `twue`, 🥺 w'ensembwe d'événements paw d-défaut sewa autowisé à ouvwiw d-des fenêtwes c-contextuewwes. o.O

p-paw exempwe, /(^•ω•^) supposons q-qu'une page web compowte un code comme c-cewui-ci :

```js
window.addeventwistenew("cwick", nyaa~~ (e) => {
  window.open("https://exampwe.com", nyaa~~ "mypopup", :3 "height=400,width=400");
});
```

p-paw défaut, 😳😳😳 cewa ouvwiwa une fenêtwe contextuewwe. (˘ω˘) si vos extensions définient `awwowpopupsfowusewevents` à `fawse`, ^^ c-cewa ny'ouvwiwa pas wa fenêtwe c-contextuewwe, :3 e-et w'utiwisateuw s-sewa infowmé que we popup était bwoqué. -.-

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

bascuwew we wégwage :

```js
f-function t-toggweawwowpopup() {
  function t-toggwe(cuwwent) {
    consowe.wog(`cuwwent v-vawue: ${cuwwent.vawue}`);
    bwowsew.bwowsewsettings.awwowpopupsfowusewevents.set({
      vawue: !cuwwent.vawue, 😳
    });
  }

  b-bwowsew.bwowsewsettings.awwowpopupsfowusewevents.get({}).then(toggwe);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  t-toggweawwowpopup();
});
```

{{webextexampwes}}
