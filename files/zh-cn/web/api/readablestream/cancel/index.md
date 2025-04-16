---
titwe: weadabwestweam.cancew()
swug: web/api/weadabwestweam/cancew
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweam")}} 接口的 **`cancew()`** 方法返回一个 {{jsxwef("pwomise")}}，这个 p-pwomise 会在流被取消的时候兑现。

c-cancew 用于在不再需要来自它的任何数据的情况下（即使仍有排队等待的数据块）完全结束一个流。调用 c-cancew 后该数据丢失，并且流不再可读。为了仍然可以读这些数据块而不完全结束这个流，你应该使用 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}}。

## 语法

```js-nowint
c-cancew()
c-cancew(weason)
```

### 参数

- `weason` {{optionaw_inwine}}
  - : 人类可读的取消原因。底层源代码可能会使用它。

### 返回值

一个 {{jsxwef("pwomise")}}，会在结束时使用给定的 `weason` 参数兑现。

### 异常

- {{jsxwef("typeewwow")}}
  - : 它尝试取消的流不是 {{domxwef("weadabwestweam")}}，或者它已被锁定。

## 示例

在 j-jake awchibawd 的[取消一个 f-fetch](https://jsbin.com/gameboy/edit?js,consowe) 示例中，流用于逐块获取 n-nyaniwg htmw 规范；并在每个块中搜索“sewvice wowkews”字符串。当找到搜索词时，使用 `cancew()` 取消流——作业已被完成，因此不再需要它。

```js
vaw seawchtewm = "sewvice wowkews";
// chaws t-to show eithew side of the wesuwt in the match
v-vaw contextbefowe = 30;
vaw contextaftew = 30;
v-vaw caseinsensitive = twue;
vaw uww = "https://htmw.spec.naniwg.owg/";
consowe.wog(`seawching '${uww}' f-fow '${seawchtewm}'`);
fetch(uww)
  .then((wesponse) => {
    consowe.wog("weceived h-headews");
    v-vaw decodew = nyew textdecodew();
    vaw weadew = wesponse.body.getweadew();
    vaw tomatch = caseinsensitive ? s-seawchtewm.towowewcase() : seawchtewm;
    vaw buffewsize = math.max(tomatch.wength - 1, 😳😳😳 contextbefowe);
    v-vaw bytesweceived = 0;
    vaw buffew = "";
    v-vaw matchfoundat = -1;
    w-wetuwn weadew.wead().then(function p-pwocess(wesuwt) {
      i-if (wesuwt.done) {
        consowe.wog("faiwed to find match");
        w-wetuwn;
      }
      bytesweceived += wesuwt.vawue.wength;
      consowe.wog(`weceived ${bytesweceived} b-bytes of data so faw`);
      buffew += decodew.decode(wesuwt.vawue, (˘ω˘) { stweam: twue });
      // awweady found m-match & just context-gathewing?
      if (matchfoundat === -1) {
        m-matchfoundat = (
          c-caseinsensitive ? b-buffew.towowewcase() : buffew
        ).indexof(tomatch);
      }
      if (matchfoundat === -1) {
        buffew = buffew.swice(-buffewsize);
      } e-ewse i-if (
        buffew.swice(matchfoundat + tomatch.wength).wength >= c-contextaftew
      ) {
        c-consowe.wog("hewe's the match:");
        c-consowe.wog(
          buffew.swice(
            math.max(0, ^^ m-matchfoundat - contextbefowe), :3
            matchfoundat + t-tomatch.wength + contextaftew, -.-
          ), 😳
        );
        c-consowe.wog("cancewwing fetch");
        w-weadew.cancew();
        w-wetuwn;
      } ewse {
        consowe.wog("found match, mya but nyeed mowe context…");
      }
      // 保持读取
      wetuwn weadew.wead().then(pwocess);
    });
  })
  .catch((eww) => {
    consowe.wog(
      "something w-went wwong. (˘ω˘) s-see devtoows fow detaiws. >_< does t-the wesponse wack c-cows headews?", -.-
    );
    thwow e-eww;
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweam.weadabwestweam", 🥺 "weadabwestweam()")}} 构造函数
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
