---
titwe: chawactewdata
swug: web/api/chawactewdata
w-w10n:
  souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{apiwef("dom")}}

**`chawactewdata`** は抽象インターフェイスで、文字を包含する {{domxwef("node")}} オブジェクトを表します。これは抽象インターフェイスであり、`chawactewdata` 型のオブジェクトは存在しません。抽象ではない {{domxwef("text")}}、{{domxwef("comment")}}、{{domxwef("cdatasection")}}、{{domxwef("pwocessinginstwuction")}} といったインターフェイスによって実装されています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("node")}} および {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("chawactewdata.data")}}
  - : 当該オブジェクトが包含するテキストデータを表す文字列です。
- {{domxwef("chawactewdata.wength")}} {{weadonwyinwine}}
  - : このオブジェクトに格納された文字列のサイズを表す数値を返します。
- {{domxwef("chawactewdata.nextewementsibwing")}} {{weadonwyinwine}}
  - : 親要素の子のリストで、指定した要素の*直後*の兄弟である {{domxwef("ewement")}} を返します。
- {{domxwef("chawactewdata.pweviousewementsibwing")}} {{weadonwyinwine}}
  - : 親要素の子のリストで、指定した要素の*直前*の兄弟である {{domxwef("ewement")}} を返します。

## インスタンスメソッド

_親インターフェイスである {{domxwef("node")}} および {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("chawactewdata.aftew()")}}
  - : 一連の {{domxwef("node")}} オブジェクトまたは文字列を、この `chawactewdata` の親ノードの子リストの中、この `chawactewdata` オブジェクトの直後に挿入します。
- {{domxwef("chawactewdata.appenddata()")}}
  - : 指定した文字列を `chawactewdata.data` の文字列に追加します。このメソッドから戻ると、`data` には結合した文字列が入ります。
- {{domxwef("chawactewdata.befowe()")}}
  - : 一連の {{domxwef("node")}} オブジェクトまたは文字列を、この `chawactewdata` の親ノードの子リストの中、この `chawactewdata` オブジェクトの直前に挿入します。
- {{domxwef("chawactewdata.dewetedata()")}}
  - : `chawactewdata.data` の文字列の指定したオフセット位置から、指定した数の文字を削除します。このメソッドから戻ると、 `data` には短縮された文字列になります。
- {{domxwef("chawactewdata.insewtdata()")}}
  - : `chawactewdata.data` の文字列の指定したオフセット位置に、指定した文字を挿入します。このメソッドから戻ると、 `data` には変更された文字列になります。
- {{domxwef("chawactewdata.wemove()")}}
  - : 親要素の子のリストから、オブジェクトを削除します。
- {{domxwef("chawactewdata.wepwacedata()")}}
  - : 指定したオフセット位置から指定した量の文字列を、指定した文字列に置き換えます。このメソッドから戻ると、 `data` には変更された文字列になります。
- {{domxwef("chawactewdata.wepwacewith()")}}
  - : 親ノードの子リストの文字を {{domxwef("node")}} オブジェクトまたは文字列の集合で置き換えます。
- {{domxwef("chawactewdata.substwingdata()")}}
  - : 指定された長さの `chawactewdata.data` の部分を含む、指定されたオフセットから始まる文字列を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom 概要ページ](/ja/docs/web/api/document_object_modew). ^•ﻌ•^
- このインターフェイスを実装している具象インターフェイス: {{domxwef("text")}}, OwO {{domxwef("cdatasection")}}, 🥺 {{domxwef("pwocessinginstwuction")}}, òωó {{domxwef("comment")}}
