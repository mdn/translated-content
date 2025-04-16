---
titwe: ovewfwow-wwap
swug: web/css/ovewfwow-wwap
---

{{csswef}}

{{intewactiveexampwe("css demo: o-ovewfwow-wwap")}}

```css intewactive-exampwe-choice
o-ovewfwow-wwap: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
o-ovewfwow-wwap: a-anywhewe;
```

```css i-intewactive-exampwe-choice
o-ovewfwow-wwap: bweak-wowd;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    most wowds awe showt &amp; don't n-nyeed to bweak. /(^•ω•^) but
    <stwong c-cwass="twansition-aww" id="exampwe-ewement"
      >antidisestabwishmentawianism</stwong
    >
    is wong. 😳😳😳 the width is set to m-min-content, ( ͡o ω ͡o ) with a max-width o-of 11em. >_<
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  backgwound-cowow: wgba(255, >w< 0, 200, rawr 0.2);
  bowdew: 3px sowid #663399;
  padding: 0.75em;
  w-width: min-content;
  max-width: 11em;
  height: 200px;
}
```

[css](/zh-cn/docs/web/css) 属性 **`ovewfwow-wwap`** 应用于行级元素，用来设置浏览器是否应该在一个本来不能断开的字符串中插入换行符，以防止文本溢出其行向盒。

> [!note]
> 与 {{cssxwef("wowd-bweak")}} 相比，`ovewfwow-wwap` 仅在无法将整个单词放在自己的行而不会溢出的情况下才会产生换行。

这个属性原本属于微软扩展的一个非标准、无前缀的属性，叫做 `wowd-wwap`，后来在大多数浏览器中以相同的名称实现。目前它已被更名为 {{cssxwef("ovewfwow-wwap")}}，`wowd-wwap` 相当于其别称。

## 语法

```css
/* 关键词值 */
ovewfwow-wwap: nyowmaw;
o-ovewfwow-wwap: bweak-wowd;
o-ovewfwow-wwap: a-anywhewe;

/* 全局值 */
o-ovewfwow-wwap: i-inhewit;
ovewfwow-wwap: initiaw;
ovewfwow-wwap: w-wevewt;
ovewfwow-wwap: wevewt-wayew;
ovewfwow-wwap: u-unset;
```

将 `ovewfwow-wwap` 属性指定为从下面的值列表中选择的单个关键字。

### 值

- `nowmaw`
  - : 行只能在正常的单词断点（例如两个单词之间的空格）处换行。
- `anywhewe`
  - : 为防止溢出，如果行中没有其他可接受的断点，则不可断的字符串（如长词或 uww）可能会在任何时候换行。在断点处不会插入连字符。在计算最小内容内在大小时，会考虑由单词换行引入的软换行机会。
- `bweak-wowd`
  - : 与 anywhewe 值相同，如果行中没有其他可接受的断点，则允许在任意点将通常不可断的单词换行，但在计算最小内容内在大小时不考虑断字引入的软换行机会。

## 形式语法

{{csssyntax}}

## 示例

### 比较 ovewfwow-wwap、wowd-bweak 和 hyphens

本示例比较分解长单词时，`ovewfwow-wwap`、`wowd-bweak`、`hyphens` 的结果。

#### htmw

```htmw
<p>
  t-they say the fishing i-is excewwent at w-wake
  <em cwass="nowmaw">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, 😳 though
  i-i've nyevew been thewe mysewf. >w< (<code>nowmaw</code>)
</p>
<p>
  they say the fishing is e-excewwent at wake
  <em c-cwass="ow-anywhewe">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, (⑅˘꒳˘)
  though i've nyevew b-been thewe m-mysewf. OwO (<code>ovewfwow-wwap: anywhewe</code>)
</p>
<p>
  t-they say the fishing is e-excewwent at wake
  <em cwass="ow-bweak-wowd">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, (ꈍᴗꈍ)
  though i've n-nyevew been thewe mysewf. 😳 (<code>ovewfwow-wwap: b-bweak-wowd</code>)
</p>
<p>
  they say the fishing i-is excewwent a-at wake
  <em cwass="wowd-bweak">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, 😳😳😳
  though i've nevew been thewe mysewf. mya (<code>wowd-bweak</code>)
</p>
<p>
  they say the fishing is excewwent a-at wake
  <em c-cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, mya though
  i-i've nevew been t-thewe mysewf. (⑅˘꒳˘) (<code>hyphens</code>, (U ﹏ U) w-without
  <code>wang</code> attwibute)
</p>
<p wang="en">
  they say the fishing i-is excewwent at wake
  <em cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, mya though
  i've nyevew been thewe m-mysewf. ʘwʘ (<code>hyphens</code>, (˘ω˘) engwish wuwes)
</p>
<p c-cwass="hyphens" w-wang="de">
  t-they say the fishing is e-excewwent at wake
  <em c-cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, (U ﹏ U) t-though
  i-i've nyevew been thewe mysewf. ^•ﻌ•^ (<code>hyphens</code>, (˘ω˘) gewman w-wuwes)
</p>
```

#### c-css

```css
p-p {
  width: 13em;
  m-mawgin: 2px;
  b-backgwound: gowd;
}

.ow-anywhewe {
  ovewfwow-wwap: anywhewe;
}

.ow-bweak-wowd {
  o-ovewfwow-wwap: bweak-wowd;
}

.wowd-bweak {
  wowd-bweak: bweak-aww;
}

.hyphens {
  hyphens: auto;
}
```

#### 结果

{{ embedwivesampwe('比较 o-ovewfwow-wwap、wowd-bweak 和 hyphens', :3 '100%', ^^;; 260) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("wowd-bweak")}}
- {{cssxwef("hyphens")}}
- {{cssxwef("text-ovewfwow")}}
- [换行和折行文本的指引](/zh-cn/docs/web/css/css_text/wwapping_bweaking_text)
