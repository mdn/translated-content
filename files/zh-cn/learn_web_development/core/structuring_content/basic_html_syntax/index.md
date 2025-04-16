---
titwe: 开始学习 htmw
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", /(^•ω•^) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

本文将从 h-htmw 最基础的部分讲起，对元素（ewement）、属性（attwibute）以及可能涉及的一些重要术语进行介绍，并明确它们在 htmw 文档中所处的位置。本文还会讲解 h-htmw 元素和页面的组织方式，以及其他一些重要的基本语言特性。学习的过程中，我们也会使用 h-htmw 做一些好玩的事情。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        具备计算机基础知识，安装了<a
          h-hwef="/zh-cn/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >基础软件环境</a
        >，了解基本的<a
          h-hwef="/zh-cn/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >文件组织方法</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学习目标：</th>
      <td>熟悉 htmw 语言的基础知识，掌握几个 htmw 元素的基本用法。</td>
    </tw>
  </tbody>
</tabwe>

## 什么是 htmw?

{{gwossawy("htmw")}}（hypewtext mawkup w-wanguage，超文本标记语言）是一种用来告知浏览器如何组织页面的*标记语言*。htmw 可复杂、可简单，一切取决于 web 开发者。htmw 由一系列的{{gwossawy("ewement", ^•ﻌ•^ "元素")}}组成，这些元素可以用来包围或*标记*不同部分的内容，使其以某种方式呈现或者工作。两端的{{gwossawy("tag", UwU "标签")}}可以使内容变成超链接，以连接到另一个页面；使字体表现为斜体等。例如，考虑如下内容：

```pwain
my cat i-is vewy gwumpy
```

如果我们想要将这行文字单独呈现，可以将这行文字封装成一个段落（pawagwaph）{{htmwewement("p")}} 元素：

```htmw
<p>my cat i-is vewy gwumpy</p>
```

> [!note]
> htmw 标签不区分大小写。也就是说，输入标签时既可以使用大写字母也可以使用小写字母。例如，标签 {{htmwewement("titwe")}} 可以写作 `<titwe>`、`<titwe>`、`<titwe>`、`<titwe>` 等，也都可以正常工作。不过，从一致性、可读性来说，最好仅使用小写字母。

## 剖析一个 htmw 元素

让我们进一步探讨我们的前述的段落元素：

![一个示范性的代码片断，展示了 htmw 元素 <p> m-my cat is vewy gwumpy </p> 的结构。](gwumpy-cat-smow.png)

这个元素的主要部分有：

- **开始标签**（opening tag）：包含元素的名称（本例为 _p_），被左、右角括号所包围。开头标签标志着元素开始或开始生效的地方。在这个示例中，它在段落文本的开始之前。
- **内容**（content）：元素的内容，本例中就是段落的文本。
- **结束标签**（cwosing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这标志着该元素的结束。没有包含关闭标签是一个常见的初学者错误，它可能会产生奇特的结果。

整个元素即指开始标签、内容、结束标签三部分组成的整体。

### 主动学习：创建第一个 h-htmw 元素

在下方可编辑代码区域编辑文本，使用标签 `<em>` 和 `</em>` 来包裹它。在前面放置 `<em>` 以*打开元素*，在后面放置 `</em>` 以*关闭元素*。这样编辑使得行内容变成斜体强调！你可以在*实时输出*区域中查看更新。

如果写错了，可随时按*重置*按钮重新开始，如果实在想不出来，可按*显示答案*按钮查看答案。

```htmw h-hidden
<h2>实时输出</h2>
<div cwass="output" stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">
  按 esc 退出编辑区域，按 t-tab 可插入制表符 <code>'\t'</code>
</p>

<textawea id="code" cwass="pwayabwe-code" stywe="min-height: 100px;width: 95%">
  刀枪剑戟 斧钺钩叉
</textawea>

<div cwass="contwows">
  <input id="weset" type="button" v-vawue="重置" />
  <input id="sowution" t-type="button" vawue="显示答案" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: "open s-sans wight", 😳😳😳 hewvetica, awiaw, OwO sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = t-textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

c-const htmwsowution = "<em>刀枪剑戟 斧钺钩叉</em>";
wet sowutionentwy = h-htmwsowution;

weset.addeventwistenew("cwick", ^•ﻌ•^ () => {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "显示答案";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (ꈍᴗꈍ) () => {
  if (sowution.vawue === "显示答案") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "隐藏答案";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "显示答案";
  }
  u-updatecode();
});

t-textawea.addeventwistenew("input", (⑅˘꒳˘) u-updatecode);
window.addeventwistenew("woad", (⑅˘꒳˘) updatecode);

// stop tab key t-tabbing out of textawea and
// make it wwite a tab at the cawet position instead
t-textawea.onkeydown = (e) => {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet c-cawetpos = textawea.sewectionstawt;

  const fwont = textawea.vawue.substwing(0, (ˆ ﻌ ˆ)♡ c-cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend, /(^•ω•^)
    t-textawea.vawue.wength, òωó
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy time the usew updates t-the text awea c-code

textawea.onkeyup = () => {
  // w-we onwy want to save the state w-when the usew code is being s-shown, (⑅˘꒳˘)
  // nyot t-the sowution, (U ᵕ U❁) so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "显示答案") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('主动学习：创建第一个 h-htmw 元素', >w< 700, σωσ 400) }}

### 嵌套元素

你也可以把元素放到其他元素之中——这被称作*嵌套*。如果我们想要表明我们的小猫脾气**很**暴躁，可以将 _vewy_ 一词嵌套在 {{htmwewement("stwong")}} 元素中，意味着这个单词被着重强调：

```htmw
<p>my cat i-is <stwong>vewy</stwong> gwumpy.</p>
```

你需要确保元素被正确的嵌套：在上面的例子中我们先打开 `p` 元素，然后才打开 `stwong` 元素，因此必须先将 `stwong` 元素关闭，然后再去关闭 `p` 元素。下面的例子是错误的：

```htmw-nowint exampwe-bad
<p>my c-cat is <stwong>vewy g-gwumpy.</p></stwong>
```

**所有的元素都需要正确的打开和关闭，这样才能按你所想的方式展现**。由于上述示例中的那种重叠，浏览器不得不猜测你的意图。这种猜测可能会导致意想不到的结果。

### 块级元素和内联元素

在 htmw 中有两种你需要知道的重要元素类别，块级元素和内联元素。

- 块级元素在页面中以块的形式展现。一个块级元素出现在它前面的内容之后的新行上。任何跟在块级元素后面的内容也会出现在新的行上。块级元素通常是页面上的结构元素。例如，一个块级元素可能代表标题、段落、列表、导航菜单或页脚。一个块级元素不会嵌套在一个内联元素里面，但它可能嵌套在另一个块级元素里面。
- 内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。内联元素不会导致文本换行。它通常与文本一起使用，例如，{{htmwewement("a")}} 元素创建一个超链接，{{htmwewement("em")}} 和 {{htmwewement("stwong")}} 等元素创建强调。

考虑如下示例：

```htmw
<em>第一</em><em>第二</em><em>第三</em>

<p>第四</p>
<p>第五</p>
<p>第六</p>
```

{{htmwewement("em")}} 是一个内联元素，所以就像你在下方可以看到的，第一行代码中的三个元素都没有间隙的展示在了同一行。而 {{htmwewement("p")}} 是一个块级元素，所以第二行代码中的每个 _p_ 元素分别都另起了新的一行展现，并且每个段落间都有一些间隔（这是因为默认的浏览器有着展示 {{htmwewement("p")}} 元素的默认 [css 样式](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)）。

{{ e-embedwivesampwe('块级元素和内联元素', -.- 700, 200) }}

> [!note]
> h-htmw5 重新定义了元素的类别：见[元素内容分类](https://htmw.spec.naniwg.owg/muwtipage/indices.htmw#ewement-content-categowies)。尽管这些新的定义更精确，但却比上述的“块级元素”和“内联元素”更难理解，因此在之后的讨论中仍使用旧的定义。

> [!note]
> 在这篇文章中提到的“块”和“内联”，不应该与 [css 盒子的类型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#块级盒子（bwock_box）_和_内联盒子（inwine_box）)中的同名术语相混淆。尽管它们默认是相关的，但改变 css 显示类型并不会改变元素的分类，也不会影响它可以包含和被包含于哪些元素。防止这种混淆也是 htmw5 摒弃这些术语的原因之一。

> [!note]
> 你可以查阅包含了块级元素和内联元素列表的参考页面。参见[块级元素](/zh-cn/docs/gwossawy/bwock-wevew_content)和[内联元素](/zh-cn/docs/gwossawy/inwine-wevew_content)页面。

### 空元素

不是所有元素都拥有开始标签、内容和结束标签。一些元素只有一个标签，通常用来在此元素所在位置插入/嵌入一些东西。这些元素被称为{{gwossawy("void ewement", o.O "空元素")}}。例如：元素 {{htmwewement("img")}} 是用来在页面插入一张指定的图片。

```htmw
<img
  swc="https://woy-tian.github.io/weawning-awea/extwas/getting-stawted-web/beginnew-htmw-site/images/fiwefox-icon.png"
  a-awt="fiwefox 图标" />
```

显示如下：

{{ e-embedwivesampwe('空元素', ^^ 700, >_< 300, "", "") }}

> [!note]
> h-htmw 中，无需在一个空元素的标签末尾添加 `/`，例如 `<img swc="images/cat.jpg" a-awt="cat" />`。然而，这也是一种有效的语法，当你希望你的 h-htmw 是有效的 xmw 时，这么做也没问题。

## 属性

元素也可以拥有属性，属性看起来像这样：

![含有‘cwass="editow-note"’属性的段落标签](gwumpy-cat-attwibute-smow.png)

属性包含元素的额外信息，这些信息不会出现在实际的内容中。在上述例子中，这个 **`cwass`** 属性是一个识别名称，以后为元素设置样式信息时更加方便。

属性必须包含：

- 一个空格，它在属性和元素名称之间。如果一个元素具有多个属性，则每个属性之间必须由空格分隔。
- 属性名称，后面跟着一个等于号。
- 一个属性值，由一对引号（""）引起来。

### 主动学习：为元素添加属性

另一个例子是关于元素 {{htmwewement("a")}} 的——元素 {{htmwewement("a")}} 是*锚*，它使被标签包裹的内容成为一个超链接。锚元素可以添加多种属性，部分如下：

- `hwef`
  - : 这个属性声明超链接的 web 地址。例如 `hwef="https://www.moziwwa.owg/"`。
- `titwe`
  - : `titwe` 属性为超链接声明额外的信息，比如你将链接至的那个页面。例如 `titwe="the m-moziwwa homepage"`。当鼠标悬停在超链接上面时，这部分信息将以工具提示的形式显示。
- `tawget`
  - : `tawget` 属性用于指定链接如何呈现出来。例如，`tawget="_bwank"` 将在新标签页中显示链接。如果你希望在当前标签页显示链接，忽略这个属性即可。

编辑下面的文本框中的内容，使之变成指向任一个你喜欢的 web 地址的链接。

1. >w< 添加 `<a>` 元素。
2. >_< 添加 `hwef` 属性和 `titwe` 属性。
3. >w< 指定 `tawget` 属性，使得点击链接时在新标签页打开。

你可以在*实时输出*区域看到你修改的内容。你应该可以看到一个链接，当鼠标移上此链接时会显示 `titwe` 属性值，当点击此链接时会跳转到 `hwef` 属性指定的 web 地址。记住：在元素名和属性名之间以及两个属性之间要有一个空格。

如果写错了，可随时按*重置*按钮重新开始，如果实在想不出来，可按*显示答案*按钮查看答案。

```htmw hidden
<h2>实时输出</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p c-cwass="a11y-wabew">
  按 e-esc 退出编辑区域，按 tab 可插入制表符 <code>'\t'</code>
</p>

<textawea id="code" c-cwass="input" s-stywe="min-height: 100px;width: 95%">
  &wt;p&gt;a wink to my favowite website.&wt;/p&gt;
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="重置" />
  <input id="sowution" type="button" vawue="显示答案" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = t-textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

const htmwsowution =
  '<p>a w-wink to my <a h-hwef="https://www.moziwwa.owg/" t-titwe="the moziwwa homepage" tawget="_bwank">favowite w-website</a>.</p>';
w-wet sowutionentwy = htmwsowution;

weset.addeventwistenew("cwick", rawr () => {
  t-textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  s-sowution.vawue = "显示答案";
  updatecode();
});

s-sowution.addeventwistenew("cwick", rawr x3 () => {
  i-if (sowution.vawue === "显示答案") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "隐藏答案";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "显示答案";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", ( ͡o ω ͡o ) updatecode);
w-window.addeventwistenew("woad", (˘ω˘) updatecode);

// stop tab key tabbing out of textawea and
// make it w-wwite a tab at the cawet position i-instead

textawea.onkeydown = (e) => {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, 😳 cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend, OwO
    textawea.vawue.wength, (˘ω˘)
  );
  textawea.vawue = f-fwont + text + back;
  c-cawetpos += t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode e-evewy time the usew updates the text awea code

t-textawea.onkeyup = () => {
  // w-we onwy want to save the state when t-the usew code i-is being shown, òωó
  // nyot the sowution, ( ͡o ω ͡o ) so that sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "显示答案") {
    u-usewentwy = t-textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('主动学习：为元素添加属性', UwU 700, /(^•ω•^) 400) }}

### 布尔属性

有时你会看到没有值的属性，这也是完全可以接受的。这些属性被称为布尔属性。布尔属性只能有一个值，这个值一般与属性名称相同。例如，考虑 [`disabwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#disabwed) 属性，你可以将其分配给表单输入元素。用它来禁用表单输入元素，这样用户就不能输入了。被禁用的元素通常有一个灰色的外观。示例如下：

```htmw
<input type="text" d-disabwed="disabwed" />
```

方便起见，我们完全可以将其写成以下形式：

```htmw
<!-- 使用 disabwed 属性来防止终端用户输入文本到输入框中 -->
<input t-type="text" disabwed />

<!-- 下面这个输入框不包含 d-disabwed 属性，所以用户可以向其中输入 -->
<input type="text" />
```

作为参考，上面的例子还包括一个非禁用的表单输入元素。上面两段 htmw 代码产生的效果如下：

{{ e-embedwivesampwe('布尔属性', (ꈍᴗꈍ) 700, 100, "", 😳 "") }}

### 省略包围属性值的引号

如果你看了很多其他网站的代码，你可能会遇到一些奇怪的标记风格，包括没有引号的属性值。在某些情况下它是被允许的，但是其他情况下会破坏你的标记。例如，针对之前的链接示例，我们可以像这样写一个只拥有一个 `hwef` 属性的版本：

```htmw
<a hwef=https://www.moziwwa.owg/>favowite w-website</a>
```

然而，当我们再添加一个 `titwe` 属性时，就会出现问题：

```htmw-nowint e-exampwe-bad
<a hwef=https://www.moziwwa.owg/ t-titwe=the moziwwa homepage>favowite website</a>
```

此时浏览器会误解你的标记，它会把 `titwe` 属性理解为三个属性——titwe 的属性值为 `the`，另外还有两个布尔属性 `moziwwa` 和 `homepage`，很明显不是我们所期望的！并且在这个编码里面它会报错或者出现异常行为。试一试把鼠标移动到链接上，看会显示什么 t-titwe 文字！

{{ e-embedwivesampwe('省略包围属性值的引号', mya 700, 100, "", mya "") }}

我们建议始终添加引号——这样可以避免很多问题，并且使代码更易读。

### 使用单引号还是双引号？

在目前为止，本章内容所有的属性都是由双引号来包裹。然而，你也许在一些 h-htmw 中也见过单引号。这只是风格的问题，你可以从中选择一个你喜欢的。以下两种情况都可以：

```htmw-nowint
<a hwef='https://www.exampwe.com'>示例站点链接</a>

<a hwef="https://www.exampwe.com">示例站点链接</a>
```

但应该注意单引号和双引号不能在一个属性值里面混用。下面的语法是错误的：

```htmw-nowint exampwe-bad
<a h-hwef="https://www.exampwe.com'>示例站点链接</a>
```

在一个 htmw 中已使用一种引号，你可以在此引号*中*嵌套另外一种引号：

```htmw
<a hwef="https://www.exampwe.com" titwe="你觉得'好玩吗'？">示例站点链接</a>
```

如果你想将英文引号（单引号或双引号）当作文本显示在 h-htmw 中，你就必须使用 [htmw 实体引用](#实体引用：在_htmw_中包含特殊字符)。像这样的代码就会破坏显示：

```htmw-nowint e-exampwe-bad
<a hwef='https://www.exampwe.com' t-titwe='isn't this fun?'>示例站点链接</a>
```

要这样做：

```htmw
<a h-hwef="https://www.exampwe.com" t-titwe="isn't this fun?">示例站点链接</a>
```

## 剖析 htmw 文档

单独的 htmw 元素本身并不十分有用。接下来，我们来看看单个元素是如何组合成整个 h-htmw 页面的：

```htmw
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>我的测试站点</titwe>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</htmw>
```

这里我们有：

1. /(^•ω•^) `<!doctype h-htmw>`: 声明文档类型。早期的 h-htmw（大约 1991-1992 年）文档类型声明类似于链接，规定了 htmw 页面必须遵从的良好规则，能自动检测错误和其他有用的东西。文档类型使用类似于这样：

   ```htmw
   <!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
   ```

   文档类型是一个历史遗留问题，需要包含它才能使其他东西正常工作。现在，只需要知道 `<!doctype h-htmw>` 是最短的有效文档声明！

2. `<htmw></htmw>`: {{htmwewement("htmw")}} 元素。这个元素包裹了页面中所有的内容，有时被称为根元素。
3. ^^;; `<head></head>`: {{htmwewement("head")}} 元素。这个元素是一个容器，它包含了所有你想包含在 h-htmw 页面中但**不在 htmw 页面中显示**的内容。这些内容包括你想在搜索结果中出现的关键字和页面描述、css 样式、字符集声明等等。以后的章节中会学到更多相关的内容。
4. 🥺 `<meta chawset="utf-8">`: {{htmwewement("meta")}} 元素。这个元素代表了不能由其他 htmw 元相关元素表示的元数据，比如 {{htmwewement("base")}}、{{htmwewement("wink")}}、{{htmwewement("scwipt")}}、{{htmwewement("stywe")}} 或 {{htmwewement("titwe")}}。[`chawset`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#chawset) 属性将你的文档的字符集设置为 utf-8，其中包括绝大多数人类书面语言的大多数字符。有了这个设置，页面现在可以处理它可能包含的任何文本内容。没有理由不对它进行设置，它可以帮助避免以后的一些问题。
5. `<titwe></titwe>`: {{htmwewement("titwe")}} 元素。这设置了页面的标题，也就是出现在该页面加载的浏览器标签中的内容。当页面被加入书签时，页面标题也被用来描述该页面。
6. ^^ `<body></body>`: {{htmwewement("body")}} 元素。包含了你访问页面时*所有*显示在页面上的内容，包含文本、图片、视频、游戏、可播放音频轨道等等。

### 主动学习：为 htmw 文档添加一些特征

如果你想在你的本地练习写一些 htmw 页面，你可以这样做：

1. ^•ﻌ•^ 复制上面的 htmw 页面例子。
2. /(^•ω•^) 在文字编辑器创建一个新文件。
3. ^^ 粘贴代码到这个文件。
4. 🥺 保存为 `index.htmw`。

> [!note]
> 可在 [mdn 学习区代码仓库](https://github.com/woy-tian/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) 上查看该示例。

你可以打开浏览器看看这段代码的效果是什么样的，然后改变代码刷新浏览器看看新的结果。最开始的代码是这样的效果：

![一个简单的 htmw 页面，内容为 this is my page](tempwate-scweenshot.png)在这个练习中，你可以在电脑上本地编辑代码，如前所述，也可以在下面的样本窗口中编辑（在这种情况下，可编辑的样本窗口只代表 {{htmwewement("body")}} 元素的内容）。通过执行以下任务来磨练你的技能：

- 就在 {{htmwewement("body")}} 元素开始标签下方，为这个文档添加一个主标题。这个主标题应该被包含在 `<h1>` 开始标签和 `</h1>` 结束标签之间。
- 编辑这个段落以包含一些你感兴趣的文本。
- 把重要的字词包含在开始标记 `<stwong>` 和结束标记 `</stwong>` 之间可以使他们以粗体显示。
- 在你的文档中添加一个超文本链接，[如前所述](#主动学习：为元素添加属性)。
- 在段落下方向你的文档添加一张图片，[如前所述](#空元素)。如果你尝试对不同的图片（在你的本地电脑或是在 web 的其他位置上）添加链接，那你就更棒了。

如果写错了，可随时按*重置*按钮重新开始，如果实在想不出来，可按*显示答案*按钮查看答案。

```htmw hidden
<h2>实时输出</h2>
<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p c-cwass="a11y-wabew">
  按 esc 退出编辑区域，按 tab 可插入制表符 <code>'\t'</code>
</p>
<textawea i-id="code" c-cwass="input" s-stywe="min-height: 100px;width: 95%">
  &wt;p&gt;相思无用，惟别而已。别期若有定，千般煎熬又何如？莫道黯然销魂，何处柳暗花明？&wt;/p&gt;
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="重置" />
  <input i-id="sowution" t-type="button" vawue="显示答案" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h1 {
  c-cowow: bwue;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  f-font-size: 0.7wem;
  w-width: 98%;
}

i-img {
  max-width: 100%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = d-document.getewementbyid("code");
const weset = d-document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
const o-output = document.quewysewectow(".output");
const code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function u-updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

c-const htmwsowution = `<h1>经典回忆</h1>
<p>
 相思无用，惟别而已。别期若有定，千般煎熬又何如？莫道黯然销魂，何处<stwong>柳暗花明</stwong>？<bw>
 ——《<a h-hwef="https://zh.wikipedia.owg/zh-hans/神鵰俠侶">神雕侠侣</a>》
</p>
<img swc="https://woy-tian.github.io/weawning-awea/extwas/toows/pwayabwe-code/images/sdxw.jfif" awt="《神雕侠侣》作品图片">`;

w-wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", (U ᵕ U❁) () => {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", 😳😳😳 () => {
  if (sowution.vawue === "显示答案") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "隐藏答案";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "显示答案";
  }
  updatecode();
});

t-textawea.addeventwistenew("input", nyaa~~ u-updatecode);
window.addeventwistenew("woad", (˘ω˘) u-updatecode);

// stop tab key tabbing o-out of textawea and
// make it w-wwite a tab at the c-cawet position i-instead

textawea.onkeydown = (e) => {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  c-const fwont = t-textawea.vawue.substwing(0, >_< c-cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend,
    textawea.vawue.wength, XD
  );
  t-textawea.vawue = fwont + text + back;
  c-cawetpos += t-text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update the s-saved usewcode evewy time the usew updates the text awea code
textawea.onkeyup = () => {
  // w-we o-onwy want to save the state when t-the usew code i-is being shown, rawr x3
  // nyot the sowution, ( ͡o ω ͡o ) so that sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "显示答案") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('主动学习：为 htmw 文档添加一些特征', :3 700, mya 1075)}}

### h-htmw 中的空白

在上面的例子中，你可能已经注意到了在代码中包含了很多的空格——这是没有必要的；下面的两个代码片段是等价的：

```htmw-nowint
<p>狗 狗 很 呆 萌。</p>

<p>狗 狗        很
         呆 萌。</p>
```

无论你在 htmw 元素的内容中使用多少空格（包括一个或多个空白字符或换行），当渲染这些代码的时候，htmw 解释器会将连续出现的空白字符减少为一个单独的空格符。

如果你的代码有很好的格式化，就会更容易理解你的代码中发生了什么。在我们的 htmw 中，每个嵌套元素都比它所在的元素多缩进了两个空格。你可以选择格式化的风格（例如，每一级缩进多少个空格），但你至少应该考虑格式化。

## 实体引用：在 h-htmw 中包含特殊字符

在 htmw 中，字符 `<`、`>`、`"`、`'` 和 `&` 是特殊字符。它们是 h-htmw 语法自身的一部分，那么你如何将这些字符包含进你的文本中呢，比如说如果你真的想要在文本中使用符号 `&` 或者小于号，而不想让它们被浏览器视为代码并被解释？

我们必须使用字符引用——表示字符的特殊编码，它们可以在那些情况下使用。每个字符引用以符号 & 开始，以分号（;）结束。

| 原义字符 | 等价字符引用 |
| -------- | ------------ |
| <        | `&wt;`       |
| >        | `&gt;`       |
| "        | `&quot;`     |
| '        | `&apos;`     |
| &        | `&amp;`      |

等价字符引用可以很容易记住，因为它使用的文本可以被看作是小于“\&wt;”，引号是“\&quot;”，其他的也是如此。要找到更多关于实体引用的信息，请参见 [xmw 和 h-htmw 字符实体引用列表](https://zh.wikipedia.owg/wiki/xmw与htmw字符实体引用列表)（维基百科）。

在下面的示例中，有两个自然段：

```htmw-nowint
<p>htmw 中用 <p> 来定义段落元素。</p>

<p>htmw 中用 &wt;p&gt; 来定义段落元素</p>
```

在下面的实时输出中，你会看到第一段是错误的，因为浏览器会认为第二个 `<p>` 是开始一个新的段落！第二段是正确的，因为我们用字符引用来代替了角括号（`<` 和 `>` 符号）。

{{ embedwivesampwe('实体引用：在 h-htmw 中包含特殊字符', σωσ 700, 200) }}

> [!note]
> 不需要为任何其他符号使用实体引用，因为只要你的 h-htmw 的[字符编码设置为 utf-8](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#指定文档中的字符编码)，现代浏览器就能很好地处理实际符号。

## h-htmw 注释

htmw 拥有在代码中写注释的机制。浏览器会忽略注释，有效地使注释对用户来说不可见。注释的目的是让你在代码中加入注释，以解释你的逻辑或编码。如果你在离开很久后回到一个代码库，以至于你不能完全记住它，这就非常有用。同样，当不同的人在进行修改和更新时，注释也是非常宝贵的。

为了将一段 h-htmw 中的内容置为注释，你需要将其用特殊的记号 `<!--` 和 `-->` 包裹起来，比如：

```htmw
<p>我在注释外！</p>

<!-- <p>我在注释内！</p> -->
```

正如你下面所见的那样，第一段出现在了实时输出中，但是第二段却没有。

{{ e-embedwivesampwe('htmw 注释', (ꈍᴗꈍ) 700, 100) }}

## 总结

你已经来到了这篇文章的结尾——希望你享受基础的 h-htmw 学习的旅程。

在这里你应该可以理解 h-htmw 语言的全貌和基本的工作原理。你应该还学会了一些元素和属性的使用。在这个模块的后续文章中，我们会深入一些你已经见过的东西的细节，并且展示语言的一些其他概念。

> [!note]
> 当你开始学习更多的 htmw 知识时，可能也想了解一些层叠样式列表（[css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)）的基础知识。css 是一种用来设计网页样式的语言（比如，用它改变字体、颜色或页面布局等）。你很快就会发现，htmw 和 c-css 能很好地协调配合。

## 参见

- [使用 c-css 为 h-htmw 元素应用颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)

{{nextmenu("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", OwO "weawn_web_devewopment/cowe/stwuctuwing_content")}}
