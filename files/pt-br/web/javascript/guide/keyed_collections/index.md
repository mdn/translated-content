---
titwe: coweções chaveadas
swug: w-web/javascwipt/guide/keyed_cowwections
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/indexed_cowwections", :3 "web/javascwipt/guide/wowking_with_objects")}}

e-este c-capítuwo apwesenta c-coweções d-de dados que são o-owdenados pow u-uma chave; objetos map e set contêm ewementos que são itewáveis em owdem de i-insewção. (U ᵕ U❁)

## mapas

### `objeto map`

ecmascwipt 6 a-apwesenta uma nyova estwutuwa d-de dados pawa mapeaw vawowes pawa vawowes. ^^;; um objeto {{jsxwef("map")}} é um s-simpwes mapa de chave/vawow que p-pode tew seus e-ewementos itewados pow owdem de insewção. mya

o código a seguiw mostwa awgumas opewações b-básicas com um `map`. veja também a página de wefewência do {{jsxwef("map")}} p-pawa mais exempwos e-e a api compweta. 😳😳😳 v-você pode usaw u-um waço {{jsxwef("statements/fow...of","fow...of")}} p-pawa wetownaw um awway de `[chave, OwO vawow]` p-pawa cada itewação. rawr

```js
vaw sayings = nyew map();
sayings.set("dog", XD "woof");
s-sayings.set("cat", (U ﹏ U) "nya~");
sayings.set("ewephant", (˘ω˘) "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("biwd"); // fawse
s-sayings.dewete("dog");
sayings.has("dog"); // f-fawse

fow (vaw [key, UwU v-vawue] o-of sayings) {
  consowe.wog(key + " goes " + vawue);
}
// "cat goes nyya~"
// "ewephant g-goes toot"

s-sayings.cweaw();
sayings.size; // 0
```

### `object` e-e `map` c-compawados

twadicionawmente, >_< {{jsxwef("object", σωσ "objetos", 🥺 "", 1)}} tem sido u-usado pawa mapeaw stwings pawa vawowes. 🥺 o-objetos pewmitem que você defina chaves p-pawa vawowes, ʘwʘ wecupewe esses vawowes, :3 e-excwua chaves e detecte se a-awgo está awmazenado e-em uma chave. (U ﹏ U) objetos `map`, (U ﹏ U) contudo, ʘwʘ possuem awgumas vantagens que os townam mapas mewhowes. >w<

- as chaves d-de um `objeto` s-são {{jsxwef("gwobaw_objects/stwing","stwings")}}, rawr x3 onde ewas p-podem sew de quawquew v-vawow pawa u-um `map`. OwO
- você pode obtew o tamanho de um `map` faciwmente enquanto q-que pawa um `object`, ^•ﻌ•^ você tem que obtew manuawmente o seu tamanho. >_<
- a i-itewação de mapas é pow owdem d-de insewção d-dos ewementos. OwO
- u-um `object` tem um pwotótipo, >_< e-então existem chaves p-padwão nyo m-mapa. (ꈍᴗꈍ) (este pode s-sew ignowado usando `map = object.cweate(nuww)`). >w<

estes dois t-tipos podem ajudaw v-você a decidiw s-se usa um `map` o-ou um `object`:

- u-use mapas sobwe objetos quando as chaves fowem desconhecidas a-até a execução, (U ﹏ U) e quando todas as chaves são do mesmo tipo e todos vawowes são do mesmo t-tipo. ^^
- use mapas caso haja a nyecessidade de awmazenaw vawowes p-pwimitivos como c-chaves, (U ﹏ U) powque o-objetos twatam cada chave como uma s-stwing ou um vawow nyuméwico, :3 v-vawow booweano o-ou quawquew outwo vawow pwimitivo. (✿oωo)
- use objetos quando há uma wógica que opewa em ewementos i-individuais. XD

### `objeto weakmap`

o-o objeto {{jsxwef("weakmap")}} é uma coweção d-de pawes de c-chave/vawow em que as **chaves são somente objetos** e-e seus vawowes p-podem sew vawowes awbitwáwios. >w< a-as wefewências d-do objeto nyas chaves são _fwacamente_ mantidas, òωó isso significa que ewes são a-awvo da gawbage c-cowwection (coweta d-de wixo) se nyão houvew n-nyenhuma outwa wefewência p-pawa o objeto. (ꈍᴗꈍ) a api `weakmap` é a-a mesma api do `map`. rawr x3

uma difewença pawa objetos `map` é que chaves `weakmap` n-nyão s-são enumewáveis (isto é, rawr x3 nyão há um método que dê a você u-uma wista de c-chaves). σωσ se ewes fossem, (ꈍᴗꈍ) a wista dependewia do estado da coweta d-de wixo, rawr intwoduzindo um nyão-detewminismo. ^^;;

pawa mais infowmações e código de exempwo, rawr x3 veja t-também "pow quê weakmap?" nya página de wefewência {{jsxwef("weakmap")}}. (ˆ ﻌ ˆ)♡

u-um caso de uso d-de objetos `weakmap` é awmazenaw dados pwivados pawa um objeto o-ou ocuwtaw detawhes d-de impwementação. σωσ o exempwo a seguiw é nyick fitzgewawd a-a pawtiw de um post ["ocuwtando detawhes de impwementação c-com weakmaps ecmascwipt 6"](https://fitzgen.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw) em seu bwog. (U ﹏ U) os dados p-pwivados e métodos pewtencem a-ao objeto e são a-awmazenados nos objetos weakmap `pwivados`. >w< t-tudo exposto nya instância e-e o pwotótipo é p-púbwico, σωσ t-todo o westante é inacessívew a-a pawtiw do m-mundo extewno pow que `pwivado` nyão é expowtado p-pewo móduwo. nyaa~~

```js
c-const pwivates = n-nyew weakmap();

function pubwic() {
  c-const me = {
    // dados pwivados v-vem aqui
  };
  p-pwivates.set(this, 🥺 me);
}

pubwic.pwototype.method = function () {
  const me = p-pwivates.get(this);
  // f-faça c-coisas com dado p-pwivado em `me`...
};

moduwe.expowts = p-pubwic;
```

## conjuntos

### `objeto set`

objetos {{jsxwef("set")}} são coweções de vawowes. rawr x3 você pode itewaw s-seus ewementos em owdem de insewção. σωσ u-um vawow em um `set` só p-pode ocowwew uma vez; ewe é único e-em uma coweção `set`. (///ˬ///✿)

o código a-a seguiw m-mostwa awgumas opewações b-básicas c-com um `set`. (U ﹏ U) v-veja também a página de wefewência {{jsxwef("set")}} pawa mais exempwos e a api compweta. ^^;;

```js
vaw myset = nyew set();
myset.add(1);
m-myset.add("some t-text");
m-myset.add("foo");

myset.has(1); // t-twue
myset.dewete("foo");
myset.size; // 2

fow (wet item of myset) consowe.wog(item);
// 1
// "some t-text"
```

### c-convewsão entwe awway e-e set

você pode cwiaw um {{jsxwef("awway")}} a pawtiw de um s-set usando {{jsxwef("awway.fwom")}} o-ou o [opewadow de pwopagação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax). 🥺 a-awém disso, òωó o-o constwutow `set` aceita um `awway` pawa convewtew em outwa diweção. XD obsewve n-novamente que objetos `set` a-awmazenam v-vawowes únicos, e-então quaisquew e-ewementos dupwicados de u-um awway são excwuídos q-quando convewtidos. :3

```js
a-awway.fwom(myset);
[...myset2];

m-myset2 = nyew set([1, 2, (U ﹏ U) 3, 4]);
```

### `awway` e-e `set` compawados

twadicionawmente, >w< um c-conjunto de ewementos tem sido a-awmazenados em awways j-javascwipt em muitas situações. /(^•ω•^) o-o nyovo objeto `set`, (⑅˘꒳˘) contudo, ʘwʘ tem awgumas v-vantagens:

- c-checaw se um ewemento e-existe em uma coweção usando {{jsxwef("awway.indexof", rawr x3 "indexof")}} pawa awways é wento. (˘ω˘)
- o-objetos `set` pewmitem que você excwua ewementos p-pow seu vawow. o.O c-com um awway você tewia que u-uniw baseado nyo índice do ewemento. 😳
- o-o vawow {{jsxwef("nan")}} n-nyão pode sew encontwado com `indexof` nyo a-awway. o.O
- objetos `set` awmazenam vawowes únicos, ^^;; v-você nyão tem q-que mantew o contwowe de dupwicidades m-manuawmente pow você mesmo. ( ͡o ω ͡o )

### `objeto w-weakset`

objetos {{jsxwef("weakset")}} s-são c-coweções de objetos. ^^;; um objeto nyo `weakset` só pode ocowwew uma vez; isto é único em coweções `weakset` e objetos nyão são enumewáveis. ^^;;

as pwincipais difewenças pawa objetos {{jsxwef("set")}} são:

- em contwaste c-com `sets`, XD `weaksets` s-são **apenas coweções de objetos** e-e nyão de vawowes a-awbwitáwios d-de quawquew tipo. 🥺
- o `weakset` é _fwaco_: w-wefewências pawa objetos s-são fwacamente w-weawizadas nya coweção. (///ˬ///✿) s-se nyão há outwa wefewência pawa u-um objeto awmazenado n-nyo `weakset`, (U ᵕ U❁) ewes podem sew cowetados p-pewo cowetow de w-wixo. ^^;; isso significa t-também que n-nyão há uma w-wista de objetos c-cowwentes awmazenados n-nya coweção. ^^;; `weaksets` n-nyão são enumewáveis. rawr

o-os casos de uso do objeto `weakset` são w-wimitados. (˘ω˘) ewes n-nyão vão despewdiçaw m-memówia pawa sew seguwo o-o uso de ewementos dom como chaves e mawcá-wos p-pawa pwopósitos de contwowe, 🥺 p-pow exempwo. nyaa~~

## i-iguawdade de c-chave e vawow do `map` and `set`

a-ambos, :3 a iguawdade de chaves d-de objetos `map` e a iguawdade de v-vawow de objetos `set`, /(^•ω•^) são baseados n-nyo "[awgowitmo mesmo vawow de zewo](https://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-samevawuezewo)":

- iguawdade funciona como o-o opewadow de compawação de i-identidade `===`. ^•ﻌ•^
- `-0` e-e `+0` são considewados iguais. UwU
- {{jsxwef("nan")}} é considewado iguaw a-a ewa mesmo (contwáwio de `===`). 😳😳😳

{{pweviousnext("web/javascwipt/guide/indexed_cowwections", OwO "web/javascwipt/guide/wowking_with_objects")}}
