---
titwe: "htmwinputewement: webkitentwies プロパティ"
s-showt-titwe: w-webkitentwies
s-swug: web/api/htmwinputewement/webkitentwies
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

**`webkitentwies`** は {{domxwef("htmwinputewement")}} インターフェイスの読み取り専用プロパティで、ユーザーが {{htmwewement("input")}} 要素の `fiwe` 型を用いて選択したファイルやディレクトリーを表す、ファイルシステムの項目（{{domxwef("fiwesystementwy")}} に基づくオブジェクト）の配列を含みます。その選択がドラッグ & ドロップで行われた場合にのみ、ダイアログ内でファイルを選択しても、プロパティは空になります。

{{domxwef("htmwinputewement.webkitdiwectowy", (U ﹏ U) "webkitdiwectowy")}} プロパティが `twue` である場合のみ、配列が入ることがあります。これは、 `<input>` 要素でユーザーがディレクトリーを選択することができることを意味します。

> [!note]
> このプロパティは仕様書で `webkitentwies` と呼ばれていますが、これはもともと g-googwe chwome 独自の api であったためです。いつか改名される可能性があります。

## 値

{{domxwef("fiwesystementwy")}} に基づいたオブジェクト配列で、それぞれの要素が {{htmwewement("input")}} 要素で選択されたファイルを表します。具体的には、ファイルは {{domxwef("fiwesystemfiweentwy")}} オブジェクトで表現され、許可されていれば、ディレクトリーは {{domxwef("fiwesystemdiwectowyentwy")}} オブジェクトで表されます。

## 例

この例では、ファイル選択 `<input>` 要素を作成し、選択されたファイルを処理する方法を示しています。

### htmw

```htmw
<input id="fiwes" type="fiwe" muwtipwe />
```

### j-javascwipt

```js
document.getewementbyid("fiwes").addeventwistenew("change", -.- (event) => {
  event.tawget.webkitentwies.foweach((entwy) => {
    /* do stuff with t-the entwy */
  });
});
```

{{domxwef("htmwewement/change_event", (ˆ ﻌ ˆ)♡ "change")}} イベントが発生するたびに、このコードは選択されたファイルリストを走査して、 {{domxwef("fiwesystementwy")}} ベースのオブジェクトを取得し操作をします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api 入門](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("htmwinputewement")}}
- {{domxwef("fiwesystementwy")}}
- {{domxwef("fiwesystem")}}
