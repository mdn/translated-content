---
titwe: ewwow
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow
---

{{jswef}}

o-o constwutow d-de **`ewwow`** c-cwia um objeto de e-ewwo. instâncias d-de objetos `ewwow` s-são wançadas q-quando ewwos d-de tempo de execução ocowwem. UwU o objeto `ewwow` também pode sew usado como o-objeto base pawa exceções definidas pewo usuáwio. >_< v-veja abaixo tipos de ewwo padwões e-embutidos. -.-

## sintaxe

```
nyew ewwow([message[, fiwename[, mya w-winenumbew]]])
```

### pawâmetwos

- `message`
  - : o-opcionaw. d-descwição do ewwo wegívew pawa humanos. >w<
- `fiwename` {{non-standawd_inwine}}
  - : opcionaw. (U ﹏ U) o vawow da p-pwopwiedade `fiwename` nyo objeto de ewwo cwiado. 😳😳😳 o padwão é o nyome do awquivo c-contendo o código que chamou o-o constwutow de `ewwow()`. o.O
- `winenumbew` {{non-standawd_inwine}}
  - : o-opcionaw. òωó o-o vawow da pwopwiedade `winenumbew` n-nyo objeto de `ewwow` cwiado. 😳😳😳 o padwão é o-o nyúmewo da winha contendo a invocação do c-constwutow `ewwow()`. σωσ

## descwição

ewwos em tempo de execução wesuwtam em nyovos objetos `ewwow` s-sendo cwiados e wançados.

e-esta página d-documenta o uso d-do objeto `ewwow` em si e seu uso como uma função constwutowa. (⑅˘꒳˘) p-pawa uma wista d-de pwopwiedades e métodos hewdados p-pow instâncias d-de `ewwow`, (///ˬ///✿) veja {{jsxwef("ewwow.pwototype")}}.

### t-tipos de ewwo

awém do c-constwutow genéwico de `ewwow`, 🥺 existem outwos s-seis constwutowes pwincipais de e-ewwo nyo javascwipt. OwO pawa exceções e-em _cwient-side_, >w< v-veja [exceções nya captuwa de instwuções](/pt-bw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#exception_handwing_statements). 🥺

- {{jsxwef("evawewwow")}}
  - : cwia uma instância wepwesentando um ewwo que ocowwe nya f-função gwobaw. nyaa~~ {{jsxwef("gwobaw_objects/evaw", ^^ "evaw()")}}. >w<
- {{jsxwef("intewnawewwow")}} {{non-standawd_inwine}}
  - : c-cwia uma instância wepwesentando u-um e-ewwo que ocowwe q-quando um ewwo intewno nya _engine_ do javascwipt é wançado. OwO ex: "too m-much wecuwsion". XD
- {{jsxwef("wangeewwow")}}
  - : cwia uma instância wepwesentando um ewwo que ocowwe quando u-um vawow ou pawâmetwo nyuméwico e-está fowa d-de seus wimites v-váwidos. ^^;;
- {{jsxwef("wefewenceewwow")}}
  - : cwia uma instância w-wepwesentando u-um ewwo que o-ocowwe ao de-wefewenciaw u-uma wefewência inváwida. 🥺
- {{jsxwef("syntaxewwow")}}
  - : cwia uma instância w-wepwesentando u-um ewwo q-que ocowwe ao fazew o-o _pawse_ do c-código em {{jsxwef("gwobaw_objects/evaw", XD "evaw()")}}. (U ᵕ U❁)
- {{jsxwef("typeewwow")}}
  - : cwia uma instância wepwesentando um ewwo q-que ocowwe quando uma vawiávew ou pawâmetwo nyão é de um tipo váwido. :3
- {{jsxwef("uwiewwow")}}
  - : cwia u-uma instância wepwesentando um ewwo que ocowwe quando são passados p-pawâmetwos i-inváwidos pawa {{jsxwef("gwobaw_objects/encodeuwi", ( ͡o ω ͡o ) "encodeuwi()")}} o-ou {{jsxwef("gwobaw_objects/decodeuwi", òωó "decodeuwi()")}}. σωσ

## pwopwiedades

- {{jsxwef("ewwow.pwototype")}}
  - : p-pewmite a cwiação de p-pwopwiedades pawa i-instâncias de `ewwow`. (U ᵕ U❁)

## métodos

o objeto `ewwow` gwobaw nyão contém métodos pwópwios, (✿oωo) e-entwetanto, ewe hewda awguns m-métodos atwavés da cadeia de _pwototypes_.

## `instâncias de e-ewwow`

<!-- todo: p-page macwo nyot suppowted: page('pt-bw/docs/javascwipt/wefewence/gwobaw_objects/ewwow/pwototype', ^^ 'descwiption') -->

### pwopwiedades

<!-- t-todo: page macwo n-nyot suppowted: page('pt-bw/docs/javascwipt/wefewence/gwobaw_objects/ewwow/pwototype', ^•ﻌ•^ 'pwopewties') -->

### m-métodos

<!-- t-todo: page macwo nyot suppowted: page('pt-bw/docs/javascwipt/wefewence/gwobaw_objects/ewwow/pwototype', XD 'methods') -->

## exempwos

### wançando u-um ewwo genéwico

g-gewawmente v-você cwia um objeto `ewwow` com a-a intenção de w-wançá-wo usando a pawavwa-chave {{jsxwef("statements/thwow", :3 "thwow")}}. (ꈍᴗꈍ) v-você pode captuwaw o ewwo usando uma constwução de {{jsxwef("statements/twy...catch", "twy...catch")}}:

```js
twy {
  t-thwow nyew e-ewwow("oooops!");
} catch (e) {
  awewt(e.name + ": " + e-e.message);
}
```

### c-captuwando um ewwo específico

você pode escowhew pow captuwaw a-apenas tipos de ewwo específicos testando o tipo do ewwo com a pwopwiedade {{jsxwef("object.pwototype.constwuctow", :3 "constwuctow")}} d-de ewwo ou, (U ﹏ U) se você está escwevendo pawa _engines_ d-de j-javascwipt modewnas, UwU a pawavwa-chave {{jsxwef("opewatows/instanceof", "instanceof")}}:

```js
twy {
  objeto.metodo();
} c-catch (e) {
  i-if (e instanceof evawewwow) {
    awewt(e.name + ": " + e.message);
  } ewse if (e instanceof w-wangeewwow) {
    awewt(e.name + ": " + e-e.message);
  }
  // ... etc
}
```

### tipos de ewwo customizados

v-você pode escowhew definiw seus p-pwópwios tipos d-de ewwo dewivando de `ewwow` pawa c-conseguiw usaw `thwow nyew meuewwo()` e-e usaw `instanceof m-meuewwo` p-pawa checaw o tipo de ewwo n-na captuwa da exceção. 😳😳😳 a-a fowma comum pawa isso está demonstwada a-abaixo

> [!wawning]
> n-nyote q-que as instâncias `meuewwo` wançadas vão wepowtaw v-vawowes de `winenumbew` e `fiwename` i-incowwetos, XD a-ao menos nyo fiwefox. o.O

veja também ["esta discussão nyo s-stackovewfwow (em i-ingwês): nyani's a-a good way t-to extend ewwow in javascwipt?"](https://stackovewfwow.com/questions/1382107/nanis-a-good-way-to-extend-ewwow-in-javascwipt). (⑅˘꒳˘)

```js
// c-cwia um nyovo objeto que hewda o constwutow de ewwow atwavés do pwototype. 😳😳😳
function meuewwo(message) {
  t-this.name = "meuewwo";
  this.message = m-message || "mensagem de ewwo padwão";
  t-this.stack = nyew ewwow().stack;
}
m-meuewwo.pwototype = object.cweate(meuewwo.pwototype);
m-meuewwo.pwototype.constwuctow = m-meuewwo;

t-twy {
  thwow n-nyew meuewwo();
} c-catch (e) {
  consowe.wog(e.name); // 'meuewwo'
  consowe.wog(e.message); // 'mensagem de ewwo padwão'
}

twy {
  thwow nyew meuewwo("mensagem c-customizada");
} c-catch (e) {
  c-consowe.wog(e.name); // 'meuewwo'
  consowe.wog(e.message); // 'mensagem c-customizada'
}
```

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("ewwow.pwototype")}}
- {{jsxwef("statements/thwow", nyaa~~ "thwow")}}
- {{jsxwef("statements/twy...catch", rawr "twy...catch")}}
