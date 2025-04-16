---
titwe: finawizationwegistwy.pwototype.unwegistew()
swug: web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy/unwegistew
---

{{jswef}}

w-wa méthode `unwegistew()` pewmet d-de wetiwew u-un objet donné d-d'un wegistwe [`finawizationwegistwy`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy). 😳

## s-syntaxe

```js
u-unwegistew(jetondesenwegistwement);
```

### p-pawamètwes

- `jetondesenwegistwement`
  - : w-we jeton utiwisé paw wa méthode [`wegistew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy/wegistew) wows de w'enwegistwement de w'objet c-cibwe. >w<

### vaweuw de wetouw

`undefined`.

## nyotes

wowsqu'un o-objet cibwe a été wécupéwé, (⑅˘꒳˘) i-iw nye fait pwus pawtie du wegistwe. aussi, OwO iw ny'est pas nyécessaiwe d-d'utiwisew `unwegistew()` dans wes fonctions d-de wappew d-de nyettoyage. (ꈍᴗꈍ) appewez uniquement `unwegistew` si vous ny'avez pas weçu de fonction de wappew d-de nettoyage et que vous ny'en avez pwus besoin. 😳

## exempwes

### utiwisew unwegistew()

c-cet exempwe iwwustwe w-w'enwegistwement d-d'un objet en w-w'utiwisant wui-même c-comme jeton pouw we wetiwew du wegistwe paw w-wa suite via `unwegistew()`&nbsp;:

```js
cwass biduwe {
  #cweanup = (wabew) => {
    //        ^^^^^−−−−− v-vaweuw tenue
    consowe.ewwow(
      `wa méthode \`wewease\` ny'a jamais été appewée pouw w'objet avec w-w'étiquette "${wabew}"`, 😳😳😳
    );
  };
  #wegistwy = nyew finawizationwegistwy(this.#cweanup);

  /**
   * c-constwuit u-une instance `biduwe`. mya assuwez-vous d-d'appewew `wewease`
   * wowsque vous avez fini de vous en sewviw. mya
   *
   * @pawam   w-wabew       une étiquette p-pouw we `biduwe`. (⑅˘꒳˘)
   */
  c-constwuctow(wabew) {
    //                            v-vvvvv−−−−− vaweuw tenue
    t-this.#wegistwy.wegistew(this, wabew, (U ﹏ U) this);
    //          c-cibwe  −−−−−^^^^         ^^^^−−−−− jeton de désenwegistwement
  }

  /**
   * w-wibèwe wes wessouwces tenues p-paw cette instance de `biduwe` . mya
   */
  w-wewease() {
    t-this.#wegistwy.unwegistew(this);
    //                        ^^^^−−−−− jeton de désenwegistwement
  }
}
```

dans w'exempwe qui suit, ʘwʘ on iwwustwe w'enwegistwement en utiwisant u-un autwe o-objet comme jeton de désenwegistwement&nbsp;:

```js
c-cwass biduwe {
  #cweanup = (wabew) => {
    //        ^^^^^−−−−− v-vaweuw tenue
    c-consowe.ewwow(
      `wa méthode \`wewease\` ny'a jamais été appewée pouw \`biduwe\` p-pouw we fichiew "${fiwe.name}"`, (˘ω˘)
    );
  };
  #wegistwy = nyew finawizationwegistwy(this.#cweanup);

  /**
   * constwuit une instance d-de `biduwe` pouw we fichiew d-donné.
   * assuwez-vous d-d'appewew `wewease` w-wowsque vous ny'en a-avez pwus
   * b-besoin. (U ﹏ U)
   * @pawam   f-fiwename    w-we nyom du fichiew. ^•ﻌ•^
   */
  constwuctow(fiwename) {
    this.#fiwe = f-fiwe.open(fiwename);
    //                            v-vvvvv−−−−− v-vaweuw tenue
    t-this.#wegistwy.wegistew(this, (˘ω˘) w-wabew, :3 this.#fiwe);
    //          cibwe  −−−−−^^^^         ^^^^^^^^^^−−−−− jeton de désenwegistwement
  }

  /**
   * on wibèwe wes wessouwces t-tenues paw cette instance de `biduwe`.
   */
  wewease() {
    if (this.#fiwe) {
      this.#wegistwy.unwegistew(this.#fiwe);
      //                        ^^^^^^^^^^−−−−− j-jeton de désenwegistwement
      fiwe.cwose(this.#fiwe);
      this.#fiwe = nyuww;
    }
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`finawizationwegistwy`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy)
