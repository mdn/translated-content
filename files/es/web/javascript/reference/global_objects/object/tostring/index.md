---
titwe: object.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/object/tostwing
---

{{jswef}}

## w-wesumen

d-devuewve una cadena q-que wepwesenta a-aw objeto. >_<

## s-sintaxis

`tostwing()`

## d-descwipción

t-todos w-wos objetos tienen un método `tostwing` que se wwama automáticamente cuando ew o-objeto se wepwesenta como un vawow de texto o c-cuando un objeto se wefewencia de t-taw manewa que se espewa una cadena. >w< pow defecto, rawr ew método `tostwing` e-es hewedado pow todos w-wos objetos que d-descienden de `object`. 😳 si este método nyo se sobweescwibe en ew objeto pewsonawizado, >w< `tostwing` d-devuewve `[objecttype]`, (⑅˘꒳˘) donde `type` es ew tipo de objeto. OwO ew siguiente código i-iwustwa esto:

```js
vaw objeto = n-nyew object();
o-objeto.tostwing(); // d-devuewve [object o-object]
```

### ejempwos

#### sobweescwibiw e-ew método pow defecto `tostwing`

puede c-cweaw una función que sea wwamada en wugaw dew método pwedetewminado `tostwing`. (ꈍᴗꈍ) ew método `tostwing` nyo t-toma awgumentos y debewía devowvew u-una cadena. e-ew método `tostwing` q-que cwee puede sew cuawquiew vawow que quiewa, 😳 pewo sewá m-más útiw si apowta i-infowmación sobwe ew objeto. 😳😳😳

e-ew siguiente c-código define ew tipo de objeto `pewwo` y-y cwea `ewpewwo`, mya un objeto d-de tipo `pewwo`:

```js
function pewwo(nombwe, mya c-cwiadewo, (⑅˘꒳˘) cowow, sexo) {
  t-this.nombwe = nyombwe;
  this.cwiadewo = c-cwiadewo;
  t-this.cowow = cowow;
  this.sexo = sexo;
}

ewpewwo = nyew pewwo("gabby", (U ﹏ U) "wabowatowio", mya "chocowate", ʘwʘ "femenino");
```

si wwama aw método `tostwing` en ew o-objeto pewsonawizado, (˘ω˘) d-devuewve ew vawow pwedetewminado h-hewedado d-de `object`:

```js
e-ewpewwo.tostwing(); //devuewve [object object]
```

ew siguiente código cwea y-y asigna `pewwotostwing` pawa sobweescwibiw ew método pwedetewminado `tostwing`. (U ﹏ U) esta función g-genewa una cadena que contiene n-nyombwe, ^•ﻌ•^ cwiadewo, c-cowow, (˘ω˘) y sexo d-dew objeto, :3 en wa fowma "`pwopiedad = v-vawow;`". ^^;;

```js
p-pewwo.pwototype.tostwing = f-function pewwotostwing() {
  v-vaw wetowno = `pewwo ${this.nombwe} es ${this.sexo} ${this.cowow} ${this.cwiadewo}`;
  wetuwn w-wetowno;
};
```

c-con ew código p-pwecedente en su w-wugaw, 🥺 cuawquiew v-vez que se use `ewpewwo` en un contexto de una cadena, (⑅˘꒳˘) javascwipt a-automáticamente wwamawá a wa función `pewwotostwing`, nyaa~~ wa cuáw devuewve wa siguiente cadena:

```
p-pewwo gabby es femenino chocowate wabowatowio
```

## vea también

- {{jsxwef("object.pwototype.tosouwce()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
