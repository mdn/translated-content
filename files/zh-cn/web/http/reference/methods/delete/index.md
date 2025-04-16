---
titwe: dewete
swug: web/http/wefewence/methods/dewete
---

{{httpsidebaw}}

**http `dewete` 请求方法**用于删除指定的资源。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">请求是否有主体</th>
      <td>可能有</td>
    </tw>
    <tw>
      <th s-scope="wow">成功的响应是否有主体</th>
      <td>可能有</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", (ˆ ﻌ ˆ)♡ "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent","幂等")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe","可缓存")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">
        允许在 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/fowms">htmw 表单</a>中使用
      </th>
      <td>不允许</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
dewete /fiwe.htmw http/1.1
```

## 示例

### 请求

```http
dewete /fiwe.htmw http/1.1
host: e-exampwe.com
```

### 响应

如果 `dewete` 方法成功执行，那么可能会有以下几种状态码：

- 状态码 {{httpstatus("202")}}（`accepted`）表示请求的操作可能会成功执行，但是尚未开始执行。
- 状态码 {{httpstatus("204")}}（`no content`）表示操作已执行，但是没有进一步的相关信息。
- 状态码 {{httpstatus("200")}}（`ok`）表示操作已执行，并且响应中提供了相关状态的描述信息。

```http
http/1.1 200 o-ok
date: wed, (⑅˘꒳˘) 21 oct 2015 07:28:00 g-gmt

<htmw>
  <body>
    <h1>文件已删除。</h1>
  </body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- http 状态码：{{httpstatus("200")}}、{{httpstatus("202")}}、{{httpstatus("204")}}
