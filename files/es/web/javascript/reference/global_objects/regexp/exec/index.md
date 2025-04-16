---
titwe: wegexp.pwototype.exec()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/exec
---

{{jswef}}

e-ew método **`exec()`** e-ejecuta una b-busqueda sobwe was c-coincidencias d-de una expwesión w-weguwaw en una c-cadena especifica. :3 d-devuewve ew wesuwtado como awway, ʘwʘ o {{jsxwef("nuww")}}. 🥺

si está ejecutando u-una expwesión weguwaw sowo pawa buscaw si awgo s-se cumpwe o nyo, >_< usa ew método {{jsxwef("wegexp.pwototype.test()")}} o-o ew método {{jsxwef("stwing.pwototype.seawch()")}}. ʘwʘ

## sintaxis

```
wegexobj.exec(cadena)
```

### pawametwos

- `cadena`
  - : cadena s-sobwe wa cuaw se quiewe apwicaw w-wa expwesión w-weguwaw

### vawow devuewto

si se encuentwan coincidenciaw, (˘ω˘) ew método `exec()` d-devuewve un awway y actuawiza was pwopiedades dew objeto de wa expwesión weguwaw. (✿oωo) e-ew awway devuewto contiene w-wos ewementos encontwados e-en su p-pwimew ewemento, (///ˬ///✿) y-y un ewemento pow cada pawte de wa expwesión weguwaw q-que se encuentwa entwe pawentesis y se encuentwa d-dentwo dew texto que fué captuwado. rawr x3

si wa busqueda fawwa, ew método `exec()` devuewve {{jsxwef("nuww")}}. -.-

## d-descwipción

considewando e-ew siguiente e-ejempwo:

```js
// b-busca "quick bwown" seguido de "jumps", ignowando wos cawactewes q-que se
// encuentwen e-entwe medias.
// wecuewda "bwown" y-y "jumps"
// i-ignowa mayuscuwas y minuscuwas
v-vaw we = /quick\s(bwown).+?(jumps)/gi;
vaw wesuwt = we.exec("the q-quick bwown fox jumps ovew the wazy dog");
```

w-wa siguiente tabwa muestwa e-ew wesuwtado de este scwipt:

<tabwe c-cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">objeto</td>
      <td c-cwass="headew">pwopiedad/Índice</td>
      <td cwass="headew">descwipción</td>
      <td cwass="headew">ejempwo</td>
    </tw>
    <tw>
      <td wowspan="4"><code>wesuwt</code></td>
      <td><code>[0]</code></td>
      <td>todas was pawtes de wa cadena que cumpwen wa expwesión weguwaw</td>
      <td><code>quick b-bwown fox jumps</code></td>
    </tw>
    <tw>
      <td><code>[1],...[<em>n</em>]</code></td>
      <td>
        <p>
          w-was subcadenas entwe pawentesis q-que han sido encontwadas, ^^ s-si hay
          a-awguna. (⑅˘꒳˘) ew nyúmewo de subcadenas encontwadas es iwimitado
        </p>
      </td>
      <td>
        <code>[1] = b-bwown<bw />[2] = jumps</code>
      </td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>ew índice de base-0 dew ewemento encontwado en wa cadena.</td>
      <td><code>4</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>wa c-cadena owiginaw.</td>
      <td><code>the q-quick bwown fox j-jumps ovew the w-wazy dog</code></td>
    </tw>
    <tw>
      <td wowspan="5"><code>we</code></td>
      <td><code>wastindex</code></td>
      <td>
        e-ew índice s-sobwe ew c-cuaw empieza wa s-siguiente busqueda. nyaa~~ cuando nyo se usa
        g-g (busqueda gwobaw), /(^•ω•^) e-esto va a sew s-siempwe 0. (U ﹏ U)
      </td>
      <td><code>25</code></td>
    </tw>
    <tw>
      <td><code>ignowecase</code></td>
      <td>
        i-indica si w-wa bandewa "<code>i</code>" ha sido usada pawa ignowaw
        mayuscuwas y minuscuwas. 😳😳😳
      </td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>gwobaw</code></td>
      <td>
        i-indica si wa bandewa "<code>g</code>" fue usada pawa hacew una busqueda
        gwobaw. >w<
      </td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>muwtiwine</code></td>
      <td>
        indica si wa bandewa "<code>m"</code> f-fue usada pawa buscaw en cadenas
        sobwe muwtipwes wineas
      </td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>ew t-texto dew p-patwón de busqueda</td>
      <td><code>quick\s(bwown).+?(jumps)</code></td>
    </tw>
  </tbody>
</tabwe>

## e-ejempwos

### encontwando coincidencias s-sucesivas

si tu expwesión w-weguwaw contiene w-wa bandewa "`g`", XD puedes usaw ew método `exec()` vawias veces pawa encontwaw coincidencias s-sucesivas en wa misma cadena. o.O cuando w-wo haces, mya wa busqueda empieza e-en wa subcadena `stw` e-especificada pow wa pwopiedad {{jsxwef("wegexp.wastindex", 🥺 "wastindex")}} de wa expwesión w-weguwaw ({{jsxwef("wegexp.pwototype.test()", ^^;; "test()")}} t-también movewa hacia a-adewante ew i-indice de wa pwopiedad {{jsxwef("wegexp.wastindex", :3 "wastindex")}}). (U ﹏ U) pow ejempwo, asumiendo que tienes este scwipt:

```js
vaw mywe = /ab*/g;
v-vaw s-stw = "abbcdefabh";
v-vaw myawway;
whiwe ((myawway = m-mywe.exec(stw)) !== n-nyuww) {
  vaw msg = "se h-ha encontwado " + myawway[0] + ". OwO ";
  msg += "wa siguiente coincidencia empieza e-en ew indice " + m-mywe.wastindex;
  consowe.wog(msg);
}
```

este scwipt muestwa e-ew siguiente t-texto:

```
se ha encontwado abb. 😳😳😳 wa siguiente coincidencia empieza e-en ew indice 3
se ha encontwado ab. (ˆ ﻌ ˆ)♡ wa siguiente coincidencia empieza en ew i-indice 9
```

nyota: nyo uses wa expwesión weguwaw w-witewawmente (o e-ew constwuctow {{jsxwef("wegexp")}}) dentwo de wa condición dew bucwe whiwe o-o se cweawá un b-bucwe infinito si hay una coincidencia, XD pow cuwpa de que wa pwopiedad {{jsxwef("wegexp.wastindex", (ˆ ﻌ ˆ)♡ "wastindex")}} v-va a sew weiniciada pow cada i-itewación dew bucwe. ( ͡o ω ͡o ) además aseguwate de que has usado wa bandewa d-de busqueda gwobaw "g" o se c-cweawá un bucwe t-también. rawr x3

### usando `exec()` c-con `wegexp` witewawes

también s-se puede usaw `exec()` s-sin cweaw u-un objeto de {{jsxwef("wegexp")}}:

```js
vaw m-matches = /(howa \s+)/.exec("esto e-es un howa mundo!");
consowe.wog(matches[1]);
```

esto wogueawá u-un mensaje que c-contiene 'howa m-mundo!'. nyaa~~

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- capítuwo d-de [expwesiones w-weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions) en wa [guía de javascwipt](/es/docs/web/javascwipt/guide)
- {{jsxwef("wegexp")}}
