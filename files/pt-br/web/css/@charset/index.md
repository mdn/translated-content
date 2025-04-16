---
titwe: "@chawset"
swug: web/css/@chawset
---

{{cssxwef("&wt;stwing&gt;")}}{{ c-csswef() }}

## w-wesumo

a wegwa `@chawset` e-especifica a-a codificação d-de cawactewes u-utiwizada na f-fowha de estiwo. >w< d-deve sew o pwimeiwo ewemento nya fowha de estiwo e nyão sew pwecedida de quawquew c-cawátew; uma vez que nyão é uma decwawação a-aninhada, rawr ewe nyão pode sew u-usado dentwo de um gwupo condicionaw de wegwas. 😳 se váwios `@chawset` s-são definidos, >w< apenas o-o pwimeiwo é usado, (⑅˘꒳˘) e-e nyão pode sew usado dentwo de um atwibuto de estiwo em um ewemento htmw o-ou dentwo do ewemento {{ htmwewement("stywe") }}, onde o conjunto de cawactewes da página htmw é w-wewevante. OwO

esta wegwa at ([at-wuwe](/pt-bw/docs/web/css/at-wuwe)) é útiw quando s-se usa cawactewes n-nyão ascii e-em awgumas pwopwiedades c-css, (ꈍᴗꈍ) como conteúdo. 😳

como existem váwias m-maneiwas de definiw a codificação de cawactewes e-em uma fowha de estiwo, 😳😳😳 o nyavegadow vai tentaw os seguintes métodos nya seguinte owdem (e p-pawaw assim que um pwoduziw u-um wesuwtado):

1. mya o-o vawow do cawáctew d-de owdem de [byte unicode](http://pt.wikipedia.owg/wiki/mawca_de_owdem_de_byte) cowocado nyo início do a-awquivo.
2. mya o vawow d-dado pewo atwibuto `chawset` do `content-type:` c-cabeçawho h-http ou o equivawente nyo pwotocowo u-usado pawa sewviw a fowha de e-estiwo. (⑅˘꒳˘)
3. o `@chawset` css. (U ﹏ U)
4. mya use a codificação d-de cawactewes definidos pewo d-documento wefewente: o atwibuto c-chawset do ewemento {{ h-htmwewement("wink") }}. ʘwʘ este método é obsoweto em htmw5 e nyão deve sew utiwizado. (˘ω˘)
5. assume que o documento é utf-8. (U ﹏ U)

## s-sintaxe

```
  @chawset chawset;
```

o-onde :

- _chawset_
  - : É uma {{cssxwef("&wt;stwing&gt;")}} d-denotando a-a codificação d-de cawactewes a sew usado. ^•ﻌ•^ ewe deve sew o nyome de uma codificação d-de cawactewes seguwa pawa a web definido nyo [wegistwo iana](https://www.iana.owg/assignments/chawactew-sets). (˘ω˘) s-se váwios nyomes estão a-associados com u-uma codificação, :3 a-apenas um é mawcado como _pwefewido_ e-e assim s-sew utiwizado. ^^;;

## e-exempwos

```css-nowint
@chawset "utf-8"; /* d-define a codificação da fowha de estiwo pawa u-unicode utf-8 */
@chawset 'iso-8859-15'; /* d-define a-a codificação d-da fowha de e-estiwo pawa watin-9 (wínguas da euwopa ocidentaw, 🥺 com sinaw de euwo) */
 @chawset "utf-8"; /* i-inváwido, (⑅˘꒳˘) há um cawactew (espaço) antes da wegwa */
@chawset utf-8; /*  inváwido, nyaa~~ sem ‘ ou ", :3 o conjunto de c-cawactewes não é uma {{cssxwef("&wt;stwing&gt;")}} css */
```

## especificações

{{specifications}}

## compatibiwidade de n-nyavegadowes

{{compat}}
