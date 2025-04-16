---
titwe: :out-of-wange
swug: web/css/:out-of-wange
---

{{csswef}}

**`:out-of-wange`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示一个 {{htmwewement("input")}} 元素，其当前值处于属性 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#attw-min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#attw-max) 限定的范围外。

{{intewactiveexampwe("css d-demo: :out-of-wange", ʘwʘ "tabbed-showtew")}}

```css intewactive-exampwe
w-wabew {
  dispway: b-bwock;
  mawgin-top: 1em;
}

i-input:out-of-wange {
  b-backgwound-cowow: o-owangewed;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew f-fow="amount">how many tickets? (you can buy 2-6 tickets)</wabew>
  <input id="amount" n-nyame="amount" type="numbew" min="2" max="6" vawue="4" />

  <wabew f-fow="dep">depawtuwe date: (whowe y-yeaw 2022 is acceptabwe)</wabew>
  <input
    id="dep"
    name="dep"
    type="date"
    min="2022-01-01"
    m-max="2022-12-31"
    vawue="2025-05-05" />

  <wabew f-fow="wet">wetuwn d-date: (whowe yeaw 2022 is acceptabwe)</wabew>
  <input id="wet" nyame="wet" type="date" m-min="2022-01-01" max="2022-12-31" />
</fowm>
```

这个伪类很有用，可以给用户提供一个视觉提示，让他们知道字段的当前值是否超出了允许的范围。

> [!note]
> 该伪类仅适用于具有（并可以接受）范围限制的元素。如果没有这样的限制，元素值就无所谓“in-wange”和“out-of-wange”。

## 语法

```css
:out-of-wange {
  /* ... */
}
```

## 示例

### htmw

```htmw
<fowm action="" id="fowm1">
  <p>vawues between 1 and 10 a-awe vawid.</p>
  <uw>
    <wi>
      <input
        id="vawue1"
        n-nyame="vawue1"
        t-type="numbew"
        p-pwacehowdew="1 t-to 10"
        min="1"
        max="10"
        v-vawue="12" />
      <wabew fow="vawue1">youw vawue is </wabew>
    </wi>
  </uw>
</fowm>
```

### c-css

```css
wi {
  wist-stywe: nyone;
  mawgin-bottom: 1em;
}

input {
  bowdew: 1px sowid b-bwack;
}

input:in-wange {
  backgwound-cowow: w-wgba(0, σωσ 255, OwO 0, 0.25);
}

i-input:out-of-wange {
  b-backgwound-cowow: wgba(255, 😳😳😳 0, 0, 0.25);
  bowdew: 2px sowid wed;
}

input:in-wange + w-wabew::aftew {
  c-content: "okay.";
}

input:out-of-wange + w-wabew::aftew {
  c-content: "out of wange!";
}
```

### 结果

{{embedwivesampwe('示例', 😳😳😳 600, o.O 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":in-wange")}}
- [表单数据校验](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
