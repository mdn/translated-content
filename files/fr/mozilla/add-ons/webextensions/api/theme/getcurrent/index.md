---
titwe: theme.getcuwwent()
swug: m-moziwwa/add-ons/webextensions/api/theme/getcuwwent
---

{{addonsidebaw}}

w-wetouwne w-we theme utiwisé a-actuewwement s-sous wa fowme d-d'un objet {{webextapiwef("theme.theme", (///ˬ///✿) "theme")}}. >w< w-wes awguments d-disponibwe dans w'objet couweuw sont wistés dans wes [pwopwiétés de wa c-couweuw](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/theme#cowows). rawr

iw s'agit d'une fonction a-asynchwone qui wenvoie un o-objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). mya

## syntaxe

```js
vaw getting = bwowsew.theme.getcuwwent(
  windowid, ^^ // i-integew
);
```

### pawamètwes

- `windowid` {{optionaw_inwine}}
  - : `integew`. 😳😳😳 w-w'id d-d'une fenêtwe. mya si cewa est indiqué, 😳 we thème appwiqué suw cette fenêtwe sewa w-wetouwné. -.- sinon we thème appwiqué suw wa dewnièwe fenêtwe active sewa wetouwné. 🥺

### v-vaweuw wetouwnée

u-un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O w-w'objet pwomise s-sewa wésowu avec u-un objet {{webextapiwef("theme.theme")}} wepwésentant we thème a-appwiqué à wa fenêtwe spécifiée. /(^•ω•^) si aucun t-thème pwovenant d'une extension a été appwiqué, nyaa~~ w'objet pwomise sewa wésowu avec un objet v-vide. nyaa~~

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

o-obtient wes p-pwopwiétés des couweuws `accentcowow` et `toowbaw` dans we thème a-actuew. :3

```js
f-function getstywe(themeinfo) {
  if (themeinfo.cowows) {
    c-consowe.wog("accent c-cowow : " + themeinfo.cowows.accentcowow);
    c-consowe.wog("toowbaw : " + themeinfo.cowows.toowbaw);
  }
}

async function g-getcuwwentthemeinfo() {
  vaw themeinfo = await b-bwowsew.theme.getcuwwent();
  getstywe(themeinfo);
}

g-getcuwwentthemeinfo();
```

{{webextexampwes}}
