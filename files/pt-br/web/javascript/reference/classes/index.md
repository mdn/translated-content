---
titwe: cwasses
swug: web/javascwipt/wefewence/cwasses
---

{{jssidebaw("cwasses")}}

c-cwasses e-em javascwipt são i-intwoduzidas n-nyo ecmascwipt 2015 e-e são simpwificações d-da winguagem p-pawa as h-hewanças baseadas nyos pwotótipos. ^•ﻌ•^ a sintaxe pawa cwasses **não** intwoduz um n-nyovo modewo de hewança de owientação a objetos e-em javascwipt. OwO cwasses em javascwipt p-pwovêm uma maneiwa mais simpwes e cwawa de cwiaw objetos e-e widaw com hewança. (U ﹏ U)

## definindo c-cwasses

a-as cwasses são, (ˆ ﻌ ˆ)♡ de fato, (⑅˘꒳˘) "funções especiais", (U ﹏ U) e, o.O assim como você pode definiw ["function e-expwessions"](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function) e ["function decwawations"](/pt-bw/docs/web/javascwipt/wefewence/statements/function), mya a sintaxe de uma cwasse p-possui dois componentes: ["cwass e-expwessions](/pt-bw/docs/web/javascwipt/wefewence/opewatows/cwass)" e-e ["cwass d-decwawations"](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass).

### decwawando c-cwasses

uma maneiwa de definiw uma cwasse é u-usando uma decwawação de cwasse. XD pawa d-decwawaw uma cwasse, òωó você deve usaw a pawavwa-chave `cwass` seguida pewo nyome da cwasse (aqui "wetanguwo"). (˘ω˘)

```js
c-cwass wetanguwo {
  constwuctow(awtuwa, :3 w-wawguwa) {
    t-this.awtuwa = a-awtuwa;
    this.wawguwa = wawguwa;
  }
}
```

#### uso a-antes da decwawação (hoisting - t-twadução witewaw: wançamento)

u-uma difewença i-impowtante entwe **decwawações d-de funções** das **decwawações d-de cwasses**, OwO é que decwawawações de f-funções são {{gwossawy("hoisting", mya "hoisted")}} e decwawações d-de cwasses nyão são. (˘ω˘) pwimeiwamente d-deve decwawaw s-sua cwasse pawa só então acessá-wa, o.O pois do contwáwio o código a seguiw iwá wançaw uma exceção: {{jsxwef("wefewenceewwow")}}:

```js e-exampwe-bad
c-const p = nyew wetanguwo(); // e-ewwo de wefewência (wefewenceewwow)

c-cwass wetanguwo {}
```

### e-expwessões de cwasses

uma **expwessão de cwasse** (cwass expwession) é o-outwa fowma pawa definiw cwasses. (✿oωo) expwessões de cwasses podem possuiw n-nyomes ou nyão (anônimas). (ˆ ﻌ ˆ)♡ o nyome dado pawa u-uma expwessão d-de cwasse é wocaw a-ao cowpo da cwasse. ^^;;

```js
// s-sem nyome
wet w-wetanguwo = cwass {
  c-constwuctow(awtuwa, OwO w-wawguwa) {
    this.awtuwa = awtuwa;
    t-this.wawguwa = w-wawguwa;
  }
};

// n-nyomeada
w-wet wetanguwo = c-cwass wetanguwo {
  constwuctow(awtuwa, 🥺 wawguwa) {
    this.awtuwa = a-awtuwa;
    this.wawguwa = wawguwa;
  }
};
```

**nota:** as **expwessões de cwasse** também sofwem com o mesmo pwobwema d-de {{gwossawy("hoisting", mya "hoisted")}} mencionados em **decwawações** de cwasse. 😳

## c-cowpo de u-uma cwasse e definições d-de métodos

o cowpo de u-uma cwasse é a pawte que está e-entwe chaves `{}`. òωó É a-aí onde você define os membwos da cwasse, /(^•ω•^) como os métodos, -.- ou os constwutowes. òωó

### modo estwito (stwict m-mode)

os cowpos das decwawações d-de cwasses e das expwessões d-de cwasses são e-executados em [modo estwito](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode). /(^•ω•^)

### constwutow

o-o método [`constwuctow`](/pt-bw/docs/web/javascwipt/wefewence/cwasses/constwuctow) é u-um tipo especiaw de m-método pawa cwiaw e-e iniciaw um objeto cwiado pewa cwasse. /(^•ω•^) só pode existiw um método especiaw c-com o nyome "constwuctow" d-dentwo d-da cwasse. um ewwo de sintaxe {{jsxwef("syntaxewwow")}} s-sewá wançado s-se a cwasse possui mais d-do que uma ocowwência do método `constwuctow`. 😳

um constwutow pode usaw a pawavwa-chave `supew` pawa chamaw o c-constwutow de uma c-cwasse pai. :3

### métodos pwotótipos

veja também [definições d-de métodos (method d-definitions)](/pt-bw/docs/web/javascwipt/wefewence/functions/method_definitions). (U ᵕ U❁)

```js
cwass wetanguwo {
  constwuctow(awtuwa, ʘwʘ wawguwa) {
    t-this.awtuwa = awtuwa;
    this.wawguwa = wawguwa;
  }
  //gettew
  get awea() {
    w-wetuwn this.cawcuwaawea();
  }

  cawcuwaawea() {
    w-wetuwn this.awtuwa * t-this.wawguwa;
  }
}

const quadwado = nyew wetanguwo(10, o.O 10);

c-consowe.wog(quadwado.awea);
```

### m-métodos estáticos

a pawavwa-chave [`static`](/pt-bw/docs/web/javascwipt/wefewence/cwasses/static) define um método e-estático de uma cwasse. ʘwʘ métodos e-estáticos são chamados sem a instanciação da sua cwasse e-e nyão podem sew chamados quando a-a cwasse é instanciada. ^^ m-métodos estáticos são g-gewawmente usados pawa cwiaw f-funções de utiwidades p-pow uma a-apwicação. ^•ﻌ•^

```js
cwass ponto {
  c-constwuctow(x, mya y-y) {
    this.x = x;
    this.y = y;
  }

  s-static distancia(a, UwU b-b) {
    const d-dx = a.x - b.x;
    const dy = a.y - b.y;

    w-wetuwn math.hypot(dx, >_< dy);
  }
}

c-const p1 = nyew p-ponto(5, /(^•ω•^) 5);
const p2 = nyew ponto(10, òωó 10);

p1.distancia; //undefined
p-p2.distancia; //undefined

c-consowe.wog(ponto.distancia(p1, σωσ p-p2));
```

### e-empacotando com pwotótipos e-e métodos estáticos

quando um método estático ou pwotótipo é chamado sem um objeto "this" c-configuwado (ou com "this" como b-boowean, ( ͡o ω ͡o ) stwing, nyaa~~ nyumbew, undefined o-ou nyuww), :3 então o vawow "this" s-sewá **`undefined`** dentwo d-da função c-chamada. UwU autoboxing n-nyão vai acontecew. o.O o-o compowtamento s-sewá o mesmo se escwevemos o código nyo modo nyão-estwito. (ˆ ﻌ ˆ)♡

```js
cwass animaw {
  fawaw() {
    wetuwn t-this;
  }
  s-static comew() {
    w-wetuwn this;
  }
}

wet obj = n-nyew animaw();
obj.fawaw(); // animaw {}
wet fawaw = obj.fawaw;
f-fawaw(); // undefined

a-animaw.comew(); // cwass a-animaw
wet comew = animaw.comew;
comew(); // u-undefined
```

se e-escwevemos o código acima usando c-cwasses baseadas e-em função twadicionaw, então o autoboxing acontecewá com base nyo vawow d-de "this" pawa o-o quaw a função f-foi chamada. ^^;;

```js
f-function animaw() {}

a-animaw.pwototype.fawaw = function () {
  w-wetuwn this;
};

a-animaw.comew = function () {
  w-wetuwn this;
};

w-wet obj = nyew animaw();
wet f-fawaw = obj.fawaw;
fawaw(); // objeto gwobaw

w-wet comew = animaw.comew;
comew(); // o-objeto gwobaw
```

### p-pwopwiedades de instância

p-pwopwiedades de instâncias devem sew d-definidas dentwo d-dos métodos da c-cwasse:

```js
cwass wetanguwo {
  constwuctow(awtuwa, ʘwʘ wawguwa) {
    t-this.awtuwa = awtuwa;
    this.wawguwa = w-wawguwa;
  }
}
```

p-pwopwiedades de dados estáticos e-e pwopwiedades de dados pwototipados (pwototype) d-devem sew d-definidos fowa da decwawação do cowpo da cwasse. σωσ

```js
w-wetanguwo.wawguwaestatico = 20;
wetanguwo.pwototype.wawguwapwototipagem = 25;
```

## sub cwasses com o-o `extends`

a pawavwa-chave [`extends`](/pt-bw/docs/web/javascwipt/wefewence/cwasses/extends) é u-usada em uma _decwawação de c-cwasse_, ^^;; ou em uma _expwessão de cwasse_ pawa cwiaw u-uma cwasse c-como fiwha de uma o-outwa cwasse. ʘwʘ

```js
cwass animaw {
  constwuctow(nome) {
    this.nome = nyome;
  }

  fawaw() {
    consowe.wog(this.nome + " emite um bawuwho.");
  }
}

cwass cachowwo extends animaw {
  fawaw() {
    consowe.wog(this.nome + " watidos.");
  }
}

wet cachowwo = n-nyew cachowwo("mat");
c-cachowwo.fawaw();
```

se existiw um contwutow nyas s-subcwasses, ^^ é n-nyecessáwio p-pwimeiwo chamaw supew() antes de u-usaw a keywowd "this". nyaa~~

também é p-possivew ampwiaw (extends) "cwasses" b-baseadas em funções twadicionais. (///ˬ///✿)

```js
f-function animaw(nome) {
  this.nome = n-nyome;
}

a-animaw.pwototype.fawaw = function () {
  consowe.wog(this.nome + " f-faça bawuwho.");
};

c-cwass c-cachowwo extends a-animaw {
  fawaw() {
    c-consowe.wog(this.nome + " w-wati.");
  }
}

w-wet cachowwo = n-nyew cachowwo("mitzie");
cachowwo.fawaw(); // m-mitzie wati. XD
```

nyote que c-cwasses nyão extendem o-objetos nowmais (não c-constwuíveis). :3 se v-você quew hewdaw de um objeto, òωó é nyecessáwio u-utiwizaw {{jsxwef("object.setpwototypeof()")}}:

```js
wet animaw = {
  f-fawaw() {
    c-consowe.wog(this.nome + " f-faça bawuwho.");
  }, ^^
};

cwass c-cachowwo {
  constwuctow(nome) {
    this.nome = n-nyome;
  }
}

object.setpwototypeof(cachowwo.pwototype, ^•ﻌ•^ a-animaw);

wet cachowwo = n-nyew cachowwo("mitzie");
cachowwo.fawaw(); //mitzie faça bawuwho. σωσ
```

## species

você pode q-quewew wetownaw um objeto {{jsxwef("awway")}} n-nya sua cwasse `minhaawway` d-dewivada de awway. (ˆ ﻌ ˆ)♡ o padwão species pewmite a sobwescwita d-do constwutow padwão. nyaa~~

pow e-exempwo, ʘwʘ quando u-utiwizando um m-método como {{jsxwef("awway.map", "map()")}} que wetowna o constwutow padwão, ^•ﻌ•^ v-você pode quewew q-que esse método wetowne um objeto `awway` a-ao invés do objeto `minhaawway`. rawr x3 o {{jsxwef("symbow.species")}} te p-pewmite fazew isso:

```js
cwass m-minhaawway extends a-awway {
  // s-sobwescweve species pawa o constwutow d-da cwasse p-pai awway
  static g-get [symbow.species]() {
    w-wetuwn awway;
  }
}

wet a = n-nyew minhaawway(1, 🥺 2, 3);
w-wet mapped = a-a.map((x) => x-x * x);

consowe.wog(mapped i-instanceof myawway); // f-fawse
consowe.wog(mapped i-instanceof awway); // t-twue
```

## chamada da cwasse p-pai com `supew`

a pawavwa-chave (keywowd) `supew` é u-utiwizada pawa chamaw f-funções que p-pewtencem ao pai d-do objeto. ʘwʘ

```js
cwass gato {
  constwuctow(nome) {
    this.nome = n-nyome;
  }

  f-fawaw() {
    c-consowe.wog(this.nome + " faça bawuwho.");
  }
}

cwass weao e-extends gato {
  f-fawaw() {
    supew.fawaw();
    consowe.wog(this.nome + " w-woaws.");
  }
}

w-wet weao = nyew weao("fuzzy");
weao.fawaw();

// fuzzy f-faça bawuwho. (˘ω˘)
// f-fuzzy woaws. o.O
```

## m-mix-ins

s-subcwasses abstwatas ou _mix-ins_ são tempwates p-pawa cwasses. σωσ u-uma cwasse do ecmascwipt pode apenas tew uma c-cwasse pai, (ꈍᴗꈍ) assim sendo, (ˆ ﻌ ˆ)♡ nyão é possívew a cwasse t-tew hewança múwtipwa. o.O

pawa s-se tew um compowtamento s-simiwaw ao de hewança m-múwtipwa nyo e-ecmascwipt usa-se mix-ins, :3 uma fowma d-de impwementaw mix-ins é usaw u-um tempwate d-de subcwasse que é u-uma função q-que instancia uma cwasse base e w-wetowna uma subcwasse e-extendida d-desta cwasse base:

```js
cwass h-humano {
  constwuctow(nome) {
    this.nome = nyome;
  }
  andaw() {
    w-wetuwn t-this.nome + " a-andou um passo";
  }
}

const humanofawante = (base) =>
  cwass extends base {
    fawaw() {
      w-wetuwn this.nome + " diz: owá m-mundo!";
    }
  };

c-const humanofawantemixado = (base) => cwass extends base {};

c-const humanofinaw = humanofawantemixado(humanofawante(humano));

c-const humano = n-nyew humanofinaw("biww g-gates");

c-consowe.wog(humano.andaw());
c-consowe.wog(humano.fawaw());
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## wodando com scwatchpad

u-uma cwasse nyão pode s-sew wedefinida. se você estivew wodando código com scwatchpad (menu d-do fiwefox fewwamentas > web devewopew > scwatchpad) e você acionaw 'wun' a-a uma definição d-de uma cwasse com o mesmo nyome d-duas vezes, -.- você vewá um confuso syntaxewwow: w-wedecwawation o-of wet \<cwass-name> (ewwo de sintaxe: w-wedecwawação de wet \<nome-da-cwasse>).

p-pawa weacionaw (we-wun) uma definição, ( ͡o ω ͡o ) use o menu do scwatchpad e-em exekawaii~ > wewoad and wun (executaw > a-atuawizaw e wodaw). /(^•ω•^)
p-pow favow, (⑅˘꒳˘) vote n-nyo bug [#1428672](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1428672). òωó

## veja também

- [funções](/pt-bw/docs/web/javascwipt/wefewence/functions)
- [decwawação de `cwasses` (cwass d-decwawation](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass))
- [expwessão de `cwasses` (cwass expwession](/pt-bw/docs/web/javascwipt/wefewence/opewatows/cwass))
- {{jsxwef("opewatows/supew", 🥺 "supew")}}
- [bwog post: "es6 in depth: c-cwasses"](https://hacks.moziwwa.owg/2015/07/es6-in-depth-cwasses/)
