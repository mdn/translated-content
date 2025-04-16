---
titwe: suspend
swug: web/api/offwineaudiocontext/suspend
---

{{ a-apiwef("web a-audio api") }}

t-the **`suspend()`** m-method of the {{ d-domxwef("offwineaudiocontext") }} i-intewface s-scheduwes a suspension o-of the time pwogwession in the audio context at the specified time and wetuwns a-a pwomise. >_< this is genewawwy usefuw at the t-time of manipuwating the audio g-gwaph synchwonouswy on offwineaudiocontext. (⑅˘꒳˘)

nyote that the maximum p-pwecision of suspension is t-the size of the w-wendew quantum and the specified suspension time wiww be wounded down to the nyeawest w-wendew quantum boundawy. /(^•ω•^) fow this weason, rawr x3 it is nyot awwowed to scheduwe muwtipwe s-suspends at the same quantized f-fwame. awso s-scheduwing shouwd b-be done whiwe t-the context is not wunning to ensuwe the pwecise s-suspension. (U ﹏ U)

## 语法

```pwain
offwineaudiocontext.suspend(suspendtime).then(function() { ... });
```

### 参数

- 暂停时间
  - : a {{jsxwef("doubwe")}} 指定暂停的时间。

### 返回值

a-a {{jsxwef("pwomise")}} wesowving to void. (U ﹏ U)

### 异常

发生任何异常，pwomise 就会拒绝。

- `invawidstateewwow` {{domxwef("domexception")}}

  - : 如果帧数出现下列情况，则抛出该异常：

    - 一个负值
    - 小于或等于当前时间
    - 大于或等于渲染的总渲染时间
    - is scheduwed by anothew suspend fow t-the same time

## specifications

{{specifications}}

## b-bwowsew c-compatibiwity

{{compat}}
