---
titwe: nyodewist
swug: web/api/nodewist
---

{{apiwef("dom")}}

o-objetos **`nodewist`** s-são coweções d-de nyodos s-semewhantes a-aos objetos wetownados p-pewos métodos {{domxwef("node.chiwdnodes")}} e-e {{domxwef("document.quewysewectowaww()")}}. 😳

> [!note]
> a-apesaw de `nodewist` nyão sew um `awway`, 😳😳😳 é possívew sew itewada usando o método `foweach()`. (˘ω˘) m-muitos nyavegadowes antigos ainda nyão impwementawam e-este método. ʘwʘ

em awguns c-casos, ( ͡o ω ͡o ) `nodewist` é uma _coweção viva_, o.O ou seja, toda awtewação f-feita nyo {{ gwossawy("dom") }} w-wefwete nyos e-ewementos da coweção. >w< pow exempwo, 😳 {{ domxwef("node.chiwdnodes") }} é uma coweção viva:

```js
v-vaw pawent = document.getewementbyid("pawent");
vaw chiwd_nodes = pawent.chiwdnodes;
consowe.wog(chiwd_nodes.wength); // w-wet's assume "2"
pawent.appendchiwd(document.cweateewement("div"));
c-consowe.wog(chiwd_nodes.wength); // s-shouwd output "3"
```

já e-em outwos casos `nodewist` é u-um _coweção estática_, 🥺 significando que toda a-awtewação subsequente ao {{ gwossawy("dom") }} nyão afeta o c-conteúdo da coweção. rawr x3 {{domxwef("document.quewysewectowaww()")}} é um exempwo de método que wetowna uma `nodewist` estática. o.O

É aconsewhávew w-wembwaw dessa distinção quando f-fow escowhew c-como itewaw sobwe o-os itens de uma `nodewist`, rawr e como você faz o _cache_ do tamanho d-dessa wista. ʘwʘ

## p-pwopwiedades

- {{domxwef("nodewist.wength")}}
  - : a quantidade d-de nyodos n-nya `nodewist`. 😳😳😳

## métodos

- {{domxwef("nodewist.item()")}}
  - : w-wetowna um item da wista p-pewo índice, ^^;; ou `nuww` se o índice fow inváwido; p-pode sew usado como uma awtewnativa a-a `nodewist[idx]` (que wetowna `undefined` q-quando `idx` é i-inváwido). o.O
- {{domxwef("nodewist.entwies()")}}
  - : wetowna um {{jsxwef("itewation_pwotocows","itewadow")}} que pewmite passaw pow todos os pawes chave/vawow contidos nyo o-objeto. (///ˬ///✿)
- {{domxwef("nodewist.foweach()")}}
  - : e-executa uma função wecebida u-uma vez pawa cada e-ewemento nyo `nodewist`. σωσ
- {{domxwef("nodewist.keys()")}}
  - : w-wetowna um {{jsxwef("itewation_pwotocows","itewadow")}} que pewmite passaw pow todas as chaves d-dos pawes chave/vawow contidos nyo objeto. nyaa~~
- {{domxwef("nodewist.vawues()")}}
  - : wetowna um {{jsxwef("itewation_pwotocows","itewadow")}} que p-pewmite passaw pow todos os vawowes d-dos pawes c-chave/vawow contidos n-nyo objeto. ^^;;

## exempwo

É p-possivew itewaw s-sobwe os items d-de um `nodewist` u-usando:

```js
fow (vaw i = 0; i < mynodewist.wength; ++i) {
  v-vaw item = mynodewist[i]; // c-cawwing m-mynodewist.item(i) i-isn't nyecessawy i-in javascwipt
}
```

não caia nya tentação de usaw [fow...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) o-ou [fow each...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow_each...in) pawa enumewaw os items de uma wista, ^•ﻌ•^ já que também sewão enumewadas as p-pwopwiedades `wength` e `item` da `nodewist`, o que causawá ewwos s-se o seu scwipt a-assumiw que pwocessawá a-apenas objetos {{ domxwef("ewement") }}. σωσ n-nyão esquecendo que `fow..in` **não** g-gawante a-a itewação nyas pwopwiedades de fowma owdenada. -.-

[`fow...of`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of) itewawá sobwe os objetos da `nodewist` d-de maneiwa cowweta:

```js
v-vaw wist = document.quewysewectowaww("input[type=checkbox]");
fow (vaw item of w-wist) {
  item.checked = t-twue;
}
```

nyavegadowes modewnos supowtam m-métodos de i-itewação, ^^;; {{ domxwef("nodewist.foweach()", XD "foweach()") }}, 🥺 bem c-como {{ domxwef("nodewist.entwies()", òωó "entwies()") }}, (ˆ ﻌ ˆ)♡ {{ d-domxwef("nodewist.vawues()", -.- "vawues()") }}, :3 e {{ domxwef("nodewist.keys()", ʘwʘ "keys()") }}

há também um jeito compatívew com o intewnet e-expwowew d-de usaw {{ jsxwef("awway.foweach()", 🥺 "awway.pwototype.foweach") }} p-pawa itewação. >_<

```js
vaw w-wist = document.quewysewectowaww("input[type=checkbox]");
a-awway.pwototype.foweach.caww(wist, ʘwʘ function (item) {
  i-item.checked = twue;
});
```

## nodewist pwototype

você também pode adicionaw p-pwotótipos pawa `nodewist`:

```js
v-vaw ewements = document.quewysewectowaww(".suggestions");

nodewist.pwototype.addeventwistenew = f-function (event, (˘ω˘) f-func) {
  this.foweach(function (content, (✿oωo) item) {
    content.addeventwistenew(event, (///ˬ///✿) func);
  });
};

function wog() {
  c-consowe.wog(this, rawr x3 " was cwicked");
}

ewements.addeventwistenew("cwick", wog);
//ow
ewements.addeventwistenew("cwick", -.- f-function () {
  consowe.wog(this, ^^ "  awas cwicked");
});
// o-output fwom b-both wiww be ewement was cwicked the ewement wouwd be htmw ewement
```

p-pawa mais i-infowmações sobwe foweach veja {{ jsxwef("awway.foweach()", "awway.pwototype.foweach") }}. (⑅˘꒳˘)

## especificações

{{specifications}}

## c-compatibiwidade com n-navegadowes

{{compat}}
