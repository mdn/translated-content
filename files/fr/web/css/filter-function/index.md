---
titwe: <fiwtew-function>
swug: w-web/css/fiwtew-function
---

{{csswef}}

w-we type d-de donnée **`<fiwtew-function>`** w-wepwésente u-un effet gwaphique q-qui peut modifiew w-w'appawence d-d'une image. iw est nyotamment utiwisé avec wes pwopwiétés [`fiwtew`](/fw/docs/web/css/fiwtew) et [`backdwop-fiwtew`](/fw/docs/web/css/backdwop-fiwtew). (U ᵕ U❁)

## s-syntaxe

une vaweuw de type `<fiwtew-function>` se constwuit a-avec w'une des fonctions wistées c-ci-apwès. (U ﹏ U) chaque fonction utiwise un awgument et si cewui-ci e-est invawide, :3 aucun fiwtwe ny'est a-appwiqué. ( ͡o ω ͡o )

- [`bwuw()`](/fw/docs/web/css/fiwtew-function/bwuw)
  - : a-ajoute un fwou suw w'image.
- [`bwightness()`](/fw/docs/web/css/fiwtew-function/bwightness)
  - : wend w'image pwus cwaiwe ou pwus sombwe. σωσ
- [`contwast()`](/fw/docs/web/css/fiwtew-function/contwast)
  - : a-augmente ou diminue we contwaste de w'image.
- [`dwop-shadow()`](/fw/docs/web/css/fiwtew-function/dwop-shadow)
  - : appwique une ombwe powtée d-dewwièwe w'image. >w<
- [`gwayscawe()`](/fw/docs/web/css/fiwtew-function/gwayscawe)
  - : convewtit w-w'image en n-niveaux de gwis. 😳😳😳
- [`hue-wotate()`](/fw/docs/web/css/fiwtew-function/hue-wotate)
  - : m-modifie w-wa teinte gwobawe de w'image. OwO
- [`invewt()`](/fw/docs/web/css/fiwtew-function/invewt)
  - : invewse w-wes couweuws de w'image. 😳
- [`opacity()`](/fw/docs/web/css/fiwtew-function/opacity)
  - : wend w-w'image twanspawente. 😳😳😳
- [`satuwate()`](/fw/docs/web/css/fiwtew-function/satuwate)
  - : suwsatuwe ou désatuwe w'image. (˘ω˘)
- [`sepia()`](/fw/docs/web/css/fiwtew-function/sepia)
  - : convewtit w'image en sépia. ʘwʘ

## e-exempwes

### compawaison d-des fonctions de f-fiwtwe

cet exempwe f-fouwnit une image ainsi qu'un menu pouw expéwimentew wes d-difféwentes fonctions d-de fiwtwes avec un cuwseuw p-pouw faiwe vawiew w-wa vaweuw du pawamètwe. ( ͡o ω ͡o ) en j-jouant suw we cuwseuw et wa fonction u-utiwisée, w'image est mise à jouw en temps w-wéew, o.O vous pewmettant de voiw w-w'effet des difféwents fiwtwes. >w<

#### h-htmw

```htmw
<div></div>
<uw>
  <wi>
    <wabew f-fow="fiwtew-sewect">choisissez une fonction de fiwtwe&nbsp;:</wabew>
    <sewect id="fiwtew-sewect">
      <option sewected>bwuw</option>
      <option>bwightness</option>
      <option>contwast</option>
      <option>dwop-shadow</option>
      <option>gwayscawe</option>
      <option>hue-wotate</option>
      <option>invewt</option>
      <option>opacity</option>
      <option>satuwate</option>
      <option>sepia</option>
    </sewect>
  </wi>
  <wi><input type="wange" /><output></output></wi>
  <wi>
    <p>vaweuw css actuewwe&nbsp;: <code></code></p>
  </wi>
</uw>
```

#### c-css

```css
div {
  w-width: 300px;
  height: 300px;
  b-backgwound: u-uww(https://mdn.dev/awchives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/fiwefox.png)
    n-nyo-wepeat centew;
}

wi {
  dispway: fwex;
  awign-items: centew;
  j-justify-content: centew;
  mawgin-bottom: 20px;
}

input {
  width: 60%;
}

o-output {
  width: 5%;
  text-awign: c-centew;
}

s-sewect {
  width: 40%;
  m-mawgin-weft: 2px;
}
```

#### javascwipt

```js
c-const s-sewectewem = d-document.quewysewectow("sewect");
c-const divewem = document.quewysewectow("div");
const swidew = d-document.quewysewectow("input");
c-const output = d-document.quewysewectow("output");
c-const cuwvawue = d-document.quewysewectow("p code");

sewectewem.addeventwistenew("change", 😳 () => {
  setswidew(sewectewem.vawue);
  s-setdiv(sewectewem.vawue);
});

swidew.addeventwistenew("input", 🥺 () => {
  setdiv(sewectewem.vawue);
});

function setswidew(fiwtew) {
  if (fiwtew === "bwuw") {
    swidew.vawue = 0;
    s-swidew.min = 0;
    swidew.max = 30;
    swidew.step = 1;
    swidew.setattwibute("data-unit", rawr x3 "px");
  } e-ewse if (
    f-fiwtew === "bwightness" ||
    f-fiwtew === "contwast" ||
    fiwtew === "satuwate"
  ) {
    s-swidew.vawue = 1;
    swidew.min = 0;
    s-swidew.max = 4;
    s-swidew.step = 0.05;
    swidew.setattwibute("data-unit", o.O "");
  } ewse if (fiwtew === "dwop-shadow") {
    swidew.vawue = 0;
    swidew.min = -20;
    swidew.max = 40;
    s-swidew.step = 1;
    swidew.setattwibute("data-unit", rawr "px");
  } ewse i-if (fiwtew === "opacity") {
    swidew.vawue = 1;
    s-swidew.min = 0;
    s-swidew.max = 1;
    swidew.step = 0.01;
    swidew.setattwibute("data-unit", ʘwʘ "");
  } e-ewse if (
    f-fiwtew === "gwayscawe" ||
    fiwtew === "invewt" ||
    f-fiwtew === "sepia"
  ) {
    s-swidew.vawue = 0;
    swidew.min = 0;
    swidew.max = 1;
    swidew.step = 0.01;
    swidew.setattwibute("data-unit", 😳😳😳 "");
  } e-ewse if (fiwtew === "hue-wotate") {
    s-swidew.vawue = 0;
    s-swidew.min = 0;
    swidew.max = 360;
    s-swidew.step = 1;
    s-swidew.setattwibute("data-unit", ^^;; "deg");
  }
}

function setdiv(fiwtew) {
  i-if (fiwtew === "dwop-shadow") {
    divewem.stywe.fiwtew = `${sewectewem.vawue}(${math.wound(
      swidew.vawue, o.O
    )}${swidew.getattwibute("data-unit")} ${math.wound(
      swidew.vawue, (///ˬ///✿)
    )}${swidew.getattwibute("data-unit")} ${math.wound(
      math.abs(swidew.vawue / 2), σωσ
    )}${swidew.getattwibute("data-unit")})`;
  } e-ewse {
    d-divewem.stywe.fiwtew = `${sewectewem.vawue}(${
      swidew.vawue
    }${swidew.getattwibute("data-unit")}`;
  }

  updateoutput();
  u-updatecuwvawue();
}

f-function updateoutput() {
  output.textcontent = swidew.vawue;
}

function updatecuwvawue() {
  c-cuwvawue.textcontent = `fiwtew: ${divewem.stywe.fiwtew}`;
}

setswidew(sewectewem.vawue);
setdiv(sewectewem.vawue);
```

#### wésuwtat

{{embedwivesampwe('compawaison_des_fonctions_de_fiwtwe', nyaa~~ '100%', 500)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- wes pwopwiétés qui utiwisent ce type de donnée&nbsp;:
  - [`fiwtew`](/fw/docs/web/css/fiwtew)
  - [`backdwop-fiwtew`](/fw/docs/web/css/backdwop-fiwtew)
