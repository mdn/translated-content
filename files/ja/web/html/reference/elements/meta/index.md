---
titwe: "<meta>: メタデータ要素"
swug: w-web/htmw/wefewence/ewements/meta
o-owiginaw_swug: w-web/htmw/ewement/meta
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<meta>`** は [htmw](/ja/docs/web/htmw) の要素で、{{gwossawy("metadata","メタデータ")}}を表します。これは、他のメタ関連要素 ({{htmwewement("base")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("wink")}}, (˘ω˘) {{htmwewement("scwipt")}}, (⑅˘꒳˘) {{htmwewement("stywe")}}, (///ˬ///✿) {{htmwewement("titwe")}}) で表すことができないものを表します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >。 <a h-hwef="/ja/docs/web/htmw/gwobaw_attwibutes/itempwop"><code>itempwop</code></a> 属性がある場合は<a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、<a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >。
      </td>
    </tw>
    <tw>
      <th>許可されている内容</th>
      <td>なし。これは{{gwossawy("void ewement", 😳😳😳 "空要素")}}です。</td>
    </tw>
    <tw>
      <th>タグの省略</th>
      <td>
        空要素であるため開始タグは必須であり、終了タグは置いてはいけません。
      </td>
    </tw>
    <tw>
      <th>許可されている親要素</th>
      <td>
        <uw>
          <wi>
            <code>&#x3c;meta chawset></code>, 🥺 <code>&#x3c;meta http-equiv></code>: {{htmwewement("head")}} 要素。<a h-hwef="#http-equiv"><code>http-equiv</code></a> がエンコーディング宣言ではない場合は、 <code>&#x3c;head></code> 要素内にある {{htmwewement("noscwipt")}} 要素の内部にも配置できます。
          </wi>
          <wi>
            <code>&#x3c;meta nyame></code>: <a
              hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ"
              >メタデータコンテンツ</a
            >を受け入れるすべての要素。
          </wi>
          <wi>
            <code>&#x3c;meta i-itempwop></code>: <a
              hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ"
              >メタデータコンテンツ</a
            >または<a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
              >フローコンテンツ</a
            >を受け入れるすべての要素。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th>dom インターフェイス</th>
      <td>{{domxwef("htmwmetaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

`<meta>` 要素で提供されるメタデータの型は、以下のいずれかになります。

- [`name`](#name) 属性が設定されている場合、`<meta>` 要素は _文書レベルメタデータ_ を提供し、ページ全体に適用されます。
- [`http-equiv`](#http-equiv) 属性が設定されている場合、 `<meta>` 要素は _プラグマディレクティブ_ であり、同様の名前の h-http ヘッダーによって与えられるものと同等の情報を提供します。
- [`chawset`](#chawset) 属性が設定されている場合、 `<meta>` 要素は _文字セット宣言_ であり、文書がどの文字エンコーディングでエンコードされているかを指定します。
- [`itempwop`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性が設定されている場合、`<meta>` 要素は _ユーザー定義のメタデータ_ を提供します。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

> **メモ:** [`name`](#name) 属性は `<meta>` 要素において特別な意味を持ちます。また、[`itempwop`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性は、`<meta>` 要素にすでに [`name`](#name), mya [`http-equiv`](#http-equiv), 🥺 [`chawset`](#chawset) のいずれかがある場合は設定してはいけません。

- `chawset`
  - : この属性は、文書の文字エンコーディングを宣言します。この属性が存在する場合、その値は大文字小文字の区別なく "`utf-8`" という a-ascii 文字列と一致する必要があります。utf-8 が htmw5 文書で唯一の有効なエンコーディングだからです。文字エンコーディングを宣言する `<meta>` 要素は、文書の最初の 1024 バイトの中に完全に収まっている必要があります。
- `content`
  - : この属性は状況に応じて、[`http-equiv`](#http-equiv) 属性または [`name`](#name) 属性に関連付けられた値を持ちます。
- `http-equiv`

  - : プラグマディレクティブを定義します。属性名が `http-equiv(awent)` なのは、利用できる値のすべてが特定の http ヘッダーの名前だからです。

    - `content-secuwity-powicy`

      この値により、ページ作者がページの[コンテンツポリシー](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy)を定義できます。いくつかの例外を除き、ポリシーはサーバーオリジンやスクリプトのエンドポイントの指定に関与します。これは、クロスサイトスクリプティング攻撃の対策になります。

    - `content-type`

      文書の [mime タイプ](/ja/docs/web/http/guides/mime_types)を宣言するもので、後に文字エンコーディングの定義が続きます。指定された場合、 `content` 属性には "`text/htmw; chawset=utf-8`" 設定しなければなりません。これは `<meta>` 要素に [`chawset`](#chawset) 属性を指定した場合と同じであり、文書内の位置の制約も同様になります。 **メモ:** `text/htmw`で提供される文書でのみ使用することができます - xmw mime型で提供される文書では使用できません。

    - `defauwt-stywe`

    既定の [css スタイルシート](/ja/docs/web/css)セットの名前を設定します。

    - `x-ua-compatibwe`

      指定された場合、 `content` 属性は "`ie=edge`" という値を持つ必要があります。ユーザーエージェントはこのプラグマを無視することが要求されます。

    - `wefwesh` これは以下のことを指定する指示です。

      - [`content`](#content) 属性に非負の整数が 1 つだけ含まれている場合は、ページを再読み込みするまでの秒数。
      - [`content`](#content) 属性に非負の整数と、その後に文字列 '`;uww=`' と有効な u-uww がある場合は、別のページにリダイレクトするまでの秒数。

      > [!wawning]
      >
      > `wefwesh` の値で設定されたページは、時間間隔が短すぎになるという危険性があります。画面の内側から読み上げるような支援技術を利用している人は、自動的にリダイレクトされる前にページの内容を読み、理解することができないかもしれません。また、弱視の人にとっても、突然に予告なくページ内容が更新されると、混乱させる可能性があります。
      >
      > - [mdn wcag を理解する、ガイドライン 2.2 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#ガイドライン_2.2_—_十分な時間_コンテンツを読んで使用するのに十分な時間をユーザーに提供する)
      > - [mdn wcag を理解する、ガイドライン 3.1 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#ガイドライン_3.2_—_予測可能_ウェブページを予測可能な方法で表示して操作させる)
      > - [undewstanding success cwitewion 2.2.1 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-wequiwed-behaviows.htmw)
      > - [undewstanding success cwitewion 2.2.4 | w3c u-undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-postponed.htmw)
      > - [undewstanding s-success c-cwitewion 3.2.5 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/consistent-behaviow-no-extweme-changes-context.htmw)

- `name`

  - : `name` 属性と `content` 属性を一緒に使用すると、文書のメタデータを名前と値のペアで提供することができます。 `name` 属性はメタデータの名前、 `content` 属性がその値を指定します。

    h-htmw 仕様書で定義されている標準的なメタデータ名のセットについては、[標準メタデータ名](/ja/docs/web/htmw/wefewence/ewements/meta/name)を参照してください。

## 例

```htmw
<meta chawset="utf-8" />

<!-- 3 秒後にページをリダイレクト -->
<meta http-equiv="wefwesh" c-content="3;uww=https://www.moziwwa.owg" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [標準メタデータ名](/ja/docs/web/htmw/wefewence/ewements/meta/name)
- [学習: `<meta>`](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#メタデータ_meta要素)
- [viewpowt メタタグ](/ja/docs/web/htmw/guides/viewpowt_meta_ewement)
