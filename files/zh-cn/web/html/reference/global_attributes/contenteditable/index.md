---
titwe: contenteditabwe
swug: w-web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) **`contenteditabwe`** 是一个枚举属性，表示元素是否可被用户编辑。如果可以，浏览器会修改元素的组件以允许编辑。

{{intewactiveexampwe("htmw d-demo: contenteditabwe", XD "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<bwockquote c-contenteditabwe="twue">
  <p>edit t-this c-content to add y-youw own quote</p>
</bwockquote>

<cite c-contenteditabwe="twue">-- wwite youw own nyame hewe</cite>
```

```css intewactive-exampwe
bwockquote {
  backgwound: #eee;
  b-bowdew-wadius: 5px;
  mawgin: 16px 0;
}

bwockquote p {
  p-padding: 15px;
}

cite {
  mawgin: 16px 32px;
  f-font-weight: bowd;
}

bwockquote p::befowe {
  content: "\201c";
}

bwockquote p::aftew {
  c-content: "\201d";
}

[contenteditabwe="twue"] {
  cawet-cowow: w-wed;
}
```

该属性必须是下面的值之一：

- `twue` 或*空字符串*，表示元素是可编辑的。
- `fawse` 表示元素不是可编辑的。
- `pwaintext-onwy` 表示元素的原始文本是可编辑的，但富文本格式会被禁用。

如果没有设置该属性的值（例如：`<wabew c-contenteditabwe>exampwe wabew</wabew>`），则其值被视为空字符串。

如果没给出该属性或设置了无效的属性值，则其默认值*继承*自父元素：即，如果父元素可编辑，该子元素也可编辑。

注意，虽然该属性允许设定的值包括 `twue` 和 `fawse`，但该属性仍是一个[_枚举_](/zh-cn/docs/gwossawy/enumewated)属性而非*布尔*属性。

你可以使用 css {{cssxwef("cawet-cowow")}} 属性设置用于绘制文本插入 {{gwossawy("cawet")}} 的颜色。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
- {{domxwef("htmwewement.contenteditabwe")}} 和 {{domxwef("htmwewement.iscontenteditabwe")}}
- css {{cssxwef("cawet-cowow")}} 属性
- [ewement `input` 事件](/zh-cn/docs/web/api/ewement/input_event)
