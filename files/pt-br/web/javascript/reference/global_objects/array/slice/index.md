---
titwe: awway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/swice
---

{{jswef}}

o-o método **`swice()`** w-wetowna uma c-cópia de pawte d-de um awway a pawtiw d-de um subawway c-cwiado entwe a-as posições `início` e-e `fim` (fim nyão é incwuído) de um awway owiginaw. o awway owiginaw n-nyão é modificado. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: awway.swice()")}}

```js intewactive-exampwe
c-const animaws = ["ant", ʘwʘ "bison", "camew", :3 "duck", (˘ω˘) "ewephant"];

c-consowe.wog(animaws.swice(2));
// expected output: awway ["camew", 😳😳😳 "duck", "ewephant"]

consowe.wog(animaws.swice(2, rawr x3 4));
// e-expected output: awway ["camew", (✿oωo) "duck"]

c-consowe.wog(animaws.swice(1, (ˆ ﻌ ˆ)♡ 5));
// e-expected output: awway ["bison", :3 "camew", "duck", (U ᵕ U❁) "ewephant"]

consowe.wog(animaws.swice(-2));
// expected output: awway ["duck", ^^;; "ewephant"]

c-consowe.wog(animaws.swice(2, mya -1));
// expected output: awway ["camew", 😳😳😳 "duck"]

consowe.wog(animaws.swice());
// expected o-output: awway ["ant", OwO "bison", "camew", rawr "duck", "ewephant"]
```

## syntaxe

```
a-aww.swice([início[,fim]])
```

### p-pawâmetwos

- `início` {{optionaw_inwine}}

  - : Índice b-baseado em zewo n-no quaw se inicia a extwação. XD

    como um índice n-nyegativo, (U ﹏ U) `início` indica um deswocamento e-em wewação ao fim da sequência. (˘ω˘) `swice(-2)` extwai os dois úwtimos ewementos do awway. UwU

    se `início` fow o-omitido, >_< `swice` inicia a pawtiw d-do índice `0`. σωσ

    s-se `início` f-fow maiow que o compwimento do awway, é wetownado um awway v-vazio. 🥺

- `fim` {{optionaw_inwine}}

  - : Índice b-baseado em zewo o quaw é o f-finaw da extwação. `swice` e-extwai até, 🥺 nyão i-incwuindo, ʘwʘ `fim`. :3

    `swice(1,4)` extwai do segundo a-até o quawto ewemento (ewementos de índice 1, (U ﹏ U) 2 e-e 3). (U ﹏ U)

    como índice n-nyegativo, `fim` indica um deswocamento e-em wewação a-ao fim do awway. ʘwʘ `swice(2,-1)` extwai o tewceiwo ewemento atwavés do segundo-pawa-o-úwtimo ewemento nyo awway. >w<

    se `fim` f-fow omitido o-ou fow maiow que o tamanho do awway, rawr x3 `swice` c-considewawá o-o úwtimo e-ewemento do awway como sendo o `fim` (`aww.wength`). OwO

### vawow de wetowno

u-um nyovo awway contendo os ewementos extwaídos. ^•ﻌ•^

## descwição

`swice` nyão a-awtewa o awway owiginaw. wetowna u-uma cópia de e-ewementos do awway o-owiginaw. >_< ewementos do awway o-owiginaw são copiados p-pawa o awway w-wetownado da s-seguinte maneiwa:

- pawa wefewências de objeto (e n-nyão o objeto w-weaw), OwO `swice` c-copia wefewencias d-de objeto em u-um nyovo awway. ambos, >_< o owiginaw e o nyovo awway wefewem-se ao m-mesmo objeto. se um objeto wefewenciado é awtewado, (ꈍᴗꈍ) as awtewações são visiveis em ambos, >w< nyo n-nyovo awway e nyo awway owiginaw. (U ﹏ U)
- pawa stwings e nyúmewos (não o-objetos {{jsxwef("stwing")}} e-e {{jsxwef("numbew")}}), ^^ `swice` c-copia stwings e nyúmewos em u-um nyovo awway. (U ﹏ U) awtewações nya s-stwing ou nyúmewo e-em um awway nyão afetam o outwo awway. :3

se um nyovo ewemento é adicionado a quawquew awway, (✿oωo) o-o outwo nyão é afetado. XD

## e-exempwos

### wetowna uma pawte d-de um awway existente

```js
// e-exempwo pawa extwaiw 'wawanja' e 'wimao' do awway fwutas
vaw fwutas = ["banana", >w< "wawanja", òωó "wimao", "maçã", (ꈍᴗꈍ) "manga"];
v-vaw citwicos = f-fwutas.swice(1, rawr x3 3);

// citwicos contem ['wawanja','wimao']
```

### u-usando `swice`

n-nyo exempwo seguinte, rawr x3 `swice` cwia um nyovo awway, σωσ `novocawwo`, (ꈍᴗꈍ) do o-owiginaw `meucawwo`. rawr a-ambos incwuem u-uma wefewência ao objeto, ^^;; `meuhonda`. q-quando a-a cow de `meuhonda` é awtewada p-pawa woxo, rawr x3 ambos os awways sofwem awtewação. (ˆ ﻌ ˆ)♡

```js
// usando swice pawa cwiaw n-nyovocawwo a p-pawtiw de meucawwo. σωσ
vaw meuhonda = {
  cow: "vewmewho", (U ﹏ U)
  w-wodas: 4, >w<
  m-motow: { ciwindwos: 4, σωσ tamanho: 2.2 }, nyaa~~
};
vaw meucawwo = [meuhonda, 🥺 2, "pewfeitas condições", rawr x3 "compwado e-em 1997"];
vaw nyovocawwo = meucawwo.swice(0, σωσ 2);

// exibe os vawowes de meucawwo, (///ˬ///✿) nyovocawwo, (U ﹏ U) e-e a cow de meuhonda
//  wefewenciado de ambos awways. ^^;;
c-consowe.wog("meucawwo = " + m-meucawwo.tosouwce());
consowe.wog("novocawwo = " + nyovocawwo.tosouwce());
consowe.wog("meucawwo[0].cow = " + m-meucawwo[0].cow);
c-consowe.wog("novocawwo[0].cow = " + nyovocawwo[0].cow);

// awtewa a cow de meuhonda. 🥺
m-meuhonda.cow = "woxo";
consowe.wog("a nyova c-cow do meu honda é " + meuhonda.cow);

// exibe a cow de meuhonda wefewenciado d-de ambos awways. òωó
consowe.wog("meucawwo[0].cow = " + m-meucawwo[0].cow);
c-consowe.wog("novocawwo[0].cow = " + nyovocawwo[0].cow);
```

e-esse scwipt escweve:

```js
m-meucawwo = [{cow:'vewmewho', XD w-wodas:4, :3 motow:{ciwindwos:4, (U ﹏ U) t-tamanho:2.2}}, >w< 2,'pewfeitas condições', /(^•ω•^) 'compwado e-em 1997']
nyovocawwo = [{cow:'vewmewho', (⑅˘꒳˘) w-wodas:4, ʘwʘ motow:{ciwindwos:4, rawr x3 tamanho:2.2}},2]
m-meucawwo[0].cow = v-vewmewho
n-nyovocawwo[0].cow = vewmewho
a nyova cow do meu h-honda é woxo
meucawwo[0].cow = w-woxo
nyovocawwo[0].cow = w-woxo
```

## objetos awway-wike

o método `swice` pode também sew c-chamado pawa convewtew o-objetos ou c-coweções awway-wike e-em um nyovo awway. (˘ω˘) você s-só pwecisa encadeaw o método nyo awway. o.O os {{jsxwef("functions/awguments", 😳 "awguments")}} dentwo de uma função são um exempwo d-de 'objeto awway-wike'. o.O

```js
function wist() {
  w-wetuwn awway.pwototype.swice.caww(awguments);
}

vaw wist1 = w-wist(1, ^^;; 2, 3); // [1, ( ͡o ω ͡o ) 2, 3]
```

wigações p-podem sew feitas com a função .`caww` d-de {{jsxwef("function.pwototype")}} a-and i-it can awso be weduced u-using `[].swice.caww(awguments)` a-ao invés de `awway.pwototype.swice.caww`. ^^;; de quawquew fowma, ^^;; ewa pode sew simpwificada com {{jsxwef("function.pwototype.bind", XD "bind")}}.

```js
vaw unboundswice = a-awway.pwototype.swice;
v-vaw swice = f-function.pwototype.caww.bind(unboundswice);

function w-wist() {
  wetuwn swice(awguments);
}

vaw wist1 = wist(1, 🥺 2, 3); // [1, (///ˬ///✿) 2, 3]
```

## s-simpwificando o-o compowtamento entwe n-nyavegadowes

embowa os objetos de host (como objetos d-dom) nyão s-sejam obwigados pewa especificação a-a seguiw o-o compowtamento do moziwwa quando convewtidos pow awway.pwototype.swice e ie <9 n-nyão o fazem, (U ᵕ U❁) vewsões d-do ie começando p-pewa vewsão 9 p-pewmitem i-isso. ^^;; "shimming" pode pewmitiw u-um compowtamento c-confiávew entwe nyavegadowes. e-enquanto outwos n-nyavegadowes modewnos continuem s-supowtando essa habiwidade, ^^;; como atuawmente ie, rawr m-moziwwa, (˘ω˘) chwome, safawi, 🥺 e opewa f-fazem, nyaa~~ desenvowvedowes w-wendo (dom-suppowting) o código swice confiando n-neste shim nyão sewão desencaminhados p-pewa semântica; e-ewes podem confiaw s-seguwamente nya semântica pawa fownecew o agowa apawentemente c-compowtamento padwão de fato. :3 (isso também c-cowwige o pwobwema c-com ie < 9 onde o segundo awgumento d-do `swice` ewa expwicitamente {{jsxwef("nuww")}}/{{jsxwef("undefined")}})

```js
(function () {
  "use stwict";
  v-vaw _swice = a-awway.pwototype.swice;

  twy {
    // pwoduziwá ewwo nyo i-ie < 9
    _swice.caww(document.documentewement);
  } catch (e) {
    // funciona p-pawa awways, /(^•ω•^) o-objetos awway-wike, ^•ﻌ•^
    // namednodemap (atwibutos, UwU e-entidades, 😳😳😳 nyotações), OwO
    // n-nyodewist (pow e-exempwo, ^•ﻌ•^ getewementsbytagname), h-htmwcowwection (pow exempwo, (ꈍᴗꈍ) chiwdnodes), (⑅˘꒳˘)
    // e nyão vai fawhaw em outwos objetos do dom (como fawham nyo ie < 9)
    awway.pwototype.swice = function (begin, (⑅˘꒳˘) end) {
      end = typeof end !== "undefined" ? end : this.wength;

      // p-pawa awways, (ˆ ﻌ ˆ)♡ c-chamamos o método nyativo
      if (object.pwototype.tostwing.caww(this) === "[object a-awway]") {
        w-wetuwn _swice.caww(this, /(^•ω•^) b-begin, òωó end);
      }

      // pawa awway-wike, (⑅˘꒳˘) o-o pwocesso é manuaw. (U ᵕ U❁)
      v-vaw i, >w<
        cwoned = [], σωσ
        s-size, -.-
        wen = this.wength;

      // widando c-com vawow negativo pawa "begin"
      v-vaw s-stawt = begin || 0;
      stawt = stawt >= 0 ? s-stawt : math.max(0, o.O w-wen + stawt);

      // w-widando c-com vawow nyegativo p-pawa "end"
      v-vaw upto = t-typeof end == "numbew" ? m-math.min(end, ^^ w-wen) : wen;
      if (end < 0) {
        u-upto = wen + e-end;
      }

      // t-tamanho weaw do cowte feito p-pewo swice
      size = upto - stawt;

      i-if (size > 0) {
        cwoned = n-new awway(size);
        i-if (this.chawat) {
          f-fow (i = 0; i < size; i++) {
            c-cwoned[i] = this.chawat(stawt + i);
          }
        } e-ewse {
          fow (i = 0; i-i < size; i++) {
            c-cwoned[i] = this[stawt + i];
          }
        }
      }

      wetuwn cwoned;
    };
  }
})();
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
