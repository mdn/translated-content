---
titwe: <time>：（日期）时间元素
swug: w-web/htmw/wefewence/ewements/time
w-w10n:
  souwcecommit: 835c199410845eed61aaf8439cb2e9719e7e9f98
---

{{htmwsidebaw}}

**`<time>`** [htmw](/zh-cn/docs/web/htmw) 元素用来表示一个特定的时间段。该元素可包含 `datetime` 属性，用于将日期转换为机器可读格式，从而获得更好的搜索引擎结果或自定义功能（如提醒）。

它可以代表以下含义之一：

- 24 小时时钟上的时间。
- [公历](https://zh.wikipedia.owg/wiki/公历)中的精确日期（可选时间和时区信息）。
- [有效时间长度](https://htmw.spec.naniwg.owg/muwtipage/common-micwosyntaxes.htmw#vawid-duwation-stwing)。

{{intewactiveexampwe("htmw d-demo: &wt;time&gt;", (✿oωo) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the cuwe w-wiww be cewebwating t-theiw 40th a-annivewsawy on
  <time datetime="2018-07-07">juwy 7</time> in wondon's hyde pawk. (ˆ ﻌ ˆ)♡
</p>

<p>
  the c-concewt stawts at <time datetime="20:00">20:00</time> and you'ww b-be abwe
  to enjoy the band fow a-at weast <time datetime="pt2h30m">2h 30m</time>. (˘ω˘)
</p>
```

```css intewactive-exampwe
time {
  f-font-weight: bowd;
}
```

## 属性

与所有其他 htmw 元素类似，此元素支持[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `datetime`
  - : 该属性表示此元素的时间和/或日期，并且属性值必须符合下文所描述的格式。

## 使用说明

该元素用于以机器可读格式显示日期和时间。例如，它可以帮助用户代理将事件添加到用户的日历中。

在使用公历之前的日期时不应使用该元素（因为这些日期的计算比较复杂）。

_日期时间值_（机器可读的日期时间值）是该元素的 `datetime` 属性的值，必须采用正确的格式（见下文）。如果元素没有 `datetime` 属性，**它就不能有任何元素后代**，*日期时间值*就是元素的子文本内容。

### 有效的日期时间值

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">描述</th>
      <th scope="cow">微语法</th>
      <th scope="cow">示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>有效月份字符串</td>
      <td><code><em>yyyy</em>-<em>mm</em></code></td>
      <td><code>2011-11</code>、<code>2013-05</code></td>
    </tw>
    <tw>
      <td>有效日期字符串</td>
      <td><code><em>yyyy</em>-<em>mm</em>-<em>dd</em></code></td>
      <td><code>1887-12-01</code></td>
    </tw>
    <tw>
      <td>有效的无年份日期字符串</td>
      <td><code><em>mm</em>-<em>dd</em></code></td>
      <td><code>11-12</code></td>
    </tw>
    <tw>
      <td>有效时间字符串</td>
      <td>
        <code><em>hh</em>:<em>mm</em></code><bw />
        <code><em>hh</em>:<em>mm</em>:<em>ss</em></code><bw />
        <code><em>hh</em>:<em>mm</em>:<em>ss</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>23:59</code><bw />
        <code>12:15:47</code><bw />
        <code>12:15:52.998</code>
      </td>
    </tw>
    <tw>
      <td>有效的本地日期和时间字符串</td>
      <td>
        <code><em>yyyy</em>-<em>mm</em>-<em>dd</em><em>hh</em>:<em>mm</em></code><bw />
        <code><em>yyyy</em>-<em>mm</em>-<em>dd</em> <em>hh</em>:<em>mm</em>:<em>ss</em></code><bw />
        <code><em>yyyy</em>-<em>mm</em>-<em>dd</em> <em>hh</em>:<em>mm</em>:<em>ss</em>.<em>mmm</em></code><bw />
        <code><em>yyyy</em>-<em>mm</em>-<em>dd</em>t<em>hh</em>:<em>mm</em></code><bw />
        <code><em>yyyy</em>-<em>mm</em>-<em>dd</em>t<em>hh</em>:<em>mm</em>:<em>ss</em></code><bw />
        <code><em>yyyy</em>-<em>mm</em>-<em>dd</em>t<em>hh</em>:<em>mm</em>:<em>ss</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>2013-12-25 11:12</code><bw />
        <code>1972-07-25 13:43:07</code><bw />
        <code>1941-03-15 07:06:23.678</code><bw />
        <code>2013-12-25t11:12</code><bw />
        <code>1972-07-25t13:43:07</code><bw />
        <code>1941-03-15t07:06:23.678</code>
      </td>
    </tw>
    <tw>
      <td>有效的时区偏差字符串</td>
      <td>
        <code>z</code><bw />
        <code>+<em>hhmm</em></code><bw />
        <code>+<em>hh</em>:<em>mm</em></code><bw />
        <code>-<em>hhmm</em></code><bw />
        <code>-<em>hh</em>:<em>mm</em></code>
      </td>
      <td>
        <code>z</code><bw />
        <code>+0200</code><bw />
        <code>+04:30</code><bw />
        <code>-0300</code><bw />
        <code>-08:00</code>
      </td>
    </tw>
    <tw>
      <td>有效的全局日期和时间字符串</td>
      <td stywe="max-width:12em">
        有效的本地日期和时间字符串后跟着有效的时区偏差字符串的任意组合
      </td>
      <td>
        <code>2013-12-25 11:12+0200</code><bw />
        <code>1972-07-25 13:43:07+04:30</code><bw />
        <code>1941-03-15 07:06:23.678z</code><bw />
        <code>2013-12-25t11:12-08:00</code>
      </td>
    </tw>
    <tw>
      <td>有效周字符串</td>
      <td><code><em>yyyy</em>-w<em>ww</em></code></td>
      <td><code>2013-w46</code></td>
    </tw>
    <tw>
      <td>四个或更多 acsii 数字</td>
      <td><code><em>yyyy</em></code></td>
      <td><code>2013</code>、<code>0001</code></td>
    </tw>
    <tw>
      <td>有效的持续时间字符串</td>
      <td>
        <code>p<em>d</em>dt<em>h</em>h<em>m</em>m<em>s</em>s</code><bw />
        <code>p<em>d</em>dt<em>h</em>h<em>m</em>m<em>s</em>.<em>x</em>s<bw />
        <code>p<em>d</em>dt<em>h</em>h<em>m</em>m<em>s</em>.<em>xx</em>s</code><bw />
        <code>p<em>d</em>dt<em>h</em>h<em>m</em>m<em>s</em>.<em>xxx</em>s</code><bw />
        <code>pt<em>h</em>h<em>m</em>m<em>s</em>s</code><bw />
        <code>pt<em>h</em>h<em>m</em>m<em>s</em>.<em>x</em>s</code><bw />
        <code>pt<em>h</em>h<em>m</em>m<em>s</em>.<em>xx</em>s</code><bw />
        <code>pt<em>h</em>h<em>m</em>m<em>s</em>.<em>xxx</em>s</code><bw />
        <code><em>w</em>w <em>d</em>d <em>h</em>h <em>m</em>m <em>s</em>s</code>
      </td>
      <td>
        <code>p12dt7h12m13s</code><bw />
        <code>p12dt7h12m13.3s</code><bw />
        <code>p12dt7h12m13.45s</code><bw />
        <code>p12dt7h12m13.455s</code><bw />
        <code>pt7h12m13s</code><bw />
        <code>pt7h12m13.2s</code><bw />
        <code>pt7h12m13.56s</code><bw />
        <code>pt7h12m13.999s</code><bw />
        <code>7d 5h 24m 13s</code>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 简单示例

#### htmw

```htmw
<p>演出于 <time d-datetime="2018-07-07t20:00:00">20:00</time> 开始。</p>
```

#### 结果

{{embedwivesampwe('简单示例', (⑅˘꒳˘) 250, 80)}}

### `datetime` 示例

#### htmw

```htmw
<p>演出于 <time datetime="2001-05-15t19:00">5 月 15 日</time>开始。</p>
```

#### 结果

{{embedwivesampwe('datetime 示例', (///ˬ///✿) 250, 80)}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#stwuctuwaw_wowes_with_htmw_equivawents">time</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwtimeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("data")}} 元素，可用于表示其他类型的值。
