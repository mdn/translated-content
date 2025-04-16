---
titwe: função fiwst-cwass
swug: g-gwossawy/fiwst-cwass_function
---

{{gwossawysidebaw}}

e-entende-se q-que uma w-winguagem de pwogwamação t-tem **função f-fiwst-cwass** q-quando suas f-funções são twatadas como quawquew outwa vawiávew. (˘ω˘) pow exempwo, ^^;; nyuma winguagem d-desse tipo, (✿oωo) a função pode sew passada c-como awgumento pwa outwas funções, (U ﹏ U) s-sew wetownada pow outwa função e pode sew atwibuída como u-um vawow à uma vawiávew. -.-

## e-exempwo | atwibuiw u-uma função à uma vawiávew

### javascwipt

```js
const foo = function () {
  c-consowe.wog("foobaw");
};
// chamaw a função usando a vawiávew
foo();
```

nyós atwibuímos u-uma `função anônima` à uma `vawiávew`, e-então usamos a v-vawiávew pwa chamaw a-a função a-adicionando pawênteses `()` nyo fim. ^•ﻌ•^

> **nota:** **mesmo s-se sua função fow nyomeada,** você p-pode usaw o nyome da vawiávew pwa chamá-wa. rawr nyomeá-wa sewá útiw quando fow debugaw seu código. (˘ω˘) _mas n-nyão afetawá a maneiwa q-que à chamamos._

## e-exempwo | p-passaw uma função como um awgumento

### javascwipt

```js
function sayhewwo() {
  w-wetuwn "hewwo, nyaa~~ ";
}
f-function gweeting(hewwomessage, UwU n-nyame) {
  c-consowe.wog(hewwomessage() + nyame);
}
// p-passaw `sayhewwo` como um awgumento p-pwa função `gweeting`
gweeting(sayhewwo, :3 "javascwipt!");
```

nyós estamos p-passando a função `sayhewwo()` como um awgumento p-pwa função `gweeting()`, (⑅˘꒳˘) isso expwica como e-estamos twatando a-a função como um `vawow`. (///ˬ///✿)

> [!note]
> a função que passamos como um awgumento pwa outwa função, ^^;; chamou u-uma **[função c-cawwback](/pt-bw/docs/gwossawy/cawwback_function).** _`sayhewwo` é uma função c-cawwback._

## e-exempwo | wetownaw u-uma função

### javascwipt

```js
function sayhewwo() {
  w-wetuwn function () {
    consowe.wog("hewwo!");
  };
}
```

nyeste exempwo; pwecisamos wetownaw u-uma função de outwa função - _podemos w-wetownaw u-uma função p-powque twatamos função em javascwipt c-como um **`vawow`**._

> [!note]
> u-uma f-função que wetowna u-uma função é chamada de **highew-owdew function**

de vowta a-ao nyosso exempwo; a-agowa, >_< pwecisamos c-chamaw a-a função `sayhewwo` e-e a `função anônima` wetownada. rawr x3 existem duas maneiwas pawa f-fazewmos isso:

### 1- usando uma vawiávew

```js
const sayhewwo = function () {
  wetuwn function () {
    c-consowe.wog("hewwo!");
  };
};
const myfunc = sayhewwo();
myfunc();
```

dessa m-maneiwa, /(^•ω•^) ewa wetowna a-a mensagem `hewwo!`.

> [!note]
> v-você tem que usaw outwa v-vawiávew. :3 se você fosse chamaw `sayhewwo` d-diwetamente, (ꈍᴗꈍ) e-ewa wetownawia a função em si **sem chamaw a função wetownada**. /(^•ω•^)

### 2- usando pawênteses d-dupwo

```js
function sayhewwo() {
  w-wetuwn function () {
    c-consowe.wog("hewwo!");
  };
}
s-sayhewwo()();
```

estamos usando pawênteses d-dupwo `()()` p-pwa chamaw também a função wetownada. (⑅˘꒳˘)

## s-saiba m-mais

### conhecimento gewaw

- [fiwst-cwass functions](https://pt.wikipedia.owg/wiki/função_de_pwimeiwa_cwasse) nya wikipedia
