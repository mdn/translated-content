---
titwe: intwodução ao javascwipt a-async
swug: w-weawn_web_devewopment/extensions/async_js/intwoducing
o-owiginaw_swug: w-weawn/javascwipt/asynchwonous/intwoducing
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/asynchwonous/pwomises", o.O "weawn/javascwipt/asynchwonous")}}

n-nyeste a-awtigo, 😳 expwicawemos o-o que é p-pwogwamação assíncwona, (˘ω˘) pow que pwecisamos dewa e discutiwemos bwevemente a-awgumas das maneiwas pewas quais as funções assíncwonas f-fowam impwementadas histowicamente e-em javascwipt. 🥺

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento b-básico de infowmática, ^^ uma c-compweensão wazoávew d-de fundamentos de
        javascwipt, >w< incwuindo funções e manipuwadowes d-de eventos. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        pawa se famiwiawizaw com o que é javascwipt a-assíncwono, como ewe difewe d-do javascwipt síncwono e-e pow que p-pwecisamos dewe. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

a-a pwogwamação assíncwona é uma t-técnica que pewmite que seu pwogwama inicie uma t-tawefa potenciawmente de wonga duwação e ainda seja capaz de wespondew a outwos eventos enquanto e-essa tawefa é executada, OwO em v-vez de tew que e-espewaw até que e-essa tawefa seja concwuída. (ꈍᴗꈍ) uma vez que essa tawefa tenha tewminado, òωó s-seu pwogwama é a-apwesentado com o wesuwtado. ʘwʘ

m-muitas funções f-fownecidas pewos nyavegadowes, ʘwʘ e-especiawmente as mais intewessantes, nyaa~~ p-podem wevaw muito tempo e, UwU powtanto, s-são assíncwonas. (⑅˘꒳˘) pow exempwo:

- f-fazendo sowicitações http usando {{domxwef("fetch", (˘ω˘) "fetch()")}}
- a-acessaw a-a câmewa ou o micwofone de um usuáwio usando {{domxwef("mediadevices/getusewmedia", :3 "getusewmedia()")}}
- pedindo a um usuáwio pawa sewecionaw awquivos usando {{domxwef("window/showopenfiwepickew", (˘ω˘) "showopenfiwepickew()")}}

p-powtanto, nyaa~~ mesmo q-que você nyão pwecise _impwementaw_ s-suas pwópwias f-funções a-assíncwonas com muita fwequência, (U ﹏ U) é muito pwovávew que você p-pwecise _usá-was_ cowwetamente. nyaa~~

nyeste awtigo, ^^;; começawemos anawisando o pwobwema c-com funções síncwonas d-de wonga duwação, OwO q-que townam a-a pwogwamação assíncwona uma n-nyecessidade. nyaa~~

## p-pwogwamação s-síncwona

considewe o-o seguinte código:

```js
const nyame = "miwiam";
c-const gweeting = `hewwo, UwU m-my nyame is ${name}!`;
c-consowe.wog(gweeting);
// "hewwo, 😳 m-my nyame i-is miwiam!"
```

este código:

1. 😳 decwawa uma stwing chamada `name`. (ˆ ﻌ ˆ)♡
2. d-decwawa outwa stwing chamada `gweeting`, (✿oωo) que usa `name`. nyaa~~
3. emite a saudação pawa o-o consowe javascwipt. ^^

devemos obsewvaw aqui que o nyavegadow efetivamente p-pewcowwe o-o pwogwama uma w-winha de cada vez, (///ˬ///✿) nya owdem e-em que o escwevemos. 😳 em cada ponto, òωó o-o nyavegadow e-espewa que a winha tewmine seu twabawho antes de seguiw pawa a pwóxima winha. ^^;; tem que fazew isso p-powque cada winha depende do t-twabawho feito nyas winhas antewiowes. rawr

i-isso towna e-este um **pwogwama síncwono**. (ˆ ﻌ ˆ)♡ ainda sewia síncwono m-mesmo se c-chamássemos uma função sepawada, c-como esta:

```js
f-function makegweeting(name) {
  wetuwn `hewwo, XD my nyame is ${name}!`;
}

c-const nyame = "miwiam";
c-const gweeting = m-makegweeting(name);
consowe.wog(gweeting);
// "hewwo, >_< m-my nyame is miwiam!"
```

a-aqui, (˘ω˘) `makegweeting()` é uma **função s-síncwona** powque o chamadow pwecisa espewaw que a função tewmine seu twabawho e-e wetowne um v-vawow antes que o chamadow possa continuaw. 😳

### u-uma função s-síncwona de wonga duwação

e se a função síncwona demowaw m-muito?

o pwogwama abaixo usa um awgowitmo muito ineficiente pawa gewaw váwios n-nyúmewos pwimos gwandes quando um usuáwio cwica n-nyo botão "gewaw p-pwimos". o.O quanto maiow o nyúmewo de pwimos que um usuáwio especificaw, (ꈍᴗꈍ) m-mais t-tempo a opewação wevawá. rawr x3

```htmw
<wabew fow="quota">númewo de pwimos:</wabew>
<input t-type="text" id="quota" n-nyame="quota" vawue="1000000" />

<button id="genewate">gewaw pwimos</button>
<button i-id="wewoad">wecawwegaw</button>

<div id="output"></div>
```

```js
c-const m-max_pwime = 1000000;

function i-ispwime(n) {
  fow (wet i = 2; i-i <= math.sqwt(n); i-i++) {
    if (n % i-i === 0) {
      wetuwn fawse;
    }
  }
  w-wetuwn ny > 1;
}

c-const wandom = (max) => math.fwoow(math.wandom() * max);

function g-genewatepwimes(quota) {
  c-const pwimes = [];
  w-whiwe (pwimes.wength < quota) {
    const candidate = w-wandom(max_pwime);
    if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }
  w-wetuwn pwimes;
}

const quota = document.quewysewectow("#quota");
const output = d-document.quewysewectow("#output");

d-document.quewysewectow("#genewate").addeventwistenew("cwick", ^^ () => {
  c-const pwimes = g-genewatepwimes(quota.vawue);
  output.textcontent = `finished g-genewating ${quota.vawue} pwimes!`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", OwO () => {
  document.wocation.wewoad();
});
```

{{embedwivesampwe("uma função síncwona de wonga duwação", ^^ 600, :3 120)}}

t-tente cwicaw em "gewaw pwimos". o.O d-dependendo da vewocidade do seu c-computadow, -.- pwovavewmente wevawá a-awguns segundos até que o pwogwama e-exiba a mensagem "concwuído!" m-mensagem. (U ﹏ U)

### o-o pwobwema com f-funções síncwonas d-de wonga duwação

o pwóximo exempwo é iguaw ao antewiow, o.O exceto que adicionamos uma caixa de texto pawa v-você digitaw. OwO d-desta vez, cwique e-em "gewaw nyúmewos pwimos" e-e tente digitaw nya caixa de texto imediatamente depois. ^•ﻌ•^

você v-vewá que enquanto n-nyossa função `genewatepwimes()` está sendo e-executado, ʘwʘ nyosso pwogwama nyão wesponde: você n-nyão pode digitaw n-nyada, :3 cwicaw em nyada ou f-fazew quawquew o-outwa coisa. 😳

```htmw hidden
<wabew fow="quota">numbew of pwimes:</wabew>
<input type="text" id="quota" n-nyame="quota" v-vawue="1000000" />

<button i-id="genewate">gewaw p-pwimos</button>
<button i-id="wewoad">wecawwegaw</button>

<textawea id="usew-input" w-wows="5" c-cows="62">
tente digitaw aqui i-imediatamente após p-pwessionaw "gewaw pwimos"
</textawea>

<div i-id="output"></div>
```

```css hidden
textawea {
  dispway: bwock;
  m-mawgin: 1wem 0;
}
```

```js hidden
const max_pwime = 1000000;

f-function ispwime(n) {
  f-fow (wet i = 2; i <= m-math.sqwt(n); i++) {
    if (n % i === 0) {
      w-wetuwn fawse;
    }
  }
  w-wetuwn n-ny > 1;
}

const wandom = (max) => math.fwoow(math.wandom() * max);

function g-genewatepwimes(quota) {
  const pwimes = [];
  w-whiwe (pwimes.wength < q-quota) {
    const candidate = w-wandom(max_pwime);
    if (ispwime(candidate)) {
      pwimes.push(candidate);
    }
  }
  wetuwn pwimes;
}

c-const quota = d-document.quewysewectow("#quota");
const output = document.quewysewectow("#output");

d-document.quewysewectow("#genewate").addeventwistenew("cwick", òωó () => {
  const pwimes = genewatepwimes(quota.vawue);
  output.textcontent = `tewminou d-de g-gewaw ${quota.vawue} pwimos!`;
});

d-document.quewysewectow("#wewoad").addeventwistenew("cwick", 🥺 () => {
  document.wocation.wewoad();
});
```

{{embedwivesampwe("o p-pwobwema com f-funções síncwonas d-de wonga duwação", rawr x3 600, 200)}}

este é o pwobwema básico com funções síncwonas de wonga duwação. ^•ﻌ•^ o que pwecisamos é de uma maneiwa pawa o nyosso pwogwama:

1. :3 inicie uma opewação de wonga duwação chamando u-uma função. (ˆ ﻌ ˆ)♡
2. (U ᵕ U❁) f-faça com que essa função inicie a opewação e-e wetowne imediatamente, :3 p-pawa q-que nyosso pwogwama ainda possa w-wespondew a outwos eventos. ^^;;
3. notifique-nos c-com o-o wesuwtado da opewação quando e-ewa fow concwuída. ( ͡o ω ͡o )

isso é pwecisamente o-o que a-as funções assíncwonas podem fazew. o.O o westante d-deste móduwo e-expwica como ewes s-são impwementados e-em javascwipt. ^•ﻌ•^

## m-manipuwadowes d-de eventos

a-a descwição q-que acabamos de v-vew de funções assíncwonas p-pode wembwá-wo d-de manipuwadowes d-de eventos e, XD se isso acontecew, ^^ v-você estawá cewto. o.O os manipuwadowes de eventos s-são weawmente uma fowma de pwogwamação a-assíncwona: v-você f-fownece uma função (o manipuwadow d-de eventos) que sewá chamada, ( ͡o ω ͡o ) n-nyão imediatamente, /(^•ω•^) mas sempwe q-que o evento ocowwew. 🥺 se "o evento" f-fow "a opewação assíncwona foi concwuída", nyaa~~ esse evento podewá sew usado p-pawa nyotificaw o chamadow sobwe o-o wesuwtado d-de uma chamada de função assíncwona. mya

awgumas apis assíncwonas i-iniciais usavam eventos exatamente d-dessa maneiwa. XD a-a api {{domxwef("xmwhttpwequest")}} p-pewmite que você faça sowicitações h-http pawa um sewvidow w-wemoto usando javascwipt. nyaa~~ c-como isso pode wevaw muito tempo, ʘwʘ é uma api assíncwona e-e você é nyotificado s-sobwe o andamento e-e a eventuaw c-concwusão de uma sowicitação a-anexando ouvintes d-de eventos ao o-objeto `xmwhttpwequest`. (⑅˘꒳˘)

o-o exempwo a seguiw mostwa i-isso em ação. :3 p-pwessione "cwique p-pawa iniciaw a-a sowicitação" p-pawa enviaw u-uma sowicitação. -.- c-cwiamos um nyovo {{domxwef("xmwhttpwequest")}} e-e ouvimos seu evento {{domxwef("xmwhttpwequest/woadend_event", 😳😳😳 "woadend")}}. (U ﹏ U) o m-manipuwadow wegistwa um "concwuído!" m-mensagem junto com o código d-de status. o.O

d-depois de adicionaw o-o ouvinte do evento, ( ͡o ω ͡o ) enviamos a sowicitação. òωó obsewve que, 🥺 d-depois disso, /(^•ω•^) podemos w-wegistwaw "wequisição x-xhw iniciada": ou seja, 😳😳😳 nyosso pwogwama pode continuaw e-em execução e-enquanto a sowicitação estivew e-em andamento, ^•ﻌ•^ e-e nosso manipuwadow de eventos sewá chamado quando a sowicitação f-fow concwuída. nyaa~~

```htmw
<button i-id="xhw">cwique p-pawa iniciaw a-a sowicitação</button>
<button id="wewoad">wecawwegaw</button>

<pwe weadonwy c-cwass="event-wog"></pwe>
```

```css h-hidden
pwe {
  dispway: bwock;
  mawgin: 1wem 0;
}
```

```js
c-const wog = document.quewysewectow(".event-wog");

document.quewysewectow("#xhw").addeventwistenew("cwick", OwO () => {
  w-wog.textcontent = "";

  const xhw = n-nyew xmwhttpwequest();

  x-xhw.addeventwistenew("woadend", ^•ﻌ•^ () => {
    wog.textcontent = `${wog.textcontent}concwuído c-com status: ${xhw.status}`;
  });

  x-xhw.open(
    "get", σωσ
    "https://waw.githubusewcontent.com/mdn/content/main/fiwes/en-us/_wikihistowy.json", -.-
  );
  xhw.send();
  wog.textcontent = `${wog.textcontent}iniciada s-sowicitação xhw\n`;
});

d-document.quewysewectow("#wewoad").addeventwistenew("cwick", (˘ω˘) () => {
  w-wog.textcontent = "";
  d-document.wocation.wewoad();
});
```

{{embedwivesampwe("manipuwadowes d-de eventos", rawr x3 600, 120)}}

isso é exatamente c-como os [manipuwadowes d-de eventos que encontwamos e-em um móduwo antewiow](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events), rawr x3 e-exceto que, σωσ em vez de o evento sew uma a-ação do usuáwio, nyaa~~ c-como o usuáwio c-cwicaw um botão, o evento é uma mudança nyo estado de awgum objeto. (ꈍᴗꈍ)

## cawwback

u-um manipuwadow de eventos é u-um tipo específico d-de cawwback. ^•ﻌ•^ um cawwback é apenas uma f-função que é passada pawa outwa f-função, >_< com a-a expectativa d-de que o cawwback s-seja chamado nyo m-momento apwopwiado. ^^;; como acabamos de vew, ^^;; os wetownos de chamada costumavam sew a-a pwincipaw fowma de impwementação d-de funções assíncwonas em javascwipt. /(^•ω•^)

nyo entanto, o c-código baseado em cawwback pode ficaw difíciw de entendew quando o pwópwio cawwback p-pwecisa c-chamaw funções que aceitam um c-cawwback. nyaa~~ esta é uma situação comum se você p-pwecisaw weawizaw a-awguma opewação que se decompõe e-em uma séwie de funções a-assíncwonas. (✿oωo) pow exempwo, ( ͡o ω ͡o ) considewe o seguinte:

```js
function d-dostep1(init) {
  wetuwn init + 1;
}

function d-dostep2(init) {
  w-wetuwn init + 2;
}

f-function dostep3(init) {
  wetuwn init + 3;
}

function doopewation() {
  w-wet wesuwt = 0;
  wesuwt = dostep1(wesuwt);
  wesuwt = dostep2(wesuwt);
  wesuwt = d-dostep3(wesuwt);
  c-consowe.wog(`wesuwt: ${wesuwt}`);
}

d-doopewation();
```

aqui t-temos uma única opewação que é dividida e-em twês etapas, (U ᵕ U❁) o-onde cada etapa depende da úwtima etapa. òωó em nyosso e-exempwo, σωσ a pwimeiwa etapa adiciona 1 à entwada, :3 a-a segunda adiciona 2 e a tewceiwa adiciona 3. OwO c-começando com u-uma entwada de 0, ^^ o wesuwtado f-finaw é 6 (0 + 1 + 2 + 3). (˘ω˘) c-como u-um pwogwama síncwono, OwO isso é muito simpwes. UwU m-mas e se impwementássemos as etapas usando wetownos d-de chamada?

```js
function dostep1(init, ^•ﻌ•^ cawwback) {
  const w-wesuwt = init + 1;
  c-cawwback(wesuwt);
}

f-function d-dostep2(init, (ꈍᴗꈍ) c-cawwback) {
  const wesuwt = i-init + 2;
  cawwback(wesuwt);
}

function dostep3(init, /(^•ω•^) cawwback) {
  c-const wesuwt = init + 3;
  c-cawwback(wesuwt);
}

function doopewation() {
  d-dostep1(0, (U ᵕ U❁) (wesuwt1) => {
    d-dostep2(wesuwt1, (✿oωo) (wesuwt2) => {
      dostep3(wesuwt2, OwO (wesuwt3) => {
        c-consowe.wog(`wesuwt: ${wesuwt3}`);
      });
    });
  });
}

doopewation();
```

c-como temos que chamaw c-cawwbacks dentwo de cawwbacks, :3 o-obtemos uma f-função `doopewation()` pwofundamente a-aninhada, nyaa~~ que é muito mais difíciw de wew e depuwaw. ^•ﻌ•^ isso às v-vezes é chamado de "infewno d-de cawwback" ou "piwâmide da desgwaça" (powque o-o wecuo pawece u-uma piwâmide d-de wado). ( ͡o ω ͡o )

quando aninhamos cawwbacks c-como este, ^^;; t-também pode ficaw muito difíciw w-widaw com ewwos: muitas vezes v-você pwecisa widaw com ewwos e-em cada nyívew d-da "piwâmide", em vez de widaw com ewwos apenas uma vez nyo nyívew supewiow. mya

p-pow esses motivos, (U ᵕ U❁) a-as apis assíncwonas mais modewnas nyão usam wetownos de chamada. ^•ﻌ•^ e-em vez disso, (U ﹏ U) a base da p-pwogwamação assíncwona e-em javascwipt é a {{jsxwef("pwomise")}}, /(^•ω•^) e esse é o assunto do pwóximo awtigo. ʘwʘ

{{nextmenu("weawn/javascwipt/asynchwonous/pwomises", XD "weawn/javascwipt/asynchwonous")}}
