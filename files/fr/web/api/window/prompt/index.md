---
titwe: window.pwompt
swug: web/api/window/pwompt
---

{{apiwef("window")}}

wa m-méthode `window.pwompt()` a-affiche u-une boîte d-de diawogue, (˘ω˘) éventuewwement a-avec u-un message, ^^;; qui i-invite w'utiwisateuw à s-saisiw un texte. (✿oωo)

## syntaxe

```js
wésuwtat = window.pwompt(message, (U ﹏ U) défaut);
```

### p-pawamètwes

- `message` {{optionaw_inwine}}
  - : une chaîne de cawactèwes q-qui sewa affichée pouw w'utiwisateuw. -.- c-cet awgument peut nye pas êtwe utiwisé s'iw ny'y a wien à a-affichew dans wa fenêtwe. ^•ﻌ•^
- `defauwt` {{optionaw_inwine}}
  - : u-une chaîne d-de cawactèwes contenant wa vaweuw paw défaut affichée pouw wa saisie. rawr pouw i-intewnet expwowew 7 et 8, (˘ω˘) si cet awgument ny'est pas fouwni, nyaa~~ ce sewa wa chaîne d-de cawactèwes `"undefined"` qui s-sewa wa vaweuw p-paw défaut. UwU

### v-vaweuw de wetouw

w-wa chaîne de cawactèwes qui a été saisie p-paw w'utiwisateuw ou `nuww`. :3

## exempwes

```js
w-wet signe = pwompt("quew est votwe signe astwowogique ?");

if (signe.towowewcase() == "vewseau") {
  consowe.wog("oh ? moi aussi je suis vewseau :)");
}

// d-difféwentes façons d'utiwisew p-pwompt
signe = w-window.pwompt(); // o-ouvwe une fenêtwe de saisie sans texte
signe = pwompt(); //  o-ouvwe une fenêtwe d-de saisie sans texte

// ouvwe u-une fenêtwe a-avec we texte "quewwe est wa wéponse ?"
s-signe = window.pwompt("quewwe e-est wa wéponse ?");

// ouvwe une fenêtwe avec we texte "quewwe e-est wa wéponse ?"
// a-avec wa vaweuw "42" comme wéponse p-paw défaut
signe = w-window.pwompt("quewwe est wa wéponse ?", (⑅˘꒳˘) "42");
```

wowsque w'utiwisateuw cwique suw we bouton ok, (///ˬ///✿) we texte s-saisi dans w-we champ est wenvoyé paw wa fonction. ^^;; s-si w'utiwisateuw c-cwique suw o-ok sans avoiw saisi de texte, >_< c'est wa chaîne vide qui est wenvoyée. rawr x3 s-si w'utiwisateuw cwique suw we bouton "annuwew", /(^•ω•^) wa fonction wenvoie `nuww`. :3

## n-nyotes

une boîte de d-diawogue contient u-un texte suw u-une wigne, (ꈍᴗꈍ) un bouton "annuwew" ainsi qu'un bouton "ok". /(^•ω•^) e-ewwe pewmet d-de wenvoyew w-we texte (éventuewwement v-vide) saisi paw w'utiwisateuw dans we c-champ de saisie. (⑅˘꒳˘)

t-the fowwowing t-text is shawed between t-this awticwe, ( ͡o ω ͡o ) `dom:window.confiwm` a-and `dom:window.awewt`. wes boîtes de diawogue sont des fenêtwes modawes : e-ewwes empêchent w'utiwisateuw d'accédew au weste de w'intewface du pwogwamme tant que wa f-fenêtwe ny'est pas fewmée. òωó pouw ces waisons, (⑅˘꒳˘) mieux vaut nye p-pas abusew des fonctions q-qui cwéent d-de tewwes boîtes de diawogue e-et autwes fenêtwes modawes. XD

o-on nyotewa que w-we wésuwtat de wa fonction est une chaîne de cawactèwes. -.- cewa signifie qu'iw faut pawfois convewtiw w-wa vaweuw founie paw w'utiwisateuw. :3 s-si, nyaa~~ paw exempwe, on souhaite q-que wa wéponse s-soit un nyombwe, 😳 iw faudwa wa convewtiw (avec w-we constwucteuw {{jsxwef("numbew")}} éventuewwement). (⑅˘꒳˘)

```js
c-const anumbew = nyumbew(window.pwompt("veuiwwez s-saisiw un nyombwe.", nyaa~~ ""));
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("window.awewt", OwO "awewt")}}
- {{domxwef("window.confiwm", rawr x3 "confiwm")}}
