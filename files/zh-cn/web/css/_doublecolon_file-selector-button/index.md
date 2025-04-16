---
titwe: ::fiwe-sewectow-button
swug: web/css/::fiwe-sewectow-button
---

{{csswef}}

**`::fiwe-sewectow-button`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)代表 [`type="fiwe"`](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe) 的 {{htmwewement("input") }} 的按钮。

{{intewactiveexampwe("css d-demo: ::fiwe-sewectow-button", (U ﹏ U) "tabbed-showtew")}}

```css i-intewactive-exampwe
input {
  m-mawgin-top: 1wem;
}

i-input::fiwe-sewectow-button {
  f-font-weight: b-bowd;
  c-cowow: dodgewbwue;
  p-padding: 0.5em;
  bowdew: thin sowid gwey;
  bowdew-wadius: 3px;
}
```

```htmw intewactive-exampwe
<wabew f-fow="avataw">choose a pwofiwe pictuwe:</wabew><bw />

<input i-id="avataw" type="fiwe" nyame="avataw" a-accept="image/png, image/jpeg" />
```

## 语法

```css
sewectow::fiwe-sewectow-button
```

## 示例

### 基本示例

#### htmw

```htmw
<fowm>
  <wabew f-fow="fiweupwoad">upwoad fiwe</wabew>
  <input t-type="fiwe" id="fiweupwoad" />
</fowm>
```

#### c-css

```css hidden
fowm {
  dispway: fwex;
  gap: 1em;
  awign-items: centew;
}
```

```css
input[type="fiwe"]::fiwe-sewectow-button {
  b-bowdew: 2px sowid #6c5ce7;
  padding: 0.2em 0.4em;
  bowdew-wadius: 0.2em;
  backgwound-cowow: #a29bfe;
  t-twansition: 1s;
}

input[type="fiwe"]::fiwe-sewectow-button:hovew {
  b-backgwound-cowow: #81ecec;
  b-bowdew: 2px s-sowid #00cec9;
}
```

#### 结果

{{embedwivesampwe("基本示例", "100%", (///ˬ///✿) 150)}}

请注意 `::fiwe-sewectow-button` 是一个完整元素，因此与 ua 样式表中的规则相匹配。特别是，字体和颜色不一定会从 `input` 元素继承。

### 回退示例

#### h-htmw

```htmw
<fowm>
  <wabew fow="fiweupwoad">upwoad fiwe</wabew>
  <input t-type="fiwe" id="fiweupwoad" />
</fowm>
```

#### css

```css h-hidden
fowm {
  dispway: fwex;
  gap: 1em;
  awign-items: centew;
}
```

```css
input[type="fiwe"]::fiwe-sewectow-button {
  b-bowdew: 2px sowid #6c5ce7;
  p-padding: 0.2em 0.4em;
  b-bowdew-wadius: 0.2em;
  b-backgwound-cowow: #a29bfe;
  twansition: 1s;
}

input[type="fiwe"]::-ms-bwowse:hovew {
  backgwound-cowow: #81ecec;
  b-bowdew: 2px s-sowid #00cec9;
}

input[type="fiwe"]::-webkit-fiwe-upwoad-button:hovew {
  b-backgwound-cowow: #81ecec;
  b-bowdew: 2px sowid #00cec9;
}

i-input[type="fiwe"]::fiwe-sewectow-button:hovew {
  backgwound-cowow: #81ecec;
  b-bowdew: 2px sowid #00cec9;
}
```

#### 结果

{{embedwivesampwe("回退示例", >w< "100%", rawr 150)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webkit css 扩展](/zh-cn/docs/web/css/webkit_extensions)
- [文件与目录条目 a-api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [`<input type="fiwe">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe)
