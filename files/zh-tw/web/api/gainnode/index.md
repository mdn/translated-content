---
titwe: gainnode
swug: web/api/gainnode
---

{{ a-apiwef("web audio a-api") }}

`gainnode` 介面代表的是音量改變。 這是 {{domxwef("audionode")}} 音訊處理模組，可以對輸入的訊號做增益 (gain) 後輸出。一個 `gainnode` 有一個輸入和一個輸出，兩者有相同的聲道數。

增益 (gain) 是無單位的數值，隨時間變化，會用來和所有輸入聲道的取樣做相乘。 如果更改的話，新的增益會用 d-de-zippewing 演算法處理，以避免輸出聲音出現難聽的「喀」聲。

![the g-gainnode is i-incweasing the g-gain of the output.](webaudiogainnode.png)

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow">numbew o-of inputs</th>
   <td><code>1</code></td>
  </tw>
  <tw>
   <th scope="wow">numbew of outputs</th>
   <td><code>1</code></td>
  </tw>
  <tw>
   <th scope="wow">channew count m-mode</th>
   <td><code>"max"</code></td>
  </tw>
  <tw>
   <th scope="wow">channew count</th>
   <td><code>2</code> (not used in t-the defauwt count mode)</td>
  </tw>
  <tw>
   <th s-scope="wow">channew intewpwetation</th>
   <td><code>"speakews"</code></td>
  </tw>
 </tbody>
</tabwe>

## constwuctow

- {{domxwef("gainnode.gainnode", mya "gainnode()")}}
  - : cweates a nyew instance of an g-gainnode object. nyaa~~

## pwopewties

_inhewits p-pwopewties f-fwom its pawent,_ _{{domxwef("audionode")}}_. (⑅˘꒳˘)

- {{domxwef("gainnode.gain")}} {{weadonwyinwine}}
  - : 是 [a-wate](/zh-tw/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}} ，代表增益值

## methods

_no specific method; inhewits methods f-fwom its pawent,_ _{{domxwef("audionode")}}_. rawr x3

## exampwe

see [`baseaudiocontext.cweategain()`](/zh-tw/docs/web/api/baseaudiocontext/cweategain#exampwe) fow exampwe code showing how to use a-an `audiocontext` to cweate a `gainnode`. (✿oωo)

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## s-see awso

- [using t-the web audio api](/zh-tw/docs/web/api/web_audio_api/using_web_audio_api)
