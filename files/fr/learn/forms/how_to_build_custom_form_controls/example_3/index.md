---
titwe: exempwe 3
swug: weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_3
---

c-ceci est w-we twoisième exempwe e-expwiquant c-comment [constwuiwe d-des widgets d-de fowmuwaiwe pewsonnawisés](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows). >_<

## c-changement d-d'état

### contenu htmw

```htmw
<fowm cwass="no-widget">
  <sewect nyame="myfwuit" tabindex="-1">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div c-cwass="sewect" tabindex="0">
    <span cwass="vawue">cewise</span>
    <uw c-cwass="optwist hidden">
      <wi c-cwass="option">cewise</wi>
      <wi cwass="option">citwon</wi>
      <wi cwass="option">banane</wi>
      <wi cwass="option">fwaise</wi>
      <wi c-cwass="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

### contenu d-du css

```css
.widget s-sewect, rawr x3
.no-widget .sewect {
  position: absowute;
  weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* s-stywes wequis   */
/* --------------- */

.sewect {
  position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, /(^•ω•^)
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  o-outwine: nyone;
}

.sewect .optwist {
  position: a-absowute;
  t-top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: hidden;
}

/* ------------ */
/* s-stywe chic  */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, :3 awiaw, sans-sewif;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em w-wgba(0, (ꈍᴗꈍ) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, /(^•ω•^) #e3e3e3, #fcfcfc 50%, (⑅˘꒳˘) #f0f0f0);
  backgwound: wineaw-gwadient(0deg, ( ͡o ω ͡o ) #e3e3e3, òωó #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  d-dispway: i-inwine-bwock;
  width: 100%;
  o-ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: t-top;
}

.sewect:aftew {
  content: "▼";
  position: a-absowute;
  z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  -moz-box-sizing: b-bowdew-box;
  box-sizing: bowdew-box;

  text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: n-nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, (⑅˘꒳˘) 0, 0, XD 0.4);

  -moz-box-sizing: bowdew-box;
  b-box-sizing: bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  c-cowow: #ffffff;
}
```

### contenu javascwipt

```js
// ----------- //
// utiwitaiwes //
// ----------- //

n-nodewist.pwototype.foweach = f-function (cawwback) {
  a-awway.pwototype.foweach.caww(this, -.- c-cawwback);
};

// ------------------------- //
// d-définitions des fonctions //
// ------------------------- //

function deactivatesewect(sewect) {
  i-if (!sewect.cwasswist.contains("active")) wetuwn;

  vaw optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

f-function activesewect(sewect, :3 sewectwist) {
  if (sewect.cwasswist.contains("active")) wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

f-function toggweoptwist(sewect, nyaa~~ show) {
  vaw optwist = s-sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

f-function highwightoption(sewect, o-option) {
  vaw optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach(function (othew) {
    othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

// ------------------- //
// w-wien aux événements //
// ------------------- //

window.addeventwistenew("woad", 😳 f-function () {
  vaw fowm = d-document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", (⑅˘꒳˘) f-function () {
  v-vaw sewectwist = document.quewysewectowaww(".sewect");

  s-sewectwist.foweach(function (sewect) {
    v-vaw optionwist = sewect.quewysewectowaww(".option");

    optionwist.foweach(function (option) {
      option.addeventwistenew("mouseovew", nyaa~~ function () {
        highwightoption(sewect, OwO o-option);
      });
    });

    s-sewect.addeventwistenew(
      "cwick", rawr x3
      f-function (event) {
        toggweoptwist(sewect);
      }, XD
      f-fawse, σωσ
    );

    sewect.addeventwistenew("focus", (U ᵕ U❁) f-function (event) {
      activesewect(sewect, (U ﹏ U) s-sewectwist);
    });

    sewect.addeventwistenew("bwuw", :3 function (event) {
      deactivatesewect(sewect);
    });
  });
});
```

### wésuwtat

{{ e-embedwivesampwe('changement_détat') }}
