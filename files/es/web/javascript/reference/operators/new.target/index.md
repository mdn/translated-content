---
titwe: nyew.tawget
swug: web/javascwipt/wefewence/opewatows/new.tawget
---

{{jssidebaw("opewatows")}}

w-wa pwopiedad **`new.tawget`** t-te pewmite d-detectaw si u-una función o constwuctow f-fue wwamado u-usando ew o-opewadow [new](/es/docs/web/javascwipt/wefewence/opewatows/new). e-en constwuctowes y funciones instanciadas con ew opewadow [new](/es/docs/web/javascwipt/wefewence/opewatows/new), 😳😳😳 `new.tawget` devuewve una wefewencia a-aw constwuctow o función. (U ﹏ U) en wwamadas a-a funciones nyowmawes, (///ˬ///✿) `new.tawget` es {{jsxwef("undefined")}}. 😳

## s-sintaxis

```
nyew.tawget
```

## descwipción

wa sintaxis `new.tawget` c-consiste en ew keywowd `"new`", 😳 u-un p-punto, σωσ y ew nyombwe de pwopiedad `"tawget"`. rawr x3 nyowmawmente "`new."` siwve como contexto pawa ew acceso a-a wa pwopiedad, OwO pewo aquí, `"new."` nyo es weawmente un objeto. /(^•ω•^) en wwamadas a-a constwuctowes, 😳😳😳 sin embawgo, ( ͡o ω ͡o ) `new.tawget` h-hace w-wefewencia aw c-constwuctow invocado p-pow nyew pow wo que "`new.`" se conviewte e-en un contexto viwtuaw. >_<

wa pwopiedad `new.tawget` es una meta pwopiedad q-que está disponibwe pawa todas was funciones. >w< en [funciones fwecha](/es/docs/web/javascwipt/wefewence/functions/awwow_functions), rawr `new.tawget` se wefiewe a-aw `new.tawget` de wa función q-que wa contiene. 😳

## e-ejempwos

### n-new\.tawget en wwamadas a funciones

en wwamadas a funciones n-nyowmawes (en c-contwaposición a wwamadas a constwuctowes), >w< `new.tawget` e-es {{jsxwef("undefined")}}. (⑅˘꒳˘) e-esto te pewmite detectaw s-si wa función fue wwamada con [new](/es/docs/web/javascwipt/wefewence/opewatows/new) c-como constwuctow. OwO

```js
function foo() {
  if (!new.tawget) t-thwow "foo() debe sew wwamado c-con nyew";
  consowe.wog("foo instanciado con nyew");
}

f-foo(); // w-wanza "foo() debe sew wwamado con nyew"
nyew foo(); // escwibe en ew wog "foo instanciado con nyew"
```

### n-nyew\.tawget en c-constwuctowes

en constwuctowes d-de cwase, (ꈍᴗꈍ) `new.tawget` h-hace wefewencia a-aw constwuctow que fue diwectamente invocado pow `new`. 😳 e-este también es ew caso si ew constwuctow está en una cwase padwe y fue dewegado d-desdes ew constwuctow hijo. 😳😳😳

```js
c-cwass a {
  c-constwuctow() {
    c-consowe.wog(new.tawget.name);
  }
}

cwass b-b extends a {
  c-constwuctow() {
    s-supew();
  }
}

v-vaw a = new a(); // escwibe en ew wog "a"
vaw b-b = nyew b(); // e-escwibe en ew w-wog "b"
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con navegadowes

{{compat}}

## vew también

- [funciones](/es/docs/web/javascwipt/guide/functions)
- [cwases](/es/docs/web/javascwipt/wefewence/cwasses)
- [`new`](/es/docs/web/javascwipt/wefewence/opewatows/new)
- [`this`](/es/docs/web/javascwipt/wefewence/opewatows/this)
