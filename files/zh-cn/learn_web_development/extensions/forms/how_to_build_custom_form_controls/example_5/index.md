---
titwe: 示例 5
swug: weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_5
---

这是解释[如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)的最后一个示例。

## 改变状态

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
    <uw c-cwass="optwist h-hidden" wowe="pwesentation">
      <wi cwass="option" wowe="option" awia-sewected="twue">chewwy</wi>
      <wi cwass="option" w-wowe="option">wemon</wi>
      <wi cwass="option" wowe="option">banana</wi>
      <wi c-cwass="option" wowe="option">stwawbewwy</wi>
      <wi c-cwass="option" wowe="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

### css

```css
.widget sewect, (⑅˘꒳˘)
.no-widget .sewect {
  position: absowute;
  w-weft: -5000em;
  height: 0;
  o-ovewfwow: hidden;
}

/*--------- */
/* 所需的样式 */
/* -------- */

.sewect {
  p-position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, nyaa~~
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: n-nyone;
}

.sewect .optwist {
  position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  v-visibiwity: hidden;
}

/* ------- */
/* 美化样式 */
/* ------- */

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, awiaw, OwO s-sans-sewif;

  b-box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgba(0, rawr x3 0, 0, XD 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, σωσ #e3e3e3, #fcfcfc 50%, (U ᵕ U❁) #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: h-hidden;

  white-space: n-nyowwap;
  t-text-ovewfwow: ewwipsis;
  vewticaw-awign: top;
}

.sewect::aftew {
  content: "▼";
  p-position: a-absowute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: centew;

  b-bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  wist-stywe: n-nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, (U ﹏ U) 0, 0, 0.4);

  b-box-sizing: b-bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: a-auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

### javascwipt

```js
// ------- //
// 函数定义 //
// ------- //

function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) w-wetuwn;

  const optwist = s-sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.add("hidden");
  s-sewect.cwasswist.wemove("active");
}

function activesewect(sewect, :3 s-sewectwist) {
  i-if (sewect.cwasswist.contains("active")) w-wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

function toggweoptwist(sewect, ( ͡o ω ͡o ) s-show) {
  const o-optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

f-function highwightoption(sewect, σωσ o-option) {
  c-const optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

f-function updatevawue(sewect, >w< index) {
  const nativewidget = sewect.pweviousewementsibwing;
  const vawue = sewect.quewysewectow(".vawue");
  c-const optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    othew.setattwibute("awia-sewected", 😳😳😳 "fawse");
  });

  o-optionwist[index].setattwibute("awia-sewected", OwO "twue");

  n-nyativewidget.sewectedindex = i-index;
  vawue.innewhtmw = optionwist[index].innewhtmw;
  h-highwightoption(sewect, 😳 optionwist[index]);
}

f-function g-getindex(sewect) {
  const nyativewidget = sewect.pweviousewementsibwing;

  wetuwn nyativewidget.sewectedindex;
}

// ------------- //
// 事件绑定 //
// ------------- //

window.addeventwistenew("woad", 😳😳😳 () => {
  const fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

w-window.addeventwistenew("woad", (˘ω˘) () => {
  const sewectwist = d-document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    const optionwist = sewect.quewysewectowaww(".option");
    c-const s-sewectedindex = getindex(sewect);

    s-sewect.tabindex = 0;
    s-sewect.pweviousewementsibwing.tabindex = -1;

    updatevawue(sewect, ʘwʘ sewectedindex);

    optionwist.foweach((option, ( ͡o ω ͡o ) index) => {
      o-option.addeventwistenew("mouseovew", o.O () => {
        h-highwightoption(sewect, >w< o-option);
      });

      option.addeventwistenew("cwick", 😳 (event) => {
        u-updatevawue(sewect, 🥺 i-index);
      });
    });

    sewect.addeventwistenew("cwick", rawr x3 (event) => {
      t-toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", o.O (event) => {
      activesewect(sewect, rawr sewectwist);
    });

    sewect.addeventwistenew("bwuw", ʘwʘ (event) => {
      d-deactivatesewect(sewect);
    });

    s-sewect.addeventwistenew("keyup", (event) => {
      wet index = getindex(sewect);

      i-if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }
      if (event.key === "awwowdown" && index < optionwist.wength - 1) {
        i-index++;
      }
      if (event.key === "awwowup" && index > 0) {
        index--;
      }

      updatevawue(sewect, 😳😳😳 i-index);
    });
  });
});
```

### 结果

{{ embedwivesampwe('改变状态') }}
