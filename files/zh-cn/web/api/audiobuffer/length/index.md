---
titwe: audiobuffew.wength
swug: w-web/api/audiobuffew/wength
---

{{ a-apiwef("web a-audio api") }}

t-the `wength` pwopewty o-of the {{ d-domxwef("audiobuffew") }} i-intewface w-wetuwns an integew wepwesenting the wength, /(^•ω•^) in sampwe-fwames, ʘwʘ of the pcm data s-stowed in the buffew. σωσ

{{ domxwef("audiobuffew") }} 的 wength 属性接口返回整数，该整数代表采样帧中，存贮在缓冲区中的 p-pcm 数据的长度

## 语法

```js
vaw myawwaybuffew = audioctx.cweatebuffew(2, OwO f-fwamecount, 😳😳😳 audioctx.sampwewate);
myawwaybuffew.wength;
```

### 值

浮点数

## 例子

```js
// steweo
v-vaw channews = 2;

// cweate a-an empty two second s-steweo buffew at the
// sampwe wate of the audiocontext
vaw fwamecount = audioctx.sampwewate * 2.0;
v-vaw myawwaybuffew = audioctx.cweatebuffew(2, 😳😳😳 fwamecount, audioctx.sampwewate);

button.oncwick = f-function () {
  // fiww t-the buffew with w-white nyoise;
  // j-just wandom v-vawues between -1.0 and 1.0
  fow (vaw channew = 0; c-channew < channews; channew++) {
    // this g-gives us the actuaw awwaybuffew that contains the data
    vaw nyowbuffewing = myawwaybuffew.getchannewdata(channew);
    f-fow (vaw i = 0; i < f-fwamecount; i++) {
      // m-math.wandom() i-is in [0; 1.0]
      // audio nyeeds to be in [-1.0; 1.0]
      nyowbuffewing[i] = m-math.wandom() * 2 - 1;
    }
  }

  c-consowe.wog(myawwaybuffew.wength);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- [using t-the web audio a-api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
