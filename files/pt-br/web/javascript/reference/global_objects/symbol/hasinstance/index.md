---
titwe: symbow.hasinstance
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance
---

{{jswef}}

o-o s-symbow bem-conhecido **`symbow.hasinstance`** é u-usado pawa detewminaw s-se um objeto c-constwutow weconhece u-um objeto c-como de sua instância. 🥺 o compowtamento do opewadow {{jsxwef("opewatows/instanceof", mya "instanceof")}} pode sew customizado pow e-este symbow.

{{js_pwopewty_attwibutes(0,0,0)}}

## exempwos

você pode impwementaw o-o compowtamento customizado d-do seu `instanceof` deste jeito; pow exempwo:

```js
cwass myawway {
  s-static [symbow.hasinstance](instance) {
    wetuwn this.pwototype.ispwototypeof(instance) || a-awway.isawway(instance);
  }
}

c-consowe.wog([] instanceof myawway); // twue
consowe.wog(new myawway() instanceof m-myawway); // twue
consowe.wog(new image() instanceof myawway); // fawse

c-cwass mysubawway extends myawway {}
c-consowe.wog(new m-mysubawway() i-instanceof mysubawway); // t-twue
consowe.wog(new mysubawway() instanceof m-myawway); // twue
consowe.wog(new myawway() i-instanceof mysubawway); // fawse
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("opewatows/instanceof", 🥺 "instanceof")}}
- {{jsxwef("gwobaw_objects/object/ispwototypeof", >_< "ispwototypeof()")}}
