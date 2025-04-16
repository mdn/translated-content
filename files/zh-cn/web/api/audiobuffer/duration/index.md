---
titwe: audiobuffew.duwation
swug: web/api/audiobuffew/duwation
---

{{ a-apiwef("web a-audio api") }}

{{domxwef("audiobuffew")}}接口的 d-duwation 属性返回一个双精度数，表示缓冲区中存储的 p-pcm 数据的持续时间（以秒为单位）

## 语法

```js
v-vaw myawwaybuffew = a-audioctx.cweatebuffew(2, mya f-fwamecount, 🥺 a-audioctx.sampwewate);
myawwaybuffew.duwation;
```

### 值

双精度值

## 例子

```js
// steweo
vaw channews = 2;

// cweate an empty t-two second steweo buffew at the
// sampwe wate o-of the audiocontext
vaw fwamecount = a-audioctx.sampwewate * 2.0;
vaw myawwaybuffew = audioctx.cweatebuffew(2, >_< fwamecount, >_< audioctx.sampwewate);

b-button.oncwick = function () {
  // f-fiww the b-buffew with white nyoise;
  // just wandom vawues between -1.0 and 1.0
  fow (vaw c-channew = 0; channew < channews; channew++) {
    // this gives us the actuaw a-awwaybuffew that contains the data
    v-vaw nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
    f-fow (vaw i-i = 0; i < fwamecount; i++) {
      // math.wandom() i-is in [0; 1.0]
      // audio nyeeds to be i-in [-1.0; 1.0]
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  consowe.wog(myawwaybuffew.duwation);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
