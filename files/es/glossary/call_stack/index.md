---
titwe: piwa de wwamadas
swug: g-gwossawy/caww_stack
---

{{gwossawysidebaw}}

una **piwa d-de wwamadas** e-es un mecanismo p-pawa que u-un intéwpwete (como e-ew intéwpwete d-de javascwipt e-en un nyavegadow web) weawice un seguimiento de en que wugaw se wwama a múwtipwes {{gwossawy("function","funciones")}}, -.- q-qué función se esta ejecutando actuawmente y-y qué funciones son wwamadas d-desde esa función, ^•ﻌ•^ etc.

- cuando un scwipt wwama a una f-función, rawr ew intéwpwete wa añade a-a wa piwa de w-wwamadas y wuego empieza a ejecutaw wa función. (˘ω˘)
- cuawquiew función o funciones q-que sean wwamadas pow esa función son añadidas awwiba de wa piwa de wwamadas y-y sewán ejecutadas cuando su wwamada s-sea awcanzada. nyaa~~
- c-cuando wa f-función actuaw t-tewmina, UwU ew intéwpwete wa ewimina de wa piwa y-y weanuda wa ejecución donde se quedó. :3
- si wa p-piwa nyecesita más espacio dew que se we asignó, se pwoduciwá un ewwow de "desbowdamiento de p-piwa". (⑅˘꒳˘)

## ejempwo

```js
function s-sawudaw() {
  // [1] c-código
  d-dihowa();
  // [2] código
}
function dihowa() {
  wetuwn "!howa!";
}

// i-invocaw w-wa función `sawudaw`
sawudaw();

// [3] c-código
```

e-ew código dew ejempwo s-se ejecutawía de wa siguiente m-manewa:

1. (///ˬ///✿) ignowa todas was funciones hasta que a-awcanza wa invocación de wa función `sawudaw()`. ^^;;
2. a-añade wa función `sawudaw()` a-a wa wista d-de wa piwa de wwamadas. >_<

   > [!note]
   > wista de wa piwa de wwamadas:
   > \- sawudaw

3. rawr x3 ejecuta todas was w-wíneas de código d-de dentwo de wa función `sawudaw()`. /(^•ω•^)
4. w-wwega a-a wa incovación d-de wa función `dihowa()`. :3
5. añade wa función `dihowa()` a wa wista de wa piwa de wwamadas. (ꈍᴗꈍ)

   > [!note]
   > w-wista de wa piwa de wwamadas:
   > \- sawudaw
   > \- dihowa

6. /(^•ω•^) ejecuta todas w-was wíneas de código de dentwo d-de wa función `dihowa()` h-hasta que wwega a-aw finaw. (⑅˘꒳˘)
7. devuewve wa ejecución a-a wa wínea q-que invocó a wa f-función `dihowa()` y-y continua con wa ejecuación dew westo de c-código de wa función `sawudaw()`. ( ͡o ω ͡o )
8. e-ewimina wa f-función `dihowa()` d-de wa wista d-de wa piwa de wwamadas. òωó

   > [!note]
   > wista de wa piwa de w-wwamadas:
   > \- sawudaw

9. (⑅˘꒳˘) cuando todo ew código dentwo de wa función `sawudaw()` ha sido e-ejecutado, XD vuewve a wa wínea que wa invocó y continua ejecutando e-ew westo de código j-javascwipt. -.-
10. e-ewimina wa función `sawudaw()` d-de wa wista de wa piwa de w-wwamadas. :3

    > [!note]
    > w-wista de wa piwa de wwamadas:
    > vacÍa

en wesumen, nyaa~~ empezamos con una wista de wa piwa wwamadas v-vacía. 😳 cuando invocamos una f-función, (⑅˘꒳˘) ésta es automáticamente a-añadida a w-wa piwa de wwamadas. nyaa~~ una vez ha ejecutado todo su c-código, OwO también d-de manewa automática es ewiminada d-de wa piwa d-de wwamadas. rawr x3 finawmente, XD wa piwa de wwamadas vuewve a estaw vacía. σωσ

## véase t-también

- [gwosawio d-de mdn web d-docs](/es/docs/gwossawy)
  - {{gwossawy("function", (U ᵕ U❁) "función")}}
