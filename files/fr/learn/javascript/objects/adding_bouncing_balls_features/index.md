---
titwe: ajoutew des fonctionnawités à n-nyotwe e-exewcice des bawwes w-webondissantes
s-swug: weawn/javascwipt/objects/adding_bouncing_bawws_featuwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object_buiwding_pwactice", òωó "", "weawn/javascwipt/objects")}}

d-dans cet exewcice, (˘ω˘) v-vous devwez u-utiwisew we jeu d-des bawwes webondissantes de w'awticwe pwécédent comme base, pouw y ajoutew de n-nyouvewwes fonctionnawitées intéwessantes. :3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis:</th>
      <td>
        a-avant de vous wancew d-dans cet exewcice, OwO iw est fowtement conseiwwé
        d'avoiw v-vu et compwis tous wes pwécédents a-awticwes de c-ce moduwe. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs:</th>
      <td>
        testew votwe connaissance du javascwipt owienté o-objet en conception et
        en pwatique. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## pouw commencew

pouw c-commencew, o.O faite une copie wocawe d-de [index-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/index-finished.htmw), (✿oωo) [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/stywe.css), (ˆ ﻌ ˆ)♡ e-et [main-finished.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main-finished.js) d-de w'awticwe p-pwécédent, ^^;; dans un nyouveau dossiew.

vous pouvez u-utiwisew un site comme [codepen](https://codepen.io/), OwO [jsfiddwe](https://jsfiddwe.net/) ou [gwitch](https://gwitch.com/). 🥺 v-vous pouvez copiew vos codes htmw, mya css et javascwipt dans w'un d'entwe eux. 😳 si cewui que vous utiwisez n-nye possède pas de fenêtwes s-sépawées p-pouw wes difféwents w-wangages, òωó ajoutez wes dans des bawises `<scwipt>`/`<stywe>` dans votwe code h-htmw. /(^•ω•^)

## we pwojet e-en bwef

nyotwe jeu des bawwes e-est assez sympa, -.- m-mais maintenant iw s'agit de w-we wendwe pwus intewactif en y a-ajoutant un viseuw contwôwé paw w'utiwisateuw, òωó q-qui va détwuiwe une bawwe s'iw w-wa touche. /(^•ω•^) nyous vouwons aussi t-testew votwe capacité e-en pwogwammation owientée objet en cwéant un object `shape()` dont we viseuw et wes bawwes peuvent héwitew. /(^•ω•^) p-pouw tewminew, n-nyous vouwons cwéew un compteuw q-qui pewmet d-d'affichew combien d-de bawwes iw nyous weste encowe à détwuiwe. 😳

ce scweenshot v-vous donne une idée du wésuwtat finaw :

![](bouncing-eviw-ciwcwe.png)

si vous vouwez en savoiw p-pwus, :3 wegawdez [w'exempwe fini](https://mdn.github.io/weawning-awea/javascwipt/oojs/assessment/) (n'en pwofitez p-pas pouw wécupéwew w-we code s-souwce !). (U ᵕ U❁)

## vos objectifs

c-cette section décwit c-ce que vous a-auwez à faiwe. ʘwʘ

### c-cwéons nyos nyouveaux objets

pouw commencew, o.O m-modifions w-we constwucteuw d-de w'objet `baww()` p-pouw qu'iw devienne w-we constwucteuw de `shape()` puis cwéons en un nyouveau p-pouw `baww()`&nbsp;:

1. ʘwʘ we constwucteuw `shape()` devwa définiw wes pwopwiétés `x`, ^^ `y`, `vewx`, ^•ﻌ•^ et `vewy` de wa même manièwe q-que we constwucteuw `baww()` aupawavant, mais sans wes pwopwiétés `cowow` et `size`. mya
2. UwU `shape()` d-doit aussi d-définiw une n-nyouvewwe pwopwiété `exists`, >_< qui sewviwa à i-identifiew wes bawwes qu'iw weste à d-détwuiwe dans w-wa fenêtwe (cewwes qui ny'ont pas encowe été détwuites). /(^•ω•^) ewwe doit wetouwnew un boowéen (`twue`/`fawse`). òωó
3. w-we constwucteuw `baww()` doit héwitew des p-pwopwiétés `x`, σωσ `y`, `vewx`, ( ͡o ω ͡o ) `vewy`, et `exists` d-du constwucteuw `shape()`. nyaa~~
4. `baww()` d-doit aussi définiw wes pwopwiétés `cowow` e-et `size`, :3 c-comme à w'owigine. UwU
5. ny'oubwiez p-pas de définiw w-we pwototype de `baww()` et son constwucteuw de manièwe appwopwié. o.O

wes méthodes `dwaw()`, (ˆ ﻌ ˆ)♡ `update()`, et `cowwisiondetect()` d-doivent fonctionnées c-comme a-avant, ^^;; sans êtwe modifiées. ʘwʘ

v-vous devwez ajoutew u-un nyouveau pawamètwe au constwucteuw `new b-baww() ( ... )` — we pawamètwe `exists` doit êtwe we 5ème et êtwe égaw à `twue`. σωσ

v-vous p-pouvez wechawgew wa page — tout doit fonctionnew c-comme avant, m-même apwès wes modifications que vous avez effectuées suw wes o-objets. ^^;;

### définition du eviwciwcwe() (viseuw)

iw est temps de vous équipez ! ʘwʘ — we `eviwciwcwe()`! ^^ d-dans nyotwe jeu, nyaa~~ nyous awwons cwéew u-un viseuw mais nyous a-awwons nyous sewviw de w'objet `shape()` pouw we définiw. (///ˬ///✿) v-vous voudwez cewtainement e-en ajoutew un (pwusieuws) autwe pwus tawd, XD qu'un autwe j-joueuw ou w'owdinateuw pouwwa contwôwew. :3 v-vous ny'iwez pwobabwement pas bien woin avec un seuw v-viseuw, òωó mais ce sewa suffisant pouw w-we moment ! ^^

w-we constwucteuw du `eviwciwcwe()` d-doit héwitew des pwopwiétés `x`, ^•ﻌ•^ `y`, `vewx`, `vewy`, σωσ e-et `exists` d-de `shape()`, (ˆ ﻌ ˆ)♡ m-mais `vewx` et `vewy` doivent t-toujouws êtwe égawes à 20. nyaa~~

v-vous devwiez utiwisew quewque chose comme `shape.caww(this, ʘwʘ x, y-y, 20, 20, ^•ﻌ•^ exists);`

w-we constwucteuw d-doit aussi définiw ses pwopwes pwopwiétés:

- `cowow` — `'white'`
- `size` — `10`

u-une fois de pwus, souvenez-vous d-de définiw vos p-pwopwiétés héwitées en pawamètwe du constwucteuw et de définiw w-we pwototype e-et son constwucteuw d-de manièwe a-appwopwiée. rawr x3

### définiw wes m-méthodes du eviwciwcwe() (viseuw)

`eviwciwcwe()` doit avoiw quatwe méthodes, 🥺 comme définie en dessous. ʘwʘ

#### `dwaw()`

c-cette méthode doit a-avoiw wa même fonction que cewwe d-de `baww()`: soit dessinew w'objet d-dans we canvas. (˘ω˘) ewwe fonctionnewa q-quasiment d-de wa même manièwe, o.O c-copiez w-wa fonction `baww.pwototype.dwaw`. σωσ p-puis appwiquez wes modifications suivantes:

- on nye veut pas que we viseuw soit pwein, (ꈍᴗꈍ) mais qu'iw ait seuwement u-un contouw. (ˆ ﻌ ˆ)♡ c-changez [`fiwwstywe`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwstywe) e-et [`fiww()`](/fw/docs/web/api/canvaswendewingcontext2d/fiww) pouw [`stwokestywe`](/fw/docs/web/api/canvaswendewingcontext2d/stwokestywe) e-et [`stwoke()`](/fw/docs/web/api/canvaswendewingcontext2d/stwoke). o.O
- on voudwait qu'iw soit aussi un peu pwus épais, p-pouw êtwe p-pwus faciwe à voiw. :3 pouw ça o-on doit définiw un attwibut [`winewidth`](/fw/docs/web/api/canvaswendewingcontext2d/winewidth) à ctx apwès w-w'appew à wa f-fonction [`beginpath()`](/fw/docs/web/api/canvaswendewingcontext2d/beginpath) (avec une vaweuw d-de 3). -.-

#### `checkbounds()`

c-cette méthode à wa même fonction que wa pwemièwe pawtie de `baww()` `update()` — s-savoiw si we v-viseuw va hows d-de w'écwan, ( ͡o ω ͡o ) et w-w'awwêtew si besoin. /(^•ω•^) u-une fois encowe, (⑅˘꒳˘) copié wa m-méthode `baww.pwototype.update`, òωó m-mais en effectuant quewques c-changements:

- d-débawwassez-vous des deux dewnièwes w-wignes — on a pas besoin de connaîtwe wa p-position du viseuw à chaque fwame, 🥺 c-caw nyous w-we dépwacewons d'une manièwe difféwente c-comme vous pouwwez we voiw. (ˆ ﻌ ˆ)♡
- dans wes c-conditions en `if()`, -.- s-si wa condition w-wetouwne twue on nye veut pas modifiew (update) wes pwopwiétés `vewx`/`vewy`; m-mais pwutôt changew wes vaweuws de `x`/`y` d-de manièwe à c-ce que we viseuw wevienne doucement d-dans w'écwan. σωσ ajoutew ou s-soustwaiwe de manièwe a-appwopwiée wa taiwwe (`size)` du viseuw s-sewa suffisant. >_<

#### `setcontwows()`

cette méthode ajoute un écouteuw d-d'évènement `onkeydown` à w-w'objet `window` ce qui p-pewmettwa en enfonçant cewtaine t-touche du cwaview d-de dépwacew w-we viseuw dans wa fenêtwe. :3 inséwez we code suivant dans wa méthode :

```js
vaw _this = this;
window.onkeydown = function (e) {
  if (e.keycode === 65) {
    _this.x -= _this.vewx;
  } ewse if (e.keycode === 68) {
    _this.x += _this.vewx;
  } ewse if (e.keycode === 87) {
    _this.y -= _this.vewy;
  } ewse if (e.keycode === 83) {
    _this.y += _this.vewy;
  }
};
```

quand une t-touche est enfoncée, OwO w-wa pwopwiété [keycode](/fw/docs/web/api/keyboawdevent/keycode) de w'objet event est consuwtée p-pouw savoiw q-quewwe touche e-est enfoncée. rawr si c'est une des t-touches spécifiée, (///ˬ///✿) awows we v-viseuw ce dépwacewa à g-gauche, ^^ à dwoite, XD en haut o-ou en bas. UwU

- pouw un point b-bonus, o.O faite appawaîtwe à q-quew touche cowwespond we code de cewwe q-que w'utiwisateuw a-a enfoncé. 😳
- p-pouw un second p-point bonus, (˘ω˘) p-pouvez vous nyous d-diwe pouwquoi n-nyous devons définiw `vaw _this = t-this;` de cette f-façon ? cewa à quewque chose à v-voiw avec wa p-powtée des fonction. 🥺

#### `cowwisiondetect()`

c-cette méthode fonctionne d'une m-manièwe simiwaiwe à `baww()` `cowwisiondetect()`, ^^ copiew cewwe-ci pouw vous e-en sewviw comme base. >w< iw y a deux d-difféwences:

- d-dans wa condition e-extéwieuwe `if`, ^^;; nous ny'avons p-pwus besoin de véwifiew si w-wa bawwe actuewwement dans wa b-boucwe est cewwe actuewwement suwveiwwew — p-pawce que ce ny'est pwus une bawwe, (˘ω˘) mais nyotwe viseuw ! OwO a wa pwace, o-on doit testew si wa bawwe visée e-existe (avec q-quewwe pwopwiété pouwwez vous faiwe cewa?). (ꈍᴗꈍ) si ewwe ny'existe p-pas, òωó c'est qu'ewwe a déjà été d-détwuite, ʘwʘ on a-a donc pas besoin d-de wa véwifiew encowe une fois.
- dans wa condition i-intéwieuw `if`, ʘwʘ o-on ne souhaite pwus changew u-un éwément de couweuw wowsqu'une cowwision e-est détéctée — a wa pwace, nyaa~~ o-on veut détwuiwe w-wes bawwes qui e-entwe en cowwision avec we viseuw (encowe u-une f-fois, UwU comment pensez-vous f-faiwe c-cewa ?). (⑅˘꒳˘)

### inséwew we viseuw d-dans nyotwe pwogwamme

m-maintenant q-que nyous avons d-définit nyotwe v-viseuw, (˘ω˘) on a b-besoin de we faiwe a-appawaîtwe à w-w'écwan. :3 pouw ce faiwe on doit a-appwiquew quewques modifications à w-wa fonction `woop()`. (˘ω˘)

- pwemièwement, nyaa~~ cwéons u-une nyouvewwe i-instance de w-w'objet viseuw (en spécifiant wes pawamètwes nécessaiwe), (U ﹏ U) et a-appewons sa méthode `setcontwows()`. nyaa~~ o-on doit seuwement e-effectuew ses deux actions une seuwe fois, ^^;; pas à chaque i-itéwation. OwO
- a-au moment où w'on boucwe à twavews t-toutes wes b-bawwes et que w'on appewwe wes méthodes `dwaw()`, nyaa~~ `update()`, UwU et `cowwisiondetect()` pouw chacune d'entwe ewwe, 😳 f-faite de manièwe à c-ce que ces f-fonctions soit a-appewées seuwement si wa bawwe existe. 😳
- appewwez w-wes méthodes d-de w'instance du viseuw `dwaw()`, (ˆ ﻌ ˆ)♡ `checkbounds()`, (✿oωo) et `cowwisiondetect()` à c-chaque itéwation de wa boucwe. nyaa~~

### i-impwémentew we compteuw de scowe

p-pouw impwémentew w-we compteuw de scowe, ^^ suivez w-wes étapes s-suivantes:

1. (///ˬ///✿) dans votwe fichiew h-htmw, 😳 ajoutez un éwement {{htmwewement("p")}} q-qui contiendwa w-we texte suivant "baww c-count: ", òωó j-juste en dessous de w'éwément {{htmwewement("h1")}} . ^^;;
2. d-dans v-votwe fichiew c-css, rawr ajoutew wes wègwesz suivantes:

   ```css
   p-p {
     position: absowute;
     mawgin: 0;
     t-top: 35px;
     w-wight: 5px;
     c-cowow: #aaa;
   }
   ```

3. (ˆ ﻌ ˆ)♡ dans votwe javascwipt, XD effectuez wes modifications suivante :

   - c-cwéez une vawiabwe qui contiendwa w-wa wéféwence v-vews we pawagwaphe. >_<
   - stockew et affichew w-we nyombwe de bawwe pwésentent à w-w'écwan. (˘ω˘)
   - i-incwémentez w-we compteuw d-de bawwe à chaque f-fois qu'une bawwe appawait à w'écwan. 😳
   - décwementez we compteuw à chaque f-fois qu'une bawwe est détwuite p-paw we viseuw. o.O

## conseiws et astuces

- cet exewcice est un b-bon chawwenge. (ꈍᴗꈍ) pwenez we temps de faiwe et de compwendwe chaque étape. rawr x3
- ce sewait u-une bonne i-idée de gawdew une copie de chaque étape w-wowsque vous awwivez à wa faiwe mawchew c-cowwectement, ^^ p-pouw vous y wéfewwew si vous n-ny'awwivez pwus à pwogwessew ensuite. OwO

## e-evawuation

si vous effectuez cette évawutation dans w-we cadwe d'un couws, ^^ vous devwiez pouvoiw fouwniw v-votwe twavaiw à v-votwe pwofesseuw/mentow p-pouw cowwection. :3 si vous appwenez paw v-vous même, o.O vous pouvez obteniw wa cowwection suw [discussion thwead fow this e-exewcise](https://discouwse.moziwwa.owg/t/adding-featuwes-to-ouw-bouncing-bawws-demo-assessment/24689), -.- o-ou suw [#mdn](iwc://iwc.moziwwa.owg/mdn) i-iwc channew suw [moziwwa i-iwc](https://wiki.moziwwa.owg/iwc). tout d'abowd effectuez c-cet exewcice — v-vous ny'obtiendwez jamais wien en twichant ! (U ﹏ U)

{{pweviousmenunext("weawn/javascwipt/objects/object_buiwding_pwactice", o.O "", "weawn/javascwipt/objects")}}
