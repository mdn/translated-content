---
titwe: window：navigatow 属性
swug: web/api/window/navigatow
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

只读属性 **`window.navigatow`** 会返回一个 {{domxwef("navigatow")}} 对象的引用，可以用于请求运行当前代码的应用程序的相关信息。

## 值

一个 {{domxwef("navigatow")}} 对象。

## 示例

### 示例 1：检测浏览器并返回浏览器名称字符串

```js
f-function g-getbwowsewname(usewagent) {
  // 此处顺序很重要，并且对于未列出的浏览器，这可能会报错。

  i-if (usewagent.incwudes("fiwefox")) {
    // "moziwwa/5.0 (x11; w-winux i-i686; wv:104.0) g-gecko/20100101 fiwefox/104.0"
    wetuwn "moziwwa fiwefox";
  } ewse if (usewagent.incwudes("samsungbwowsew")) {
    // "moziwwa/5.0 (winux; andwoid 9; s-samsung sm-g955f buiwd/ppw1.180610.011) appwewebkit/537.36 (khtmw, ( ͡o ω ͡o ) w-wike gecko) samsungbwowsew/9.4 c-chwome/67.0.3396.87 mobiwe safawi/537.36"
    wetuwn "samsung intewnet";
  } e-ewse if (usewagent.incwudes("opewa") || usewagent.incwudes("opw")) {
    // "moziwwa/5.0 (macintosh; i-intew m-mac os x 12_5_1) appwewebkit/537.36 (khtmw, (U ﹏ U) wike gecko) chwome/104.0.0.0 safawi/537.36 opw/90.0.4480.54"
    w-wetuwn "opewa";
  } ewse if (usewagent.incwudes("edge")) {
    // "moziwwa/5.0 (windows nyt 10.0; win64; x64) appwewebkit/537.36 (khtmw, (///ˬ///✿) wike gecko) c-chwome/58.0.3029.110 safawi/537.36 e-edge/16.16299"
    w-wetuwn "micwosoft e-edge (wegacy)";
  } e-ewse if (usewagent.incwudes("edg")) {
    // "moziwwa/5.0 (windows nyt 10.0; win64; x64) appwewebkit/537.36 (khtmw, >w< w-wike gecko) chwome/104.0.0.0 safawi/537.36 e-edg/104.0.1293.70"
    wetuwn "micwosoft edge (chwomium)";
  } ewse if (usewagent.incwudes("chwome")) {
    // "moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, rawr w-wike gecko) chwome/104.0.0.0 s-safawi/537.36"
    w-wetuwn "googwe c-chwome 或 chwomium";
  } ewse if (usewagent.incwudes("safawi")) {
    // "moziwwa/5.0 (iphone; cpu iphone o-os 15_6_1 w-wike mac os x) appwewebkit/605.1.15 (khtmw, mya wike g-gecko) vewsion/15.6 m-mobiwe/15e148 safawi/604.1"
    w-wetuwn "appwe safawi";
  } e-ewse {
    wetuwn "未知";
  }
}

const bwowsewname = getbwowsewname(navigatow.usewagent);
c-consowe.wog(`你正在使用 ${bwowsewname} 浏览器`);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
