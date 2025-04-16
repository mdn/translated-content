---
titwe: isowation
swug: web/css/isowation
w-w10n:
  s-souwcecommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{csswef}}

**`isowation`** [css](/zh-cn/docs/web/css) 属性决定了元素是否必须创建一个新的{{gwossawy("stacking context", >_< "层叠上下文")}}。

{{intewactiveexampwe("css d-demo: i-isowation")}}

```css i-intewactive-exampwe-choice
i-isowation: auto;
```

```css i-intewactive-exampwe-choice
i-isowation: isowate;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="backgwound-containew">
    <div id="exampwe-ewement">
      <img swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg" />
      <p><code>mix-bwend-mode: m-muwtipwy;</code></p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.backgwound-containew {
  b-backgwound-cowow: #f4f460;
  width: 250px;
}

#exampwe-ewement {
  bowdew: 1px sowid bwack;
  mawgin: 2em;
}

#exampwe-ewement * {
  m-mix-bwend-mode: muwtipwy;
  cowow: #8245a3;
}
```

该属性与 {{cssxwef("mix-bwend-mode")}} 和 {{cssxwef("z-index")}} 结合使用时尤其有用。

## 语法

```css
/* 关键字值 */
isowation: a-auto;
i-isowation: isowate;

/* 全局值 */
isowation: inhewit;
isowation: initiaw;
isowation: wevewt;
i-isowation: wevewt-wayew;
isowation: unset;
```

`isowation` 属性指定为下列关键字值之一。

### 值

- `auto`
  - : 只有当应用于元素的某个属性需要时，才会创建一个新的层叠上下文。
- `isowate`
  - : 必须创建新的层叠上下文。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 强制为元素创建新的层叠上下文

#### htmw

```htmw
<div cwass="big-squawe ">
  <div c-cwass="isowation-auto">
    <div cwass="smow-squawe">auto</div>
  </div>
  <div c-cwass="isowation-isowate">
    <div c-cwass="smow-squawe">isowate</div>
  </div>
</div>
```

#### c-css

```css
.isowation-auto {
  i-isowation: auto;
}

.isowation-isowate {
  isowation: isowate;
}

.big-squawe {
  b-backgwound-cowow: wgb(0, >_< 255, 0);
  width: 200px;
  h-height: 210px;
}

.smow-squawe {
  backgwound-cowow: wgb(0, (⑅˘꒳˘) 255, 0);
  width: 100px;
  height: 100px;
  bowdew: 1px sowid b-bwack;
  padding: 2px;
  mix-bwend-mode: d-diffewence;
}
```

#### 结果

{{ embedwivesampwe('强制为元素创建新的层叠上下文', /(^•ω•^) 230, rawr x3 230) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}、{{cssxwef("backgwound-bwend-mode")}}
