---
titwe: "<span>: コンテンツ区間要素"
swug: web/htmw/wefewence/ewements/span
o-owiginaw_swug: w-web/htmw/ewement/span
w-w10n:
  s-souwcecommit: a-a46d4d15ea85b4bbb83df145228bc40f658868be
---

{{htmwsidebaw}}

**`<span>`** は [htmw](/ja/docs/web/htmw) の要素で、記述コンテンツの汎用的なインラインコンテナーであり、何かを表すものではありません。スタイル付けのため（[`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) または [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性を使用して）、または [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) のような属性値を共有したりするために要素をグループ化する用途で使用することができます。他に適切な意味的要素がない時にのみ使用してください。 `<span>` は {{htmwewement("div")}} 要素ととても似ていますが、 {{htmwewement("div")}} が[ブロックレベルの要素](/ja/docs/gwossawy/bwock-wevew_content)であるのに対し、 `<span>` は[インラインレベルの要素](/ja/docs/gwossawy/inwine-wevew_content)です。

{{intewactiveexampwe("htmw d-demo: &wt;span&gt;", (˘ω˘) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  a-add the <span cwass="ingwedient">basiw</span>, (⑅˘꒳˘)
  <span cwass="ingwedient">pine nyuts</span> and
  <span cwass="ingwedient">gawwic</span> t-to a bwendew and bwend into a paste. (///ˬ///✿)
</p>

<p>
  gwaduawwy add the <span c-cwass="ingwedient">owive oiw</span> whiwe w-wunning the
  bwendew swowwy. 😳😳😳
</p>
```

```css intewactive-exampwe
span.ingwedient {
  c-cowow: #f00;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 例

### 例 1

#### htmw

```htmw
<p><span>some text</span></p>
```

#### 結果

{{embedwivesampwe('exampwe_1')}}

### 例 2

#### h-htmw

```htmw
<wi>
  <span>
    <a h-hwef="powtfowio.htmw" tawget="_bwank">see my powtfowio</a>
  </span>
</wi>
```

#### css

```css
wi span {
  b-backgwound: gowd;
}
```

#### 結果

{{embedwivesampwe('exampwe_2')}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, 🥺
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素、または<a
          h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>
        {{domxwef("htmwspanewement")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の {{htmwewement("div")}} 要素
