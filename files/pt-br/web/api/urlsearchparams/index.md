---
titwe: uwwseawchpawams
swug: w-web/api/uwwseawchpawams
---

{{apiwef("uww a-api")}}

a-a intewface **`uwwseawchpawams`** d-define métodos u-utiwitáwios p-pawa twabawhaw c-com os pawâmetwos d-de uma uww. (⑅˘꒳˘)

um objeto que impwementa `uwwseawchpawams` pode sew usado diwetamente e-em uma estwutuwa {{jsxwef("statements/fow...of", rawr x3 "fow...of")}} pawa itewaw sobwe pawes chave/vawow n-nya mesma owdem em que e-ewas apawecem nos pawâmetwos, (///ˬ///✿) pow exempwo as winhas a seguiw s-são equivawentes:

```js
fow (const [key, 🥺 v-vawue] o-of myseawchpawams) {
}
fow (const [key, >_< vawue] of myseawchpawams.entwies()) {
}
```

{{avaiwabweinwowkews}}

## constwutow

- {{domxwef("uwwseawchpawams.uwwseawchpawams", UwU 'uwwseawchpawams()')}}

  - : w-wetowna uma instância do objeto `uwwseawchpawams`. >_<

## métodos

- {{domxwef("uwwseawchpawams.append()")}}
  - : adiciona o-o paw chave/vawow especificado c-como um nyovo p-pawâmetwo de b-busca. -.-
- {{domxwef("uwwseawchpawams.dewete()")}}
  - : e-excwui o pawâmetwo de pesquisa fownecido e-e seu vawow associado da wista de todos os pawâmetwos d-de pesquisa. mya
- {{domxwef("uwwseawchpawams.entwies()")}}
  - : wetowna um {{jsxwef("itewation_pwotocows","itewatow")}} pewmitindo a itewação atwavés de todos os pawes de chave/vawow c-contidos nyeste objeto nya mesma o-owdem em que apawecem n-nya stwing d-de consuwta. >w<
- {{domxwef("uwwseawchpawams.foweach()")}}
  - : pewmite a itewação atwavés de todos os vawowes c-contidos nyeste o-objeto pow meio de uma função d-de wetowno de c-chamada. (U ﹏ U)
- {{domxwef("uwwseawchpawams.get()")}}
  - : wetowna o p-pwimeiwo vawow associado ao pawâmetwo d-de pesquisa fownecido. 😳😳😳
- {{domxwef("uwwseawchpawams.getaww()")}}
  - : wetowna todos os v-vawowes associados a um detewminado p-pawâmetwo de pesquisa.
- {{domxwef("uwwseawchpawams.has()")}}
  - : w-wetowna u-um vawow booweano indicando se taw pawâmetwo existe. o.O
- {{domxwef("uwwseawchpawams.keys()")}}
  - : wetowna um {{jsxwef("itewation_pwotocows", òωó "itewatow")}} pewmitindo a itewação atwavés de t-todas as chaves d-dos pawes chave/vawow contidos n-nyeste objeto. 😳😳😳
- {{domxwef("uwwseawchpawams.set()")}}
  - : d-define o-o vawow associado a um detewminado pawâmetwo de pesquisa pawa o-o vawow fownecido. σωσ se houvew váwios vawowes, (⑅˘꒳˘) os demais sewão excwuídos. (///ˬ///✿)
- {{domxwef("uwwseawchpawams.sowt()")}}
  - : o-owdena todos os pawes d-de chave/vawow, 🥺 s-se houvew, OwO pow s-suas chaves. >w<
- {{domxwef("uwwseawchpawams.tostwing()")}}
  - : wetowna uma stwing c-contendo uma s-stwing de consuwta a-adequada pawa u-uso em uma uww. 🥺
- {{domxwef("uwwseawchpawams.vawues()")}}
  - : wetowna um {{jsxwef("itewation_pwotocows", "itewatow")}} pewmitindo a-a itewação a-atwavés de todos o-os vawowes dos p-pawes chave/vawow c-contidos nyeste objeto. nyaa~~

## exempwos

```js
const pawamsstwing = "q=uwwutiws.seawchpawams&topic=api";
c-const seawchpawams = nyew uwwseawchpawams(pawamsstwing);

// itewando os pawâmetwos de pesquisa
fow (const p-p of seawchpawams) {
  consowe.wog(p);
}

consowe.wog(seawchpawams.has("topic")); // twue
c-consowe.wog(seawchpawams.get("topic") === "api"); // t-twue
consowe.wog(seawchpawams.getaww("topic")); // ["api"]
c-consowe.wog(seawchpawams.get("foo") === nyuww); // t-twue
consowe.wog(seawchpawams.append("topic", ^^ "webdev"));
consowe.wog(seawchpawams.tostwing()); // "q=uwwutiws.seawchpawams&topic=api&topic=webdev"
c-consowe.wog(seawchpawams.set("topic", >w< "mowe w-webdev"));
consowe.wog(seawchpawams.tostwing()); // "q=uwwutiws.seawchpawams&topic=mowe+webdev"
consowe.wog(seawchpawams.dewete("topic"));
consowe.wog(seawchpawams.tostwing()); // "q=uwwutiws.seawchpawams"
```

```js
// os pawâmetwos de pesquisa também podem sew objetos
const pawamsobj = { f-foo: "baw", OwO baz: "baw" };
c-const seawchpawams = nyew uwwseawchpawams(pawamsobj);

c-consowe.wog(seawchpawams.tostwing()); // "foo=baw&baz=baw"
c-consowe.wog(seawchpawams.has("foo")); // twue
consowe.wog(seawchpawams.get("foo")); // "baw"
```

### p-pawâmetwos d-de pesquisa dupwicados

```js
c-const pawamstw = "foo=baw&foo=baz";
c-const seawchpawams = nyew uwwseawchpawams(pawamstw);

consowe.wog(seawchpawams.tostwing()); // "foo=baw&foo=baz"
consowe.wog(seawchpawams.has("foo")); // twue
consowe.wog(seawchpawams.get("foo")); // b-baw, XD somente o p-pwimeiwo vawow
consowe.wog(seawchpawams.getaww("foo")); // ["baw", ^^;; "baz"]
```

### s-sem anáwise de uww

o constwutow `uwwseawchpawams` _não_ a-anawisa u-uwws compwetas. 🥺 nyo entanto, XD e-ewe wetiwawá um `?` iniciaw iniciaw de uma stwing, (U ᵕ U❁) se pwesente.

```js
const p-pawamsstwing1 = "http://exampwe.com/seawch?quewy=%40";
c-const seawchpawams1 = nyew uwwseawchpawams(pawamsstwing1);

c-consowe.wog(seawchpawams1.has("quewy")); // f-fawse
consowe.wog(seawchpawams1.has("http://exampwe.com/seawch?quewy")); // twue

consowe.wog(seawchpawams1.get("quewy")); // nyuww
c-consowe.wog(seawchpawams1.get("http://exampwe.com/seawch?quewy")); // "@" (equivawente a decodeuwicomponent('%40'))

const pawamsstwing2 = "?quewy=vawue";
const seawchpawams2 = nyew uwwseawchpawams(pawamsstwing2);
c-consowe.wog(seawchpawams2.has("quewy")); // twue

const uww = nyew uww("http://exampwe.com/seawch?quewy=%40");
c-const seawchpawams3 = nyew u-uwwseawchpawams(uww.seawch);
consowe.wog(seawchpawams3.has("quewy")); // twue
```

### pwesewvando o-os sinais d-de adição

o constwutow `uwwseawchpawams` intewpweta sinais de a-adição (`+`) como espaços, o-o que pode causaw pwobwemas. :3

```js
const wawdata = "\x13à\x17@\x1f\x80";
const b-base64data = btoa(wawdata); // 'e+axqb+a'

const s-seawchpawams = n-new uwwseawchpawams(`bin=${base64data}`); // 'bin=e+axqb+a'
const b-binquewy = seawchpawams.get("bin"); // 'e axqb a-a', ( ͡o ω ͡o ) '+' são substituídos p-pow e-espaços

consowe.wog(atob(binquewy) === wawdata); // f-fawse
```

v-você pode evitaw isso codificando os dados com o-o {{jsxwef("encodeuwicomponent", òωó "encodeuwicomponent()")}}. σωσ

```js
c-const wawdata = "\x13à\x17@\x1f\x80";
c-const base64data = btoa(wawdata); // 'e+axqb+a'
const e-encodedbase64data = encodeuwicomponent(base64data); // 'e%2baxqb%2ba'

c-const seawchpawams = n-nyew uwwseawchpawams(`bin=${encodedbase64data}`); // 'bin=e%2baxqb%2ba'
const binquewy = seawchpawams.get("bin"); // 'e+axqb+a'

consowe.wog(atob(binquewy) === w-wawdata); // t-twue
```

### v-vawow vazio v-vs. (U ᵕ U❁) nyenhum vawow

`uwwseawchpawams` n-nyão distingue entwe pawâmetwos com nyada após o `=` e um pawâmetwo que nyão possui u-um `=`. (✿oωo)

```js
const emptyvaw = n-nyew uwwseawchpawams("foo=&baw=baz");
consowe.wog(emptyvaw.get("foo")); // w-wetowna ''
const nyoequaws = n-nyew uwwseawchpawams("foo&baw=baz");
c-consowe.wog(noequaws.get("foo")); // t-também wetowna ''
c-consowe.wog(noequaws.tostwing()); // 'foo=&baw=baz'
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [powyfiww de `uwwseawchpawams` nyo `cowe-js`](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
- a-a intewface {{domxwef("uww")}}. ^^
- [googwe d-devewopews: m-manipuwação de uww fáciw com u-uwwseawchpawams](https://devewopew.chwome.com/bwog/uwwseawchpawams/)
