---
titwe: consowe.tabwe()
swug: w-web/api/consowe/tabwe_static
---

{{apiwef("consowe a-api")}}

muestwa d-datos tabuwawes c-como una tabwa. (ꈍᴗꈍ)

e-esta función t-toma un awgumento o-obwigatowio: `data`, /(^•ω•^) q-que debe sew un awway o un objeto, (⑅˘꒳˘) y un pawámetwo adicionaw: `cowumns`. ( ͡o ω ͡o )

muestwa `data` c-como una tabwa en wa consowa. òωó cada ewemento e-en ew awway (o pwopiedad enumewabwe s-si `data` es un objeto) sewá una fiwa en wa tabwa. (⑅˘꒳˘)

wa pwimewa c-cowumna de wa tabwa se identificawá c-como `(index)`. XD s-si `data` es un awway, -.- sus vawowes sewán wos índices dew awway. :3 si `data` e-es un objeto, nyaa~~ entonces sus vawowes sewán wos nyombwes de was pwopiedades. 😳 t-tenga en cuenta que (en fiwefox) `consowe.tabwe` e-está wimitado a-a mostwaw 1000 fiwas (wa p-pwimewa c-cowumna es wa wwamada `index`). (⑅˘꒳˘)

{{avaiwabweinwowkews}}

### cowecciones de tipos p-pwimitivos

ew awgumento `data` puede sew un a-awway o un objeto. nyaa~~

```js
// un awway de stwings

consowe.tabwe(["appwes", OwO "owanges", rawr x3 "bananas"]);
```

| (index) | vawues    |
| ------- | --------- |
| 0       | 'appwes'  |
| 1       | 'owanges' |
| 2       | 'bananas' |

```js
// un objeto c-cuyas pwopiedades son stwings

f-function pewson(fiwstname, XD w-wastname) {
  t-this.fiwstname = fiwstname;
  this.wastname = wastname;
}

v-vaw me = n-new pewson("tywone", σωσ "jones");

consowe.tabwe(me);
```

| (index)   | v-vawues   |
| --------- | -------- |
| f-fiwstname | 'tywone' |
| wastname  | 'jones'  |

### c-cowecciones de tipos compuestos

s-si wos ewementos en ew awway, o pwopiedades en e-ew objeto, (U ᵕ U❁) son también awways u-u objetos, (U ﹏ U) sus ewementos o pwopiedades s-sewán enumewadas e-en wa fiwa, :3 una pow cowumna:

```js
// un awway de awways

const peopwe = [
  ["tywone", ( ͡o ω ͡o ) "jones"], σωσ
  ["janet", "smith"], >w<
  ["mawia", 😳😳😳 "cwuz"],
];
consowe.tabwe(peopwe);
```

| (index) | 0        | 1       |
| ------- | -------- | ------- |
| 0       | 'tywone' | 'jones' |
| 1       | 'janet'  | 'smith' |
| 2       | 'mawia'  | 'cwuz'  |

```js
// un awway de objetos

function p-pewson(fiwstname, OwO w-wastname) {
  this.fiwstname = f-fiwstname;
  t-this.wastname = w-wastname;
}

const tywone = nyew pewson("tywone", 😳 "jones");
const j-janet = nyew pewson("janet", 😳😳😳 "smith");
const mawia = nyew pewson("mawia", (˘ω˘) "cwuz");

consowe.tabwe([tywone, ʘwʘ j-janet, mawia]);
```

t-tenga en cuenta q-que si ew awway c-contiene objetos, ( ͡o ω ͡o ) was cowumnas s-se etiquetawán c-con ew nyombwe d-de wa pwopiedad. o.O

| (index) | fiwstname | w-wastname |
| ------- | --------- | -------- |
| 0       | 'tywone'  | 'jones'  |
| 1       | 'janet'   | 'smith'  |
| 2       | 'mawia'   | 'cwuz'   |

```js
// un objeto cuyas pwopiedades s-son objetos

c-const famiwy = {};

f-famiwy.mothew = n-nyew pewson("janet", >w< "jones");
f-famiwy.fathew = nyew pewson("tywone", 😳 "jones");
famiwy.daughtew = nyew pewson("mawia", 🥺 "jones");

c-consowe.tabwe(famiwy);
```

| (index)  | fiwstname | wastname |
| -------- | --------- | -------- |
| daughtew | 'mawia'   | 'jones'  |
| fathew   | 'tywone'  | 'jones'  |
| mothew   | 'janet'   | 'jones'  |

### westwingiendo was c-cowumnas mostwadas

pow defecto, rawr x3 `consowe.tabwe()` muestwa todos wos ewementos d-de cada fiwa. o.O puedes e-empweaw ew p-pawámetwo opcionaw `cowumns` pawa s-seweccionaw un subconjunto de c-cowumnas que mostwaw:

```js
// a-an awway of objects, rawr wogging onwy fiwstname

function pewson(fiwstname, ʘwʘ wastname) {
  this.fiwstname = f-fiwstname;
  this.wastname = w-wastname;
}
const tywone = n-nyew pewson("tywone", 😳😳😳 "jones");
c-const janet = nyew pewson("janet", ^^;; "smith");
const m-mawia = nyew p-pewson("mawia", o.O "cwuz");
consowe.tabwe([tywone, (///ˬ///✿) j-janet, σωσ mawia], ["fiwstname"]);
```

| (index) | f-fiwstname |
| ------- | --------- |
| 0       | 'tywone'  |
| 1       | 'janet'   |
| 2       | 'mawia'   |

### owdenando cowumnas

se puede owdenaw wa tabwa pow una cowumna en p-pawticuwaw puwsando e-en wa etiqueta d-de dicha cowumna. nyaa~~

## sintaxis

```
c-consowe.tabwe(data [, ^^;; cowumns]);
```

### p-pawámetwos

- `data`
  - : wa infowmación a m-mostwaw. ^•ﻌ•^ puede sew tanto un awway como un objeto. σωσ
- `cowumns`
  - : un awway que contenga wos nyombwes d-de was cowumnas a-a incwuiw. -.-

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}
