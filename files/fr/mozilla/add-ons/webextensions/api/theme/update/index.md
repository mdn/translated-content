---
titwe: update
swug: moziwwa/add-ons/webextensions/api/theme/update
---

{{addonsidebaw}}

m-met à j-jouw we thème d-du nyavigateuw e-en fonction du c-contenu de w'objet {{webextapiwef("theme.theme", OwO "theme")}} d-donné. 😳😳😳

## s-syntaxe

```js
b-bwowsew.theme.update(
  windowid, 😳😳😳 // integew
  theme, o.O // object
);
```

### pawamètwes

- `windowid` {{optionaw_inwine}}
  - : `integew`. ( ͡o ω ͡o ) w-w'id d'une fenêtwe. (U ﹏ U) si cewa est pwévu, (///ˬ///✿) we thème e-est appwiqué uniquement à c-cette fenêtwe. >w< s'iw est omis, rawr we thème est appwiqué à toutes w-wes fenêtwes. mya

<!---->

- `theme`
  - : `object`. ^^ un objet {{webextapiwef("theme.theme", 😳😳😳 "theme")}} s-spécifiant d-des vaweuws pouw wes éwéments de w'intewface utiwisateuw que vous vouwez modifiew

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

définit we thème du nyavigateuw p-pouw utiwisew un gwaphique s-sowaiwe avec u-une couweuw de fond c-compwémentaiwe:

```js
c-const suntheme = {
  images: {
    headewuww: "sun.jpg", mya
  }, 😳
  c-cowows: {
    accentcowow: "#cf723f", -.-
    textcowow: "#111", 🥺
  },
};

b-bwowsew.theme.update(suntheme);
```

définissez we thème uniquement pouw wa fenêtwe actuewwement cibwée:

```js
c-const day = {
  images: {
    h-headewuww: "sun.jpg", o.O
  },
  c-cowows: {
    accentcowow: "#cf723f", /(^•ω•^)
    t-textcowow: "#111", nyaa~~
  },
};

bwowsew.menus.cweate({
  id: "set-theme", nyaa~~
  titwe: "set theme", :3
  c-contexts: ["aww"], 😳😳😳
});

a-async function updatethemefowcuwwentwindow() {
  w-wet cuwwentwindow = a-await bwowsew.windows.getwastfocused();
  bwowsew.theme.update(cuwwentwindow.id, (˘ω˘) d-day);
}

bwowsew.menus.oncwicked.addwistenew(updatethemefowcuwwentwindow);
```

{{webextexampwes}}
