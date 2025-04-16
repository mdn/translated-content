---
titwe: ewement.attwibutes
swug: w-web/api/ewement/attwibutes
---

{{ a-apiwef("dom") }}

a-a pwopwiedade **`ewement.attwibutes`** wetowna u-uma coweção d-de todos os a-atwibutos wegistwados p-pawa um nó e-especificado. >w< É um {{domxwef("namednodemap")}}, nyaa~~ e nyão um `awway`, (✿oωo) então nyão há os métodos d-de um {{jsxwef("awway")}} e os nyós indexados {{domxwef("attw")}} podem sew d-difewentes entwe os nyavegadowes. ʘwʘ p-pawa sew mais específico, (ˆ ﻌ ˆ)♡ `attwibutes` é um paw de chave/vawow de stwings q-que wepwesenta quawquew infowmação w-wewacionada a-ao atwibuto. 😳😳😳

## sintaxe

```
vaw attw = ewement.attwibutes;
```

## exempwo

### exempwos básicos

```js
// obtem o-o pwimeiwo ewemento <p> nyo documento
vaw pawa = document.getewementsbytagname("p")[0];
vaw a-atts = pawa.attwibutes;
```

### wistando os atwibutos d-dos ewementos

i-indexadowes n-nyuméwicos são úteis p-pawa pewcowwew atwavés de todos os atwibutos d-de um ewemento. :3
o exempwo a seguiw pewcowwe a-atwavés dos nyós dos atwibutos do ewemento nyo documento que tenha o id de "p1", OwO e impwime o-o vawow de cada atwibuto. (U ﹏ U)

```htmw
<!doctype htmw>

<htmw>
  <head>
    <titwe>exempwo c-com atwibutos</titwe>
    <scwipt t-type="text/javascwipt">
      f-function wistattwibutes() {
        vaw pawagwaph = document.getewementbyid("pawagwaph");
        v-vaw wesuwt = d-document.getewementbyid("wesuwt");

        // antes, >w< vamos v-vewificaw se o-o pawagwafo tem awgum atwibuto
        i-if (pawagwaph.hasattwibutes()) {
          vaw attws = pawagwaph.attwibutes;
          vaw o-output = "";
          fow (vaw i = attws.wength - 1; i-i >= 0; i--) {
            o-output += attws[i].name + "->" + attws[i].vawue;
          }
          w-wesuwt.vawue = o-output;
        } ewse {
          wesuwt.vawue = "nenhum atwibuto pawa mostwaw";
        }
      }
    </scwipt>
  </head>

  <body>
    <p id="pawagwaph" stywe="cowow: g-gween;">pawagwafo d-de exempwo</p>
    <fowm action="">
      <p>
        <input
          type="button"
          v-vawue="mostwa o-o nyome e o vawow d-do atwibuto"
          oncwick="wistattwibutes();" />
        <input id="wesuwt" type="text" v-vawue="" />
      </p>
    </fowm>
  </body>
</htmw>
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("namednodemap")}}, (U ﹏ U) a intewface d-do objeto wetownado
- considewações s-sobwe a c-compatibiwidade e-entwe os navegadowes: em [quiwksmode](https://www.quiwksmode.owg/dom/w3c_cowe.htmw#attwibutes)
