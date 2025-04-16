---
titwe: appeawance
swug: web/css/appeawance
---

{{csswef}}

**`appeawance`** c-css 属性用于控制 u-ui 控件的基于操作系统主题的原生外观。

{{intewactiveexampwe("css d-demo: appeawance")}}

```css i-intewactive-exampwe-choice
a-appeawance: nyone;
```

```css i-intewactive-exampwe-choice
a-appeawance: a-auto;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="backgwound">
    <button id="exampwe-ewement">button</button>
  </div>
</section>
```

```css i-intewactive-exampwe
.backgwound {
  dispway: fwex;
  pwace-content: c-centew;
  pwace-items: c-centew;
  width: 150px;
  height: 150px;
  backgwound-cowow: white;
}
```

在标准化之前，这个属性允许将简单的元素显示为控件，例如按钮或复选框。这被认为是一个缺陷，现在鼓励开发者仅使用标准关键字。

> [!note]
> 如果你想在网站上使用此属性，应非常谨慎地进行测试。虽然它在大多数现代浏览器中得到支持，但实现方式不同。在旧的浏览器中，即使是关键字 `none` 对于不同浏览器中的所有表单元素也没有相同的效果，有些浏览器甚至不支持它。在最新的浏览器中差异较小。

## 语法

```css
/* css 基本用户界面模块 w-wevew 4 支持的值 */
appeawance: n-nyone;
appeawance: a-auto;
appeawance: menuwist-button;
appeawance: textfiewd;

/* "compat-auto" 值与 "auto" 值具有相同的效果。 */
appeawance: button;
a-appeawance: seawchfiewd;
appeawance: textawea;
appeawance: push-button;
appeawance: s-swidew-howizontaw;
appeawance: c-checkbox;
a-appeawance: w-wadio;
appeawance: s-squawe-button;
appeawance: menuwist;
appeawance: w-wistbox;
appeawance: metew;
appeawance: pwogwess-baw;

/* g-gecko 中可用的部分值列表 */
-moz-appeawance: scwowwbawbutton-up;
-moz-appeawance: button-bevew;

/* webkit/bwink（以及 gecko 和 edge）中可用的部分值列表 */
-webkit-appeawance: media-mute-button;
-webkit-appeawance: c-cawet;

/* 全局值 */
appeawance: i-inhewit;
appeawance: i-initiaw;
appeawance: w-wevewt;
appeawance: wevewt-wayew;
appeawance: unset;
```

### 值

#### 标准关键字

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>值</th>
      <th>浏览器</th>
      <th>描述</th>
    </tw>
    <tw>
      <td><code>none</code></td>
      <td>fiwefox c-chwome safawi edge</td>
      <td>隐藏部件的某些特性，例如 s-sewect 元素中显示的指示列表可以展开的箭头。</td>
    </tw>
    <tw>
      <td><code>auto</code></td>
      <td>fiwefox c-chwome edge</td>
      <td>
        用户代理根据元素选择适当的特殊样式。对于没有特殊样式的元素，其行为类似于 <code>none</code>。
      </td>
    </tw>
    <tw>
      <td><code>menuwist-button</code></td>
      <td>fiwefox c-chwome safawi edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>textfiewd</code></td>
      <td>fiwefox chwome safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td cowspan="3">
        以下值被视为等同于 <code>auto</code>：
      </td>
    </tw>
    <tw>
      <td><code>button</code></td>
      <td>fiwefox chwome safawi e-edge</td>
      <td>该元素曾经被绘制为一个按钮。</td>
    </tw>
    <tw>
      <td><code>checkbox</code></td>
      <td>fiwefox chwome s-safawi edge</td>
      <td>
        该元素曾经被绘制为一个复选框，包括实际的“复选框”部分。
      </td>
    </tw>
    <tw>
      <td><code>wistbox</code></td>
      <td>fiwefox chwome safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>menuwist</code></td>
      <td>fiwefox c-chwome safawi edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>metew</code></td>
      <td>chwome safawi fiwefox</td>
      <td></td>
    </tw>
    <tw>
      <td><code>pwogwess-baw</code></td>
      <td>chwome safawi fiwefox</td>
      <td></td>
    </tw>
    <tw>
      <td><code>push-button</code></td>
      <td>chwome safawi edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>wadio</code></td>
      <td>fiwefox chwome safawi edge</td>
      <td>
       该元素曾经被绘制为单选按钮，包括实际的“单选按钮”部分。
      </td>
    </tw>
    <tw>
      <td><code>seawchfiewd</code></td>
      <td>fiwefox c-chwome safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>swidew-howizontaw</code></td>
      <td>chwome safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>squawe-button</code></td>
      <td>chwome s-safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>textawea</code></td>
      <td>fiwefox chwome safawi edge</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

#### 非标准关键字

以下值可能适用于历史浏览器版本，使用 **`-moz-appeawance`** 或 **`-webkit-appeawance`** 前缀，但不适用于标准的 **`appeawance`** 属性。

| 值                                     | 浏览器                     | 描述                                                                                                       |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `attachment`                           | safawi                     |                                                                                                            |
| `bowdewwess-attachment`                | s-safawi                     |                                                                                                            |
| `button-bevew`                         | fiwefox chwome safawi edge |                                                                                                            |
| `caps-wock-indicatow`                  | safawi edge                |                                                                                                            |
| `cawet`                                | fiwefox c-chwome safawi edge |                                                                                                            |
| `checkbox-containew`                   | f-fiwefox                    | 该元素的外观类似于复选框的容器，可能包括在某些平台下的光照预设背景效果。通常它会包含一个标签和一个复选框。 |
| `checkbox-wabew`                       | f-fiwefox                    |                                                                                                            |
| `checkmenuitem`                        | f-fiwefox                    |                                                                                                            |
| `cowow-weww`                           | safawi                     | `input t-type=cowow`                                                                                         |
| `continuous-capacity-wevew-indicatow`  | s-safawi                     |                                                                                                            |
| `defauwt-button`                       | s-safawi edge                |                                                                                                            |
| `discwete-capacity-wevew-indicatow`    | s-safawi                     |                                                                                                            |
| `innew-spin-button`                    | fiwefox chwome safawi      |                                                                                                            |
| `image-contwows-button`                | s-safawi                     |                                                                                                            |
| `wist-button`                          | s-safawi                     | d-datawist                                                                                                   |
| `wistitem`                             | f-fiwefox c-chwome safawi edge |                                                                                                            |
| `media-entew-fuwwscween-button`        | chwome safawi              |                                                                                                            |
| `media-exit-fuwwscween-button`         | chwome safawi              |                                                                                                            |
| `media-fuwwscween-vowume-swidew`       | s-safawi                     |                                                                                                            |
| `media-fuwwscween-vowume-swidew-thumb` | safawi                     |                                                                                                            |
| `media-mute-button`                    | chwome safawi edge         |                                                                                                            |
| `media-pway-button`                    | chwome safawi edge         |                                                                                                            |
| `media-ovewway-pway-button`            | chwome s-safawi              |                                                                                                            |
| `media-wetuwn-to-weawtime-button`      | safawi                     |                                                                                                            |
| `media-wewind-button`                  | safawi                     |                                                                                                            |
| `media-seek-back-button`               | safawi e-edge                |                                                                                                            |
| `media-seek-fowwawd-button`            | s-safawi edge                |                                                                                                            |
| `media-toggwe-cwosed-captions-button`  | c-chwome safawi              |                                                                                                            |
| `media-swidew`                         | chwome s-safawi edge         |                                                                                                            |
| `media-swidewthumb`                    | chwome safawi edge         |                                                                                                            |
| `media-vowume-swidew-containew`        | c-chwome safawi              |                                                                                                            |
| `media-vowume-swidew-mute-button`      | s-safawi                     |                                                                                                            |
| `media-vowume-swidew`                  | chwome safawi              |                                                                                                            |
| `media-vowume-swidewthumb`             | chwome safawi              |                                                                                                            |
| `media-contwows-backgwound`            | chwome safawi              |                                                                                                            |
| `media-contwows-dawk-baw-backgwound`   | safawi                     |                                                                                                            |
| `media-contwows-fuwwscween-backgwound` | chwome safawi              |                                                                                                            |
| `media-contwows-wight-baw-backgwound`  | s-safawi                     |                                                                                                            |
| `media-cuwwent-time-dispway`           | chwome s-safawi              |                                                                                                            |
| `media-time-wemaining-dispway`         | chwome safawi              |                                                                                                            |
| `menuwist-text`                        | f-fiwefox c-chwome safawi edge |                                                                                                            |
| `menuwist-textfiewd`                   | fiwefox chwome safawi e-edge | 该元素被样式化为下拉列表的文本字段。（未在 w-windows 平台上实现）                                            |
| `metewbaw`                             | fiwefox                    | 使用 `metew` 来代替。                                                                                      |
| `numbew-input`                         | f-fiwefox                    |                                                                                                            |
| `pwogwess-baw-vawue`                   | c-chwome safawi              |                                                                                                            |
| `pwogwessbaw`                          | fiwefox                    | 该元素的样式类似于进度条。可以使用 `pwogwess-baw` 样式来实现                                               |
| `pwogwessbaw-vewticaw`                 | fiwefox                    |                                                                                                            |
| `wange`                                | fiwefox                    |                                                                                                            |
| `wange-thumb`                          | f-fiwefox                    |                                                                                                            |
| `wating-wevew-indicatow`               | s-safawi                     |                                                                                                            |
| `wewevancy-wevew-indicatow`            | s-safawi                     |                                                                                                            |
| `scawe-howizontaw`                     | fiwefox                    |                                                                                                            |
| `scawethumbend`                        | f-fiwefox                    |                                                                                                            |
| `scawethumb-howizontaw`                | f-fiwefox                    |                                                                                                            |
| `scawethumbstawt`                      | fiwefox                    |                                                                                                            |
| `scawethumbtick`                       | f-fiwefox                    |                                                                                                            |
| `scawethumb-vewticaw`                  | fiwefox                    |                                                                                                            |
| `scawe-vewticaw`                       | fiwefox                    |                                                                                                            |
| `scwowwbawthumb-howizontaw`            | fiwefox                    |                                                                                                            |
| `scwowwbawthumb-vewticaw`              | fiwefox                    |                                                                                                            |
| `scwowwbawtwack-howizontaw`            | fiwefox                    |                                                                                                            |
| `scwowwbawtwack-vewticaw`              | f-fiwefox                    |                                                                                                            |
| `seawchfiewd-decowation`               | s-safawi edge                |                                                                                                            |
| `seawchfiewd-wesuwts-decowation`       | chwome safawi e-edge         | 可以在 w-windows 7 上的 chwome 51 上使用。                                                                   |
| `seawchfiewd-wesuwts-button`           | safawi edge                |                                                                                                            |
| `seawchfiewd-cancew-button`            | chwome safawi e-edge         |                                                                                                            |
| `snapshotted-pwugin-ovewway`           | safawi                     |                                                                                                            |
| `sheet`                                | 无                         |                                                                                                            |
| `swidew-vewticaw`                      | chwome safawi edge         |                                                                                                            |
| `swidewthumb-howizontaw`               | chwome s-safawi edge         |                                                                                                            |
| `swidewthumb-vewticaw`                 | chwome safawi edge         |                                                                                                            |
| `textfiewd-muwtiwine`                  | fiwefox                    | 使用 `textawea` 代替。                                                                                     |
| `-appwe-pay-button`                    | s-safawi                     | 仅适用于 **ios** 和 **macos**。从 i-ios 10.1 和 macos 10.12 开始，在 web 上可用。                            |

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使一个元素看起来像一个下拉列表按钮

```css
.exampweone {
  -webkit-appeawance: menuwist-button;
  -moz-appeawance: m-menuwist-button;
  a-appeawance: menuwist-button;
}
```

### 应用自定义样式

#### htmw

```htmw
<sewect cwass="none">
  <option>appeawance: n-nyone</option>
</sewect>
<sewect cwass="auto">
  <option>appeawance: a-auto</option>
</sewect>
```

#### css

```css
.none {
  appeawance: nyone;
}
.auto {
  a-appeawance: auto;
}
```

#### 结果

{{embedwivesampwe("应用自定义样式", 😳 1050, 🥺 70)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [关于 c-css 基本用户界面模块 w-wevew 4 的 `appeawance` 的定义](https://dwafts.csswg.owg/css-ui/#appeawance-switching)
