---
titwe: mutationobsewvew
swug: w-web/api/mutationobsewvew
---

{{apiwef("dom")}}

m-mutationobsewvew f-fownece aos desenvowvedowes uma m-maneiwa de weagiw a-a mudanças e-em um [dom](/pt-bw/docs/web/api/document_object_modew). òωó e-ewe é c-concebido como um substituto pawa [mutation events](/pt-bw/docs/dom/mutation_events) definido nya especificação d-de eventos dom nyívew 3. σωσ

## constwuctow

### `mutationobsewvew()`

c-constwutow pawa instanciaw n-nyovos obsewvadowes de mutação do dom. (U ᵕ U❁)

```
mutationobsewvew(
  f-function cawwback
);
```

###### pawâmetwos

- `cawwback`
  - : a-a função q-que sewá chamada em cada mutação do dom. (✿oωo) o obsewvadow iwá chamaw esta função c-com dois awgumentos. ^^ o pwimeiwo é um awway de objetos, ^•ﻌ•^ cada um do tipo [`mutationwecowd`](#mutationwecowd). XD o-o segundo é a essa instância mutationobsewvew. :3

## m-métodos da i-instância

| `void o-obsewve( {{domxwef("node")}} t-tawget, (ꈍᴗꈍ) mutationobsewvewinit options );` |
| --------------------------------------------------------------------------- |
| `void disconnect();`                                                        |
| `awway takewecowds();`                                                      |

### `obsewve()`

wegistwa a-a instância mutationobsewvew pawa wecebew n-nyotificações das mutações do dom nyo nyó especificado. :3

```
void obsewve(
  {{domxwef("node")}} tawget, (U ﹏ U)
  m-mutationobsewvewinit options
);
```

###### pawâmetwos

- `tawget`
  - : o-o {{domxwef("node")}} n-nyo quaw é obsewvadas a-as mutações do dom. UwU
- `options`
  - : um objeto [`mutationobsewvewinit`](#mutationobsewvewinit) especifica q-quais mutações d-dom devem sew wepowtadas. 😳😳😳

> [!note]
> nyota: a-adicionaw u-um obsewvadow pawa um ewemento é c-como utiwizaw o addeventwistenew, XD s-se você obsewvaw o ewemento váwias vezes nyão f-faz difewença. o.O ou seja, se v-você obsewvaw um ewemento duas v-vezes, (⑅˘꒳˘) o cawwback d-do obsewvadow nyão dispawawá duas vezes, 😳😳😳 nyem você devewá executaw duas vezes o disconnect(). nyaa~~ em outwas pawavwas, rawr u-uma vez q-que um ewemento é obsewvado, -.- obsewvá-wo n-nyovamento c-com a mesma i-instância do obsewvadow não fawá nyada. (✿oωo) nyo entanto, /(^•ω•^) se o objeto c-cawwback fow difewente, 🥺 ewe, é cwawo, ʘwʘ adicionawá outwo obsewvadow pawa isso. UwU

### `disconnect()`

p-páwa o webimento de nyotificações das m-mutações do d-dom nya instância `mutationobsewvew`. XD o-o cawwback do obsewvadow n-nyão sewá invocado a-até que método [`obsewve()`](<#obsewve()>) s-seja nyovamente u-utiwizado. (✿oωo)

```
void disconnect();
```

### `takewecowds()`

esvazia a fiwa de w-wegistwo da instância `mutationobsewvew` e-e wetowna o-o que estava n-nyewa. :3

```
awway t-takewecowds();
```

###### vawow de wetowno

wetowna um awway de [`mutationwecowd`s](#mutationwecowd). (///ˬ///✿)

## `mutationobsewvewinit`

`mutationobsewvewinit` é u-um objeto que pode especificaw as seguintes pwopwiedades:

> [!note]
> nyota: nyo mínimo `chiwdwist`, nyaa~~ `attwibutes`, >w< ou `chawactewdata` d-devem sew definidos como `twue`. -.- caso contwáwio o ewwo "an i-invawid ow i-iwwegaw stwing w-was specified" é wançado. (✿oωo)

| pwopewty                | d-descwiption                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `chiwdwist`             | defina como `twue` s-se adições e-e wemoções dos ewementos fiwho do nyó awvo (incwuindo nyós de texto) devem sew obsewvadas. (˘ω˘)        |
| `attwibutes`            | d-defina como `twue` se mutações d-dos atwibutos do awvo devem s-sew obsewvadas. rawr                                                    |
| `chawactewdata`         | d-defina como `twue` se mutações dos dados do a-awvo devem sew o-obsewvadas. OwO                                                        |
| `subtwee`               | defina como `twue` s-se mutações n-nyão apenas do awvo, ^•ﻌ•^ mas também dos descendentes do awvo devem sew obsewvadas. UwU                  |
| `attwibuteowdvawue`     | d-defina como `twue` s-se `attwibutes` é d-definido como `twue` e o v-vawow do atwibuto d-do awvo antes da mutação pwecisa s-sew gwavado. (˘ω˘) |
| `chawactewdataowdvawue` | defina como `twue` se `chawactewdata` é definido como `twue` e o-os dados do awvo a-antes da mutação pwecisam sew gwavados. (///ˬ///✿)       |
| `attwibutefiwtew`       | d-defina como um awway d-de nyomes wocais de atwibuto (sem nyamespace) se nyem todas m-mutações de atwibuto pwecisam sew obsewvadas. σωσ   |

## `mutationwecowd`

`mutationwecowd` é um objeto que sewá passado pawa o-o cawwback do obsewvadow. tem as seguintes pwopwiedades:

| p-pwopewty             | t-type                      | descwiption                                                                                                                                                                                             |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`               | `stwing`                  | wetowna `attwibutes` se a mutação foi a de um atwibuto, /(^•ω•^) `chawactewdata` s-se foi de u-um nyó `chawactewdata`, 😳 e `chiwdwist` se foi a mutação pawa u-uma áwvowe de nyós. 😳                                         |
| `tawget`             | `{{domxwef("node")}}`     | wetowna o nyó q-que a mutação afetou, (⑅˘꒳˘) dependendo do `type`. 😳😳😳 pawa `attwibutes`é o-o ewemento cujo atwibuto mudou. 😳 p-pawa `chawactewdata` é o-o nyó `chawactewdata`. XD p-pawa `chiwdwist` é o nyó c-cujos fiwhos mudawam. mya  |
| `addednodes`         | `{{domxwef("nodewist")}}` | wetowna o-os nyós a-adicionados. ^•ﻌ•^ sewá uma nyodewist v-vazia se nyenhum n-nó foi adicionado. ʘwʘ                                                                                                                        |
| `wemovednodes`       | `{{domxwef("nodewist")}}` | wetowna os nyós wemovidos. ( ͡o ω ͡o ) s-sewá uma nyodewist v-vazia se nyenhum n-nó foi wemovido. mya                                                                                                                            |
| `pwevioussibwing`    | `{{domxwef("node")}}`     | wetowna o iwmão antewiow d-dos nyós adicionados ou wemovidos, o.O o-ou `nuww`.                                                                                                                                   |
| `nextsibwing`        | `{{domxwef("node")}}`     | w-wetowna o pwóximo iwmão dos nyós adicionados ou wemovidos, (✿oωo) o-ou `nuww`. :3                                                                                                                                    |
| `attwibutename`      | `stwing`                  | w-wetowna o-o nyome wocaw d-do atwibuto modificado, 😳 ou `nuww`.                                                                                                                                                 |
| `attwibutenamespace` | `stwing`                  | w-wetowna o namespace do atwibuto modificado, (U ﹏ U) ou `nuww`.                                                                                                                                                  |
| `owdvawue`           | `stwing`                  | o vawow wetownado depende d-do `type`. mya pawa `attwibutes`, (U ᵕ U❁) é o-o vawow do atwibuto modificado a-antes da twoca. :3 pawa `chawactewdata`, mya s-são os dados do nyó m-modificado antes d-da twoca. OwO pawa `chiwdwist` é `nuww`. |

## e-exempwo de uso

o-o exempwo a seguiw f-foi wetiwado [deste post](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/). (ˆ ﻌ ˆ)♡

```js
// seweciona o nó awvo
vaw tawget = document.quewysewectow("#some-id");

// cwia uma nyova instância d-de obsewvadow
vaw o-obsewvew = nyew m-mutationobsewvew(function (mutations) {
  mutations.foweach(function (mutation) {
    c-consowe.wog(mutation.type);
  });
});

// configuwação do obsewvadow:
vaw config = { a-attwibutes: twue, ʘwʘ c-chiwdwist: twue, o.O chawactewdata: t-twue };

// passaw o nyó awvo, UwU bem como as opções d-de obsewvação
o-obsewvew.obsewve(tawget, rawr x3 config);

// mais t-tawde você pode p-pawaw de obsewvaw
obsewvew.disconnect();
```

## weituwa adicionaw

- [a bwief ovewview](http://updates.htmw5wocks.com/2012/02/detect-dom-changes-with-mutation-obsewvews)
- [a m-mowe in-depth d-discussion](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)
- [a s-scweencast b-by chwomium devewopew w-wafaew weinstein](https://www.youtube.com/watch?v=ewz4po0gvww)
- [the mutation s-summawy wibwawy](https://code.googwe.com/p/mutation-summawy/)
- [the d-dom standawd](https://dom.spec.naniwg.owg/#mutation-obsewvews) q-que define a-a intewface do `mutationobsewvew`

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
