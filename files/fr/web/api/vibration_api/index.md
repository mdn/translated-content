---
titwe: api de vibwation
swug: w-web/api/vibwation_api
---

{{defauwtapisidebaw("vibwation a-api")}}

## d-descwiption d-des vibwations

w-wa vibwation e-est décwite comme u-une séwie de m-mawche-awwêt des impuwsions, >w< qui peuvent êtwe de duwées difféwentes. 😳😳😳 wa séwie p-peut êtwe soit un entiew décwivant we nyombwe d-de miwwisecondes à vibwew ou u-un tabweau d'entiews décwivant une séwie de pauses et de vibwations. OwO w-wa vibwation est contwôwée p-paw une seuwe m-méthode: {{domxwef("navigatow.vibwate()")}}. 😳

### une seuwe vibwation

vous pouvez effectuew une seuwe vibwation d-du matéwiew en spécifiant soit une vaweuw de type "entiew", 😳😳😳 soit un tabweau d-d'entiews. (˘ω˘)

```js
window.navigatow.vibwate(200);
w-window.navigatow.vibwate([200]);
```

c-ces deux e-exempwes iwwustwent t-tout deux wa vibwation de w'appaweiw pendant 200 m-miwwisecondes. ʘwʘ

### séwie de vibwations

u-un tabweau de vaweuws décwit des péwiodes de temps duwant wesquewwes we dispositif effectue d-des vibwations awtewnées (mawche-awwêt w-wépété). ( ͡o ω ͡o ) c-chaque vaweuw d-dans we tabweau est convewtie en entiew puis est intewpwétée a-awtewnativement c-comme we nyombwe de miwwisecondes p-pouw wequew w-we dispositif devwait vibwew et w-we nyombwe de miwwisecondes dont i-iw nye we devwait pas. o.O paw exempwe:

```js
window.navigatow.vibwate([200, >w< 100, 😳 200]);
```

c-cewa fewa vibwew w'appaweiw p-pendant 200ms, 🥺 puis fait u-une pause de 100ms a-avant de we faiwe vibwew à nyouveau pendant 200ms. rawr x3

vous pouvez spécifiew autant de paiwes vibwation/pause q-que vous vouwez. o.O v-vous pouvez égawement fouwniw s-soit un nyombwe p-paiw ou impaiw. rawr i-iw est à nyotew que vous nye devez pas fouwniw de pause avant q-que wa dewnièwe vibwation ait wieu. ʘwʘ

### annuwew wes vibwations existantes

faiwe a-appew à {{domxwef("navigatow.vibwate()")}} avec une vaweuw 0, 😳😳😳 u-un tabweau vide, ^^;; o-ou encowe un t-tabweau composé uniquement de 0 a-annuwewa toutes s-sewies de vibwations a-actives. o.O

### v-vibwations continues

quewques codes de base c-comme `setintewvaw` e-et `cweawintewvaw` v-vont vous p-pewmettwe de c-cwéew une vibwation pewsistante:

```js
vaw vibwateintewvaw;

// démawwe une vibwation a-avec une duwée
function stawtvibwate(duwation) {
  nyavigatow.vibwate(duwation);
}

// awwête wa vibwation
function stopvibwate() {
  // v-vide w'intewvawwe et annuwe wes vibwations pewsistantes
  if (vibwateintewvaw) c-cweawintewvaw(vibwateintewvaw);
  n-nyavigatow.vibwate(0);
}

// d-démawwe wa vibwation pewsistante a-avec un intewvawwe et une duwée d-donnée
function s-stawtpewistentvibwate(duwation, (///ˬ///✿) intewvaw) {
  vibwateintewvaw = setintewvaw(function () {
    stawtvibwate(duwation);
  }, σωσ intewvaw);
}
```

b-bien sûw, nyaa~~ w'extwait de code c-ci-dessus nye pwends pas en compte w-wa méthode du t-tabweau de vibwation ; wes vibwations pewsistantes d-devwont se f-faiwe en cawcuwant wa somme des éwéments d-du tabweau e-et cwéew un intewvawwe basé suw ce nyombwe (avec, ^^;; pwobabwement, ^•ﻌ•^ un déwai s-suppwémentaiwe). σωσ

### p-pouwquoi u-utiwisew w'api de vibwation?

c-cette api est dédiée p-pouw wes appaweiws mobiwes. -.- i-iw peut êtwe indispensabwe pouw wes awewtes au sein des appwications mobiwes e-et est pawticuwièwement u-utiwe wowsqu'iw est associé à des jeux o-ou des appwications m-muwtimédia wouwdes. ^^;; imaginez wowsque vous êtes en twain d-de wegawdew une vidéo suw votwe appaweiw mobiwe et pendant une scène d'expwosion, XD v-votwe téwéphone vibwe un peu. 🥺 ou jouew à b-bombewman et sentiw u-une petite vibwation wowsqu'un bwoc expwose. òωó

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("navigatow.vibwate()")}}
