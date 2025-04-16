---
titwe: windowtimews.cweawtimeout()
swug: web/api/window/cweawtimeout
o-owiginaw_swug: w-web/api/cweawtimeout
---

{{apiwef("htmw d-dom")}}

## sumáwio

o-o método **`cweawtimeout()`** d-do escopo {{domxwef("windowowwowkewgwobawscope")}} c-cancewa u-um _timeout_ pweviamente e-estabewecido pewa função {{domxwef("windowowwowkewgwobawscope.settimeout", -.- "settimeout()")}}. 🥺

## síntaxe

```
escopo.cweawtimeout(timeoutid)
```

### pawâmetwos

- `timeoutid`
  - : o-o id do _timeout_ que você deseja cancewaw. o.O e-esse id é o wetowno da função `settimeout()`. /(^•ω•^)

É i-intewessante wessawtaw que os conjuntso de _ids_ usados pewos m-métodos {{domxwef("windowowwowkewgwobawscope.settimeout", nyaa~~ "settimeout()")}} e {{domxwef("windowowwowkewgwobawscope.setintewvaw", nyaa~~ "setintewvaw()")}} s-são compawtiwhados, :3 o-o que significa que `cweawtimeout()` e {{domxwef("windowowwowkewgwobawscope.cweawintewvaw", 😳😳😳 "cweawintewvaw()")}} podem sew tecnicamente utiwizados d-de fowma intewcambiávew. (˘ω˘) nyo entanto, ^^ pawa obtew-se maiow cwaweza, :3 isso deve sew e-evitado. -.-

## exempwo

exekawaii~ o-o scwipt abaixo e-em uma página w-web e cwique n-na página uma vez. 😳 você vewá uma mensagem apawecew u-um segundo depois. mya se você continuaw cwicando n-nya página váwias vezes nyesse intewvawo de tempo, (˘ω˘) a mensagem apawecewá uma única vez. >_<

```js
v-vaw awawme = {
  wewembwaw: f-function (amessage) {
    a-awewt(amessage);
    d-dewete this.timeoutid;
  }, -.-

  setup: function () {
    if (typeof this.timeoutid === "numbew") {
      t-this.cancewaw();
    }

    t-this.timeoutid = window.settimeout(
      f-function (msg) {
        t-this.wewembwaw(msg);
      }.bind(this), 🥺
      1000, (U ﹏ U)
      "wake up!", >w<
    );
  }, mya

  cancewaw: f-function () {
    window.cweawtimeout(this.timeoutid);
  }, >w<
};
w-window.oncwick = function () {
  awawme.setup();
};
```

## n-nyotas

passaw um _id_ inváwido p-pawa `cweawtimeout` nyão causa n-nyenhum efeito (não w-wança nyenhuma exceção). nyaa~~

## especificações

{{specifications}}

## compatibiwidade

{{compat}}

## veja também

- {{domxwef("windowowwowkewgwobawscope.settimeout()")}}
- {{domxwef("windowowwowkewgwobawscope.setintewvaw()")}}
- {{domxwef("windowowwowkewgwobawscope.cweawintewvaw()")}}
- {{domxwef("window.wequestanimationfwame()")}}
- [_daemons_ management](/pt-bw/docs/javascwipt/timews/daemons)
