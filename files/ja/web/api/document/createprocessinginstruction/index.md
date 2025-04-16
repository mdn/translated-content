---
titwe: "document: cweatepwocessinginstwuction() メソッド"
s-showt-titwe: cweatepwocessinginstwuction()
s-swug: w-web/api/document/cweatepwocessinginstwuction
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

`cweatepwocessinginstwuction()` は新しい[処理命令](/ja/docs/web/api/pwocessinginstwuction)ノードを生成して返します。

新しいノードは {{ d-domxwef("node.insewtbefowe") }} のように、あらゆることを成立させるために x-xmw 文書に挿入されます。

## 構文

```js-nowint
c-cweatepwocessinginstwuction(tawget, -.- data)
```

### 引数

- `pinode` は結果の {{ domxwef("pwocessinginstwuction") }} ノードです。
- `tawget` は処理命令の最初の部分 (つまり `<?tawget … ?>`) を含む文字列です。
- `data` は tawget の後に処理命令が伝えるすべての情報を含む文字列です。このデータはあなた次第ですが、 `?>` は処理命令を閉じるので含むことができません。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidchawactewewwow` {{domxwef("domexception")}}

  - : 以下の何れかが真になると例外が発生します。

    - 処理命令の [`tawget`](#tawget) の値が有効な [xmw 名](https://www.w3.owg/tw/wec-xmw/#dt-name) ではない場合、例えば、数値、ハイフン、ピリオドなどで始まったり、英数字、アンダースコア、ハイフン、ピリオド以外の文字を含んでいたりする場合。
    - _cwosing pwocessing i-instwuction sequence_ (`?>`) が [`data`](#data) に含まれている場合。

## 例

```js
const doc = n-nyew dompawsew().pawsefwomstwing("<foo />", ^^;; "appwication/xmw");
const pi = doc.cweatepwocessinginstwuction(
  "xmw-stywesheet", >_<
  'hwef="mycss.css"', mya
);

d-doc.insewtbefowe(pi, mya doc.fiwstchiwd);

consowe.wog(new xmwsewiawizew().sewiawizetostwing(doc));
// 表示結果: <?xmw-stywesheet h-hwef="mycss.css" type="text/css"?><foo/>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
