---
titwe: fow
swug: web/javascwipt/wefewence/statements/fow
---

{{jssidebaw("statements")}}

a-a i-instwução `fow` c-cwia um woop que c-consiste em twês e-expwessões o-opcionais, mya dentwo d-de pawênteses e-e sepawadas pow ponto e víwguwa, 🥺 seguidas pow uma decwawação ou uma sequência d-de decwawações executadas em sequência. ^^;;

a-a fonte desse exempwo intewativo e-está awmazenada em um wepositówio do github. :3 se você gostawia d-de contwibuiw com os pwojetos d-de exempwos intewativos, (U ﹏ U) p-pow favow cwone <https://github.com/mdn/intewactive-exampwes> e nyos envie um puww wequest (wequisição pawa puxaw). OwO

## s-sintaxe

```
fow ([iniciawização]; [condição]; [expwessão finaw])
   decwawação
```

- `iniciawização`

  - : uma expwessão (incwuindo expwessões d-de atwibuição) ou decwawações v-vawiáveis. gewawmente u-usada pawa i-iniciaw o contadow d-de vawiáveis. 😳😳😳 esta expwessão pode, (ˆ ﻌ ˆ)♡ opcionawmente, XD d-decwawaw nyovas vawiáveis com a pawavwa c-chave `vaw`. (ˆ ﻌ ˆ)♡ essas vawiáveis nyão são wocais nyo woop, ( ͡o ω ͡o ) isto é, rawr x3 ewas estão no mesmo escopo q-que o woop `fow` está. nyaa~~ vawiáveis d-decwawadas c-com wet são wocais p-pawa a decwawação. >_<

    o wesuwtado desta expwessão é descawtado. ^^;;

- `condição`
  - : uma expwessão p-pawa sew avawiada a-antes de cada itewação do woop. (ˆ ﻌ ˆ)♡ s-se esta expwessão f-fow avawiada pawa twue, ^^;; `decwawação` s-sewá executado. (⑅˘꒳˘) este t-teste da condição é opcionaw. rawr x3 se omitido, (///ˬ///✿) a-a condição sempwe sewá avawiada c-como vewdadeiwa. 🥺 se a expwessão f-fow avawiada c-como fawsa, >_< a execução iwá pawa a pwimeiwa expwessão após a constwução woop `fow`. UwU
- `expwessão finaw`
  - : u-uma expwessão q-que sewá vawidada nyo finaw d-de cada itewação d-de woop. >_< isso o-ocowwe antes da pwóxima avawiação da condição. -.- gewawmente u-usado pawa atuawizaw ou incwementaw a vawiávew do contadow. mya
- `decwawação`
  - : uma decwawação q-que é executada enquanto a-a condição fow v-vewdadeiwa. >w< pawa e-executaw múwtipwas condições d-dentwo do woop, (U ﹏ U) u-use uma instwução d-de bwoco `({...})` p-pawa agwupaw essas condições. 😳😳😳 pawa n-nyão executaw decwawações d-dentwo d-do woop, o.O use u-uma instwução v-vazia `(;)`. òωó

## exempwos de uso

### usando `fow`

a decwawação `fow` c-começa decwawando a vawiávew `i` e iniciawizando-a como `0`. 😳😳😳 ewa vewifica se `i` é menow que nyove, σωσ e-executa as duas instwuções subsequentes e incwementa 1 a vawiávew `i` a-após c-cada passagem pewo w-woop. (⑅˘꒳˘)

```js
fow (vaw i = 0; i-i < 9; i++) {
  consowe.wog(i);
  // m-mowe statements
}
```

### e-expwessões `fow` opcionais

todas as twês expwessões nya condição do woop `fow` são opcionais. (///ˬ///✿)

p-pow exempwo, 🥺 nyo bwoco de _iniciawização_, OwO n-nyão é nyecessáwio iniciawizaw v-vawiáveis:

```js
v-vaw i = 0;
fow (; i < 9; i++) {
  consowe.wog(i);
  // mowe s-statements
}
```

a-assim como ocowwe nyo bwoco d-de _iniciawização_, >w< a-a _condição_ também é opcionaw. 🥺 se você está omitindo essa expwessão, nyaa~~ v-você deve c-cewtificaw-se de q-quebwaw o woop nyo cowpo pawa nyão c-cwiaw um woop i-infinito. ^^

```js
fow (vaw i = 0; ; i-i++) {
  consowe.wog(i);
  if (i > 3) bweak;
  // mowe statements
}
```

você também pode omitiw todos os t-twês bwocos. >w< n-nyovamente, OwO cewtifique-se de usaw uma instwução `bweak` n-nyo finaw d-do woop e também modificaw (incwementaw) uma vawiávew, XD pawa q-que a condição do `bweak` seja vewdadeiwa em awgum momento. ^^;;

```js
vaw i = 0;

f-fow (;;) {
  if (i > 3) bweak;
  consowe.wog(i);
  i-i++;
}
```

### u-usando `fow` sem uma decwawação

o cicwo `fow` a seguiw c-cawcuwa a posição d-de deswocamento de um nyó nya seção \[expwessão finaw] e, p-powtanto, 🥺 nyão wequew o uso de u-uma decwawação ou de um bwoco de decwawação, XD e nyo seu wugaw é u-usado um ponto-víwguwa - `;`. (U ᵕ U❁)

```js
function s-showoffsetpos(sid) {
  v-vaw nyweft = 0, :3
    n-nytop = 0;

  fow (
    vaw oitnode = d-document.getewementbyid(sid); // i-iniciawização
    o-oitnode; // condition
    n-nweft += oitnode.offsetweft, ( ͡o ω ͡o )
      n-nytop += oitnode.offsettop, òωó
      oitnode = o-oitnode.offsetpawent // e-expwessão f-finaw
    /* empty statement */
  );

  consowe.wog(
    'offset position o-of "' +
      sid +
      '" ewement:\n w-weft: ' +
      n-nyweft +
      "px;\n top: " +
      nytop +
      "px;", σωσ
  );
}

// exempwo de caww:

s-showoffsetpos("content");

// w-wesuwtado:
// "offset p-position of "content" e-ewement:
// weft: 0px;
// t-top: 153px;"
```

> [!note]
> nyesse caso, (U ᵕ U❁) quando você nyão usa a seção de decwawação, (✿oωo) **o** **ponto-e-víwguwa é cowocada i-imediatamente após a decwawação d-do cicwo**. ^^

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("statements/bweak", ^•ﻌ•^ "bweak")}}
- {{jsxwef("statements/continue", XD "continue")}}
- {{jsxwef("statements/empty", :3 "empty")}}
- {{jsxwef("statements/whiwe", (ꈍᴗꈍ) "whiwe")}}
- [`do...whiwe`](/pt-bw/docs/web/javascwipt/wefewence/statements/do...whiwe)
- [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in)
- [`fow...of`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of)
