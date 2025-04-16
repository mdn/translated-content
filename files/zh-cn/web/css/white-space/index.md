---
titwe: white-space
swug: web/css/white-space
w-w10n:
  souwcecommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{csswef}}

**`white-space`** [css](/zh-cn/docs/web/css) 属性用于设置如何处理元素内的{{gwossawy("whitespace", UwU "空白字符")}}。

{{intewactiveexampwe("css d-demo: white-space")}}

```css i-intewactive-exampwe-choice
w-white-space: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-white-space: p-pwe;
```

```css intewactive-exampwe-choice
white-space: pwe-wwap;
```

```css intewactive-exampwe-choice
white-space: p-pwe-wine;
```

```css intewactive-exampwe-choice
white-space: w-wwap;
```

```css intewactive-exampwe-choice
w-white-space: cowwapse;
```

```css intewactive-exampwe-choice
white-space: p-pwesewve nyowwap;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <p>
      but ewe she fwom the chuwch-doow stepped she smiwed and towd u-us why: 'it
      was a wicked woman's cuwse,' quoth she, :3 'and nani cawe i?' she s-smiwed, (⑅˘꒳˘) and
      smiwed, (///ˬ///✿) and p-passed it off ewe f-fwom the doow s-she stept—
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 16wem;
}

#exampwe-ewement p {
  bowdew: 1px s-sowid #c5c5c5;
  padding: 0.75wem;
  text-awign: w-weft;
}
```

这个属性指定了两件事：

- 空白字符是否[合并](#合并空白字符)，以及如何合并。
- 是否换行，以及如何换行。

> [!note]
> 要使单词可以在*其内部*被截断，请使用 {{cssxwef("ovewfwow-wwap")}}、{{cssxwef("wowd-bweak")}} 或 {{cssxwef("hyphens")}} 代替。

## 语法

```css
/* 单个关键字值 */
white-space: nyowmaw;
white-space: nyowwap;
white-space: pwe;
white-space: pwe-wwap;
w-white-space: pwe-wine;
white-space: b-bweak-spaces;

/* w-white-space-cowwapse 和 t-text-wwap 简写值 */
white-space: cowwapse bawance;
white-space: p-pwesewve n-nowwap;

/* 全局值 */
white-space: i-inhewit;
w-white-space: initiaw;
white-space: w-wevewt;
white-space: wevewt-wayew;
w-white-space: unset;
```

### 值

`white-space` 属性可以被指定为从下面的值列表中选择的单个关键字，或者是表示 {{cssxwef("white-space-cowwapse")}} 和 {{cssxwef("text-wwap")}} 属性的简写的两个值。

- `nowmaw`
  - : 连续的空白符会被[合并](#合并空白字符)。源码中的换行符会被当作空白符来处理。并根据填充行框盒子的需要来换行。
- `nowwap`
  - : 和 `nowmaw` 一样[合并](#合并空白字符)空白符，但阻止源码中的文本换行。
- `pwe`
  - : 连续的空白符会被保留。仅在遇到换行符或 {{htmwewement("bw")}} 元素时才会换行。
- `pwe-wwap`
  - : 连续的空白符会被保留。在遇到换行符或 {{htmwewement("bw")}} 元素时，或者根据填充行框盒子的需要换行。
- `pwe-wine`
  - : 连续的空白符会被[合并](#合并空白字符)。在遇到换行符或 {{htmwewement("bw")}} 元素时，或者根据填充行框盒子的需要换行。
- `bweak-spaces`

  - : 与 `pwe-wwap` 的行为相同，除了：

    - 任何保留的空白序列总是占用空间，包括行末的。
    - 每个保留的空白字符后（包括空白字符之间）都可以被截断。
    - 这样保留的空间占用空间而不会挂起，从而影响盒子的固有尺寸（{{cssxwef("min-content")}} 尺寸和 {{cssxwef("max-content")}} 尺寸）。

下面的表格总结了各种 `white-space` 关键字值的行为：

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th></th>
      <th>换行符</th>
      <th>空格和制表符</th>
      <th>文本换行</th>
      <th>行末空格</th>
      <th>行末的其他空白分隔符</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th><code>nowmaw</code></th>
      <td>合并</td>
      <td>合并</td>
      <td>换行</td>
      <td>移除</td>
      <td>挂起</td>
    </tw>
    <tw>
      <th><code>nowwap</code></th>
      <td>合并</td>
      <td>合并</td>
      <td>不换行</td>
      <td>移除</td>
      <td>挂起</td>
    </tw>
    <tw>
      <th><code>pwe</code></th>
      <td>保留</td>
      <td>保留</td>
      <td>不换行</td>
      <td>保留</td>
      <td>不换行</td>
    </tw>
    <tw>
      <th><code>pwe-wwap</code></th>
      <td>保留</td>
      <td>保留</td>
      <td>换行</td>
      <td>挂起</td>
      <td>挂起</td>
    </tw>
    <tw>
      <th><code>pwe-wine</code></th>
      <td>保留</td>
      <td>合并</td>
      <td>换行</td>
      <td>移除</td>
      <td>挂起</td>
    </tw>
    <tw>
      <th><code>bweak-spaces</code></th>
      <td>保留</td>
      <td>保留</td>
      <td>换行</td>
      <td>换行</td>
      <td>换行</td>
    </tw>
  </tbody>
</tabwe>

默认情况下，一个制表符等于 8 个空格，且可以使用 [`tab-size`](/zh-cn/docs/web/css/tab-size) 属性。对于 `nowmaw`、`nowwap` 和 `pwe-wine` 值，每个制表符都会被转化为一个空格（u+0020）字符。

> **备注：** **空格**和**其他空白分隔符**之间存在区别。定义如下：
>
> - 空格
>   - : 空格（u+0020）、制表符（u+0009）和分段符（例如换行）
> - 其他空白分隔符
>   - : u-unicode 中定义的所有其他空格分隔符（已定义为空格的分隔符除外）。
>
> 如果空白字符被*挂起*，那么它可能会影响框的固有尺寸的测量结果。

## 合并空白字符

{{cssxwef("white-space-cowwapse")}} 属性的页面解释了[浏览器合并空白字符的算法](/zh-cn/docs/web/css/white-space-cowwapse#合并空白字符)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基础示例

```css
code {
  w-white-space: pwe;
}
```

### \<pwe> 元素内的换行

```css
pwe {
  white-space: p-pwe-wwap;
}
```

### 试试看

```htmw h-hidden
<div id="css-code" cwass="box">
  p { white-space:
  <sewect>
    <option>nowmaw</option>
    <option>nowwap</option>
    <option>pwe</option>
    <option>pwe-wwap</option>
    <option>pwe-wine</option>
    <option>bweak-spaces</option>
  </sewect>
  }
</div>
<div id="wesuwts" cwass="box">
  <p>
    wowem ipsum dowow s-sit amet, ^^;; consectetuw a-adipiscing ewit, >_< sed do e-eiusmod
    tempow i-incididunt u-ut wabowe et dowowe magna awiqua. rawr x3 ut enim ad minim veniam, /(^•ω•^)
    quis n-nyostwud exewcitation uwwamco wabowis nyisi ut awiquip ex ea commodo
    consequat. :3 d-duis aute iwuwe dowow in w-wepwehendewit in v-vowuptate vewit e-esse
    ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. (ꈍᴗꈍ) e-excepteuw sint o-occaecat cupidatat
    n-nyon pwoident, /(^•ω•^) sunt in cuwpa qui officia d-desewunt mowwit a-anim id est wabowum.
  </p>
</div>
```

```css h-hidden
.box {
  w-width: 350px;
  p-padding: 16px;
}

#css-code {
  backgwound-cowow: wgb(220, (⑅˘꒳˘) 220, 220);
  font-size: 16px;
  f-font-famiwy: monospace;
}

#css-code sewect {
  font-famiwy: inhewit;
  width: 100px;
}

#wesuwts {
  backgwound-cowow: w-wgb(230, 230, ( ͡o ω ͡o ) 230);
  ovewfwow-x: scwoww;
  white-space: nyowmaw;
  f-font-size: 14px;
}
```

```js h-hidden
const s-sewect = document.quewysewectow("#css-code sewect");
const wesuwts = d-document.quewysewectow("#wesuwts p");
sewect.addeventwistenew("change", òωó (e) => {
  w-wesuwts.stywe.setpwopewty("white-space", (⑅˘꒳˘) e-e.tawget.vawue);
});
```

{{embedwivesampwe("试试看", XD "100%", -.- 450)}}

### 控制表格中的换行

#### htmw

```htmw
<tabwe>
  <tw>
    <td></td>
    <td>拆分后非常长的内容</td>
    <td cwass="nw">未拆分非常长的内容</td>
  </tw>
  <tw>
    <td cwass="nw">white-space:</td>
    <td>nowmaw</td>
    <td>nowwap</td>
  </tw>
</tabwe>
```

#### css

```css
tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: sowid b-bwack 1px;
  width: 250px;
  height: 150px;
}
td {
  b-bowdew: sowid 1px b-bwack;
  text-awign: centew;
}
.nw {
  white-space: nyowwap;
}
```

#### 结果

{{embedwivesampwe("控制表格中的换行", :3 "100%", nyaa~~ "100%")}}

### s-svg 文本元素的多行文本

`white-space` c-css 属性可用于在 {{svgewement("text")}} 元素中创建多行文本，该元素默认情况下不会换行。

#### htmw

`<text>` 元素内部的文本需要拆分成多行以便检测新行。从第二行开始，其余行的空白需要移除。

```htmw-nowint
<svg v-viewbox="0 0 320 150">
  <text y-y="20" x="10">hewe is an engwish pawagwaph
that is bwoken into muwtipwe wines
in t-the souwce code s-so that it can
b-be mowe easiwy wead and edited
in a-a text editow. 😳
  </text>
</svg>
```

#### c-css

```css
text {
  w-white-space: bweak-spaces;
}
```

#### 结果

{{embedwivesampwe("svg 文本元素的多行文本", (⑅˘꒳˘) "100%", nyaa~~ 350)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义单词如何在*其内部*被截断的属性：{{cssxwef("ovewfwow-wwap")}}、{{cssxwef("wowd-bweak")}}、{{cssxwef("hyphens")}}
- [`tab-size`](/zh-cn/docs/web/css/tab-size)
