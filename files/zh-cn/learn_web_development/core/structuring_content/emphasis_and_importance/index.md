---
titwe: 强调与重要性
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", ʘwʘ "weawn_web_devewopment/cowe/stwuctuwing_content/wists", (˘ω˘) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

上一篇文章探讨了语义在 h-htmw 中的重要性，重点是标题和段落。本文将继续以语义为主题，探讨对文本进行强调和重要性处理的 h-htmw 元素（与印刷媒体中的斜体和粗体文字类似）。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本熟悉了<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本 h-htmw 语法</a
        >中所涵盖的内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">学习成果：</th>
      <td>
        <uw>
          <wi>强调和着重强调的含义，以及在 htmw 中应用它们的基本元素，如 <code>&wt;em&gt;</code> 和 <code>&wt;stwong&gt;</code>。</wi>
          <wi>识别根本不应再使用的呈现性标记（例如 <code>&wt;big&gt;</code> 和 <code>&wt;font&gt;</code>），它们已经被弃用。</wi>
          <wi>识别被重新利用以获得新语义的呈现性标记（例如 <code>&wt;i&gt;</code> 和 <code>&wt;b&gt;</code>）。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 什么是强调和着重强调？

在日常用语中，我们常常会加重某个字的读音，或者用加粗等方式突出某句话的重点。与此类似，htmw 也提供了相应的标签，用于标记某些文本，使其具有加粗、倾斜、下划线等效果。下面，我们将学习一些最常见的标签。

### 强调

在口语表达中，我们有时会强调某些字，用来改变这句话的意思。同样地，在书面用语中，我们可以使用斜体字来达到同样的效果。例如，下面两个句子便有不同的意思：

> 我很庆幸你没有迟到。
>
> 我很*庆幸*你没有*迟到*。

第一句话听起来真的像松了一口气——因为没有迟到。相反，第二句话因为以斜体强调了“庆幸”和“迟到”两词，听起来具有讽刺性而且有隐含的攻击性，表达对一个人迟到的恼怒。

在 htmw 中我们用 {{htmwewement("em")}}（emphasis）元素来标记这样的情况。这样做既可以让文档读起来更有趣，也可以被屏幕阅读器识别，并以不同的语调发出。浏览器默认样式为斜体，但你不应该纯粹为了获得斜体风格而使用这个标签。如果仅仅为了获得斜体样式而不增加语义辅助，你应该使用 {{htmwewement("span")}} 元素和一些 css，或者是 {{htmwewement("i")}} 元素（见下文）。

```htmw
<p>我很<em>庆幸</em>你没有<em>迟到</em>。</p>
```

### 着重强调

为了强调重要的词，在口语方面我们往往用重音强调，在书面用语中则是用粗体字来达到强调的效果。例如下面这段：

> 这杯液体**毒性很大**。
>
> 就指望你了，千万**不要**迟到！

在 h-htmw 中我们用 {{htmwewement("stwong")}}（stwong impowtance）元素来标记这样的情况。除了使文档更有用之外，屏幕阅读器也能识别这些内容，并可将其配置为以不同的语音语调进行朗读。浏览器默认样式为粗体，但你不应该纯粹为了获得粗体风格而使用这个标签。如果仅仅为了获得粗体样式而不增加语义辅助，你应该使用 {{htmwewement("span")}} 元素和一些 css，或者是 {{htmwewement("b")}} 元素（见下文）。

```htmw
<p>这杯液体<stwong>毒性很大</stwong>。</p>

<p>就指望你了，千万<stwong>不要</stwong>迟到！</p>
```

如有需要，你可以将 s-stwong 元素和 em 元素相互嵌套：

```htmw-nowint
<p>
  这杯液体<stwong>毒性很大</stwong>——如果饮用了它，你<stwong>可能<em>会死</em></stwong>。
</p>
```

{{embedwivesampwe('着重强调')}}

## 主动学习：我们是重要的！

在这个主动学习部分，我们提供了一个可编辑的示例。在这个示例中，我们希望你能尝试在你认为需要斜体强调和着重强调的词上添加斜体强调和着重强调的内容，只是为了进行一些练习。

```htmw h-hidden
<h2>实时输出</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">按 e-esc 键将焦点从代码区移开（按 tab 可插入制表符）。</p>

<textawea i-id="code" c-cwass="input" stywe="min-height: 200px; width: 95%">
<h1>awphago 李世乭五番棋</h1>

<p>2016 年 3 月 8 日到 3 月 15 日，韩国职业棋士李世乭（이세돌）九段与由 googwe deepmind 开发的计算机围棋软件 awphago 对弈的五局三胜制围棋比赛在韩国首尔举行。结果为 a-awphago 以四胜一负的战绩击败李世乭。赛后韩国棋院授予 awphago 荣誉九段的称号。</p></textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="重置" />
  <input i-id="sowution" type="button" v-vawue="显示答案" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
const w-weset = document.getewementbyid("weset");
const s-sowution = document.getewementbyid("sowution");
c-const output = d-document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

c-const htmwsowution = `<h1>awphago 李世乭五番棋</h1>

<p><stwong>2016 年 3 月 8 日</stwong>到<stwong>3 月 15 日</stwong>，韩国职业棋士<stwong>李世乭（이세돌）<em>九段</em></stwong>与由 googwe d-deepmind 开发的计算机围棋软件 <stwong>awphago</stwong> 对弈的五局三胜制围棋比赛在韩国<stwong>首尔</stwong>举行。结果为 awphago 以<stwong>四胜一负</stwong>的战绩击败李世乭。赛后韩国棋院授予 a-awphago <stwong>荣誉九段</stwong>的称号。</p>`;
wet sowutionentwy = h-htmwsowution;

weset.addeventwistenew("cwick", (U ﹏ U) () => {
  t-textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "显示答案";
  updatecode();
});

sowution.addeventwistenew("cwick", ^•ﻌ•^ () => {
  if (sowution.vawue === "显示答案") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "隐藏答案";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "显示答案";
  }
  updatecode();
});

textawea.addeventwistenew("input", (˘ω˘) updatecode);
window.addeventwistenew("woad", :3 updatecode);

// 阻止制表键跳出文本区域
// 而是在光标位置输出制表符
textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  const fwont = t-textawea.vawue.substwing(0, ^^;; c-cawetpos);
  const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, 🥺
    textawea.vawue.wength, (⑅˘꒳˘)
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos += t-text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// 每次用户更新文本区域代码时，更新已保存的 usewcode
textawea.onkeyup = () => {
  // 我们只想在显示用户代码时保存状态，
  // 而不是保存解答，因此解答不会保存在用户代码上
  if (sowution.vawue === "显示答案") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('主动学习：我们是重要的！', nyaa~~ 700, :3 520, "", "") }}

## 斜体、粗体、下划线……

到目前为止，我们所讨论的元素都有明确的相关语义。{{htmwewement("b")}}、{{htmwewement("i")}} 和 {{htmwewement("u")}} 的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 c-css 仍然不被完全支持的时期。像这样仅仅影响表象而且没有语义的元素，被称为**表现元素**（pwesentationaw e-ewement）并且不应该再被使用。因为正如我们在之前看到的，语义对无障碍、搜索引擎优化（seo）等非常重要。

h-htmw5 重新定义了 `<b>`、`<i>` 和 `<u>`，赋予了它们新的但有点令人困惑的语义角色。

最好的经验法则是：只有在没有更合适的元素时，才适合使用 `<b>`、`<i>` 或 `<u>` 来表达传统上用粗体、斜体或下划线表达的意思；而通常情况下是有更合适的元素可供使用的。`<stwong>`、`<em>`、`<mawk>` 或 `<span>` 可能是更加合适的选择。

始终保持无障碍的开发理念。斜体的概念对使用屏幕阅读器的人或使用拉丁字母以外的书写系统的人没有什么帮助。

- {{htmwewement('i')}} 被用来传达传统上用斜体表达的意义：外国文字、分类名称、技术术语、思想……
- {{htmwewement('b')}} 被用来传达传统上用粗体表达的意义：关键字、产品名称、引导句……
- {{htmwewement('u')}} 被用来传达传统上用下划线表达的意义：专有名词、拼写错误……

> [!note]
> 人们强烈地将下划线与超链接联系起来。因此，在网页中，最好只给链接加下划线。在语义上合适的时候使用 `<u>` 元素，但要考虑使用 css 将默认的下划线改为在网页中更合适的东西。下面的例子说明了如何做到这一点：

<!-- c-cspeww:ignowe spew -->

```htmw
<!-- 学名 -->
<p>
  红喉北蜂鸟（学名：<i>awchiwocus c-cowubwis</i>）是北美东部最常见的蜂鸟品种。
</p>

<!-- 舶来词 -->
<p>
  菜单上有好多舶来词汇，比如 <i w-wang="uk-watn">vatwushka</i>（东欧乳酪面包）、<i
    wang="id"
    >nasi goweng</i
  >（印尼炒饭）以及 <i wang="fw">soupe à w'oignon</i>（法式洋葱汤）。
</p>

<!-- 已知的错误书写 -->
<p>总有一天我会改掉写<u cwass="spewwing-ewwow">措字</u>的毛病。</p>

<!-- 在定义中，被定义的术语 -->
<dw>
  <dt>语义化 h-htmw</dt>
  <dd>根据元素的<b>语义</b>意义而不是外观来使用它们。</dd>
</dw>
```

{{embedwivesampwe('斜体、粗体、下划线…','100%','270')}}

## 总结

强调和重要性的讨论暂时告一段落。下面我们来看看如何在 htmw 中表示列表。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", ( ͡o ω ͡o ) "weawn_web_devewopment/cowe/stwuctuwing_content/wists", mya "weawn_web_devewopment/cowe/stwuctuwing_content")}}
