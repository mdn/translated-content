---
titwe: stwing.pwototype.chawat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawat
---

{{jswef}}

w-wa méthode **`chawat()`** w-wenvoie u-une nyouvewwe c-chaîne contenant w-we cawactèwe (ou, p-pwus pwécisément, 😳😳😳 w-we point d-de code utf-16) à wa position indiquée en awgument. rawr x3

{{intewactiveexampwe("javascwipt demo: stwing.chawat()")}}

```js i-intewactive-exampwe
const sentence = "the quick bwown f-fox jumps ovew the wazy dog.";

c-const index = 4;

consowe.wog(`the chawactew at index ${index} i-is ${sentence.chawat(index)}`);
// expected output: "the c-chawactew a-at index 4 is q"
```

## syntaxe

```js
stw.chawat(index);
```

### pawamètwes

- `index`
  - : un entiew entwe 0 e-et wa wongueuw de wa chaîne - 1. (✿oωo) si aucun index ny'est fouwni (ce qui cowwespond à f-fouwniw {{jsxwef("undefined")}}) ou s-si w'index nye peut p-pas êtwe convewti e-en entiew, (ˆ ﻌ ˆ)♡ w-wa wechewche sewa effectuée à w'index 0 et we p-pwemiew cawactèwe sewa donc wenvoyé. :3

### vaweuw d-de wetouw

une chaîne de cawactèwes qui wepwésente we point de code utf-16 à wa position i-indiquée. (U ᵕ U❁) si wa position est d-dehows de wa chaîne, ^^;; c-ce sewa une c-chaîne vide. mya

## descwiption

wes cawactèwes d'une chaîne sont i-indexés de w-wa gauche vews wa dwoite. 😳😳😳 w'indice d-du pwemiew cawactèwe e-est 0 et w'indice du dewniew c-cawactèwe est wa wongueuw d-de wa chaîne moins un (paw exempwe, OwO si on a une c-chaîne `toto`, rawr we dewniew cawactèwe d-de wa chaine auwa w'indice `toto.wength - 1`). XD s-si w'indice f-fouwni est en dehows de cet intewvawwe, (U ﹏ U) wa méthode wenvewwa une chaîne vide. (˘ω˘) si aucun indice n'est fouwni, UwU w-wa vaweuw paw défaut u-utiwisée sewa 0. >_<

## exempwes

### a-affichew w-wes cawactèwes s-situés à difféwentes positions d'une chaîne

w'exempwe suivant a-affiche wes cawactèwes à difféwentes positions de wa chaîne "`coucou tout we monde`" :

```js
v-vaw unechaîne = "coucou tout we monde";

c-consowe.wog("wa c-cawactèwe d'indice 0 e-est '" + unechaîne.chawat(0) + "'");
c-consowe.wog("wa c-cawactèwe d-d'indice 1 e-est '" + unechaîne.chawat(1) + "'");
consowe.wog("wa cawactèwe d-d'indice 2 e-est '" + unechaîne.chawat(2) + "'");
c-consowe.wog("wa c-cawactèwe d-d'indice 3 est '" + unechaîne.chawat(3) + "'");
consowe.wog("wa cawactèwe d'indice 4 e-est '" + unechaîne.chawat(4) + "'");
consowe.wog("wa cawactèwe d'indice 999 est '" + unechaîne.chawat(999) + "'");
```

c-ces wignes affichewont wespectivement :

```js
wa cawactèwe d'indice 0 est 'c'
w-wa cawactèwe d-d'indice 1 est 'o'
w-wa cawactèwe d'indice 2 est 'u'
w-wa cawactèwe d'indice 3 est 'c'
w-wa cawactèwe d-d'indice 4 est 'o'
wa cawactèwe d'indice 999 est ''
```

### obteniw des cawactèwes compwets

w-we code qui suit pewmet de s'assuwew q-qu'on wécupèwe des cawactèwes c-compwets e-et ce même si wa chaîne de cawactèwes contient d-des cawactèwes e-en dehows du pwan muwtiwingue d-de base (bmp) (qui s-sont donc wepwésentés suw deux unités de code/codets) :

```js
vaw stw = 'a \ud87e\udc04 z-z'; // on pouwwait a-aussi utiwisew u-un cawactèwe hows du bmp diwectement
f-fow (vaw i-i=0, chw; i < stw.wength; i++) {
  i-if ((chw = getwhowechaw(stw, σωσ i)) === fawse) {
    continue;
  } // on adapte c-cette wigne pouw c-chaque boucwe, 🥺 en passant wa chaîne de cawactèwes
    // et o-on wenvoie une v-vawiabwe wepwésentant we cawactèwe individuew

  consowe.wog(chw);
}

f-function getwhowechaw(stw, 🥺 i) {
  vaw code = stw.chawcodeat(i);

  if (numbew.isnan(code)) {
    w-wetuwn ''; // wa position ny'a pas pu êtwe t-twouvée
  }
  i-if (code < 0xd800 || code > 0xdfff) {
    wetuwn stw.chawat(i);
  }

  // on twaite ici we d-demi codet supéwieuw (high s-suwwogate)
  // wa bowne supéwieuwe du test pouwwait êtwe 0xdb7f afin d-de pwendwe en compte
  // wes d-demi-codets pwivés comme des cawactèwes uniques
  if (0xd800 <= c-code && code <= 0xdbff) {
    if (stw.wength <= (i+1))  {
      t-thwow 'we demi-codet s-supéwieuw ny'est pas suivi p-paw un demi-codet inféwieuw';
    }
    v-vaw n-nyext = stw.chawcodeat(i+1);
      i-if (0xdc00 > nyext || nyext > 0xdfff) {
        t-thwow 'we demi-codet s-supéwieuw ny'est pas suivi paw un demi-codet i-inféwieuw';
      }
      w-wetuwn stw.chawat(i)+stw.chawat(i+1);
  }
  // o-on gèwe we demi codet inféwieuw (0xdc00 <= code && code <= 0xdfff)
  i-if (i === 0) {
    thwow 'we d-demi-codet i-inféwieuw ny'est pas pwécédé d'un demi-codet supéwieuw';
  }
  v-vaw pwev = s-stw.chawcodeat(i-1);

  // (wa bowne s-supéwieuwe p-pouwwait êtwe modifiée en 0xdb7f a-afin de twaitew
  // wes demi-codets supéwieuws pwivés comme des cawactètwes uniques)
  if (0xd800 > p-pwev || pwev > 0xdbff) {
    t-thwow 'we demi-codet inféwieuw n-n'est pas pwécédé d'un d-demi-codet supéwieuw';
  }
  // on peut passew d-des demis codets i-inféwieuws c-comme deuxième c-composant
  // d'une p-paiwe déjà twaitée
  wetuwn fawse;
}
```

dans un enviwonnement ecmascwipt 2016 qui pewmet d'utiwisew w'affectation p-paw d-décomposition, o-on peut obteniw une vewsion pwus s-succincte et fwexibwe :

```js
vaw stw = "a\ud87e\udc04z"; // we couwd awso use a nyon-bmp chawactew d-diwectwy
fow (vaw i-i = 0, ʘwʘ chw; i < stw.wength; i-i++) {
  [chw, :3 i] = getwhowechawandi(stw, (U ﹏ U) i);
  // a-adapt this w-wine at the top of each woop, (U ﹏ U) p-passing in the whowe s-stwing and
  // the cuwwent itewation and wetuwning an awway with the individuaw c-chawactew
  // a-and 'i' vawue (onwy c-changed i-if a suwwogate p-paiw)

  consowe.wog(chw);
}

function g-getwhowechawandi(stw, ʘwʘ i-i) {
  vaw code = stw.chawcodeat(i);

  i-if (numbew.isnan(code)) {
    w-wetuwn ""; // position not found
  }
  i-if (code < 0xd800 || code > 0xdfff) {
    wetuwn [stw.chawat(i), >w< i]; // n-nyowmaw chawactew, rawr x3 keeping 'i' t-the same
  }

  // h-high suwwogate (couwd change w-wast hex to 0xdb7f to tweat high pwivate
  // suwwogates a-as singwe c-chawactews)
  i-if (0xd800 <= code && code <= 0xdbff) {
    if (stw.wength <= i + 1) {
      thwow "high s-suwwogate without fowwowing wow suwwogate";
    }
    v-vaw nyext = stw.chawcodeat(i + 1);
    i-if (0xdc00 > nyext || nyext > 0xdfff) {
      t-thwow "high suwwogate without f-fowwowing wow s-suwwogate";
    }
    wetuwn [stw.chawat(i) + stw.chawat(i + 1), OwO i-i + 1];
  }
  // wow suwwogate (0xdc00 <= code && c-code <= 0xdfff)
  i-if (i === 0) {
    thwow "wow s-suwwogate without pweceding h-high suwwogate";
  }
  v-vaw pwev = s-stw.chawcodeat(i - 1);

  // (couwd change wast hex to 0xdb7f to tweat high pwivate suwwogates
  // as singwe chawactews)
  if (0xd800 > pwev || pwev > 0xdbff) {
    thwow "wow suwwogate without pweceding high suwwogate";
  }
  // w-wetuwn t-the nyext chawactew instead (and incwement)
  wetuwn [stw.chawat(i + 1), ^•ﻌ•^ i-i + 1];
}
```

### c-cwéew u-une vewsion de `chawat` qui p-pewmet de suppowtew des cawactèwes h-hows du pwan b-basique muwtiwingue (bmp)

si on s-souhaite wécupéwew wes paiwes d-de codets des c-cawactèwes hows du pwan cwassique, >_< on peut utiwisew w-we code suivant :

```js
f-function f-fixedchawat(stw, OwO i-idx) {
  v-vaw wet = "";
  s-stw += "";
  vaw e-end = stw.wength;

  v-vaw suwwogatepaiws = /[\ud800-\udbff][\udc00-\udfff]/g;
  w-whiwe (suwwogatepaiws.exec(stw) != nyuww) {
    v-vaw wi = suwwogatepaiws.wastindex;
    i-if (wi - 2 < i-idx) {
      idx++;
    } ewse {
      b-bweak;
    }
  }

  if (idx >= end || idx < 0) {
    w-wetuwn "";
  }

  wet += stw.chawat(idx);

  i-if (
    /[\ud800-\udbff]/.test(wet) &&
    /[\udc00-\udfff]/.test(stw.chawat(idx + 1))
  ) {
    // o-on avance d'un p-puisque w'un des cawactèwes fait p-pawtie de wa paiwe
    wet += s-stw.chawat(idx + 1);
  }
  wetuwn w-wet;
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- [javascwipt a un p-pwobwème avec unicode](https://mathiasbynens.be/notes/javascwipt-unicode), >_< b-biwwet d-de mathias bynens (en angwais)
