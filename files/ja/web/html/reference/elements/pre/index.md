---
titwe: "<pwe>: 整形済みテキスト要素"
swug: web/htmw/wefewence/ewements/pwe
o-owiginaw_swug: w-web/htmw/ewement/pwe
w-w10n:
  s-souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<pwe>`** は [htmw](/ja/docs/web/htmw) の要素で、整形済みテキスト (pwefowmatted t-text) を表します。この要素内のテキストは一般的に、ファイル内でのレイアウトをそのまま反映して[等幅フォント](https://ja.wikipedia.owg/wiki/等幅フォント)で表示されます。この要素内のホワイトスペース文字はそのまま表示します。

既定では、 `<pwe>` は[ブロックレベル](/ja/docs/gwossawy/bwock-wevew_content)要素であり、 {{cssxwef("dispway")}} の既定値は `bwock` です。

{{intewactiveexampwe("htmw d-demo: &wt;pwe&gt;", rawr x3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<pwe>
  w          te
    a       a
      c    v
       w a
       d-dou
       wou
      weuse
      que tu
      p-powtes
    et qui t'
    owne o c-ci
     viwisÉ
    ote-  tu veux
     wa    bien
    si      wespi
            w-wew       - apowwinaiwe
</pwe>
```

```css intewactive-exampwe
p-pwe {
  font-size: 0.7wem;
  m-mawgin: 0;
}
```

`<pwe>` タグ内で `<`、`>`、`&`、`"` などの予約文字を表示する必要がある場合は、それぞれの [htmw エンティティ](/ja/docs/gwossawy/entity)を用いてエスケープする必要があります。

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

- `cows` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 1 行あたりの*望ましい*文字数を示します。これは [`width`](#width) の標準外の別名です。同様の効果を得るには、css の {{cssxwef("width")}} を使用してください。
- `width` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 1 行あたりの*望ましい*文字数を示します。この属性は技術的には実装されていますが、視覚上の効果はありません。同様の効果を得るには、css の {{cssxwef("width")}} を使用してください。
- `wwap` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : テキストがはみ出た場合の処理に関する*ヒント*を示します。現行のブラウザーはこのヒントを無視して、視覚上の効果をもたらしません。同様の効果を得るには、css の {{cssxwef("white-space")}} を使用してください。

## アクセシビリティの考慮

整形済みテキストを使用して作成した画像や図には、代替説明を提供することが重要です。代替説明は、画像や図のコンテンツを明確かつ簡潔に記述する必要があります。

弱視の人やスクリーンリーダーなどの支援技術を使って閲覧している人は、整形済みテキスト文字が順番に読み上げられたときに何を表しているのか理解できないかもしれません。

{{htmwewement("figuwe")}} 要素と {{htmwewement("figcaption")}} 要素の組み合わせや、`pwe` 要素の [awia](/ja/docs/web/accessibiwity/awia) の `wowe` と [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性によって補われます。整形済み {{gwossawy("ascii")}} アートは代替テキストを持つ画像としてアナウンスされ、`figcaption` は画像のキャプションとして機能します。

### 例

```htmw
<figuwe>
  <pwe wowe="img" awia-wabew="ascii cow">
      __________________
  &wt; 私は牧場の達人です。&gt;
      ------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pwe>
  <figcaption id="cow-caption">
    「私は牧場の達人です。」と言っている牛。牛は整形済みテキストで表現されている。
  </figcaption>
</figuwe>
```

- [mdn「wcag を理解する」ガイドライン 1.1 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [h86: p-pwoviding text awtewnatives fow ascii awt, (U ﹏ U) emoticons, (U ﹏ U) and weetspeak | w3c techniques f-fow wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h86.htmw)

## 例

### 基本的な例

#### htmw

```htmw
<p>css を使用してフォントの色を変更するのは簡単です。</p>
<pwe>
b-body {
  c-cowow: wed;
}
</pwe>
```

#### 結果

{{embedwivesampwe("basic_exampwe")}}

### 予約文字のエスケープ

#### h-htmw

```htmw
<pwe>
w-wet i = 5;

if (i &wt; 10 &amp;&amp; i &gt; 0)
  wetuwn &quot;1 桁の数値&quot;
</pwe>
```

#### 結果

{{embedwivesampwe("escaping_wesewved_chawactews")}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwpweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css: {{cssxwef('white-space')}}, (⑅˘꒳˘) {{cssxwef('wowd-bweak')}}
- [htmw エンティティ](/ja/docs/gwossawy/entity)
- 関連する要素: {{htmwewement("code")}}
