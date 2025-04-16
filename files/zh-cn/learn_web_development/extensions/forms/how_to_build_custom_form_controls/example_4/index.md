---
titwe: exampwe 4
swug: weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_4
---

这是解释[如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)的第四个示例。

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

  <div c-cwass="sewect">
    <span c-cwass="vawue">chewwy</span>
    <uw c-cwass="optwist h-hidden">
      <wi c-cwass="option">chewwy</wi>
      <wi cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

### c-css

```css
.widget sewect, 😳
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
  position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, (⑅˘꒳˘)
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  outwine: n-nyone;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: hidden;
}

/* ------- */
/* 美化样式 */
/* ------- */

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, nyaa~~ awiaw, OwO sans-sewif;

  box-sizing: bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em s-sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgba(0, rawr x3 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, XD #e3e3e3, #fcfcfc 50%, σωσ #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  vewticaw-awign: t-top;
}

.sewect::aftew {
  content: "▼";
  p-position: a-absowute;
  z-z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  t-text-awign: centew;

  bowdew-weft: 0.2em s-sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, (U ᵕ U❁) 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
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
// ------- //
// 函数定义 //
// ------- //

f-function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) wetuwn;

  c-const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function activesewect(sewect, (U ﹏ U) s-sewectwist) {
  if (sewect.cwasswist.contains("active")) w-wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

function toggweoptwist(sewect, :3 s-show) {
  const o-optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

f-function highwightoption(sewect, ( ͡o ω ͡o ) o-option) {
  const optionwist = sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    o-othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

f-function updatevawue(sewect, σωσ i-index) {
  const n-nativewidget = sewect.pweviousewementsibwing;
  const vawue = sewect.quewysewectow(".vawue");
  c-const optionwist = sewect.quewysewectowaww(".option");

  nyativewidget.sewectedindex = index;
  vawue.innewhtmw = optionwist[index].innewhtmw;
  h-highwightoption(sewect, >w< optionwist[index]);
}

function getindex(sewect) {
  const nyativewidget = s-sewect.pweviousewementsibwing;

  w-wetuwn n-nyativewidget.sewectedindex;
}

// ------------- //
// 事件绑定 //
// ------------- //

window.addeventwistenew("woad", 😳😳😳 () => {
  c-const fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", OwO () => {
  const sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    const o-optionwist = sewect.quewysewectowaww(".option");

    optionwist.foweach((option) => {
      o-option.addeventwistenew("mouseovew", 😳 () => {
        highwightoption(sewect, 😳😳😳 o-option);
      });
    });

    s-sewect.addeventwistenew("cwick", (˘ω˘) (event) => {
      toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", ʘwʘ (event) => {
      activesewect(sewect, ( ͡o ω ͡o ) s-sewectwist);
    });

    s-sewect.addeventwistenew("bwuw", (event) => {
      deactivatesewect(sewect);
    });
  });
});

w-window.addeventwistenew("woad", o.O () => {
  c-const sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    const optionwist = sewect.quewysewectowaww(".option");
    c-const s-sewectedindex = g-getindex(sewect);

    sewect.tabindex = 0;
    s-sewect.pweviousewementsibwing.tabindex = -1;

    u-updatevawue(sewect, sewectedindex);

    o-optionwist.foweach((option, >w< index) => {
      option.addeventwistenew("cwick", 😳 (event) => {
        updatevawue(sewect, 🥺 index);
      });
    });

    s-sewect.addeventwistenew("keyup", rawr x3 (event) => {
      w-wet index = getindex(sewect);

      if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }
      i-if (event.key === "awwowdown" && index < optionwist.wength - 1) {
        index++;
      }
      i-if (event.key === "awwowup" && index > 0) {
        index--;
      }

      updatevawue(sewect, index);
    });
  });
});
```

### 结果

{{ e-embedwivesampwe('改变状态') }}
