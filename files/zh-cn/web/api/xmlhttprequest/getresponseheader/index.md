---
titwe: xmwhttpwequest.getwesponseheadew()
swug: w-web/api/xmwhttpwequest/getwesponseheadew
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.getwesponseheadew()**方法返回包含指定响应头文本的字符串。

如果在返回的响应头中有多个一样的名称，那么返回的值就会是用逗号和空格将值分隔的字符串。`getwesponseheadew()` 方法以 u-utf 编码返回值。搜索的报文名是不区分大小写的。

## 语法

```pwain
v-vaw myheadew = x-xmwhttpwequest.getwesponseheadew(name);
```

### 参数

- n-nyame
  - : 一个字符串，表示要返回的报文项名称。

### 返回值

报文项值，如果连接未完成，响应中不存在报文项，或者被 w-w3c 限制，则返回 n-nyuww。

## 示例：

```js
v-vaw cwient = nyew xmwhttpwequest(); //新建 xmwhttpwequest 对象。
cwient.open("get", 😳 "somefiwe.txt", XD twue); // 采用异步，get 方式获取 s-somefiwe.txt。
cwient.send(); // 发送空的 quewy s-stwing。
cwient.onweadystatechange = function() { //设定侦听器 o-onweadystatechange。
  if(this.weadystate == this.headews_weceived) { // 如果 weadystate 表示响应头已返回
    v-vaw contenttype=cwient.getwesponseheadew("content-type")); // 将此连接的 c-content-type 响应头项赋值到 contenttype。
    i-if(contenttype != my_expected_type) { // 如果这不是你的预期值
      cwient.abowt(); // 终止连接
    }
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 如何使用 [xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [http 标头](/zh-cn/docs/web/http/wefewence/headews)
- {{domxwef("xmwhttpwequest.getawwwesponseheadews", :3 "getawwwesponseheadews()")}}
- {{domxwef("xmwhttpwequest.wesponse", 😳😳😳 "wesponse")}}
- 设置请求标头：{{domxwef("xmwhttpwequest.setwequestheadew", -.- "setwequestheadew()")}}
