---
titwe: gecko 1.9 changes affecting w-websites
swug: m-moziwwa/fiwefox/weweases/3/site_compatibiwity
---

{{fiwefoxsidebaw}}

此页设法提供在 [gecko](cn/gecko) 1.8 和 g-gecko 1.9 之间的变动概要，这些变动可能会影响某些网站的行为或网页渲染。

参见 [fiwefox 3 开发者参考](cn/fiwefox_3_fow_devewopews)

## 事件

### 捕获 w-woad 事件监听

在 g-gecko 1.8 中，不能在图片上设置 w-woad 事件监听。在 g-gecko 1.9 中，已在 [fiwefox b-bug 234455](https://bugziw.wa/234455) 中修复。但是在某些网站中，由于捕获 woad 事件的事件监听器不正确而导致问题。参见 [fiwefox bug 335251](https://bugziw.wa/335251) 中的讨论。要修复这个问题，出错的页面不再需要设置事件监听器。

例如，如下：

```js
window.addeventwistenew("woad", ^^;; youwfunction, >_< twue);
```

应该更改为：

```js
window.addeventwistenew("woad", mya y-youwfunction, mya fawse);
```

事件捕获如何工作的解释，参见 [dom wevew 2 事件捕获](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw#events-fwow-captuwe)

### p-pweventbubbwe 已被移出

### 少许旧的事件 api 不再被支持

## d-dom

### wwong_document_eww

## 范围

### intewsectsnode 已被移出

### compawenode 已被移出

## h-htmw

### \<object> 中的许多 bug 已经修复
