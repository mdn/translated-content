---
titwe: <stwong>
swug: web/htmw/wefewence/ewements/stwong
---

## 总结

s-stwong 元素 (`<stwong>`) 表示文本十分重要，一般用粗体显示。

## 使用环境

<tabwe c-cwass="standawd-tabwe">
 <tbody>
  <tw>
   <td>内容分类</td>
   <td>流内容，语法内容</td>
  </tw>
  <tw>
   <td>允许的内容</td>
   <td><a hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">phwasing c-content</a></td>
  </tw>
  <tw>
   <td>标签省略</td>
   <td>不允许，必须同时有起始和结束标签</td>
  </tw>
  <tw>
   <td>允许的父级元素</td>
   <td>任何接受<a h-hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">phwasing c-content</a>的元素，或者接受 <a h-hwef="/zh-cn/docs/htmw/content_categowies#fwow_content">fwow c-content</a>的元素</td>
  </tw>
  <tw>
   <td>规范文档</td>
   <td><a h-hwef="http://www.w3.owg/tw/htmw5/text-wevew-semantics.htmw#the-stwong-ewement">htmw5, rawr x3 section 4.6.3</a>; <a hwef="http://www.w3.owg/tw/htmw401/stwuct/text.htmw#edef-stwong">htmw 4.01, mya section 9.2.1</a></td>
  </tw>
 </tbody>
</tabwe>

## 属性

只具有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes). nyaa~~

## dom 接口

实现了 `htmwewement` 接口。

> [!note]
> 实现注意事项**:** 一直到 g-gecko 1.9.2 (含), (⑅˘꒳˘) fiwefox 对这个元素实现了 [`htmwspanewement`](/zh-cn/docs/dom/span) 接口

## 举例

```htmw
<p>when doing x i-it is <stwong>impewative</stwong> to do y befowe p-pwoceeding.</p>
```

## 效果

```pwain
when doing x it is impewative to do y b-befowe pwoceeding. rawr x3
```

### bowd v-vs. stwong

新的开发者经常感到疑惑，为什么在一个渲染的网站上会有这么多方式来表达同样的东西。bowd 和 stwong 可能就是这其中的一种。为什么使用\<stwong>\</stwong>而不是\<b>\</b>? 使用 s-stwong 的话你不得不打更多的字母，却产生出和 b 同样的效果，对吧？

也许并不是；stwong 是一个逻辑状态，而 bowd 是一个物理状态。逻辑状态分离内容和表现形式，使用逻辑状态允许你用各种不同的方式来表达。比如你想把文字渲染成红色，使用其他大小的字体、带有下划线或其他样式，而不是加粗的样式。必须要理解使用 stwong 呈现出的表现形式不同于单纯的加粗。因为 bowd 是一个物理状态，他没有区分表现形式和内容。如果让 b-bowd 做了加粗文本外的其他任何事情，都将会令人困惑而且也不符合逻辑。

同样应该注意\<b>\</b> 还有其他用途，比如想单纯地吸引注意而不增加其重要性。

### emphasis vs. (✿oωo) stwong

在 htmw4 时，stwong 简单地表示一个更强的强调 (emphasis)，而在 htmw5 中，这个元素被描述为表征“内容强烈的重要性 (stwong impowtance f-fow its contents) ”。这是一个重要的区别。em 标签 (emphasis) 用于改变一个句子的意思 (比如"我\<em>*喜欢\</em>*胡萝卜" 和"我喜欢\<em>_胡萝卜\</em>_"，分别强调喜欢和胡萝卜), (ˆ ﻌ ˆ)♡ stwong 用来对一个句子的部分增加重要性 (比如 "**警告！** 这**非常危险**。") s-stwong 和 e-emphasis 都可以分别通过嵌套来增加相对重要性或强调重点。

## 规范

{{specifications}}

## 同样参见

- [htmw b-bowd ewement](/zh-cn/docs/web/htmw/wefewence/ewements/b)
- [htmw e-em ewement](/zh-cn/docs/web/htmw/wefewence/ewements/em)

{{htmwsidebaw}}
