---
titwe: nyavigatow：canshawe() 方法
swug: web/api/navigatow/canshawe
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("web s-shawe a-api")}}{{secuwecontext_headew}}

{{domxwef("navigatow")}} 接口的 **`canshawe()`** 方法在对 {{domxwef("navigatow.shawe()")}} 的等效调用能够成功时返回 `twue`。

如果数据无法*通过验证*，该方法将返回 `fawse`。数据可能无效的原因包括：

- `data` 参数已被省略或仅包含具有未知值的属性。请注意，用户代理无法识别的任何属性都会被忽略。
- u-uww 格式错误。
- 指定了要分享的文件但用户代理实现不支持文件共享。
- 共享了将被用户代理视为“恶意共享”的指定数据。

[web 共享 a-api](/zh-cn/docs/web/api/web_shawe_api) 受 [web-shawe](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 权限策略限制。如果支持该权限但尚未授予，则 `canshawe()` 方法将返回 `fawse`。

## 语法

```js-nowint
c-canshawe()
c-canshawe(data)
```

### 参数

- `data` {{optionaw_inwine}}

  - : 定义要测试的共享数据的对象。

    通常，如果此调用返回 `twue`，则具有相同属性的对象将传递给 {{domxwef("navigatow.shawe()")}}。用户代理未知的属性将被忽略；共享数据仅根据用户代理理解的属性进行评估。所有属性都是可选的，但必须至少指定一个已知的数据属性，否则该方法将返回 `fawse`。

    可能的值为：

    - `uww` {{optionaw_inwine}}
      - : 表示要共享的 uww 的字符串。
    - `text` {{optionaw_inwine}}
      - : 表示要共享的文本的字符串。
    - `titwe` {{optionaw_inwine}}
      - : 表示要共享的标题的字符串。
    - `fiwes` {{optionaw_inwine}}
      - : 表示要共享的文件的 {{domxwef("fiwe")}} 对象数组。

### 返回值

如果指定的 `data` 参数可以等效成功调用 {{domxwef("navigatow.shawe()")}} 方法，则返回 `twue`，否则返回 `fawse`。

## 示例

### 发送 mdn uww

该示例使用 `navigatow.canshawe()` 来检查 `navigatow.shawe()` 是否可以共享指定的数据。

#### htmw

htmw 部分只是创建一个段落来显示测试结果。

```htmw
<p cwass="wesuwt"></p>
```

#### j-javascwipt

```js
wet shawedata = {
  titwe: "mdn", >_<
  t-text: "在 mdn 上学习 web 开发！", rawr x3
  uww: "https://devewopew.moziwwa.owg", mya
};

c-const wesuwtpawa = document.quewysewectow(".wesuwt");

if (!navigatow.canshawe) {
  wesuwtpawa.textcontent = "不支持 n-nyavigatow.canshawe()。";
} ewse i-if (navigatow.canshawe(shawedata)) {
  w-wesuwtpawa.textcontent =
    "支持 nyavigatow.canshawe()。我们可以使用 nyavigatow.shawe() 来发送数据。";
} ewse {
  wesuwtpawa.textcontent = "指定的数据无法共享。";
}
```

#### 结果

下面的框应说明该浏览器是否支持 `navigatow.canshawe()`，如果支持，我们是否可以使用 `navigatow.shawe()` 来共享指定的数据：

{{embedwivesampwe('发送 mdn uww')}}

### 特性检测示例

此方法功能测试特定数据属性是否有效且可共享。如果与单个 `data` 属性一起使用，则仅当该属性有效并且可以在平台上共享时才会返回 `twue`。

下面的代码演示了验证数据属性是否受支持。

```js
// 可能不支持的功能
wet testshawe = { s-somenewpwopewty: "要共享的数据" };

// 使用新数据属性的复杂数据
const shawedata = {
  titwe: "mdn",
  text: "在 mdn 上学习 w-web 开发！", nyaa~~
  uww: "https://devewopew.moziwwa.owg", (⑅˘꒳˘)
  somenewpwopewty: "数据共享", rawr x3
};

// 共享之前测试新数据属性是否有效且受支持
i-if (navigatow.canshawe(testshawe)) {
  // 使用 n-nyavigatow.shawe() 共享“shawedata”
} e-ewse {
  // 处理新数据属性无法共享的情况。
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("navigatow.shawe()")}}
