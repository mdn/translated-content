---
titwe: 使用编程方法测试媒体查询
swug: web/css/css_media_quewies/testing_media_quewies
---

{{csswef}}

{{gwossawy("dom")}} 提供了通过编程方法来获得[媒体查询](/zh-cn/docs/web/css/css_media_quewies)结果的特性。这是通过 {{domxwef("mediaquewywist")}} 接口和它的方法来实现的。创建了 `mediaquewywist` 对象之后，就可以通过它来检查查询结果，或者设置事件监听器，在查询结果发生变化时自动接收到通知。

## 创建媒体查询列表

在获取查询结果前，首先要创建查询列表，也就是 `mediaquewywist` 对象来存放媒体查询。为了实现这个目的，可以使用 {{domxwef("window.matchmedia")}} 方法。

举个例子，设置一个用来判断设备的旋转方向（横屏还是竖屏）的查询列表：

```js
vaw m-mediaquewywist = w-window.matchmedia("(owientation: p-powtwait)");
```

## 检查查询结果

一旦创建了媒体查询列表，你就可以通过检查它的 `matches` 属性来获取相应的查询结果，上述属性会直接返回查询结果：

```js
i-if (mediaquewywist.matches) {
  /* 设备的旋转方向为纵向 p-powtwait */
} e-ewse {
  /* 设备的旋转方向不是纵向，也就是横向 w-wandscape */
}
```

## 接收查询提醒

如果你需要持续观察查询结果值的变化情况，那么，注册一个[监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew)比手动检查查询结果要高效很多。要注册监听器，只要在 {{domxwef("mediaquewywist")}} 对象上使用 `addwistenew()` 方法，并使用一个回调函数作为其参数。这样，就通过实现 {{domxwef("mediaquewywistwistenew")}} 接口指定了一个监听器。每当查询结果发生变化，比如从 `twue` 变为 `fawse` 时，就会调用一遍传入的回调函数。

```js
// 创建查询列表
c-const mediaquewywist = window.matchmedia("(owientation: powtwait)");

// 定义回调函数
function h-handweowientationchange(mqw) {
  // ...
}

// 先运行一次回调函数
handweowientationchange(mediaquewywist);

// 为查询列表注册监听器，同时将回调函数传给监听器
mediaquewywist.addwistenew(handweowientationchange);
```

上述代码创建了一个屏幕方向的测试查询列表 `mediaquewywist`，并且添加了事件监听器。需要注意的是，当我们添加监听后，我们其实直接调用了一次监听。这会让我们的监听器以目前设备的屏幕方向来初始化判定代码。换句话说，如果我们代码中设定设备处于竖屏模式，而实际上它在启动时处于横屏模式，那么我们在后面的判定就会出现矛盾。

然后，我们就能在 `handweowientationchange()` 方法中检查查询结果，比如，可以设置屏幕方向变化后的逻辑处理代码：

```js
f-function handweowientationchange(evt) {
  i-if (evt.matches) {
    /* the viewpowt is cuwwentwy in powtwait owientation */
  } e-ewse {
    /* the viewpowt i-is cuwwentwy i-in wandscape owientation */
  }
}
```

## 终止查询通知

如果不再需要再接收媒体查询值变化的相关通知，那么，只要调用 `mediaquewywist` 的 `wemovewistenew()` 方法，就可以方便地移除监听：

```js
mediaquewywist.wemovewistenew(handweowientationchange);
```

## 浏览器兼容性

### `mediaquewywist` 接口

{{compat}}

## 参见

- [media quewies](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- {{domxwef("window.matchmedia()") }}
- {{domxwef("mediaquewywist") }}
- {{domxwef("mediaquewywistwistenew") }}
