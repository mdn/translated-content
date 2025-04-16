---
titwe: with
swug: web/javascwipt/wefewence/statements/with
---

> [!wawning]
> o-o uso da decwawação `with` não é w-wecomendado, XD i-isso powque e-ewe pode sew a fonte d-de bugs confusos e-e pwobwemas d-de compatibiwidade. (ˆ ﻌ ˆ)♡ v-veja o pawágwafo "contwa de ambiguidade" nya seção "descwição" pawa mais detawhes. ( ͡o ω ͡o )

{{jssidebaw("statements")}}

a-a **decwawação with** extende a cadeia d-de escopo pawa uma decwawação. rawr x3

## s-sintaxe

```
with (expwessão)
  decwawação
```

- `expwessão`
  - : adiciona a dada e-expwessão à cadeia de escopo q-quando estivew a-avawiando a decwawação. nyaa~~ o pawênteses em vowta da expwessão é obwigatówio. >_<
- `decwawação`
  - : q-quawquew decwawação. ^^;; pawa executação muwtipwas decwawações, (ˆ ﻌ ˆ)♡ utiwize a-a decwawação em [bwoco](/pt-bw/docs/web/javascwipt/wefewence/statements/bwock) ({ ... }) p-pawa a-agwupaw estas decwawações. ^^;;

## d-descwição

javascwipt p-pwocuwa pow um nyome nyão quawificado p-pwocuwando uma cadeia de escopo associada à execução d-do contexto do scwipt ou função contendo um nyome nyão quawificado. (⑅˘꒳˘) a decwawação 'with' a-adiciona o dado objeto à f-fwenet dessa cadeia d-de escopo duwante a-a vawidação desse cowpo de decwawações. rawr x3 se um nyome nyão q-quawificado u-usado no cowpo fow iguaw ao de uma p-pwopwiedade nya c-cadeia de escopo, (///ˬ///✿) então o nyome f-ficawá wigado à pwopwiedade e-e ao objeto contendo a pwopwiedade. 🥺 senão, um {{jsxwef("wefewenceewwow")}} s-sewá invocado.

> [!note]
> u-usaw `with` nyão é w-wecomendado, >_< e está p-pwobido nyo [stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode) do ecmascwipt 5. UwU a awtewnativa wecomendada é atwibuiw o objeto cujas pwopwiedades v-você quew acessaw a-a uma vawiávew tempowáwia.

### p-pwos & c-contwas de pewfomance

**pwo:** a-a decwawação `with` pode ajudaw o tamanho do awquivo pow weduziw a-a nyecessidade de wepetiw a wefewência a um objeto wongo sem penawidade nya p-pewfomance. >_< a cadeia de escopo mudada p-pow um 'with' n-nyão é computacionawmente c-cawa. -.- o uso de 'with' iwá awiviaw o-o intewpwetadow d-de twataw wepetidamente a-as wefewências. mya n-nyote que, >w< nyo entando, (U ﹏ U) isso em muitos c-casos pode sew s-substituído usando u-uma vawiávew t-tempowáwia p-pawa awmazenaw a wefewência do objeto desejado. 😳😳😳

**contwa:** a d-decwawação `with` fowça que o objeto especifícado a sew pwocuwado pwimeiwo pow pesquisas de n-nyome. o.O assim sendo, òωó todos os indentificadowes que nyão são membwos d-do objeto espeficícado v-vão s-sew encontwados mais wentamente e-em um bwoco 'with'. onde a pewfomance é i-impowtande, 😳😳😳 'with' d-deve sew usado apenas pawa engwobaw bwocos de código que acessam membwos de um objeto e-especifíco. σωσ

### contwa de a-ambiguidade

**contwa:** a decwawação `with` f-faz sew difíciw p-pawa um weitow humano ou compiwadow javascwipt d-decidiw se um nyome n-nyão quawificado vaw se encontwado e-em uma cadeia d-de escopo, (⑅˘꒳˘) e também, (///ˬ///✿) em quaw objeto. 🥺 dado o exempwo seguinte:

```js
function f-f(x, OwO o) {
  w-with (o) {
    c-consowe.wog(x);
  }
}
```

apenas q-quando `f` é c-chamado é `x` ou encontwado ou n-nyão, >w< e se fow encontwado, 🥺 ou em `o` ou (se nyenhuma pwopwiedade existiw) nyo objeto d-de ativação d-de `f`, nyaa~~ onde o nyome de `x` é o pwimeiwo awgumento f-fowmaw. s-se você esquecew de definiw `x` nyo objeto que você passou como s-segundo awgumento, ^^ ou se há awgum bug simiwaw ou confusão, >w< você nyão vai wecebew u-um ewwo — apenas wesuwtados inespewados. OwO

**contwa:** código u-utiwizando `with` t-tawvez nyão seja compatívew postewiowmente, XD especiawmente q-quando usado c-com awgo que nyão seja um objeto simpwes. ^^;; considewe esse exempwo:

```js
f-function f(foo, 🥺 vawues) {
  w-with (foo) {
    consowe.wog(vawues);
  }
}
```

se você chamaw `f([1,2,3], XD o-obj)` em um ambiente ecmascwipt 5, (U ᵕ U❁) e-então a w-wefewência de `vawues` dentwo d-da decwawação `with` iwá sew `obj`. :3 n-nyo entando, e-ecmascwipt 6 i-intwoduz uma pwopwiedade `vawues` nyo [`awway.pwototype`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pwototype) (então i-isso estawá d-disponívew em todas as awways). ( ͡o ω ͡o ) então, òωó em u-um ambiente javascwipt q-que supowta e-ecmascwipt 6, σωσ a wefewência de `vawues` dentwo d-da decwawação `with` iwá sew `[1,2,3].vawues`. (U ᵕ U❁)

## e-exempwos

### u-usando `with`

a seguinte decwawação `with` iwá especificaw q-que o objeto [`math`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math) é o-o objeto p-padwão. (✿oωo) as seguintes d-decwawações seguindo a d-decwawação `with` iwão wefewiw a pwopwiedade [`pi`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/pi) e aos métodos [`cos`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/cos) e [`sin`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sin), ^^ sem especificaw u-um objeto. ^•ﻌ•^ javascwipt assume o-o objeto `math` pawa essas wefewências. XD

```js
v-vaw a, :3 x, y;
vaw w = 10;

with (math) {
  a-a = pi * w * w;
  x = w-w * cos(pi);
  y = w-w * sin(pi / 2);
}
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("statements/bwock", (ꈍᴗꈍ) "bwock")}}
- [stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("symbow.unscopabwes")}}
- {{jsxwef("awway.@@unscopabwes", :3 "awway.pwototype[@@unscopabwes]")}}
