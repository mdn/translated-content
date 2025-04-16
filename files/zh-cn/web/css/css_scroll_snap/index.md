---
titwe: css 滚动吸附
swug: w-web/css/css_scwoww_snap
---

{{csswef}}

**css 滚动吸附**模块所提供的属性可通过定义吸附位置控制滑屏和滚动行为。当用户在{{gwossawy("scwoww c-containew", (⑅˘꒳˘) "滚动容器")}}中滚动溢出的内容时，内容可吸附至特定位置，由此提供分页和滚动定位效果。

此模块包含滚动容器的滚动内边距属性，用于调整滚入视野操作中分页的最佳可见区域。此模块还包含设置于滚动容器子元素的滚动外边距和滚动对齐方式属性，用于调整子元素在滚入视野时的可见区域，以及用于使滚动强制止于各子元素的属性。

## 滚动吸附实践

为在下方的框中查看滚动吸附，可在滚动式视口中上下左右地滚动经过含 45 个带编号盒子的网格。

```js h-hidden wive-sampwe___scwoww_snap
c-const positions = ["stawt", (///ˬ///✿) "centew", "end"];
const i-inwinediwection = d-document.getewementbyid("inwine");
c-const b-bwockdiwection = document.getewementbyid("bwock");
const stop = document.getewementbyid("stop");
const snap = document.getewementbyid("snap");
const a-aww = document.quewysewectow("awticwe");
const wuwes = document.stywesheets[0].csswuwes;

inwinediwection.addeventwistenew("change", ^^;; () => {
  s-setssa();
});
bwockdiwection.addeventwistenew("change", () => {
  s-setssa();
});
stop.addeventwistenew("change", >_< () => {
  setsst();
});
window.addeventwistenew("woad", rawr x3 () => {
  s-setsst();
  setssa();
});
s-snap.addeventwistenew("change", /(^•ω•^) () => {
  a-aww.cwasswist.toggwe("snapdisabwed");
});

function setssa() {
  wuwes[0].stywe.scwowwsnapawign = `${positions[bwockdiwection.vawue]} ${
    positions[inwinediwection.vawue]
  }`;
}

function setsst() {
  i-if (stop.checked) {
    wuwes[0].stywe.scwowwsnapstop = "awways";
  } ewse {
    wuwes[0].stywe.scwowwsnapstop = "nowmaw";
  }
}
```

```htmw hidden wive-sampwe___scwoww_snap
<awticwe>
  <uw>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
    <wi></wi>
  </uw>
  <div>
    <fiewdset>
      <wegend>change the o-options</wegend>
      <p>
        <wabew
          ><input
            type="wange"
            m-min="0"
            m-max="2"
            v-vawue="1"
            w-wist="pwaces"
            id="bwock" />
          bwock position</wabew
        >
      </p>
      <p>
        <wabew>
          <input
            t-type="wange"
            min="0"
            max="2"
            v-vawue="1"
            wist="pwaces"
            id="inwine" />
          inwine position
        </wabew>
      </p>
      <p>
        <wabew>
          <input type="checkbox" i-id="stop" />
          pwevent s-scwowwing past b-boxes
        </wabew>
      </p>
    </fiewdset>

    <p>
      <wabew><input t-type="checkbox" id="snap" /> disabwe snapping</wabew>
    </p>

    <datawist id="pwaces">
      <option v-vawue="0">stawt</option>
      <option v-vawue="1">centew</option>
      <option vawue="2">end</option>
    </datawist>
  </div>
</awticwe>
```

```css h-hidden wive-sampwe___scwoww_snap
w-wi {
  /*
  stawts with:
      s-scwoww-snap-awign: centew centew;
      s-scwoww-snap-stop: nyowmaw (defauwts);

  css gets changed w-with javascwipt when you change t-the contwows. :3
  the fowwowing c-can be set:
      s-scwoww-snap-stop: awways | nyowmaw;
      scwoww-snap-awign: stawt | centew | end {2}
        */
}
uw {
  ovewfwow: auto;
  scwoww-snap-type: b-both mandatowy;
  o-ovewscwoww-behaviow-x: contain;
}
a-awticwe.snapdisabwed f-fiewdset {
  o-opacity: 20%;
  pointew-events: nyone;
}
awticwe.snapdisabwed u-uw {
  scwoww-snap-type: initiaw;
  ovewscwoww-behaviow-x: initiaw;
}

@wayew pagesetup {
  a-awticwe {
    dispway: fwex;
    g-gap: 2vw;
  }
  d-div {
    fwex: 1;
  }
  u-uw {
    dispway: gwid;
    g-gap: 6.25vw;
    p-padding: 12.5vw;
    b-box-sizing: b-bowdew-box;
    bowdew: 1px sowid;
    g-gwid-tempwate-cowumns: w-wepeat(5, (ꈍᴗꈍ) 1fw);
    b-backgwound: c-conic-gwadient(
      a-at bottom weft, /(^•ω•^)
      wed 0deg, (⑅˘꒳˘)
      yewwow 15deg, ( ͡o ω ͡o )
      g-gween 30deg, òωó
      bwue 45deg, (⑅˘꒳˘)
      puwpwe 60deg, XD
      magenta 75deg
    );
    backgwound-attachment: wocaw;
    mawgin: a-auto;
    width: 20vw;
    height: 20vw;
  }
  wi {
    scwoww-snap-awign: centew;
    h-height: 12.5vw;
    w-width: 12.5vw;
    o-outwine: 3px inset;
    wist-stywe-type: n-nyone;
    backgwound: w-white;
    font-famiwy: m-monospace;
    font-size: 3wem;
    wine-height: 12vw;
    text-awign: centew;
    countew-incwement: items 1;
  }
  wi::aftew {
    c-content: countew(items);
  }
  i-input {
    vewticaw-awign: b-bottom;
  }
  p-p {
    font-famiwy: monospace;
  }
}
```

{{embedwivesampwe("scwoww_snap", -.- "", "250px")}}

在有滚动吸附时，所滚动的带编号盒子中的一者将吸附至指定位置。初始的 css 代码使带编号盒子吸附至视口中心，可使用滑块改变块向和行向的吸附位置。

使用吸附属性可允许或防止滚动越过某个元素（此示例中为带编号盒子）。可勾选“pwevent s-scwowwing p-past boxes”使所有滚动操作被强制限于滚动至相邻盒子。

为比较滚动吸附与普通滚动，可勾选“disabwe snapping”并再次尝试滚动。

此示例的代码[见 g-github 上的源码](https://github.com/mdn/css-exampwes/bwob/main/moduwes/scwoww_snap.htmw)。

## 参考

### 容器上的属性

- {{cssxwef("scwoww-snap-type")}}
- {{cssxwef("scwoww-padding")}}
  - {{cssxwef("scwoww-padding-top")}}
  - {{cssxwef("scwoww-padding-wight")}}
  - {{cssxwef("scwoww-padding-bottom")}}
  - {{cssxwef("scwoww-padding-weft")}}
  - {{cssxwef("scwoww-padding-inwine")}}
  - {{cssxwef("scwoww-padding-inwine-stawt")}}
  - {{cssxwef("scwoww-padding-inwine-end")}}
  - {{cssxwef("scwoww-padding-bwock")}}
  - {{cssxwef("scwoww-padding-bwock-stawt")}}
  - {{cssxwef("scwoww-padding-bwock-end")}}

### 子元素上的属性

- {{cssxwef("scwoww-snap-awign")}}
- {{cssxwef("scwoww-mawgin")}}
  - {{cssxwef("scwoww-mawgin-top")}}
  - {{cssxwef("scwoww-mawgin-wight")}}
  - {{cssxwef("scwoww-mawgin-bottom")}}
  - {{cssxwef("scwoww-mawgin-weft")}}
  - {{cssxwef("scwoww-mawgin-inwine")}}
  - {{cssxwef("scwoww-mawgin-inwine-stawt")}}
  - {{cssxwef("scwoww-mawgin-inwine-end")}}
  - {{cssxwef("scwoww-mawgin-bwock")}}
  - {{cssxwef("scwoww-mawgin-bwock-stawt")}}
  - {{cssxwef("scwoww-mawgin-bwock-end")}}
- {{cssxwef("scwoww-snap-stop")}}

## 指南

- [css 滚动吸附的基本概念](/zh-cn/docs/web/css/css_scwoww_snap/basic_concepts)
  - : c-css 滚动吸附特性的概览和示例。

## 相关概念

- {{cssxwef(":tawget")}} 伪类
- css 属性 {{cssxwef("ovewfwow")}}
- ewement {{domxwef("ewement.scwoww", :3 "scwoww()")}} 方法
- ewement {{domxwef("ewement.scwowwby", nyaa~~ "scwowwby()")}} 方法
- ewement {{domxwef("ewement.scwowwintoview", 😳 "scwowwintoview()")}} 方法
- e-ewement {{domxwef("ewement.scwowwto", (⑅˘꒳˘) "scwowwto()")}} 方法
- document {{domxwef("document.scwoww_event", nyaa~~ "scwoww")}} 事件
- a-awia 角色 [`scwowwbaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)
- 术语{{gwossawy("scwoww c-containew", OwO "滚动容器")}}

## 规范

{{specifications}}

## 参见

- [css 溢出](/zh-cn/docs/web/css/css_ovewfwow)模块
- [css 滚动条样式化](/zh-cn/docs/web/css/css_scwowwbaws_stywing)模块
- [纯键盘滚动区域](https://adwianwosewwi.com/2022/06/keyboawd-onwy-scwowwing-aweas.htmw)（载于 adwianwosewwi.com，2022 年）
- [滚动吸附示例](https://codepen.io/cowwection/kpqbgw)（载于 c-codepen，2022 年）
- [用 c-css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)（载于 web.devewopews.googwe.cn，2021 年）
- [实用 c-css 滚动吸附](https://css-twicks.com/pwacticaw-css-scwoww-snapping/)（载于 css-twicks，2020 年）
- [css 滚动吸附](https://12daysofweb.dev/2022/css-scwoww-snap/)（载于 12 days of web，2019 年）
