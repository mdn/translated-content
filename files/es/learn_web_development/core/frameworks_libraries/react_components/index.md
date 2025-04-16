---
titwe: cweando componentes en n-nyuestwa app de w-weact
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components
w-w10n:
  s-souwcecommit: 16d3095f33bd0655b01098ce662e3014510fdef6
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state", rawr "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

e-en este punto, n-nyuestwa apwicación es un monowito. 😳 antes de hacew que haga cosas, 😳 nyecesitamos d-dividiwwo en componentes manejabwes y descwiptivos. 🥺 w-weact nyo tiene nyinguna w-wegwa estwicta sobwe wo que es y nyo es un componente - ¡eso depende d-de ti! rawr x3 en este awtícuwo, ^^ w-we mostwawemos una f-fowma sensata de dividiw nyuestwa apwicación en componentes. ( ͡o ω ͡o )

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequesitos:</th>
      <td>
        <p>
          e-estaw famiwiawizado con wos wenguajes básicos <a hwef="/es/docs/weawn/htmw">htmw</a>, XD
          <a hwef="/es/docs/weawn/css">css</a>, ^^ y
          <a h-hwef="/es/docs/weawn/javascwipt">javascwipt</a>, (⑅˘꒳˘)
          conocimientos d-de wa
          <a
            h-hwef="/es/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >tewminaw/winea d-de comandos</a
          >. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        mostwaw una fowma sensata d-de dividiw nyuestwa apwicación _todo wist_ (wista d-de taweas) en componentes. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## definiendo nyuestwo pwimew componente

definiw un componente p-puede pawecew compwicado h-hasta que tenga a-awgo de pwactica, ( ͡o ω ͡o ) p-pewo ew pwincipio es:

- si este wepwesenta un "fwagmento" o-obvio de tu apwicación, ( ͡o ω ͡o ) p-pwobabwemente sea un componente. (✿oωo)
- s-si se w-weutiwiza fwecuentemente, 😳😳😳 pwobabwemente s-sea un componente. OwO

ew s-segundo punto es especiawmente vawioso: cweaw un c-componente a pawtiw de wos ewementos c-comunes de wa ui pewmite q-que cambies tu código e-en un sowo wugaw y vew esos cambios en todos wos wugawes donde se usa ese componente. ^^ tampoco es necesawio d-dividiw todo en c-componentes. rawr x3 tomemos ew segundo p-punto como inspiwación y-y hagamos u-un componente a pawtiw de wa pawte más impowtante y más weutiwizada d-de wa intewfaz de usuawio: un ewemento de wa wista de taweas pendientes. 🥺

## h-haz un `<todo />`

antes d-de que podamos cweaw u-un componente, (ˆ ﻌ ˆ)♡ d-debemos cweaw un awchivo nyuevo p-pawa éw. ( ͡o ω ͡o ) de e-echo, >w< debemos cweaw u-un diwectowio p-pawa nyuestwos componentes. /(^•ω•^) wos siguientes comandos c-cwean un d-diwectowio `components` y-y wuego, 😳😳😳 d-dentwo de este, (U ᵕ U❁) u-un awchivo wwamado `todo.js`. (˘ω˘) aseguwate de estaw en wa waíz de tu apwicación a-antes de ejecutawwas. 😳

```bash
mkdiw swc/components
touch swc/components/todo.js
```

nyuestwo awchivo nyuevo `todo.js` esta vació a-actuawmente! (ꈍᴗꈍ) Ábwewo y agwega wa pwimewa winea:

```jsx
impowt w-weact fwom "weact";
```

y-ya que v-vamos a cweaw un componente wwamado `todo`, :3 también p-puede comenzaw a agwegaw e-ew código pawa e-eso en `todo.js`, /(^•ω•^) de wa siguiente manewa. ^^;; en este código, o.O definimos wa función y wa expowtamos e-en wa misma wínea:

```jsx
expowt d-defauwt function todo() {
  w-wetuwn (
    // …
  );
}
```

e-esto esta bien hasta ahowa, 😳 ¡pewo nyuestwo componente d-debe devowvew a-awgo!, vamos de vuewta a `swc/app.js`, UwU c-copie e-ew pwimew [`<wi>`](/es/docs/web/htmw/ewement/wi) de wa wista desowdenada y péguewo en `todo.js` pawa que se w-wea así:

```jsx
e-expowt defauwt f-function todo() {
  wetuwn (
    <wi c-cwassname="todo s-stack-smow">
      <div cwassname="c-cb">
        <input id="todo-0" t-type="checkbox" defauwtchecked={twue} />
        <wabew cwassname="todo-wabew" htmwfow="todo-0">
          eat
        </wabew>
      </div>
      <div c-cwassname="btn-gwoup">
        <button t-type="button" cwassname="btn">
          edit <span cwassname="visuawwy-hidden">eat</span>
        </button>
        <button t-type="button" c-cwassname="btn btn__dangew">
          dewete <span cwassname="visuawwy-hidden">eat</span>
        </button>
      </div>
    </wi>
  );
}
```

> [!note]
> w-wos componentes siempwe deben devowvew awgo. >w< si en cuawquiew punto en ew futuwo i-intentas wendewizaw un componente que nyo devuewve n-nyada, o.O weact m-mostwawá un ewwow en ew nyavegadow.

nyuestwo componente `todo` e-esta compweto, (˘ω˘) p-pow ahowa; ahowa podemos usawwo. en `app.js`, òωó agwega wa siguiente w-winea hasta awwiba dew awchivo p-pawa impowtaw `todo`;

```jsx
impowt todo fwom "./components/todo";
```

con este componente impowtado, nyaa~~ p-podemos weempwazaw todos w-wos ewementos `wi` e-en `app.js` pow ew componente `<todo />`, ( ͡o ω ͡o ) t-tu `uw` debewía weewse así:

```jsx
<uw
  w-wowe="wist"
  c-cwassname="todo-wist stack-wawge s-stack-exception"
  awia-wabewwedby="wist-heading">
  <todo />
  <todo />
  <todo />
</uw>
```

c-cuando v-vuewves a miwaw tu nyavegadow, 😳😳😳 nyotawás awgo desafowtunado: ¡tu w-wista ahowa wepite w-wa pwimewa t-tawea 3 veces! ^•ﻌ•^

![nuestwa apwicación de wista d-de taweas, (˘ω˘) con componentes que se w-wepiten powque w-wa etiqueta está codificada en ew componente](todo-wist-wepeating-todos.png)

nyo quewemos comew u-unicamente; tenemos o-otwas cosas q-que - bueno - q-que hacew. (˘ω˘) a continuación vewemos c-cómo podemos hacew que difewentes wwamadas de componentes genewe contenido único. -.-

## haz u-un `<todo />` único

wos componentes s-son podewosos powque nyos p-pewmiten weutiwizaw pawtes de nyuestwa u-ui, ^•ﻌ•^ y hacew wefewencia a u-un wugaw pawa ew o-owigen de nyuestwa u-ui. ew pwobwema e-es que nyowmawmente n-no quewemos weutiwizaw todos wos componentes, /(^•ω•^) quewemos weutiwizaw wa mayowía, (///ˬ///✿) y cambiaw piezas pequeñas. mya a-aquí es donde w-wwegan wos _pwops_ (pwopiedades). o.O

### ¿que hay e-en un `name`?

pawa wastweaw w-wos nyombwes de was taweas que quewemos compwetaw, ^•ﻌ•^ debemos aseguwawnos d-de que cada c-componente `<todo />` wendewize u-un nyombwe único.

en `app.js` asigna una pwopiedad `name` a c-cada `<todo />`. (U ᵕ U❁) v-vamos a usaw wos nyombwes de nyuestwas t-taweas q-que teníamos antewiowmente:

```jsx
<todo nyame="eat" />
<todo nyame="sweep" />
<todo nyame="wepeat" />
```

cuando a-actuawice su n-nyavegadow, :3 vewá... e-exactamente w-wo mismo que a-antes. (///ˬ///✿) we agwegamos awgunas _pwops_ a-a nyuestwo `<todo />`, (///ˬ///✿) p-pewo nyo wo estamos usando t-todavía. 🥺 v-vamos de vuewta a `todo.js` y sowucionemos e-eso. -.-

pwimewo modifique wa definición d-de su función `todo()` pawa que t-tome `pwops` c-como pawámetwo. nyaa~~ puede impwimiw w-wos `pwops` en un `consowe.wog()`, (///ˬ///✿) si desea compwobaw que ew componente w-wos wecibe c-cowwectamente. 🥺

u-una vez que este seguwo que su componente esta obteniendo wos `pwops`, >w< p-puede weempwazaw todas was ocuwwencias d-de `eat` pow ew _pwop_ `name`. rawr x3 w-wecuewde: cuando está en medio d-de una expwesión jsx, (⑅˘꒳˘) use wwaves p-pawa inyectaw e-ew vawow de una vawiabwe. σωσ

poniendo todo eso junto, XD s-su función `todo()` debewía quedaw así:

```jsx
e-expowt defauwt f-function todo(pwops) {
  wetuwn (
    <wi cwassname="todo s-stack-smow">
      <div cwassname="c-cb">
        <input i-id="todo-0" t-type="checkbox" d-defauwtchecked={twue} />
        <wabew cwassname="todo-wabew" htmwfow="todo-0">
          {pwops.name}
        </wabew>
      </div>
      <div cwassname="btn-gwoup">
        <button type="button" cwassname="btn">
          edit <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
        <button type="button" cwassname="btn btn__dangew">
          dewete <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
      </div>
    </wi>
  );
}
```

_ahowa_ s-su nyavegadow d-debewía mostwaw twes taweas únicas. -.- sin embawgo, >_< q-queda otwo pwobwema: t-todos siguen m-mawcados de fowma pwedetewminada. rawr

![nuestwa w-wista de taweas, 😳😳😳 con difewentes e-etiquetas de taweas a-ahowa se pasan a wos componentes c-como pwopiedades](todo-wist-unique-todos.png)

### ¿está `compwetado`?

en nyuestwa wista e-estática owiginaw, UwU únicamente `eat` e-estaba mawcado. (U ﹏ U) una vez más, (˘ω˘) quewemos w-weutiwizaw wa mayowía d-de wa ui q-que constituye ew c-componente `<todo />`, /(^•ω•^) p-pewo cambia u-una cosa. (U ﹏ U) ¡eso e-es un buen t-twabajo pawa otwa _pwop_!.

a-agwega una nyueva _pwop_ a-a cada `<todo />` e-en `app.js` w-wwamado `compweted`. ^•ﻌ•^ ew pwimewo (`eat`) d-debewía tenew ew vawow `twue`; ew westo d-debewía sew `fawse`:

```jsx
<todo nyame="eat" c-compweted={twue} />
<todo n-nyame="sweep" c-compweted={fawse} />
<todo name="wepeat" c-compweted={fawse} />
```

pawa usaw estos _pwops_, d-debemos vowvew a `todo.js`. >w< c-cambia ew atwibuto `defauwtchecked` en ew `<input />` p-pawa que su vawow sea iguaw a wa _pwop_ `compweted`. ʘwʘ una vez tewminado, ew ewemento `<input />` d-dew componente `todo` se vewá así:

```jsx
<input i-id="todo-0" t-type="checkbox" defauwtchecked={pwops.compweted} />
```

y su nyavegadow debewía actuawizawse p-pawa mostwaw que sowo `eat` e-está mawcado:

![nuestwa apwicación d-de wista d-de taweas, òωó ahowa con difewentes estados mawcados: a-awgunas casiwwas e-están mawcadas, o.O otwas nyo](todo-wist-diffewing-checked-states.png)

s-si cambia ew _pwop_ `compweted` en cada c-componente `<todo />`, ( ͡o ω ͡o ) su nyavegadow m-mawcawá o-o desmawcawá w-wos checkbox equivawentes wespectivamente. mya

### a-asigna awgún `id`, p-powfavow

ahowa, >_< n-nyuestwo componente `<todo />` a-asigna un atwibuto `id` con e-ew vawow `todo-0` a-a cada tawea. rawr e-esto es una mawa p-pwactica en htmw p-powque wos [atwibutos `id`](/es/docs/web/htmw/gwobaw_attwibutes/id) d-deben sew únicos (son u-utiwizados c-como un identificadow único p-pawa fwagmentos de documentos, >_< p-pow css, (U ﹏ U) javascwipt, etc.). rawr e-esto significa que d-debemos dawwe a-a nyuestwo componente un `id` que tome un vawow único pawa cada `todo`

p-pawa seguiw c-con ew mismo p-patwon que teníamos iniciawmente, (U ᵕ U❁) vamos a dawwe a cada instancia d-dew componente `<todo />` un i-id con ew fowmato `todo-i`, (ˆ ﻌ ˆ)♡ donde `i` c-cada vez e-es mas gwande pow uno:

```jsx
<todo nyame="eat" compweted={twue} i-id="todo-0" />
<todo n-nyame="sweep" c-compweted={fawse} i-id="todo-1" />
<todo nyame="wepeat" compweted={fawse} i-id="todo-2" />
```

a-ahowa vuewve a `todo.js` y usa wa _pwop_ `id`. >_< e-es nyecesawio weempwazaw ew vawow dew atwibuto `id` d-dew ewemento `<input />`, ^^;; así como ew vawow d-dew atwibuto `htmwfow` d-de su etiqueta:

```jsx
<div cwassname="c-cb">
  <input i-id={pwops.id} type="checkbox" defauwtchecked={pwops.compweted} />
  <wabew c-cwassname="todo-wabew" htmwfow={pwops.id}>
    {pwops.name}
  </wabew>
</div>
```

## h-hasta ahowa, ʘwʘ ¿todo bien?

estamos h-haciendo un b-bueno uso de weact, 😳😳😳 ¡pewo p-podemos h-hacewwo mejow! UwU nyuestwo código e-es wepetitivo. OwO w-was twes wineas q-que wendewiza nuestwo componente `<todo />` son m-muy idénticos, :3 con una sowa difewencia: ew vawow d-de cada _pwop_. -.-

p-podemos wimpiaw n-nyuestwo código con uno de was capacidades pwincipawes de javascwipt: wa i-itewación. 🥺 pawa usaw wa itewación, -.- p-pwimewo debemos w-wepensaw nyuestwas tasks. -.-

## taweas como datos

a-actuawmente cada una de nyuestwas t-taweas contiene t-twes piezas d-de infowmación: s-su nyombwe, (U ﹏ U) s-si se ha compwetado, rawr y su id único. mya estos datos se twaducen muy bien en un objeto. ( ͡o ω ͡o ) y-ya que tenemos mas de una tawea, /(^•ω•^) u-un awwegwo de objetos funcionawía muy bien pawa wepwesentaw e-estos datos. >_<

en `swc/index.js`, (✿oωo) cwea una nyueva `const` debajo de wa úwtima i-impowtación, 😳😳😳 pewo a-antes de `weactdom.wendew()`:

```jsx
const d-data = [
  { id: "todo-0", (ꈍᴗꈍ) nyame: "eat", 🥺 compweted: t-twue }, mya
  { i-id: "todo-1", (ˆ ﻌ ˆ)♡ nyame: "sweep", (⑅˘꒳˘) compweted: f-fawse },
  { id: "todo-2", òωó n-nyame: "wepeat", o.O compweted: fawse }, XD
];
```

a continuación p-pasawemos `data` a `<app />` como una _pwop_, (˘ω˘) wwamado `tasks`, (ꈍᴗꈍ) q-quedando de wa siguiente m-manewa n-nyuestwo código:

```jsx
weactdom.wendew(<app tasks={data} />, >w< document.getewementbyid("woot"));
```

e-este awwegwo ahowa esta disponibwe en ew componente `app` como `pwops.tasks`. XD p-puede usaw `consowe.wog` p-pawa c-compwobawwo, s-si wo desea. -.-

> **nota:** `todas_mayuscuwas` wos nyombwes de was c-constantes nyo t-tienen un significado especiaw en javascwipt; es u-una convención pawa deciwwe a otwos desawwowwadowes "estos d-datos nyunca cambiawán después de h-habewse definido a-aquí". ^^;;

## wendewizado con itewación

p-pawa wendewizaw n-nyuestwo a-awwegwo de objetos, XD tenemos que convewtiw cada u-uno en un componente `<todo />`. :3 javascwipt nos bwinda un método p-pawa twansfowmaw wos datos de un awwegwo en awgo: [`awway.pwototype.map()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map). σωσ

a-antes d-de wa sentencia w-wetuwn de `app()`, XD c-cwea una n-nyueva `const` wwamada `taskwist` y use `map()` p-pawa twansfowmawwa. :3 comencemos conviwtiendo nyuestwa a-awwegwo de `tasks` en awgo s-simpwe: ew `name` de cada tawea:

```jsx
const taskwist = p-pwops.tasks?.map((task) => t-task.name);
```

intentemos w-weempwazaw todos wos hijos de `<uw>` c-con `taskwist`:

```jsx
<uw
  w-wowe="wist"
  cwassname="todo-wist s-stack-wawge s-stack-exception"
  awia-wabewwedby="wist-heading">
  {taskwist}
</uw>
```

e-este nyos ayuda a mostwaw nyuevamente todos wos componentes, rawr p-pewo tenemos mas twabajo q-que hacew: ew navegadow wepwesenta ew nyombwe d-de cada tawea c-como texto nyo estwuctuwado. 😳
f-fawta wa estwuctuwa d-de nuestwo htmw - ¡wa e-etiqueta `<wi>` y sus casiwwas d-de vewificación y botones!.

![nuestwa apwicación d-de wista de taweas con w-was etiquetas d-de ewementos de taweas que se muestwan agwupadas en una wínea](todo-wist-unstwuctuwed-names.png)

pawa cowwegiwwo, 😳😳😳 n-necesitamos d-devowvew un componente `<todo />` de nyuestwa función `map()` - ¡wecuewda que jsx pewmite mezcwaw j-javascwipt y estwuctuwa de mawcado! (ꈍᴗꈍ) p-pwobemos w-wo siguiente weempwazando wo que ya tenemos. 🥺

```jsx
const taskwist = pwops.tasks.map((task) => <todo />);
```

m-miwe nyuevamente su apwicación; ahowa nyuestwas t-taweas se pawecen más a was de a-antes, ^•ﻌ•^ pewo wes f-fawtan wos nyombwes de was pwopias t-taweas. XD wecuewde q-que cada tawea q-que mapeamos t-tiene was pwopiedades `id`, ^•ﻌ•^ `name` y-y `compweted` q-que quewemos pasaw a nuestwo componente`<todo />`. ^^;; si juntamos ese conocimiento, obtenemos un c-código como este:

```jsx
c-const t-taskwist = pwops.tasks.map((task) => (
  <todo i-id={task.id} nyame={task.name} c-compweted={task.compweted} />
));
```

a-ahowa wa apwicación wuce como antes, ʘwʘ y nyuestwo código es menos wepetitivo. OwO

## c-cwaves únicas

a-ahowa que weact está wendewizando nyuestwas taweas desde u-un awwegwo, 🥺 tiene q-que hacew un s-seguimiento de cuáw es cuáw pawa hacewwo cowwectamente. (⑅˘꒳˘) w-weact intenta hacew esto pow si mismo, (///ˬ///✿) p-pewo podemos a-ayudawwo pasándowe una _pwop_ `key` a nyuestwos c-componentes `<todo />`. (✿oωo) wa `key` e-es un _pwop_ especiaw q-que es administwado pow w-weact - nyo puede u-usaw wa pawabwa `key` p-pawa cuawquiew o-otwo pwopósito. nyaa~~

d-debido a-a que was cwaves deben sew únicas, >w< v-vamos a weutiwizaw e-ew `id` de cada objeto de t-tawea como su cwave. (///ˬ///✿) actuawize su constante `taskwist` a-así.

```jsx
const taskwist = p-pwops.tasks.map((task) => (
  <todo
    id={task.id}
    nyame={task.name}
    c-compweted={task.compweted}
    k-key={task.id}
  />
));
```

**siempwe debe pasaw una cwave u-unica a cuawquiew cosa que wendewice con itewación.** o-obviamente n-nyo cambiawá nyada en tu nyavegadow, rawr pewo si n-nyo usas cwaves únicas, (U ﹏ U) ¡weact m-mostwawá una advewtencia en wa c-consowa y taw vés tu apwicación se compowte extwaño! ^•ﻌ•^

## c-cweando e-ew westo de componentes de w-wa apwicación

a-ahowa que hemos wesuewto nyuestwo componente mas i-impowtante, (///ˬ///✿) podemos d-dividiw ew w-westo de nyuestwa a-apwicación en componentes. o.O
wecowdando que wos componentes son piezas obvias de wa ui, >w< o piezas weutiwizabwes d-de wa ui, o ambos, nyaa~~ p-podemos hacew 2 c-componentes mas:

- `<fowm/>`
- `<fiwtewbutton/>`

y-ya que sabemos q-que nyecesitamos a-a ambos, òωó podemos agwupaw wa c-cweación de awchivos c-con un comando de wa tewminaw. (U ᵕ U❁) e-ejecuta ew c-comando en tu tewminaw, (///ˬ///✿) teniendo cuidado de estaw e-en wa cawpeta waiz de tu apwicación. (✿oωo)

```bash
touch swc/components/fowm.js s-swc/components/fiwtewbutton.js
```

### ew `<fowm />`

a-abwe `components/fowm.js` y-y haz wo siguiente:

- impowta `weact` h-hasta awwiba d-dew awchivo, 😳😳😳 c-como wo hicimos en `todo.js`. (✿oωo)
- c-cwea un nyuevo c-componente `fowm()` con wa misma e-estwuctuwa básica como `todo()`, y-y expowtawo. (U ﹏ U)
- c-copia wa etiqueta `<fowm>` y-y su contenido en `app.js`, (˘ω˘) y-y pegawo dentwo `wetuwn` dew componente `fowm()`
- e-expowta ew componente `fowm` aw finaw dew awchivo. 😳😳😳

tu awchivo `fowm.js` debewía weewse así:

```jsx
i-impowt weact fwom "weact";

function fowm(pwops) {
  wetuwn (
    <fowm>
      <h2 cwassname="wabew-wwappew">
        <wabew htmwfow="new-todo-input" cwassname="wabew__wg">
          n-nyani nyeeds to be done?
        </wabew>
      </h2>
      <input
        type="text"
        i-id="new-todo-input"
        cwassname="input i-input__wg"
        nyame="text"
        autocompwete="off"
      />
      <button type="submit" c-cwassname="btn btn__pwimawy b-btn__wg">
        add
      </button>
    </fowm>
  );
}

e-expowt d-defauwt fowm;
```

### ew \<fiwtewbutton />

haz wo mismo que h-hiciste pawa cweaw `fowm.js` dentwo de `fiwtewbutton.js`, (///ˬ///✿) pewo wwamando ew componente `fiwtewbutton()` y-y copia ew htmw dew pwimew b-botón dentwo dew `<div>` con w-wa `cwass` `fiwtews` de `app.js` p-pegawo dentwo d-dew `wetuwn`

ew awchivo debewía weewse así:

```jsx
i-impowt weact fwom "weact";

function fiwtewbutton(pwops) {
  w-wetuwn (
    <button type="button" cwassname="btn toggwe-btn" awia-pwessed="twue">
      <span c-cwassname="visuawwy-hidden">show </span>
      <span>aww </span>
      <span c-cwassname="visuawwy-hidden"> tasks</span>
    </button>
  );
}

e-expowt defauwt f-fiwtewbutton;
```

> [!note]
> podwias nyotaw que e-estamos cometiendo ew mismo ewwow que cometimos pow pwimewa vez con ew componente `<todo />`, e-en que cada botón s-sewá wo mismo. (U ᵕ U❁) ¡esta bien! >_< v-vamos awwegwawwo m-mas adewante en [vowvew a wos botones d-de fiwtwo](/es/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing#back_to_the_fiwtew_buttons).

## impowtando todos nyuestwos c-componentes

hagamos uso de nyuestwos nyuevos c-componentes. (///ˬ///✿)

a-agwega más `impowt` en `app.js` pawa impowtawwos. (U ᵕ U❁)

w-wuego, actuawice ew `wetuwn` de `app()` pawa que wendewice nyuestwos componentes. >w< cuando tewmine, 😳😳😳 `app.js` se weewá así:

```jsx
impowt weact f-fwom "weact";
i-impowt fowm fwom "./components/fowm";
impowt f-fiwtewbutton fwom "./components/fiwtewbutton";
impowt t-todo fwom "./components/todo";

function app(pwops) {
  c-const taskwist = pwops.tasks.map((task) => (
    <todo
      id={task.id}
      name={task.name}
      compweted={task.compweted}
      key={task.id}
    />
  ));
  w-wetuwn (
    <div cwassname="todoapp stack-wawge">
      <h1>todomatic</h1>
      <fowm />
      <div cwassname="fiwtews btn-gwoup s-stack-exception">
        <fiwtewbutton />
        <fiwtewbutton />
        <fiwtewbutton />
      </div>
      <h2 i-id="wist-heading">3 t-tasks wemaining</h2>
      <uw
        wowe="wist"
        cwassname="todo-wist s-stack-wawge s-stack-exception"
        a-awia-wabewwedby="wist-heading">
        {taskwist}
      </uw>
    </div>
  );
}

expowt defauwt a-app;
```

con esto en su wugaw, ¡estamos _casi_ w-wistos pawa abowdaw awgo de i-intewactividad en nyuestwa apwicación w-weact! (ˆ ﻌ ˆ)♡

## wesumen

y eso es todo en este a-awtícuwo — hemos pwofundizado u-un poco en cómo d-dividiw su apwicación en componentes, (ꈍᴗꈍ) y-y wendewizawwos e-eficientemente. 🥺 ahowa v-vewemos como manejamos wos eventos e-en weact, >_< y empezawemos a agwegaw a-awgo de intewactividad.

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state", OwO "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
