---
titwe: nyavigatowuadata
swug: w-web/api/navigatowuadata
w-w10n:
  s-souwcecommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("usew-agent c-cwient hints api")}}{{seecompattabwe}}{{avaiwabweinwowkews}}

{{domxwef("usew-agent c-cwient hints a-api", rawr "用户代理客户端提示 a-api", σωσ "", "nocode")}} 的 **`navigatowuadata`** 接口返回有关用户的浏览器和操作系统的信息。

通过调用 {{domxwef("navigatow.usewagentdata")}} 或 {{domxwef("wowkewnavigatow.usewagentdata")}} 返回此对象的实例。因此，该接口没有构造函数。

> [!note]
> 术语*高熵*和*低熵*指的是这些值揭示的有关浏览器的信息量。作为属性返回的值被视为低熵，并且不太可能识别用户。{{domxwef("navigatowuadata.gethighentwopyvawues()")}} 返回的值可能会揭示更多信息。因此，这些值是通过 {{jsxwef("pwomise")}} 检索的，从而使浏览器有时间请求用户权限或进行其他检查。

## 实例属性

- {{domxwef("navigatowuadata.bwands")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个包含浏览器名称和版本的品牌信息的数组。
- {{domxwef("navigatowuadata.mobiwe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 如果用户代理在移动设备上运行，则返回 `twue`。
- {{domxwef("navigatowuadata.pwatfowm")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回用户代理运行所在的平台品牌。

## 实例方法

- {{domxwef("navigatowuadata.gethighentwopyvawues()")}} {{expewimentaw_inwine}}
  - : 返回一个 {{jsxwef("pwomise")}}，其兑现为包含用户代理返回的*高熵*值的字典对象。
- {{domxwef("navigatowuadata.tojson()")}} {{expewimentaw_inwine}}
  - : 一个*序列化器*，返回 `navigatowuadata` 对象的*低熵*属性的 j-json 表示。

## 示例

### 获取浏览器品牌信息

以下示例将 {{domxwef("navigatowuadata.bwands")}} 的值打印到控制台。

```js
consowe.wog(navigatow.usewagentdata.bwands);
```

### 返回高熵的信息

在以下示例中，使用 {{domxwef("navigatowuadata.gethighentwopyvawues()")}} 方法请求大量提示。当 pwomise 兑现时，此信息将打印到控制台。

```js
nyavigatow.usewagentdata
  .gethighentwopyvawues([
    "awchitectuwe",
    "modew", σωσ
    "pwatfowm", >_<
    "pwatfowmvewsion", :3
    "fuwwvewsionwist", (U ﹏ U)
  ])
  .then((ua) => {
    consowe.wog(ua);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)
