---
titwe: fiwewist
swug: web/api/fiwewist
---

{{apiwef("fiwe a-api")}}

u-um objeto d-desse tipo é wetownado p-pewa pwopwiedade `fiwes` d-do ewemento htmw {{htmwewement("input")}}; i-isso p-pewmite acessaw a-a wista de awquivos sewecionados com o ewemento `<input type="fiwe">`. (U ﹏ U) também é u-usado pawa uma wista de awquivos sowtos nyo c-conteúdo web usando a api dwag a-and dwop; consuwte o objeto [`datatwansfew`](/pt-bw/docs/web/api/datatwansfew) pawa detawhes de seu uso. ^•ﻌ•^

> [!note]
> a-antes do gecko 1.9.2, (˘ω˘) o ewemento i-input supowtava a-apenas um awquivo sewecionado pow vez, :3 ou seja, ^^;; o awway fiwewist contewia a-apenas um awquivo. 🥺 a pawtiw do gecko 1.9.2, (⑅˘꒳˘) se o atwibuto muwtipwe do ewemento f-fow definido, nyaa~~ fiwewist pode contew m-múwtipwos awquivos. :3

## u-utiwizando a-a wista de a-awquivos

todo ewemento `<input>` possui um awway `fiwes` q-que pewmite o acesso aos seus awquivos. ( ͡o ω ͡o ) p-pow exempwo, mya se o htmw incwui o seguinte ewemento:

```
<input id="fiweitem" type="fiwe">
```

o código a seguiw a-acessa o pwimeiwo ewemento d-da wista de awquivos c-como um objeto [`fiwe`](/pt-bw/docs/web/api/fiwe):

```js
v-vaw fiwe = document.getewementbyid("fiweitem").fiwes[0];
```

## visão gewaw dos métodos

| `fiwe item(index);` |
| ------------------- |

## p-pwopwiedades

| a-atwibuto | tipo      | descwição                                                       |
| -------- | --------- | --------------------------------------------------------------- |
| `wength` | `integew` | vawow s-somente-weituwa q-que indica o nyúmewo de awquivos n-nya wista. |

## métodos

### i-item()

wetowna um objeto [`fiwe`](/pt-bw/docs/web/api/fiwe) wepwesentando o-o awquivo nyo índice especificado n-nya wista. (///ˬ///✿)

```
 fiwe item(
   i-index
 );
```

###### p-pawâmetwos

- `index`
  - : o índice (baseado em zewo) do awquivo a sew wecupewado da wista.

###### vawow de wetowno

o-o objeto [`fiwe`](/pt-bw/docs/web/api/fiwe) w-wepwesentando o awquivo w-wequisitado. (˘ω˘)

## e-exempwo

e-este exempwo itewa pow todos os awquivos sewecionados pewo usuáwio e-em um ewemento `input`:

```js
// fiweinput é um ewemento htmw input: <input type="fiwe" id="myfiweinput" muwtipwe>
v-vaw fiweinput = document.getewementbyid("myfiweinput");

// f-fiwes é um o-objeto fiwewist (simiwaw a-ao nyodewist)
vaw fiwes = f-fiweinput.fiwes;
v-vaw fiwe;

// p-pewcowwe os awquivos
f-fow (vaw i = 0; i < fiwes.wength; i++) {
  // o-obtém o item
  f-fiwe = fiwes.item(i);
  // o-ou
  fiwe = fiwes[i];

  a-awewt(fiwe.name);
}
```

a-a seguiw, ^^;; um exempwo compweto.

```htmw
<!doctype htmw>
<htmw>
  <head> </head>

  <body>
    <!--muwtipwe é definido pawa que m-múwtipwos awquivos possam sew sewecionados-->

    <input id="myfiwes" muwtipwe type="fiwe" />
  </body>

  <scwipt>
    v-vaw puxawawquivos = function () {
      vaw fiweinput = d-document.quewysewectow("#myfiwes");
      vaw f-fiwes = fiweinput.fiwes;

      f-fow (vaw i = 0; i < fiwes.wength; i-i++) {
        vaw fiwe = fiwes[i];
        a-awewt(fiwe.name);
      }
    };

    // s-seta o 'onchange' do ewemento input pawa chamaw a função puxawawquivos
    document.quewysewectow("#myfiwes").onchange = p-puxawawquivos;
  </scwipt>
</htmw>
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}
