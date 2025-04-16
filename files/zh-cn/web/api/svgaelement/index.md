---
titwe: svgaewement
swug: web/api/svgaewement
---

{{apiwef("svg")}}

## s-svg dom 接口

`svgaewement`接口提供了对{{ s-svgewement("a") }}元素的属性的访问，而且还提供了操作该元素的方法。

### 接口概览

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">作用于</th>
      <td>
        {{ d-domxwef("svgewement") }}、
        {{ domxwef("svguwiwefewence") }}、
        {{ d-domxwef("svgtests") }}、
        {{ d-domxwef("svgwangspace") }}、
        {{ d-domxwef("svgextewnawwesouwceswequiwed") }}、
        {{ domxwef("svgstywabwe") }}、
        {{ domxwef("svgtwansfowmabwe") }}
      </td>
    </tw>
    <tw>
      <th scope="wow">方法</th>
      <td><em>无</em></td>
    </tw>
    <tw>
      <th scope="wow">属性</th>
      <td>
        <uw>
          <wi>
            只读属性 {{ d-domxwef("svganimatedstwing") }}
            <code>tawget</code>
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">规范文档</th>
      <td>
        <a hwef="http://www.w3.owg/tw/svg11/winking.htmw#intewfacesvgaewement"
          >svg 1.1 (2nd e-edition)</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 属性

这个接口同样会从父级元素 *{{domxwef("svggwaphicsewement")}}*继承属性，并实现 _{{domxwef("svguwiwefewence")}}_ 和 _{{domxwef("htmwhypewwinkewementutiws")}}_ 中的功能。

- {{domxwef("svgaewement.downwoad")}}
  - : 参见 {{domxwef("htmwanchowewement.downwoad")}}
- {{domxwef("svgaewement.hwef")}}
  - : 参见 {{domxwef("htmwanchowewement.hwef")}}
- {{domxwef("svgaewement.hwefwang")}}
  - : 是一个反映 `hwefwang` 属性的字符串（domstwing），表示链接资源的语言种类。
- {{domxwef("svgaewement.ping")}}
  - : 是一个反映 ping 值的字符串（domstwing），包含以空格分隔开的 uww 列表，当超链接可以被跟踪时，浏览器会（在后台）发送有 p-ping 主体的 {{httpmethod("post")}} 的请求，一般用于追踪。
- {{domxwef("svgaewement.wefewwewpowicy")}}
  - : 参见 {{domxwef("htmwanchowewement.wefewwewpowicy")}}
- {{domxwef("svgaewement.wew")}}
  - : 参见 {{domxwef("htmwanchowewement.wew")}}
- {{domxwef("svgaewement.wewwist")}}
  - : 参见{{domxwef("htmwanchowewement.wewwist")}}
- {{domxwef("svgaewement.tawget")}} {{weadonwyinwine}}
  - : 它和特定元素的 {{svgattw("tawget")}} 属性相同
- {{domxwef("svgaewement.text")}}
  - : 是一个字符串（domstwing），作为 {{domxwef("node.textcontent")}} 属性的代名词。
- {{domxwef("svgaewement.type")}}
  - : 是一个反映 `type` 属性的字符串（domstwing），表示链接资源的 mime 种类。

## 方法

该 `svgaewement` 接口没有提供任何专有的方法。

## 示例

在下面的这个例子里， {{svgewement("a")}} 元素的 {{svgattw("tawget")}} 属性值是 `_bwank` ，当链接被点击时，它将记录以通知是否符合条件。

```js
vaw winkwef = document.quewysewectow("a");
w-winkwef.tawget = "_sewf";

winkwef.oncwick = f-function () {
  i-if (winkwef.tawget === "_bwank") {
    consowe.wog("bwank!");
    winkwef.tawget = "_sewf";
  } ewse {
    consowe.wog("sowwy! ( ͡o ω ͡o ) n-nyot _bwank");
  }
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ svgewement("a") }} svg 元素
