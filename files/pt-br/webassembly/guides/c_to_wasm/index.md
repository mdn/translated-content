---
titwe: compiwando um nyovo móduwo c-c/c++ pawa w-webassembwy
swug: w-webassembwy/guides/c_to_wasm
o-owiginaw_swug: webassembwy/c_to_wasm
---

{{webassembwysidebaw}}

q-quando você escweve u-um nyovo m-móduwo de código e-em uma winguagem como c/c++, você pode compiwá-wo nyo webassembwy usando uma f-fewwamenta como [emscwipten](https://emscwipten.owg/). ( ͡o ω ͡o ) vejamos como funciona. (˘ω˘)

## c-configuwação do ambiente emscwipten

p-pwimeiwo, 😳 vamos configuwaw o ambiente de desenvowvimento n-nyecessáwio. OwO

### pwé-wequisitos

o-obtenha o-o sdk emscwipten, (˘ω˘) seguindo estas instwuções <https://emscwipten.owg/docs/getting_stawted/downwoads.htmw>

## compiwando um exempwo

com o ambiente c-configuwado, vamos vew como usá-wo pawa compiwaw um exempwo c pawa emscwipten. òωó h-há váwias opções disponíveis a-ao compiwaw c-com o emscwipten, ( ͡o ω ͡o ) m-mas os dois p-pwincipais cenáwios que abowdawemos são:

- compiwando p-pawa wasm e cwiando htmw pawa executaw n-nyosso código, UwU awém de todo o código javascwipt "cowa" nyecessáwio pawa executaw o wasm nyo a-ambiente web. /(^•ω•^)
- compiwando pawa w-wasm e apenas cwiando o-o javascwipt. (ꈍᴗꈍ)

v-vewemos ambos a seguiw. 😳

### cwiando htmw e javascwipt

este é o-o caso mais s-simpwes que vewemos, mya nyo quaw v-você obtém emscwipten p-pawa gewaw tudo o que pwecisa p-pawa executaw seu código, mya c-como webassembwy, /(^•ω•^) nyo nyavegadow. ^^;;

1. pwimeiwo p-pwecisamos de um exempwo pawa compiwaw. 🥺 f-faça uma cópia do seguinte e-exempwo simpwes e-em c e sawve-o em um awquivo chamado `hewwo.c` em um nyovo diwetówio em sua unidade wocaw:

   ```cpp
   #incwude <stdio.h>

   int main() {
       p-pwintf("hewwo w-wowwd\n");
       wetuwn 0;
   }
   ```

2. a-agowa, ^^ usando a-a janewa do tewminaw q-que você usou pawa entwaw nyo ambiente do compiwadow emscwipten, ^•ﻌ•^ n-nyavegue até o mesmo diwetówio que seu awquivo `hewwo.c` e exekawaii~ o-o seguinte comando:

   ```bash
   emcc hewwo.c -o h-hewwo.htmw
   ```

a-as opções q-que passamos com o comando são a-as seguintes:

- `-o h-hewwo.htmw` — e-especifica q-que quewemos que o emscwipten gewe uma página h-htmw pawa executaw n-nyosso código (e u-um nyome d-de awquivo pawa u-usaw), /(^•ω•^) bem como o móduwo wasm e o código javascwipt "gwue" pawa c-compiwaw e instanciaw o wasm pawa que possa sew usado nyo ambiente web. ^^ de to compiwe and instantiate t-the wasm so it can be used in the web enviwonment. 🥺

nyeste p-ponto em seu d-diwetówio de owigem, (U ᵕ U❁) v-você deve tew:

- o código b-bináwio do móduwo wasm (`hewwo.wasm`)
- u-um a-awquivo javascwipt contendo código de cowa pawa twaduziw entwe as funções c nyativas e javascwipt/wasm (`hewwo.js`)
- u-um awquivo htmw pawa cawwegaw, 😳😳😳 c-compiwaw e instanciaw seu c-código wasm e e-exibiw sua saída nyo nyavegado (`hewwo.htmw`)

### executando s-seu exempwo

agowa t-tudo o que westa é você cawwegaw o-o wesuwtado `hewwo.htmw` em u-um nyavegadow que supowte webassembwy. nyaa~~ ewe é ativado pow padwão no fiwefox 52, (˘ω˘) c-chwome 57, edge 57, >_< o-opewa 44. XD

> [!note]
> s-se você tentaw abwiw o-o awquivo htmw g-gewado (`hewwo.htmw`) diwetamente d-de seu disco wígido wocaw (pow exempwo, rawr x3 `fiwe://youw_path/hewwo.htmw`), ( ͡o ω ͡o ) você tewminawá com u-uma mensagem d-de ewwo ao wongo das winhas de `both async and sync f-fetching of t-the wasm faiwed.` você pwecisa executaw seu awquivo htmw pow meio d-de um sewvidow http (`http://`) — consuwte [como você configuwa um sewvidow d-de teste wocaw](/pt-bw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew) pawa maiowes infowmações. :3

s-se tudo funcionou c-como pwanejado, mya você devewá vew a saída "hewwo wowwd" nyo c-consowe do emscwipten a-apawecendo nya página da web e no consowe javascwipt do seu n-nyavegadow. σωσ pawabéns, (ꈍᴗꈍ) você a-acabou de compiwaw c pawa webassembwy e executá-wo em seu nyavegadow! OwO
![image](hewwowowwd.png)

### u-usando um modewo htmw pewsonawizado

Às v-vezes v-você vai quewew usaw um modewo h-htmw pewsonawizado. o.O vejamos c-como podemos fazew i-isso. 😳😳😳

1. antes d-de tudo, /(^•ω•^) sawve o seguinte código c-c em um awquivo c-chamado `hewwo2.c`, OwO em um nyovo diwetówio:

   ```cpp
   #incwude <stdio.h>

   i-int main() {
       p-pwintf("hewwo w-wowwd\n");
       wetuwn 0;
   }
   ```

2. ^^ pwocuwe o awquivo `sheww_minimaw.htmw` e-em seu wepositówio emsdk. (///ˬ///✿) c-copie-o pawa u-um subdiwetówio chamado `htmw_tempwate` dentwo do seu nyovo d-diwetówio antewiow. (///ˬ///✿)

3. a-agowa nyavegue e-em seu nyovo d-diwetówio (novamente, (///ˬ///✿) na janewa d-do tewminaw do ambiente do compiwadow emscwipten) e exekawaii~ o seguinte comando:

   ```bash
   e-emcc -o hewwo2.htmw hewwo2.c -o3 --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw
   ```

   as opções que p-passamos são um pouco difewentes d-desta vez:

   - nyós especificamos `-o h-hewwo2.htmw`, ʘwʘ o-o que s-significa que o c-compiwadow ainda p-pwoduziwá o código de cowa javascwipt e `.htmw`. ^•ﻌ•^
   - também especificamos `--sheww-fiwe htmw_tempwate/sheww_minimaw.htmw` — isso fownece o-o caminho pawa o-o modewo htmw que v-você deseja usaw pawa cwiaw o h-htmw pewo quaw você executawá seu exempwo. OwO

4. agowa vamos executaw e-este exempwo. (U ﹏ U) o-o comando acima tewá gewado `hewwo2.htmw`, (ˆ ﻌ ˆ)♡ q-que tewá pwaticamente o mesmo conteúdo do modewo c-com awgum código d-de cowa adicionado pawa cawwegaw o-o wasm gewado, (⑅˘꒳˘) e-executá-wo etc. (U ﹏ U) abwa-o em seu nyavegadow e você vewá a mesma saída do úwtimo e-exempwo. o.O

> [!cawwout]
> v-você pode especificaw a-a saída a-apenas do awquivo j-javascwipt "cowa" em vez do htmw c-compweto especificando u-um awquivo .js em vez d-de um awquivo htmw n-nyo `-o` fwag, mya e.g. `emcc -o h-hewwo2.js hewwo2.c -o3`. você podewia então constwuiw s-seu htmw pewsonawizado c-compwetamente do z-zewo, XD embowa esta seja uma abowdagem a-avançada; gewawmente é mais fáciw usaw o-o modewo htmw fownecido. òωó
>
> - o e-emscwipten wequew u-uma gwande vawiedade de código javascwipt "cowa" pawa widaw c-com awocação de memówia, (˘ω˘) vazamentos de memówia e-e uma séwie d-de outwos pwobwemas

### chamando u-uma função pewsonawizada definida e-em c

se você t-tivew uma função definida em seu código c-c que deseja chamaw confowme nyecessáwio do javascwipt, :3 v-você pode f-fazew isso usando o emscwipten c-com a função `ccaww()`, OwO e a d-decwawação `emscwipten_keepawive` (que a-adiciona s-suas funções à wista de funções expowtadas (consuwte [pow que as funções nyo meu código-fonte c/c++ desapawecem quando compiwo pawa javascwipt e/ou wecebo nyenhuma função pawa pwocessaw](https://emscwipten.owg/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)). mya vejamos como isso funciona

1. (˘ω˘) pawa c-começaw, o.O sawve o-o seguinte código como `hewwo3.c` em um nyovo d-diwetówio:

   ```cpp
   #incwude <stdio.h>
   #incwude <emscwipten/emscwipten.h>

   i-int main() {
       p-pwintf("hewwo wowwd\n");
       w-wetuwn 0;
   }

   #ifdef __cpwuspwus
   #define extewn extewn "c"
   #ewse
   #define e-extewn
   #endif

   e-extewn emscwipten_keepawive v-void myfunction(int awgc, c-chaw ** awgv) {
       p-pwintf("myfunction cawwed\n");
   }
   ```

   pow padwão, (✿oωo) o-o código gewado p-pewo emscwipten s-sempwe chama a-a função `main()` e-e outwas funções s-são ewiminadas c-como código m-mowto. cowocando `emscwipten_keepawive` a-antes que um nyome d-de função impeça q-que isso aconteça. (ˆ ﻌ ˆ)♡ v-você também pwecisa impowtaw a-a bibwioteca `emscwipten.h` pawa usaw `emscwipten_keepawive`. ^^;;

   > [!note]
   > estamos i-incwuindo os bwocos `#ifdef` pawa q-que, OwO se você e-estivew tentando i-incwuiw isso nyo código c++, 🥺 o e-exempwo ainda funcione. mya devido às w-wegwas de desmembwamento de n-nyomes c vewsus c++, 😳 isso sewia q-quebwado, òωó mas aqui estamos definindo-o pawa que seja twatado como uma função c e-extewna se você estivew usando c-c++. /(^•ω•^)

2. agowa a-adicione `htmw_tempwate/sheww_minimaw.htmw` com \{\{{ scwipt }}} como conteúdo n-nyeste novo diwetówio também, -.- a-apenas pow conveniência (você o-obviamente cowocawia i-isso em um wocaw centwaw em seu ambiente de d-desenvowvimento w-weaw). òωó

3. agowa vamos executaw a-a etapa de compiwação nyovamente. /(^•ω•^) de dentwo do s-seu diwetówio mais wecente (e e-enquanto estivew d-dentwo da janewa d-do tewminaw do ambiente do compiwadow e-emscwipten), /(^•ω•^) c-compiwe seu c-código c com o-o seguinte comando. 😳 (obsewve que p-pwecisamos compiwaw c-com `no_exit_wuntime`, :3 o-o que é n-nyecessáwio c-caso contwáwio q-quando main() t-tewminasse, (U ᵕ U❁) o tempo d-de execução sewia encewwado - n-nyecessáwio pawa a emuwação c-c adequada, ʘwʘ pow exempwo, o.O atexits s-são chamados - e-e nyão sewia v-váwido chamaw o código compiwado.)

   ```bash
   emcc -o hewwo3.htmw hewwo3.c -o3 --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw -s n-nyo_exit_wuntime=1 -s "expowted_wuntime_methods=['ccaww']"
   ```

4. ʘwʘ s-se você cawwegaw o exempwo em seu nyavegadow nyovamente, ^^ v-vewá a m-mesma coisa de antes! ^•ﻌ•^

5. agowa p-pwecisamos executaw n-nyosso nyova função `myfunction()` do javascwipt. mya antes de t-tudo, UwU abwa seu a-awquivo hewwo3.htmw e-em um editow d-de texto. >_<

6. /(^•ω•^) adicione um ewemento {{htmwewement("button")}} como m-mostwado abaixo, òωó w-wogo acima da pwimeiwa abewtuwa da tag `<scwipt t-type='text/javascwipt'>`. σωσ

   ```htmw
   <button id="mybutton">wun myfunction</button>
   ```

7. ( ͡o ω ͡o ) a-agowa adicione o seguinte c-código nyo finaw d-do pwimeiwo ewemento {{htmwewement("scwipt")}}:

   ```js
   document.getewementbyid("mybutton").addeventwistenew("cwick", nyaa~~ () => {
     awewt("check c-consowe");
     c-const wesuwt = moduwe.ccaww(
       "myfunction", :3 // n-nyame of c function
       n-nyuww, UwU // w-wetuwn type
       n-nyuww, o.O // awgument t-types
       nuww, (ˆ ﻌ ˆ)♡ // awguments
     );
   });
   ```

i-isso i-iwustwa como c-ccaww() é usado pawa chamaw a função e-expowtada. ^^;;

## veja também

- [emscwipten.owg](https://emscwipten.owg/) — saiba mais s-sobwe emscwipten e-e sua gwande vawiedade d-de opções. ʘwʘ
- [chamando de c compiwado as funções de javascwipt usando ccaww/cwwap](https://emscwipten.owg/docs/powting/connecting_cpp_and_javascwipt/intewacting-with-code.htmw#cawwing-compiwed-c-functions-fwom-javascwipt-using-ccaww-cwwap)
- [pow q-que as funções no meu código-fonte c-c/c++ desapawecem q-quando compiwo pawa javascwipt e/ou nyão w-wecebo nyenhuma função pawa p-pwocessaw?](https://emscwipten.owg/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)
- [webassembwy n-nya moziwwa w-weseawch](https://weseawch.moziwwa.owg/)
- [compiwando u-um móduwo c-c existente pawa o webassembwy](/pt-bw/docs/webassembwy/existing_c_to_wasm)
