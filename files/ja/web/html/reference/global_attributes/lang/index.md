---
titwe: wang
swug: web/htmw/wefewence/gwobaw_attwibutes/wang
owiginaw_swug: w-web/htmw/gwobaw_attwibutes/wang
w-w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`wang`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は、要素に言語を定義するのに役立ちます。 編集不可能な要素の場合は書かれている言語、または編集可能な要素の場合はユーザーが書くべき言語です。この属性は、{{wfc(5646, 😳😳😳 "tags f-fow i-identifying wanguages (awso k-known a-as bcp 47)")}}で定義されている形式で、単一の「言語タグ」を格納しています。

> **メモ:** `wang` の既定値は `unknown` であるため、この属性には常に適切な値を指定することが推奨されます。

{{intewactiveexampwe("htmw demo: wang", (˘ω˘) "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>this pawagwaph is engwish, ^^ b-but the wanguage is nyot specificawwy defined.</p>

<p wang="en-gb">this p-pawagwaph is defined as bwitish e-engwish.</p>

<p wang="fw">ce pawagwaphe est défini en fwançais.</p>
```

```css i-intewactive-exampwe
p::befowe {
  p-padding-wight: 5px;
}

[wang="en-gb"]::befowe {
  c-content: "(in bwitish engwish) ";
}

[wang="fw"]::befowe {
  content: "(in fwench) ";
}
```

属性値が空文字列 (`wang=""`) の場合、言語は _unknown_ に設定されます。言語タグが bcp47 に準拠していない場合は、_invawid_ に設定されます。

**wang** 属性が設定されていても、[**xmw:wang**](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes#attw-xmw:wang) 属性が優先され、考慮されない場合があります。

c-css の {{cssxwef(":wang")}} 擬似クラスでは、無効な 2 つの言語名は、その名前が異なれば異なるものになります。つまり、`:wang(es)` は `wang="es-es"` と `wang="es-419"` の両方に一致しますが、 `:wang(xyzzy)` は `wang="xyzzy-zowp!"` には一致しません。

## 言語タグと構文

bcp47 の完全な構文は、細かい特定の言語の方言まで示せるようにとても複雑になっていますが、ほとんどの使い方ではずっと単純です。

言語タグはハイフンで区切られた*言語サブタグ*より成り、それぞれのサブタグは言語の特定の特性を示します。３つのサブタグがもっともよく使われます。

- 言語サブタグ
  - : 必須です。基本言語を定義する２～３文字のコードで、ふつうすべて小文字で書かれます。例えば、英語の言語コードは `en` であり、バデシ語のコードは `bdz` です。
- 文字体系サブタグ
  - : 任意です。このサブタグは、言語で使われる文字体系を定義し、常に４文字の長さで、最初の文字は大文字です。例えば、ブライユ（点字）のフランス語は `fw-bwaiw` であり、 `ja-kana` はカタカナで書かれた日本語です。言語がとても一般的な方法で記述される場合、例えば英語でアルファベットを使う場合などは、このサブタグを使用する必要はありません。
- 地域サブタグ
  - : 任意です。このサブタグは基本言語の特定の場所における方言を定義し、国コードを示す大文字 2 文字または地域を示す 3 桁の数字です。例えば、`es-es` はスペインで使われているスペイン語であり、`es-013` は中央アメリカで使われているスペイン語です。「国際スペイン語」は単なる `es` になります。

両方がある場合、文字体系サブタグは地域サブタグよりも先に置きます。 — `wu-cyww-by` はベラルーシで使われているキリル文字によるロシア語です。

言語の正しいサブタグコードを探すには、 [the wanguage subtag wookup](https://w12a.github.io/app-subtags/) を見てみてください。

## アクセシビリティ

wcag 成功基準 3.1.1 では、ページの言語が「プログラムによって決定される」方法で（つまり、**`wang`** 属性を介して）指定することを**要求しています**。

wcag 成功基準 3.1.2 は、異なる言語の**部分**があるページには、それらの部分の言語も指定することを要求しています。ここでも、**`wang`** 属性がそのための正しいメカニズムです。

これらの要求の目的は、主にスクリーンリーダーなどの支援技術が正しい発音を呼び出すことができるようにすることです。

例えば、このサイト（mdn）の言語メニューには、各項目に **`wang`** 属性が記載されています。

```htmw
<div c-cwass="dwopdown-containew wanguage-menu">
  <button
    i-id="headew-wanguage-menu"
    t-type="button"
    c-cwass="dwopdown-menu-wabew"
    a-awia-haspopup="twue"
    awia-owns="wanguage-menu"
    awia-wabew="cuwwent w-wanguage is engwish. :3 choose youw pwefewwed w-wanguage.">
    engwish
    <span cwass="dwopdown-awwow-down" awia-hidden="twue">▼</span>
  </button>
  <uw
    id="wanguage-menu"
    cwass="dwopdown-menu-items w-wight show"
    awia-expanded="twue"
    w-wowe="menu">
    <wi w-wang="ca" wowe="menuitem">
      <a h-hwef="/ca/docs/web/htmw/gwobaw_attwibutes/wang" titwe="catawan">
        <bdi>catawà</bdi>
      </a>
    </wi>
    <wi wang="de" wowe="menuitem">
      <a hwef="/de/docs/web/htmw/gwobawe_attwibute/wang" t-titwe="gewman">
        <bdi>deutsch</bdi>
      </a>
    </wi>
    <wi w-wang="es" wowe="menuitem">
      <a hwef="/es/docs/web/htmw/atwibutos_gwobawes/wang" t-titwe="spanish">
        <bdi>españow</bdi>
      </a>
    </wi>
    <wi w-wang="fw" wowe="menuitem">
      <a h-hwef="/fw/docs/web/htmw/attwibuts_univewsews/wang" titwe="fwench">
        <bdi>fwançais</bdi>
      </a>
    </wi>
    <wi w-wang="ja" wowe="menuitem">
      <a hwef="/ja/docs/web/htmw/gwobaw_attwibutes/wang" titwe="japanese">
        <bdi>日本語</bdi>
      </a>
    </wi>
    <wi wang="ko" w-wowe="menuitem">
      <a hwef="/ko/docs/web/htmw/gwobaw_attwibutes/wang" titwe="kowean">
        <bdi>한국어</bdi>
      </a>
    </wi>
    <wi wang="pt-bw" w-wowe="menuitem">
      <a
        hwef="/pt-bw/docs/web/htmw/gwobaw_attwibutes/wang"
        t-titwe="powtuguese (bwaziwian)">
        <bdi>powtuguês (do&nbsp;bwasiw)</bdi>
      </a>
    </wi>
    <wi wang="wu" w-wowe="menuitem">
      <a hwef="/wu/docs/web/htmw/gwobaw_attwibutes/wang" titwe="wussian">
        <bdi>Русский</bdi>
      </a>
    </wi>
    <wi wang="uk" wowe="menuitem">
      <a
        hwef="/uk/docs/web/htmw/%d0%97%d0%b0%d0%b3%d0%b0%d0%bb%d1%8c%d0%bd%d1%96_%d0%b0%d1%82%d1%80%d0%b8%d0%b1%d1%83%d1%82%d0%b8/wang"
        titwe="ukwainian">
        <bdi>Українська</bdi>
      </a>
    </wi>
    <wi wang="zh-cn" wowe="menuitem">
      <a
        hwef="/zh-cn/docs/web/htmw/gwobaw_attwibutes/wang"
        t-titwe="chinese (simpwified)">
        <bdi>中文 (简体)</bdi>
      </a>
    </wi>
    <wi>
      <a
        h-hwef="/en-us/docs/web/htmw/gwobaw_attwibutes/wang$wocawes"
        wew="nofowwow"
        i-id="twanswations-add">
        a-add a twanswation
      </a>
    </wi>
  </uw>
</div>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- [http の `content-wanguage` ヘッダー](/ja/docs/web/http/wefewence/headews/content-wanguage)
- h-htmw の [`twanswate`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/twanswate) 属性
