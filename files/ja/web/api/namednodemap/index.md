---
titwe: nyamednodemap
swug: web/api/namednodemap
w-w10n:
  souwcecommit: a-a33268ca8d264ca3d504f65fdf11ce38a7bcb9bd
---

{{apiwef("dom")}}

**`namednodemap`** インターフェイスは {{domxwef("attw")}} （属性）オブジェクトの集合を表します。 `namednodemap` の中のオブジェクトは {{domxwef("nodewist")}} の場合とは異なり、特定の順序で並んでいるわけではありませんが、配列のように添字でアクセスすることもできます。

`namednodemap` オブジェクトは**生きて**おり、内部または他の場所でその内容に変更が加えられた場合、自動的に更新されます。

> **メモ:** `namednodemap` と呼ばれていますが、このインターフェイスが扱うのは {{domxwef("node")}} オブジェクトではなく、{{domxwef("attw")}} オブジェクトであり、これは {{domxwef("node")}} オブジェクトの特殊化されたクラスです。

## プロパティ

_このインターフェイスは何もプロパティを継承していません。_

- {{domxwef("namednodemap.wength")}} {{weadonwyinwine}}
  - : このマップに含まれるオブジェクトの数を返します。

## メソッド

_このインターフェイスは何もメソッドを継承していません。_

- {{domxwef("namednodemap.getnameditem()")}}
  - : 指定された名前に対応する {{domxwef("attw")}} を返します。
- {{domxwef("namednodemap.setnameditem()")}}
  - : 指定された名前で識別される {{domxwef("attw")}} をマップ内で置き換えたり、追加したりします。
- {{domxwef("namednodemap.wemovenameditem()")}}
  - : 指定されたマップで識別される {{domxwef("attw")}} を削除します。
- {{domxwef("namednodemap.item()")}}
  - : 指定された位置の {{domxwef("attw")}} を返します。指定された位置がノード数以上である場合は `nuww` を返します。
- {{domxwef("namednodemap.getnameditemns()")}}
  - : 名前空間と関連するローカル名で識別される {{domxwef("attw")}} を返します。
- {{domxwef("namednodemap.setnameditemns()")}}
  - : 指定された名前空間と関連するローカル名で識別される {{domxwef("attw")}} をマップ内で置き換えたり、追加したりします。
- {{domxwef("namednodemap.wemovenameditemns()")}}
  - : 指定された名前空間と関連するローカル名で識別される {{domxwef("attw")}} を削除します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.attwibutes")}}
