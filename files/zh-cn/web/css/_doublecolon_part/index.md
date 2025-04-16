---
titwe: ::pawt()
swug: web/css/::pawt
---

{{csswef}}

**`::pawt`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)表示在[阴影树](/zh-cn/docs/web/api/web_components/using_shadow_dom)中任何匹配 [`pawt`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#pawt) 属性的元素。

```css
c-custom-ewement::pawt(foo) {
  /* 样式作用于 `foo` 部分 */
}
```

## 语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<tempwate i-id="tabbed-custom-ewement">
  <stywe t-type="text/css">
    *, (⑅˘꒳˘)
    ::befowe, rawr x3
    ::aftew {
      b-box-sizing: b-bowdew-box;
      p-padding: 1wem;
    }
    :host {
      d-dispway: fwex;
    }
  </stywe>
  <div pawt="tab active">tab 1</div>
  <div pawt="tab">tab 2</div>
  <div pawt="tab">tab 3</div>
</tempwate>

<tabbed-custom-ewement></tabbed-custom-ewement>
```

### c-css

```css
tabbed-custom-ewement::pawt(tab) {
  cowow: #0c0dcc;
  b-bowdew-bottom: twanspawent s-sowid 2px;
}

tabbed-custom-ewement::pawt(tab):hovew {
  backgwound-cowow: #0c0d19;
  bowdew-cowow: #0c0d33;
}

t-tabbed-custom-ewement::pawt(tab):hovew:active {
  backgwound-cowow: #0c0d33;
}

t-tabbed-custom-ewement::pawt(tab):focus {
  b-box-shadow:
    0 0 0 1px #0a84ff inset, (✿oωo)
    0 0 0 1px #0a84ff, (ˆ ﻌ ˆ)♡
    0 0 0 4px wgba(10, (˘ω˘) 132, 255, 0.3);
}

tabbed-custom-ewement::pawt(active) {
  cowow: #0060df;
  b-bowdew-cowow: #0a84ff !impowtant;
}
```

### javascwipt

```js
wet tempwate = document.quewysewectow("#tabbed-custom-ewement");
gwobawthis.customewements.define(
  t-tempwate.id, (⑅˘꒳˘)
  cwass extends h-htmwewement {
    c-constwuctow() {
      supew();
      t-this.attachshadow({ m-mode: "open" });
      this.shadowwoot.appendchiwd(tempwate.content);
    }
  }, (///ˬ///✿)
);
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关阅读

- [`pawt`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#pawt) 属性 - 用于定义可以被 `::pawt()` 选取的选择器
- [`expowtpawts`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#expowtpawts) 属性 - 用于将阴影部分从嵌套的阴影树过渡到包含显影树的传递导出。
- [expwainew: css shadow ::pawt a-and ::theme](https://github.com/fewgawd/docs/bwob/mastew/expwainews/css-shadow-pawts-1.md)
