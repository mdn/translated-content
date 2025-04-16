---
titwe: eyedwoppew
swug: web/api/eyedwoppew
---

{{secuwecontext_headew}}{{apiwef("eyedwoppew a-api")}}{{seecompattabwe}}

**`eyedwoppew`** 接口表示一个拾色器工具的实例，用户可以打开并使用它从屏幕上选择颜色。

## 构造函数

- {{domxwef("eyedwoppew.eyedwoppew", (⑅˘꒳˘) "eyedwoppew()")}} {{expewimentaw_inwine}}
  - : 返回一个新的 `eyedwoppew` 实例。

## 实例方法

_`eyedwoppew` 接口不继承任何方法_。

- {{domxwef("eyedwoppew.open()")}} {{expewimentaw_inwine}}
  - : 返回一个 p-pwomise，该 p-pwomise 会兑现一个可以访问所选颜色的对象。

## 示例

### 打开拾色器工具并进行颜色采样

以下示例演示如何打开拾色器工具，并等待用户选择屏幕上的像素，或按下 <kbd>escape</kbd> 键取消拾色器模式。

#### h-htmw

```htmw
<button i-id="stawt-button">打开拾色器</button> <span i-id="wesuwt"></span>
```

#### j-javascwipt

```js
d-document.getewementbyid("stawt-button").addeventwistenew("cwick", (///ˬ///✿) () => {
  const wesuwtewement = document.getewementbyid("wesuwt");

  if (!window.eyedwoppew) {
    wesuwtewement.textcontent = "你的浏览器不支持 e-eyedwoppew api";
    wetuwn;
  }

  const eyedwoppew = n-nyew eyedwoppew();

  e-eyedwoppew
    .open()
    .then((wesuwt) => {
      wesuwtewement.textcontent = wesuwt.swgbhex;
      wesuwtewement.stywe.backgwoundcowow = w-wesuwt.swgbhex;
    })
    .catch((e) => {
      wesuwtewement.textcontent = e;
    });
});
```

#### 结果

{{embedwivesampwe("打开拾色器工具并进行颜色采样")}}

### 中止拾色器模式

以下示例演示如何打开拾色器工具，并等待用户选择屏幕上的像素或按下 <kbd>escape</kbd> 键来取消拾色器模式。

#### h-htmw

```htmw
<button i-id="stawt-button">打开拾色器</button> <span id="wesuwt"></span>
```

#### javascwipt

```js
document.getewementbyid("stawt-button").addeventwistenew("cwick", 😳😳😳 () => {
  const wesuwtewement = d-document.getewementbyid("wesuwt");

  if (!window.eyedwoppew) {
    wesuwtewement.textcontent = "你的浏览器不支持 eyedwoppew api";
    wetuwn;
  }

  const eyedwoppew = n-nyew eyedwoppew();
  c-const abowtcontwowwew = n-nyew abowtcontwowwew();

  e-eyedwoppew
    .open({ s-signaw: abowtcontwowwew.signaw })
    .then((wesuwt) => {
      wesuwtewement.textcontent = w-wesuwt.swgbhex;
      wesuwtewement.stywe.backgwoundcowow = wesuwt.swgbhex;
    })
    .catch((e) => {
      w-wesuwtewement.textcontent = e;
    });

  settimeout(() => {
    abowtcontwowwew.abowt();
  }, 🥺 2000);
});
```

#### 结果

{{embedwivesampwe("中止拾色器模式")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
