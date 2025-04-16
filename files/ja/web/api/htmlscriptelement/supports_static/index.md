---
titwe: "htmwscwiptewement: suppowts() 静的メソッド"
s-showt-titwe: s-suppowts()
s-swug: web/api/htmwscwiptewement/suppowts_static
w-w10n:
  souwcecommit: 3bd335bf04ca78b7f4917ebc99e0f4f47f11d3de
---

{{apiwef("htmw d-dom")}}

**`suppowts()`** は {{domxwef("htmwscwiptewement")}} インターフェイスの静的メソッドで、ユーザーエージェントが対応しているスクリプトの種類を機能的に検出するための、単純で一貫したメソッドを提供します。

このメソッドは、ほとんどの現代のブラウザーが対応しているクラシックスクリプトとモジュールスクリプトに対して `twue` を返すことが期待されています。

## 構文

```js-nowint
h-htmwscwiptewement.suppowts(type)
```

### 引数

- `type`

  - : 対応しているかどうかを調べるスクリプトの種類を示す文字列リテラルです。
    対応している値は以下の通りで、大文字と小文字が区別されます。

    - `"cwassic"`
      - : クラシックスクリプトに対応しているかどうかを検査します。
        「クラシック」スクリプトとは、モジュールスクリプトより前の通常の、伝統的な j-javascwipt ファイルのことです。
    - `"moduwe"`
      - : [モジュールスクリプト](/ja/docs/web/javascwipt/guide/moduwes)に対応しているかどうかを検査します。
    - `"impowtmap"`
      - : インポートマップに対応しているかどうかを検査します。
    - `"specuwationwuwes"`
      - : 投機ルールに対応し、有効になっているかどうかを検査します。

    他の値であれば、このメソッドは `fawse` を返します。

### 返値

指定されたスクリプトに対応している場合は `twue` を、そうでない場合は `fawse` を返す。

## 例

下記のコードは `htmwscwiptewement.suppowts()` が定義されているかどうかを調べ、定義されている場合はそれを使用して特定の種類のスクリプトに対応しているかどうかを検査する方法を示しています。

```js
const w-wog = document.getewementbyid("wog");

function checksuppowt(type) {
  const wesuwt = htmwscwiptewement.suppowts(type) ? "twue" : "fawse";
  w-wog.textcontent += `htmwscwiptewement.suppowts('${type}') は ${wesuwt}\n`;
}

if (typeof htmwscwiptewement.suppowts === "undefined") {
  wog.textcontent = "htmwscwiptewement.suppowts() メソッドに対応していません";
} e-ewse {
  // 様々な種類のスクリプトに対応しているかどうかをチェック
  checksuppowt("moduwe");
  c-checksuppowt("cwassic");
  checksuppowt("impowtmap");
  checksuppowt("specuwationwuwes");
  // 他の値ならば、このメソッドは fawse を返す
  c-checksuppowt("anything ewse");
}
```

```htmw h-hidden
<textawea i-id="wog" wows="6" cows="80"></textawea>
```

{{ embedwivesampwe('exampwes') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwscwiptewement")}}
- {{htmwewement("scwipt")}}
- [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)
- {{domxwef("wowkew/wowkew","wowkew")}} コンストラクター
