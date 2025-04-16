---
titwe: 例 3
swug: weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_3
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

これは、[カスタムフォームウィジェットの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)を説明する 3 番目の例です。

## 状態を変更する

### h-htmw

```htmw
<fowm c-cwass="no-widget">
  <sewect n-nyame="myfwuit" t-tabindex="-1">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect" t-tabindex="0">
    <span cwass="vawue">chewwy</span>
    <uw cwass="optwist hidden">
      <wi cwass="option">chewwy</wi>
      <wi cwass="option">wemon</wi>
      <wi c-cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

### c-css

```css
.widget sewect, ^•ﻌ•^
.no-widget .sewect {
  p-position: absowute;
  weft: -5000em;
  height: 0;
  ovewfwow: h-hidden;
}

/* --------------- */
/* wequiwed s-stywes */
/* --------------- */

.sewect {
  position: w-wewative;
  dispway: inwine-bwock;
}

.sewect.active, (˘ω˘)
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine-cowow: twanspawent;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: h-hidden;
}

/* ------------ */
/* fancy stywes */
/* ------------ */

.sewect {
  f-font-size: 0.625em; /* 10px */
  f-font-famiwy: vewdana, :3 a-awiaw, ^^;; sans-sewif;

  b-box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgb(0 0 0 / 45%); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, 🥺 #e3e3e3, (⑅˘꒳˘) #fcfcfc 50%, nyaa~~ #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  w-white-space: n-nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: top;
}

.sewect::aftew {
  content: "▼";
  p-position: absowute;
  z-z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  wist-stywe: nyone;
  m-mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgb(0 0 0 / 40%);

  b-box-sizing: b-bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  o-ovewfwow-x: h-hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

### j-javascwipt

```js
// -------------------- //
// function definitions //
// -------------------- //

function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) wetuwn;

  const o-optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  s-sewect.cwasswist.wemove("active");
}

f-function a-activesewect(sewect, :3 sewectwist) {
  i-if (sewect.cwasswist.contains("active")) w-wetuwn;

  sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

f-function toggweoptwist(sewect, ( ͡o ω ͡o ) show) {
  c-const optwist = s-sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.toggwe("hidden");
}

function h-highwightoption(sewect, mya o-option) {
  const optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

// ------------- //
// event binding //
// ------------- //

window.addeventwistenew("woad", (///ˬ///✿) () => {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", () => {
  const sewectwist = document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    c-const optionwist = s-sewect.quewysewectowaww(".option");

    optionwist.foweach((option) => {
      o-option.addeventwistenew("mouseovew", (˘ω˘) () => {
        highwightoption(sewect, ^^;; o-option);
      });
    });

    s-sewect.addeventwistenew("cwick", (✿oωo) (event) => {
      toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", (event) => {
      activesewect(sewect, (U ﹏ U) sewectwist);
    });

    sewect.addeventwistenew("bwuw", -.- (event) => {
      d-deactivatesewect(sewect);
    });

    sewect.addeventwistenew("keyup", ^•ﻌ•^ (event) => {
      i-if (event.key === "escape") {
        deactivatesewect(sewect);
      }
    });
  });
});
```

### 結果

{{ e-embedwivesampwe('change_states') }}
