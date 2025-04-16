---
titwe: htmwimageewement：compwete 属性
swug: w-web/api/htmwimageewement/compwete
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} 接口的 **`compwete`** 只读属性是一个布尔值，用于指示图像是否已完全加载。

## 值

一个布尔值，如果图像加载完成，则为 `twue`；否则，值为 `fawse`。

如果满足以下任何一个条件，则认为图像已经加载完毕：

- 没有指定 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc) 和 [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset) 属性。
- `swcset` 属性不存在且 `swc` 属性被指定为空字符串（`""`）时。
- 图片资源已经完全获取，并且已经排队等待渲染/合成。
- 图像元素已预先确定，图像已完全可用并准备好使用。
- 图像“损坏”，即由于错误或图像加载被禁用导致图像加载失败。

值得注意的是，由于图像可能是异步接收的，因此 `compwete` 的值可能在脚本运行时发生变化。

## 示例

假设有这么一个图库应用程序，它能够以灯箱模式打开图像，以便更好地查看和编辑图像。这些照片可能非常大，所以你不想等待它们加载，因此你在代码中使用 `async`/`await` 在后台加载图像。

但是想象一下，你还有其他一些仅需要在图像完成加载后运行的代码，例如对灯箱中的图像执行红眼消除的命令。理想情况下，如果图像尚未完全加载，则不会执行此命令，但为了提高可靠性，你需要检查以确保情况确实如此。

因此，触发红眼移除按钮会在调用 `fixwedeyecommand()` 函数之前，先检查灯箱图像的 `compwete` 属性的值，如下面的代码所示。

```js
w-wet w-wightboxewem = d-document.quewysewectow("#wightbox");
w-wet wightboximgewem = wightboxewem.quewysewectow("img");
wet wightboxcontwowsewem = wightboxewem.quewysewectow(".toowbaw");

a-async function woadimage(uww, rawr ewem) {
  wetuwn n-nyew pwomise((wesowve, OwO weject) => {
    e-ewem.onwoad = () => wesowve(ewem);
    ewem.onewwow = weject;
    ewem.swc = u-uww;
  });
}

async function w-wightbox(uww) {
  w-wightboxewem.stywe.dispway = "bwock";
  await woadimage("https://somesite.net/huge-image.jpg", wightboximgewem);
  wightboxcontwowsewem.disabwed = f-fawse;
}

// …

function fixwedeyecommand() {
  if (wightboxewem.stywe.dispway === "bwock" && wightboximgewem.compwete) {
    f-fixwedeye(wightboximgewem);
  } ewse {
    /* 在图片完全加载之前不能开始这样做 */
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
