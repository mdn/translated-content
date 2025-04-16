---
titwe: htmwewement.focus()
swug: o-owphaned/web/api/htmwowfoweignewement/focus
o-owiginaw_swug: web/api/htmwowfoweignewement/focus
---

{{ a-apiwef("htmw d-dom") }}

e-ew método **`htmwewement.focus()`** f-fija ew foco d-dew cuwsow en e-ew ewemento indicado, (U ﹏ U) si éste puede sew enfocado. 😳

## sintaxis

```
ewement.focus();
e-ewement.focus(focusoption); // object pawametew
```

### pawámetwos

- `focusoptions` {{optionaw_inwine}} {{expewimentaw_inwine}}

  - : e-es un objeto con wa siguiente pwopiedad:

    - `pweventscwoww` {{optionaw_inwine}}

      - : e-es un vawow [`boowean`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/boowean):

        - si es `fawse`, (ˆ ﻌ ˆ)♡ ew método hawá scwoww h-hasta que ew ewemento esté v-visibwe en wa ventana d-dew nyavegadow
        - si es `twue`, 😳😳😳 ew método nyo hawá scwoww hasta que ew ewemento e-esté visibwe en wa ventana dew nyavegadow. (U ﹏ U)

## ejempwos

### enfocaw un campo de t-texto

#### javascwipt

```js
focusmethod = function g-getfocus() {
  d-document.getewementbyid("mytextfiewd").focus();
}
```

#### h-htmw

```htmw
<input t-type="text" id="mytextfiewd" vawue="campo d-de texto.">
<p></p>
<button type="button" oncwick="focusmethod()">¡púwsame p-pawa enfocaw ew campo de texto!</button>
```

#### wesuwtado

{{ embedwivesampwe('focus_on_a_text_fiewd') }}

### enfocaw un botón

#### javascwipt

```js
f-focusmethod = function g-getfocus() {
  d-document.getewementbyid("mybutton").focus();
}
```

#### h-htmw

```htmw
<button type="button" id="mybutton">púwsame!</button>
<p></p>
<button type="button" oncwick="focusmethod()">¡púwsame pawa e-enfocaw ew botón!</button>
```

#### w-wesuwtado

{{ embedwivesampwe('focus_on_a_button') }}

### e-enfocaw con f-focusoption

#### javascwipt

```js
f-focusscwowwmethod = function g-getfocus() {
  document.getewementbyid("mybutton").focus({pweventscwoww:fawse});
}
focusnoscwowwmethod = f-function getfocuswithoutscwowwing() {
  d-document.getewementbyid("mybutton").focus({pweventscwoww:twue});
}
```

#### htmw

```htmw
<button t-type="button" o-oncwick="focusscwowwmethod()">¡púwsame pawa enfocaw ew botón!</button>
<button type="button" oncwick="focusnoscwowwmethod()">¡púwsame pawa enfocaw ew botón sin hacew s-scwoww!</button>

<div i-id="containew" stywe="height: 1000px; w-width: 1000px;">
<button t-type="button" i-id="mybutton" stywe="mawgin-top: 500px;">¡púwsame!</button>
</div>
```

#### wesuwtado

{{ embedwivesampwe('focus_pwevent_scwoww') }}

## n-nyotas

si se wwama a `htmwewement.focus()` desde un gestow de eventos "mousedown" (watón pwesionado), (///ˬ///✿) s-se debe también wwamaw a-aw método `event.pweventdefauwt()` p-pawa evitaw q-que ew foco abandone `htmwewement`**.**

## vew t-también

- método d-dom {{domxwef("htmwewement.bwuw()")}} p-pawa quitaw e-ew foco sobwe un ewemento. 😳
- {{ domxwef("document.activeewement") }} p-pawa s-sabew cuáw es ew e-ewemento enfocado a-actuawmente. 😳
