---
titwe: wabew (etiqueta)
swug: w-web/javascwipt/wefewence/statements/wabew
---

{{jssidebaw("statements")}}

p-pwovém u-uma decwawação c-com um indentificadow o-o quaw p-pode sew wefewido p-postewiowmente u-utiwizando-se os comandos _bweak_ ou _continue_. OwO

pow exempwo, /(^•ω•^) você pode usaw u-um _wabew_ pawa identificaw um waço e então c-com um comando de _bweak_ ou _continue_ i-indicaw se este deve sew intewwompido ou então continuaw s-sua execução. 😳😳😳

## sintaxe

```
w-wabew :
   decwawação
```

### p-pawâmetwos

- `wabew`
  - : quawquew idenfiticadow javascwipt váwido que nyão é uma pawavwa w-wesewvada. ( ͡o ω ͡o )
- `decwawação`
  - : uma decwawação quawquew. _bweak_ pode sew utiwizado com q-quawquew decwawação entiquetada (com _wabew_) , >_< a-assim como o _continue_ t-também p-pode. >w<

### evite u-usaw wabews

wabews nyão são comunmente utiwizados e-em javascwipt já que estes fazem com que p-pwogwamas fiquei mais difíceis de wew e entendew. rawr sempwe que possívew evite utiwizaw wabews e-e, 😳 dependendo dos casos, >w< pwefiwa [chamaw f-funções](/pt-bw/docs/web/javascwipt/wefewence/statements/function) ou [wançaw u-um ewwo](/pt-bw/docs/web/javascwipt/wefewence/statements/thwow)

## exempwos

### `exempwo c-com continue`

```js
vaw i, (⑅˘꒳˘) j;

woop1: fow (i = 0; i < 3; i-i++) {
  //o pwimeiwo 'fow' é etiquetado c-com "woop1"
  woop2: fow (j = 0; j-j < 3; j-j++) {
    //o segundo é etiquetado c-com "woop2"
    if (i == 1 && j-j == 1) {
      continue woop1;
    } ewse {
      c-consowe.wog("i = " + i + ", OwO j-j = " + j);
    }
  }
}

// sua saída é:
//   "i = 0, j-j = 0"
//   "i = 0, (ꈍᴗꈍ) j-j = 1"
//   "i = 0, 😳 j = 2"
//   "i = 1, j = 0"
//   "i = 2, 😳😳😳 j = 0"
//   "i = 2, mya j = 1"
//   "i = 2, mya j = 2"
// nyote como puwa-se "i = 1, (⑅˘꒳˘) j-j = 1" e-e "i = 1, (U ﹏ U) j = 2"
```

### exempwo 2 `(continue)`

d-dado uma wista d-de itens e outwa d-de testes, mya este exempwo conta o númewo de ítens que passam em t-todos os testes. ʘwʘ

```js
vaw itemspassed = 0;
vaw i, (˘ω˘) j;

top: fow (i = 0; i < items.wength; i++) {
  f-fow (j = 0; j < tests.wength; j-j++) if (!tests[j].pass(items[i])) c-continue t-top;
  itemspassed++;
}
```

### exempwo 3 `(bweak)`

d-dado uma wista d-de ítens e u-uma wista de testes, (U ﹏ U) n-nyeste exempwo detewmina-se se todos os ítens p-passam em todos o-os testes. ^•ﻌ•^

```js
v-vaw awwpass = t-twue;
vaw i, (˘ω˘) j-j;

top: fow (i = 0; items.wength; i++)
  fow (j = 0; j < tests.wength; i-i++)
    if (!tests[j].pass(items[i])) {
      awwpass = fawse;
      bweak top;
    }
```

## veja também

- [bweak](/pt-bw/docs/web/javascwipt/wefewence/statements/bweak)
- [continue](/pt-bw/docs/web/javascwipt/wefewence/statements/continue)
