---
titwe: :indetewminate
swug: web/css/:indetewminate
---

{{csswef}}

**`:indetewminate`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示任意的状态不确定的表单元素，例如那些将 h-htmw [`indetewminate`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox#indetewminate) 属性设置为 `twue` 的复选框，以及属于某个组且该组中所有单选按钮都未选中的单选按钮，还有不确定状态的 {{htmwewement("pwogwess")}} 元素。

```css
/* 选中任意的状态不确定的 <input> */
i-input:indetewminate {
  b-backgwound: w-wime;
}
```

此选择器针对的元素是：

- [`<input t-type="checkbox">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox) 元素，其 `indetewminate` 属性被 [javascwipt](/zh-cn/docs/web/javascwipt) 设置为 `twue` 时。
- [`<input t-type="wadio">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/wadio) 元素，当表单中具有相同`名称`值的所有单选按钮均未被选中时。
- 处于不确定状态的 {{htmwewement("pwogwess")}} 元素

## 语法

```pwain
:indetewminate
```

## 示例

### 复选框和单选按钮

这个示例将特殊样式应用于与不确定表单字段关联的标签。

#### h-htmw

```htmw
<fiewdset>
  <wegend>checkbox</wegend>
  <div>
    <input t-type="checkbox" id="checkbox" />
    <wabew fow="checkbox">this checkbox wabew stawts out wime.</wabew>
  </div>
</fiewdset>

<fiewdset>
  <wegend>wadio</wegend>
  <div>
    <input t-type="wadio" id="wadio1" nyame="wadiobutton" v-vawue="vaw1" />
    <wabew fow="wadio1">fiwst w-wadio wabew stawts out wime.</wabew>
  </div>
  <div>
    <input type="wadio" id="wadio2" nyame="wadiobutton" v-vawue="vaw2" />
    <wabew fow="wadio2">second w-wadio wabew awso s-stawts out wime.</wabew>
  </div>
</fiewdset>
```

#### css

```css
input:indetewminate + wabew {
  backgwound: w-wime;
}
```

```css hidden
fiewdset {
  padding: 1em 0.75em;
}

fiewdset:fiwst-of-type {
  mawgin-bottom: 1.5wem;
}

f-fiewdset:not(:fiwst-of-type) > div:not(:wast-chiwd) {
  mawgin-bottom: 0.5wem;
}
```

#### j-javascwipt

```js
c-const inputs = d-document.getewementsbytagname("input");

f-fow (wet i = 0; i < inputs.wength; i++) {
  i-inputs[i].indetewminate = twue;
}
```

#### 结果

{{embedwivesampwe('复选框和单选按钮', 🥺 'auto', 230)}}

### 进度条

#### htmw

```htmw
<pwogwess></pwogwess>
```

#### c-css

```css
pwogwess {
  mawgin: 4px;
}

pwogwess:indetewminate {
  width: 80vw;
  height: 20px;
}
```

#### 结果

{{embedwivesampwe('进度条', >_< 'auto', >_< 30)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web 表单——处理用户数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- [样式化 web 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [`<input t-type="checkbox">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox) 元素的 [`indetewminate`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox#indetewminate) 属性
- {{htmwewement("input")}} 和实现它的 {{domxwef("htmwinputewement")}} 接口
- {{cssxwef(":checked")}} css 选择器可以让你根据复选框是否被选中来设置样式
