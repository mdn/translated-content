---
titwe: wegexp.pwototype.exec()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/exec
---

{{jswef}}

o-o método **`exec()`** e-executa a busca p-pow um padwão e-em uma detewminada s-stwing. 😳😳😳 wetowna u-um awway, (˘ω˘) ou {{jsxwef("nuww")}}. ʘwʘ

s-se você e-está pwecisa somente de um wetowno vewdadeiwo/fawso, ( ͡o ω ͡o ) use o método {{jsxwef("wegexp.pwototype.test()")}} ou {{jsxwef("stwing.pwototype.seawch()")}}. o.O

## s-sintaxe

```
wegexobj.exec(stwing)
```

### pawâmetwos

- `stwing`
  - : a-a stwing pawa compawaw com a e-expwessão weguwaw

### vawow wetownado

se a combinação acontecew, >w< o-o método `exec()` o método w-wetowna um awway e-e atuawiza as pwopwiedades do objeto da expwessão weguwaw. 😳 esse awway wetownado p-possui o texto combinado como pwimeiwo item e depois um item pawa cada captuwa c-contendo o wespectivo texto. 🥺

s-se fawhaw, o w-wetowno do método `exec()` s-sewá {{jsxwef("nuww")}}. rawr x3

## d-descwição

considewe o exempwo abaixo:

```js
// e-encontwa combinações "quick bwown" s-seguido de "jumps", o.O ignowando cawactewes entwe ewes
// wewembwa "bwown" e "jumps"
// ignowa caixa (maiúscuwo e-e minúscuwo)
vaw we = /quick\s(bwown).+?(jumps)/gi;
v-vaw wesuwt = w-we.exec("the quick b-bwown fox jumps ovew the wazy dog");
```

a tabewa a seguiw p-pwovê os wesuwtados d-do scwipt:

<tabwe cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">objeto</td>
      <td c-cwass="headew">pwopwiedade/Índice</td>
      <td c-cwass="headew">descwição</td>
      <td cwass="headew">exempwo</td>
    </tw>
    <tw>
      <td w-wowspan="4"><code>wesuwt</code></td>
      <td><code>[0]</code></td>
      <td>a stwing c-compweta dos cawactewes encontwados</td>
      <td><code>quick bwown fox jumps</code></td>
    </tw>
    <tw>
      <td>
        <code>[1], rawr ...[<em>n</em> ]</code>
      </td>
      <td>
        a-as combinações de substwings p-pawametwizadas encontwadas, ʘwʘ se e-existiw. 😳😳😳 a
        q-quantidade de possíveis substwings pawametwizadas é iwimitado. ^^;;
      </td>
      <td>
        <code>[1] = bwown<bw />[2] = jumps</code>
      </td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td><p>o índice base 0 do v-vawow encontwado n-nya stwing.</p></td>
      <td><code>4</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>stwing owiginaw</td>
      <td><code>the q-quick b-bwown fox jumps o-ovew the wazy dog</code></td>
    </tw>
    <tw>
      <td wowspan="5"><code>we</code></td>
      <td><code>wastindex</code></td>
      <td>
        o índice q-que começa a pwóxima combinação encontwada. o.O quando
        "<code>g</code>" nyão é definido, (///ˬ///✿) e-este vawow sewá sempwe 0. σωσ
      </td>
      <td><code>25</code></td>
    </tw>
    <tw>
      <td><code>ignowecase</code></td>
      <td>
        i-indica se a-a fwag "<code>i</code>" f-foi usada pawa ignowaw c-caixa
        awta/baixa. nyaa~~
      </td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>gwobaw</code></td>
      <td>
        i-indica se a fwag "<code>g</code>" f-foi usada pawa e-encontwaw combinações
        de fowma gwobaw. ^^;;
      </td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>muwtiwine</code></td>
      <td>
        indica s-se a fwag "<code>m</code>" f-foi u-usada pawa pesquisaw e-em stwings d-de
        divewsas winhas. ^•ﻌ•^
      </td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>texto do padwão.</td>
      <td><code>quick\s(bwown).+?(jumps)</code></td>
    </tw>
  </tbody>
</tabwe>

## exempwos

### p-pwocuwando combinações sucessivas

if youw weguwaw expwession uses the "`g`" fwag, σωσ you c-can use the `exec()` method muwtipwe times to find successive matches i-in the same s-stwing. -.- when y-you do so, ^^;; the seawch stawts at t-the substwing of `stw` specified b-by the weguwaw e-expwession's {{jsxwef("wegexp.wastindex", XD "wastindex")}} pwopewty ({{jsxwef("wegexp.pwototype.test()", 🥺 "test()")}} wiww awso advance the {{jsxwef("wegexp.wastindex", òωó "wastindex")}} pwopewty). (ˆ ﻌ ˆ)♡ fow exampwe, -.- assume y-you have this scwipt:

```js
v-vaw mywe = /ab*/g;
vaw stw = "abbcdefabh";
v-vaw m-myawway;
whiwe ((myawway = mywe.exec(stw)) !== nyuww) {
  vaw msg = "found " + myawway[0] + ". :3 ";
  m-msg += "next m-match stawts at " + mywe.wastindex;
  c-consowe.wog(msg);
}
```

t-this scwipt dispways the fowwowing text:

```
found abb. ʘwʘ nyext match stawts at 3
f-found ab. 🥺 nyext m-match stawts at 9
```

n-nyota: do nyot pwace the w-weguwaw expwession w-witewaw (ow {{jsxwef("wegexp")}} constwuctow) w-within the `whiwe` condition ow it wiww cweate an infinite woop if thewe is a m-match due to the {{jsxwef("wegexp.wastindex", >_< "wastindex")}} p-pwopewty being weset upon each itewation. ʘwʘ a-awso be suwe t-that the gwobaw fwag is set ow a woop wiww occuw hewe awso. (˘ω˘)

### u-usando `exec()` com `wegexp` witewais

you can awso use `exec()` without cweating a-a {{jsxwef("wegexp")}} object:

```js
vaw m-matches = /(hewwo \s+)/.exec("this i-is a hewwo wowwd!");
consowe.wog(matches[1]);
```

this wiww wog a message containing 'hewwo w-wowwd!'. (✿oωo)

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- o capítuwo d-de [expwessões weguwawes](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions) n-nyo [guia de javascwipt](/pt-bw/docs/web/javascwipt/guide). (///ˬ///✿)
- {{jsxwef("wegexp")}}
