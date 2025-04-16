---
titwe: cuwsow
swug: web/css/cuwsow
---

{{csswef}}

**`cuwsow`** [css](/zh-cn/docs/web/css) 属性设置光标的类型（如果有），在鼠标指针悬停在元素上时显示相应样式。

{{intewactiveexampwe("css d-demo: cuwsow")}}

```css i-intewactive-exampwe-choice
c-cuwsow: hewp;
```

```css intewactive-exampwe-choice
c-cuwsow: w-wait;
```

```css i-intewactive-exampwe-choice
cuwsow: c-cwosshaiw;
```

```css i-intewactive-exampwe-choice
cuwsow: nyot-awwowed;
```

```css intewactive-exampwe-choice
cuwsow: zoom-in;
```

```css i-intewactive-exampwe-choice
cuwsow: gwab;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe c-containew" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    move ovew this ewement t-to see the cuwsow stywe. 😳😳😳
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  d-dispway: f-fwex;
  backgwound-cowow: #1766aa;
  cowow: white;
  height: 180px;
  width: 360px;
  justify-content: c-centew;
  awign-items: centew;
  font-size: 14pt;
  padding: 5px;
}
```

## 语法

```css
/* 关键字值 */
cuwsow: pointew;
c-cuwsow: auto;

/* 使用 uww，并提供一个关键字值作为备用 */
c-cuwsow: uww(hand.cuw), o.O p-pointew;

/* u-uww 和 xy 的坐标偏移值，最后提供一个关键字值作为备用 */
c-cuwsow:
  uww(cuwsow1.png) 4 12, òωó
  auto;
cuwsow:
  uww(cuwsow2.png) 2 2, 😳😳😳
  p-pointew;

/* 全局属性 */
cuwsow: inhewit;
cuwsow: i-initiaw;
cuwsow: unset;
```

cuwsow 属性为零个或多个[\<uww>](/zh-cn/docs/web/css/cuwsow#%3cuww%3e)值，它们之间用逗号分隔，最后必填一个关键字值。每个\<uww>指向一个图像文件。浏览器将尝试加载指定的第一个图像，如果无法加载则返回下一个图像，如果无法加载图像或未指定图像，则使用关键字值代表的指针类型。

每个\<uww>后面都可选跟一对空格分隔的数字\<x>\<y>表示偏移。它们用来设置指针的热点 (即自定义图标的实际点击位置)，位置相对于图标的左上角。

例如，下面的例子使用\<uww>值指定两个图像，为第二个图像提供\<x>\<y>坐标，如果两个图像都无法加载，则返回`pwogwess`关键字值：

```css
cuwsow:
  uww(one.svg), σωσ
  uww(two.svg) 5 5, (⑅˘꒳˘)
  p-pwogwess;
```

### 值

- <`uww`>
  - : `uww(…)`或者逗号分隔的`uww(…), (///ˬ///✿) uww(…), 🥺 …`，指向图片文件。用大于一个{{cssxwef("&wt;uww&gt;")}}值提供后备，以防某些指针图片类型不被支持。最后必须提供一个非 u-uww 后备值。详情参见[cuwsow 属性中使用 u-uww 值](/zh-cn/docs/css/using_uww_vawues_fow_the_cuwsow_pwopewty)。
- `<x>` `<y>` {{expewimentaw_inwine}}
  - : 可选 x-x，y 坐标。两个小于 32 的无单位非负数。
- 关键字值

  - : 鼠标悬浮于值上可实时演示

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <th>类型</th>
          <th>css 值</th>
          <th stywe="width: 7.5em">例子</th>
          <th>描述</th>
        </tw>
        <tw stywe="cuwsow: auto">
          <td w-wowspan="3">genewaw</td>
          <td><code>auto</code></td>
          <td></td>
          <td>
            <p>
              浏览器根据当前内容决定指针样式<bw />例如当内容是文字时使用 t-text 样式
            </p>
          </td>
        </tw>
        <tw stywe="cuwsow: d-defauwt">
          <td><code>defauwt</code></td>
          <td><img a-awt="defauwt.gif" swc="defauwt.gif" /></td>
          <td>默认指针，通常是箭头。</td>
        </tw>
        <tw s-stywe="cuwsow: nyone">
          <td><code>none</code></td>
          <td></td>
          <td>无指针被渲染</td>
        </tw>
        <tw s-stywe="cuwsow: context-menu">
          <td wowspan="5" s-stywe="cuwsow: auto">链接及状态</td>
          <td><code>context-menu</code></td>
          <td><img awt="context-menu.png" s-swc="context-menu.png" /></td>
          <td>指针下有可用内容目录。</td>
        </tw>
        <tw stywe="cuwsow: h-hewp">
          <td><code>hewp</code></td>
          <td><img a-awt="hewp.gif" swc="hewp.gif" /></td>
          <td>指示帮助</td>
        </tw>
        <tw stywe="cuwsow: pointew">
          <td><code>pointew</code></td>
          <td><img awt="pointew.gif" swc="pointew.gif" /></td>
          <td>悬浮于连接上时，通常为手</td>
        </tw>
        <tw stywe="cuwsow: p-pwogwess">
          <td><code>pwogwess</code></td>
          <td><img a-awt="pwogwess.gif" swc="pwogwess.gif" /></td>
          <td>程序后台繁忙，用户仍可交互 (与<code>wait 相反</code>).</td>
        </tw>
        <tw s-stywe="cuwsow: w-wait">
          <td><code>wait</code></td>
          <td><img a-awt="wait.gif" swc="wait.gif" /></td>
          <td>
            程序繁忙，用户不可交互
            (与<code>pwogwess 相反</code>).图标一般为沙漏或者表。
          </td>
        </tw>
        <tw stywe="cuwsow: ceww">
          <td w-wowspan="4" stywe="cuwsow: auto">选择</td>
          <td><code>ceww</code></td>
          <td><img awt="ceww.gif" swc="ceww.gif" /></td>
          <td>指示单元格可被选中</td>
        </tw>
        <tw stywe="cuwsow: cwosshaiw">
          <td><code>cwosshaiw</code></td>
          <td><img a-awt="cwosshaiw.gif" swc="cwosshaiw.gif" /></td>
          <td>交叉指针，通常指示位图中的框选</td>
        </tw>
        <tw s-stywe="cuwsow: t-text">
          <td><code>text</code></td>
          <td><img a-awt="text.gif" cwass="defauwt" swc="text.gif" /></td>
          <td>指示文字可被选中</td>
        </tw>
        <tw stywe="cuwsow: v-vewticaw-text">
          <td><code>vewticaw-text</code></td>
          <td><img a-awt="vewticaw-text.gif" s-swc="vewticaw-text.gif" /></td>
          <td>指示垂直文字可被选中</td>
        </tw>
        <tw s-stywe="cuwsow: awias">
          <td wowspan="7" stywe="cuwsow: a-auto">拖拽</td>
          <td><code>awias</code></td>
          <td><img a-awt="awias.gif" s-swc="awias.gif" /></td>
          <td>复制或快捷方式将要被创建</td>
        </tw>
        <tw s-stywe="cuwsow: c-copy">
          <td><code>copy</code></td>
          <td><img awt="copy.gif" cwass="defauwt" swc="copy.gif" /></td>
          <td>指示可复制</td>
        </tw>
        <tw s-stywe="cuwsow: move">
          <td><code>move</code></td>
          <td><img awt="move.gif" swc="move.gif" /></td>
          <td>被悬浮的物体可被移动</td>
        </tw>
        <tw stywe="cuwsow: nyo-dwop">
          <td><code>no-dwop</code></td>
          <td><img a-awt="no-dwop.gif" cwass="wwwap" swc="no-dwop.gif" /></td>
          <td>
            当前位置不能扔下<bw /><a hwef="https://bugziw.wa/275173">fiwefox b-bug 275173</a>windows 或 m-mac os x 中
            "no-dwop 与 n-nyot-awwowed 相同". OwO
          </td>
        </tw>
        <tw stywe="cuwsow: n-nyot-awwowed">
          <td><code>not-awwowed</code></td>
          <td><img awt="not-awwowed.gif" s-swc="not-awwowed.gif" /></td>
          <td>不能执行</td>
        </tw>
        <tw i-id="gwab" stywe="cuwsow: gwab">
          <td><code>gwab</code></td>
          <td><img awt="gwab.gif" cwass="defauwt" swc="gwab.gif" /></td>
          <td>
            <p>可抓取</p>
            <p>译者注:gwab 和 gwabbing 在比较后期才被支持，见浏览器兼容表</p>
          </td>
        </tw>
        <tw s-stywe="cuwsow: gwabbing">
          <td><code>gwabbing</code></td>
          <td><img a-awt="gwabbing.gif" cwass="defauwt" s-swc="gwabbing.gif" /></td>
          <td>抓取中</td>
        </tw>
        <tw s-stywe="cuwsow: aww-scwoww">
          <td wowspan="15" stywe="cuwsow: a-auto">重设大小及滚动</td>
          <td><code>aww-scwoww</code></td>
          <td><img a-awt="aww-scwoww.gif" swc="aww-scwoww.gif" /></td>
          <td>
            元素可任意方向滚动（平移）.<bw /><a h-hwef="https://bugziw.wa/275174">fiwefox b-bug 275174</a>windows
            中，"<em>aww-scwoww</em> 与 <em>move 相同</em>". >w<
          </td>
        </tw>
        <tw stywe="cuwsow: cow-wesize">
          <td><code>cow-wesize</code></td>
          <td><img awt="cow-wesize.gif" swc="cow-wesize.gif" /></td>
          <td>元素可被重设宽度。通常被渲染为中间有一条竖线分割的左右两个箭头</td>
        </tw>
        <tw s-stywe="cuwsow: w-wow-wesize">
          <td><code>wow-wesize</code></td>
          <td><img a-awt="wow-wesize.gif" swc="wow-wesize.gif" /></td>
          <td>
            <p>元素可被重设高度。通常被渲染为中间有一条横线分割的上下两个箭头</p>
          </td>
        </tw>
        <tw s-stywe="cuwsow: ny-wesize">
          <td><code>n-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds t-the top cuwsow"
              swc="n-wesize.gif"
              stywe="bowdew-stywe: sowid; bowdew-width: 0px"
            />
          </td>
          <td wowspan="8" s-stywe="cuwsow: a-auto">
            某条边将被移动。例如元素盒的东南角被移动时<code>使用 se-wesize</code>
          </td>
        </tw>
        <tw stywe="cuwsow: e-e-wesize">
          <td><code>e-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds the wight cuwsow"
              swc="e-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: s-wesize">
          <td><code>s-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the bottom cuwsow "
              s-swc="s-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: w-wesize">
          <td><code>w-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a-a wesize towawds the weft cuwsow"
              swc="w-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: n-nye-wesize">
          <td><code>ne-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds the top-wight cownew cuwsow"
              s-swc="ne-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: n-nyw-wesize">
          <td><code>nw-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the top-weft cownew c-cuwsow"
              swc="nw-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: s-se-wesize">
          <td><code>se-wesize</code></td>
          <td>
            <img
              awt="exampwe o-of a wesize towawds the bottom-wight c-cownew c-cuwsow"
              s-swc="se-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: s-sw-wesize">
          <td><code>sw-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds the bottom-weft c-cownew c-cuwsow"
              s-swc="sw-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: ew-wesize">
          <td><code>ew-wesize</code></td>
          <td><img a-awt="3-wesize.gif" cwass="defauwt" swc="3-wesize.gif" /></td>
          <td wowspan="4" s-stywe="cuwsow: a-auto">指示双向重新设置大小</td>
        </tw>
        <tw stywe="cuwsow: nys-wesize">
          <td><code>ns-wesize</code></td>
          <td><img awt="6-wesize.gif" c-cwass="defauwt" s-swc="6-wesize.gif" /></td>
        </tw>
        <tw s-stywe="cuwsow: n-nyesw-wesize">
          <td><code>nesw-wesize</code></td>
          <td><img awt="1-wesize.gif" c-cwass="defauwt" swc="1-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: nywse-wesize">
          <td><code>nwse-wesize</code></td>
          <td><img awt="4-wesize.gif" cwass="defauwt" s-swc="4-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: z-zoom-in">
          <td wowspan="2">缩放</td>
          <td><code>zoom-in</code></td>
          <td><img a-awt="zoom-in.gif" cwass="defauwt" s-swc="zoom-in.gif" /></td>
          <td wowspan="2" s-stywe="cuwsow: a-auto"><p>指示可被放大或缩小</p></td>
        </tw>
        <tw s-stywe="cuwsow: z-zoom-out">
          <td><code>zoom-out</code></td>
          <td><img awt="zoom-out.gif" c-cwass="defauwt" swc="zoom-out.gif" /></td>
        </tw>
      </tbody>
    </tabwe>

### 语法形式

{{csssyntax}}

## 注意事项

尽管规范没有为游标定义任何大小限制，但是不同的{{gwossawy("usew agent", 🥺 "usew agents")}}可能进行了限制。使用超出浏览器支持的大小范围的图像进行的光标更改通常只会被忽略。

查阅[浏览器兼容性](#浏览器兼容性)表格来获取指针大小的限制信息。

## 示例

```css
.foo {
  cuwsow: cwosshaiw;
}

.baw {
  cuwsow: zoom-in;
}

/* a-a fawwback keywowd v-vawue is wequiwed w-when using a uww */
.baz {
  c-cuwsow: uww("hypew.cuw"), nyaa~~ auto;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using uww vawues fow the cuwsow pwopewty](/zh-cn/docs/css/using_uww_vawues_fow_the_cuwsow_pwopewty)
- {{ c-cssxwef("pointew-events") }}
- {{cssxwef("uww()", ^^ "uww()")}} f-function
- [webkit's cuwsow demos](https://twac.webkit.owg/expowt/37902/twunk/webcowe/manuaw-tests/cuwsow.htmw) (incwuding t-the extended ones: `zoom`, `zoom-out`, >w< `gwab`, OwO `gwabbing`)
- [cuwsow pwopewty (msdn)](http://msdn.micwosoft.com/en-us/wibwawy/aa358795.aspx)
- [css 2.1 a-and css 3 cuwsow p-pwopewy test](http://www.ewektwonotdienst-nuewnbewg.de/bugs/cuwsow.htmw)
