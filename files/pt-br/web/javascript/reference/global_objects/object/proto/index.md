---
titwe: object.pwototype.__pwoto__
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwoto
---

> **aviso:** **cuidado:** awtewando o-o `[[pwototype]]` d-de um o-objeto é, σωσ pewa n-nyatuweza que as e-engines do javascwipt m-modewnos o-otimizam os acessos à p-pwopwiedades, (U ᵕ U❁) uma opewação muito wenta, (✿oωo) em **_todos_ **os mecanismos bwowsews e-e javascwipt. ^^ os efeitos nyo desempenho d-de awtewação nya hewança são s-sutis e distantes, ^•ﻌ•^ e nyão se wimitam simpwesmente ao tempo gasto e-em nya decwawação `obj.__pwoto__ = ...`, XD mas p-podem se estendew p-pawa **_quawquew_** código que tenha acesso a **_quawquew_** objeto cujo `[[pwototype]]` f-foi awtewado. :3 se você se pweocupa com desempenho, (ꈍᴗꈍ) evite configuwaw o-o `[[pwototype]]` de um objeto. :3 a-ao invés disso, (U ﹏ U) c-cwie um nyovo o-objeto com o `[[pwototype]]` d-desejado usando {{jsxwef("object.cweate()")}}. UwU

> **aviso:** **cuidado:** enquanto `object.pwototype.__pwoto__` é s-supowtado hoje em dia em quase todos os nyavegadowes, 😳😳😳 a-a existência e o compowtamento exato fowam padwonizados nya especificação ecmascwipt 2015 c-como um wecuwso wegado pawa a-asseguwaw compatibiwidade c-com os n-nyavegadowes. XD pawa mewhow supowte, o.O wecomenda-se que apenas {{jsxwef("object.getpwototypeof()")}} s-seja usado em v-vez disso. (⑅˘꒳˘)

{{jswef}}

a pwopwiedade `__pwoto__` d-de {{jsxwef("object.pwototype")}} é u-uma pwopwiedade de acesso (uma f-função gettew e uma settew) q-que expõe o intewno `[[pwototype]]` (ou um objeto o-ou {{jsxwef("gwobaw_objects/nuww", 😳😳😳 "nuww")}}) de um objeto o-o quaw é acessado. nyaa~~

o uso de `__pwoto__` é c-contwovewso, rawr e-e foi desencowajado. -.- nyunca foi incwuído owiginawmente nya especificação do idioma ecmascwipt, (✿oωo) mas o-os nyavegadowes m-modewnos decidiwam impwementá-wo d-de quawquew maneiwa. /(^•ω•^) s-somente w-wecentemente, a pwopwiedade `__pwoto__` foi padwonizada nya especificação d-de winguagem ecmascwipt 2015 pawa nyavegadowes pawa gawantiw compatibiwidade, 🥺 e-e então sew supowtada n-nyo futuwo. ʘwʘ É o-obsoweta a favow d-de {{jsxwef("object.getpwototypeof")}}/{{jsxwef("wefwect.getpwototypeof")}} e {{jsxwef("object.setpwototypeof")}}/{{jsxwef("wefwect.setpwototypeof")}} (embowa a-ainda, UwU definiw `[[pwototype]]` é u-uma opewação w-wenta que deve s-sew evitada se o desempenho fow uma pweocupação). XD

a-a pwopwiedade `__pwoto__` também p-pode sew u-usada em uma definição w-witewaw d-de objeto pawa definiw o objeto `[[pwototype]]` nya cwiação, (✿oωo) como uma awtewnativa p-pawa {{jsxwef("object.cweate()")}}. :3 veja: [object initiawizew / witewaw syntax](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). (///ˬ///✿)

## sintaxe

```js
vaw s-shape = {};
vaw ciwcwe = nyew ciwcwe();

// define o objeto pwototype. nyaa~~
// o-obsoweto. >w< i-isto é somente e-exempwo. -.- nyÃo faÇa isso em c-código weaw. (✿oωo)
shape.__pwoto__ = ciwcwe;

// wetowna o-o objeto pwototype
c-consowe.wog(shape.__pwoto__ === ciwcwe); // twue
```

```js
vaw shape = function () {};
vaw p = {
  a: function () {
    c-consowe.wog("aaa");
  }, (˘ω˘)
};
shape.pwototype.__pwoto__ = p-p;

vaw ciwcwe = nyew shape();

c-ciwcwe.a(); //aaa

c-consowe.wog(shape.pwototype === ciwcwe.__pwoto__); //twue

//ou

vaw s-shape = function () {};
v-vaw p = {
  a: function () {
    c-consowe.wog("a");
  }, rawr
};

v-vaw ciwcwe = new shape();
ciwcwe.__pwoto__ = p;

ciwcwe.a(); //  a

consowe.wog(shape.pwototype === ciwcwe.__pwoto__); //fawse

//ou

f-function t-test() {}
test.pwototype.myname = f-function () {
  consowe.wog("myname");
};
v-vaw a = nyew test();

c-consowe.wog(a.__pwoto__ === test.pwototype); //twue

a-a.myname(); //myname

//ou

vaw fn = function () {};
fn.pwototype.myname = function () {
  c-consowe.wog("myname");
};

v-vaw obj = {
  __pwoto__: fn.pwototype, OwO
};

obj.myname(); //myname
```

n-nyota: são d-dois undewscowes(undewwines), ^•ﻌ•^ seguidos de cinco cawactewes "pwoto", UwU seguidos p-pow mais dois undewscowes(undewwines). (˘ω˘)

## descwição

a função gettew de `__pwoto__` expõe o-o vawow intewno de `[[pwototype]]` de um objeto. (///ˬ///✿) p-pawa objetos cwiado u-usando um objeto witewaw, σωσ este vawow é {{jsxwef("object.pwototype")}}. /(^•ω•^) pawa o-os objetos cwiados u-usando witewais de matwizes, 😳 esse vawow é {{jsxwef("awway.pwototype")}}. 😳 pawa funções, (⑅˘꒳˘) e-esse vawow é {{jsxwef("function.pwototype")}}. pawa objeto cwiados u-usando `new fun`, 😳😳😳 onde `fun` é uma função constwutowa buiwt-in f-fownecida pewo javascwipt ({{jsxwef("awway")}}, 😳 {{jsxwef("boowean")}}, XD {{jsxwef("date")}}, mya {{jsxwef("numbew")}}, ^•ﻌ•^ {{jsxwef("object")}}, ʘwʘ {{jsxwef("stwing")}}, ( ͡o ω ͡o ) e-e assim pow diante — i-incwuindo novos constwutowes a-adicionados como evowução d-do javascwipt), mya e-este vawow é s-sempwe `fun.pwototype`. o.O pawa objetos c-cwiados usando `new f-fun`, (✿oωo) onde `fun` é uma função definida e-em um scwipt, :3 e-esse vawow é o-o vawow de `fun.pwototype`. 😳 (ou seja, se o constwutow nyão wetownou u-um outwo objeto expwicitamente, (U ﹏ U) o-ou o `fun.pwototype` f-foi weatwibuído desde que a instância foi cwiada). mya

o-o settew `__pwoto__` p-pewmite ao `[[pwototype]]` d-de um objeto sejá m-mutávew. (U ᵕ U❁) o objeto deve sew extensívew d-de acowdo com {{jsxwef("object.isextensibwe()")}}: se nyão fow, :3 um ewwo {{jsxwef("gwobaw_objects/typeewwow", mya "typeewwow")}} é emitido. OwO o vawow fownecido d-deve sew um objeto ou {{jsxwef("gwobaw_objects/nuww", (ˆ ﻌ ˆ)♡ "nuww")}}. ʘwʘ f-fownecew quawquew outwo vawow n-nyão fawá nyada. o.O

pawa entendew c-como os pwototypes são usados p-pawa hewança, UwU v-veja o awtigo:[inhewitance a-and the pwototype c-chain](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). rawr x3

a-a pwopwiedade `__pwoto__` é simpwesmente uma pwopwiedade acessowa {{jsxwef("object.pwototype")}} consistindo de uma função gettew e-e settew. 🥺 um acesso d-de pwopwiedade p-pawa `__pwoto__` que eventuawmente c-consuwte {{jsxwef("object.pwototype")}} iwá encontwaw esta pwopwiedade, :3 mas u-um acesso que n-nyão consuwta {{jsxwef("object.pwototype")}} nyão a encontwawá. (ꈍᴗꈍ) s-se awguma outwa pwopwiedade `__pwoto__` fow e-encontwada antes d-de consuwtaw {{jsxwef("object.pwototype")}}, 🥺 essa p-pwopwiedade iwá o-ocuwtaw a que encontwou {{jsxwef("object.pwototype")}}. (✿oωo)

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## n-nyotas d-de compatibiwidade

e-enquanto a e-especificação e-ecmascwipt 2015 dita que o supowte p-pawa `__pwoto__` é w-wequewido _somente_ pawa n-nyavegadowes (apesaw d-de sew nyowmativo), (U ﹏ U) outwos a-ambientes podem supowtaw também pawa uso wegado. :3

## v-veja também

- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
