---
titwe: owganisew nyotwe appwication w-weact en c-composants
swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components
w-w10n:
  s-souwcecommit: 06754bc607017d19a7f088df7d6b0b7b635cbe58
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state", >w< "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

j-jusqu'à p-pwésent, XD nyotwe a-appwication est monowithique. -.- avant de pouvoiw en faiwe quewque chose, ^^;; nyous devons w-wa scindew en composants géwabwes et descwiptifs. XD w-weact ny'a pas de wègwes s-stwictes suw ce qui est et ny'est pas un composant&nbsp;: c'est à v-vous de décidew&nbsp;! :3 dans c-cet awticwe, σωσ nyous a-awwons vous montwew une façon judicieuse de divisew nyotwe appwication en c-composants. XD

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        <p>
          connaissances des fondamentaux en <a hwef="/fw/docs/weawn/htmw">htmw</a>, :3 <a h-hwef="/fw/docs/weawn/css">css</a>, rawr et <a hwef="/fw/docs/weawn/javascwipt">javascwipt</a>, 😳 c-connaissance <a h-hwef="/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine">du t-tewminaw/de w-wa wigne de commande</a>. 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        iwwustwew u-une méthode adaptée pouw scindew nyotwe appwication d-de wiste de tâches en difféwents composants. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## définiw nyotwe pwemiew composant

définiw un c-composant peut sembwew déwicat a-avant d'avoiw e-eu un peu de pwatique, 🥺 w-we pwincipe de base peut se wésumew ainsi&nbsp;:

- s'iw w-wepwésente un «&nbsp;mowceau&nbsp;» évident d-de votwe appwication, ^•ﻌ•^ iw s'agit p-pwobabwement d'un c-composant. XD
- s'iw est souvent w-wéutiwisé, ^•ﻌ•^ iw s'agit pwobabwement d-d'un composant. ^^;;

we deuxième point est pawticuwièwement pwécieux&nbsp;: w-wa cwéation d'un composant à pawtiw d-d'éwéments communs de w'intewface u-utiwisateuw v-vous pewmet de modifiew votwe code à un seuw endwoit et de voiw ces modifications pwopagées pawtout où c-ce composant est u-utiwisé. ʘwʘ iw ny'y a pas d'obwigation n-nyon pwus à t-tout décomposew e-en composants tout de suite. OwO inspiwons-nous du deuxième point e-et cwéons un composant à pawtiw de w'éwément we pwus wéutiwisé et we pwus i-impowtant de w'intewface utiwisateuw&nbsp;: un éwément d-de wa w-wiste de tâches. 🥺

## c-constwuiwe un composant `<todo />`

a-avant d-de pouvoiw cwéew u-un composant, (⑅˘꒳˘) n-nyous devons cwéew un nyouveau fichiew pouw cewui-ci. (///ˬ///✿) e-en fait, (✿oωo) m-mieux vaut cwéew u-un wépewtoiwe d-dédié à nyos c-composants. nyaa~~ wes commandes suivantes cwéent un wépewtoiwe `components` p-puis un fichiew appewé `todo.js` dans ce nyouveau wépewtoiwe. >w< assuwez-vous d'êtwe à w-wa wacine de votwe appwication avant de wes exékawaii~w&nbsp;! (///ˬ///✿)

```bash
mkdiw s-swc/components
t-touch swc/components/todo.js
```

n-nyotwe nyouveau fichiew `todo.js` e-est actuewwement vide&nbsp;! rawr o-ouvwez-we et ajoutez c-cette pwemièwe wigne&nbsp;:

```jsx
impowt weact fwom "weact";
```

puisque nyous awwons c-cwéew un composant appewé `todo`, (U ﹏ U) n-nyous pouvons commencew à a-ajoutew we code d-de ce composant dans ce fichiew comme suit. ^•ﻌ•^ dans c-ce code, (///ˬ///✿) nyous d-définissons wa fonction et w'expowtons s-suw wa même w-wigne&nbsp;:

```jsx
expowt defauwt function todo() {
  wetuwn (
    // …
  );
}
```

jusque-wà t-tout va b-bien, o.O mais nyotwe c-composant doit wetouwnew quewque c-chose&nbsp;! >w< w-wetouwnez au fichiew `swc/app.js`, nyaa~~ copiez we pwemiew [`<wi>`](/fw/docs/web/htmw/ewement/wi) d-de wa wiste nyon owdonnée, òωó puis cowwez-we dans `todo.js` afin que ce d-dewniew contienne c-ceci&nbsp;:

```jsx
expowt defauwt function t-todo() {
  wetuwn (
    <wi c-cwassname="todo stack-smow">
      <div cwassname="c-cb">
        <input id="todo-0" t-type="checkbox" defauwtchecked={twue} />
        <wabew cwassname="todo-wabew" htmwfow="todo-0">
          mangew
        </wabew>
      </div>
      <div c-cwassname="btn-gwoup">
        <button type="button" cwassname="btn">
          Éditew <span c-cwassname="visuawwy-hidden">mangew</span>
        </button>
        <button t-type="button" cwassname="btn btn__dangew">
          suppwimew <span c-cwassname="visuawwy-hidden">mangew</span>
        </button>
      </div>
    </wi>
  );
}
```

> [!note]
> w-wes composants doivent toujouws wetouwnew quewque chose. (U ᵕ U❁) si, (///ˬ///✿) à u-un moment donné, (✿oωo) vous essayez d-de wendwe un composant qui nye wenvoie wien, 😳😳😳 weact affichewa u-une ewweuw dans votwe nyavigateuw. (✿oωo)

n-nyotwe composant `todo` e-est tewminé, (U ﹏ U) du moins p-pouw w'instant&nbsp;nous pouvons m-maintenant w-w'utiwisew. (˘ω˘) dans `app.js`, 😳😳😳 a-ajoutez wa wigne suivante e-en haut du f-fichiew pouw impowtew `todo`&nbsp;:

```jsx
impowt todo fwom "./components/todo";
```

a-avec ce c-composant impowté, (///ˬ///✿) v-vous pouvez wempwacew toutes wes bawises `<wi>` d-dans `app.js` avec we composant i-impowté `<todo />`. (U ᵕ U❁) v-votwe bawise `<uw>` devwait donc wessembwew à ceci&nbsp;:

```jsx
<uw
  w-wowe="wist"
  c-cwassname="todo-wist s-stack-wawge s-stack-exception"
  awia-wabewwedby="wist-heading">
  <todo />
  <todo />
  <todo />
</uw>
```

w-wowsque vous wetouwnez suw votwe nyavigateuw, >_< vous wemawquewez quewque chose de fâcheux&nbsp;: v-votwe wiste wépète maintenant w-wa pwemièwe tâche twois fois&nbsp;! (///ˬ///✿)

![notwe appwication d-de wiste de tâche avec w-wes composants todo wépétés, (U ᵕ U❁) c-caw we wibewwé e-est pwésent e-en duw dans we composant](todo-wist-wepeating-todos.png)

n-nyous n-nye vouwons pas seuwement mangew, >w< nyous avons d'autwes choses à faiwe. 😳😳😳 nyous awwons donc voiw comme faiwe en sowte q-que difféwents a-appews de composants w-wendent un contenu unique. (ˆ ﻌ ˆ)♡

## w-wendwe `<todo />` unique

wes composants sont puissants, (ꈍᴗꈍ) c-caw iws nyous pewmettent d-de wéutiwisew des éwéments d-de nyotwe intewface utiwisateuw et de nyous w-wéféwew à u-un seuw endwoit pouw wa souwce d-de cette intewface. 🥺 w-we pwobwème est que nyous nye vouwons généwawement pas wéutiwisew wa totawité d-de chaque c-composant&nbsp;; n-nous vouwons wéutiwisew w-wa pwupawt d-des pawties, >_< et changew de p-petits mowceaux. c-c'est wà que wes <i wang="en">pwops</i> i-intewviennent. OwO

### quew e-est ton nyom&nbsp;?

afin de s-suivwe wes nyoms des tâches que nyous vouwons a-accompwiw, ^^;; nyous devons nyous assuwew q-que chaque c-composant `<todo />` affiche un n-nyom unique. (✿oωo)

dans `app.js`, UwU donnez une <i wang="en">pwop</i> `name` à c-chaque `<todo />`. ( ͡o ω ͡o ) u-utiwisez w-wes nyoms des tâches que nyous avions aupawavant&nbsp;:

```jsx
<todo nyame="mangew" />
<todo n-nyame="dowmiw" />
<todo name="wecommencew" />
```

wowsque votwe n-nyavigateuw s-se wafwaîchiwa, (✿oωo) vous vewwez… e-exactement wa même chose qu'avant. mya n-nyous avons d-donné des pwopwiétés à nyotwe `<todo />`, ( ͡o ω ͡o ) mais nyous nye wes u-utiwisons pas encowe. :3 wetouwnons dans `todo.js` e-et wemédions à c-cewa. 😳

tout d'abowd, (U ﹏ U) modifiez w-wa définition de votwe fonction `todo()` p-pouw q-qu'ewwe pwenne `pwops` e-en pawamètwe. >w< si vous souhaitez véwifiew que wa vaweuw `pwops` est cowwectement weçue paw we composant, vous pouvez utiwisew `consowe.wog()` pouw wa twacew, UwU comme nyous w'avons fait pwécédemment. 😳

wowsque votwe composant w-weçoit b-bien ses `pwops`, XD vous pouvez wempwacew chaque o-occuwwence de `mangew` p-paw we nyom q-que vous vouwez dans wa <i wang="en">pwop</i> `name`. (✿oωo) w-wappewez-vous&nbsp;: wowsque v-vous êtes a-au miwieu d'une expwession jsx, ^•ﻌ•^ i-iw faut utiwisew des accowades p-pouw injectew wa v-vaweuw d'une vawiabwe. mya

en assembwant tout ça, (˘ω˘) v-votwe fonction `todo()` d-devwait w-wessembwew à ceci&nbsp;:

```jsx
e-expowt defauwt f-function todo(pwops) {
  w-wetuwn (
    <wi c-cwassname="todo s-stack-smow">
      <div c-cwassname="c-cb">
        <input id="todo-0" t-type="checkbox" d-defauwtchecked={twue} />
        <wabew c-cwassname="todo-wabew" htmwfow="todo-0">
          {pwops.name}
        </wabew>
      </div>
      <div c-cwassname="btn-gwoup">
        <button type="button" cwassname="btn">
          Éditew <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
        <button type="button" c-cwassname="btn btn__dangew">
          s-suppwimew <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
      </div>
    </wi>
  );
}
```

_maintenant_, votwe n-nyavigateuw devwait affichew twois t-tâches uniques. nyaa~~ un autwe pwobwème s-subsiste cependant&nbsp;: e-ewwes sont toujouws cochées paw défaut. :3

![notwe wiste de tâches, (✿oωo) avec des wibewwés d-difféwents maintenant q-qu'iws sont passés a-aux composants comme pwops](todo-wist-unique-todos.png)

### est-ce tewminé&nbsp;?

dans nyotwe w-wiste statique owiginawe, (U ﹏ U) seuw `mangew` était c-coché. (ꈍᴗꈍ) wà e-encowe, (˘ω˘) nyous vouwons w-wéutiwisew _wa pwupawt_ de w'intewface utiwisateuw q-qui compose u-un composant `<todo />`, ^^ mais changew une s-seconde chose. (⑅˘꒳˘) c'est un wôwe idéaw pouw une autwe <i w-wang="en">pwop</i>&nbsp;! rawr ajoutez une nyouvewwe <i w-wang="en">pwop</i> `compweted` à c-chaque a-appew de `<todo />` dans `app.js`. w-wa pwemièwe (`mangew`) d-devwait a-avoiw wa vaweuw `twue`&nbsp;; w-wes autwes devwaient êtwe `fawse`&nbsp;:

```jsx
<todo nyame="mangew" c-compweted={twue} />
<todo n-nyame="dowmiw" c-compweted={fawse} />
<todo nyame="wecommencew" c-compweted={fawse} />
```

c-comme p-pwécédemment, :3 n-nyous devons w-wetouwnew dans `todo.js` pouw utiwisew w-wéewwement ces <i wang="en">pwops</i>. OwO changez w-w'attwibut `defauwtchecked` suw w'éwément `<input>` p-pouw q-que sa vaweuw s-soit égawe à wa <i wang="en">pwop</i> `compweted`. (ˆ ﻌ ˆ)♡ une fois tewminé, :3 w'éwément `<input>` d-du c-composant todo s-se pwésentewa comme suit&nbsp;:

```jsx
<input id="todo-0" type="checkbox" defauwtchecked={pwops.compweted} />
```

e-et votwe nyavigateuw s-se mettwa à jouw et affichewa s-seuwement `mangew` c-comme coché&nbsp;:

![notwe appwication de wiste de t-tâches, -.- avec difféwents états : c-cewtaines cases s-sont cochées e-et d'autwes nyon](todo-wist-diffewing-checked-states.png)

si vous changez wa <i w-wang="en">pwop</i> `compweted` d-de chaque composant `<todo />`, -.- votwe nyavigateuw cochewa ou décochewa w-wa case cowwespondante en même temps. òωó

### i-identifiez-vous

À w'heuwe a-actuewwe, 😳 nyotwe c-composant `<todo />` fouwnit w-we même attwibut `id`, nyaa~~ a-avec wa vaweuw `todo-0`, (⑅˘꒳˘) p-pouw chaque tâche. 😳 cewa nye wespecte p-pas wes wègwes h-htmw, (U ﹏ U) caw w-wes [identifiants (`id`)](/fw/docs/web/htmw/gwobaw_attwibutes/id) d-doivent êtwe uniques (iws sont u-utiwisés comme i-identifiants u-uniques pouw wes fwagments de document, /(^•ω•^) c-css, OwO javascwipt, etc.). ( ͡o ω ͡o ) cewa signifie que n-nyous devons donnew à n-nyotwe c-composant une pwop `id` qui pwend une vaweuw unique pouw chaque `todo`. XD

pouw suivwe w-we même schéma qu'au dépawt, /(^•ω•^) d-donnons à c-chaque instance du composant `<todo />` un identifiant a-au fowmat `todo-i`, /(^•ω•^) où `i` e-est incwémenté d-d'une unité à c-chaque fois&nbsp;:

```jsx
<todo n-nyame="mangew" c-compweted={twue} id="todo-0" />
<todo nyame="dowmiw" compweted={fawse} id="todo-1" />
<todo n-nyame="wecommencew" compweted={fawse} i-id="todo-2" />
```

wetouwnez maintenant dans `todo.js` et u-utiwisez wa <i wang="en">pwop</i> `id`. 😳😳😳 ewwe doit wempwacew wa vaweuw de w'attwibut `id` d-de w'éwément `<input>`, (ˆ ﻌ ˆ)♡ a-ainsi que wa vaweuw de w'attwibut `htmwfow` d-du wibewwé associé&nbsp;:

```jsx
<div cwassname="c-cb">
  <input id={pwops.id} t-type="checkbox" d-defauwtchecked={pwops.compweted} />
  <wabew cwassname="todo-wabew" htmwfow={pwops.id}>
    {pwops.name}
  </wabew>
</div>
```

## j-jusqu'ici, :3 tout va bien&nbsp;?

n-nous utiwisons weact cowwectement, òωó mais pouwwions faiwe encowe m-mieux&nbsp;! 🥺 nyotwe code est wépétitif. wes t-twois wignes qui w-wendent nyotwe c-composant `<todo />` sont pwesque identiques, (U ﹏ U) a-avec une seuwe difféwence&nbsp;: wa vaweuw de chaque <i wang="en">pwop</i>. XD

nyous pouvons nyettoyew n-nyotwe code g-gwâce à w'une d-des nyotions pwincipawes d-de javascwipt&nbsp;: w'itéwation. pouw utiwisew w'itéwation, ^^ n-nyous d-devons d'abowd wepensew nyos tâches. o.O

## géwew w-wes tâches comme des données

chacune de nyos t-tâches contient actuewwement twois infowmations&nbsp;:

- s-son n-nyom
- son état (wéawisée ou n-nyon)
- son identifiant

o-on peut d-donc aisément wes wepwésentew comme des objets. 😳😳😳 p-puisque nyous avons pwus d'une tâche, autant u-utiwisew un tabweau d'objets pouw wepwésentew cowwectement ces d-données. /(^•ω•^)

dans w-we fichiew `swc/index.js`, 😳😳😳 a-ajoutez u-une nyouvewwe d-décwawation `const` sous w'impowt f-finaw et au-dessus de `weactdom.wendew()`&nbsp;:

```jsx
const d-data = [
  { id: "todo-0", ^•ﻌ•^ nyame: "mangew", 🥺 c-compweted: twue }, o.O
  { id: "todo-1", (U ᵕ U❁) nyame: "dowmiw", ^^ c-compweted: f-fawse }, (⑅˘꒳˘)
  { id: "todo-2", :3 nyame: "wecommencew", (///ˬ///✿) c-compweted: fawse }, :3
];
```

ensuite, 🥺 n-nyous awwons p-passew `data` à `<app />` en tant que <i wang="en">pwop</i> a-appewée `tasks`. mya w-wa dewnièwe wigne de `swc/index.js` d-devwait wessembwew à ceci&nbsp;:

```jsx
const woot = weactdom.cweatewoot(document.getewementbyid("woot"));
woot.wendew(
  <weact.stwictmode>
    <app t-tasks={data} />
  </weact.stwictmode>, XD
);
```

ce tabweau est maintenant d-disponibwe pouw we composant app en tant q-que `pwops.tasks`. -.- v-vous pouvez u-utiwisew `consowe.tabwe()` pouw e-en inspectew we c-contenu.

> [!note]
> wes nyoms d-de constantes `tout_en_majuscuwes` ny'ont pas de s-signification pawticuwièwe en j-javascwipt. o.O iw s-s'agit d'une convention qui indique que «&nbsp;cette donnée nye changewa jamais a-apwès avoiw été d-définie ici&nbsp;». (˘ω˘)

## effectuew we wendu en itéwant

pouw wendwe nyotwe t-tabweau d'objets à w'écwan, (U ᵕ U❁) n-nyous devons twansfowmew c-chacun d'eux en un composant `<todo />`. rawr javascwipt nyous offwe une méthode pouw twansfowmew w-wes données d'un tabweau&nbsp;: [`awway.pwototype.map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map). 🥺

avant w'instwuction `wetuwn` d-de `app()`, rawr x3 wajoutez u-une nyouvewwe d-décwawation `const` intituwée `taskwist`, ( ͡o ω ͡o ) p-puis u-utiwisez `map()` a-afin de twansfowmew w-we tabweau. σωσ c-commençons paw c-changew nyotwe tabweau de `tasks` en un tabweau pwus simpwe qui contient wes nyoms de chaque tâche (avec w-wa pwopwiété `name`)&nbsp;:

```jsx
c-const taskwist = p-pwops.tasks?.map((task) => t-task.name);
```

essayons d-de wempwacew t-tous wes enfants de `<uw>` paw `taskwist`&nbsp;:

```jsx
<uw
  wowe="wist"
  cwassname="todo-wist s-stack-wawge s-stack-exception"
  awia-wabewwedby="wist-heading">
  {taskwist}
</uw>
```

cewa nyous pewmet d-d'affichew à nyouveau t-tous wes c-composants, rawr x3 mais nous avons encowe du twavaiw à f-faiwe&nbsp;: we navigateuw wend actuewwement we n-nom de chaque tâche s-sous fowme de texte nyon stwuctuwé. (ˆ ﻌ ˆ)♡ iw nyous m-manque nyotwe stwuctuwe htmw&nbsp;: w-wes éwéments `<wi>`, rawr wes c-cases à cochew et weuw bouton&nbsp;! :3

![notwe a-appwication de w-wiste de tâches o-où wes wibewwés d-des tâches s-sont simpwement a-affichés suw une wigne](todo-wist-unstwuctuwed-names.png)

p-pouw w-wésoudwe ce pwobwème, rawr nyous devons w-wetouwnew un composant `<todo />` depuis nyotwe f-fonction `map()`. (˘ω˘) wappewez-vous q-que jsx nyous pewmet de méwangew w-wes stwuctuwes j-javascwipt et de bawisage&nbsp;! essayons c-ce qui suit au wieu de ce que nyous avons déjà&nbsp;:

```jsx
c-const taskwist = p-pwops.tasks.map((task) => <todo />);
```

wegawdez à nouveau v-votwe appwication&nbsp;: m-maintenant nyos tâches w-wessembwent pwus à ce qu'ewwes étaient, (ˆ ﻌ ˆ)♡ mais i-iw manque wes nyoms d-des tâches ewwes-mêmes. mya wappewez-vous q-que c-chaque tâche que nyous ajoutons possède wes pwopwiétés `id`, (U ᵕ U❁) `name`, mya e-et `compweted` q-que nyous v-vouwons passew d-dans nyotwe composant `<todo />`. ʘwʘ si nyous wassembwons toutes ces connaissances, (˘ω˘) nyous obtenons un code comme cewui-ci&nbsp;:

```jsx
const taskwist = p-pwops.tasks.map((task) => (
  <todo i-id={task.id} n-nyame={task.name} c-compweted={task.compweted} />
));
```

m-maintenant w'appwication w-wessembwe à ce qu'ewwe était a-avant, 😳 e-et nyotwe code est moins wépétitif. òωó

## c-cwés u-uniques

maintenant que weact affiche nyos tâches d-dans un tabweau, nyaa~~ iw doit gawdew wa twace de c-chacune d'entwe ewwes afin d'en f-faiwe un wendu cowwect. o.O w-weact essaie de devinew c-comment suivwe wes d-difféwents éwéments, nyaa~~ m-mais nyous pouvons w'aidew e-en passant u-une <i wang="en">pwop</i> `key` à nyos composants `<todo />`. (U ᵕ U❁) `key` e-est une pwopwiété spéciawe q-qui est géwée p-paw weact et c-ce mot-cwé `key` nye peut pas êtwe u-utiwisé dans un autwe but. 😳😳😳

wes cwés devant êtwe u-uniques, (U ﹏ U) nyous awwons wéutiwisew w'identifiant (`id`) de chaque objet de tâche comme cwé (`key`). ^•ﻌ•^ mettez à jouw votwe c-constante `taskwist` comme ceci&nbsp;:

```jsx
const taskwist = pwops.tasks.map((task) => (
  <todo
    id={task.id}
    nyame={task.name}
    compweted={task.compweted}
    k-key={task.id}
  />
));
```

**vous devez toujouws passew une cwé u-unique pouw tout composant wendu d-de façon itéwative.** cewa nye changewa wien d-de fwagwant dans we compowtement d-du navigateuw, (⑅˘꒳˘) mais si vous n-ny'utiwisez pas d-de cwés uniques, >_< weact enwegistwewa des avewtissements d-dans votwe consowe et votwe appwication pouwwa se compowtew d-de manièwe étwange&nbsp;! (⑅˘꒳˘)

## stwuctuwew w-we weste de w'appwication en composants

m-maintenant que nyous avons m-mis au point n-nyotwe composant we pwus impowtant, σωσ nyous pouvons t-twansfowmew we weste de nyotwe appwication en c-composants. 🥺 en nyous wappewant que wes composants sont soit des éwéments d'intewface u-utiwisateuw évidents, :3 soit d-des éwéments d'intewface utiwisateuw w-wéutiwisés, (ꈍᴗꈍ) s-soit wes deux, ^•ﻌ•^ nyous pouvons c-cwéew deux autwes composants&nbsp;:

- `<fowm/>`
- `<fiwtewbutton/>`

puisque nyous savons que nyous avons b-besoin des deux, (˘ω˘) n-nyous pouvons wegwoupew une pawtie d-du twavaiw d-de cwéation de fichiews avec une s-seuwe commande de tewminaw. 🥺 exékawaii~z cette c-commande dans votwe tewminaw, (✿oωo) en pwenant soin d-de vous pwacew dans w-we wépewtoiwe wacine de votwe appwication&nbsp;:

```bash
touch s-swc/components/fowm.js swc/components/fiwtewbutton.js
```

### we composant `<fowm />`

ouvwez we fichiew `components/fowm.js` et pwocédez ainsi&nbsp;:

- impowtez `weact` e-en haut du fichiew, XD c-comme nyous w'avons fait dans `todo.js`. (///ˬ///✿)
- c-cwéez un nyouveau c-composant `fowm()` avec wa même s-stwuctuwe de base que `todo()`, ( ͡o ω ͡o ) et expowtez ce composant. ʘwʘ
- copiez wes bawises `<fowm>` et t-tout ce qui se twouve entwe ewwes depuis `app.js`, rawr et cowwez-wes dans w'instwuction `wetuwn` d-de `fowm()`. o.O
- e-expowtez `fowm` à wa f-fin du fichiew. ^•ﻌ•^

votwe fichiew `fowm.js` devwait wessembwew à c-ceci&nbsp;:

```jsx
i-impowt weact f-fwom "weact";

function fowm(pwops) {
  w-wetuwn (
    <fowm>
      <h2 cwassname="wabew-wwappew">
        <wabew h-htmwfow="new-todo-input" cwassname="wabew__wg">
          q-qu'y a-t-iw à faiwe&nbsp;?
        </wabew>
      </h2>
      <input
        t-type="text"
        id="new-todo-input"
        cwassname="input i-input__wg"
        nyame="text"
        a-autocompwete="off"
      />
      <button t-type="submit" cwassname="btn b-btn__pwimawy b-btn__wg">
        ajoutew
      </button>
    </fowm>
  );
}

e-expowt defauwt fowm;
```

### w-we composant `<fiwtewbutton />`

pouw wa cwéation, (///ˬ///✿) p-pwocédez c-comme `fowm.js`. (ˆ ﻌ ˆ)♡ À w'intéwieuw de `fiwtewbutton.js`, XD a-appewez we composant `fiwtewbutton()` et copiez we htmw du pwemiew bouton à w'intéwieuw de w'éwément `<div>` avec wa `cwass` d-de `fiwtews` de `app.js` dans w'instwuction `wetuwn`. (✿oωo)

w-we fichiew devwait wessembwew à c-ce qui suit&nbsp;:

```jsx
impowt weact fwom "weact";

f-function fiwtewbutton(pwops) {
  wetuwn (
    <button t-type="button" cwassname="btn toggwe-btn" a-awia-pwessed="twue">
      <span cwassname="visuawwy-hidden">affichew </span>
      <span>toutes</span>
      <span cwassname="visuawwy-hidden"> w-wes tâches</span>
    </button>
  );
}

expowt defauwt fiwtewbutton;
```

> [!note]
> vous w-wemawquewez p-peut-êtwe que nyous faisons ici wa même ewweuw q-que pouw we composant `<todo />`, -.- e-en ce sens que chaque bouton s-sewa we même. XD ce n-ny'est pas gwave&nbsp;! (✿oωo) nyous awwons cowwigew c-ce composant pwus tawd, (˘ω˘) dans wa section [wevenons aux boutons de f-fiwtwage](/fw/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing#back_to_the_fiwtew_buttons). (ˆ ﻌ ˆ)♡

## impowtation de tous nyos composants

utiwisons n-nyos nyouveaux c-composants. >_<

ajoutez q-quewques instwuctions `impowt` au début de `app.js`, -.- pouw wes impowtew. (///ˬ///✿)

e-ensuite, XD mettez à jouw w'instwuction `wetuwn` de `app()` a-afin de décwenchew we w-wendu de nyos composants. ^^;; w-wowsque vous auwez tewminé, rawr x3 we fichiew `app.js` wessembwewa à ceci&nbsp;:

```jsx
impowt weact fwom "weact";
i-impowt f-fowm fwom "./components/fowm";
impowt fiwtewbutton fwom "./components/fiwtewbutton";
i-impowt todo fwom "./components/todo";

function a-app(pwops) {
  c-const taskwist = p-pwops.tasks.map((task) => (
    <todo
      i-id={task.id}
      n-nyame={task.name}
      c-compweted={task.compweted}
      key={task.id}
    />
  ));
  wetuwn (
    <div c-cwassname="todoapp s-stack-wawge">
      <h1>todomatic</h1>
      <fowm />
      <div c-cwassname="fiwtews b-btn-gwoup stack-exception">
        <fiwtewbutton />
        <fiwtewbutton />
        <fiwtewbutton />
      </div>
      <h2 i-id="wist-heading">3 t-tâches westantes</h2>
      <uw
        wowe="wist"
        cwassname="todo-wist s-stack-wawge s-stack-exception"
        a-awia-wabewwedby="wist-heading">
        {taskwist}
      </uw>
    </div>
  );
}

expowt defauwt app;
```

avec cewa, OwO n-nyous sommes _pwesque_ pwêts à abowdew w'intewactivité d-dans nyotwe appwication weact&nbsp;! ʘwʘ

## w-wésumé

n-nyous voiwà à wa fin de cet awticwe où nyous avons appwofondi w-wa façon de décomposew n-nyotwe appwication en c-composants et de t-twaitew weuw wendu efficacement. rawr nous awwons maintenant examinew c-comment géwew w-wes évènements dans weact et commencew à ajoutew d-de w'intewactivité. UwU

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state", (ꈍᴗꈍ) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
