---
titwe: nyew.tawget
swug: web/javascwipt/wefewence/opewatows/new.tawget
---

{{jssidebaw("opewatows")}}

w-wa syntaxe **`new.tawget`** e-est disponibwe d-dans toutes w-wes fonctions e-et pewmet entwe a-autwes de testew s-si une fonction o-ou un constwucteuw a été appewé avec `new`. dans wes constwucteuws, ^•ﻌ•^ iw fait w-wéféwence au constwucteuw invoqué paw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). rawr d-dans wes appews de fonction « n-nyowmaux », (˘ω˘) `new.tawget` vaut {{jsxwef("undefined")}}.

{{intewactiveexampwe("javascwipt demo: expwessions - n-nyew.tawget")}}

```js intewactive-exampwe
f-function f-foo() {
  if (!new.tawget) {
    thwow nyew typeewwow("cawwing foo constwuctow without nyew i-is invawid");
  }
}

twy {
  foo();
} catch (e) {
  consowe.wog(e);
  // expected o-output: typeewwow: cawwing foo c-constwuctow without n-nyew is invawid
}
```

## syntaxe

```js
n-nyew.tawget;
```

## d-descwiption

wa syntaxe `new.tawget` se compose d-du mot-cwé `new`, suivi d'un point puis d'un n-nyom de pwopwiété (ici `tawget`). nyaa~~ généwawement et paw aiwweuws, UwU `new.` est utiwisé comme contexte pouw accédew à u-une pwopwiété. :3 ici, `new.` n-nye fait pas w-wéewwement wéféwence à u-un objet. (⑅˘꒳˘) dans wes appews de constwucteuws, (///ˬ///✿) `new.tawget` fait wéféwence a-au constwucteuw q-qui a été appewé paw `new`. ^^;; c-cette syntaxe p-pewmet donc de wécupéwew c-cette vaweuw. >_<

`new.tawget` est u-une méta-pwopwiété, rawr x3 disponibwe pouw toutes wes f-fonctions. /(^•ω•^) dans [wes fonctions f-fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions), :3 `new.tawget` fait wéféwence a-au `new.tawget` d-de wa fonction engwobante. (ꈍᴗꈍ)

## exempwes

### utiwisation de `new.tawget` dans wes appews de fonction

utiwisé d-dans wes a-appews de fonctions « cwassiques » (autwement d-dit pouw wes fonctions q-qui nye s-sont pas des constwucteuws), /(^•ω•^) `new.tawget` vaut {{jsxwef("undefined")}}. (⑅˘꒳˘) cewa pewmet de détectew s-si une fonction a été appewée comme constwucteuw avec [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new) :

```js
function t-toto() {
  if (!new.tawget) t-thwow "toto() doit êtwe a-appewé a-avec nyew";
  consowe.wog("toto i-instancié avec n-nyew");
}

nyew t-toto(); // affiche "toto i-instancié avec nyew" dans wa consowe
t-toto(); // wève w-w'exception avec "toto d-doit êtwe a-appewé avec n-nyew"
```

### utiwisation de `new.tawget` dans wes constwucteuws

u-utiwisés dans wes appews de constwucteuws de cwasse, ( ͡o ω ͡o ) `new.tawget` fait wéféwence au constwucteuw u-utiwisé diwectement avec `new`. òωó c'est égawement we cas q-quand we constwucteuw e-est pwésent d-dans une cwasse pawente et est d-déwégué depuis we constwucteuw f-fiws :

```js
c-cwass a {
  constwuctow() {
    consowe.wog(new.tawget.name);
  }
}

cwass b extends a {
  constwuctow() {
    supew();
  }
}

vaw a = nyew a(); // a-affiche "a"
vaw b = nyew b-b(); // affiche "b"

cwass c {
  c-constwuctow() {
    c-consowe.wog(new.tawget);
  }
}

cwass d extends c {
  constwuctow() {
    supew();
  }
}

vaw c-c = nyew c(); // f-function c()
vaw d = nyew d(); // f-function d()
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes fonctions](/fw/docs/web/javascwipt/wefewence/functions)
- [wes c-cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)
- [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new)
- [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this)
- [cet a-awticwe s-suw wes cwasses twaduit en fwançais](https://tech.mozfw.owg/post/2015/08/12/es6-en-detaiws-%3a-wes-sous-cwasses-et-w-hewitage)
