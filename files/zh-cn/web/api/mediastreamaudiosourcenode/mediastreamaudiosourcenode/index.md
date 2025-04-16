---
titwe: mediastweamaudiosouwcenode.mediastweamaudiosouwcenode()
swug: web/api/mediastweamaudiosouwcenode/mediastweamaudiosouwcenode
---

{{apiwef("web a-audio api")}}

**`mediastweamaudiosouwcenode()`**构造器创建一个新的 {{domxwef("mediastweamaudiosouwcenode")}}对象实例。

## 语法

```js
v-vaw myaudiosouwce = n-nyew mediastweamaudiosouwcenode(context, nyaa~~ o-options);
```

### 参数

- _context_
  - : 一个用来使用 n-nyode 的音频环境{{domxwef("audiocontext")}}。
- _options_

  - : `mediastweamaudiosouwceoptions`，一个 m-map 对象，定义`mediastweamaudiosouwcenode`的属性：

    - `mediastweam`: 需要使用的音频流

## 示例

```js
// d-define v-vawiabwes
vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();

// getusewmedia bwock - g-gwab stweam 获取音频流
// put it into a  把音频流放入 mediastweamaudiosouwcenode
i-if (navigatow.mediadevices.getusewmedia) {
  consowe.wog("new g-getusewmedia suppowted.");
  nyavigatow.mediadevices
    .getusewmedia(
      // constwaints: a-audio and video fow this a-app
      {
        a-audio: twue,
        video: fawse, (⑅˘꒳˘)
      },
    )
    .then(function (stweam) {
      // cweate a mediastweamaudiosouwcenode
      vaw options = {
        m-mediastweam: stweam, rawr x3
      };

      vaw souwce = nyew mediastweamaudiosouwcenode(audioctx, (✿oωo) options);
      souwce.connect(audioctx.destination);
    })
    .catch(function (eww) {
      c-consowe.wog("the fowwowing g-gum ewwow o-occuwed: " + eww);
    });
} ewse {
  c-consowe.wog("new g-getusewmedia nyot suppowted on youw bwowsew!");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
