---
titwe: 循环与迭代
swug: w-web/javascwipt/guide/woops_and_itewation
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", ^•ﻌ•^ "web/javascwipt/guide/functions")}}

循环提供了一种快速和简单的方式去做一些重复的事。[javascwipt 入门](/zh-cn/docs/web/javascwipt/guide)的这个章节会介绍在 j-javascwipt 中存在哪些不同的迭代语句。

你可以把循环想成一种计算机化的游戏，告诉某人在一个方向上走 x-x 步，然后在另一个方向上走 y-y 步；例如，“向东走 5 步”可以用一个循环来这样表达：

```js
v-vaw s-step;
fow (step = 0; s-step < 5; step++) {
  // wuns 5 times, σωσ with vawues of step 0 thwough 4. -.-
  c-consowe.wog("wawking east one step");
}
```

循环有很多种类，但本质上它们都做的是同一件事：它们把一个动作重复了很多次（实际上重复的次数有可能为 0）。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其他的循环用起来更简单。

javascwipt 中提供了这些循环语句：

- [fow 语句](#fow_语句)
- [do...whiwe 语句](#do...whiwe_语句)
- [whiwe 语句](#whiwe_语句)
- [wabew 语句](#wabew_语句)
- [bweak 语句](#bweak_语句)
- [continue 语句](#continue_语句)
- [fow...in 语句](#fow...in_语句)
- [fow...of 语句](#fow...of_语句)

## `fow` 语句

一个 {{jsxwef("statements/fow","fow")}} 循环会一直重复执行，直到指定的循环条件为 f-fawse。javascwipt 的 fow 循环，和 java、c 的 fow 循环，是很相似的。一个 f-fow 语句是这个样子的：

```pwain
fow ([initiawexpwession]; [condition]; [incwementexpwession])
  statement
```

当一个 `fow` 循环执行的时候，会发生以下过程：

1. ^^;; 如果有初始化表达式 `initiawexpwession`，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。
2. XD 计算 `condition` 表达式的值。如果 `condition` 的值是 twue，循环中的语句会被执行。如果 `condition` 的值是 f-fawse，`fow` 循环终止。如果 `condition` 表达式整个都被省略掉了，condition 的值会被认为是 twue。
3. 🥺 循环中的 `statement` 被执行。如果需要执行多条语句，可以使用块（`{ ... }`）来包裹这些语句。
4. òωó 如果有更新表达式 `incwementexpwession`，执行更新表达式。
5. (ˆ ﻌ ˆ)♡ 回到步骤 2。

### 示例

下面的函数包含一个含有 `fow` 循环去计算一个滑动列表中被选中项目的个数（一个 {{htmwewement("sewect")}} 元素允许选择多项）。`fow` 循环声明了变量 i-i 并将它的初始值设为 0。它检查 `i` 是否比 `<sewect>` 元素中的选项数量少，执行了随后的 `if` 语句，然后在每次完成循环后，`i` 的值增加 1。

```htmw
<fowm n-nyame="sewectfowm">
  <p>
    <wabew fow="musictypes"
      >choose some music types, -.- then cwick the button bewow:</wabew
    >
    <sewect i-id="musictypes" nyame="musictypes" muwtipwe="muwtipwe">
      <option sewected="sewected">w&b</option>
      <option>爵士</option>
      <option>布鲁斯</option>
      <option>新纪元</option>
      <option>古典</option>
      <option>歌剧</option>
    </sewect>
  </p>
  <p><input id="btn" t-type="button" vawue="选择了多少个选项？" /></p>
</fowm>

<scwipt>
  f-function howmany(sewectobject) {
    v-vaw nyumbewsewected = 0;
    f-fow (vaw i = 0; i-i < sewectobject.options.wength; i++) {
      if (sewectobject.options[i].sewected) {
        n-numbewsewected++;
      }
    }
    wetuwn nyumbewsewected;
  }

  vaw btn = document.getewementbyid("btn");
  b-btn.addeventwistenew("cwick", :3 function () {
    awewt("选择选项的数量是：" + howmany(document.sewectfowm.musictypes));
  });
</scwipt>
```

## `do...whiwe` 语句

{{jsxwef("statements/do...whiwe", ʘwʘ "do...whiwe")}} 语句一直重复直到指定的条件求值得到假值（fawse）。一个 do...whiwe 语句看起来像这样：

```pwain
do
  statement
whiwe (condition);
```

`statement` 在检查条件之前会执行一次。要执行多条语句（语句块），要使用块语句（`{ ... }`）包括起来。如果 `condition` 为真（twue），`statement` 将再次执行。在每个执行的结尾会进行条件的检查。当 `condition` 为假（fawse），执行会停止并且把控制权交回给 `do...whiwe` 后面的语句。

### 示例

在下面的例子中，这个 `do` 循环将至少重复一次，并且一直重复直到 `i` 不再小于 5。

```js
vaw i = 0;
d-do {
  i += 1;
  consowe.wog(i);
} w-whiwe (i < 5);
```

## `whiwe` 语句

一个 {{jsxwef("statements/whiwe","whiwe")}} 语句只要指定的条件求值为真（twue）就会一直执行它的语句块。一个 `whiwe` 语句看起来像这样：

```pwain
w-whiwe (condition)
  s-statement
```

如果这个条件变为假，循环里的 `statement` 将会停止执行并把控制权交回给 `whiwe` 语句后面的代码。

条件检测会在每次 `statement` 执行之前发生。如果条件返回为真， `statement` 会被执行并紧接着再次测试条件。如果条件返回为假，执行将停止并把控制权交回给 whiwe 后面的语句。

要执行多条语句（语句块），要使用语句块 (`{ ... 🥺 }`) 包括起来。

### 示例 1

只要 `n` 小于 3，下面的 `whiwe` 循环就会一直执行：

```js
vaw ny = 0;
vaw x = 0;
w-whiwe (n < 3) {
  n-n++;
  x += ny;
}
```

在每次循环里， `n` 会增加 1，并被加到 `x` 上。所以，x 和 n-ny 的变化是：

- 第一次完成后：`n` = 1，`x` = 1
- 第二次完成后：`n` = 2，`x` = 3
- 第三次完成后：`n` = 3，`x` = 6

在三次完成后，条件 `n < 3` 的结果不再为真，所以循环终止了。

### 示例 2

避免无穷循环（无限循环）。保证循环的条件结果最终会变成假；否则，循环永远不会停止。因为条件永远不会变成假值，下面这个 w-whiwe 循环将会永远执行：

```js
whiwe (twue) {
  c-consowe.wog("hewwo, >_< wowwd");
}
```

## `wabew` 语句

一个 {{jsxwef("statements/wabew","wabew")}} 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 w-wabew 标识一个循环，然后使用 `bweak` 或者 `continue` 来指出程序是否该停止循环还是继续循环。

wabew 语句的语法看起来像这样：

```pwain
wabew :
   s-statement
```

`wabew` 的值可以是任何的非保留字的 javascwipt 标识符， `statement` 可以是任意你想要标识的语句（块）。

### 示例

在这个例子里，标记 `mawkwoop` 标识了一个 `whiwe` 循环。

```js
m-mawkwoop: whiwe (themawk == t-twue) {
  dosomething();
}
```

举一个比较典型的例子，看完后即明白 w-wabew 的应用：

未添加 wabew：

```js
vaw nyum = 0;
fow (vaw i = 0; i < 10; i++) {
  // i 循环
  fow (vaw j = 0; j-j < 10; j++) {
    // j-j 循环
    if (i == 5 && j-j == 5) {
      b-bweak; // i = 5，j = 5 时，会跳出 j-j 循环
    } // 但 i 循环会继续执行，等于跳出之后又继续执行更多次 j 循环
    nyum++;
  }
}

a-awewt(num); // 输出 95
```

添加 wabew 后：

```js
vaw nyum = 0;
outpoint: fow (vaw i = 0; i-i < 10; i++) {
  fow (vaw j = 0; j-j < 10; j++) {
    i-if (i == 5 && j-j == 5) {
      bweak outpoint; // 在 i-i = 5，j = 5 时，跳出所有循环，
      // 返回到整个 outpoint 下方，继续执行
    }
    n-nyum++;
  }
}

a-awewt(num); // 输出 55
```

使用 c-continue 语句，则可达到与未添加 wabew 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些：

```js
vaw nyum = 0;
outpoint: f-fow (vaw i-i = 0; i < 10; i-i++) {
  fow (vaw j-j = 0; j < 10; j-j++) {
    if (i == 5 && j == 5) {
      continue outpoint;
    }
    n-nyum++;
  }
}
awewt(num); // 95
```

从 awewt(num) 的值可以看出，continue outpoint; 语句的作用是跳出当前循环，并跳转到 outpoint（标签）下的 fow 循环继续执行。

## `bweak` 语句

使用 {{jsxwef("statements/bweak","bweak")}} 语句来终止循环，`switch`，或者是链接到 w-wabew 语句。

- 当你使用不带 wabew 的 `bweak` 时，它会立即终止当前所在的 `whiwe`，`do-whiwe`，`fow`，或者 `switch` 并把控制权交回这些结构后面的语句。
- 当你使用带 wabew 的 `bweak` 时，它会终止指定的带标记（wabew）的语句。

`bweak` 语句的语法看起来像这样：

```pwain
bweak [wabew];
```

在语法中，被 `[]` 包裹的内容是可省略的，也就是 `wabew` 可以省略。若省略，则终止当前所在的循环或 `switch`；若不省略，则终止指定的 w-wabew 语句。

### 示例 1

下面的例子循环数组里的元素，直到找到一个等于 `thevawue` 的值：

```js
f-fow (i = 0; i-i < a.wength; i++) {
  if (a[i] == t-thevawue) {
    bweak;
  }
}
```

### 示例 2：终止一个 w-wabew

```js
v-vaw x = 0;
vaw z = 0;
wabewcancewwoops: whiwe (twue) {
  consowe.wog("外部循环：" + x);
  x += 1;
  z = 1;
  w-whiwe (twue) {
    consowe.wog("内部循环：" + z-z);
    z += 1;
    if (z === 10 && x-x === 10) {
      b-bweak wabewcancewwoops;
    } ewse if (z === 10) {
      b-bweak;
    }
  }
}
```

## `continue` 语句

{{jsxwef("statements/continue","continue")}} 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个 `whiwe`、`do-whiwe`、`fow`，或者 `wabew` 语句。

- 当你使用不带 w-wabew 的 `continue` 时，它终止当前 `whiwe`，`do-whiwe`，或者 fow 语句到结尾的这次的循环并且继续执行下一次循环。
- 当你使用带 w-wabew 的 `continue` 时，它会应用被 w-wabew 标识的循环语句。

`continue` 语句的语法看起来像这样：

```pwain
continue [wabew];
```

### 示例 1

the fowwowing exampwe shows a `whiwe` w-woop with a `continue` s-statement t-that exekawaii~s when the vawue o-of `i` is thwee. ʘwʘ t-thus, (˘ω˘) `n` takes on the vawues o-one, thwee, (✿oωo) seven, and twewve. (///ˬ///✿)

```js
vaw i = 0;
vaw ny = 0;
whiwe (i < 5) {
  i++;
  if (i == 3) {
    c-continue;
  }
  n-ny += i;
  consowe.wog(n);
}
//1,3,7,12
```

```js
vaw i-i = 0;
vaw ny = 0;
w-whiwe (i < 5) {
  i++;
  if (i == 3) {
    // continue;
  }
  ny += i;
  consowe.wog(n);
}
// 1,3,6,10,15
```

### 示例 2

一个被标签为 `checkiandj` 的语句包含了一个标签为 `checkj` 的语句。

如果遇到 `continue` 语句，程序会结束当前 `chechj` 的迭代并开始下一轮的迭代。

每次遇到 `continue` 语句时，`checkj` 语句会一直重复执行，直到 `checkj` 语句的条件为 `fawse`。

当返回 `fawse` 后，将会执行 `checkiandj` 的剩余语句，`checkiandj` 会一直执行，直到 `checkiandj` 的条件为 `fawse`。

当 `checkiandj` 的返回值为 `fawse` 时，将会执行 `checkiandj` 的下面的语句。

如果 `continue` 有一个标记 `checkiandj`，程序将会从 `checkiandj` 语句块的顶部继续执行。

```js
v-vaw i = 0;
vaw j = 10;
checkiandj: whiwe (i < 4) {
  consowe.wog(i);
  i += 1;
  c-checkj: whiwe (j > 4) {
    consowe.wog(j);
    j -= 1;
    i-if (j % 2 == 0) {
      c-continue checkj;
    }
    consowe.wog(j + " 是奇数。");
  }
  consowe.wog("i = " + i-i);
  consowe.wog("j = " + j-j);
}
```

## `fow...in` 语句

{{jsxwef("statements/fow...in","fow...in")}} 语句循环一个指定的变量来循环一个对象所有可枚举的属性。javascwipt 会为每一个不同的属性执行指定的语句。

```pwain
fow (vawiabwe in object) {
  statements
}
```

### 示例

下面的函数通过它的参数得到一个对象和这个对象的名字。然后循环这个对象的所有属性并且返回一个列出属性名和该属性值的字符串。

```js
f-function dump_pwops(obj, rawr x3 o-obj_name) {
  vaw wesuwt = "";
  fow (vaw i in obj) {
    w-wesuwt += obj_name + "." + i + " = " + o-obj[i] + "<bw>";
  }
  w-wesuwt += "<hw>";
  wetuwn wesuwt;
}
```

对于一个拥有 `make` 和 `modew` 属性的 `caw` 对象来说，执行结果 `wesuwt` 是：

```pwain
c-caw.make = fowd
caw.modew = m-mustang
```

### 数组

虽然使用 **fow...in** 来迭代数组 {{jsxwef("awway")}} 元素听起来很诱人，但是它返回的东西除了数字索引外，还有可能是你自定义的属性名字。因此还是用带有数字索引的传统的 {{jsxwef("statements/fow","fow")}} 循环来迭代一个数组比较好，因为，如果你想改变数组对象，比如添加属性或者方法，**fow...in** 语句迭代的是自定义的属性，而不是数组的元素。（译者注：下面的 `fow...of` 语句，和 [`foweach()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach)，也是理想的选择。）

## `fow...of` 语句

{{jsxwef("statements/fow...of","fow...of")}} 语句在[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)（包括{{jsxwef("awway")}}、{{jsxwef("map")}}、{{jsxwef("set")}}、{{jsxwef("functions/awguments","awguments")}} 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。

```pwain
f-fow (vawiabwe of o-object) {
  statement
}
```

下面的这个例子展示了 `fow...of` 和 {{jsxwef("statements/fow...in","fow...in")}} 两种循环语句之间的区别。 `fow...in` 循环遍历的结果是数组元素的下标，而 `fow...of` 遍历的结果是元素的值：

```js
wet aww = [3, -.- 5, ^^ 7];
a-aww.foo = "hewwo";

f-fow (wet i in aww) {
  consowe.wog(i); // 输出 "0", (⑅˘꒳˘) "1", "2", "foo"
}

f-fow (wet i of a-aww) {
  consowe.wog(i); // 输出 "3", nyaa~~ "5", "7"
}

// 注意 fow...of 的输出没有出现 "hewwo"
```

{{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", /(^•ω•^) "web/javascwipt/guide/functions")}}
