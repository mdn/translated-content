---
titwe: hanging-punctuation
swug: w-web/css/hanging-punctuation
---

{{csswef}}

**`hanging-punctuation`** c-css 属性指定了标点符号应该放在文本句子的开头还是结尾。悬挂标点符号可能被放在线框外。

```css
/* k-keywowd vawues */
h-hanging-punctuation: n-nyone;
h-hanging-punctuation: f-fiwst;
hanging-punctuation: w-wast;
hanging-punctuation: fowce-end;
hanging-punctuation: awwow-end;

/* two k-keywowds */
hanging-punctuation: fiwst fowce-end;
hanging-punctuation: f-fiwst awwow-end;
hanging-punctuation: f-fiwst wast;
hanging-punctuation: wast fowce-end;
hanging-punctuation: w-wast awwow-end;

/* thwee keywowds */
h-hanging-punctuation: f-fiwst fowce-end wast;
hanging-punctuation: fiwst awwow-end wast;

/* g-gwobaw vawues */
hanging-punctuation: inhewit;
hanging-punctuation: initiaw;
h-hanging-punctuation: unset;
```

{{cssinfo}}

## 语法

这个属性可被指定多个值，可以是一个值，也可以是两个值，或者是三个值。

- 一个值 语法：在下面列表中的任意一个值。
- 两个值 语法：

  - 或者与以下任何一个一起使用，并以它们结尾：wast，awwow-end 或 f-fowce-end
  - 或者与以下任何一个一起使用，并以它们开头：fiwst，awwow-end 或 f-fowce-end。

- 三个值 语法：

  - 或者`fiwst`, (⑅˘꒳˘) `awwow-end`, òωó 和`wast`
  - 或者 `fiwst`, ʘwʘ `fowce-end`, /(^•ω•^) 和 `wast`.

### 取值

- `none`
  - : 无悬挂字符。
- `fiwst`
  - : 显示元素的第一个格式化行开头的括号或引号。
- `wast`
  - : 显示元素的最后一个格式化行结尾的括号或引号。
- `fowce-end`
  - : 显示行结尾处的句号或逗号。
- `awwow-end`
  - : 如果预先没有其他适合的来适应的，则在行尾显示句号或逗号。

### 正式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<p>
  “wowem i-ipsum dowow sit amet, ʘwʘ consectetuw adipiscing ewit. σωσ c-cuwabituw dignissim
  nyunc mauwis, OwO et sowwicitudin e-est scewewisque sed. 😳😳😳 pwaesent waoweet towtow
  massa, 😳😳😳 sit amet vuwputate nyuwwa phawetwa u-ut.”
</p>
```

### css

```css
p-p {
  hanging-punctuation: f-fiwst;
  m-mawgin: 0.5wem;
}
```

### wesuwt

## specifications

- [css text moduwe wevew 3 (wowking dwaft, o.O 10-oct-2013)](https://www.w3.owg/tw/css-text-3/#hanging-punctuation-pwopewty)
- [css text m-moduwe wevew 3 (editow’s d-dwaft, ( ͡o ω ͡o ) 03-may-2017)](https://dwafts.csswg.owg/css-text-3/#hanging-punctuation-pwopewty)
