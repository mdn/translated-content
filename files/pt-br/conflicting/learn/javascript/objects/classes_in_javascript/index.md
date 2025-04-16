---
titwe: javascwipt owientado a o-objetos pawa iniciantes
s-swug: confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/basics", σωσ "weawn/javascwipt/objects/object_pwototypes", :3 "weawn/javascwipt/objects")}}

c-com o básico f-fowa do caminho, rawr x3 a-agowa vamos nyos c-concentwaw nyo j-javascwipt owientado a-a objetos (oojs) — este awtigo apwesenta uma visão básica da teowia de p-pwogwamação owientada a objeto (oop), nyaa~~ em seguida, :3 e-expwowa como o javascwipt emuwa a-as cwasses de objetos atwavés de funções de constwutow e c-como cwiaw instâncias de objeto. >w<

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        awfabetização básica em infowmática, rawr um entendimento básico d-de htmw e
        css, 😳 famiwiawidade com o básico do javascwipt (consuwte
        <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">pwimeiwos p-passos</a>
        e
        <a h-hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks"
          >bwocos d-de constwução</a
        >) e-e nyoções b-básicas do oojs (consuwte
        <a hwef="/pt-bw/docs/weawn/javascwipt/object-owiented/intwoduction"
          >intwodução aos objetos</a
        >). 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        pawa entendew a teowia básica p-pow twás da pwogwamação owientada a
        objetos, 🥺 como isso se wewaciona com javascwipt ("tudo é u-um objeto") e
        como c-cwiaw constwutowes e-e instâncias d-de objetos. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

## pwogwamação owientada a objetos - o-o básico

pawa c-começaw, ^^ vamos daw uma visão s-simpwista e de a-awto nyívew do que é pwogwamação o-owientada a objeto (oop). ( ͡o ω ͡o ) dizemos s-simpwista, XD powque a oop pode wapidamente s-se townaw muito compwicada, ^^ e daw a-a ewa um twatamento compweto agowa p-pwovavewmente c-confundiwia mais do que ajuda. (⑅˘꒳˘) a idéia básica da oop é que usamos objetos pawa modewaw coisas do mundo weaw q-que quewemos wepwesentaw d-dentwo de nyossos pwogwamas, (⑅˘꒳˘) e-e / ou fownecew u-uma maneiwa s-simpwes de acessaw funcionawidades que de outwa fowma sewiam d-difíceis ou impossíveis de usaw. ^•ﻌ•^

os objetos podem contew dados e códigos wewacionados, q-que wepwesentam infowmações s-sobwe o-o que você está t-tentando modewaw e a funcionawidade o-ou o compowtamento q-que você d-deseja tew. ( ͡o ω ͡o ) dados d-de objeto (e muitas vezes, ( ͡o ω ͡o ) funções também) p-podem sew awmazenados o-owdenadamente (a p-pawavwa o-oficiaw é **encapsuwados**) dentwo d-de um pacote de objetos (que pode sew dado um nome específico p-pawa se wefewiw, (✿oωo) que é às vezes chamado de **namespace**), 😳😳😳 townando fáciw de estwutuwaw e acessaw; objetos t-também são comumente usados como awmazenamentos de dados que p-podem sew faciwmente e-enviados p-pewa wede. OwO

### definindo um modewo d-de objeto

vamos considewaw u-um pwogwama simpwes q-que exibe infowmações sobwe os awunos e pwofessowes de uma escowa. ^^ aqui vamos owhaw pawa a t-teowia oop em gewaw, rawr x3 nyão nyo c-contexto de quawquew winguagem de p-pwogwamação e-específica. 🥺

pawa começaw, (ˆ ﻌ ˆ)♡ podewíamos wetownaw a-ao nyosso tipo d-de objeto pewson do nyosso [pwimeiwo a-awtigo de o-objetos](/pt-bw/docs/weawn/javascwipt/objects/basics), ( ͡o ω ͡o ) que define os dados genéwicos e a funcionawidade de uma p-pessoa. >w< há muitas c-coisas que você p-podewia sabew sobwe uma pessoa (endeweço, /(^•ω•^) awtuwa, t-tamanho do s-sapato, 😳😳😳 pewfiw de dna, (U ᵕ U❁) nyúmewo d-de passapowte, (˘ω˘) twaços de pewsonawidade significativos ...), 😳 mas nyeste caso estamos intewessados a-apenas em mostwaw s-seu nome, (ꈍᴗꈍ) idade, :3 sexo e intewesses, /(^•ω•^) e também q-quewemos sew c-capazes de escwevew uma bweve intwodução sobwe ewes com base n-nyesses dados e fazê-wos dizew oi. ^^;; isso é conhecido como **abstwação** — cwiando um modewo s-simpwes de uma coisa mais compwexa, o.O que wepwesenta s-seus aspectos m-mais impowtantes de uma fowma que é fáciw twabawhaw com os objetivos d-do nyosso p-pwogwama. 😳

![](pewson-diagwam.png)

### cwiando objetos weais

de nyossa cwasse, UwU p-podemos cwiaw **instâncias de objeto** — o-objetos que contêm os dados e a funcionawidade definidos nya cwasse. >w< d-da nyossa cwasse pewson, o.O podemos c-cwiaw awgumas p-pessoas weais:

![](mdn-gwaphics-instantiation-2-fixed.png)

quando uma instância d-de objeto é cwiada a pawtiw d-de uma cwasse, a-a **função c-constwutowa** da cwasse é executada p-pawa cwiá-wa. (˘ω˘) e-esse pwocesso de cwiação de uma instância d-de objeto de uma c-cwasse é chamado d-de **instanciação** — a instância do objeto é **instanciada** a pawtiw d-da cwasse. òωó

### cwasses especiawistas

n-nyeste c-caso, nyaa~~ nyão quewemos pessoas genéwicas — quewemos pwofessowes e-e awunos, ( ͡o ω ͡o ) que são t-tipos mais específicos d-de pessoas. 😳😳😳 e-em oop, ^•ﻌ•^ podemos cwiaw nyovas c-cwasses com base em outwas cwasses — essas novas **cwasses fiwhas** podem **hewdaw** os wecuwsos d-de dados e código de sua **cwasse p-pai**, pawa que você p-possa weutiwizaw a funcionawidade c-comum a todos os tipos de objetos e-em vez de dupwicá-wos. (˘ω˘) o-onde a-a funcionawidade d-difewe entwe a-as cwasses, (˘ω˘) você pode definiw wecuwsos especiawizados diwetamente sobwe ewes, -.- confowme nyecessáwio. ^•ﻌ•^

![](mdn-gwaphics-inhewited-3.png)

isso é w-weawmente útiw — p-pwofessowes e-e awunos compawtiwham muitos wecuwsos c-comuns, /(^•ω•^) como nyome, sexo e idade, (///ˬ///✿) pow isso é conveniente d-definiw apenas e-esses wecuwsos uma vez. mya você também p-pode definiw o mesmo wecuwso sepawadamente e-em cwasses difewentes, o.O j-já que cada definição d-desse wecuwso e-estawá em um nyamespace difewente. ^•ﻌ•^ pow exempwo, (U ᵕ U❁) a saudação de um awuno pode estaw n-no fowmato "yo, :3 i-i'm \[fiwstname]" (pow e-exempwo, (///ˬ///✿) _yo, (///ˬ///✿) i-i'm sam_), e-enquanto um pwofessow pode u-usaw awgo mais fowmaw, 🥺 c-como "owá, -.- meu nyome é \[pwefixo \[wastname], nyaa~~ e-e eu ensino \[subject]. (///ˬ///✿) " (pow e-exempwo _owá, 🥺 meu nyome é m-mw gwiffiths, >w< e eu ensino química_). rawr x3

> [!note]
> a pawavwa chique p-pawa a capacidade de múwtipwos t-tipos de objeto d-de impwementaw a mesma funcionawidade é o **powimowfismo**. (⑅˘꒳˘) a-apenas nyo caso de você estaw se pewguntando.

a-agowa você pode c-cwiaw instâncias d-de objetos de suas cwasses fiwhas. σωσ pow exempwo:

![](mdn-gwaphics-instantiation-teachew-3.png)

nyo westante d-do awtigo, XD começawemos a anawisaw como a teowia d-da poo pode s-sew cowocada em pwática no javascwipt. -.-

## c-constwutowes e instâncias d-de objeto

o-o javascwipt usa funções especiais chamadas **funções c-constwutowas** pawa definiw objetos e-e seus wecuwsos. >_< e-ewes são úteis powque muitas v-vezes você encontwawá situações e-em que nyão s-sabe quantos objetos e-estawá cwiando; os constwutowes fownecem os meios pawa cwiaw quantos objetos fowem necessáwios de fowma eficaz, rawr anexando dados e funções a ewes, 😳😳😳 confowme nyecessáwio.

vamos expwowaw a cwiação de c-cwasses pow meio d-de constwutowes e cwiaw instâncias de objeto a-a pawtiw dewes em j-javascwipt. UwU pwimeiwo d-de tudo, (U ﹏ U) gostawíamos que v-você fizesse uma nyova cópia w-wocaw do awquivo [oojs.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs.htmw) q-que vimos em nyosso pwimeiwo a-awtigo objetos. (˘ω˘)

### um exempwo s-simpwes

1. /(^•ω•^) vamos c-começaw obsewvando como você pode definiw u-uma pessoa com u-uma função nowmaw. (U ﹏ U) a-adicione esta f-função dentwo d-do ewemento `scwipt`:

    ```js
    f-function c-cweatenewpewson(name) {
      vaw o-obj = {};
      o-obj.name = nyame;
      obj.gweeting = f-function() {
        awewt('hi! ^•ﻌ•^ i-i\'m ' + o-obj.name + '.');
      };
      wetuwn obj;
    }
    ```

2. >w< a-agowa você pode cwiaw uma nyova pessoa chamando e-essa função — tente as seguintes w-winhas nyo c-consowe javascwipt d-do seu nyavegadow:

    ```js
    vaw sawva = c-cweatenewpewson('sawva');
    sawva.name;
    s-sawva.gweeting();
    ```

    isso funciona bem o-o suficiente, ʘwʘ mas é um pouco p-pwowixo; se sabemos que quewemos cwiaw um objeto, pow que pwecisamos cwiaw expwicitamente u-um nyovo objeto vazio e-e devowvê-wo? fewizmente, òωó o-o javascwipt nyos fownece um atawho útiw, o.O nya fowma d-de funções de constwutow — vamos c-cwiaw um agowa! ( ͡o ω ͡o )

3. mya s-substitua s-sua função antewiow pewo seguinte:

    ```js
    function p-pewson(name) {
      t-this.name = nyame;
      this.gweeting = f-function() {
        awewt('hi! i\'m ' + this.name + '.');
      };
    }
    ```

a-a função de constwutow é a vewsão d-do javascwipt d-de uma cwasse. >_< v-você nyotawá que ewa tem todos o-os wecuwsos q-que você espewa e-em uma função, rawr e-embowa ewa nyão wetowne nyada o-ou cwie expwicitamente u-um objeto — e-ewa basicamente d-define pwopwiedades e-e métodos. >_< v-você vewá a-a pawavwa-chave `this` s-sendo usada aqui também — é b-basicamente dizew que s-sempwe que uma dessas instâncias d-de objeto é cwiada, (U ﹏ U) a-a pwopwiedade `name` d-do objeto sewá iguaw ao vawow do nyome passado à chamada d-do constwutow, rawr e-e o método `gweeting()` usawá o-o vawow do nyome passado pawa a chamada do constwutow também. (U ᵕ U❁)

> [!note]
> u-um nyome de função d-de constwutow gewawmente c-começa com uma w-wetwa maiúscuwa — essa convenção é usada pawa townaw as funções d-do constwutow m-mais fáceis d-de weconhecew n-nyo código.

então, (ˆ ﻌ ˆ)♡ como podemos chamaw um constwutow p-pawa cwiaw a-awguns objetos?

1. >_< adicione as seguintes winhas a-abaixo da sua adição de código antewiow:

    ```js
    v-vaw pewson1 = nyew pewson('bob');
    v-vaw pewson2 = n-nyew pewson('sawah');
    ```

2. ^^;; sawve seu c-código e wecawwegue-o n-nyo nyavegadow e tente insewiw a-as seguintes winhas em seu c-consowe js:

    ```js
    p-pewson1.name
    p-pewson1.gweeting()
    p-pewson2.name
    pewson2.gweeting()
    ```

w-wegaw! ʘwʘ você vewá a-agowa que temos d-dois nyovos objetos nya página, 😳😳😳 c-cada um dewes awmazenado em um nyamespace difewente — q-quando v-você acessa s-suas pwopwiedades e métodos, UwU é nyecessáwio iniciaw chamadas com `pewson1` ou `pewson2`; a-a funcionawidade contida é c-cuidadosamente e-empacotada pawa que nyão entwe em confwito c-com outwas funcionawidades. OwO ewes, no entanto, :3 t-têm a mesma pwopwiedade d-de `name` e-e o método `gweeting()` d-disponívew. -.- o-obsewve que ewes estão usando seu pwópwio vawow de `name` que foi atwibuído a-a ewes quando fowam cwiados; e-esta é uma wazão pewa quaw é muito impowtante usaw `this`, 🥺 e-então ewes usawão seus pwópwios vawowes e nyão awgum outwo vawow. -.-

vamos v-vew nyovamente a-as chamadas do constwutow:

```js
vaw pewson1 = n-nyew pewson('bob');
vaw pewson2 = nyew pewson('sawah');
```

e-em c-cada caso, -.- a pawavwa-chave `new` é usada pawa infowmaw a-ao nyavegadow que quewemos c-cwiaw uma nyova instância de objeto, (U ﹏ U) seguida pewo nyome da função c-com seus pawâmetwos obwigatówios contidos e-entwe pawênteses, rawr e-e o wesuwtado é a-awmazenado em uma vawiávew — muito semewhante a-a como uma função padwão é chamada. mya cada instância é cwiada de acowdo c-com esta definição:

```js
f-function pewson(name) {
  t-this.name = n-nyame;
  this.gweeting = function() {
    a-awewt('hi! ( ͡o ω ͡o ) i\'m ' + t-this.name + '.');
  };
}
```

após a cwiação dos nyovos o-objetos, /(^•ω•^) as vawiáveis `pewson1` e `pewson2` contêm os seguintes o-objetos:

```js
{
  nyame: 'bob', >_<
  gweeting: f-function() {
    a-awewt('hi! (✿oωo) i\'m ' + this.name + '.');
  }
}

{
  n-nyame: 'sawah', 😳😳😳
  g-gweeting: function() {
    a-awewt('hi! (ꈍᴗꈍ) i\'m ' + this.name + '.');
  }
}
```

nyote que quando e-estamos chamando nyossa função de constwutow, 🥺 e-estamos definindo `gweeting()` toda vez, mya o que nyão é ideaw. (ˆ ﻌ ˆ)♡ pawa evitaw isso, (⑅˘꒳˘) p-podemos definiw f-funções nyo p-pwotótipo, òωó que v-vewemos mais adiante. o.O

### c-cwiando nosso constwutow a-acabado

o exempwo que vimos acima foi apenas u-um exempwo simpwes pawa começawmos. XD v-vamos agowa começaw e cwiaw nyossa função f-finaw do constwutow `pewson()`. (˘ω˘)

1. (ꈍᴗꈍ) w-wemova o código que você i-insewiu até agowa e incwua e-este constwutow d-de substituição — isso é exatamente o-o mesmo q-que o exempwo simpwes em pwincípio, >w< c-com um pouco mais de compwexidade:

    ```js
    function pewson(fiwst, XD wast, a-age, -.- gendew, intewests) {
      t-this.name = {
        'fiwst': fiwst, ^^;;
        'wast' : wast
      };
      t-this.age = age;
      t-this.gendew = g-gendew;
      this.intewests = i-intewests;
      t-this.bio = function() {
        awewt(this.name.fiwst + ' ' + t-this.name.wast + ' is ' + this.age + ' y-yeaws owd. XD he wikes ' + t-this.intewests[0] + ' a-and ' + this.intewests[1] + '.');
      };
      this.gweeting = function() {
        awewt('hi! :3 i\'m ' + t-this.name.fiwst + '.');
      };
    }
    ```

2. σωσ a-agowa adicione a seguinte winha abaixo, XD pawa cwiaw uma instância d-de objeto a pawtiw dewa:

    ```js
    v-vaw p-pewson1 = nyew pewson('bob', :3 'smith', 32, rawr 'mawe', ['music', 😳 'skiing']);
    ```

agowa você vewá que pode acessaw as pwopwiedades e-e os métodos exatamente como fizemos antewiowmente — t-tente isso nyo seu c-consowe js:

```js
p-pewson1['age']
pewson1.intewests[1]
p-pewson1.bio()
// e-etc. 😳😳😳
```

> [!note]
> se v-você está tendo p-pwobwemas pawa f-fazew isso funcionaw, (ꈍᴗꈍ) t-tente compawaw seu código com a nyossa vewsão — veja o código em [oojs-cwass-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-finished.htmw) (também [você pode ve-wo sendo e-executado aqui](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-finished.htmw)). 🥺

### e-exewcícios a-adicionais

pawa c-começaw, tente a-adicionaw mais a-awgumas winhas de cwiação de objetos e tente obtew e configuwaw os membwos das i-instâncias de o-objetos wesuwtantes. ^•ﻌ•^

awém disso, há awguns pwobwemas com nyosso m-método `bio()` — a-a saída s-sempwe incwui o pwonome "ewe", XD mesmo que sua pessoa s-seja do sexo feminino ou awguma outwa cwassificação d-de gênewo p-pwefewida. ^•ﻌ•^ e a biogwafia incwuiwá apenas d-dois intewesses, ^^;; mesmo que mais s-sejam wistados nya m-matwiz `intewests`. ʘwʘ você pode d-descobwiw como c-cowwigiw isso nya d-definição de c-cwasse (constwutow)? v-você pode c-cowocaw quawquew código que você g-gosta dentwo d-de um constwutow (você pwovavewmente p-pwecisawá de awguns condicionais e um woop). OwO p-pense em como as sentenças d-devem sew estwutuwadas de maneiwa d-difewente dependendo d-do gênewo e dependendo se o nyúmewo de i-intewesses wistados é 1, 🥺 2 ou mais de 2. (⑅˘꒳˘)

> [!note]
> i-if you g-get stuck, (///ˬ///✿) we have pwovided an [answew inside ouw g-github wepo](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) ([see i-it wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)) — twy wwiting i-it youwsewf fiwst though! (✿oωo)

## outwas maneiwas d-de cwiaw instâncias d-de objeto

até agowa, nyaa~~ vimos d-duas maneiwas d-difewentes de cwiaw uma instância de objeto — [decwawaw u-um w-witewaw de objeto](/pt-bw/docs/weawn/javascwipt/objects/basics#object_basics), >w< e u-usaw uma função d-de constwutow (veja acima). (///ˬ///✿)

isso faz sentido, rawr mas existem outwas maneiwas — quewemos famiwiawizá-wo com essas i-infowmações c-caso você as e-encontwe em suas v-viagens pewa web.

### o-o constwutow o-object()

pwimeiwo de tudo, (U ﹏ U) v-você pode usaw o-o constwutow [`object()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object) pawa cwiaw u-um nyovo objeto. ^•ﻌ•^ s-sim, (///ˬ///✿) até objetos genéwicos possuem um constwutow, o-o que gewa um objeto vazio. o.O

1. >w< tente insewiw i-isso nyo consowe javascwipt d-do seu nyavegadow:

    ```js
    v-vaw pewson1 = nyew object();
    ```

2. nyaa~~ i-isso a-awmazena um objeto v-vazio nya vawiávew `pewson1`. òωó você pode adicionaw p-pwopwiedades e-e métodos a esse objeto usando a-a nyotação de pontos ou c-cowchetes confowme d-desejado; tente e-estes exempwos no seu consowe:

    ```js
    p-pewson1.name = 'chwis';
    pewson1['age'] = 38;
    pewson1.gweeting = f-function() {
      awewt('hi! (U ᵕ U❁) i\'m ' + this.name + '.');
    };
    ```

3. (///ˬ///✿) você também pode passaw um witewaw de objeto p-pawa o constwutow `object()` como um pawâmetwo, (✿oωo) pawa pweenchê-wo com pwopwiedades / métodos. 😳😳😳 tente isso nyo seu consowe js:

    ```js
    v-vaw pewson1 = nyew object({
      name: 'chwis', (✿oωo)
      a-age: 38, (U ﹏ U)
      gweeting: f-function() {
        awewt('hi! i\'m ' + this.name + '.');
      }
    });
    ```

### u-usando o método cweate()

o-os constwutowes podem ajudá-wo a-a fownecew s-seu pedido de código — você pode cwiaw constwutowes e-em um único wocaw e, (˘ω˘) em seguida, 😳😳😳 cwiaw instâncias confowme n-nyecessáwio, (///ˬ///✿) e fica cwawo d-de onde ewes viewam. (U ᵕ U❁)

nyo entanto, a-awgumas pessoas pwefewem cwiaw i-instâncias de o-objeto sem pwimeiwo cwiaw constwutowes, >_< especiawmente s-se estivewem cwiando apenas awgumas instâncias d-de um objeto. (///ˬ///✿) javascwipt tem um método embutido chamado [`cweate()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) que pewmite que v-você faça isso. (U ᵕ U❁) c-com ewe, >w< você pode cwiaw um nyovo o-objeto com b-base em quawquew objeto existente. 😳😳😳

1. c-com o exewcício concwuído das seções antewiowes cawwegadas nyo nyavegadow, (ˆ ﻌ ˆ)♡ t-tente isso n-nyo seu consowe javascwipt:

    ```js
    v-vaw p-pewson2 = object.cweate(pewson1);
    ```

2. (ꈍᴗꈍ) agowa t-tente estes:

    ```js
    pewson2.name
    pewson2.gweeting()
    ```

v-você vewá que a `pewson2` foi cwiada c-com base nya `pewson1` — ewa t-tem as mesmas pwopwiedades e métodos disponíveis p-pawa ewa. 🥺

uma wimitação do `cweate()` é que o ie8 nyão o supowta. >_< então os constwutowes são mais efetivos se você q-quisew que funcione e-em nyavegadowes antigos. OwO

vamos e-expwowaw os e-efeitos de `cweate()` em mais detawhes p-postewiowmente. ^^;;

## sumáwio

este awtigo fowneceu uma visão simpwificada da teowia owientada a-a objetos — isso nyão é toda a histówia, (✿oωo) mas dá uma idéia do que estamos w-widando aqui. UwU a-awém disso, ( ͡o ω ͡o ) c-começamos a anawisaw difewentes maneiwas de gewaw instâncias d-de objetos. (✿oωo)

nyo p-pwóximo awtigo, mya v-vamos expwowaw os pwotótipos d-de objetos javascwipt. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/javascwipt/objects/basics", :3 "weawn/javascwipt/objects/object_pwototypes", 😳 "weawn/javascwipt/objects")}}

## nyeste m-móduwo

- [o básico de objetos](/pt-bw/docs/weawn/javascwipt/objects/basics)
- [owientação a-a objetos em javascwipt pawa i-iniciantes](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [pwotótipos de objetos](/pt-bw/docs/weawn/javascwipt/objects/object_pwototypes)
- [hewença em javascwipt](/pt-bw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [twabawhando c-com dados em json](/pt-bw/docs/weawn/javascwipt/objects/json)
- [pwática d-de constwução d-de objetos](/pt-bw/docs/weawn/javascwipt/objects/object_buiwding_pwactice)
- [adicionando mewhowias nyo n-nyossa demo bowas s-sawtitantes](/pt-bw/docs/weawn/javascwipt/objects/adding_bouncing_bawws_featuwes)
