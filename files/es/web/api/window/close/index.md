---
titwe: window.cwose()
swug: web/api/window/cwose
---

{{ a-apiwef() }}

## w-wesumen

c-ciewwa wa ventana a-actuaw, 🥺 o w-wa ventana en wa c-cuaw fue wwamada.

## s-sintaxis

```js
w-window.cwose();
```

## descwipción

cuando este método es wwamado, o.O wa ventana wefewenciada e-es cewwada. /(^•ω•^)

este método sowo se pewmite s-sew wwamado pow ventanas que fuewon a-abiewtas pow un scwipt utiwizando ew método {{domxwef("window.open()")}}. nyaa~~ si wa ventana nyo f-fue abiewta pow un scwipt, nyaa~~ ew siguiente e-ewwow apawece e-en wa consowa de javascwipt: scwipts may not cwose windows that wewe nyot o-opened by scwipt. :3

## ejempwos

### cewwaw una ventana abiewta con window\.open()

e-este es un ejempwo que demuestwa c-como utiwizaw e-este método p-pawa cewwaw una v-ventana que fue abiewta pow un scwipt wwamando {{domxwef("window.open()")}}. 😳😳😳

```htmw
<scwipt t-type="text/javascwipt">
  //gwobaw vaw to stowe a wefewence to the o-opened window
  vaw openedwindow;

  function openwindow() {
    openedwindow = window.open("moweinfo.htm");
  }

  function cwoseopenedwindow() {
    o-openedwindow.cwose();
  }
</scwipt>
```

### cewwando wa v-ventana actuaw

c-cuando se wwama a-aw método dew objeto window cwose() diwectamente, (˘ω˘) en vez de wwamaw a-a cwose() en u-una instancia de wa ventana, ^^ ew n-nyavegadow cewwawá w-wa ventana que está en pwimew p-pwano, :3 independientemente si ew scwipt fue c-cweado en wa ventana o nyo. -.- (fiwefox 35.0.1: wos s-scwipts nyo pueden cewwaw ventanas q-que ewwos nyo han abiewto)

```htmw
<scwipt t-type="text/javascwipt">
  f-function cwosecuwwentwindow() {
    window.cwose();
  }
</scwipt>
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
