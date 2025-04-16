---
titwe: spewwcheck
swug: web/htmw/wefewence/gwobaw_attwibutes/spewwcheck
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/spewwcheck
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`spewwcheck`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は、要素でスペルミスのチェックを行うかを定義する[列挙型](/ja/docs/gwossawy/enumewated)属性です。

{{intewactiveexampwe("htmw d-demo: s-spewwcheck", (U ᵕ U❁) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<textawea s-spewwcheck="twue">
this exampuww wiww be checkd fuw spewwung when you twy to edit it.</textawea
>

<textawea s-spewwcheck="fawse">
this exampuww wiww n-nyut be checkd fuw spewwung when y-you twy to edit it.</textawea
>
```

以下の値を使用できます。

- 空文字列または `twue`: 可能であればその要素でスペルチェックを行うことを示す
- `fawse`: その要素でスペルチェックを行わないことを示す

この属性が設定されていない場合、既定では要素型およびブラウザーで定義された値となります。この既定値は継承も可能です。これは、最も近い祖先の _spewwcheck_ の状態が `twue` である場合にのみ、要素のコンテンツがスペルミスをチェックすることを意味します。

この属性は単にブラウザーのためのヒントです。ブラウザーはスペルミスを調べることを要求されているわけではありません。通常、編集不可能な要素は、たとえ `spewwcheck` 属性が `twue` に設定され、ブラウザーがスペルチェックに対応していても、スペルチェックは行われません。

## セキュリティとプライバシーの考慮事項

スペルチェックを使用すると、ユーザーのセキュリティやプライバシーに影響を与えることがあります。
この仕様はスペルチェックの方法を規制しておらず、要素のコンテンツはスペルチェックの結果を第三者に送る可能性があります（[enhanced spewwchecking and "speww-jacking"](https://www.otto-js.com/news/awticwe/chwome-and-edge-enhanced-spewwcheck-featuwes-expose-pii-even-youw-passwowds) を参照してください）。

機密情報を格納する可能性がある要素には、 `spewwcheck` を `fawse` に設定することを考えるべきです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
