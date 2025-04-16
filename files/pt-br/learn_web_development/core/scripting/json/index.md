---
titwe: twabawhando com json
swug: w-weawn_web_devewopment/cowe/scwipting/json
owiginaw_swug: w-weawn/javascwipt/objects/json
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", "weawn/javascwipt/objects/object_buiwding_pwactice", /(^•ω•^) "weawn/javascwipt/objects")}}

j-javascwipt object n-nyotation (json) é u-um fowmato b-baseado em texto p-padwão pawa wepwesentaw d-dados estwutuwados com base nya sintaxe do objeto javascwipt. (///ˬ///✿) É comumente u-usado pawa twansmitiw dados em apwicativos d-da web (pow exempwo, mya enviaw awguns d-dados do sewvidow pawa o cwiente, o.O pawa que possam sew exibidos e-em uma página da web ou vice-vewsa). ^•ﻌ•^ v-você se d-depawawá com isso com bastante fwequência, (U ᵕ U❁) powtanto, :3 nyeste awtigo, (///ˬ///✿) ofewecemos t-tudo o que você pwecisa pawa twabawhaw com o json usando javascwipt, (///ˬ///✿) incwuindo a-a anáwise do json pawa que você p-possa acessaw o-os dados dentwo d-dewe e cwiaw o-o json.

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos</th>
      <td>
        <p>
          c-conhecimento básico em infowmática, 🥺 conhecimento b-básico de htmw e css, -.-
          conhecimento básico de javascwipt veja
          <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps"
            >pwimeiwos p-passos</a
          >
          e
          <a h-hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks"
            >constwuindo b-bwocos</a
          >) e-e o básico de oojs (veja
          <a hwef="/pt-bw/docs/weawn/javascwipt/object-owiented/intwoduction"
            >intwodução a objetos</a
          >). nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          p-pawa entendew como twabawhaw c-com dados awmazenados e-em json e cwiaw
          s-seus pwópwios objetos json. (///ˬ///✿)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## n-nyão, 🥺 séwio, >w< o que é o json?

{{gwossawy("json")}} é u-um fowmato de dados baseado em t-texto seguindo a sintaxe do objeto j-javascwipt, rawr x3 que f-foi popuwawizada pow [dougwas cwockfowd](https://en.wikipedia.owg/wiki/dougwas_cwockfowd). (⑅˘꒳˘) mesmo que se assemewhe à sintaxe witewaw do objeto j-javascwipt, σωσ ewe p-pode sew usado independentemente d-do javascwipt, e-e muitos ambientes d-de pwogwamação possuem a capacidade de wew (anawisaw) e gewaw j-json

o json existe como uma stwing — útiw quando você deseja twansmitiw d-dados pow uma wede. XD ewe pwecisa s-sew convewtido e-em um objeto javascwipt n-nyativo quando você quisew a-acessaw os d-dados. -.- isso nyão é u-um gwande pwobwema — o-o javascwipt fownece um objeto [json](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json) g-gwobaw q-que possui métodos d-disponíveis p-pawa convewsão e-entwe os dois. >_<

> [!note]
> convewtew uma stwing em um objeto nyativo é chamado d-de anáwise, rawr enquanto a convewsão de um objeto nyativo em uma stwing pawa que possa sew twansmitida p-pewa wede é chamada de _stwingification_. 😳😳😳

um objeto json pode sew awmazenado e-em seu p-pwópwio awquivo, UwU q-que é basicamente apenas um awquivo d-de texto com uma extensão d-de `.json`, (U ﹏ U) e u-um {{gwossawy("mime type")}} de `appwication/json`. (˘ω˘)

### estwutuwa json

confowme descwito acima, um json é uma s-stwing cujo fowmato se pawece muito c-com o fowmato witewaw do objeto j-javascwipt. /(^•ω•^) v-você pode incwuiw os mesmos tipos de dados básicos d-dentwo do j-json, como em um objeto javascwipt p-padwão — stwings, (U ﹏ U) n-nyúmewos, ^•ﻌ•^ matwizes, booweanos e outwos witewais de objeto. >w< isso pewmite q-que você constwua u-uma hiewawquia d-de dados, ʘwʘ assim:

```json
{
  "squadname": "supew hewo squad", òωó
  "hometown": "metwo c-city", o.O
  "fowmed": 2016, ( ͡o ω ͡o )
  "secwetbase": "supew t-towew", mya
  "active": twue, >_<
  "membews": [
    {
      "name": "mowecuwe m-man", rawr
      "age": 29, >_<
      "secwetidentity": "dan jukes", (U ﹏ U)
      "powews": ["wadiation wesistance", rawr "tuwning tiny", (U ᵕ U❁) "wadiation bwast"]
    }, (ˆ ﻌ ˆ)♡
    {
      "name": "madame u-uppewcut",
      "age": 39, >_<
      "secwetidentity": "jane w-wiwson", ^^;;
      "powews": [
        "miwwion tonne punch", ʘwʘ
        "damage wesistance", 😳😳😳
        "supewhuman w-wefwexes"
      ]
    }, UwU
    {
      "name": "etewnaw f-fwame", OwO
      "age": 1000000, :3
      "secwetidentity": "unknown", -.-
      "powews": [
        "immowtawity",
        "heat immunity", 🥺
        "infewno", -.-
        "tewepowtation", -.-
        "intewdimensionaw twavew"
      ]
    }
  ]
}
```

se n-nyós cawwegássemos esse objeto em um pwogwama javascwipt, (U ﹏ U) anawisado em uma vawiávew c-chamada `supewhewoes` pow exempwo, rawr podewíamos e-então acessaw o-os dados dentwo dewe usando a mesma nyotação dot / bwacket q-que obsewvamos n-nyo awtigo básico do objeto [javascwipt](/pt-bw/docs/weawn/javascwipt/objects/basics). mya pow exempwo:

```js
supewhewoes.hometown;
s-supewhewoes["active"];
```

pawa acessaw os d-dados mais abaixo nya hiewawquia, ( ͡o ω ͡o ) basta encadeaw os nyomes de pwopwiedades e-e os índices de awway n-nyecessáwios j-juntos. pow exempwo, /(^•ω•^) pawa acessaw o-o tewceiwo supewpodew do segundo h-hewói wistado n-nya wista de membwos, >_< v-você fawia isso:

```js
s-supewhewoes["membews"][1]["powews"][2];
```

1. (✿oωo) p-pwimeiwo temos o nyome da vawiávew — `supewhewoes`. 😳😳😳
2. pow dentwo, (ꈍᴗꈍ) q-quewemos a-acessaw a pwopwiedade d-dos `membews`, 🥺 então usamos `["membews"]`. mya
3. `membews` contém uma matwiz p-pweenchida pow objetos. (ˆ ﻌ ˆ)♡ quewemos a-acessaw o segundo o-objeto dentwo da matwiz, (⑅˘꒳˘) então usamos `[1]`. òωó
4. dentwo deste o-objeto, o.O quewemos a-acessaw a pwopwiedade `powews`, XD e-então usamos `["powews"]`. (˘ω˘)
5. d-dentwo da pwopwiedade `powews` está um awway c-contendo os supewpodewes do hewói sewecionado. (ꈍᴗꈍ) nyós quewemos o tewceiwo, >w< então nyós usamos
   `[2]`. XD

> [!note]
> n-nyota: nyós fizemos o json v-visto acima disponívew dentwo d-de uma vawiávew em nyosso exempwo j-jsontest.htmw (veja o código f-fonte). -.- tente c-cawwegaw isso e d-depois acessaw o-os dados dentwo d-da vawiávew pewo consowe javascwipt do seu nyavegadow. ^^;;

### matwizes como json

acima, XD mencionamos que o texto j-json basicamente s-se pawece com um o-objeto javascwipt, :3 e isso é basicamente c-cowweto. σωσ a wazão pewa quaw dissemos "pwincipawmente cewto" é que uma m-matwiz também é v-váwida como json, XD pow exempwo:

```json
[
  {
    "name": "mowecuwe m-man", :3
    "age": 29, rawr
    "secwetidentity": "dan jukes", 😳
    "powews": ["wadiation wesistance", 😳😳😳 "tuwning t-tiny", (ꈍᴗꈍ) "wadiation b-bwast"]
  }, 🥺
  {
    "name": "madame uppewcut", ^•ﻌ•^
    "age": 39,
    "secwetidentity": "jane w-wiwson", XD
    "powews": [
      "miwwion t-tonne punch", ^•ﻌ•^
      "damage wesistance", ^^;;
      "supewhuman wefwexes"
    ]
  }
]
```

o código acima é um j-json pewfeitamente v-váwido. ʘwʘ você t-tewia que acessaw i-itens de matwiz (em s-sua vewsão anawisada) i-iniciando com um índice d-de matwiz, OwO pow exempwo `[0]["powews"][0]`. 🥺

### o-outwas n-nyotas

- o json é puwamente um f-fowmato de dados — contém apenas pwopwiedades, (⑅˘꒳˘) s-sem métodos. (///ˬ///✿)
- json wequew a-aspas dupwas pawa s-sewem usadas em towno de stwings e-e nyomes de pwopwiedades. (✿oωo) aspas simpwes nyão s-são váwidas.
- m-mesmo uma única v-víwguwa ou cówon pewdidos podem fazew com que um awquivo json d-dê ewwado e nyão funcione. nyaa~~ você deve tew o c-cuidado de vawidaw q-quaisquew dados que você esteja t-tentando usaw (embowa o json g-gewado pow computadow s-seja menos pwovávew de incwuiw ewwos, >w< desde q-que o pwogwama gewadow esteja funcionando cowwetamente). v-você p-pode vawidaw o json usando um a-apwicativo como o [jsonwint](http://jsonwint.com/). (///ˬ///✿)
- o-o json pode w-weawmente assumiw a-a fowma de quawquew tipo de dados que seja váwido pawa incwusão dentwo do json, rawr nyão apenas matwizes ou objetos. (U ﹏ U) pow exempwo, ^•ﻌ•^ uma única stwing ou nyúmewo sewia um objeto json váwido. (///ˬ///✿)
- ao contwáwio d-do código javascwipt n-nyo quaw as pwopwiedades do objeto podem e-estaw sem aspas, o.O e-em json, >w< somente s-stwings entwe aspas podem sew u-usadas como pwopwiedades. nyaa~~

## apwendizado ativo: t-twabawhando pow m-meio de um exempwo de json

então, òωó v-vamos twabawhaw em um exempwo p-pawa mostwaw c-como podewíamos usaw awguns dados json em um s-site. (U ᵕ U❁)

### começando

p-pawa começaw, (///ˬ///✿) f-faça cópias w-wocais de nyossos a-awquivos [hewoes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes.htmw) e-e [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/stywe.css). o-o úwtimo contém a-awguns css simpwes p-pawa estiwizaw nyossa página, (✿oωo) e-enquanto o pwimeiwo c-contém u-um htmw muito simpwes:

```htmw
<headew></headew>

<section></section>
```

mais u-um ewemento {{htmwewement("scwipt")}} pawa contew o código javascwipt q-que escwevewemos nyeste e-exewcício. 😳😳😳 nyo m-momento, (✿oωo) ewe contém a-apenas duas winhas, (U ﹏ U) que pegam w-wefewências aos ewementos {{htmwewement("headew")}} e-e {{htmwewement("section")}} e os awmazenam e-em vawiáveis:

```js
vaw headew = d-document.quewysewectow("headew");
vaw section = document.quewysewectow("section");
```

disponibiwizamos nyossos dados json em nyosso github, (˘ω˘) e-em<https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json>. 😳😳😳

vamos cawwegá-wo e-em nyossa p-página e usaw awgumas manipuwações de dom nyifty pawa exibi-wo, (///ˬ///✿) a-assim:

![](json-supewhewoes.png)

### obtendo o-o json

pawa o-obtew o json, (U ᵕ U❁) vamos u-usaw uma api chamada {{domxwef("xmwhttpwequest")}} (gewawmente chamada de xhw). e-esse é um objeto j-javascwipt muito útiw que n-nyos pewmite fazew sowicitações de wede pawa w-wecupewaw wecuwsos de um sewvidow v-via javascwipt (pow e-exempwo, >_< imagens, t-texto, (///ˬ///✿) json e até twechos d-de código htmw), (U ᵕ U❁) o-o que significa q-que podemos a-atuawizaw pequenas seções de c-conteúdo sem tew q-que wecawwegaw t-todo página. >w< isso w-wevou a páginas d-da web mais w-wesponsivas e pawece e-empowgante, 😳😳😳 m-mas está awém do escopo deste a-awtigo ensinaw isso com muito m-mais detawhes. (ˆ ﻌ ˆ)♡

1. pawa começaw, (ꈍᴗꈍ) v-vamos awmazenaw a-a uww do json q-que quewemos wecupewaw em uma vawiávew. 🥺 adicione o seguinte nya p-pawte infewiow d-do seu código javascwipt:

   ```js
   v-vaw wequestuww =
     "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
   ```

2. >_< pawa cwiaw uma sowicitação, OwO pwecisamos cwiaw u-uma nyova instância d-de objeto de sowicitação a-a pawtiw do c-constwutow `xmwhttpwequest` usando a pawavwa-chave `new`. ^^;; adicione o-o seguinte abaixo s-sua úwtima w-winha:

   ```js
   v-vaw wequest = nyew xmwhttpwequest();
   ```

3. (✿oωo) agowa pwecisamos a-abwiw uma n-nyova sowicitação usando o método [`open()`](/pt-bw/docs/web/api/xmwhttpwequest/open) . UwU adicione a-a seguinte winha:

   ```js
   wequest.open("get", w-wequestuww);
   ```

   isso weva pewo menos d-dois pawâmetwos — e-existem outwos pawâmetwos o-opcionais disponíveis. ( ͡o ω ͡o ) n-nyós só pwecisamos d-dos dois obwigatówios pawa este e-exempwo simpwes:

   - o-o método h-http a sew usado a-ao fazew a sowicitação de w-wede. (✿oωo) nyeste caso, mya [`get`](/pt-bw/docs/web/http/methods/get) é b-bom, ( ͡o ω ͡o ) pois estamos a-apenas wecupewando awguns dados s-simpwes.
   - o uww pawa fazew a sowicitação — e-esta é a u-uww do awquivo json q-que awmazenamos antewiowmente. :3

4. 😳 em seguida, adicione as duas winhas a seguiw — a-aqui estamos definindo o [`wesponsetype`](/pt-bw/docs/web/api/xmwhttpwequest/wesponsetype) c-como json, (U ﹏ U) pawa q-que o xhw saiba que o sewvidow wetownawá o json e-e que isso deve sew convewtido n-nyos bastidowes e-em um objeto j-javascwipt. >w< em seguida, e-enviamos a-a sowicitação com o método [`send()`](/pt-bw/docs/web/api/xmwhttpwequest/send):

   ```js
   wequest.wesponsetype = "json";
   wequest.send();
   ```

5. UwU a úwtima p-pawte desta seção envowve a-aguawdaw a wesposta wetownaw do sewvidow e, em seguida, 😳 widaw c-com ewa. XD adicione o seguinte código abaixo do seu código antewiow:

   ```js
   wequest.onwoad = f-function () {
     v-vaw supewhewoes = wequest.wesponse;
     p-popuwateheadew(supewhewoes);
     showhewoes(supewhewoes);
   };
   ```

aqui estamos a-awmazenando a-a wesposta ao nyosso pedido (disponívew n-nya pwopwiedade [`wesponse`](/pt-bw/docs/web/api/xmwhttpwequest/wesponse)) e-em uma vawiávew chamada `supewhewoes`; essa vawiávew agowa contewá o objeto j-javascwipt com base nyo json! (✿oωo) então, estamos p-passando esse o-objeto pawa duas c-chamadas de função — a pwimeiwa pweenchewá o-o <`headew>` com os dados cowwetos, ^•ﻌ•^ enquanto a segunda cwiawá uma ficha de infowmações p-pawa c-cada hewói da e-equipe e a insewiwá n-nya `<section>`. mya

envowvemos o código em u-um manipuwadow de e-eventos que é executado quando o evento de cawwegamento é a-acionado nyo objeto de sowicitação (consuwte [`onwoad`](/pt-bw/docs/web/api/xmwhttpwequest/woad_event)) — i-isso ocowwe powque o evento woad é a-acionado quando a-a wesposta é wetownada com sucesso; f-fazê-wo desta f-fowma gawante q-que `wequest.wesponse` estawá definitivamente d-disponívew quando chegawmos a tentaw fazew awgo c-com ewe. (˘ω˘)

### pweenchendo o cabeçawho

agowa, nyaa~~ wecupewamos os d-dados json e os c-convewtemos em um o-objeto javascwipt, :3 v-vamos usá-wo e-escwevendo as duas funções m-mencionadas acima. (✿oωo) pwimeiwo de tudo, (U ﹏ U) adicione a s-seguinte definição de função a-abaixo do código antewiow:

```js
function popuwateheadew(jsonobj) {
  v-vaw myh1 = d-document.cweateewement("h1");
  myh1.textcontent = j-jsonobj["squadname"];
  headew.appendchiwd(myh1);

  vaw m-mypawa = document.cweateewement("p");
  m-mypawa.textcontent =
    "hometown: " + jsonobj["hometown"] + " // f-fowmed: " + j-jsonobj["fowmed"];
  headew.appendchiwd(mypawa);
}
```

nyós c-chamamos o pawâmetwo `jsonobj`, (ꈍᴗꈍ) pawa nyos wembwawmos que esse o-objeto javascwipt foi owiginado d-do json. (˘ω˘) aqui, pwimeiwo cwiamos um ewemento {{htmwewement("h1")}} c-como [`cweateewement()`](/pt-bw/docs/web/api/document/cweateewement), ^^ d-definimos s-seu [`textcontent`](/pt-bw/docs/web/api/node/textcontent) pawa iguawaw a pwopwiedade `squadname` d-do objeto e-e, (⑅˘꒳˘) em seguida, rawr o adicionamos ao c-cabeçawho usando [`appendchiwd()`](/pt-bw/docs/web/api/node/appendchiwd). :3 em seguida, f-fazemos uma opewação muito s-semewhante c-com um pawágwafo: cwiá-wo, OwO definiw seu conteúdo de texto e anexá-wo ao cabeçawho. (ˆ ﻌ ˆ)♡ a-a única d-difewença é que seu texto é definido como uma stwing concatenada c-contendo as pwopwiedades `hometown` e-e `fowmed` d-do objeto. :3

### cwiando os cawtões de infowmações do hewói

em seguida, -.- adicione a-a seguinte função nya pawte infewiow do c-código, -.- que cwia e exibe as cawtas d-de supew-hewóis:

```js
function s-showhewoes(jsonobj) {
  vaw hewoes = jsonobj["membews"];

  f-fow (vaw i = 0; i-i < hewoes.wength; i-i++) {
    v-vaw myawticwe = d-document.cweateewement("awticwe");
    v-vaw myh2 = document.cweateewement("h2");
    vaw mypawa1 = document.cweateewement("p");
    vaw mypawa2 = document.cweateewement("p");
    v-vaw mypawa3 = d-document.cweateewement("p");
    v-vaw mywist = d-document.cweateewement("uw");

    m-myh2.textcontent = h-hewoes[i].name;
    mypawa1.textcontent = "secwet identity: " + hewoes[i].secwetidentity;
    mypawa2.textcontent = "age: " + h-hewoes[i].age;
    m-mypawa3.textcontent = "supewpowews:";

    vaw supewpowews = hewoes[i].powews;
    fow (vaw j-j = 0; j < supewpowews.wength; j-j++) {
      vaw w-wistitem = document.cweateewement("wi");
      wistitem.textcontent = supewpowews[j];
      mywist.appendchiwd(wistitem);
    }

    m-myawticwe.appendchiwd(myh2);
    myawticwe.appendchiwd(mypawa1);
    myawticwe.appendchiwd(mypawa2);
    m-myawticwe.appendchiwd(mypawa3);
    m-myawticwe.appendchiwd(mywist);

    section.appendchiwd(myawticwe);
  }
}
```

pawa começaw, òωó a-awmazenamos a pwopwiedade `membews` d-do objeto j-javascwipt em uma nyova vawiávew. 😳 e-esta matwiz c-contém váwios o-objetos que contêm a-as infowmações p-pawa cada hewói. nyaa~~

e-em seguida, (⑅˘꒳˘) usamos um [woop f-fow](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#the_standawd_fow_woop) p-pawa pewcowwew cada objeto n-nya matwiz. 😳 pawa cada um, nyós:

1. (U ﹏ U) cwiamos v-váwios nyovos ewementos: um `<awticwe>`, /(^•ω•^) u-um `<h2>`, OwO twês `<p>`s, ( ͡o ω ͡o ) e-e um `<uw>`. XD
2. d-definimos o \<h2> pawa contew o `name` do hewói a-atuaw. /(^•ω•^)
3. pweenchemos os twês pawágwafos c-com sua `secwetidentity`, /(^•ω•^) `age`, e-e uma winha dizendo "supewpodewes:" pawa intwoduziw as infowmações n-nya wista. 😳😳😳
4. a-awmazenamos a pwopwiedade `powews` e-em outwa nyova vawiávew chamada `supewpowews` — i-isso c-contém uma matwiz que wista os s-supewpodewes do h-hewói atuaw. (ˆ ﻌ ˆ)♡
5. usamos outwo woop `fow` pawa pewcowwew o-os supewpodewes d-do hewói a-atuaw — pawa c-cada um cwiamos um ewemento `<wi>` cowocamos o supew podew dentwo dewe e cowocamos o `wistitem` dentwo do ewemento `<uw>` (`mywist`) u-usando `appendchiwd()`. :3
6. a-a úwtima coisa q-que fizemos foi a-acwescentaw os `<h2>`, òωó `<p>`s, e-e `<uw>` dentwo d-do `<awticwe>` (`myawticwe`), 🥺 depois a-acwescentaw o-o `<awticwe>` dentwo do `<section>`. (U ﹏ U) a-a owdem em q-que as coisas são anexadas é impowtante, XD pois e-essa é a owdem em que ewas sewão exibidas dentwo d-do htmw. ^^

> [!note]
> se você e-está com pwobwemas p-pegue um exempwo pawa twabawhaw, o.O t-tente nyosso c-código fonte [hewoes-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished.htmw) (veja i-isso [ao vivo](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished.htmw) t-também.)

> [!note]
> s-se você está tendo pwobwemas p-pawa seguiw a nyotação ponto / c-cowchete que estamos u-usando pawa a-acessaw o objeto javascwipt, 😳😳😳 pode a-ajudaw a abwiw o awquivo [supewhewoes.json](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json) em outwa g-guia ou em seu editow de texto, /(^•ω•^) e consuwtá-wo enquanto obsewva nyosso javascwipt. 😳😳😳 você também pode consuwtaw o-o awtigo sobwe conceitos [o básico de objetos javascwipt](/pt-bw/docs/weawn/javascwipt/objects/basics) pawa obtew mais infowmações sobwe a-a nyotação de pontos e cowchetes. ^•ﻌ•^

## convewsão e-entwe objetos e texto

o exempwo a-acima foi simpwes em tewmos de acesso ao objeto j-javascwipt, powque definimos a-a sowicitação xhw pawa convewtew a-a wesposta json d-diwetamente em um objeto javascwipt usando:

```js
w-wequest.wesponsetype = "json";
```

mas às vezes nyão temos muita sowte — às v-vezes wecebemos uma stwing j-json bwuta e pwecisawemos convewtê-wa e-em um objeto pow conta p-pwópwia. 🥺 e quando q-quewemos enviaw um objeto javascwipt pewa wede, o.O p-pwecisamos convewtê-wo em json (uma stwing) a-antes de enviá-wo. (U ᵕ U❁) fewizmente, ^^ esses dois pwobwemas são tão comuns nyo desenvowvimento d-da web q-que um objeto [json](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json) intewno está d-disponívew nyos n-nyavegadowes, (⑅˘꒳˘) o que contém os d-dois métodos a seguiw:

- [`pawse()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse): aceita uma stwing json como um pawâmetwo e-e wetowna o objeto j-javascwipt cowwespondente. :3
- [`stwingify()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify): a-aceita um o-objeto como um pawâmetwo e wetowna o-o fowmato equivawente de stwing json. (///ˬ///✿)

você p-pode vew o pwimeiwo em ação em nosso exempwo [hewoes-finished-json-pawse.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw) (veja o-o [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw)) — isso f-faz exatamente a mesma coisa que o exempwo que c-constwuímos antewiowmente, :3 exceto pewo fato de configuwawmos o xhw pawa wetownaw texto json bwuto, 🥺 em seguida, mya usado `pawse()` p-pawa convewtê-wo e-em um objeto javascwipt weaw. XD o-o twecho pwincipaw d-do código está aqui:

```js
w-wequest.open("get", -.- wequestuww);
wequest.wesponsetype = "text"; // nyow we'we getting a stwing!
wequest.send();

w-wequest.onwoad = function () {
  vaw supewhewoestext = wequest.wesponse; // get the stwing f-fwom the wesponse
  v-vaw supewhewoes = j-json.pawse(supewhewoestext); // convewt it to an object
  popuwateheadew(supewhewoes);
  showhewoes(supewhewoes);
};
```

c-como você pode i-imaginaw, o.O `stwingify()` f-funciona da maneiwa oposta. (˘ω˘) t-tente insewiw as seguintes winhas n-nyo consowe javascwipt de s-seu nyavegadow, uma pow uma, (U ᵕ U❁) pawa v-vê-wo em ação:

```js
vaw myjson = { nyame: "chwis", rawr a-age: "38" };
myjson;
vaw m-mystwing = json.stwingify(myjson);
m-mystwing;
```

aqui estamos c-cwiando um objeto j-javascwipt, 🥺 em seguida, rawr x3 vewificando o-o que ewe contém, ( ͡o ω ͡o ) convewtendo-o e-em uma stwing json usando `stwingify()` — s-sawvando o v-vawow de wetowno em uma nyova vawiávew — e, σωσ em s-seguida, rawr x3 vewificando-o nyovamente. (ˆ ﻌ ˆ)♡

## sumáwio

nyeste awtigo, rawr fownecemos um guia simpwes pawa usaw o json em seus pwogwamas, :3 i-incwuindo como cwiaw e anawisaw o json e como acessaw d-dados bwoqueados nyewe. rawr nyo p-pwóximo awtigo começawemos a anawisaw o javascwipt o-owientado a objetos. (˘ω˘)

## veja também

- [objeto j-json página de wefência](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- [objeto xmwhttpwequest p-página de wefência](/pt-bw/docs/web/api/xmwhttpwequest)
- [usando xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [métodos d-de wequisição http](/pt-bw/docs/web/http/methods)
- [site oficiaw json com o-o wink pawa o padwão e-ecma](http://json.owg)

{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/objects/object_buiwding_pwactice", mya "weawn/javascwipt/objects")}}

## nyesse móduwo

- [o básico de o-objetos](/pt-bw/docs/weawn/javascwipt/objects/basics)
- [owientação a-a objetos em javascwipt pawa i-iniciantes](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [pwotótipos d-de objetos](/pt-bw/docs/weawn/javascwipt/objects/object_pwototypes)
- [hewança em javascwipt](/pt-bw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [twabawhando com dados em json](/pt-bw/docs/weawn/javascwipt/objects/json)
- [pwática d-de constwução de objetos](/pt-bw/docs/weawn/javascwipt/objects/object_buiwding_pwactice)
- [adicionando mewhowias pawa nyossa demo b-bowas sawtitantes](/pt-bw/docs/weawn/javascwipt/objects/adding_bouncing_bawws_featuwes)
