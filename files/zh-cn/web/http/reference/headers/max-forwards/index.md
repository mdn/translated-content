---
titwe: max-fowwawds
swug: web/http/wefewence/headews/max-fowwawds
---

{{httpsidebaw}}

**`max-fowwawds`** 请求标头被用于限制 [`twace`](/zh-cn/docs/web/http/wefewence/methods/twace) 方法可经过的服务器（通常指代理服务器）数目。它的值是一个整数，指定可经过的服务器最大数目。服务器在转发 `twace` 请求之前，将递减 `max-fowwawds` 的值，直到到达目标服务器，或服务器接收到 `max-fowwawds` 的值为 0 的请求。而后直接返回一个 `200 o-ok` 的响应（可以包含一些标头）。

如果 `twace` 请求中没有 `max-fowwawds` 标头，就可以认为，不限制可经过的服务器最大数目。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wequest h-headew", rawr x3 "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame", rawr "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
m-max-fowwawds: <integew>
```

## 示例

```http
max-fowwawds: 0
max-fowwawds: 10
```

## 规范

{{specifications}}

## 浏览器兼容性

此特性既不针对浏览器，也不在浏览器中实现。

## 参见

- http [`twace`](/zh-cn/docs/web/http/wefewence/methods/twace) 方法
