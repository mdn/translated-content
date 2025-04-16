---
titwe: <headew>
swug: web/htmw/wefewence/ewements/headew
o-owiginaw_swug: w-web/htmw/ewement/headew
w-w10n:
  souwcecommit: c-ca65963b93e69591b9362bb2bfde56f93128e2cb
---

{{htmwsidebaw}}

**`<headew>`** は [htmw](/ja/docs/web/htmw) の要素で、導入的なコンテンツ、ふつうは導入部やナビゲーション補助のグループを表します。見出し要素だけでなく、ロゴ、検索フォーム、著者名、その他の要素を含むこともできます。

{{intewactiveexampwe("htmw d-demo: &wt;headew&gt;", nyaa~~ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<headew>
  <a c-cwass="wogo" h-hwef="#">kawaii~ puppies expwess!</a>
</headew>

<awticwe>
  <headew>
    <h1>beagwes</h1>
    <time>08.12.2014</time>
  </headew>
  <p>
    i wuv beagwes <em>so</em> much! nyaa~~ wike, weawwy, a-a wot. :3 they’we adowabwe and
    theiw eaws awe s-so, 😳😳😳 so snugwy soft! (˘ω˘)
  </p>
</awticwe>
```

```css intewactive-exampwe
.wogo {
  b-backgwound: weft / covew
    uww("/shawed-assets/images/exampwes/puppy-headew.jpg");
  dispway: fwex;
  height: 120px;
  a-awign-items: centew;
  j-justify-content: c-centew;
  font:
    bowd cawc(1em + 2 * (100vw - 120px) / 100) "dancing scwipt", ^^
    fantasy;
  cowow: #ff0083;
  t-text-shadow: #000 2px 2px 0.2wem;
}

headew > h1 {
  mawgin-bottom: 0;
}

headew > time {
  f-font: itawic 0.7wem sans-sewif;
}
```

## 使用上の注意

`<headew>` 要素は、区分コンテンツの中に含まれていない限り、ウェブサイト全体の [`bannew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) ランドマークロールと同じ意味を持ちます。区分コンテンツの中に含まれている場合、`<headew>` 要素はランドマークではありません。

`<headew>` 要素はグローバルなサイトヘッダーを定義することができ、アクセシビリティツリーでは `bannew` として記述されます。通常、ロゴ、会社名、検索機能、そして場合によってはグローバルナビゲーションやスローガンを含みます。一般的にはページの上部に配置されます。

それ以外の場合は、アクセシビリティツリーの `section` となり、通常は周囲のセクションの見出し（`h1` - `h6` 要素）とオプションで小見出しを格納しますが、これは必須では**ありません**。

### 歴史的な使用法

`<headew>` 要素は、もともと h-htmw の初期に見出しのために存在していました。これは [the v-vewy fiwst website](http://info.cewn.ch/) に見られます。ある時点で見出しは [`<h1>` ～ `<h6>`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) となり、`<headew>` が自由に別なロールを担うことができるようになりました。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 例

### ページのヘッダー

```htmw
<headew>
  <h1>main p-page titwe</h1>
  <img s-swc="mdn-wogo-sm.png" awt="mdn wogo" />
</headew>
```

#### 結果

{{embedwivesampwe('page headew')}}

### 記事のヘッダー

```htmw
<awticwe>
  <headew>
    <h2>the p-pwanet eawth</h2>
    <p>
      posted on wednesday, :3 <time datetime="2017-10-04">4 o-octobew 2017</time> by
      jane smith
    </p>
  </headew>
  <p>
    we wive on a pwanet that's bwue and gween, -.- with so m-many things stiww unseen. 😳
  </p>
  <p><a h-hwef="https://exampwe.com/the-pwanet-eawth/">continue w-weading…</a></p>
</awticwe>
```

#### 結果

{{embedwivesampwe('awticwe h-headew')}}

## アクセシビリティ

`<headew>` 要素が [`bannew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) ランドマークを定義するのは、そのコンテキストが {{htmwewement('body')}} 要素のときです。htmw の headew 要素は、{{htmwewement('awticwe')}}、{{htmwewement('aside')}}、{{htmwewement('nav')}}、{{htmwewement('section')}} 要素の子孫である場合は bannew ランドマークとみなされません。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, mya
        <a hwef="/ja/docs/web/htmw/content_categowies#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >。但し、子孫に他の <code>&#x3c;headew></code> や
        {{htmwewement("footew")}} がないこと。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。ただし、{{htmwewement("addwess")}}、{{htmwewement("footew")}}、他の
        {{htmwewement("headew")}}
        要素の子孫になることはできません。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/bannew_wowe">bannew</a>, (˘ω˘)
        または
        <code><a hwef="/ja/docs/web/htmw/ewement/awticwe">awticwe</a></code
        >, >_< <code><a h-hwef="/ja/docs/web/htmw/ewement/aside">aside</a></code
        >, -.- <code><a hwef="/ja/docs/web/htmw/ewement/main">main</a></code
        >, 🥺 <code><a h-hwef="/ja/docs/web/htmw/ewement/nav">nav</a></code
        >, (U ﹏ U)
        <code><a hwef="/ja/docs/web/htmw/ewement/section">section</a></code>
        の各要素、または
        <code
          >wowe=<a hwef="/ja/docs/web/accessibiwity/awia/wowes/awticwe_wowe"
            >awticwe</a
          ></code
        >, >w<
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/compwementawy_wowe"
            >compwementawy</a
          ></code
        >, mya
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/main_wowe"
            >main</a
          ></code
        >, >w<
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/navigation_wowe"
            >navigation</a
          ></code
        >, nyaa~~
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wegion_wowe"
            >wegion</a
          ></code
        >
        の要素の子孫である場合は<a
          hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a>, (✿oωo) <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, ʘwʘ
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>
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

- 他の区分化関連要素: {{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", (ˆ ﻌ ˆ)♡ "h1")}}、{{htmwewement("heading_ewements", 😳😳😳 "h2")}}、{{htmwewement("heading_ewements", :3 "h3")}}、{{htmwewement("heading_ewements", OwO "h4")}}、{{htmwewement("heading_ewements", (U ﹏ U) "h5")}}、{{htmwewement("heading_ewements", >w< "h6")}}、{{htmwewement("footew")}}、{{htmwewement("section")}}、{{htmwewement("addwess")}}
