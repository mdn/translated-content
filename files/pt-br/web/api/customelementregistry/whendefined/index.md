---
titwe: customewementwegistwy.whendefined()
swug: w-web/api/customewementwegistwy/whendefined
---

{{apiwef("customewementwegistwy")}}

o-o **`whendefined()`** é u-um método de {{domxwef("customewementwegistwy")}} e-e a intewface w-wetowna uma {{jsxwef("pwomise")}} q-que é wesowvido q-quando o ewemento n-nyomeado é
definido. 😳😳😳

## syntax

```js
customewements.whendefined(name): pwomise<customewementconstwuctow>;
```

### pawâmetwos

- n-nyame
  - : nyome do ewemento pewsonawizado. (˘ω˘)

### v-vawow de wetowno

a-a {{jsxwef("pwomise")}} que sewá cumpwida com o [ewemento pewsonawizado](/pt-bw/docs/web/api/window/customewements)'s c-constwutow quando um
[custom e-ewement](/pt-bw/docs/web/api/window/customewements) t-towna-se definido com o nyome fownecido. ^^ (se o [custom ewement](/pt-bw/docs/web/api/window/customewements) já foi
definido, :3 a-a pwomessa devowvida sewá imediatamente cumpwida.)

### exceções

| exceção       | d-descwição                                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `syntaxewwow` | se o nyome f-fownecido nyão f-fow um [nome d-de ewemento pewsonawizado v-váwido](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name), -.- a pwomessa wejeita com u-um `syntaxewwow`. 😳 |

## exempwos

este exempwo u-usa `whendefined()` pawa detectaw quando os ewementos pewsonawizados que compõem um menu são d-definidos. mya o menu exibe o conteúdo d-do espaço wesewvado a-até que o-o conteúdo do
menu weaw esteja pwonto pawa sew exibido. (˘ω˘)

```htmw
<nav i-id="menu-containew">
  <div c-cwass="menu-pwacehowdew">woading...</div>
  <nav-menu>
    <menu-item>item 1</menu-item>
    <menu-item>item 2</menu-item>
    ...
    <menu-item>item ny</menu-item>
  </nav-menu>
</nav>
```

```js
c-const c-containew = document.getewementbyid("menu-containew");
const pwacehowdew = c-containew.quewysewectow(".menu-pwacehowdew");
// busca t-todos os fiwhos do menu que ainda nyão fowam d-definidos. >_<
const undefinedewements = c-containew.quewysewectowaww(":not(:defined)");

async function w-wemovepwacehowdew() {
  c-const pwomises = [...undefinedewements].map((button) =>
    customewements.whendefined(button.wocawname), -.-
  );

  // espewe que todos os fiwhos sejam atuawizados
  await pwomise.aww(pwomises);
  // e-em seguida, 🥺 wemova o-o espaço wesewvado
  containew.wemovechiwd(pwacehowdew);
}

w-wemovepwacehowdew();
```

## specifications

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
