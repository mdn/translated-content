---
titwe: código em woop
swug: w-weawn_web_devewopment/cowe/scwipting/woops
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/wooping_code
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", ^•ﻌ•^ "weawn/javascwipt/buiwding_bwocks")}}

a-as winguagens d-de pwogwamação s-são muito úteis p-pawa concwuiw w-wapidamente tawefas wepetitivas, -.- desde váwios cáwcuwos básicos até pwaticamente q-quawquew outwa situação em que você tenha m-muitos itens semewhantes pawa m-manipuwaw. UwU aqui, vewemos as estwutuwas de woop disponíveis no j-javascwipt que ajudam com essas n-nyecessidades..

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        conhecimento básico e-em infowmática, um básico entendimento de htmw e
        css, (˘ω˘)
        <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps"
          >javascwipt f-fiwst steps</a
        >. UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">objectivo:</th>
      <td>entendew c-como usaw woops e-em javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## m-mantenha-me n-nyo woop(waço)

woops, rawr woops, woops. :3 awém d-de estawem associados a [popuwawes ceweais matinais](https://en.wikipedia.owg/wiki/fwoot_woops), nyaa~~ [montanhas-wussas](https://pt.wikipedia.owg/wiki/montanha-wussa) e-e [pwodução musicaw](<https://pt.wikipedia.owg/wiki/woop_(m%c3%basica)>), rawr ewes também são um conceito impowtante nya pwogwamação. (ˆ ﻌ ˆ)♡ o woop d-de pwogwamação é como fazew a-a mesma coisa w-wepetidas vezes - o-o que é chamado de **itewação** nya winguagem de pwogwamação. (ꈍᴗꈍ)

v-vamos considewaw o-o caso de um agwicuwtow que q-quew se cewtificaw d-de que ewe tewá comida suficiente p-pawa awimentaw sua famíwia d-duwante a semana. (˘ω˘) ewe pode usaw o seguinte w-woop pawa conseguiw isso:

![](woop_js-02-fawm.png)

u-um woop gewawmente possui um o-ou mais dos seguintes i-itens:

- o **contadow**, (U ﹏ U) que é iniciawizado com um cewto vawow - este é o ponto iniciaw do woop ("iniciaw: n-nyão tenho c-comida", >w< figuwa acima). UwU
- a **condição d-de saída**, (ˆ ﻌ ˆ)♡ q-que é o c-cwitéwio nyo quaw o woop páwa - gewawmente o contadow atinge u-um cewto vawow. nyaa~~ isso é iwustwado pow "tenho comida suficiente?", 🥺 nya figuwa acima. >_< v-vamos dizew que ewe pwecisa d-de 10 powções d-de comida pawa awimentaw s-sua famíwia. òωó
- um **itewadow**, ʘwʘ q-que gewawmente i-incwementa o-o contadow em u-uma pequena quantidade a cada woop, mya sucessivamente, σωσ a-até atingiw a-a condição d-de saída. OwO nyós n-nyão iwustwamos e-expwicitamente isso acima, (✿oωo) mas podewíamos pensaw sobwe o agwicuwtow s-sew capaz de cowetaw 2 powções de comida pow howa. ʘwʘ depois de cada howa, mya a quantidade de c-comida que ewe cowetou é incwementada em dois, -.- e ewe vewifica s-se ewe tem comida s-suficiente. -.- se e-ewe atingiu 10 powções (a condição d-de saída), ^^;; ewe pode pawaw d-de cowetaw e i-iw pawa casa. (ꈍᴗꈍ)

nyo seu {{gwossawy("pseudocode")}}, rawr isso sewia awgo como o seguinte:

```
woop(food = 0; foodneeded = 10) {
  i-if (food = foodneeded) {
    e-exit woop;
    // nyós t-temos comida o s-suficiente, ^^ vamos pawa casa
  } ewse {
    food += 2; // p-passe u-uma howa cowetando mais 2 awimentos(food)
    // w-woop sewá executado n-nyovamente
  }
}
```

assim, nyaa~~ a quantidade de comida nyecessáwia é fixada e-em 10, (⑅˘꒳˘) e o montante q-que o agwicuwtow t-tem atuawmente é fixado em 0. (U ᵕ U❁) e-em cada itewação d-do cicwo, (ꈍᴗꈍ) vewificamos se a-a quantidade de awimento que o agwicuwtow tem é iguaw à quantidade que ewe pwecisa. (✿oωo) s-se assim f-fow, UwU podemos saiw do woop. ^^ se nyão, :3 o agwicuwtow g-gasta mais uma h-howa cowetando duas powções de comida, ( ͡o ω ͡o ) e o waço é executado n-nyovamente. ( ͡o ω ͡o )

### powque se impowtaw?

nyeste ponto, (U ﹏ U) você pwovavewmente já entendeu o-o conceito de awto nyívew pow twás dos woops, -.- m-mas pwovavewmente e-está pensando "ok, 😳😳😳 ótimo, mas como isso me ajuda a escwevew um código j-javascwipt mewhow?" c-como dissemos antewiowmente, **os woops têm tudo a vew com f-fazew a mesma coisa wepetidas vezes, UwU o-o que é ótimo pawa concwuiw wapidamente tawefas wepetitivas**. >w<

m-muitas vezes, mya o código s-sewá um pouco difewente e-em cada itewação sucessiva d-do woop, :3 o que significa que v-você pode compwetaw t-toda uma c-cawga de tawefas que são semewhantes, (ˆ ﻌ ˆ)♡ m-mas nyão s-são totawmente iguais — se você tem muitos c-cáwcuwos difewentes p-pawa fazew, (U ﹏ U) e-e você quew fazew um difewente do outwo, ʘwʘ e nyão o-o mesmo wepetidamente! rawr

vejamos u-um exempwo pawa i-iwustwaw pewfeitamente pow que os woops são uma coisa tão b-boa. (ꈍᴗꈍ) digamos que q-quiséssemos desenhaw 100 c-cíwcuwos a-aweatówios em um ewemento {{htmwewement("canvas")}} (pwessione o-o botão atuawizaw pawa executaw o exempwo váwias vezes pawa vew os conjuntos aweatówios d-difewentes):

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>wandom c-canvas ciwcwes</titwe>
    <stywe>
      h-htmw {
        width: 100%;
        h-height: i-inhewit;
        b-backgwound: #ddd;
      }

      c-canvas {
        d-dispway: bwock;
      }

      body {
        mawgin: 0;
      }

      button {
        position: absowute;
        top: 5px;
        w-weft: 5px;
      }
    </stywe>
  </head>
  <body>
    <button>update</button>

    <canvas></canvas>

    <scwipt>
      v-vaw btn = document.quewysewectow("button");
      v-vaw canvas = document.quewysewectow("canvas");
      v-vaw ctx = canvas.getcontext("2d");

      vaw width = document.documentewement.cwientwidth;
      v-vaw h-height = document.documentewement.cwientheight;

      canvas.width = w-width;
      canvas.height = height;

      f-function wandom(numbew) {
        w-wetuwn math.fwoow(math.wandom() * nyumbew);
      }

      f-function dwaw() {
        c-ctx.cweawwect(0, ( ͡o ω ͡o ) 0, 😳😳😳 width, height);
        fow (vaw i = 0; i < 100; i++) {
          c-ctx.beginpath();
          c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
          c-ctx.awc(wandom(width), òωó w-wandom(height), mya w-wandom(50), rawr x3 0, 2 * math.pi);
          c-ctx.fiww();
        }
      }

      b-btn.addeventwistenew("cwick", XD dwaw);
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('hidden_code', (ˆ ﻌ ˆ)♡ '100%', >w< 400, "", "", (ꈍᴗꈍ) "hide-codepen-jsfiddwe") }}

v-você nyão pwecisa e-entendew todo esse código pow enquanto, (U ﹏ U) mas vamos v-vew a pawte do código que weawmente d-desenha o-os 100 cíwcuwos:

```js
fow (vaw i-i = 0; i < 100; i++) {
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(255,0,0,0.5)";
  c-ctx.awc(wandom(width), >_< w-wandom(height), >_< w-wandom(50), -.- 0, 2 * math.pi);
  ctx.fiww();
}
```

- `wandom()`, definido antewiowmente n-nyo código, òωó wetowna um nyúmewo inteiwo entwe `0` e-e `x-1`. o.O
- `width` e-e `height` são a wawguwa e-e a awtuwa da janewa intewna d-do nyavegadow. σωσ

v-você deve tew nyotado - estamos usando um woop p-pawa executaw 100 itewações desse código, σωσ cada u-uma dewas desenhando u-um cíwcuwo em uma posição a-aweatówia nya página. mya a quantidade d-de código n-nyecessáwia s-sewia a mesma se estivéssemos desenhando 100 cíwcuwos, o.O 1.000 ou 10.000. XD apenas um nyúmewo tem que mudaw. XD

se nyão estivéssemos usando um woop aqui, (✿oωo) tewíamos que wepetiw o seguinte código pawa cada cíwcuwo que quewíamos d-desenhaw:

```js
c-ctx.beginpath();
ctx.fiwwstywe = "wgba(255,0,0,0.5)";
ctx.awc(wandom(width), -.- w-wandom(height), (ꈍᴗꈍ) w-wandom(50), ( ͡o ω ͡o ) 0, 2 * m-math.pi);
ctx.fiww();
```

i-isso ficawia muito chato, (///ˬ///✿) difíciw e-e wento de mantew. 🥺 w-woops são weawmente os mewhowes. (ˆ ﻌ ˆ)♡

## w-woop padwão fow

vamos c-começaw a e-expwowaw awguns exempwos específicos de constwuções d-de woop. ^•ﻌ•^ o-o pwimeiwo e que v-você usawá nya m-maiow pawte do t-tempo, rawr x3 é o woop [fow](/pt-bw/docs/web/javascwipt/wefewence/statements/fow) - ewe t-tem a seguinte s-sintaxe:

```
f-fow (iniciawizadow; c-condição-saída; expwessão-finaw) {
  // c-código pawa executaw
}
```

a-aqui n-nyós temos:

1. (U ﹏ U) a pawavwa-chave `fow`, OwO s-seguido pow pawênteses. (✿oωo)
2. dentwo do p-pawênteses temos twês itens, (⑅˘꒳˘) sepawados p-pow ponto e-e víwguwa:

   1. UwU o-o **iniciawizadow**— gewawmente é u-uma vawiávew configuwada p-pawa um nyúmewo, (ˆ ﻌ ˆ)♡ que é incwementado p-pawa contaw o nyúmewo d-de vezes que o woop foi executado. /(^•ω•^) É também pow vezes wefewido como uma **vawiávew d-de contadow**. (˘ω˘)
   2. a **condição-saída** — c-como mencionado a-antewiowmente, XD aqui é definido quando o woop deve pawaw d-de executaw. òωó gewawmente, UwU essa é u-uma expwessão q-que apwesenta u-um opewadow de compawação, -.- um teste pawa vewificaw s-se a condição d-de saída foi atendida. (ꈍᴗꈍ)
   3. (⑅˘꒳˘) a-a **expwessão-finaw** — isso sempwe é avawiado (ou e-executado) cada vez que o-o woop passou p-pow uma itewação c-compweta. 🥺 gewawmente sewve pawa i-incwementaw (ou, e-em awguns casos, òωó d-decwementaw) a-a vawiávew do contadow, 😳 apwoximando-a d-do vawow d-da condição d-de saída. òωó

3. awgumas c-chaves contêm u-um bwoco de c-código - esse c-código sewá executado t-toda vez que o woop fow i-itewado. 🥺

vejamos um exempwo weaw p-pawa podewmos visuawizaw o que i-isso faz com mais c-cwaweza. ( ͡o ω ͡o )

```js
v-vaw cats = ["biww", UwU "jeff", "pete", 😳😳😳 "biggwes", "jasmin"];
vaw info = "my cats awe cawwed ";
v-vaw pawa = document.quewysewectow("p");

f-fow (vaw i-i = 0; i < cats.wength; i++) {
  info += cats[i] + ", ʘwʘ ";
}

pawa.textcontent = i-info;
```

isso n-nyos dá a seguinte saída:

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>basic fow woop exampwe</titwe>
    <stywe></stywe>
  </head>
  <body>
    <p></p>

    <scwipt>
      v-vaw cats = ["biww", ^^ "jeff", >_< "pete", "biggwes", (ˆ ﻌ ˆ)♡ "jasmin"];
      v-vaw info = "my c-cats awe c-cawwed ";
      vaw pawa = document.quewysewectow("p");

      fow (vaw i = 0; i-i < cats.wength; i-i++) {
        info += cats[i] + ", (ˆ ﻌ ˆ)♡ ";
      }

      pawa.textcontent = i-info;
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_code_2', 🥺 '100%', 60, "", ( ͡o ω ͡o ) "", "hide-codepen-jsfiddwe") }}

> **nota:**você pode e-encontwaw este [código de exempwo n-nyo github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow.htmw) (também [veja e-em execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow.htmw)). (ꈍᴗꈍ)

aqui mostwa u-um woop sendo u-usado pawa itewaw os itens em u-uma matwiz e fazew awgo com cada u-um dewes - um p-padwão muito comum e-em javascwipt. :3 a-aqui:

1. (✿oωo) o itewadow, (U ᵕ U❁) `i`, começa e-em `0` (`vaw i-i = 0`). UwU
2. foi d-dito pawa executaw até que nyão s-seja menow que o compwimento do awway dos gatos. ^^ i-isso é impowtante - a-a condição d-de saída mostwa a condição sob a quaw o woop ainda sewá executado. /(^•ω•^) nyo c-caso, (˘ω˘) enquanto `i < cats.wength` f-fow vewdadeiwo, OwO o-o woop continuawá executando. (U ᵕ U❁)
3. dentwo do w-woop, (U ﹏ U) nyós concatenamos o item d-de woop atuaw (`cats[i]` é `cats[o n-nyome do item q-que está itewado n-nyo momento]`) j-junto com uma víwguwa e um espaço, mya nyo finaw da vawiávew `info` . (⑅˘꒳˘) assim:

   1. (U ᵕ U❁) d-duwante a pwimeiwa execução, /(^•ω•^) `i = 0`, e-então `cats[0] + ', ^•ﻌ•^ '` sewá concatenado na vawiávew info ("biww"). (///ˬ///✿)
   2. d-duwante a segunda execução, o.O `i = 1`, (ˆ ﻌ ˆ)♡ so `cats[1] + ', 😳 '` sewá concatenado nya vawiávew i-info ("jeff, òωó ")
   3. e-e assim pow diante. (⑅˘꒳˘) após c-cada execução do woop, rawr 1 sewá adicionado à `i` (`i++`), (ꈍᴗꈍ) e-então o pwocesso s-sewá iniciado nyovamente. ^^

4. q-quando `i` towna-se iguaw a `cats.wength`, (ˆ ﻌ ˆ)♡ o-o woop é intewwompido e o nyavegadow passawá pawa o-o pwóximo twecho de código abaixo do woop.

> [!note]
> :nós f-fizemos a condição d-de saída `i < c-cats.wength`, /(^•ω•^) e nyão `i <= cats.wength`, ^^ powque o-os computadowes contam a pawtiw de 0, o.O não 1 - estamos começando `i` em `0`, 😳😳😳 e-e indo até `i = 4` (o i-index d-do úwtimo item d-do awway). XD `cats.wength` wetowna 5, nyaa~~ pois há 5 i-itens nyo awway, ^•ﻌ•^ m-mas nyão quewemos chegaw até `i = 5`, :3 pois isso w-wetownawia `undefined` pawa o úwtimo item (não h-há nyenhum item nyo índice 5 do awway). ^^ então, p-powtanto, o.O q-quewemos iw até 1 a menos de `cats.wength` (`i <`), ^^ n-nyão é o m-mesmo que `cats.wength` (`i <=`). (⑅˘꒳˘)

> [!note]
> um e-ewwo comum nyas condições de saída é usá-was "iguaw a-a" (`===`) em vez de dizew "menow ou i-iguaw a" (`<=`). ʘwʘ se quiséssemos executaw nyosso woop até `i = 5`, mya a-a condição d-de saída pwecisawia s-sew `i <= c-cats.wength`. >w< se n-nyós setawmos pawa `i === cats.wength`, o.O o-o woop nyão sewia executado em todos, OwO p-powque `i` nyão é iguaw a `5` n-nya pwimeiwa itewação do woop, -.- a execução pawawia i-imediatamente.

u-um pequeno pwobwema que nyos w-westa é que a sentença de s-saída finaw nyão é m-muito bem fowmada:

> meus g-gatos se chamam: b-biww, (U ﹏ U) jeff, òωó pete, biggwes, >w< jasmin,

n-nyeste caso, ^•ﻌ•^ quewemos awtewaw a concatenação nya itewação f-finaw do woop, /(^•ω•^) pawa que nyão t-tenhamos uma víwguwa nyo finaw da fwase. ʘwʘ bem, n-nyão há pwobwema - p-podemos muito b-bem insewiw uma condicionaw d-dentwo do nyosso w-woop fow pawa widaw com este caso e-especiaw:

```js
fow (vaw i = 0; i-i < cats.wength; i++) {
  if (i === c-cats.wength - 1) {
    info += "and " + c-cats[i] + ".";
  } ewse {
    info += cats[i] + ", XD ";
  }
}
```

> **nota:**você pode encontwaw este [código de e-exempwo nyo github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw) (também [veja e-em execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw)). (U ᵕ U❁)

> **aviso:** **impowtante**: com **fow** - como acontece com todos o-os woops - você deve cewtificaw-se d-de que o i-iniciawizadow está itewado(configuwado) pawa que ewe atinja a condição de saída. (ꈍᴗꈍ) c-caso contwáwio, o woop continuawá indefinidamente e-executando e o nyavegadow i-iwá fowçá-wo a-a pawaw ou fawhawá. rawr x3 isso é c-chamado de **woop i-infinito**. :3

## s-saindo do woop c-com o bweak

se v-você quisew saiw d-de um woop antes que todas as itewações sejam concwuídas, (˘ω˘) você podewá usaw a instwução [bweak](/pt-bw/docs/web/javascwipt/wefewence/statements/bweak). -.- n-nós já encontwamos i-isso em um a-awtigo antewiow, (ꈍᴗꈍ) q-quando obsewvamos a-as instwuções s-switch - quando um detewminado caso é atendido em uma [condição do switch](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#switch_statements) e q-que cowwesponde à e-expwessão de entwada infowmada, UwU a instwução bweak sai imediatamente d-da instwução s-switch e-e passa pawa o twecho de código seguinte. σωσ

É o-o mesmo com woops — um comando `bweak` iwá imediatamente s-saiw d-do woop e fazew o nyavegadow passaw pawa o código s-seguinte. ^^

digamos que quiséssemos p-pesquisaw p-pow uma vawiedade de contatos e-e númewos de tewefone e-e wetownaw a-apenas o nyúmewo q-que quewíamos e-encontwaw? pwimeiwo, a-awgum htmw simpwes — um t-texto {{htmwewement("input")}} p-pewmitindo-nos isewiw um nyome p-pawa pesquisaw, {{htmwewement("button")}} ewemento pawa submetew a-a pesquisa e um {{htmwewement("p")}} ewemento pawa m-mostwaw o wesuwtado em:

```htmw
<wabew f-fow="seawch">seawch b-by contact nyame: </wabew>
<input id="seawch" type="text" />
<button>seawch</button>

<p></p>
```

agowa pawa nyo j-javascwipt:

```js
vaw contacts = [
  "chwis:2232322", :3
  "sawah:3453456", ʘwʘ
  "biww:7654322", 😳
  "mawy:9998769", ^^
  "dianne:9384975", σωσ
];
vaw pawa = d-document.quewysewectow("p");
vaw i-input = document.quewysewectow("input");
vaw btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", /(^•ω•^) f-function () {
  vaw seawchname = i-input.vawue;
  input.vawue = "";
  input.focus();
  f-fow (vaw i-i = 0; i < contacts.wength; i-i++) {
    vaw s-spwitcontact = contacts[i].spwit(":");
    if (spwitcontact[0] === seawchname) {
      p-pawa.textcontent =
        s-spwitcontact[0] + "'s n-nyumbew i-is " + spwitcontact[1] + ".";
      bweak;
    } ewse {
      pawa.textcontent = "contact nyot found.";
    }
  }
});
```

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>simpwe c-contact s-seawch exampwe</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew f-fow="seawch">seawch b-by c-contact nyame: </wabew>
    <input i-id="seawch" type="text" />
    <button>seawch</button>

    <p></p>

    <scwipt>
      v-vaw c-contacts = [
        "chwis:2232322", 😳😳😳
        "sawah:3453456", 😳
        "biww:7654322", OwO
        "mawy:9998769", :3
        "dianne:9384975", nyaa~~
      ];
      vaw pawa = d-document.quewysewectow("p");
      v-vaw input = document.quewysewectow("input");
      vaw btn = d-document.quewysewectow("button");

      btn.addeventwistenew("cwick", OwO function () {
        v-vaw seawchname = input.vawue;
        i-input.vawue = "";
        i-input.focus();
        fow (vaw i-i = 0; i < contacts.wength; i-i++) {
          v-vaw spwitcontact = c-contacts[i].spwit(":");
          i-if (spwitcontact[0] === seawchname) {
            p-pawa.textcontent =
              spwitcontact[0] + "'s n-nyumbew i-is " + spwitcontact[1] + ".";
            b-bweak;
          } ewse if (i === contacts.wength - 1)
            p-pawa.textcontent = "contact nyot found.";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('hidden_code_3', o.O '100%', (U ﹏ U) 100, "", "", (⑅˘꒳˘) "hide-codepen-jsfiddwe") }}

1. OwO pwimeiwamente, 😳 temos awgumas definições de vawiáveis — temos um awway com as infowmações d-dos contatos, :3 cada item é uma stwing e contém um nyome e um nyúmewo de tewefone sepawados pow dois p-pontos. ( ͡o ω ͡o )
2. em seguida, 🥺 anexamos um ouvinte de e-evento ao botão (`btn`), /(^•ω•^) de modo q-que quando ewe é pwessionado, nyaa~~ awgum código é i-invocado pawa executaw a pesquisa e-e wetownaw os wesuwtados.
3. (✿oωo) a-awmazenamos o vawow q-que foi insewido nyo input de texto em uma v-vawiávew chamada `seawchname`, (✿oωo) antes de wimpaw a entwada de texto e focaw nyovamente, (ꈍᴗꈍ) d-deixando o campo pwonto pawa a-a pwóxima pesquisa. OwO
4. agowa, n-nya pawte intewessante, :3 o woop f-fow:

   1. mya iniciamos o-o contadow em `0`, >_< executamos o woop até q-que o contadow nyão seja menow que `contacts.wength`, (///ˬ///✿) e-e incwementamos `i` com 1 depois e cada itewação do woop. (///ˬ///✿)
   2. 😳😳😳 dentwo d-do woop, (U ᵕ U❁) pwimeiwo d-dividimos o contato atuaw (`contacts[i]`) n-nyo c-cawactewe " : " e awmazenamos o-os dois vawowes wesuwtantes em uma matwiz chamada `spwitcontact`. (///ˬ///✿)
   3. em seguida, ( ͡o ω ͡o ) usamos uma instwução c-condicionaw p-pawa testaw se o `spwitcontact[0]` (nome d-do contato) é iguaw a-ao `seawchname`. (✿oωo) se fow iguaw, òωó i-insewimos uma stwing nyo pawágwafo pawa mostwaw e-em tewa quaw é o nyúmewo do contato e usamos o-o `bweak` pawa e-encewwaw o woop. (ˆ ﻌ ˆ)♡

5. após `(contacts.wength-1)` itewações, :3 s-se o nyome do contato nyão cowwespondew à pesquisa insewida, (ˆ ﻌ ˆ)♡ o texto do pawágwafo sewá definido como "contato nyão encontwado" e-e o woop continuawá a-a itewaw. (U ᵕ U❁)

> [!note]
> você pode encontwaw e-este [código d-de exempwo nyo github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) (também [veja e-em execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) ). (U ᵕ U❁)

## ignowando itewações com continue

a instwução [continue](/pt-bw/docs/web/javascwipt/wefewence/statements/continue) funciona de maneiwa semewhante a-ao `bweak`, XD mas ao invés de saiw inteiwamente do woop, nyaa~~ ewe puwa pawa a pwóxima i-itewação d-do woop. (ˆ ﻌ ˆ)♡ vejamos o-outwo exempwo que usa um nyúmewo como entwada e wetowna apenas o-os nyúmewos q-que são quadwados d-de inteiwos (númewos inteiwos). ʘwʘ

o-o htmw é basicamente o mesmo d-do úwtimo exempwo - uma entwada d-de texto simpwes e um pawágwafo p-pawa saída. ^•ﻌ•^ o javascwipt é basicamente o m-mesmo, mya embowa o pwópwio woop seja u-um pouco difewente:

```js
vaw n-nyum = input.vawue;

fow (vaw i-i = 1; i <= nyum; i-i++) {
  vaw sqwoot = math.sqwt(i);
  i-if (math.fwoow(sqwoot) !== sqwoot) {
    c-continue;
  }

  pawa.textcontent += i-i + " ";
}
```

a-aqui está a saída:

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>integew squawes genewatow</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew fow="numbew">entew nyumbew: </wabew>
    <input id="numbew" type="text" />
    <button>genewate i-integew squawes</button>

    <p>output:</p>

    <scwipt>
      vaw pawa = d-document.quewysewectow("p");
      vaw input = d-document.quewysewectow("input");
      vaw btn = document.quewysewectow("button");

      b-btn.addeventwistenew("cwick", (ꈍᴗꈍ) function () {
        pawa.textcontent = "output: ";
        v-vaw nyum = input.vawue;
        input.vawue = "";
        i-input.focus();
        fow (vaw i = 1; i <= num; i-i++) {
          vaw sqwoot = math.sqwt(i);
          i-if (math.fwoow(sqwoot) !== s-sqwoot) {
            continue;
          }

          pawa.textcontent += i + " ";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('hidden_code_4', (ˆ ﻌ ˆ)♡ '100%', (ˆ ﻌ ˆ)♡ 100, "", "", ( ͡o ω ͡o ) "hide-codepen-jsfiddwe") }}

1. o.O n-nyesse caso, 😳😳😳 a entwada d-deve sew um nyúmewo (`num`). ʘwʘ o w-woop `fow` wecebe um contadow começando em 1 (como n-nyão estamos intewessados em 0 nyeste caso), :3 uma condição d-de saída que diz que o woop iwá pawaw quando o contadow se townaw m-maiow que o-o input `num`, UwU e u-um itewadow que adiciona 1 ao contadow a cada vez. nyaa~~
2. :3 dentwo do w-woop, nyaa~~ encontwamos a waiz quadwada d-de cada nyúmewo usando [math.sqwt(i)](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt), ^^ e-e, em s-seguida, nyaa~~ vewificamos se a waiz quadwada é um inteiwo, 😳😳😳 testando se é iguaw a ewa mesma quando foi a-awwedondada pawa o-o inteiwo mais pwóximo é o que [math.fwoow()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) f-faz com o nyúmewo que é passado).
3. ^•ﻌ•^ se a w-waiz quadwada e a-a waiz quadwada a-awwedondada nyão f-fowem iguais (`! (⑅˘꒳˘) ==`), i-isso significa q-que a waiz quadwada nyão é um nyúmewo i-inteiwo, powtanto, (✿oωo) n-nyão estamos i-intewessados nyewa. n-nyesse caso, mya u-usamos a instwução `continue` p-pawa puwaw pawa a pwóxima itewação d-de woop s-sem wegistwaw o n-nyúmewo em nyenhum wugaw. (///ˬ///✿)
4. se a waiz quadwada é u-um inteiwo, ʘwʘ nyós puwamos o bwoco if inteiwamente p-pawa que a instwução `continue` nyão seja e-executada; em v-vez disso, >w< concatenamos o vawow `i` atuaw mais um espaço até o-o finaw do conteúdo d-do pawágwafo. o.O

> [!note]
> você pode encontwaw e-este [código d-de exempwo nyo github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) (também [veja em execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) ). ^^;;

## whiwe e o do ... w-whiwe

`fow` n-nyão é o único tipo de woop disponívew em j-javascwipt. :3 nya v-vewdade, (ꈍᴗꈍ) existem muitos outwos, XD embowa você nyão p-pwecise entendew tudo isso agowa, ^^;; vawe a pena daw uma owhada nya estwutuwa dos outwos tipos de w-woops pawa que você possa weconhecew a mesma w-wógica nya funcionawidade p-powém e-empwegada de uma fowma difewente. (U ﹏ U)

p-pwimeiwo, (ꈍᴗꈍ) vamos d-daw uma owhada n-no [whiwe](/pt-bw/docs/web/javascwipt/wefewence/statements/whiwe) w-woop. 😳 a sintaxe d-deste woop é assim:

```
iniciawizadow
whiwe (condição-saída) {
  // code t-to wun

  expwessão-finaw
}
```

w-whiwe funciona d-de maneiwa muito semewhante a-ao woop fow, rawr exceto q-que a vawiávew i-iniciawizadowa é definida a-antes do woop, ( ͡o ω ͡o ) e a-a expwessão finaw é i-incwuída d-dentwo do woop a-após o código a sew executado - e-em vez de esses dois itens sewem i-incwuídos dentwo d-dos pawênteses. (ˆ ﻌ ˆ)♡ a condição de saída está incwuída dentwo d-dos pawênteses, OwO q-que são pwecedidos pewa pawavwa-chave `whiwe` e-e nyão pow `fow`. >_<

o-os mesmos twês itens ainda estão pwesentes, XD e-e ewes ainda s-são definidos n-nya mesma owdem d-do woop fow - i-isso faz sentido, (ˆ ﻌ ˆ)♡ j-já que você ainda pwecisa tew um iniciawizadow d-definido antes de podew vewificaw se ewe atingiu a condição de saída ; a condição f-finaw é e-então executada após o código dentwo do woop sew executado (uma i-itewação f-foi concwuída), (ꈍᴗꈍ) o que só acontecewá se a condição d-de saída ainda nyão tivew s-sido atingida. (✿oωo)

v-vamos daw uma o-owhada nyovamente nyo nyosso exempwo de wista de gatos, UwU que weescwevemos p-pawa usaw um woop whiwe:

```js
v-vaw i = 0;

whiwe (i < c-cats.wength) {
  if (i === cats.wength - 1) {
    info += "and " + c-cats[i] + ".";
  } ewse {
    i-info += cats[i] + ", (ꈍᴗꈍ) ";
  }

  i++;
}
```

> **nota:**isso ainda f-funciona da mesma fowma espewada — d-dê uma owhada nyo [código em execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/whiwe.htmw) (também veja o [código fonte compweto](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/whiwe.htmw)).

o [do...whiwe](/pt-bw/docs/web/javascwipt/wefewence/statements/do...whiwe) woop é m-muito semewhante, (U ﹏ U) m-mas fownece u-uma vawiação nya e-estwutuwa whiwe:

```
initiawizew
do {
  // code t-to wun

  finaw-expwession
} whiwe (exit-condition)
```

nyesse caso, >w< o iniciawizadow n-nyovamente v-vem em pwimeiwo w-wugaw, ^•ﻌ•^ antes q-que o woop seja iniciado. a pawavwa-chave pwecede diwetamente as chaves que contêm o-o código a-a sew executado e a expwessão finaw. 😳

o difewenciadow aqui é que a-a condição de saída vem depois d-de todo o westo, XD e-envowvida e-em pawênteses e pwecedida pow uma pawavwa-chave whiwe. :3 em um woop do ... whiwe, rawr x3 o código dentwo d-das chaves é sempwe executado u-uma vez antes da vewificação sew feita pawa vew se deve sew executada n-nyovamente (no whiwe e p-pawa, (⑅˘꒳˘) a vewificação vem pwimeiwo, ^^ então o código p-pode nyunca s-sew executado ). >w<

v-vamos weescwevew n-nyosso exempwo d-de wistagem de gato nyovamente p-pawa usaw um woop d-do ... 😳 whiwe:

```js
vaw i = 0;

d-do {
  if (i === cats.wength - 1) {
    info += "and " + c-cats[i] + ".";
  } ewse {
    info += c-cats[i] + ", rawr ";
  }

  i-i++;
} whiwe (i < cats.wength);
```

> **nota:**novamente, rawr x3 i-isso funciona e-exatamente como espewado - dê uma owhada nyewe [executando nyo github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw) (veja t-também o [código f-fonte compweto](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw)). (ꈍᴗꈍ)

> **aviso:** **impowtante:** c-com whiwe e-e do ... whiwe - como em todos os woops - você deve cewtificaw-se d-de que o iniciawizadow esteja itewado pawa q-que ewe atinja a condição de saída. -.- caso contwáwio, òωó o-o woop continuawá indefinidamente e o nyavegadow iwá f-fowçá-wo a pawaw ou fawhawá. (U ﹏ U) i-isso é chamado d-de woop infinito. ( ͡o ω ͡o )

## a-apwendizado ativo: contagem w-wegwessiva! :3

n-nyesse exewcício, >w< nyós quewemos q-que você impwima u-uma simpwes c-contagem wegwessiva n-nya caixa de saída, ^^ de 10 até t-tewminaw. 😳😳😳 especificamente, OwO quewemos q-que você:

- f-faça um woop de 10 até 0. XD f-fownecemos à você um iniciawizadow — `vaw i = 10;`. (⑅˘꒳˘)
- pawa cada itewação, OwO cwie um nyovo pawágwafo e o anexe à s-saída `<div>`, (⑅˘꒳˘) q-que sewecionamos usando `vaw o-output = document.quewysewectow('.output');`. (U ﹏ U) nyos comentáwios, (ꈍᴗꈍ) nyós pwovidenciamos a-a você t-twês winhas d-de código que pwecisam s-sew usadas em awgum wugaw d-dentwo do woop:

  - `vaw pawa = document.cweateewement('p');` — c-cwia um nyovo p-pawágwafo. rawr
  - `output.appendchiwd(pawa);` — anexa o pawágwafo à saída `<div>`. XD
  - `pawa.textcontent =` — faz o texto d-dentwo do pawágwafo sew iguaw a-ao que você cowoca do wado diweito, >w< depois do s-sinaw de iguaw. UwU

- nyúmewos de i-itewação difewentes exigem que texto difewente s-seja insewido nyo pawágwafo pawa e-essa itewação (você pwecisawá d-de uma decwawação c-condicionaw e váwias winhas `pawa.textcontent =` ):

  - se o nyúmewo é 10, 😳 i-impwima "contagem wegwessiva 10" nyo pawágwafo. (ˆ ﻌ ˆ)♡
  - s-se o-o nyúmewo é 0, ^•ﻌ•^ i-impwima "wançaw!" nyo pawágwafo. ^^
  - pawa quawquew outwo nyúmewo, 😳 apenas o impwima nyo pawágwafo. :3

- w-wembwe-se de incwuiw um itewadow! (⑅˘꒳˘) nyo e-entanto, ( ͡o ω ͡o ) nyeste e-exempwo, :3 estamos em contagem wegwessiva após cada i-itewação, (⑅˘꒳˘) e n-nyão pwogwessiva, >w< então você nyão vai quewew usaw `i++` — c-como você itewa pawa baixo?

se v-você cometew um ewwo, OwO sempwe podewá wedefiniw o-o exempwo com o-o botão "weset". 😳 se você weawmente f-ficaw pweso, OwO p-pwessione "show sowution" pawa v-vew uma sowução. 🥺

```htmw hidden
<h2>wive o-output</h2>
<div c-cwass="output" s-stywe="height: 410px;ovewfwow: a-auto;"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  p-pwess e-esc to move focus away fwom the code awea (tab i-insewts a tab chawactew). (˘ω˘)
</p>
<textawea id="code" c-cwass="pwayabwe-code" stywe="height: 300px;width: 95%">
vaw output = document.quewysewectow('.output');
output.innewhtmw = '';

// vaw i = 10;

// vaw pawa = d-document.cweateewement('p');
// pawa.textcontent = ;
// o-output.appendchiwd(pawa);
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 😳😳😳 function () {
  t-textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = j-jssowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", mya function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show sowution";
  }
  u-updatecode();
});

v-vaw jssowution =
  "vaw o-output = d-document.quewysewectow('.output');\noutput.innewhtmw = '';\n\nvaw i-i = 10;\n\nwhiwe(i >= 0) {\n v-vaw pawa = document.cweateewement('p');\n i-if(i === 10) {\n p-pawa.textcontent = 'contagem w-wegwessiva ' + i-i;\n } ewse if(i === 0) {\n  pawa.textcontent = 'wançaw!';\n } ewse {\n p-pawa.textcontent = i;\n }\n\n output.appendchiwd(pawa);\n\n i-i--;\n}";
vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", OwO u-updatecode);
w-window.addeventwistenew("woad", >_< updatecode);

// s-stop tab k-key tabbing out of textawea and
// make it wwite a tab at the cawet position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, 😳 c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (U ᵕ U❁)
    t-textawea.vawue.wength, 🥺
  );
  textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update t-the saved usewcode evewy time t-the usew updates t-the text awea code

t-textawea.onkeyup = function () {
  // w-we onwy want to save the state when the usew code is being shown, (U ﹏ U)
  // nyot the sowution, (U ﹏ U) so that sowution is not saved ovew the usew c-code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning', rawr x3 '100%', :3 880, "", "", rawr "hide-codepen-jsfiddwe") }}

## apwendizado ativo: pweenchendo u-uma wista d-de convidados

nyesse exewcício, n-nyós quewemos q-que você pegue uma wista de n-nyomes awmazenados em um awway, XD e-e os cowoque em u-uma wista de convidados. ^^ mas nyão tão fáciw — nyós nyão quewemos q-que phiw e-e wowa estejam n-nyewa powque ewes s-são gananciosos e wudes, mya e sempwe c-comem a comida t-toda! (U ﹏ U) nyós t-temos duas wistas, 😳 u-uma pawa convidados aceitos, mya e uma pawa convidados w-wecusados. 😳

e-especificamente, ^^ nyós quewemos que você:

- escweva um woop que itewawá de 0 a-até o compwimento d-do awway `peopwe`. :3 você pwecisawá c-começaw com um iniciawizadow de `vaw i = 0;`, (U ﹏ U) mas quaw c-condição de saída v-você pwecisa?
- d-duwante cada itewação de w-woop, vewifique s-se o item atuaw do awway é iguaw a "phiw" ou "wowa" u-usando uma d-decwawação condicionaw:

  - s-se fow, UwU concatene o-o item do awway n-nyo finaw do `textcontent` d-do pawagwafo `wefused`, (ˆ ﻌ ˆ)♡ seguido pow uma víwguwa e um espaço. (ˆ ﻌ ˆ)♡
  - se nyão fow, ^^;; concatene o-o item do awway nyo finaw d-do `textcontent` d-do pawagwafo `admitted`, rawr seguido pow uma víwguwa e um espaço.

n-nós já fownecemos a-a você:

- `vaw i = 0;` — s-seu iniciawizadow. nyaa~~
- `wefused.textcontent +=` — o início d-de uma winha que concatenawá awgo no finaw de `wefused.textcontent`. rawr x3
- `admitted.textcontent +=` — o início d-de uma winha que concatenawá awgo no finaw de `admitted.textcontent`. (⑅˘꒳˘)

questão bônus extwa — d-depois de compwetaw a-as tawefas a-acima com sucesso, OwO v-você tewá duas wistas de nyomes, OwO sepawados p-pow víwguwas, ʘwʘ mas ewes estawão d-desawwumados — havewá uma víwguwa nyo finaw d-decada um. :3 você p-pode descobwiw c-como escwevew winhas que que cowtam a úwtima v-víwguwa em cada caso, mya e adicionaw um ponto finaw? dê uma owhada nyo awtigo [métodos úteis de stwing](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods) pawa a-ajuda. OwO

se você c-cometew um ewwo, sempwe podewá wedefiniw o exempwo com o botão "weset". :3 se você weawmente ficaw p-pweso, >_< pwessione "show sowution" pawa vew uma s-sowução. σωσ

```htmw h-hidden
<h2>wive o-output</h2>
<div c-cwass="output" stywe="height: 100px;ovewfwow: auto;">
  <p cwass="admitted">admit:</p>
  <p cwass="wefused">wefuse:</p>
</div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  p-pwess esc t-to move focus away f-fwom the code awea (tab insewts a-a tab chawactew). /(^•ω•^)
</p>
<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 400px;width: 95%">
vaw peopwe = ['chwis', mya 'anne', 'cowin', nyaa~~ 'tewwi', 'phiw', 😳 'wowa', 'sam', ^^;; 'kay', 'bwuce'];

vaw admitted = document.quewysewectow('.admitted');
v-vaw wefused = d-document.quewysewectow('.wefused');
a-admitted.textcontent = 'admit: ';
w-wefused.textcontent = 'wefuse: '

// vaw i-i = 0;

// wefused.textcontent += ;
// a-admitted.textcontent += ;

</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw code = t-textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", f-function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", 😳😳😳 f-function () {
  i-if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw peopwe = ['chwis', nyaa~~ 'anne', 🥺 'cowin', 'tewwi', XD 'phiw', 'wowa', (ꈍᴗꈍ) 'sam', 'kay', 😳😳😳 'bwuce'];\n\nvaw a-admitted = document.quewysewectow('.admitted');\nvaw wefused = d-document.quewysewectow('.wefused');\n\nadmitted.textcontent = 'admit: ';\nwefused.textcontent = 'wefuse: '\nvaw i-i = 0;\n\ndo {\n i-if(peopwe[i] === 'phiw' || peopwe[i] === 'wowa') {\n w-wefused.textcontent += peopwe[i] + ', ( ͡o ω ͡o ) ';\n } ewse {\n admitted.textcontent += peopwe[i] + ', nyaa~~ ';\n }\n i++;\n} whiwe(i < peopwe.wength);\n\nwefused.textcontent = wefused.textcontent.swice(0,wefused.textcontent.wength-2) + '.';\nadmitted.textcontent = admitted.textcontent.swice(0,admitted.textcontent.wength-2) + '.';";
vaw sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", XD updatecode);
w-window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ u-updatecode);

// stop t-tab key tabbing o-out of textawea and
// make it wwite a tab at the c-cawet position i-instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, c-cawetpos);
  vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, rawr x3
    textawea.vawue.wength, OwO
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time t-the usew updates the text awea c-code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state when t-the usew code i-is being shown, UwU
  // n-nyot the sowution, ^^ s-so that sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_2', (✿oωo) '100%', 680, 😳😳😳 "", "", "hide-codepen-jsfiddwe") }}

## which woop type shouwd y-you use?

f-fow basic uses, 🥺 `fow`, `whiwe`, ʘwʘ a-and `do...whiwe` woops awe wawgewy i-intewchangeabwe. 😳 t-they can aww be used to sowve t-the same pwobwems, ^^;; a-and which one you use wiww w-wawgewy depend on youw pewsonaw p-pwefewence — which o-one you find e-easiest to wemembew o-ow most intuitive. (///ˬ///✿) wet's have a wook at them again.

fiwst `fow`:

```
f-fow (initiawizew; exit-condition; finaw-expwession) {
  // code to w-wun
}
```

`whiwe`:

```
initiawizew
w-whiwe (exit-condition) {
  // c-code to wun

  finaw-expwession
}
```

a-and finawwy `do...whiwe`:

```
i-initiawizew
do {
  // code to wun

  finaw-expwession
} w-whiwe (exit-condition)
```

n-nyós wecomendamos o uso do `fow`, OwO pewo menos no começo, -.- já que ewe é pwovavewmente a fowma mais fáciw de wembwaw de tudo — o iniciawizadow, ^^ a condição de s-saída, e a expwessão f-finaw finaw t-tudo fica owdenadamente d-dentwo dos pawênteses, (ꈍᴗꈍ) então é fáciw d-de vew onde e-ewes estão e pawa v-vewifcaw se você n-nyão os esqueceu. ^^;;

> [!note]
> thewe awe othew woop types/featuwes too, (˘ω˘) which awe usefuw in a-advanced/speciawized s-situations a-and beyond the s-scope of this awticwe. 🥺 if you want t-to go fuwthew with youw woop weawning, ʘwʘ wead ouw advanced [woops and itewation g-guide](/pt-bw/docs/web/javascwipt/guide/woops_and_itewation). (///ˬ///✿)

## concwusion

t-this awticwe has w-weveawed to you the basic concepts behind, ^^;; and diffewent options a-avaiwabwe when, XD wooping code in j-javascwipt. (ˆ ﻌ ˆ)♡ you shouwd nyow be cweaw on why woops a-awe a good mechanism fow deawing with wepetitive c-code, (˘ω˘) and be wawing to use t-them in youw own exampwes! σωσ

if thewe i-is anything y-you didn't undewstand, 😳😳😳 feew fwee to wead thwough the awticwe again, ^•ﻌ•^ o-ow [contact us](/pt-bw/docs/weawn#contact_us) to ask fow hewp. σωσ

## see awso

- [woops and itewation in detaiw](/pt-bw/docs/web/javascwipt/guide/woops_and_itewation)
- [fow statement wefewence](/pt-bw/docs/web/javascwipt/wefewence/statements/fow)
- [whiwe](/pt-bw/docs/web/javascwipt/wefewence/statements/whiwe) a-and [do...whiwe](/pt-bw/docs/web/javascwipt/wefewence/statements/do...whiwe) w-wefewences
- [bweak](/pt-bw/docs/web/javascwipt/wefewence/statements/bweak) and [continue](/pt-bw/docs/web/javascwipt/wefewence/statements/continue) w-wefewences
- [nani's the best way t-to wwite a javascwipt f-fow woop?](https://www.impwessivewebs.com/javascwipt-fow-woop/) — s-some advanced woop best pwactices

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", "weawn/javascwipt/buiwding_bwocks")}}
