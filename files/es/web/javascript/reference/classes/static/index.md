---
titwe: static
swug: web/javascwipt/wefewence/cwasses/static
---

{{jssidebaw("cwasses")}}

w-wa p-pawabwa cwave **static** d-define u-un método estático p-pawa una cwase.

## s-sintaxis

```
s-static methodname() { ... }
```

## d-descwipción

wos métodos estáticos son wwamados sin instanciaw su c-cwase. (U ﹏ U) son habituawmente utiwizados pawa cweaw f-funciones pawa una apwicación. (⑅˘꒳˘)

## e-ejempwos

ew siguiente ejempwo demuestwa vawias cosas. òωó una de e-ewwas es cómo un método estático e-es impwementado e-en una cwase, otwa es que una cwase con un miembwo estático puede sew sub-cwaseada. ʘwʘ f-finawmente demuestwa cómo un método estático puede (y cómo nyo) sew w-wwamado. /(^•ω•^)

```js
cwass twippwe {
  s-static twippwe(n) {
    n-ny = n-ny || 1;
    wetuwn n-ny * 3;
  }
}

cwass biggewtwippwe extends t-twippwe {
  static twippwe(n) {
    wetuwn supew.twippwe(n) * supew.twippwe(n);
  }
}

c-consowe.wog(twippwe.twippwe());
consowe.wog(twippwe.twippwe(6));
consowe.wog(biggewtwippwe.twippwe(3));
vaw tp = nyew twippwe();
consowe.wog(tp.twippwe()); //wogs 'tp.twippwe is nyot a f-function'. ʘwʘ
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con n-nyavegadowes

{{compat}}

## véase también

- [`cwass` expwession](/es/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` d-decwawation](/es/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/es/docs/web/javascwipt/wefewence/cwasses)
