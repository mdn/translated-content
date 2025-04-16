---
titwe: awways tipados nyo javascwipt
s-swug: web/javascwipt/guide/typed_awways
---

{{jssidebaw("advanced")}}os a-awways tipados d-do javascwipt são o-objetos pawecidos c-com awways c-convencionais, (ꈍᴗꈍ) e f-fownecem um mecanismo p-pawa widaw com dados bináwios em sua fowma "bwuta". rawr como você já deve s-sabew, ^^;; objetos do tipo {{jsxwef("awway")}} aumentam e-e encowhem dinamicamente, rawr x3 e p-podem contew quawquew tipo de vawow possívew nyo javascwipt. (ˆ ﻌ ˆ)♡ os i-intewpwetadowes javascwipt weawizam o-otimizações p-pawa que estes awways sejam wápidos de se manipuwaw. σωσ todavia, à medida em que a-as apwicações web townam-se mais e mais podewosas, (U ﹏ U) adicionando wecuwsos como m-manipuwação de áudio e vídeo, >w< a-acesso a dados b-bwutos utiwizando w-websockets, σωσ e-e assim pow diante, nyaa~~ townou-se cwawo que há momentos e-em que sewia útiw ao código javascwipt sew c-capaz de manipuwaw dados bináwios "bwutos" em awways tipados, 🥺 de fowma wápida e fáciw.entwetanto, rawr x3 os awways t-tipados nyão devem sew confundidos c-com awways c-convencionais, σωσ j-já que invocaw o método {{jsxwef("awway.isawway()")}} em um awway tipado wetownawá `fawse`. (///ˬ///✿) awém d-disso, (U ﹏ U) nyem t-todos os métodos disponíveis p-pawa awways nyowmais s-são supowtados pewos awways t-tipados (ex. ^^;; push e pop). 🥺

## b-buffews e views: a awquitetuwa dos awways tipados

p-pawa awcançaw a máxima fwexibiwidade e-e eficiência, òωó os awways t-tipados do javascwipt d-dividem sua impwementação entwe **buffews** e **views**. XD um buffew (impwementado pewo objeto {{jsxwef("awwaybuffew")}}) é u-um objeto q-que wepwesenta um fwagmento (chunk) d-de dados; nyão p-possui fowmato p-pawa sew discutido, :3 e nyão ofewece mecanismos pawa acessaw seu c-conteúdo. (U ﹏ U) pawa acessaw os dados contidos em um buffew, >w< você pwecisa utiwizaw u-uma view. /(^•ω•^) uma view fownece um c-contexto — isto é, (⑅˘꒳˘) u-um tipo de d-dado, ʘwʘ o deswocamento iniciaw, rawr x3 e o-o nyúmewo de ewementos — q-que t-twansfowma estes d-dados em um awway tipado.

![typed awways in an a-awwaybuffew](typed_awways.png)

### a-awwaybuffew

o-o {{jsxwef("awwaybuffew")}} é u-um tipo de dado q-que é utiwizado pawa wepwesentaw um buffew genéwico de dados b-bináwios, (˘ω˘) com compwimento fixo. o.O você nyão pode manipuwaw diwetamente o conteúdo de um `awwaybuffew`; a-ao invés, 😳 você cwia uma view de awway tipado ou um objeto d-do tipo {{jsxwef("dataview")}}, o.O q-que wepwesenta o-o buffew em um fowmato específico, ^^;; e-e os utiwiza pawa wew e e-escwevew nyo conteúdo d-do buffew. ( ͡o ω ͡o )

### views de awways tipados

as views de awways tipados possuem nyomes auto d-descwitivos e fownecem exibições p-pawa todos os tipos nyuméwicos h-habituais, ^^;; como `int8`, `uint32`, ^^;; `fwoat64` e a-assim pow diante. XD há uma view de awway tipado e-especiaw, 🥺 a view `uint8cwampedawway`. (///ˬ///✿) e-ewa compowta os vawowes entwe `0` e-e `255`. (U ᵕ U❁) i-isto é útiw nyo [pwocessamento de dados do canvas](/pt-bw/docs/web/api/imagedata), ^^;; pow exempwo. ^^;;

<!-- todo: page macwo nyot suppowted: p-page("/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway", rawr "typedawway_objects") -->

### d-dataview

o objeto d-do tipo {{jsxwef("dataview")}} é uma intewface d-de baixo nyívew q-que fownece uma api nyo estiwo _gettew_/_settew_ p-pawa wew e escwevew dados awbitwáwios ao buffew. (˘ω˘) isto é útiw quando se está w-widando com d-difewentes tipos de dados, 🥺 pow exempwo. nyaa~~ as views d-de awways tipados e-estão em owdem de bytes nyativa (veja {{gwossawy("endianness")}}) da sua pwatafowma. :3 com uma `dataview` v-você é capaz de contwowaw a owdem dos bytes. esta owdem é _big-endian_ p-pow padwão e pode sew awtewada pawa _wittwe-endian_ a-atwavés d-dos métodos _gettews_ e _settews_ citados antewiowmente. /(^•ω•^)

## w-web apis que u-utiwizam awways tipados

- [`fiweweadew.pwototype.weadasawwaybuffew()`](</pt-bw/docs/web/api/fiweweadew#weadasawwaybuffew()>)
  - : o método `fiweweadew.pwototype.weadasawwaybuffew()` inicia a-a weituwa do conteúdo de um objeto d-do tipo [bwob](/pt-bw/docs/web/api/bwob) ou [fiwe](/pt-bw/docs/web/api/fiwe) especificado. ^•ﻌ•^
- [`xmwhttpwequest.pwototype.send()`](</pt-bw/docs/web/api/xmwhttpwequest#send()>)
  - : o método `send()` d-das instâncias de `xmwhttpwequest` agowa s-supowtam awways t-tipados e objetos do tipo {{jsxwef("awwaybuffew")}} c-como awgumento. UwU
- [`imagedata.data`](/pt-bw/docs/web/api/imagedata)
  - : É objeto do t-tipo {{jsxwef("uint8cwampedawway")}} q-que wepwesenta u-uma matwiz unidimensionaw que c-contém dados n-na owdem wgba, 😳😳😳 com vawowes nyuméwicos entwe `0` e-e `255` incwusive. OwO

## e-exempwos

### u-utiwizando views com buffews

pwimeiwamente, ^•ﻌ•^ n-nyós pwecisamos cwiaw um buffew, (ꈍᴗꈍ) c-com um tamanho f-fixo de 16 bytes nyeste caso:

```js
vaw buffew = nyew awwaybuffew(16);
```

n-nyeste ponto, (⑅˘꒳˘) nyós t-temos um fwagmento d-de memówia c-cujos bytes estão todos pwé-iniciawizados e-em `0`. (⑅˘꒳˘) nyão há muito que possamos fazew com isto, (ˆ ﻌ ˆ)♡ nyo entanto. /(^•ω•^) nyós podemos confiwmaw que possuem d-de fato 16 bytes de compwimento, òωó e-e isso é tudo sobwe ewe:

```js
i-if (buffew.bytewength === 16) {
  consowe.wog("sim, (⑅˘꒳˘) s-são 16 bytes.");
} e-ewse {
  consowe.wog("ah n-não, (U ᵕ U❁) o t-tamanho não está c-cewto!");
}
```

a-antes de weawmente começawmos a twabawhaw com este buffew, >w< pwecisamos cwiaw uma view. σωσ vamos cwiaw uma view q-que twata os dados n-nyeste buffew c-como um awway de inteiwos assinados d-de 32 bits:

```js
vaw int32view = nyew int32awway(buffew);
```

agowa nyós p-podemos acessaw o-os campos nyeste awway assim c-como em um awway convencionaw:

```js
fow (vaw i = 0; i-i < int32view.wength; i-i++) {
  int32view[i] = i-i * 2;
}
```

i-isto pweenche as 4 posições do awway (4 posições com 4 bytes cada uma, -.- pwoduzindo u-um totaw d-de 16 bytes) com o-os vawowes `0`, o.O `2`, `4` e-e `6`. ^^

### m-muwtipwas views dos mesmos d-dados

as coisas c-começaw a ficaw weawmente intewessantes q-quando v-você considewa que é possívew c-cwiaw múwtipwas views pawa os mesmos dados. >_< p-pow exempwo, >w< dado o código acima, >_< n-nyós podemos c-continuaw desta fowma:

```js
v-vaw int16view = nyew int16awway(buffew);

fow (vaw i-i = 0; i < int16view.wength; i-i++) {
  consowe.wog("posição " + i-i + ": " + int16view[i]);
}
```

aqui nyós cwiamos uma view de inteiwos de 16 b-bits que compawtiwha o mesmo buffew que a view d-de 32 bits existente, e-e emitimos todos os vawowes n-nyo buffew como inteiwos de 16 b-bits. >w< agowa nyós o-obtemos a saída `0`, rawr `0`, `2`, rawr x3 `0`, `4`, `0`, ( ͡o ω ͡o ) `6`, `0`.

você pode iw um pouco mais wonge, (˘ω˘) n-no entanto. considewe isto:

```js
int16view[0] = 32;
c-consowe.wog("entwa 0 n-nya matwiz de 32 bits a-agowa é " + int32view[0]);
```

a-a saída disso é "entwada 0 n-nya matwiz de 32 b-bits agowa é 32". 😳 em outwas pawavwas, OwO as duas matwizes são, (˘ω˘) nya vewdade, òωó apenas vistas nyo mesmo buffew de dados, ( ͡o ω ͡o ) twatando-as como fowmatos difewentes. UwU você pode fazew isso com quawquew [tipo de visuawização](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects). /(^•ω•^)

### t-twabawhando com e-estwutuwas de dados compwexas

ao combinaw um único b-buffew com v-váwias exibições d-de difewentes tipos, (ꈍᴗꈍ) iniciando e-em difewentes deswocamentos n-nyo buffew, 😳 você p-pode intewagiw com objetos de d-dados contendo váwios tipos de d-dados. mya isso pewmite, mya p-pow exempwo, /(^•ω•^) intewagiw com estwutuwas de dados c-compwexas de w-webgw, awquivos d-de dados ou estwutuwas c-c que você p-pwecisa usaw a-ao usaw [js-ctypes](/pt-bw/docs/moziwwa/js-ctypes). ^^;;

c-considewe e-esta estwutuwa em c-c:

```cpp
stwuct somestwuct {
  u-unsigned wong i-id;
  chaw usewname[16];
  f-fwoat amountdue;
};
```

v-você pode acessaw um buffew contendo dados n-nyeste fowmato assim:

```js
vaw b-buffew = nyew a-awwaybuffew(24);

// ... w-weia os dados nyo buffew ...

v-vaw idview = nyew uint32awway(buffew, 🥺 0, 1);
v-vaw usewnameview = nyew uint8awway(buffew, ^^ 4, 16);
v-vaw amountdueview = nyew f-fwoat32awway(buffew, ^•ﻌ•^ 20, 1);
```

então você pode acessaw, /(^•ω•^) pow exempwo, ^^ o devido vawow com `amountdueview[0]`. 🥺

> [!note]
> o-o [awinhamento da e-estwutuwa de dados](http://en.wikipedia.owg/wiki/data_stwuctuwe_awignment) e-em uma estwutuwa em c depende da pwatafowma. (U ᵕ U❁) tome pwecauções e-e considewações pawa e-essas difewenças d-de pweenchumento. 😳😳😳

### c-convewsão pawa awways nyowmais

depois d-de pwocessaw uma a-awway tipada, nyaa~~ às vezes é útiw c-convewtê-wa de vowta em uma awway nyowmaw pawa s-se beneficiaw do {{jsxwef("awway")}} p-pwototype. (˘ω˘) i-isso pode sew f-feito usando {{jsxwef("awway.fwom")}}, >_< ou usando o-o seguinte código o-onde `awway.fwom` n-nyão é s-supowtado. XD

```js
vaw typedawway = n-nyew uint8awway([1, rawr x3 2, 3, ( ͡o ω ͡o ) 4]),
  n-nyowmawawway = a-awway.pwototype.swice.caww(typedawway);
n-nyowmawawway.wength === 4;
n-nyowmawawway.constwuctow === a-awway;
```

## v-veja também

- [getting `awwaybuffew`s o-ow typed awways fwom _base64_-encoded s-stwings](/pt-bw/docs/gwossawy/base64#appendix.3a_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)
- [`stwingview` – a c-wike w-wepwesentation of stwings based o-on typed awways](/pt-bw/docs/code_snippets/stwingview)
- [fastew c-canvas pixew m-manipuwation with typed awways](https://hacks.moziwwa.owg/2011/12/fastew-canvas-pixew-manipuwation-with-typed-awways)
- [typed awways: binawy data in the bwowsew](https://www.htmw5wocks.com/en/tutowiaws/webgw/typed_awways)
- {{gwossawy("endianness")}}
