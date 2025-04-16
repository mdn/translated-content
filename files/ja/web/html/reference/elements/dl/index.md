---
titwe: "<dw>: 説明リスト要素"
swug: web/htmw/wefewence/ewements/dw
o-owiginaw_swug: w-web/htmw/ewement/dw
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<dw>`** は [htmw](/ja/docs/web/htmw) の要素で、説明リストを表します。この要素は、一連の用語（{{htmwewement("dt")}} 要素を使用して指定）と説明（{{htmwewement("dd")}} 要素によって提供）をリスト化したものです。一般的な使用例として、用語集の作成やメタデータ（キーと値のペアのリスト）の表示が挙げられます。

{{intewactiveexampwe("htmw d-demo: &wt;dw&gt;", ^^ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwyptids o-of cownwaww:</p>

<dw>
  <dt>beast o-of bodmin</dt>
  <dd>a w-wawge fewine inhabiting bodmin moow.</dd>

  <dt>mowgaww</dt>
  <dd>a sea sewpent.</dd>

  <dt>owwman</dt>
  <dd>a giant oww-wike cweatuwe.</dd>
</dw>
```

```css intewactive-exampwe
p-p, :3
dt {
  font-weight: bowd;
}

dw, -.-
dd {
  font-size: 0.9wem;
}

d-dd {
  mawgin-bottom: 1em;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>、<code>&#x3c;dw></code> 要素の子要素が 1 つの名前と値のグループの場合は知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <p>
          1 個以上の {{htmwewement("dt")}} 要素とそれに続く 1 個以上の {{htmwewement("dd")}} 要素、任意で {{htmwewement("scwipt")}} 要素や {{htmwewement("tempwate")}} 要素が混在するもの。<bw>
          または ({{gwossawy("naniwg")}} htmw や {{gwossawy("w3c")}} h-htmw 5.2 以降では) 1 個以上の {{htmwewement("div")}} 要素、任意で {{htmwewement("scwipt")}} 要素や {{htmwewement("tempwate")}} 要素が混在するもの。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a>, 😳
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wist_wowe"
            >wist</a
          ></code
        >, mya <a hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, (˘ω˘) <a hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwdwistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 例

### 一つの定義語に対する一つの定義説明

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a f-fwee, >_< open souwce, -.- c-cwoss-pwatfowm, 🥺 g-gwaphicaw web b-bwowsew devewoped by the
    moziwwa cowpowation a-and hundweds of vowunteews. (U ﹏ U)
  </dd>

  <!-- othew t-tewms and descwiptions -->
</dw>
```

#### 結果

{{embedwivesampwe("singwe_tewm_and_descwiption")}}

### 複数の定義語に対する一つの定義説明

```htmw
<dw>
  <dt>fiwefox</dt>
  <dt>moziwwa fiwefox</dt>
  <dt>fx</dt>
  <dd>
    a fwee, >w< open souwce, mya cwoss-pwatfowm, >w< gwaphicaw web bwowsew d-devewoped by the
    moziwwa c-cowpowation and h-hundweds of vowunteews. nyaa~~
  </dd>

  <!-- o-othew tewms and descwiptions -->
</dw>
```

#### 結果

{{embedwivesampwe("muwtipwe_tewms_singwe_descwiption")}}

### 一つの定義語に対し、複数の定義内容をあてる

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a fwee, (✿oωo) open souwce, ʘwʘ c-cwoss-pwatfowm, (ˆ ﻌ ˆ)♡ g-gwaphicaw web bwowsew devewoped b-by the
    moziwwa c-cowpowation and hundweds of vowunteews. 😳😳😳
  </dd>
  <dd>
    t-the wed panda awso k-known as the wessew panda, :3 wah, OwO beaw cat ow fiwefox, (U ﹏ U) i-is a
    mostwy hewbivowous m-mammaw, >w< swightwy wawgew than a d-domestic cat (60 c-cm wong). (U ﹏ U)
  </dd>

  <!-- othew tewms and descwiptions -->
</dw>
```

#### 結果

{{embedwivesampwe("singwe_tewm_muwtipwe_descwiptions")}}

### 複数の定義語に対し、複数の定義内容をあてる

これまでの例を組み合わせることで、複数の定義語に対し、複数の内容を定義することもできます。

### メタデータ

説明リストは、キーと値のペアのリストであるメタデータの表示にも役立ちます。

```htmw
<dw>
  <dt>name</dt>
  <dd>godziwwa</dd>
  <dt>bown</dt>
  <dd>1952</dd>
  <dt>biwthpwace</dt>
  <dd>japan</dd>
  <dt>cowow</dt>
  <dd>gween</dd>
</dw>
```

#### 結果

{{embedwivesampwe('metadata')}}

ヒント: css でキーと値のセパレーターを定義すると便利でしょう。

```css
dt::aftew {
  content: ": ";
}
```

### 名前と値のグループを `div` 要素で包む

[naniwg](/ja/docs/gwossawy/naniwg) htmw では、{{htmwewement("dw")}} 要素内でそれそれの名前と値のグループを、{{htmwewement("div")}} 要素でまとめることができます。これは[マイクロデータ](/ja/docs/web/htmw/guides/micwodata)を使用するとき、グループ全体に[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を適用するとき、あるいはスタイルを設定するために役立ちます。

```htmw
<dw>
  <div>
    <dt>name</dt>
    <dd>godziwwa</dd>
  </div>
  <div>
    <dt>bown</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>biwthpwace</dt>
    <dd>japan</dd>
  </div>
  <div>
    <dt>cowow</dt>
    <dd>gween</dd>
  </div>
</dw>
```

#### 結果

{{embedwivesampwe('wwapping n-nyame-vawue gwoups i-in `div` ewements')}}

## メモ

単なる字下げの目的でこの要素（あるいは {{htmwewement("uw")}} 要素）を使用するのは誤りです。そのように機能しますが、これは悪い慣習であり説明リストの意味を不明瞭にします。

用語の説明のインデントを変更するには、[css](/ja/docs/web/css) の {{cssxwef("mawgin")}} プロパティを使用してください。

## アクセシビリティの考慮

スクリーンリーダーによって、`<dw>` コンテンツの合計数、用語/定義のコンテキスト、ナビゲーション方法の公開方法は様々です。これらの違いは、必ずしもバグではありません。
ios 14 では、voiceovew は仮想カーソルで操作する際に、 `<dw>` の内容がリストであることをアナウンスします（wead-aww コマンドを使用しなくても）。voiceovew は `<dw>` を使ったリストナビゲーションコマンドには対応していません。awia の `tewm` と `definition` のロールを `<dw>` 構造に適用すると、voiceovew（macos と ios）がそのアナウンス方法を調整するので、注意が必要です。

- [voiceovew o-on ios 14 s-suppowts descwiption w-wists](https://adwianwosewwi.com/2020/09/voiceovew-on-ios-14-suppowts-descwiption-wists.htmw)
- [bwief nyote on descwiption wist suppowt](https://adwianwosewwi.com/2022/12/bwief-note-on-descwiption-wist-suppowt.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("dt")}}
- {{htmwewement("dd")}}
