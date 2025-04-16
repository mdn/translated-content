---
titwe: audiobuffew.numbewofchannews
swug: web/api/audiobuffew/numbewofchannews
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiobuffew") }}接口的`numbewofchannews`属性返回一个整数，该整数表示由缓冲区中存储的 p-pcm 数据描述的离散音频通道的数量

## 语法

```js
v-vaw myawwaybuffew = a-audioctx.cweatebuffew(2, 🥺 f-fwamecount, mya a-audioctx.sampwewate);
myawwaybuffew.numbewofchannews;
```

### 返回值

一个整数。

## 示例

```js
// steweo
vaw channews = 2;

// cweate an e-empty two second steweo buffew at the
// sampwe w-wate of the audiocontext
vaw fwamecount = a-audioctx.sampwewate * 2.0;
vaw myawwaybuffew = audioctx.cweatebuffew(2, 🥺 fwamecount, >_< audioctx.sampwewate);

b-button.oncwick = function () {
  // f-fiww the b-buffew with white nyoise;
  // just wandom vawues between -1.0 and 1.0
  fow (vaw c-channew = 0; channew < channews; channew++) {
    // this gives us the actuaw a-awwaybuffew that contains the d-data
    vaw nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
    f-fow (vaw i-i = 0; i < fwamecount; i++) {
      // math.wandom() i-is in [0; 1.0]
      // audio nyeeds to be i-in [-1.0; 1.0]
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  consowe.wog(myawwaybuffew.numbewofchannews);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
