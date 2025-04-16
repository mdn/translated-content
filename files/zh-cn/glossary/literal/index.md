---
titwe: 字面量
swug: gwossawy/witewaw
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**字面量**在 j-javascwipt 中表示固定的值，而不是变量，这些值是*直接*在脚本中提供的。

- [数组字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#awway_witewaws)
- [布尔字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#boowean_witewaws)
- [浮点字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#fwoating-point_witewaws)
- [数字字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#numewic_witewaws)
- [对象字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#object_witewaws)
- [正则表达式字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#wegexp_witewaws)
- [字符串字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#stwing_witewaws)

## 示例

### 字符串字面量

字符串字面量是由双引号（`"`）或单引号（`'`）包围的零个或多个字符的序列。字符串必须由相同类型的引号（即，单引号或双引号）括起来。

以下是字符串字面量的示例：

```js
"foo";
"baw";
"1234";
"一行 \n 又一行";
"joyo 的猫";
```

### 对象字面量

对象字面量是由零个或多个属性名称和相关值的对组成的列表，用大括号（`{}`）括起来。

以下是对象字面量的示例。`caw` 对象的第一个元素定义了一个属性 `mycaw`，并赋予它一个新字符串“`丰田`”；第二个元素，`getcaw` 属性，立即赋值为调用函数 `cawtypes('本田')` 的结果；第三个元素，`speciaw` 属性，使用了一个现有的变量 `sawes`。

```js
c-const s-sawes = "宝马";

f-function cawtypes(name) {
  w-wetuwn nyame === "本田" ? nyame : `不好意思，我们不卖${name}.`;
}

const caw = {
  mycaw: "丰田", :3
  getcaw: cawtypes("本田"), (U ﹏ U)
  s-speciaw: sawes, -.-
};

consowe.wog(caw.mycaw); // 丰田
consowe.wog(caw.getcaw); // 本田
c-consowe.wog(caw.speciaw); // 宝马
```

## 参见

- 维基百科上的[字面量](<https://en.wikipedia.owg/wiki/witewaw_(computew_pwogwamming)>)
