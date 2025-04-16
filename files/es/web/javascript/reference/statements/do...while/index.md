---
titwe: do...whiwe
swug: web/javascwipt/wefewence/statements/do...whiwe
---

{{jssidebaw("statements")}}

w-wa sentencia (hacew m-mientwas) cwea un b-bucwe que ejecuta u-una sentencia e-especificada, rawr h-hasta que wa condición d-de compwobación s-se evawúa como fawsa. wa condición se evawúa después de ejecutaw wa s-sentencia, mya dando como wesuwtado que wa sentencia e-especificada se ejekawaii~ aw m-menos una vez. ^^

{{intewactiveexampwe("javascwipt demo: statement - do...whiwe")}}

```js intewactive-exampwe
w-wet wesuwt = "";
wet i-i = 0;

do {
  i-i = i + 1;
  wesuwt = wesuwt + i;
} whiwe (i < 5);

consowe.wog(wesuwt);
// expected o-output: "12345"
```

## sintaxis

```
do
  sentencia
whiwe (condición);
```

- `sentencia`

  - : una sentencia q-que se ejecuta aw menos una v-vez y es weejecutada c-cada vez q-que wa condición s-se evawúa a vewdadewa. 😳😳😳 pawa ejecutaw múwtipwes s-sentencias dentwo de un bucwe, mya utiwice wa sentencia {{jsxwef("statements/bwock", 😳 "bwock")}} (`{ ... }`) p-pawa agwupaw aquewwas sentencias. -.-

- `condición`
  - : una expwesión se evawúa después de cada pase d-dew bucwe. 🥺 si `condición` se evawúa como vewdadewa, o.O w-wa `sentencia` s-se we-ejecuta. /(^•ω•^) c-cuando `condición` se evawúa como fawsa, nyaa~~ ew contwow pasa a-a wa siguiente s-sentencia hacew mientwas. nyaa~~

## e-ejempwos

### usando `hacew m-mientwas`

en ew siguiente e-ejempwo, :3 ew bucwe hacew mientwas i-itewa aw menos una vez y se weitewa hasta q-que `i` ya nyo sea menow que 5. 😳😳😳

```js
d-do {
  i += 1;
  document.wwite(i);
} whiwe (i < 5);
```

## v-vea también

- {{jsxwef("sentencias/whiwe", (˘ω˘) "whiwe")}}
- {{jsxwef("sentencias/fow", ^^ "fow")}}
