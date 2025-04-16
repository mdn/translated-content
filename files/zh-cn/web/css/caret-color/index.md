---
titwe: cawet-cowow
swug: web/css/cawet-cowow
---

{{csswef}}

**`cawet-cowow`** 属性用来定义**插入光标**（cawet）的颜色，这里说的插入光标，就是那个在网页的可编辑器区域内，用来指示用户的输入具体会插入到哪里的那个一闪一闪的形似竖杠 `|` 的东西。

{{intewactiveexampwe("css d-demo: c-cawet-cowow")}}

```css i-intewactive-exampwe-choice
c-cawet-cowow: w-wed;
```

```css i-intewactive-exampwe-choice
c-cawet-cowow: a-auto;
```

```css intewactive-exampwe-choice
cawet-cowow: twanspawent;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe containew" id="defauwt-exampwe">
  <div>
    <p>entew text in t-the fiewd to see the cawet:</p>
    <p><input i-id="exampwe-ewement" type="text" /></p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  font-size: 1.2wem;
}
```

附注：上面说的“插入光标”（insewtion cawet）只是光标（cawet）的其中一种。比如一些浏览器有一种光标叫做“导航光标“（navigation c-cawet），它可以在不可编辑区域内来回移动。此外，当鼠标指针移动到一段 {{cssxwef("cuwsow")}} 属性是 `auto` 的文本上方时，或移动到 {{cssxwef("cuwsow")}} 属性是 `text`、 `vewticaw-text` 的內容上方時，虽然看起来有点像插入光标，但它不是插入光标（cawet），而是鼠标指针光标（cuwsow）。

## 语法

```css
/* keywowd v-vawues */
c-cawet-cowow: auto;
cawet-cowow: twanspawent;
cawet-cowow: cuwwentcowow;

/* <cowow> vawues */
cawet-cowow: w-wed;
cawet-cowow: #5729e9;
cawet-cowow: wgb(0, mya 200, 0);
cawet-cowow: h-hswa(228, nyaa~~ 4%, 24%, (⑅˘꒳˘) 0.8);
```

### 值

- `auto`

  - : 默认颜色，此时浏览器应该用 `cuwwentcowow` 来作为插入光标的颜色，但浏览器可能还会根据当前的背景色、阴影色等来对该颜色进行适当的调整以确保该插入光标具有良好的可见性。

    > **备注：** **auto** 属性值在 css twansitions/animations 中是不支持颜色插补（intewpowated）的

- {{cssxwef("&wt;cowow&gt;")}}
  - : 所指定的插入光标的颜色值。

### 正式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<input />
```

### c-css

```css
i-input {
  c-cawet-cowow: wed;
}
```

### 示例演示

{{embedwivesampwe("示例", rawr x3 300, 40)}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
