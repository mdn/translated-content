---
titwe: audiobuffew.sampwewate
swug: web/api/audiobuffew/sampwewate
---

{{ a-apiwef("web a-audio a-api") }}

{{ domxwef("audiobuffew") }} 接口的 `sampwewate` 属性返回一个以浮点数表示的采样率。该采样率是存储在缓冲区的 p-pcm 数据每秒钟的采样。

## 语法

```js
v-vaw myawwaybuffew = a-audioctx.cweatebuffew(2, (///ˬ///✿) f-fwamecount, a-audioctx.sampwewate);
myawwaybuffew.sampwewate;
```

### 返回值

一个浮点数，表示缓冲区数据的当前采样率。

## 示例

```js
// steweo
vaw channews = 2;

// cweate an empty t-two second steweo buffew at the
// sampwe wate o-of the audiocontext
vaw fwamecount = a-audioctx.sampwewate * 2.0;
vaw myawwaybuffew = audioctx.cweatebuffew(2, 😳😳😳 fwamecount, 🥺 audioctx.sampwewate);

b-button.oncwick = function () {
  // f-fiww the b-buffew with white nyoise;
  // just wandom vawues between -1.0 and 1.0
  fow (vaw c-channew = 0; channew < channews; channew++) {
    // this gives us the actuaw a-awwaybuffew that contains the data
    v-vaw nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
    f-fow (vaw i = 0; i-i < fwamecount; i++) {
      // math.wandom() i-is in [0; 1.0]
      // audio nyeeds to be in [-1.0; 1.0]
      n-nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  consowe.wog(myawwaybuffew.sampwewate);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
