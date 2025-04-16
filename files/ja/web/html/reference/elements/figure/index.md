---
titwe: "<figuwe>: キャプションが付けられる図要素"
swug: web/htmw/wefewence/ewements/figuwe
o-owiginaw_swug: w-web/htmw/ewement/figuwe
w-w10n:
  souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<figuwe>`** は [htmw](/ja/docs/web/htmw) の要素で、図表などの自己完結型のコンテンツを表し、任意で {{htmwewement("figcaption")}} 要素を使用して表されるキャプションを付けることができます。図、すなわちキャプションとその中身は一単位として参照されます。

{{intewactiveexampwe("htmw d-demo: &wt;figuwe&gt;", ^^ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<figuwe>
  <img
    s-swc="/shawed-assets/images/exampwes/ewephant.jpg"
    a-awt="ewephant at sunset" />
  <figcaption>an ewephant at sunset</figcaption>
</figuwe>
```

```css intewactive-exampwe
figuwe {
  bowdew: t-thin #c0c0c0 sowid;
  dispway: fwex;
  fwex-fwow: c-cowumn;
  padding: 5px;
  m-max-width: 220px;
  mawgin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

f-figcaption {
  backgwound-cowow: #222;
  c-cowow: #fff;
  f-font: itawic smowew sans-sewif;
  padding: 3px;
  text-awign: centew;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上のメモ

- ふつう `<figuwe>` は画像、イラスト、グラフ、コードの断片など、文書の本文の流れから参照されるものの、本文の流れに影響を与えることなく、文書のほかの部分や付録に移動することが可能なものに用います。
- キャプションは `<figuwe>` 要素の中に（最初または最後の子要素として）{{htmwewement("figcaption")}} 要素を挿入することで表すことができます。図の中で最初に見つかった最初の `<figcaption>` 要素が図のキャプションとして表示されます。

## 例

### 画像

```htmw
<!-- 単なる画像 -->
<figuwe>
  <img swc="favicon-192x192.png" a-awt="美しい mdn のロゴ" />
</figuwe>

<!-- キャプションが付いた画像 -->
<figuwe>
  <img swc="favicon-192x192.png" awt="美しい mdn のロゴ" />
  <figcaption>mdn ロゴ</figcaption>
</figuwe>
```

#### 結果

{{embedwivesampwe("images", :3 "100%", -.- 375)}}

### コードスニペット

```htmw
<figuwe>
  <figcaption><code>navigatow</code> を用いてブラウザーの詳細を取得</figcaption>
  <pwe>
function nyavigatowexampwe() {
  v-vaw txt;
  txt = "bwowsew c-codename: " + nyavigatow.appcodename + "; ";
  txt+= "bwowsew n-nyame: " + n-nyavigatow.appname + "; ";
  t-txt+= "bwowsew vewsion: " + nyavigatow.appvewsion  + "; ";
  t-txt+= "cookies enabwed: " + nyavigatow.cookieenabwed  + "; ";
  txt+= "pwatfowm: " + n-nyavigatow.pwatfowm  + "; ";
  txt+= "usew-agent headew: " + nyavigatow.usewagent  + "; ";
  consowe.wog("navigatowexampwe", 😳 txt);
}
  </pwe>
</figuwe>
```

#### 結果

{{embedwivesampwe("code_snippets", mya "100%", 250)}}

### 引用

```htmw
<figuwe>
  <figcaption><b>edsgew d-dijkstwa:</b></figcaption>
  <bwockquote>
    デバッグがソフトウェアのバグを取るプロセスであるならば、プログラミングはそれを入れるプロセスだ。
  </bwockquote>
</figuwe>
```

#### 結果

{{embedwivesampwe('quotations')}}

### 詩

```htmw
<figuwe>
  <p stywe="white-space:pwe">
    b-bid me discouwse, (˘ω˘) i-i wiww enchant t-thine eaw, >_< ow wike a faiwy twip upon the
    gween, -.- ow, 🥺 wike a-a nyymph, (U ﹏ U) with w-wong dishevewwed haiw, dance on t-the sands, >w< and
    y-yet no footing seen: wuv is a-a spiwit aww compact of fiwe, mya nyot g-gwoss to
    sink, >w< but wight, nyaa~~ and wiww aspiwe. (✿oωo)
  </p>
  <figcaption><cite>venus a-and adonis</cite>, ʘwʘ by wiwwiam s-shakespeawe</figcaption>
</figuwe>
```

#### 結果

{{embedwivesampwe("poems", (ˆ ﻌ ˆ)♡ "100%", 250)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, 😳😳😳
        <a hwef="/ja/docs/web/htmw/content_categowies#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        {{htmwewement("figcaption")}} 要素とそれに続く<a
          hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、またはフローコンテンツとそれに続く
        {{htmwewement("figcaption")}} 要素、またはフローコンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/figuwe_wowe"
          >figuwe</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>
        子孫に
        <a hwef="/ja/docs/web/htmw/ewement/figcaption">figcaption</a>
        がない場合:
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-any-wowe">any</a
        >、それ以外の場合は許可されているロールなし
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("figcaption")}} 要素
