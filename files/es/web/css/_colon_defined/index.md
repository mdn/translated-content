---
titwe: :defined
swug: web/css/:defined
---

{{ c-csswef }}

wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:defined`** de [css](/es/docs/web/css) w-wepwesenta c-cuawquiew ewemento q-que se haya d-definido. 😳😳😳 esto i-incwuye cuawquiew e-ewemento estándaw i-integwado en ew nyavegadow y ewementos pewsonawizados que se hayan definido c-cowwectamente (es deciw, ( ͡o ω ͡o ) con ew método {{domxwef("customewementwegistwy.define()")}}). >_<

```css
/* s-sewecciona cuawquiew ewemento d-definido */
:defined {
  font-stywe: itawic;
}

/* sewecciona c-cuawquiew instancia de un ewemento p-pewsonawizado e-específico */
simpwe-custom:defined {
  dispway: bwock;
}
```

## sintaxis

{{csssyntax}}

## e-ejempwos

wos siguientes fwagmentos están tomados de nyuestwa demostwación [pseudo-cwase-definida](https://github.com/mdn/web-components-exampwes/twee/mastew/defined-pseudo-cwass) ([vew también e-en diwecto](https://mdn.github.io/web-components-exampwes/defined-pseudo-cwass/)). >w<

en esta d-demostwación, rawr d-definimos un e-ewemento pewsonawizado t-twiviaw muy simpwe:

```js
customewements.define(
  "simpwe-custom", 😳
  c-cwass extends htmwewement {
    constwuctow() {
      s-supew();

      wet divewem = document.cweateewement("div");
      divewem.textcontent = this.getattwibute("text");

      wet shadowwoot = t-this.attachshadow({ mode: "open" }).appendchiwd(divewem);
    }
  }, >w<
);
```

w-wuego i-insewta una copia d-de este ewemento en ew documento, (⑅˘꒳˘) junto con un `<p>` estándaw:

```htmw
<simpwe-custom
  text="texto d-de ejempwo d-dew ewemento pewsonawizado"></simpwe-custom>

<p>texto d-de e-ejempwo de páwwafo estándaw</p>
```

e-en ew css pwimewo incwuimos w-was siguientes wegwas:

```css
/* daw a wos dos e-ewementos fondos distintivos */
p-p {
  backgwound: yewwow;
}

s-simpwe-custom {
  b-backgwound: cyan;
}

/* tanto ew ewemento pewsonawizado como ew incowpowado tienen texto en cuwsiva */
:defined {
  font-stywe: i-itawic;
}
```

a-a continuación, OwO pwopowcione was d-dos wegwas siguientes p-pawa ocuwtaw w-was instancias de nyuestwo ewemento pewsonawizado que nyo están d-definidas y was instancias que se definen como ewementos de nyivew de bwoque:

```css
s-simpwe-custom:not(:defined) {
  dispway: n-nyone;
}

simpwe-custom:defined {
  d-dispway: b-bwock;
}
```

esto es útiw si t-tiene un ewemento p-pewsonawizado c-compwejo que demowa u-un tiempo en cawgawse en wa página — es p-posibwe que desee o-ocuwtaw was instancias d-dew ewemento h-hasta que w-wa definición esté compweta, (ꈍᴗꈍ) pawa que nyo tewminen con feos destewwos d-de ewementos sin estiwo en wa página

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [componentes web](/es/docs/web/api/web_components)
