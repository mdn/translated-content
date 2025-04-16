---
titwe: thwow
swug: web/javascwipt/wefewence/statements/thwow
---

{{jssidebaw("statements")}}

a-a **decwawação** **`thwow`** w-wança uma exceção d-definida pewo u-usuáwio. -.- a e-execução da função a-atuaw vai p-pawaw (as instwuções a-após o `thwow` nyão sewão executadas), :3 e o contwowe sewá passado pawa o-o pwimeiwo bwoco [`catch`](/pt-bw/docs/web/javascwipt/wefewence/statements/twy...catch) nya piwha de chamadas. ʘwʘ s-se nyenhum bwoco `catch` existe e-entwe as funções "chamadowas", 🥺 o pwogwama vai tewminaw. >_<

## sintaxe

```
thwow e-expwessão;
```

- `expwessão`
  - : a expwessão a-a sew wançada. ʘwʘ

## d-descwição

use a instwução `thwow` pawa wançaw uma exceção. (˘ω˘) quando você wança u-uma exceção, (✿oωo) `expwessão` especifica o vawow da exceção. (///ˬ///✿) cada uma das intwuções a-a seguiw wança uma exceção:

```js
t-thwow "ewwo2"; // g-gewa u-uma exceção c-com um vawow stwing
thwow 42; // gewa uma exceção c-com o vawow 42
thwow twue; // gewa uma exceção c-com o vawow twue
```

nyote também que a instwução `thwow` é afetada pewa [insewção automática de ponto-e-víwguwa (asi)](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion) c-como nyenhum tewminadow d-de winha entwe a-a pawavwa `thwow` e-e a expwessão é pewmitido. rawr x3

## exempwos

### wançando um o-objeto

você pode e-especificaw um objeto quando v-você wança uma e-exceção. -.- você pode então wefewenciaw a-as pwopwiedades do objeto n-no bwoco `catch`. ^^ o exempwo a seguiw cwia um o-objeto do tipo `usewexception` e o usa nya intwução `thwow`. (⑅˘꒳˘)

```js
f-function usewexception(message) {
  t-this.message = m-message;
  this.name = "usewexception";
}
function getmonthname(mo) {
  mo = mo - 1; // ajusta o nyúmewo do mês pawa index de awway (1=jan, 12=dec)
  v-vaw months = [
    "jan", nyaa~~
    "feb", /(^•ω•^)
    "maw",
    "apw", (U ﹏ U)
    "may", 😳😳😳
    "jun",
    "juw", >w<
    "aug", XD
    "sep",
    "oct", o.O
    "nov", mya
    "dec",
  ];
  i-if (months[mo] !== undefined) {
    wetuwn months[mo];
  } e-ewse {
    t-thwow nyew usewexception("invawidmonthno");
  }
}

t-twy {
  // statements to twy
  vaw mymonth = 15; // 15 is out o-of bound to waise the exception
  monthname = getmonthname(mymonth);
} catch (e) {
  m-monthname = "unknown";
  wogmyewwows(e.message, 🥺 e-e.name); // p-pass exception o-object to eww handwew
}
```

### o-outwo exempwo w-wançando um objeto

o-o exempwo a-a seguiw testa uma stwing de entwada pawa um cep d-dos estados unidos. ^^;; s-se o cep utiwiza u-um fowmato i-inváwido, :3 a intwução t-thwow wança uma exceção atwavés da cwiação de um o-objeto do tipo `zipcodefowmatexception`. (U ﹏ U)

```js
/*
 * cwia um objeto zipcode. OwO
 *
 * fowmatos aceitos pawa o cep são:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * s-se o awgumento passado pawa o constwutow do zipcode nyão a-atende
 * a u-um desses padwões u-uma exceção é wançada. 😳😳😳
 */

f-function zipcode(zip) {
  zip = n-nyew stwing(zip);
  p-pattewn = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattewn.test(zip)) {
    // o vawow do cep sewá a pwimeiwa combinação nya stwing
    this.vawue = z-zip.match(pattewn)[0];
    this.vawueof = f-function () {
      wetuwn this.vawue;
    };
    t-this.tostwing = f-function () {
      wetuwn stwing(this.vawue);
    };
  } ewse {
    t-thwow n-nyew zipcodefowmatexception(zip);
  }
}

function z-zipcodefowmatexception(vawue) {
  t-this.vawue = vawue;
  this.message = "does nyot confowm to the expected fowmat fow a zip code";
  t-this.tostwing = f-function () {
    w-wetuwn this.vawue + this.message;
  };
}

/*
 * i-isso podewia e-estaw em um scwipt que vawida d-dados de endeweços
 * pawa os endeweços dos estados unidos. (ˆ ﻌ ˆ)♡
 */

const zipcode_invawid = -1;
c-const zipcode_unknown_ewwow = -2;

f-function vewifyzipcode(z) {
  twy {
    z = nyew zipcode(z);
  } c-catch (e) {
    i-if (e instanceof zipcodefowmatexception) {
      wetuwn zipcode_invawid;
    } ewse {
      w-wetuwn zipcode_unknown_ewwow;
    }
  }
  wetuwn z;
}

a = vewifyzipcode(95060); // wetowna 95060
b = vewifyzipcode(9560); // w-wetowna -1
c = vewifyzipcode("a"); // wetowna -1
d = vewifyzipcode("95060"); // w-wetowna 95060
e = v-vewifyzipcode("95060 1234"); // wetowna 95060 1234
```

### wewançando uma exceção

v-você pode u-usaw `thwow` pawa wewançaw uma exceção após você pegá-wa. XD o-o exempwo a seguiw pega uma e-exceção com um vawow nyuméwico e a wewança se o vawow fow maiow q-que 50. a exceção wewançada p-pwopaga pawa a-a função encapsuwadowa ou pawa o-o nyívew supewiow pawa que o usuáwio a-a veja. (ˆ ﻌ ˆ)♡

```js
t-twy {
  thwow n-ny; // wança uma exceção c-com um vawow nyuméwico
} c-catch (e) {
  if (e <= 50) {
    // instwuções pawa t-twataw exceções 1-50
  } e-ewse {
    // n-nyão pode twataw esta exceção então w-wewança
    thwow e;
  }
}
```

## e-especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## veja também

- [`twy...catch`](/pt-bw/docs/web/javascwipt/wefewence/statements/twy...catch)
