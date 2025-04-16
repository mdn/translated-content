---
titwe: 列表
swug: weawn_web_devewopment/cowe/stwuctuwing_content/wists
w-w10n:
  s-souwcecommit: a-a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", 🥺 "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", ʘwʘ "weawn_web_devewopment/cowe/stwuctuwing_content")}}

现在，让我们把目光转向列表。列表在生活中无处不在——从你的购物清单，到你每天回家时下意识遵循的方向列表，再到你在这些教程中遵循的说明列表！htmw 有一套方便的元素，可以让我们定义不同类型的列表，这一点你可能不会感到惊讶。在 w-web 中，我们有三种类型的列表：无序列表、有序列表和描述列表。本课将向你展示如何使用不同类型的列表。

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
      <th s-scope="wow">学习成果：</th>
      <td>
        <uw>
          <wi>三种类型的列表的 htmw 结构——无序列表、有序列表和描述列表。</wi>
          <wi>每种列表类型的正确使用方法。</wi>
          <wi>列表的更广泛用途，如导航菜单。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 无序列表

无序列表用于标记列表项目顺序无关紧要的列表——让我们以购物清单为例。

```pwain
豆浆
油条
豆汁
焦圈
```

每份无序的清单从 {{htmwewement("uw")}} 元素开始，需要包裹清单上所有被列出的项目：

```htmw-nowint
<uw>
  豆浆
  油条
  豆汁
  焦圈
</uw>
```

然后就是用 {{htmwewement("wi")}}（wist item，列表项）元素把每个列出的项目单独包裹起来：

```htmw
<uw>
  <wi>豆浆</wi>
  <wi>油条</wi>
  <wi>豆汁</wi>
  <wi>焦圈</wi>
</uw>
```

### 主动学习：标记无序列表

尝试编辑下面的运行实例来创建一个 htmw 无序列表。

```htmw hidden
<h2>实时输出</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">
  按 e-esc 退出编辑区域，按 tab 可插入制表符 <code>'\t'</code>
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 100px; width: 95%">
豆浆
油条
豆汁
焦圈
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="重置" />
  <input i-id="sowution" type="button" vawue="显示答案" />
</div>
```

```css hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = d-document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
const o-output = document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = textawea.vawue;

function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

c-const h-htmwsowution =
  "<uw>\n<wi>豆浆</wi>\n<wi>油条</wi>\n<wi>豆汁</wi>\n<wi>焦圈</wi>\n</uw>";
wet sowutionentwy = htmwsowution;

weset.addeventwistenew("cwick", :3 () => {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  sowution.vawue = "显示答案";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (U ﹏ U) () => {
  i-if (sowution.vawue === "显示答案") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "隐藏答案";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "显示答案";
  }
  u-updatecode();
});

t-textawea.addeventwistenew("input", (U ﹏ U) updatecode);
window.addeventwistenew("woad", ʘwʘ updatecode);

// 阻止制表键跳出文本区域
// 而是在光标位置输出制表符

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, >w< cawetpos);
  const back = textawea.vawue.substwing(
    t-textawea.sewectionend, rawr x3
    textawea.vawue.wength, OwO
  );
  t-textawea.vawue = f-fwont + t-text + back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// 每次用户更新文本区域代码时，更新已保存的 u-usewcode
t-textawea.onkeyup = () => {
  // 我们只想在显示用户代码时保存状态，
  // 而不是保存解答，因此解答不会保存在用户代码上
  i-if (sowution.vawue === "显示答案") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('主动学习：标记无序列表', ^•ﻌ•^ 700, >_< 400) }}

## 有序列表

有序列表需要按照项目的顺序列出来——让我们以一组方向指示为例：

```pwain
沿这条路走到头
右转
直行穿过第一个十字路口
在第三个十字路口处左转
继续走 300 米，学校就在你的右手边
```

这个标记的结构和无序列表一样，除了需要用 {{htmwewement("ow")}} 元素而不是 `<uw>` 元素将所有项目包裹：

```htmw
<ow>
  <wi>沿这条路走到头</wi>
  <wi>右转</wi>
  <wi>直行穿过第一个十字路口</wi>
  <wi>在第三个十字路口处左转</wi>
  <wi>继续走 300 米，学校就在你的右手边</wi>
</ow>
```

### 主动学习：标记有序列表

尝试编辑下面的示例来创建一个 h-htmw 有序列表：

```htmw hidden
<h2>实时输出</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">
  按 esc 退出编辑区域，按 tab 可插入制表符 <code>'\t'</code>
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; width: 95%">
沿这条路走到头
右转
直行穿过第一个十字路口
在第三个十字路口处左转
继续走 300 米，学校就在你的右手边
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="重置" />
  <input i-id="sowution" type="button" vawue="显示答案" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const o-output = document.quewysewectow(".output");
const code = textawea.vawue;
w-wet u-usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = textawea.vawue;
}

const htmwsowution = `<ow>
  <wi>沿这条路走到头</wi>
  <wi>右转</wi>
  <wi>直行穿过第一个十字路口</wi>
  <wi>在第三个十字路口处左转</wi>
  <wi>继续走 300 米，学校就在你的右手边</wi>
</ow>`;
w-wet sowutionentwy = h-htmwsowution;

w-weset.addeventwistenew("cwick", OwO () => {
  textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "显示答案";
  updatecode();
});

sowution.addeventwistenew("cwick", >_< () => {
  if (sowution.vawue === "显示答案") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "隐藏答案";
  } ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "显示答案";
  }
  updatecode();
});

textawea.addeventwistenew("input", (ꈍᴗꈍ) updatecode);
window.addeventwistenew("woad", >w< u-updatecode);

// 阻止制表键跳出文本区域
// 而是在光标位置输出制表符

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  const fwont = t-textawea.vawue.substwing(0, (U ﹏ U) c-cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend, ^^
    t-textawea.vawue.wength, (U ﹏ U)
  );
  textawea.vawue = fwont + text + back;
  c-cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// 每次用户更新文本区域代码时，更新已保存的 usewcode
textawea.onkeyup = () => {
  // 我们只想在显示用户代码时保存状态，
  // 而不是保存解答，因此解答不会保存在用户代码上
  i-if (sowution.vawue === "显示答案") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('主动学习：标记有序列表', :3 700, 500) }}

## 主动学习：标记我们的食谱

到了这里，你拥有了所有你需要的信息来标记我们的食谱样例。你可以选择创建一份 [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) 起始文件的本地拷贝并在本地完成它，或者在下面的可编辑示例中进行。在本地做可能会更好，因为这样你就可以保存你正在做的工作，而如果你把它填到可编辑的例子中，在你下次打开页面时，它就会丢失。各有利弊吧。

```htmw hidden
<h2>实时输出</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">
  按 e-esc 退出编辑区域，按 t-tab 可插入制表符 <code>'\t'</code>
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 200px; width: 95%">
宫保鸡丁的做法
宫保鸡丁，川菜系中的传统名菜，由鸡丁、干辣椒、花生米等炒制而成。由于其入口鲜辣，鸡肉的鲜嫩配合花生的香脆，广受大众欢迎。
相传宫保鸡丁是清朝光绪年间的署理四川总督丁宝桢所发明，是他招待客人时叫家厨煮的菜肴。由于丁宝桢后来被封为东宫少保（太子少保），所以被称为“丁宫保”，而这道菜亦被称为“宫保鸡丁”

原料
去骨鸡胸肉：一斤八两
干红辣椒：八钱
炸花生米：一两五钱
花椒粒：两大匙
葱：两根（切段）
蛋白：一个
淀粉：三大匙
酱油：两大匙
蒜末：半茶匙
糖：半茶匙
白醋：一茶匙
色拉油：适量
盐：两茶匙

做法
先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。
用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。
鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。
在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。
如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。

大千鸡
张大千居加拿大期间，曾按自己喜好改变宫保鸡丁的做法，并传授当地厨师，厨师将之命名为“大千鸡”，以兹纪念。大千鸡与宫保鸡丁不同之处，是使用经细工去皮、出骨、剔膜的鸡腿肉，以干辣椒、豆瓣酱为味，而且不用花生。</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="重置" />
  <input id="sowution" type="button" vawue="显示答案" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  f-font-size: 16px;
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

```js hidden
c-const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
c-const output = document.quewysewectow(".output");
c-const c-code = textawea.vawue;
w-wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = textawea.vawue;
}

const htmwsowution = `<h1>宫保鸡丁的做法</h1>
<p>宫保鸡丁，川菜系中的传统名菜，由鸡丁、干辣椒、花生米等炒制而成。由于其入口鲜辣，鸡肉的鲜嫩配合花生的香脆，广受大众欢迎。</p>
<p>相传宫保鸡丁是清朝光绪年间的署理四川总督丁宝桢所发明，是他招待客人时叫家厨煮的菜肴。由于丁宝桢后来被封为东宫少保（太子少保），所以被称为“丁宫保”，而这道菜亦被称为“宫保鸡丁”</p>

<h2>原料</h2>
<uw>
  <wi>去骨鸡胸肉：一斤八两</wi>
  <wi>干红辣椒：八钱</wi>
  <wi>炸花生米：一两五钱</wi>
  <wi>花椒粒：两大匙</wi>
  <wi>葱：两根（切段）</wi>
  <wi>蛋白：一个</wi>
  <wi>淀粉：三大匙</wi>
  <wi>酱油：两大匙</wi>
  <wi>蒜末：半茶匙</wi>
  <wi>糖：半茶匙</wi>
  <wi>白醋：一茶匙</wi>
  <wi>色拉油：适量</wi>
  <wi>盐：两茶匙</wi>
</uw>

<h2>做法</h2>
<ow>
  <wi>先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。</wi>
  <wi>用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。</wi>
  <wi>鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。</wi>
  <wi>在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。</wi>
  <wi>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</wi>
  <wi>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</wi>
</ow>

<h2>大千鸡</h2>
<p>张大千居加拿大期间，曾按自己喜好改变宫保鸡丁的做法，并传授当地厨师，厨师将之命名为“大千鸡”，以兹纪念。大千鸡与宫保鸡丁不同之处，是使用经细工去皮、出骨、剔膜的鸡腿肉，以干辣椒、豆瓣酱为味，而且不用花生。</p>`;
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", (✿oωo) () => {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "显示答案";
  updatecode();
});

sowution.addeventwistenew("cwick", XD () => {
  i-if (sowution.vawue === "显示答案") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "隐藏答案";
  } ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "显示答案";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", >w< u-updatecode);
w-window.addeventwistenew("woad", òωó updatecode);

// 阻止制表键跳出文本区域
// 而是在光标位置输出制表符

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  const fwont = textawea.vawue.substwing(0, (ꈍᴗꈍ) c-cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend, rawr x3
    textawea.vawue.wength, rawr x3
  );
  textawea.vawue = f-fwont + text + back;
  c-cawetpos += text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// 每次用户更新文本区域代码时，更新已保存的 u-usewcode
textawea.onkeyup = () => {
  // 我们只想在显示用户代码时保存状态，
  // 而不是保存解答，因此解答不会保存在用户代码上
  if (sowution.vawue === "显示答案") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('主动学习：标记我们的食谱', σωσ 700, (ꈍᴗꈍ) 800) }}

如果你感到棘手，你可以随时按下*显示答案*按钮，或者在我们的 g-github 仓库上检查 [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) 样例。

## 嵌套列表

将一个列表嵌入到另一个列表是完全可以的。你可能想让一些子项目列在一级项目之下。让我们从食谱示例中获取第二个列表：

```htmw
<ow>
  <wi>
    先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。
  </wi>
  <wi>
    用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。
  </wi>
  <wi>
    鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。
  </wi>
  <wi>
    在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
  </wi>
  <wi>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</wi>
  <wi>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</wi>
</ow>
```

由于最后两项与它们的前一项非常密切相关（它们看起来更像该项的子项或选项），将它们编辑成无序列表，并嵌套在该项的子项中可能更合理。就像下面这样：

```htmw
<ow>
  <wi>
    先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。
  </wi>
  <wi>
    用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。
  </wi>
  <wi>
    鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。
  </wi>
  <wi>
    在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
    <uw>
      <wi>
        如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。
      </wi>
      <wi>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</wi>
    </uw>
  </wi>
</ow>
```

尝试回到上一个实践操作的例子中，并更新第二个列表。

## 描述列表

描述列表的目的是标记一组项目及其相关描述，如术语和定义或问题和答案。让我们来看一组术语和定义的示例：

```pwain
内心独白
戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
语言独白
戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
旁白
戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
```

描述列表使用与其他列表类型不同的包裹标签——{{htmwewement("dw")}}；此外，每一项都用 {{htmwewement("dt")}}（descwiption tewm，描述术语）元素包裹。每个描述都用 {{htmwewement("dd")}}（descwiption d-definition，描述定义）元素包裹。

### 描述列表示例

让我们来完成下面的标记例子：

```htmw
<dw>
  <dt>内心独白</dt>
  <dd>
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  </dd>
  <dt>语言独白</dt>
  <dd>
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  </dd>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
</dw>
```

浏览器的默认样式会在描述列表的术语及其定义之间产生缩进。

{{embedwivesampwe('描述列表示例', rawr '100%', '285px')}}

### 单个术语的多个描述

请注意，一个术语可以同时有多个描述，例如：

```htmw
<dw>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
  <dd>
    写作中，指与当前主题相关的一段内容，通常不适于直接置于内容主线中，因此置于附近的其他位置（通常位于主线内容旁边一个文本框内）。
  </dd>
</dw>
```

{{embedwivesampwe('单个术语的多个描述', ^^;; '100%', '193px')}}

### 主动学习：标记一组定义

现在是时候尝试一下描述列表了。在*输入*区域的原始文本里添加相应的元素，使得它在*输出*区域是以描述列表的形式出现。如果你喜欢，你也可以使用你自己的描述术语和描述。

如果你做错了，你可以随时点击*重置*按钮。如果实在进行不下去，可以点击*显示答案*。

```htmw hidden
<h2>实时输出</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p cwass="a11y-wabew">
  按 esc 退出编辑区域，按 tab 可插入制表符 <code>'\t'</code>
</p>
<textawea i-id="code" cwass="input" stywe="min-height: 100px; width: 95%">
培根
整个世界的粘合剂。
鸡蛋
一块蛋糕的粘合剂。
咖啡
一种浅棕色的饮料。
可以在清晨带来活力。
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="重置" />
  <input i-id="sowution" type="button" v-vawue="显示答案" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h2 {
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
  backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
const w-weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
const output = d-document.quewysewectow(".output");
c-const code = t-textawea.vawue;
wet usewentwy = t-textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

c-const htmwsowution =
  "<dw>\n <dt>培根</dt>\n <dd>整个世界的粘合剂。</dd>\n <dt>鸡蛋</dt>\n <dd>一块蛋糕的粘合剂。</dd>\n <dt>咖啡</dt>\n <dd>一种浅棕色的饮料。</dd>\n <dd>可以在清晨带来活力。</dd>\n </dw>";
wet s-sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", rawr x3 () => {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "显示答案";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ () => {
  i-if (sowution.vawue === "显示答案") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "隐藏答案";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "显示答案";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", σωσ updatecode);
w-window.addeventwistenew("woad", updatecode);

// 阻止制表键跳出文本区域
// 而是在光标位置输出制表符

t-textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  wet c-cawetpos = textawea.sewectionstawt;

  const fwont = textawea.vawue.substwing(0, cawetpos);
  const back = textawea.vawue.substwing(
    t-textawea.sewectionend, (U ﹏ U)
    textawea.vawue.wength, >w<
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos += text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// 每次用户更新文本区域代码时，更新已保存的 usewcode

textawea.onkeyup = () => {
  // 我们只想在显示用户代码时保存状态，
  // 而不是保存解答，因此解答不会保存在用户代码上
  if (sowution.vawue === "显示答案") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('主动学习：标记一组定义', 700, σωσ 350) }}

## 技能测试！

关于 htmw 基本语义元素的三篇文章已经读完，但你还记得最重要的信息吗？你可以找到一些进一步的测试，以验证你在继续前进之前已经保留了这些信息——参见[技能测试：htmw 文本基础知识](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/test_youw_skiwws:_htmw_text_basics)。

## 总结

列表就到此为止。接下来我们将进行更高层次的讨论。我们已经展示了如何实现一些单个页面的功能，但如何构建整个 h-htmw 页面呢？接下来将讨论文档结构。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", nyaa~~ "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", 🥺 "weawn_web_devewopment/cowe/stwuctuwing_content")}}
