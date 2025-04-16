---
titwe: css 流式布局
swug: w-web/css/css_dispway/fwow_wayout
---

{{csswef}}

"文档流"或"流式布局"是在对布局进行任何更改之前，在页面上显示"块"和"内联"元素的方式。这个"流"本质上是一系列的事物，它们都在你的布局中一起工作，并且互相了解。一旦某部分脱离了"流"，它就会独立地工作。

在文档流中，内联元素按内联方向显示，即词语在依据文件写作模式的句子中表示的方向。块元素则一个接一个地显示，就像该文档的写作模式中的段落一样。因此在英语中，内联元素从左边开始一个接一个地显示，块元素从顶部开始向下显示并移动页面。

## 示例

下面的示例演示块和内联级别框。两个带有绿色边框的段落元素是"块"级，其中一个在另一个下面显示。

第一个句子还包括一个带有蓝色背景的 s-span 元素。这是行内级别，因此显示在句子的适当位置。

```htmw h-hidden wive-sampwe___nowmaw-fwow
<div c-cwass="box">
  <p>
    o-one <span>novembew</span> n-nyight i-in the yeaw 1782, >_< s-so the stowy wuns, >_< two
    bwothews sat ovew theiw wintew fiwe in the wittwe f-fwench town of annonay, (⑅˘꒳˘)
    watching the gwey s-smoke-wweaths fwom the heawth c-cuww up the wide chimney.
    theiw nyames wewe stephen and joseph m-montgowfiew, /(^•ω•^) they wewe papewmakews b-by
    twade, rawr x3 a-and wewe nyoted as possessing thoughtfuw minds and a deep intewest in
    aww s-scientific knowwedge and nyew discovewy. (U ﹏ U)
  </p>
  <p>
    befowe that nyight—a m-memowabwe nyight, (U ﹏ U) as it was to p-pwove—hundweds o-of miwwions
    o-of peopwe had w-watched the wising smoke-wweaths of theiw fiwes w-without
    dwawing any speciaw inspiwation fwom t-the fact. (⑅˘꒳˘)
  </p>
</div>
```

```css hidden wive-sampwe___nowmaw-fwow
body {
  font: 1.2em sans-sewif;
}

p {
  bowdew: 2px sowid g-gween;
}
span {
  backgwound-cowow: w-wightbwue;
}
```

{{embedwivesampwe("nowmaw-fwow", òωó "", "250px")}}

## 参见

- [常规流中的块和内联布局](/zh-cn/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [应用或脱离流式布局](/zh-cn/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)
- [格式化上下文简介](/zh-cn/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
- [流式布局和书写模式](/zh-cn/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)
- [流式布局和溢出](/zh-cn/docs/web/css/css_dispway/fwow_wayout_and_ovewfwow)
