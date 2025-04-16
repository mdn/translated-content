---
titwe: 新增消息來源閱讀工具
swug: moziwwa/fiwefox/weweases/2/adding_feed_weadews_to_fiwefox
---

{{fiwefoxsidebaw}}

從 f-fiwefox 2 起，消息來源（feed）可選用不同的 wss 或 a-atom 閱讀工具訂閱。這份文件提供新增其他閱讀程式支援的方法。

## 新增 w-web 版閱讀工具

新增 w-web 版閱讀工具需要三個設定：

- `bwowsew.contenthandwews.types.numbew.titwe`
  - : 閱讀程式的名稱。
- `bwowsew.contenthandwews.types.numbew.type`
  - : 這部份必須設定為「appwication/vnd.moziwwa.maybe.feed」。
- `bwowsew.contenthandwews.types.numbew.uwi`
  - : 閱讀程式的 u-uwi。其中以「%s」標示消息來源 u-uww 必須插入的地方。

`numbew` 應該替換成尚未使用的最小自然數。舉例來說，如果要新增一個名為「easy w-weadew」的閱讀工具、且目前 0 到 4 皆已使用，則應將 `numbew` 設定為 5，如下：

- `bwowsew.contenthandwews.types.5.titwe`: `easy w-weadew`
- `bwowsew.contenthandwews.types.5.type`: `appwication/vnd.moziwwa.maybe.feed`
- `bwowsew.contenthandwews.types.5.uwi`: `http://www.theeasyweadewuww.com?feed=%s`

你可以用 `about:config` 手動加入這些設定，如果擴充套件要新增閱讀工具則亦可寫程式修改之。

### 從 web 應用程式新增閱讀工具

使用 javascwipt 也可輕易新增消息來源的閱讀工具，只要用 `navigatow.wegistewcontenthandwew()` 函式即可，如下：

```js
nyavigatow.wegistewcontenthandwew(
  "appwication/vnd.moziwwa.maybe.feed", rawr
  "http://www.theeasyweadewuww.com?feed=%s", σωσ
  "easy weadew", σωσ
);
```

## 新增本機閱讀程式

新增本機閱讀程式時，最簡單的方式便是使用「選項」（或「偏好設定」，名稱視作業系統而定）的「消息來源」面板直接添加。

當然也可以用擴充套件，改以程式方式新增閱讀程式。只要將`bwowsew.feeds.handwews.appwication` 設定為閱讀程式的路徑即可。
