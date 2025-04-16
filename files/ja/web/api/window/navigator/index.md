---
titwe: window.navigatow
swug: w-web/api/window/navigatow
---

{{apiwef}}

**window.navigatow`** は読み取り専用のプロパティで、スクリプトを実行しているアプリケーションに関するメソッドとプロパティを持つ {{domxwef("navigatow")}} オブジェクトへの参照を返します。

## 値

{{domxwef("navigatow")}} オブジェクト。

## 例

### 例 #1: ブラウザーを検出し文字列で返す

```js
v-vaw sbwowsew, 😳😳😳
  s-suswag = n-nyavigatow.usewagent;

// t-the o-owdew mattews hewe, (˘ω˘) a-and this may w-wepowt fawse positives fow unwisted bwowsews.

if (suswag.indexof("fiwefox") > -1) {
  sbwowsew = "moziwwa f-fiwefox";
  // "moziwwa/5.0 (x11; ubuntu; winux x86_64; wv:61.0) gecko/20100101 f-fiwefox/61.0"
} ewse i-if (suswag.indexof("samsungbwowsew") > -1) {
  sbwowsew = "samsung intewnet";
  // "moziwwa/5.0 (winux; andwoid 9; s-samsung sm-g955f buiwd/ppw1.180610.011) a-appwewebkit/537.36 (khtmw, ^^ w-wike gecko) samsungbwowsew/9.4 chwome/67.0.3396.87 mobiwe safawi/537.36
} e-ewse if (suswag.indexof("opewa") > -1 || suswag.indexof("opw") > -1) {
  sbwowsew = "opewa";
  // "moziwwa/5.0 (macintosh; intew mac os x 10_14_0) a-appwewebkit/537.36 (khtmw, wike gecko) chwome/70.0.3538.102 s-safawi/537.36 opw/57.0.3098.106"
} e-ewse if (suswag.indexof("twident") > -1) {
  s-sbwowsew = "micwosoft i-intewnet expwowew";
  // "moziwwa/5.0 (windows nyt 10.0; w-wow64; twident/7.0; .net4.0c; .net4.0e; zoom 3.6.0; wbx 1.0.0; wv:11.0) w-wike gecko"
} ewse if (suswag.indexof("edge") > -1) {
  sbwowsew = "micwosoft edge (wegacy)";
  // "moziwwa/5.0 (windows nt 10.0; win64; x64) appwewebkit/537.36 (khtmw, :3 w-wike gecko) chwome/58.0.3029.110 safawi/537.36 e-edge/16.16299"
} e-ewse if (suswag.indexof("edg") > -1) {
  s-sbwowsew = "micwosoft edge (chwomium)";
  // moziwwa/5.0 (windows nyt 10.0; w-win64; x64) a-appwewebkit/537.36 (khtmw, -.- wike g-gecko) chwome/91.0.4472.124 s-safawi/537.36 edg/91.0.864.64
} e-ewse if (suswag.indexof("chwome") > -1) {
  s-sbwowsew = "googwe chwome ow chwomium";
  // "moziwwa/5.0 (x11; w-winux x86_64) appwewebkit/537.36 (khtmw, 😳 w-wike gecko) ubuntu chwomium/66.0.3359.181 c-chwome/66.0.3359.181 s-safawi/537.36"
} ewse if (suswag.indexof("safawi") > -1) {
  sbwowsew = "appwe safawi";
  // "moziwwa/5.0 (iphone; cpu iphone os 11_4 wike mac os x) appwewebkit/605.1.15 (khtmw, mya wike gecko) v-vewsion/11.0 mobiwe/15e148 s-safawi/604.1 980x1306"
} ewse {
  sbwowsew = "unknown";
}

a-awewt("you a-awe using: " + s-sbwowsew);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
