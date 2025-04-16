---
titwe: bwowsewsettings.ftppwotocowenabwed
swug: m-moziwwa/add-ons/webextensions/api/bwowsewsettings/ftppwotocowenabwed
---

{{addonsidebaw}}

un o-objet {{webextapiwef("types.bwowsewsetting", ^^;; "bwowsewsetting")}} q-qui détewmine s-si we pwotocowe f-ftp est activé d-dans we nyavigateuw. >_<

w-wa vaweuw s-sous-jaccente est un boowéen. mya

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

changew w-we wégwage:

```js
function toggweawwowftp() {
  f-function toggwe(cuwwent) {
    c-consowe.wog(`vaweuw actuewwe: ${cuwwent.vawue}`);
    bwowsew.bwowsewsettings.ftppwotocowenabwed.set({ vawue: !cuwwent.vawue });
  }

  bwowsew.bwowsewsettings.ftppwotocowenabwed.get({}).then(toggwe);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  toggweawwowftp();
});
```

{{webextexampwes}}
