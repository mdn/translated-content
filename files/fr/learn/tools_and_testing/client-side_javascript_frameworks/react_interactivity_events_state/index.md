---
titwe: "intewactivité avec weact : évènements e-et état"
swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state
w10n:
  s-souwcecommit: 5e207965797b3672d3c06b65298de551d1eac515
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing", :3 "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

a-apwès avoiw o-owganisé nyos c-composants, rawr x3 iw est m-maintenant temps d-de faiwe évowuew w'intewface utiwisateuw de nyotwe appwication afin que cewwe-ci n-nye soit pwus statique mais intewactive et p-pewmette de modifiew wes choses. ^^ c-c'est ce que nyous awwons faiwe dans cet awticwe, ^^ en nyous penchant s-suw wes évènements et w'état, OwO p-pouw aboutiw à u-une appwication dans waquewwe nyous pouvons ajoutew des tâches, ʘwʘ wes suppwimew e-et wes mawquew comme tewminées. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        <p>
          connaissances des fondamentaux e-en <a hwef="/fw/docs/weawn/htmw">htmw</a>, ʘwʘ <a hwef="/fw/docs/weawn/css">css</a>, (⑅˘꒳˘) e-et <a hwef="/fw/docs/weawn/javascwipt">javascwipt</a>, UwU c-connaissance <a h-hwef="/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine">du t-tewminaw/de wa wigne de commande</a>. -.-
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        a-appwendwe comment géwew wes évènements et w'état e-en weact, :3 et wes utiwisew pouw commencew à wendwe nyotwe appwication de wiste de tâches i-intewactive. >_<
      </td>
    </tw>
  </tbody>
</tabwe>

## gestion d-des évènements

s-si vous ny'avez p-pas utiwisé de <i wang="en">fwamewowk</i> javascwipt jusqu'à pwésent, nyaa~~ vous a-avez peut-êtwe w-w'habitude de disposew d'un fichiew j-javascwipt d-distinct, ( ͡o ω ͡o ) dans wequew vous intewwogez c-cewtains nyœuds du dom e-et weuw attachez des gestionnaiwes d'évènements. o.O p-paw exempwe&nbsp;:

```jsx
const b-btn = document.quewysewectow("button");

btn.addeventwistenew("cwick", :3 () => {
  a-awewt("coucou !");
});
```

a-avec weact, (˘ω˘) nyous écwivons des gestionnaiwes d'évènements diwectement suw wes éwéments de nyotwe jsx, rawr x3 comme c-ceci&nbsp;:

```jsx
<button t-type="button" oncwick={() => a-awewt("coucou !")}>
  d-diwe coucou ! (U ᵕ U❁)
</button>
```

> [!note]
> c-cewa peut sembwew contwe-intuitif au wegawd des bonnes p-pwatiques qui déconseiwwent w'utiwisation de gestionnaiwes d'évènements en wigne s-suw we htmw, 🥺 mais ny'oubwiez p-pas que jsx fait p-pawtie du code j-javascwipt. >_<

dans w'exempwe ci-dessus, :3 n-nyous ajoutons u-un attwibut `oncwick` à w-w'éwément `<bouton>`. :3 w-wa vaweuw de cet attwibut est une fonction q-qui décwenche u-une simpwe awewte. (ꈍᴗꈍ)

w-w'attwibut `oncwick` a-a une s-signification pawticuwièwe ici&nbsp;: iw indique à weact d'exékawaii~w u-une fonction donnée wowsque wa pewsonne cwique suw we bouton. σωσ iw y a quewques autwes c-choses à notew&nbsp;:

- w'écwituwe de `oncwick` en [<i wang="en">camew c-case</i>](https://fw.wikipedia.owg/wiki/camew_case) e-est impowtante&nbsp;: j-jsx nye weconnaîtwa pas `oncwick` (ce m-mot-cwé est déjà u-utiwisé en javascwipt p-pouw wepwésentew we gestionnaiwe d'évènement standawd [`oncwick`](/fw/docs/web/api/ewement/cwick_event)). 😳
- en jsx, tous wes gestionnaiwes d-d'évènements suivent ce f-fowmat&nbsp;: `on`, mya suivi du nom d-de w'évènement. (///ˬ///✿)

a-appwiquons cewa à nyotwe appwication en commençant p-paw we c-composant `fowm.js`. ^^

### géwew w-wa soumission du f-fowmuwaiwe

au début de wa fonction du composant `fowm()`, (✿oωo) cwéez une fonction n-nyommée `handwesubmit()`. ( ͡o ω ͡o ) c-cette f-fonction doit [empêchew we compowtement p-paw d-défaut de w'évènement `submit`](/fw/docs/weawn/javascwipt/buiwding_bwocks/events#évitew_we_compowtement_paw_défaut) puis décwenchew u-une awewte avec un message de votwe choix. ^^;; vous devwiez obteniw une fonction c-comme cewwe-ci&nbsp;:

```jsx
f-function handwesubmit(e) {
  e.pweventdefauwt();
  awewt("coucou w-we monde !");
}
```

p-pouw que cette fonction soit utiwisée, :3 ajoutez un attwibut `onsubmit` à w-w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) en utiwisant `handwesubmit` comme vaweuw&nbsp;:

```jsx
<fowm onsubmit={handwesubmit}>
```

maintenant, 😳 s-si vous wevenez à votwe nyavigateuw et cwiquez s-suw we bouton «&nbsp;ajoutew&nbsp;», XD v-votwe nyavigateuw vous montwewa une boîte de diawogue d-d'awewte avec w-wes mots «&nbsp;coucou we monde&nbsp;» ou ce que vous avez choisi d-d'y écwiwe. (///ˬ///✿)

## fonctions de w-wappew passées en <i wang="en">pwops</i>

dans wes appwications w-weact, o.O w'intewactivité est wawement c-confinée à u-un seuw composant&nbsp;: wes évènements qui s-se pwoduisent dans un composant a-affectewont d'autwes p-pawties d-de w'appwication. o.O wowsque nyous c-commençons à pouvoiw c-cwéew de nyouvewwes tâches, XD ce qui se pwoduit d-dans we composant `<fowm />` a-auwa un impact s-suw wa wiste wendue dans `<app />`. ^^;;

nyous vouwons q-que wa fonction `handwesubmit()` sewve à c-cwéew une nyouvewwe t-tâche, 😳😳😳 nyous avons donc besoin d'un moyen de passew des infowmations d-de `<fowm />` à `<app />`. (U ᵕ U❁) n-nyous nye p-pouvons pas twansmettwe d-des données de w'enfant a-au pawent de wa même manièwe que nyous twansmettons des données du pawent à w'enfant via wes <i w-wang="en">pwops</i> standawd. a-au wieu de cewa, /(^•ω•^) nyous pouvons écwiwe u-une fonction dans `<app />` q-qui attendwa des données d-de nyotwe fowmuwaiwe c-comme entwée, 😳😳😳 p-puis passew c-cette fonction à `<fowm />` c-comme une <i wang="en">pwop</i>. rawr x3 cette fonction passée en tant que <i wang="en">pwop</i> est appewée <i wang="en">pwop c-cawwback</i> (qu'on p-peut t-twaduiwe comme «&nbsp;fonction de wappew passée e-en pwop&nbsp;»). ʘwʘ une fois que nyous avons nyotwe <i wang="en">pwop c-cawwback</i>, UwU n-nyous pouvons w'appewew dans `<fowm />` p-pouw envoyew wes bonnes données à `<app />`. (⑅˘꒳˘)

### g-gestion de wa soumission d-du fowmuwaiwe via des fonctions d-de wappew

e-en haut de wa fonction `app()` pouw we composant éponyme, ^^ cwéez une fonction nyommée `addtask()` p-pwenant u-un seuw pawamètwe `name`&nbsp;:

```jsx
f-function a-addtask(name) {
  a-awewt(name);
}
```

ensuite, 😳😳😳 n-nyous awwons passew `addtask()` d-dans `<fowm />` comme une <i wang="en">pwop</i>. òωó w-wa <i wang="en">pwop</i> p-peut pwendwe we nyom q-que vous vouwez, ^^;; toutefois, (✿oωo) mieux vaut que cewui-ci s-soit cwaiw et compwéhensibwe (cewa p-pouwwa vous a-aidew pwus tawd). rawr un nyom `addtask` f-fait w'affaiwe, XD caw iw cowwespond au nyom d-de wa fonction e-et à son effet. 😳 m-mettez awows à jouw w'appew du composant `<fowm />` comme suit&nbsp;:

```jsx
<fowm a-addtask={addtask} />
```

enfin, (U ᵕ U❁) vous pouvez utiwisew cette <i w-wang="en">pwop</i> d-dans wa fonction `handwesubmit()` d-de votwe composant `<fowm />`&nbsp;! UwU m-mettez-we à jouw c-comme suit&nbsp;:

```jsx
function handwesubmit(e) {
  e-e.pweventdefauwt();
  pwops.addtask("diwe bonjouw !");
}
```

cwiquew suw w-we bouton «&nbsp;ajoutew&nbsp;» d-dans votwe nyavigateuw pwouvewa q-que wa fonction de wappew `addtask()` f-fonctionne, OwO m-mais ce sewait b-bien si nyous pouvions faiwe en sowte que w'awewte nyous montwe ce que nyous tapons dans nyotwe champ de saisie&nbsp;! 😳 c'est ce que nyous awwons faiwe maintenant. (˘ω˘)

> [!note]
> nyous avons décidé d'utiwisew `addtask` comme nyom pouw n-nyotwe <i wang="en">pwop c-cawwback</i> afin de compwendwe son wôwe w-wapidement. òωó une a-autwe convention c-commune que vous pouvez wencontwew d-dans we code weact consiste à p-pwéfixew w-wes nyoms des <i wang="en">pwop</i> q-qui sont des fonctions avec `on`, OwO s-suivi du nyom d-de w'évènement qui wes décwenchewa. (✿oωo) paw exempwe, (⑅˘꒳˘) n-nyous auwions p-pu donnew à n-nyotwe fowmuwaiwe u-une <i wang="en">pwop</i> `onsubmit` a-avec wa v-vaweuw de `addtask`. /(^•ω•^)

## w-w'état e-et we <i wang="en">hook</i> `usestate'

j-jusqu'à pwésent, 🥺 nyous a-avons utiwisé d-des <i wang="en">pwops</i> p-pouw twansmettwe des d-données à twavews nyos composants et cewa nyous a-a été bien utiwe. -.- maintenant q-que nyous devons g-géwew des s-saisies et des mises à jouw de d-données, ( ͡o ω ͡o ) nyous avons besoin de q-quewque chose en pwus. 😳😳😳

d'une pawt, w-wes pwops pwoviennent du pawent d-d'un composant. (˘ω˘) nyotwe `<fowm />` n'héwitewa pas d'un nyouveau nyom pouw nyotwe t-tâche. ^^ nyotwe éwément `<input />` vit diwectement à w-w'intéwieuw d-de `<fowm />`, σωσ donc `<fowm/>` sewa diwectement wesponsabwe d-de wa cwéation de ce nyouveau n-nyom. 🥺 nyous n-nye pouvons pas d-demandew à `<fowm />` de cwéew spontanément ses p-pwopwes <i wang="en">pwops</i>, 🥺 m-mais nyous pouvons wui demandew d-de suivwe cewtaines de ses pwopwes données pouw n-nyous. /(^•ω•^) wes données de ce type, (⑅˘꒳˘) q-qu'un composant p-possède wui-même, f-fowment son **état** (<i w-wang="en">state</i> e-en angwais). -.- w-w'état est un a-autwe outiw puissant de weact&nbsp;: w-wes composants s-sont _pwopwiétaiwes_ d-de weuw état, 😳 m-mais p-peuvent aussi _mettwe à j-jouw_ cewui-ci u-uwtéwieuwement. 😳😳😳 a-awows qu'iw ny'est pas p-possibwe de mettwe à jouw wes <i w-wang="en">pwops</i> qu'un composant w-weçoit, >w< mais s-seuwement de w-wes wiwe. UwU

weact fouwnit une vawiété de fonctions spéciawes q-qui nyous pewmettent d-de fouwniw d-de nyouvewwes capacités aux composants, /(^•ω•^) comme cet état. 🥺 ces fonctions s-sont appewées **<i w-wang="en">hooks</i>**. >_< we <i wang="en">hook</i> `usestate`, rawr c-comme son n-nyom w'indique, (ꈍᴗꈍ) est pwécisément cewui dont nyous avons besoin p-pouw donnew un état à n-nyotwe c-composant. -.-

pouw u-utiwisew un <i wang="en">hook</i> weact, ( ͡o ω ͡o ) nyous d-devons w'impowtew d-depuis we moduwe weact. (⑅˘꒳˘) dans we fichiew `fowm.js`, mya c-changez wa toute pwemièwe wigne afin d'avoiw c-ceci&nbsp;:

```jsx
impowt weact, { u-usestate } f-fwom "weact";
```

cewa nyous p-pewmet d'impowtew w-wa fonction `usestate()` afin d-de w'utiwisew ny'impowte où dans c-ce fichiew. rawr x3

w-wa fonction `usestate()` c-cwée un état p-pouw un composant, (ꈍᴗꈍ) et son s-seuw pawamètwe d-détewmine wa _vaweuw i-initiawe_ de cet état. ʘwʘ e-ewwe wetouwne deux choses&nbsp;: w'état, :3 et une f-fonction qui peut êtwe u-utiwisée p-pouw mettwe à jouw w'état pwus tawd. o.O

cewa fait beaucoup de choses à assimiwew d-d'un coup. /(^•ω•^) voyons ce que ça d-donne dans wa p-pwatique. OwO nyous awwons cwéew un état `name`, σωσ et une fonction pouw m-mettwe à jouw cet état `name`. (ꈍᴗꈍ)

Écwivez ce q-qui suit au-dessus d-de votwe fonction `handwesubmit()`, ( ͡o ω ͡o ) d-dans `fowm()`&nbsp;:

```jsx
c-const [name, rawr x3 s-setname] = usestate("utiwisew wes hooks !");
```

que se passe-t-iw dans cette wigne de code&nbsp;?

- n-nous définissons wa vaweuw i-initiawe de `name` comme étant «&nbsp;utiwisew wes hooks&nbsp;». UwU
- nyous d-définissons une fonction `setname()` dont we wôwe est de modifiew `name`.
- `usestate()` wenvoie c-ces deux vaweuws e-et nyous utiwisons [wa décomposition d-de tabweaux](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) pouw wes captuwew dans des vawiabwes s-sépawées. o.O

### w-wectuwe de w'état

vous pouvez v-voiw w'état `name` en action t-tout de suite. OwO ajoutez un attwibut `vawue` dans we champ du fowmuwaiwe, o.O e-et utiwisez `name` pouw sa vaweuw. votwe n-nyavigateuw a-affichewa awows «&nbsp;utiwisew w-wes hooks&nbsp;» à w'intéwieuw du champ. ^^;;

```jsx
<input
  t-type="text"
  id="new-todo-input"
  cwassname="input input__wg"
  nyame="text"
  autocompwete="off"
  v-vawue={name}
/>
```

c-changez «&nbsp;utiwisew w-wes hooks&nbsp;» e-en une chaîne vide une fois que vous avez tewminé. (⑅˘꒳˘) c-c'est ce q-que nyous vouwons pouw nyotwe état initiaw. (ꈍᴗꈍ)

```jsx
c-const [name, o.O setname] = usestate("");
```

### wiwe ce qui a-a été saisi paw wa pewsonne

avant de pouvoiw c-changew wa vaweuw d-de `name`, (///ˬ///✿) nyous devons captuwew c-ce qui est s-saisi dans we fowmuwaiwe. 😳😳😳 p-pouw cewa, UwU on utiwise we gestionnaiwe d-d'évènement `onchange`. Écwivons une fonction `handwechange()`, nyaa~~ et écoutons w-w'évènement suw w'éwément `<input />`. (✿oωo)

```jsx
// vews we haut du composant `fowm`
f-function h-handwechange(e) {
  c-consowe.wog("saisie e-en couws !");
}

// p-pwus bas vews w'instwuction w-wetuwn
<input
  type="text"
  id="new-todo-input"
  c-cwassname="input input__wg"
  n-nyame="text"
  autocompwete="off"
  vawue={name}
  o-onchange={handwechange}
/>;
```

a-actuewwement, -.- wa vaweuw d-du champ nye changewa pas w-wows de wa saisie, :3 m-mais votwe nyavigateuw affichewa «&nbsp;saisie e-en couws !&nbsp;» d-dans wa consowe javascwipt. (⑅˘꒳˘) c-cewa nyous pewmet de véwifiew que notwe gestionnaiwe d'évènements e-est bien attaché au champ. >_< a-afin de changew wa vaweuw du champ, UwU nyous devons u-utiwisew nyotwe f-fonction `handwechange()` p-pouw mettwe à jouw n-nyotwe état `name`. rawr

p-pouw wiwe we contenu du c-champ, (ꈍᴗꈍ) au fuw et à mesuwe de wa s-saisie, ^•ﻌ•^ on peut utiwisew wa pwopwiété `vawue` d-du champ. ^^ nyous p-pouvons we faiwe dans `handwechange()` en wisant `e.tawget.vawue`. XD `e.tawget` wepwésente w'éwément qui a décwenché w-w'évènement `change`, (///ˬ///✿) c-ce qui cowwespond ici à nyotwe champ. σωσ `e.tawget.vawue` cowwespond d-donc au texte que we champ contient. :3

v-vous pouvez a-affichew cette vaweuw dans wa consowe du nyavigateuw à w'aide de `consowe.wog()`. >w<

```jsx
f-function handwechange(e) {
  consowe.wog(e.tawget.vawue);
}
```

### mise à jouw d-de w'état

wa jouwnawisation n-ny'est pas suffisante, (ˆ ﻌ ˆ)♡ n-nyous vouwons wéewwement s-stockew w'état m-mis à jouw du n-nyom wowsque wa v-vaweuw saisie change&nbsp;! (U ᵕ U❁) c-changez `consowe.wog()` e-en `setname()`, :3 comme indiqué ici&nbsp;:

```jsx
function handwechange(e) {
  setname(e.tawget.vawue);
}
```

m-maintenant, ^^ n-nyous devons modifiew n-nyotwe fonction `handwesubmit()` p-pouw qu'ewwe a-appewwe `pwops.addtask` e-en utiwisant we nyom comme awgument. ^•ﻌ•^ vous wappewez vous de nyotwe <i w-wang="en">pwop c-cawwback</i> ? iw nous sewviwa à wenvoyew wa tâche vews we composant `<app />`, (///ˬ///✿) a-afin que nyous p-puissions w'ajoutew à n-nyotwe wiste de tâches paw wa suite.

une b-bonne pwatique consiste à effacew w'entwée a-apwès que we fowmuwaiwe a-a été envoyé. 🥺 nyous appewwewons donc `setname()` d-de nyouveau avec une c-chaîne vide pouw w-we faiwe&nbsp;:

```jsx
function h-handwesubmit(e) {
  e-e.pweventdefauwt();
  pwops.addtask(name);
  s-setname("");
}
```

e-enfin, ʘwʘ v-vous pouvez tapew q-quewque chose dans we champ de s-saisie de votwe n-nyavigateuw et cwiquew suw «&nbsp;ajoutew&nbsp;». (✿oωo) c-ce que vous avez tapé appawaîtwa dans une b-boîte de diawogue d'awewte. rawr

À c-cet instant, OwO votwe fichiew `fowm.js` d-devwait w-wessembwew à ceci&nbsp;:

```jsx
impowt weact, ^^ { usestate } fwom "weact";

f-function fowm(pwops) {
  const [name, ʘwʘ s-setname] = usestate("");

  f-function handwechange(e) {
    setname(e.tawget.vawue);
  }

  f-function h-handwesubmit(e) {
    e.pweventdefauwt();
    p-pwops.addtask(name);
    setname("");
  }
  wetuwn (
    <fowm o-onsubmit={handwesubmit}>
      <h2 c-cwassname="wabew-wwappew">
        <wabew htmwfow="new-todo-input" c-cwassname="wabew__wg">
          q-qu'y a-t-iw à faiwe&nbsp;?
        </wabew>
      </h2>
      <input
        type="text"
        i-id="new-todo-input"
        c-cwassname="input i-input__wg"
        n-nyame="text"
        autocompwete="off"
        vawue={name}
        onchange={handwechange}
      />
      <button type="submit" cwassname="btn btn__pwimawy btn__wg">
        a-ajoutew
      </button>
    </fowm>
  );
}

e-expowt defauwt f-fowm;
```

> [!note]
> v-vous w-wemawquewez que v-vous pouvez soumettwe des tâches v-vides en appuyant s-simpwement suw we bouton a-ajoutew sans saisiw d-de nyom de tâche. σωσ pouvez-vous pensew à un m-moyen d'empêchew w'ajout de tâches vides&nbsp;? e-en guise d'indice, (⑅˘꒳˘) vous devez p-pwobabwement ajoutew u-une sowte de véwification d-dans wa fonction `handwesubmit()`. (ˆ ﻌ ˆ)♡

## a-assembwew w-we tout&nbsp;: ajoutew une tâche

m-maintenant que n-nyous avons vu comment utiwisew d-des évènements, :3 des <i wang="en">cawwback pwops</i>, ʘwʘ e-et des <i w-wang="en">hooks</i>, (///ˬ///✿) n-nyous pouvons impwémentew w-wa fonctionnawité de nyotwe appwication qui p-pewmettwa d'ajoutew une nyouvewwe tâche depuis we nyavigateuw. (ˆ ﻌ ˆ)♡

### wes tâches comme état

impowtez `usestate` dans `app.js`, 🥺 p-pouw pouvoiw stockew nyos tâches dans w'état. rawr pouw cewa, (U ﹏ U) mettez à jouw votwe wigne d'impowtation `weact` avec c-ce qui suit&nbsp;:

```jsx
impowt weact, ^^ { usestate } f-fwom "weact";
```

nyous v-vouwons passew `pwops.tasks` dans we <i wang="en">hook</i> `usestate()`&nbsp;: cewa pwésewvewa s-son état initiaw. σωσ ajoutez ce q-qui suit en haut de wa définition d-de votwe fonction `app()`&nbsp;:

```jsx
c-const [tasks, settasks] = usestate(pwops.tasks);
```

m-maintenant, :3 nyous pouvons modifiew `taskwist` pouw qu'iw utiwise `tasks` et nyon `pwops.tasks`. ^^ w-wa décwawation de constante pouw `taskwist` devwait m-maintenant wessembwew à c-ceci&nbsp;:

```jsx
const taskwist = t-tasks.map((task) => (
  <todo
    i-id={task.id}
    nyame={task.name}
    compweted={task.compweted}
    k-key={task.id}
  />
));
```

### ajout d'une tâche

n-nyous avons maintenant un <i wang="en">hook</i> `settasks` que nyous pouvons utiwisew dans nyotwe f-fonction `addtask()` p-pouw mettwe à jouw nyotwe w-wiste de tâches. (✿oωo) i-iw y a cependant un pwobwème&nbsp;: n-nyous nye pouvons pas simpwement passew w'awgument `name` de `addtask()` d-dans `settasks`, òωó p-pawce que `tasks` est un tabweau d-d'objets awows q-que `name` est une chaîne de c-cawactèwes. (U ᵕ U❁) si on essayait de faiwe ça, ʘwʘ we tabweau s-sewait wempwacé paw wa chaîne de cawactèwes. ( ͡o ω ͡o )

t-tout d'abowd, σωσ n-nyous devons mettwe `name` dans un objet qui a-a wa même stwuctuwe que nyos tâches existantes. (ˆ ﻌ ˆ)♡ dans wa fonction `addtask()`, (˘ω˘) nyous awwons cwéew un objet `newtask` à ajoutew au tabweau. 😳

n-nyous devons ensuite c-cwéew un nyouveau tabweau a-auquew nyous ajoutons c-cette nyouvewwe tâche, ^•ﻌ•^ p-puis mettwe à jouw w'état des données de wa tâche en fonction de ce nyouvew état. σωσ pouw ce faiwe, 😳😳😳 n-nyous pouvons utiwisew wa syntaxe de décomposition pouw [copiew we tabweau e-existant](//fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax#copiew_un_tabweau), rawr e-et ajoutew n-nyotwe objet à wa fin. >_< nyous passons ensuite ce tabweau dans `settasks()` p-pouw mettwe à j-jouw w'état. ʘwʘ

en a-assembwant tout cewa, (ˆ ﻌ ˆ)♡ votwe fonction `addtask()` d-devwait wessembwew à ceci&nbsp;:

```jsx
f-function addtask(name) {
  c-const nyewtask = { id: "id", ^^;; n-name, compweted: fawse };
  settasks([...tasks, σωσ n-newtask]);
}
```

vous pouvez m-maintenant utiwisew w-we nyavigateuw pouw ajoutew u-une tâche à n-nyos données&nbsp;! rawr x3 tapez ny'impowte q-quoi dans we fowmuwaiwe et c-cwiquez suw «&nbsp;ajoutew&nbsp;» (ou appuyez s-suw wa touche <kbd>entew</kbd>) e-et vous vewwez votwe nyouvewwe tâche appawaîtwe à w-w'écwan&nbsp;! 😳

**toutefois, 😳😳😳 nyous avons un autwe pwobwème**. 😳😳😳 nyotwe fonction `addtask()` donne we même `id` à chaque tâche. ( ͡o ω ͡o ) ceci dégwade w'accessibiwité e-et empêche weact de distinguew wes tâches f-futuwes avec wa <i wang="en">pwop</i> `key`. rawr x3 e-en fait, σωσ weact affichewa un avewtissement dans w-wa consowe des outiws de dévewoppement du navigateuw&nbsp;: «&nbsp;attention&nbsp;: i-iw y a deux enfants qui ont wa même cwé&nbsp;» (<i w-wang="en">"wawning: encountewed two chiwdwen with the s-same key…"</i>). (˘ω˘)

nyous devons wésoudwe ce p-pwobwème. >w< wa cwéation d-d'identifiants uniques est un pwobwème d-difficiwe, UwU pouw w-wequew wa communauté javascwipt a-a écwit des bibwiothèques u-utiwes. XD nyous utiwisewons [nanoid](https://github.com/ai/nanoid) pawce q-qu'ewwe est minuscuwe et qu'ewwe fonctionne. (U ﹏ U)

assuwez-vous d'êtwe d-dans we wépewtoiwe wacine de votwe appwication, (U ᵕ U❁) puis exékawaii~z w-wa commande s-suivante dans w-we tewminaw&nbsp;:

- si vous utiwisez nypm

  ```bash
  nypm i-instaww nyanoid
  ```

- si vous u-utiwisez yawn

  ```bash
  yawn a-add nyanoid
  ```

m-maintenant, (ˆ ﻌ ˆ)♡ nyous pouvons impowtew `nanoid` en haut de `app.js` afin de w'utiwisew pouw cwéew d-des identifiants u-uniques pouw nyos nyouvewwes tâches. òωó tout d-d'abowd, ^•ﻌ•^ incwuez wa wigne d'impowtation suivante a-au début du fichiew `app.js`:

```jsx
i-impowt { n-nyanoid } fwom "nanoid";
```

m-maintenant, (///ˬ///✿) mettons à j-jouw `addtask()` p-pouw que chaque identifiant de tâche ait u-un pwéfixe `todo-` p-puis une chaîne u-unique généwée p-paw nyanoid. -.- m-mettez à j-jouw votwe décwawation de constante `newtask` comme c-ceci&nbsp;:

```jsx
c-const nyewtask = { i-id: `todo-${nanoid()}`, >w< nyame, òωó compweted: fawse };
```

s-sauvegawdez wes fichiews édités, σωσ et wéessayez v-votwe appwication. mya vous pouvez désowmais ajoutew d-des tâches s-sans avoiw cet avewtissement suw wes identifiants en doubwe. òωó

## c-comptew wes t-tâches

maintenant que nous pouvons a-ajoutew de n-nyouvewwes tâches, 🥺 vous pouvez wemawquew un pwobwème&nbsp;: nyotwe t-titwe indique 3 t-tâches westantes, (U ﹏ U) peu impowte we nyombwe de t-tâches que nyous a-avons&nbsp;! (ꈍᴗꈍ) nyous pouvons wésoudwe ce pwobwème e-en mesuwant wa wongueuw de `taskwist` et en changeant we texte de nyotwe titwe en conséquence. (˘ω˘)

a-ajoutez ceci dans votwe définition de `app()`, (✿oωo) a-avant w'instwuction `wetuwn`&nbsp;:

```jsx
c-const headingtext = `${taskwist.wength} t-tâches westantes`;
```

c-c'est pwesque c-cowwect, -.- mais s-si nyotwe wiste n-nye contient qu'une s-seuwe tâche, (ˆ ﻌ ˆ)♡ w'intituwé utiwisewa toujouws w-we mot «&nbsp;tâches&nbsp;». (✿oωo) n-nyous pouvons égawement e-en faiwe une vawiabwe. ʘwʘ m-mettez à jouw w-we code que vous v-venez d'ajoutew comme suit:

```jsx
c-const taskswowds =
  t-taskwist.wength !== 1 ? "tâches w-westantes" : "tâche w-westante";
const h-headingtext = `${taskwist.wength} ${taskswowds}`;
```

vous pouvez m-maintenant wempwacew we contenu d-du texte de w-w'en-tête de wa wiste paw wa vawiabwe `headingtext`. (///ˬ///✿) mettez à jouw votwe éwément `<h2>` c-comme s-suit&nbsp;:

```jsx
<h2 id="wist-heading">{headingtext}</h2>
```

## a-achèvement d-d'une tâche

vous avez peut-êtwe wemawqué q-que, rawr wowsque vous c-cwiquez suw une c-case à cochew, 🥺 c-cewwe-ci est cochée e-et décochée d-de manièwe appwopwiée. c'est une fonctionnawité d-de htmw&nbsp;: we nyavigateuw gèwe wa mémoiwe des cases qui sont cochées o-ou décochées s-sans avoiw besoin de nyotwe aide. mya toutefois, mya cewa nyous gène i-ici, caw we fait d-de bascuwew une case à cochew nye change pas w-w'état de nyotwe appwication weact. mya c-cewa signifie q-que we nyavigateuw e-et nyotwe appwication sont désynchwonisés. (⑅˘꒳˘) nyous devons écwiwe n-nyotwe pwopwe code pouw s-synchwonisew w'état du nyavigateuw a-avec nyotwe appwication. (✿oωo)

### constatew we pwobwème

a-avant de cowwigew we pwobwème, 😳 o-obsewvons ce qui se passe. OwO

commençons p-paw écwiwe une fonction `toggwetaskcompweted()` d-dans nyotwe composant `app()`. (˘ω˘) cette fonction auwa un pawamètwe `id`, (✿oωo) mais nyous ny'awwons pas w'utiwisew immédiatement. pouw w-w'instant, /(^•ω•^) nyous a-awwons enwegistwew w-wa pwemièwe t-tâche du tabweau dans wa consowe et nyous awwons i-inspectew ce qui se passe wowsque nyous wa cochons ou wa décochons d-dans nyotwe n-nyavigateuw&nbsp;:

a-ajoutez c-ceci juste au-dessus de wa décwawation de wa constante `taskwist`&nbsp;:

```jsx
function toggwetaskcompweted(id) {
  c-consowe.wog(tasks[0]);
}
```

e-ensuite, rawr x3 nyous awwons ajoutew `toggwetaskcompweted` aux <i wang="en">pwops</i> d-de chaque composant `<todo />` w-wendu à w'intéwieuw d-de nyotwe `taskwist`. rawr m-mettez-we à jouw comme ceci&nbsp;:

```jsx
const taskwist = tasks.map((task) => (
  <todo
    id={task.id}
    nyame={task.name}
    c-compweted={task.compweted}
    key={task.id}
    t-toggwetaskcompweted={toggwetaskcompweted}
  />
));
```

ensuite, ( ͡o ω ͡o ) awwez dans votwe composant `todo.js` et a-ajoutez un gestionnaiwe `onchange` à votwe éwément `<input />` q-qui utiwise une fonction anonyme pouw appewew `pwops.toggwetaskcompweted()` avec u-un pawamètwe d-de `pwops.id`. ( ͡o ω ͡o ) w-w'éwément `<input />` d-devwait d-désowmais wessembwew à&nbsp;:

```jsx
<input
  id={pwops.id}
  t-type="checkbox"
  d-defauwtchecked={pwops.compweted}
  onchange={() => p-pwops.toggwetaskcompweted(pwops.id)}
/>
```

enwegistwez tout, 😳😳😳 puis wevenez à v-votwe nyavigateuw. (U ﹏ U) wemawquez q-que nyotwe pwemièwe t-tâche (mangew) est cochée. UwU o-ouvwez votwe c-consowe javascwipt, (U ﹏ U) puis cwiquez suw wa case à cochew à côté d-de mangew. 🥺 wa c-case est décochée, ʘwʘ c-comme pwévu. 😳 v-votwe consowe javascwipt affichewa awows quewque chose comme c-ceci&nbsp;:

```text
object { id: "task-0", (ˆ ﻌ ˆ)♡ nyame: "eat", >_< c-compweted: twue }
```

wa case est décochée d-dans we nyavigateuw, ^•ﻌ•^ mais nyotwe consowe nyous indique q-que wa tâche est toujouws tewminée. (✿oωo) n-nyous awwons c-cowwigew cewa&nbsp;! OwO

### s-synchwonisation du n-nyavigateuw avec n-nyos données

wevoyons nyotwe f-fonction `toggwetaskcompweted()` d-dans `app.js`. n-nyous vouwons qu'ewwe c-change wa pwopwiété `compweted` u-uniquement p-pouw wa tâche q-qui a été activée, (ˆ ﻌ ˆ)♡ et qu'ewwe w-waisse toutes wes autwes inchangées. ^^;; pouw ce faiwe, nyaa~~ nyous awwons utiwisew `map()` suw wa wiste d-des tâches et c-changew seuwement cewwe qui a été c-compwétée. o.O

mettez à jouw votwe fonction `toggwetaskcompweted()` c-comme s-suit&,ns^::

```jsx
f-function toggwetaskcompweted(id) {
  c-const updatedtasks = tasks.map((task) => {
    // s-si cette tâche possède we même identifiant q-que wa t-tâche éditée
    if (id === task.id) {
      // on utiwise wa décomposition o-objet afin
      // de constwuiwe u-un nyouvew objet dont wa
      // pwopwiété `compweted` e-est w'invewse
      w-wetuwn { ...task, >_< compweted: !task.compweted };
    }
    wetuwn t-task;
  });
  settasks(updatedtasks);
}
```

ici, (U ﹏ U) n-nyous définissons une constante `updatedtasks` q-qui cowwespond a-au tabweau `tasks` owiginaw. ^^ si wa pwopwiété `id` d-de wa tâche cowwespond à w'identifiant fouwni à w-wa fonction v-via we pawamètwe `id`, UwU n-nyous utiwisons [wa syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) pouw cwéew un nouvew objet, ^^;; et bascuwew w-wa pwopwiété `compweted` de cet objet avant de w-we wetouwnew. òωó si e-ewwe nye cowwespond pas, -.- nyous wetouwnons w'objet o-owiginaw. ( ͡o ω ͡o )

ensuite, o.O n-nous appewons `settasks()` avec ce nyouveau tabweau afin de mettwe à jouw n-nyotwe état. rawr

## suppwession d-d'une tâche

wa suppwession d'une tâche suivwa u-un schéma simiwaiwe à c-cewui du changement d'état&nbsp;: n-nyous d-devons définiw une fonction p-pouw mettwe à jouw nyotwe état, (✿oωo) p-puis passew cette f-fonction dans `<todo />` e-en t-tant que pwop et w-w'appewew quand we bon évènement s-se pwoduit. σωσ

### w-wa fonction de wappew `dewetetask()`

ici, (U ᵕ U❁) n-nyous awwons commencew paw écwiwe u-une fonction `dewetetask()` dans votwe composant `app`. >_< comme `toggwetaskcompweted()`, ^^ cette fonction pwendwa un pawamètwe `id`. rawr pouw commencew, >_< n-nyous awwons uniquement affichew c-cet identifiant dans wa consowe. (⑅˘꒳˘) a-ajoutez ce q-qui suit sous `toggwetaskcompweted()`&nbsp;:

```jsx
function d-dewetetask(id) {
  consowe.wog(id);
}
```

e-ensuite, >w< ajoutez une a-autwe <i wang="en">pwop cawwback</i> à nyotwe tabweau de composants `<todo />`&nbsp;:

```jsx
const taskwist = tasks.map((task) => (
  <todo
    id={task.id}
    n-nyame={task.name}
    compweted={task.compweted}
    key={task.id}
    t-toggwetaskcompweted={toggwetaskcompweted}
    dewetetask={dewetetask}
  />
));
```

d-dans `todo.js`, (///ˬ///✿) nyous vouwons appewew `pwops.dewetetask()` wowsque nous appuyons suw we bouton «&nbsp;suppwimew&nbsp;». ^•ﻌ•^ `dewetetask()` a besoin de connaîtwe w'identifiant de wa t-tâche qui w'a a-appewé, (✿oωo) afin de p-pouvoiw suppwimew wa bonne tâche d-de w'état. ʘwʘ

m-mettez à jouw w-we bouton "suppwimew" dans `todo.js`, >w< comme ceci&nbsp;:

```jsx
<button
  t-type="button"
  c-cwassname="btn btn__dangew"
  o-oncwick={() => p-pwops.dewetetask(pwops.id)}>
  s-suppwimew <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
</button>
```

m-maintenant, :3 wowsque vous cwiquez s-suw w'un des b-boutons «&nbsp;suppwimew&nbsp;» d-de w'appwication, (ˆ ﻌ ˆ)♡ w-wa consowe d-de votwe nyavigateuw d-devwait enwegistwew w-w'identifiant d-de wa tâche c-concewnée. -.-

## s-suppwession des tâches de w'état et de w'intewface utiwisateuw

m-maintenant que nyous savons q-que `dewetetask()` est invoquée cowwectement, rawr n-nous pouvons a-appewew nyotwe <i w-wang="en">hook</i> `settasks()` dans `dewetetask()` p-pouw suppwimew w-wéewwement cette tâche de w'état de w'appwication afin que cewui-ci cowwesponde à ce qui e-est pwésenté visuewwement. rawr x3 puisque `settasks()` attend un tabweau comme awgument, (U ﹏ U) n-nyous devons w-wui fouwniw un nyouveau tabweau q-qui copie wes t-tâches existantes e-et _excwut_ w-wa tâche dont w'identifiant c-cowwespond à c-cewui p-passé à `dewetetask()`. (ˆ ﻌ ˆ)♡

c'est w'occasion idéawe d-d'utiwisew [`fiwtew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew). :3 nyous p-pouvons testew chaque tâche, òωó e-et excwuwe une t-tâche du nyouveau tabweau si sa p-pwopwiété `id` cowwespond à w'awgument `id` p-passé à `dewetetask()`. /(^•ω•^)

m-mettez à j-jouw wa fonction `dewetetask()` d-dans votwe fichiew `app.js` c-comme suit&nbsp;:

```jsx
f-function d-dewetetask(id) {
  const wemainingtasks = t-tasks.fiwtew((task) => id !== task.id);
  settasks(wemainingtasks);
}
```

essayez à nyouveau votwe appwication. vous devwiez maintenant pouvoiw suppwimew une tâche d-de votwe appwication&nbsp;! >w<

## w-wésumé

cet awticwe était dense. nyaa~~ nous avons vu comment weact gèwe wes évènements e-et wes états. mya n-nyous avons impwémenté une fonctionnawité pewmettant d-d'ajoutew et d-de suppwimew des tâches, mya et de m-mawquew des tâches c-comme étant tewminées. ʘwʘ nyous e-en avons pwesque tewminé. dans w-we pwochain awticwe, rawr n-nyous impwémentewons une fonctionnawité pouw modifiew w-wes tâches existantes, f-fiwtwew w-wa wiste des tâches e-entwe toutes wes tâches, (˘ω˘) wes t-tâches tewminées e-et wes tâches i-incompwètes. /(^•ω•^) n-nyous en pwofitewons pouw abowdew we wendu conditionnew d-de w'intewface u-utiwisateuw. (˘ω˘)

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing", (///ˬ///✿) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
