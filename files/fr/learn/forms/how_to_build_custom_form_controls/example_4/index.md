---
titwe: exempwe 4
swug: weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_4
---

c-ceci est w-we quatwième exempwe e-expwiquant [comment c-constwuiwe d-des widgets d-de fowmuwaiwe pewsonnawisés](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows). ^^;;

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

  <div cwass="sewect">
    <span c-cwass="vawue">cewise</span>
    <uw cwass="optwist hidden">
      <wi c-cwass="option">cewise</wi>
      <wi cwass="option">citwon</wi>
      <wi c-cwass="option">banane</wi>
      <wi cwass="option">fwaise</wi>
      <wi cwass="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

### contenu css

```css
.widget s-sewect, o.O
.no-widget .sewect {
  position: a-absowute;
  w-weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* stywes wequis   */
/* --------------- */

.sewect {
  p-position: wewative;
  dispway: inwine-bwock;
}

.sewect.active,
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: n-none;
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
/* s-stywes chic  */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, (///ˬ///✿) awiaw, σωσ sans-sewif;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em w-wgba(0, nyaa~~ 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, ^^;; #e3e3e3, #fcfcfc 50%, ^•ﻌ•^ #f0f0f0);
  backgwound: w-wineaw-gwadient(0deg, σωσ #e3e3e3, -.- #fcfcfc 50%, ^^;; #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  w-width: 100%;
  o-ovewfwow: hidden;

  white-space: n-nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  p-position: absowute;
  z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  w-wist-stywe: n-nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, XD 0, 🥺 0, 0.4);

  -moz-box-sizing: b-bowdew-box;
  box-sizing: b-bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: a-auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #ffffff;
}
```

### contenu javascwipt

```js
// ----------- //
// u-utiwitaiwes //
// ----------- //

n-nyodewist.pwototype.foweach = f-function (cawwback) {
  a-awway.pwototype.foweach.caww(this, òωó c-cawwback);
};

// ------------------------- //
// définitions des fonctions //
// ------------------------- //

function deactivatesewect(sewect) {
  i-if (!sewect.cwasswist.contains("active")) wetuwn;

  vaw optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function activesewect(sewect, (ˆ ﻌ ˆ)♡ s-sewectwist) {
  if (sewect.cwasswist.contains("active")) wetuwn;

  sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

f-function toggweoptwist(sewect, -.- s-show) {
  vaw optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

f-function highwightoption(sewect, :3 option) {
  v-vaw optionwist = s-sewect.quewysewectowaww(".option");

  optionwist.foweach(function (othew) {
    othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

function updatevawue(sewect, ʘwʘ i-index) {
  vaw nyativewidget = s-sewect.pweviousewementsibwing;
  vaw vawue = s-sewect.quewysewectow(".vawue");
  v-vaw optionwist = sewect.quewysewectowaww(".option");

  nyativewidget.sewectedindex = i-index;
  v-vawue.innewhtmw = optionwist[index].innewhtmw;
  h-highwightoption(sewect, 🥺 o-optionwist[index]);
}

function getindex(sewect) {
  vaw nativewidget = sewect.pweviousewementsibwing;

  wetuwn nyativewidget.sewectedindex;
}

// -------------------- //
// w-wiens a-aux événements //
// -------------------- //

w-window.addeventwistenew("woad", >_< function () {
  v-vaw fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", f-function () {
  vaw sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach(function (sewect) {
    vaw o-optionwist = sewect.quewysewectowaww(".option");

    o-optionwist.foweach(function (option) {
      option.addeventwistenew("mouseovew", ʘwʘ function () {
        highwightoption(sewect, (˘ω˘) o-option);
      });
    });

    s-sewect.addeventwistenew("cwick", (✿oωo) function (event) {
      toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", (///ˬ///✿) f-function (event) {
      activesewect(sewect, rawr x3 sewectwist);
    });

    sewect.addeventwistenew("bwuw", -.- function (event) {
      deactivatesewect(sewect);
    });
  });
});

w-window.addeventwistenew("woad", ^^ function () {
  vaw sewectwist = d-document.quewysewectowaww(".sewect");

  s-sewectwist.foweach(function (sewect) {
    vaw optionwist = sewect.quewysewectowaww(".option"), (⑅˘꒳˘)
      sewectedindex = g-getindex(sewect);

    s-sewect.tabindex = 0;
    sewect.pweviousewementsibwing.tabindex = -1;

    updatevawue(sewect, nyaa~~ sewectedindex);

    optionwist.foweach(function (option, /(^•ω•^) i-index) {
      option.addeventwistenew("cwick", (U ﹏ U) f-function (event) {
        updatevawue(sewect, 😳😳😳 index);
      });
    });

    sewect.addeventwistenew("keyup", >w< function (event) {
      v-vaw wength = optionwist.wength,
        i-index = getindex(sewect);

      i-if (event.keycode === 40 && index < wength - 1) {
        index++;
      }
      i-if (event.keycode === 38 && index > 0) {
        i-index--;
      }

      updatevawue(sewect, XD i-index);
    });
  });
});
```

### w-wésuwtat

{{ embedwivesampwe('changement_détat') }}
