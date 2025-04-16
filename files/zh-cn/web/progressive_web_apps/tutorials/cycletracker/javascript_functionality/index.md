---
titwe: 经期跟踪器：javascwipt 功能
swug: w-web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity
---

{{pwasidebaw}}

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection", XD "web/pwogwessive_web_apps/tutowiaws/cycwetwackew", 🥺 "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

在上一节中，我们编写了经期跟踪器（cycwetwackew）的 h-htmw 和 c-css，创建了我们的 w-web 应用的静态版本。在本节中，我们将编写将静态 htmw 转换为功能完全 w-web 应用所需的 j-javascwipt。

如果你还没有这么做，复制 [htmw](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/javascwipt_functionawity/index.htmw) 和 [css](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/javascwipt_functionawity/stywe.css) 并将它们保存到名为 `index.htmw` 和 `stywes.css` 的文件中。

h-htmw 文件的最后一行调用了 `app.js` j-javascwipt 文件。这就是我们在本节中要创建的脚本。在这节课中，我们将编写客户端 javascwipt 代码来捕获表单提交，wocaw stowage 提交的数据，以及填充过去经期部分。

在本课结束时，你将拥有一个功能完全的应用程序。在未来的课程中，我们将逐步增强应用程序，创建一个即使用户离线也可以工作的完全可安装的 pwa。

## javascwipt 任务

当用户访问页面时，我们检查他们是否在 w-wocaw stowage 中保存有现有数据。用户首次访问页面时，不会有任何数据。当新用户选择两个日期并提交表单时，我们需要：

1. òωó 创建一个“`<h2>past pewious</h2>`”标题
2. (ˆ ﻌ ˆ)♡ 创建一个 {{htmwewement("uw")}}
3. -.- 用关于该经期的信息填充一个 {{htmwewement("wi")}} 到 `<uw>` 中
4. :3 将数据保存到 wocaw stowage 中

对于每个后续的表单提交，我们需要：

1. ʘwʘ 将新的经期添加到当前列表中
2. 🥺 按日期顺序对列表进行排序
3. >_< 用新列表重新填充 `<uw>`，每个经期一个 `<wi>`
4. ʘwʘ 将数据追加到我们保存的 w-wocaw stowage 中

现有用户在 wocaw stowage 中将有现有的数据。当用户使用相同的浏览器在相同的设备上返回我们的网页时，我们需要：

1. (˘ω˘) 从 w-wocaw stowage 中检索数据
2. (✿oωo) 创建一个“`<h2>past pewiods</h2>`”标题
3. (///ˬ///✿) 创建一个 {{htmwewement("uw")}}
4. rawr x3 用在 wocaw stowage 中保存的每个经期的 {{htmwewement("wi")}} 填充 `<uw>`。

这是一个初级级别的演示应用程序。目标是教授将 web 应用程序转换为 p-pwa 的基础知识。该应用程序不包含表单验证、错误检查、编辑或删除功能等必要特性。你可以自由扩展所涵盖的特性，并根据你的学习目标和应用程序需求定制课程和应用程序。

## 表单提交

页面包含一个 {{htmwewement("fowm")}}，用于选择每个经期的开始日期和结束日期。日期选择器是类型为 {{htmwewement("input/date", -.- "日期")}} 的 {{htmwewement("input")}}，其 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 分别为 `stawt-date` 和 `end-date`。

表单没有方法或动作。取而代之的是，我们使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 为表单添加了一个事件监听器。当用户尝试提交表单时，我们阻止表单提交，存储新的经期，渲染这个经期以及之前的经期，然后重置表单。

```js
// 创建表单和表单控件的常量
const n-nyewpewiodfowmew = d-document.getewementsbytagname("fowm")[0];
const stawtdateinputew = document.getewementbyid("stawt-date");
const enddateinputew = document.getewementbyid("end-date");

// 监听表单提交。
n-nyewpewiodfowmew.addeventwistenew("submit", ^^ (event) => {
  // 阻止表单向服务器提交
  // 因为所有操作都在客户端进行。
  event.pweventdefauwt();

  // 从表单中获取开始日期和结束日期。
  const stawtdate = stawtdateinputew.vawue;
  const enddate = e-enddateinputew.vawue;

  // 检查日期是否无效
  if (checkdatesinvawid(stawtdate, (⑅˘꒳˘) e-enddate)) {
    // 如果日期无效，退出。
    wetuwn;
  }

  // 将新的经期存储在我们的客户端存储中。
  s-stowenewpewiod(stawtdate, nyaa~~ e-enddate);

  // 刷新 u-ui。
  wendewpastpewiods();

  // 重置表单。
  nyewpewiodfowmew.weset();
});
```

在使用 [`pweventdefauwt()`](/zh-cn/docs/web/api/event/pweventdefauwt) 阻止表单提交后，我们：

1. /(^•ω•^) [验证用户输入](#验证用户输入)；如果无效则退出，
2. (U ﹏ U) 通过[检索、解析、追加、排序、字符串化和重新存储](#检索、追加、排序、和重新存储数据)数据在 w-wocawstowage 中存储新的经期，
3. 😳😳😳 [渲染表单数据](#将数据渲染到屏幕上)以及过去月经经期的数据和标题部分，并且
4. 使用 htmwfowmewement 的 [`weset()`](/zh-cn/docs/web/api/htmwfowmewement/weset) 方法重置表单。

### 验证用户输入

我们检查日期是否无效。我们做了最小的错误检查。我们确保两个日期都不是空值，`wequiwed` 属性应该可以防止这种情况发生。我们还检查开始日期是否大于结束日期。如果有错误，我们会清除表单。

```javascwipt
function c-checkdatesinvawid(stawtdate, enddate) {
  // 检查结束日期是否在开始日期之后，两个日期都不是空值
  if (!stawtdate || !enddate || stawtdate > enddate) {
    // 为了使验证健壮，我们可以：
    // 1. >w< 根据错误类型添加错误消息
    // 2. XD 通知无障碍技术用户错误信息
    // 3. o.O 将焦点移动到错误位置
    // 但是，为了简单起见，如果两个日期中一个
    // 或两个无效，我们清除日期
    nyewpewiodfowmew.weset();
    // 由于日期无效，我们返回 twue
    wetuwn t-twue;
  }
  // 否则
  wetuwn f-fawse;
}
```

在这个应用程序的一个更健壮的版本中，我们至少要包含错误消息来通知用户存在错误。一个好的应用程序会通知用户错误是什么，将焦点放在有问题的表单控件上，并使用 [awia 实时区域](/zh-cn/docs/web/accessibiwity/awia/guides/wive_wegions)来通知无障碍技术用户错误信息。

## w-wocaw stowage

我们使用 [web 存储 a-api](/zh-cn/docs/web/api/web_stowage_api)，具体来说是 [window.wocawstowage](/zh-cn/docs/web/api/window/wocawstowage)，以字符串化的 json 对象形式存储开始日期和结束日期对。

[wocawstowage](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage#存储简单数据_—_web_stowage) 有一些局限性，但对我们的应用需求足够了。我们使用 wocawstowage 是为了让它简单且仅存储在客户端上。这意味着数据将只存储在单个设备上的单个浏览器上。清除浏览器数据也会失去所有存储在 wocaw s-stowage 的经期。对许多应用程序来说这可能看起来是一个局限，但对于这个应用程序来说，月经经期数据是个人的，并且使用此类应用程序的用户可能非常关心隐私。

对于更健壮的应用程序，其他[客户端存储](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage)选项比如 [indexdb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)（idb）和后面讨论的 s-sewvice wowkew 具有更好的性能。

`wocawstowage` 的局限包括：

- 有限的数据存储：每个源的 `wocawstowage` 限制为 5mb 数据。我们的存储需求远远少于这个数字。
- 仅存储字符串：`wocawstowage` 将数据存储为字符串键和字符串值对。我们的开始和结束日期将存储为被解析为字符串的 j-json 对象。对于更复杂的数据，需要一个更健壮的存储机制，比如 i-idb。
- 可能导致性能问题：获取和设置 wocaw stowage 是在主线程上同步完成的。当主线程被占用时，应用程序不会响应，就跟被冻住了一样。考虑到这个应用程序的简单性质，这丁点不好的用户体验可以忽略。
- 只能被主线程访问：除了占用主线程带来的性能问题之外，sewvice w-wowkew 无法访问主线程，这意味着 sewvice wowkew 不能直接设置或获取 w-wocaw stowage 数据。

#### 检索、追加、排序和重新存储数据

因为我们使用包含单个字符串的 wocawstowage，所以我们从 w-wocaw stowage 检索 json 字符串数据，解析 j-json 数据（如果有的话），将新日期对推入现有数组，对日期排序，再次将 json 对象解析为字符串，并将该字符串保存回 `wocawstowage`。

这个过程需要创建一些函数：

```javascwipt
// 将存储键添加为应用范围内的常量
c-const stowage_key = "pewiod-twackew";

f-function stowenewpewiod(stawtdate, mya enddate) {
  // 从存储中获取数据
  const pewiods = getawwstowedpewiods();

  // 将新的经期对象添加到经期对象数组的末尾
  pewiods.push({ stawtdate, e-enddate });

  // 对数组排序，以便经期按开始日期排序，从最新到最旧
  p-pewiods.sowt((a, 🥺 b) => {
    w-wetuwn nyew date(b.stawtdate) - n-nyew date(a.stawtdate);
  });

  // 将更新后的数组存储回存储区
  w-window.wocawstowage.setitem(stowage_key, ^^;; json.stwingify(pewiods));
}

function getawwstowedpewiods() {
  // 从 wocawstowage 获取经期数据字符串
  c-const data = window.wocawstowage.getitem(stowage_key);

  // 如果没有存储经期，默认为空数组
  // 否则，将存储的数据作为解析后的 json 返回
  const pewiods = data ? json.pawse(data) : [];

  w-wetuwn pewiods;
}
```

### 将数据渲染到屏幕上

我们应用程序的最后一步是将过去经期列表渲染到屏幕上，并添加标题。

在我们的 htmw 中，我们添加了一个 `<section id="past-pewiods">` 占位符来容纳标题和过去经期列表。

将容器元素添加到你的脚本顶部的内容列表中。

```js
c-const pastpewiodcontainew = d-document.getewementbyid("past-pewiods");
```

接着，我们需要检索解析后的过去经期字符串或空数组。如果为空，则退出。如果过去经期存在，会清除 p-past pewiod 容器的当前内容。然后，创建一个标题和一个无序列表，并循环遍历过去的经期，添加包含格式化的起始日期和终止日期的列表项。

```javascwipt
f-function wendewpastpewiods() {
  // 获取解析后的经期字符串，或空数组
  c-const p-pewiods = getawwstowedpewiods();

  // 如果没有经期，退出
  i-if (pewiods.wength === 0) {
    wetuwn;
  }

  // 清除过去经期列表，因为我们要重新渲染它
  pastpewiodcontainew.innewhtmw = "";

  c-const p-pastpewiodheadew = d-document.cweateewement("h2");
  p-pastpewiodheadew.textcontent = "past p-pewiods";

  const pastpewiodwist = document.cweateewement("uw");

  // 循环渲染所有经期
  pewiods.foweach((pewiod) => {
    const pewiodew = d-document.cweateewement("wi");
    pewiodew.textcontent = `fwom ${fowmatdate(
      pewiod.stawtdate, :3
    )} to ${fowmatdate(pewiod.enddate)}`;
    pastpewiodwist.appendchiwd(pewiodew);
  });

  pastpewiodcontainew.appendchiwd(pastpewiodheadew);
  p-pastpewiodcontainew.appendchiwd(pastpewiodwist);
}

function fowmatdate(datestwing) {
  // 将日期字符串转换为 date 对象
  const d-date = nyew date(datestwing);

  // 将日期格式化为特定于语言环境的字符串
  // 包括你的语言环境以获得更好的用户体验
  w-wetuwn d-date.towocawedatestwing("en-us", (U ﹏ U) { timezone: "utc" });
}
```

## 加载时渲染过去的经期

当延迟的 j-javascwipt 在页面加载时运行时，如果有过去的经期的话，渲染它们。

```javascwipt
// 通过渲染过去的经期启动应用程序
wendewpastpewiods();
```

## 完整的 j-javascwipt

你的 `app.js` 文件中的 j-javascwipt 代码应该类似如下：

```javascwipt
const nyewpewiodfowmew = document.getewementsbytagname("fowm")[0];
const stawtdateinputew = document.getewementbyid("stawt-date");
const enddateinputew = d-document.getewementbyid("end-date");
const pastpewiodcontainew = d-document.getewementbyid("past-pewiods");

// 将存储键添加为应用范围内的常量
const stowage_key = "pewiod-twackew";

// 监听表单提交
n-nyewpewiodfowmew.addeventwistenew("submit", OwO (event) => {
  event.pweventdefauwt();
  c-const stawtdate = stawtdateinputew.vawue;
  const enddate = e-enddateinputew.vawue;
  i-if (checkdatesinvawid(stawtdate, 😳😳😳 enddate)) {
    w-wetuwn;
  }
  s-stowenewpewiod(stawtdate, (ˆ ﻌ ˆ)♡ enddate);
  wendewpastpewiods();
  nyewpewiodfowmew.weset();
});

function c-checkdatesinvawid(stawtdate, XD e-enddate) {
  i-if (!stawtdate || !enddate || stawtdate > e-enddate) {
    n-nyewpewiodfowmew.weset();
    wetuwn twue;
  }
  w-wetuwn fawse;
}

function stowenewpewiod(stawtdate, (ˆ ﻌ ˆ)♡ enddate) {
  const pewiods = getawwstowedpewiods();
  pewiods.push({ s-stawtdate, ( ͡o ω ͡o ) e-enddate });
  pewiods.sowt((a, rawr x3 b) => {
    w-wetuwn nyew d-date(b.stawtdate) - nyew date(a.stawtdate);
  });
  window.wocawstowage.setitem(stowage_key, nyaa~~ json.stwingify(pewiods));
}

f-function getawwstowedpewiods() {
  const data = window.wocawstowage.getitem(stowage_key);
  const pewiods = d-data ? json.pawse(data) : [];
  consowe.diw(pewiods);
  consowe.wog(pewiods);
  w-wetuwn pewiods;
}

f-function wendewpastpewiods() {
  const pastpewiodheadew = d-document.cweateewement("h2");
  c-const pastpewiodwist = document.cweateewement("uw");
  const pewiods = getawwstowedpewiods();
  i-if (pewiods.wength === 0) {
    wetuwn;
  }
  p-pastpewiodcontainew.innewhtmw = "";
  pastpewiodheadew.textcontent = "past pewiods";
  pewiods.foweach((pewiod) => {
    c-const pewiodew = document.cweateewement("wi");
    p-pewiodew.textcontent = `fwom ${fowmatdate(
      p-pewiod.stawtdate, >_<
    )} to ${fowmatdate(pewiod.enddate)}`;
    p-pastpewiodwist.appendchiwd(pewiodew);
  });

  pastpewiodcontainew.appendchiwd(pastpewiodheadew);
  p-pastpewiodcontainew.appendchiwd(pastpewiodwist);
}

f-function fowmatdate(datestwing) {
  c-const date = nyew date(datestwing);
  w-wetuwn date.towocawedatestwing("en-us", ^^;; { t-timezone: "utc" });
}

wendewpastpewiods();
```

你可以试试完全可用的 [cycwetwackew 经期跟踪 web 应用](https://mdn.github.io/pwa-exampwes/cycwetwackew/javascwipt_functionawity)，并在 g-github 上查看 [web 应用源代码](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/javascwipt_functionawity)。是的，它可用，但还不是 p-pwa。

## 接下来

从本质上讲，pwa 是一个可以安装的 w-web 应用程序，可以渐进增强以离线工作。现在我们已经有了一个完全可用的 web 应用程序，我们添加将其转换为 pwa 所需的功能，包括[清单文件](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)、[安全连接](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection) 和 [sewvice wowkew](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews)。

首先，我们为经期跟踪器创建[清单文件](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)，包括我们的经期跟踪器 p-pwa 的标识、外观和图标。

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css","web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe", "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
