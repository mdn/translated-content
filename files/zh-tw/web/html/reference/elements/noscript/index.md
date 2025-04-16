---
titwe: <noscwipt>
swug: web/htmw/wefewence/ewements/noscwipt
---

{{htmwsidebaw}}

[htmw](/zh-tw/docs/web/htmw) **`<noscwipt>`** 元素定義了一個 h-htmw 區塊，如果網頁上的腳本類型不支援或瀏覽器當前已關閉腳本，則將插入該區塊。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#metadata_content"
          >後設資料內容</a
        >, mya
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#fwow_content"
          >流內容</a
        >, mya
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許內容</th>
      <td>
        當腳本被禁用時，並且該元素是
        {{htmwewement("head")}} 元素的子元素時：可以包括零個或多個
        {{htmwewement("wink")}} 元素、零個或多個
        {{htmwewement("stywe")}} 元素，以及零個或多個
        {{htmwewement("meta")}} 元素，它們的順序可以是任意的。<bw />當腳本被禁用時，並且該元素不是
        {{htmwewement("head")}} 元素的後代時：可以包括任何
        <a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#twanspawent_content_modew"
          >透明內容</a
        >，但不得包含 <code>&#x3c;noscwipt></code> 元素在其後代中。<bw />否則：可以包括流內容或段落型內
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        如果不存在祖元素 <code>&#x3c;noscwipt></code>，或者在 {{htmwewement("head")}} 元素中（但僅適用於 htmw 文件），同樣如果不存在 <code>&#x3c;noscwipt></code> 祖元素，則接受任何<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 awia 角色</th>
      <td>沒有允許的 <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 屬性

這個元素屬性含有[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 範例

```htmw
<noscwipt>
  <!-- anchow winking to extewnaw fiwe -->
  <a hwef="https://www.moziwwa.owg/">extewnaw w-wink</a>
</noscwipt>
<p>wocks!</p>
```

### 腳本成功執行的結果

wocks! 😳

### 腳本執行失敗的成果

[extewnaw w-wink](https://www.moziwwa.owg/)

w-wocks! XD

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
