---
title: ARIA：comment 角色
slug: Web/Accessibility/ARIA/Reference/Roles/comment_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`comment` 角色在语义上表示对页面中某些内容的评论/回应，或是对先前评论的回应。

> [!NOTE]
> comment 角色是在 WAI-ARIA 1.3（[最新的 ARIA 草案](https://w3c.github.io/aria/)）中提出的，该规范目前仍在起草中。

## 示例

在下面的示例中，我们有一个被评论的文档章节。被评论的章节使用 `<span role="mark">` 进行标记。

相关的评论则使用由一个包含 `role="comment"` 的 `<div>` 包裹的 HTML 结构进行标记。

```html
<p>
  歌曲的后半段是一段缓慢上升的渐强，在
  <span role="mark" aria-details="thread-1">吉他独奏的结尾</span>处达到顶峰，
  随后迅速淡去。
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris 说</h3>
  <p class="comment-text">我真的觉得这一刻应该多来点牛铃声。</p>
  <p><time datetime="2019-03-30T19:29">2019 年 3 月 30 日 19:29</time></p>
</div>
```

要将评论与被评论的文本关联起来，我们需要用一个包含 [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 属性的元素将该文本包裹起来，该属性的值应为相应评论的 ID。

### 多条评论

由于 `aria-details` 现在可以接受多个 ID，我们可以将多条评论与同一个标注关联起来，如下所示：

```html
<p>
  歌曲的后半段是一段缓慢上升的渐强，在
  <mark aria-details="thread-1 thread-2">吉他独奏的结尾</mark
  >处达到顶峰，随后迅速淡去。
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris 说</h3>
  <p class="comment-text">我真的觉得这一刻应该多来点牛铃声。</p>
  <p><time datetime="2019-03-30T19:29">2019 年 3 月 30 日 19:29</time></p>
</div>

<div role="comment" id="thread-2" data-author="chris">
  <h3>Marcus 说</h3>
  <p class="comment-text">吉他独奏可以再加一点合唱效果，音量稍微调低一些。</p>
  <p><time datetime="2019-03-29T15:35">2019 年 3 月 29 日 15:35</time></p>
</div>
```

### 嵌套评论

可以将评论互相嵌套，如下所示：

```html
<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris 说</h3>
  <p class="comment-text">我真的觉得这一刻应该多来点牛铃声。</p>
  <p><time datetime="2021-03-30T19:29">2021 年 3 月 30 日 19:29</time></p>

  <div role="comment" data-author="marcus">
    <h3>Marcus 回复道</h3>
    <p class="comment-text">
      我不太认同。我觉得牛铃声可能会分散对独奏的注意力。
    </p>
    <p><time datetime="2021-03-30T21:02">2021 年 3 月 30 日 21:02</time></p>
  </div>
</div>
```

## 无障碍考虑

无。

## 规范

将成为 WAI-ARIA 1.3 的一部分，该规范目前仍在起草中。
