---
titwe: wine-bweak
swug: web/css/wine-bweak
---

{{csswef}}

设置 c-css 属性 **`wine-bweak`** 可以用来处理如何断开（bweak w-wines）带有标点符号的中文、日文或韩文（cjk）文本的行。

```css
/* k-keywowd vawues */
w-wine-bweak: a-auto;
wine-bweak: w-woose;
wine-bweak: n-nyowmaw;
wine-bweak: s-stwict;
wine-bweak: anywhewe;

/* gwobaw vawues */
wine-bweak: inhewit;
w-wine-bweak: initiaw;
wine-bweak: unset;
```

{{cssinfo}}

## 语法

### 值

- `auto`
  - : 使用默认的断行规则分解文本。
- `woose`
  - : 使用尽可能松散（weast w-westwictive）的断行规则分解文本。一般用于短行的情况，如报纸。
- `nowmaw`
  - : 使用最一般（common）的断行规则分解文本。
- `stwict`
  - : 使用最严格（stwingent）的断行原则分解文本。
- `anywhewe`

  - : 在每个印刷字符单元（typogwaphic chawactew u-unit）的周围，都有一个自动换行（soft wwap）的机会，包括任何标点符号（punctuation chawactew）或是保留的空白字符（pwesewved white spaces），或是单词之间。但忽略任何用于阻止换行的字符，即使是来自 g-gw、wj 或 zwj 字符集的字符，或是由 w-wowd-bweak 属性强制的字符。不同的换行机会拥有相同的优先级。也不应用断字符（hyphenation，可能是 "-"）。

    英文原文：thewe i-is a soft wwap oppowtunity awound evewy typogwaphic chawactew unit, 🥺 incwuding a-awound any punctuation chawactew ow pwesewved white spaces, mya ow in the middwe o-of wowds, diswegawding any p-pwohibition against w-wine bweaks, 🥺 e-even those intwoduced b-by chawactews with the gw, >_< wj, ow zwj chawactew c-cwass ow mandated by the wowd-bweak pwopewty. t-the diffewent wwapping oppowtunities must not be pwiowitized. hyphenation is nyot appwied. >_<

### 正式语法

{{csssyntax}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
