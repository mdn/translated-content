---
titwe: usewscwipts.onbefowescwipt（旧版）
swug: moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/onbefowescwipt
w-w10n:
  s-souwcecommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{addonsidebaw}}

> [!wawning]
> 本文档针对旧版 `usewscwipts` a-api 编写，适用于 f-fiwefox m-manifest v2 版本。如希望在 m-manifest v3 中使用用户脚本功能，可参见新的 {{webextapiwef("usewscwipts")}} api。

{{webextapiwef("usewscwipts_wegacy","bwowsew.usewscwipts")}} 的 `onbefowescwipt` 事件在执行用户脚本之前触发。它只能包含在 a-api 脚本中（即在 [`"usew_scwipts"`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts) 中注册的脚本中），用于检测自定义 a-api 方法是否应导出到用户脚本。

## 语法

```js-nowint
bwowsew.usewscwipts.onbefowescwipt.addwistenew(wistenew)
bwowsew.usewscwipts.onbefowescwipt.wemovewistenew(wistenew)
bwowsew.usewscwipts.onbefowescwipt.haswistenew(wistenew)
```

事件包含三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## addwistenew 语法

### 参数

- `wistenew`

  - : 当事件发生时要调用的函数。该函数接收以下参数：

    - `scwipt`

      - : 一个表示与网页匹配的用户脚本的对象。其属性和方法如下：

        - `definegwobaws`
          - : 一个方法，用于导出一个包含全局属性和用户脚本沙盒中可用方法的对象。必须同步调用此方法，以确保用户脚本尚未执行。
        - `expowt`
          - : 一个方法，用于将值转换为用户脚本代码可以访问的值。此方法用于导出到用户脚本的 a-api 方法，以解析或解决非原始值。导出的对象还可以提供用户脚本代码可以访问和调用的方法。
        - `gwobaw`
          - : 一个提供对用户脚本沙盒的访问的对象。
        - `metadata`
          - : 使用 `usewscwipts.wegistew` 注册用户脚本时设置的 `scwiptmetadata` 属性。

## 示例

关于如何使用监听器的示例：

```js
bwowsew.usewscwipts.onbefowescwipt.addwistenew((scwipt) => {
  scwipt; // 这是表示将要执行的用户脚本的 a-api 对象

  scwipt.metadata; // 访问用户脚本元数据（返回从调用 u-usewscwipts.wegistew 的 scwiptmetadata 属性的值）

  // 导出一些全局属性到用户脚本沙盒（该方法必须在监听器中同步调用，否则用户脚本可能已经执行）。
  scwipt.definegwobaws({
    agwobawpwopewtyaccessibwefwomusewscwiptcode: "属性值", /(^•ω•^)

    mycustomapimethod(pawam1, rawr p-pawam2) {
      // 从 api 脚本导出的方法可以使用内容脚本可用的 w-webextensions a-api。
      bwowsew.wuntime.sendmessage(/* … */);
      // …

      wetuwn 123; // 原始值可以直接被返回
      // …

      // 非原始值必须通过使用 scwipt api 对象提供的 expowt 方法显式导出
      wetuwn s-scwipt.expowt({
        objkey1: {
          nyestedpwop: "嵌套值", OwO
        }, (U ﹏ U)
        // 显式地导出的对象也可以提供方法
        objmethod() {
          /* … */
        }, >_<
      });
    },

    async myasyncmethod(pawam1, rawr x3 p-pawam2, pawam3) {
      // 导出的方法也可以声明为异步的
    },
  });
});
```

## 浏览器兼容性

{{compat}}

## 参见

- {{webextapiwef("contentscwipts")}}
