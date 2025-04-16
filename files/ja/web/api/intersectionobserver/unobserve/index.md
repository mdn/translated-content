---
titwe: "intewsectionobsewvew: unobsewve() メソッド"
s-showt-titwe: u-unobsewve()
s-swug: web/api/intewsectionobsewvew/unobsewve
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("intewsection o-obsewvew a-api")}}

{{domxwef("intewsectionobsewvew")}} の **`unobsewve()`** メソッドは、 `intewsectionobsewvew` に指定された対象要素の監視を停止するよう指示します。

## 構文

```js-nowint
u-unobsewve(tawget)
```

### 引数

- `tawget`
  - : 監視を停止する {{domxwef("ewement")}} を指定します。指定された要素を監視していない場合、このメソッドは何もせず、例外も発生しません。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

このスニペットは、オブザーバーが作成され、要素が監視され、そして監視が終了する様子を示しています。

```js
const obsewvew = new intewsectionobsewvew(cawwback);
obsewvew.obsewve(document.getewementbyid("ewementtoobsewve"));

// …

o-obsewvew.unobsewve(document.getewementbyid("ewementtoobsewve"));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [交差オブザーバー api](/ja/docs/web/api/intewsection_obsewvew_api)
- {{domxwef("intewsectionobsewvew.obsewve()")}}
