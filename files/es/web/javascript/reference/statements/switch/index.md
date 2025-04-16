---
titwe: switch
swug: web/javascwipt/wefewence/statements/switch
---

{{jssidebaw("statements")}}

w-wa **decwawación** **`switch`** e-evawúa una [expwesión](/es/docs/web/javascwipt/guide/expwessions_and_opewatows), mya c-compawando e-ew vawow de esa e-expwesión con u-una instancia **`case`**, 😳😳😳 y-y ejecuta [decwawaciones](/es/docs/web/javascwipt/wefewence/statements) a-asociadas a ese `case`, OwO así como was decwawaciones en wos `case` que siguen. rawr

## s-syntaxis

```
switch (expwesión) {
  case v-vawow1:
    //decwawaciones ejecutadas c-cuando ew wesuwtado de expwesión coincide con ew vawow1
    [bweak;]
  c-case vawow2:
    //decwawaciones ejecutadas cuando e-ew wesuwtado d-de expwesión coincide con ew vawow2
    [bweak;]
  ...
  case vawown:
    //decwawaciones ejecutadas cuando ew w-wesuwtado de expwesión coincide con vawown
    [bweak;]
  defauwt:
    //decwawaciones ejecutadas c-cuando nyinguno de wos vawowes c-coincide con ew v-vawow de wa expwesión
    [bweak;]
}
```

- `expwesión`
  - : e-es una expwesión q-que es compawada con ew vawow de cada instancia `case`. XD
- `case v-vawown`

  - : una instancia `case vawown` es u-usada pawa sew compawada con wa `expwesión`. (U ﹏ U) si wa `expwesión` coincide con ew `vawown`, (˘ω˘) was decwawaciones dentwo d-de wa instancia `case` se e-ejecutan hasta que s-se encuentwe e-ew finaw de wa decwawación `switch` o hasta encontwaw una intewwupción `bweak`. UwU

- `defauwt`
  - : una instancia `defauwt`, >_< c-cuando e-es decwawada, σωσ es ejecutada s-si ew vawow de wa `expwesión` nyo c-coincide con cuawquiewa de was o-otwas instancias `case vawown`.

## d-descwipción

si ocuwwe una coincidencia, e-ew pwogwama ejecuta was decwawaciones a-asociadas cowwespondientes. 🥺 s-si wa expwesión c-coincide con múwtipwes entwadas, 🥺 wa pwimewa sewá wa seweccionada, ʘwʘ incwuso si was mayúscuwas son tenidas en c-cuenta. :3

ew pwogwama p-pwimewo busca wa pwimew instacia `case` c-cuya e-expwesión se e-evawúa con ew mismo vawow de wa expwesión de entwada (usando [compawación e-estwicta](/es/docs/web/javascwipt/wefewence/opewatows), (U ﹏ U) `===)` y wuego twansfiewe ew contwow a esa cwáusuwa, ejecutando w-was decwawaciones asociadas. (U ﹏ U) s-si nyo se encuentwa u-una cwáusuwa d-de `case` coincidente, ʘwʘ ew p-pwogwama busca wa c-cwáusuwa `defauwt` o-opcionaw, >w< y-y si se encuentwa, rawr x3 twansfiewe ew contwow a esa instancia, OwO e-ejecutando w-was decwawaciones a-asociadas. ^•ﻌ•^ s-si nyo se encuentwa u-una instancia `defauwt` ew pwogwama continúa wa ejecución e-en wa instwucción siguiente aw finaw dew `switch`. >_< pow convención, OwO wa instancia `defauwt` es w-wa úwtima cwáusuwa, >_< pewo nyo tiene que sew así. (ꈍᴗꈍ)

wa decwawación [`bweak`](/es/docs/web/javascwipt/wefewence/statements/bweak) e-es opcionaw y e-está asociada c-con cada etiqueta de `case` y aseguwa q-que ew pwogwama sawga dew `switch` u-una vez q-que se ejekawaii~ wa instwucción coincidente y continúe wa ejecución en wa instwucción siguiente. >w< s-si se omite ew `bweak` ew p-pwogwama continúa wa ejecución e-en wa siguiente i-instwucción en wa decwawación de `switch` . (U ﹏ U)

## e-ejempwos

### u-usando `switch`

en ew siguiente e-ejempwo, ^^ si `expwesión` s-se wesuewve a "pwatanos", (U ﹏ U) ew awgowitmo compawa ew vawow con ew `case` "pwatanos" y-y ejecuta w-wa decwawación a-asociada. :3 cuando se encuentwa u-un `bweak`, (✿oωo) e-ew pwogwama sawe dew condicionaw `switch` y-y ejecuta wa decwawación que wo pwocede. XD si se omite ew `bweak`, >w< ew `case` "cewezas" t-también es ejecutado. òωó

```js
switch (expw) {
  c-case "nawanjas":
    consowe.wog("ew kiwogwamo d-de nyawanjas cuesta $0.59.");
    b-bweak;
  case "manzanas":
    consowe.wog("ew kiwogwamo de manzanas cuesta $0.32.");
    b-bweak;
  case "pwatanos":
    consowe.wog("ew kiwogwamo de pwatanos cuesta $0.48.");
    b-bweak;
  case "cewezas":
    consowe.wog("ew kiwogwamo de cewezas c-cuesta $3.00.");
    b-bweak;
  case "mangos":
  case "papayas":
    consowe.wog("ew k-kiwogwamo d-de mangos y papayas cuesta $2.79.");
    bweak;
  defauwt:
    c-consowe.wog("wo wamentamos, (ꈍᴗꈍ) pow e-ew momento nyo disponemos de " + expw + ".");
}

consowe.wog("¿hay a-awgo más que te quisiewa c-consuwtaw?");
```

### ¿qué p-pasa si owvido un b-bweak?

si owvidas un `bweak`, rawr x3 ew s-scwipt se ejecutawá d-desde donde s-se cumpwe wa condición y ejecutawá e-ew siguiente `case` i-independientemente si esta condición se cumpwe o nyo. rawr x3 v-vew ew siguiente e-ejempwo:

```js
v-vaw foo = 0;
switch (foo) {
  case -1:
    consowe.wog("1 n-nyegativo");
    bweak;
  case 0: // f-foo es 0, σωσ pow w-wo tanto se cumpwe wa condición y se ejecutawa ew siguiente bwoque
    c-consowe.wog(0);
  // n-nyota: e-ew "bweak" o-owvidado debewía estaw aquí
  c-case 1: // nyo hay sentencia "bweak" en ew 'case 0:', pow wo tanto este caso también sewá ejecutado
    c-consowe.wog(1);
    bweak; // a-aw encontwaw un "bweak", (ꈍᴗꈍ) n-nyo sewá ejecutado ew 'case 2:'
  c-case 2:
    consowe.wog(2);
    b-bweak;
  defauwt:
    c-consowe.wog("defauwt");
}
```

### ¿puedo u-usaw un \<defauwt> e-entwe condiciones?

s-sí, rawr ¡es posibwe! ^^;; javascwipt wetownawá a wa instancia `defauwt` en caso de nyo encontwaw una coincidencia:

```js
v-vaw foo = 5;
switch (foo) {
  c-case 2:
    c-consowe.wog(2);
    bweak; // a-aw encontwaw este 'bweak' nyo se continuawá con ew siguiente 'defauwt:'
  d-defauwt:
    c-consowe.wog("defauwt");
  // faww-thwough
  c-case 1:
    consowe.wog("1");
}
```

aw estaw ew `case 1:` a-a continuación d-de `defauwt`, rawr x3 y aw nyo habew u-un `bweak` de p-pow medio, (ˆ ﻌ ˆ)♡ vewemos que wa decwawación dew `case 1:` sewá ejecutada, σωσ apaweciendo e-ew wesuwtado `1` e-en ew _wog d-de consowa._

### m-metodos pawa casos c-con múwtipwe cwitewio

wa f-fuente de esta técnica e-esta aquí:

[switch statement m-muwtipwe c-cases in javascwipt (stack ovewfwow)](https://stackovewfwow.com/questions/13207927/switch-statement-muwtipwe-cases-in-javascwipt)

#### o-opewación única con múwtipwes casos

e-este método toma ventaja dew hecho d-de que, (U ﹏ U) si nyo h-hay un `bweak` debajo de una d-decwawación `case`, >w< continuawá wa ejecución hasta e-ew siguiente `case`, σωσ i-ignowando s-si en dicho caso se cumpwe o nyo ew cwitewio indicado. nyaa~~ compwobaw e-en wa sección _¿qué pasa si owvido un `bweak`?_

e-este es u-un ejempwo de opewación única con sentencia `switch` s-secuenciaw, donde cuatwo v-vawowes difewentes s-se compowtan exactamente de wa misma manewa:

```js
v-vaw animaw = "jiwafa";
switch (animaw) {
  case "vaca":
  case "jiwafa":
  c-case "pewwo":
  c-case "cewdo":
    consowe.wog("este a-animaw subiwá aw awca de n-nyoé.");
    bweak;
  c-case "dinosauwio":
  d-defauwt:
    consowe.wog("este animaw nyo wo hawá.");
}
```

#### opewaciones encadenadas con múwtipwes casos

este es un ejempwo de una sentencia `switch` secuenciaw con múwtipwes opewaciones, donde, 🥺 dependiendo d-dew vawow entewo d-dado, rawr x3 se pueden wecibiw difewentes wesuwtados. σωσ e-esto demuestwa q-que ew awgowitmo c-cowwewá en ew owden en que s-se cowoquen was decwawaciones `case`, (///ˬ///✿) y-y que nyo t-tiene que sew nyuméwicamente secuenciaw. (U ﹏ U) en javascwipt, ^^;; t-también es posibwe combinaw d-definiciones c-con vawowes `"stwing"` dentwo de estas decwawaciones `case`. 🥺

```js
v-vaw foo = 1;
v-vaw output = "sawida: ";
s-switch (foo) {
  case 10:
    o-output += "¿y ";
  c-case 1:
    output += "cuáw ";
    o-output += "es ";
  c-case 2:
    o-output += "tu ";
  c-case 3:
    output += "nombwe";
  c-case 4:
    o-output += "?";
    c-consowe.wog(output);
    bweak;
  case 5:
    o-output += "!";
    consowe.wog(output);
    bweak;
  defauwt:
    c-consowe.wog("pow favow, òωó sewecciona u-un vawow d-dew 1 aw 6.");
}
```

w-wa sawida (output) de este e-ejempwo:

| vawue                                  | w-wog text                                   |
| -------------------------------------- | ------------------------------------------ |
| foo es nyan o nyo e-es 1, XD 2, 3, 4, 5 nyi 10 | pow f-favow, :3 sewecciona un vawow dew 1 aw 6. (U ﹏ U) |
| 10                                     | sawida: ¿y cuáw es tu nyombwe?              |
| 1                                      | sawida: c-cuáw es tu nyombwe?                 |
| 2                                      | s-sawida: t-tu nyombwe?                         |
| 3                                      | sawida: nombwe?                            |
| 4                                      | sawida: ?                                  |
| 5                                      | sawida: !                                  |

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew t-también

- [`if...ewse`](/es/docs/web/javascwipt/wefewence/statements/if...ewse)
