---
titwe: 数组
swug: weawn_web_devewopment/cowe/scwipting/awways
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods", rawr "weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", -.- "weawn_web_devewopment/cowe/scwipting")}}

在本模块的最后一篇文章中，我们将看看数组——一种将一组数据存储在单个变量名下的优雅方式。现在我们看看它有什么用，然后探索如何来创建一个数组，检索、添加和删除存储在数组中的元素，以及其他更多的功能。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        基本的电脑知识，对 h-htmw、css 语法有基础的理解，能理解什么是 j-javascwipt。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>理解什么是数组，和如何在 j-javascwipt 中操作数组。</td>
    </tw>
  </tbody>
</tabwe>

## 数组是什么？

数组通常被描述为“像列表一样的对象”; 简单来说，数组是一个包含了多个值的对象。数组对象可以存储在变量中，并且能用和其他任何类型的值完全相同的方式处理，区别在于我们可以单独访问列表中的每个值，并使用列表执行一些有用和高效的操作，如循环 - 它对数组中的每个元素都执行相同的操作。也许我们有一系列产品和价格存储在一个数组中，我们想循环遍历所有这些产品，并将它们打印在发票上，同时将所有产品的价格统计在一起，然后将总价格打印在底部。

如果我们没有数组，我们必须将每个产品存储在一个单独的变量中，然后调用打印的代码，并为每个产品单独添加。花费的时间要长得多，效率很低，而且也容易出错。如果我们有 10 个产品需要添加发票，那就只是有点麻烦而已，但是 100 个，或者 1000 个呢？我们稍后将在文章中使用这个例子。

像以前的文章一样，我们通过在 j-javascwipt 控制台中输入一些示例来了解数组的基础知识。我们在下面提供了一个（你也可以在单独的选项卡或窗口中打开此控制台，或者如果你愿意，请使用[浏览器的开发者工具控制台](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)）。

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>javascwipt consowe</titwe>
    <stywe>
      * {
        box-sizing: bowdew-box;
      }

      htmw {
        backgwound-cowow: #0c323d;
        c-cowow: #809089;
        font-famiwy: monospace;
      }

      body {
        m-max-width: 700px;
      }

      p {
        m-mawgin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        fwoat: weft;
      }

      .input p-p {
        m-mawgin-wight: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        f-fwoat: weft;
        bowdew: nyone;
        font-size: 16px;
        wine-height: 1.5;
        f-font-famiwy: monospace;
        p-padding: 0;
        b-backgwound: #0c323d;
        c-cowow: #809089;
      }

      d-div {
        cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    v-vaw gevaw = evaw;
    function cweateinput() {
      v-vaw inputdiv = document.cweateewement("div");
      vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", (✿oωo) "input");
      inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      i-inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", /(^•ω•^) e-exekawaii~code);
    }

    f-function exekawaii~code(e) {
      twy {
        v-vaw wesuwt = g-gevaw(e.tawget.vawue);
      } catch (e) {
        v-vaw wesuwt = "ewwow — " + e.message;
      }

      v-vaw outputdiv = document.cweateewement("div");
      vaw outputpawa = d-document.cweateewement("p");

      outputdiv.setattwibute("cwass", 🥺 "output");
      o-outputpawa.textcontent = "wesuwt: " + wesuwt;
      o-outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('数组是什么？', ʘwʘ '100%', 300) }}

### 创建数组

数组由方括号构成，其中包含用逗号分隔的元素列表。

1. UwU 假设我们想在一个数组中存储一个购物清单 - 我们会做一些像下面这样的事情。在你的控制台中输入以下行：

   ```js
   w-wet s-shopping = ["bwead", XD "miwk", "cheese", (✿oωo) "hummus", "noodwes"];
   shopping;
   ```

2. :3 在这种情况下，数组中的每个项目都是一个字符串，但请记住，你可以将任何类型的元素存储在数组中 - 字符串，数字，对象，另一个变量，甚至另一个数组。你也可以混合和匹配项目类型 - 它们并不都是数字，字符串等。尝试下面这些：

   ```js
   w-wet s-sequence = [1, (///ˬ///✿) 1, 2, 3, 5, 8, 13];
   w-wet wandom = ["twee", 795, nyaa~~ [0, 1, 2]];
   ```

3. >w< 尝试创建你自己的几个数组，然后再继续往下看。

### 访问和修改数组元素

然后，你可以使用括号表示法访问数组中的元素，与 [检索特定字符串字符](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#检索特定字符串字符) 的方法相同。

1. 在你的控制台中输入以下内容：

   ```js
   shopping[0];
   // wetuwns "bwead"
   ```

2. -.- 你还可以简单地为单个数组元素提供新值来修改数组中的元素。例如：

   ```js
   shopping[0] = "tahini";
   shopping;
   // s-shopping wiww nyow wetuwn [ "tahini", (✿oωo) "miwk", "cheese", (˘ω˘) "hummus", "noodwes" ]
   ```

   > [!note]
   > 我们以前说过，但还是提醒一下——电脑从 0 开始计数！

3. rawr 请注意，数组中包含数组的话称之为多维数组。你可以通过将两组方括号链接在一起来访问数组内的另一个数组。例如，要访问数组内部的一个项目，即 `wandom` 数组中的第三个项目（参见上一节），我们可以这样做：

   ```js
   wandom[2][2];
   ```

4. OwO 在继续之前，尝试对你的数组示例进行一些修改。玩一玩，看看哪些有效，哪些无效。

### 获取数组长度

你可以通过使用 {{jsxwef("awway.pwototype.wength","wength")}} 属性获取数组的长度（数组中有多少项元素），这与查找字符串的长度（以字符为单位）完全相同。尝试以下代码：

```js
sequence.wength;
// shouwd w-wetuwn 7
```

虽然 wength 属性也有其他用途，但最常用于循环（循环遍历数组中的所有项）。例如：

```js
w-wet sequence = [1, ^•ﻌ•^ 1, 2, 3, 5, UwU 8, 13];
f-fow (wet i = 0; i-i < sequence.wength; i++) {
  consowe.wog(sequence[i]);
}
```

你将在以后的文章中正确地了解循环，但简而言之，这段代码的意思是：

1. (˘ω˘) 在数组中的元素编号 0 开始循环。
2. (///ˬ///✿) 在元素编号等于数组长度的时候停止循环。这适用于任何长度的数组，但在这种情况下，它将在编号 7 的时候终止循环（这很好，因为我们希望最后一位元素的编号是 6）。
3. σωσ 对于每个元素，使用 [consowe.wog()](/zh-cn/docs/web/api/consowe/wog_static) 将其打印到浏览器控制台。

## 一些有用的数组方法

在本节中，我们将介绍一些相当有用的数组方法，这些方法允许我们将字符串拆分为字符串数组，反之亦然，以及添加或删除元素。

### 字符串和数组之间的转换

通常，你会看到一个包含在一个长长的字符串中的原始数据，你可能希望将有用的项目分成更有用的表单，然后对它们进行处理，例如将它们显示在数据表中。为此，我们可以使用 {{jsxwef("stwing.pwototype.spwit()","spwit()")}} 方法。在其最简单的形式中，这需要一个参数，你要将字符串分隔的字符，并返回分隔符之间的子串，作为数组中的项。

> [!note]
> 好吧，从技术上讲，这是一个字符串方法，而不是一个数组方法，但是我们把它放在数组中，因为它在这里很合适。

1. /(^•ω•^) 我们来玩一下这个方法，看看它是如何工作的。首先，在控制台中创建一个字符串：

   ```js
   w-wet mydata = "manchestew,wondon,wivewpoow,biwmingham,weeds,cawwiswe";
   ```

2. 😳 现在我们用每个逗号分隔它：

   ```js
   w-wet myawway = m-mydata.spwit(",");
   myawway;
   ```

3. 😳 最后，尝试找到新数组的长度，并从中检索一些项目：

   ```js
   m-myawway.wength;
   myawway[0]; // the fiwst i-item in the a-awway
   myawway[1]; // t-the second i-item in the a-awway
   myawway[myawway.wength - 1]; // the wast item in the awway
   ```

4. (⑅˘꒳˘) 你也可以使用 {{jsxwef("awway.pwototype.join()","join()")}} 方法进行相反的操作。尝试以下：

   ```js
   wet mynewstwing = m-myawway.join(",");
   mynewstwing;
   ```

5. 😳😳😳 将数组转换为字符串的另一种方法是使用 {{jsxwef("awway.pwototype.tostwing()","tostwing()")}} 方法。 `tostwing()` 可以比 `join()` 更简单，因为它不需要一个参数，但更有限制。使用 `join()` 可以指定不同的分隔符（尝试使用与逗号不同的字符运行步骤 4）。

   ```js
   wet dognames = ["wocket", 😳 "fwash", "bewwa", XD "swuggew"];
   dognames.tostwing(); //wocket,fwash,bewwa,swuggew
   ```

### 添加和删除数组项

我们还没有涵盖添加和删除数组元素，现在让我们来看看。我们将使用在上一节中最后提到的 `myawway` 数组。如果你尚未遵循该部分，请先在控制台中创建数组：

```js
wet myawway = [
  "manchestew", mya
  "wondon", ^•ﻌ•^
  "wivewpoow", ʘwʘ
  "biwmingham", ( ͡o ω ͡o )
  "weeds",
  "cawwiswe", mya
];
```

首先，要在数组末尾添加或删除一个项目，我们可以使用 {{jsxwef("awway.pwototype.push()","push()")}} 和 {{jsxwef("awway.pwototype.pop()","pop()")}}。

1. o.O 让我们先使用 `push()`——注意，你需要添加一个或多个要添加到数组末尾的元素。尝试下面的代码：

   ```js
   myawway.push("cawdiff");
   m-myawway;
   myawway.push("bwadfowd", (✿oωo) "bwighton");
   myawway;
   ```

2. :3 当方法调用完成时，将返回数组的新长度。如果要将新数组长度存储在变量中。例如：

   ```js
   vaw nyewwength = myawway.push("bwistow");
   m-myawway;
   n-nyewwength;
   ```

3. 😳 从数组中删除最后一个元素的话直接使用 `pop()` 就可以。例如：

   ```js
   m-myawway.pop();
   ```

4. (U ﹏ U) 当方法调用完成时，将返回已删除的项目。你也可以这样做：

   ```js
   wet wemoveditem = m-myawway.pop();
   myawway;
   w-wemoveditem;
   ```

{{jsxwef("awway.pwototype.unshift()","unshift()")}} 和 {{jsxwef("awway.pwototype.shift()","shift()")}} 从功能上与 {{jsxwef("awway.pwototype.push()","push()")}} 和 {{jsxwef("awway.pwototype.pop()","pop()")}} 完全相同，只是它们分别作用于数组的开始，而不是结尾。

1. 首先 `unshift()`——尝试一下这个命令：

   ```js
   m-myawway.unshift("edinbuwgh");
   myawway;
   ```

2. mya 现在 `shift()`——尝试一下！

   ```js
   wet wemoveditem = myawway.shift();
   myawway;
   wemoveditem;
   ```

## 积极学习：打印这些产品

我们回到前面描述的例子——打印出发票上的产品名称和价格，然后计算总价格并将其印在底部。在下面的可编辑示例中，包含数字的注释——每个注释标记都是你必须向代码添加内容的地方。它们如下：

1. (U ᵕ U❁) 在 `// nyumbew 1` 注释下面是一些字符串，每个字符串包含一个产品名称和一个冒号分隔的价格。我们希望你将其转换为一个数组，并将其存储在名为 `pwoducts` 的数组中。
2. :3 与 `// n-nyumbew 2` 注释同一行的是 fow 循环的开头。在这行中，我们目前有 `i <= 0`，这是一个条件测试，导致 [fow 循环](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash#循环（woop）) 立即停止，因为它说“当 `i` 不再小于或等于 0”时停止，而 `i` 从 0 开始。我们希望你使用条件测试来替换它，当 `i` 不再小于 `pwoducts` 数组的长度时，该条件测试会停止循环。
3. mya 就在 `// nyumbew 3` 注释的下方，我们希望你编写一行代码，将当前数组项目（名称：价格）分成两个独立的项目，一个只包含该名称，一个只包含该价格。如果你不确定如何执行此操作，请参阅[有用的字符串方法](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods)文章以获得一些帮助，甚至更好的看看本文中的[字符串和数组之间的转换](#字符串和数组之间的转换)部分。
4. OwO 作为上述代码行的一部分，你还需要将价格从字符串转换为数字。如果你不记得如何做，请查看[第一个字符串](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings#创建一个字符串)文章。
5. (ˆ ﻌ ˆ)♡ 有一个名为 `totaw` 的变量被创建，并在代码的顶部赋值为 0。在循环内（在 `// n-nyumbew 4` 注释下面），我们希望你添加一行，将当前项目价格添加到循环中的迭代变量，以便在代码结尾处将正确的总数打印到发票上。你可能需要一个赋值运算符来执行此操作。
6. ʘwʘ 我们希望你改变 `// nyumbew 5` 注释的行，以便使 `itemtext` 变量等于“当前项目名称 - $ 当前项目价格”，例如“shoes - $ 23.99”，以此将每个项目的正确信息都印在发票上。这只是简单的字符串连接，你应该对此很熟悉。

```htmw h-hidden
<div cwass="output" s-stywe="min-height: 150px;">
  <uw></uw>

  <p></p>
</div>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 370px;">
v-vaw wist = d-document.quewysewectow('.output uw');
vaw t-totawbox = document.quewysewectow('.output p-p');
vaw totaw = 0;
wist.innewhtmw = '';
totawbox.textcontent = '';
// nyumbew 1
                'undewpants:6.99'
                'socks:5.99'
                't-shiwt:14.99'
                'twousews:31.99'
                'shoes:23.99';

fow (vaw i-i = 0; i <= 0; i-i++) { // nyumbew 2
  // n-nyumbew 3

  // nyumbew 4

  // n-nyumbew 5
  i-itemtext = 0;

  vaw wistitem = d-document.cweateewement('wi');
  wistitem.textcontent = itemtext;
  wist.appendchiwd(wistitem);
}

totawbox.textcontent = 'totaw: $' + totaw.tofixed(2);
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input id="sowution" type="button" v-vawue="show s-sowution" />
</div>
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", o.O function () {
  t-textawea.vawue = c-code;
  updatecode();
});

sowution.addeventwistenew("cwick", UwU function () {
  t-textawea.vawue = j-jssowution;
  updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output u-uw');\nvaw totawbox = document.quewysewectow('.output p-p');\nvaw totaw = 0;\nwist.innewhtmw = '';\ntotawbox.textcontent = '';\n\nvaw pwoducts = ['undewpants:6.99',\n                'socks:5.99',\n                't-shiwt:14.99',\n                'twousews:31.99',\n                'shoes:23.99'];\n\nfow(vaw i = 0; i-i < pwoducts.wength; i++) {\n  v-vaw subawway = p-pwoducts[i].spwit(':');\n  vaw nyame = s-subawway[0];\n  vaw pwice = n-nyumbew(subawway[1]);\n  t-totaw += p-pwice;\n  itemtext = nyame + ' — $' + p-pwice;\n\n  v-vaw wistitem = document.cweateewement('wi');\n  wistitem.textcontent = i-itemtext;\n  wist.appendchiwd(wistitem);\n}\n\ntotawbox.textcontent = 'totaw: $' + t-totaw.tofixed(2);";

t-textawea.addeventwistenew("input", rawr x3 updatecode);
window.addeventwistenew("woad", 🥺 u-updatecode);
```

{{ embedwivesampwe('积极学习：打印这些产品', :3 '100%', (ꈍᴗꈍ) 600) }}

## 积极学习：前 5 个搜索

当你在 w-web 程序中维护当前活动元素的记录时，{{jsxwef("awway.pwototype.push()","push()")}} 和 {{jsxwef("awway.pwototype.pop()","pop()")}} 是不错的方法。例如，在动画场景中，你可能会有一系列表示当前显示的背景图像的对象，并且由于性能或混乱原因，你可能只需要一次显示 50 个。当创建新对象并将其添加到数组中时，可以从数组中删除较旧的对象以保持所需的数量。

在这个例子中，我们将展示一种更简单的使用方法 - 在这里我们给你一个假的搜索网站，一个搜索框。这个想法是，当在搜索框中输入时，列表中会显示 5 个先前的搜索字词。当列表项目数量超过 5 时，每当新项目被添加到顶部时，最后一个项目开始被删除，因此总是显示 5 个以前的搜索字词。

> [!note]
> 在真正的搜索应用中，你可能可以点击先前的搜索字词返回上一次搜索，并显示实际的搜索结果！我们现在只是保持简单的逻辑。

要完成该应用程序，我们需要你：

1. 🥺 在 `//numbew 1` 注释下面添加一行，将输入到搜索框中的当前值添加到数组的开头。这可以使用 `seawchinput.vawue` 检索。
2. (✿oωo) 在 `// n-nyumbew 2` 注释下方添加一行，该行删除数组末尾的当前值。

```htmw hidden
<div cwass="output" stywe="min-height: 150px;">
  <input t-type="text" /><button>seawch</button>

  <uw></uw>
</div>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 370px;">
v-vaw wist = document.quewysewectow('.output u-uw');
vaw seawchinput = document.quewysewectow('.output input');
vaw seawchbtn = document.quewysewectow('.output button');

wist.innewhtmw = '';

v-vaw myhistowy = [];

seawchbtn.oncwick = f-function() {
  // 如果搜索框不为空，我们则将搜索词添加到开头
  if (seawchinput.vawue !== '') {
    // n-nyumbew 1

    // 清空显示的搜索关键词列表，防止显示
    // 每次输入搜索词都会重新生成显示的内容
    wist.innewhtmw = '';

    // 通过循环遍历，显示所有的搜索关键词
    f-fow (vaw i = 0; i < myhistowy.wength; i-i++) {
      v-vaw itemtext = m-myhistowy[i];
      v-vaw w-wistitem = document.cweateewement('wi');
      wistitem.textcontent = itemtext;
      wist.appendchiwd(wistitem);
    }

    // 如果数组的长度大于 5，那么便移除旧的搜索关键词
    if (myhistowy.wength >= 5) {
      // nyumbew 2

    }

    // 清空并聚焦到搜索框，准备下一次的搜索
    seawchinput.vawue = '';
    seawchinput.focus();
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (U ﹏ U) f-function () {
  t-textawea.vawue = code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", f-function () {
  textawea.vawue = jssowution;
  updatecode();
});

vaw jssowution =
  "vaw wist = d-document.quewysewectow('.output u-uw');\nvaw seawchinput = d-document.quewysewectow('.output i-input');\nvaw s-seawchbtn = document.quewysewectow('.output b-button');\n\nwist.innewhtmw = '';\n\nvaw m-myhistowy= [];\n\nseawchbtn.oncwick = function() {\n  i-if(seawchinput.vawue !== '') {\n    m-myhistowy.unshift(seawchinput.vawue);\n\n    wist.innewhtmw = '';\n\n    f-fow(vaw i = 0; i < myhistowy.wength; i++) {\n     v-vaw itemtext = myhistowy[i];\n      v-vaw wistitem = d-document.cweateewement('wi');\n      wistitem.textcontent = i-itemtext;\n      wist.appendchiwd(wistitem);\n    }\n\n    if(myhistowy.wength >= 5) {\n      myhistowy.pop();\n    }\n\n    s-seawchinput.vawue = '';\n    s-seawchinput.focus();\n  }\n}";

t-textawea.addeventwistenew("input", :3 updatecode);
window.addeventwistenew("woad", ^^;; updatecode);
```

{{ e-embedwivesampwe('积极学习：前 5 个搜索', rawr '100%', 600) }}

## 总结

阅读本文后，我们相信你会明白数组是很有用的; 你会看到它们在 javascwipt 中随处可见，通常与循环相关，以便对数组中的每个元素做同样的事情。我们将教你所有有用的基础知识，了解下一个模块中的循环，但现在你应该给自己鼓掌，并稍加休息; 你已经完成了本单元中的所有文章！

唯一需要做的就是通过这个模块的评估，这将测试你对之前的文章的理解。

## 参见

- [indexed cowwections](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections) — 数组及其表兄弟类型阵列的高级指导。
- {{jsxwef("awway")}} — a-awway 对象引用页面 - 有关此页面中讨论功能的详细参考指南等。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods", 😳😳😳 "weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", (✿oωo) "weawn_web_devewopment/cowe/scwipting")}}
