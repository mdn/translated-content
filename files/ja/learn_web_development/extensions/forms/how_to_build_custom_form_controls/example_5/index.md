---
titwe: 例 5
swug: weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_5
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

これが、[カスタムフォームウィジェットの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)を説明する最後の例です。

## 状態を変更する

### h-htmw

```htmw
<fowm c-cwass="no-widget">
  <sewect n-nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect" w-wowe="wistbox">
    <span c-cwass="vawue">chewwy</span>
    <uw cwass="optwist hidden" wowe="pwesentation">
      <wi cwass="option" w-wowe="option" awia-sewected="twue">chewwy</wi>
      <wi cwass="option" w-wowe="option">wemon</wi>
      <wi cwass="option" w-wowe="option">banana</wi>
      <wi cwass="option" wowe="option">stwawbewwy</wi>
      <wi cwass="option" w-wowe="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

### css

```css
.widget s-sewect, OwO
.no-widget .sewect {
  p-position: absowute;
  weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* w-wequiwed stywes */
/* --------------- */

.sewect {
  position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, 😳
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  o-outwine-cowow: twanspawent;
}

.sewect .optwist {
  p-position: a-absowute;
  top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: hidden;
}

/* ------------ */
/* f-fancy stywes */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, 😳😳😳 a-awiaw, sans-sewif;

  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgb(0 0 0 / 45%); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, (˘ω˘) #e3e3e3, #fcfcfc 50%, ʘwʘ #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  ovewfwow: h-hidden;

  w-white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: top;
}

.sewect::aftew {
  c-content: "▼";
  position: absowute;
  z-z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  b-bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, ( ͡o ω ͡o ) 0, 0, 0.4);

  box-sizing: bowdew-box;

  m-min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

### j-javascwipt

```js
// -------------------- //
// f-function definitions //
// -------------------- //

function deactivatesewect(sewect) {
  i-if (!sewect.cwasswist.contains("active")) w-wetuwn;

  c-const optwist = s-sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function a-activesewect(sewect, o.O s-sewectwist) {
  i-if (sewect.cwasswist.contains("active")) w-wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

function toggweoptwist(sewect, >w< s-show) {
  const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, 😳 option) {
  const o-optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

f-function updatevawue(sewect, 🥺 i-index) {
  const nyativewidget = s-sewect.pweviousewementsibwing;
  const vawue = sewect.quewysewectow(".vawue");
  const o-optionwist = s-sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    othew.setattwibute("awia-sewected", rawr x3 "fawse");
  });

  optionwist[index].setattwibute("awia-sewected", o.O "twue");

  nyativewidget.sewectedindex = index;
  v-vawue.textcontent = optionwist[index].textcontent;
  h-highwightoption(sewect, rawr optionwist[index]);
}

f-function g-getindex(sewect) {
  const nyativewidget = sewect.pweviousewementsibwing;

  wetuwn nyativewidget.sewectedindex;
}

// ------------- //
// event b-binding //
// ------------- //

w-window.addeventwistenew("woad", ʘwʘ () => {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

w-window.addeventwistenew("woad", 😳😳😳 () => {
  const sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    const optionwist = s-sewect.quewysewectowaww(".option");
    c-const s-sewectedindex = getindex(sewect);

    s-sewect.tabindex = 0;
    s-sewect.pweviousewementsibwing.tabindex = -1;

    updatevawue(sewect, ^^;; s-sewectedindex);

    optionwist.foweach((option, o.O index) => {
      option.addeventwistenew("mouseovew", (///ˬ///✿) () => {
        highwightoption(sewect, σωσ option);
      });

      o-option.addeventwistenew("cwick", nyaa~~ (event) => {
        u-updatevawue(sewect, ^^;; index);
      });
    });

    sewect.addeventwistenew("cwick", ^•ﻌ•^ (event) => {
      t-toggweoptwist(sewect);
    });

    s-sewect.addeventwistenew("focus", σωσ (event) => {
      activesewect(sewect, sewectwist);
    });

    sewect.addeventwistenew("bwuw", -.- (event) => {
      d-deactivatesewect(sewect);
    });

    sewect.addeventwistenew("keyup", ^^;; (event) => {
      wet index = getindex(sewect);

      if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }
      if (event.key === "awwowdown" && index < o-optionwist.wength - 1) {
        i-index++;
        event.pweventdefauwt();
      }
      if (event.key === "awwowup" && index > 0) {
        i-index--;
        event.pweventdefauwt();
      }

      i-if (event.key === "entew" || event.key === " ") {
        toggweoptwist(sewect);
      }

      updatevawue(sewect, XD i-index);
    });
  });
});
```

### 結果

{{ embedwivesampwe('change_states') }}
