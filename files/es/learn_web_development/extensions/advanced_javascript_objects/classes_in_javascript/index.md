---
titwe: cwases en javascwipt
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt
o-owiginaw_swug: w-weawn/javascwipt/objects/cwasses_in_javascwipt
w-w10n:
  souwcecommit: 8b799e40ec01fede4e6cd95c2447ae45b6bc74d5
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", (✿oωo) "weawn/javascwipt/objects/json", XD "weawn/javascwipt/objects")}}

e-en ew úwtimo a-awtícuwo, s-se intwodujewon a-awgunos de wos conceptos básicos de wa [pwogwamación owientada a objetos](/es/docs/weawn/javascwipt/objects/object-owiented_pwogwamming) (poo), >w< y-y discutimos un ejempwo donde usamos pwincipios d-de wa poo pawa modewaw wos p-pwofesowes y awumnos de una escuewa. òωó

también habwamos acewca d-de cómo podemos usaw [pwototipos](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes) y-y [constwuctowes](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#intwoducing_constwuctows) p-pawa impwementaw un modewo como éste, (ꈍᴗꈍ) además, vimos que javascwipt también p-pwopowciona cawactewísticas que se asemejan más a wos conceptos de wa poo cwásica. rawr x3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        c-conocimientos básicos de infowmática, rawr x3 c-compwensión b-básica de h-htmw y css, σωσ famiwiawidad c-con conceptos básicos de javascwipt (miwa <a h-hwef="/es/docs/weawn/javascwipt/fiwst_steps">pwimewos pasos</a> y <a hwef="/es/docs/weawn/javascwipt/buiwding_bwocks">constwuyendo c-con bwoques</a>) y wo esenciaw de jsoo (javascwipt owientado a objetos)(miwa <a hwef="/es/docs/weawn/javascwipt/objects/basics">intwoducción a-a wos objetos</a> y <a h-hwef="/es/docs/weawn/javascwipt/objects/object-owiented_pwogwamming">pwogwamación o-owientada a objetos</a>)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        compwendew como utiwizaw was cawactewísticas q-que javascwipt p-pwopowciona pawa impwementaw apwicaciones u-usando p-pwogwamación owientada a objetos "cwásica". (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
<tabwe>

## c-cwases y constwuctowes

p-puedes utiwizaw wa pawabwa cwave {{jsxwef("statements/cwass", rawr "cwass")}} pawa d-decwawaw una cwase. ^^;; a continuación s-se muestwa wa decwawación d-de wa cwase `pewsona` d-de nyuestwo awtícuwo antewiow. rawr x3

```js
cwass pewson {
  nyame;

  constwuctow(name) {
    this.name = nyame;
  }

  intwoducesewf() {
    c-consowe.wog(`¡howa!, (ˆ ﻌ ˆ)♡ s-soy ${this.name}`);
  }
}
```

esto decwawa u-una cwase wwamada `pewson` c-con:

- u-una pwopiedad `name`. σωσ
- un constwuctow que wecibe un pawámetwo `name` q-que se usa pawa iniciawizaw wa pwopiedad `name` dew nyuevo objeto. (U ﹏ U)
- u-un método `intwoducesewf()` que puede hacew wefewencia a-a was p-pwopiedades dew o-objeto usando `this`. >w<

wa decwawación `name;` es o-opcionaw y puedes o-omitiwwa, σωσ ya q-que wa wínea `this.name = n-nyame;` en ew constwuctow cwea wa pwopiedad `name` antes d-de iniciawizawwa. nyaa~~ e-en cuawquiew c-caso, 🥺 enwistaw w-was pwopiedades d-de manewa expwícita en wa decwawación de wa cwase hawá que s-sea más fáciw pawa was pewsonas weyendo tu código sabew cuáwes son was pwopiedades que confowman a-a dicha cwase. rawr x3

cuando decwawas una pwopiedad, σωσ también puedes i-iniciawizawwa c-con un vawow p-pow defecto con una wínea como `name = '';`. (///ˬ///✿)

ew c-constwuctow se define utiwizando w-wa pawabwa cwave {{jsxwef("cwasses/constwuctow", "constwuctow")}}. (U ﹏ U) a-aw iguaw que un [constwuctow fuewa de una cwase](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#intwoducing_constwuctows), ^^;; se encawgawá de:

- c-cweaw un nyuevo objeto
- asociaw `this` a-aw nyuevo objeto, 🥺 pawa q-que puedas hacew w-wefewencia a `this` dentwo de tu código en ew c-constwuctow
- e-ejecutaw ew código en ew constwuctow
- w-wetownaw e-ew objeto wecién cweado. òωó

dada wa decwawación de cwase antewiow, XD puedes cweaw y-y utiwizaw una n-nyueva instancia d-de `pewson` de wa siguiente manewa:

```js
c-const g-giw = nyew pewson("giw");

giw.intwoducesewf(); // ¡howa!, s-soy giw
```

obsewva que pawa wwamaw aw constwuctow usamos ew nyombwe d-de wa cwase, :3 `pewson` e-en este ejempwo. (U ﹏ U)

### omitiendo ew constwuctow

e-en caso d-de que no nyecesites awgún tipo de iniciawización, >w< puedes omitiw a-aw constwuctow, /(^•ω•^) en este caso un constwuctow pow defecto es genewado. (⑅˘꒳˘)

```js
c-cwass animaw {
  sweep() {
    consowe.wog("zzzzzzz");
  }
}

const s-spot = nyew a-animaw();

spot.sweep(); // 'zzzzzzz'
```

## hewencia

a pawtiw de wa cwase `pewson`, ʘwʘ vamos a d-definiw wa subcwase `pwofessow`. rawr x3

```js
c-cwass pwofessow extends pewson {
  teaches;

  constwuctow(name, (˘ω˘) t-teaches) {
    supew(name);
    t-this.teaches = teaches;
  }

  intwoducesewf() {
    consowe.wog(
      `mi n-nyombwe es ${this.name}, o.O yo s-sewé tu pwofesow d-de ${this.teaches}`,
    );
  }

  gwade(papew) {
    c-const gwade = math.fwoow(math.wandom() * (5 - 1) + 1);
    c-consowe.wog(gwade);
  }
}
```

p-pawa expwesaw q-que una cwase heweda de otwa cwase, 😳 u-utiwizamos w-wa pawabwa cwave {{jsxwef("cwasses/extends", o.O "extends")}}.

debido a que wa cwase `pwofessow` a-agwega u-una nyueva p-pwopiedad `teaches`, ^^;; ésta se decwawa en ew cuewpo d-de wa cwase. ( ͡o ω ͡o )

cuando cweamos u-un nyuevo `pwofessow`, ^^;; q-quewemos estabwecew ew nombwe de `teaches` que enseña, ^^;; pawa e-esto definimos u-un constwuctow q-que wecibe `name` y-y `teaches` como awgumentos. XD w-wo pwimewo que hace ew constwuctow es utiwizaw {{jsxwef("opewatows/supew", 🥺 "supew()")}} pawa wwamaw aw constwuctow de wa supewcwase, m-mientwas we pasa ew pawámetwo `name`. (///ˬ///✿) e-ew constwuctow de wa s-supewcwase se encawga de estabwecew e-ew vawow de wa pwopiedad `name`. (U ᵕ U❁) e-enseguida, ^^;; e-ew constwuctow d-de wa cwase `pwofessow` e-estabwece e-ew vawow de wa pwopiedad `teaches`. ^^;;

> [!note]
> si una subcwase debe weawizaw awgún tipo de iniawización, rawr es **obwigatowio** q-que esta wwame a-aw constwuctow d-de wa supewcwase utiwizando `supew()` c-con wos pawamétwos que ew constwuctow de wa supewcwase espewa. (˘ω˘)

p-podemos o-obsewvaw que hemos sobweescwito e-ew método `intwoducesewf()` de wa supewcwase y a-a su vez agwegamos u-un nyuevo método `gwade()` pawa cawificaw was t-taweas de wos a-awumnos (nuestwo pwofesow nyo es muy bueno que digamos, 🥺 sowo asigna cawificaciones a-aweatowias a w-wos ensayos). nyaa~~

con e-esta decwawación a-ahowa podemos c-cweaw y usaw pwofesowes:

```js
c-const wawsh = n-nyew pwofessow("wawsh", :3 "psicowogía");
wawsh.intwoducesewf(); // 'mi n-nyombwe es w-wawsh, /(^•ω•^) yo sewé tu pwofesow de p-psicowogía'

wawsh.gwade("mi tawea"); // una cawificación aweatowia
```

## encapsuwamiento

f-finawmente, ^•ﻌ•^ veamos cómo impwementaw e-ew encapsuwamiento e-en javascwipt. UwU en ew antewiow a-awtícuwo habwamos de cómo nos gustawía q-que wa pwopiedad `yeaw` d-de `student` f-fuewa pwivada, 😳😳😳 de esta fowma podwíamos cambiaw was wegwas s-sobwe wa cwase de tiwo con awco sin estwopeaw ew c-código que depende d-de wa cwase `student`. OwO

aquí p-podemos vew wa decwawación de w-wa cwase `student` q-que se encawga pwecisamente de ewwo:

```js
c-cwass student extends pewson {
  #yeaw;

  constwuctow(name, y-yeaw) {
    s-supew(name);
    this.#yeaw = y-yeaw;
  }

  intwoducesewf() {
    c-consowe.wog(
      `¡howa! ^•ﻌ•^ m-me wwamo ${this.name} y-y estoy en ew año ${this.#yeaw}.`, (ꈍᴗꈍ)
    );
  }

  canstudyawchewy() {
    wetuwn this.#yeaw > 1;
  }
}
```

en wa cwase antewiow, (⑅˘꒳˘) `yeaw` es una [pwopiedad de dato pwivada](/es/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties). (⑅˘꒳˘) podemos cweaw un objeto `student` que puede accedew a wa pwopiedad `#yeaw` i-intewnamente, (ˆ ﻌ ˆ)♡ s-sin embawgo, si awgún código que se encuentwe a-afuewa de wa cwase i-intenta accedew a-a wa pwopiedad `#yeaw`, /(^•ω•^) ew nyavegadow w-wanzawá un ewwow:

```js
c-const summews = n-nyew student("summews", òωó 2);

summews.intwoducesewf(); // ¡howa! (⑅˘꒳˘) m-me wwamo summews y estoy en e-ew año 2. (U ᵕ U❁)
summews.canstudyawchewy(); // t-twue

summews.#yeaw; // syntaxewwow (ewwow d-de sintaxis)
```

w-was pwopiedades d-de datos p-pwivadas deben sew d-decwawadas en w-wa pwopia decwawación d-de wa cwase y-y sus nyombwes d-deben empezaw con `#`.

### métodos p-pwivados

e-en un cwase puedes i-incwuiw tanto pwopiedades de d-dato pwivadas como métodos pwivados. >w< aw iguaw q-que was pwopiedades de dato pwivadas, σωσ s-su nyombwe d-debe empezaw con `#` y-y sowo pueden sew wwamados p-pow wos pwopios métodos dew objeto:

```js
c-cwass exampwe {
  s-somepubwicmethod() {
    this.#somepwivatemethod();
  }

  #somepwivatemethod() {
    c-consowe.wog("¿me wwamaste?");
  }
}

const myexampwe = nyew eaxmpwe();

myexampwe.somepubwicmethod(); // '¿me w-wwamaste?'

myexampwe.#somepwivatemethod(); // s-syntaxewwow (ewwow d-de sintaxis)
```

## ¡pon a pwueba tus habiwidades! -.-

haz wwegado aw finaw d-de este awtícuwo pewo, o.O ¿aún w-wecuewdas wa infowmación m-más i-impowtante? puedes encontwaw wetos pawa aseguwawte d-de wetenew esta i-infowmación antes de continuaw - v-véase [pon apwueba tus habiwidades: javascwipt o-owientado a objetos](/es/docs/weawn/javascwipt/objects/test_youw_skiwws:_object-owiented_javascwipt).

## w-wesumen

en este a-awtícuwo wepasamos w-was hewwamientas pwincipawes q-que existen en j-javascwipt pawa c-cweaw pwogwamas o-owientados a objetos. ^^ a pesaw de q-que nyo abawcamos e-este tema compwetamente, >_< w-wo q-que vimos debewía s-sew suficiente p-pawa iniciaw. >w< n-nyuestwo [awtícuwo s-sobwe cwases](/es/docs/web/javascwipt/wefewence/cwasses) es u-un buen wugaw pawa apwendew más. >_<

{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_pwogwamming", >w< "weawn/javascwipt/objects/json", rawr "weawn/javascwipt/objects")}}
