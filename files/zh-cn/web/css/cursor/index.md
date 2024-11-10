---
title: cursor
slug: Web/CSS/cursor
---

{{CSSRef}}

**`cursor`** [CSS](/zh-CN/docs/Web/CSS) 属性设置光标的类型（如果有），在鼠标指针悬停在元素上时显示相应样式。

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## 语法

```css
/* 关键字值 */
cursor: pointer;
cursor: auto;

/* 使用 URL，并提供一个关键字值作为备用 */
cursor: url(hand.cur), pointer;

/* URL 和 xy 的坐标偏移值，最后提供一个关键字值作为备用 */
cursor:
  url(cursor1.png) 4 12,
  auto;
cursor:
  url(cursor2.png) 2 2,
  pointer;

/* 全局属性 */
cursor: inherit;
cursor: initial;
cursor: unset;
```

cursor 属性为零个或多个[\<url>](/zh-CN/docs/Web/CSS/cursor#%3Curl%3E)值，它们之间用逗号分隔，最后必填一个关键字值。每个\<url>指向一个图像文件。浏览器将尝试加载指定的第一个图像，如果无法加载则返回下一个图像，如果无法加载图像或未指定图像，则使用关键字值代表的指针类型。

每个\<url>后面都可选跟一对空格分隔的数字\<x>\<y>表示偏移。它们用来设置指针的热点 (即自定义图标的实际点击位置)，位置相对于图标的左上角。

例如，下面的例子使用\<url>值指定两个图像，为第二个图像提供\<x>\<y>坐标，如果两个图像都无法加载，则返回`progress`关键字值：

```css
cursor:
  url(one.svg),
  url(two.svg) 5 5,
  progress;
```

### 值

- <`url`>
  - : `url(…)`或者逗号分隔的`url(…), url(…), …`，指向图片文件。用大于一个{{cssxref("&lt;url&gt;")}}值提供后备，以防某些指针图片类型不被支持。最后必须提供一个非 URL 后备值。详情参见[cursor 属性中使用 URL 值](/zh-CN/docs/CSS/Using_URL_values_for_the_cursor_property)。
- `<x>` `<y>` {{experimental_inline}}
  - : 可选 x，y 坐标。两个小于 32 的无单位非负数。
- 关键字值

  - : 鼠标悬浮于值上可实时演示

    <table class="standard-table">
      <tbody>
        <tr>
          <th>类型</th>
          <th>CSS 值</th>
          <th style="width: 7.5em">例子</th>
          <th>描述</th>
        </tr>
        <tr style="cursor: auto">
          <td rowspan="3">General</td>
          <td><code>auto</code></td>
          <td></td>
          <td>
            <p>
              浏览器根据当前内容决定指针样式<br />例如当内容是文字时使用 text 样式
            </p>
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img alt="default.gif" src="default.gif" /></td>
          <td>默认指针，通常是箭头。</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>无指针被渲染</td>
        </tr>
        <tr style="cursor: context-menu">
          <td rowspan="5" style="cursor: auto">链接及状态</td>
          <td><code>context-menu</code></td>
          <td><img alt="context-menu.png" src="context-menu.png" /></td>
          <td>指针下有可用内容目录。</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img alt="help.gif" src="help.gif" /></td>
          <td>指示帮助</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img alt="pointer.gif" src="pointer.gif" /></td>
          <td>悬浮于连接上时，通常为手</td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img alt="progress.gif" src="progress.gif" /></td>
          <td>程序后台繁忙，用户仍可交互 (与<code>wait 相反</code>).</td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img alt="wait.gif" src="wait.gif" /></td>
          <td>
            程序繁忙，用户不可交互
            (与<code>progress 相反</code>).图标一般为沙漏或者表。
          </td>
        </tr>
        <tr style="cursor: cell">
          <td rowspan="4" style="cursor: auto">选择</td>
          <td><code>cell</code></td>
          <td><img alt="cell.gif" src="cell.gif" /></td>
          <td>指示单元格可被选中</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img alt="crosshair.gif" src="crosshair.gif" /></td>
          <td>交叉指针，通常指示位图中的框选</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img alt="text.gif" class="default" src="text.gif" /></td>
          <td>指示文字可被选中</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="vertical-text.gif" src="vertical-text.gif" /></td>
          <td>指示垂直文字可被选中</td>
        </tr>
        <tr style="cursor: alias">
          <td rowspan="7" style="cursor: auto">拖拽</td>
          <td><code>alias</code></td>
          <td><img alt="alias.gif" src="alias.gif" /></td>
          <td>复制或快捷方式将要被创建</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img alt="copy.gif" class="default" src="copy.gif" /></td>
          <td>指示可复制</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img alt="move.gif" src="move.gif" /></td>
          <td>被悬浮的物体可被移动</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td><img alt="no-drop.gif" class="lwrap" src="no-drop.gif" /></td>
          <td>
            当前位置不能扔下<br /><a href="https://bugzil.la/275173">Firefox bug 275173</a>Windows 或 Mac OS X 中
            "no-drop 与 not-allowed 相同".
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="not-allowed.gif" src="not-allowed.gif" /></td>
          <td>不能执行</td>
        </tr>
        <tr id="grab" style="cursor: grab">
          <td><code>grab</code></td>
          <td><img alt="grab.gif" class="default" src="grab.gif" /></td>
          <td>
            <p>可抓取</p>
            <p>译者注:grab 和 grabbing 在比较后期才被支持，见浏览器兼容表</p>
          </td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img alt="grabbing.gif" class="default" src="grabbing.gif" /></td>
          <td>抓取中</td>
        </tr>
        <tr style="cursor: all-scroll">
          <td rowspan="15" style="cursor: auto">重设大小及滚动</td>
          <td><code>all-scroll</code></td>
          <td><img alt="all-scroll.gif" src="all-scroll.gif" /></td>
          <td>
            元素可任意方向滚动（平移）.<br /><a href="https://bugzil.la/275174">Firefox bug 275174</a>Windows
            中，"<em>all-scroll</em> 与 <em>move 相同</em>".
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" /></td>
          <td>元素可被重设宽度。通常被渲染为中间有一条竖线分割的左右两个箭头</td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img alt="row-resize.gif" src="row-resize.gif" /></td>
          <td>
            <p>元素可被重设高度。通常被渲染为中间有一条横线分割的上下两个箭头</p>
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top cursor"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            某条边将被移动。例如元素盒的东南角被移动时<code>使用 se-resize</code>
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the right cursor"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom cursor "
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the left cursor"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-right corner cursor"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-left corner cursor"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-right corner cursor"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-left corner cursor"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="3-resize.gif" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">指示双向重新设置大小</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="6-resize.gif" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="1-resize.gif" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="4-resize.gif" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <td rowspan="2">缩放</td>
          <td><code>zoom-in</code></td>
          <td><img alt="zoom-in.gif" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto"><p>指示可被放大或缩小</p></td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="zoom-out.gif" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

### 语法形式

{{csssyntax}}

## 注意事项

尽管规范没有为游标定义任何大小限制，但是不同的{{Glossary("user agent", "user agents")}}可能进行了限制。使用超出浏览器支持的大小范围的图像进行的光标更改通常只会被忽略。

查阅[浏览器兼容性](#浏览器兼容性)表格来获取指针大小的限制信息。

## 示例

```css
.foo {
  cursor: crosshair;
}

.bar {
  cursor: zoom-in;
}

/* A fallback keyword value is required when using a URL */
.baz {
  cursor: url("hyper.cur"), auto;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using URL values for the cursor property](/zh-CN/docs/CSS/Using_URL_values_for_the_cursor_property)
- {{ cssxref("pointer-events") }}
- {{cssxref("url()", "url()")}} function
- [Webkit's cursor demos](http://trac.webkit.org/export/37902/trunk/WebCore/manual-tests/cursor.html) (including the extended ones: `zoom`, `zoom-out`, `grab`, `grabbing`)
- [Cursor Property (MSDN)](http://msdn.microsoft.com/en-us/library/aa358795.aspx)
- [CSS 2.1 and CSS 3 cursor propery test](http://www.elektronotdienst-nuernberg.de/bugs/cursor.html)
