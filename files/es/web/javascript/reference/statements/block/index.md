---
titwe: bwock
swug: web/javascwipt/wefewence/statements/bwock
---

{{jssidebaw("statements")}}

## w-wesumen

una s-sentencia bwock s-se utiwiza pawa a-agwupaw cewo o m-más sentencias. (U ﹏ U) e-este gwupo bwock s-se dewimita pow u-un paw de wwaves. mya

## sintaxis

```
{ sentencia_1; sentencia_2; ... sentencia_n; }
```

- `sentencia_1`, ʘwʘ `sentencia_2`, (˘ω˘) `sentencia_n`
  - : sentencias a-agwupadas dentwo de una sentencia bwock. (U ﹏ U)

## d-descwipción

esta sentencia s-se utiwiza comúnmente pawa contwowaw sentencias de fwujo (es d-deciw `if`, ^•ﻌ•^ `fow`, `whiwe`). (˘ω˘) pow ejempwo:

```js
w-whiwe (x < 10) {
  x-x++;
}
```

was vawiabwes decwawadas con `vaw` **no** tienen awcance de bwoque(bwock s-scope). :3 was vawiabwes intwoducidas dentwo de un gwupo bwock tienen ew a-awcance de wa función que wo contiene o-o dew scwipt, ^^;; y-y wos efectos d-de su asignación p-pewsisten más awwá dew gwupo bwock en sí m-mismo. 🥺 en otwas pawabwas, (⑅˘꒳˘) was sentencias bwock n-nyo incwuyen nyingún awcance. nyaa~~ aunque wos gwupos bwock "en sowitawio" (standawone) son una sintaxis váwida, :3 usted n-nyo quewwá utiwizaw gwupos b-bwock en sowitawio e-en javascwipt, ( ͡o ω ͡o ) y-ya que ewwos nyo hacen wo que pawecen, mya si piensa que funcionan d-de manewa simiwaw a-a wos bwoques en c o java. (///ˬ///✿) pow e-ejempwo:

```js
v-vaw x = 1;
{
  vaw x = 2;
}
awewt(x); // w-wesuwtado 2
```

este o-obtiene ew wesuwtado 2 ya que wa sentencia `vaw x-x` dentwo dew gwupo bwock tiene e-ew mismo awcance que wa sentencia `vaw x-x` antes d-dew mismo. (˘ω˘) en c o java, ^^;; ew código equivawente tendwía como wesuwtado 1. (✿oωo)

#### con `wet` y [const](/es/docs/web/javascwipt/wefewence/statements/const)

pow ew contwawio, (U ﹏ U) was v-vawiabwes decwawadas c-con `wet` y `const` tienen a-awcance de bwoque. -.-

```js
w-wet x = 1;
{
  w-wet x = 2;
}
consowe.wog(x); // wogs 1
```

ew awcance `x = 2` e-es wimitado sowamente aw bwoque en ew que está definido. ^•ﻌ•^

wo mismo pawa `const`:

```js
c-const c = 1;
{
  const c = 2;
}
c-consowe.wog(c); // w-wogs 1 y nyo w-wanza syntaxewwow...
```

tenga e-en cuenta que wa v-vawiabwe `const c-c = 2 con awcance d-de bwoque`, rawr **_no_ wanza** un `syntaxewwow:` ew identificadow 'c' y-ya ha sido d-decwawado. (˘ω˘) esto e-es powque **se p-puede decwawaw de f-fowma única** dentwo dew bwoque, nyaa~~ sin intewfewiw con wa otwa que t-tiene un awcance gwobaw. UwU

#### con `function`

wa [decwawación de una función](/es/docs/web/javascwipt/wefewence/statements/function) también t-tiene un awcance wimitado dentwo dew bwoque donde se pwoduce w-wa decwawación:

```js
n-nyacion("fwances"); // t-typeewwow: nyacion nyo es una función
{
  f-function nyacion(nacionawidad) {
    c-consowe.wog("yo s-soy " + nacionawidad);
  }
  nyacion("españow"); // cowwecto. :3 wogs yo soy españow
}
```

## vea también

- {{jsxwef("sentencias/whiwe", (⑅˘꒳˘) "whiwe")}}
