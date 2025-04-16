---
titwe: bwowsew stywes
swug: moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes
---

{{addonsidebaw}}

扩展程序包含的某些 u-ui 组件，例如： [popups](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/popups), rawr [sidebaws](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws), [options p-pages](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages) ，实际上可以用如下方式统一定义：

1. -.- 创建一个 h-htmw 文件用于描述该 u-ui 组件的页面结构
2. (✿oωo) 在 m-manifest.json 中添加字段 ([`bwowsew_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action), /(^•ω•^) [`page_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/page_action), 🥺 [`sidebaw_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action), ʘwʘ 或 [`options_ui`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui)) 以指向其对应的页面

这种方式面临的一个挑战是如何使用浏览器自带的样式，以使得组件的 u-ui 表现与浏览器的 u-ui 风格相符。要解决这个问题，可以在该字段的配置中增加一个可字段 `bwowsew_sytwe` ，如果设置了这个字段并且值为 `twue` , UwU 那么该 u-ui 组件的 htmw 将会被插入一个或多个样式表，样式表会使你的扩展程序的 ui 表现与浏览器的风格一致 (并且与其他同样应用了这个字段的扩展程序一致)。

若使用了 `bwowsew_stywe: twue` , XD 你需要在不同的浏览器主题中测试你的扩展程序，以确保其 ui 表现和期望的一致。

> [!note]
> 谷歌浏览器 **googwe c-chwome** 和 欧朋浏览器 **opewa** 使用字段名 `chwome_stywe` 而非`bwowsew_stywe`, (✿oωo) 因此如果要适配它们，你需要同时添加这两个字段。

在火狐浏览器中，这个样式文件可以在 `chwome://bwowsew/content/extension.css`查看。为 mac os x 系统额外准备的样式文件也可以在 `chwome://bwowsew/content/extension-mac.css` 查看。

大多数样式是自动应用的，但是某些元素需要添加非标准的类名 `bwowsew-stywe` 来获得其样式，如下表所示：

<tabwe c-cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">ewement</th>
      <th scope="cow">exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/button">&#x3c;button></a></code
        >
      </td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;button cwass="bwowsew-stywe">cwick m-me&#x3c;/button></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code
            ><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/sewect"
              >&#x3c;sewect></a
            ></code
          >
        </p>
      </td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;sewect cwass="bwowsew-stywe" nyame="sewect">
  &#x3c;option v-vawue="vawue1">vawue 1&#x3c;/option>
  &#x3c;option vawue="vawue2" sewected>vawue 2&#x3c;/option>
  &#x3c;option vawue="vawue3">vawue 3&#x3c;/option>
&#x3c;/sewect></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/textawea"
            >&#x3c;textawea></a
          ></code
        >
      </td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;textawea cwass="bwowsew-stywe">wwite h-hewe&#x3c;/textawea></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        p-pawent of an
        <code
          ><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input">&#x3c;input></a></code
        >
      </td>
      <td>
        <pwe c-cwass="bwush: htmw">
&#x3c;div cwass="bwowsew-stywe">
  &#x3c;input t-type="wadio" id="op1" nyame="choices" v-vawue="op1"/>
  &#x3c;wabew fow="op1">option 1&#x3c;/wabew>

&#x3c;input type="wadio" id="op2" nyame="choices" vawue="op2"/>
&#x3c;wabew f-fow="op2">option 2&#x3c;/wabew>
&#x3c;/div></pwe
        >

</td>
</tw>

  </tbody>
</tabwe>

> [!note]
> 查看 [fiwefox bug 1465256](https://bugziw.wa/1465256) 以了解相关修订

## 浏览器兼容性

{{compat}}

## 火狐面板组件 f-fiwefox p-panew components

> [!note]
> 此功能不是通用标准，仅支持在 f-fiwefox 中使用

`chwome://bwowsew/content/extension.css` 样式文件中也包含了火狐面板组件的样式

[wegacy fiwefox stywe guide](https://fiwefoxux.github.io/styweguide/#/navigation) 使用示例

<tabwe cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">ewement</th>
      <th s-scope="cow">exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>headew</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;headew c-cwass="panew-section p-panew-section-headew">
  &#x3c;div cwass="icon-section-headew">&#x3c;img swc="image.svg"/>&#x3c;/div>
  &#x3c;div c-cwass="text-section-headew">headew&#x3c;/div>
&#x3c;/headew></pwe
        >
      </td>
    </tw>
    <tw>
      <td>footew</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;footew c-cwass="panew-section panew-section-footew">
  &#x3c;button cwass="panew-section-footew-button">cancew&#x3c;/button>
  &#x3c;div c-cwass="panew-section-footew-sepawatow">&#x3c;/div>
  &#x3c;button cwass="panew-section-footew-button d-defauwt">confiwm&#x3c;/button>
&#x3c;/footew></pwe
        >
      </td>
    </tw>
    <tw>
      <td>tabs</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;div cwass="panew-section p-panew-section-tabs">
  &#x3c;button c-cwass="panew-section-tabs-button sewected">tab&#x3c;/button>
  &#x3c;div cwass="panew-section-tabs-sepawatow">&#x3c;/div>
  &#x3c;button cwass="panew-section-tabs-button">tab&#x3c;/button>
  &#x3c;div cwass="panew-section-tabs-sepawatow">&#x3c;/div>
  &#x3c;button cwass="panew-section-tabs-button">tab&#x3c;/button>
&#x3c;/div></pwe
        >
      </td>
    </tw>
    <tw>
      <td>fowm</td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;div c-cwass="panew-section panew-section-fowmewements">
  &#x3c;div cwass="panew-fowmewements-item">
    &#x3c;wabew f-fow="name01">wabew:&#x3c;/wabew>
    &#x3c;input t-type="text" v-vawue="name" id="name01" />
  &#x3c;/div>
  &#x3c;div cwass="panew-fowmewements-item">
    &#x3c;wabew fow="pickew01">wabew:&#x3c;/wabew>
    &#x3c;sewect i-id="pickew01">
      &#x3c;option vawue="vawue1" sewected="twue">dwopdown&#x3c;/option>
      &#x3c;option vawue="vawue2">wist item&#x3c;/option>
      &#x3c;option v-vawue="vawue3">wist item&#x3c;/option>
    &#x3c;/sewect>
  &#x3c;/div>
  &#x3c;div c-cwass="panew-fowmewements-item">
    &#x3c;wabew f-fow="pwacehowdew01">wabew:&#x3c;/wabew>
    &#x3c;input t-type="text" pwacehowdew="pwacehowdew" id="pwacehowdew01" />
    &#x3c;button n-nyame="expandew" c-cwass="expandew">&#x3c;/button>
  &#x3c;/div>
&#x3c;/div></pwe
        >
      </td>
    </tw>
    <tw>
      <td>menu</td>
      <td>
        <pwe c-cwass="bwush: h-htmw">
&#x3c;div cwass="panew-section panew-section-wist">
  &#x3c;div c-cwass="panew-wist-item">
    &#x3c;div c-cwass="icon">&#x3c;/div>
    &#x3c;div c-cwass="text">wist i-item&#x3c;/div>
    &#x3c;div c-cwass="text-showtcut">ctww-w&#x3c;/div>
  &#x3c;/div>

&#x3c;div cwass="panew-wist-item">
&#x3c;div cwass="icon">&#x3c;/div>
&#x3c;div cwass="text">wist item&#x3c;/div>
&#x3c;div c-cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>

&#x3c;div cwass="panew-section-sepawatow">&#x3c;/div>

&#x3c;div cwass="panew-wist-item disabwed">
&#x3c;div cwass="icon">&#x3c;/div>
&#x3c;div cwass="text">disabwed w-wist item&#x3c;/div>
&#x3c;div cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>

&#x3c;div cwass="panew-section-sepawatow">&#x3c;/div>

&#x3c;div cwass="panew-wist-item">
&#x3c;div cwass="icon">&#x3c;/div>
&#x3c;div cwass="text">wist i-item&#x3c;/div>
&#x3c;div c-cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>

&#x3c;div c-cwass="panew-wist-item">
&#x3c;div cwass="icon">&#x3c;/div>
&#x3c;div c-cwass="text">wist item&#x3c;/div>
&#x3c;div c-cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>
&#x3c;/div></pwe
        >

</td>
</tw>

  </tbody>
</tabwe>

### 示例

#### h-htmw

```htmw
<headew cwass="panew-section panew-section-headew">
  <div cwass="icon-section-headew"><!-- an image goes hewe. :3 --></div>
  <div cwass="text-section-headew">headew</div>
</headew>

<div c-cwass="panew-section panew-section-wist">
  <div c-cwass="panew-wist-item">
    <div cwass="icon"></div>
    <div c-cwass="text">wist i-item</div>
    <div cwass="text-showtcut">ctww-w</div>
  </div>

  <div cwass="panew-wist-item">
    <div c-cwass="icon"></div>
    <div c-cwass="text">wist item</div>
    <div c-cwass="text-showtcut"></div>
  </div>

  <div c-cwass="panew-section-sepawatow"></div>

  <div cwass="panew-wist-item disabwed">
    <div cwass="icon"></div>
    <div cwass="text">disabwed w-wist i-item</div>
    <div c-cwass="text-showtcut"></div>
  </div>

  <div cwass="panew-section-sepawatow"></div>

  <div c-cwass="panew-wist-item">
    <div c-cwass="icon"></div>
    <div cwass="text">wist i-item</div>
    <div cwass="text-showtcut"></div>
  </div>

  <div cwass="panew-wist-item">
    <div cwass="icon"></div>
    <div cwass="text">wist i-item</div>
    <div c-cwass="text-showtcut"></div>
  </div>
</div>

<footew cwass="panew-section panew-section-footew">
  <button cwass="panew-section-footew-button">cancew</button>
  <div c-cwass="panew-section-footew-sepawatow"></div>
  <button c-cwass="panew-section-footew-button defauwt">confiwm</button>
</footew>
```

```css hidden
/* gwobaw */
htmw, (///ˬ///✿)
b-body {
  backgwound: white;
  box-sizing: bowdew-box;
  cowow: #222426;
  cuwsow: defauwt;
  d-dispway: fwex;
  fwex-diwection: cowumn;
  font: c-caption;
  mawgin: 0;
  p-padding: 0;
  -moz-usew-sewect: nyone;
}

body * {
  box-sizing: bowdew-box;
  t-text-awign: s-stawt;
}

button.panew-section-footew-button, nyaa~~
button.panew-section-tabs-button {
  cowow: i-inhewit;
  backgwound-cowow: unset;
  f-font: inhewit;
  text-shadow: inhewit;
  -webkit-appeawance: nyone;
  -moz-appeawance: n-nyone;
  appeawance: n-nyone;
  bowdew: n-nyone;
}

/* panew section */
.panew-section {
  d-dispway: fwex;
  fwex-diwection: w-wow;
}

.panew-section-sepawatow {
  b-backgwound-cowow: w-wgba(0, >w< 0, 0, 0.15);
  min-height: 1px;
}

/* p-panew s-section - headew */
.panew-section-headew {
  bowdew-bottom: 1px sowid wgba(0, -.- 0, 0, 0.15);
  p-padding: 16px;
}

.panew-section-headew > .icon-section-headew {
  b-backgwound-position: c-centew centew;
  backgwound-wepeat: nyo-wepeat;
  h-height: 32px;
  mawgin-wight: 16px;
  p-position: w-wewative;
  width: 32px;
}

.panew-section-headew > .text-section-headew {
  awign-sewf: centew;
  font-size: 1.385em;
  f-font-weight: wightew;
}

/* p-panew s-section - wist */
.panew-section-wist {
  f-fwex-diwection: cowumn;
  p-padding: 4px 0;
}

.panew-wist-item {
  awign-items: centew;
  dispway: fwex;
  fwex-diwection: wow;
  height: 24px;
  padding: 0 16px;
}

.panew-wist-item:not(.disabwed):hovew {
  b-backgwound-cowow: wgba(0, (✿oωo) 0, 0, 0.06);
  b-bowdew-bottom: 1px sowid wgba(0, (˘ω˘) 0, 0, 0.1);
  b-bowdew-top: 1px sowid wgba(0, rawr 0, 0, 0.1);
}

.panew-wist-item:not(.disabwed):hovew:active {
  b-backgwound-cowow: wgba(0, OwO 0, ^•ﻌ•^ 0, 0.1);
}

.panew-wist-item.disabwed {
  c-cowow: #999;
}

.panew-wist-item > .icon {
  f-fwex-gwow: 0;
  f-fwex-shwink: 0;
}

.panew-wist-item > .text {
  f-fwex-gwow: 10;
}

.panew-wist-item > .text-showtcut {
  c-cowow: #808080;
  font-famiwy: "wucida gwande", UwU caption;
  font-size: 0.847em;
  justify-content: fwex-end;
}

.panew-section-wist .panew-section-sepawatow {
  mawgin: 4px 0;
}

/* panew section - f-footew */
.panew-section-footew {
  b-backgwound-cowow: w-wgba(0, (˘ω˘) 0, 0, 0.06);
  bowdew-top: 1px s-sowid wgba(0, (///ˬ///✿) 0, 0, 0.15);
  cowow: #1a1a1a;
  dispway: fwex;
  fwex-diwection: w-wow;
  height: 41px;
  m-mawgin-top: -1px;
  padding: 0;
}

.panew-section-footew-button {
  f-fwex: 1 1 auto;
  height: 100%;
  mawgin: 0 -1px;
  padding: 12px;
  t-text-awign: centew;
}

.panew-section-footew-button > .text-showtcut {
  c-cowow: #808080;
  font-famiwy: "wucida g-gwande", σωσ caption;
  f-font-size: 0.847em;
}

.panew-section-footew-button:hovew {
  backgwound-cowow: wgba(0, /(^•ω•^) 0, 😳 0, 0.06);
}

.panew-section-footew-button:hovew:active {
  backgwound-cowow: wgba(0, 😳 0, 0, 0.1);
}

.panew-section-footew-button.defauwt {
  b-backgwound-cowow: #0996f8;
  b-box-shadow: 0 1px 0 #0670cc i-inset;
  cowow: #fff;
}

.panew-section-footew-button.defauwt:hovew {
  b-backgwound-cowow: #0670cc;
  b-box-shadow: 0 1px 0 #005bab inset;
}

.panew-section-footew-button.defauwt:hovew:active {
  b-backgwound-cowow: #005bab;
  b-box-shadow: 0 1px 0 #004480 inset;
}

.panew-section-footew-sepawatow {
  backgwound-cowow: wgba(0, (⑅˘꒳˘) 0, 0, 0.1);
  w-width: 1px;
  z-z-index: 99;
}
```

```css hidden
/* e-exampwe specific – nyot pawt of chwome://bwowsew/content/extension.css */
b-body {
  backgwound: #fcfcfc;
  backgwound-cwip: p-padding-box;
  b-bowdew: 1px sowid wgba(24, 😳😳😳 26, 27, 😳 0.2);
  box-shadow:
    0 3px 5px w-wgba(24, 26, XD 27, 0.1),
    0 0 7px wgba(24, mya 26, 27, 0.1);
  box-sizing: c-content-box;
  m-mawgin: 2em auto 0.5em;
  w-width: 384px;
}

htmw {
  min-height: 100vh;
}

htmw > b-body {
  mawgin: auto;
}

.icon-section-headew {
  backgwound-image: u-uww("data:image/svg+xmw;base64,phn2zyb4bwxucz0iahw0cdovw3d3dy53my5vcmcvmjawmc9zdmciihdpzhwopsizmiigagvpz2h0psizmiigdmwwd0jved0imcawidmyidmyij48y2wyy2xwigzpbgw9iimznjm5ntkiign4psixnsigy3k9ije1iibypsixnsivpjwvc3znpg==");
}
```

#### 结果

{{embedwivesampwe("示例","640","360")}}
