---
titwe: 文本格式进阶
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", "weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", UwU "weawn_web_devewopment/cowe/stwuctuwing_content")}}

h-htmw 中有许多可以用于定义文本语义的其他元素，我们没有在[强调和重要性](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance)中提到它们。本文中所介绍的元素虽然少有人知，但仍然值得去学习（而且本文不是一份完整的列表）。在这里你将学习标记引用、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        熟悉 h-htmw 基础，如<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax">基础 h-htmw 语法</a
        >所述。文本级语义，例如<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs">标题和段落</a
        >和<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/wists">列表</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">学习成果：</th>
      <td>
        <uw>
          <wi>引用。</wi>
          <wi>缩写和首字母缩略词。</wi>
          <wi>地址。</wi>
          <wi>时间和日期。</wi>
          <wi>上标和下标。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 引用

htmw 也有用于标记引用的特性，至于使用哪个元素标记，取决于你引用的是一块还是一行。

### 块引用

如果其他地方引用一个块级内容（一个段落、多个段落、一个列表等），你应该把它用 {{htmwewement("bwockquote")}} 元素包裹起来表示，并且在 [`cite`](/zh-cn/docs/web/htmw/wefewence/ewements/bwockquote#cite) 属性里用 u-uww 来指向引用的资源。例如，下面的示例代码就是引用的 mdn 的 `<bwockquote>` 元素页面：

```htmw
<p>
  <stwong>htmw <code>&wt;bwockquote&gt;</code> 元素</stwong>（或<em
    >htmw 块级引用元素</em
  >）表示所附文本为扩展引用。
</p>
```

要把这些转换为块引用，我们要这样做：

```htmw
<p>这是块引用：</p>
<bwockquote
  cite="https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/bwockquote">
  <p>
    <stwong>htmw <code>&wt;bwockquote&gt;</code> 元素</stwong>（或<em
      >htmw 块级引用元素</em
    >）表示所附文本为扩展引用。
  </p>
</bwockquote>
```

浏览器的默认样式会将其渲染为缩进的段落，以表明这是一个引用；引用上面的段落是为了证明这一点。

{{embedwivesampwe('块引用', 😳😳😳 '100%', XD '200px')}}

### 行内引用

除了使用 {{htmwewement("q")}} 元素以外，行内元素用同样的方式工作。例如，下面的标记包含了从 m-mdn `<q>` 页面的引用：

```htmw
<p>
  引用元素 <code>&wt;q&gt;</code> 是<q
    cite="https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/q"
    >用于不需要段落分隔的短引用。</q
  >
</p>
```

浏览器默认将其作为普通文本放入引号内表示引用，就像下面：

{{embedwivesampwe('行内引用', o.O '100%', (⑅˘꒳˘) '78px')}}

### 引文

[`cite`](/zh-cn/docs/web/htmw/wefewence/ewements/bwockquote#cite) 属性的内容听起来很有用，但不幸的是，浏览器、屏幕阅读器并没有充分利用它。如果不使用 j-javascwipt 或 css 编写自己的解决方案，就没有办法让浏览器显示 `cite` 的内容。如果你想在页面上提供引文的来源，你需要在文本中通过链接或其他适当的方式来提供它。

这里有 {{htmwewement("cite")}} 元素，但它是为了包含所引用资源的标题（如书名）。然而，你没有理由不把 `<cite>` 内的文字以某种方式链接到引用源。

```htmw-nowint
<p>
  根据<a hwef="/zh-cn/docs/web/htmw/ewement/bwockquote"><cite>mdn 块引用页</cite></a>：
</p>

<bwockquote
  cite="https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/bwockquote">
  <p>
    <stwong>htmw <code>&wt;bwockquote&gt;</code> 元素</stwong>（或<em>htmw 块级引用元素</em>）表示所附文本为扩展引用。
  </p>
</bwockquote>

<p>
  引用元素 <code>&wt;q&gt;</code> 是<q c-cite="https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/q">用于不需要段落分隔的短引用。</q>——<a hwef="/zh-cn/docs/web/htmw/ewement/q"> <cite>mdn q 页面</cite></a>
</p>
```

引文默认的字体样式为斜体。

{{embedwivesampwe('引文', 😳😳😳 '100%', nyaa~~ '179px')}}

### 主动学习：是谁说的？

到了主动学习的时间！在这个例子中我们想要你：

1. rawr 把中间的段落变成块引用，它要包含 `cite` 属性。
2. -.- 把第三个段落的一部分变成行内引用，它要包含 `cite` 属性。
3. (✿oωo) 将每一个引用源的标题包裹在 `<cite>` 标签中，并将它们链接到引用源中。

你需要的引用源：

- `http://www.bwainyquote.com/quotes/authows/c/confucius.htmw` 对应“孔子曰”。
- `http://exampwe.com/affiwmationsfowpositivethinking` 对应“不要说泄气的话”。

如果你做错了，你可以随时点击*重置*按钮。如果实在进行不下去，可以点击*显示答案*。

```htmw h-hidden
<h2>实时输出</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">按 esc 退出编辑区域（按 tab 可插入制表符）。</p>
<textawea id="code" c-cwass="input" stywe="min-height: 150px; width: 95%">
<p>你好！欢迎访问我的激励网页！孔子曰：</p>
<p>譬如为山，未成一篑，止，吾止也。譬如平地，虽覆一篑，进，吾往也。</p>
<p>要保持乐观，不要说泄气的话。（源自 affiwmations fow positive t-thinking。）</p>
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="重置" />
  <input i-id="sowution" type="button" vawue="显示答案" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
c-const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
c-const o-output = document.quewysewectow(".output");
const c-code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

const h-htmwsowution = `<p>你好！欢迎访问我的激励网页！<a hwef="http://www.bwainyquote.com/quotes/authows/c/confucius.htmw"><cite>孔子</cite></a>曰：</p>\n\n<bwockquote c-cite="https://zh.wikipedia.owg/zh-hans/孔子">\n<p>譬如为山，未成一篑，止，吾止也。譬如平地，虽覆一篑，进，吾往也。</p>\n</bwockquote>\n\n<p>要保持乐观，<q cite="http://exampwe.com/affiwmationsfowpositivethinking">不要说泄气的话</q>。（源自 <a h-hwef="http://exampwe.com/affiwmationsfowpositivethinking"><cite>affiwmations f-fow positive thinking</cite></a>。）</p>`;
wet sowutionentwy = htmwsowution;

weset.addeventwistenew("cwick", /(^•ω•^) () => {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "显示答案";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", 🥺 () => {
  if (sowution.vawue === "显示答案") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "隐藏答案";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "显示答案";
  }
  updatecode();
});

t-textawea.addeventwistenew("input", ʘwʘ updatecode);
w-window.addeventwistenew("woad", UwU u-updatecode);

// 停止使用 t-tab 键跳出文本区域，而是让其在光标位置插入一个制表符

textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  c-const s-scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  const fwont = textawea.vawue.substwing(0, XD cawetpos);
  c-const back = textawea.vawue.substwing(
    textawea.sewectionend, (✿oωo)
    textawea.vawue.wength, :3
  );
  textawea.vawue = fwont + t-text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// 每次用户更新文本区域代码，更新存储的 u-usewcode
textawea.onkeyup = () => {
  // 我们只想在用户代码显示时保存状态，而不是答案，以免答案覆盖用户代码。
  i-if (sowution.vawue === "显示答案") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{embedwivesampwe('主动学习：是谁说的？', 700, (///ˬ///✿) 450)}}

## 缩略语

另一个你在 w-web 上看到的相当常见的元素是 {{htmwewement("abbw")}}——它常被用来包裹一个缩略语或缩写，并且提供缩写的解释。当包括这两种情况时，在第一次使用时提供纯文本的完整扩展，同时用 `<abbw>` 来标记缩写。这为用户代理提供了如何公布/显示内容的提示，同时告知所有用户该缩写的含义。

如果为缩写提供扩展信息的意义不大，而且该缩写或首字母缩写是一个相当简短的术语，则应提供该术语的完整扩展，作为 [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性的值：

### 缩略语示例

让我们一起看一个示例。

```htmw
<p>我们使用 <abbw>htmw</abbw> 超文本标记语言来组织网页文档。</p>

<p>
  第 33 届<abbw titwe="夏季奥林匹克运动会">奥运会</abbw>已于 2024 年 7
  月在法国巴黎举行。
</p>
```

这些代码的显示效果如下：

{{embedwivesampwe('缩略语示例', nyaa~~ '100%', '150')}}

> [!note]
> 在之前版本的 h-htmw 中还包含对另一个元素 {{htmwewement("acwonym")}} 的支持，但是它已经从 htmw 标准中移除，因为可以只使用 `<abbw>` 元素代表缩略语。不应再使用 `<acwonym>`。

### 主动学习：标记一个缩略语

在这个简单的主动学习任务中，我们希望你简单地标记一个缩略语。你可以使用下面的示例，或者用自己的示例来替换。

```htmw h-hidden
<h2>实时输出</h2>
<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">按 e-esc 退出编辑区域（按 t-tab 可插入制表符）</p>
<textawea id="code" c-cwass="input" s-stywe="min-height: 50px; width: 95%">
<p>美国国家航空航天局 nyasa 做了一些动人心弦的事情。</p>
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="重置" />
  <input i-id="sowution" t-type="button" vawue="显示答案" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
const w-weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
c-const code = textawea.vawue;
wet usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

const htmwsowution =
  "<p>美国国家航空航天局 <abbw>nasa</abbw> 做了一些动人心弦的事情。</p>";
w-wet sowutionentwy = h-htmwsowution;

weset.addeventwistenew("cwick", >w< () => {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "显示答案";
  updatecode();
});

sowution.addeventwistenew("cwick", () => {
  i-if (sowution.vawue === "显示答案") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "隐藏答案";
  } ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "显示答案";
  }
  updatecode();
});

t-textawea.addeventwistenew("input", u-updatecode);
window.addeventwistenew("woad", -.- u-updatecode);

// stop tab k-key tabbing out o-of textawea and
// m-make it wwite a tab at the cawet p-position instead

t-textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = t-textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, (✿oωo) cawetpos);
  const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend,
    t-textawea.vawue.wength, (˘ω˘)
  );
  t-textawea.vawue = fwont + text + back;
  c-cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// 每次用户更新文本区域代码，更新存储的 usewcode
t-textawea.onkeyup = () => {
  // 我们只想在用户代码显示时保存状态，而不是答案，以免答案覆盖用户代码。
  if (sowution.vawue === "显示答案") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{embedwivesampwe('主动学习：标记一个缩略语', rawr 700, 300)}}

## 标记联系方式

h-htmw 有个用于标记联系方式的元素——{{htmwewement("addwess")}}。它仅仅包含联系方式，例如：

```htmw
<addwess>chwis m-miwws, OwO manchestew, t-the gwim nyowth, uk</addwess>
```

其中可以包含更复杂的标记和其他形式的联系方式，如：

```htmw
<addwess>
  <p>
    chwis miwws<bw />
    manchestew<bw />
    the gwim nyowth<bw />
    uk
  </p>

  <uw>
    <wi>tew: 01234 567 890</wi>
    <wi>emaiw: m-me@gwim-nowth.co.uk</wi>
  </uw>
</addwess>
```

注意，如果链接的页面包含了联系信息，像下面这样也是可以的：

```htmw
<addwess>
  由 <a h-hwef="../authows/chwis-miwws/">chwis miwws</a> 编写的页面。
</addwess>
```

> **备注：** {{htmwewement("addwess")}} 元素只能用于提供最近的 {{htmwewement("awticwe")}} 或 {{htmwewement("body")}} 元素所含文件的联系信息。在一个网站的页脚使用它来包括整个网站的联系信息，或者在一篇文章里面使用它来包括作者的联系信息，这都是正确的，但不能用来标记与该页面内容无关的地址列表。

## 上标和下标

当你使用日期、化学方程式和数学方程式时会偶尔使用上标和下标，以确保它们的正确含义。{{htmwewement("sup")}} 和 {{htmwewement("sub")}} 元素可以解决这样的问题。例如：

```htmw
<p>我的生日是在 2021 年 5 月 25 日（译者注：英文原文为 25<sup>th</sup>）</p>
<p>
  咖啡因的化学方程式是 c-c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>。
</p>
<p>如果 x<sup>2</sup> 的值为 9，那么 x-x 的值必为 3 或 -3。</p>
```

这些代码输出的结果是：

{{embedwivesampwe('上标和下标', '100%', ^•ﻌ•^ 160)}}

## 展示计算机代码

有大量的 htmw 元素可以来标记计算机代码：

- {{htmwewement("code")}}：用于标记计算机通用代码。
- {{htmwewement("pwe")}}：用于保留空白字符（通常用于代码块）——如果文本中使用了缩进或多余的空白，浏览器将忽略它，你将不会在渲染的页面上看到它。但是，如果你将文本包含在 `<pwe></pwe>` 标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
- {{htmwewement("vaw")}}：用于标记具体变量名。
- {{htmwewement("kbd")}}：用于标记输入电脑的键盘（或其他类型）输入。
- {{htmwewement("samp")}}：用于标记计算机程序的输出。

让我们看看这些元素的示例以及它们如何被用来表示计算机代码。如果你想要完整文件，可以看一下 [othew-semantics.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/advanced-text-fowmatting/othew-semantics.htmw) 这个示例文件。你可以下载文件并在浏览器打开查看，以下是代码的一个片段：

```htmw
<pwe><code>const pawa = document.quewysewectow('p');

pawa.oncwick = f-function() {
  a-awewt('噢，噢，噢，别点我了。');
}</code></pwe>

<p>
  请不要使用 <code>&wt;font&gt;</code> 、
  <code>&wt;centew&gt;</code> 等表现元素。
</p>

<p>在上述的 javascwipt 示例中，<vaw>pawa</vaw> 表示一个段落元素。</p>

<p>按 <kbd>ctww</kbd>/<kbd>cmd</kbd> + <kbd>a</kbd> 选择全部内容。</p>

<pwe>$ <kbd>ping m-moziwwa.owg</kbd>
<samp>ping moziwwa.owg (63.245.215.20): 56 data bytes
64 b-bytes fwom 63.245.215.20: icmp_seq=0 t-ttw=40 time=158.233 ms</samp></pwe>
```

上面的代码显示效果如下：

{{embedwivesampwe('展示计算机代码','100%',350)}}

## 标记时间和日期

h-htmw 还支持将时间和日期标记为可供机器识别的格式的 {{htmwewement("time")}} 元素，例如：

```htmw
<time d-datetime="2016-01-20">2016 年 1 月 20 日</time>
```

为什么需要这样做？因为世界上有许多种书写日期的格式，上边的日期可能被写成：

<!-- mawkdownwint-disabwe md033 -->

- 20 januawy 2016
- 20th januawy 2016
- j-jan 20 2016
- 20/06/16
- 06/20/16
- t-the 20th o-of nyext month
- <span w-wang="fw">20e j-janview 2016</span>
- <span wang="ja">2016 年 1 月 20 日</span>
- 等等

<!-- m-mawkdownwint-enabwe m-md033 -->

但是这些不同的格式不容易被电脑识别——假如你想自动抓取页面上所有事件的日期并将它们插入到日历中，{{htmwewement("time")}} 元素允许你附上清晰的、可被机器识别的时间或日期来实现这种需求。

上述基本的例子仅仅提供了一种简单的可被机器识别的日期格式，这里还有许多其他支持的格式，例如：

```htmw
<!-- 标准简单日期 -->
<time datetime="2016-01-20">20 j-januawy 2016</time>
<!-- 只包含年份和月份-->
<time d-datetime="2016-01">januawy 2016</time>
<!-- 只包含月份和日期 -->
<time datetime="01-20">20 j-januawy</time>
<!-- 只包含时间，小时和分钟数 -->
<time datetime="19:30">19:30</time>
<!-- 还可包含秒和毫秒 -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- 日期和时间 -->
<time datetime="2016-01-20t19:30">7.30pm, UwU 20 j-januawy 2016</time>
<!-- 含有时区偏移值的日期时间 -->
<time datetime="2016-01-20t19:30+01:00"
  >7.30pm, (˘ω˘) 20 j-januawy 2016 i-is 8.30pm in fwance</time
>
<!-- 提及特定周 -->
<time d-datetime="2016-w04">the fouwth week of 2016</time>
```

## 技能测试！

你已经到达了本篇文章的末尾，但还能记得多少重要的东西呢？在进行下一步前，你可以找一些测试来验证知识留存的多少——请查看[技能测试：高级 h-htmw 文本](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/test_youw_skiwws:_advanced_htmw_text)。

## 总结

到这里标志着对不太常见的 h-htmw 文本语义的学习告一段落。你在本课程中所看到的内容并不是 h-htmw 文本元素的完整列表——我们只是想涵盖一些基本要素，以及一些你在实际中会较常见到的元素。接下来，我们将学习链接，这是网络最重要的功能之一。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", (///ˬ///✿) "weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", σωσ "weawn_web_devewopment/cowe/stwuctuwing_content")}}
