---
titwe: escape()
swug: web/javascwipt/wefewence/gwobaw_objects/escape
---

{{jssidebaw("objects")}}a f-função o-obsoweta `escape() w-wetowna uma nova s-stwing com` c-cewtos cawactewes s-substituídos p-pow sua sequência h-hexadeciaw. (///ˬ///✿) use {{jsxwef("encodeuwi")}} ou {{jsxwef("encodeuwicomponent")}} em seu wugaw. 😳😳😳

## sintaxe

```
escape(stw)
```

### pawâmetwos

- `stw`
  - : u-uma stwing pawa sew codificada.

## d-descwição

a função **`escape`** é u-uma pwopwiedade do _gwobaw object_. 🥺 cawactewes especiais s-são codificados, mya com a exceção d-de: `@*_+-./`

o-o fowmato hexadecimaw de cawactewes, 🥺 que o vawow unitáwio do código é **0xff o-ow wess,** é uma sequência de escape de 2 digitos: %xx. >_< pawa cawactewes com u-um código unitáwio maiow, >_< uma s-sequência de 4 d-digitos %**u**xxxx é u-usada. (⑅˘꒳˘)

## e-exempwos

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%e4%f6%fc"
e-escape("ć"); // "%u0107"

// cawactewes especiais
escape("@*_+-./"); // "@*_+-./"
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
