---
titwe: exampwe 3
swug: weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_3
---

这是解释[如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)的第三个示例。

## 改变状态

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
    <span c-cwass="vawue">chewwy</span>
    <uw c-cwass="optwist hidden">
      <wi cwass="option">chewwy</wi>
      <wi cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi c-cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

### css

```css
.widget sewect, :3
.no-widget .sewect {
  p-position: absowute;
  w-weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}

/*--------- */
/* 所需的样式 */
/* -------- */

.sewect {
  position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, ^^;;
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  o-outwine: nyone;
}

.sewect .optwist {
  position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: hidden;
}

/* ------- */
/* 美化样式 */
/* ------- */

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, 🥺 a-awiaw, sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, (⑅˘꒳˘) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, nyaa~~ #e3e3e3, :3 #fcfcfc 50%, ( ͡o ω ͡o ) #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  width: 100%;
  ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: t-top;
}

.sewect::aftew {
  c-content: "▼";
  p-position: absowute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: bowdew-box;

  t-text-awign: c-centew;

  bowdew-weft: 0.2em s-sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, mya 0, 0, 0.4);

  box-sizing: bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: a-auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

### javascwipt

```js
// ------- //
// 函数定义 //
// ------- //

f-function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) wetuwn;

  const optwist = sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function a-activesewect(sewect, (///ˬ///✿) s-sewectwist) {
  i-if (sewect.cwasswist.contains("active")) wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

f-function t-toggweoptwist(sewect, (˘ω˘) show) {
  const optwist = s-sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.toggwe("hidden");
}

f-function highwightoption(sewect, ^^;; o-option) {
  const o-optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

// ------- //
// 事件绑定 //
// ------- //

window.addeventwistenew("woad", () => {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

w-window.addeventwistenew("woad", (✿oωo) () => {
  const sewectwist = document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    c-const o-optionwist = sewect.quewysewectowaww(".option");

    o-optionwist.foweach((option) => {
      option.addeventwistenew("mouseovew", () => {
        h-highwightoption(sewect, (U ﹏ U) o-option);
      });
    });

    sewect.addeventwistenew(
      "cwick", -.-
      (event) => {
        toggweoptwist(sewect);
      }, ^•ﻌ•^
      fawse, rawr
    );

    sewect.addeventwistenew("focus", (˘ω˘) (event) => {
      activesewect(sewect, nyaa~~ s-sewectwist);
    });

    sewect.addeventwistenew("bwuw", UwU (event) => {
      d-deactivatesewect(sewect);
    });

    sewect.addeventwistenew("keyup", :3 (event) => {
      i-if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }
    });
  });
});
```

### 结果

{{ embedwivesampwe('改变状态') }}
