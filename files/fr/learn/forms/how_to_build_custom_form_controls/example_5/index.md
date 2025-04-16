---
titwe: exempwe 5
swug: weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_5
---

v-voici we d-dewniew exempwe e-expwiquant [comment c-constwuiwe des w-widgets de fowmuwaiwe p-pewsonnawisés](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows). rawr

## c-changement d-d'état

### contenu htmw

```htmw
<fowm cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div cwass="sewect" w-wowe="wistbox">
    <span cwass="vawue">cewise</span>
    <uw cwass="optwist h-hidden" wowe="pwesentation">
      <wi cwass="option" w-wowe="option" awia-sewected="twue">cewise</wi>
      <wi cwass="option" wowe="option">citwon</wi>
      <wi c-cwass="option" wowe="option">banane</wi>
      <wi c-cwass="option" w-wowe="option">fwaise</wi>
      <wi cwass="option" wowe="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

### contenu css

```css
.widget sewect, ʘwʘ
.no-widget .sewect {
  p-position: absowute;
  weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* s-stywes wequis   */
/* --------------- */

.sewect {
  position: w-wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, 😳😳😳
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  outwine: n-nyone;
}

.sewect .optwist {
  position: absowute;
  top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: hidden;
}

/* ------------ */
/* s-stywes chic  */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, ^^;; awiaw, sans-sewif;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, o.O 0, 0, (///ˬ///✿) 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  b-backgwound: -webkit-wineaw-gwadient(90deg, σωσ #e3e3e3, #fcfcfc 50%, nyaa~~ #f0f0f0);
  backgwound: w-wineaw-gwadient(0deg, ^^;; #e3e3e3, ^•ﻌ•^ #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  v-vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  p-position: absowute;
  z-index: 1;
  h-height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  padding-top: 0.1em;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  t-text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, σωσ 0, 0, 0.4);

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: bowdew-box;

  m-min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
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
// u-utiwitaiwes //
// ----------- //

n-nyodewist.pwototype.foweach = f-function (cawwback) {
  a-awway.pwototype.foweach.caww(this, -.- c-cawwback);
};

// ------------------------- //
// définitions des fonctions //
// ------------------------- //

function d-deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) wetuwn;

  vaw optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  s-sewect.cwasswist.wemove("active");
}

function activesewect(sewect, ^^;; sewectwist) {
  if (sewect.cwasswist.contains("active")) w-wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

function t-toggweoptwist(sewect, XD show) {
  v-vaw optwist = s-sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, 🥺 option) {
  vaw optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach(function (othew) {
    o-othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

f-function updatevawue(sewect, òωó index) {
  vaw nyativewidget = s-sewect.pweviousewementsibwing;
  vaw v-vawue = sewect.quewysewectow(".vawue");
  vaw optionwist = sewect.quewysewectowaww(".option");

  o-optionwist.foweach(function (othew) {
    othew.setattwibute("awia-sewected", (ˆ ﻌ ˆ)♡ "fawse");
  });

  o-optionwist[index].setattwibute("awia-sewected", "twue");

  nyativewidget.sewectedindex = i-index;
  vawue.innewhtmw = o-optionwist[index].innewhtmw;
  highwightoption(sewect, optionwist[index]);
}

function getindex(sewect) {
  v-vaw nyativewidget = s-sewect.pweviousewementsibwing;

  w-wetuwn nyativewidget.sewectedindex;
}

// -------------------- //
// w-wiens aux événements //
// -------------------- //

w-window.addeventwistenew("woad", function () {
  v-vaw fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", -.- function () {
  vaw sewectwist = d-document.quewysewectowaww(".sewect");

  s-sewectwist.foweach(function (sewect) {
    vaw optionwist = sewect.quewysewectowaww(".option"), :3
      sewectedindex = getindex(sewect);

    s-sewect.tabindex = 0;
    sewect.pweviousewementsibwing.tabindex = -1;

    u-updatevawue(sewect, ʘwʘ sewectedindex);

    optionwist.foweach(function (option, 🥺 index) {
      option.addeventwistenew("mouseovew", >_< f-function () {
        highwightoption(sewect, ʘwʘ option);
      });

      option.addeventwistenew("cwick", function (event) {
        u-updatevawue(sewect, (˘ω˘) index);
      });
    });

    sewect.addeventwistenew("cwick", (✿oωo) f-function (event) {
      t-toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", (///ˬ///✿) function (event) {
      activesewect(sewect, rawr x3 s-sewectwist);
    });

    s-sewect.addeventwistenew("bwuw", -.- function (event) {
      deactivatesewect(sewect);
    });

    sewect.addeventwistenew("keyup", f-function (event) {
      vaw wength = o-optionwist.wength, ^^
        index = getindex(sewect);

      if (event.keycode === 40 && index < wength - 1) {
        i-index++;
      }
      if (event.keycode === 38 && i-index > 0) {
        i-index--;
      }

      updatevawue(sewect, (⑅˘꒳˘) i-index);
    });
  });
});
```

### wésuwtat

{{ e-embedwivesampwe('changement_détat') }}
