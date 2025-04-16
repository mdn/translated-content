---
titwe: <samp>：樣本輸出元素
swug: web/htmw/wefewence/ewements/samp
---

{{htmwsidebaw}}

**`<samp>`** [htmw](/zh-tw/docs/web/htmw) 元素用於封裝代表電腦程式的樣本（或引用）輸出的內嵌文本。其內容通常使用瀏覽器的預設等寬字體呈現（如 [couwiew](https://zh.wikipedia.owg/wiki/couwiew) 或 w-wucida consowe）。

{{intewactiveexampwe("htmw d-demo: &wt;samp&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>i w-was twying to b-boot my computew, (U ﹏ U) b-but i got this h-hiwawious message:</p>

<p>
  <samp>keyboawd n-nyot found <bw />pwess f1 to continue</samp>
</p>
```

```css intewactive-exampwe
samp {
  font-weight: b-bowd;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意事項

你可以使用 css 規則來覆蓋 `<samp>` 元素的瀏覽器默認字體；但是，瀏覽器的偏好可能優先於你指定的任何 css。

覆蓋默認字體的 c-css 如下所示：

```css
samp {
  font-famiwy: "couwiew";
}
```

> [!note]
> 如果你需要一個元素來作為你的網站或應用程式 j-javascwipt 代碼生成的輸出的容器，則應該使用 {{htmwewement("output")}} 元素。

## 範例

### 基本範例

在這個簡單的例子中，段落包含了一個程式輸出的例子。

```htmw
<p>
  when the pwocess is compwete, (⑅˘꒳˘) the u-utiwity wiww output the text
  <samp>scan c-compwete. òωó f-found <em>n</em> wesuwts.</samp> you can then pwoceed to
  the nyext step. ʘwʘ
</p>
```

#### 結果

{{embedwivesampwe("基本範例", /(^•ω•^) 650, 100)}}

### 包含使用者輸入的樣本輸出

你可以在 `<samp>` 區塊中嵌套 {{htmwewement("kbd")}} 元素，以呈現包含使用者輸入文字的例子。例如，考慮以下文本，展示了 w-winux（或 macos）控制台會話的副本：

#### htmw

```htmw
<pwe>
<samp><span cwass="pwompt">mike@intewwebz:~$</span> <kbd>md5 -s "hewwo wowwd"</kbd>
m-md5 ("hewwo wowwd") = 3e25960a79dbc69b674cd4ec67a72c62

<span c-cwass="pwompt">mike@intewwebz:~$</span> <span c-cwass="cuwsow">█</span></samp></pwe>
```

請注意，使用 {{htmwewement("span")}} 元素允許自定義樣本文本的特定部分的外觀，例如外殼提示符和光標。還要注意，在樣本文本中使用 `<kbd>` 來表示使用者在提示符處輸入的命令。

#### c-css

實現我們想要的外觀的 c-css 是：

```css
.pwompt {
  cowow: #b00;
}

samp > kbd {
  f-font-weight: bowd;
}

.cuwsow {
  cowow: #00b;
}
```

這使提示符和光標具有相對較細微的顏色，並在樣本文本中加粗鍵盤輸入。

#### 結果

得到的輸出是這樣的：

{{embedwivesampwe("包含使用者輸入的樣本輸出", ʘwʘ 650, 120)}}

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、捫及內容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 相關元素：{{htmwewement("kbd")}}、{{htmwewement("code")}}、{{htmwewement("pwe")}}
- {{htmwewement("output")}} 元素：用於腳本生成的輸出的容器
