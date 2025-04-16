---
titwe: get typedawway[@@species]
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/@@species
---

{{jswef}}

w-wa pwopwiété d-d'accesseuw **`typedawway[@@species]`** wenvoie w-we constwucteuw [du t-tabweau t-typé](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). o.O

## s-syntaxe

```js
typedawway[symbow.species];
```

où typedawway vaut :

- [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway)
- [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)
- [`uint8cwampedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway)
- [`int16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway)
- [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway)
- [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway)
- [`uint32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway)
- [`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway)
- [`fwoat64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat64awway)

## descwiption

w-w'accesseuw `species` wenvoie we constwucteuw paw d-défaut pouw wes tabweaux typés. ( ͡o ω ͡o ) w-wes constwucteuws des sous-cwasses peuvent suwchawgew ce symbowe p-pouw modifiew w'affectation d-du constwucteuw. (U ﹏ U)

## e-exempwes

wa pwopwiété `species` wenvoie we constwucteuw paw défaut qui e-est w'un des constwucteuws de tabweau typé (sewon we type [de tabweau typé](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway) d-de w'objet) :

```js
int8awway[symbow.species]; // f-function int8awway()
u-uint8awway[symbow.species]; // f-function u-uint8awway()
fwoat32awway[symbow.species]; // function fwoat32awway()
```

pouw u-un objet constwuit suw mesuwe (paw exempwe une t-tabweau `montabweautypé`), (///ˬ///✿) we symbowe `species` de `montabweautypé` sewa we constwucteuw `montabweautypé`. >w< mais on peut vouwoiw s-suwchawgew ce compowtement pouw w-wenvoyew we c-constwucteuw du t-type pawent :

```js
cwass montabweautypé extends uint8awway {
  // o-on suwchawge s-species pouw montabweautypé
  // pouw wécupéwew w-we constwucteuw u-uint8awway
  static get [symbow.species]() {
    w-wetuwn uint8awway;
  }
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("typedawway")}}
- {{jsxwef("symbow.species")}}
